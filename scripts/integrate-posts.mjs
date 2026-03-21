/**
 * Integrate generated blog posts into blog-posts.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const results = JSON.parse(fs.readFileSync(path.join(__dirname, 'topics-phase2a-results.json'), 'utf-8'));
const blogFile = path.join(ROOT, 'src', 'data', 'blog-posts.ts');

// Read current file
let blogContent = fs.readFileSync(blogFile, 'utf-8');

// Find the final export that combines all post arrays
// We need to add our new array and include it in the export
const newArrayName = 'phase2aPosts';

// Build the new posts array
let newPosts = `\n// ============================================================\n// PHASE 2A: SERVICE-FOCUSED SEO POSTS (Posts 101-150)\n// ============================================================\n\nconst ${newArrayName}: BlogPost[] = [\n`;

for (const post of results) {
  // Escape content for template literal
  const escapedContent = post.content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  newPosts += `  {\n`;
  newPosts += `    id: '${post.id}',\n`;
  newPosts += `    title: ${JSON.stringify(post.title)},\n`;
  newPosts += `    slug: '${post.slug}',\n`;
  newPosts += `    excerpt: ${JSON.stringify(post.excerpt)},\n`;
  newPosts += `    content: \`\n${escapedContent}\`,\n`;
  newPosts += `    date: '${post.date}',\n`;
  newPosts += `    category: ${JSON.stringify(post.category)},\n`;
  newPosts += `    categorySlug: '${post.categorySlug}',\n`;
  newPosts += `    image: '${post.image}',\n`;
  newPosts += `    author: 'We Build Team',\n`;
  newPosts += `  },\n`;
}

newPosts += `];\n`;

// Find where blogPosts is defined and add our array before it
const blogPostsLine = 'export const blogPosts: BlogPost[] = [';
const insertPoint = blogContent.indexOf(blogPostsLine);
if (insertPoint === -1) {
  console.error('ERROR: Could not find blogPosts array in blog-posts.ts');
  process.exit(1);
}

// Insert new array before blogPosts
blogContent = blogContent.slice(0, insertPoint) + newPosts + '\n' + blogContent.slice(insertPoint);

// Add phase2aPosts to the blogPosts spread
blogContent = blogContent.replace(
  '...companyStoryPosts,\n];',
  `...companyStoryPosts,\n  ...${newArrayName},\n];`
);

fs.writeFileSync(blogFile, blogContent);
console.log(`Integrated ${results.length} new posts into blog-posts.ts`);
console.log(`File size: ${(fs.statSync(blogFile).size / 1024).toFixed(0)}KB`);
