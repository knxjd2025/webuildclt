import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

/**
 * Replace [IMAGE_PLACEHOLDER_N] markers in HTML content with actual image tags.
 * If fewer images than placeholders, removes remaining placeholders.
 */
function insertImagesIntoContent(
  content: string,
  images: Array<{ url: string; alt: string }>
): string {
  let result = content;
  let imageIndex = 0;

  // Replace each placeholder with an image tag or remove it
  result = result.replace(
    /\[IMAGE_PLACEHOLDER_(\d+)\]/g,
    (_match) => {
      if (imageIndex < images.length) {
        const img = images[imageIndex];
        imageIndex++;
        return `<figure class="blog-image"><img src="${img.url}" alt="${img.alt}" loading="lazy" /><figcaption>${img.alt}</figcaption></figure>`;
      }
      return ''; // Remove unfilled placeholders
    }
  );

  return result;
}

/**
 * Core blog generation logic shared by cron (GET) and manual trigger (POST).
 * Pipeline: LSI keyword → Kimi K2 research → Kimi K2 draft → DataForSEO → Claude refine → Gemini images → publish
 */
async function runBlogGeneration(): Promise<NextResponse> {
  const admin = createAdminClient();

  try {
    const { findNextLSIKeyword } = await import('@/lib/ai/lsi-keyword-finder');
    const { generateBlogPost } = await import('@/lib/ai/blog-pipeline');

    // Get existing keywords/topics to avoid duplicates
    const { data: existingBlogs } = await admin
      .from('blogs')
      .select('title, topic, category, primary_keyword');

    const existingKeywords = (existingBlogs ?? []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (b: any) => b.primary_keyword || b.title,
    );

    // Find the next LSI keyword to target
    const keyword = await findNextLSIKeyword(existingKeywords);

    // Generate the blog post content (includes SEO/AEO/LLMO optimization)
    const generated = await generateBlogPost({
      description: keyword.keyword,
      category: keyword.category,
      categorySlug: keyword.categorySlug,
      existingKeywords,
    });

    // Calculate image count: 1 per 500 words, min 2, max 8
    const imageCount = Math.min(8, Math.max(2, Math.floor(generated.wordCount / 500)));
    console.log(`[weekly-blog] Generating ${imageCount} images for ${generated.wordCount} word post...`);

    // Generate images via Gemini
    let finalContent = generated.content;
    let featuredImage: string | null = null;
    const blogMediaEntries: Array<{ url: string; path: string; alt: string }> = [];

    try {
      const { generateBlogImages } = await import('@/lib/ai/image-generator');

      const images = await generateBlogImages(
        generated.title,
        keyword.categorySlug,
        imageCount
      );

      if (images.length > 0) {
        // Insert images into content at placeholder positions
        finalContent = insertImagesIntoContent(generated.content, images);
        featuredImage = images[0].url;

        // Track all images for blog_media table
        for (const img of images) {
          blogMediaEntries.push({ url: img.url, path: '', alt: img.alt });
        }
      }
    } catch (imgError) {
      console.error('[weekly-blog] Image generation failed (continuing without images):', imgError);
      // Remove any remaining placeholders
      finalContent = generated.content.replace(/\[IMAGE_PLACEHOLDER_\d+\]/g, '');
    }

    // Save to database as published
    const { data: blog, error: insertError } = await admin
      .from('blogs')
      .insert({
        title: generated.title,
        slug: generated.slug,
        content: finalContent,
        excerpt: generated.excerpt,
        meta_title: generated.metaTitle,
        meta_description: generated.metaDescription,
        primary_keyword: generated.primaryKeyword,
        secondary_keywords: generated.secondaryKeywords,
        word_count: generated.wordCount,
        featured_image: featuredImage,
        category: keyword.category,
        category_slug: keyword.categorySlug,
        auto_generated: true,
        generation_source: 'auto_lsi',
        status: 'published',
        published_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      throw new Error(insertError.message);
    }

    // Save images to blog_media table
    for (let i = 0; i < blogMediaEntries.length; i++) {
      await admin.from('blog_media').insert({
        blog_id: blog.id,
        url: blogMediaEntries[i].url,
        storage_path: blogMediaEntries[i].path,
        alt_text: blogMediaEntries[i].alt,
        media_type: 'image',
        sort_order: i,
      });
    }

    // Log the auto-generation event
    await admin.from('auto_blog_log').insert({
      blog_id: blog.id,
      type: 'weekly_blog',
      keyword: keyword.keyword,
      status: 'completed',
      metadata: {
        wordCount: generated.wordCount,
        imageCount: blogMediaEntries.length,
        primaryKeyword: generated.primaryKeyword,
      },
    });

    // Trigger revalidation
    const secret = process.env.REVALIDATION_SECRET;
    if (secret && blog.slug) {
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      await Promise.allSettled([
        fetch(`${baseUrl}/api/revalidate?secret=${secret}&path=/blog`),
        fetch(
          `${baseUrl}/api/revalidate?secret=${secret}&path=/blog/${blog.slug}`,
        ),
      ]);
    }

    return NextResponse.json({
      success: true,
      blog_id: blog.id,
      title: blog.title,
      slug: blog.slug,
      wordCount: generated.wordCount,
      imageCount: blogMediaEntries.length,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';

    // Log failure
    await admin
      .from('auto_blog_log')
      .insert({ type: 'weekly_blog', keyword: 'unknown', status: 'failed', error_message: message })
      .then(() => {});

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}

/**
 * GET /api/cron/weekly-blog — Vercel Cron handler (requires CRON_SECRET)
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return runBlogGeneration();
}

/**
 * POST /api/cron/weekly-blog — Manual trigger from admin automation page
 */
export async function POST() {
  return runBlogGeneration();
}
