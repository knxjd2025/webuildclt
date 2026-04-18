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
  title: 'Construction Company Matthews NC | General Contractor Matthews & Mint Hill',
  description:
    'Searching for a construction company near me in Matthews NC? Veteran-owned general contractor serving Matthews, Mint Hill, Indian Trail & Stallings. Commercial construction, upfits & roof coatings. Licensed in NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'construction company matthews nc',
    'general contractor matthews',
    'commercial contractor matthews nc',
    'contractor near me matthews',
    'construction companies near me',
    'matthews commercial construction',
    'matthews remodeling contractor',
    'licensed contractor NC',
    'commercial construction matthews nc',
    'contractor mint hill nc',
    'matthews renovation contractor',
    'commercial builder matthews nc',
    'indian trail construction company',
    'general contractor near me matthews nc',
    'construction company near me mint hill',
    'stallings nc contractor',
    'matthews commercial upfits',
    'independence blvd construction matthews',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/matthews',
  },
  openGraph: {
    title: 'Construction Company Matthews NC | General Contractor Matthews & Mint Hill',
    description:
      'Veteran-owned construction company serving Matthews NC. Commercial construction in Matthews, Mint Hill, Indian Trail, Stallings. Licensed in NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction across Matthews and the surrounding area, from ground-up office buildings along Independence Boulevard to retail spaces in downtown Matthews and medical facilities on Matthews-Mint Hill Road. Matthews sits at the intersection of several major corridors including Independence Boulevard, Matthews-Mint Hill Road, and NC-51, making it a strategically important commercial market in eastern Mecklenburg County. Our team understands Mecklenburg County commercial permitting, Town of Matthews development standards, and the specific requirements for building in this established yet growing community.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Renovations',
    href: '/services/commercial-upfits',
    description:
      'Matthews businesses frequently need interior renovations to modernize or expand their operations. We Build provides commercial upfit services throughout downtown Matthews, the Independence Boulevard corridor, Matthews-Mint Hill Road commercial properties, and Sardis Road North business parks. Our upfit projects range from open-concept office redesigns and medical suite build-outs to restaurant renovations and retail space transformations. Many Matthews commercial properties are 20 to 30 years old, creating strong demand for modernization and renovation. Most commercial upfits in the Matthews area are completed in 2 to 5 months.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Matthews commercial building owners save significantly with our elastomeric roof coating systems compared to full roof replacement. We Build applies reflective roof coatings that extend roof life by fifteen to twenty years, reduce energy costs, and prevent leaks on flat and low-slope commercial roofs. This service is popular with Independence Boulevard commercial properties, downtown Matthews retail buildings, and industrial properties in the Matthews-Mint Hill corridor. A typical commercial roof coating costs 40 to 60 percent less than full replacement and can be completed in days rather than weeks.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Matthews and surrounding communities. From initial permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout the project. Our familiarity with both Mecklenburg County and Union County permitting processes is essential for projects in the Matthews area where jurisdictions meet.',
  },
];

const commercialAreas = [
  {
    name: 'Downtown Matthews',
    description:
      'Downtown Matthews has experienced a revitalization that has transformed the historic town center into a vibrant mix of restaurants, shops, professional offices, and community spaces. The town center district features charming streetscapes and a walkable layout that attracts small businesses and restaurateurs who need build-out and renovation services. We Build provides commercial construction and tenant upfit services throughout downtown Matthews, where preserving the area\'s character while modernizing commercial spaces requires a contractor with attention to detail and experience working within established districts.',
  },
  {
    name: 'Independence Boulevard Corridor',
    description:
      'Independence Boulevard (US-74) is the major commercial artery running through Matthews, connecting the town to Charlotte to the west and Monroe to the east. The corridor is lined with retail centers, auto dealerships, office buildings, restaurants, and service businesses. Commercial redevelopment and renovation activity along Independence Boulevard is strong as older properties are updated to meet modern standards. We Build provides commercial construction and renovation services for businesses throughout this busy corridor, from tenant improvements in existing strip centers to ground-up commercial construction.',
  },
  {
    name: 'Matthews-Mint Hill Road',
    description:
      'Matthews-Mint Hill Road serves as a major connector between Matthews and Mint Hill, with growing commercial development along its length. Medical offices, professional services, restaurants, and neighborhood retail centers have expanded along this corridor as the population in both towns has grown. We Build has experience with commercial construction and upfit projects along Matthews-Mint Hill Road, where mixed-use developments and medical office buildings are increasingly common project types.',
  },
  {
    name: 'Sardis Road North Corridor',
    description:
      'The Sardis Road North corridor connects Matthews to the broader South Charlotte market, with commercial and professional office development serving the surrounding communities. Medical offices, dental practices, financial services, and neighborhood retail are the primary commercial uses along this corridor. We Build provides construction services for new commercial buildings and tenant upfits in this established business area.',
  },
  {
    name: 'McKee Road & Idlewild Area',
    description:
      'The McKee Road and Idlewild Road intersection area has seen significant commercial growth, with new retail centers, restaurants, and professional offices serving the growing communities of eastern Matthews, Indian Trail, and Stallings. This area straddles the Mecklenburg-Union County line, requiring a contractor experienced with both jurisdictions. We Build provides commercial construction and renovation services throughout this expanding commercial district.',
  },
];

