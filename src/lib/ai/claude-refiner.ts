/**
 * Claude refiner for blog post enhancement
 * Takes a Kimi K2 draft and refines it with SEO data from DataForSEO
 * Always anchored to the user's description and We Build business context
 */

import type AnthropicType from '@anthropic-ai/sdk';
import { BUSINESS_CONTEXT } from './business-context';

interface RefinedBlogPost {
  content: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

function getAnthropic(): AnthropicType {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Anthropic = require('@anthropic-ai/sdk').default;
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

/**
 * Refine a draft blog post using Claude.
 * Enhances content quality, SEO, internal linking, and generates metadata.
 * Uses DataForSEO keyword data when provided.
 */
export async function refineWithClaude(
  draft: string,
  userDescription: string,
  category: string,
  keywordData?: { primaryKeyword: string; secondaryKeywords: string[]; searchVolume: number }
): Promise<RefinedBlogPost> {
  const anthropic = getAnthropic();

  const keywordSection = keywordData
    ? `
DATAFORSEO KEYWORD DATA (use these for SEO optimization):
- Primary keyword: "${keywordData.primaryKeyword}" (monthly search volume: ${keywordData.searchVolume})
- Secondary keywords: ${keywordData.secondaryKeywords.join(', ')}
- Naturally weave these keywords into the content, headings, and metadata
`
    : '';

  const systemPrompt = `You are a senior SEO editor and content strategist for We Build.

${BUSINESS_CONTEXT}

${keywordSection}

CRITICAL: The user's topic is "${userDescription}". The blog MUST remain about this topic. Do NOT change the subject. If the draft has drifted off-topic, pull it back to "${userDescription}".

Your job is to refine the draft into a polished, SEO-optimized piece that will:
1. RANK on Google for the target topic
2. GET CITED by AI answer engines (ChatGPT, Perplexity, Google AI Overviews)
3. CONVERT readers into leads for We Build
4. STAY ON TOPIC — the blog is about "${userDescription}", period

REFINEMENT REQUIREMENTS:

1. TOPIC ADHERENCE: Every section must relate to "${userDescription}". Remove or rewrite any content that drifts to unrelated topics.

2. WORD COUNT: 3,000–5,000 words. Expand with relevant detail if too short. Tighten if too long.

3. INTERNAL LINKS: 5-7 internal links using exact paths from the business context. Only include contextually relevant links.

4. HTML COMPONENTS: Use these CSS-styled components for visual variety. Never have more than 3 consecutive plain paragraphs without a visual break.

   Basic tags: <h2>, <h3>, <p>, <ul>, <li>, <ol>, <strong>, <em>, <a>, <blockquote>, <table>, <div>. No <h1>, no wrapper tags.

   CALLOUT BOX (use 2-3 per post for tips, warnings, cost notes):
   <div class="callout callout-tip"><div class="callout-title">Pro Tip</div><p>Content here</p></div>
   Variants: callout (default/orange), callout-tip (green), callout-warning (amber), callout-cost (blue)

   KEY TAKEAWAY (use once near the end, summarizing 4-6 main points):
   <div class="key-takeaway"><h3>Key Takeaways</h3><ul><li>Point one</li></ul></div>

   PROCESS STEPS (use for any sequential process, 3-7 steps):
   <div class="process-steps"><div class="process-step"><h3>Step Title</h3><p>Description</p></div></div>

   COST TABLE (use when discussing pricing or comparisons):
   <table class="cost-table"><thead><tr><th>Item</th><th>Cost Range</th></tr></thead><tbody><tr><td>Item</td><td class="cost-value">$X - $Y</td></tr></tbody></table>

   STATS GRID (use for quick facts/numbers, 3-4 items):
   <div class="stats-grid"><div class="stat-card"><div class="stat-value">60+</div><div class="stat-label">Years Experience</div></div></div>

   INLINE CTA (use 2-3 per post):
   <div class="inline-cta"><p>Ready to discuss your project?</p><a href="/contact">Get a Free Quote</a></div>

   TWO-COLUMN LAYOUT (use for comparisons, pros/cons):
   <div class="two-col"><div><h3>Option A</h3><p>Details</p></div><div><h3>Option B</h3><p>Details</p></div></div>

   MINI-STORY (for anecdotes or testimonials):
   <div class="mini-story"><p>Quote text</p><div class="story-attribution">— Attribution</div></div>

   MINIMUM PER POST: At least 1 callout, 1 process-steps or cost-table, 1 stats-grid, 1 inline-cta, and 1 key-takeaway.

5. CHARLOTTE REFERENCES: 8-10+ natural mentions of Charlotte, NC and surrounding areas.

6. E-E-A-T: Strengthen expertise signals. Do NOT make up projects or client names.

7. CTAs: 2-3 natural calls-to-action.

8. TITLE: Generate a compelling title that includes the topic and ideally Charlotte NC.

OUTPUT FORMAT: Return ONLY valid JSON (no markdown fences) with exactly these fields:
{
  "content": "Refined HTML content",
  "metaTitle": "Under 60 chars, includes topic + location",
  "metaDescription": "Under 155 chars, compelling with call to action",
  "excerpt": "2-3 sentence summary under 300 chars",
  "primaryKeyword": "Main keyword phrase this post targets",
  "secondaryKeywords": ["5-8", "secondary", "keyword", "phrases"]
}`;

  const userPrompt = `Refine this draft blog post about "${userDescription}":

DRAFT TO REFINE:

${draft}

Remember: This blog is about "${userDescription}". Stay on this exact topic. Return refined JSON.`;

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 16384,
    system: systemPrompt,
    messages: [
      { role: 'user', content: userPrompt },
    ],
  });

  const textBlock = response.content.find(
    (block: { type: string }) => block.type === 'text'
  );
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No content returned from Claude refiner');
  }

  let jsonStr = (textBlock as { type: 'text'; text: string }).text.trim();
  const fenceMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    jsonStr = fenceMatch[1].trim();
  }

  const parsed = JSON.parse(jsonStr) as RefinedBlogPost;

  const requiredFields: (keyof RefinedBlogPost)[] = [
    'content',
    'metaTitle',
    'metaDescription',
    'excerpt',
    'primaryKeyword',
    'secondaryKeywords',
  ];

  for (const field of requiredFields) {
    if (!parsed[field]) {
      throw new Error(`Claude refiner response missing required field: ${field}`);
    }
  }

  if (parsed.metaTitle.length > 60) {
    parsed.metaTitle = parsed.metaTitle.substring(0, 57).replace(/\s+\S*$/, '') + '...';
  }

  if (parsed.metaDescription.length > 155) {
    parsed.metaDescription = parsed.metaDescription.substring(0, 152).replace(/\s+\S*$/, '') + '...';
  }

  return parsed;
}
