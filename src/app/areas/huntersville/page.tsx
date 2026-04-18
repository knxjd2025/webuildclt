import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Building2,
  Paintbrush,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Ruler,
  HardHat,
  FileCheck,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Landmark,
  Store,
  Hammer,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Huntersville NC | General Contractor Near Lake Norman',
  description:
    'Top-rated construction company near me in Huntersville NC. Veteran-owned general contractor for commercial construction, upfits & roof coatings near Birkdale Village, Northlake, Rosedale. Licensed in NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'construction company huntersville nc',
    'general contractor huntersville',
    'commercial contractor huntersville nc',
    'contractor near me huntersville',
    'construction companies near me',
    'huntersville commercial construction',
    'huntersville remodeling contractor',
    'licensed contractor NC',
    'commercial construction huntersville nc',
    'commercial builder huntersville',
    'contractor near lake norman',
    'huntersville commercial upfits',
    'huntersville renovation contractor',
    'general contractor near me huntersville',
    'construction company near me lake norman',
    'huntersville nc building contractor',
    'birkdale village contractor',
    'northlake mall area construction',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/huntersville',
  },
  openGraph: {
    title: 'Construction Company Huntersville NC | General Contractor Near Lake Norman',
    description:
      'Veteran-owned construction company serving Huntersville NC. Commercial construction near Birkdale Village, Northlake, Rosedale. Licensed in NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction across Huntersville, from ground-up office buildings along the Sam Furr Road corridor to retail spaces near Birkdale Village and medical facilities on Gilead Road. Huntersville sits at the crossroads of I-77 and I-485, making it one of the most strategically located commercial markets in the Charlotte metro. Our team understands Mecklenburg County commercial permitting, Huntersville zoning overlay districts, and the accelerated timelines that business owners in this fast-growing town demand. Whether you are building a new office park or a retail anchor, We Build manages the entire process from site work through certificate of occupancy.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Renovations',
    href: '/services/commercial-upfits',
    description:
      'Huntersville businesses frequently need interior renovations to keep up with rapid growth. We Build provides commercial upfit services throughout Birkdale Village, the Sam Furr Road business corridor, Statesville Road commercial properties, and Northlake area office parks. Our upfit projects range from open-concept office redesigns and medical suite build-outs to restaurant renovations and retail space transformations. We work within occupied buildings when necessary, minimizing disruption to your operations while delivering a finished space that supports your business goals. Most Huntersville commercial upfits are completed in 2 to 5 months depending on scope.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Huntersville commercial building owners save significantly with our elastomeric roof coating systems compared to full roof replacement. We Build applies reflective roof coatings that extend roof life by fifteen to twenty years, reduce energy costs by lowering interior temperatures, and prevent leaks on flat and low-slope commercial roofs. This service is popular with Northlake area retail centers, Sam Furr Road office buildings, and industrial properties along the Statesville Road corridor where roof replacement costs can be prohibitive. A typical commercial roof coating costs 40 to 60 percent less than full replacement.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Huntersville. From initial permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout the project. Our Charlotte-area headquarters means fast response times and deep familiarity with Huntersville building requirements and the Town of Huntersville planning department.',
  },
];