const neighborhoods = [
  'Matthews',
  'Mint Hill',
  'Indian Trail',
  'Stallings',
  'Idlewild',
  'Sardis',
  'Windsor Park',
  'Crestdale',
  'Weddington',
  'Wesley Chapel',
  'McKee Road',
  'Crown Point',
  'Bain Creek',
  'Plantation Walk',
  'Saddlewood',
  'Stevens Grove',
];

const businessDistricts = [
  {
    name: 'Downtown Matthews',
    type: 'Historic Town Center & Mixed-Use',
    activity: 'Restaurant build-outs, retail renovations, office upfits, and adaptive reuse of historic commercial buildings',
  },
  {
    name: 'Independence Blvd (US-74) Corridor',
    type: 'Regional Commercial & Retail',
    activity: 'Retail center renovations, auto dealership improvements, restaurant construction, and commercial redevelopment',
  },
  {
    name: 'Matthews-Mint Hill Road',
    type: 'Medical & Professional Office',
    activity: 'Medical office construction, dental facility build-outs, professional service suites, and neighborhood retail',
  },
  {
    name: 'Sardis Road North',
    type: 'Professional Office & Retail',
    activity: 'Office tenant improvements, medical facility build-outs, and small retail construction',
  },
  {
    name: 'McKee Road Commercial Center',
    type: 'Emerging Retail & Mixed-Use',
    activity: 'New retail construction, restaurant build-outs, and commercial tenant improvements at the Mecklenburg-Union County line',
  },
  {
    name: 'Mint Hill Town Center',
    type: 'Neighborhood Commercial',
    activity: 'Small-scale retail construction, restaurant renovations, and professional office upfits serving the Mint Hill community',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte-Area Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273. Matthews is within our core service area, and our team reaches Matthews-area jobsites quickly for project meetings, inspections, and coordination. We are your local construction partner with deep knowledge of the Matthews market.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with over 60 years of combined construction experience. The values we bring to every Matthews project — integrity, accountability, discipline, and craftsmanship — are rooted in military service and family commitment. You deal directly with the owners, not a sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold general contractor licenses in both North Carolina and South Carolina. Our licensing, insurance, and bonding meet or exceed all requirements for commercial construction in Matthews, Mint Hill, Indian Trail, Stallings, and throughout the Charlotte metropolitan area.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. Matthews-area property owners benefit from our knowledge of green building techniques that reduce operating costs and environmental impact.',
  },
  {
    icon: Clock,
    title: 'Multi-Jurisdiction Permitting',
    description:
      'The Matthews area spans Mecklenburg County and Union County jurisdictions, each with different permitting processes, code interpretations, and inspection requirements. We Build navigates both seamlessly, having built strong relationships with inspectors and planning departments in both counties. This cross-jurisdiction expertise eliminates delays and confusion for our clients.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project includes a detailed, line-item estimate with no hidden costs. We explain exactly where every dollar goes, and our change order process is straightforward and documented. Matthews-area property owners appreciate knowing exactly what they are paying for before construction begins.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Matthews NC?',
    answer:
      'We Build provides comprehensive construction services in Matthews including commercial construction, commercial upfits and renovations, general contracting, and commercial roof coatings. We serve Matthews, Mint Hill, Indian Trail, and Stallings with the same level of quality and commitment. Call (980) 471-1745 for a free consultation on any construction project in the Matthews area.',
  },
  {
    question: 'How much does construction cost in Matthews NC in 2026?',
    answer:
      'Construction costs in Matthews vary by project type. Commercial office upfits typically range from $50 to $175 per square foot. Retail build-outs run $75 to $200 per square foot. Restaurant construction costs $150 to $350 per square foot. Ground-up commercial construction ranges from $150 to $350 per square foot depending on complexity. Commercial renovations typically cost $150 to $350 per square foot. We provide detailed, line-item estimates for every project.',
  },
  {
    question: 'What permits are required for construction in Matthews NC?',
    answer:
      'Most construction projects in Matthews require building permits from Mecklenburg County, with additional review by the Town of Matthews planning department for projects within town limits. Projects in Indian Trail and Stallings fall under Union County building jurisdiction, which has its own permitting process and code interpretations. Commercial projects require plan review, fire marshal review, and potentially stormwater and zoning review. We Build handles all permitting across both Mecklenburg and Union County as part of our general contracting services.',
  },
  {
    question: 'How long does a typical construction project take in Matthews?',
    answer:
      'Project timelines in Matthews depend on scope and complexity. Commercial upfits typically take 2 to 5 months. Restaurant build-outs require 4 to 8 months. Ground-up commercial construction takes 8 to 14 months depending on size and complexity. Commercial renovations range from 2 to 6 months. Permitting adds 4 to 8 weeks before construction can begin. Union County permitting timelines for Indian Trail and Stallings projects are similar. We provide a detailed project schedule at the start of every engagement.',
  },
  {
    question: 'Does We Build serve Mint Hill and Indian Trail as well as Matthews?',
    answer:
      'Yes. We Build serves the entire Matthews area including Mint Hill, Indian Trail, Stallings, and surrounding communities. Our service area covers eastern Mecklenburg County and western Union County. We are familiar with the permitting processes, building codes, and inspection requirements in both counties, which is essential for this area where jurisdictions overlap. Whether your project is in downtown Matthews, Mint Hill, or Indian Trail, we provide the same level of service and expertise.',
  },
  {
    question: 'Can We Build handle commercial construction in downtown Matthews?',
    answer:
      'Absolutely. We Build has experience with commercial construction and tenant upfit projects in downtown Matthews and throughout the greater Matthews area. Downtown Matthews has specific development standards and architectural guidelines that our team understands. We handle restaurant build-outs, retail renovations, office upfits, and adaptive reuse of existing commercial buildings in the downtown district. Our work in downtown areas requires careful coordination to minimize impact on neighboring businesses and the public.',
  },
  {
    question: 'What is the difference between building in Mecklenburg County versus Union County?',
    answer:
      'Matthews and Mint Hill fall under Mecklenburg County building jurisdiction, while Indian Trail and Stallings fall under Union County. The two counties have different permitting processes, plan review timelines, code interpretations, and inspection procedures. Union County generally has different setback requirements and may have different stormwater management standards. Some Union County parcels may require well and septic instead of municipal utilities. We Build is experienced with both jurisdictions and handles the permitting differences seamlessly for our clients.',
  },
  {
    question: 'Is Matthews a good area for construction investment?',
    answer:
      'Matthews and the surrounding area represent one of the strongest construction markets in eastern Charlotte. Downtown Matthews has experienced significant revitalization, attracting new restaurants and businesses. Independence Boulevard continues to drive commercial development and redevelopment. Indian Trail and Stallings are among the fastest-growing towns in Union County with strong demand for new commercial space. The area benefits from proximity to Charlotte employment centers, quality schools, and relatively affordable land compared to other parts of the metro. Commercial construction investments in the Matthews area benefit from these fundamental growth drivers.',
  },
  {
    question: 'Does We Build serve Indian Trail and Stallings?',
    answer:
      'Yes. We Build provides commercial construction services throughout Union County including Indian Trail and Stallings. These growing communities have specific building requirements under Union County jurisdiction that differ from Mecklenburg County, including different setback standards and potentially different utility requirements. Our team is experienced with Union County permitting and inspections, ensuring a smooth construction process for commercial projects in these rapidly growing areas.',
  },
  {
    question: 'How do I get a construction estimate for a project in Matthews?',
    answer:
      'Getting a construction estimate from We Build is straightforward. Call us at (980) 471-1745 or visit our contact page at webuildclt.com/contact to request a free consultation. We will schedule a site visit to understand your project scope, discuss your goals and budget, and provide a detailed line-item estimate. There is no obligation and no charge for initial consultations.',
  },
  {
    question: 'How do commercial construction costs in Matthews compare to South Charlotte or Indian Trail?',
    answer:
      'Commercial construction costs in Matthews, South Charlotte, and Indian Trail are generally comparable, with minor differences driven by jurisdiction. Matthews and Mint Hill fall under Mecklenburg County permitting, which has slightly higher fees than Union County where Indian Trail is located. Office upfits across all three areas run $50 to $175 per square foot. Retail build-outs along Independence Boulevard in Matthews tend to be more cost-effective than South Charlotte due to lower lease rates driving different finish expectations. We Build provides location-specific estimates for each area.',
  },
  {
    question: 'Does We Build offer green building or LEED-certified construction in Matthews?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build provides sustainable construction options for Matthews area projects. We offer energy-efficient building systems, high-performance insulation, LED lighting packages, low-VOC finishes, and water conservation fixtures. Green building practices are increasingly valued by businesses along the Independence Boulevard corridor and in downtown Matthews, where property owners seek to reduce operating costs and attract environmentally conscious tenants. We can pursue LEED certification or implement targeted sustainability upgrades based on your budget.',
  },
  {
    question: 'What types of commercial construction does We Build handle along the Independence Boulevard corridor in Matthews?',
    answer:
      'We Build provides full-service commercial construction along the Independence Boulevard (US-74) corridor through Matthews and Mint Hill. This includes retail build-outs, restaurant construction, medical office upfits, auto service facilities, and commercial renovations. The Independence Boulevard corridor is one of eastern Mecklenburg County\'s most active commercial zones with ongoing redevelopment. Our team is experienced with the Mecklenburg County and Town of Matthews permitting requirements specific to this corridor, including access management standards and stormwater regulations.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Huntersville', href: '/areas/huntersville' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Mooresville', href: '/areas/mooresville' },
  { label: 'Rock Hill SC', href: '/areas/rock-hill-sc' },
];

export default function MatthewsPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Matthews' },
      ])]} />

      <PageHero
        title="Construction Company Matthews NC"
        subtitle="General Contractor Matthews, Mint Hill, Indian Trail & Stallings — Licensed in NC & SC"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Matthews' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Matthews NC Construction Company — Commercial General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Matthews NC has comprehensive construction services available from We Build, a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving eastern Mecklenburg County and western Union County. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout Matthews, Mint Hill, Indian Trail, Stallings, and surrounding communities. Licensed in NC and SC with over 60 years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Matthews has established itself as one of the most charming and desirable communities in the Charlotte metro area, balancing a historic downtown core with modern commercial growth and thriving neighborhoods. The town&apos;s location along Independence Boulevard provides direct connectivity to Uptown Charlotte, while Matthews-Mint Hill Road links to the growing communities of Mint Hill to the north. To the south and east, Indian Trail and Stallings in Union County have experienced explosive growth, creating a combined market of over 150,000 residents who need quality commercial construction services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves this entire region with the commitment to quality, transparency, and local expertise that has made us a trusted construction partner across greater Charlotte. Our team handles projects ranging from restaurant build-outs in downtown Matthews to commercial renovations along Independence Boulevard to medical office construction in Mint Hill. Whether you are planning a $75,000 office upfit or a $1.5 million ground-up commercial build, We Build brings the experience, licensing, and multi-jurisdiction permitting knowledge to deliver exceptional results in the Matthews area.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Matthews from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — quick access to Matthews via I-485 & Independence Blvd</p>
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
                <h3 className="text-xl font-semibold mb-6">Matthews Area Communities</h3>
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
                    <span>Mecklenburg &amp; Union County expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Matthews */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Matthews NC</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive construction services across Matthews, Mint Hill, Indian Trail, Stallings, and surrounding communities. Every project is managed by our experienced team with full accountability from start to finish.
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

      {/* Matthews Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Matthews Area Commercial Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Matthews area is experiencing steady commercial growth driven by population expansion in eastern Mecklenburg and western Union counties. From the revitalized downtown Matthews district to the busy Independence Boulevard corridor to the emerging commercial centers along McKee Road, commercial construction activity is consistent and growing. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across every major Matthews-area business district. Our experience with both Mecklenburg and Union County permitting makes us uniquely qualified for projects in this multi-jurisdiction market.
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
                Whether you are building a new restaurant in downtown Matthews, renovating retail space on Independence Boulevard, or constructing a medical office on Matthews-Mint Hill Road, We Build delivers the commercial construction expertise that Matthews-area businesses demand. Visit our <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see examples of our commercial work, or <Link href="/contact" className="text-primary hover:underline">contact us</Link> for a free consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matthews Business Districts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Matthews Area Business Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Matthews area&apos;s business districts represent a mix of established commercial corridors and emerging growth centers. From the historic downtown district to the regional commercial spine of Independence Boulevard, these areas drive consistent demand for quality <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and renovation services.
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
                If you are planning a commercial construction project in any of these Matthews-area business districts, We Build provides the local expertise and general contracting services you need. <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for a free consultation and project estimate.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Matthews</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From downtown Matthews to Indian Trail, property owners choose We Build for our multi-jurisdiction expertise, veteran-owned integrity, and commitment to delivering every project on time and on budget.
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
              In addition to Matthews, We Build provides construction services throughout the greater Charlotte region. Our NC and SC licenses allow us to serve clients across a wide area.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Matthews Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Matthews Area Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience. USGBC member.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a commercial build-out in downtown Matthews, an office upfit along Independence Boulevard, or a renovation in Mint Hill, We Build is the general contractor you can trust. Contact us today for a free consultation on your project.
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
