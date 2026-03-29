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
  title: 'Construction Company Mooresville NC | General Contractor Race City & Lake Norman West',
  description:
    'Looking for a contractor near me in Mooresville NC? Veteran-owned construction company serving Race City USA, Lake Norman west shore & Langtree. Commercial construction, custom homes, upfits & roof coatings. Licensed in NC & SC. Free estimates. (704) 574-8124.',
  keywords: [
    'construction company mooresville nc',
    'general contractor mooresville',
    'commercial contractor mooresville nc',
    'contractor near me mooresville',
    'construction companies near me',
    'mooresville commercial construction',
    'mooresville remodeling contractor',
    'licensed contractor NC',
    'commercial construction mooresville nc',
    'contractor race city usa',
    'mooresville renovation contractor',
    'lake norman west construction',
    'statesville construction company',
    'general contractor near me mooresville nc',
    'construction company near me lake norman',
    'mooresville commercial upfits',
    'custom home builder mooresville nc',
    'iredell county contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/mooresville',
  },
  openGraph: {
    title: 'Construction Company Mooresville NC | General Contractor Race City & Lake Norman West',
    description:
      'Veteran-owned construction company serving Mooresville NC. Commercial & residential construction in Race City USA, Lake Norman west shore, Langtree. Licensed in NC & SC.',
    type: 'website',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction across Mooresville, from ground-up office buildings along the Exit 28 corridor to retail spaces near Langtree at the Lake and industrial facilities along NC-150. Mooresville sits along the I-77 corridor in Iredell County, positioning it as a critical commercial market between Charlotte and Statesville. The town is home to major corporate headquarters including Lowe\'s Companies, NASCAR team shops, and a growing technology and motorsports industry cluster. Our team understands Iredell County commercial permitting, Town of Mooresville development standards, and the specific requirements for building in this dynamic market.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Renovations',
    href: '/services/commercial-upfits',
    description:
      'Mooresville businesses frequently need interior renovations as the town\'s commercial base expands and diversifies. We Build provides commercial upfit services throughout downtown Mooresville, the Exit 28 (Williamson Road) corridor, Morrison Plantation commercial areas, and the Langtree mixed-use district. Our upfit projects range from open-concept office redesigns and medical suite build-outs to restaurant renovations and motorsports-related facility upgrades. The Mooresville area has a unique mix of traditional commercial and motorsports-industry tenants, and our team adapts to the specific finish and infrastructure requirements of each. Most commercial upfits are completed in 2 to 5 months.',
  },
  {
    icon: Ruler,
    title: 'Design-Build Services',
    href: '/services/design-build',
    description:
      'Our design-build approach is especially valuable in Mooresville where lakefront lots, sloped terrain, and community architectural standards create unique design challenges. We Build manages the entire project under one contract, from conceptual design and engineering through Iredell County permitting and construction. This single-source accountability eliminates coordination issues between architects and builders, reduces change orders, and typically saves Mooresville property owners ten to fifteen percent compared to the traditional design-bid-build method. For lakefront properties requiring specialized foundation design and dock integration, our design-build process is particularly efficient.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Mooresville commercial building owners save significantly with our elastomeric roof coating systems compared to full roof replacement. We Build applies reflective roof coatings that extend roof life by fifteen to twenty years, reduce energy costs, and prevent leaks on flat and low-slope commercial roofs. This service is popular with Exit 28 corridor commercial properties, downtown Mooresville retail buildings, motorsports shops, and industrial facilities along NC-150. A typical commercial roof coating costs 40 to 60 percent less than full replacement and can be completed in days rather than weeks.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages every aspect of construction projects in Mooresville and throughout Iredell County. From initial permits and site preparation through final inspection and certificate of occupancy, our project management ensures your job stays on schedule and on budget. We coordinate all subcontractors, handle material procurement, manage inspections, and provide transparent communication throughout the project. Our experience with Iredell County permitting — which differs from Mecklenburg County in several important ways — ensures a smooth construction process for Mooresville property owners.',
  },
];

