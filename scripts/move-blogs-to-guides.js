const fs = require('fs');
const { execSync } = require('child_process');

// Read old file from git to extract removed posts
const oldFile = execSync('git show HEAD:src/data/blog-posts.ts', { encoding: 'utf-8', maxBuffer: 5*1024*1024 });

function extractPostContent(source, id) {
  const idStr = "id: '" + id + "'";
  const idx = source.indexOf(idStr);
  if (idx === -1) { console.error('Post', id, 'not found'); return null; }

  // Find content backtick
  const contentStart = source.indexOf('content: `', idx);
  const backtickOpen = contentStart + 'content: `'.length;
  const backtickClose = source.indexOf('`', backtickOpen);
  const content = source.substring(backtickOpen, backtickClose).trim();

  // Find title
  const titleMatch = source.substring(idx - 200, idx + 200).match(/title: '([^']+)'/);
  const title = titleMatch ? titleMatch[1] : '';

  // Find excerpt
  const excerptMatch = source.substring(idx, idx + 500).match(/excerpt: '([^']+)'/);
  const excerpt = excerptMatch ? excerptMatch[1] : '';

  return { content, title, excerpt };
}

function extractH2s(html) {
  const results = [];
  const regex = /<h2>(.*?)<\/h2>/g;
  let m;
  while ((m = regex.exec(html)) !== null) {
    const title = m[1].trim();
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    results.push({ id, title });
  }
  return results;
}

function addH2Ids(html, toc) {
  let result = html;
  for (const item of toc) {
    result = result.replace(
      '<h2>' + item.title + '</h2>',
      '<h2 id="' + item.id + '">' + item.title + '</h2>'
    );
  }
  return result;
}

const post153 = extractPostContent(oldFile, '153');
const post154 = extractPostContent(oldFile, '154');
const post155 = extractPostContent(oldFile, '155');
const post160 = extractPostContent(oldFile, '160');

console.log('153:', post153.content.length, 'chars, title:', post153.title.substring(0, 50));
console.log('154:', post154.content.length, 'chars, title:', post154.title.substring(0, 50));
console.log('155:', post155.content.length, 'chars, title:', post155.title.substring(0, 50));
console.log('160:', post160.content.length, 'chars, title:', post160.title.substring(0, 50));

