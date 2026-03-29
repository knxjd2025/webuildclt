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
  Ruler,
  HardHat,
  FileCheck,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Landmark,
  Factory,
  Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Detroit MI | Commercial General Contractor Metro Detroit',
  description:
    'Searching for a commercial contractor near me in Detroit MI? Veteran-owned construction company serving Metro Detroit. Commercial construction, upfits, tenant improvements, warehouse builds, design-build, drone inspections & roof coatings. Licensed general contractor. Free estimates. (704) 574-8124.',
  keywords: [
    'construction company Detroit MI',
    'general contractor Detroit',
    'commercial contractor Detroit',
    'contractor near me Detroit',
    'construction companies near me',
    'Detroit commercial construction',
    'Detroit remodeling contractor',
    'licensed contractor MI',
    'Detroit general contractor',
    'commercial contractor Metro Detroit',
    'design build Detroit Michigan',
    'commercial upfit Detroit',
    'tenant improvement contractor Detroit',
    'tenant improvement Detroit',
    'commercial renovation Detroit MI',
    'drone inspection Detroit',
    'industrial construction Detroit Michigan',
    'warehouse construction Detroit',
    'construction company near me Detroit',
    'commercial general contractor near me Metro Detroit',
    'commercial construction Detroit MI',
    'office buildout Detroit',
    'office build out Detroit',
    'commercial upfit Detroit metro',
    'general contractor Wayne County MI',
    'general contractor Oakland County MI',
    'commercial contractor Dearborn MI',
    'commercial contractor Troy MI',
    'commercial contractor Southfield MI',
    'construction company Auburn Hills MI',
    'commercial construction Hamtramck MI',
    'construction company Sterling Heights MI',
    'warehouse construction Metro Detroit',
    'office to residential conversion Detroit',
    'adaptive reuse contractor Detroit',
    'medical construction Detroit MI',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/detroit',
  },
  openGraph: {
    title: 'Construction Company Detroit MI | Commercial General Contractor Metro Detroit',
    description:
      'Veteran-owned commercial construction company serving Detroit MI and Metro Detroit. Commercial construction, upfits, tenant improvements, design-build, drone inspections & roof coatings. Licensed general contractor.',
    type: 'website',
    url: 'https://webuildclt.com/areas/detroit',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers ground-up commercial construction across the Detroit metro area, from new office buildings in Troy and Southfield to retail developments in Royal Oak and mixed-use projects in Downtown Detroit. Our commercial projects include new construction, building expansions, and full-scope builds for businesses of all sizes. Detroit is experiencing a historic commercial renaissance, and our team brings the experience and discipline needed to deliver projects on time and on budget in this fast-moving market. We handle Michigan commercial permitting, site preparation, and the accelerated timelines that Detroit-area business owners expect.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Renovations',
    href: '/services/commercial-upfits',
    description:
      'Detroit-area businesses frequently need interior renovations to accommodate growth, rebrand, or modernize aging commercial spaces. We Build provides commercial upfit services throughout Metro Detroit including Downtown, Midtown, Dearborn, Troy, Southfield, and Royal Oak. Our upfit projects range from open-concept office redesigns and medical suite build-outs to restaurant renovations and retail space transformations. We work within occupied buildings when necessary, minimizing disruption to your operations while delivering a finished space that supports your business goals in the competitive Detroit market.',
  },
  {
    icon: HardHat,
    title: 'Tenant Improvements',
    href: '/services/tenant-improvements',
    description:
      'Metro Detroit has one of the strongest tenant improvement markets in the Midwest, driven by the revitalization of Downtown Detroit, the suburban office corridors of Troy and Southfield, and the growing retail and restaurant scene in Royal Oak and Ferndale. We Build provides comprehensive tenant improvement services for office, retail, medical, and restaurant spaces. From space planning and permitting through construction and final punch list, we manage the entire TI process so tenants can focus on their business while we deliver their new space.',
  },
  {
    icon: Ruler,
    title: 'Design-Build Services',
    href: '/services/design-build',
    description:
      'Our design-build approach is especially valuable in Detroit where adaptive reuse projects, historic building renovations, and new commercial developments each require careful coordination between design and construction teams. We Build manages the entire project under one contract, from conceptual design and engineering through permitting and construction. This single-source accountability eliminates miscommunication between architects and builders, reduces change orders, and typically saves Metro Detroit property owners ten to fifteen percent compared to the traditional design-bid-build method.',
  },
  {
    icon: Factory,
    title: 'Industrial Construction',
    href: '/services/industrial-construction',
    description:
      'Detroit and Southeast Michigan are home to one of the largest concentrations of industrial facilities in the United States. We Build provides industrial construction services for warehouses, manufacturing facilities, distribution centers, and light industrial buildings throughout the Metro Detroit area. From Warren and Sterling Heights to the I-94 corridor and beyond, our team understands the specialized requirements of industrial construction including heavy floor loads, overhead crane systems, specialized HVAC, and the compliance standards that Michigan industrial facilities demand.',
  },
  {
    icon: Camera,
    title: 'Drone Inspections',
    href: '/services/drone-inspections',
    description:
      'We Build offers FAA-certified thermal drone inspections for commercial and industrial buildings across Michigan. Our drone inspection services are ideal for large-scale roof assessments, building envelope evaluations, and facility condition surveys that would be costly or dangerous to perform manually. Detroit-area property owners use our drone inspections to identify moisture intrusion, insulation failures, and structural concerns before they become expensive repairs. Thermal imaging captures data invisible to the naked eye, providing actionable intelligence for maintenance planning and capital improvement decisions.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Detroit commercial building owners save significantly with our elastomeric roof coating systems compared to full roof replacement. We Build applies reflective roof coatings that extend roof life by fifteen to twenty years, reduce energy costs by lowering interior temperatures, and prevent leaks on flat and low-slope commercial roofs. This service is especially valuable for Detroit-area buildings where harsh Michigan winters and freeze-thaw cycles accelerate roof deterioration. Our coatings provide a seamless, waterproof barrier that protects your investment year-round.',
  },
];

