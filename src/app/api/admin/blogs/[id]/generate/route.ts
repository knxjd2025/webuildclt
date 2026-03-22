import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * POST /api/admin/blogs/[id]/generate — Trigger AI blog generation
 * Pipeline: DataForSEO → Kimi K2 → Claude → (optional) DALL-E images
 */
export async function POST(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();

  // Fetch the blog record
  const { data: blog, error: fetchError } = await admin
    .from('blogs')
    .select('*, blog_media(*)')
    .eq('id', id)
    .single();

  if (fetchError || !blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  // Mark as generating
  await admin
    .from('blogs')
    .update({ status: 'generating', updated_at: new Date().toISOString() })
    .eq('id', id);

  try {
    const { generateBlogPost } = await import('@/lib/ai/blog-pipeline');

    // Get existing keywords to avoid duplicates
    const { data: existingBlogs } = await admin
      .from('blogs')
      .select('primary_keyword, title')
      .neq('id', id);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingKeywords = (existingBlogs ?? []).map(
      (b: any) => b.primary_keyword || b.title
    );

    const generated = await generateBlogPost({
      description: blog.topic || blog.title,
      category: blog.category,
      categorySlug: blog.category_slug,
      existingKeywords,
    });

    // Check if user already uploaded images
    const hasUserImages = (blog.blog_media ?? []).length > 0;

    // Generate AI images if user didn't provide any
    let featuredImage = blog.featured_image;
    if (!hasUserImages) {
      try {
        const { generateBlogImages, uploadGeneratedImage } = await import(
          '@/lib/ai/image-generator'
        );

        console.log('[generate] No user images — generating AI images...');
        const aiImages = await generateBlogImages(
          generated.title,
          blog.category_slug,
          2
        );

        // Upload each generated image to Supabase and save as blog_media
        for (let i = 0; i < aiImages.length; i++) {
          const uploaded = await uploadGeneratedImage(
            aiImages[i].url,
            aiImages[i].alt
          );

          if (uploaded) {
            await admin.from('blog_media').insert({
              blog_id: id,
              url: uploaded.url,
              storage_path: uploaded.path,
              alt_text: uploaded.alt,
              media_type: 'image',
              sort_order: i,
            });

            // First image becomes featured
            if (i === 0) {
              featuredImage = uploaded.url;
            }
          }
        }
      } catch (imgError) {
        console.error('[generate] Image generation failed:', imgError);
        // Continue without images — not a blocker
      }
    }

    // Save generated content and move to review
    const { data: updated, error: updateError } = await admin
      .from('blogs')
      .update({
        title: generated.title,
        slug: generated.slug,
        content: generated.content,
        excerpt: generated.excerpt,
        meta_title: generated.metaTitle,
        meta_description: generated.metaDescription,
        primary_keyword: generated.primaryKeyword,
        secondary_keywords: generated.secondaryKeywords,
        word_count: generated.wordCount,
        featured_image: featuredImage,
        status: 'review',
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      throw new Error(updateError.message);
    }

    return NextResponse.json(updated);
  } catch (err) {
    // Revert status on failure
    await admin
      .from('blogs')
      .update({ status: 'draft', updated_at: new Date().toISOString() })
      .eq('id', id);

    const message = err instanceof Error ? err.message : 'Generation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
