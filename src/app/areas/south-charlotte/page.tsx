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
  title: 'Construction Company South Charlotte NC | General Contractor Ballantyne, Pineville, Waxhaw',
  description:
    'Looking for a construction company near me in South Charlotte NC? Locally headquartered general contractor serving Ballantyne, Pineville, Waxhaw, Marvin & Weddington. Commercial construction, upfits & roof coatings. Veteran-owned. Free estimates. (704) 574-8124.',
  keywords: [
    'construction company south charlotte nc',
    'general contractor south charlotte',
    'general contractor ballantyne nc',
    'construction company ballantyne nc',
    'commercial construction south charlotte',
    'commercial contractor south charlotte nc',
    'contractor near me south charlotte',
    'construction companies near me',
    'south charlotte commercial construction',
    'south charlotte remodeling contractor',
    'licensed contractor NC',
    'commercial contractor south charlotte nc',
    'contractor pineville nc',
    'construction company waxhaw nc',
    'general contractor weddington nc',
    'commercial construction ballantyne corporate park',
    'commercial construction marvin nc',
    'contractor south charlotte nc',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/south-charlotte',
  },
  openGraph: {
    title: 'Construction Company South Charlotte NC | General Contractor Ballantyne, Pineville, Waxhaw',
    description:
      'Locally headquartered construction company in South Charlotte NC. Commercial construction in Ballantyne, Pineville, Waxhaw, Marvin, Weddington. Veteran-owned.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction across South Charlotte, from ground-up office buildings along the Ballantyne corridor to retail spaces at Carolina Place and medical facilities on Rea Road. Our commercial projects include new construction, tenant improvements, and building expansions for businesses of all sizes. South Charlotte is one of the fastest-growing commercial markets in the entire Charlotte metro, and our team understands the specific requirements of building in this area including Mecklenburg County commercial permitting, stormwater management requirements, and the accelerated timelines that business owners demand.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Renovations',
    href: '/services/commercial-upfits',
    description:
      'South Charlotte businesses frequently need interior renovations to accommodate growth, rebrand, or modernize their spaces. We Build provides commercial upfit services throughout Ballantyne Corporate Park, the Rea Road professional corridor, Pineville business parks, and retail centers across the area. Our upfit projects range from open-concept office redesigns and medical suite build-outs to restaurant renovations and retail space transformations. We work within occupied buildings when necessary, minimizing disruption to your operations while delivering a finished space that supports your business goals.',
  },
  {
    icon: Ruler,
    title: 'Design-Build Services',
    href: '/services/design-build',
    description:
      'Our design-build approach is especially valuable in South Charlotte where lot sizes, setback requirements, and HOA architectural standards vary significantly between communities. We Build manages the entire project under one contract, from conceptual design and engineering through permitting and construction. This single-source accountability eliminates finger-pointing between architects and builders, reduces change orders, and typically saves South Charlotte property owners ten to fifteen percent compared to the traditional design-bid-build method.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'South Charlotte commercial building owners save significantly with our elastomeric roof coating systems compared to full roof replacement. We Build applies reflective roof coatings that extend roof life by fifteen to twenty years, reduce energy costs by lowering interior temperatures, and prevent leaks on flat and low-slope commercial roofs. This service is popular with Ballantyne office buildings, Pineville retail centers, and industrial properties throughout South Charlotte where roof replacement costs can be prohibitive.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in South Charlotte. From initial permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout the project. Our locally headquartered team means faster response times and deeper familiarity with South Charlotte building requirements.',
  },
];

