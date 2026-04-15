import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Home,
  Paintbrush,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Ruler,
  Hammer,
  HardHat,
  Clock,
  Star,
  FileText,
  Users,
  TrendingUp,
  Factory,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Rock Hill SC | General Contractor York County',
  description:
    'Need a construction company near me in Rock Hill SC? Licensed general contractor serving Rock Hill & York County. Commercial construction, upfits, office buildouts, roof coating, design-build & drone inspections. SC licensed. Veteran & family-owned. Free estimates.',
  keywords: [
    'construction company rock hill sc',
    'general contractor rock hill',
    'commercial contractor rock hill sc',
    'contractor near me rock hill',
    'construction companies near me',
    'rock hill commercial construction',
    'rock hill remodeling contractor',
    'licensed contractor SC',
    'commercial construction rock hill sc',
    'contractor york county sc',
    'rock hill renovation contractor',
    'commercial upfit rock hill sc',
    'custom home builder rock hill south carolina',
    'tega cay construction company',
    'construction company near me rock hill',
    'general contractor near me york county',
  ],
  openGraph: {
    title: 'Construction Company Rock Hill SC | General Contractor York County | We Build',
    description:
      'Licensed SC general contractor serving Rock Hill, Tega Cay & York County. Commercial construction, upfits, roof coating & design-build. Veteran & family-owned. Free estimates.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://webuildclt.com/areas/rock-hill-sc',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    desc: 'Ground-up commercial builds, office complexes, retail centers, and industrial facilities throughout Rock Hill and York County.',
    href: '/services/commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    desc: 'Transform existing commercial spaces in Rock Hill with expert tenant upfits, office renovations, and retail buildouts along Dave Lyle Blvd and Cherry Road.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Factory,
    title: 'Industrial Construction',
    desc: 'Warehouses, distribution centers, and manufacturing facilities in Rock Hill\u2019s growing industrial corridors near I-77 and Dave Lyle Boulevard.',
    href: '/services/industrial-construction',
  },
  {
    icon: Wrench,
    title: 'Tenant Improvements',
    desc: 'Office buildouts and tenant improvements for Rock Hill businesses in Knowledge Park, Galleria Mall area, and downtown commercial spaces.',
    href: '/services/tenant-improvements',
  },
  {
    icon: Shield,
    title: 'Roof Coating',
    desc: 'Commercial roof restoration and protective coating systems for Rock Hill building owners seeking to extend roof life by 10-20 years.',
    href: '/services/roof-coating',
  },
  {
    icon: Ruler,
    title: 'Design-Build',
    desc: 'Streamlined single-source design and construction for Rock Hill commercial projects from concept to completion, saving 10-15% over traditional methods.',
    href: '/services/design-build',
  },
];

const commercialAreas = [
  {
    name: 'Downtown Rock Hill / Old Town',
    desc: 'Historic downtown revitalization with mixed-use developments, restaurant buildouts, retail storefronts, and office renovations in Rock Hill\u2019s walkable urban core.',
  },
  {
    name: 'Knowledge Park',
    desc: 'Rock Hill\u2019s innovation and technology district near Winthrop University, featuring coworking spaces, tech offices, and creative industry buildouts.',
  },
  {
    name: 'Dave Lyle Boulevard Corridor',
    desc: 'Major commercial and industrial corridor connecting Rock Hill to I-77 with warehouse construction, flex space, distribution centers, and light manufacturing facilities.',
  },
  {
    name: 'Cherry Road',
    desc: 'Rock Hill\u2019s primary retail corridor with shopping centers, restaurants, medical offices, and service businesses requiring commercial upfits and renovations.',
  },
  {
    name: 'Galleria / Manchester Village',
    desc: 'Retail and mixed-use area near the Galleria with restaurant construction, retail buildouts, and commercial tenant improvements.',
  },
  {
    name: 'Celanese Road',
    desc: 'Growing commercial corridor with medical facilities, professional offices, and retail developments in west Rock Hill.',
  },
];

const neighborhoods = [
  'Rock Hill',
  'Tega Cay',
  'India Hook',
  'Riverwalk',
  'Ebenezer',
  'Lake Wylie (SC side)',
  'Newport',
];

