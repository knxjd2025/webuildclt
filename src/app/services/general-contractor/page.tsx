import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Home,
  Hammer,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Users,
  ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Contractor Charlotte NC',
  description:
    'Licensed general contractor in Charlotte, NC. Commercial construction, residential builds, upfits & renovations. Veteran-owned, 60+ years combined experience. Free quotes.',
  keywords: [
    'general contractor charlotte nc',
    'general contractor in charlotte nc',
    'licensed general contractor charlotte',
    'commercial general contractor charlotte nc',
    'residential general contractor charlotte nc',
  ],
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Ground-up commercial builds, office buildings, retail spaces, and industrial facilities throughout Charlotte.',
    href: '/services/commercial-construction',
  },
  {
    icon: Hammer,
    title: 'Commercial Upfits',
    description:
      'Transform your business space with expert upfit services. Offices, restaurants, medical facilities, and retail.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    description:
      'Build the home of your dreams with our experienced residential construction team.',
    href: '/services/custom-home-builder',
  },
  {
    icon: ClipboardCheck,
    title: 'Residential Additions',
    description:
      'Expand your living space with room additions, second stories, and garage conversions.',
    href: '/services/residential-additions',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    description:
      'Eco-friendly commercial roof coating that saves up to 50% vs. full replacement.',
    href: '/services/roof-coating',
  },
  {
    icon: Award,
    title: 'Design-Build Services',
    description:
      'Complete design and build under one roof. Visit our Design Center to get started.',
    href: '/services/design-build',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed in NC & SC',
    description:
      'Fully licensed and insured general contractor serving North Carolina and South Carolina.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'Founded by veterans who bring discipline, integrity, and accountability to every project.',
  },
  {
    icon: CheckCircle,
    title: '60+ Years Combined Experience',
    description:
      'Our seasoned team brings decades of construction expertise across commercial and residential projects.',
  },
  {
    icon: Shield,
    title: 'USGBC Member',
    description:
      'Proud member of the U.S. Green Building Council, committed to sustainable building practices.',
  },
];

const costGuide = [
  { type: 'Commercial Upfit', range: '$50-$175/sq ft', timeline: '3-5 months' },
  { type: 'Restaurant Build-Out', range: '$150-$350/sq ft', timeline: '5-8 months' },
  { type: 'Medical Office', range: '$150-$400/sq ft', timeline: '4-8 months' },
  { type: 'Custom Home', range: '$200-$600+/sq ft', timeline: '10-18 months' },
  { type: 'Home Addition', range: '$150-$400/sq ft', timeline: '3-6 months' },
  { type: 'Roof Coating', range: '$2-$5/sq ft', timeline: '2-5 days' },
];

const processSteps = [
  { step: '01', title: 'Free Consultation', description: 'We discuss your project, assess your needs, review your budget, and provide initial guidance — completely free. This conversation helps us understand your vision and determine the best approach.' },
  { step: '02', title: 'Detailed Estimate & Contract', description: 'We provide a comprehensive, line-item estimate covering every aspect of your project. Our transparent pricing means no hidden costs or surprise change orders. Once approved, we execute a clear contract.' },
  { step: '03', title: 'Design & Permitting', description: 'Our design-build team creates or refines plans, helps with material selections at our Design Center, coordinates engineering, and manages all permit applications with local building departments.' },
  { step: '04', title: 'Construction Management', description: 'Our experienced superintendents manage daily construction operations — coordinating subcontractors, maintaining quality standards, and keeping the project on schedule. You receive weekly progress updates.' },
  { step: '05', title: 'Quality Inspections', description: 'We conduct phase inspections throughout construction, not just at the end. Every stage is verified before proceeding to the next, ensuring quality is built in from the foundation up.' },
  { step: '06', title: 'Delivery & Warranty', description: 'A thorough walkthrough ensures everything meets your expectations. We address any punch list items promptly and provide comprehensive warranty coverage on all our work.' },
];

const faqs = [
  {
    question: 'What does a general contractor do?',
    answer: 'A general contractor manages all aspects of a construction project, from planning and permitting to coordinating subcontractors, managing timelines, and ensuring quality. We serve as the single point of contact for your entire project — handling scheduling, procurement, inspections, budget management, and communication so you do not have to manage multiple trades yourself.',
  },
  {
    question: 'Do I need a licensed general contractor in Charlotte NC?',
    answer: 'Yes. North Carolina requires general contractors to be licensed by the NC Licensing Board for General Contractors (nclbgc.org) for any project over $30,000. South Carolina has an even lower threshold of $5,000. We Build holds active licenses in both states. Hiring an unlicensed contractor exposes you to legal liability, insurance issues, and potential code violations.',
  },
  {
    question: 'How much does a general contractor charge in Charlotte?',
    answer: 'General contractor fees in Charlotte typically range from 10-20% of total project cost for cost-plus contracts, or are built into the fixed price for lump-sum contracts. Project costs vary widely: commercial upfits run $50-$175/sq ft, custom homes $200-$600+/sq ft, and home additions $150-$400/sq ft. We provide detailed, transparent estimates specific to your project scope.',
  },
  {
    question: 'How long does a typical construction project take?',
    answer: 'Timelines vary by project type: commercial upfits typically take 3-5 months, restaurant build-outs 5-8 months, custom homes 10-18 months, home additions 3-6 months, and commercial roof coating 2-5 days. We provide detailed project schedules during the planning phase and communicate proactively if timelines shift.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Charlotte metropolitan area including Charlotte, South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, and Fort Mill, SC. Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273.',
  },
  {
    question: 'What is the difference between a general contractor and a subcontractor?',
    answer: 'A general contractor manages the entire project and is your single point of contact. Subcontractors are specialists hired by the general contractor to perform specific trades — electrical, plumbing, HVAC, framing, drywall, etc. We Build manages all subcontractor relationships, scheduling, and quality control so you deal with one company, not a dozen.',
  },
  {
    question: 'Do you handle building permits?',
    answer: 'Yes. We manage the entire permitting process — from preparing compliant plan submissions to coordinating with reviewers, responding to comments, and scheduling all required inspections. This is one of the most valuable services a general contractor provides, as the permitting process can be complex and time-consuming.',
  },
  {
    question: 'What should I look for when hiring a general contractor?',
    answer: 'Key qualifications to verify: active state general contractor license (check at nclbgc.org for NC), current general liability and workers\' compensation insurance, relevant project experience, strong local references, detailed and transparent estimates, clear communication practices, and a physical office or showroom. We Build meets all of these criteria and welcomes your due diligence.',
  },
];

