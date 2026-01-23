import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * On-demand revalidation endpoint for WordPress webhooks
 *
 * Set up a webhook in WordPress to call this endpoint when content changes.
 * The webhook should include:
 * - secret: Your REVALIDATION_SECRET
 * - path: The path to revalidate (e.g., "/portfolio" or "/news/my-post")
 * - tag: Optional cache tag to revalidate (e.g., "posts" or "portfolio")
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, path, tag } = body;

    // Validate the secret
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        { error: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Revalidate by tag if provided
    if (tag) {
      await revalidateTag(tag, 'page');
      console.log(`Revalidated tag: ${tag}`);
    }

    // Revalidate by path if provided
    if (path) {
      revalidatePath(path);
      console.log(`Revalidated path: ${path}`);
    }

    // If neither tag nor path provided, revalidate common pages
    if (!tag && !path) {
      revalidatePath('/');
      revalidatePath('/portfolio');
      revalidatePath('/news');
      console.log('Revalidated all common pages');
    }

    return NextResponse.json({
      revalidated: true,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Revalidation failed' },
      { status: 500 }
    );
  }
}

// Also support GET for simple revalidation
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');
  const tag = searchParams.get('tag');

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret' },
      { status: 401 }
    );
  }

  if (tag) {
    await revalidateTag(tag, 'page');
  }

  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    timestamp: Date.now(),
  });
}
