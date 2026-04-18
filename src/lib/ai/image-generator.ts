/**
 * AI image generation for blog posts
 * Uses Google Gemini Imagen 4 for image generation
 * with DALL-E 3 as fallback, uploads to Supabase Storage
 */

interface GeneratedImage {
  url: string;
  alt: string;
}

const categoryContext: Record<string, string> = {
  'commercial-construction':
    'active commercial construction site in Charlotte NC, steel framing, workers in hard hats, modern commercial building under construction',
  'commercial-upfits':
    'commercial office renovation in progress, modern tenant improvement, professional interior construction work',
  'roof-coating':
    'commercial flat roof being coated with white silicone coating, aerial view, professional roofing crew at work',
  'construction-tips':
    'professional construction planning, blueprints on table, construction team meeting on job site',
  'green-building':
    'sustainable green commercial building, solar panels, LEED certified building, eco-friendly construction',
  'charlotte-area':
    'Charlotte NC skyline, commercial district, South Charlotte business area',
  'company-news':
    'veteran-owned construction company team, professional builders, construction crew',
  'brewery-construction':
    'brewery taproom under construction, industrial brewing equipment installation',
  'drone-inspections':
    'commercial drone flying over building roof, thermal imaging inspection',
  'medical-construction':
    'medical office construction, healthcare facility build-out, clinic interior',
  'cost-guides':
    'construction estimating, contractor reviewing plans with calculator, cost analysis',
};

/**
 * Build a prompt for image generation based on index and context.
 */
function buildPrompt(
  index: number,
  title: string,
  context: string
): string {
  if (index === 0) {
    return `Professional documentary photograph: ${context}. Related to "${title}". Photorealistic, sharp focus, natural lighting, editorial construction photography. No text, no watermarks, no logos, no people's faces clearly visible.`;
  }
  const variations = [
    `Professional close-up detail photograph of construction work: ${context}. Related to "${title}". Photorealistic, macro detail, natural lighting. No text, no watermarks, no logos.`,
    `Wide angle photograph of a construction project: ${context}. Related to "${title}". Clean, professional, architectural photography style. No text, no watermarks.`,
    `Aerial perspective of construction activity: ${context}. Related to "${title}". Professional drone-style photography, clear detail. No text, no watermarks, no logos.`,
    `Professional environmental photograph showing construction materials and tools: ${context}. Related to "${title}". Photorealistic, well-lit, editorial style. No text, no watermarks.`,
  ];
  return variations[(index - 1) % variations.length];
}

/**
 * Upload a buffer to Supabase Storage and return the public URL.
 */
async function uploadToSupabase(
  buffer: Buffer,
  contentType: string = 'image/png'
): Promise<{ url: string; path: string } | null> {
  try {
    const ext = contentType === 'image/png' ? 'png' : 'jpg';
    const fileName = `ai-${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const filePath = `blogs/${fileName}`;

    const { createAdminClient } = await import('@/lib/supabase');
    const admin = createAdminClient();

    const { error } = await admin.storage
      .from('blog-media')
      .upload(filePath, buffer, {
        contentType,
        cacheControl: '31536000',
      });

    if (error) {
      console.error('[image-generator] Supabase upload error:', error.message);
      return null;
    }

    const { data: urlData } = admin.storage
      .from('blog-media')
      .getPublicUrl(filePath);

    return { url: urlData.publicUrl, path: filePath };
  } catch (error) {
    console.error('[image-generator] Upload failed:', error);
    return null;
  }
}

/**
 * Generate a single image using Gemini Imagen 4.
 * Returns the uploaded Supabase URL or null on failure.
 */
async function generateWithGemini(
  prompt: string,
  apiKey: string
): Promise<{ url: string; path: string } | null> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '16:9',
          safetyFilterLevel: 'BLOCK_MEDIUM_AND_ABOVE',
          personGeneration: 'DONT_ALLOW',
        },
      }),
    }
  );

  if (!res.ok) {
    const errText = await res.text();
    console.error(`[image-generator] Gemini error: ${errText}`);
    return null;
  }

  const data = await res.json();
  const imageBytes = data.predictions?.[0]?.bytesBase64Encoded;

  if (!imageBytes) {
    console.error('[image-generator] Gemini returned no image data');
    return null;
  }

  const buffer = Buffer.from(imageBytes, 'base64');
  return uploadToSupabase(buffer, 'image/png');
}

/**
 * Generate a single image using DALL-E 3 as fallback.
 * Returns a temporary URL (must be uploaded separately).
 */
async function generateWithDalle(
  prompt: string,
  apiKey: string
): Promise<string | null> {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1792x1024',
      quality: 'standard',
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`[image-generator] DALL-E error: ${err}`);
    return null;
  }

  const data = await res.json();
  return data.data?.[0]?.url ?? null;
}

/**
 * Generate blog images using Gemini Imagen 4 with DALL-E 3 fallback.
 * Images are uploaded to Supabase Storage during generation.
 */
export async function generateBlogImages(
  title: string,
  category: string,
  count: number = 2
): Promise<GeneratedImage[]> {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!geminiKey && !openaiKey) {
    console.warn('[image-generator] No GEMINI_API_KEY or OPENAI_API_KEY, skipping');
    return [];
  }

  const context = categoryContext[category] ?? 'commercial construction site in Charlotte NC';
  const images: GeneratedImage[] = [];

  for (let i = 0; i < count; i++) {
    try {
      const prompt = buildPrompt(i, title, context);
      const alt =
        i === 0
          ? `Featured image for ${title}`
          : `${title} - construction detail ${i + 1}`;

      // Try Gemini first
      if (geminiKey) {
        const result = await generateWithGemini(prompt, geminiKey);
        if (result) {
          images.push({ url: result.url, alt });
          continue;
        }
        console.warn(`[image-generator] Gemini failed for image ${i + 1}, trying DALL-E fallback`);
      }

      // DALL-E fallback
      if (openaiKey) {
        const dalleUrl = await generateWithDalle(prompt, openaiKey);
        if (dalleUrl) {
          // Download and upload to Supabase
          const imageRes = await fetch(dalleUrl);
          if (imageRes.ok) {
            const buffer = Buffer.from(await imageRes.arrayBuffer());
            const uploaded = await uploadToSupabase(buffer, 'image/png');
            if (uploaded) {
              images.push({ url: uploaded.url, alt });
              continue;
            }
          }
        }
      }

      console.error(`[image-generator] All providers failed for image ${i + 1}`);
    } catch (error) {
      console.error(`[image-generator] Image ${i + 1} failed:`, error);
    }
  }

  console.log(`[image-generator] Generated ${images.length}/${count} images via Gemini/DALL-E`);
  return images;
}

/**
 * Upload a generated image to Supabase Storage.
 * For Gemini images (already uploaded), this is a passthrough.
 * For external URLs (e.g., DALL-E temp URLs), downloads and re-uploads.
 */
export async function uploadGeneratedImage(
  imageUrl: string,
  alt: string
): Promise<{ url: string; path: string; alt: string } | null> {
  try {
    // Check if already a Supabase URL (Gemini images are uploaded during generation)
    if (imageUrl.includes('supabase.co')) {
      return { url: imageUrl, path: '', alt };
    }

    // Download external image and upload to Supabase
    const imageRes = await fetch(imageUrl);
    if (!imageRes.ok) return null;

    const buffer = Buffer.from(await imageRes.arrayBuffer());
    const result = await uploadToSupabase(buffer, 'image/png');

    if (!result) return null;

    return { url: result.url, path: result.path, alt };
  } catch (error) {
    console.error('[image-generator] Upload failed:', error);
    return null;
  }
}
