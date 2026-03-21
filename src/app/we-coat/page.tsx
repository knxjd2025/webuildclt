import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Droplets,
  Sun,
  Shield,
  Leaf,
  DollarSign,
  Paintbrush,
  Zap,
  ArrowRight,
  Phone,
  Award,
  Clock,
  Layers,
  Building2,
  Wrench,
  ThermometerSun,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'We Coat - Roof Coating Charlotte NC | Commercial Roof Restoration',
  description:
    'We Coat provides professional commercial roof coating in Charlotte, NC. Silicone, acrylic, elastomeric & SPF coatings. Save up to 50% vs replacement. IIBEC certified. Free assessments.',
  keywords: [
    'roof coating charlotte nc',
    'commercial roof coating charlotte',
    'roof restoration charlotte nc',
    'roof coating contractor charlotte',
    'commercial roof restoration',
    'silicone roof coating charlotte',
    'we coat roof restoration',
  ],
};

const benefits = [
  { icon: Droplets, title: '100% Waterproof', description: 'Tested and verified for complete waterproofing protection. Creates a seamless, monolithic membrane that eliminates leak points at seams, fasteners, and penetrations.' },
  { icon: Sun, title: 'UV Resistant', description: 'Verified to withstand long-term UV exposure without degrading. Reflective coatings bounce solar heat away, reducing cooling costs by 15-25% in Charlotte\'s hot summers.' },
  { icon: Shield, title: 'Damage Resistant', description: 'High resistance to damage from debris, hailstorms, and foot traffic. Our coatings protect your roof investment against the severe weather Charlotte occasionally experiences.' },
  { icon: Zap, title: 'Flexible & Durable', description: 'Superior flexibility avoids cracking from thermal expansion and contraction. Elastomeric coatings stretch up to 300% without breaking — ideal for metal roofs.' },
  { icon: Leaf, title: 'Eco-Friendly', description: 'No odors, no off-gasses, and completely nontoxic. Zero tear-off waste sent to landfills. As USGBC members, we prioritize environmentally responsible solutions.' },
  { icon: DollarSign, title: 'Save Up to 50%', description: 'Coating costs $2-$5/sq ft compared to $5-$12/sq ft for full replacement. For a 10,000 sq ft commercial roof, that is $30,000-$70,000 in savings.' },
  { icon: Paintbrush, title: 'Paintable Surface', description: 'Certain coatings can be painted when the correct paint is applied, allowing you to customize your roof\'s appearance or match corporate branding colors.' },
  { icon: CheckCircle, title: 'Versatile Application', description: 'Works on gypcrete, metal, concrete, TPO, EPDM, modified bitumen, and more. Our team assesses your specific roof to recommend the best coating system.' },
];

const coatingTypes = [
  {
    title: 'Silicone Roof Coating',
    description: 'The premium choice for flat and low-slope commercial roofs. Silicone excels at waterproofing, handles ponding water without degradation, and provides the longest lifespan of any coating type (15-20 years). Its superior UV resistance makes it ideal for Charlotte\'s intense summers.',
    cost: '$3-$5/sq ft',
    lifespan: '15-20 years',
    bestFor: 'Flat roofs, roofs with ponding water, maximum longevity',
  },
  {
    title: 'Acrylic Roof Coating',
    description: 'The most affordable coating option with excellent reflective properties. Acrylic works best on sloped metal roofs where water sheds quickly. It provides good UV protection and significant energy savings through solar reflectance.',
    cost: '$1.50-$3/sq ft',
    lifespan: '10-15 years',
    bestFor: 'Sloped metal roofs, budget-conscious projects, good drainage',
  },
  {
    title: 'Elastomeric Roof Coating',
    description: 'Known for exceptional flexibility — stretches up to 300% without cracking. Elastomeric coatings expand and contract with temperature changes, making them ideal for metal roofs that experience significant thermal cycling between Charlotte\'s hot summers and cool winters.',
    cost: '$2.50-$4.50/sq ft',
    lifespan: '10-15 years',
    bestFor: 'Metal roofs, thermal cycling, modified bitumen substrates',
  },
  {
    title: 'SPF (Spray Polyurethane Foam)',
    description: 'The only roof system that provides both insulation and waterproofing in a single application. SPF delivers the highest R-value per inch of any commercial roofing material, making it the best choice for energy savings. It creates a seamless, lightweight surface that conforms to any roof shape.',
    cost: '$4-$7/sq ft',
    lifespan: '20-30 years',
    bestFor: 'Energy efficiency priority, poorly insulated buildings, irregular roof shapes',
  },
];

