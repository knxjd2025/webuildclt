import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

/**
 * GET /api/admin/automation/status — Return automation status (last run, next run)
 */
export async function GET() {
  const admin = createAdminClient();

  // Get the most recent completed log entry
  const { data: lastRun } = await admin
    .from('auto_blog_log')
    .select('created_at')
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  // Calculate next Monday 9am UTC
  const now = new Date();
  const day = now.getUTCDay();
  const daysUntilMonday = day === 0 ? 1 : day === 1 ? 7 : 8 - day;
  const nextRun = new Date(now);
  nextRun.setUTCDate(now.getUTCDate() + daysUntilMonday);
  nextRun.setUTCHours(9, 0, 0, 0);

  return NextResponse.json({
    last_run: lastRun?.created_at ?? null,
    next_run: nextRun.toISOString(),
  });
}
