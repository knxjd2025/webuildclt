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
  Clock,
  Leaf,
  ExternalLink,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Roof Coating Detroit MI | We Coat by We Build',
  description:
    'We Coat provides professional commercial roof coating in Detroit and Metro Detroit MI. Silicone, acrylic, polyurethane & elastomeric coatings. Save up to 50% vs roof replacement. Free assessments. IIBEC certified. (980) 471-1745.',
  keywords: [
    'roof coating detroit mi',
    'commercial roof coating detroit',
    'roof restoration detroit michigan',
    'silicone roof coating detroit',
    'acrylic roof coating detroit',
    'flat roof coating detroit mi',
    'metal roof coating detroit',
    'roof coating contractor detroit',
    'commercial roof restoration metro detroit',
    'cool roof coating detroit michigan',
    'industrial roof coating detroit',
    'warehouse roof coating detroit',
    'roof coating near me detroit',
    'we coat detroit',
    'roof coating troy mi',
    'roof coating southfield mi',
    'roof coating warren mi',
    'roof coating sterling heights mi',
    'roof coating ann arbor mi',
    'roof coating royal oak mi',
    'commercial roof coating michigan',
    'elastomeric roof coating detroit',
    'polyurethane roof coating detroit',
    'flat roof repair detroit mi',
    'roof coating oakland county mi',
    'roof coating wayne county mi',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/detroit',
  },
  openGraph: {
    title: 'Commercial Roof Coating Detroit MI | We Coat by We Build',
    description:
      'Professional commercial roof coating serving Detroit and Metro Detroit. Silicone, acrylic, polyurethane & elastomeric coatings. Save up to 50% vs replacement. Free assessments.',
    type: 'website',
    url: 'https://webuildclt.com/areas/detroit',
  },
};

const coatingTypes = [
  {
    icon: Droplets,
    title: 'Silicone Roof Coating',
    description:
      'The premium choice for flat and low-slope commercial roofs in Detroit. Silicone handles ponding water without degradation and delivers 15 to 20 years of protection. Its superior UV resistance and flexibility perform through Michigan\'s extreme temperature swings.',
    cost: '$9-$12/sq ft',
    lifespan: '15-20 years',
  },
  {
    icon: Sun,
    title: 'Acrylic Roof Coating',
    description:
      'The most affordable professional coating option with excellent reflective properties. Acrylic reflects up to 85% of solar radiation and works best on sloped metal roofs with good drainage. A cost-effective entry point for Detroit building owners.',
    cost: '$8-$10/sq ft',
    lifespan: '10-15 years',
  },
  {
    icon: Shield,
    title: 'Polyurethane Roof Coating',
    description:
      'Highest impact and abrasion resistance of any coating type. Ideal for Detroit roofs with heavy foot traffic from HVAC technicians or rooftop equipment servicing. Available in aromatic base coat and aliphatic UV-stable topcoat formulations.',
    cost: '$9-$12/sq ft',
    lifespan: '10-20 years',
  },
  {
    icon: Thermometer,
    title: 'Elastomeric Roof Coating',
    description:
      'Stretches up to 300% without cracking, making it ideal for metal roofs that expand and contract through Detroit\'s harsh thermal cycling. Bridges existing cracks and gaps in aging substrates while maintaining a seamless waterproof barrier.',
    cost: '$8.50-$11/sq ft',
    lifespan: '10-15 years',
  },
];

const whyDetroit = [
  {
    icon: Thermometer,
    title: 'Harsh Michigan Winters',
    description:
      'Detroit winters bring heavy snow loads, ice damming, and sustained sub-zero temperatures that stress roof membranes and seams. Professional coatings maintain flexibility down to -40 degrees Fahrenheit, preventing the cracking and delamination that rigid roofing systems suffer.',
  },
  {
    icon: Layers,
    title: 'Freeze-Thaw Cycling',
    description:
      'Metro Detroit experiences over 100 freeze-thaw cycles per year. Water infiltrates tiny cracks, freezes, expands, and widens the damage with every cycle. Seamless roof coatings eliminate the entry points that make freeze-thaw damage so destructive.',
  },
  {
    icon: Sun,
    title: 'Summer Heat & UV Exposure',
    description:
      'Detroit summers push roof surface temperatures above 150 degrees on dark roofs. Reflective coatings reduce surface temperature by 50 to 60 degrees, cutting cooling costs by 15 to 25 percent and reducing thermal stress on the membrane beneath.',
  },
  {
    icon: DollarSign,
    title: 'Save 50-70% vs. Replacement',
    description:
      'Roof coating costs $8 to $12 per square foot compared to $12 to $20 or more for full replacement. For a 10,000 sq ft commercial roof, that represents $40,000 to $80,000 in savings with zero business disruption.',
  },
];

