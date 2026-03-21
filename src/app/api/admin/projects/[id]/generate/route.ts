import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';
import { generateProjectContent } from '@/lib/ai-content';

type RouteContext = { params: Promise<{ id: string }> };

/**
 * POST /api/admin/projects/[id]/generate — Generate AI content for a project
 */
export async function POST(_request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const admin = createAdminClient();

  // Fetch the project
  const { data: project, error: fetchError } = await admin
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

  if (fetchError || !project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  try {
    const generated = await generateProjectContent({
      title: project.title,
      short_description: project.short_description,
      category: project.category,
      service_type: project.service_type,
      address: project.address,
      city: project.city,
      state: project.state,
      neighborhood: project.neighborhood,
      square_footage: project.square_footage,
      completion_date: project.completion_date,
    });

    // Update project with generated content
    const { data: updated, error: updateError } = await admin
      .from('projects')
      .update({
        ai_content: generated.content,
        ai_meta_title: generated.metaTitle,
        ai_meta_description: generated.metaDescription,
      })
      .eq('id', id)
      .select()
      .single();

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    return NextResponse.json(updated);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'AI generation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Allow longer execution for AI generation on Vercel
export const maxDuration = 60;
