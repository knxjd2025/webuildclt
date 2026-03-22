import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * GET /api/admin/blogs/[id] — Get single blog with its media
 */
export async function GET(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from('blogs')
    .select('*, blog_media(*)')
    .eq('id', id)
    .order('sort_order', { referencedTable: 'blog_media', ascending: true })
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Rename nested key for clarity
  const { blog_media, ...blog } = data;
  return NextResponse.json({ ...blog, media: blog_media ?? [] });
}

/**
 * PUT /api/admin/blogs/[id] — Update blog fields
 */
export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const admin = createAdminClient();

  const updates: Record<string, unknown> = {
    ...body,
    updated_at: new Date().toISOString(),
  };

  // Auto-set published_at when transitioning to published
  if (body.status === 'published') {
    // Only set if not already set
    const { data: current } = await admin
      .from('blogs')
      .select('published_at')
      .eq('id', id)
      .single();

    if (!current?.published_at) {
      updates.published_at = new Date().toISOString();
    }
  }

  const { data, error } = await admin
    .from('blogs')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/**
 * DELETE /api/admin/blogs/[id] — Delete blog (cascade deletes media)
 */
export async function DELETE(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();
  const { error } = await admin
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
