import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, User, Phone, ShieldCheck, Award, MapPin } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { FaqAccordion } from '@/components/FaqAccordion';

const newsFaqs = [
  {
    question: 'How can I stay updated on We Build news?',
    answer:
      'Follow We Build on LinkedIn (@we-build-clt) and Facebook (WeBuildCLT) for new project announcements, milestone updates, and certification news. We post project completions, before-and-after spotlights, and industry recognition regularly. You can also bookmark this News page or check our Blog for long-form posts.',
  },
  {
    question: 'Does We Build issue press releases?',
    answer:
      'Yes, for major announcements like new service launches, certifications, large project completions, and community involvement. Press inquiries can reach us at (980) 471-1745 or through our contact form. We are happy to coordinate interviews, project tours, and photography for credible Charlotte-area outlets.',
  },
  {
    question: 'Can I tour a We Build project featured in a news post?',
    answer:
      'Many of our completed commercial projects are open to the public — restaurants, retail, breweries, and showrooms. For private buildings (offices, warehouses, healthcare), tours can sometimes be arranged with the owner\'s permission. Contact us at (980) 471-1745 to coordinate.',
  },
  {
    question: 'Where can I see We Build\'s completed projects?',
    answer:
      'Browse our project portfolio at /portfolio for photos, project details, and case studies of completed commercial construction, upfit, and roof coating work across Charlotte, Fort Mill SC, Lake Norman, and the Carolinas. Each portfolio entry includes scope, timeline, and any unique challenges we solved.',
  },
];

export const metadata: Metadata = {
  title: 'News & Updates | We Build Charlotte NC',
  description:
    'Latest news, project announcements, and construction industry insights from We Build — a veteran-owned commercial construction company in Charlotte, NC.',
  alternates: {
    canonical: 'https://webuildclt.com/news',
  },
  keywords: [
    'we build news charlotte',
    'we build construction updates',
    'charlotte construction news',
    'commercial construction news charlotte nc',
  ],
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
      <JsonLd data={[breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'News' }]), faqSchema(newsFaqs)]} />
      <PageHero
        title="News"
        subtitle="Latest updates from We Build"
        backgroundImage="/images/news-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'News' }]} />

          {/* Intro */}
          <div className="max-w-3xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              We Build Company News &amp; Project Updates
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stay current on We Build — a veteran and family-owned commercial
              construction company in Charlotte, NC. Here you&apos;ll find new
              project announcements, milestone updates, certification news, and
              industry recognition. We&apos;re a USGBC member, licensed in North
              Carolina and South Carolina, with 60+ years of combined construction
              experience serving Charlotte, the Carolinas, and the Research
              Triangle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Looking for something specific? Explore our{' '}
              <Link href="/services" className="text-primary hover:underline font-medium">commercial construction services</Link>,{' '}
              <Link href="/portfolio" className="text-primary hover:underline font-medium">project portfolio</Link>,{' '}
              <Link href="/about/certifications" className="text-primary hover:underline font-medium">certifications and licenses</Link>, or{' '}
              <Link href="/blog" className="text-primary hover:underline font-medium">long-form blog posts</Link>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                <ShieldCheck className="h-4 w-4" /> Veteran-owned
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                <Award className="h-4 w-4" /> USGBC member
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                <MapPin className="h-4 w-4" /> Licensed NC &amp; SC
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+19804711745">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  (980) 471-1745
                </a>
              </Button>
            </div>
          </div>

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
                  className="group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
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

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" disabled>
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">News &amp; Press FAQ</h2>
          <p className="text-center text-muted-foreground mb-10">
            Common questions about We Build news, press, and project updates.
          </p>
          <FaqAccordion faqs={newsFaqs} />
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