const commercialAreas = [
  {
    name: 'Downtown Detroit / Midtown',
    description:
      'Downtown Detroit and Midtown are the epicenter of the city\'s commercial renaissance. Office renovations, restaurant buildouts, adaptive reuse of historic buildings, and new mixed-use developments are transforming these neighborhoods at a rapid pace. We Build provides commercial construction and upfit services for businesses establishing or expanding in Detroit\'s revitalized urban core. From the RenCen area to Woodward Avenue, the demand for quality commercial general contractors who understand historic building requirements and urban construction logistics continues to grow.',
  },
  {
    name: 'Dearborn',
    description:
      'Dearborn is home to Ford Motor Company\'s world headquarters and a major corridor for automotive industry suppliers, engineering firms, and corporate offices. We Build provides commercial upfits, office construction, and tenant improvements for businesses in the Dearborn area. The ongoing transformation around Michigan Avenue and the Ford campus is creating significant opportunities for commercial construction, including new office spaces, restaurants, and retail developments that serve the area\'s large professional workforce.',
  },
  {
    name: 'Troy / Southfield',
    description:
      'Troy and Southfield form the heart of Metro Detroit\'s suburban office market. The Big Beaver Road corridor in Troy is one of Michigan\'s premier commercial addresses, home to corporate headquarters, financial institutions, and professional service firms. Southfield\'s Town Center area offers Class A office towers and a growing medical district. We Build serves both markets with commercial construction, tenant improvements, and renovation services for office, medical, and retail projects throughout Oakland County.',
  },
  {
    name: 'Royal Oak / Ferndale',
    description:
      'Royal Oak and Ferndale are among Metro Detroit\'s trendiest commercial areas, known for a thriving restaurant and retail scene along Main Street, Woodward Avenue, and Nine Mile Road. We Build provides restaurant buildouts, retail construction, and mixed-use renovations in these walkable, high-demand districts. The area\'s unique character requires contractors who understand the blend of historic storefronts, modern mixed-use development, and the high design standards that businesses in these communities expect.',
  },
  {
    name: 'Warren / Sterling Heights',
    description:
      'Warren and Sterling Heights anchor the northern tier of Metro Detroit\'s industrial economy. General Motors\' Technical Center, Stellantis facilities, and hundreds of Tier 1 and Tier 2 automotive suppliers operate in this corridor. We Build provides industrial construction, warehouse building, manufacturing facility upgrades, and commercial construction throughout Macomb County. The area\'s combination of industrial heritage and modern logistics demand creates steady need for experienced commercial general contractors.',
  },
  {
    name: 'Ann Arbor',
    description:
      'Ann Arbor\'s commercial construction market is driven by the University of Michigan, a growing tech sector, and one of Michigan\'s strongest medical and research corridors. We Build serves the Ann Arbor market with commercial construction, medical facility buildouts, restaurant construction, and office renovations. The Washtenaw Avenue corridor, downtown Ann Arbor, and the university-adjacent research districts offer consistent demand for quality commercial general contracting services.',
  },
  {
    name: 'Eastern Market & New Center',
    description:
      'Eastern Market is one of Detroit\'s most active commercial and food industry districts, home to specialty food producers, restaurants, creative businesses, and year-round market operations. New Center, anchored by the historic Fisher Building and Henry Ford Health System, is a hub for medical office construction, corporate headquarters, and mixed-use development. We Build provides commercial upfits, food facility construction, medical suite buildouts, and adaptive reuse projects for businesses and property owners in these established Detroit neighborhoods.',
  },
  {
    name: 'Hamtramck & Highland Park',
    description:
      'Hamtramck and Highland Park are experiencing renewed commercial investment as developers and business owners recognize the value of these dense urban neighborhoods adjacent to Detroit. Commercial construction activity includes restaurant buildouts, retail space renovations, and mixed-use developments. We Build provides commercial general contracting services in these communities, working within Wayne County permitting requirements and the Detroit metropolitan area building codes.',
  },
  {
    name: 'Auburn Hills',
    description:
      'Auburn Hills is home to Stellantis North American headquarters, Oakland University, and dozens of major automotive OEM and supplier facilities. Commercial construction in Auburn Hills spans corporate headquarters, engineering facilities, technology offices, and industrial builds. We Build provides commercial construction, tenant improvements, and industrial construction services for the Auburn Hills area, where the concentration of major corporate campuses creates ongoing demand for experienced commercial general contractors.',
  },
];

