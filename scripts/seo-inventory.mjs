#!/usr/bin/env node
// SEO inventory crawler — extracts page-level metadata and detects keyword cannibalization.
// Usage: node scripts/seo-inventory.mjs

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = process.cwd();
const APP_DIR = join(ROOT, 'src', 'app');
const OUT = join(ROOT, 'docs', 'seo-inventory.md');

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) yield* walk(full);
    else if (entry === 'page.tsx') yield full;
  }
}

const SKIP_PATTERNS = [/\[slug\]/, /\[id\]/, /ytuF-EDR5y64d/];

function pathToUrl(file) {
  const rel = relative(APP_DIR, file).replace(/\\/g, '/');
  const dir = rel.replace(/\/page\.tsx$/, '');
  return dir === 'page.tsx' ? '/' : `/${dir}`;
}

// Extract a string value from a metadata block, handling multi-line strings.
function extractField(src, field) {
  // Match `field: 'value'` or `field: \n  'value'` or `field: \n  'value' + 'more'`
  const re = new RegExp(`\\b${field}\\s*:\\s*([^\\n]*?(?:\\n[^\\n]*?)*?)(?:,\\s*\\n|\\n\\s*[a-zA-Z]+\\s*:)`, 'm');
  const m = src.match(re);
  if (!m) return null;
  let val = m[1].trim();
  // Strip trailing comma
  val = val.replace(/,\s*$/, '');
  // Concatenate string parts: 'a' + 'b' or 'a'\n'b'
  const strParts = [...val.matchAll(/['"`]([^'"`]*)['"`]/g)].map((x) => x[1]);
  if (strParts.length > 0) return strParts.join('');
  return null;
}

function extractKeywords(src) {
  // Find `keywords: [ ... ]` block
  const start = src.search(/\bkeywords\s*:\s*\[/);
  if (start === -1) return [];
  const after = src.slice(start);
  const open = after.indexOf('[');
  let depth = 0;
  let end = -1;
  for (let i = open; i < after.length; i++) {
    if (after[i] === '[') depth++;
    else if (after[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) return [];
  const block = after.slice(open + 1, end);
  return [...block.matchAll(/['"`]([^'"`]+)['"`]/g)]
    .map((x) => x[1].toLowerCase().trim())
    .filter(Boolean);
}

function extractH1(src) {
  // Look for first <h1>...</h1> — may contain JSX expressions
  const m = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1]
    .replace(/<[^>]+>/g, '') // strip nested tags
    .replace(/\{[^}]*\}/g, '...') // mark interpolation
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMetadataBlock(src) {
  // Find `export const metadata: Metadata = { ... }` or `export const metadata = { ... }`
  // Also handle generateMetadata return values
  const idx = src.search(/export\s+const\s+metadata\s*(?::\s*Metadata)?\s*=\s*\{/);
  if (idx !== -1) {
    const open = src.indexOf('{', idx);
    let depth = 0;
    for (let i = open; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') {
        depth--;
        if (depth === 0) return src.slice(open, i + 1);
      }
    }
  }
  // generateMetadata fallback — find return { ... }
  const idx2 = src.search(/export\s+async\s+function\s+generateMetadata/);
  if (idx2 !== -1) {
    const ret = src.slice(idx2).search(/return\s*\{/);
    if (ret !== -1) {
      const start = idx2 + ret;
      const open = src.indexOf('{', start);
      let depth = 0;
      for (let i = open; i < src.length; i++) {
        if (src[i] === '{') depth++;
        else if (src[i] === '}') {
          depth--;
          if (depth === 0) return src.slice(open, i + 1);
        }
      }
    }
  }
  return null;
}

function inferPrimaryKeyword(title, keywords) {
  if (!title && keywords.length === 0) return null;
  // First keyword is usually primary
  if (keywords.length > 0) return keywords[0];
  // Fallback: first 4-5 words of title before pipe
  const t = (title || '').split('|')[0].trim().toLowerCase();
  return t.split(/\s+/).slice(0, 5).join(' ');
}

const pages = [];
for (const file of walk(APP_DIR)) {
  const rel = relative(ROOT, file);
  if (SKIP_PATTERNS.some((p) => p.test(rel))) continue;
  const src = readFileSync(file, 'utf8');
  const block = extractMetadataBlock(src);
  const title = block ? extractField(block, 'title') : null;
  const description = block ? extractField(block, 'description') : null;
  const keywords = block ? extractKeywords(block) : [];
  const h1 = extractH1(src);
  const url = pathToUrl(file);
  pages.push({
    url,
    file: rel.replace(/\\/g, '/'),
    title,
    description,
    keywords,
    h1,
    primary: inferPrimaryKeyword(title, keywords),
  });
}

// Cannibalization: bucket pages by primary keyword and by overlap of top-3 keywords
const primaryBuckets = {};
for (const p of pages) {
  if (!p.primary) continue;
  const key = p.primary.toLowerCase().trim();
  primaryBuckets[key] ??= [];
  primaryBuckets[key].push(p);
}

// Cross-page keyword frequency
const kwToPages = {};
for (const p of pages) {
  for (const kw of p.keywords.slice(0, 5)) {
    kwToPages[kw] ??= new Set();
    kwToPages[kw].add(p.url);
  }
}
const sharedTopKeywords = Object.entries(kwToPages)
  .filter(([, urls]) => urls.size >= 2)
  .map(([kw, urls]) => ({ kw, urls: [...urls] }))
  .sort((a, b) => b.urls.length - a.urls.length);

// Build markdown report
let md = `# SEO Inventory & Cannibalization Audit\n\n`;
md += `_Generated: ${new Date().toISOString()}_\n\n`;
md += `Total pages audited: **${pages.length}**\n\n`;

md += `## Page Inventory\n\n`;
md += `| URL | Title (chars) | Desc (chars) | H1 | Primary KW |\n`;
md += `|-----|---------------|--------------|----|-----------|\n`;
for (const p of pages.sort((a, b) => a.url.localeCompare(b.url))) {
  const tLen = p.title?.length ?? 0;
  const dLen = p.description?.length ?? 0;
  const tFlag = !p.title ? '⚠️ MISSING' : tLen > 60 ? `⚠️ ${tLen}` : tLen < 40 ? `⚠️ ${tLen}` : tLen;
  const dFlag = !p.description ? '⚠️ MISSING' : dLen > 160 ? `⚠️ ${dLen}` : dLen < 120 ? `⚠️ ${dLen}` : dLen;
  const titleEsc = (p.title ?? '—').replace(/\|/g, '\\|').slice(0, 80);
  const h1Esc = (p.h1 ?? '—').replace(/\|/g, '\\|').slice(0, 60);
  const pkEsc = (p.primary ?? '—').slice(0, 50);
  md += `| \`${p.url}\` | ${tFlag} | ${dFlag} | ${h1Esc} | ${pkEsc} |\n`;
}

md += `\n## Cannibalization Findings\n\n`;
const dupes = Object.entries(primaryBuckets).filter(([, ps]) => ps.length > 1);
if (dupes.length === 0) {
  md += `No two pages share the same exact primary keyword.\n\n`;
} else {
  md += `### Pages competing for identical primary keyword\n\n`;
  for (const [kw, ps] of dupes) {
    md += `- **"${kw}"** — ${ps.map((p) => `\`${p.url}\``).join(', ')}\n`;
  }
  md += '\n';
}

md += `### Top-5 keywords appearing on multiple pages (overlap risk)\n\n`;
md += `| Keyword | # pages | Pages |\n|---------|---------|-------|\n`;
for (const { kw, urls } of sharedTopKeywords.slice(0, 30)) {
  md += `| ${kw} | ${urls.length} | ${urls.map((u) => `\`${u}\``).join(', ')} |\n`;
}

md += `\n## Issues Summary\n\n`;
const issues = [];
for (const p of pages) {
  const tLen = p.title?.length ?? 0;
  const dLen = p.description?.length ?? 0;
  if (!p.title) issues.push(`\`${p.url}\` — missing title`);
  else if (tLen > 60) issues.push(`\`${p.url}\` — title too long (${tLen} chars)`);
  else if (tLen < 40) issues.push(`\`${p.url}\` — title too short (${tLen} chars)`);
  if (!p.description) issues.push(`\`${p.url}\` — missing description`);
  else if (dLen > 160) issues.push(`\`${p.url}\` — description too long (${dLen} chars)`);
  else if (dLen < 120) issues.push(`\`${p.url}\` — description too short (${dLen} chars)`);
  if (!p.h1) issues.push(`\`${p.url}\` — no detectable <h1>`);
  if (p.keywords.length === 0) issues.push(`\`${p.url}\` — no keywords array`);
}
md += issues.length === 0 ? `_No issues detected._\n` : issues.map((i) => `- ${i}`).join('\n') + '\n';

writeFileSync(OUT, md);
console.log(`Wrote ${OUT}`);
console.log(`Pages: ${pages.length}, Cannibalization clusters: ${dupes.length}, Shared keywords: ${sharedTopKeywords.length}`);
