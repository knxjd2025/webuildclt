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
  title: 'Concord NC Construction Company | Cabarrus County GC',
  description:
    'Concord NC construction company serving Kannapolis, Harrisburg, Mount Pleasant. Commercial construction, upfits, roof coating. Veteran-owned, licensed NC & SC.',
  keywords: [
    'construction company concord nc',
    'general contractor concord nc',
    'commercial contractor concord nc',
    'contractor near me concord',
    'construction companies near me concord',
    'concord nc commercial construction',
    'cabarrus county general contractor',
    'commercial builder concord',
    'concord remodeling contractor',
    'concord commercial upfits',
    'concord renovation contractor',
    'commercial construction concord nc',
    'concord nc building contractor',
    'concord mills area construction',
    'kannapolis commercial construction',
    'harrisburg nc construction company',
    'concord north carolina contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/concord',
  },
  openGraph: {
    title: 'Concord NC Construction Company | Cabarrus County GC',
    description:
      'Veteran-owned construction company serving Concord NC and Cabarrus County. Commercial construction, upfits & roof coatings. Licensed NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers ground-up commercial construction throughout Concord — from new office buildings near Concord Mills and the I-85 / US-29 corridor to retail spaces along Concord Parkway and medical facilities serving the Atrium Health Cabarrus campus. Concord is the seat of Cabarrus County and one of the fastest-growing markets in the Charlotte region, with a commercial development pipeline that spans hospitality, healthcare, motorsports-adjacent industrial, and neighborhood retail. Our team understands Cabarrus County permitting, City of Concord planning review, and the construction standards specific to the Charlotte Motor Speedway / Concord Mills tourism corridor where many commercial projects must meet elevated finish quality.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Tenant Improvements',
    href: '/services/commercial-upfits',
    description:
      'Concord businesses regularly need interior renovations to keep up with the city\'s growth. We Build provides commercial upfit services throughout Concord Mills, downtown Concord around Union Street, the Concord Parkway corridor, the Speedway commercial district, and the Afton Ridge / Kannapolis line. Our upfit projects include open-concept office redesigns, restaurant build-outs, retail space transformations, medical office suites, and tenant improvements for businesses moving into Cabarrus County industrial parks. Most Concord upfits complete in 2 to 5 months depending on scope.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Concord commercial property owners save 40 to 60 percent versus full roof replacement with our elastomeric and silicone roof coating systems. We Build applies reflective coatings that extend roof life by 15 to 20 years, reduce summer cooling costs, and prevent leaks on flat and low-slope commercial roofs. This service is especially valuable for the large industrial and warehouse roofs along Concord\'s I-85 corridor, the retail centers at Concord Mills, and the manufacturing facilities tied to the motorsports and aerospace cluster. A typical Concord commercial roof coating completes in 2 to 5 days with zero interior business disruption.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Concord. From initial Cabarrus County permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout. Our Charlotte-area headquarters at 14330 S Lakes Drive places us about 25 miles south of Concord — close enough for fast on-site response when issues arise.',
  },
];

