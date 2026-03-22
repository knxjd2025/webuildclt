import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

/**
 * GET /api/admin/automation/logs — Return recent auto-blog log entries
 */
export async function GET() {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from('auto_blog_log')
    .select('id, type, keyword, status, created_at')
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json(data ?? []);
}
