import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, Paintbrush, Shield, CheckCircle, ArrowRight, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Builder Lake Norman NC | Construction Contractor',
  description:
    'Custom home builder & general contractor serving Lake Norman, Cornelius, Davidson & Mooresville NC. Lakefront homes, commercial construction. Free consultation.',
  keywords: ['home builder lake norman', 'custom home builder lake norman nc', 'general contractor lake norman', 'construction company cornelius nc'],
};

const communities = ['Cornelius', 'Davidson', 'Mooresville', 'Huntersville', 'Denver', 'Sherrills Ford', 'Troutman', 'Terrell'];

const faqs = [
  {
    question: 'Do you build lakefront homes on Lake Norman?',
    answer: 'Yes. We have experience building custom homes in lakefront communities around Lake Norman. We understand the unique requirements including dock permits, erosion control, flood zone considerations, and HOA architectural standards.',
  },
  {
    question: 'What areas around Lake Norman do you serve?',
    answer: 'We serve all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford, and surrounding areas in Mecklenburg, Iredell, Catawba, and Lincoln counties.',
  },
  {
    question: 'How far is Lake Norman from your office?',
    answer: 'Lake Norman communities are approximately 25-40 minutes north of our Charlotte headquarters. We regularly serve clients throughout the Lake Norman region.',
  },
];

export default function LakeNormanPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <PageHero title="Home Builder Lake Norman NC" subtitle="Custom homes and construction for Lake Norman communities" backgroundImage="/images/hero-bg.jpg" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/lake-norman' }, { label: 'Lake Norman' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Custom Home Builder & Contractor for Lake Norman</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lake Norman is one of the most desirable places to live in the Charlotte metro, and We Build is proud to serve homeowners and businesses throughout the Lake Norman region. From custom lakefront homes in Cornelius and Davidson to commercial projects in Mooresville, our team delivers exceptional construction quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Building near Lake Norman comes with unique considerations — flood zone regulations, dock permits, erosion control, and strict HOA standards in many communities. Our team has the local knowledge and experience to navigate these requirements while delivering the home or commercial space you envision.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are looking for a luxury lakefront home, a custom build in a Lake Norman golf community, or a commercial upfit for your Mooresville business, We Build has the expertise to make it happen.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild><Link href="/contact">Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button size="lg" variant="outline" asChild><a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a></Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Lake Norman Communities We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {communities.map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Services Available</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Home, label: 'Custom Home Building', href: '/services/custom-home-builder' },
                    { icon: Building2, label: 'Commercial Construction', href: '/services/commercial-construction' },
                    { icon: Paintbrush, label: 'Commercial Upfits', href: '/services/commercial-upfits' },
                    { icon: Shield, label: 'Roof Coating', href: '/services/roof-coating' },
                  ].map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                        <s.icon className="h-4 w-4" />
                        <span>{s.label}</span>
                        <ArrowRight className="h-3 w-3 ml-auto" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Lake Norman Construction FAQ</h2>
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Lake Norman Dream Home</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact us for a free consultation on your Lake Norman construction project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild><Link href="/contact">Get Started</Link></Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