const commercialAreas = [
  {
    name: 'Concord Mills / I-85 Corridor',
    description:
      'Concord Mills is one of the most-visited tourist destinations in North Carolina, anchoring a sprawling commercial district along Concord Mills Boulevard and the I-85 / Bruton Smith Boulevard interchange. The area combines outlet retail, restaurants, hotels, and entertainment venues that serve millions of annual visitors. We Build provides commercial construction and tenant upfit services throughout the Concord Mills district, where retail renovations, restaurant build-outs, and hotel improvements drive consistent construction demand.',
  },
  {
    name: 'Charlotte Motor Speedway District',
    description:
      'The Charlotte Motor Speedway and zMAX Dragway anchor a unique commercial cluster of motorsports-related businesses, race team facilities, hospitality venues, and industrial operations. We Build has experience with the specialized commercial construction needs of this district, including team garages, hospitality buildings, exhibition spaces, and industrial flex space. Construction scheduling here often must work around major race weekends.',
  },
  {
    name: 'Downtown Concord / Union Street',
    description:
      'Historic downtown Concord centered on Union Street has experienced significant revitalization, with new restaurants, professional offices, retail boutiques, and mixed-use development bringing new commercial activity to the city center. We Build provides commercial renovations, adaptive reuse of historic buildings, and ground-up infill construction in downtown Concord. Historic district considerations often require careful coordination with the City of Concord planning department.',
  },
  {
    name: 'Concord Parkway / NC-3 Corridor',
    description:
      'Concord Parkway (NC-3) runs east-west through Concord and connects downtown to Kannapolis. The corridor hosts medical offices, professional services, banks, restaurants, and neighborhood retail centers. We Build provides commercial construction and upfit services throughout this corridor, including medical office construction, professional service build-outs, and retail tenant improvements.',
  },
  {
    name: 'Atrium Health Cabarrus Medical District',
    description:
      'The Atrium Health Cabarrus hospital campus anchors a growing medical district that includes physician offices, outpatient clinics, dental practices, urgent care centers, physical therapy facilities, and medical specialty buildings. We Build constructs and renovates medical and dental facilities in this district to meet healthcare-specific code requirements including HIPAA-compliant layouts, infection control, medical gas systems, and ADA accessibility.',
  },
];

const neighborhoods = [
  'Concord',
  'Concord Mills',
  'Afton Ridge',
  'Highland Creek',
  'Skybrook',
  'Christenbury',
  'Caldwell',
  'Cox Mill',
  'Rocky River',
  'Moss Creek',
  'Cabarrus Country Club',
  'Logan',
  'Patriots Pointe',
  'Tuscany',
  'Roberta Road',
  'Poplar Tent',
];

