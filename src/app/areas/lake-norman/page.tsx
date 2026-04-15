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
  Waves,
  Ruler,
  FileText,
  TreePine,
  TrendingUp,
  Users,
  Award,
  HardHat,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Lake Norman NC | General Contractor Cornelius, Davidson, Mooresville',
  description:
    'Trusted construction company near me in Lake Norman NC. Licensed general contractor serving Cornelius, Davidson, Mooresville & Huntersville. Commercial construction, upfits & roof coating. 60+ years combined experience. Free consultation.',
  keywords: [
    'construction company lake norman nc',
    'general contractor lake norman',
    'general contractor cornelius nc',
    'commercial contractor lake norman',
    'contractor near me lake norman',
    'construction companies near me',
    'lake norman commercial construction',
    'lake norman remodeling contractor',
    'licensed contractor NC',
    'commercial construction davidson nc',
    'commercial contractor mooresville nc',
    'waterfront construction lake norman',
    'construction company mooresville nc',
    'building contractor huntersville nc',
    'lake norman commercial contractor',
    'lakefront commercial construction nc',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/lake-norman',
  },
  openGraph: {
    title: 'Construction Company Lake Norman NC | General Contractor Cornelius, Davidson, Mooresville',
    description:
      'Licensed NC general contractor serving Lake Norman communities. Commercial construction, commercial upfits, and design-build. 60+ years combined experience.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'Lake Norman is one of the fastest-growing commercial markets north of Charlotte. From ground-up retail and office buildings along the Exit 28 corridor in Cornelius to mixed-use developments in downtown Davidson, our commercial construction team delivers projects that meet the demands of this thriving business community. We handle site preparation, structural work, mechanical and electrical systems, finish-out, and final inspections. Our experience with Mecklenburg and Iredell County commercial permitting means fewer delays and a smoother path from blueprint to certificate of occupancy. Whether you are developing a medical office near Lake Norman Regional Medical Center or a restaurant space in the Birkdale Village area, We Build brings the expertise your commercial project requires.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    href: '/services/commercial-upfits',
    description:
      'The Lake Norman business landscape changes rapidly, and commercial spaces need to keep pace. Our commercial upfit services transform existing retail, office, and industrial spaces to match your brand and operational needs. We work with business owners and property managers across Cornelius, Davidson, Mooresville, and Huntersville to reconfigure floor plans, upgrade finishes, improve ADA compliance, and modernize building systems. From a boutique retail upfit in Birkdale Village to a full office renovation in the Northlake area, we manage every detail including permits, inspections, and tenant coordination to minimize disruption to your business operations.',
  },
  {
    icon: HardHat,
    title: 'Design-Build',
    href: '/services/design-build',
    description:
      'Our design-build approach streamlines your Lake Norman construction project by combining architectural design and construction under a single contract. This method reduces miscommunication between designers and builders, keeps timelines shorter, and gives you a single point of accountability. For Lake Norman homeowners and business owners who want a collaborative process from concept through completion, design-build is often the most efficient path. Visit our design center to explore materials, finishes, and layouts before construction begins.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Commercial and industrial buildings around Lake Norman face significant weathering from North Carolina sun, humidity, and seasonal storms. Our roof coating services through our We Coat division extend the life of existing commercial roofs by up to 15 years at a fraction of the cost of a full replacement. We apply high-performance elastomeric and silicone coatings that seal leaks, reflect UV rays, and reduce cooling costs. This service is ideal for flat and low-slope roofs on warehouses, retail centers, and office buildings throughout the Lake Norman business corridors.',
  },
  {
    icon: Ruler,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed North Carolina general contractor, We Build manages the full scope of construction projects in the Lake Norman area. From initial planning and permitting through construction and final walkthrough, we coordinate subcontractors, manage schedules, enforce quality standards, and keep your project on budget. Our general contracting services cover commercial and mixed-use projects across Cornelius, Davidson, Mooresville, Huntersville, and surrounding Lake Norman communities. We bring 60 years of combined experience and a commitment to transparent communication on every project.',
  },
];