const processSteps = [
  { step: '01', title: 'Free Roof Assessment', description: 'Our IIBEC-certified team conducts a thorough inspection of your existing roof — evaluating structural integrity, current condition, drainage, insulation, and any damage. We document everything with photos and measurements.' },
  { step: '02', title: 'Detailed Proposal', description: 'Based on our assessment, we recommend the best coating system for your roof and provide a detailed, transparent proposal with specific products, application methods, warranty terms, and pricing.' },
  { step: '03', title: 'Surface Preparation', description: 'Proper preparation is critical for coating adhesion and longevity. We clean the roof surface, repair any damage, seal penetrations, and apply primer. This step is what separates professional coating from a DIY paint job.' },
  { step: '04', title: 'Coating Application', description: 'Our trained crews apply the coating system using professional spray equipment or roller application, depending on the product. Multiple coats are applied to achieve the specified dry film thickness for maximum performance.' },
  { step: '05', title: 'Final Inspection', description: 'After application, we conduct a thorough quality inspection checking coverage, thickness, edge details, and penetration seals. You receive documentation of the completed work and warranty information.' },
];

const roofTypes = [
  { src: '/images/we-coat/mics-aerial-1.jpg', alt: 'Mountain Island Charter School roof coating aerial view', label: 'School Roof' },
  { src: '/images/we-coat/applying-primer.jpg', alt: 'Applying primer for commercial roof coating Charlotte NC', label: 'Primer Application' },
  { src: '/images/we-coat/power-washing.jpg', alt: 'Power washing roof surface preparation', label: 'Surface Prep' },
  { src: '/images/we-coat/mics-aerial-2.jpg', alt: 'Completed commercial roof coating aerial view', label: 'Completed Coating' },
];

const weCoatFaqs = [
  {
    question: 'How much does commercial roof coating cost in Charlotte?',
    answer: 'Commercial roof coating in Charlotte typically costs $2-$5 per square foot, depending on coating type, roof condition, and accessibility. Silicone coatings run $3-$5/sq ft, acrylic $1.50-$3/sq ft, elastomeric $2.50-$4.50/sq ft, and SPF $4-$7/sq ft. For a 10,000 sq ft commercial roof, expect $20,000-$50,000 — compared to $50,000-$120,000+ for full replacement.',
  },
  {
    question: 'How long does roof coating last?',
    answer: 'Roof coating lifespan depends on the type: silicone coatings last 15-20 years, acrylic and elastomeric 10-15 years, and SPF systems 20-30 years with periodic topcoat maintenance. Proper surface preparation and professional application are critical to achieving maximum lifespan. Most coatings can be recoated at end of life for continued protection.',
  },
  {
    question: 'Is roof coating better than roof replacement?',
    answer: 'Roof coating is an excellent alternative when your existing roof structure is sound. It costs 50-70% less than replacement, generates zero tear-off waste, adds 10-15+ years of life, and can be applied with minimal business disruption. However, roofs with widespread structural damage, saturated insulation, or multiple existing coating layers may require full replacement.',
  },
  {
    question: 'What types of roofs can be coated?',
    answer: 'We coat virtually all commercial roof types: metal roofs (standing seam, corrugated, R-panel), flat roofs (built-up, modified bitumen), single-ply membranes (TPO, EPDM, PVC), concrete roofs, and more. Our IIBEC-certified team assesses your specific roof to recommend the best coating system for your substrate and conditions.',
  },
  {
    question: 'Can my business stay open during roof coating?',
    answer: 'Yes. Roof coating is applied externally with no interior work required. Our coatings are non-toxic and odor-free (particularly silicone and acrylic), so your business operates normally throughout the application process. Most projects complete in 2-5 days depending on roof size.',
  },
  {
    question: 'Does roof coating reduce energy costs?',
    answer: 'Yes, significantly. Reflective roof coatings (especially white silicone and acrylic) reduce cooling costs by 15-25% by bouncing solar heat away from the building. SPF coatings provide even greater savings through added insulation (R-6 per inch). In Charlotte\'s hot summers, these savings are substantial.',
  },
  {
    question: 'What is the difference between roof coating and roof paint?',
    answer: 'Roof coating and roof paint are fundamentally different products. Professional roof coatings are engineered systems applied at 20-25+ mils thickness that provide waterproofing, UV protection, and structural reinforcement. Roof paint is a thin aesthetic coating (2-3 mils) that provides no waterproofing or structural benefit. Only professional coatings extend roof life.',
  },
  {
    question: 'Do you offer warranties on roof coating?',
    answer: 'Yes. We provide manufacturer-backed warranties on all our coating systems, typically ranging from 10-20 years depending on the product and application. Our workmanship warranty covers the quality of our application. Specific warranty terms are detailed in every proposal.',
  },
];