const businessDistricts = [
  {
    name: 'Concord Mills / Bruton Smith Boulevard',
    type: 'Regional Retail & Hospitality',
    activity: 'Outlet retail upfits, restaurant build-outs, hotel renovations, and entertainment venue construction',
  },
  {
    name: 'Charlotte Motor Speedway District',
    type: 'Motorsports & Industrial',
    activity: 'Race team facilities, hospitality buildings, industrial flex space, and motorsports support construction',
  },
  {
    name: 'Downtown Concord / Union Street',
    type: 'Mixed-Use & Adaptive Reuse',
    activity: 'Historic building renovation, restaurant build-outs, professional offices, and retail boutique upfits',
  },
  {
    name: 'Atrium Health Cabarrus Medical District',
    type: 'Healthcare & Medical Office',
    activity: 'Medical office construction, dental and orthodontic build-outs, physical therapy, and outpatient clinics',
  },
  {
    name: 'Concord Parkway (NC-3)',
    type: 'Professional Services & Retail',
    activity: 'Medical and professional office construction, neighborhood retail, banking, and service businesses',
  },
  {
    name: 'I-85 / US-29 Industrial Corridor',
    type: 'Light Industrial & Distribution',
    activity: 'Warehouse construction, distribution centers, flex space, and manufacturing facility build-outs',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte Metro Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273 — about 25 miles south of Concord via I-85. We are a true regional contractor, not a distant out-of-state firm flying in for jobs. Our team is on-site in Concord quickly for project meetings, inspections, and issue resolution.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned construction company with 60+ years of combined experience. Concord property owners deal directly with the owners, not a sales team. Integrity, accountability, and craftsmanship are not slogans — they are the foundation of every contract we sign.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold active general contractor licenses in both North Carolina (NCLBGC) and South Carolina. Verify our NC license at nclbgc.org. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction in Concord and throughout Cabarrus County.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. Concord property owners benefit from green building techniques that reduce operating costs and qualify for utility rebates.',
  },
  {
    icon: Clock,
    title: 'Cabarrus County Permitting Expertise',
    description:
      'We have deep familiarity with the City of Concord planning department, Cabarrus County building inspections, and the specific review processes that affect Concord commercial construction. We know which submissions move through review quickly and how to avoid the common comments that slow projects down.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project starts with a detailed, line-item estimate. No hidden costs, no vague allowances, no surprise change orders. Concord property owners know exactly where every dollar goes before construction begins, and our change-order process is documented and predictable.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Concord NC?',
    answer:
      'We Build provides comprehensive commercial construction services in Concord including ground-up commercial construction, commercial upfits and tenant improvements, general contracting, commercial renovations, and roof coating. We handle projects from small office upfits to large commercial buildings throughout Concord, Concord Mills, the Speedway district, and surrounding Cabarrus County. Call (980) 471-1745 for a free Concord construction consultation.',
  },
  {
    question: 'How much does commercial construction cost in Concord NC in 2026?',
    answer:
      'Commercial construction costs in Concord vary by project type. Office upfits typically run $50 to $175 per square foot. Retail build-outs cost $75 to $200 per square foot. Restaurant construction averages $150 to $350 per square foot due to commercial kitchens and ventilation. Medical office construction ranges from $150 to $400 per square foot. Ground-up commercial construction in Concord generally runs $150 to $300+ per square foot. We provide detailed line-item estimates tailored to your project specifications.',
  },
  {
    question: 'What permits are required for commercial construction in Concord?',
    answer:
      'Most commercial construction in Concord requires building permits from Cabarrus County, with additional plan and zoning review from the City of Concord planning department. Commercial projects typically require building plan review, fire marshal review, and may include stormwater and zoning review depending on scope. Some projects in Concord historic districts or along certain corridors require additional design or overlay-district review. We Build handles all permitting and inspections as part of our general contracting services.',
  },
  {
    question: 'How long does a typical commercial project take in Concord NC?',
    answer:
      'Project timelines depend on scope. Commercial office upfits typically take 2 to 5 months from contract to certificate of occupancy. Restaurant build-outs require 4 to 8 months due to kitchen, ventilation, and health department coordination. Ground-up commercial construction takes 8 to 14 months. Roof coating projects complete in 2 to 5 days. Cabarrus County and City of Concord permitting typically adds 4 to 8 weeks before construction can begin. We provide a detailed schedule at the start of every project.',
  },
  {
    question: 'Does We Build work near Concord Mills and Charlotte Motor Speedway?',
    answer:
      'Yes. We Build provides commercial construction and tenant upfit services throughout the Concord Mills retail district along Bruton Smith Boulevard and the Charlotte Motor Speedway commercial cluster. Our team understands the elevated finish quality expected in these high-traffic tourism districts and can schedule construction around major Concord Mills events and Speedway race weekends.',
  },
  {
    question: 'Can We Build handle medical office construction in Concord?',
    answer:
      'Absolutely. We Build constructs and renovates medical, dental, and healthcare facilities throughout the Atrium Health Cabarrus medical district and the broader Concord Parkway corridor. Healthcare construction requires specialized expertise in HIPAA-compliant layouts, infection control, medical gas systems, lead-lined imaging suites, and ADA accessibility. Our team handles these requirements as part of standard medical construction project delivery.',
  },
  {
    question: 'What neighborhoods in Concord does We Build serve?',
    answer:
      'We serve the entire City of Concord and surrounding Cabarrus County including Concord Mills, Afton Ridge, Highland Creek, Skybrook, Christenbury, Caldwell, Cox Mill, Rocky River, Moss Creek, Cabarrus Country Club, Logan, Patriots Pointe, Tuscany, Roberta Road, and Poplar Tent. Our service area extends from the Mecklenburg County line at Highland Creek north to Kannapolis and east toward Mount Pleasant.',
  },
  {
    question: 'How do Concord commercial construction costs compare to Charlotte and Kannapolis?',
    answer:
      'Concord commercial construction costs are generally 5 to 10 percent below comparable Charlotte projects, primarily due to lower Cabarrus County permit fees and slightly lower labor rates outside the immediate Charlotte core. Concord costs are roughly comparable to Kannapolis given their adjacent geography. Restaurant and medical projects can carry similar costs to Charlotte due to specialty trade requirements regardless of location. We provide project-specific estimates that account for local cost factors.',
  },
  {
    question: 'Does Concord have its own zoning rules separate from Cabarrus County?',
    answer:
      'Yes. The City of Concord maintains its own zoning ordinance, land development standards, and planning review process distinct from unincorporated Cabarrus County. Commercial projects within Concord city limits must go through the City of Concord planning department for site plan and zoning review, which evaluates parking, landscaping, signage, and architectural standards. Cabarrus County issues building permits and conducts construction inspections. We Build manages both the city zoning process and county permitting as part of our general contracting services.',
  },
  {
    question: 'Is We Build a licensed general contractor in Concord NC?',
    answer:
      'Yes. We Build holds an active North Carolina general contractor license issued by the NC Licensing Board for General Contractors (NCLBGC), which authorizes commercial general contracting work throughout the entire state including Concord and all of Cabarrus County. Verify our NC license status at nclbgc.org. We also hold a South Carolina contractor license, which allows us to coordinate seamlessly when Concord clients have additional projects across the state line.',
  },
  {
    question: 'How do I get a construction estimate for a project in Concord NC?',
    answer:
      'Getting a free Concord construction estimate from We Build is simple. Call (980) 471-1745 or visit our contact page to request a consultation. We will schedule a site visit to understand your project scope, discuss goals and budget, and provide a detailed line-item estimate. There is no obligation and no charge for initial consultations. Most Concord clients go from initial call to detailed proposal within 7 to 14 days.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Huntersville', href: '/areas/huntersville' },
  { label: 'Mooresville', href: '/areas/mooresville' },
  { label: 'Matthews', href: '/areas/matthews' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
];

export default function ConcordPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Concord NC' },
      ])]} />

      <PageHero
        title="Construction Company Concord NC"
        subtitle="Commercial General Contractor — Concord Mills, Charlotte Motor Speedway District, Downtown Concord & Cabarrus County"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Concord NC' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Concord NC Construction Company — Commercial General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving Concord NC and the entire Cabarrus County market. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout Concord Mills, the Charlotte Motor Speedway district, downtown Concord, and surrounding communities. Licensed in NC and SC with 60+ years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Concord is the seat of Cabarrus County and one of the fastest-growing markets in the Charlotte metropolitan area. The city anchors a unique commercial mix: Concord Mills draws over 17 million annual visitors as one of NC&apos;s top tourism destinations, the Charlotte Motor Speedway district hosts a specialized motorsports industrial cluster, and the Atrium Health Cabarrus campus drives steady medical office and healthcare construction. The I-85 corridor through Concord supports significant warehouse, distribution, and light industrial activity, while downtown Concord around Union Street has seen meaningful revitalization through adaptive reuse and new commercial development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves Concord with the same commitment to quality, transparency, and local expertise that defines every project across the Charlotte region. Our team handles work ranging from restaurant build-outs near Concord Mills to medical office construction near Atrium Health Cabarrus, retail renovations along Concord Parkway, and warehouse projects along the I-85 industrial corridor. Whether you are planning a $50,000 commercial upfit or a $2 million ground-up build, We Build delivers the licensing, accountability, and craftsmanship Concord business owners expect.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Concord from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — about 25 miles south of Concord via I-85</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+19804711745">
                    <Phone className="mr-2 h-5 w-5" />(980) 471-1745
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Concord Communities</h3>
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
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Cabarrus County permitting expertise</span></li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Concord NC</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive commercial construction services across Concord, Concord Mills, the Speedway district, and surrounding Cabarrus County. Every project is managed with full accountability from start to finish.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Concord Commercial Construction Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Concord&apos;s commercial activity spans multiple distinct districts, each with its own construction requirements and permitting nuances. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across all of them.
            </p>
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
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Concord Business Districts</h2>
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
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Your Local Construction Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Concord</h2>
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
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to Concord, We Build provides commercial construction services throughout the greater Charlotte region.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Concord Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Concord NC Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience. USGBC member.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a build-out at Concord Mills, a medical office near Atrium Health Cabarrus, or a renovation in downtown Concord, We Build is the Concord general contractor you can trust.
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
