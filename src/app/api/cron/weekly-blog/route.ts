import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

/**
 * Core blog generation logic shared by cron (GET) and manual trigger (POST).
 */
async function runBlogGeneration(): Promise<NextResponse> {
  const admin = createAdminClient();

  try {
    const { findNextLSIKeyword } = await import('@/lib/ai/lsi-keyword-finder');
    const { generateBlogPost } = await import('@/lib/ai/blog-pipeline');

    // Get existing keywords/topics to avoid duplicates
    const { data: existingBlogs } = await admin
      .from('blogs')
      .select('title, topic, category');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingKeywords = (existingBlogs ?? []).map(
      (b: any) => b.primary_keyword || b.title,
    );

    // Find the next LSI keyword to target
    const keyword = await findNextLSIKeyword(existingKeywords);

    // Generate the blog post content
    const generated = await generateBlogPost({
      description: keyword.keyword,
      category: keyword.category,
      categorySlug: keyword.categorySlug,
      existingKeywords,
    });

    // Save to database as published
    const { data: blog, error: insertError } = await admin
      .from('blogs')
      .insert({
        title: generated.title,
        slug: generated.slug,
        content: generated.content,
        excerpt: generated.excerpt,
        meta_title: generated.metaTitle,
        meta_description: generated.metaDescription,
        primary_keyword: generated.primaryKeyword,
        secondary_keywords: generated.secondaryKeywords,
        word_count: generated.wordCount,
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

    // Log the auto-generation event
    await admin.from('auto_blog_log').insert({
      blog_id: blog.id,
      type: 'weekly_blog',
      keyword: keyword.keyword,
      status: 'completed',
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