const commercialAreas = [
  {
    name: 'Birkdale Village',
    description:
      'Birkdale Village is Huntersville\'s signature mixed-use lifestyle center, combining retail, restaurants, and office space around a walkable main street. We Build provides commercial construction and tenant upfit services for businesses throughout Birkdale Village and the surrounding commercial properties. The village continues to attract new tenants who need build-out and renovation services that match the center\'s architectural standards and premium positioning. Restaurant build-outs and retail renovations are among the most common project types in this district.',
  },
  {
    name: 'Sam Furr Road Corridor (NC-73)',
    description:
      'The Sam Furr Road corridor from I-77 east through Huntersville has become one of the area\'s busiest commercial thoroughfares. Medical offices, professional services, banks, restaurants, and retail centers line this major east-west route. We Build has extensive experience with commercial construction and upfit projects along Sam Furr Road, where mixed-use developments, medical office buildings, and neighborhood retail centers are among the most common project types. The corridor continues to see strong development as Huntersville\'s population grows.',
  },
  {
    name: 'Northlake Mall Area',
    description:
      'The Northlake Mall area at the intersection of I-77 and I-485 represents one of the largest retail and commercial concentrations in the Charlotte metro\'s northern corridor. Beyond the mall itself, the surrounding area includes major retail power centers, restaurants, hotels, and office buildings. We Build provides commercial construction and renovation services throughout the Northlake district, where tenant improvements, restaurant build-outs, and retail space modernization drive consistent construction demand.',
  },
  {
    name: 'Gilead Road Commercial District',
    description:
      'Gilead Road has emerged as a growing commercial corridor in Huntersville, particularly for medical offices, professional services, and neighborhood retail. New development along Gilead Road reflects Huntersville\'s eastward expansion, with medical facilities, dental offices, and professional service buildings serving the growing communities nearby. We Build provides construction services for new commercial buildings and tenant upfits in this expanding business corridor.',
  },
  {
    name: 'Statesville Road / I-77 Corridor',
    description:
      'The Statesville Road corridor along I-77 through Huntersville serves as a major commercial and light industrial artery. Flex space, warehouse, distribution centers, auto dealerships, and service businesses occupy this corridor. We Build provides commercial construction, warehouse build-outs, and flex space renovations along Statesville Road. The corridor\'s proximity to I-77 makes it attractive for businesses that need logistics access combined with proximity to the Charlotte metro workforce.',
  },
];

const neighborhoods = [
  'Huntersville',
  'Birkdale',
  'Rosedale',
  'Bryton',
  'Skybrook',
  'Vermillion',
  'Northlake',
  'Cedarfield',
  'Gilead Ridge',
  'Wynfield',
  'Becton Park',
  'Highland Creek',
  'Asbury',
  'Torrence Creek',
  'Bradford',
  'Hambright',
];

