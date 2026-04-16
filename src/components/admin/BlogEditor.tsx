'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Loader2,
  Sparkles,
  Save,
  Send,
  ChevronDown,
  ChevronUp,
  Eye,
  Code,
  ImageIcon,
} from 'lucide-react';
import {
  MediaUploader,
  type UploadedFile,
} from '@/components/admin/MediaUploader';
import { RichBlogEditor } from '@/components/admin/RichBlogEditor';

export interface BlogFormData {
  title: string;
  category: string;
  topic: string;
  content: string;
  excerpt: string;
  meta_title: string;
  meta_description: string;
  slug: string;
  status: string;
  media: UploadedFile[];
}

export interface Blog extends BlogFormData {
  id: string;
  word_count?: number;
  is_auto_generated?: boolean;
  featured_image?: string;
  created_at?: string;
  updated_at?: string;
}

interface BlogEditorProps {
  blog: Blog | null;
  onSave: (data: BlogFormData) => Promise<void>;
  onGenerate: (data: BlogFormData) => Promise<void>;
  isGenerating: boolean;
}

const CATEGORIES = [
  { value: 'commercial-construction', label: 'Commercial Construction' },
  { value: 'commercial-upfits', label: 'Commercial Upfits' },
  { value: 'residential', label: 'Residential' },
  { value: 'roof-coating', label: 'Roof Coating' },
  { value: 'construction-tips', label: 'Construction Tips' },
  { value: 'green-building', label: 'Green Building' },
  { value: 'charlotte-area', label: 'Charlotte Area' },
  { value: 'company-news', label: 'Company News' },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
}

function countWords(text: string): number {
  const stripped = stripHtmlTags(text).trim();
  if (stripped.length === 0) return 0;
  return stripped.split(/\s+/).length;
}