const commercialAreas = [
  {
    name: 'Exit 28 Corridor (Williamson Road)',
    description:
      'The Exit 28 corridor along Williamson Road is Mooresville\'s most active commercial development zone. Major retail centers, restaurants, hotels, medical offices, and professional services cluster around this I-77 interchange. New commercial construction continues to fill available parcels, and existing properties undergo renovation and tenant improvements as the corridor matures. We Build provides commercial construction and upfit services throughout the Exit 28 area, where project types range from retail pad sites and restaurant build-outs to multi-story office buildings and medical facilities.',
  },
  {
    name: 'Downtown Mooresville',
    description:
      'Downtown Mooresville has experienced a significant revitalization, with historic buildings being renovated into restaurants, boutiques, breweries, and professional offices. The downtown district maintains a charming small-town character while accommodating modern commercial uses. We Build provides commercial renovation and adaptive reuse services in downtown Mooresville, where working within historic structures requires specialized knowledge of building code compliance, structural reinforcement, and architectural preservation. Restaurant build-outs and retail renovations are among the most common downtown project types.',
  },
  {
    name: 'Morrison Plantation Area',
    description:
      'The Morrison Plantation area along NC-150 has grown into a significant commercial and residential node in Mooresville. Commercial development includes medical offices, professional services, retail centers, and restaurants serving the surrounding residential communities. We Build provides commercial construction and tenant upfit services in the Morrison Plantation corridor, where new commercial pads continue to be developed as the residential population grows.',
  },
  {
    name: 'Langtree at the Lake',
    description:
      'Langtree at the Lake is a premier mixed-use development on Lake Norman\'s western shore, combining retail, dining, entertainment, and residential uses in a walkable lakefront setting. We Build provides commercial construction and tenant upfit services for businesses at Langtree, where the waterfront location and upscale positioning require attention to finish quality and architectural standards. The development continues to attract new tenants who need build-out services that match the center\'s premium character.',
  },
  {
    name: 'NC-150 / West Mooresville Corridor',
    description:
      'The NC-150 corridor west of I-77 has seen substantial commercial and light industrial development, driven by the area\'s accessibility and available land. Motorsports-related businesses, technology companies, manufacturing facilities, and distribution centers occupy this corridor. We Build provides commercial construction, industrial build-outs, and flex space renovations along NC-150, where project requirements often include specialized infrastructure like high-bay spaces, overhead crane systems, and heavy electrical service.',
  },
];

const residentialAreas = [
  {
    name: 'The Peninsula & Lake Norman Waterfront',
    description:
      'The Peninsula is one of Lake Norman\'s most prestigious residential communities, featuring a championship golf course, marina access, and custom homes on generous lakefront and golf course lots. We Build provides custom home construction and renovation services for Peninsula homeowners and waterfront property owners throughout the Mooresville section of Lake Norman. Lakefront construction requires specialized expertise in foundation design, erosion control, dock permitting, and the environmental considerations specific to Lake Norman shoreline development.',
  },
  {
    name: 'Langtree Residential',
    description:
      'The residential portions of the Langtree development offer townhomes, single-family homes, and custom lots with convenient access to the mixed-use retail and dining center. We Build serves Langtree homeowners with renovation, addition, and custom finishing services. As the community matures, homeowners are investing in personalized upgrades, outdoor living spaces, and interior renovations that reflect their individual style beyond the original builder specifications.',
  },
  {
    name: 'Morrison Plantation',
    description:
      'Morrison Plantation is a large master-planned community in Mooresville featuring a variety of home styles, community amenities, and convenient access to NC-150 and I-77. We Build provides home renovation, addition, and custom finishing services for Morrison Plantation residents. Many homes in the community are reaching the age where owners invest in kitchen renovations, bathroom updates, and additions that expand their living space.',
  },
  {
    name: 'Curtis Pond & Brawley School Area',
    description:
      'The Curtis Pond and Brawley School Road area features established neighborhoods with larger lots and a mix of custom and semi-custom homes. We Build serves homeowners in these communities with renovation, addition, and custom home construction services. The area\'s proximity to downtown Mooresville and Lake Norman makes it attractive for families who want space and character without sacrificing convenience.',
  },
  {
    name: 'Coddle Creek & Rural Mooresville',
    description:
      'The Coddle Creek area and rural portions of Mooresville offer large-lot properties and acreage suitable for custom estate homes and hobby farms. We Build provides custom home construction for property owners who want to build on their own land in these less-developed areas. Building in rural Mooresville may involve well and septic systems, longer utility runs, and site preparation for properties with significant grade changes, all of which our team handles as part of the construction process.',
  },
];

