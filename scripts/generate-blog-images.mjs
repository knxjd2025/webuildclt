/**
 * Generate hyper-realistic blog images using DALL-E 3 (primary) + Gemini (fallback)
 *
 * Usage: node scripts/generate-blog-images.mjs [--start N] [--limit N] [--provider dalle|gemini]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load env
dotenv.config({ path: path.join(ROOT, '.env.local') });
dotenv.config({ path: path.join(ROOT, '.env') });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OUTPUT_DIR = path.join(ROOT, 'public', 'images', 'blog');

// Parse CLI args
const args = process.argv.slice(2);
const startIdx = args.includes('--start') ? parseInt(args[args.indexOf('--start') + 1]) : 0;
const limit = args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : Infinity;
const preferredProvider = args.includes('--provider') ? args[args.indexOf('--provider') + 1] : 'dalle';
const manifestArg = args.includes('--manifest') ? args[args.indexOf('--manifest') + 1] : null;
const MANIFEST_PATH = manifestArg
  ? path.resolve(manifestArg)
  : path.join(__dirname, 'blog-posts-manifest.json');

// Ensure output directory exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * Build a hyper-realistic image prompt from blog post metadata
 */
function buildPrompt(title, category) {
  const categoryScenes = {
    'roof-coating': 'commercial building rooftop with white reflective coating being applied by construction workers in safety vests, aerial view of a large flat commercial roof, industrial HVAC units visible, bright sunny day with blue sky',
    'commercial-construction': 'active commercial construction site with steel framing going up, construction cranes, workers in hard hats, concrete foundation work, Charlotte NC skyline in background',
    'residential': 'beautiful custom home under construction or recently completed, residential neighborhood, craftsman details, front porch, landscaped yard, golden hour lighting',
    'design-center': 'modern interior design showroom with material samples, countertop displays, tile selections, hardwood flooring samples, pendant lighting, open bright space',
    'charlotte-area': 'Charlotte North Carolina cityscape or suburban neighborhood, tree-lined streets, commercial district, modern mixed-use buildings, Southern architecture',
    'construction-tips': 'professional construction worker reviewing blueprints on a job site, tools and materials organized, safety equipment visible, modern commercial or residential project in progress',
    'green-building': 'sustainable green building with solar panels, energy-efficient windows, living wall or green roof, modern eco-friendly commercial architecture, LEED-style design',
    'company-news': 'professional construction team standing in front of a completed commercial building, hard hats, safety vests, proud team photo setting, modern building facade',
  };

  const scene = categoryScenes[category] || categoryScenes['construction-tips'];

  // Extract key concepts from title for more specific imagery
  const titleLower = title.toLowerCase();
  let extraContext = '';
  if (titleLower.includes('roof') || titleLower.includes('coating')) extraContext = ', white silicone roof coating, spray equipment, rooftop work';
  else if (titleLower.includes('upfit') || titleLower.includes('renovation')) extraContext = ', interior commercial renovation in progress, drywall and framing, modern office space';
  else if (titleLower.includes('kitchen')) extraContext = ', modern kitchen with marble countertops, custom cabinetry, pendant lights';
  else if (titleLower.includes('custom home')) extraContext = ', luxury custom home exterior, stone and brick facade, large windows';
  else if (titleLower.includes('addition')) extraContext = ', home addition framing attached to existing house, construction in progress';
  else if (titleLower.includes('permit')) extraContext = ', commercial building exterior with construction fence, permit board visible in distance';
  else if (titleLower.includes('cost') || titleLower.includes('budget')) extraContext = ', professional contractor reviewing plans at a desk with building models';
  else if (titleLower.includes('design')) extraContext = ', architect workspace with material samples and building plans';
  else if (titleLower.includes('warehouse') || titleLower.includes('industrial')) extraContext = ', large industrial warehouse or distribution center, steel structure, loading docks';
  else if (titleLower.includes('restaurant')) extraContext = ', modern restaurant interior under construction, commercial kitchen equipment, dining area framing';
  else if (titleLower.includes('medical') || titleLower.includes('dental')) extraContext = ', medical office interior build-out, clean clinical finishes, reception area';
  else if (titleLower.includes('office')) extraContext = ', modern commercial office space, glass partitions, open floor plan, professional lighting';

  return `Hyper-realistic photograph: ${scene}${extraContext}. Shot on Canon EOS R5 with 24-70mm f/2.8 lens, natural lighting, shallow depth of field where appropriate. Photojournalistic documentary style capturing real construction work. ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO LOGOS, NO WATERMARKS, NO SIGNS WITH WRITING, NO LABELS anywhere in the image. Pure photographic image only with no overlaid graphics or typography of any kind.`;
}

/**
 * Generate image with DALL-E 3
 */
