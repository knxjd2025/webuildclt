import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Users, Clock, DollarSign, CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design Build Charlotte NC | Design-Build Contractor',
  description:
    'Design-build contractor in Charlotte, NC. One team for design and construction. Visit our Design Center. Faster timelines, single point of contact, transparent pricing.',
  keywords: [
    'design build charlotte nc',
    'design build contractor charlotte',
    'design build construction charlotte nc',
  ],
};

const advantages = [
  { icon: Users, title: 'Single Point of Contact', desc: 'One team manages design and construction. No finger-pointing between architect and builder.' },
  { icon: Clock, title: 'Faster Project Delivery', desc: 'Design and construction phases overlap, reducing total project time by 20-30%.' },
  { icon: DollarSign, title: 'Cost Certainty', desc: 'Budget is established early with the builder involved from day one. Fewer surprises.' },
  { icon: Palette, title: 'Dedicated Design Center', desc: 'Browse materials, get inspired, and make selections in our Charlotte showroom.' },
];

const faqs = [
  {
    question: 'What is design-build construction?',
    answer: 'Design-build is a project delivery method where one company handles both the design and construction of your project. Unlike the traditional approach where you hire a separate architect and contractor, design-build provides a single point of contact from concept to completion.',
  },
  {
    question: 'How does design-build save time and money?',
    answer: 'Design-build saves time because design and construction phases can overlap — construction on early phases begins while later phases are still being designed. It saves money because the builder is involved from the start, providing real-time cost feedback during design to prevent expensive redesigns.',
  },
  {
    question: 'Do you have a showroom I can visit?',
    answer: 'Yes! Our WeBuild Design Center in Charlotte features a curated selection of materials, finishes, and fixtures. You can explore options, get inspiration, and make selections with our design team. Visits are by appointment.',
  },
  {
    question: 'Is design-build right for my project?',
    answer: 'Design-build works well for most projects — custom homes, additions, commercial upfits, and renovations. It is especially beneficial when you want a streamlined process, clear accountability, and budget certainty from the start.',
  },
];

export default function DesignBuildPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Design-Build Services',
            'Design-build contractor in Charlotte, NC. Complete design and construction under one roof.',
            'https://webuildclt.com/services/design-build'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Design-Build Charlotte NC"
        subtitle="Complete design and construction under one roof"
        backgroundImage="/images/design-center-hero.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Services', href: '/services/general-contractor' }, { label: 'Design-Build' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Design-Build Construction in Charlotte, NC</h2>
              <p className="text-muted-foreground leading-relaxed">
                At We Build, design-build is more than a delivery method — it is how we do business. By integrating design and construction under one team, we eliminate the communication gaps, finger-pointing, and budget surprises that plague traditional construction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated Design Center in Charlotte gives you a hands-on experience where you can browse materials, explore finishes, and visualize your project before construction begins. Our design team works alongside our construction managers from day one, ensuring your vision translates perfectly into reality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are building a custom home, renovating a commercial space, or adding to your existing property, our design-build approach delivers faster results, greater cost certainty, and a smoother experience from start to finish.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/design-center"><Calendar className="mr-2 h-5 w-5" />Visit Design Center</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Design-Build Includes</h3>
              <ul className="space-y-4">
                {[
                  'Architectural design and planning',
                  'Interior design consultation',
                  'Material selection at our Design Center',
                  '3D renderings and visualization',
                  'Engineering and permitting',
                  'Full construction management',
                  'Quality control and inspections',
                  'Post-project warranty support',
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Design-Build Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <Card key={a.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Design-Build FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Design-Build Project</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Visit our Design Center or schedule a consultation to experience the design-build difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Schedule Consultation</Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