const neighborhoods = [
  'Downtown Detroit',
  'Midtown',
  'Corktown',
  'Eastern Market',
  'New Center',
  'Hamtramck',
  'Dearborn',
  'Troy',
  'Southfield',
  'Auburn Hills',
  'Royal Oak',
  'Ferndale',
  'Warren',
  'Sterling Heights',
  'Ann Arbor',
  'Birmingham',
  'Bloomfield Hills',
  'Novi',
  'Livonia',
  'Plymouth',
];

const businessDistricts = [
  {
    name: 'Downtown Detroit Business District',
    type: 'Urban Mixed-Use & Office',
    activity: 'Adaptive reuse, office renovations, restaurant buildouts, and new mixed-use developments along Woodward Avenue',
  },
  {
    name: 'Dearborn Ford Complex Area',
    type: 'Corporate & Automotive',
    activity: 'Corporate office upfits, engineering facility construction, restaurant and retail buildouts serving automotive workforce',
  },
  {
    name: 'Troy Big Beaver Road Corridor',
    type: 'Class A Office & Corporate',
    activity: 'Corporate headquarters construction, financial institution buildouts, professional office tenant improvements',
  },
  {
    name: 'Southfield Town Center',
    type: 'Office & Medical',
    activity: 'Office tower renovations, medical facility construction, professional service suite buildouts',
  },
  {
    name: 'Royal Oak Main Street',
    type: 'Retail & Restaurant',
    activity: 'Restaurant construction, retail buildouts, mixed-use renovations, and entertainment venue build-outs',
  },
  {
    name: 'Warren Industrial Corridor',
    type: 'Industrial & Manufacturing',
    activity: 'Warehouse construction, manufacturing facility upgrades, distribution center builds, and industrial renovations',
  },
  {
    name: 'Ann Arbor / Washtenaw Avenue',
    type: 'Medical, Tech & University',
    activity: 'Medical facility construction, tech office buildouts, restaurant construction, and research facility renovations',
  },
  {
    name: 'Auburn Hills / Pontiac',
    type: 'Automotive OEM & Corporate',
    activity: 'Corporate headquarters construction, engineering facility upfits, industrial builds, and technology office renovations',
  },
  {
    name: 'Eastern Market / New Center',
    type: 'Food Industry, Medical & Mixed-Use',
    activity: 'Food production facility construction, restaurant buildouts, medical suite renovations, and historic building adaptive reuse',
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with over 60 years of combined construction experience. The values we bring to every project — integrity, accountability, discipline, and craftsmanship — are rooted in military service and family commitment. You deal directly with the owners, not a sales team.',
  },
  {
    icon: TrendingUp,
    title: '60+ Years Combined Experience',
    description:
      'Our leadership team brings over six decades of combined construction experience across commercial, industrial, and institutional projects. This depth of experience means we have encountered and solved virtually every construction challenge, saving Detroit-area clients time and money on their projects.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in Michigan',
    description:
      'We Build holds the required licensing and insurance to perform commercial and residential construction work in the State of Michigan. Our licensing, bonding, and insurance meet or exceed all Michigan requirements for general contracting, giving Detroit-area clients confidence in our qualifications and professionalism.',
  },
  {
    icon: MapPin,
    title: 'Charlotte + Detroit Dual Market',
    description:
      'Our established presence in Charlotte NC and expansion into the Detroit metro area gives us a unique advantage. We bring proven processes, vendor relationships, and construction management systems refined over years of successful projects in one of the Southeast\'s fastest-growing markets — now applied to Metro Detroit.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. Detroit property owners benefit from our knowledge of green building techniques that reduce operating costs and environmental impact — especially important in Michigan\'s climate.',
  },
  {
    icon: Camera,
    title: 'FAA-Certified Drone Inspections',
    description:
      'We Build offers thermal drone inspection services that most general contractors cannot. Our FAA-certified pilots use advanced thermal imaging to inspect roofs, building envelopes, and industrial facilities across Michigan, identifying problems invisible to the naked eye before they become costly repairs.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project includes a detailed, line-item estimate with no hidden costs. We explain exactly where every dollar goes, and our change order process is straightforward and documented. Detroit-area property owners appreciate knowing exactly what they are paying for before construction begins.',
  },
];