const commercialAreas = [
  {
    name: 'Birkdale Village & Exit 28 Corridor',
    description:
      'The Birkdale Village area in Huntersville and the Exit 28 corridor along I-77 represent one of the most active commercial zones in the Lake Norman region. This mixed-use district features retail, dining, entertainment, and office space that continues to expand. We Build provides commercial construction and upfit services for businesses looking to establish or renovate spaces in this high-traffic area. The proximity to I-77 and Northlake Mall makes this corridor attractive for retailers, medical practices, and professional service firms.',
  },
  {
    name: 'Downtown Davidson',
    description:
      'Davidson maintains a distinctive small-town character with strict architectural guidelines and a walkable downtown core. Commercial projects in Davidson require sensitivity to the town\'s historic fabric and compliance with specific design standards. We Build works with Davidson businesses on new construction, renovations, and upfits that honor the community\'s character while meeting modern commercial needs. From restaurants on Main Street to professional offices near Davidson College, we understand what it takes to build in Davidson.',
  },
  {
    name: 'Mooresville Business District',
    description:
      'Mooresville has emerged as a major commercial hub with significant growth along the I-77 corridor and throughout the town\'s expanding business parks. Known as "Race City USA" for its motorsports industry, Mooresville also supports a diverse economy including manufacturing, technology, healthcare, and retail. We Build serves Mooresville businesses with ground-up commercial construction, tenant upfits, and facility renovations. Our experience with Iredell County permitting and inspections ensures efficient project delivery in this rapidly growing market.',
  },
  {
    name: 'Cornelius & Northlake Area',
    description:
      'Cornelius sits at the southern gateway to Lake Norman and features a growing commercial landscape anchored by the Northlake Mall area and the Jetton Road corridor. This community has seen steady growth in medical offices, professional services, restaurants, and retail. We Build provides commercial construction and upfit services for Cornelius businesses, from small office renovations to major new builds. Our familiarity with Mecklenburg County commercial permitting and the specific requirements of the Cornelius zoning ordinances streamlines the construction process for business owners.',
  },
];

const communities = [
  {
    name: 'Cornelius',
    description:
      'Located on the southern shore of Lake Norman, Cornelius is a thriving town in Mecklenburg County with a population that has grown significantly over the past two decades. The community features a vibrant commercial district along with established neighborhoods. Cornelius operates under Mecklenburg County building jurisdiction, and We Build maintains strong working relationships with local inspectors and planning staff. We serve Cornelius businesses with commercial construction, upfits, renovations, and roof coating services.',
  },
  {
    name: 'Davidson',
    description:
      'Davidson is a charming college town on the eastern shore of Lake Norman known for Davidson College, its walkable downtown, and its commitment to preserving community character. Building in Davidson often involves specific architectural standards and design review processes. We Build has experience working within Davidson\'s unique planning framework to deliver commercial projects that meet the town\'s expectations. From downtown commercial renovations to office construction, we bring the attention to detail that Davidson demands.',
  },
  {
    name: 'Mooresville',
    description:
      'Mooresville is the largest community on Lake Norman, located in Iredell County with a rapidly expanding commercial base. The town offers active business parks and a growing retail landscape. Mooresville operates under Iredell County building codes, which differ from Mecklenburg County in several important ways. We Build understands these differences and navigates Iredell County permitting efficiently. We serve Mooresville with commercial construction, upfits, design-build, and our full range of construction services.',
  },
  {
    name: 'Huntersville',
    description:
      'Huntersville anchors the southeastern corner of the Lake Norman area and is one of the fastest-growing towns in North Carolina. With major retail centers, business parks, and growing communities, Huntersville offers strong demand for commercial construction. We Build serves Huntersville businesses from our nearby Charlotte headquarters. Whether you need a commercial upfit near Northlake Mall or an office build-out in a Huntersville business park, our team delivers quality construction with local knowledge.',
  },
  {
    name: 'Denver & Sherrills Ford',
    description:
      'Denver and Sherrills Ford are located on the western shore of Lake Norman in Lincoln and Catawba counties, respectively. These communities offer a growing commercial base as population expansion drives demand for new retail and professional services. Construction in Denver and Sherrills Ford often involves coordination with Lincoln or Catawba County building departments. We Build serves businesses in these western Lake Norman communities with commercial construction and general contracting services.',
  },
];