export default function GeneralContractorPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'General Contractor Services',
            'Licensed general contractor in Charlotte, NC providing commercial construction, residential builds, upfits, and roof coating services.',
            'https://webuildclt.com/services/general-contractor'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="General Contractor Charlotte NC"
        subtitle="Licensed, veteran-owned general contractor with 60+ years combined experience"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'General Contractor' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Trusted General Contractor in Charlotte, North Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned general contracting company
                based in Charlotte, NC. With more than 60 years of combined
                experience, our team delivers high-quality construction and
                remodeling services for both commercial and residential clients
                across the Charlotte metro area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed general contractor in both North Carolina and South
                Carolina, we manage every aspect of your project — from initial
                planning and permitting through construction and final
                walkthrough. Our commitment is simple: what you want, how you
                want it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a commercial upfit for your Charlotte business,
                a custom home build, or eco-friendly roof restoration, We Build
                brings the same level of professionalism, precision, and
                accountability to every job.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:7045748124">
                    <Phone className="mr-2 h-5 w-5" />
                    (704) 574-8124
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                {[
                  'Licensed general contractor in NC & SC',
                  'Veteran & family-owned since 2019',
                  'USGBC member — committed to green building',
                  'Commercial & residential construction',
                  '60+ years combined team experience',
                  'Free consultations and detailed estimates',
                  'Full design-build capabilities',
                  'Serving Charlotte metro & surrounding areas',
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

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              General Contracting Services in Charlotte
            </h2>
            <p className="text-muted-foreground">
              From commercial builds to custom homes, we offer comprehensive
              construction services tailored to your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose We Build as Your General Contractor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our General Contracting Process</h2>
            <p className="text-muted-foreground">From your first call to the final walkthrough, our proven six-step process ensures your project is delivered on time, on budget, and exactly to your specifications.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{step.step}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Charlotte Cost Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Construction Cost Ranges in Charlotte (2026)</h2>
              <p className="text-muted-foreground">These ranges reflect typical pricing in the Charlotte metro area. Actual costs depend on project scope, complexity, finish level, and site conditions. We provide free, detailed estimates for your specific project.</p>
            </div>
            <div className="space-y-4">
              {costGuide.map((item) => (
                <div key={item.type} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-semibold">{item.type}</h3>
                    <p className="text-sm text-muted-foreground">Typical timeline: {item.timeline}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{item.range}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">Prices are estimates for the Charlotte NC market. Contact us for a free project-specific estimate.</p>
          </div>
        </div>
      </section>

      {/* Testimonial — NEW */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Testimonial</span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-6 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, communicative, and delivered on time and within budget. We highly recommend We Build as your general contractor.&quot;
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

      {/* Areas Served — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Service Area</span>
              <h2 className="text-3xl md:text-4xl font-bold">General Contractor Serving the Charlotte Metro Area</h2>
              <p className="text-muted-foreground leading-relaxed">As a licensed general contractor in both North Carolina and South Carolina, We Build serves the entire Charlotte metropolitan area. Our South Charlotte headquarters puts us within easy reach of every community in the region, and our dual-state licensing means no project is complicated by state-line issues.</p>
              <p className="text-muted-foreground leading-relaxed">Whether your project is a commercial upfit in Ballantyne, a custom home on Lake Norman, a restaurant build-out in South End, or a roof coating in Fort Mill, We Build has the local knowledge, licensed credentials, and experienced team to deliver exceptional results.</p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Charlotte', 'South Charlotte', 'Ballantyne', 'Fort Mill, SC', 'Lake Norman', 'Cornelius', 'Huntersville', 'Matthews', 'Waxhaw', 'Marvin', 'Mooresville', 'Indian Trail'].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">General Contracting Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How to Hire a General Contractor: The Complete Guide', slug: 'how-to-hire-general-contractor-guide' },
              { title: 'Questions to Ask a Contractor Before Signing', slug: 'questions-to-ask-contractor-before-signing' },
              { title: 'Construction Project Timeline: What to Expect', slug: 'construction-project-timeline-expectations' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
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
              General Contractor FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-background rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
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
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&apos;s trusted general contractor today for a free
            consultation and detailed estimate. Let&apos;s build something great
            together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:7045748124">(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