const businessDistricts = [
  {
    name: 'Knowledge Park Tech Hub',
    desc: 'Technology incubators, creative offices, and coworking spaces near Winthrop University. Typical office buildouts range $60-120 per square foot.',
  },
  {
    name: 'Dave Lyle Industrial Corridor',
    desc: 'Warehouse and distribution facilities along Dave Lyle Blvd with excellent I-77 access. Industrial construction costs $80-180 per square foot.',
  },
  {
    name: 'Downtown Revitalization District',
    desc: 'Mixed-use redevelopment in Old Town Rock Hill with adaptive reuse, restaurant buildouts, and boutique retail. Renovation costs $100-250 per square foot.',
  },
  {
    name: 'Cherry Road Retail Strip',
    desc: 'Rock Hill\u2019s busiest retail corridor with national chains, restaurants, and local businesses. Retail upfits typically run $50-150 per square foot.',
  },
  {
    name: 'Riverwalk / Catawba River Area',
    desc: 'Emerging mixed-use development along the Catawba River with hospitality, recreation, and commercial opportunities.',
  },
  {
    name: 'I-77 / Carowinds Corridor',
    desc: 'High-traffic commercial zone between Rock Hill and Fort Mill with hotels, entertainment venues, and retail serving the Carowinds market.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'SC Licensed & Insured',
    desc: 'Fully licensed general contractor in South Carolina with comprehensive insurance coverage for every Rock Hill and York County project.',
  },
  {
    icon: MapPin,
    title: '30 Minutes from Charlotte HQ',
    desc: 'Our Charlotte headquarters at 14330 S Lakes Drive is a quick drive down I-77 from Rock Hill. No travel surcharges.',
  },
  {
    icon: Star,
    title: 'York County Expertise',
    desc: 'We know York County permitting, building codes, and inspection processes inside and out from years of completed projects.',
  },
  {
    icon: HardHat,
    title: 'Veteran & Family-Owned',
    desc: 'Military discipline and family values drive every project. Transparent communication, honest pricing, and quality craftsmanship.',
  },
  {
    icon: FileText,
    title: 'Full Permit Management',
    desc: 'We handle all York County and City of Rock Hill building permits, inspections, and code compliance from start to finish.',
  },
  {
    icon: Users,
    title: 'USGBC Member',
    desc: 'As a U.S. Green Building Council member, we bring sustainable building knowledge and energy-efficient construction practices to Rock Hill projects.',
  },
];