const faqs = [
  {
    question: 'Does We Build serve the Detroit Metro Area?',
    answer:
      'Yes, We Build actively serves the entire Detroit metropolitan area. We are a veteran and family-owned construction company expanding from our Charlotte NC headquarters into Metro Detroit to provide commercial construction, tenant improvements, design-build, industrial construction, drone inspections, and roof coating services. Our team is licensed to work in Michigan, and we cover Downtown Detroit, Dearborn, Troy, Southfield, Royal Oak, Ferndale, Warren, Sterling Heights, Ann Arbor, and surrounding communities.',
  },
  {
    question: 'What construction services do you offer in Detroit?',
    answer:
      'We offer seven core construction services in the Detroit metro area. These include commercial construction for new buildings and ground-up projects, commercial upfits and interior renovations, tenant improvements for office, retail, and medical spaces, design-build services for single-source project delivery, industrial construction for warehouses and manufacturing facilities, FAA-certified thermal drone inspections, and commercial roof coating and restoration. Each service is available across the entire Metro Detroit region.',
  },
  {
    question: 'Are you licensed to do construction work in Michigan?',
    answer:
      'Yes. We Build holds the required licensing, insurance, and bonding to perform commercial construction work in the State of Michigan. We are familiar with Michigan building codes, local permitting processes in Wayne County, Oakland County, Macomb County, and Washtenaw County, and the specific inspection requirements that apply to commercial and industrial projects throughout Metro Detroit. Our licensing covers the full scope of general contracting services we offer.',
  },
  {
    question: 'How much does commercial construction cost in Detroit?',
    answer:
      'Commercial construction costs in Metro Detroit vary by project type and scope. Commercial office upfits typically range from $45 to $165 per square foot. Retail buildouts run $70 to $190 per square foot. Restaurant construction costs $140 to $325 per square foot due to specialized mechanical and plumbing requirements. Industrial and warehouse construction ranges from $80 to $200 per square foot depending on specifications. Tenant improvements average $50 to $150 per square foot for standard office spaces. We provide detailed, line-item estimates for every project so you know exactly what to expect before construction begins.',
  },
  {
    question: 'What areas of Metro Detroit do you cover?',
    answer:
      'We Build covers the entire Metro Detroit region. In Wayne County, we serve Downtown Detroit, Midtown, Corktown, Dearborn, Dearborn Heights, Livonia, Plymouth, and Canton. In Oakland County, we serve Troy, Southfield, Royal Oak, Ferndale, Birmingham, Bloomfield Hills, Novi, and Farmington Hills. In Macomb County, we serve Warren, Sterling Heights, Clinton Township, and Shelby Township. We also serve Ann Arbor and the Washtenaw County area. If your project is in Southeast Michigan, we can likely serve you.',
  },
  {
    question: 'How long does a commercial upfit take in Detroit?',
    answer:
      'Commercial upfit timelines in Metro Detroit depend on the size and complexity of the project. A basic office upfit of 2,000 to 5,000 square feet typically takes 6 to 10 weeks. Mid-range renovations of 5,000 to 15,000 square feet usually require 3 to 5 months. Restaurant buildouts take 4 to 7 months due to specialized mechanical, plumbing, and hood systems. Industrial renovations vary widely but typically range from 2 to 6 months. Michigan permitting typically adds 3 to 6 weeks before construction can begin, depending on the municipality. We provide a detailed project schedule at the start of every engagement.',
  },
  {
    question: 'Do you offer drone inspections in Michigan?',
    answer:
      'Yes. We Build provides FAA-certified thermal drone inspections across the State of Michigan. Our drone inspection services use advanced thermal imaging cameras to assess commercial roofs, building envelopes, industrial facilities, and large properties that are difficult or dangerous to inspect manually. Thermal imaging identifies moisture intrusion, insulation deficiencies, air leaks, and structural anomalies invisible to the naked eye. A typical commercial drone inspection costs $1,500 to $5,000 depending on building size and delivers a detailed report with thermal imagery and actionable recommendations within one week.',
  },
  {
    question: 'Is We Build based in Detroit?',
    answer:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273, and is expanding into the Detroit metro market. We are not a Detroit-based company, but we are building an active presence in Southeast Michigan to serve commercial and industrial clients across the metro area. Our Charlotte headquarters gives us access to proven construction management systems, vendor relationships, and operational processes refined over years of successful projects in one of the Southeast\'s fastest-growing markets. Detroit clients get the benefit of that experience applied to their projects.',
  },
  {
    question: 'What industries do you serve in Metro Detroit?',
    answer:
      'We Build serves a wide range of industries across Metro Detroit. Our commercial construction clients include automotive suppliers, manufacturing companies, healthcare providers, professional service firms, restaurants and hospitality businesses, retail operators, technology companies, and educational institutions. Our industrial construction capabilities serve warehousing and distribution, manufacturing, and logistics companies. Our drone inspection services are used by facility managers, property management companies, and building owners across all sectors. Detroit\'s diverse economy means we apply our expertise to virtually every type of commercial and industrial construction project.',
  },
  {
    question: 'How do I get a free estimate for a Detroit construction project?',
    answer:
      'Getting a free estimate from We Build is straightforward. Call us directly at (704) 574-8124 to discuss your project with a member of our team. You can also visit our website at webuildclt.com and fill out the contact form on our contact page with your project details. We will schedule a consultation, visit your site in Metro Detroit, and provide a detailed, line-item estimate at no cost and with no obligation. Most estimates are delivered within one to two weeks of the initial site visit, depending on project complexity.',
  },
  {
    question: 'How do construction costs in Metro Detroit compare to other major Midwest cities?',
    answer:
      'Metro Detroit offers competitive construction costs compared to Chicago, Columbus, and Minneapolis. Commercial office upfits in Detroit run $45 to $165 per square foot, roughly 10 to 20 percent lower than downtown Chicago. Industrial and warehouse construction in Wayne and Oakland counties costs $80 to $200 per square foot, which is favorable compared to most Midwest metros. Detroit labor availability and material costs have stabilized as the market has grown, making it an attractive investment for commercial and industrial construction projects.',
  },
  {
    question: 'Can We Build handle adaptive reuse projects in Detroit neighborhoods like Corktown and Midtown?',
    answer:
      'Yes. Detroit neighborhoods like Corktown, Midtown, Eastern Market, and the Milwaukee Junction area are experiencing a wave of adaptive reuse development, converting historic warehouses, factories, and commercial buildings into modern office spaces, restaurants, and mixed-use properties. We Build provides adaptive reuse construction services including structural reinforcement, code-compliant upgrades, and historic facade preservation. These projects often involve coordination with the Michigan State Historic Preservation Office and Detroit Historic District Commission when tax credits or historic designations apply.',
  },
  {
    question: 'Does We Build offer sustainable or green construction in Metro Detroit?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build integrates sustainable construction practices into Metro Detroit projects. We offer energy-efficient building envelopes optimized for Michigan winters, high-performance HVAC systems, LED lighting, and sustainable material selection. Green building is especially impactful in Michigan where heating costs are a major operating expense. We can pursue LEED certification or implement targeted energy-efficiency upgrades for commercial and industrial projects in Wayne, Oakland, and Macomb counties.',
  },
];