export function BlogEditor({
  blog,
  onSave,
  onGenerate,
  isGenerating,
}: BlogEditorProps) {
  // User inputs
  const [description, setDescription] = useState(blog?.topic ?? '');
  const [category, setCategory] = useState(
    blog?.category ?? 'commercial-construction'
  );
  const [media, setMedia] = useState<UploadedFile[]>(blog?.media ?? []);

  // AI-generated fields
  const [title, setTitle] = useState(blog?.title ?? '');
  const [content, setContent] = useState(blog?.content ?? '');
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? '');
  const [metaTitle, setMetaTitle] = useState(blog?.meta_title ?? '');
  const [metaDescription, setMetaDescription] = useState(
    blog?.meta_description ?? ''
  );
  const [slug, setSlug] = useState(blog?.slug ?? '');
  const [status, setStatus] = useState(blog?.status ?? 'draft');
  const [featuredImage, setFeaturedImage] = useState(
    blog?.featured_image ?? ''
  );

  // UI state
  const [saving, setSaving] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  // Sync from blog prop when it changes (e.g. after AI generation)
  useEffect(() => {
    if (blog) {
      setDescription(blog.topic ?? '');
      setCategory(blog.category ?? 'commercial-construction');
      setTitle(blog.title ?? '');
      setContent(blog.content ?? '');
      setExcerpt(blog.excerpt ?? '');
      setMetaTitle(blog.meta_title ?? '');
      setMetaDescription(blog.meta_description ?? '');
      setSlug(blog.slug ?? '');
      setStatus(blog.status ?? 'draft');
      setMedia(blog.media ?? []);
      setFeaturedImage(blog.featured_image ?? '');
    }
  }, [blog]);

  const wordCount = countWords(content);
  const hasGenerated = content.length > 0;

  const buildFormData = useCallback(
    (): BlogFormData => ({
      title: title || description,
      category,
      topic: description,
      content,
      excerpt,
      meta_title: metaTitle,
      meta_description: metaDescription,
      slug: slug || slugify(title || description),
      status,
      media,
    }),
    [
      title,
      description,
      category,
      content,
      excerpt,
      metaTitle,
      metaDescription,
      slug,
      status,
      media,
    ]
  );

  const handleSave = useCallback(async () => {
    setSaving(true);
    try {
      await onSave(buildFormData());
    } finally {
      setSaving(false);
    }
  }, [onSave, buildFormData]);

  const handlePublish = useCallback(async () => {
    setSaving(true);
    try {
      setStatus('published');
      await onSave({ ...buildFormData(), status: 'published' });
    } finally {
      setSaving(false);
    }
  }, [onSave, buildFormData]);

  return (
    <div className="space-y-6 max-w-5xl">
      {/* ── Step 1: What do you want to write about? ── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            What do you want to write about?
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Pick a category, describe the topic, drop your images — AI handles
            the rest. No images? AI will generate them.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='e.g. "commercial upfit project in Ballantyne, converting old retail space to modern office"'
              className="min-h-[80px]"
            />
          </div>

          {/* Images */}
          <div className="space-y-2">
            <Label>
              <span className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Images (optional — AI generates if empty)
              </span>
            </Label>
            <MediaUploader
              maxFiles={10}
              acceptVideo
              files={media}
              onFilesChange={setMedia}
            />
          </div>

          {/* Generate button */}
          <Button
            onClick={() => onGenerate(buildFormData())}
            disabled={isGenerating || !description.trim()}
            className="w-full"
            size="lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Generating blog (this takes ~90s)...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5 mr-2" />
                Generate Blog with AI
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* ── Generated Content ── */}
      {hasGenerated && (
        <>
          {/* Featured image + title */}
          <Card className="overflow-hidden">
            {featuredImage && (
              <div className="relative w-full h-64 bg-gray-100">
                <img
                  src={featuredImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-xl font-bold border-none px-0 focus-visible:ring-0 shadow-none"
                    placeholder="Blog title..."
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    {excerpt}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Badge variant="outline">
                    {wordCount.toLocaleString()} words
                  </Badge>
                  <Badge
                    variant={status === 'published' ? 'default' : 'secondary'}
                  >
                    {status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Images gallery */}
          {media.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Blog Images</CardTitle>
              </CardHeader>
              <CardContent>
                <MediaUploader
                  maxFiles={10}
                  acceptVideo
                  files={media}
                  onFilesChange={setMedia}
                />
              </CardContent>
            </Card>
          )}

          {/* Content — Rich WYSIWYG Editor with HTML fallback */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Content</CardTitle>
                <div className="flex border rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors ${
                      viewMode === 'preview'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    Visual Editor
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors ${
                      viewMode === 'code'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Code className="h-3.5 w-3.5" />
                    HTML Source
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {viewMode === 'preview' ? (
                <RichBlogEditor
                  content={content}
                  onChange={setContent}
                  onImageUpload={async (file: File) => {
                    const formData = new FormData();
                    formData.append('file', file);
                    const res = await fetch('/api/admin/upload', {
                      method: 'POST',
                      body: formData,
                    });
                    if (!res.ok) throw new Error('Upload failed');
                    const data = await res.json();
                    return data.url;
                  }}
                  placeholder="Start writing your blog post... Use the toolbar above to format text, add images, and insert CTAs."
                />
              ) : (
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[500px] font-mono text-sm"
                />
              )}
            </CardContent>
          </Card>

          {/* Excerpt */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Excerpt</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="min-h-[60px]"
                placeholder="Short summary for listings and social sharing..."
              />
            </CardContent>
          </Card>

          {/* SEO & Advanced (collapsible) */}
          <Card>
            <CardHeader
              className="cursor-pointer"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">SEO & Advanced</CardTitle>
                {showAdvanced ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              {!showAdvanced && metaTitle && (
                <p className="text-sm text-muted-foreground truncate mt-1">
                  {metaTitle}
                </p>
              )}
            </CardHeader>
            {showAdvanced && (
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input
                    id="meta_title"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    {metaTitle.length}/60 characters
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Textarea
                    id="meta_description"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    className="min-h-[60px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    {metaDescription.length}/160 characters
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      /blog/
                    </span>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="featured_image">Featured Image URL</Label>
                  <Input
                    id="featured_image"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    placeholder="Auto-set from first image or AI-generated"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="draft">Draft</option>
                    <option value="review">Review</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Draft
            </Button>
            <Button
              variant="outline"
              onClick={handlePublish}
              disabled={saving}
              className="bg-green-600 text-white hover:bg-green-700 border-green-600"
            >
              <Send className="h-4 w-4 mr-2" />
              Publish
            </Button>
            <Button
              variant="outline"
              onClick={() => onGenerate(buildFormData())}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              Regenerate
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
