/**
 * Blog HTML enricher — transforms plain AI-generated HTML into visually rich
 * content using the CSS component vocabulary from globals.css.
 *
 * Runs server-side between fetching from Supabase and rendering.
 * Idempotent: running on already-enriched content produces the same output.
 */

/**
 * Sanitize HTML — strip dangerous tags/attributes before rendering.
 */
function sanitize(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '');
}

/**
 * Detect and wrap "Pro Tip:", "Note:", "Important:", "Warning:", "Cost:"
 * patterns in callout divs.
 */
function enrichCallouts(html: string): string {
  // Skip if already has callout divs
  if (html.includes('class="callout')) return html;

  const calloutMap: Record<string, { cls: string; title: string }> = {
    'pro tip': { cls: 'callout callout-tip', title: 'Pro Tip' },
    'tip': { cls: 'callout callout-tip', title: 'Tip' },
    'note': { cls: 'callout', title: 'Note' },
    'important': { cls: 'callout callout-warning', title: 'Important' },
    'warning': { cls: 'callout callout-warning', title: 'Warning' },
    'cost note': { cls: 'callout callout-cost', title: 'Cost Note' },
    'cost consideration': { cls: 'callout callout-cost', title: 'Cost Consideration' },
    'budget tip': { cls: 'callout callout-cost', title: 'Budget Tip' },
  };

  for (const [keyword, { cls, title }] of Object.entries(calloutMap)) {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match: <p><strong>Keyword:</strong> content</p>
    const pattern = new RegExp(
      `<p>\\s*<strong>${escapedKeyword}:?</strong>\\s*(.+?)</p>`,
      'gi'
    );
    html = html.replace(pattern, (_match, content) =>
      `<div class="${cls}"><div class="callout-title">${title}</div><p>${content.trim()}</p></div>`
    );
  }

  return html;
}

/**
 * Detect dollar amounts in list/table patterns and wrap in cost-table.
 */
function enrichCostTables(html: string): string {
  if (html.includes('class="cost-table')) return html;

  // Find <ul> blocks where most <li> items contain dollar amounts
  const ulPattern = /<ul>([\s\S]*?)<\/ul>/gi;
  let match;
  const replacements: Array<{ original: string; replacement: string }> = [];

  while ((match = ulPattern.exec(html)) !== null) {
    const block = match[0];
    const items = match[1];
    const liMatches = [...items.matchAll(/<li>([\s\S]*?)<\/li>/gi)];

    if (liMatches.length < 2) continue;

    // Check if most items contain dollar amounts
    const dollarCount = liMatches.filter((li) =>
      /\$[\d,]+/.test(li[1])
    ).length;

    if (dollarCount < liMatches.length * 0.5) continue;

    // Convert to cost table
    const rows = liMatches
      .map((li) => {
        const text = li[1].replace(/<[^>]*>/g, '');
        // Try to split on colon, dash, or dollar sign
        const splitMatch = text.match(/^(.+?)[:–—-]\s*(\$[\d,]+.*)/);
        if (splitMatch) {
          return `<tr><td>${splitMatch[1].trim()}</td><td class="cost-value">${splitMatch[2].trim()}</td></tr>`;
        }
        // Fallback: find dollar amount
        const dollarMatch = text.match(/^(.*?)(\$[\d,]+.*)/);
        if (dollarMatch) {
          return `<tr><td>${dollarMatch[1].trim() || 'Item'}</td><td class="cost-value">${dollarMatch[2].trim()}</td></tr>`;
        }
        return `<tr><td colspan="2">${text}</td></tr>`;
      })
      .join('\n');

    const table = `<table class="cost-table"><thead><tr><th>Item</th><th>Cost Range</th></tr></thead><tbody>${rows}</tbody></table>`;
    replacements.push({ original: block, replacement: table });
  }

  for (const { original, replacement } of replacements) {
    html = html.replace(original, replacement);
  }

  return html;
}

/**
 * Detect sequential step patterns and wrap in process-steps.
 */
