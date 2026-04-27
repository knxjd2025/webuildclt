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
  title: 'Gastonia NC Construction Company | Gaston County GC',
  description:
    'Gastonia NC construction company serving Belmont, Mount Holly, Lowell. Commercial construction, upfits, roof coating. Veteran-owned, licensed NC & SC.',
  keywords: [
    'construction company gastonia nc',
    'general contractor gastonia nc',
    'commercial contractor gastonia nc',
    'contractor near me gastonia',
    'construction companies near me gastonia',
    'gastonia commercial construction',
    'gaston county general contractor',
    'commercial builder gastonia',
    'gastonia remodeling contractor',
    'gastonia commercial upfits',
    'gastonia renovation contractor',
    'commercial construction gastonia nc',
    'gastonia nc building contractor',
    'belmont nc commercial construction',
    'mount holly construction company',
    'fuse district gastonia construction',
    'loray mill renovation contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/gastonia',
  },
  openGraph: {
    title: 'Gastonia NC Construction Company | Gaston County GC',
    description:
      'Veteran-owned construction company serving Gastonia NC and Gaston County. Commercial construction, upfits & roof coatings. Licensed NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers ground-up commercial construction throughout Gastonia — from new retail and restaurant developments along Cox Road and Franklin Boulevard to medical facilities near CaroMont Regional Medical Center and industrial buildings along the I-85 corridor west of Charlotte. Gastonia is the seat of Gaston County and the largest city in the western Charlotte metropolitan area, with a diverse commercial mix that includes the revitalizing FUSE downtown district, manufacturing heritage assets like Loray Mill, neighborhood retail along Garrison Boulevard, and growing healthcare campuses. Our team understands City of Gastonia and Gaston County permitting, the Loray Mill / FUSE district overlay considerations for adaptive-reuse projects, and the construction standards that apply along the I-85 industrial spine.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Tenant Improvements',
    href: '/services/commercial-upfits',
    description:
      'Gastonia businesses regularly need interior renovations to support new tenants, refresh aging spaces, or convert historic buildings to modern commercial use. We Build provides commercial upfit services throughout the FUSE District, downtown Gastonia, the Cox Road corridor, the Franklin Boulevard retail strip, and the East Ozark Avenue medical district. Our upfit projects range from open-concept office redesigns and restaurant build-outs to medical suite construction, retail tenant improvements, and adaptive reuse of historic textile-mill buildings. Most Gastonia commercial upfits complete in 2 to 5 months depending on scope and historic-building considerations.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Gastonia commercial property owners save 40 to 60 percent versus full roof replacement with our elastomeric and silicone roof coating systems. We Build applies reflective coatings that extend roof life by 15 to 20 years, reduce summer cooling costs, and prevent leaks on flat and low-slope commercial roofs. This service is particularly valuable for the large industrial and former-textile-mill roofs throughout Gastonia, the warehouse buildings along the I-85 corridor, and the strip retail centers along Cox Road and Franklin Boulevard. A typical Gastonia commercial roof coating completes in 2 to 5 days with no interior business disruption.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Gastonia. From initial Gaston County permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout. Our Charlotte-area headquarters at 14330 S Lakes Drive places us about 25 miles east of Gastonia via I-85 — close enough for fast on-site response and consistent project supervision.',
  },
];

