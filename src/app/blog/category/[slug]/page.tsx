import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import { categories, getPostsByCategory, getAllCategorySlugs } from '@/data/blog-posts';

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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
    title: `${categoryName} - Blog`,
    description: `Read our latest ${categoryName.toLowerCase()} articles, tips, and insights from We Build in Charlotte, NC.`,
  };
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const categoryName = categories[slug];
  if (!categoryName) notFound();

  const posts = getPostsByCategory(slug);

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

          {posts.length === 0 ? (
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
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/9] image-hover">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
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
                        {formatDate(post.date)}
                      </div>
                      <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
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
