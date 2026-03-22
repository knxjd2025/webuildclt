/**
 * Groq client for Kimi K2 model
 * Handles research and draft generation for blog posts
 * Always anchored to the user's description and We Build business context
 */

import type GroqType from 'groq-sdk';
import { BUSINESS_CONTEXT } from './business-context';

const DEFAULT_MODEL = 'moonshotai/kimi-k2-instruct';

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
 * Research a construction topic using Kimi K2 via Groq.
 * The user's description is the PRIMARY topic — research must stay focused on it.
 */
export async function researchWithKimi(
  userDescription: string,
  category: string
): Promise<string> {
  const groq = getGroqClient();

  const systemPrompt = `You are a construction industry research expert working for We Build.

${BUSINESS_CONTEXT}

YOUR JOB: Research the EXACT topic the user described. Do NOT deviate to a different topic.

For the topic provided, you must provide:

1. KEY FACTS & STATISTICS: Industry data, cost ranges, project timelines, and regulatory information. Focus on Charlotte, NC and the Carolinas when relevant.

2. LSI KEYWORDS: 20-30 related search terms including long-tail phrases and Charlotte/NC geographic modifiers.

3. INDUSTRY CONTEXT: Current trends, best practices, code requirements, and common challenges.

4. LOCAL RELEVANCE: Charlotte-specific information when applicable (neighborhoods, zoning, climate, building codes).

CRITICAL: Your research MUST be about the topic the user described. If they say "cemetery mausoleum roofing" — research cemetery mausoleum roofing, NOT something unrelated. Stay on topic.`;

  const userPrompt = `Research this EXACT topic for a blog post. Do NOT change the topic:

USER'S TOPIC: "${userDescription}"
CATEGORY: ${category}

Provide comprehensive research focused specifically on "${userDescription}" for We Build's blog. This research will be used to write a 3000-5000 word blog post.`;

  const response = await groq.chat.completions.create({
    model: getModel(),
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.7,
    max_tokens: 4096,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No research content returned from Kimi K2');
  }

  return content;
}

/**
 * Draft a full blog post using Kimi K2 via Groq.
 * The draft MUST be about the user's exact topic — no topic drift allowed.
 */
export async function draftWithKimi(
  userDescription: string,
  research: string,
  category: string
): Promise<string> {
  const groq = getGroqClient();

  const systemPrompt = `You are an expert SEO content writer for We Build.

${BUSINESS_CONTEXT}

CRITICAL WRITING REQUIREMENTS:

1. TOPIC ADHERENCE: Write about "${userDescription}" — this is the user's chosen topic. Do NOT change the subject to something else. The entire blog must be about this specific topic.

2. WORD COUNT: Write between 3,000 and 5,000 words. This is non-negotiable.

3. HTML FORMAT: Use these tags: <h2>, <h3>, <p>, <ul>, <li>, <ol>, <strong>, <em>, <a>, <blockquote>, <table>, <div>. No <h1>, no wrapper tags.

   USE THESE VISUAL COMPONENTS for variety (never have 3+ consecutive plain paragraphs):

   CALLOUT: <div class="callout callout-tip"><div class="callout-title">Pro Tip</div><p>Content</p></div>
   Variants: callout (orange), callout-tip (green), callout-warning (amber), callout-cost (blue)

   PROCESS STEPS: <div class="process-steps"><div class="process-step"><h3>Title</h3><p>Desc</p></div></div>

   COST TABLE: <table class="cost-table"><thead><tr><th>Item</th><th>Cost</th></tr></thead><tbody><tr><td>Name</td><td class="cost-value">$X-$Y</td></tr></tbody></table>

   STATS GRID: <div class="stats-grid"><div class="stat-card"><div class="stat-value">60+</div><div class="stat-label">Years</div></div></div>

   KEY TAKEAWAY (once, near end): <div class="key-takeaway"><h3>Key Takeaways</h3><ul><li>Point</li></ul></div>

   INLINE CTA: <div class="inline-cta"><p>CTA text</p><a href="/contact">Get a Free Quote</a></div>

   TWO-COLUMN: <div class="two-col"><div><h3>A</h3><p>Details</p></div><div><h3>B</h3><p>Details</p></div></div>

   Use at least 1 callout, 1 process-steps or cost-table, 1 stats-grid, and 1 key-takeaway per post.

4. CHARLOTTE NC REFERENCES: Naturally mention Charlotte, NC and surrounding areas at least 8-10 times.

5. INTERNAL LINKS: Include at least 5-7 internal links using the exact paths from the business context above. Only include links relevant to this topic.

6. SEO STRUCTURE: Use clear H2/H3 hierarchy. Include the primary topic in at least 2 H2 headings.

7. CTAs: Include 2-3 natural calls-to-action encouraging readers to contact We Build.

8. E-E-A-T: Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness.

9. DO NOT make up project names, client names, or case studies.

OUTPUT: Return ONLY the HTML content. No markdown, no code fences, no explanatory text.`;

  const userPrompt = `Write a comprehensive blog post on this EXACT topic:

TOPIC: "${userDescription}"
CATEGORY: ${category}

Use this research to inform your writing (but stay on the topic above):

${research}

Remember: The blog MUST be about "${userDescription}". 3,000-5,000 words, HTML format, Charlotte NC references, internal links to We Build pages.`;

  const response = await groq.chat.completions.create({
    model: getModel(),
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0.75,
    max_tokens: 16384,
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error('No draft content returned from Kimi K2');
  }

  return content;
}
