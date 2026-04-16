import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News',
  description:
    'Latest news, updates, and insights from We Build construction company in Charlotte, NC.',
};

// This data would come from WordPress GraphQL in production
const posts = [
  {
    id: '1',
    title: 'Introducing We Coat: Our New Roof Restoration Service',
    slug: 'introducing-we-coat',
    excerpt:
      'We are excited to announce the launch of We Coat, our new eco-friendly roof restoration service offering an affordable alternative to roof replacement.',
    date: '2024-03-15',
    category: 'Company News',
    image: '/images/news/we-coat-launch.jpg',
    author: 'We Build Team',
  },
  {
    id: '2',
    title: 'Pure Physique Fort Mill: A Commercial Upfit Success Story',
    slug: 'pure-physique-case-study',
    excerpt:
      'Take a look at our recent commercial upfit project for Pure Physique in Fort Mill, SC. See the before and after transformation.',
    date: '2024-02-28',
    category: 'Project Spotlight',
    image: '/images/news/pure-physique.jpg',
    author: 'We Build Team',
  },
  {
    id: '3',
    title: 'We Build Joins the U.S. Green Building Council',
    slug: 'usgbc-membership-announcement',
    excerpt:
      'We are proud to announce that We Build is now a member of the U.S. Green Building Council, reinforcing our commitment to sustainable building practices.',
    date: '2024-02-10',
    category: 'Sustainability',
    image: '/images/news/usgbc-membership.jpg',
    author: 'We Build Team',
  },
  {
    id: '4',
    title: 'Tips for Planning Your Commercial Upfit',
    slug: 'commercial-upfit-tips',
    excerpt:
      'Planning a commercial upfit? Here are our top tips for making the process smooth and successful.',
    date: '2024-01-25',
    category: 'Tips & Advice',
    image: '/images/news/upfit-tips.jpg',
    author: 'We Build Team',
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NewsPage() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      <PageHero
        title="News"
        subtitle="Latest updates from We Build"
        backgroundImage="/images/news-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured</h2>
            <Link
              href={`/news/${featuredPost.slug}`}
              className="group block rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] md:aspect-auto image-hover">
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
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.slug}`}
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
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" disabled>
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Follow us on social media for the latest news, project updates, and
            construction tips.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a
                href="https://www.linkedin.com/company/we-build-clt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.facebook.com/WeBuildCLT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