const whyChooseReasons = [
  {
    icon: Award,
    title: 'Local Lake Norman Knowledge',
    description:
      'We understand the unique building requirements across Mecklenburg, Iredell, Lincoln, and Catawba counties. From waterfront regulations to HOA architectural standards, our local knowledge prevents costly surprises.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured in NC',
    description:
      'We Build holds an active North Carolina general contractor license and carries comprehensive insurance. We are a USGBC member committed to sustainable building practices.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'As a veteran and family-owned company, we bring military discipline, integrity, and accountability to every Lake Norman project. Our reputation in this community matters to us personally.',
  },
  {
    icon: TrendingUp,
    title: '60+ Years Combined Experience',
    description:
      'Our team brings over six decades of combined construction experience spanning commercial and specialty projects. We have built in conditions and jurisdictions across the greater Charlotte region.',
  },
  {
    icon: CheckCircle,
    title: 'Full-Service General Contractor',
    description:
      'From initial design consultation through final walkthrough, We Build manages every aspect of your construction project. One company, one point of contact, one commitment to quality.',
  },
  {
    icon: HardHat,
    title: 'On-Time, On-Budget Delivery',
    description:
      'We use detailed project scheduling, transparent budgeting, and proactive communication to keep your Lake Norman project on track. No surprises, no hidden costs, no excuses.',
  },
];

