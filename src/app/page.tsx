import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { heroFeatures, homeFaqs } from '@/data/homepage';
import {
  StatsBar,
  AboutSection,
  ServicesGrid,
  ProcessTimeline,
  WhyChooseUs,
  IndustriesSection,
  VideoShowcase,
  FeaturedProjects,
  TestimonialSection,
  AreasSection,
  MarketInsightSection,
  USGBCSection,
  FAQSection,
  BlogPreview,
  CTASection,
  FinanceSection,
} from '@/components/home';

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title:
    'We Build | Commercial Construction Company Charlotte NC | General Contractor',
  description:
    'We Build is Charlotte NC\'s veteran-owned commercial construction company. General contractor licensed in NC & SC. Commercial upfits, design-build, custom homes, roof coating. 60+ years combined experience. USGBC member. Free estimates: (562) 708-6616.',
  keywords: [
    'commercial construction charlotte nc',
    'general contractor charlotte nc',
    'construction company charlotte nc',
    'commercial upfit charlotte nc',
    'design build charlotte nc',
    'custom home builder charlotte nc',
    'roof coating charlotte nc',
    'veteran owned contractor charlotte',
    'licensed general contractor nc sc',
    'commercial construction company near me',
    'office upfit charlotte',
    'restaurant build out charlotte nc',
    'residential additions charlotte nc',
    'USGBC member contractor charlotte',
    'construction company fort mill sc',
    'contractor lake norman nc',
    'south charlotte contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com',
  },
  openGraph: {
    title: 'We Build | Commercial Construction Company Charlotte NC',
    description:
      'Veteran-owned commercial construction company in Charlotte, NC. Licensed in NC & SC. Commercial upfits, design-build, custom homes, roof coating. 60+ years combined experience. Free estimates.',
    url: 'https://webuildclt.com',
    siteName: 'We Build',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webuildclt.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'We Build — Commercial Construction Charlotte NC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Build | Commercial Construction Company Charlotte NC',
    description:
      'Veteran-owned commercial construction. Licensed in NC & SC. 60+ years experience. Free estimates: (562) 708-6616.',
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <HeroSlideshow />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-6 leading-tight">
              Commercial Construction{' '}
              <span className="text-primary">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-4 leading-relaxed">
              We Build is Charlotte&apos;s trusted commercial construction
              company. Veteran and family-owned, licensed in both North Carolina
              and South Carolina, with over sixty years of combined construction
              experience. From ground-up{' '}
              <Link href="/services/commercial-construction" className="underline text-white hover:text-primary transition-colors">
                commercial construction
              </Link>{' '}
              and{' '}
              <Link href="/services/commercial-upfits" className="underline text-white hover:text-primary transition-colors">
                commercial upfits
              </Link>{' '}
              to{' '}
              <Link href="/services/design-build" className="underline text-white hover:text-primary transition-colors">
                design-build
              </Link>{' '}
              and{' '}
              <Link href="/services/roof-coating" className="underline text-white hover:text-primary transition-colors">
                roof coatings
              </Link>
              , we deliver quality craftsmanship on time and on budget.
            </p>
            <p className="text-base text-white/90 mb-8 leading-relaxed">
              USGBC member. Serving Charlotte, South Charlotte, Fort Mill SC,
              Lake Norman, and the greater Carolina region. Call{' '}
              <a href="tel:5627086616" className="text-primary font-semibold hover:underline">
                (562) 708-6616
              </a>{' '}
              for a free estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="btn-shimmer cta-pulse">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground md:hidden"
                asChild
              >
                <a href="tel:5627086616">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm text-white font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-60">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <StatsBar />
      <AboutSection />
      <ServicesGrid />
      <ProcessTimeline />
      <WhyChooseUs />
      <IndustriesSection />
      <VideoShowcase />
      <FeaturedProjects />
      <TestimonialSection />
      <AreasSection />
      <MarketInsightSection />
      <USGBCSection />
      <FAQSection />
      <BlogPreview />
      <CTASection />
      <FinanceSection />
    </>
  );
}
