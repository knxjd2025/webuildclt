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
  Store,
  Stethoscope,
  Warehouse,
  UtensilsCrossed,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Construction Charlotte NC',
  description:
    'Commercial construction company in Charlotte, NC. Office buildings, retail spaces, restaurants, medical facilities & warehouses. Licensed general contractor. Free estimates.',
  keywords: [
    'commercial construction charlotte nc',
    'commercial construction companies charlotte nc',
    'commercial general contractor charlotte nc',
    'commercial building contractor charlotte',
  ],
};

const projectTypes = [
  { icon: Building2, title: 'Office Buildings', desc: 'New builds, expansions, and full renovations for modern workspaces.' },
  { icon: Store, title: 'Retail Spaces', desc: 'Storefronts, shopping centers, and retail build-outs that drive foot traffic.' },
  { icon: UtensilsCrossed, title: 'Restaurants', desc: 'Full restaurant build-outs including kitchen, dining, and bar areas.' },
  { icon: Stethoscope, title: 'Medical Facilities', desc: 'Healthcare spaces built to meet strict compliance and safety standards.' },
  { icon: Warehouse, title: 'Industrial & Warehouse', desc: 'Warehouse construction, distribution centers, and light industrial facilities.' },
  { icon: Building2, title: 'Mixed-Use Developments', desc: 'Multi-purpose buildings combining retail, office, and residential spaces.' },
];

const faqs = [
  {
    question: 'What types of commercial construction do you handle?',
    answer: 'We handle all types of commercial construction including office buildings, retail spaces, restaurants, medical facilities, warehouses, and mixed-use developments. Our team manages projects from ground-up construction to major renovations.',
  },
  {
    question: 'How much does commercial construction cost in Charlotte?',
    answer: 'Commercial construction costs in Charlotte vary by project type: office upfits run $50-$150/sq ft, retail build-outs $75-$200/sq ft, and ground-up construction $150-$400+/sq ft. We provide detailed estimates tailored to your specific project scope.',
  },
  {
    question: 'Do you handle commercial construction permits in Charlotte?',
    answer: 'Yes, we manage the entire permitting process with Mecklenburg County and surrounding jurisdictions. This includes building permits, zoning approvals, and any special permits required for your project type.',
  },
  {
    question: 'What is your commercial construction process?',
    answer: 'Our process includes: pre-construction planning and budgeting, design coordination, permitting, construction management, quality control inspections, and final delivery. We provide regular progress updates and maintain transparent communication throughout.',
  },
];

export default function CommercialConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Construction',
            'Full-service commercial construction in Charlotte, NC. Office buildings, retail, restaurants, medical facilities.',
            'https://webuildclt.com/services/commercial-construction'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Commercial Construction Charlotte NC"
        subtitle="Full-service commercial construction for Charlotte businesses"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Commercial Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-5 gap-12 items-start mt-8">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Construction Services in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build delivers high-quality commercial construction services
                across the greater Charlotte metro area. From ground-up builds
                to major renovations, our experienced team manages every aspect
                of your commercial project with precision and professionalism.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed general contractor in North Carolina and South
                Carolina, we bring over 60 years of combined experience to
                commercial projects of all sizes. Our clients include business
                owners, property managers, developers, and franchisees
                throughout the Charlotte region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that commercial construction impacts your
                business operations and bottom line. That is why we focus on
                delivering projects on time, on budget, and to the highest
                quality standards — minimizing disruption so you can focus on
                running your business.
              </p>
            </div>
            <div className="lg:col-span-2 bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Our Commitment</h3>
              <ul className="space-y-4">
                {[
                  'On-time project delivery',
                  'Transparent budget management',
                  'Licensed in NC & SC',
                  'Full project management',
                  'Quality craftsmanship guarantee',
                  'OSHA safety compliance',
                  'Sustainable building practices',
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

      {/* Project Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Project Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Commercial Construction We Specialize In
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Commercial Construction FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
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
            Let&apos;s Build Your Commercial Project
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for a free estimate on your commercial construction
            project in Charlotte, NC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:7045748124">
                <Phone className="mr-2 h-5 w-5" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