const commercialAreas = [
  {
    name: 'FUSE District / Downtown Gastonia',
    description:
      'The FUSE District is downtown Gastonia\'s revitalized mixed-use core, anchored by the FUSE entertainment and retail development on Franklin Boulevard. Adaptive reuse of historic buildings, new restaurants, breweries, professional offices, and boutique retail are driving significant commercial activity in the district. We Build provides historic-renovation expertise, ground-up infill construction, and commercial upfits throughout the FUSE District and surrounding downtown blocks. Historic-district considerations often require careful coordination with the City of Gastonia planning department.',
  },
  {
    name: 'Loray Mill Adaptive Reuse District',
    description:
      'Loray Mill on West Franklin Boulevard is a former textile mill complex transformed into one of the most ambitious adaptive-reuse projects in the Carolinas, combining loft apartments, restaurants, offices, and event space inside the historic mill structure. The surrounding district has attracted complementary commercial development. We Build offers adaptive-reuse construction expertise for buildings like Loray Mill — handling structural reinforcement of historic timber and masonry, modern mechanical and electrical retrofits inside historic shells, and ADA upgrades that preserve historic character.',
  },
  {
    name: 'Cox Road Commercial Corridor',
    description:
      'Cox Road is one of Gastonia\'s busiest commercial corridors, hosting retail centers, restaurants, professional offices, banks, and big-box retail anchors. The corridor extends from the I-85 interchange south through major shopping districts and continues to attract new commercial development. We Build provides commercial construction and tenant upfit services throughout the Cox Road corridor, including ground-up retail buildings, restaurant build-outs, and office tenant improvements.',
  },
  {
    name: 'Franklin Boulevard / US-29-74 Corridor',
    description:
      'Franklin Boulevard (US-29-74) runs east-west through Gastonia and connects downtown to the I-85 interchange. The corridor hosts a mix of older commercial buildings, newer retail centers, automotive dealerships, restaurants, and the entry to the FUSE District. We Build provides commercial construction and upfit services along Franklin Boulevard, including dealership renovations, retail center modernization, and restaurant build-outs.',
  },
  {
    name: 'CaroMont Regional Medical District',
    description:
      'The CaroMont Regional Medical Center campus on East Ozark Avenue anchors a growing medical district that includes physician offices, outpatient clinics, dental practices, urgent care centers, physical therapy facilities, and medical specialty buildings. We Build constructs and renovates medical and dental facilities in this district to meet healthcare-specific code requirements including HIPAA-compliant layouts, infection control, medical gas systems, and ADA accessibility.',
  },
];

const neighborhoods = [
  'Gastonia',
  'Belmont',
  'Mount Holly',
  'Lowell',
  'Cramerton',
  'McAdenville',
  'Bessemer City',
  'Dallas',
  'Stanley',
  'High Shoals',
  'Ranlo',
  'Spencer Mountain',
  'Ozark',
  'Robinson',
  'Crowders Mountain',
  'South New Hope',
];