const commercialAreas = [
  {
    name: 'Ballantyne Corporate Park',
    description:
      'The premier office and mixed-use development in South Charlotte, Ballantyne Corporate Park encompasses over 535 acres of Class A office space, hotels, retail, and restaurants. We Build provides commercial construction, upfit, and renovation services for tenants and property owners throughout the park. The corporate park continues to expand with new development phases, creating ongoing demand for commercial general contractors who understand the high standards and architectural requirements of this prestigious business district.',
  },
  {
    name: 'Rea Road Corridor',
    description:
      'The Rea Road corridor from Highway 51 south to Providence Road West has emerged as one of South Charlotte\'s busiest commercial corridors. Medical offices, professional services, restaurants, and retail centers line this thoroughfare. We Build has extensive experience with commercial construction and upfit projects along Rea Road, where mixed-use developments and medical office buildings are among the most common project types.',
  },
  {
    name: 'Pineville & Carolina Place',
    description:
      'Pineville serves as a major retail and commercial hub for South Charlotte, anchored by Carolina Place Mall and surrounded by power centers, restaurants, and service businesses along Park Road and Highway 51. The Pineville area is experiencing significant redevelopment as older retail properties are being renovated or replaced with modern mixed-use projects. We Build provides commercial construction and renovation services throughout Pineville for retail, restaurant, and office projects.',
  },
  {
    name: 'Waverly & Blakeney',
    description:
      'The Waverly mixed-use development near Providence Road and Highway 485 represents the modern face of South Charlotte commercial construction, blending retail, restaurants, office space, and residential units. Blakeney, the established lifestyle center nearby, continues to attract new tenants who need upfit and build-out services. We Build serves both developments with commercial construction and interior renovation expertise.',
  },
  {
    name: 'Ardrey Kell & Community House Road',
    description:
      'The area around Ardrey Kell Road and Community House Road has seen rapid commercial growth with new medical offices, professional services, and neighborhood retail. As South Charlotte residential communities continue to expand southward, commercial development follows to serve the growing population. We Build provides construction services for new commercial buildings and tenant upfits in this emerging business corridor.',
  },
];


const neighborhoods = [
  'Ballantyne',
  'Pineville',
  'Waxhaw',
  'Marvin',
  'Weddington',
  'Providence',
  'Providence Plantation',
  'Ardrey Kell',
  'Myers Park South',
  'Ballantyne Country Club',
  'Piper Glen',
  'Stonecrest',
  'Blakeney',
  'Waverly',
  'Indian Trail',
  'Stallings',
];

const businessDistricts = [
  {
    name: 'Ballantyne Corporate Park',
    type: 'Class A Office & Mixed-Use',
    activity: 'Ongoing new construction and tenant upfits for corporate offices, restaurants, and retail',
  },
  {
    name: 'Carolina Place / Pineville',
    type: 'Regional Retail & Redevelopment',
    activity: 'Retail renovations, restaurant build-outs, and mixed-use redevelopment of older commercial properties',
  },
  {
    name: 'Rea Road Professional Corridor',
    type: 'Medical & Professional Office',
    activity: 'Medical office construction, dental facility build-outs, professional service suites',
  },
  {
    name: 'Waverly Mixed-Use',
    type: 'Lifestyle Retail & Office',
    activity: 'New tenant upfits, restaurant construction, and office space customization',
  },
  {
    name: 'Blakeney Shopping Center',
    type: 'Lifestyle Retail & Dining',
    activity: 'Retail renovations, new restaurant openings, and tenant improvements',
  },
  {
    name: 'Highway 51 Corridor',
    type: 'Commercial & Light Industrial',
    activity: 'Warehouse construction, flex space build-outs, and commercial property improvements',
  },
  {
    name: 'Providence Road West',
    type: 'Emerging Commercial',
    activity: 'New neighborhood retail, medical offices, and professional service buildings',
  },
  {
    name: 'I-485 / Johnston Road',
    type: 'Mixed Commercial',
    activity: 'Office construction, hotel development, and retail build-outs near the interstate corridor',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Headquartered in South Charlotte',
    description:
      'Our office is at 14330 S Lakes Drive, Charlotte NC 28273 — right in the heart of South Charlotte. We are not a company that drives an hour to reach your jobsite. We are your neighbors, and we are invested in the quality of construction in our own community. When you need us on site, we are minutes away.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with over 60 years of combined construction experience. The values we bring to every project — integrity, accountability, discipline, and craftsmanship — are rooted in military service and family commitment. You deal directly with the owners, not a sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve the entire South Charlotte region including areas that cross the state line. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. South Charlotte property owners benefit from our knowledge of green building techniques that reduce operating costs and environmental impact.',
  },
  {
    icon: Clock,
    title: 'Local Relationships & Fast Permitting',
    description:
      'Years of building in South Charlotte have given us strong relationships with Mecklenburg County inspectors, Union County permitting offices, and local subcontractors. We know the review process, the common plan review comments, and how to prepare submissions that move through permitting efficiently.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project includes a detailed, line-item estimate with no hidden costs. We explain exactly where every dollar goes, and our change order process is straightforward and documented. South Charlotte property owners appreciate knowing exactly what they are paying for before construction begins.',
  },
];