const businessDistricts = [
  {
    name: 'Birkdale Village',
    type: 'Lifestyle Retail & Mixed-Use',
    activity: 'Ongoing tenant upfits, restaurant build-outs, and retail space renovations in the walkable town center',
  },
  {
    name: 'Sam Furr Road (NC-73) Corridor',
    type: 'Medical & Professional Office',
    activity: 'Medical office construction, dental facility build-outs, professional service suites, and neighborhood retail',
  },
  {
    name: 'Northlake / I-77 & I-485',
    type: 'Regional Retail & Commercial',
    activity: 'Retail renovations, restaurant build-outs, hotel improvements, and office tenant improvements',
  },
  {
    name: 'Statesville Road Commercial',
    type: 'Light Industrial & Flex',
    activity: 'Warehouse construction, flex space build-outs, auto dealership renovations, and service business upfits',
  },
  {
    name: 'Gilead Road Emerging District',
    type: 'Medical & Neighborhood Commercial',
    activity: 'New medical office buildings, dental facilities, and neighborhood retail construction',
  },
  {
    name: 'Bryton Mixed-Use Development',
    type: 'Mixed-Use Town Center',
    activity: 'Commercial tenant upfits, restaurant construction, and retail space customization in walkable development',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte-Area Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273. Huntersville is within our core service area, and our team is on-site quickly for project meetings, inspections, and coordination. We are not a distant company that drives hours to reach your jobsite. We are your local construction partner.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with over 60 years of combined construction experience. The values we bring to every Huntersville project — integrity, accountability, discipline, and craftsmanship — are rooted in military service and family commitment. You deal directly with the owners, not a sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold general contractor licenses in both North Carolina and South Carolina. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction in Huntersville and throughout the Charlotte metropolitan area.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. Huntersville property owners benefit from our knowledge of green building techniques that reduce operating costs and environmental impact.',
  },
  {
    icon: Clock,
    title: 'Huntersville Permitting Expertise',
    description:
      'Years of building in the Charlotte metro have given us strong relationships with Mecklenburg County inspectors and local subcontractors. We know the review process, the common plan review comments, and how to prepare submissions that move through permitting efficiently.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project includes a detailed, line-item estimate with no hidden costs. We explain exactly where every dollar goes, and our change order process is straightforward and documented. Huntersville property owners appreciate knowing exactly what they are paying for before construction begins.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Huntersville NC?',
    answer:
      'We Build provides comprehensive construction services in Huntersville including commercial construction, commercial upfits and renovations, general contracting, and commercial roof coatings. We handle projects from small office upfits to ground-up commercial buildings throughout the Huntersville area. Call (980) 471-1745 for a free consultation on any construction project in Huntersville.',
  },
  {
    question: 'How much does construction cost in Huntersville NC in 2026?',
    answer:
      'Construction costs in Huntersville vary by project type. Commercial office upfits typically range from $50 to $175 per square foot. Retail build-outs run $75 to $200 per square foot. Restaurant construction costs $150 to $350 per square foot. Commercial renovations typically cost $150 to $350 per square foot. We provide detailed, line-item estimates for every project so you know exactly what to expect.',
  },
  {
    question: 'What permits are required for construction in Huntersville?',
    answer:
      'Most construction projects in Huntersville require building permits from Mecklenburg County, with additional approvals from the Town of Huntersville planning department for commercial projects and projects within certain zoning overlay districts. Commercial projects require plan review by the building department, fire marshal review, and sometimes stormwater and zoning review. The Town of Huntersville has its own zoning ordinance and development standards that may add requirements beyond Mecklenburg County baseline. We Build handles all permitting as part of our general contracting services.',
  },
  {
    question: 'How long does a typical construction project take in Huntersville?',
    answer:
      'Project timelines in Huntersville depend on scope and complexity. Commercial upfits typically take 2 to 5 months. Restaurant build-outs require 4 to 8 months. Ground-up commercial construction takes 8 to 14 months depending on size and complexity. Commercial renovations range from 2 to 6 months. Permitting in Mecklenburg County typically adds 4 to 8 weeks before construction can begin. Town of Huntersville zoning review may add additional time for commercial projects. We provide a detailed project schedule at the start of every engagement.',
  },
  {
    question: 'Does We Build work near Lake Norman and Birkdale Village?',
    answer:
      'Yes. We Build serves all of Huntersville including the Birkdale Village area, Northlake, Sam Furr Road corridor, Gilead Road, and the Lake Norman shoreline communities within Huntersville. We provide commercial construction services for businesses throughout these areas. Our team is familiar with the specific architectural standards and community requirements throughout the Huntersville area.',
  },
  {
    question: 'Can We Build construct commercial spaces near Northlake Mall?',
    answer:
      'Absolutely. We Build has experience with commercial construction and tenant upfit projects throughout the Northlake area at the I-77 and I-485 interchange. We handle retail build-outs, restaurant construction, office upfits, and commercial renovations in this major commercial district. The Northlake area is one of the most active commercial construction zones in the northern Charlotte metro, and our team understands the building standards and permitting requirements specific to this location.',
  },
  {
    question: 'Is Huntersville a good area for construction investment?',
    answer:
      'Huntersville is one of the strongest construction markets in the Charlotte metro area. The town has grown from approximately 30,000 residents to over 65,000 in the past two decades, driving consistent demand for commercial construction. The I-77 corridor provides excellent connectivity to Charlotte and Lake Norman. Birkdale Village and the Sam Furr Road corridor continue to attract commercial development. Commercial construction investments in Huntersville benefit from these fundamental growth drivers.',
  },
  {
    question: 'What neighborhoods in Huntersville does We Build serve?',
    answer:
      'We serve all Huntersville neighborhoods and communities including Birkdale, Rosedale, Bryton, Skybrook, Vermillion, Northlake, Cedarfield, Gilead Ridge, Wynfield, Becton Park, Highland Creek, Asbury, Torrence Creek, Bradford, and Hambright. Our service area covers the entire Town of Huntersville from I-485 north to the Lake Norman shoreline. We handle commercial projects throughout these areas.',
  },
  {
    question: 'What types of commercial construction does We Build handle in Huntersville?',
    answer:
      'We Build is a full-service general contractor licensed for commercial construction in North Carolina and South Carolina. Our Huntersville commercial projects include office buildings, retail spaces, restaurants, medical facilities, commercial upfits, and roof coatings. We handle everything from small tenant improvements to ground-up commercial buildings throughout the Huntersville area.',
  },
  {
    question: 'How do I get a construction estimate for a project in Huntersville?',
    answer:
      'Getting a construction estimate from We Build is straightforward. Call us at (980) 471-1745 or visit our contact page at webuildclt.com/contact to request a free consultation. We will schedule a site visit to understand your project scope, discuss your goals and budget, and provide a detailed line-item estimate. There is no obligation and no charge for initial consultations.',
  },
  {
    question: 'How do commercial construction costs in Huntersville compare to Charlotte or Mooresville?',
    answer:
      'Huntersville commercial construction costs are generally in line with Charlotte and slightly below premium Lake Norman markets like Davidson. Office upfits in Huntersville run $50 to $175 per square foot, comparable to South Charlotte. Retail build-outs along Sam Furr Road and Statesville Road average $75 to $200 per square foot. Huntersville falls under Mecklenburg County permitting, which has higher fees than Iredell County where Mooresville is located. We Build provides project-specific estimates that account for these local cost factors.',
  },
  {
    question: 'What green building options does We Build offer for Huntersville projects?',
    answer:
      'As a U.S. Green Building Council (USGBC) member, We Build offers sustainable construction practices for Huntersville commercial projects. This includes energy-efficient HVAC systems, high-performance insulation, LED lighting, low-VOC materials, and water conservation fixtures. Huntersville businesses along the I-77 corridor and in Birkdale Village increasingly seek green building features to attract environmentally conscious tenants and reduce operating costs. We can pursue LEED certification or implement targeted sustainability measures based on your budget and goals.',
  },
  {
    question: 'Does Huntersville have its own zoning rules separate from Mecklenburg County?',
    answer:
      'Yes. While Huntersville uses Mecklenburg County for building inspections and permits, the Town of Huntersville maintains its own zoning ordinance, land development standards, and planning review process. Commercial projects within Huntersville town limits must go through the town planning department for site plan review, which evaluates parking, landscaping, signage, and architectural standards. This is a separate step from Mecklenburg County building permits. We Build manages both the town zoning review and county permitting process as part of our general contracting services, keeping your project on schedule.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Mooresville', href: '/areas/mooresville' },
  { label: 'Matthews', href: '/areas/matthews' },
];

