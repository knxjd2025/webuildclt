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
  title: 'Contractor South Charlotte NC | Ballantyne Construction',
  description:
    'General contractor serving South Charlotte, Ballantyne, Pineville & Waxhaw NC. Commercial construction, custom homes, upfits. Locally headquartered. Free estimates.',
  keywords: ['contractor south charlotte', 'general contractor ballantyne nc', 'construction company south charlotte', 'home builder ballantyne nc'],
};

const neighborhoods = ['Ballantyne', 'Pineville', 'Waxhaw', 'Marvin', 'Weddington', 'Indian Trail', 'Stallings', 'Matthews'];

const faqs = [
  {
    question: 'Where is your office located?',
    answer: 'Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273 — right in the heart of South Charlotte. We are minutes from Ballantyne, Pineville, and the I-485/I-77 corridor.',
  },
  {
    question: 'What South Charlotte neighborhoods do you serve?',
    answer: 'We serve all of South Charlotte including Ballantyne, Pineville, Waxhaw, Marvin, Weddington, Indian Trail, Stallings, Matthews, and surrounding communities in Mecklenburg and Union counties.',
  },
  {
    question: 'Do you do both commercial and residential work in South Charlotte?',
    answer: 'Yes. We provide full-service general contracting for both commercial and residential projects. South Charlotte has a mix of growing commercial corridors and established residential neighborhoods — we serve both.',
  },
];

export default function SouthCharlottePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <PageHero title="Contractor South Charlotte NC" subtitle="Your local general contractor in South Charlotte & Ballantyne" backgroundImage="/images/hero-bg.jpg" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'South Charlotte' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">General Contractor in South Charlotte & Ballantyne</h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is headquartered in South Charlotte, making us your truly local general contractor for the Ballantyne, Pineville, Waxhaw, and surrounding areas. When you work with us, you are working with neighbors who know the community, understand local building codes, and are invested in the area&apos;s growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                South Charlotte is booming with new commercial development along the Ballantyne corridor, growing residential communities in Waxhaw and Marvin, and established neighborhoods that need quality renovation and addition work. We Build serves all of these needs with the same commitment to craftsmanship and customer service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From commercial upfits in Ballantyne Corporate Park to custom homes in Weddington and everything in between, our team delivers results that exceed expectations. As a veteran and family-owned company, we bring integrity and accountability to every South Charlotte project.
              </p>
              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Locally Headquartered</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild><Link href="/contact">Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button size="lg" variant="outline" asChild><a href="tel:7045748124"><Phone className="mr-2 h-5 w-5" />(704) 574-8124</a></Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">South Charlotte Neighborhoods</h3>
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  {[
                    { icon: Building2, label: 'Commercial Construction', href: '/services/commercial-construction' },
                    { icon: Paintbrush, label: 'Commercial Upfits', href: '/services/commercial-upfits' },
                    { icon: Home, label: 'Custom Home Building', href: '/services/custom-home-builder' },
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
            <h2 className="text-3xl font-bold mb-8 text-center">South Charlotte FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your South Charlotte Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact your locally headquartered general contractor for a free estimate.</p>
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