const faqs = [
  {
    question: 'Where is We Build headquartered in South Charlotte?',
    answer:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273, in the heart of South Charlotte. Our office is minutes from Ballantyne Corporate Park, Pineville, and the I-485/I-77 interchange. Being locally headquartered means faster response times, shorter travel to jobsites, and a deep understanding of South Charlotte building requirements and community standards.',
  },
  {
    question: 'What South Charlotte neighborhoods and communities does We Build serve?',
    answer:
      'We serve all of South Charlotte including Ballantyne, Pineville, Providence, Providence Plantation, Ardrey Kell, Myers Park South, Piper Glen, Stonecrest, Blakeney, and Waverly in Mecklenburg County. We also serve Waxhaw, Weddington, Marvin, Indian Trail, and Stallings in Union County. Our service area covers the entire South Charlotte region from Highway 51 south to the Union County line and beyond.',
  },
  {
    question: 'What types of construction does We Build handle in South Charlotte?',
    answer:
      'Yes. We Build is a full-service general contractor licensed for commercial construction in North Carolina and South Carolina. Our South Charlotte commercial projects include office buildings, retail spaces, restaurants, medical facilities, commercial upfits, design-build, and roof coating. We serve businesses of all sizes throughout the South Charlotte area.',
  },
  {
    question: 'How much does construction cost in South Charlotte in 2026?',
    answer:
      'Construction costs in South Charlotte vary by project type. Commercial office upfits typically range from $50 to $175 per square foot. Retail build-outs run $75 to $200 per square foot. Restaurant construction costs $150 to $350 per square foot. Commercial renovations typically cost $150 to $350 per square foot. We provide detailed, line-item estimates for every project so you know exactly what to expect.',
  },
  {
    question: 'What permits are required for construction in South Charlotte?',
    answer:
      'Most construction projects in South Charlotte require building permits from Mecklenburg County (City of Charlotte jurisdiction) or Union County (for Waxhaw, Weddington, and Marvin). Commercial projects require commercial building permits, which include plan review by the building department, fire marshal review, and sometimes stormwater and zoning review. We Build handles all permitting as part of our general contracting services, including plan preparation, submission, and coordination with inspectors throughout the project.',
  },
  {
    question: 'How long does a typical construction project take in South Charlotte?',
    answer:
      'Project timelines in South Charlotte depend on scope and complexity. Commercial upfits typically take 2 to 5 months. Restaurant build-outs require 4 to 8 months. Ground-up commercial construction takes 8 to 14 months depending on size and complexity. Commercial renovations range from 2 to 6 months. Permitting in Mecklenburg County typically adds 4 to 8 weeks before construction can begin. Union County permitting timelines are similar. We provide a detailed project schedule at the start of every engagement.',
  },
  {
    question: 'Can We Build construct commercial spaces in Ballantyne Corporate Park?',
    answer:
      'Absolutely. We Build has extensive experience with commercial construction and tenant upfit projects in Ballantyne Corporate Park and throughout the greater Ballantyne area. We understand the architectural standards, finish expectations, and coordinated construction requirements of the corporate park. Whether you need an office build-out, restaurant construction, or retail space renovation in Ballantyne, our team delivers the quality that this premier business district demands.',
  },
  {
    question: 'Does We Build serve Waxhaw, Weddington, and Marvin?',
    answer:
      'Yes. We Build serves businesses throughout Union County including Waxhaw, Weddington, and Marvin. These communities have specific zoning and building requirements that differ from Mecklenburg County. Our team is experienced with Union County permitting and inspections, and we deliver commercial construction projects that meet the highest standards.',
  },
  {
    question: 'Is We Build licensed for construction in both Mecklenburg and Union Counties?',
    answer:
      'Yes. We Build holds general contractor licenses in North Carolina and South Carolina. Our NC license covers all work in Mecklenburg County (Charlotte, Pineville) and Union County (Waxhaw, Weddington, Marvin, Indian Trail, Stallings). We are familiar with the permitting processes, inspection requirements, and building code interpretations in both counties, which is essential for South Charlotte projects that span the county line.',
  },
  {
    question: 'What makes South Charlotte a good area for construction investment?',
    answer:
      'South Charlotte is one of the strongest construction markets in the Charlotte metro area. Ballantyne Corporate Park continues to attract major employers. The Rea Road and Providence Road corridors are seeing new medical and professional office development. Pineville is experiencing significant commercial redevelopment. Communities in Waxhaw, Weddington, and Marvin continue to grow, driving demand for commercial services. The I-485 outer belt provides excellent connectivity. Commercial construction investments in South Charlotte benefit from these fundamental growth drivers.',
  },
  {
    question: 'How does a commercial upfit in Ballantyne compare to one in Pineville?',
    answer:
      'Ballantyne and Pineville have different cost profiles and finish expectations. Ballantyne Corporate Park projects typically require Class A finishes, running $100 to $175 per square foot for upfits, while Pineville commercial spaces along Highway 51 and Park Road often range from $50 to $120 per square foot with more functional finishes. Ballantyne also has stricter architectural review standards. We Build works in both areas and tailors our approach to the specific market expectations and landlord requirements of each location.',
  },
  {
    question: 'What green building certifications does We Build offer for South Charlotte projects?',
    answer:
      'As a U.S. Green Building Council (USGBC) member, We Build offers sustainable construction options for South Charlotte commercial projects. We can pursue LEED certification, implement energy-efficient building envelope systems, and specify high-performance HVAC and lighting. Green building is increasingly important for Mecklenburg County commercial properties, where tenants and corporate employers in Ballantyne and the Providence Road corridor actively seek energy-efficient spaces that reduce operating costs and meet corporate sustainability goals.',
  },
  {
    question: 'Does We Build handle restaurant construction along South Charlotte corridors like Rea Road and Highway 51?',
    answer:
      'Yes. We Build provides full-service restaurant construction along South Charlotte commercial corridors including Rea Road, Highway 51, Providence Road, and Johnston Road. Restaurant builds in South Charlotte typically cost $150 to $350 per square foot and require specialized hood ventilation, grease traps, fire suppression systems, and health department approvals through Mecklenburg County. We coordinate all inspections and ensure compliance with Charlotte-Mecklenburg zoning requirements for food service establishments.',
  },
];

