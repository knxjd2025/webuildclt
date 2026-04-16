import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { blogPreviewPosts } from '@/data/homepage';

export function BlogPreview() {
  return (
    <section className="py-20 bg-background content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            From Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Construction Tips & Industry Insights
          </h2>
          <p className="text-muted-foreground">
            Expert advice on commercial construction, roof
            coating, and building in Charlotte, NC. Read our latest articles
            on the{' '}
            <Link href="/blog" className="text-primary hover:underline">
              We Build blog
            </Link>
            .
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPreviewPosts.map((post) => (
            <Card key={post.slug} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
