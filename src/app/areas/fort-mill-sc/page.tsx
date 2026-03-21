import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Home, Paintbrush, Shield, CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Fort Mill SC | General Contractor',
  description:
    'Licensed construction company serving Fort Mill, SC. Commercial construction, residential builds, upfits & roof coating. SC licensed general contractor. Free estimates.',
  keywords: ['construction company fort mill sc', 'general contractor fort mill sc', 'commercial construction fort mill sc', 'home builder fort mill sc'],
};

const services = [
  { icon: Building2, title: 'Commercial Construction', desc: 'Ground-up builds and major renovations for Fort Mill businesses.', href: '/services/commercial-construction' },
  { icon: Paintbrush, title: 'Commercial Upfits', desc: 'Transform your Fort Mill business space with expert upfit services.', href: '/services/commercial-upfits' },
  { icon: Home, title: 'Custom Home Building', desc: 'Build your dream home in Fort Mill and surrounding York County.', href: '/services/custom-home-builder' },
  { icon: Shield, title: 'Roof Coating', desc: 'Commercial roof restoration for Fort Mill building owners.', href: '/services/roof-coating' },
];

const faqs = [
  {
    question: 'Are you licensed to work in Fort Mill, SC?',
    answer: 'Yes. We Build holds active general contractor licenses in both North Carolina and South Carolina, allowing us to legally perform construction work in Fort Mill and throughout York County.',
  },
  {
    question: 'Have you completed projects in Fort Mill?',
    answer: 'Yes. One of our featured projects is the Pure Physique commercial upfit in Fort Mill, SC. We regularly serve clients across the Charlotte-Fort Mill metro area.',
  },
  {
    question: 'How far is Fort Mill from your Charlotte office?',
    answer: 'Fort Mill is approximately 20 minutes south of our Charlotte headquarters at 14330 S Lakes Drive. We serve the entire Charlotte-Fort Mill-Rock Hill corridor.',
  },
];

export default function FortMillPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <PageHero title="Construction Company Fort Mill SC" subtitle="Licensed SC general contractor serving Fort Mill and York County" backgroundImage="/images/hero-bg.jpg" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/fort-mill-sc' }, { label: 'Fort Mill, SC' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">General Contractor Serving Fort Mill, South Carolina</h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a licensed South Carolina general contractor proudly serving Fort Mill and the greater York County area. Located just minutes from the NC-SC state line, our Charlotte-based team brings over 60 years of combined construction experience to every Fort Mill project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fort Mill&apos;s rapid growth has created strong demand for quality commercial construction, office upfits, and custom homes. Whether you are a business owner looking to build out a new space on Gold Hill Road or a family building a home in one of Fort Mill&apos;s sought-after communities, We Build delivers the craftsmanship and professionalism you expect.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Serving Fort Mill from Charlotte</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — 20 min from Fort Mill</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild><Link href="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button size="lg" variant="outline" asChild><a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a></Button>
              </div>
            </div>
            <div className="space-y-4">
              {services.map((s) => (
                <Card key={s.title} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <Link href={s.href} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Fort Mill Project Spotlight</span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-4 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, communicative, and delivered on time and within budget.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">Commercial Upfit — Fort Mill, SC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Fort Mill Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build in Fort Mill?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact your local SC-licensed general contractor for a free estimate.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Get a Free Estimate</Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