async function generateWithDalle(prompt, slug) {
  // Try gpt-image-1 first (newest model), fall back to dall-e-3
  for (const model of ['gpt-image-1', 'dall-e-3']) {
    try {
      const body = model === 'gpt-image-1'
        ? { model, prompt, n: 1, size: '1536x1024', quality: 'medium' }
        : { model, prompt, n: 1, size: '1792x1024', quality: 'standard', response_format: 'b64_json' };

      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        if (model === 'gpt-image-1') {
          console.log(`  ~ gpt-image-1 unavailable, trying dall-e-3...`);
          continue;
        }
        throw new Error(`${model} error ${response.status}: ${JSON.stringify(err)}`);
      }

      const data = await response.json();
      if (data.data[0].b64_json) {
        console.log(`  (used ${model})`);
        return Buffer.from(data.data[0].b64_json, 'base64');
      }
      if (data.data[0].url) {
        const imgRes = await fetch(data.data[0].url);
        console.log(`  (used ${model})`);
        return Buffer.from(await imgRes.arrayBuffer());
      }
    } catch (err) {
      if (model === 'dall-e-3') throw err;
    }
  }
  throw new Error('All GPT image models failed');
}

/**
 * Generate image with Gemini Imagen
 */
async function generateWithGemini(prompt, slug) {
  // Try Imagen 3 via REST API first
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instances: [{ prompt }],
          parameters: { sampleCount: 1, aspectRatio: '16:9', safetyFilterLevel: 'block_few' },
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      const b64 = data.predictions?.[0]?.bytesBase64Encoded;
      if (b64) {
        console.log('  (used Imagen 3)');
        return Buffer.from(b64, 'base64');
      }
    }
  } catch (_) { /* fall through */ }

  // Fallback: Gemini 2.0 Flash with image generation
  console.log('  ~ Imagen 3 unavailable, trying Gemini 2.0 Flash...');
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: `Generate a hyper-realistic photograph: ${prompt}` }] }],
    generationConfig: { responseModalities: ['image', 'text'] },
  });

  const response = result.response;
  for (const candidate of response.candidates || []) {
    for (const part of candidate.content?.parts || []) {
      if (part.inlineData) {
        console.log('  (used Gemini 2.0 Flash)');
        return Buffer.from(part.inlineData.data, 'base64');
      }
    }
  }
  throw new Error('Gemini returned no image data');
}

/**
 * Optimize image with sharp
 */
async function optimizeImage(buffer, outputPath) {
  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outputPath);
}

/**
 * Sleep helper
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main
 */
async function main() {
  console.log('=== Blog Image Generator ===');
  console.log(`Provider: ${preferredProvider} (with fallback)`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log('');

  if (!OPENAI_API_KEY && preferredProvider === 'dalle') {
    console.error('ERROR: OPENAI_API_KEY not set');
    process.exit(1);
  }
  if (!GEMINI_API_KEY && preferredProvider === 'gemini') {
    console.error('ERROR: GEMINI_API_KEY not set');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));
  const posts = manifest.slice(startIdx, startIdx + limit);

  console.log(`Processing ${posts.length} posts (starting at index ${startIdx})`);
  console.log('');

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const imageName = path.basename(post.image);
    const outputPath = path.join(OUTPUT_DIR, imageName);

    // Skip if already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[${startIdx + i + 1}/${manifest.length}] SKIP (exists): ${imageName}`);
      skipped++;
      continue;
    }

    const prompt = post.prompt || buildPrompt(post.title, post.category);
    console.log(`[${startIdx + i + 1}/${manifest.length}] Generating: ${imageName}`);
    console.log(`  Title: ${post.title}`);
    console.log(`  Category: ${post.category}`);

    try {
      let buffer;

      if (preferredProvider === 'dalle') {
        try {
          buffer = await generateWithDalle(prompt, post.slug);
          console.log(`  ✓ DALL-E 3 success`);
        } catch (err) {
          console.log(`  ⚠ DALL-E failed: ${err.message}`);
          if (GEMINI_API_KEY) {
            console.log(`  → Falling back to Gemini...`);
            buffer = await generateWithGemini(prompt, post.slug);
            console.log(`  ✓ Gemini fallback success`);
          } else {
            throw err;
          }
        }
      } else {
        try {
          buffer = await generateWithGemini(prompt, post.slug);
          console.log(`  ✓ Gemini success`);
        } catch (err) {
          console.log(`  ⚠ Gemini failed: ${err.message}`);
          if (OPENAI_API_KEY) {
            console.log(`  → Falling back to DALL-E...`);
            buffer = await generateWithDalle(prompt, post.slug);
            console.log(`  ✓ DALL-E fallback success`);
          } else {
            throw err;
          }
        }
      }

      // Optimize and save
      await optimizeImage(buffer, outputPath);
      const stats = fs.statSync(outputPath);
      console.log(`  ✓ Saved: ${imageName} (${(stats.size / 1024).toFixed(0)}KB)`);
      generated++;

      // Rate limit delay
      const delay = preferredProvider === 'dalle' ? 12000 : 5000;
      if (i < posts.length - 1) {
        console.log(`  ⏳ Waiting ${delay / 1000}s for rate limit...`);
        await sleep(delay);
      }
    } catch (err) {
      console.error(`  ✗ FAILED: ${err.message}`);
      failed++;
      // Wait a bit before trying next one
      await sleep(3000);
    }
  }

  console.log('');
  console.log('=== Summary ===');
  console.log(`Generated: ${generated}`);
  console.log(`Skipped (existing): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${posts.length}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
