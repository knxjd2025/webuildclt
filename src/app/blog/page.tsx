import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User, Phone, ShieldCheck, Award, MapPin } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { FaqAccordion } from '@/components/FaqAccordion';
import { createAdminClient } from '@/lib/supabase';

const blogFaqs = [
  {
    question: 'Who writes the We Build construction blog?',
    answer:
      'Every post is written or edited by our team of licensed commercial contractors with 60+ years of combined experience. We do not publish guest posts, sponsored content, or AI-generated filler. If a post covers a specialized topic like ADA compliance or green building, the author has direct project experience in that area.',
  },
  {
    question: 'How often is the blog updated?',
    answer:
      'We publish new posts approximately weekly, focused on practical commercial construction topics that Charlotte business owners actually need: cost benchmarks, permitting changes, project timelines, and case studies from our completed work. We do not chase trending topics that have nothing to do with our expertise.',
  },
  {
    question: 'Can I republish or quote a We Build blog post?',
    answer:
      'Short quotes with attribution and a link back to the original post are welcome. For longer republication, please contact us at (980) 471-1745 first. We are happy to license content for industry publications and partner sites with proper attribution.',
  },
  {
    question: 'I read a tip in your blog. Can I get a quote applying it to my project?',
    answer:
      'Yes. Call (980) 471-1745 or use our contact form for a free consultation. We will review your project, provide a detailed line-item estimate, and apply the relevant principles from our blog content. Free consultations include a site visit and rough budget estimate.',
  },
  {
    question: 'Are blog posts specific to Charlotte and the Carolinas?',
    answer:
      'Most posts focus on Charlotte and the surrounding Carolina region — Mecklenburg County, York County SC, Lake Norman, and the Research Triangle. Cost figures, permitting references, and code citations are Carolina-specific. Construction principles in the posts apply broadly, but pricing and regulatory details may differ in your region.',
  },
];

export const revalidate = false; // Static at build time — redeploy or use /api/revalidate to update

export const metadata: Metadata = {
  title: 'Blog | Charlotte Construction Tips & Industry Insights',
  description:
    'Charlotte construction blog by We Build. Expert tips on commercial construction, roof coating, and upfits. Project spotlights, industry insights, advice.',
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
      <JsonLd data={[breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Blog' }]), faqSchema(blogFaqs)]} />
      <PageHero
        title="Blog"
        subtitle="Construction tips, project spotlights, and industry insights"
        backgroundImage="/images/blog-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Blog' }]} />

          {/* Intro */}
          <div className="max-w-3xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Charlotte Commercial Construction Insights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The We Build blog is where Charlotte business owners go for honest,
              practical advice on commercial construction, upfits, roof coatings,
              and building maintenance. Every article is written by our team of
              licensed contractors with 60+ years of combined experience in North
              and South Carolina — no fluff, no SEO bait, just the information you
              actually need before signing a construction contract.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Browse posts by topic:{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline font-medium">commercial construction</Link>,{' '}
              <Link href="/services/commercial-upfits" className="text-primary hover:underline font-medium">commercial upfits</Link>,{' '}
              <Link href="/services/tenant-improvements" className="text-primary hover:underline font-medium">tenant improvements</Link>,{' '}
              <Link href="/services/roof-coating" className="text-primary hover:underline font-medium">roof coating</Link>,{' '}
              <Link href="/services/drone-inspections" className="text-primary hover:underline font-medium">drone inspections</Link>, or{' '}
              <Link href="/guides" className="text-primary hover:underline font-medium">read our long-form guides</Link>.
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
                  Get a Free Consultation
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

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About the We Build Blog</h2>
          <p className="text-center text-muted-foreground mb-10">
            Common questions about our blog and how to use it.
          </p>
          <FaqAccordion faqs={blogFaqs} />
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
