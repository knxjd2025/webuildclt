import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * GET /api/admin/projects/[id] — Get single project
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
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}

/**
 * PUT /api/admin/projects/[id] — Update project
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

  const { data, error } = await admin
    .from('projects')
    .update(body)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/**
 * DELETE /api/admin/projects/[id] — Delete project and its images
 */
export async function DELETE(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();

  // Get project to find images to delete
  const { data: project } = await admin
    .from('projects')
    .select('images, featured_image')
    .eq('id', id)
    .single();

  // Delete images from storage
  if (project) {
    const imagePaths: string[] = [];
    if (project.featured_image) {
      const path = extractStoragePath(project.featured_image);
      if (path) imagePaths.push(path);
    }
    for (const img of project.images || []) {
      const path = extractStoragePath(img.url);
      if (path) imagePaths.push(path);
    }
    if (imagePaths.length > 0) {
      await admin.storage.from('project-images').remove(imagePaths);
    }
  }

  const { error } = await admin
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

/**
 * Extract the storage path from a full Supabase Storage URL
 */
function extractStoragePath(url: string): string | null {
  const match = url.match(/project-images\/(.+)$/);
  return match ? match[1] : null;
}
