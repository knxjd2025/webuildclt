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
  Paintbrush,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  HardHat,
  FileCheck,
  Clock,
  DollarSign,
  Users,
  Landmark,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Indian Trail NC Construction Company | Union County GC',
  description:
    'Indian Trail NC construction company serving Stallings, Wesley Chapel, Sun Valley. Commercial construction, upfits, roof coating. Veteran-owned, licensed NC & SC.',
  keywords: [
    'construction company indian trail nc',
    'general contractor indian trail nc',
    'commercial contractor indian trail',
    'contractor near me indian trail',
    'construction companies near me indian trail',
    'indian trail commercial construction',
    'union county general contractor',
    'commercial builder indian trail',
    'indian trail remodeling contractor',
    'indian trail commercial upfits',
    'indian trail renovation contractor',
    'commercial construction indian trail nc',
    'indian trail nc building contractor',
    'sun valley commons construction',
    'wesley chapel commercial construction',
    'stallings nc construction company',
    'us-74 corridor commercial contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/indian-trail',
  },
  openGraph: {
    title: 'Indian Trail NC Construction Company | Union County GC',
    description:
      'Veteran-owned construction company serving Indian Trail NC and Union County. Commercial construction, upfits & roof coatings. Licensed NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers ground-up commercial construction throughout Indian Trail — from new retail and restaurant developments along the US-74 corridor and Old Monroe Road to medical offices, professional buildings, and neighborhood retail centers serving the rapidly growing communities along the Wesley Chapel / Stallings boundary. Indian Trail is one of the fastest-growing towns in Union County and the Charlotte metro, with commercial development driven by the residential growth radiating southeast from Charlotte. Our team understands Town of Indian Trail planning review, Union County permitting, and the construction standards specific to the suburban commercial corridors that define this market.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Tenant Improvements',
    href: '/services/commercial-upfits',
    description:
      'Indian Trail businesses regularly need interior renovations to support new tenants, refresh aging spaces, or convert existing commercial buildings to new uses. We Build provides commercial upfit services throughout Sun Valley Commons, the Old Monroe Road / US-74 commercial corridor, the Indian Trail-Fairview Road retail district, and the Wesley Chapel commercial center near the Union-Mecklenburg county line. Our upfit projects include open-concept office redesigns, restaurant build-outs, retail tenant improvements, medical office suites, and professional service renovations. Most Indian Trail commercial upfits complete in 2 to 5 months depending on scope.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Indian Trail commercial property owners save 40 to 60 percent versus full roof replacement with our elastomeric and silicone roof coating systems. We Build applies reflective coatings that extend roof life by 15 to 20 years, reduce summer cooling costs, and prevent leaks on flat and low-slope commercial roofs. This service is particularly valuable for the strip retail centers along US-74, the warehouse and distribution buildings serving Union County, and the office parks throughout Indian Trail. A typical Indian Trail commercial roof coating completes in 2 to 5 days with no interior business disruption.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Indian Trail. From initial Union County permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout. Our Charlotte-area headquarters at 14330 S Lakes Drive places us about 20 miles northwest of Indian Trail via I-485 and US-74 — close enough for fast on-site response and consistent supervision.',
  },
];

