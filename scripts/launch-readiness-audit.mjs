#!/usr/bin/env node
// Launch-readiness audit: scores every page on SEO/AEO/CTA/design metrics.
// Outputs prioritized fix list at docs/launch-readiness.md.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const APP_DIR = join(ROOT, 'src', 'app');
const OUT = join(ROOT, 'docs', 'launch-readiness.md');

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) yield* walk(full);
    else if (entry === 'page.tsx') yield full;
  }
}

const SKIP = [/\[slug\]/, /\[id\]/, /ytuF-EDR5y64d/];

function pathToUrl(file) {
  const rel = relative(APP_DIR, file).replace(/\\/g, '/').replace(/\/page\.tsx$/, '');
  return rel === 'page.tsx' || rel === '' ? '/' : `/${rel}`;
}

function audit(file, src) {
  const url = pathToUrl(file);

  // Estimate word count: extract all string literals with substantial text (>20 chars)
  // This captures both JSX text and content stored in data arrays/objects
  const stripped = src
    .replace(/import[^;]*;/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '');
  // Match string literals: 'text', "text", `text` (skipping technical strings)
  const strings = [...stripped.matchAll(/['"`]([^'"`\n]{20,})['"`]/g)].map((m) => m[1]);
  // Filter out technical strings (URLs, classNames, schema strings, etc.)
  const textStrings = strings.filter((s) => {
    if (/^https?:\/\//.test(s)) return false;
    if (/^\/[a-z0-9\-/]*$/.test(s)) return false; // path
    if (/^[a-z0-9-]+$/i.test(s)) return false; // single token (className-like)
    if (/className|tw-|^bg-|^text-|^flex|^grid|^px-|^py-|^mx-|^my-/.test(s)) return false;
    if (s.length < 20) return false;
    return /\s[a-zA-Z]/.test(s); // must contain a space + letter (real prose)
  });
  const allText = textStrings.join(' ');
  const words = (allText.match(/\b[a-zA-Z]{2,}\b/g) || []).length;

  // CTAs: count phone links, contact links, "Get Quote" / "Free Consultation" buttons
  const phoneLinks = (src.match(/href=["']tel:/g) || []).length;
  const contactLinks = (src.match(/href=["']\/contact/g) || []).length;
  const buttonCount = (src.match(/<Button[\s>]/g) || []).length;
  const ctaTextHits = (src.match(/(?:Get|Request|Free|Schedule|Call|Contact)\s+(?:a\s+)?(?:Quote|Estimate|Consultation|Today|Now|Us)/gi) || []).length;

  // FAQ depth — count question/answer pairs
  const faqQuestions = (src.match(/question:/g) || []).length;
  const faqUsage = src.includes('faqSchema') || src.includes('FaqAccordion');

  // Internal links to other pages — count both literal hrefs and interpolated <Link> usage
  const internalLinks = new Set();
  const linkMatches = src.matchAll(/href=["'](\/[a-z0-9\-/]*)["']/g);
  for (const m of linkMatches) {
    if (!m[1].startsWith('/api') && !m[1].startsWith('/ytuF')) internalLinks.add(m[1]);
  }
  // Heuristic: count <Link href={...}> with a variable expression (likely an internal URL from data)
  const dynamicLinkCount = (src.match(/<Link\s+[^>]*?href=\{[^}]+\}/g) || []).length;
  const totalInternalLinks = internalLinks.size + dynamicLinkCount;

  // Trust signals — testimonials, certifications, badges
  const trustHits =
    (src.match(/testimonial/gi) || []).length +
    (src.match(/USGBC|FAA|OSHA|licensed|insured|veteran[- ]owned/gi) || []).length;

  // Hero presence — PageHero or hero section
  const hasHero = /PageHero|<section[^>]*hero|HeroSlideshow/i.test(src);

  // Schema completeness
  const schemas = {
    service: src.includes('serviceSchema'),
    faq: src.includes('faqSchema'),
    breadcrumb: src.includes('breadcrumbSchema'),
    localBusiness: src.includes('localBusinessSchema'),
  };
  const schemaCount = Object.values(schemas).filter(Boolean).length;

  // Score (0-100)
  let score = 0;
  const issues = [];

  // Word count: 30 points
  if (words >= 1500) score += 30;
  else if (words >= 1000) {
    score += 22;
    issues.push(`thin content (${words} words; aim 1500+)`);
  } else if (words >= 500) {
    score += 12;
    issues.push(`thin content (${words} words; aim 1500+)`);
  } else {
    issues.push(`very thin (${words} words)`);
  }

  // CTA presence: 20 points
  const totalCTAs = phoneLinks + contactLinks + ctaTextHits;
  if (totalCTAs >= 5) score += 20;
  else if (totalCTAs >= 3) {
    score += 14;
    issues.push(`only ${totalCTAs} CTAs (aim 5+)`);
  } else if (totalCTAs >= 1) {
    score += 6;
    issues.push(`weak CTAs (${totalCTAs}; aim 5+)`);
  } else {
    issues.push('NO CTAs detected');
  }

  // FAQ depth: 15 points
  if (faqQuestions >= 6) score += 15;
  else if (faqQuestions >= 3) {
    score += 9;
    issues.push(`only ${faqQuestions} FAQs (aim 6+)`);
  } else if (faqUsage) {
    score += 4;
    issues.push(`FAQ schema imported but no questions visible`);
  } else {
    issues.push('NO FAQ section');
  }

  // Internal links: 10 points (literal + dynamic <Link href={...}>)
  if (totalInternalLinks >= 5) score += 10;
  else if (totalInternalLinks >= 3) {
    score += 6;
    issues.push(`only ${totalInternalLinks} internal links`);
  } else {
    issues.push(`only ${totalInternalLinks} internal links (aim 5+)`);
  }

  // Trust signals: 10 points
  if (trustHits >= 5) score += 10;
  else if (trustHits >= 2) {
    score += 5;
    issues.push(`weak trust signals (${trustHits} mentions)`);
  } else {
    issues.push('NO trust signals (USGBC/licensed/veteran/etc.)');
  }

  // Hero: 5 points
  if (hasHero) score += 5;
  else issues.push('no hero section detected');

  // Schema: 10 points (2.5 per schema type, max 4 types)
  score += Math.min(10, schemaCount * 2.5);
  if (schemaCount < 3) issues.push(`only ${schemaCount}/4 schema types`);

  return {
    url,
    file: relative(ROOT, file).replace(/\\/g, '/'),
    score: Math.round(score),
    words,
    ctas: { phone: phoneLinks, contact: contactLinks, button: buttonCount, text: ctaTextHits, total: totalCTAs },
    faqs: faqQuestions,
    internalLinks: totalInternalLinks,
    trust: trustHits,
    schemaCount,
    issues,
  };
}

const pages = [];
for (const file of walk(APP_DIR)) {
  const rel = relative(ROOT, file);
  if (SKIP.some((p) => p.test(rel))) continue;
  const src = readFileSync(file, 'utf8');
  // Skip redirect-only files
  if (src.length < 300 && /redirect\(/.test(src)) continue;
  pages.push(audit(file, src));
}

pages.sort((a, b) => a.score - b.score);

let md = `# Launch-Readiness Audit\n\n_Generated: ${new Date().toISOString()}_\n\n`;
md += `**Pages audited:** ${pages.length}  \n`;
md += `**Average score:** ${Math.round(pages.reduce((s, p) => s + p.score, 0) / pages.length)}/100\n\n`;

const tier = (s) => (s >= 80 ? 'READY' : s >= 60 ? 'NEEDS POLISH' : s >= 40 ? 'NEEDS WORK' : 'CRITICAL');
const buckets = { 'READY': 0, 'NEEDS POLISH': 0, 'NEEDS WORK': 0, 'CRITICAL': 0 };
pages.forEach((p) => buckets[tier(p.score)]++);
md += `**Tier breakdown:**\n`;
for (const [k, v] of Object.entries(buckets)) md += `- ${k}: ${v}\n`;
md += '\n';

md += `## Page scores (worst → best)\n\n`;
md += `| Page | Score | Tier | Words | CTAs | FAQs | Links | Trust | Schemas | Top issues |\n`;
md += `|------|-------|------|-------|------|------|-------|-------|---------|------------|\n`;
for (const p of pages) {
  const issues = p.issues.slice(0, 3).join('; ');
  md += `| \`${p.url}\` | **${p.score}** | ${tier(p.score)} | ${p.words} | ${p.ctas.total} | ${p.faqs} | ${p.internalLinks} | ${p.trust} | ${p.schemaCount}/4 | ${issues} |\n`;
}

md += `\n## Top 20 priority fixes\n\n`;
const top20 = pages.slice(0, 20);
for (const p of top20) {
  md += `### ${p.url} — score ${p.score}/100 (${tier(p.score)})\n`;
  md += `**File:** \`${p.file}\`  \n`;
  md += `**Stats:** ${p.words} words · ${p.ctas.total} CTAs (phone:${p.ctas.phone}, contact:${p.ctas.contact}, text:${p.ctas.text}) · ${p.faqs} FAQs · ${p.internalLinks} internal links · ${p.trust} trust signals · ${p.schemaCount}/4 schemas\n\n`;
  md += `**Issues:**\n`;
  for (const i of p.issues) md += `- ${i}\n`;
  md += '\n';
}

writeFileSync(OUT, md);
console.log(`Wrote ${OUT}`);
console.log(`Pages: ${pages.length}`);
console.log(`Tiers: READY ${buckets['READY']}, POLISH ${buckets['NEEDS POLISH']}, WORK ${buckets['NEEDS WORK']}, CRITICAL ${buckets['CRITICAL']}`);
console.log(`\nWorst 5:`);
for (const p of pages.slice(0, 5)) console.log(`  ${p.url} — ${p.score}/100`);
