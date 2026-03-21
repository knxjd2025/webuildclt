import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Palette,
  Ruler,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Users,
  Sparkles,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Home Builder Charlotte NC',
  description:
    'Custom home builder in Charlotte, NC. Design and build your dream home with our experienced team. Luxury homes, build on your lot, energy-efficient construction. Free consultation.',
  keywords: [
    'custom home builder charlotte nc',
    'home builder charlotte nc',
    'new home builder charlotte nc',
    'luxury home builder charlotte nc',
    'build on your lot charlotte nc',
  ],
};

const process_steps = [
  {
    icon: Palette,
    step: '01',
    title: 'Design Consultation',
    description:
      'Visit our Design Center to explore materials, discuss your vision, and collaborate with our design team on your dream home.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Planning & Permits',
    description:
      'We handle architectural plans, engineering, and all permit applications with Mecklenburg County and surrounding jurisdictions.',
  },
  {
    icon: Building,
    step: '03',
    title: 'Construction',
    description:
      'Our experienced team manages every phase of construction with regular progress updates and transparent communication.',
  },
  {
    icon: Home,
    step: '04',
    title: 'Final Walkthrough',
    description:
      'Thorough quality inspection and walkthrough before you receive the keys to your brand new custom home.',
  },
];

const features = [
  'Custom floor plans tailored to your lifestyle',
  'Energy-efficient building practices and materials',
  'High-end finishes and fixture selections',
  'Build on your lot or we help you find one',
  'Full design-build service under one roof',
  '3D renderings to visualize before building',
  'Transparent pricing with no hidden costs',
  'USGBC member — green building practices',
];

const faqs = [
  {
    question: 'How much does it cost to build a custom home in Charlotte NC?',
    answer:
      'Custom home construction in Charlotte typically ranges from $200-$500+ per square foot depending on finishes, complexity, and lot conditions. A 2,500 sq ft custom home may range from $500,000 to $1.25M+. We provide detailed cost breakdowns during the planning phase.',
  },
  {
    question: 'How long does it take to build a custom home?',
    answer:
      'Most custom homes take 8-14 months from groundbreaking to completion. The design and permitting phase adds 2-4 months before construction begins. Total timeline from first meeting to move-in is typically 12-18 months.',
  },
  {
    question: 'Can I build on my own lot in Charlotte?',
    answer:
      'Absolutely. We specialize in build-on-your-lot projects throughout the Charlotte metro area. We can also help evaluate potential lots for buildability, zoning compliance, and utility access before you purchase.',
  },
  {
    question: 'What is included in your design-build service?',
    answer:
      'Our design-build service includes architectural design, interior design consultation at our Design Center, engineering, permitting, construction, and project management — all under one contract with a single point of contact.',
  },
  {
    question: 'Do you build luxury homes in Charlotte?',
    answer:
      'Yes. We build homes across all price ranges, including luxury custom homes featuring premium materials, smart home technology, high-end finishes, and distinctive architectural details. Visit our Design Center to explore luxury material options.',
  },
];

export default function CustomHomeBuilderPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Custom Home Building',
            'Custom home builder in Charlotte, NC. Design and build your dream home with experienced professionals.',
            'https://webuildclt.com/services/custom-home-builder'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Custom Home Builder Charlotte NC"
        subtitle="Design and build the home of your dreams"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Custom Home Builder' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Build Your Dream Home in Charlotte, North Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At We Build, we believe your home should be as unique as you are.
                As a trusted custom home builder in Charlotte, NC, we work closely
                with every client to design and build homes that reflect their
                lifestyle, preferences, and budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From selecting your lot to choosing finishes at our dedicated
                Design Center, our team guides you through every step of the
                custom home building process. With over 60 years of combined
                experience, we bring the expertise and craftsmanship needed to
                turn your vision into reality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are looking for a modern luxury home in South
                Charlotte, a lakefront property on Lake Norman, or a
                family-friendly home in Fort Mill, We Build has the experience
                and local knowledge to deliver exceptional results.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/design-center">Visit Design Center</Link>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">What We Offer</h3>
              <ul className="space-y-4">
                {features.map((item) => (
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

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              How We Build Your Custom Home
            </h2>
            <p className="text-muted-foreground">
              A proven four-step process that keeps your project on time, on
              budget, and exactly to your specifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process_steps.map((step) => (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Charlotte Families Choose We Build
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Choosing the right home builder is one of the most important
                decisions you will make. Here is what sets We Build apart from
                other custom home builders in Charlotte.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: 'Veteran & Family Values',
                    desc: 'We bring military discipline, integrity, and accountability to every home we build.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Design Center Experience',
                    desc: 'Browse materials, get inspired, and make selections in our dedicated showroom.',
                  },
                  {
                    icon: Shield,
                    title: 'Quality Guarantee',
                    desc: 'We stand behind our work with comprehensive warranties and post-build support.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Areas We Serve</h3>
              <p className="text-muted-foreground mb-6">
                We build custom homes throughout the Charlotte metro area:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Charlotte',
                  'South Charlotte',
                  'Ballantyne',
                  'Lake Norman',
                  'Cornelius',
                  'Fort Mill, SC',
                  'Huntersville',
                  'Matthews',
                  'Mint Hill',
                  'Waxhaw',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Charlotte Cost Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">How Much Does a Custom Home Cost in Charlotte?</h2>
              <p className="text-muted-foreground">Custom home construction in the Charlotte metro typically falls into these ranges. Actual costs depend on lot conditions, architectural complexity, and finish selections.</p>
            </div>
            <div className="space-y-4">
              {[
                { level: 'Entry-Level Custom', range: '$200-$275/sq ft', desc: 'Quality construction with standard finishes, efficient floor plans, builder-grade fixtures' },
                { level: 'Mid-Range Custom', range: '$275-$400/sq ft', desc: 'Upgraded finishes, hardwood floors, quartz countertops, custom cabinetry, smart home basics' },
                { level: 'Luxury Custom', range: '$400-$600+/sq ft', desc: 'Premium materials throughout, smart home technology, custom millwork, designer fixtures' },
              ].map((item) => (
                <div key={item.level} className="p-6 bg-background rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{item.level}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-2">Example: 2,500 sq ft Custom Home</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Entry-level: $500,000 - $687,500</li>
                <li>Mid-range: $687,500 - $1,000,000</li>
                <li>Luxury: $1,000,000 - $1,500,000+</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">Does not include land cost, well/septic, swimming pool, or extensive landscaping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial — NEW */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Testimonial</span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-6 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, communicative, and delivered on time and within budget.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">Fort Mill, SC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Custom Home Building Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How Much Does a Custom Home Cost in Charlotte?', slug: 'cost-to-build-custom-home-charlotte-nc' },
              { title: 'Build on Your Lot: Step-by-Step Guide', slug: 'build-on-your-lot-charlotte-guide' },
              { title: 'Builder Checklist: 10 Questions to Ask', slug: 'custom-home-builder-checklist-questions' },
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
              Custom Home Building FAQ
            </h2>
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with Charlotte&apos;s trusted custom home
            builder. Visit our Design Center or call us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
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
