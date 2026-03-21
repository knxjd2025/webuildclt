/**
 * Generate SEO-optimized blog content using Gemini
 *
 * Usage: node scripts/generate-blog-content.mjs --topics topics.json [--start N] [--limit N]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

dotenv.config({ path: path.join(ROOT, '.env.local') });
dotenv.config({ path: path.join(ROOT, '.env') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const args = process.argv.slice(2);
const topicsFile = args.includes('--topics') ? args[args.indexOf('--topics') + 1] : null;
const startIdx = args.includes('--start') ? parseInt(args[args.indexOf('--start') + 1]) : 0;
const limit = args.includes('--limit') ? parseInt(args[args.indexOf('--limit') + 1]) : Infinity;

if (!topicsFile) {
  console.error('Usage: node scripts/generate-blog-content.mjs --topics topics.json');
  process.exit(1);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateContent(topic) {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const systemPrompt = `You are an expert SEO content writer for We Build, a veteran and family-owned construction company in Charlotte, NC.
We Build is a licensed general contractor in NC & SC, USGBC member, with 60+ years combined experience.
Services: commercial construction, commercial upfits, custom home building, residential additions, roof coating (We Coat division), design-build.
Design Center located at 14330 S Lakes Drive, Charlotte NC 28273. Phone: (704) 574-8124.

Write blog posts that:
- Target the specified keywords naturally (2-3% keyword density)
- Are 800-1500 words
- Use conversational but professional tone
- Include Charlotte/NC-specific references and local knowledge
- Include internal linking suggestions as HTML anchor tags
- Are structured with H2 and H3 headings for readability
- Include practical, actionable advice
- End with a CTA mentioning We Build

IMPORTANT: Return ONLY valid JSON with these exact fields:
{
  "content": "HTML content using <h2>, <h3>, <p>, <ul>, <li> tags only. NO <h1> tag.",
  "excerpt": "2-3 sentence summary under 200 characters",
  "metaTitle": "Under 60 characters, include primary keyword and location",
  "metaDescription": "Under 155 characters, compelling with keyword and location"
}`;

  const userPrompt = `Write a blog post for We Build's website:

Title: ${topic.title}
Primary Keyword: ${topic.primaryKeyword}
Secondary Keywords: ${topic.secondaryKeywords.join(', ')}
Category: ${topic.category}
Target Area: ${topic.area || 'Charlotte NC metro'}

Requirements:
- Target word count: 1000-1500 words
- Include 3-5 H2 headings
- Naturally incorporate primary keyword 4-6 times
- Include secondary keywords where natural
- Reference specific Charlotte-area locations, neighborhoods, or landmarks
- Include at least 2 internal links to We Build service pages (use paths like /services/commercial-construction, /services/commercial-upfits, /services/roof-coating, /services/custom-home-builder, /services/residential-additions, /services/design-build, /contact, /portfolio, /design-center, /we-coat)
- End with a call-to-action paragraph

Return ONLY the JSON object, no markdown fences.`;

  const result = await model.generateContent({
    contents: [
      { role: 'user', parts: [{ text: systemPrompt + '\n\n' + userPrompt }] }
    ],
  });

  let text = result.response.text().trim();

  // Strip markdown fences if present
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    text = fenceMatch[1].trim();
  }

  // Try parsing, if it fails, attempt to fix common JSON issues
  try {
    return JSON.parse(text);
  } catch (e) {
    // Fix unescaped control characters in JSON strings
    const fixed = text
      .replace(/[\x00-\x1f]/g, (ch) => {
        if (ch === '\n') return '\\n';
        if (ch === '\r') return '\\r';
        if (ch === '\t') return '\\t';
        return '';
      });
    try {
      return JSON.parse(fixed);
    } catch (e2) {
      // Last resort: extract fields manually
      const contentMatch = text.match(/"content"\s*:\s*"([\s\S]*?)(?:"\s*,\s*"excerpt)/);
      const excerptMatch = text.match(/"excerpt"\s*:\s*"([\s\S]*?)(?:"\s*,\s*"meta)/);
      const titleMatch = text.match(/"metaTitle"\s*:\s*"([^"]*?)"/);
      const descMatch = text.match(/"metaDescription"\s*:\s*"([^"]*?)"/);
      if (contentMatch) {
        return {
          content: contentMatch[1].replace(/\\"/g, '"').replace(/\\n/g, '\n'),
          excerpt: excerptMatch ? excerptMatch[1] : '',
          metaTitle: titleMatch ? titleMatch[1] : '',
          metaDescription: descMatch ? descMatch[1] : '',
        };
      }
      throw new Error(`JSON parse failed: ${e.message}`);
    }
  }
}

async function main() {
  console.log('=== Blog Content Generator ===');

  if (!GEMINI_API_KEY) {
    console.error('ERROR: GEMINI_API_KEY not set');
    process.exit(1);
  }

  const topics = JSON.parse(fs.readFileSync(topicsFile, 'utf-8'));
  const batch = topics.slice(startIdx, startIdx + limit);

  console.log(`Processing ${batch.length} topics (starting at ${startIdx})`);
  console.log('');

  const results = [];
  let generated = 0;
  let failed = 0;

  for (let i = 0; i < batch.length; i++) {
    const topic = batch[i];
    console.log(`[${i + 1}/${batch.length}] ${topic.title}`);

    try {
      let content;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          content = await generateContent(topic);
          break;
        } catch (retryErr) {
          if (attempt === 3) throw retryErr;
          console.log(`  ⚠ Attempt ${attempt} failed, retrying...`);
          await sleep(3000);
        }
      }

      results.push({
        id: String(topic.startId + i),
        title: topic.title,
        slug: topic.slug,
        excerpt: content.excerpt || topic.title,
        content: content.content,
        date: new Date().toISOString().split('T')[0],
        category: topic.categoryLabel,
        categorySlug: topic.categorySlug,
        image: `/images/blog/${topic.slug}.jpg`,
        author: 'We Build Team',
      });

      console.log(`  ✓ Generated (${content.content.length} chars)`);
      generated++;

      // Rate limit
      if (i < batch.length - 1) {
        await sleep(2000);
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
      failed++;
      await sleep(2000);
    }
  }

  // Save results
  const outputFile = topicsFile.replace('.json', '-results.json');
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));

  console.log('');
  console.log('=== Summary ===');
  console.log(`Generated: ${generated}`);
  console.log(`Failed: ${failed}`);
  console.log(`Output: ${outputFile}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