const commercialAreas = [
  {
    name: 'Sun Valley Commons',
    description:
      'Sun Valley Commons is one of Indian Trail\'s most prominent retail and commercial developments, anchoring a busy mixed-use district with retail, restaurants, professional services, and medical offices. The center continues to attract new tenants who need build-out and renovation services. We Build provides commercial construction and tenant upfit services throughout Sun Valley Commons, where retail renovations, restaurant build-outs, and medical office construction drive consistent activity.',
  },
  {
    name: 'US-74 / Old Monroe Road Corridor',
    description:
      'The US-74 / Old Monroe Road corridor serves as Indian Trail\'s primary commercial spine, connecting the town to Charlotte and Monroe. The corridor hosts auto dealerships, big-box retail, neighborhood shopping centers, restaurants, and professional offices. We Build provides commercial construction and upfit services throughout this corridor, including dealership renovations, retail center modernization, restaurant build-outs, and office tenant improvements.',
  },
  {
    name: 'Wesley Chapel / Stallings Boundary',
    description:
      'The Wesley Chapel and Stallings communities along the Union-Mecklenburg county line have experienced rapid commercial growth driven by residential development radiating southeast from Charlotte. New medical offices, neighborhood retail, restaurants, and professional services serve this growing area. We Build provides ground-up commercial construction and tenant upfits throughout the Wesley Chapel / Stallings district.',
  },
  {
    name: 'Indian Trail-Fairview Road',
    description:
      'Indian Trail-Fairview Road runs through the heart of Indian Trail and hosts a mix of older retail, newer commercial development, professional offices, and neighborhood services. The corridor reflects Indian Trail\'s evolution from a small Union County town to a significant Charlotte metro suburb. We Build provides commercial construction and renovation services along this corridor.',
  },
  {
    name: 'Light Industrial / Distribution',
    description:
      'Indian Trail\'s position along US-74 between Charlotte and Monroe makes it attractive for light industrial, flex space, and distribution operations serving the broader Charlotte region. We Build provides warehouse construction, flex space build-outs, and light industrial facility renovations for businesses operating in this segment.',
  },
];

const neighborhoods = [
  'Indian Trail',
  'Stallings',
  'Wesley Chapel',
  'Lake Park',
  'Hemby Bridge',
  'Unionville',
  'Sun Valley',
  'Sardis Forest',
  'Bonterra',
  'Brandon Oaks',
  'Carolina Crossing',
  'Crismark',
  'Sheffield',
  'Shannamara',
  'Cedarvale Farm',
  'Taylor Glenn',
];

