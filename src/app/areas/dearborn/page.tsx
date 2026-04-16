import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Droplets,
  Shield,
  Sun,
  Thermometer,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  DollarSign,
  Factory,
  Building2,
  Warehouse,
  Layers,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Roof Coating Dearborn MI | We Coat by We Build',
  description:
    'We Coat provides commercial roof coating in Dearborn MI and surrounding areas. Silicone, acrylic, polyurethane & elastomeric coatings for manufacturing, industrial, and commercial buildings. Save up to 50% vs replacement. Free assessments. (980) 471-1745.',
  keywords: [
    'roof coating dearborn mi',
    'commercial roof coating dearborn',
    'roof restoration dearborn michigan',
    'silicone roof coating dearborn',
    'flat roof coating dearborn mi',
    'metal roof coating dearborn',
    'roof coating contractor dearborn',
    'industrial roof coating dearborn',
    'manufacturing roof coating dearborn mi',
    'warehouse roof coating dearborn',
    'roof coating near me dearborn',
    'we coat dearborn',
    'roof coating dearborn heights',
    'roof coating wayne county mi',
    'commercial roof coating michigan',
    'ford road roof coating dearborn',
    'michigan avenue roof coating dearborn',
    'elastomeric roof coating dearborn',
    'roof coating allen park mi',
    'roof coating melvindale mi',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/dearborn',
  },
  openGraph: {
    title: 'Commercial Roof Coating Dearborn MI | We Coat by We Build',
    description:
      'Professional commercial roof coating serving Dearborn and Wayne County MI. Silicone, acrylic, polyurethane & elastomeric coatings. Save up to 50% vs replacement. Free assessments.',
    type: 'website',
    locale: 'en_US',
  },
};

const coatingTypes = [
  {
    icon: Droplets,
    title: 'Silicone',
    description: 'Premium waterproofing for flat roofs. Handles ponding water. 15-20 year lifespan.',
    cost: '$9-$12/sq ft',
  },
  {
    icon: Sun,
    title: 'Acrylic',
    description: 'Most affordable option with excellent reflectivity. Best for sloped metal roofs with good drainage.',
    cost: '$8-$10/sq ft',
  },
  {
    icon: Shield,
    title: 'Polyurethane',
    description: 'Highest impact resistance. Ideal for high-traffic roofs and heavy equipment areas.',
    cost: '$9-$12/sq ft',
  },
  {
    icon: Thermometer,
    title: 'Elastomeric',
    description: 'Stretches up to 300% without cracking. Perfect for metal roofs with extreme thermal cycling.',
    cost: '$8.50-$11/sq ft',
  },
];

const dearbornIndustries = [
  {
    icon: Factory,
    title: 'Manufacturing & Automotive',
    description:
      'Dearborn is home to Ford Motor Company\'s world headquarters and the massive Rouge Complex. The surrounding area has hundreds of manufacturing facilities, suppliers, and automotive-related businesses with large flat commercial roofs that are ideal candidates for coating.',
  },
  {
    icon: Warehouse,
    title: 'Industrial & Warehousing',
    description:
      'Dearborn\'s industrial corridors along Michigan Avenue, Ford Road, and the Rouge River area contain warehouse and distribution facilities that benefit from coating\'s cost savings at scale. A 50,000 sq ft warehouse saves $150,000 or more versus full replacement.',
  },
  {
    icon: Building2,
    title: 'Office & Commercial Buildings',
    description:
      'The Fairlane district, downtown Dearborn, and West Dearborn commercial corridors house office buildings and retail centers where reflective coatings reduce energy costs and eliminate leak risks without disrupting tenants.',
  },
  {
    icon: Building2,
    title: 'Institutional & Healthcare',
    description:
      'Beaumont Dearborn, UM-Dearborn, Henry Ford College, and other institutional facilities require reliable roof protection that cannot disrupt critical operations. Roof coating is applied externally with zero interior disruption.',
  },
];

const serviceAreas = [
  'Dearborn', 'Dearborn Heights', 'Allen Park', 'Melvindale',
  'Inkster', 'Garden City', 'Westland', 'Taylor',
  'Lincoln Park', 'Southgate', 'Romulus', 'Wayne',
];

const faqs = [
  {
    question: 'How much does roof coating cost in Dearborn?',
    answer:
      'Commercial roof coating in Dearborn costs $8 to $12 per square foot installed. For a 10,000 sq ft commercial roof, expect $80,000 to $120,000 compared to $120,000 to $200,000 or more for full replacement. Coating type, roof condition, and accessibility affect final pricing. We provide detailed, line-item proposals.',
  },
  {
    question: 'Can roof coating protect against Michigan snow and ice?',
    answer:
      'Yes. Professional silicone and elastomeric coatings maintain full flexibility at sub-zero temperatures and handle the heavy snow loads common in the Dearborn area. The seamless membrane eliminates the seam failures and ice dam damage that plague traditional roofing systems during Michigan winters.',
  },
  {
    question: 'Is We Coat a local Dearborn company?',
    answer:
      'We Coat is the dedicated roof coating division of We Build, a veteran and family-owned construction company. While our headquarters is in Charlotte NC, We Coat serves both the Carolinas and Michigan, including Dearborn and the entire Metro Detroit region. We hold contractor licenses in Michigan. Visit wecoatcommercialroofing.com for details.',
  },
  {
    question: 'How long does the coating process take?',
    answer:
      'Most commercial roof coating projects in Dearborn complete in 2 to 5 days depending on roof size and condition. Your business stays open throughout the process with zero interior disruption. There is no tear-off noise, no debris, and no need to relocate equipment or inventory.',
  },
  {
    question: 'What roof types can be coated in Dearborn?',
    answer:
      'We coat all commercial roof types including metal (standing seam, corrugated, R-panel), single-ply membranes (TPO, EPDM, PVC), modified bitumen, built-up roofing, spray foam, and concrete. Each substrate requires a specific coating system. Our IIBEC-certified team recommends the optimal coating for your building.',
  },
];

