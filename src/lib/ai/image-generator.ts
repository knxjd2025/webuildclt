/**
 * AI image generation for blog posts
 * Uses OpenAI DALL-E to generate construction-related images
 * and uploads them to Supabase Storage
 */

interface GeneratedImage {
  url: string;
  alt: string;
}

/**
 * Generate blog images using OpenAI DALL-E 3.
 * Creates a featured image and optionally additional supporting images.
 */
export async function generateBlogImages(
  title: string,
  category: string,
  count: number = 2
): Promise<GeneratedImage[]> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn('[image-generator] No OPENAI_API_KEY set, skipping image generation');
    return [];
  }

  const categoryContext: Record<string, string> = {
    'commercial-construction': 'commercial building construction site, modern office building, Charlotte NC skyline',
    'commercial-upfits': 'office renovation interior, modern commercial space, tenant improvement',
    'residential': 'custom home construction, residential building, suburban neighborhood',
    'roof-coating': 'commercial flat roof coating, aerial view of roofing work, roof restoration',
    'design-center': 'modern construction design showroom, material samples, architectural finishes',
    'construction-tips': 'professional construction worker, building tools, construction planning',
    'green-building': 'sustainable green building, solar panels on building, eco-friendly construction',
    'charlotte-area': 'Charlotte NC cityscape, uptown Charlotte skyline, South End Charlotte',
    'company-news': 'construction team, builders at work site, hard hats and blueprints',
  };

  const context = categoryContext[category] ?? 'commercial construction site';

  const prompts = [
    // Featured / hero image
    `Professional photograph of ${context}. Related to: "${title}". Photorealistic, high quality, well-lit, editorial style. No text, no watermarks, no logos.`,
  ];

  // Add supporting image prompts
  if (count > 1) {
    prompts.push(
      `Close-up detail photograph of construction work related to: "${title}". ${context}. Professional, sharp focus, natural lighting. No text, no watermarks.`
    );
  }

  if (count > 2) {
    prompts.push(
      `Wide angle photograph of a completed construction project. ${context}. Related to: "${title}". Clean, professional, architectural photography style. No text, no watermarks.`
    );
  }

  const images: GeneratedImage[] = [];

  for (let i = 0; i < Math.min(prompts.length, count); i++) {
    try {
      const res = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: prompts[i],
          n: 1,
          size: '1792x1024',
          quality: 'standard',
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error(`[image-generator] DALL-E error: ${err}`);
        continue;
      }

      const data = await res.json();
      const imageUrl = data.data?.[0]?.url;

      if (imageUrl) {
        const altText = i === 0
          ? `Featured image for ${title}`
          : `${title} - construction detail ${i + 1}`;

        images.push({ url: imageUrl, alt: altText });
      }
    } catch (error) {
      console.error(`[image-generator] Failed to generate image ${i + 1}:`, error);
    }
  }

  console.log(`[image-generator] Generated ${images.length}/${count} images`);
  return images;
}

/**
 * Download a DALL-E image and upload it to Supabase Storage.
 * Returns the permanent Supabase public URL.
 */
export async function uploadGeneratedImage(
  imageUrl: string,
  alt: string
): Promise<{ url: string; path: string; alt: string } | null> {
  try {
    // Download the image from DALL-E (temporary URL)
    const imageRes = await fetch(imageUrl);
    if (!imageRes.ok) return null;

    const buffer = Buffer.from(await imageRes.arrayBuffer());
    const fileName = `ai-${Date.now()}-${Math.random().toString(36).slice(2)}.png`;
    const filePath = `blogs/${fileName}`;

    // Upload to Supabase Storage
    const { createAdminClient } = await import('@/lib/supabase');
    const admin = createAdminClient();

    const { error } = await admin.storage
      .from('blog-media')
      .upload(filePath, buffer, {
        contentType: 'image/png',
        cacheControl: '31536000',
      });

    if (error) {
      console.error('[image-generator] Supabase upload error:', error.message);
      return null;
    }

    const { data: urlData } = admin.storage
      .from('blog-media')
      .getPublicUrl(filePath);

    return {
      url: urlData.publicUrl,
      path: filePath,
      alt,
    };
  } catch (error) {
    console.error('[image-generator] Upload failed:', error);
    return null;
  }
}
