/**
 * Supabase server client utilities
 * Only use in Server Components, API routes, and server actions
 */

import { createServerClient as createServer } from '@supabase/ssr';
import { cookies } from 'next/headers';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function createServerClient() {
  const cookieStore = await cookies();

  return createServer(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Called from Server Component — ignore
        }
      },
    },
  });
}

/**
 * Admin client using service role key — bypasses RLS.
 * Only use in API routes, never expose to the browser.
 */
export function createAdminClient() {
  const { createClient } = require('@supabase/supabase-js');
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!);
}
