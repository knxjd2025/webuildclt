import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/structured-data';
import { createAdminClient } from '@/lib/supabase';

export const revalidate = false; // Static at build time — redeploy or use /api/revalidate to update

export const metadata: Metadata = {
  title: 'Blog | Charlotte Construction Tips & Industry Insights',
  description:
    'Charlotte construction blog by We Build — expert tips on commercial construction, roof coating, and commercial upfits. Project spotlights, industry insights, and practical advice for commercial construction in Charlotte NC.',
  alternates: {
    canonical: 'https://webuildclt.com/blog',
  },
};

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

function categoryLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function BlogPage() {
  const admin = createAdminClient();

  const { data: posts } = await admin
    .from('blogs')
    .select(
      'id, title, slug, excerpt, category, category_slug, featured_image, author, word_count, published_at, created_at'
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  const allPosts: BlogPost[] = posts ?? [];

  if (allPosts.length === 0) {
    return (
      <>
        <JsonLd data={breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog' }])} />
        <PageHero
          title="Blog"
          subtitle="Construction tips, project spotlights, and industry insights"
          backgroundImage="/images/blog-hero.jpg"
        />
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: 'Blog' }]} />
            <p className="text-muted-foreground mt-8">
              No blog posts published yet. Check back soon!
            </p>
          </div>
        </section>
      </>
    );
  }

  const featuredPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog' }])} />
      <PageHero
        title="Blog"
        subtitle="Construction tips, project spotlights, and industry insights"
        backgroundImage="/images/blog-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Blog' }]} />

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured</h2>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[300px] image-hover bg-muted">
                  {featuredPost.featured_image ? (
                    <Image
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <span className="text-4xl">📰</span>
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {categoryLabel(featuredPost.category_slug)}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  {featuredPost.excerpt && (
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(
                        featuredPost.published_at ?? featuredPost.created_at
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <span>{readTime(featuredPost.word_count)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Posts Grid */}
          {otherPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[16/9] image-hover bg-muted">
                      {post.featured_image ? (
                        <Image
                          src={post.featured_image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <span className="text-4xl">📰</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">
                          {categoryLabel(post.category_slug)}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {formatDate(
                              post.published_at ?? post.created_at
                            )}
                          </div>
                          <span>{readTime(post.word_count)}</span>
                        </div>
                        <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-[gap]">
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Follow us on social media for the latest news, project updates, and
            construction tips from We Build.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/we-build-clt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Follow on LinkedIn
            </a>
            <a
              href="https://www.facebook.com/WeBuildCLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-input bg-background px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
