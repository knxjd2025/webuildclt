import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient, createServerClient } from '@/lib/supabase';

/**
 * GET /api/admin/banner — Get current banner CTA settings (public)
 */
export async function GET() {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('banner_cta')
    .select('*')
    .limit(1)
    .single();

  if (error || !data) {
    return NextResponse.json({
      enabled: false,
      text: '',
      link_url: '',
      link_label: '',
      bg_color: '#1a1a2e',
      text_color: '#ffffff',
      dismissible: true,
    });
  }

  return NextResponse.json(data);
}

/**
 * PUT /api/admin/banner — Update banner CTA settings (admin only)
 */
export async function PUT(request: NextRequest) {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const admin = createAdminClient();

  // Get existing row
  const { data: existing } = await admin
    .from('banner_cta')
    .select('id')
    .limit(1)
    .single();

  const updates = {
    enabled: body.enabled ?? false,
    text: body.text ?? '',
    link_url: body.link_url ?? '',
    link_label: body.link_label ?? '',
    bg_color: body.bg_color ?? '#1a1a2e',
    text_color: body.text_color ?? '#ffffff',
    dismissible: body.dismissible ?? true,
    updated_at: new Date().toISOString(),
  };

  let result;
  if (existing) {
    result = await admin
      .from('banner_cta')
      .update(updates)
      .eq('id', existing.id)
      .select()
      .single();
  } else {
    result = await admin
      .from('banner_cta')
      .insert(updates)
      .select()
      .single();
  }

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json(result.data);
}
