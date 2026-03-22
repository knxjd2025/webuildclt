/**
 * Download free stock images from Pexels for all blog posts
 * Pexels API is free with attribution (which Next.js Image handles)
 *
 * Usage: node scripts/download-stock-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'public', 'images', 'blog');

// Pexels API key (free tier - 200 requests/hour)
const PEXELS_API_KEY = 'YOUR_KEY_HERE';

// Search query mapping based on blog category and title keywords
function getSearchQuery(title, category) {
  const titleLower = title.toLowerCase();

  // Specific keyword matches first
  if (titleLower.includes('roof coating') || titleLower.includes('roof restoration')) return 'commercial roof building aerial';
  if (titleLower.includes('roof') && titleLower.includes('metal')) return 'metal roof commercial building';
  if (titleLower.includes('roof') && titleLower.includes('inspect')) return 'commercial building roof maintenance';
  if (titleLower.includes('roof') && titleLower.includes('warrant')) return 'commercial flat roof';
  if (titleLower.includes('roof')) return 'commercial rooftop building';
  if (titleLower.includes('restaurant') || titleLower.includes('kitchen build')) return 'restaurant interior construction';
  if (titleLower.includes('medical') || titleLower.includes('dental')) return 'medical office interior modern';
  if (titleLower.includes('warehouse') || titleLower.includes('industrial')) return 'warehouse construction industrial';
  if (titleLower.includes('retail') || titleLower.includes('storefront')) return 'retail store interior modern';
  if (titleLower.includes('office upfit') || titleLower.includes('office renovation') || titleLower.includes('office remodel')) return 'modern office renovation interior';
  if (titleLower.includes('open concept') || titleLower.includes('open floor')) return 'open office modern workspace';
  if (titleLower.includes('hvac')) return 'commercial hvac system building';
  if (titleLower.includes('salon') || titleLower.includes('spa')) return 'modern salon interior design';
  if (titleLower.includes('gym') || titleLower.includes('fitness')) return 'gym fitness studio interior';
  if (titleLower.includes('tenant') || titleLower.includes('upfit') || titleLower.includes('commercial renovation')) return 'commercial interior renovation construction';
  if (titleLower.includes('ada') || titleLower.includes('compliance') || titleLower.includes('accessible')) return 'accessible building entrance ramp';
  if (titleLower.includes('permit') || titleLower.includes('zoning')) return 'building construction permit site';
  if (titleLower.includes('custom home') || titleLower.includes('home build')) return 'custom home construction framing';
  if (titleLower.includes('kitchen remodel') || titleLower.includes('kitchen design') || titleLower.includes('kitchen trend')) return 'modern kitchen renovation';
  if (titleLower.includes('bathroom')) return 'modern bathroom renovation';
  if (titleLower.includes('addition') || titleLower.includes('in-law') || titleLower.includes('sunroom')) return 'home addition construction framing';
  if (titleLower.includes('second story')) return 'two story house construction';
  if (titleLower.includes('garage')) return 'garage conversion renovation';
  if (titleLower.includes('whole house') || titleLower.includes('remodel')) return 'home renovation interior construction';
  if (titleLower.includes('lot') || titleLower.includes('site')) return 'residential construction lot building';
  if (titleLower.includes('luxury')) return 'luxury home exterior modern';
  if (titleLower.includes('design center') || titleLower.includes('material selection') || titleLower.includes('showroom')) return 'interior design showroom materials';
  if (titleLower.includes('design-build') || titleLower.includes('design build')) return 'architecture blueprints construction planning';
  if (titleLower.includes('countertop') || titleLower.includes('granite') || titleLower.includes('quartz')) return 'kitchen countertop marble granite';
  if (titleLower.includes('flooring') || titleLower.includes('hardwood')) return 'hardwood flooring installation';
  if (titleLower.includes('fixture') || titleLower.includes('finish')) return 'modern home fixtures faucet lighting';
  if (titleLower.includes('exterior') || titleLower.includes('siding') || titleLower.includes('brick')) return 'house exterior brick stone siding';
  if (titleLower.includes('matterport') || titleLower.includes('virtual tour')) return 'modern showroom interior design';
  if (titleLower.includes('solar') || titleLower.includes('energy efficient')) return 'solar panels modern building';
  if (titleLower.includes('green building') || titleLower.includes('sustainable') || titleLower.includes('usgbc') || titleLower.includes('leed')) return 'green building sustainable architecture';
  if (titleLower.includes('eco-friendly') || titleLower.includes('low-voc')) return 'eco friendly green construction';
  if (titleLower.includes('water conservation')) return 'water efficient building plumbing';
  if (titleLower.includes('contractor') || titleLower.includes('hire') || titleLower.includes('choose')) return 'construction contractor worker hard hat';
  if (titleLower.includes('license') || titleLower.includes('insurance') || titleLower.includes('verify')) return 'construction safety compliance documents';
  if (titleLower.includes('estimate') || titleLower.includes('cost') || titleLower.includes('financ') || titleLower.includes('budget')) return 'construction blueprints calculator budget';
  if (titleLower.includes('contract') || titleLower.includes('change order')) return 'construction documents contract signing';
  if (titleLower.includes('project management') || titleLower.includes('timeline') || titleLower.includes('schedule')) return 'construction project manager site';
  if (titleLower.includes('punch list') || titleLower.includes('quality')) return 'construction worker inspection quality';
  if (titleLower.includes('communicate')) return 'construction meeting team discussion';
  if (titleLower.includes('mistake') || titleLower.includes('red flag')) return 'construction site safety workers';
  if (titleLower.includes('prepare') || titleLower.includes('before construction')) return 'construction site preparation excavation';
  if (titleLower.includes('veteran') || titleLower.includes('family-owned') || titleLower.includes('team')) return 'construction team workers hard hats';
  if (titleLower.includes('before and after') || titleLower.includes('transformation')) return 'building renovation before after';
  if (titleLower.includes('charlotte') || titleLower.includes('south charlotte') || titleLower.includes('ballantyne')) return 'charlotte north carolina skyline cityscape';
  if (titleLower.includes('fort mill') || titleLower.includes('york county')) return 'south carolina small town suburban';
  if (titleLower.includes('lake norman') || titleLower.includes('cornelius') || titleLower.includes('mooresville')) return 'lake waterfront homes community';
  if (titleLower.includes('huntersville') || titleLower.includes('matthews') || titleLower.includes('mint hill')) return 'suburban neighborhood community homes';
  if (titleLower.includes('neighborhood')) return 'residential neighborhood community homes';

  // Category-based fallbacks
  const categoryQueries = {
    'roof-coating': 'commercial building roof aerial view',
    'commercial-construction': 'commercial construction building site',
    'residential': 'residential home construction',
    'design-center': 'interior design showroom',
    'charlotte-area': 'charlotte north carolina city',
    'construction-tips': 'construction worker building site',
    'green-building': 'sustainable green building architecture',
    'company-news': 'construction team workers hard hats',
  };

  return categoryQueries[category] || 'commercial construction building';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchPexels(query, page = 1) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}&orientation=landscape`;
  const response = await fetch(url, {
    headers: { Authorization: PEXELS_API_KEY },
  });

  if (!response.ok) {
    throw new Error(`Pexels API error ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status}`);

  const buffer = Buffer.from(await response.arrayBuffer());

  // Optimize with sharp
  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .resize(1200, null, { withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outputPath);
}

async function main() {
  console.log('=== Stock Image Downloader (Pexels) ===');

  if (PEXELS_API_KEY === 'YOUR_KEY_HERE') {
    console.error('ERROR: Set your Pexels API key in the script.');
    console.error('Get a free key at: https://www.pexels.com/api/');
    process.exit(1);
  }

  // Load manifests
  const manifest1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog-posts-manifest.json'), 'utf-8'));

  // Also get the original manifest
  const origContent = fs.readFileSync(path.join(ROOT, 'src', 'data', 'blog-posts.ts'), 'utf-8');
  const slugs = [...origContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
  const titles = [...origContent.matchAll(/title:\s*'([^"']+)'/g)].map(m => m[1]);
  const cats = [...origContent.matchAll(/categorySlug:\s*'([^']+)'/g)].map(m => m[1]);
  const images = [...origContent.matchAll(/image:\s*'([^']+)'/g)].map(m => m[1]);

  const allPosts = slugs.map((s, i) => ({
    slug: s,
    title: titles[i] || s,
    category: cats[i] || 'commercial-construction',
    image: images[i] || `/images/blog/${s}.jpg`,
  }));

  console.log(`Total posts to process: ${allPosts.length}`);

  // Track used photos to avoid duplicates
  const usedPhotoIds = new Set();
  // Cache search results to avoid duplicate API calls
  const searchCache = {};

  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < allPosts.length; i++) {
    const post = allPosts[i];
    const imageName = path.basename(post.image);
    const outputPath = path.join(OUTPUT_DIR, imageName);

    const query = getSearchQuery(post.title, post.category);
    console.log(`[${i + 1}/${allPosts.length}] ${imageName}`);
    console.log(`  Query: "${query}"`);

    try {
      // Search Pexels (use cache if same query)
      let results;
      if (searchCache[query]) {
        results = searchCache[query];
      } else {
        results = await searchPexels(query);
        searchCache[query] = results;
        await sleep(200); // Rate limit: stay well under 200/hour
      }

      // Find a photo we haven't used yet
      let photo = null;
      for (const p of results.photos || []) {
        if (!usedPhotoIds.has(p.id)) {
          photo = p;
          break;
        }
      }

      // If all photos used, try page 2
      if (!photo && results.photos?.length > 0) {
        const page2 = await searchPexels(query, 2);
        await sleep(200);
        for (const p of page2.photos || []) {
          if (!usedPhotoIds.has(p.id)) {
            photo = p;
            break;
          }
        }
        // Extend cache
        if (searchCache[query]) {
          searchCache[query].photos = [...searchCache[query].photos, ...(page2.photos || [])];
        }
      }

      if (!photo) {
        // Last resort: use a general construction query
        const fallback = await searchPexels('commercial construction building', Math.floor(Math.random() * 5) + 1);
        await sleep(200);
        photo = fallback.photos?.find(p => !usedPhotoIds.has(p.id)) || fallback.photos?.[0];
      }

      if (!photo) {
        console.log('  ✗ No photos found');
        failed++;
        continue;
      }

      usedPhotoIds.add(photo.id);

      // Download the "large" size (good quality, not too huge)
      const imageUrl = photo.src.large2x || photo.src.large || photo.src.original;
      await downloadImage(imageUrl, outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`  ✓ Downloaded: ${imageName} (${(stats.size / 1024).toFixed(0)}KB) — by ${photo.photographer}`);
      downloaded++;

      // Small delay to be polite to the API
      await sleep(300);
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
      failed++;
      await sleep(1000);
    }
  }

  console.log('');
  console.log('=== Summary ===');
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${allPosts.length}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
