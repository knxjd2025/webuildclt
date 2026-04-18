'use client';

import { useRef, useState, useCallback } from 'react';
import { Upload, X, Image as ImageIcon, Video, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface UploadedFile {
  id: string;
  url: string;
  name: string;
  type: 'image' | 'video';
  size: number;
}

interface MediaUploaderProps {
  maxFiles: number;
  acceptVideo?: boolean;
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
}

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];

function getAcceptString(acceptVideo: boolean): string {
  const types = [...IMAGE_TYPES];
  if (acceptVideo) types.push(...VIDEO_TYPES);
  return types.join(',');
}

function validateFileType(file: File, acceptVideo: boolean): boolean {
  if (IMAGE_TYPES.includes(file.type)) return true;
  if (acceptVideo && VIDEO_TYPES.includes(file.type)) return true;
  return false;
}

function getFileType(file: File): 'image' | 'video' {
  return file.type.startsWith('video/') ? 'video' : 'image';
}

export function MediaUploader({
  maxFiles,
  acceptVideo = false,
  files,
  onFilesChange,
}: MediaUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState<Record<string, number>>({});

  const remainingSlots = maxFiles - files.length;

  const uploadFile = useCallback(
    async (file: File) => {
      const tempId = `uploading-${Date.now()}-${Math.random().toString(36).slice(2)}`;

      setUploading((prev) => ({ ...prev, [tempId]: 0 }));

      try {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          throw new Error('Upload failed');
        }

        const data = await res.json();

        const uploaded: UploadedFile = {
          id: data.id ?? tempId,
          url: data.url,
          name: file.name,
          type: getFileType(file),
          size: file.size,
        };

        onFilesChange([...files, uploaded]);
      } catch (err) {
        console.error('Upload error:', err);
      } finally {
        setUploading((prev) => {
          const next = { ...prev };
          delete next[tempId];
          return next;
        });
      }
    },
    [files, onFilesChange]
  );

  const handleFiles = useCallback(
    (incoming: FileList | File[]) => {
      const fileArray = Array.from(incoming);
      const valid = fileArray.filter((f) => validateFileType(f, acceptVideo));
      const toUpload = valid.slice(0, remainingSlots);

      if (valid.length < fileArray.length) {
        const allowed = acceptVideo ? 'JPG, PNG, WebP, MP4, MOV, WebM' : 'JPG, PNG, WebP';
        alert(`Some files were skipped. Accepted formats: ${allowed}`);
      }

      if (toUpload.length < valid.length) {
        alert(`Only ${remainingSlots} more file(s) allowed. Max is ${maxFiles}.`);
      }

      toUpload.forEach((f) => uploadFile(f));
    },
    [acceptVideo, remainingSlots, maxFiles, uploadFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFiles(e.target.files);
        e.target.value = '';
      }
    },
    [handleFiles]
  );

  const handleRemove = useCallback(
    (id: string) => {
      onFilesChange(files.filter((f) => f.id !== id));
    },
    [files, onFilesChange]
  );

  const isUploading = Object.keys(uploading).length > 0;

  return (
    <div className="space-y-4">
      {/* Drop zone */}
      <div
        role="button"
        tabIndex={0}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/60'
        } ${remainingSlots <= 0 ? 'opacity-50 pointer-events-none' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
        }}
      >
        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground">
          Drag &amp; drop files here, or click to browse
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {acceptVideo ? 'JPG, PNG, WebP, MP4, MOV, WebM' : 'JPG, PNG, WebP'}
          {' · '}
          {remainingSlots} of {maxFiles} slots remaining
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={getAcceptString(acceptVideo)}
          className="hidden"
          onChange={handleInputChange}
        />
      </div>

      {/* Upload progress */}
      {isUploading && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <Loader2 className="h-4 w-4 animate-spin" />
          Uploading {Object.keys(uploading).length} file(s)...
        </div>
      )}

      {/* File grid */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {files.map((file) => (
            <div
              key={file.id}
              className="relative group rounded-lg overflow-hidden border bg-muted"
            >
              {file.type === 'image' ? (
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-24 object-cover"
                />
              ) : (
                <div className="w-full h-24 flex flex-col items-center justify-center bg-accent">
                  <Video className="h-8 w-8 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground mt-1 truncate max-w-full px-2">
                    {file.name}
                  </span>
                </div>
              )}
              <div className="absolute top-0 left-0 p-1">
                {file.type === 'image' ? (
                  <ImageIcon className="h-3.5 w-3.5 text-white drop-shadow" />
                ) : (
                  <Video className="h-3.5 w-3.5 text-white drop-shadow" />
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-0 right-0 h-6 w-6 p-0 bg-black/50 hover:bg-black/70 text-white rounded-none rounded-bl-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                onClick={() => handleRemove(file.id)}
                aria-label={`Remove ${file.name}`}
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