const industries = [
  {
    icon: Factory,
    title: 'Automotive & Manufacturing Facilities',
    description:
      'Detroit\'s manufacturing and automotive sector has millions of square feet of flat commercial roofing. These large-footprint facilities represent the highest ROI for roof coating because savings scale directly with square footage.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses & Distribution Centers',
    description:
      'Metro Detroit\'s logistics corridor along I-94 and I-75 includes massive warehouse and distribution facilities. Coating a 50,000 sq ft warehouse roof can save $150,000 or more versus full replacement.',
  },
  {
    icon: Building2,
    title: 'Office Buildings & Corporate Campuses',
    description:
      'Office buildings across Troy, Southfield, and Downtown Detroit benefit from reflective coatings that reduce cooling costs and eliminate leak risks that damage interior finishes and tenant improvements.',
  },
  {
    icon: Factory,
    title: 'Industrial & Processing Plants',
    description:
      'Industrial facilities in Warren, Sterling Heights, and along the I-696 corridor need durable roof protection against chemical exposure, heavy foot traffic, and rooftop equipment loads. Polyurethane coatings deliver maximum durability.',
  },
];

const serviceAreas = [
  'Detroit', 'Troy', 'Southfield', 'Royal Oak', 'Warren',
  'Sterling Heights', 'Dearborn', 'Ann Arbor', 'Livonia',
  'Farmington Hills', 'Novi', 'Auburn Hills', 'Pontiac',
  'Rochester Hills', 'Hamtramck', 'Ferndale',
];

const faqs = [
  {
    question: 'How much does commercial roof coating cost in Detroit?',
    answer:
      'Commercial roof coating in Metro Detroit costs $8 to $12 per square foot installed, depending on coating type, roof condition, and accessibility. Silicone runs $9 to $12/sq ft, acrylic $8 to $10/sq ft, polyurethane $9 to $12/sq ft, and elastomeric $8.50 to $11/sq ft. For a 10,000 sq ft commercial roof, expect $80,000 to $120,000 compared to $120,000 to $200,000 or more for full replacement.',
  },
  {
    question: 'Can roof coating handle Michigan winters?',
    answer:
      'Yes. Professional-grade silicone and elastomeric coatings maintain full flexibility at temperatures well below zero. These coatings are specifically engineered for climates with extreme thermal cycling like Michigan, where roofs experience temperature swings of over 100 degrees between summer and winter. The coatings expand and contract with the substrate without cracking or delaminating.',
  },
  {
    question: 'How long does roof coating last in Detroit\'s climate?',
    answer:
      'Silicone coatings last 15 to 20 years, acrylic and elastomeric coatings 10 to 15 years, and polyurethane systems 10 to 20 years. Proper surface preparation and professional application at correct dry film thickness are critical to achieving maximum lifespan. When a coating reaches end of life, it can be cleaned and recoated without tearing off the existing roof.',
  },
  {
    question: 'Does We Coat serve the entire Metro Detroit area?',
    answer:
      'Yes. We Coat serves Detroit and the entire Metro Detroit region including Troy, Southfield, Royal Oak, Warren, Sterling Heights, Dearborn, Ann Arbor, Livonia, Farmington Hills, Novi, Auburn Hills, Pontiac, Rochester Hills, and surrounding communities across Wayne, Oakland, and Macomb counties.',
  },
  {
    question: 'What is the difference between We Build and We Coat?',
    answer:
      'We Build is our veteran and family-owned construction company that handles full-service commercial construction in the Carolinas. We Coat is the dedicated roof coating division that serves both the Carolinas and Michigan. We Coat focuses exclusively on commercial roof coating and restoration, with crews that apply coatings every day. Visit wecoatcommercialroofing.com for more information.',
  },
  {
    question: 'Can my Detroit business stay open during roof coating?',
    answer:
      'Yes. Roof coating is applied externally with no interior work required. Our coatings are non-toxic, low-VOC, and odor-free. Your employees, customers, and operations continue without interruption. There is no loud tear-off noise, no debris, and no need to relocate inventory or equipment. Most projects complete in 2 to 5 days.',
  },
];

