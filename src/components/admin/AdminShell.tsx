'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createBrowserClient } from '@/lib/supabase-browser';
import { ADMIN_PATH } from '@/lib/admin-path';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, FolderOpen, FileText, Bot, Megaphone, DollarSign, LogOut } from 'lucide-react';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    router.push(`${ADMIN_PATH}/login`);
    router.refresh();
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-lg font-bold">We Build Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href={ADMIN_PATH}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href={`${ADMIN_PATH}/projects`}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <FolderOpen className="h-5 w-5" />
            Projects
          </Link>
          <Link
            href={`${ADMIN_PATH}/blogs`}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <FileText className="h-5 w-5" />
            Blogs
          </Link>
          <Link
            href={`${ADMIN_PATH}/automation`}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <Bot className="h-5 w-5" />
            Automation
          </Link>
          <Link
            href={`${ADMIN_PATH}/pricing`}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <DollarSign className="h-5 w-5" />
            Pricing
          </Link>
          <Link
            href={`${ADMIN_PATH}/banner-cta`}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            <Megaphone className="h-5 w-5" />
            Banner CTA
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