const neighborhoods = [
  'Mooresville',
  'The Peninsula',
  'Langtree',
  'Morrison Plantation',
  'Curtis Pond',
  'Brawley School',
  'Coddle Creek',
  'Muirfield',
  'Talbert Pointe',
  'Bellingham',
  'Rolling Hills',
  'Cove Creek',
  'Waybridge',
  'Harbour Watch',
  'Northington',
  'River Highway',
];

const businessDistricts = [
  {
    name: 'Exit 28 / Williamson Road',
    type: 'Regional Retail & Commercial Hub',
    activity: 'Major retail construction, restaurant build-outs, hotel development, medical office construction, and commercial tenant improvements',
  },
  {
    name: 'Downtown Mooresville',
    type: 'Historic Town Center & Dining',
    activity: 'Restaurant renovations, brewery build-outs, retail adaptive reuse, and professional office upfits in historic buildings',
  },
  {
    name: 'NASCAR Technology Corridor',
    type: 'Motorsports & Technology',
    activity: 'Race shop construction, technology lab build-outs, specialized manufacturing facilities, and high-bay industrial construction',
  },
  {
    name: 'Lowe\'s Corporate Area',
    type: 'Corporate Office & Support',
    activity: 'Corporate office upfits, support facility construction, and professional service buildings serving the Lowe\'s campus ecosystem',
  },
  {
    name: 'Langtree at the Lake',
    type: 'Waterfront Mixed-Use',
    activity: 'Premium restaurant build-outs, upscale retail construction, and waterfront commercial tenant improvements',
  },
  {
    name: 'NC-150 Industrial Corridor',
    type: 'Light Industrial & Distribution',
    activity: 'Warehouse construction, flex space build-outs, manufacturing facility renovations, and distribution center improvements',
  },
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Charlotte-Area Headquarters',
    description:
      'We Build is headquartered at 14330 S Lakes Drive, Charlotte NC 28273. Mooresville is within our service area via I-77, and our team reaches Mooresville jobsites quickly for project meetings, inspections, and coordination. We are your local construction partner with knowledge of both Iredell County and Mecklenburg County requirements.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with over 60 years of combined construction experience. The values we bring to every Mooresville project — integrity, accountability, discipline, and craftsmanship — are rooted in military service and family commitment. You deal directly with the owners, not a sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold general contractor licenses in both North Carolina and South Carolina. Our licensing, insurance, and bonding meet or exceed all requirements for commercial and residential construction in Mooresville, Iredell County, and throughout the Charlotte metropolitan area.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build stays current with sustainable building practices and energy-efficient construction methods. Mooresville property owners benefit from our knowledge of green building techniques that reduce operating costs and environmental impact, especially important for lakefront properties where environmental stewardship matters.',
  },
  {
    icon: Clock,
    title: 'Iredell County Permitting Knowledge',
    description:
      'Mooresville falls under Iredell County building jurisdiction, which differs from Mecklenburg County in permitting processes, code interpretations, and inspection procedures. We Build has experience navigating Iredell County requirements and the Town of Mooresville planning department, ensuring projects move through permitting efficiently without costly delays or surprises.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project includes a detailed, line-item estimate with no hidden costs. We explain exactly where every dollar goes, and our change order process is straightforward and documented. Mooresville property owners appreciate knowing exactly what they are paying for before construction begins.',
  },
];