const guideDefs = [
  {
    id: '27', slug: 'commercial-renovation-guide-charlotte',
    post: post153, image: '/images/blog/commercial-renovation-guide-charlotte.jpg', readTime: '20 min read',
    faqs: [
      { question: 'How much does commercial renovation cost in Charlotte NC?', answer: "Commercial renovation costs in Charlotte range from $50 to $200 per square foot depending on the scope. Basic cosmetic refreshes start around $50/sf, mid-range renovations with new walls and systems run $80-$150/sf, and high-end renovations with premium finishes can exceed $200/sf. Restaurant and medical renovations tend to be the most expensive due to specialized systems." },
      { question: 'How long does a commercial renovation take in Charlotte?', answer: "Most commercial renovations in Charlotte take 8 to 20 weeks depending on scope and complexity. Simple cosmetic updates can complete in 4-6 weeks, while full gut renovations with mechanical system replacements take 16-20 weeks. Mecklenburg County permitting adds 3-6 weeks before construction begins." },
      { question: 'Can my business stay open during a commercial renovation?', answer: "In many cases yes. Phased construction allows businesses to continue operating by isolating work areas with temporary walls and dust barriers. The most disruptive work is scheduled during off-hours or weekends. Your contractor should develop a detailed phasing plan before construction begins." },
      { question: 'Do I need permits for commercial renovation in Charlotte?', answer: "Yes, most commercial renovations in Charlotte require building permits from Mecklenburg County Code Enforcement. Any work involving structural changes, electrical, plumbing, HVAC, or fire alarm modifications requires permits. Even cosmetic work may need permits if it affects egress or ADA compliance." },
    ],
  },
  {
    id: '28', slug: 'construction-management-guide-charlotte-property-owners',
    post: post154, image: '/images/blog/construction-management-guide-charlotte.jpg', readTime: '18 min read',
    faqs: [
      { question: 'What is the difference between CM at-risk and CM agency?', answer: "In CM at-risk, the construction manager guarantees a maximum price and assumes financial risk if costs exceed that amount. In CM agency, the construction manager acts as the owner representative and advises on the project but does not hold contracts with subcontractors or guarantee costs. CM at-risk is more common for large commercial projects." },
      { question: 'How much does construction management cost?', answer: "Construction management fees typically range from 3% to 8% of total construction cost depending on project complexity, size, and the CM delivery method. Larger projects tend toward lower percentages while smaller, complex projects may be at the higher end. Some CM firms offer fixed-fee arrangements." },
      { question: 'When should I hire a construction manager vs a general contractor?', answer: "Hire a CM for large or complex projects where you want more control over subcontractor selection, scheduling, and costs. A GC is better for straightforward projects where you want a single point of responsibility. CM is also valuable when the design is still evolving and you need early cost input." },
      { question: 'What does a construction manager actually do?', answer: "A construction manager oversees the entire construction process on behalf of the owner including budgeting, scheduling, subcontractor procurement, quality control, safety management, progress reporting, and change order management. They act as the owner liaison on the job site and coordinate all project stakeholders." },
    ],
  },
  {
    id: '29', slug: 'tenant-improvement-allowance-guide-charlotte',
    post: post155, image: '/images/blog/tenant-improvement-guide-charlotte.jpg', readTime: '18 min read',
    faqs: [
      { question: 'What is a typical TI allowance in Charlotte?', answer: "TI allowances in Charlotte vary by building class and market conditions. Class A office buildings in Uptown and South End typically offer $40-$60 per square foot. Class B offices range from $20-$40/sf. Retail spaces average $15-$30/sf. The allowance amount is negotiated as part of the lease terms." },
      { question: 'Who pays for tenant improvements?', answer: "Tenant improvements are typically funded through a combination of the landlord TI allowance and tenant out-of-pocket spending. The landlord provides a dollar-per-square-foot allowance as part of the lease. If the build-out cost exceeds the allowance, the tenant pays the difference. Some landlords will increase the allowance in exchange for a longer lease term." },
      { question: 'How do I maximize my TI allowance?', answer: "Get a contractor involved early to provide accurate cost estimates during lease negotiations. Prioritize structural and mechanical work that is hardest to change later. Use the landlord TI allowance for permanent improvements and fund cosmetic items yourself. Negotiate the work letter carefully to ensure base building items are the landlord responsibility." },
      { question: 'How long does a tenant improvement project take?', answer: "Tenant improvement timelines in Charlotte range from 6 to 20 weeks depending on scope. Simple cosmetic TIs can complete in 6-8 weeks. Standard office TIs with new walls and finishes take 10-14 weeks. Restaurant and medical TIs are the longest at 14-20 weeks due to specialized systems and inspections." },
    ],
  },
  {
    id: '30', slug: 'warehouse-industrial-construction-guide-charlotte',
    post: post160, image: '/images/blog/industrial-construction-guide-charlotte.jpg', readTime: '20 min read',
    faqs: [
      { question: 'How much does warehouse construction cost in Charlotte?', answer: "Warehouse construction in Charlotte ranges from $55 to $120 per square foot for basic shell construction. Costs increase for cold storage ($120-$200/sf), manufacturing ($80-$150/sf), or significant office build-out. Site work, utility connections, and permitting add to total project cost." },
      { question: 'What clear height should I plan for in a new warehouse?', answer: "Modern distribution warehouses in Charlotte are typically built with 32 to 40 foot clear heights to maximize vertical storage. Manufacturing facilities may need 24-32 feet depending on equipment. Consider your racking system, forklift reach, and future growth when determining clear height requirements." },
      { question: 'How long does it take to build a warehouse in Charlotte?', answer: "Warehouse construction in Charlotte typically takes 8 to 14 months from permitting through occupancy. Pre-engineered metal buildings can be faster at 6-10 months. Tilt-up concrete takes 10-14 months. Site work and permitting add 2-4 months before construction begins." },
      { question: 'What zoning do I need for industrial construction in Charlotte?', answer: "Industrial construction in Charlotte requires I-1 Light Industrial or I-2 General Industrial zoning. I-1 allows warehousing, light manufacturing, and distribution. I-2 permits heavier industrial uses. The Charlotte-Mecklenburg zoning ordinance also has Business Park districts that allow certain industrial uses." },
    ],
  },
];

// Build guide code blocks
let code = '\n  // ============================================================\n';
code += '  // COMMERCIAL SERVICES GUIDES (Added 2026-03-22)\n';
code += '  // ============================================================\n';

for (const g of guideDefs) {
  const toc = extractH2s(g.post.content);
  const contentWithIds = addH2Ids(g.post.content, toc);

  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  code += '  {\n';
  code += "    id: '" + g.id + "',\n";
  code += "    title: '" + esc(g.post.title) + "',\n";
  code += "    slug: '" + g.slug + "',\n";
  code += "    excerpt: '" + esc(g.post.excerpt) + "',\n";
  code += "    category: 'Commercial',\n";
  code += "    categorySlug: 'commercial',\n";
  code += "    icon: 'Building2',\n";
  code += "    image: '" + g.image + "',\n";
  code += "    date: '2026-03-22',\n";
  code += "    readTime: '" + g.readTime + "',\n";
  code += '    tableOfContents: [\n';
  for (const t of toc) {
    code += "      { id: '" + t.id + "', title: '" + esc(t.title) + "' },\n";
  }
  code += '    ],\n';
  code += '    faqs: [\n';
  for (const f of g.faqs) {
    code += "      { question: '" + esc(f.question) + "', answer: '" + esc(f.answer) + "' },\n";
  }
  code += '    ],\n';
  code += '    content: `\n' + contentWithIds + '\n`,\n';
  code += '  },\n';
}

// Insert into guides.ts before final ];
const guidesFile = fs.readFileSync('src/data/guides.ts', 'utf-8');
const lastBracket = guidesFile.lastIndexOf('];');
const newGuidesFile = guidesFile.substring(0, lastBracket) + code + '];\n' + guidesFile.substring(lastBracket + 3);

fs.writeFileSync('src/data/guides.ts', newGuidesFile, 'utf-8');

console.log('\nGuides updated successfully.');
console.log('Added', guideDefs.length, 'new guides (ids 27-30)');
for (const g of guideDefs) {
  const toc = extractH2s(g.post.content);
  console.log('  Guide', g.id + ':', toc.length, 'TOC entries,', g.faqs.length, 'FAQs');
}
