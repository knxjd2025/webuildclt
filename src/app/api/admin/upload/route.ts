import { NextRequest, NextResponse } from 'next/server';
import { createServerClient, createAdminClient } from '@/lib/supabase';

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const VIDEO_TYPES = ['video/mp4', 'video/quicktime', 'video/webm'];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

/**
 * POST /api/admin/upload — Upload file to Supabase Storage
 * Accepts multipart/form-data with a "file" field
 * Optional "type" field: "blog" | "project" (defaults to "project")
 */
export async function POST(request: NextRequest) {
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  const uploadType = (formData.get('type') as string) || 'project';

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const isImage = IMAGE_TYPES.includes(file.type);
  const isVideo = VIDEO_TYPES.includes(file.type);

  if (!isImage && !isVideo) {
    return NextResponse.json(
      { error: 'Invalid file type. Allowed: JPEG, PNG, WebP, MP4, MOV, WebM' },
      { status: 400 }
    );
  }

  const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
  if (file.size > maxSize) {
    return NextResponse.json(
      { error: `File too large. Maximum: ${isVideo ? '100MB' : '10MB'}` },
      { status: 400 }
    );
  }

  const ext = file.name.split('.').pop() || (isVideo ? 'mp4' : 'jpg');
  const fileName = `${crypto.randomUUID()}.${ext}`;

  // Route to appropriate bucket and folder
  const bucket = uploadType === 'blog' ? 'blog-media' : 'project-images';
  const folder = uploadType === 'blog' ? 'blogs' : 'projects';
  const filePath = `${folder}/${fileName}`;

  const admin = createAdminClient();
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await admin.storage
    .from(bucket)
    .upload(filePath, buffer, {
      contentType: file.type,
      cacheControl: '31536000',
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: urlData } = admin.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return NextResponse.json({
    url: urlData.publicUrl,
    path: filePath,
    mediaType: isVideo ? 'video' : 'image',
  });
}
