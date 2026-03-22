import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShareButtons } from '@/components/ShareButtons';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema } from '@/lib/structured-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { createAdminClient } from '@/lib/supabase';
import { enrichBlogContent } from '@/lib/blog-enricher';

export const revalidate = 60;

function estimateReadTime(wordCount: number): number {
  return Math.max(3, Math.ceil(wordCount / 200));
}

function extractHeadings(content: string): Array<{ id: string; text: string }> {
  const headings: Array<{ id: string; text: string }> = [];
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '');
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    headings.push({ id, text });
  }
  return headings;
}

function addHeadingIds(content: string): string {
  return content.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_match, attrs, text) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    const id = plainText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `<h2${attrs} id="${id}">${text}</h2>`;
  });
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function categoryLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

type Params = Promise<{ slug: string }>;

async function getPost(slug: string) {
  const admin = createAdminClient();
  const { data } = await admin
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      ...(post.featured_image && { images: [{ url: post.featured_image }] }),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const readTime = estimateReadTime(post.word_count ?? 0);
  const headings = extractHeadings(post.content ?? '');
  const contentWithIds = enrichBlogContent(addHeadingIds(post.content ?? ''));
  const postUrl = `https://webuildclt.com/blog/${slug}`;
  const postDate = post.published_at ?? post.created_at;

  // Fetch related posts (same category, exclude current)
  const admin = createAdminClient();
  const { data: relatedPosts } = await admin
    .from('blogs')
    .select('id, title, slug, category, category_slug, featured_image')
    .eq('status', 'published')
    .eq('category_slug', post.category_slug)
    .neq('id', post.id)
    .order('published_at', { ascending: false })
    .limit(2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt ?? '',
          date: postDate,
          authorName: post.author,
          imageUrl: post.featured_image,
        })}
      />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end">
        <div className="absolute inset-0 z-0">
          {post.featured_image ? (
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Badge variant="secondary" className="mb-4">
            <Link href={`/blog/category/${post.category_slug}`}>
              {categoryLabel(post.category_slug)}
            </Link>
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(postDate)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_280px] gap-12 mt-8">
            {/* Article Content */}
            <article className="max-w-none">
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: contentWithIds }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t flex items-center justify-between">
                <ShareButtons url={postUrl} title={post.title} />
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {headings.length > 0 && (
                <div className="sticky top-24 bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Table of Contents</h3>
                  <nav>
                    <ol className="space-y-2 text-sm">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {relatedPosts.map((rp: any) => (
                <Link
                  key={rp.id}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/9] image-hover bg-muted">
                    {rp.featured_image ? (
                      <Image
                        src={rp.featured_image}
                        alt={rp.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {categoryLabel(rp.category_slug)}
                    </Badge>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                      {rp.title}
                    </h3>
                    <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact We Build today for a free consultation and quote.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