const faqs = [
  {
    question: 'What construction services are available in Mooresville NC?',
    answer:
      'We Build provides comprehensive construction services in Mooresville including commercial construction, commercial upfits and renovations, custom home building, residential additions and renovations, design-build services, general contracting, and commercial roof coatings. We handle projects from small office upfits to ground-up commercial buildings, lakefront custom homes, and motorsports-related facilities throughout the Mooresville area. Call (704) 574-8124 for a free estimate on any construction project in Mooresville.',
  },
  {
    question: 'How much does construction cost in Mooresville NC in 2026?',
    answer:
      'Construction costs in Mooresville vary by project type and location. Commercial office upfits typically range from $50 to $175 per square foot. Retail build-outs run $75 to $200 per square foot. Restaurant construction costs $150 to $350 per square foot. Custom homes in Mooresville range from $225 to $600 per square foot, with lakefront properties at the higher end due to site preparation, foundation requirements, and premium finishes. Renovations and additions typically cost $150 to $400 per square foot. We provide detailed, line-item estimates for every project.',
  },
  {
    question: 'What is the difference between Iredell County and Mecklenburg County permitting?',
    answer:
      'Mooresville falls under Iredell County building jurisdiction, which differs from Mecklenburg County in several important ways. Iredell County has its own building inspection department, permitting process, fee schedule, and code interpretations. Plan review timelines may differ. Setback requirements and zoning classifications are different. The Town of Mooresville also has its own planning and zoning department with development standards that apply within town limits. Lake Norman waterfront properties may have additional environmental and dock permitting requirements through the state. We Build is experienced with Iredell County permitting and handles all jurisdictional requirements as part of our general contracting services.',
  },
  {
    question: 'How long does a typical construction project take in Mooresville?',
    answer:
      'Project timelines in Mooresville depend on scope and complexity. Commercial upfits typically take 2 to 5 months. Restaurant build-outs require 4 to 8 months. Custom homes take 8 to 16 months depending on size, complexity, and lakefront site conditions. Home additions and renovations range from 2 to 6 months. Iredell County permitting typically adds 4 to 8 weeks before construction can begin. Lakefront projects may require additional permitting time for dock construction and environmental approvals. We provide a detailed project schedule at the start of every engagement.',
  },
  {
    question: 'Does We Build construct lakefront homes on Lake Norman in Mooresville?',
    answer:
      'Yes. We Build constructs custom lakefront homes on Lake Norman\'s western shore in Mooresville and surrounding areas. Lakefront construction is one of our specialties and involves unique considerations including specialized foundation design for sloped and waterfront lots, erosion control measures, dock permitting through the state, shoreline stabilization, and environmental compliance for Lake Norman. Our design-build approach is especially well-suited for lakefront projects where coordinating site work, foundation engineering, and dock construction under a single contract reduces cost and complexity.',
  },
  {
    question: 'Can We Build handle motorsports-related construction in Mooresville?',
    answer:
      'Yes. Mooresville is known as Race City USA, home to numerous NASCAR team shops, motorsports technology companies, and related businesses. We Build provides commercial construction services for motorsports facilities, including high-bay shop construction, technology lab build-outs, showroom renovations, and specialized infrastructure installation. These projects often require unique features like overhead crane systems, heavy electrical service, compressed air systems, ventilation for paint and fabrication areas, and large roll-up doors. Our team has the commercial construction expertise to handle these specialized requirements.',
  },
  {
    question: 'Is Mooresville a good area for construction investment?',
    answer:
      'Mooresville is one of the strongest construction markets in the Lake Norman region. The town\'s population has grown significantly, driven by corporate employers like Lowe\'s Companies, the NASCAR industry cluster, and Lake Norman\'s lifestyle appeal. The Exit 28 corridor continues to see major commercial development. Downtown Mooresville has experienced a restaurant and retail renaissance. Lakefront property values remain strong. The NC-150 corridor is attracting new industrial and technology companies. Both commercial and residential construction investments in Mooresville benefit from these diversified growth drivers and the town\'s strategic location along I-77.',
  },
  {
    question: 'What neighborhoods in Mooresville does We Build serve?',
    answer:
      'We serve all Mooresville neighborhoods and communities including The Peninsula, Langtree, Morrison Plantation, Curtis Pond, Brawley School area, Coddle Creek, Muirfield, Talbert Pointe, Bellingham, Rolling Hills, Cove Creek, Waybridge, Harbour Watch, Northington, and River Highway. Our service area covers the entire Town of Mooresville and surrounding Iredell County from the Lake Norman shoreline to the rural areas west and north of town.',
  },
  {
    question: 'Does We Build handle both commercial and residential construction in Mooresville?',
    answer:
      'Yes. We Build is a full-service general contractor licensed for both commercial and residential construction in North Carolina and South Carolina. Our Mooresville commercial projects include office buildings, retail spaces, restaurants, medical facilities, motorsports shops, and industrial build-outs. Our residential projects include lakefront custom homes, golf community homes, residential additions, and whole-home renovations. Many Mooresville property owners hire us for both their business and personal construction needs.',
  },
  {
    question: 'How do I get a construction estimate for a project in Mooresville?',
    answer:
      'Getting a construction estimate from We Build is straightforward. Call us at (704) 574-8124 or visit our contact page at webuildclt.com/contact to request a free consultation. We will schedule a site visit to understand your project scope, discuss your goals and budget, and provide a detailed line-item estimate. For lakefront properties, the site visit is especially important to assess lot conditions, access, and any waterfront-specific requirements. There is no obligation and no charge for initial consultations. We typically deliver estimates within one to two weeks of the initial site visit.',
  },
  {
    question: 'How do commercial construction costs in Mooresville compare to Cornelius or Huntersville?',
    answer:
      'Mooresville falls under Iredell County jurisdiction, which generally has lower permitting fees and a faster plan review process than Mecklenburg County where Cornelius and Huntersville are located. Commercial office upfits in all three towns run $50 to $175 per square foot, but total project costs in Mooresville can be 3 to 5 percent lower due to reduced soft costs. The Exit 28 corridor in Mooresville offers competitive commercial lease rates compared to Birkdale or Davidson, which also influences the level of tenant improvement investment. We Build provides detailed, area-specific estimates.',
  },
  {
    question: 'Does We Build offer sustainable or green building in Mooresville?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build incorporates sustainable construction practices into Mooresville commercial and residential projects. We offer energy-efficient building envelopes, high-performance HVAC systems, LED lighting, low-VOC materials, and water-efficient fixtures. Green building is particularly relevant for Mooresville lakefront properties where stormwater management and environmental impact are closely regulated. For commercial projects near the Lowe\'s corporate campus and the Exit 28 corridor, sustainability features help attract quality tenants.',
  },
  {
    question: 'What commercial construction opportunities exist along the Exit 28 corridor in Mooresville?',
    answer:
      'The Exit 28 (NC-150) corridor at I-77 is Mooresville\'s most active commercial development zone. This area sees consistent demand for retail build-outs, restaurant construction, medical office upfits, and professional service spaces. New commercial pad sites and multi-tenant buildings continue to be developed along NC-150 and Williamson Road. We Build provides full-service construction in this corridor including ground-up commercial buildings, tenant improvements, and commercial renovations. Our team is experienced with the Town of Mooresville planning review and Iredell County permitting requirements for this high-growth area.',
  },
];