const businessDistricts = [
  {
    name: 'Sun Valley Commons',
    type: 'Mixed-Use Retail & Medical',
    activity: 'Retail tenant upfits, restaurant build-outs, medical office construction, and professional service suites',
  },
  {
    name: 'US-74 Corridor (Old Monroe Road)',
    type: 'Regional Commercial Spine',
    activity: 'Auto dealerships, big-box retail, restaurant build-outs, and office tenant improvements',
  },
  {
    name: 'Wesley Chapel / Stallings',
    type: 'Suburban Growth District',
    activity: 'Ground-up commercial construction, neighborhood retail, medical and dental offices, and restaurant build-outs',
  },
  {
    name: 'Indian Trail-Fairview Road',
    type: 'Mixed Commercial',
    activity: 'Retail renovations, professional offices, and neighborhood service businesses',
  },
  {
    name: 'Light Industrial / Distribution',
    type: 'Logistics & Flex Space',
    activity: 'Warehouse construction, flex space build-outs, and light industrial facility upfits',
  },
  {
    name: 'Medical Office District',
    type: 'Healthcare',
    activity: 'Medical office construction, dental and orthodontic build-outs, urgent care, and outpatient clinics',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte Metro Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273 — about 20 miles northwest of Indian Trail via I-485 and US-74. We are a true regional contractor, not an out-of-state firm, and our team responds quickly to Indian Trail jobsites for project meetings, inspections, and coordination.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned construction company with 60+ years of combined experience. Indian Trail property owners deal directly with the owners — not a sales team. Integrity, accountability, and craftsmanship are foundational to every contract we sign.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold active general contractor licenses in both North Carolina (NCLBGC) and South Carolina. Verify our NC license at nclbgc.org. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction in Indian Trail and throughout Union County.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods that reduce operating costs and qualify for utility rebates in Indian Trail.',
  },
  {
    icon: Clock,
    title: 'Union County Permitting Expertise',
    description:
      'We understand the Town of Indian Trail planning department, Union County building inspections, and the suburban commercial review processes that affect Indian Trail projects. We know how to prepare submissions that move efficiently through review.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project starts with a detailed, line-item estimate. No hidden costs, no vague allowances, no surprise change orders. Indian Trail property owners know exactly where every dollar goes before construction begins.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Indian Trail NC?',
    answer:
      'We Build provides comprehensive commercial construction services in Indian Trail including ground-up commercial construction, commercial upfits and tenant improvements, general contracting, commercial renovations, and roof coating. We handle projects from small office upfits to ground-up commercial buildings throughout Indian Trail, Stallings, Wesley Chapel, and surrounding Union County. Call (980) 471-1745 for a free Indian Trail construction consultation.',
  },
  {
    question: 'How much does commercial construction cost in Indian Trail NC in 2026?',
    answer:
      'Commercial construction costs in Indian Trail vary by project type. Office upfits typically run $50 to $175 per square foot. Retail build-outs cost $75 to $200 per square foot. Restaurant construction averages $150 to $350 per square foot due to commercial kitchens and ventilation. Medical office construction ranges from $150 to $400 per square foot. Ground-up commercial construction in Indian Trail generally runs $140 to $290 per square foot, often slightly below comparable Charlotte projects.',
  },
  {
    question: 'What permits are required for commercial construction in Indian Trail?',
    answer:
      'Most commercial construction in Indian Trail requires building permits from Union County, with additional plan and zoning review from the Town of Indian Trail planning department for projects within town limits. Commercial projects typically require building plan review, fire marshal review, and may include stormwater and zoning review depending on scope. The Town of Indian Trail maintains its own land development standards that may add requirements beyond Union County baseline. We Build handles all permitting and inspections as part of our general contracting services.',
  },
  {
    question: 'How long does a typical commercial project take in Indian Trail NC?',
    answer:
      'Project timelines depend on scope. Commercial office upfits typically take 2 to 5 months from contract to certificate of occupancy. Restaurant build-outs require 4 to 8 months due to kitchen, ventilation, and health department coordination. Ground-up commercial construction takes 8 to 14 months. Roof coating projects complete in 2 to 5 days. Union County and Town of Indian Trail permitting typically adds 4 to 8 weeks before construction can begin.',
  },
  {
    question: 'Does We Build work in Stallings and Wesley Chapel?',
    answer:
      'Yes. Our Indian Trail service area extends throughout Union County and the Mecklenburg-Union border communities including Stallings, Wesley Chapel, Lake Park, Hemby Bridge, and Unionville. The Wesley Chapel / Stallings boundary in particular has seen significant commercial growth driven by residential development radiating southeast from Charlotte. We provide commercial construction, upfits, and roof coatings throughout these areas.',
  },
  {
    question: 'Can We Build handle medical office construction in Indian Trail?',
    answer:
      'Absolutely. We Build constructs and renovates medical, dental, and healthcare facilities throughout Indian Trail, particularly in the medical office buildings near Sun Valley Commons and along the US-74 corridor. Healthcare construction requires specialized expertise in HIPAA-compliant layouts, infection control, medical gas systems, lead-lined imaging suites, and ADA accessibility. Our team handles these requirements as part of standard medical construction project delivery.',
  },
  {
    question: 'What neighborhoods in Indian Trail does We Build serve?',
    answer:
      'We serve the entire Town of Indian Trail and surrounding Union County including Stallings, Wesley Chapel, Lake Park, Hemby Bridge, Unionville, Sun Valley, Sardis Forest, Bonterra, Brandon Oaks, Carolina Crossing, Crismark, Sheffield, Shannamara, Cedarvale Farm, and Taylor Glenn. Our service area extends from the Mecklenburg County line at Stallings southeast to Monroe.',
  },
  {
    question: 'How do Indian Trail commercial construction costs compare to Charlotte?',
    answer:
      'Indian Trail commercial construction costs are typically 5 to 10 percent below comparable Charlotte projects, primarily due to lower Union County permit fees, slightly lower labor rates outside the Charlotte core, and lower land costs for ground-up projects. Restaurant and medical specialty projects can carry similar costs to Charlotte due to specialty trade requirements regardless of location. We provide project-specific estimates that account for local cost factors.',
  },
  {
    question: 'Does Indian Trail have its own zoning rules separate from Union County?',
    answer:
      'Yes. The Town of Indian Trail maintains its own zoning ordinance, land development standards, and planning review process distinct from unincorporated Union County. Commercial projects within Indian Trail town limits must go through the town planning department for site plan and zoning review, which evaluates parking, landscaping, signage, and architectural standards. Union County issues building permits and conducts construction inspections. We Build manages both the town zoning process and county permitting as part of our general contracting services.',
  },
  {
    question: 'Is We Build a licensed general contractor in Indian Trail NC?',
    answer:
      'Yes. We Build holds an active North Carolina general contractor license issued by the NC Licensing Board for General Contractors (NCLBGC), which authorizes commercial general contracting work throughout the entire state including Indian Trail and all of Union County. Verify our NC license status at nclbgc.org. We also hold a South Carolina contractor license, which allows us to coordinate seamlessly when Indian Trail clients have additional projects across the state line.',
  },
  {
    question: 'How do I get a construction estimate for a project in Indian Trail NC?',
    answer:
      'Getting a free Indian Trail construction estimate from We Build is simple. Call (980) 471-1745 or visit our contact page to request a consultation. We will schedule a site visit to understand your project scope, discuss goals and budget, and provide a detailed line-item estimate. There is no obligation and no charge for initial consultations.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Matthews', href: '/areas/matthews' },
  { label: 'Concord', href: '/areas/concord' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
];

export default function IndianTrailPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Indian Trail NC' },
      ])]} />

      <PageHero
        title="Construction Company Indian Trail NC"
        subtitle="Commercial General Contractor — Sun Valley Commons, US-74 Corridor, Wesley Chapel & Union County"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Indian Trail NC' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Indian Trail NC Construction Company — Commercial General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving Indian Trail NC and the Union County market. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout Sun Valley Commons, the US-74 corridor, Wesley Chapel, Stallings, and surrounding Union County communities. Licensed in NC and SC with 60+ years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Indian Trail is one of the fastest-growing towns in Union County and the southeast Charlotte metro. The town&apos;s commercial growth is driven by the residential expansion radiating southeast from Charlotte through Stallings, Wesley Chapel, and into Union County. Sun Valley Commons anchors the town&apos;s primary mixed-use commercial district with retail, restaurants, and medical offices. The US-74 / Old Monroe Road corridor serves as Indian Trail&apos;s commercial spine, hosting auto dealerships, big-box retail, neighborhood shopping, and professional offices. The Wesley Chapel and Stallings boundary along the Mecklenburg-Union county line continues to attract new commercial development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves Indian Trail with the same commitment to quality, transparency, and local expertise that defines every project across the Charlotte region. Our team handles work ranging from retail tenant upfits at Sun Valley Commons to ground-up medical office construction along US-74, restaurant build-outs in Wesley Chapel, and warehouse projects serving Union County logistics. Whether you are upfitting a small professional office or building a multi-tenant retail center, We Build delivers the licensing, accountability, and craftsmanship Indian Trail business owners expect.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Indian Trail from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — about 20 miles northwest of Indian Trail via I-485 and US-74</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+19804711745"><Phone className="mr-2 h-5 w-5" />(980) 471-1745</a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Union County Communities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {neighborhoods.map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-sm">{n}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Headquartered at 14330 S Lakes Dr, Charlotte 28273</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Licensed in NC &amp; SC</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Veteran &amp; family-owned</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>60+ years combined experience</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>USGBC member</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Union County permitting expertise</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Indian Trail NC</h2>
          </div>
          <div className="space-y-8">
            {services.map((service) => (
              <Card key={service.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">
                        <Link href={service.href} className="hover:text-primary transition-colors">{service.title}</Link>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <Link href={service.href} className="inline-flex items-center text-primary hover:underline text-sm font-medium">
                        Learn more about {service.title.toLowerCase()} <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Indian Trail Commercial Construction Districts</h2>
            <div className="space-y-8">
              {commercialAreas.map((area) => (
                <div key={area.name} className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Indian Trail Business Districts</h2>
            <div className="space-y-4">
              {businessDistricts.map((district) => (
                <div key={district.name} className="bg-muted rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{district.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">{district.type}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{district.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Indian Trail</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Other Areas We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {areaPages.map((area) => (
                <Link key={area.href} href={area.href} className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors">
                  <MapPin className="h-4 w-4" aria-hidden="true" />{area.label}
                </Link>
              ))}
              <Link href="/portfolio" className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors">View Our Portfolio</Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Indian Trail Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Indian Trail NC Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience. USGBC member.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+19804711745"><Phone className="mr-2 h-5 w-5" />(980) 471-1745</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