const areaPages = [
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Matthews', href: '/areas/matthews' },
  { label: 'Huntersville', href: '/areas/huntersville' },
  { label: 'Mooresville', href: '/areas/mooresville' },
  { label: 'Rock Hill SC', href: '/areas/rock-hill-sc' },
];

export default function SouthCharlottePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'South Charlotte' },
      ])]} />

      <PageHero
        title="Construction Company South Charlotte NC"
        subtitle="General Contractor Ballantyne, Pineville, Waxhaw — Headquartered in South Charlotte"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'South Charlotte' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Locally Headquartered Construction Company in South Charlotte
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                South Charlotte is not just where We Build works — it is where we live, where our families go to school, and where our office is located at 14330 S Lakes Drive, Charlotte NC 28273. As a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> headquartered in the heart of South Charlotte, we bring an unmatched level of local knowledge, community investment, and professional accountability to every construction project in this area. When you hire We Build, you are hiring neighbors who care about the quality of construction in our own community as much as you do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                South Charlotte has emerged as one of the most dynamic construction markets in the entire Charlotte metropolitan area. The Ballantyne corridor alone accounts for billions of dollars in commercial real estate, with ongoing development of office buildings, mixed-use projects, restaurants, and retail spaces. Along Rea Road and Providence Road, medical offices and professional service buildings are being constructed at a pace that reflects the area&apos;s population growth. Pineville is experiencing a renaissance of commercial redevelopment as aging retail properties are transformed into modern mixed-use developments. And in the growing communities of Waxhaw, Weddington, and Marvin, commercial development continues to follow population growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves this entire region with comprehensive construction services including <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits and renovations</Link>, <Link href="/services/design-build" className="text-primary hover:underline">design-build services</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link>. With over 60 years of combined experience and licenses in both North Carolina and South Carolina, our team handles projects ranging from corporate office build-outs in Ballantyne Corporate Park to restaurant construction in Pineville to medical facilities along Rea Road. Whatever you are building in South Charlotte, We Build has the expertise, the local knowledge, and the commitment to quality to deliver exceptional results.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Locally Headquartered</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — in the heart of South Charlotte</p>
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
                    <Phone className="mr-2 h-5 w-5" />(704) 574-8124
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">South Charlotte Communities</h3>
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

      {/* Construction Services in South Charlotte */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in South Charlotte</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive construction services across South Charlotte, Ballantyne, Pineville, Waxhaw, and surrounding communities. Every project is managed by our locally headquartered team with full accountability from start to finish.
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

      {/* South Charlotte Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">South Charlotte Commercial Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              South Charlotte is the commercial engine of the Charlotte metro&apos;s southern growth corridor. From the corporate offices of Ballantyne to the retail redevelopment in Pineville, commercial construction activity in South Charlotte is among the strongest in the region. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across every major South Charlotte business district. Our understanding of local zoning, commercial permitting, and the specific expectations of South Charlotte property owners and tenants makes us the contractor of choice for businesses building and renovating in this area.
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
                Whether you are building a new office in Ballantyne, renovating a restaurant in Pineville, or constructing a medical facility on Rea Road, We Build delivers the commercial construction expertise that South Charlotte businesses demand. Visit our <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see examples of our commercial work, or <Link href="/contact" className="text-primary hover:underline">contact us</Link> for a free consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* South Charlotte Construction Market */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Market Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">South Charlotte Construction Market</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                South Charlotte continues to be one of the most active construction markets in the Charlotte metropolitan area, driven by sustained population growth, strong employment centers, top-rated schools, and excellent transportation connectivity via I-485 and I-77. The area&apos;s commercial construction market sees significant activity across multiple sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On the commercial side, Ballantyne Corporate Park remains the anchor of South Charlotte business activity, with ongoing development of office space, hotels, restaurants, and mixed-use projects. The corporate park&apos;s success has spurred commercial development along surrounding corridors including Johnston Road, Rea Road, and Community House Road. Pineville&apos;s commercial market is experiencing a generational shift as older retail properties are being redeveloped into modern mixed-use projects that combine retail, dining, and residential uses. Medical and professional office construction along Rea Road and Providence Road continues to grow as healthcare providers follow population expansion.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The growing population in Waxhaw, Weddington, and Marvin drives strong demand for commercial construction as new retail centers, medical offices, and professional service buildings follow population expansion. Within Mecklenburg County, renovation and tenant improvement projects in established Ballantyne and Providence corridors represent a significant portion of commercial construction activity as businesses update and expand their spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For construction companies and property owners, the South Charlotte market offers strong fundamentals but also demands quality. The area&apos;s affluent demographics, involved HOAs, and high property values mean that substandard construction work is not tolerated. We Build thrives in this environment because our commitment to craftsmanship and customer service aligns perfectly with what South Charlotte expects from a general contractor.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in South Charlotte</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              There are many general contractors who will drive to South Charlotte for a project. We Build is the one that is already here. Our headquarters, our reputation, and our commitment are rooted in this community.
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

      {/* Building Codes & Permits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Permitting &amp; Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">South Charlotte Building Codes &amp; Permits</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Construction projects in South Charlotte fall under multiple jurisdictions depending on location, which creates complexity that requires a contractor with local expertise. We Build navigates the permitting requirements of each jurisdiction as part of our general contracting services, ensuring your project is fully compliant from foundation to certificate of occupancy.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Mecklenburg County / City of Charlotte</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Most of South Charlotte within Mecklenburg County falls under City of Charlotte jurisdiction for building permits. This includes Ballantyne, the Rea Road corridor, Ardrey Kell, Providence, and parts of Pineville. The Charlotte-Mecklenburg permitting process includes plan review by the building department, fire marshal review for commercial projects, stormwater review for projects that disturb land, and zoning verification. Commercial projects typically require 4 to 8 weeks for plan review. Residential permits can be faster depending on project scope.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Town of Pineville operates its own planning and zoning department but uses Mecklenburg County for building inspections. Projects within Pineville town limits may require additional approvals from the Pineville planning board, particularly for commercial construction and projects that require rezoning or special use permits.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Union County (Weddington, Waxhaw, Marvin)</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      South Charlotte communities south of the Mecklenburg County line — including Weddington, Waxhaw, and Marvin — fall under Union County building jurisdiction. Union County has its own building inspection department, permitting process, and code interpretations that differ from Mecklenburg County in several important ways.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Weddington and Marvin have minimum lot size requirements and architectural standards that exceed typical Charlotte zoning. Some parcels in these areas still require well and septic systems rather than municipal water and sewer, adding design and permitting requirements. Waxhaw has its own planning department with specific architectural guidelines for construction within the town limits. We Build is experienced with all Union County permitting requirements and maintains productive relationships with Union County inspectors.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Regardless of jurisdiction, We Build handles all permitting as part of our <Link href="/services/general-contractor" className="text-primary hover:underline">general contracting services</Link>. We prepare permit applications, coordinate plan submissions, schedule inspections, and resolve any code-related questions throughout the construction process. Our familiarity with both Mecklenburg and Union County processes means fewer delays and faster project completion for South Charlotte property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Communities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Service Area</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neighborhoods &amp; Communities We Serve</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build serves every neighborhood and community in the South Charlotte region, from established Mecklenburg County subdivisions to growing Union County towns. Our local headquarters means we are never far from your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Ballantyne', desc: 'Corporate park, country club homes, mixed-use developments' },
              { name: 'Pineville', desc: 'Retail redevelopment, commercial construction, tenant improvements' },
              { name: 'Waxhaw', desc: 'Commercial growth, new developments, charming downtown' },
              { name: 'Marvin', desc: 'Estate homes, two-acre lots, equestrian properties' },
              { name: 'Weddington', desc: 'Growing commercial area, top-rated schools, rural character' },
              { name: 'Providence', desc: 'Established area, commercial renovations, tenant improvements' },
              { name: 'Myers Park South', desc: 'Historic character, renovations, infill construction' },
              { name: 'Ardrey Kell', desc: 'Growing area, new commercial development' },
              { name: 'Piper Glen', desc: 'Golf community homes, renovations, custom builds' },
              { name: 'Stonecrest', desc: 'Established community, home improvements, additions' },
              { name: 'Indian Trail', desc: 'New developments, commercial growth, retail construction' },
              { name: 'Stallings', desc: 'Growing community, commercial development, retail spaces' },
            ].map((area) => (
              <Card key={area.name}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm">{area.name}</p>
                      <p className="text-xs text-muted-foreground">{area.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* South Charlotte Business Districts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">South Charlotte Business Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              South Charlotte&apos;s business districts represent some of the most active <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> areas in the Charlotte metro. From Class A corporate offices in Ballantyne to retail redevelopment in Pineville, these districts drive consistent demand for quality commercial general contracting services.
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
                If you are planning a commercial construction project in any of these South Charlotte business districts, We Build provides the local expertise and general contracting services you need. <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for a free consultation and project estimate.
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
              In addition to South Charlotte, We Build provides construction services throughout the greater Charlotte region. Our NC and SC licenses allow us to serve clients across a wide area.
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
                href="/design-center"
                className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Design Center
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">South Charlotte Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your South Charlotte Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Locally headquartered. Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a commercial build-out in Ballantyne, a tenant improvement in Pineville, or a renovation in Providence, We Build is the South Charlotte general contractor you can trust. Contact us today for a free estimate on your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+17045748124">
                <Phone className="mr-2 h-5 w-5" />(704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