const faqs = [
  {
    question: 'Do you build on lakefront properties at Lake Norman?',
    answer:
      'Yes. We Build has experience with construction in lakefront areas around Lake Norman including The Peninsula, Jetton Park, Northington, and waterfront locations in Mooresville and Denver. We understand the unique requirements of lakefront construction including dock permits from Duke Energy, erosion control measures, FEMA flood zone compliance, and shoreline setback regulations. Our team coordinates with environmental consultants, marine contractors, and local building officials to ensure your project meets all applicable requirements.',
  },
  {
    question: 'What areas around Lake Norman do you serve?',
    answer:
      'We serve all Lake Norman communities including Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford, Troutman, and Terrell. This covers construction projects in Mecklenburg County, Iredell County, Lincoln County, and Catawba County. Our Charlotte headquarters at 14330 S Lakes Drive is approximately 25 to 40 minutes from most Lake Norman locations, allowing us to efficiently manage projects throughout the region.',
  },
  {
    question: 'How far is Lake Norman from your office?',
    answer:
      'Lake Norman communities are approximately 25 to 40 minutes north of our Charlotte headquarters at 14330 S Lakes Drive, Charlotte NC 28273. Cornelius and Huntersville are the closest Lake Norman towns at roughly 25 minutes, while Mooresville and Denver are approximately 35 to 40 minutes. We regularly manage projects throughout the Lake Norman region and factor travel logistics into our project scheduling.',
  },
  {
    question: 'What permits are needed for construction near Lake Norman?',
    answer:
      'Construction near Lake Norman typically requires standard building permits from the applicable county (Mecklenburg, Iredell, Lincoln, or Catawba), plus additional permits depending on your proximity to the shoreline. Waterfront properties may require a dock permit from Duke Energy, a CAMA permit for projects in designated areas, erosion and sediment control permits, FEMA floodplain development permits for properties in flood zones, and potentially a Section 404 permit from the Army Corps of Engineers if wetlands are involved. We Build manages the full permitting process for our clients.',
  },
  {
    question: 'Do you handle commercial construction in Mooresville?',
    answer:
      'Yes. We provide full-service commercial construction in Mooresville and throughout Iredell County. This includes ground-up commercial buildings, tenant upfits, office renovations, retail build-outs, warehouse construction, and industrial facility work. We are experienced with Iredell County commercial building codes, permitting requirements, and inspection processes. Our commercial portfolio includes projects in business parks, retail corridors, and downtown commercial districts.',
  },
  {
    question: 'What is the difference between building in Mecklenburg County vs Iredell County?',
    answer:
      'Mecklenburg County (which includes Cornelius, Davidson, and Huntersville) and Iredell County (which includes Mooresville) have different building codes, permitting processes, fee structures, and inspection requirements. Mecklenburg County generally has stricter stormwater management requirements and a more involved plan review process for commercial projects. Iredell County may have different setback requirements and zoning classifications. We Build is experienced with both jurisdictions and navigates these differences to keep your project moving efficiently regardless of which county your property is in.',
  },
  {
    question: 'Can you build in Lake Norman flood zones?',
    answer:
      'Yes, but construction in FEMA-designated flood zones requires specific engineering and compliance measures. Properties in flood zones A or AE around Lake Norman must meet FEMA floodplain management regulations, which typically require elevated foundations, flood-resistant materials below the base flood elevation, and specific mechanical system placement. We work with structural engineers and floodplain administrators to design and build compliant structures. We also assist property owners in understanding how flood zone classification affects insurance requirements and construction costs.',
  },
  {
    question: 'Do you offer design-build services in Lake Norman?',
    answer:
      'Yes. Our design-build services combine architectural planning and construction management under a single contract, which simplifies your project timeline and reduces the potential for miscommunication between separate design and construction teams. This approach works particularly well for commercial projects and renovations in the Lake Norman area. We invite clients to visit our design center to explore materials, finishes, and design options before construction begins. Learn more about our design-build approach on our design-build services page.',
  },
  {
    question: 'How long does a typical construction project take in Lake Norman?',
    answer:
      'Construction timelines in the Lake Norman area vary by project type. Commercial upfits typically take 2 to 5 months. Ground-up commercial construction ranges from 8 to 14 months depending on the size and complexity. Waterfront projects often take longer due to additional permitting requirements, foundation engineering, and coordination with Duke Energy and environmental agencies. Factors that affect timeline include plan review and permitting duration (which varies by county), weather conditions, material availability, and the complexity of site work. We provide a detailed project schedule during the planning phase so you know what to expect.',
  },
  {
    question: 'What waterfront regulations affect Lake Norman construction?',
    answer:
      'Lake Norman is a Duke Energy reservoir, and waterfront construction is subject to several layers of regulation. Duke Energy controls the shoreline buffer zone and requires permits for docks, seawalls, and any structures within the buffer area. Properties must comply with FEMA floodplain regulations if located in designated flood zones. Mecklenburg and Iredell counties enforce shoreline setback requirements, erosion and sediment control standards, and stormwater management rules. Many lakefront communities also have HOA architectural review requirements that govern building design, materials, and exterior colors. We Build coordinates with all relevant agencies and HOAs to ensure full compliance.',
  },
  {
    question: 'How much does it cost to build a commercial space in Cornelius or Davidson versus Mooresville?',
    answer:
      'Commercial construction costs are comparable across Lake Norman communities, but there are notable differences. Cornelius and Davidson fall under Mecklenburg County jurisdiction with slightly higher permitting fees and stricter stormwater requirements, which can add 3 to 5 percent to total project costs. Mooresville in Iredell County tends to have a faster plan review process and lower fee schedules. Office upfits in all three towns run $50 to $175 per square foot, while ground-up commercial projects range $150 to $350 per square foot. We Build provides location-specific estimates that account for these jurisdictional differences.',
  },
  {
    question: 'How does building in Davidson differ from other Lake Norman towns?',
    answer:
      'Davidson has a unique regulatory environment compared to other Lake Norman communities. The Town of Davidson enforces its own planning ordinance with design standards emphasizing walkability, architectural character, and mixed-use development. Commercial projects in downtown Davidson must comply with form-based code requirements that govern building setbacks, facade materials, and streetscape elements. These standards differ significantly from Cornelius or Mooresville. We Build is familiar with Davidson planning requirements and works with the town staff to ensure projects align with their community vision.',
  },
  {
    question: 'Does We Build offer green building options for Lake Norman commercial projects?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build incorporates sustainable construction practices into Lake Norman commercial projects. This includes energy-efficient building envelopes, high-performance HVAC systems, LED lighting packages, and low-VOC materials. Lake Norman businesses increasingly prioritize sustainability to attract environmentally conscious tenants and reduce long-term operating costs. We can also pursue LEED certification for new construction and major renovation projects throughout the Cornelius, Davidson, and Mooresville area.',
  },
];

