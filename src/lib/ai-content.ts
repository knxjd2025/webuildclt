/**
 * AI content generator for project pages
 * Uses Claude (Anthropic) to create SEO-optimized, geo-tagged project descriptions
 */

import type AnthropicType from '@anthropic-ai/sdk';

function getAnthropic(): AnthropicType {
  // Dynamic require to prevent build-time initialization without API key
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Anthropic = require('@anthropic-ai/sdk').default;
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
}

interface ProjectInput {
  title: string;
  short_description: string;
  category: string;
  service_type: string;
  address?: string | null;
  city: string;
  state: string;
  neighborhood?: string | null;
  square_footage?: number | null;
  completion_date?: string | null;
}

interface GeneratedContent {
  content: string;
  metaTitle: string;
  metaDescription: string;
}

export async function generateProjectContent(
  project: ProjectInput
): Promise<GeneratedContent> {
  const locationStr = [
    project.neighborhood,
    project.city,
    project.state,
  ]
    .filter(Boolean)
    .join(', ');

  const addressStr = project.address
    ? `Project address: ${project.address}`
    : '';

  const sqftStr = project.square_footage
    ? `Project size: approximately ${project.square_footage.toLocaleString()} square feet`
    : '';

  const dateStr = project.completion_date
    ? `Completed: ${project.completion_date}`
    : '';

  const systemPrompt = `You are an SEO content writer for We Build, a veteran and family-owned construction company in Charlotte, NC.
We Build specializes in commercial and residential construction, upfits, roof coatings, and design-build projects.
Headquarters: 14330 S Lakes Drive, Charlotte NC 28273. Phone: (704) 574-8124.
USGBC (U.S. Green Building Council) member.

Your job is to write project portfolio pages that:
1. RANK IN GOOGLE for hyper-local search terms (neighborhood + service type + city)
2. GET CITED by AI answer engines (ChatGPT, Perplexity, Google AI Overviews) — write factual, attributable statements
3. ENGAGE human readers with compelling project storytelling

CRITICAL SEO RULES:
- Naturally mention the neighborhood, city, and surrounding area names multiple times
- Include the service type and construction-related keywords naturally
- Reference nearby landmarks, corridors, or well-known areas when relevant
- Write in a professional but approachable tone
- Use specific details (square footage, project scope, techniques used)
- Make statements that AI can cite: "We Build completed a [type] project in [location]..."
- Include internal linking suggestions as HTML anchor tags to /services/[type] and /areas/[area]

OUTPUT FORMAT: Return ONLY valid JSON (no markdown fences, no extra text) with exactly these fields:
{
  "content": "HTML content (800-1200 words, use <h2>, <h3>, <p>, <ul>, <li> tags, NO <h1>)",
  "metaTitle": "Under 60 characters, include location + service type",
  "metaDescription": "Under 155 characters, compelling with location + service type"
}`;

  const userPrompt = `Write a project portfolio page for:

Title: ${project.title}
Description: ${project.short_description}
Category: ${project.category}
Service Type: ${project.service_type.replace(/-/g, ' ')}
Location: ${locationStr}
${addressStr}
${sqftStr}
${dateStr}

Structure the content as:
1. Opening paragraph — project name, location, neighborhood, what was done
2. Project Scope & Challenges — what the client needed, any unique challenges
3. Our Approach — construction methods, materials, design choices
4. Results & Impact — how the finished project serves the client/community
5. Area Context — why ${project.neighborhood || project.city} is a great area, nearby landmarks, growth
6. Why Choose We Build — brief CTA paragraph mentioning veteran-owned, family-owned, USGBC member

Remember: Write for ${locationStr} specifically. This page should rank for "${project.service_type.replace(/-/g, ' ')} ${project.neighborhood || project.city} ${project.state}".`;

  const anthropic = getAnthropic();

  const response = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4096,
    system: systemPrompt,
    messages: [
      { role: 'user', content: userPrompt },
    ],
  });

  const textBlock = response.content.find(
    (block: { type: string }) => block.type === 'text'
  );
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('No content generated from AI');
  }

  // Extract JSON — handle possible markdown fences
  let jsonStr = (textBlock as { type: 'text'; text: string }).text.trim();
  const fenceMatch = jsonStr.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenceMatch) {
    jsonStr = fenceMatch[1].trim();
  }

  const parsed = JSON.parse(jsonStr) as GeneratedContent;

  if (!parsed.content || !parsed.metaTitle || !parsed.metaDescription) {
    throw new Error('AI response missing required fields');
  }

  return parsed;
}
