import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Droplets,
  Sun,
  Shield,
  Leaf,
  DollarSign,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roof Coating Charlotte NC | Commercial Roof Restoration',
  description:
    'Commercial roof coating contractor in Charlotte, NC. Save up to 50% vs roof replacement. Silicone, acrylic & elastomeric coatings. IIBEC certified. Free roof assessments.',
  keywords: [
    'roof coating charlotte nc',
    'commercial roof coating charlotte',
    'roof coating contractor near me',
    'commercial roof restoration charlotte nc',
    'silicone roof coating charlotte',
    'roof sealing companies',
  ],
};

const coatingTypes = [
  { title: 'Silicone Roof Coating', desc: 'Superior waterproofing and UV resistance. Ideal for flat and low-slope commercial roofs that pond water.' },
  { title: 'Acrylic Roof Coating', desc: 'Cost-effective reflective coating. Great for sloped metal roofs and areas with moderate rainfall.' },
  { title: 'Elastomeric Coating', desc: 'Highly flexible coating that expands and contracts with temperature changes. Excellent for metal roofs.' },
  { title: 'SPF (Spray Foam)', desc: 'Spray polyurethane foam provides insulation and waterproofing in one application. Best R-value per inch.' },
];

const benefits = [
  { icon: DollarSign, title: 'Save Up to 50%', desc: 'Compared to full roof replacement costs.' },
  { icon: Droplets, title: '100% Waterproof', desc: 'Tested and verified for complete waterproofing.' },
  { icon: Sun, title: 'UV Resistant', desc: 'Reflects heat, reducing cooling costs by up to 25%.' },
  { icon: Shield, title: 'Extends Roof Life', desc: '10-15 additional years of roof protection.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'No tear-off waste. Non-toxic and odor-free.' },
  { icon: Zap, title: 'Fast Application', desc: 'Most projects completed in days, not weeks.' },
];

const faqs = [
  {
    question: 'How much does commercial roof coating cost?',
    answer: 'Commercial roof coating typically costs $2-$5 per square foot, compared to $5-$10+ for full roof replacement. The exact cost depends on roof size, condition, coating type, and accessibility. We provide free roof assessments with detailed cost estimates.',
  },
  {
    question: 'How long does roof coating last?',
    answer: 'Quality roof coatings last 10-15 years with proper application and minimal maintenance. Silicone coatings generally offer the longest lifespan. Many coatings can be recoated at end of life for continued protection.',
  },
  {
    question: 'Is roof coating better than roof replacement?',
    answer: 'Roof coating is an excellent alternative when the existing roof structure is sound. It costs 50-70% less than replacement, generates zero tear-off waste, and can be applied with minimal business disruption. However, roofs with structural damage may require replacement.',
  },
  {
    question: 'What types of roofs can be coated?',
    answer: 'We coat metal roofs, flat (built-up) roofs, single-ply membranes (TPO, EPDM, PVC), modified bitumen, concrete roofs, and more. Our team assesses your specific roof to recommend the best coating system.',
  },
  {
    question: 'Can you coat my roof while my business stays open?',
    answer: 'Yes. Roof coating is applied externally with no interior disruption. Our coatings are non-toxic and odor-free, so your business can operate normally during application.',
  },
];

export default function RoofCoatingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Roof Coating',
            'Professional commercial roof coating and restoration in Charlotte, NC. Save up to 50% vs replacement.',
            'https://webuildclt.com/services/roof-coating'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Roof Coating Charlotte NC"
        subtitle="Commercial roof restoration that saves up to 50% vs replacement"
        backgroundImage="/images/we-coat-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Roof Coating' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Roof Coating & Restoration in Charlotte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When your commercial roof shows signs of aging, you do not always
                need a full replacement. We Coat, our dedicated roof restoration
                division, provides professional roof coating services that extend
                your roof&apos;s life by 10-15 years at a fraction of replacement
                cost.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our IIBEC-certified team applies high-performance coatings to
                commercial roofs throughout Charlotte, NC. Whether you have a
                flat roof, metal roof, or single-ply membrane, we have the
                expertise and materials to protect your investment.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Save Up to 50% vs. Roof Replacement
                </h3>
                <p className="text-muted-foreground">
                  A roof coating costs $2-$5/sq ft compared to $5-$10+/sq ft
                  for full replacement — plus reduced energy costs from
                  reflective coatings.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Free Roof Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="http://www.wecoatus.com" target="_blank" rel="noopener noreferrer">
                    Visit WeCoatUS.com
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Coating Types We Apply</h3>
              {coatingTypes.map((type) => (
                <Card key={type.title}>
                  <CardContent className="p-5">
                    <h4 className="font-semibold mb-1">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Commercial Roof Coating
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
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
              Roof Coating FAQ
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
            Ready to Restore Your Roof?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free roof assessment today. Our certified team will
            evaluate your roof and provide a detailed coating recommendation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Assessment</Link>
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
