'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ADMIN_PATH } from '@/lib/admin-path';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Upload,
  X,
  Sparkles,
  Loader2,
  Save,
  Globe,
  ArrowLeft,
  Eye,
} from 'lucide-react';
import type { Project, ProjectImage } from '@/types/project';
import { SERVICE_TYPES } from '@/types/project';

interface ProjectFormProps {
  project?: Project;
  mode: 'create' | 'edit';
}

export function ProjectForm({ project, mode }: ProjectFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [title, setTitle] = useState(project?.title || '');
  const [category, setCategory] = useState(project?.category || 'commercial');
  const [serviceType, setServiceType] = useState(project?.service_type || 'renovation');
  const [shortDescription, setShortDescription] = useState(project?.short_description || '');
  const [address, setAddress] = useState(project?.address || '');
  const [city, setCity] = useState(project?.city || 'Charlotte');
  const [state, setState] = useState(project?.state || 'NC');
  const [zip, setZip] = useState(project?.zip || '');
  const [latitude, setLatitude] = useState(project?.latitude?.toString() || '');
  const [longitude, setLongitude] = useState(project?.longitude?.toString() || '');
  const [neighborhood, setNeighborhood] = useState(project?.neighborhood || '');
  const [squareFootage, setSquareFootage] = useState(project?.square_footage?.toString() || '');
  const [completionDate, setCompletionDate] = useState(project?.completion_date || '');
  const [images, setImages] = useState<ProjectImage[]>(project?.images || []);
  const [featuredImage, setFeaturedImage] = useState(project?.featured_image || '');
  const [aiContent, setAiContent] = useState(project?.ai_content || '');
  const [aiMetaTitle, setAiMetaTitle] = useState(project?.ai_meta_title || '');
  const [aiMetaDescription, setAiMetaDescription] = useState(project?.ai_meta_description || '');
  const [status, setStatus] = useState(project?.status || 'draft');
  const [projectId, setProjectId] = useState(project?.id || '');

  async function handleSave() {
    setError('');
    setSaving(true);

    const body = {
      title,
      category,
      service_type: serviceType,
      short_description: shortDescription,
      address: address || null,
      city,
      state,
      zip: zip || null,
      latitude: latitude ? parseFloat(latitude) : null,
      longitude: longitude ? parseFloat(longitude) : null,
      neighborhood: neighborhood || null,
      square_footage: squareFootage ? parseInt(squareFootage) : null,
      completion_date: completionDate || null,
      images,
      featured_image: featuredImage || null,
      ai_content: aiContent || null,
      ai_meta_title: aiMetaTitle || null,
      ai_meta_description: aiMetaDescription || null,
      status,
    };

    try {
      const url = mode === 'edit' && projectId
        ? `/api/admin/projects/${projectId}`
        : '/api/admin/projects';

      const res = await fetch(url, {
        method: mode === 'edit' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Save failed');
      }

      const saved = await res.json();
      if (mode === 'create') {
        setProjectId(saved.id);
      }

      // Redirect to edit page after creating
      if (mode === 'create' && saved.id) {
        router.push(`/admin/projects/${saved.id}/edit`);
        return;
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  async function handleGenerate() {
    if (!projectId) {
      setError('Save the project first before generating AI content');
      return;
    }

    setGenerating(true);
    setError('');

    try {
      const res = await fetch(`/api/admin/projects/${projectId}/generate`, {
        method: 'POST',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Generation failed');
      }

      const updated = await res.json();
      setAiContent(updated.ai_content || '');
      setAiMetaTitle(updated.ai_meta_title || '');
      setAiMetaDescription(updated.ai_meta_description || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'AI generation failed');
    } finally {
      setGenerating(false);
    }
  }

  const handleImageUpload = useCallback(async (files: FileList) => {
    setUploading(true);
    setError('');

    const newImages: ProjectImage[] = [];

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || 'Upload failed');
        }

        const { url } = await res.json();
        newImages.push({
          url,
          alt: file.name.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
          order: images.length + newImages.length,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Upload failed');
      }
    }

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);

    // Set first image as featured if none set
    if (!featuredImage && updatedImages.length > 0) {
      setFeaturedImage(updatedImages[0].url);
    }

    setUploading(false);
  }, [images, featuredImage]);

  function removeImage(index: number) {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    if (images[index]?.url === featuredImage) {
      setFeaturedImage(updated[0]?.url || '');
    }
  }

  async function handlePublish() {
    const newStatus = status === 'published' ? 'draft' : 'published';
    setStatus(newStatus);

    if (projectId) {
      await fetch(`/api/admin/projects/${projectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      router.refresh();
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.push(`${ADMIN_PATH}/projects`)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold text-foreground">
          {mode === 'create' ? 'New Project' : `Edit: ${project?.title}`}
        </h1>
        {projectId && (
          <Badge variant={status === 'published' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Urgent Care Build-Out"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as 'commercial' | 'roof-coating')}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  <option value="commercial">Commercial</option>
                  <option value="roof-coating">Roof Coating</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                >
                  {SERVICE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <textarea
                id="description"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Brief description of the project — the AI will expand this into a full page..."
                className="w-full border rounded-md px-3 py-2 text-sm min-h-[100px] resize-y"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sqft">Square Footage (optional)</Label>
                <Input
                  id="sqft"
                  type="number"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                  placeholder="e.g., 3500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Completion Date (optional)</Label>
                <Input
                  id="date"
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location (Geo-SEO) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Location &amp; Geo-SEO
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              This information powers the hyper-local SEO and geo-tagging for Google and AI search engines.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g., 123 Main Street"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  maxLength={2}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP</Label>
                <Input
                  id="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="neighborhood">Neighborhood / Area</Label>
              <Input
                id="neighborhood"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="e.g., Ballantyne, South End, NoDa"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="lat">Latitude</Label>
                <Input
                  id="lat"
                  type="number"
                  step="any"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="e.g., 35.1269"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lng">Longitude</Label>
                <Input
                  id="lng"
                  type="number"
                  step="any"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="e.g., -80.8433"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Tip: Find coordinates at{' '}
              <a
                href="https://www.latlong.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                latlong.net
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Project Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Upload zone */}
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary transition-colors">
              {uploading ? (
                <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
              ) : (
                <Upload className="h-8 w-8 text-muted-foreground" />
              )}
              <span className="mt-2 text-sm text-muted-foreground">
                {uploading ? 'Uploading...' : 'Click to upload images (JPEG, PNG, WebP)'}
              </span>
              <input
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => e.target.files && handleImageUpload(e.target.files)}
                disabled={uploading}
              />
            </label>

            {/* Image grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {images.map((img, index) => (
                  <div key={img.url} className="relative group">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={200}
                      height={150}
                      className="rounded-lg object-cover w-full aspect-[4/3]"
                    />
                    {img.url === featuredImage && (
                      <Badge className="absolute top-2 left-2 text-xs">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.url !== featuredImage && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setFeaturedImage(img.url)}
                          className="h-7 text-xs"
                        >
                          Set Featured
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => removeImage(index)}
                        className="h-7 w-7 p-0"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                    <Input
                      value={img.alt}
                      onChange={(e) => {
                        const updated = [...images];
                        updated[index] = { ...img, alt: e.target.value };
                        setImages(updated);
                      }}
                      placeholder="Alt text"
                      className="mt-2 text-xs"
                    />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* AI Content Generation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Content Generation
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Generate SEO-optimized content with hyper-local geo-tagging.
              {mode === 'create' && ' Save the project first to enable generation.'}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={handleGenerate}
              disabled={generating || !projectId}
              className="w-full"
            >
              {generating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating... (this takes 15-30 seconds)
                </>
              ) : aiContent ? (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Regenerate Content
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate SEO Content
                </>
              )}
            </Button>

            {aiMetaTitle && (
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Meta Title ({aiMetaTitle.length}/60)</Label>
                <Input
                  id="metaTitle"
                  value={aiMetaTitle}
                  onChange={(e) => setAiMetaTitle(e.target.value)}
                />
              </div>
            )}

            {aiMetaDescription && (
              <div className="space-y-2">
                <Label htmlFor="metaDesc">
                  Meta Description ({aiMetaDescription.length}/155)
                </Label>
                <textarea
                  id="metaDesc"
                  value={aiMetaDescription}
                  onChange={(e) => setAiMetaDescription(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm"
                  rows={2}
                />
              </div>
            )}

            {aiContent && (
              <div className="space-y-2">
                <Label>Generated Content (HTML — editable)</Label>
                <textarea
                  value={aiContent}
                  onChange={(e) => setAiContent(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm font-mono min-h-[300px] resize-y"
                  rows={12}
                />
                <div className="border rounded-lg p-6 bg-card">
                  <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide">
                    Preview
                  </p>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: aiContent }}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex items-center gap-4 pb-8">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            {saving ? 'Saving...' : 'Save Project'}
          </Button>

          {projectId && (
            <Button
              variant={status === 'published' ? 'outline' : 'default'}
              onClick={handlePublish}
            >
              {status === 'published' ? 'Unpublish' : 'Publish'}
            </Button>
          )}

          {projectId && status === 'published' && (
            <Button variant="outline" asChild>
              <a href={`/portfolio/${project?.slug}`} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                View Live Page
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