export default function HuntersvillePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Huntersville' },
      ])]} />

      <PageHero
        title="Construction Company Huntersville NC"
        subtitle="General Contractor Near Lake Norman — Birkdale Village, Northlake, Rosedale & Surrounding Communities"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Huntersville' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Huntersville NC Construction Company — Commercial General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Huntersville NC has comprehensive construction services available from We Build, a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving the entire Lake Norman corridor. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout Huntersville, Birkdale Village, Northlake, and surrounding communities. Licensed in NC and SC with over 60 years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Huntersville has emerged as one of the fastest-growing towns in the Charlotte metropolitan area, sitting strategically along the I-77 corridor between Charlotte and Lake Norman. The town&apos;s population has more than doubled in the past two decades, driving an extraordinary level of commercial construction activity. Birkdale Village anchors a thriving mixed-use retail and dining scene. The Sam Furr Road corridor has transformed into a major commercial thoroughfare lined with medical offices, professional services, and neighborhood retail. The Northlake area at I-77 and I-485 continues to evolve as one of the region&apos;s most important commercial hubs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves Huntersville with the same commitment to quality, transparency, and local expertise that has made us a trusted construction partner across the greater Charlotte region. Our team handles projects ranging from corporate office build-outs near Northlake to restaurant construction at Birkdale Village to commercial renovations along the Sam Furr Road corridor. Whether you are planning a $50,000 commercial upfit or a $2 million ground-up commercial build, We Build brings the experience, licensing, and accountability to deliver exceptional results in Huntersville.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Huntersville from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — minutes from Huntersville via I-77</p>
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
                <h3 className="text-xl font-semibold mb-6">Huntersville Communities</h3>
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
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Headquartered at 14330 S Lakes Dr, Charlotte 28273</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Licensed in NC &amp; SC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Veteran &amp; family-owned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>60+ years combined experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>USGBC member</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Commercial construction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Huntersville */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Huntersville NC</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive construction services across Huntersville, Birkdale Village, Northlake, and surrounding communities. Every project is managed by our experienced team with full accountability from start to finish.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">
                        <Link href={service.href} className="hover:text-primary transition-colors">
                          {service.title}
                        </Link>
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

      {/* Huntersville Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Huntersville Commercial Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Huntersville is one of the most active commercial construction markets in the Charlotte metro&apos;s northern corridor. From the mixed-use vibrancy of Birkdale Village to the medical offices along Sam Furr Road to the regional retail hub at Northlake, commercial construction activity in Huntersville is strong and growing. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across every major Huntersville business district. Our understanding of local zoning, Town of Huntersville development standards, and Mecklenburg County commercial permitting makes us the contractor of choice for businesses building in this area.
            </p>

            <div className="space-y-8">
              {commercialAreas.map((area) => (
                <div key={area.name} className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-muted-foreground leading-relaxed">
                Whether you are building a new office on Sam Furr Road, renovating a restaurant at Birkdale Village, or constructing a medical facility on Gilead Road, We Build delivers the commercial construction expertise that Huntersville businesses demand. Visit our <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see examples of our commercial work, or <Link href="/contact" className="text-primary hover:underline">contact us</Link> for a free consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Huntersville Business Districts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Huntersville Business Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Huntersville&apos;s business districts represent some of the most active <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> areas in the northern Charlotte metro. From the walkable lifestyle center at Birkdale Village to the regional commercial hub at Northlake, these districts drive consistent demand for quality commercial general contracting services.
            </p>

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

            <div className="mt-8">
              <p className="text-muted-foreground leading-relaxed">
                If you are planning a commercial construction project in any of these Huntersville business districts, We Build provides the local expertise and general contracting services you need. <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for a free consultation and project estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Your Local Construction Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Huntersville</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From Birkdale Village to Skybrook, Huntersville property owners choose We Build for our local expertise, veteran-owned integrity, and commitment to delivering every project on time and on budget.
            </p>
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

      {/* Other Areas We Serve */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to Huntersville, We Build provides construction services throughout the greater Charlotte region. Our NC and SC licenses allow us to serve clients across a wide area.
            </p>
            <div className="flex flex-wrap gap-3">
              {areaPages.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {area.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                About We Build
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                View Our Portfolio
              </Link>
              <Link
                href="/we-coat"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                We Coat Roof Coatings
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Huntersville Construction FAQ</h2>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Huntersville Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience. USGBC member.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a commercial build-out at Birkdale Village, a restaurant renovation near Northlake, or a medical office upfit on Sam Furr Road, We Build is the Huntersville general contractor you can trust. Contact us today for a free consultation on your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+19804711745">
                <Phone className="mr-2 h-5 w-5" />(980) 471-1745
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