const areaPages = [
  { label: 'Dearborn', href: '/areas/dearborn' },
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Rock Hill SC', href: '/areas/rock-hill-sc' },
];

export default function DetroitPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Detroit' },
      ])]} />

      <PageHero
        title="Construction Company Detroit Metro Area"
        subtitle="Veteran-Owned Commercial General Contractor Expanding from Charlotte NC to Metro Detroit"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Detroit' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Construction Company Serving Metro Detroit, Michigan
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned construction company bringing over 60 years of combined commercial construction experience to the Detroit metro area. We provide commercial construction, tenant improvements, design-build, industrial construction, drone inspections, and roof coating services across Southeast Michigan. Whether you need a ground-up commercial building in Troy, a restaurant buildout in Royal Oak, or an industrial facility upgrade in Warren, our team delivers the quality and accountability that Metro Detroit businesses deserve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Detroit is experiencing one of the most significant commercial construction booms in its history. Downtown and Midtown are being transformed by adaptive reuse projects, new office buildings, and restaurant and retail construction. Dearborn&apos;s Ford campus area is driving major commercial development. Troy and Southfield remain the backbone of suburban office construction in Oakland County. Royal Oak and Ferndale are thriving with restaurant and mixed-use projects. Warren and Sterling Heights continue to anchor Michigan&apos;s industrial economy with warehouse, manufacturing, and distribution facility construction. We Build is expanding into this dynamic market to serve commercial and industrial clients across the entire metro area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services in Metro Detroit include <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits and renovations</Link>, <Link href="/services/tenant-improvements" className="text-primary hover:underline">tenant improvements</Link>, <Link href="/services/design-build" className="text-primary hover:underline">design-build services</Link>, <Link href="/services/industrial-construction" className="text-primary hover:underline">industrial construction</Link>, <Link href="/services/drone-inspections" className="text-primary hover:underline">FAA-certified drone inspections</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link>. With licenses to work in Michigan and a proven track record from our Charlotte NC market, We Build brings disciplined project management, transparent pricing, and veteran-owned integrity to every Detroit-area project.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Metro Detroit</p>
                  <p className="text-sm text-muted-foreground">Headquarters: 14330 S Lakes Drive, Charlotte NC 28273 — Now serving Southeast Michigan</p>
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
                <h3 className="text-xl font-semibold mb-6">Metro Detroit Communities</h3>
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
                    <span>Veteran &amp; family-owned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Licensed in Michigan</span>
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
                    <span>FAA-certified drone inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Commercial &amp; industrial focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Detroit */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Metro Detroit</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive commercial and industrial construction services across the Detroit metropolitan area. Every project is managed with full accountability from start to finish.
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

      {/* Metro Detroit Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Where Do We Build in Metro Detroit?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Metro Detroit is one of the most dynamic commercial construction markets in the Midwest. From Downtown Detroit&apos;s historic renaissance to the suburban office corridors of Oakland County, commercial construction activity spans every corner of Southeast Michigan. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across every major Metro Detroit business district. Our understanding of Michigan building codes, local permitting, and the specific expectations of Detroit-area property owners and tenants makes us a trusted contractor for businesses building and renovating in this region.
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
                Whether you are building a new office in Troy, renovating a restaurant in Royal Oak, or constructing a warehouse in Warren, We Build delivers the commercial construction expertise that Metro Detroit businesses demand. Visit our <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see examples of our commercial work, or <Link href="/contact" className="text-primary hover:underline">contact us</Link> for a free consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detroit Construction Market */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Market Overview</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Is Detroit a Strong Construction Market?</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Metro Detroit is experiencing a construction resurgence driven by billions of dollars in public and private investment. Downtown Detroit alone has seen over $7 billion in development since 2010, with continued growth in office, residential, and mixed-use construction. The automotive industry&apos;s shift toward electric vehicles is generating billions more in manufacturing and industrial facility construction across Southeast Michigan. We Build — a Charlotte-headquartered company with proven commercial construction systems — is expanding into Detroit to serve this growing market.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the most notable trends reshaping Detroit&apos;s built environment is the wave of office-to-residential conversions in Downtown and Midtown. Older commercial office buildings that no longer compete for corporate tenants are being transformed into apartments and mixed-income residential units, creating significant construction and renovation work for experienced contractors. Adjacent to these conversion projects, new commercial retail and restaurant construction is following the residential density increases in neighborhoods like Corktown, Eastern Market, and New Center.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The auto industry facility modernization cycle is also generating substantial construction demand. Stellantis, Ford, GM, and their Tier 1 and Tier 2 suppliers are investing heavily in facility upgrades to accommodate EV production lines, new manufacturing processes, and modern workplace standards. Engineering centers in Auburn Hills and Dearborn are being renovated and expanded. Healthcare campus construction — anchored by Henry Ford Health System, Beaumont, and McLaren — is another durable growth driver, with medical office buildings, outpatient surgery centers, and patient care facilities being built across the metro area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On the commercial side, Downtown and Midtown Detroit continue to attract new businesses, restaurants, and retailers who need buildout and renovation services. The Dearborn area is being reshaped by Ford&apos;s massive campus redevelopment. Troy, Southfield, and Birmingham maintain strong suburban office markets with steady demand for tenant improvements. Royal Oak, Ferndale, and Plymouth are thriving restaurant and retail markets where new openings require experienced buildout contractors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Industrial construction in Metro Detroit is booming. The EV transition, reshoring of manufacturing, and growth of e-commerce logistics are driving demand for new warehouses, manufacturing facilities, and distribution centers throughout Wayne, Oakland, and Macomb counties. Companies need contractors who can deliver industrial projects on tight timelines with the quality standards that modern manufacturing demands.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For construction companies and property owners, the Metro Detroit market offers strong fundamentals with a diverse economic base that extends well beyond the automotive industry. Healthcare, technology, professional services, and advanced manufacturing all contribute to sustained construction demand. We Build enters this market with the experience, discipline, and commitment to quality that Detroit-area clients expect from a general contractor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Your Construction Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Metro Detroit?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build brings veteran-owned integrity, proven construction management systems, and over 60 years of combined experience to every Metro Detroit project.
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

      {/* Michigan Permitting & Licensing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Permitting &amp; Compliance</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Michigan Building Permits &amp; Contractor Licensing</h2>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Commercial construction in Metro Detroit spans multiple permitting jurisdictions — Wayne County, Oakland County, Macomb County, and the City of Detroit each have distinct permitting processes, plan review timelines, and inspection requirements. Navigating this complexity efficiently is critical to keeping construction timelines on track. We Build handles all Michigan permitting as part of our <Link href="/services/general-contractor" className="text-primary hover:underline">general contracting services</Link>, from initial permit applications through final certificate of occupancy.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">City of Detroit &amp; Wayne County</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Commercial construction within the City of Detroit falls under the Detroit Buildings, Safety Engineering, and Environmental Department (BSEED). BSEED reviews commercial plans for building code compliance, fire safety, zoning conformance, and environmental requirements. Detroit commercial permit review typically takes 4 to 10 weeks for standard commercial projects. Historic districts — including areas of Midtown, Corktown, and Downtown — may require additional review from the Historic District Commission (HDC).
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Suburban Wayne County communities including Dearborn, Livonia, Plymouth, and Canton each operate their own building departments with local permit processes. We Build is familiar with the permitting requirements for each municipality and maintains productive working relationships with inspectors throughout Wayne County.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Oakland &amp; Macomb Counties</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Troy, Southfield, Birmingham, Royal Oak, Auburn Hills, and other Oakland County municipalities each administer their own commercial building permit programs. Troy and Southfield maintain active commercial permitting departments with experienced plan reviewers familiar with high-volume office and medical construction. Commercial permit review in Oakland County cities typically takes 3 to 6 weeks for standard tenant improvement projects.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Macomb County communities — Warren, Sterling Heights, Clinton Township, Shelby Township — have their own permitting offices. Warren&apos;s commercial permitting process is well-suited to the high volume of industrial and manufacturing projects in that market. We Build coordinates with all Macomb County building departments throughout the permitting and inspection process.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Michigan Contractor Licensing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Michigan requires contractors performing commercial construction to hold a Michigan Residential Builder License or a Michigan Maintenance &amp; Alteration Contractor License, depending on the project type. Commercial general contracting in Michigan also requires appropriate insurance coverage, including general liability and workers&apos; compensation. We Build maintains all required Michigan licensing and insurance to perform commercial construction throughout the state.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Michigan&apos;s construction licensing is administered by the Bureau of Construction Codes (BCC) under the Department of Licensing and Regulatory Affairs (LARA). All commercial projects must comply with the Michigan Building Code (MBC), which follows the International Building Code (IBC) with Michigan-specific amendments. We Build&apos;s team is well-versed in Michigan code requirements for commercial, industrial, and mixed-use construction projects.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Regardless of which Michigan municipality your project is in, We Build manages the complete permitting process. We prepare permit applications, coordinate plan review submissions, schedule inspections, and resolve code questions throughout construction. Our familiarity with Michigan&apos;s multi-jurisdiction permitting landscape means fewer delays and faster project delivery for Metro Detroit property owners and tenants.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Communities We Serve in Metro Detroit</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build serves communities across Wayne County, Oakland County, Macomb County, and Washtenaw County. Our commercial and industrial construction services cover the entire Southeast Michigan region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Downtown Detroit', desc: 'Adaptive reuse, office renovations, restaurant buildouts, mixed-use' },
              { name: 'Midtown / Corktown', desc: 'Restaurant construction, retail buildouts, creative office spaces' },
              { name: 'Eastern Market', desc: 'Food hall construction, restaurant buildouts, food production facilities' },
              { name: 'New Center', desc: 'Office renovations, medical construction, adaptive reuse projects' },
              { name: 'Hamtramck', desc: 'Commercial construction, mixed-use developments, retail buildouts' },
              { name: 'Dearborn', desc: 'Corporate offices, automotive supplier facilities, commercial upfits' },
              { name: 'Troy', desc: 'Class A office construction, corporate headquarters, medical facilities' },
              { name: 'Southfield', desc: 'Office tower renovations, medical construction, professional suites' },
              { name: 'Auburn Hills', desc: 'Automotive OEM facilities, corporate headquarters, industrial construction' },
              { name: 'Royal Oak', desc: 'Restaurant buildouts, retail construction, mixed-use developments' },
              { name: 'Warren', desc: 'Industrial construction, manufacturing facilities, warehouse builds' },
              { name: 'Sterling Heights', desc: 'Automotive supplier facilities, industrial construction, commercial' },
              { name: 'Ann Arbor', desc: 'Medical facilities, tech offices, university-adjacent commercial' },
              { name: 'Birmingham', desc: 'Upscale retail, restaurant construction, professional office upfits' },
              { name: 'Novi', desc: 'Suburban office, retail centers, medical facility construction' },
              { name: 'Livonia', desc: 'Industrial and commercial construction, office renovations, retail' },
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

      {/* Metro Detroit Business Districts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Metro Detroit Business Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Metro Detroit&apos;s business districts represent some of the most active <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> areas in the Midwest. From adaptive reuse in Downtown Detroit to industrial construction in Warren, these districts drive consistent demand for quality commercial general contracting services.
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
                If you are planning a commercial or industrial construction project in any of these Metro Detroit business districts, We Build provides the expertise and general contracting services you need. <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for a free consultation and project estimate.
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
              In addition to Metro Detroit, We Build provides construction services throughout the greater Charlotte NC region. Our multi-state licensing allows us to serve clients across a wide area.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Detroit Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Metro Detroit Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in Michigan. Over 60 years combined experience. USGBC member.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a commercial buildout in Downtown Detroit, an industrial facility in Warren, or a tenant improvement in Troy, We Build is the general contractor you can trust. Contact us today for a free estimate on your Metro Detroit project.
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