export default function DetroitPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'We Coat', href: '/we-coat' },
            { label: 'Detroit MI' },
          ]),
        ]}
      />

      <PageHero
        title="Commercial Roof Coating Detroit MI"
        subtitle="We Coat serves Metro Detroit with professional commercial roof coating. Save up to 50% vs replacement. Free assessments."
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Breadcrumbs + Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'We Coat', href: '/we-coat' },
              { label: 'Detroit MI' },
            ]}
          />

          <div className="max-w-3xl mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Coat: Detroit&rsquo;s Commercial Roof Coating Experts
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>We Coat</strong> is the dedicated commercial roof coating division of{' '}
              <Link href="/about" className="text-primary hover:underline">We Build</Link>,
              a veteran and family-owned construction company. While We Build handles full-service
              commercial construction in the Carolinas, We Coat focuses exclusively on commercial
              roof coating and restoration across both the Carolinas and Michigan.
            </p>
            <p className="text-muted-foreground mb-4">
              Detroit&rsquo;s commercial buildings face some of the most demanding roofing conditions
              in the country. Harsh winters with heavy snow loads, over 100 freeze-thaw cycles per year,
              and summer heat that pushes roof surface temperatures past 150 degrees all accelerate roof
              deterioration. When your commercial roof starts showing its age, a professionally applied
              coating can restore waterproofing, add 10 to 20 years of service life, and save 50 to 70
              percent compared to a full replacement.
            </p>
            <p className="text-muted-foreground mb-6">
              Our IIBEC-certified team brings specialized expertise in surface preparation, coating
              chemistry, and application methods for every commercial roof substrate. We serve building
              owners, property managers, and commercial real estate investors across the entire Metro
              Detroit region.
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

      {/* Why Detroit Buildings Need Roof Coating */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Michigan Climate Challenges</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Detroit Buildings Need Roof Coating
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Michigan&rsquo;s extreme climate demands roof protection that can handle thermal cycling,
            heavy snow, ice, and intense summer UV exposure.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyDetroit.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coating Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Coating Systems</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Commercial Roof Coating Types
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We apply four professional-grade coating systems, each selected for your roof&rsquo;s
            specific substrate, condition, and performance requirements.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coatingTypes.map((coating) => (
              <Card key={coating.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 shrink-0">
                      <coating.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{coating.title}</h3>
                      <div className="flex gap-4 text-xs text-primary font-medium mb-2">
                        <span>{coating.cost}</span>
                        <span>{coating.lifespan}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{coating.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Industries We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Detroit Industries We Protect
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From automotive manufacturing to corporate offices, We Coat protects Detroit&rsquo;s
            commercial buildings with professional roof coating systems.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {industries.map((industry) => (
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

      {/* Service Area Coverage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Service Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metro Detroit Service Area
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We Coat provides commercial roof coating across the entire Metro Detroit region,
              covering Wayne, Oakland, Macomb, and Washtenaw counties.
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
                href="/areas/dearborn"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Dearborn MI
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Detroit Roof Coating FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Detroit Commercial Roof</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            We Coat is the dedicated commercial roof coating division of We Build. IIBEC certified.
            USGBC member. Veteran and family-owned.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you own a warehouse in Warren, an office building in Troy, or a manufacturing
            facility in Detroit, We Coat delivers professional roof coating that saves you 50 to 70
            percent versus full replacement. Contact us for a free, no-obligation roof assessment.
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