function enrichProcessSteps(html: string): string {
  if (html.includes('class="process-step')) return html;

  // Pattern: consecutive h3 + p blocks that look like steps
  // Look for "Step 1:", "Phase 1:", numbered headings
  const stepPattern = /<h3[^>]*>\s*(?:Step|Phase|Stage)\s*\d+[:.]\s*(.*?)<\/h3>\s*(<p>[\s\S]*?)(?=<h[23]|<div|$)/gi;
  const steps: Array<{ title: string; content: string; original: string }> = [];
  let stepMatch;

  while ((stepMatch = stepPattern.exec(html)) !== null) {
    steps.push({
      title: stepMatch[1].trim(),
      content: stepMatch[2].trim(),
      original: stepMatch[0],
    });
  }

  if (steps.length >= 3) {
    const stepsHtml = steps
      .map((s) => `<div class="process-step"><h3>${s.title}</h3>${s.content}</div>`)
      .join('\n');
    const wrapper = `<div class="process-steps">${stepsHtml}</div>`;

    // Replace the first step with the wrapper, remove the rest
    html = html.replace(steps[0].original, wrapper);
    for (let i = 1; i < steps.length; i++) {
      html = html.replace(steps[i].original, '');
    }
  }

  return html;
}

/**
 * Inject inline CTAs at natural break points (after every ~3rd h2 section)
 * if no inline-cta already exists.
 */
function enrichInlineCTAs(html: string): string {
  if (html.includes('class="inline-cta')) return html;

  const ctaTemplates = [
    '<div class="inline-cta"><p>Ready to discuss your construction project?</p><a href="/contact">Get a Free Consultation</a></div>',
    '<div class="inline-cta"><p>See our completed projects across Charlotte, NC.</p><a href="/portfolio">View Our Portfolio</a></div>',
    '<div class="inline-cta"><p>Learn about our veteran-owned approach to commercial construction.</p><a href="/about">About We Build</a></div>',
  ];

  // Find all h2 positions
  const h2Pattern = /<h2[^>]*>/gi;
  const h2Positions: number[] = [];
  let h2Match;
  while ((h2Match = h2Pattern.exec(html)) !== null) {
    h2Positions.push(h2Match.index);
  }

  if (h2Positions.length < 4) return html;

  // Insert CTAs after every 3rd h2 section (before the next h2)
  let insertCount = 0;
  let offset = 0;
  for (let i = 3; i < h2Positions.length; i += 3) {
    if (insertCount >= ctaTemplates.length) break;
    const insertPos = h2Positions[i] + offset;
    const cta = ctaTemplates[insertCount];
    html = html.slice(0, insertPos) + cta + html.slice(insertPos);
    offset += cta.length;
    insertCount++;
  }

  return html;
}

/**
 * Add a key-takeaway box before the last section if one doesn't exist
 * and the content has enough h2 sections.
 */
function enrichKeyTakeaway(html: string): string {
  if (html.includes('class="key-takeaway')) return html;

  // Find all h2 headings
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: string[] = [];
  let h2m;
  while ((h2m = h2Regex.exec(html)) !== null) {
    headings.push(h2m[1].replace(/<[^>]*>/g, ''));
  }

  if (headings.length < 4) return html;

  // Build a takeaway from the first 5 headings
  const takeawayItems = headings.slice(0, 5).map(
    (h) => `<li>${h}</li>`
  ).join('\n');

  const takeaway = `<div class="key-takeaway"><h3>Key Takeaways</h3><ul>${takeawayItems}</ul></div>`;

  // Insert before the last h2
  const lastH2Index = html.lastIndexOf('<h2');
  if (lastH2Index > 0) {
    html = html.slice(0, lastH2Index) + takeaway + html.slice(lastH2Index);
  }

  return html;
}

/**
 * Convert checklist-style <ul> blocks (items starting with check-like words)
 * into visually styled checklists.
 */
