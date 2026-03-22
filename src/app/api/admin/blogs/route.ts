import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';
import { slugify } from '@/lib/slugify';

const PAGE_SIZE = 20;

/**
 * GET /api/admin/blogs — List blogs with optional filters and pagination
 */
export async function GET(request: NextRequest) {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();
  const { searchParams } = request.nextUrl;
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const offset = (page - 1) * PAGE_SIZE;

  // Build query — select blogs with a count of related media items
  let query = admin
    .from('blogs')
    .select('*, blog_media(count)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1);

  if (status) {
    query = query.eq('status', status);
  }
  if (category) {
    query = query.eq('category_slug', category);
  }

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Flatten the nested media count for convenience
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogs = (data ?? []).map((blog: any) => {
    const mediaCount =
      Array.isArray(blog.blog_media) && blog.blog_media.length > 0
        ? (blog.blog_media[0] as { count: number }).count
        : 0;

    const { blog_media: _media, ...rest } = blog;
    return { ...rest, media_count: mediaCount };
  });

  return NextResponse.json({
    blogs,
    page,
    page_size: PAGE_SIZE,
    total: count ?? 0,
  });
}

/**
 * POST /api/admin/blogs — Create a new blog
 */
export async function POST(request: NextRequest) {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title, category, categorySlug, topic, status: blogStatus } = body;

  if (!title || !category || !categorySlug) {
    return NextResponse.json(
      { error: 'title, category, and categorySlug are required' },
      { status: 400 },
    );
  }

  const admin = createAdminClient();
  const slug = slugify(title);

  // Ensure slug uniqueness
  const { data: existing } = await admin
    .from('blogs')
    .select('id')
    .eq('slug', slug)
    .single();

  const finalSlug = existing
    ? `${slug}-${Date.now().toString(36)}`
    : slug;

  const { data, error } = await admin
    .from('blogs')
    .insert({
      title,
      slug: finalSlug,
      category,
      category_slug: categorySlug,
      topic: topic ?? null,
      status: blogStatus ?? 'draft',
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
