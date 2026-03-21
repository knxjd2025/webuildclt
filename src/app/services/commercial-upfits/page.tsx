import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Paintbrush,
  Building2,
  Store,
  Stethoscope,
  UtensilsCrossed,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Upfits Charlotte NC',
  description:
    'Commercial upfit contractor in Charlotte, NC. Office upfits, restaurant build-outs, retail renovations & medical facility upgrades. Minimize business disruption. Free estimates.',
  keywords: [
    'commercial upfit charlotte nc',
    'office upfit charlotte nc',
    'tenant upfit charlotte',
    'commercial renovation charlotte nc',
    'restaurant build out charlotte nc',
  ],
};

const upfitTypes = [
  { icon: Building2, title: 'Office Upfits', desc: 'Modern workspace transformations including open plans, private offices, and conference rooms.' },
  { icon: Store, title: 'Retail Upfits', desc: 'Storefront renovations and retail space buildouts designed to enhance customer experience.' },
  { icon: UtensilsCrossed, title: 'Restaurant Build-Outs', desc: 'Complete restaurant upfits including kitchen, dining, bar, and compliance upgrades.' },
  { icon: Stethoscope, title: 'Medical Office Upfits', desc: 'Healthcare facility renovations meeting all compliance, safety, and accessibility standards.' },
  { icon: Paintbrush, title: 'Tenant Improvements', desc: 'Custom tenant build-outs for commercial leases, coordinated with landlord requirements.' },
  { icon: Building2, title: 'Lobby & Common Area', desc: 'Building entrance, lobby, and common area renovations that make a strong first impression.' },
];

const benefits = [
  { icon: DollarSign, title: 'Cost-Effective', desc: 'Upfits cost a fraction of new construction while completely transforming your space.' },
  { icon: Clock, title: 'Faster Timeline', desc: 'Most commercial upfits complete in 8-16 weeks, minimizing time away from your space.' },
  { icon: Zap, title: 'Minimal Disruption', desc: 'We plan and phase work to keep your business running during construction when possible.' },
];

const faqs = [
  {
    question: 'What is a commercial upfit?',
    answer: 'A commercial upfit (also called a build-out or tenant improvement) is the renovation or customization of an existing commercial space to meet a new tenant\'s or owner\'s specific needs. This can include new walls, flooring, electrical, plumbing, HVAC modifications, and finishes.',
  },
  {
    question: 'How much does a commercial upfit cost in Charlotte?',
    answer: 'Commercial upfit costs in Charlotte typically range from $50-$150 per square foot for office spaces, $75-$200+ for restaurants, and $80-$250+ for medical facilities. Costs depend on the scope of work, existing conditions, and finish level. We provide detailed estimates after an initial site visit.',
  },
  {
    question: 'How long does a commercial upfit take?',
    answer: 'Most commercial upfits in Charlotte take 8-16 weeks from start to finish. Simple office renovations may take 6-8 weeks, while complex restaurant or medical facility upfits can take 12-20 weeks. We provide a detailed timeline during the planning phase.',
  },
  {
    question: 'Who pays for a tenant upfit — landlord or tenant?',
    answer: 'This varies by lease agreement. Many commercial leases include a tenant improvement (TI) allowance from the landlord, with the tenant covering costs above that amount. We work with both landlords and tenants to manage budgets effectively.',
  },
  {
    question: 'Can I stay open during the upfit?',
    answer: 'In many cases, yes. We specialize in phased construction that allows businesses to continue operating during the upfit. We work with you to schedule the most disruptive work during off-hours or weekends.',
  },
];

export default function CommercialUpfitsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Upfits',
            'Expert commercial upfit services in Charlotte, NC. Office, retail, restaurant, and medical facility renovations.',
            'https://webuildclt.com/services/commercial-upfits'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Commercial Upfits Charlotte NC"
        subtitle="Transform your commercial space with expert upfit services"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Commercial Upfits' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Upfit Services in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A commercial upfit can completely transform your business space
                without the cost and timeline of ground-up construction. Whether
                you are moving into a new lease, refreshing an outdated office,
                or converting a space for a new use, We Build delivers upfit
                solutions that bring new energy into your business.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team has completed upfits across Charlotte for offices,
                restaurants, retail stores, medical facilities, and more. We
                understand the unique challenges of renovating occupied or
                active commercial spaces, and we plan every project to minimize
                disruption to your operations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upfit Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Upfit Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Commercial Upfit Services We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upfitTypes.map((type) => (
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

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention
              to detail and commitment to quality exceeded our expectations.
              The team was professional, communicative, and delivered on time
              and within budget.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">
                  Commercial Upfit — Fort Mill, SC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Cost Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Commercial Upfit Costs in Charlotte (2026)</h2>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Basic Office Upfit', range: '$50-$80/sq ft', desc: 'Paint, carpet, basic lighting, minor layout changes' },
                { type: 'Mid-Range Office', range: '$80-$120/sq ft', desc: 'New walls, upgraded finishes, modern lighting, technology infrastructure' },
                { type: 'High-End Office', range: '$120-$175/sq ft', desc: 'Premium finishes, glass walls, custom millwork, executive-level details' },
                { type: 'Retail Space', range: '$75-$175/sq ft', desc: 'Custom fixtures, lighting design, storefront work, brand elements' },
                { type: 'Restaurant', range: '$150-$350/sq ft', desc: 'Commercial kitchen, ventilation, grease trap, dining finishes' },
                { type: 'Medical/Dental', range: '$150-$300/sq ft', desc: 'Specialized HVAC, plumbing, ADA compliance, infection control' },
              ].map((item) => (
                <div key={item.type} className="p-5 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold">{item.type}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Upfit Process</h2>
            <p className="text-muted-foreground">A streamlined process designed to minimize business disruption and deliver results on time.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: '01', title: 'Site Visit & Assessment', desc: 'We evaluate your current space, discuss your vision, review lease requirements and TI allowances, and identify any existing condition issues.' },
              { step: '02', title: 'Design & Estimate', desc: 'Our design-build team creates space plans, helps you select finishes at our Design Center, and delivers a detailed, line-item estimate.' },
              { step: '03', title: 'Permitting', desc: 'We manage all permit applications, coordinate with Mecklenburg County inspectors, and ensure code compliance.' },
              { step: '04', title: 'Phased Construction', desc: 'Construction is phased to minimize disruption to your business. Most disruptive work is scheduled during off-hours when possible.' },
              { step: '05', title: 'Delivery', desc: 'Final inspections, punch list completion, and project handover. You move into a transformed space on schedule.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold">Commercial Upfit Resources</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How Much Does a Commercial Upfit Cost?', slug: 'commercial-upfit-cost-charlotte' },
              { title: 'Office Upfit vs. Full Renovation', slug: 'office-upfit-vs-full-renovation' },
              { title: '7 Signs Your Space Needs an Upfit', slug: '7-signs-commercial-space-needs-upfit' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:underline">Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
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
              Commercial Upfit FAQ
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
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us for a free site visit and detailed estimate on your
            commercial upfit project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
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
