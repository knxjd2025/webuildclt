import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Home,
  Hammer,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Users,
  ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Contractor Charlotte NC',
  description:
    'Licensed general contractor in Charlotte, NC. Commercial construction, residential builds, upfits & renovations. Veteran-owned, 60+ years combined experience. Free quotes.',
  keywords: [
    'general contractor charlotte nc',
    'general contractor in charlotte nc',
    'licensed general contractor charlotte',
    'commercial general contractor charlotte nc',
    'residential general contractor charlotte nc',
  ],
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Ground-up commercial builds, office buildings, retail spaces, and industrial facilities throughout Charlotte.',
    href: '/services/commercial-construction',
  },
  {
    icon: Hammer,
    title: 'Commercial Upfits',
    description:
      'Transform your business space with expert upfit services. Offices, restaurants, medical facilities, and retail.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    description:
      'Build the home of your dreams with our experienced residential construction team.',
    href: '/services/custom-home-builder',
  },
  {
    icon: ClipboardCheck,
    title: 'Residential Additions',
    description:
      'Expand your living space with room additions, second stories, and garage conversions.',
    href: '/services/residential-additions',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    description:
      'Eco-friendly commercial roof coating that saves up to 50% vs. full replacement.',
    href: '/services/roof-coating',
  },
  {
    icon: Award,
    title: 'Design-Build Services',
    description:
      'Complete design and build under one roof. Visit our Design Center to get started.',
    href: '/services/design-build',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed in NC & SC',
    description:
      'Fully licensed and insured general contractor serving North Carolina and South Carolina.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'Founded by veterans who bring discipline, integrity, and accountability to every project.',
  },
  {
    icon: CheckCircle,
    title: '60+ Years Combined Experience',
    description:
      'Our seasoned team brings decades of construction expertise across commercial and residential projects.',
  },
  {
    icon: Shield,
    title: 'USGBC Member',
    description:
      'Proud member of the U.S. Green Building Council, committed to sustainable building practices.',
  },
];

const faqs = [
  {
    question: 'What does a general contractor do?',
    answer:
      'A general contractor manages all aspects of a construction project, from planning and permitting to coordinating subcontractors, managing timelines, and ensuring quality. We serve as the single point of contact for your entire project.',
  },
  {
    question: 'Do I need a licensed general contractor in Charlotte NC?',
    answer:
      'Yes. North Carolina requires general contractors to be licensed for projects over $30,000. We Build holds active NC and SC general contractor licenses, ensuring your project meets all legal and safety requirements.',
  },
  {
    question: 'How much does a general contractor charge in Charlotte?',
    answer:
      'General contractor fees typically range from 10-20% of total project cost, depending on scope and complexity. We provide detailed, transparent estimates with no hidden fees. Contact us for a free quote on your specific project.',
  },
  {
    question: 'How long does a typical construction project take?',
    answer:
      'Timelines vary by project type: commercial upfits typically take 8-16 weeks, custom homes 6-12 months, and commercial builds 6-18 months. We provide detailed project schedules during the planning phase.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the greater Charlotte metro area including Mecklenburg County, Fort Mill SC, Lake Norman, South Charlotte, Ballantyne, and surrounding communities in North Carolina and South Carolina.',
  },
];

export default function GeneralContractorPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'General Contractor Services',
            'Licensed general contractor in Charlotte, NC providing commercial construction, residential builds, upfits, and roof coating services.',
            'https://webuildclt.com/services/general-contractor'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="General Contractor Charlotte NC"
        subtitle="Licensed, veteran-owned general contractor with 60+ years combined experience"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'General Contractor' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Trusted General Contractor in Charlotte, North Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned general contracting company
                based in Charlotte, NC. With more than 60 years of combined
                experience, our team delivers high-quality construction and
                remodeling services for both commercial and residential clients
                across the Charlotte metro area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed general contractor in both North Carolina and South
                Carolina, we manage every aspect of your project — from initial
                planning and permitting through construction and final
                walkthrough. Our commitment is simple: what you want, how you
                want it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a commercial upfit for your Charlotte business,
                a custom home build, or eco-friendly roof restoration, We Build
                brings the same level of professionalism, precision, and
                accountability to every job.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:7045748124">
                    <Phone className="mr-2 h-5 w-5" />
                    (704) 574-8124
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                {[
                  'Licensed general contractor in NC & SC',
                  'Veteran & family-owned since 2019',
                  'USGBC member — committed to green building',
                  'Commercial & residential construction',
                  '60+ years combined team experience',
                  'Free consultations and detailed estimates',
                  'Full design-build capabilities',
                  'Serving Charlotte metro & surrounding areas',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              General Contracting Services in Charlotte
            </h2>
            <p className="text-muted-foreground">
              From commercial builds to custom homes, we offer comprehensive
              construction services tailored to your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose We Build as Your General Contractor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-background rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&apos;s trusted general contractor today for a free
            consultation and detailed estimate. Let&apos;s build something great
            together.
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
              <a href="tel:7045748124">(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
