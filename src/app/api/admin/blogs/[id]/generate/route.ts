import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * POST /api/admin/blogs/[id]/generate — Trigger AI blog generation
 * Pipeline: DataForSEO → Kimi K2 → Claude → Gemini Imagen 4 images
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
    let contentWithImages = generated.content;

    if (!hasUserImages) {
      try {
        const { generateBlogImages, uploadGeneratedImage } = await import(
          '@/lib/ai/image-generator'
        );

        // Use dynamic image count from pipeline (based on word count)
        const imageCount = generated.imageCount ?? 2;
        console.log(`[generate] No user images — generating ${imageCount} AI images via Gemini...`);

        const aiImages = await generateBlogImages(
          generated.title,
          blog.category_slug,
          imageCount
        );

        // Save each generated image as blog_media
        const uploadedUrls: string[] = [];
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

            uploadedUrls.push(uploaded.url);

            // First image becomes featured
            if (i === 0) {
              featuredImage = uploaded.url;
            }
          }
        }

        // Replace [IMAGE_PLACEHOLDER_N] with actual image tags
        for (let i = 0; i < uploadedUrls.length; i++) {
          const placeholder = `[IMAGE_PLACEHOLDER_${i + 1}]`;
          const imgTag = `<figure class="blog-image"><img src="${uploadedUrls[i]}" alt="${aiImages[i]?.alt ?? `${generated.title} - image ${i + 1}`}" loading="lazy" /><figcaption>${aiImages[i]?.alt ?? ''}</figcaption></figure>`;
          contentWithImages = contentWithImages.replace(placeholder, imgTag);
        }

        // Remove any remaining unfilled placeholders
        contentWithImages = contentWithImages.replace(
          /\[IMAGE_PLACEHOLDER_\d+\]/g,
          ''
        );

        console.log(`[generate] Replaced ${uploadedUrls.length} image placeholders, removed remaining`);
      } catch (imgError) {
        console.error('[generate] Image generation failed:', imgError);
        // Remove all placeholders if image generation failed entirely
        contentWithImages = contentWithImages.replace(
          /\[IMAGE_PLACEHOLDER_\d+\]/g,
          ''
        );
      }
    } else {
      // User has images — just remove any placeholders
      contentWithImages = contentWithImages.replace(
        /\[IMAGE_PLACEHOLDER_\d+\]/g,
        ''
      );
    }

    // Save generated content and move to review
    const { data: updated, error: updateError } = await admin
      .from('blogs')
      .update({
        title: generated.title,
        slug: generated.slug,
        content: contentWithImages,
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
