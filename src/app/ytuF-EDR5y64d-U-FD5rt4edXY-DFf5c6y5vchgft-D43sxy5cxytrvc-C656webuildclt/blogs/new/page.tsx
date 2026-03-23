'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AdminShell } from '@/components/admin/AdminShell';
import { BlogEditor, type BlogFormData } from '@/components/admin/BlogEditor';

export default function NewBlogPage() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSave = useCallback(
    async (data: BlogFormData) => {
      const res = await fetch('/api/admin/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title || data.topic || 'Untitled',
          category: data.category,
          categorySlug: data.category,
          topic: data.topic,
          status: data.status,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Save failed' }));
        alert(err.message ?? 'Failed to save blog post');
        return;
      }

      const created = await res.json();
      router.push(`/ytuF-EDR5y64d-U-FD5rt4edXY-DFf5c6y5vchgft-D43sxy5cxytrvc-C656webuildclt/blogs/${created.id}/edit`);
    },
    [router]
  );

  const handleGenerate = useCallback(
    async (data: BlogFormData) => {
      const description = data.topic || '';
      const category = data.category || 'commercial-construction';

      if (!description.trim()) {
        alert('Please enter a description of what you want to write about.');
        return;
      }

      setIsGenerating(true);
      try {
        // Create the blog record with the description
        const createRes = await fetch('/api/admin/blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: description.slice(0, 80),
            category,
            categorySlug: category,
            topic: description,
            status: 'generating',
          }),
        });

        if (!createRes.ok) {
          const err = await createRes.json().catch(() => ({}));
          alert(err.error ?? 'Failed to create blog post');
          return;
        }

        const created = await createRes.json();

        // Fire off generation in background — don't await it
        fetch(`/api/admin/blogs/${created.id}/generate`, {
          method: 'POST',
        }).catch(() => {
          // Generation errors are handled by the edit page polling
        });

        // Navigate immediately — edit page will poll for completion
        router.push(`/ytuF-EDR5y64d-U-FD5rt4edXY-DFf5c6y5vchgft-D43sxy5cxytrvc-C656webuildclt/blogs/${created.id}/edit`);
      } finally {
        setIsGenerating(false);
      }
    },
    [router]
  );

  return (
    <AdminShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">New Blog Post</h1>
        <p className="text-gray-500 mt-1">
          Describe your topic, drop images, and let AI write the blog.
        </p>
      </div>

      <BlogEditor
        blog={null}
        onSave={handleSave}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />
    </AdminShell>
  );
}
