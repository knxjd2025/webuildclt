import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema, webSiteSchema, organizationSchema } from '@/lib/structured-data';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { heroFeatures, homeFaqs } from '@/data/homepage';

/* Above-fold — eagerly loaded for fast LCP */
import {
  StatsBar,
  AboutSection,
  ServicesGrid,
  WhyChooseUs,
} from '@/components/home';

/* Below-fold — lazy-loaded to improve TTI */
const FeaturedProjects = dynamic(() => import('@/components/home/FeaturedProjects').then(m => ({ default: m.FeaturedProjects })));
const ProcessTimeline = dynamic(() => import('@/components/home/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })));
const IndustriesSection = dynamic(() => import('@/components/home/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const TestimonialSection = dynamic(() => import('@/components/home/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const AreasSection = dynamic(() => import('@/components/home/AreasSection').then(m => ({ default: m.AreasSection })));
const USGBCSection = dynamic(() => import('@/components/home/USGBCSection').then(m => ({ default: m.USGBCSection })));
const FAQSection = dynamic(() => import('@/components/home/FAQSection').then(m => ({ default: m.FAQSection })));
const CTASection = dynamic(() => import('@/components/home/CTASection').then(m => ({ default: m.CTASection })));

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title:
    'We Build | Commercial Construction Company Charlotte NC | General Contractor',
  description:
    'We Build is Charlotte NC\'s veteran-owned commercial construction company. General contractor licensed in NC & SC. Commercial upfits, design-build, roof coating. 60+ years combined experience. USGBC member. Free estimates: (704) 574-8124.',
  alternates: {
    canonical: 'https://webuildclt.com',
  },
  openGraph: {
    title: 'We Build | Commercial Construction Company Charlotte NC',
    description:
      'Veteran-owned commercial construction company in Charlotte, NC. Licensed in NC & SC. Commercial upfits, design-build, roof coating. 60+ years combined experience. Free estimates.',
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
      'Veteran-owned commercial construction. Licensed in NC & SC. 60+ years experience. Free estimates: (704) 574-8124.',
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs), webSiteSchema(), organizationSchema()]} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <HeroSlideshow />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <h1 className="font-bold text-[var(--on-image)] mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Commercial Construction{' '}
              <span className="text-primary">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--on-image)] mb-4 leading-relaxed">
              We Build is Charlotte&apos;s trusted commercial construction
              company. Veteran and family-owned, licensed in both North Carolina
              and South Carolina, with over sixty years of combined construction
              experience. From ground-up{' '}
              <Link href="/services/commercial-construction" className="underline text-[var(--on-image)] hover:text-primary transition-colors">
                commercial construction
              </Link>{' '}
              and{' '}
              <Link href="/services/commercial-upfits" className="underline text-[var(--on-image)] hover:text-primary transition-colors">
                commercial upfits
              </Link>{' '}
              to{' '}
              <Link href="/services/design-build" className="underline text-[var(--on-image)] hover:text-primary transition-colors">
                design-build
              </Link>{' '}
              and{' '}
              <Link href="/services/roof-coating" className="underline text-[var(--on-image)] hover:text-primary transition-colors">
                roof coatings
              </Link>
              , we deliver quality craftsmanship on time and on budget.
            </p>
            <p className="text-base text-[var(--on-image-muted)] mb-8 leading-relaxed">
              USGBC member. Serving Charlotte, South Charlotte, Fort Mill SC,
              Lake Norman, and the greater Carolina region. Call{' '}
              <a href="tel:+17045748124" className="text-primary font-semibold hover:underline">
                (704) 574-8124
              </a>{' '}
              for a free estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="btn-shimmer">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="onImage" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button size="lg" variant="onImage" className="md:hidden" asChild>
                <a href="tel:+17045748124">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {heroFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm text-[var(--on-image)] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsBar />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessTimeline />
      <IndustriesSection />
      <TestimonialSection />
      <AreasSection />
      <USGBCSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
