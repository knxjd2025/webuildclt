import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Construction tips, project spotlights, and industry insights from We Build in Charlotte, NC. Expert advice on commercial construction, roof coating, and custom homes.',
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function estimateReadTime(excerpt: string): string {
  // Rough estimate based on excerpt length; real implementation would use full content
  const words = excerpt.split(' ').length * 10; // assume full post ~10x excerpt
  const minutes = Math.max(3, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogPage() {
  const posts = blogPosts;
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
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
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[300px] image-hover">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <span>{estimateReadTime(featuredPost.excerpt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
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
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        <span>{estimateReadTime(post.excerpt)}</span>
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
          </div>
        </div>
      </section>

      {/* Newsletter / Social CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Follow us on social media for the latest news, project updates, and
            construction tips from We Build.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/webuildclt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/WeBuildCLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-input bg-background px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
