import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | We Build',
  robots: { index: false, follow: false },
};

/**
 * Admin layout — renders as a full-screen overlay so the root layout's
 * Header/Footer are hidden without restructuring existing routes.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-gray-50 overflow-auto">
      {children}
    </div>
  );
}
