import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { slugify } from '@/lib/slugify';
import { projectFormSchema } from '@/types/project';

/**
 * GET /api/admin/projects — List all projects (admin)
 */
export async function GET() {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Use service role to bypass RLS and see drafts too
  const { createAdminClient } = await import('@/lib/supabase');
  const admin = createAdminClient();

  const { data, error } = await admin
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/**
 * POST /api/admin/projects — Create a new project
 */
export async function POST(request: NextRequest) {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const parsed = projectFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { createAdminClient } = await import('@/lib/supabase');
  const admin = createAdminClient();

  const slug = slugify(parsed.data.title);

  // Check slug uniqueness
  const { data: existing } = await admin
    .from('projects')
    .select('id')
    .eq('slug', slug)
    .single();

  const finalSlug = existing
    ? `${slug}-${Date.now().toString(36)}`
    : slug;

  const { data, error } = await admin
    .from('projects')
    .insert({
      ...parsed.data,
      slug: finalSlug,
      status: 'draft',
      images: [],
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