function enrichChecklists(html: string): string {
  if (html.includes('class="checklist')) return html;

  const ulPattern = /<ul>([\s\S]*?)<\/ul>/gi;
  let match;
  const replacements: Array<{ original: string; replacement: string }> = [];

  while ((match = ulPattern.exec(html)) !== null) {
    const block = match[0];
    const items = match[1];
    const liMatches = [...items.matchAll(/<li>([\s\S]*?)<\/li>/gi)];

    if (liMatches.length < 3) continue;

    // Check if items look like a checklist (imperative verbs, action items)
    const checklistWords = /^(check|inspect|replace|clean|test|verify|ensure|schedule|review|repair|look for|remove|install|measure|monitor)/i;
    const checkCount = liMatches.filter((li) => {
      const text = li[1].replace(/<[^>]*>/g, '').trim();
      return checklistWords.test(text);
    }).length;

    if (checkCount < liMatches.length * 0.5) continue;

    // Wrap the preceding h3 (if any) to keep context
    replacements.push({
      original: block,
      replacement: block.replace('<ul>', '<ul class="checklist">'),
    });
  }

  for (const { original, replacement } of replacements) {
    html = html.replace(original, replacement);
  }

  return html;
}

/**
 * Detect stat-worthy numbers in introductory paragraphs and create stats-grid.
 * Looks for patterns like "$X,XXX", "XX%", "XX+ years" in the first few paragraphs.
 */
function enrichStatsFromContent(html: string): string {
  if (html.includes('class="stats-grid')) return html;

  // Find stat patterns across the content
  const statPatterns = [
    /(\$[\d,]+(?:\s*(?:to|[-–—])\s*\$[\d,]+)?)\s+(?:per|for|in|on|annually|per year|average)/gi,
    /([\d,]+\+?\s*(?:years?|months?|days?|hours?))\s+(?:of|experience|combined)/gi,
    /([\d.]+%)\s+(?:of|more|less|increase|decrease|savings?|reduction)/gi,
  ];

  const stats: Array<{ value: string; label: string }> = [];

  for (const pattern of statPatterns) {
    let sMatch;
    while ((sMatch = pattern.exec(html)) !== null) {
      if (stats.length >= 4) break;
      const value = sMatch[1].trim();
      // Get surrounding text for label (next 30 chars after match)
      const afterMatch = html.substring(sMatch.index + sMatch[0].length, sMatch.index + sMatch[0].length + 40);
      const labelWords = afterMatch.replace(/<[^>]*>/g, '').trim().split(/\s+/).slice(0, 4).join(' ');
      const label = sMatch[0].replace(value, '').replace(/<[^>]*>/g, '').trim() + ' ' + labelWords;
      stats.push({ value, label: label.trim().substring(0, 30) });
    }
    if (stats.length >= 4) break;
  }

  if (stats.length < 2) return html;

  const statsHtml = stats.map(
    (s) => `<div class="stat-card"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`
  ).join('');
  const grid = `<div class="stats-grid">${statsHtml}</div>`;

  // Insert after the first h2 section's opening paragraphs
  const firstH2End = html.indexOf('</h2>');
  if (firstH2End === -1) return html;

  // Find the 3rd paragraph after the first h2
  let insertPos = firstH2End;
  let pCount = 0;
  const pEndPattern = /<\/p>/g;
  pEndPattern.lastIndex = firstH2End;
  let pMatch;
  while ((pMatch = pEndPattern.exec(html)) !== null) {
    pCount++;
    if (pCount === 3) {
      insertPos = pMatch.index + pMatch[0].length;
      break;
    }
  }

  if (insertPos > firstH2End) {
    html = html.slice(0, insertPos) + grid + html.slice(insertPos);
  }

  return html;
}

/**
 * Main enrichment function. Runs all transforms in sequence.
 * Idempotent — safe to run on already-enriched content.
 */
export function enrichBlogContent(html: string): string {
  if (!html) return html;

  let enriched = sanitize(html);
  enriched = enrichCallouts(enriched);
  enriched = enrichCostTables(enriched);
  enriched = enrichProcessSteps(enriched);
  enriched = enrichChecklists(enriched);
  enriched = enrichStatsFromContent(enriched);
  enriched = enrichInlineCTAs(enriched);
  enriched = enrichKeyTakeaway(enriched);

  return enriched;
}
