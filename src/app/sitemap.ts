import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const BASE_URL = 'https://webuildclt.com';

// Static pages with their change frequency and priority
const staticPages: MetadataRoute.Sitemap = [
  { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.8 },
  {
    url: `${BASE_URL}/design-center`,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  { url: `${BASE_URL}/we-coat`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/news`, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.7 },
  { url: `${BASE_URL}/guides`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/guides/home-maintenance-guide-charlotte`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/guides/commercial-building-maintenance-checklist`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/guides/flooring-options-guide-charlotte-homes`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/guides/kitchen-remodel-planning-guide-charlotte`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/guides/restaurant-opening-guide-charlotte`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/guides/roof-maintenance-guide-extend-life`, changeFrequency: 'monthly', priority: 0.7 },
  // Service pages
  { url: `${BASE_URL}/services/general-contractor`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/custom-home-builder`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/commercial-construction`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/commercial-upfits`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/roof-coating`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/residential-additions`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/design-build`, changeFrequency: 'monthly', priority: 0.7 },
  // Location pages
  { url: `${BASE_URL}/areas/fort-mill-sc`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/areas/lake-norman`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/areas/south-charlotte`, changeFrequency: 'monthly', priority: 0.7 },
];

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
    return (
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

    return data?.map((p) => p.slug) || [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogSlugs, projectSlugs] = await Promise.all([
    fetchBlogSlugs(),
    fetchProjectSlugs(),
  ]);

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
