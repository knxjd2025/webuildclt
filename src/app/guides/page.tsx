import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Wrench, Building2, Layers, UtensilsCrossed, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getAllGuides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides | Construction & Home Improvement Guides',
  description:
    'Free, in-depth guides for Charlotte homeowners and business owners — home maintenance, flooring, kitchen remodels, commercial build-outs, roof care, and more.',
  keywords: [
    'home maintenance guide charlotte',
    'flooring guide charlotte nc',
    'kitchen remodel guide',
    'commercial construction guide charlotte',
    'roof maintenance guide',
  ],
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Building2, Layers, UtensilsCrossed, Shield,
  CookingPot: UtensilsCrossed, // fallback
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <PageHero
        title="Guides"
        subtitle="Free, expert construction and home improvement guides for Charlotte"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Guides' }]} />

          <div className="max-w-3xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Expert Guides for Homeowners & Business Owners
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We created these guides to help Charlotte homeowners and business
              owners make informed decisions about construction, maintenance, and
              improvements. Each guide is written by our experienced team and
              tailored to Charlotte&apos;s specific climate, codes, and market
              conditions. No sales pitch — just practical, actionable
              information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => {
              const IconComponent = iconMap[guide.icon] || Wrench;
              return (
                <Card
                  key={guide.slug}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <IconComponent className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {guide.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {guide.readTime}
                          </span>
                        </div>
                        <Link href={`/guides/${guide.slug}`}>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {guide.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {guide.tableOfContents.length} sections
                      </div>
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Read Guide
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Expert Help With Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our guides provide the knowledge. Our team provides the execution.
            Contact We Build for a free consultation on any construction project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
