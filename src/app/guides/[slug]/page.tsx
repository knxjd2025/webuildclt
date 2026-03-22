import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ShareButtons } from '@/components/ShareButtons';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, faqSchema } from '@/lib/structured-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, Phone } from 'lucide-react';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: 'article',
      publishedTime: guide.date,
    },
  };
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export default async function GuidePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const guideUrl = `https://webuildclt.com/guides/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.title,
            slug: `guides/${guide.slug}`,
            excerpt: guide.excerpt,
            date: guide.date,
          }),
          faqSchema(guide.faqs),
        ]}
      />

      {/* Header */}
      <section className="pt-32 pb-12 bg-muted">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Guides', href: '/guides' },
              { label: guide.title },
            ]}
          />
          <div className="max-w-3xl mt-6">
            <Badge variant="secondary" className="mb-4">
              {guide.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {guide.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {guide.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {guide.readTime}
              </span>
              <span>{guide.tableOfContents.length} sections</span>
              <span>By We Build Team</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Guide Content */}
            <article className="max-w-none">
              <div
                className="article-prose"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              {/* FAQ Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div>
                  {guide.faqs.map((faq) => (
                    <div key={faq.question} className="faq-item">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share & Nav */}
              <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <ShareButtons url={guideUrl} title={guide.title} />
                <Button variant="outline" asChild>
                  <Link href="/guides">
                    <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                    All Guides
                  </Link>
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              {/* Table of Contents */}
              <div className="toc-sidebar space-y-8">
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4">In This Guide</h3>
                  <nav aria-label="Table of contents">
                    <ol className="space-y-1">
                      {guide.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Need Expert Help?</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Our team is ready to help with your project.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full mb-2"
                    asChild
                  >
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <a
                    href="tel:7045748124"
                    className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    (704) 574-8124
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Now that you have the knowledge, let We Build provide the
            expertise. Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:7045748124">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
