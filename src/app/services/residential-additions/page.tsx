import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowRight, Phone, CheckCircle, PlusCircle, Layers, Building, DoorOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Additions Charlotte NC | Residential Additions',
  description:
    'Home addition contractor in Charlotte, NC. Room additions, second stories, garage conversions, mother-in-law suites. Expand your living space. Free estimates.',
  keywords: [
    'home addition contractors charlotte nc',
    'residential additions charlotte nc',
    'room addition charlotte nc',
    'second story addition charlotte',
    'garage conversion charlotte nc',
  ],
};

const additionTypes = [
  { icon: PlusCircle, title: 'Room Additions', desc: 'Extra bedrooms, family rooms, home offices, and sunrooms that seamlessly blend with your existing home.' },
  { icon: Layers, title: 'Second Story Additions', desc: 'Double your living space by adding a full or partial second floor to your one-story home.' },
  { icon: DoorOpen, title: 'Garage Conversions', desc: 'Transform unused garage space into a living area, home gym, studio, or rental unit.' },
  { icon: Home, title: 'In-Law Suites', desc: 'Self-contained living spaces for family members with private entrance, kitchen, and bathroom.' },
  { icon: Building, title: 'Kitchen Extensions', desc: 'Expand your kitchen footprint for a larger cooking and entertaining space.' },
  { icon: PlusCircle, title: 'Bump-Outs', desc: 'Small strategic additions (2-15 feet) that add meaningful space without a full addition footprint.' },
];

const faqs = [
  {
    question: 'How much does a home addition cost in Charlotte NC?',
    answer: 'Home addition costs in Charlotte range from $150-$400+ per square foot depending on the type. Simple room additions start around $150/sq ft, while second story additions and in-law suites with full kitchens and bathrooms run $250-$400+/sq ft. We provide detailed estimates after evaluating your specific project.',
  },
  {
    question: 'Do I need a permit for a home addition in Charlotte?',
    answer: 'Yes, all home additions in Mecklenburg County require building permits. Depending on the scope, you may also need zoning approval, especially for setback requirements. We handle the entire permit process on your behalf.',
  },
  {
    question: 'How long does a home addition take to build?',
    answer: 'Typical timelines: room additions 2-4 months, second story additions 4-6 months, garage conversions 6-10 weeks, and in-law suites 3-5 months. Design and permitting add 4-8 weeks before construction begins.',
  },
  {
    question: 'Will a home addition increase my property value?',
    answer: 'Yes. Well-designed additions typically return 50-80% of their cost in increased home value. Additions that add bedrooms, bathrooms, or functional living space tend to have the highest ROI in the Charlotte market.',
  },
  {
    question: 'Can I live in my home during construction?',
    answer: 'In most cases, yes. We plan our work to minimize disruption to your daily life. For major projects like second story additions, there may be brief periods requiring temporary arrangements, which we discuss upfront during planning.',
  },
];

export default function ResidentialAdditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Residential Additions',
            'Home addition contractor in Charlotte, NC. Room additions, second stories, garage conversions.',
            'https://webuildclt.com/services/residential-additions'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Home Additions Charlotte NC"
        subtitle="Expand your living space with expert residential additions"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services/general-contractor' }, { label: 'Residential Additions' }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Residential Addition Contractor in Charlotte, NC</h2>
            <p className="text-muted-foreground leading-relaxed">
              Need more space but love your Charlotte neighborhood? A home addition lets you expand your living area without the hassle and expense of moving. We Build designs and constructs residential additions that seamlessly integrate with your existing home — matching architectural style, materials, and finishes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From extra bedrooms and second stories to garage conversions and in-law suites, our team handles every aspect of your addition project including design, permitting, structural engineering, and construction. With over 60 years of combined experience, we deliver additions that feel like they were always part of your home.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Addition Types</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Home Additions We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionTypes.map((t) => (
              <Card key={t.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <t.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Home Addition FAQ</h2>
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Home?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation on your home addition project in Charlotte, NC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Get Your Free Estimate</Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