export default function LakeNormanPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Lake Norman' },
      ])]} />

      <PageHero
        title="Construction Company Lake Norman NC | General Contractor Cornelius, Davidson, Mooresville"
        subtitle="Veteran and family-owned general contractor serving Lake Norman communities with commercial construction, upfits, and design-build expertise"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas/lake-norman' },
              { label: 'Lake Norman' },
            ]}
          />
          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lake Norman Construction Company — Serving Cornelius, Davidson, Mooresville & Huntersville
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lake Norman is the largest man-made lake in North Carolina, stretching across four counties and anchoring one of the most dynamic growth regions in the Charlotte metropolitan area. The communities surrounding Lake Norman — Cornelius, Davidson, Mooresville, Huntersville, Denver, and Sherrills Ford — have experienced remarkable commercial growth over the past two decades, creating sustained demand for quality construction services. We Build is a veteran and family-owned construction company with over 60 years of combined experience, and we are proud to serve businesses throughout the Lake Norman region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Lake Norman area presents unique construction opportunities and challenges that set it apart from other Charlotte-area markets. Waterfront properties require specialized knowledge of shoreline regulations, Duke Energy buffer zones, FEMA flood zone compliance, and erosion control measures. Commercial development along the I-77 corridor from Huntersville through Mooresville demands contractors who understand the different permitting processes across Mecklenburg and Iredell counties. Construction in established communities like Davidson requires sensitivity to architectural standards and historic preservation guidelines. We Build brings the local expertise and construction capability to handle all of these scenarios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are a business owner planning a commercial build near Exit 28 or a property manager looking to upfit an office space in Mooresville, We Build delivers the same commitment to quality, transparency, and on-time delivery that has earned our reputation across the greater Charlotte region. Our team manages every phase of construction from initial consultation and permitting through construction and final walkthrough, giving you a single point of contact and complete accountability for your Lake Norman project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a <Link href="/about" className="text-primary hover:underline">USGBC member</Link> and licensed North Carolina general contractor, We Build incorporates sustainable building practices and energy-efficient design into our Lake Norman projects. We believe that responsible construction benefits both our clients and the Lake Norman community, and we work to minimize environmental impact while delivering exceptional results. From selecting sustainable materials to implementing efficient building systems, our approach reflects our commitment to building for the long term.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Lake Norman Communities</h3>
                <div className="space-y-3">
                  {communities.map((c) => (
                    <div key={c.name} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Serving Lake Norman from Charlotte</p>
                  <p className="text-sm text-muted-foreground">
                    14330 S Lakes Drive, Charlotte NC 28273 — 25-40 min from Lake Norman communities
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/portfolio" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Building2 className="h-4 w-4" />
                      <span>View Our Portfolio</span>
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/design-center" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Paintbrush className="h-4 w-4" />
                      <span>Visit Design Center</span>
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/we-coat" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Shield className="h-4 w-4" />
                      <span>We Coat Roof Services</span>
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/south-charlotte" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4" />
                      <span>South Charlotte Area</span>
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/fort-mill-sc" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <MapPin className="h-4 w-4" />
                      <span>Fort Mill, SC Area</span>
                      <ArrowRight className="h-3 w-3 ml-auto" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Full-Service Construction</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Construction Services in Lake Norman</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              We Build provides a comprehensive range of construction services to homeowners and businesses across the Lake Norman region. Every project is managed by our experienced team from start to finish, ensuring quality craftsmanship and adherence to local building codes in Mecklenburg, Iredell, Lincoln, and Catawba counties.
            </p>
          </div>
          <div className="space-y-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">
                        <Link href={service.href} className="hover:text-primary transition-colors">
                          {service.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Learn More About {service.title} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Construction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Commercial Development</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Lake Norman Commercial Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Lake Norman region has evolved from a primarily residential lake community into a major commercial market with diverse business activity spanning retail, healthcare, technology, manufacturing, and professional services. The I-77 corridor from Huntersville through Mooresville serves as the commercial spine of the region, with significant development activity at key interchanges and in established town centers. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across all Lake Norman commercial districts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {commercialAreas.map((area) => (
              <Card key={area.name}>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-3">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/services/commercial-construction">
                View Commercial Construction Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Construction Market Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Market Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Lake Norman Construction Market</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The Lake Norman construction market reflects the broader growth trajectory of the Charlotte metropolitan area, which has consistently ranked among the fastest-growing regions in the United States. Cornelius, Davidson, Mooresville, and Huntersville have all experienced significant population growth, new business formation, and infrastructure investment that drives sustained construction demand. Understanding these market dynamics helps property owners and business operators make informed decisions about their construction projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cornelius has seen steady commercial development anchored by its proximity to both Lake Norman and the Charlotte business core. The town&apos;s position along I-77 makes it attractive for businesses seeking Lake Norman visibility with Charlotte accessibility. Davidson has maintained slower, more managed growth consistent with its small-town identity, focusing on walkable mixed-use development and preserving its distinctive character. Davidson&apos;s construction market favors quality over volume, with an emphasis on carefully designed commercial spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mooresville represents the largest and most diverse construction market in the Lake Norman region. The town&apos;s Iredell County location offers competitive land costs compared to Mecklenburg County communities, attracting both residential developers and commercial operators. Mooresville has seen significant growth in healthcare facilities, retail centers, business parks, and residential subdivisions. The town&apos;s expanding infrastructure including road improvements and utility extensions continues to open new areas for development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Huntersville has emerged as a major suburban employment center with substantial retail, office, and mixed-use development. The Northlake and Birkdale areas represent two of the most active commercial districts in the Charlotte metro. Huntersville&apos;s residential market features a range of housing from starter homes to luxury communities, creating diverse opportunities for construction projects. The western Lake Norman communities of Denver and Sherrills Ford continue to attract homeowners seeking lakefront living with a more rural character, driving demand for custom home construction and general contracting services in Lincoln and Catawba counties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Your Lake Norman Contractor</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose We Build for Lake Norman</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Choosing a construction company for your Lake Norman project is a significant decision. Here is what sets We Build apart from other contractors in the region.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason) => (
              <Card key={reason.title}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Building Codes & Permits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Regulatory Knowledge</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Lake Norman Building Codes & Permits</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                One of the most important factors in any Lake Norman construction project is understanding which jurisdiction governs your property and what specific codes, permits, and regulations apply. The Lake Norman region spans multiple counties and municipalities, each with its own building department, fee structure, and inspection process. Working with a contractor who knows these systems saves time, prevents costly errors, and keeps your project moving forward on schedule.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Mecklenburg County Jurisdiction</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Cornelius, Davidson, and Huntersville fall within Mecklenburg County building jurisdiction. Mecklenburg County uses the North Carolina State Building Code and enforces additional stormwater management requirements that are among the strictest in the state. Commercial projects require detailed plan review that typically takes two to four weeks. Residential permits are generally processed faster but still require compliance with zoning, setback, and environmental regulations.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Each town within Mecklenburg County also maintains its own zoning ordinances and planning departments. Cornelius, Davidson, and Huntersville have specific zoning requirements that may differ from unincorporated Mecklenburg County, particularly regarding commercial development, signage, and architectural standards.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Iredell County Jurisdiction</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      Mooresville and other Lake Norman communities in Iredell County operate under a different building department with its own permitting process and fee schedule. Iredell County also uses the North Carolina State Building Code but may have different local amendments and interpretive practices. Commercial permitting timelines and requirements can differ from Mecklenburg County.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Town of Mooresville maintains its own zoning ordinances and planning department with specific requirements for commercial and residential development. Mooresville&apos;s rapid growth has led to ongoing updates in zoning regulations, and staying current with these changes is essential for efficient project planning and permitting.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Properties in Lincoln County (Denver) and Catawba County (Sherrills Ford) fall under their respective county building departments, which may have different requirements for well and septic systems, road frontage, and lot size minimums. We Build maintains working knowledge of all four county jurisdictions that surround Lake Norman and manages the complete permitting process for our clients, including initial applications, plan submissions, inspection scheduling, and certificate of occupancy processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Construction Considerations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Waves className="h-8 w-8 text-primary" />
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">Lakefront Expertise</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-1">Waterfront Construction Considerations</h2>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Waterfront construction on Lake Norman involves a layer of regulatory and engineering complexity that goes beyond standard residential or commercial building. Property owners considering construction on or near the Lake Norman shoreline should understand the key considerations that affect project planning, design, cost, and timeline.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-background rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TreePine className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Erosion & Shoreline Management</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lake Norman shoreline properties are subject to erosion from wave action, boat wakes, stormwater runoff, and natural weathering. Construction projects must include comprehensive erosion control plans that protect both the building site and the lake. Silt fences, erosion control blankets, and stabilized construction entrances are standard requirements. Permanent erosion control measures such as riprap, retaining walls, and native plantings may be required as part of the finished project. Duke Energy reviews and approves all shoreline stabilization measures within the buffer zone.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Ruler className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Setback Requirements</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Waterfront properties on Lake Norman are subject to setback requirements that limit how close structures can be built to the shoreline. These setbacks are enforced by the applicable county and may be further restricted by Duke Energy buffer zone regulations and HOA covenants. Standard setbacks vary by county and zoning district, and waterfront setbacks are often more restrictive than standard lot setbacks. Understanding these limitations early in the design process is essential to maximizing your buildable area while maintaining full compliance.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Waves className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">FEMA Flood Zones</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Many properties near Lake Norman fall within FEMA-designated flood zones, which impose specific construction requirements. Buildings in flood zones must be designed and constructed to meet or exceed the base flood elevation, which is the elevation at which there is a one percent chance of flooding in any given year. Foundations must be engineered for flood conditions, and habitable space, mechanical systems, and electrical panels must be located above the base flood elevation. Flood zone construction also triggers mandatory flood insurance requirements that property owners should factor into their planning.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Duke Energy Lake Regulations</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lake Norman is owned and managed by Duke Energy as part of the Catawba-Wateree hydroelectric system. Duke Energy maintains regulatory authority over the lake and its shoreline, including a buffer zone that extends from the full pond elevation line. Any construction activity within this buffer zone — including docks, boathouses, seawalls, and landscaping — requires a Duke Energy permit. The permitting process involves a site inspection, review of construction plans, and compliance with Duke Energy&apos;s shoreline management guidelines. We Build coordinates directly with Duke Energy on behalf of our waterfront clients to secure these permits efficiently.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We Build has the experience and relationships to navigate these waterfront requirements effectively. Our team coordinates with Duke Energy, county floodplain administrators, environmental consultants, and HOA review committees to ensure your lakefront project proceeds smoothly from design through construction. Contact us to discuss your <Link href="/contact" className="text-primary hover:underline">waterfront construction project</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Service Area</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Communities We Serve in Lake Norman</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              We Build provides construction services to all major Lake Norman communities across Mecklenburg, Iredell, Lincoln, and Catawba counties. Here is a closer look at the communities we serve.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <Card key={community.name}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold">{community.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{community.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Lake Norman Construction FAQ</h2>
              <p className="text-muted-foreground mt-4">
                Answers to frequently asked questions about building and renovating in the Lake Norman area.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas We Serve */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to the Lake Norman region, We Build provides construction services throughout the greater Charlotte area. Our multi-state licensing allows us to serve clients across NC and SC.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Huntersville', href: '/areas/huntersville' },
                { label: 'Mooresville', href: '/areas/mooresville' },
                { label: 'South Charlotte', href: '/areas/south-charlotte' },
                { label: 'Matthews', href: '/areas/matthews' },
                { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
                { label: 'Rock Hill SC', href: '/areas/rock-hill-sc' },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-muted border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build in Lake Norman?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact We Build for a free consultation on your Lake Norman construction project. Whether you are planning a commercial build, custom home, waterfront renovation, or commercial upfit, our team is ready to help you build with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
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
          <p className="text-sm text-primary-foreground/60 mt-6">
            Serving Cornelius, Davidson, Mooresville, Huntersville, Denver, Sherrills Ford & all Lake Norman communities
          </p>
        </div>
      </section>
    </>
  );
}