const businessDistricts = [
  {
    name: 'FUSE District / Downtown Gastonia',
    type: 'Mixed-Use & Adaptive Reuse',
    activity: 'Historic building renovation, restaurant build-outs, brewery construction, professional office upfits, and boutique retail',
  },
  {
    name: 'Loray Mill / West Franklin',
    type: 'Adaptive Reuse & Mixed-Use',
    activity: 'Historic mill conversions, loft and live-work build-outs, event space construction, and supporting retail',
  },
  {
    name: 'Cox Road Commercial',
    type: 'Retail & Restaurant',
    activity: 'Big-box retail, restaurant build-outs, banking, professional offices, and neighborhood shopping centers',
  },
  {
    name: 'CaroMont Regional Medical District',
    type: 'Healthcare & Medical Office',
    activity: 'Medical office construction, dental and orthodontic build-outs, physical therapy, urgent care, and outpatient clinics',
  },
  {
    name: 'I-85 Industrial Corridor',
    type: 'Light Industrial & Distribution',
    activity: 'Warehouse construction, distribution centers, flex space, and manufacturing facility build-outs',
  },
  {
    name: 'Franklin Boulevard (US-29-74)',
    type: 'Mixed Commercial',
    activity: 'Auto dealerships, retail centers, restaurants, and service businesses along the east-west commercial spine',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte Metro Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273 — about 25 miles east of Gastonia via I-85. We are a true regional contractor, not an out-of-state firm, and our team responds quickly to Gastonia jobsites for project meetings, inspections, and coordination.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned construction company with 60+ years of combined experience. Gastonia property owners deal directly with the owners — not a sales team. Integrity, accountability, and craftsmanship are foundational to every contract we sign.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold active general contractor licenses in both North Carolina (NCLBGC) and South Carolina. Verify our NC license at nclbgc.org. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction in Gastonia and throughout Gaston County.',
  },
  {
    icon: Landmark,
    title: 'Adaptive Reuse Experience',
    description:
      'Gastonia&apos;s commercial revitalization is driven heavily by adaptive reuse of historic textile-mill and downtown buildings. We Build has experience converting historic structures to modern commercial use while preserving character and meeting current code requirements.',
  },
  {
    icon: Clock,
    title: 'Gaston County Permitting Expertise',
    description:
      'We understand the City of Gastonia planning department, Gaston County building inspections, and the historic-district overlays that affect FUSE and Loray Mill area projects. We know how to prepare submissions that move through review efficiently.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project starts with a detailed, line-item estimate. No hidden costs, no vague allowances, no surprise change orders. Gastonia property owners know exactly where every dollar goes before construction begins.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Gastonia NC?',
    answer:
      'We Build provides comprehensive commercial construction services in Gastonia including ground-up commercial construction, commercial upfits and tenant improvements, general contracting, commercial renovations, adaptive reuse of historic buildings, and roof coating. We handle projects from small office upfits to large industrial buildings throughout Gastonia, the FUSE District, Loray Mill area, and surrounding Gaston County. Call (980) 471-1745 for a free Gastonia construction consultation.',
  },
  {
    question: 'How much does commercial construction cost in Gastonia NC in 2026?',
    answer:
      'Commercial construction costs in Gastonia vary by project type. Office upfits typically run $50 to $175 per square foot. Retail build-outs cost $75 to $200 per square foot. Restaurant construction averages $150 to $350 per square foot due to commercial kitchens and ventilation. Adaptive reuse of historic buildings like those in the FUSE and Loray Mill districts can range from $125 to $300 per square foot depending on structural and code-upgrade scope. Ground-up commercial construction in Gastonia generally runs $140 to $290 per square foot, often slightly below comparable Charlotte projects.',
  },
  {
    question: 'Does We Build handle adaptive reuse and historic-mill renovations in Gastonia?',
    answer:
      'Yes. Adaptive reuse is one of Gastonia&apos;s most active commercial construction categories, particularly around the Loray Mill and FUSE District. We Build has experience converting historic textile-mill buildings, downtown commercial structures, and warehouse spaces to modern commercial uses. This work requires structural assessment of historic timber and masonry, modern mechanical and electrical retrofits inside historic shells, code-compliant accessibility upgrades that preserve historic character, and coordination with the City of Gastonia historic-preservation review when applicable.',
  },
  {
    question: 'What permits are required for commercial construction in Gastonia?',
    answer:
      'Most commercial construction in Gastonia requires building permits from Gaston County, with additional plan and zoning review from the City of Gastonia planning department. Commercial projects typically require building plan review, fire marshal review, and may include stormwater and zoning review. Projects within designated historic districts (Loray Mill area, downtown FUSE District) may require additional preservation review. We Build handles all permitting and inspections as part of our general contracting services.',
  },
  {
    question: 'How long does a typical commercial project take in Gastonia NC?',
    answer:
      'Project timelines depend on scope. Commercial office upfits typically take 2 to 5 months from contract to certificate of occupancy. Restaurant build-outs require 4 to 8 months due to kitchen, ventilation, and health department coordination. Adaptive reuse of historic buildings can take 8 to 18 months depending on structural scope. Roof coating projects complete in 2 to 5 days. Gaston County and City of Gastonia permitting typically adds 4 to 8 weeks before construction can begin.',
  },
  {
    question: 'Does We Build work in Belmont, Mount Holly, and other Gaston County towns?',
    answer:
      'Yes. Our Gastonia service area extends throughout Gaston County including Belmont, Mount Holly, Lowell, Cramerton, McAdenville, Bessemer City, Dallas, Stanley, High Shoals, Ranlo, and surrounding communities. Belmont and Mount Holly in particular have seen significant commercial growth driven by their proximity to Charlotte and the US National Whitewater Center. We Build provides commercial construction, upfits, and roof coatings throughout these areas with the same level of service as our Gastonia core market.',
  },
  {
    question: 'What neighborhoods in Gastonia does We Build serve?',
    answer:
      'We serve the entire City of Gastonia and Gaston County including downtown Gastonia, the FUSE District, Loray Mill area, Ozark, Robinson, Crowders Mountain, South New Hope, and adjoining towns of Belmont, Mount Holly, Lowell, Cramerton, McAdenville, Bessemer City, Dallas, Stanley, High Shoals, Ranlo, and Spencer Mountain.',
  },
  {
    question: 'How do Gastonia commercial construction costs compare to Charlotte?',
    answer:
      'Gastonia commercial construction costs are typically 5 to 15 percent below comparable Charlotte projects, primarily due to lower Gaston County permit fees, slightly lower labor rates outside the Charlotte core, and lower land costs for ground-up projects. Restaurant and medical specialty projects may carry similar costs to Charlotte due to specialty trade requirements regardless of location. We provide project-specific estimates that account for local cost factors.',
  },
  {
    question: 'Is We Build a licensed general contractor in Gastonia NC?',
    answer:
      'Yes. We Build holds an active North Carolina general contractor license issued by the NC Licensing Board for General Contractors (NCLBGC), which authorizes commercial general contracting work throughout the entire state including Gastonia and all of Gaston County. Verify our NC license status at nclbgc.org. We also hold a South Carolina contractor license, which allows us to coordinate seamlessly when Gastonia clients have additional projects across the state line.',
  },
  {
    question: 'How do I get a construction estimate for a project in Gastonia NC?',
    answer:
      'Getting a free Gastonia construction estimate from We Build is simple. Call (980) 471-1745 or visit our contact page to request a consultation. We will schedule a site visit to understand your project scope, discuss goals and budget, and provide a detailed line-item estimate. There is no obligation and no charge for initial consultations.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Huntersville', href: '/areas/huntersville' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Concord', href: '/areas/concord' },
  { label: 'Rock Hill SC', href: '/areas/rock-hill-sc' },
];

export default function GastoniaPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Gastonia NC' },
      ])]} />

      <PageHero
        title="Construction Company Gastonia NC"
        subtitle="Commercial General Contractor — FUSE District, Loray Mill, Cox Road & Gaston County"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Gastonia NC' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Gastonia NC Construction Company — Commercial General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving Gastonia NC and the entire Gaston County market. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout the FUSE District, Loray Mill area, Cox Road corridor, and surrounding Gaston County communities. Licensed in NC and SC with 60+ years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gastonia is the seat of Gaston County and the largest city in the western Charlotte metropolitan area, with a unique commercial mix grounded in textile-manufacturing heritage and powered by ongoing revitalization. The downtown FUSE District has emerged as one of the most active mixed-use districts in the western Carolinas, anchored by the FUSE entertainment development on Franklin Boulevard. The Loray Mill adaptive-reuse project demonstrates the city&apos;s commitment to preserving historic character while attracting modern commercial tenants. Cox Road and Franklin Boulevard host strong retail and restaurant corridors, while the I-85 industrial spine continues to support warehouse and distribution development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves Gastonia with the same commitment to quality, transparency, and local expertise that defines every project across the Charlotte region. Our team handles work ranging from adaptive reuse of historic mill buildings to ground-up retail construction along Cox Road, restaurant build-outs in the FUSE District, medical office construction near CaroMont Regional, and warehouse projects along the I-85 corridor. Whether you are converting a historic mill, building a new retail center, or upfitting a downtown restaurant space, We Build delivers the licensing, accountability, and craftsmanship Gastonia business owners expect.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Gastonia from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — about 25 miles east of Gastonia via I-85</p>
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
                <h3 className="text-xl font-semibold mb-6">Gaston County Communities</h3>
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
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Adaptive reuse experience</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>Veteran &amp; family-owned</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>60+ years combined experience</span></li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /><span>USGBC member</span></li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Gastonia NC</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gastonia Commercial Construction Districts</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Gastonia Business Districts</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Gastonia</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gastonia Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Gastonia NC Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Adaptive reuse expertise. 60+ years combined experience. USGBC member.
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