export default function DearbornPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'We Coat', href: '/we-coat' },
            { label: 'Dearborn MI' },
          ]),
        ]}
      />

      <PageHero
        title="Commercial Roof Coating Dearborn MI"
        subtitle="We Coat serves Dearborn and Wayne County with professional commercial roof coating. Save up to 50% vs replacement."
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Breadcrumbs + Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'We Coat', href: '/we-coat' },
              { label: 'Dearborn MI' },
            ]}
          />

          <div className="max-w-3xl mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Coat: Dearborn&rsquo;s Commercial Roof Coating Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>We Coat</strong> is the dedicated commercial roof coating division of{' '}
              <Link href="/about" className="text-primary hover:underline">We Build</Link>,
              serving Dearborn and the surrounding Wayne County communities with professional
              roof coating and restoration services.
            </p>
            <p className="text-muted-foreground mb-4">
              Dearborn is home to some of Michigan&rsquo;s largest manufacturing and industrial
              facilities, including Ford Motor Company&rsquo;s world headquarters and the historic
              Rouge Complex. These massive commercial roofs face Michigan&rsquo;s punishing climate:
              heavy snow loads, over 100 freeze-thaw cycles per year, and summer heat that pushes
              surface temperatures past 150 degrees. A professionally applied roof coating restores
              waterproofing and adds 10 to 20 years of service life at 50 to 70 percent less than
              a full roof replacement.
            </p>
            <p className="text-muted-foreground mb-6">
              Our IIBEC-certified team specializes in coating systems for the large-footprint
              manufacturing, industrial, and commercial buildings that define Dearborn&rsquo;s
              commercial landscape. We are also USGBC members, committed to sustainable building
              practices that eliminate tear-off waste and reduce building energy consumption.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Get a Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://wecoatcommercialroofing.com" target="_blank" rel="noopener noreferrer">
                  Visit wecoatcommercialroofing.com <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coating Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Coating Systems</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Roof Coating Types We Apply
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Four professional-grade coating systems selected for your roof&rsquo;s substrate,
            condition, and performance requirements.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coatingTypes.map((coating) => (
              <Card key={coating.title}>
                <CardContent className="p-6 text-center">
                  <div className="rounded-lg bg-primary/10 p-3 inline-flex mb-4">
                    <coating.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{coating.title}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{coating.cost}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{coating.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dearborn Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Dearborn Industries We Protect
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From Ford&rsquo;s manufacturing campus to downtown office buildings, We Coat
            protects Dearborn&rsquo;s commercial roofs.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dearbornIndustries.map((industry) => (
              <Card key={industry.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <industry.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Callout */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Save 50-70% vs. Roof Replacement</h2>
            <p className="text-muted-foreground mb-6">
              Roof coating costs <strong>$8 to $12 per square foot</strong> compared to{' '}
              <strong>$12 to $20 or more</strong> for full replacement. For Dearborn&rsquo;s
              large manufacturing and warehouse roofs, the savings are substantial. A 50,000
              sq ft facility saves $150,000 or more with coating versus replacement, with zero
              business disruption and zero landfill waste.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>2-5 day completion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>10-20 year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Zero interior disruption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Service Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dearborn Area Service Coverage
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We Coat serves Dearborn and surrounding Wayne County communities for commercial
              roof coating and restoration.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 bg-muted border rounded-lg px-4 py-2 text-sm"
                >
                  <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                  {area}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/we-coat"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                We Coat Overview
              </Link>
              <Link
                href="/areas/detroit"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Detroit Metro
              </Link>
              <Link
                href="/services/roof-coating"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Roof Coating Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Dearborn Roof Coating FAQ</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Dearborn Commercial Roof</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            We Coat is the dedicated commercial roof coating division of We Build. IIBEC certified.
            USGBC member. Veteran and family-owned.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you manage a manufacturing facility near the Rouge Complex, an office building
            in the Fairlane district, or a warehouse along Michigan Avenue, We Coat delivers
            professional roof coating at 50 to 70 percent less than full replacement. Contact us
            for a free assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+19804711745">
                <Phone className="mr-2 h-5 w-5" />(980) 471-1745
              </a>
            </Button>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6">
            <a
              href="https://wecoatcommercialroofing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm underline underline-offset-4"
            >
              Visit wecoatcommercialroofing.com <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
