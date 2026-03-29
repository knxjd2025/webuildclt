import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';
import { allServices, areaLinks } from '@/data/services';
import { getAllGuideSlugs } from '@/data/guides';
import { blogPosts, getAllCategorySlugs } from '@/data/blog-posts';

const BASE_URL = 'https://webuildclt.com';

/** Only allow valid URL slugs — prevents malformed/traversal URLs in sitemap */
const VALID_SLUG = /^[a-z0-9][a-z0-9-]*[a-z0-9]$|^[a-z0-9]$/;
function filterValidSlugs(slugs: string[]): string[] {
  return slugs.filter((s) => VALID_SLUG.test(s));
}

// Static pages
const corePages: MetadataRoute.Sitemap = [
  { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/about/certifications`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE_URL}/design-center`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/we-coat`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/guides`, changeFrequency: 'weekly', priority: 0.7 },
];

// Services hub + all individual service pages
const servicePages: MetadataRoute.Sitemap = [
  { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
  ...allServices.map((s) => ({
    url: `${BASE_URL}${s.href}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  })),
];

// Area pages
const areaPages: MetadataRoute.Sitemap = areaLinks.map((a) => ({
  url: `${BASE_URL}${a.href}`,
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));

// Guide pages (from static data)
const guidePages: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => ({
  url: `${BASE_URL}/guides/${slug}`,
  changeFrequency: 'monthly' as const,
  priority: 0.7,
}));

async function fetchBlogSlugs(): Promise<string[]> {
  const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;
  if (!WORDPRESS_API_URL) return [];

  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetAllPostSlugs {
            posts(first: 1000) {
              nodes {
                slug
                date
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    return filterValidSlugs(
      json.data?.posts?.nodes?.map(
        (node: { slug: string }) => node.slug
      ) || []
    );
  } catch {
    return [];
  }
}

async function fetchProjectSlugs(): Promise<string[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  try {
    const supabase = createClient(url, key);
    const { data } = await supabase
      .from('projects')
      .select('slug')
      .eq('status', 'published');

    return filterValidSlugs(data?.map((p) => p.slug) || []);
  } catch {
    return [];
  }
}

async function fetchSupabaseBlogSlugs(): Promise<string[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return [];

  try {
    const supabase = createClient(url, key);
    const { data } = await supabase
      .from('blogs')
      .select('slug')
      .eq('status', 'published');

    return filterValidSlugs(data?.map((b) => b.slug) || []);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [wpBlogSlugs, projectSlugs, supabaseBlogSlugs] = await Promise.all([
    fetchBlogSlugs(),
    fetchProjectSlugs(),
    fetchSupabaseBlogSlugs(),
  ]);

  // Static blog post slugs from data file
  const staticBlogSlugs = blogPosts.map((p) => p.slug);

  // Combine WP, Supabase, and static blog slugs — deduplicate
  const allBlogSlugs = [...new Set([...staticBlogSlugs, ...wpBlogSlugs, ...supabaseBlogSlugs])];

  const blogPages: MetadataRoute.Sitemap = allBlogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog category index pages
  const blogCategoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map((slug) => ({
    url: `${BASE_URL}/blog/category/${slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...areaPages,
    ...guidePages,
    ...blogPages,
    ...blogCategoryPages,
    ...projectPages,
  ];
}
