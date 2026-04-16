/**
 * Blog generation pipeline
 * User's description drives the topic. AI stays on that topic.
 *
 * Pipeline:
 * 1. Kimi K2 — research the user's exact topic
 * 2. Kimi K2 — draft a 3000-5000 word blog about that topic
 * 3. DataForSEO — find best keywords for SEO (feeds into Claude)
 * 4. Claude — refine content with DataForSEO keyword data, generate metadata
 */

import { researchWithKimi, draftWithKimi } from './groq-client';
import { refineWithClaude } from './claude-refiner';
import { findKeywordWithDataForSEO } from './dataforseo-keywords';

export interface BlogGenerationInput {
  description: string;
  category: string;
  categorySlug: string;
  existingKeywords?: string[];
}

export interface BlogGenerationResult {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  wordCount: number;
  imageCount: number;
}

function countWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(' ').filter(Boolean).length;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function generateBlogPost(
  input: BlogGenerationInput
): Promise<BlogGenerationResult> {
  const { description, category, categorySlug, existingKeywords = [] } = input;

  // Step 1: Research the user's exact topic
  console.log(`[blog-pipeline] Step 1/4: Researching "${description}"...`);
  let research: string;
  try {
    research = await researchWithKimi(description, category);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Research step failed: ${message}`);
  }
  console.log(`[blog-pipeline] Research complete (${research.length} chars)`);

  // Step 2: Draft about the user's exact topic
  console.log(`[blog-pipeline] Step 2/4: Drafting blog about "${description}"...`);
  let draft: string;
  try {
    draft = await draftWithKimi(description, research, category);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Draft step failed: ${message}`);
  }
  const draftWordCount = countWords(draft);
  console.log(`[blog-pipeline] Draft complete (${draftWordCount} words)`);

  // Step 3: DataForSEO — find keywords to boost SEO (non-blocking)
  console.log(`[blog-pipeline] Step 3/4: Finding SEO keywords via DataForSEO...`);
  let keywordData: { primaryKeyword: string; secondaryKeywords: string[]; searchVolume: number } | undefined;
  try {
    const result = await findKeywordWithDataForSEO(description, categorySlug, existingKeywords);
    keywordData = {
      primaryKeyword: result.primaryKeyword,
      secondaryKeywords: result.secondaryKeywords,
      searchVolume: result.searchVolume,
    };
    console.log(`[blog-pipeline] DataForSEO keyword: "${keywordData.primaryKeyword}" (vol: ${keywordData.searchVolume})`);
  } catch (error) {
    console.warn(`[blog-pipeline] DataForSEO failed (non-blocking):`, error);
    // Continue without keyword data — Claude will still refine
  }

  // Step 4: Claude refines with DataForSEO data
  console.log(`[blog-pipeline] Step 4/4: Refining with Claude + SEO data...`);
  let refined;
  try {
    refined = await refineWithClaude(draft, description, category, keywordData);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Refine step failed: ${message}`);
  }

  const finalWordCount = countWords(refined.content);
  console.log(`[blog-pipeline] Refinement complete (${finalWordCount} words)`);

  // Calculate recommended image count: 1 per 500 words, min 2, max 8
  const rawImageCount = Math.floor(finalWordCount / 500);
  const imageCount = Math.max(2, Math.min(8, rawImageCount));
  console.log(`[blog-pipeline] Recommended images: ${imageCount} (based on ${finalWordCount} words)`);

  const title = refined.metaTitle.replace(/\s*\|.*$/, '').replace(/\s*[-–].*$/, '').trim();
  const slug = generateSlug(title);

  return {
    title,
    slug,
    content: refined.content,
    excerpt: refined.excerpt,
    metaTitle: refined.metaTitle,
    metaDescription: refined.metaDescription,
    primaryKeyword: refined.primaryKeyword,
    secondaryKeywords: refined.secondaryKeywords,
    wordCount: finalWordCount,
    imageCount,
  };
}
