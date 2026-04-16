import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { categories, getAllCategorySlugs } from '@/data/blog-posts';
import { createAdminClient } from '@/lib/supabase';

export const revalidate = false;

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function readTime(wordCount: number): string {
  const minutes = Math.max(3, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = categories[slug];
  if (!categoryName) return { title: 'Category Not Found' };

  return {
    title: `${categoryName} — Construction Blog | We Build Charlotte NC`,
    description: `Read our latest ${categoryName.toLowerCase()} articles, tips, and insights from We Build in Charlotte, NC.`,
  };
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  category_slug: string;
  featured_image: string | null;
  author: string;
  word_count: number;
  published_at: string | null;
  created_at: string;
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const categoryName = categories[slug];
  if (!categoryName) notFound();

  const admin = createAdminClient();
  const { data: posts } = await admin
    .from('blogs')
    .select(
      'id, title, slug, excerpt, category, category_slug, featured_image, author, word_count, published_at, created_at'
    )
    .eq('status', 'published')
    .eq('category_slug', slug)
    .order('published_at', { ascending: false });

  const allPosts: BlogPost[] = posts ?? [];

  return (
    <>
      <PageHero
        title={categoryName}
        subtitle={`Articles about ${categoryName.toLowerCase()}`}
        backgroundImage="/images/blog-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: categoryName },
            ]}
          />

          {allPosts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No Posts Yet</h2>
              <p className="text-muted-foreground mb-8">
                We are working on new content for this category. Check back
                soon!
              </p>
              <Link
                href="/blog"
                className="text-primary font-medium hover:underline"
              >
                View All Posts
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/9] image-hover">
                    {post.featured_image ? (
                      <Image
                        src={post.featured_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">No image</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.published_at ?? post.created_at)}
                      </div>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {readTime(post.word_count)} &middot; Read More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
