import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data';
import { FaqAccordion } from '@/components/FaqAccordion';

const guidesFaqs = [
  {
    question: 'Are these construction guides free?',
    answer:
      'Yes. Every guide on this page is free, full-length, and written by our team of licensed commercial contractors. There is no email gate, no paywall, and no sales pitch — just practical, actionable information for Charlotte-area business owners and property managers.',
  },
  {
    question: 'Which guide should I read first?',
    answer:
      'It depends on your project. If you are planning a brand-new commercial space, start with the Commercial Construction Guide. If you are renovating an existing building, the Commercial Upfit and Tenant Improvement guides are most relevant. If you are a property owner concerned about your roof, our Roof Maintenance and Roof Coating guides walk you through cost-effective alternatives to replacement.',
  },
  {
    question: 'Are these guides specific to Charlotte and the Carolinas?',
    answer:
      'Yes. Every guide is written for North Carolina and South Carolina building codes, climate, soil conditions, and permitting jurisdictions. We address Mecklenburg County, City of Charlotte, York County SC, and surrounding municipalities specifically. Out-of-region readers will still find the construction principles useful, but cost figures and code references are Charlotte-specific.',
  },
  {
    question: 'How often are the guides updated?',
    answer:
      'We review every guide at least annually and update sooner whenever building codes, permitting requirements, or material costs change significantly. Each guide includes a last-reviewed date so you know the information is current.',
  },
  {
    question: 'Can I get help applying what I learn in these guides?',
    answer:
      'Absolutely. Call (980) 471-1745 or use our contact form for a free consultation. We will review your project, provide a detailed line-item estimate, and walk you through the construction process. We are licensed in NC and SC, USGBC members, and veteran and family-owned with 60+ years combined experience.',
  },
  {
    question: 'Do you have guides for residential projects?',
    answer:
      'We Build focuses on commercial construction, so our active guides target commercial buildings, upfits, and roof care. Some of our older residential guides are still accessible by direct URL for reference, but we no longer prominently feature residential content on the site.',
  },
];
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Wrench, Building2, Layers, UtensilsCrossed, Shield, Phone, ShieldCheck, Award, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllGuides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides | Commercial Construction Guides Charlotte NC',
  description:
    'Free, in-depth Charlotte construction guides for business owners — commercial build-outs, flooring, roof care, and more. Expert tips from We Build.',
  keywords: [
    'Charlotte construction guides',
    'commercial construction tips',
    'commercial flooring guide charlotte nc',
    'commercial construction guide charlotte',
    'roof maintenance guide',
    'restaurant build-out guide charlotte',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/guides',
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Building2, Layers, UtensilsCrossed, Shield,
  CookingPot: UtensilsCrossed, // fallback
};

// Residential / deprecated-service guides — hidden from listing per client
// review (direct URLs may still resolve for back-link preservation).
const HIDDEN_GUIDE_SLUGS = new Set([
  'home-maintenance-guide-charlotte',
  'flooring-options-guide-charlotte-homes',
  'kitchen-remodel-planning-guide-charlotte',
  'bathroom-remodel-guide-charlotte',
  'energy-efficiency-guide-charlotte-homes',
  'home-addition-planning-guide-charlotte',
  'charlotte-moisture-humidity-guide-homeowners',
  'paint-color-guide-charlotte-homes',
  'deck-outdoor-living-guide-charlotte',
  'lighting-design-guide-charlotte-homes',
  'first-time-home-buyer-construction-guide-charlotte',
  'choosing-right-contractor-charlotte-guide',
  'construction-management-guide-charlotte-property-owners',
]);

export default function GuidesPage() {
  const guides = getAllGuides().filter((g) => !HIDDEN_GUIDE_SLUGS.has(g.slug));

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ label: 'Home', href: '/' }, { label: 'Guides' }]), faqSchema(guidesFaqs)]} />
      <PageHero
        title="Guides"
        subtitle="Free, expert commercial construction guides for Charlotte"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Guides' }]} />

          <div className="max-w-3xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Expert Guides for Business Owners
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We created these guides to help Charlotte business
              owners make informed decisions about construction, maintenance, and
              improvements. Each guide is written by our experienced team and
              tailored to Charlotte&apos;s specific climate, codes, and market
              conditions. No sales pitch — just practical, actionable
              information from a licensed, veteran-owned commercial general
              contractor with 60+ years of combined experience in North and South
              Carolina.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Need help applying any of this to your project? Browse our{' '}
              <Link href="/services" className="text-primary hover:underline font-medium">full service list</Link>,{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline font-medium">commercial construction</Link>,{' '}
              <Link href="/services/commercial-upfits" className="text-primary hover:underline font-medium">commercial upfits</Link>,{' '}
              <Link href="/services/roof-coating" className="text-primary hover:underline font-medium">roof coating</Link>, or{' '}
              <Link href="/portfolio" className="text-primary hover:underline font-medium">see our completed projects</Link>.
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
                            <Clock className="h-3 w-3" aria-hidden="true" />
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
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Frequently Asked Questions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About the We Build Construction Guides
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Common questions about how to use these construction guides.
          </p>
          <FaqAccordion faqs={guidesFaqs} />
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
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
