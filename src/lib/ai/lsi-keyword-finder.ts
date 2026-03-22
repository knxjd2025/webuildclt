/**
 * LSI keyword finder for blog topic discovery
 * Uses Kimi K2 via Groq to identify untapped keyword opportunities
 */

import type GroqType from 'groq-sdk';

const DEFAULT_MODEL = 'moonshotai/kimi-k2-instruct';

interface LSIKeywordResult {
  keyword: string;
  title: string;
  category: string;
  categorySlug: string;
}

function getGroqClient(): GroqType {
  // Dynamic require to prevent build-time initialization without API key
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Groq = require('groq-sdk').default;
  return new Groq({ apiKey: process.env.GROQ_API_KEY });
}

function getModel(): string {
  return process.env.GROQ_MODEL || DEFAULT_MODEL;
}

/**
 * Find the next best LSI keyword opportunity for blog content.
 * Analyzes existing coverage gaps and suggests an untapped keyword
 * with a blog title and category assignment.
 */
export async function findNextLSIKeyword(
  existingKeywords: string[]
): Promise<LSIKeywordResult> {
  const groq = getGroqClient();

  const existingList = existingKeywords.length > 0
    ? existingKeywords.map((kw, i) => `${i + 1}. ${kw}`).join('\n')
    : '(none yet)';

  const systemPrompt = `You are an SEO keyword strategist specializing in the construction industry in Charlotte, NC.

Your job is to identify the single best untapped LSI (Latent Semantic Indexing) keyword opportunity for a construction company blog. The company is We Build, a veteran and family-owned commercial and residential construction company in Charlotte, NC.

FOCUS AREAS (prioritize keywords related to these services):
- Commercial construction in Charlotte, NC
- General contractor services in Charlotte, NC
- Commercial upfits and tenant improvements
- Office and retail remodeling
- Roof coating and commercial roofing
- Custom home building in Charlotte, NC
- Residential additions and renovations
- Design-build construction
- Charlotte area neighborhoods and surrounding cities

KEYWORD SELECTION CRITERIA:
1. Must have realistic search volume (people actually search for this)
2. Must be specific enough to rank for (not too broad like "construction")
3. Must be relevant to We Build's services
4. Must NOT duplicate any already-covered keywords
5. Prefer long-tail keywords with commercial intent
6. Include Charlotte, NC or surrounding area geographic modifiers when natural

CATEGORIES (assign the keyword to one):
- commercial-construction (categorySlug: commercial-construction)
- general-contractor (categorySlug: general-contractor)
- commercial-upfits (categorySlug: commercial-upfits)
- custom-homes (categorySlug: custom-homes)
- residential-additions (categorySlug: residential-additions)
- roof-coating (categorySlug: roof-coating)
- design-build (categorySlug: design-build)
- construction-tips (categorySlug: construction-tips)

OUTPUT: Return ONLY valid JSON (no markdown fences, no extra text) with exactly these fields:
{
  "keyword": "the LSI keyword phrase",
  "title": "Suggested Blog Post Title (compelling, SEO-optimized)",
  "category": "Human-readable category name",
  "categorySlug": "url-safe-category-slug"
}`;

  const userPrompt = `Find the next best LSI keyword opportunity for our construction blog.

ALREADY COVERED KEYWORDS (do NOT suggest any of these or close variations):
${existingList}

Return a single JSON object with the best untapped keyword, a suggested blog title, and the appropriate category.`;

  const response = await groq.chat.completions.create({
    model: getModel(),
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.8,
    max_tokens: 1024,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No keyword suggestion returned from Kimi K2');
  }

  // Extract JSON from response, handling possible markdown fences
  let jsonStr = content.trim();
  const fenceMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    jsonStr = fenceMatch[1].trim();
  }

  const parsed = JSON.parse(jsonStr) as LSIKeywordResult;

  // Validate required fields
  if (!parsed.keyword || !parsed.title || !parsed.category || !parsed.categorySlug) {
    throw new Error('LSI keyword response missing required fields');
  }

  return parsed;
}