const faqs = [
  {
    question: 'What does a construction company charge in Rock Hill, SC?',
    answer:
      'Construction costs in Rock Hill vary by project type. Commercial office upfits typically cost $50-120 per square foot. Ground-up commercial construction ranges from $150 to $400+ per square foot depending on complexity and finishes. Industrial warehouse construction runs $80-180 per square foot. Custom home construction averages $175-350 per square foot. We provide free, detailed estimates after an on-site consultation so you know exact costs before any work begins.',
  },
  {
    question: 'Are you licensed to do construction work in Rock Hill, SC?',
    answer:
      'Yes. We Build holds active general contractor licenses in both South Carolina and North Carolina. Our SC license covers the full scope of general contracting including commercial construction, residential builds, tenant improvements, and specialty work like roof coating throughout Rock Hill and all of York County. We maintain all required insurance and bonding for South Carolina projects.',
  },
  {
    question: 'How do Rock Hill building permits work?',
    answer:
      'Rock Hill has two permitting jurisdictions. Projects within City of Rock Hill limits go through the City\u2019s Planning and Development Department. Projects in unincorporated York County areas go through the York County Building Codes Department. Both follow the International Building Code (IBC) for commercial and International Residential Code (IRC) for residential. Plan review takes 2-4 weeks for residential and 4-8 weeks for commercial. As your general contractor, We Build handles the entire permitting and inspection process.',
  },
  {
    question: 'What is the difference between SC and NC construction requirements?',
    answer:
      'Both states follow International Building Code standards, but there are important differences. South Carolina requires state-specific energy code compliance, wind load calculations, and has different contractor licensing requirements than North Carolina. SC also has its own DHEC environmental permitting for land disturbance over one acre. Our dual NC-SC licensing means we understand and comply with both states\u2019 requirements, which is particularly valuable for businesses operating on both sides of the border.',
  },
  {
    question: 'How long does a commercial upfit take in Rock Hill?',
    answer:
      'A typical commercial upfit in Rock Hill takes 6-12 weeks depending on the size and complexity. A basic office buildout under 3,000 square feet might finish in 6-8 weeks. Larger or more complex upfits like restaurants, medical offices, or fitness facilities typically take 10-16 weeks. Ground-up commercial construction ranges from 6-18 months. We provide detailed project schedules during the planning phase and keep clients updated with regular progress reports.',
  },
  {
    question: 'Do you work in Knowledge Park and downtown Rock Hill?',
    answer:
      'Absolutely. We Build serves all of Rock Hill including Knowledge Park, downtown/Old Town, Dave Lyle Boulevard, Cherry Road, Galleria area, Celanese Road, and surrounding York County communities. Knowledge Park\u2019s tech-focused development and downtown\u2019s revitalization create excellent opportunities for creative office buildouts, adaptive reuse projects, and mixed-use commercial construction. We understand the unique design standards and zoning requirements in these districts.',
  },
  {
    question: 'Can you build a custom home in Rock Hill or Tega Cay?',
    answer:
      'Yes. We build custom homes throughout the Rock Hill area including Tega Cay, India Hook, Riverwalk, Lake Wylie waterfront, Ebenezer, and Newport. Custom home construction in Rock Hill typically ranges from $175-350 per square foot depending on finishes, lot conditions, and design complexity. We handle everything from lot evaluation through final construction, including material selection at our Design Center. Lakefront properties on Lake Wylie require specialized knowledge of shoreline setbacks and dock permitting that our team provides.',
  },
  {
    question: 'What areas near Rock Hill do you serve?',
    answer:
      'In addition to Rock Hill, we serve Fort Mill, Tega Cay, Indian Land, Lake Wylie, South Charlotte, Pineville, Ballantyne, and the entire I-77 corridor between Charlotte and Rock Hill. Our dual NC-SC licensing means we handle projects seamlessly on either side of the state line. We also serve Lake Norman, Huntersville, Matthews, and communities throughout Mecklenburg and York counties.',
  },
  {
    question: 'Do you offer drone inspections for Rock Hill projects?',
    answer:
      'Yes. We Build offers drone-based inspections for commercial roofing assessments, site surveys, progress documentation, and pre-construction evaluations throughout Rock Hill and York County. Drone inspections provide detailed aerial imagery and measurements that improve accuracy during the bidding and planning phases, and they allow us to inspect roofs and hard-to-reach areas safely without scaffolding or lifts. This technology is particularly valuable for our roof coating assessments and large-scale commercial projects.',
  },
  {
    question: 'How do I get a construction estimate for my Rock Hill project?',
    answer:
      'Getting a free estimate from We Build is straightforward. Call us at (704) 574-8124 or fill out our online contact form. We will schedule an on-site consultation to review your project scope, take measurements, discuss your timeline and budget, and answer any questions. Within 5-10 business days you will receive a detailed, itemized proposal with transparent pricing. There is no obligation, and we never pressure clients into signing.',
  },
  {
    question: 'How do construction costs in Rock Hill compare to Fort Mill or Charlotte?',
    answer:
      'Rock Hill generally offers lower construction costs than Fort Mill and South Charlotte. Commercial office upfits in Rock Hill run $50 to $120 per square foot compared to $60 to $150 in Fort Mill and $65 to $175 in Ballantyne. Land costs and lease rates in Rock Hill are also more affordable, which influences the level of tenant improvement investment. York County permitting fees are competitive with Mecklenburg County. We Build provides side-by-side estimates for clients evaluating locations across the Charlotte-Rock Hill metro, helping you make an informed decision on project location.',
  },
  {
    question: 'Does We Build offer green building or sustainable construction in Rock Hill?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build provides sustainable construction options for Rock Hill commercial projects. We offer energy-efficient building envelopes, high-performance HVAC systems, LED lighting, low-VOC materials, and water conservation fixtures. South Carolina energy codes require specific efficiency standards, and we exceed those baseline requirements when clients want to reduce long-term operating costs. Green building features are increasingly important for attracting corporate tenants to Rock Hill commercial spaces along Dave Lyle Boulevard and in Knowledge Park.',
  },
  {
    question: 'What commercial construction opportunities exist in Rock Hill Knowledge Park?',
    answer:
      'Knowledge Park is Rock Hill\'s premier technology and innovation district, anchored by Winthrop University and a growing cluster of tech companies, coworking spaces, and creative businesses. Commercial construction opportunities include office buildouts for technology firms, adaptive reuse of historic downtown buildings, restaurant and retail spaces, and mixed-use developments. Knowledge Park has specific design guidelines emphasizing walkability and urban character. We Build handles tenant improvements, ground-up construction, and adaptive reuse projects in the district, coordinating with the City of Rock Hill planning department on design review requirements.',
  },
];

