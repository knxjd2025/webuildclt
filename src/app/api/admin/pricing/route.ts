import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient, createServerClient } from '@/lib/supabase';

/**
 * GET /api/admin/pricing — Get all pricing items (public)
 */
export async function GET() {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from('pricing')
    .select('*')
    .order('category')
    .order('label');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

/**
 * PUT /api/admin/pricing — Update a pricing item (admin only)
 * Body: { item_key, price_min, price_max, label?, unit? }
 */
export async function PUT(request: NextRequest) {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  if (!body.item_key) {
    return NextResponse.json({ error: 'item_key is required' }, { status: 400 });
  }

  const admin = createAdminClient();

  const updates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  if (body.price_min !== undefined) updates.price_min = body.price_min;
  if (body.price_max !== undefined) updates.price_max = body.price_max;
  if (body.label !== undefined) updates.label = body.label;
  if (body.unit !== undefined) updates.unit = body.unit;

  const { data, error } = await admin
    .from('pricing')
    .update(updates)
    .eq('item_key', body.item_key)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
