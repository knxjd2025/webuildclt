'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'next/navigation';
import { AdminShell } from '@/components/admin/AdminShell';
import {
  BlogEditor,
  type Blog,
  type BlogFormData,
} from '@/components/admin/BlogEditor';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch blog and start polling if it's in generating status
  const fetchBlog = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/blogs/${id}`);
      if (!res.ok) {
        setError('Blog post not found');
        return null;
      }
      const data = await res.json();
      setBlog(data);
      return data;
    } catch {
      setError('Failed to load blog post');
      return null;
    }
  }, [id]);

  useEffect(() => {
    async function init() {
      const data = await fetchBlog();
      setLoading(false);

      // If the blog is generating, start polling
      if (data?.status === 'generating') {
        setIsGenerating(true);
        pollRef.current = setInterval(async () => {
          const updated = await fetchBlog();
          if (updated && updated.status !== 'generating') {
            setIsGenerating(false);
            if (pollRef.current) {
              clearInterval(pollRef.current);
              pollRef.current = null;
            }
          }
        }, 5000);
      }
    }
    init();

    return () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
      }
    };
  }, [id, fetchBlog]);

  const handleSave = useCallback(
    async (data: BlogFormData) => {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res
          .json()
          .catch(() => ({ message: 'Save failed' }));
        alert(err.message ?? 'Failed to save blog post');
        return;
      }

      const updated = await res.json();
      setBlog(updated);
    },
    [id]
  );

  const handleGenerate = useCallback(
    async (data: BlogFormData) => {
      setIsGenerating(true);
      try {
        // Save description + category before generating
        await fetch(`/api/admin/blogs/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: data.topic,
            category: data.category,
            category_slug: data.category,
            status: 'generating',
          }),
        });

        // Fire off generation — don't await the full response
        fetch(`/api/admin/blogs/${id}/generate`, {
          method: 'POST',
        }).catch(() => {});

        // Poll for completion
        pollRef.current = setInterval(async () => {
          const updated = await fetchBlog();
          if (updated && updated.status !== 'generating') {
            setIsGenerating(false);
            if (pollRef.current) {
              clearInterval(pollRef.current);
              pollRef.current = null;
            }
          }
        }, 5000);
      } catch {
        setIsGenerating(false);
      }
    },
    [id, fetchBlog]
  );

  if (loading) {
    return (
      <AdminShell>
        <div className="text-center py-12 text-muted-foreground">Loading...</div>
      </AdminShell>
    );
  }

  if (error) {
    return (
      <AdminShell>
        <div className="text-center py-12 text-red-500">{error}</div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Edit Blog Post</h1>
        <p className="text-muted-foreground mt-1">
          {isGenerating
            ? 'AI is generating your blog — this takes about 60 seconds...'
            : 'Update your blog post content and settings'}
        </p>
      </div>

      {isGenerating && (
        <div className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-blue-50 border border-blue-200 text-blue-700">
          <Loader2 className="h-5 w-5 animate-spin" />
          <div>
            <p className="font-medium">AI is writing your blog...</p>
            <p className="text-sm">
              DataForSEO keywords → Kimi K2 draft → Claude refinement. This
              page will update automatically.
            </p>
          </div>
        </div>
      )}

      <BlogEditor
        blog={blog}
        onSave={handleSave}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />
    </AdminShell>
  );
}