const areaPages = [
  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc' },
  { name: 'South Charlotte', href: '/areas/south-charlotte' },
  { name: 'Matthews', href: '/areas/matthews' },
  { name: 'Lake Norman', href: '/areas/lake-norman' },
  { name: 'Huntersville', href: '/areas/huntersville' },
  { name: 'Mooresville', href: '/areas/mooresville' },
];

export default function RockHillPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Rock Hill SC' },
      ])]} />

      <PageHero
        title="Construction Company Rock Hill SC"
        subtitle="Licensed SC general contractor serving Rock Hill, Tega Cay, and York County — commercial construction, upfits, roof coating & design-build"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas/rock-hill-sc' },
              { label: 'Rock Hill, SC' },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                General Contractor Serving Rock Hill, South Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a licensed South Carolina general contractor providing commercial
                construction, tenant improvements, roof coating, and design-build services
                throughout Rock Hill and York County. Based in Charlotte with active SC licensing,
                we bring over 60 years of combined construction experience to every Rock Hill project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rock Hill is the largest city in York County and one of the fastest-growing markets in
                the Charlotte metropolitan area. With a population exceeding 75,000 and a diverse
                economy anchored by Winthrop University, the Knowledge Park innovation district, and
                a thriving industrial sector along Dave Lyle Boulevard, Rock Hill offers significant
                opportunities for{' '}
                <Link
                  href="/services/commercial-construction"
                  className="text-primary hover:underline"
                >
                  commercial construction
                </Link>
                , office buildouts, and industrial development. The city&apos;s strategic position on
                I-77 between Charlotte and Columbia makes it a hub for distribution, manufacturing,
                and regional headquarters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are a business owner looking to build out commercial space in Knowledge
                Park, a retailer opening on Cherry Road, a manufacturer expanding along Dave Lyle
                Boulevard, or a family building a custom home near Lake Wylie, We Build delivers the
                craftsmanship and professionalism that Rock Hill&apos;s growing community demands.
                As a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contracting company
                </Link>
                , we treat every project with military-grade discipline and transparent communication.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Serving Rock Hill from Charlotte</p>
                  <p className="text-sm text-muted-foreground">
                    14330 S Lakes Drive, Charlotte NC 28273 — approximately 30 minutes from Rock
                    Hill via I-77
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+17045748124">
                    <Phone className="mr-2 h-5 w-5" />
                    (704) 574-8124
                  </a>
                </Button>
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
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
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

      {/* Construction Services in Rock Hill */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Construction Services in Rock Hill, SC
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              We Build offers a full range of construction services for Rock Hill businesses and
              property owners. From large-scale{' '}
              <Link
                href="/services/commercial-construction"
                className="text-primary hover:underline"
              >
                commercial construction
              </Link>{' '}
              and{' '}
              <Link
                href="/services/industrial-construction"
                className="text-primary hover:underline"
              >
                industrial facilities
              </Link>{' '}
              to precise{' '}
              <Link
                href="/services/tenant-improvements"
                className="text-primary hover:underline"
              >
                tenant improvements
              </Link>
              , every project receives experienced project management, quality materials, and
              transparent pricing.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rock Hill&apos;s commercial real estate market is expanding rapidly as businesses
                  relocate to York County for lower taxes, excellent interstate access, and proximity
                  to the Charlotte talent pool. We Build provides full-service{' '}
                  <Link
                    href="/services/commercial-construction"
                    className="text-primary hover:underline"
                  >
                    commercial construction
                  </Link>{' '}
                  for Rock Hill, including ground-up office buildings, retail centers, medical
                  facilities, restaurants, and mixed-use developments. Commercial construction in
                  Rock Hill typically costs $150-400+ per square foot depending on the project type
                  and complexity. Our process covers site evaluation, pre-construction planning,
                  permitting through York County or the City of Rock Hill, and full construction
                  management through certificate of occupancy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Paintbrush className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Upfits & Tenant Improvements
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are leasing space in a Rock Hill office park or renovating an existing
                  retail location on Cherry Road,{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    commercial upfits
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/services/tenant-improvements"
                    className="text-primary hover:underline"
                  >
                    tenant improvements
                  </Link>{' '}
                  are core specialties for our Rock Hill work. An upfit transforms a bare or outdated
                  commercial space into a functional environment tailored to your business. Our Rock
                  Hill upfit work includes demolition, new partition walls, electrical and data wiring,
                  HVAC modifications, plumbing, flooring, custom millwork, and ADA-compliant
                  accessibility features. Office buildouts in Rock Hill typically cost $50-120 per
                  square foot, with restaurant and medical buildouts at $100-200+ per square foot.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Factory className="h-6 w-6 text-primary" aria-hidden="true" />
                  Industrial Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rock Hill&apos;s industrial sector benefits from excellent I-77 access, proximity
                  to Charlotte Douglas International Airport, and competitive York County land prices.
                  We Build provides{' '}
                  <Link
                    href="/services/industrial-construction"
                    className="text-primary hover:underline"
                  >
                    industrial construction
                  </Link>{' '}
                  services including warehouse facilities, distribution centers, manufacturing plants,
                  and flex space developments along the Dave Lyle Boulevard corridor. Industrial
                  construction in Rock Hill typically costs $80-180 per square foot and involves
                  large-scale metal building systems, reinforced concrete foundations, loading dock
                  installations, and specialized mechanical and electrical systems.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                  Roof Coating
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rock Hill&apos;s commercial building owners face significant costs when roof systems
                  deteriorate. Our{' '}
                  <Link href="/services/roof-coating" className="text-primary hover:underline">
                    commercial roof coating
                  </Link>{' '}
                  service through{' '}
                  <Link href="/we-coat" className="text-primary hover:underline">
                    We Coat
                  </Link>{' '}
                  provides a cost-effective alternative to full roof replacement, extending the life
                  of your existing commercial roof by 10-20 years at a fraction of replacement cost.
                  Our elastomeric and silicone coating systems create a seamless, waterproof membrane
                  that reflects UV radiation and reduces cooling costs. We use drone inspections for
                  accurate roof assessments before recommending coating solutions, ensuring you get
                  the right system for your building.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Ruler className="h-6 w-6 text-primary" aria-hidden="true" />
                  Design-Build
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our{' '}
                  <Link href="/services/design-build" className="text-primary hover:underline">
                    design-build
                  </Link>{' '}
                  approach combines architectural design and construction under one contract,
                  providing Rock Hill clients with a streamlined project delivery method that saves
                  time and money. Instead of hiring separate architects, engineers, and contractors,
                  our design-build process gives you a single point of contact from concept through
                  completion. This method typically reduces project timelines by 20-30% and costs by
                  10-15% compared to the traditional design-bid-build approach. Visit our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>{' '}
                  to explore materials and finishes in person.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary" aria-hidden="true" />
                  Custom Home Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rock Hill offers diverse construction opportunities across commercial sectors.
                  We Build helps businesses bring their projects to life as an experienced{' '}
                  <Link
                    href="/services/general-contractor"
                    className="text-primary hover:underline"
                  >
                    general contractor
                  </Link>
                  . We guide clients through every phase from lot evaluation and architectural
                  planning through material selection at our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>{' '}
                  to final construction. Custom homes in Rock Hill typically cost $175-350 per square
                  foot depending on finishes and lot conditions. We build in Riverwalk, India Hook,
                  Tega Cay lakefront communities, Ebenezer, and throughout York County.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rock Hill Commercial Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Commercial Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Rock Hill Commercial Construction Areas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Rock Hill&apos;s commercial landscape spans multiple distinct districts, each with
              unique construction needs, zoning requirements, and market opportunities. From the
              revitalized downtown core to the industrial corridors, We Build serves every
              commercial area in Rock Hill.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {commercialAreas.map((area) => (
                <div key={area.name} className="space-y-3">
                  <h3 className="text-xl font-bold">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Business Districts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Rock Hill Business Districts & Construction Costs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Understanding construction costs across Rock Hill&apos;s business districts helps
              property owners and investors plan their budgets accurately. Here is a breakdown of
              the key commercial areas and typical construction cost ranges.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {businessDistricts.map((district) => (
                <Card key={district.name}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{district.name}</h3>
                    <p className="text-sm text-muted-foreground">{district.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rock Hill Market Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Market Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Rock Hill Construction Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Rock Hill&apos;s construction market reflects strong economic momentum driven by
              population growth, business relocations, and strategic investment in infrastructure
              and development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">75,000+</p>
                  <p className="text-sm text-muted-foreground">
                    Population and growing — Rock Hill is York County&apos;s largest city and one of
                    SC&apos;s fastest-growing communities
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">$500M+</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated commercial and industrial investment in the Rock Hill area over the
                    past five years
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">30 min</p>
                  <p className="text-sm text-muted-foreground">
                    Drive time from our Charlotte headquarters to Rock Hill via I-77 — no travel
                    surcharges
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Neighborhoods We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhoods.map((name) => (
                    <span
                      key={name}
                      className="bg-muted px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">York County Building Codes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  York County enforces the International Building Code (IBC) for commercial
                  construction and the International Residential Code (IRC) for residential projects,
                  along with the National Electrical Code (NEC), International Plumbing Code (IPC),
                  and International Mechanical Code (IMC). South Carolina also requires compliance
                  with state energy codes and wind load requirements. The City of Rock Hill has its
                  own planning department for projects within city limits, while unincorporated areas
                  fall under York County jurisdiction. Our team&apos;s deep experience with both
                  permitting offices helps prevent costly delays and rework.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">SC Licensing Advantage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many Charlotte-area contractors only hold North Carolina licenses, which means
                  they cannot legally perform construction work in Rock Hill or anywhere in South
                  Carolina. We Build holds active general contractor licenses in both NC and SC,
                  allowing us to serve clients on both sides of the state line without delays or
                  subcontracting complications. This dual-state licensing is a significant advantage
                  for businesses with locations in both Charlotte and Rock Hill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Why Choose We Build for Your Rock Hill Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Choosing the right{' '}
              <Link
                href="/services/general-contractor"
                className="text-primary hover:underline"
              >
                general contractor
              </Link>{' '}
              is one of the most important decisions for your Rock Hill construction project. The
              wrong choice can lead to budget overruns, schedule delays, and code violations. We
              Build brings licensing, proximity, experience, and values that make us the right
              partner for Rock Hill property owners and business leaders.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <item.icon
                      className="h-8 w-8 text-primary mb-3"
                      aria-hidden="true"
                    />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a veteran and family-owned business, We Build operates with the integrity,
                discipline, and commitment to excellence that define both military service and
                family values. We treat every Rock Hill project with the same level of
                professionalism and care, whether it is a multi-million-dollar commercial
                development or a custom home addition. Visit our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  project portfolio
                </Link>{' '}
                to see examples of our completed work, or{' '}
                <Link href="/about" className="text-primary hover:underline">
                  learn more about our company
                </Link>{' '}
                and the team behind your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas We Serve */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to Rock Hill and York County, We Build provides construction services throughout the greater Charlotte region. Our multi-state licensing allows us to serve clients across SC and NC.
            </p>
            <div className="flex flex-wrap gap-3">
              {areaPages.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm text-center block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Rock Hill Construction FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Answers to common questions about construction services, permitting, costs, and
              timelines for Rock Hill and York County projects.
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build in Rock Hill?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need a commercial buildout in Knowledge Park, an industrial facility on
            Dave Lyle Boulevard, a roof coating for your Rock Hill warehouse, or a custom home
            near Lake Wylie, We Build is your licensed SC general contractor with the experience
            to deliver.
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on your Rock Hill construction
            project. Our team will schedule a site visit, discuss your goals, and provide a
            detailed proposal with transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+17045748124">
                <Phone className="mr-2 h-5 w-5" />
                (704) 574-8124
              </a>
            </Button>
          </div>

          {/* Area Links */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 mb-4">
              We also serve these areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areaPages.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