const areaPages = [
  { label: 'South Charlotte', href: '/areas/south-charlotte' },
  { label: 'Lake Norman', href: '/areas/lake-norman' },
  { label: 'Fort Mill SC', href: '/areas/fort-mill-sc' },
  { label: 'Huntersville', href: '/areas/huntersville' },
  { label: 'Matthews', href: '/areas/matthews' },
];

export default function MooresvillePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Mooresville' },
      ])]} />

      <PageHero
        title="Construction Company Mooresville NC"
        subtitle="General Contractor Race City USA & Lake Norman West Shore — Iredell County Licensed"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs & Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Areas', href: '/areas/south-charlotte' }, { label: 'Mooresville' }]} />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Mooresville NC Construction Company — Commercial & Specialty General Contractor
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mooresville NC has comprehensive construction services available from We Build, a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving Race City USA and the Lake Norman west shore. We provide <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>, <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>, <Link href="/services/design-build" className="text-primary hover:underline">design-build services</Link>, and <Link href="/services/roof-coating" className="text-primary hover:underline">commercial roof coatings</Link> throughout Mooresville, Langtree, Morrison Plantation, and surrounding Iredell County communities. Licensed in NC and SC with over 60 years of combined experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mooresville occupies a unique position in the Charlotte metro construction market. Known worldwide as Race City USA for its concentration of NASCAR teams and motorsports technology companies, the town has diversified well beyond racing into a thriving commercial and residential hub along the I-77 corridor. Lowe&apos;s Companies is headquartered here, anchoring a corporate ecosystem that drives office and commercial construction demand. The Exit 28 corridor has become one of the busiest commercial development zones in the Lake Norman region. Downtown Mooresville has experienced a restaurant and retail renaissance that has made it a dining destination. And Lake Norman&apos;s western shore — from The Peninsula to Langtree to dozens of waterfront communities — supports a robust custom home construction market where lakefront living meets Charlotte metro convenience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves Mooresville with the commitment to quality, transparency, and construction expertise that property owners in this market expect. Whether you are building a NASCAR-grade shop on NC-150, a lakefront estate at The Peninsula, a restaurant in downtown Mooresville, or a medical office near Exit 28, our team delivers the project management, craftsmanship, and Iredell County permitting knowledge to ensure your project succeeds. Contact us at (704) 574-8124 for a free estimate.
              </p>

              <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Serving Mooresville from Charlotte HQ</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273 — direct I-77 access to Mooresville</p>
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
                <h3 className="text-xl font-semibold mb-6">Mooresville Communities</h3>
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
                    <span>Iredell County permitting expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Mooresville */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Full-Service General Contractor</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Construction Services in Mooresville NC</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We Build provides comprehensive construction services across Mooresville, Lake Norman west shore, and surrounding Iredell County communities. From commercial and industrial projects to lakefront custom homes, every project is managed with full accountability.
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

      {/* Mooresville Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Development</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mooresville Commercial Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mooresville is one of the most dynamic commercial construction markets in the Lake Norman region, driven by corporate headquarters, NASCAR industry facilities, growing retail and dining districts, and the steady influx of new businesses attracted by the town&apos;s strategic I-77 location. We Build provides <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit services</Link> across every major Mooresville business district. Our understanding of Iredell County zoning, commercial permitting, and the specific needs of Mooresville&apos;s diverse commercial tenants makes us the right contractor for this market.
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
                Whether you are building a race shop on NC-150, renovating a restaurant downtown, or constructing a medical office near Exit 28, We Build delivers the commercial construction expertise that Mooresville businesses demand. Visit our <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see examples of our commercial work, or <Link href="/contact" className="text-primary hover:underline">contact us</Link> for a free consultation on your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mooresville Business Districts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial Growth Centers</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mooresville Business Districts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mooresville&apos;s business districts reflect the town&apos;s unique mix of corporate headquarters, motorsports industry, retail and dining, and waterfront development. These diverse commercial centers drive consistent demand for quality <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> and renovation services.
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
                If you are planning a commercial construction project in any of these Mooresville business districts, We Build provides the expertise and general contracting services you need. <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for a free consultation and project estimate.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose We Build in Mooresville</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From lakefront estates to NASCAR shops to downtown restaurants, Mooresville property owners choose We Build for our Iredell County expertise, veteran-owned integrity, and commitment to delivering every project on time and on budget.
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
              In addition to Mooresville, We Build provides construction services throughout the greater Charlotte region. Our NC and SC licenses allow us to serve clients across a wide area.
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 text-center">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Mooresville Construction FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Mooresville Construction Partner</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Veteran and family-owned. Licensed in NC &amp; SC. Over 60 years combined experience. USGBC member.
          </p>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you are planning a commercial build-out near Exit 28, a lakefront home at The Peninsula, or a motorsports facility on NC-150, We Build is the Mooresville general contractor you can trust. Contact us today for a free estimate on your project.
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
