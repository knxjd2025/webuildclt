import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * POST /api/admin/blogs/[id]/publish — Publish a blog and trigger revalidation
 */
export async function POST(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();

  const { data: blog, error } = await admin
    .from('blogs')
    .update({
      status: 'published',
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Trigger ISR revalidation for blog listing and the individual post
  const secret = process.env.REVALIDATION_SECRET;
  if (secret && blog?.slug) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const paths = [`/blog`, `/blog/${blog.slug}`];

    await Promise.allSettled(
      paths.map((path) =>
        fetch(`${baseUrl}/api/revalidate?secret=${secret}&path=${path}`)
      ),
    );
  }

  return NextResponse.json({ success: true, blog });
}