export default function WeCoatPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Roof Coating & Restoration',
            'Professional commercial roof coating in Charlotte, NC. Silicone, acrylic, elastomeric, and SPF coatings. Save up to 50% vs roof replacement.',
            'https://webuildclt.com/we-coat'
          ),
          faqSchema(weCoatFaqs),
        ]}
      />

      <PageHero
        title="We Coat — Roof Coating Charlotte NC"
        subtitle="Commercial roof restoration that saves up to 50% vs replacement"
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Introduction — Expanded */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'We Coat — Roof Restoration' }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Commercial Roof Restoration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Durable and Long-Lasting Roof Coating in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Finding a quality alternative to replacing your commercial roof
                can be a dilemma. Full roof replacement is expensive, disruptive,
                and generates tons of waste. Thankfully, We Coat — the dedicated
                roof restoration division of We Build — offers an eco-friendly,
                cost-effective alternative that extends your roof&apos;s life by
                10-15+ years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our IIBEC-certified team applies high-performance roof coatings
                to commercial buildings throughout Charlotte, NC and the
                surrounding region. Whether you have a flat roof, metal roof, or
                single-ply membrane, we have the expertise and premium materials
                to protect your investment and reduce your operating costs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Roof coating is not just a maintenance solution — it is a smart
                investment. Our clients save 50-70% compared to full replacement
                while gaining improved waterproofing, energy efficiency, and UV
                protection. As USGBC members, we also take pride in the
                environmental benefit: zero tear-off waste sent to landfills.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Save Up to 50% vs. Roof Replacement
                </h3>
                <p className="text-muted-foreground">
                  A roof coating costs $2-$5/sq ft compared to $5-$12+/sq ft
                  for full replacement. For a 10,000 sq ft commercial roof,
                  that is $30,000-$70,000+ in savings — plus reduced energy
                  costs from reflective coatings.
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
                  <a
                    href="http://www.wecoatus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WeCoatUS.com
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {roofTypes.map((image) => (
                  <div key={image.src} className="relative aspect-square rounded-lg overflow-hidden image-hover">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2">
                      <span className="text-white text-sm font-medium">{image.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <Image
                    src="/images/certifications/iibec.png"
                    alt="IIBEC Certified"
                    width={60}
                    height={60}
                    className="h-14 w-auto"
                  />
                  <div>
                    <h3 className="font-semibold">IIBEC Certified</h3>
                    <p className="text-sm text-muted-foreground">
                      International Institute of Building Enclosure Consultants —
                      the highest standard in roof restoration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — Expanded */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Roof Coating
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Benefits of Commercial Roof Coating
            </h2>
            <p className="text-muted-foreground">
              When it comes time to address an aging roof, most building owners
              are not prepared mentally or financially for a full replacement.
              Roof coating provides an affordable, time-efficient alternative
              that delivers exceptional protection and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coating Types — NEW Detailed Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Coating Systems
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Roof Coating Types We Apply
            </h2>
            <p className="text-muted-foreground">
              We offer four professional-grade coating systems, each designed
              for specific roof types and performance requirements. Our team
              recommends the best option for your building based on roof type,
              condition, budget, and performance goals.
            </p>
          </div>

          <div className="space-y-6">
            {coatingTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-[1fr_200px] gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {type.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Best for:</strong> {type.bestFor}
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4 space-y-3">
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Cost</div>
                        <div className="font-semibold text-primary">{type.cost}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground uppercase">Lifespan</div>
                        <div className="font-semibold">{type.lifespan}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Roof Coating Process
            </h2>
            <p className="text-muted-foreground">
              A professional roof coating is only as good as the process behind
              it. Our five-step approach ensures every application delivers
              maximum performance and longevity.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Roof Coating — Expanded */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/we-coat/mics-aerial-1.jpg"
                >
                  <source src="/videos/we-coat-charlotte.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">Watch: We Coat commercial roof coating in Charlotte, NC</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Roof Coating Is a Smart Choice for Charlotte Buildings
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s climate presents unique challenges for
                commercial roofs. Hot, humid summers with intense UV exposure
                degrade roofing membranes, while occasional severe storms test
                waterproofing integrity. A professional roof coating addresses
                both challenges while delivering substantial cost savings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When it comes time to replace a roof, most building owners are
                not prepared mentally or financially for the process. Some roof
                replacement jobs cost $50,000-$120,000+ and take weeks to
                complete, disrupting business operations and sending tons of
                material to landfills.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a roof coating, the standard replacement process is avoided
                and replaced with a much more affordable and time-efficient
                procedure. Most commercial roof coating applications complete in
                2-5 days with zero interior disruption. The result is a
                seamless, waterproof, UV-resistant surface that extends your
                roof&apos;s life by 10-15+ years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the biggest advantages of roof coating is versatility.
                Our coatings can be applied by spray or roller methods over a
                wide variety of surfaces including metal, concrete, TPO, EPDM,
                modified bitumen, and built-up roofs. This means virtually any
                commercial roof in Charlotte is a candidate for coating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison — NEW */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Roof Coating vs. Replacement: Cost Comparison
              </h2>
              <p className="text-muted-foreground">
                See how roof coating compares to full replacement for a typical
                10,000 sq ft commercial roof in Charlotte.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Roof Coating</h3>
                  <div className="text-4xl font-bold text-primary mb-4">$20K-$50K</div>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />2-5 day application</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Zero business disruption</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />10-20 year lifespan</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Zero landfill waste</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />15-25% cooling cost reduction</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />Can be recoated at end of life</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Full Replacement</h3>
                  <div className="text-4xl font-bold text-muted-foreground mb-4">$50K-$120K+</div>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />2-6 week installation</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />Significant business disruption</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />20-30 year lifespan</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />5-10 tons landfill waste</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />Minimal energy improvement</li>
                    <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />Full tear-off required at end of life</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* IIBEC Certification */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image
              src="/images/certifications/iibec.png"
              alt="IIBEC - International Institute of Building Enclosure Consultants"
              width={150}
              height={150}
              className="h-24 w-auto"
            />
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-2">
                IIBEC Certified Professionals
              </h3>
              <p className="text-muted-foreground">
                Our roof coating team holds certification from the International
                Institute of Building Enclosure Consultants (IIBEC), ensuring
                the highest professional standards in roof restoration. IIBEC
                certification requires demonstrated expertise in building
                enclosure systems, ongoing professional development, and
                adherence to strict ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USGBC Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image
              src="/images/certifications/usgbc-member-light.png"
              alt="USGBC Member"
              width={100}
              height={100}
              className="h-20 w-auto"
            />
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Roof Restoration
              </h3>
              <p className="text-muted-foreground">
                As a U.S. Green Building Council member, We Build prioritizes
                sustainable solutions. Commercial roof coating is one of the
                most impactful environmental choices a building owner can make —
                eliminating 5-10 tons of tear-off waste per project, reducing
                energy consumption through reflective coatings, and lowering the
                building&apos;s overall carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Coating Videos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              See the Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Roof Coating in Action
            </h2>
            <p className="text-muted-foreground">
              Watch our team apply professional roof coatings on real Charlotte-area projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/videos/mics-final-inspection.mp4', poster: '/images/we-coat/mics-aerial-3.jpg', title: 'Final Inspection — 20-Year NDL Warranty' },
              { src: '/videos/mics-coating-layers.mp4', poster: '/images/we-coat/mics-detail-1.jpg', title: 'Layers of Coating Around AC Units' },
              { src: '/videos/mics-reroof-vs-coat.mp4', poster: '/images/we-coat/fabric-embedded.jpg', title: 'Reroof vs. Coat — Keeping Operations Open' },
            ].map((video) => (
              <div key={video.src} className="space-y-3">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Coating Project Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Project Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Mountain Island Charter School — Roof Coating
            </h2>
            <p className="text-muted-foreground">
              A completed commercial roof coating project for Mountain Island Charter School in Charlotte, NC.
              This project included surface preparation, primer application, fabric reinforcement, and multi-layer
              silicone coating with a 20-year NDL warranty.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: '/images/we-coat/mics-aerial-1.jpg', alt: 'Aerial view of completed roof coating' },
              { src: '/images/we-coat/mics-aerial-2.jpg', alt: 'Roof coating aerial perspective' },
              { src: '/images/we-coat/mics-aerial-3.jpg', alt: 'Charter school roof coating complete' },
              { src: '/images/we-coat/mics-aerial-4.jpg', alt: 'Finished commercial roof coating' },
              { src: '/images/we-coat/applying-primer.jpg', alt: 'Crew applying primer to roof surface' },
              { src: '/images/we-coat/fabric-embedded.jpg', alt: 'Fabric reinforcement being embedded' },
              { src: '/images/we-coat/power-washing.jpg', alt: 'Power washing roof surface preparation' },
              { src: '/images/we-coat/mics-detail-1.jpg', alt: 'Roof coating detail work' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden image-hover">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Roof Coating Resources</h2>
            <p className="text-muted-foreground">
              Learn more about commercial roof coating from our expert guides.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Roof Coating: The Complete Guide', slug: 'commercial-roof-coating-complete-guide' },
              { title: 'Roof Coating vs. Replacement: Cost Comparison', slug: 'roof-coating-vs-roof-replacement' },
              { title: 'Silicone Roof Coating: Pros, Cons, and Applications', slug: 'silicone-roof-coating-pros-cons' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Roof Coating FAQ
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions Charlotte building owners
                ask about commercial roof coating.
              </p>
            </div>
            <div className="space-y-6">
              {weCoatFaqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
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
            Ready to Restore Your Commercial Roof?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free roof assessment with our IIBEC-certified team.
            We&apos;ll evaluate your roof, recommend the best coating system,
            and provide a detailed, transparent proposal — no obligation.
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
