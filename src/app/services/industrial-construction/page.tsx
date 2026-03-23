import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Warehouse,
  Factory,
  Container,
  Thermometer,
  Building2,
  Truck,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  Zap,
  FileCheck,
  HardHat,
  Ruler,
  MapPin,
  Users,
  Wrench,
  ClipboardCheck,
  Hammer,
  Eye,
  Lightbulb,
  Calculator,
  Scale,
  BadgeCheck,
  HeartHandshake,
  Gauge,
  Bolt,
  Flame,
  ChevronsUp,
  Cog,
  Cable,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Industrial & Warehouse Construction Charlotte NC | Distribution Centers & Manufacturing',
  description:
    'Expert industrial and warehouse construction in Charlotte, NC. Distribution centers, manufacturing facilities, cold storage, logistics hubs, light industrial build-outs & warehouse renovations. Veteran-owned, licensed in NC & SC. 60+ years experience. Free estimates. (704) 574-8124.',
  keywords: [
    'warehouse construction Charlotte NC',
    'industrial construction Charlotte NC',
    'industrial buildout Charlotte NC',
    'distribution center construction Charlotte',
    'warehouse renovation Charlotte NC',
    'manufacturing facility construction Charlotte',
    'cold storage construction Charlotte NC',
    'light industrial construction Charlotte',
    'logistics hub construction Charlotte NC',
    'warehouse build out Charlotte',
    'industrial contractor Charlotte NC',
    'flex industrial space Charlotte',
  ],
  openGraph: {
    title: 'Industrial & Warehouse Construction Charlotte NC | We Build',
    description:
      'Build or renovate your industrial facility with Charlotte\'s veteran-owned construction experts. Warehouses, distribution centers, manufacturing facilities, cold storage & logistics hubs across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/industrial-construction',
    type: 'website',
  },
};

const facilityTypes = [
  {
    icon: Warehouse,
    title: 'Warehouse & Distribution Centers',
    slug: 'warehouse-distribution-centers',
    desc: 'Ground-up warehouse construction and distribution center build-outs designed for efficient goods movement, high-volume storage, and rapid fulfillment operations.',
    details:
      'Charlotte sits at the intersection of I-77 and I-85, making it one of the most strategically located distribution hubs on the East Coast. We design and build warehouse and distribution center facilities that maximize every square foot of operational space. Our warehouse construction services include concrete tilt-up and pre-engineered metal building erection, high-bay racking-compatible slab design with F-number flatness specifications, dock-high and grade-level loading door configurations, cross-dock layouts for rapid freight transfer, and sophisticated sprinkler systems sized for high-piled storage. We coordinate with racking vendors, material handling equipment suppliers, and WMS technology providers to ensure your facility infrastructure supports your logistics workflow from day one. Typical distribution center projects in the Charlotte market range from 50,000 to 500,000 square feet, with clear heights of 28 to 40 feet.',
    cost: '$65-$120/sq ft',
  },
  {
    icon: Factory,
    title: 'Manufacturing Facilities',
    slug: 'manufacturing-facilities',
    desc: 'Purpose-built manufacturing environments with heavy power infrastructure, process piping, crane systems, specialized ventilation, and production-optimized floor plans.',
    details:
      'Manufacturing facility construction demands precise coordination between building systems and production equipment. We build manufacturing plants that integrate heavy electrical service rated at 2,000 amps and above, three-phase power distribution to production floor stations, overhead bridge crane systems with runway beams engineered into the structural steel, compressed air distribution networks with appropriately sized receivers and dryers, process water and waste treatment piping, specialized exhaust and ventilation for welding fumes, chemical vapors, and particulate matter, and reinforced floor slabs capable of supporting heavy machinery and dynamic loads. Our team coordinates directly with your equipment vendors to ensure that anchor bolt patterns, utility stub-ups, and overhead clearances are built to exact specifications. Charlotte area manufacturers in sectors including automotive parts, food processing, plastics, and metalworking trust We Build to deliver production-ready facilities that minimize the time between construction completion and first production run.',
    cost: '$85-$175/sq ft',
  },
  {
    icon: Building2,
    title: 'Light Industrial & Flex Space',
    slug: 'light-industrial-flex-space',
    desc: 'Versatile light industrial facilities combining warehouse, showroom, and office space in a single building footprint for maximum operational flexibility.',
    details:
      'Light industrial and flex space construction is one of the fastest-growing segments in the Charlotte commercial real estate market. These facilities typically combine a warehouse or production area with an attached office component, creating a single building that accommodates multiple business functions. We construct light industrial flex buildings with clear heights of 18 to 24 feet in the warehouse portion, climate-controlled office build-outs with modern finishes, drive-in or dock-high loading capability, showroom or retail-facing frontage along high-visibility corridors, separately metered utilities for multi-tenant configurations, and fire separation walls between different occupancy types. Flex space is particularly popular along the I-77 corridor in Mooresville and the I-485 loop in south Charlotte where businesses need a facility that can serve as a headquarters combining office, light assembly, warehousing, and customer-facing showroom under one roof. Our design-build approach ensures the building proportions, utility sizing, and structural capacity are right for your specific mix of uses.',
    cost: '$70-$130/sq ft',
  },
  {
    icon: Thermometer,
    title: 'Cold Storage & Refrigerated Warehouses',
    slug: 'cold-storage-refrigerated',
    desc: 'Temperature-controlled storage facilities including frozen, refrigerated, and multi-temperature zone warehouses built to FDA and USDA standards.',
    details:
      'Cold storage construction is a specialized discipline that requires deep expertise in insulated building envelopes, vapor barrier systems, refrigeration infrastructure, and food safety compliance. We build cold storage facilities with insulated metal panel wall and ceiling systems rated for temperatures as low as minus 20 degrees Fahrenheit, reinforced concrete floors with under-slab heating to prevent frost heave, ammonia or Freon-based refrigeration system infrastructure including machine rooms with code-compliant ventilation and emergency shutoff systems, multi-temperature zone configurations that allow frozen, refrigerated, and ambient storage within the same facility, air-lock vestibules and strip curtain systems that minimize temperature loss during loading and unloading operations, and FDA and USDA-compliant finishes including epoxy floors, FRP wall panels, and stainless steel fixtures. Charlotte is emerging as a cold chain logistics hub due to its highway network and proximity to major population centers along the East Coast. We have built cold storage facilities for food distributors, pharmaceutical companies, and agricultural operations throughout the greater Charlotte metro area.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Building2,
    title: 'Flex Industrial Office',
    slug: 'flex-industrial-office',
    desc: 'Professional office environments constructed within or attached to industrial facilities, providing administrative, engineering, and management workspace adjacent to production operations.',
    details:
      'Industrial office construction differs significantly from traditional commercial office build-outs because the office space must integrate seamlessly with the adjacent warehouse or manufacturing environment. We construct flex industrial office spaces with proper fire-rated separation walls between office and industrial occupancies, independent HVAC systems that prevent dust, fumes, and temperature fluctuations from affecting the office environment, sound attenuation assemblies that reduce noise transmission from the production floor, observation windows and mezzanine-level management offices overlooking the warehouse floor, dedicated electrical panels and data infrastructure for office technology systems, and ADA-compliant restrooms, break rooms, and common areas designed for both office and production staff. The office component of an industrial building often represents only 10 to 20 percent of the total square footage but requires 40 to 50 percent of the mechanical and electrical engineering effort due to the comfort and code requirements for occupied office space. We ensure the office portion of your facility meets the same quality and finish standards as a standalone commercial office while maintaining the operational efficiency of the industrial side.',
    cost: '$90-$180/sq ft',
  },
  {
    icon: Truck,
    title: 'Logistics Hubs & Cross-Dock Facilities',
    slug: 'logistics-hubs-cross-dock',
    desc: 'High-throughput logistics facilities with extensive dock door configurations, trailer parking, truck courts, and material handling infrastructure for rapid freight movement.',
    details:
      'Logistics hub construction focuses on throughput efficiency, which means the building design is driven by how quickly goods can be received, sorted, and shipped. We build logistics facilities with 50 to 150 dock-high loading positions along multiple building faces, full cross-dock configurations with dock doors on opposing walls for inbound and outbound freight, oversized truck courts with 130-foot minimum depth for tractor-trailer maneuvering, trailer parking fields with concrete or stabilized aggregate surfaces rated for loaded trailer weights, automated conveyor and sortation system infrastructure including floor channels, mezzanine supports, and electrical service points, and high-efficiency LED lighting systems with motion sensors to reduce energy costs in facilities that operate around the clock. Charlotte logistics hub development is concentrated along the I-85 corridor toward Gastonia and the I-77 corridor toward Statesville, where large land parcels are available at competitive prices and highway access supports rapid freight movement to the entire Southeast region. Our team understands the site development challenges specific to logistics facilities, including stormwater management for large impervious surface areas and traffic impact studies for high truck-count operations.',
    cost: '$55-$110/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Needs Assessment & Feasibility Study',
    desc: 'We begin every industrial construction project with a thorough needs assessment. Our team meets with your operations, logistics, and facility management teams to understand production workflows, storage requirements, throughput volumes, equipment specifications, and growth projections. We evaluate potential sites for zoning compliance, utility availability, geotechnical conditions, and environmental considerations. For existing facilities, we assess the building structure, mechanical systems, and electrical capacity to determine what can be reused and what needs to be replaced or upgraded.',
  },
  {
    step: '02',
    title: 'Site Selection & Due Diligence',
    desc: 'For ground-up industrial projects, site selection is critical to long-term operational success. We help evaluate candidate sites based on highway access, proximity to labor pools, utility infrastructure capacity, zoning restrictions, environmental conditions, topography, and stormwater management feasibility. Our team coordinates Phase I and Phase II environmental assessments, geotechnical investigations, boundary and topographic surveys, and preliminary utility consultations to identify any site-specific challenges before you commit to a property.',
  },
  {
    step: '03',
    title: 'Conceptual Design & Budget Development',
    desc: 'Our design-build team develops conceptual building plans, site layouts, and preliminary structural designs based on your operational requirements. We create initial cost models that break down every major budget category including sitework, foundations, structural steel or tilt-up panels, roofing, interior improvements, mechanical and electrical systems, fire protection, and site utilities. This phase establishes the project budget range and identifies any value engineering opportunities to optimize cost without sacrificing operational performance.',
  },
  {
    step: '04',
    title: 'Design Development & Engineering',
    desc: 'Once the concept and budget are approved, we advance the design into detailed construction documents. Structural engineering addresses column spacing, clear heights, crane loads, mezzanine capacities, and seismic design requirements. Mechanical engineering sizes HVAC, process piping, and compressed air systems. Electrical engineering designs power distribution, lighting, fire alarm, and low-voltage systems. Civil engineering completes site grading, stormwater detention, utility routing, and paving designs. All disciplines coordinate through our design-build process to eliminate conflicts before construction begins.',
  },
  {
    step: '05',
    title: 'Permitting & Regulatory Approvals',
    desc: 'Industrial construction in Mecklenburg County and surrounding jurisdictions requires building permits, grading permits, stormwater permits, driveway permits, fire marshal approvals, and potentially environmental permits depending on your operations. We prepare and submit all permit applications, respond to plan review comments, attend technical review meetings, and coordinate with utility providers for service connections. For projects in industrial parks or planned developments, we handle architectural review committee submissions and covenants compliance documentation.',
  },
  {
    step: '06',
    title: 'Pre-Construction & Procurement',
    desc: 'Before mobilizing to the site, we finalize the construction schedule, issue purchase orders for long-lead materials including structural steel, pre-engineered metal building packages, dock equipment, overhead doors, and specialized mechanical equipment. We pre-qualify and contract all subcontractors, establish quality control procedures, develop a site-specific safety plan, and coordinate material staging logistics. For phased projects or renovations of occupied facilities, we develop a detailed phasing plan that maintains your operations during construction.',
  },
  {
    step: '07',
    title: 'Site Development & Foundations',
    desc: 'Construction begins with site clearing, mass grading, erosion control installation, and underground utility work including storm drainage, sanitary sewer, water service, gas service, and electrical duct banks. Foundation work follows with spread footings, continuous wall footings, grade beams, and reinforced slab-on-grade with fiber or welded wire mesh reinforcement. For facilities requiring super-flat floors for automated guided vehicles or very narrow aisle racking, we use laser-guided screeding equipment to achieve F-number specifications.',
  },
  {
    step: '08',
    title: 'Structural Erection & Building Envelope',
    desc: 'The structural phase is the most visible and dramatic portion of industrial construction. Whether your building uses pre-engineered metal framing, structural steel with bar joists, or concrete tilt-up wall panels, our team manages the erection sequence to maintain schedule and safety. Roofing systems, wall cladding, insulation, vapor barriers, dock equipment, overhead doors, and storefront entries are installed to create a weather-tight building envelope. This phase typically represents 30 to 40 percent of the total construction timeline for ground-up industrial facilities.',
  },
  {
    step: '09',
    title: 'Interior Build-Out & Systems Installation',
    desc: 'With the building envelope complete, interior work begins on office build-outs, restrooms, break rooms, mechanical rooms, and production support spaces. Electrical distribution, lighting, fire alarm, and fire sprinkler systems are installed throughout the facility. Specialized systems including compressed air piping, overhead crane installation, process ventilation, and production equipment utility connections are coordinated with your equipment vendors to ensure everything is ready for commissioning when your machinery arrives on site.',
  },
  {
    step: '10',
    title: 'Commissioning, Inspections & Turnover',
    desc: 'The final phase includes comprehensive systems commissioning, where every mechanical, electrical, plumbing, and fire protection system is tested and balanced to ensure proper operation. We coordinate all final inspections with local building officials and the fire marshal. Certificate of occupancy is obtained, and we deliver complete close-out documentation including as-built drawings, equipment manuals, warranty certificates, maintenance schedules, and final lien waivers. Our one-year workmanship warranty covers all construction performed by our team, and we remain available for any post-occupancy adjustments.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Our military background drives the discipline, accountability, and mission-focused execution that industrial clients demand. When we commit to a schedule and a budget for your warehouse, distribution center, or manufacturing facility, we treat that commitment as a promise to be honored, not a target to be adjusted.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience, including extensive work in industrial and warehouse environments. We understand the structural engineering, heavy mechanical systems, specialized foundations, and code requirements unique to industrial construction. This experience means fewer surprises during construction, faster problem resolution when challenges arise, and better outcomes for your facility and your bottom line.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, which is essential for industrial projects in the Charlotte metro area where the best sites may be on either side of the state line. Whether your project is along the I-85 corridor in Gastonia, the I-77 corridor in Mooresville, or across the border in Fort Mill or Rock Hill, our dual-state licensing ensures full compliance with state regulations and building codes.',
  },
  {
    icon: Lightbulb,
    title: 'Design-Build Capability',
    desc: 'Our in-house design-build approach is particularly valuable for industrial construction, where building design must be driven by operational requirements rather than architectural aesthetics. We coordinate structural engineering, mechanical design, electrical layout, fire protection, and site civil engineering under one contract and one team. This single-source accountability eliminates the coordination gaps, finger-pointing, and costly change orders that plague projects where design and construction are handled by separate firms.',
  },
  {
    icon: Cog,
    title: 'Industrial Systems Expertise',
    desc: 'Industrial facilities require specialized building systems that most commercial contractors rarely encounter. We have direct experience with overhead bridge crane installation, heavy power distribution, compressed air networks, process piping, industrial ventilation and exhaust systems, high-piled storage fire suppression, and reinforced floor slabs for heavy equipment. Our team coordinates with your equipment vendors to ensure building infrastructure is designed to support your specific production and storage requirements.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our industrial projects. Energy-efficient LED lighting with daylight harvesting, high-performance insulated wall and roof systems, low-flow plumbing fixtures, cool roof membranes, stormwater management with bioretention, and electric vehicle charging infrastructure are standard considerations on our industrial projects. Sustainable design reduces long-term operating costs for facilities that consume significant energy.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Industrial Market Knowledge',
    desc: 'We know the Charlotte industrial real estate market and the specific challenges of building in this region. We understand Mecklenburg County permitting timelines, NCDOT driveway permit requirements for high truck-count operations, local stormwater detention regulations, subcontractor availability for industrial trades, and material lead times for structural steel and pre-engineered metal buildings. This local knowledge translates into more accurate budgets, realistic schedules, and fewer delays.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Industrial construction projects involve large investments and complex stakeholder groups. Every We Build industrial client receives weekly progress reports with photos and schedule updates, a dedicated project manager as their single point of contact, real-time notification of any issues that could affect timeline or budget, and regular coordination meetings with your operations and equipment vendor teams. We believe informed clients make better decisions, and we prioritize clear communication throughout the project lifecycle.',
  },
];

const costTiers = [
  {
    type: 'Basic Warehouse Shell',
    range: '$55-$80/sq ft',
    desc: 'Pre-engineered metal building warehouse shell with concrete slab, basic lighting, minimal office space, and standard dock doors. Suitable for general storage and distribution operations that do not require climate control or specialized systems.',
  },
  {
    type: 'Standard Distribution Center',
    range: '$80-$120/sq ft',
    desc: 'Warehouse with 32 to 36 foot clear height, ESFR fire sprinkler system, energy-efficient LED high-bay lighting, multiple dock positions, office build-out, truck court paving, and site improvements including stormwater detention. The most common scope for Charlotte-area distribution facilities.',
  },
  {
    type: 'Manufacturing Facility',
    range: '$100-$175/sq ft',
    desc: 'Production-ready facility with heavy power distribution, overhead crane infrastructure, process piping, industrial ventilation, reinforced floor slabs, and office build-out. Cost varies significantly based on equipment requirements and environmental control needs.',
  },
  {
    type: 'Cold Storage Warehouse',
    range: '$150-$300/sq ft',
    desc: 'Temperature-controlled facility with insulated metal panels, refrigeration system infrastructure, vapor barriers, heated floor slabs, air-lock vestibules, and FDA or USDA-compliant finishes. Cost depends on temperature zones and refrigeration tonnage required.',
  },
  {
    type: 'Light Industrial / Flex Space',
    range: '$70-$130/sq ft',
    desc: 'Flexible facility combining warehouse and office space with 18 to 24 foot clear heights, loading capability, climate-controlled office areas, and multi-tenant or single-user configurations. Popular along the I-77 and I-485 corridors.',
  },
  {
    type: 'Logistics Hub / Cross-Dock',
    range: '$55-$110/sq ft',
    desc: 'High-throughput facility with extensive dock door configurations, oversized truck courts, trailer parking, conveyor infrastructure, and 24/7 operational lighting. Cost driven by number of dock positions and site development requirements.',
  },
  {
    type: 'Warehouse Renovation & Expansion',
    range: '$40-$95/sq ft',
    desc: 'Renovation of existing warehouse space including dock additions, clear height modifications, fire sprinkler upgrades, electrical service expansion, office renovations, and building envelope improvements. Scope depends heavily on existing building conditions.',
  },
];

const faqs = [
  {
    question: 'How much does warehouse construction cost in Charlotte, NC?',
    answer:
      'Warehouse construction costs in Charlotte vary based on building type, size, clear height, and systems complexity. Basic warehouse shells with pre-engineered metal buildings start around $55 to $80 per square foot. Standard distribution centers with 32 to 36 foot clear heights, ESFR sprinkler systems, and office build-outs run $80 to $120 per square foot. Manufacturing facilities with heavy power, crane infrastructure, and process systems range from $100 to $175 per square foot. Cold storage warehouses with insulated panels and refrigeration infrastructure run $150 to $300 per square foot. Site development costs including grading, paving, utilities, and stormwater management are additional and can represent 15 to 25 percent of total project cost. We provide detailed, line-item estimates after a site visit and needs assessment.',
  },
  {
    question: 'How long does it take to build a warehouse or industrial facility in Charlotte?',
    answer:
      'Construction timelines for industrial facilities in Charlotte depend on project size, complexity, and permitting requirements. A basic warehouse shell of 20,000 to 50,000 square feet typically takes 6 to 9 months from permit issuance to certificate of occupancy. Standard distribution centers of 50,000 to 200,000 square feet require 9 to 14 months. Large distribution centers exceeding 200,000 square feet may take 12 to 18 months. Manufacturing facilities with specialized systems often require 10 to 16 months depending on equipment complexity. Add 2 to 4 months for design and permitting before construction begins. We provide detailed schedules during the pre-construction phase and update them weekly throughout construction.',
  },
  {
    question: 'What zoning is required for industrial construction in Charlotte?',
    answer:
      'Industrial construction in Charlotte and Mecklenburg County requires appropriate zoning classifications. The most common industrial zoning districts are I-1 (Light Industrial) and I-2 (General Industrial). I-1 zoning permits warehousing, distribution, light manufacturing, and flex industrial uses with certain restrictions on outdoor storage, noise levels, and operating hours. I-2 zoning allows heavier manufacturing, processing, and outdoor storage with fewer restrictions. Some industrial uses may be permitted in Business Park (BP) or Mixed-Use (MX) districts with conditional approvals. If your intended use does not conform to the existing zoning, a rezoning petition or conditional use permit may be required, which adds 3 to 6 months to the development timeline. We help clients navigate zoning requirements during site selection.',
  },
  {
    question: 'Do I need a fire sprinkler system in my warehouse?',
    answer:
      'Yes, virtually all warehouse and industrial buildings in North Carolina require automatic fire sprinkler protection per the NC Building Code and NC Fire Code. The type of sprinkler system depends on your storage configuration. Standard wet-pipe systems are adequate for general storage below certain height and commodity thresholds. High-piled storage, which the fire code defines as storage exceeding 12 feet in height for most commodities, triggers more stringent requirements including ESFR (Early Suppression Fast Response) sprinklers, in-rack sprinklers, or large-drop sprinkler heads. The design is driven by commodity classification, storage height, storage method such as rack versus solid pile, and aisle widths. Hazardous materials storage requires specialized suppression systems. We coordinate fire protection design with the fire marshal review during the permitting process to ensure your system is approved before construction begins.',
  },
  {
    question: 'What clear height do I need for my warehouse?',
    answer:
      'Clear height, which is the distance from the finished floor to the lowest overhead obstruction such as a beam, sprinkler head, or light fixture, is one of the most important design decisions in warehouse construction. Standard distribution warehouses in the Charlotte market are being built with 32 to 36 foot clear heights to accommodate modern racking systems and maximize cubic storage capacity. Facilities using very narrow aisle racking with turret trucks may need 40-foot clear heights. Light industrial and flex buildings typically have 18 to 24 foot clear heights. Cold storage facilities usually have lower clear heights of 28 to 32 feet due to refrigeration efficiency considerations. Your optimal clear height depends on your storage method, commodity type, material handling equipment, and growth projections. We help clients determine the right clear height during the needs assessment phase.',
  },
  {
    question: 'Can you renovate or expand my existing warehouse in Charlotte?',
    answer:
      'Yes, warehouse renovation and expansion is a significant portion of our industrial construction work. Common renovation projects include adding dock doors and levelers to increase shipping and receiving capacity, building out office and break room space within the warehouse shell, upgrading electrical service to support new equipment or additional lighting, installing or upgrading fire sprinkler systems to accommodate changes in storage height or commodity type, adding mezzanine levels for additional storage or office space, improving building envelope insulation and roofing, and expanding the building footprint with additions that tie into the existing structure. Renovations of occupied facilities require careful phasing to maintain your operations during construction. We develop detailed phasing plans that isolate construction areas and schedule the most disruptive work during off-hours or planned shutdown periods.',
  },
  {
    question: 'What site requirements are needed for industrial construction?',
    answer:
      'Industrial site development in the Charlotte area involves several critical requirements. Adequate acreage is the starting point, and industrial facilities typically need a site 2 to 3 times the building footprint to accommodate truck courts, trailer parking, employee parking, stormwater detention, and landscaping buffers. Highway access with appropriate road classifications for heavy truck traffic is essential. Utility infrastructure must include adequate water service for fire protection, sanitary sewer capacity, natural gas for heating, and electrical service typically at 12.47kV primary voltage with capacity for the building load. Soil conditions must support the building foundations and floor slab without excessive settlement. Stormwater regulations in Mecklenburg County require detention facilities sized to manage runoff from the large impervious surfaces typical of industrial development. Environmental due diligence including Phase I assessments is standard for industrial sites.',
  },
  {
    question: 'Do you build pre-engineered metal buildings or structural steel?',
    answer:
      'We build both pre-engineered metal buildings and conventional structural steel facilities, and we help clients choose the right structural system for their project. Pre-engineered metal buildings offer cost advantages for standard warehouse configurations with regular column spacing and straightforward clear span requirements. They arrive as a complete package including primary framing, secondary members, wall cladding, roofing, and trim. Conventional structural steel with bar joists and metal deck provides more design flexibility for irregular shapes, future expansion, heavy crane loads, and multi-story configurations. Concrete tilt-up wall construction is another option that provides excellent durability, fire resistance, and a more finished appearance at competitive cost for larger facilities. The right choice depends on your building size, clear span requirements, future expansion plans, budget, and aesthetic preferences. We provide comparative pricing during the conceptual design phase.',
  },
  {
    question: 'What permits are required for industrial construction in Charlotte?',
    answer:
      'Industrial construction in Mecklenburg County requires multiple permits from different agencies. The primary building permit covers structural, mechanical, electrical, and plumbing work and is issued by Mecklenburg County Code Enforcement or the City of Charlotte, depending on the jurisdiction. A grading permit is required for any land disturbance exceeding specified thresholds and is reviewed for erosion control compliance. Stormwater permits address post-construction runoff management. NCDOT driveway permits are required for connections to state-maintained roads, and the review focuses on sight distance, turn lanes, and traffic impact. Fire marshal plan review covers fire sprinkler, fire alarm, and fire separation requirements. Water and sewer tap permits are issued by Charlotte Water. If your facility involves air emissions, wastewater discharge, or hazardous materials storage, additional environmental permits from NCDEQ may be required. We manage the complete permitting process and build permit timelines into the project schedule.',
  },
  {
    question: 'What areas do you serve for industrial construction?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for industrial and warehouse construction. Our primary service area includes Charlotte, South Charlotte, University City, Northlake, and surrounding Mecklenburg County communities. We actively build along the major industrial corridors including the I-85 corridor through Gastonia, Mount Holly, and Belmont to the west, the I-77 corridor through Mooresville, Statesville, and Exit 28 to the north, and the I-485 loop where significant industrial development is occurring near Charlotte Douglas International Airport and the intermodal rail terminal. We also serve Fort Mill, Rock Hill, Indian Land, and York County in South Carolina, as well as the Lake Norman communities of Cornelius, Davidson, and Huntersville. Our NC and SC general contractor licenses allow us to work across both states seamlessly.',
  },
  {
    question: 'How do you handle industrial construction safety?',
    answer:
      'Safety is embedded in our company culture, reflecting our veteran leadership background where mission safety is non-negotiable. Every industrial construction project begins with a site-specific safety plan that identifies hazards unique to the scope of work, including steel erection, elevated work, heavy equipment operation, confined space entry, and hot work. We conduct daily safety briefings, weekly toolbox talks, and monthly safety audits. All workers on our industrial job sites complete OSHA 10-Hour construction safety training at minimum, with supervisors holding OSHA 30-Hour certifications. We maintain a comprehensive safety program that includes fall protection, lockout/tagout procedures, rigging and crane safety protocols, and emergency action plans. Our experience modification rate reflects our commitment to keeping every worker safe on every project.',
  },
];

export default function IndustrialConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Industrial & Warehouse Construction Charlotte NC',
            'Expert industrial and warehouse construction in Charlotte, NC. Distribution centers, manufacturing facilities, cold storage warehouses, logistics hubs, light industrial build-outs, and warehouse renovations. Veteran-owned, licensed in NC & SC. 60+ years combined experience.',
            'https://webuildclt.com/services/industrial-construction'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Industrial & Warehouse Construction Charlotte NC"
        subtitle="Build your industrial facility with Charlotte's veteran-owned construction experts — warehouses, distribution centers, manufacturing plants & more"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Industrial & Warehouse Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Industrial & Warehouse Construction Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte, North Carolina has emerged as one of the most dynamic industrial
                markets in the southeastern United States, and the growth shows no signs of
                slowing down. Sitting at the crossroads of I-77 and I-85, two of the most
                heavily trafficked freight corridors on the East Coast, the Charlotte metro
                area provides unmatched logistics access to markets from Atlanta to Washington,
                D.C. and beyond. The region is home to Charlotte Douglas International Airport,
                one of the busiest cargo airports in the nation, and the Norfolk Southern
                intermodal terminal near I-485, which connects Charlotte to the global supply
                chain via rail. This infrastructure has attracted a surge of industrial
                development that has transformed the Charlotte skyline of steel and concrete
                along every major highway corridor in the region. Whether you need a new
                distribution center along the I-85 corridor, a manufacturing facility near
                the I-77 interchange, or a warehouse renovation to increase capacity at your
                existing operation, industrial construction in Charlotte demands a contractor
                who understands the specialized requirements of these facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Industrial and warehouse construction is fundamentally different from{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link> or{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link>.
                The building systems are heavier, the structural engineering is more complex,
                the floor slab specifications are more demanding, and the fire protection
                requirements are more stringent. A warehouse with 36-foot clear heights and
                high-piled racking storage requires an ESFR sprinkler system engineered to
                deliver massive water volumes at high pressure. A manufacturing facility with
                overhead bridge cranes needs runway beams integrated into the structural steel
                with precise alignment tolerances. A cold storage warehouse needs insulated
                panel systems, vapor barriers, heated floor slabs to prevent frost heave, and
                refrigeration infrastructure sized for the thermal load. These are not details
                that a general-purpose contractor can figure out on the fly. They require
                specific industrial construction experience, trade relationships with specialized
                subcontractors, and engineering coordination that starts in the earliest design
                phases.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. Our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">design-build</Link> approach
                means we handle everything from initial feasibility studies and site selection
                assistance through engineering, permitting, construction, and final commissioning,
                all under one contract and one team. Licensed in both North Carolina and South
                Carolina, we serve the entire Charlotte metropolitan area including the I-85
                industrial corridor, the I-77 corridor, and communities in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>,
                and surrounding areas. As a member of the U.S. Green Building Council (USGBC),
                we incorporate energy-efficient and sustainable building practices into every
                industrial project, reducing long-term operating costs for facilities that
                consume significant energy.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: DollarSign, title: 'Cost-Effective Solutions', desc: 'Our design-build approach and industrial trade relationships deliver maximum facility value per dollar invested, with transparent pricing and no hidden costs.' },
                { icon: Clock, title: 'On-Schedule Delivery', desc: 'Industrial timelines are driven by business deadlines. We build detailed schedules with long-lead procurement built in, keeping your project on track from groundbreaking to move-in.' },
                { icon: Zap, title: 'Industrial Systems Expertise', desc: 'Heavy power, crane infrastructure, compressed air, process piping, ESFR sprinklers, and reinforced slabs. We build the specialized systems commercial contractors do not handle.' },
                { icon: Shield, title: 'Veteran-Owned Accountability', desc: 'Military discipline drives our commitment to schedules, budgets, safety, and quality. When we commit to delivering your facility, we treat it as a mission to be completed.' },
              ].map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Industrial Facilities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Facility Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Industrial Facilities We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every industrial operation has unique requirements driven by product type, throughput
              volume, equipment specifications, and regulatory compliance. We bring specialized
              experience to each facility type, from straightforward warehouse shells to complex
              manufacturing environments and temperature-controlled storage facilities.
            </p>
          </div>
          <div className="space-y-8">
            {facilityTypes.map((type) => (
              <Card key={type.title} id={type.slug}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold">{type.title}</h3>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          {type.cost}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{type.desc}</p>
                      <p className="text-muted-foreground">{type.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Industrial Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Industrial Construction Process: 10 Steps from Feasibility to Commissioning
            </h2>
            <p className="text-muted-foreground">
              A disciplined, transparent process designed to deliver your industrial facility
              on schedule and within budget. Every step includes clear communication so you
              always know exactly where your project stands, from initial site evaluation
              through final systems commissioning and certificate of occupancy.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((s) => (
              <div key={s.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for Your Industrial Construction Project
            </h2>
            <p className="text-muted-foreground">
              Industrial construction requires a contractor who understands the specialized
              systems, heavy structural requirements, and operational demands that distinguish
              industrial facilities from commercial buildings. Here is what sets We Build apart
              in the Charlotte industrial construction market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Considerations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Technical Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Critical Industrial Construction Considerations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industrial facilities involve building systems and engineering requirements that
                go far beyond standard commercial construction. These are the critical technical
                considerations that determine whether your facility will perform as designed
                for decades of heavy industrial use.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Truck,
                  title: 'Loading Docks & Dock Equipment',
                  desc: 'Loading dock design drives operational efficiency in every warehouse and distribution facility. We engineer dock configurations including dock-high positions at 48-inch height for standard trailer access, grade-level drive-in doors for forklift loading, mechanical or hydraulic dock levelers that bridge the gap between the building floor and the trailer bed, dock shelters or seals that provide weather protection during loading, bumper pads that protect the building from trailer impact, and dock lighting both interior and exterior for safe operation during early morning and evening shifts. Cross-dock facilities require dock doors on opposing building walls with clear interior spans that allow material handling equipment to transfer freight from inbound to outbound trailers with minimal handling. The number, size, and configuration of dock positions are driven by your throughput volume, carrier scheduling patterns, and material handling equipment.',
                },
                {
                  icon: ChevronsUp,
                  title: 'Clear Height & Structural Design',
                  desc: 'Clear height is the single most important dimensional specification in warehouse construction because it determines your cubic storage capacity. Modern distribution warehouses in the Charlotte market are being constructed with 32 to 40 foot clear heights to accommodate selective pallet racking, push-back racking, and automated storage and retrieval systems. Achieving these clear heights requires careful structural engineering to coordinate primary steel column heights, secondary member depths, sprinkler pipe routing, and lighting fixture mounting heights so the usable clear height is maximized. Column spacing, typically 40 to 50 feet in warehouse facilities, affects your racking layout and aisle configuration. We coordinate structural design with your racking vendor to ensure column locations do not conflict with rack row positions and forklift aisle widths.',
                },
                {
                  icon: Flame,
                  title: 'Fire Separation & Protection',
                  desc: 'Fire protection in industrial facilities is governed by building code occupancy classifications and fire code storage requirements that are significantly more stringent than commercial construction. When a building contains both warehouse and office occupancies, fire-rated separation walls, typically 2-hour rated assemblies, are required between the different occupancy types. High-piled storage triggers ESFR sprinkler systems that deliver 60 to 100 gallons per minute per sprinkler head at high pressures, requiring large-diameter supply mains and dedicated fire pumps. Hazardous materials storage may require separate fire areas, explosion venting, or specialized suppression systems. Fire alarm systems with manual pull stations, smoke and heat detectors, duct detectors, and flow switches are integrated with the building fire command center. We coordinate fire protection design with the local fire marshal from the earliest design phase to prevent costly redesign during plan review.',
                },
                {
                  icon: Bolt,
                  title: 'Heavy Power & Electrical Distribution',
                  desc: 'Industrial facilities consume significantly more electrical power than commercial buildings. Manufacturing plants, cold storage warehouses, and logistics facilities with automated material handling systems may require electrical services rated at 2,000 to 4,000 amps or higher at 480/277-volt three-phase power. The electrical infrastructure includes utility company coordination for primary service at 12.47kV or higher, pad-mounted or unit substation transformers, main distribution switchgear, motor control centers for production equipment, panelboards for lighting and receptacle circuits, and emergency generator systems for critical operations. Power distribution to individual machines, conveyors, and production stations must be coordinated with equipment vendor electrical requirements, including voltage, phase, amperage, and control signal specifications. We design electrical infrastructure with capacity for future growth so you are not forced into expensive electrical upgrades when you add equipment or expand operations.',
                },
                {
                  icon: Cable,
                  title: 'Compressed Air & Process Piping',
                  desc: 'Manufacturing and assembly operations frequently require compressed air distribution systems, process water piping, natural gas piping for production equipment, and waste piping for industrial processes. Compressed air systems include air compressors sized for your peak demand with appropriate receivers, dryers, and filtration to deliver clean, dry air at the required pressure and volume to production stations throughout the facility. Distribution piping is typically aluminum or steel with drop legs at each workstation. Process piping for water, chemicals, or waste streams must be designed for the specific fluids, pressures, temperatures, and regulatory requirements of your operation. We coordinate process piping design with your equipment vendors and environmental compliance requirements to ensure every system is properly sized, supported, and accessible for maintenance.',
                },
                {
                  icon: Gauge,
                  title: 'Overhead Crane Rails & Heavy Equipment',
                  desc: 'Manufacturing facilities that handle heavy components, raw materials, or finished products frequently require overhead crane systems. Bridge cranes, jib cranes, and monorail systems need structural support integrated into the building frame from the initial design phase. Crane runway beams must be engineered for the crane capacity, span, and duty cycle, with proper connections to building columns that can handle the vertical loads, lateral forces, and longitudinal forces generated during crane operation. The building foundation and floor slab must also be designed to accommodate crane-loaded columns, which transfer significantly higher loads to the foundation than standard warehouse columns. Rail alignment tolerances are tight, typically within 1/4-inch over the full runway length, requiring precise structural steel erection. We coordinate crane system procurement, structural engineering, and installation to ensure your crane infrastructure is operational on day one.',
                },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Construction Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Industrial & Warehouse Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Industrial construction costs in Charlotte depend on the facility type, building
                size, structural system, mechanical and electrical complexity, and site conditions.
                Below are typical cost ranges based on recent industrial projects in the Charlotte
                metro area. Every project is different, and we provide detailed, line-item
                estimates after a site visit and needs assessment.
              </p>
            </div>
            <div className="space-y-4">
              {costTiers.map((item) => (
                <div key={item.type} className="p-6 bg-background rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{item.type}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">Factors That Affect Your Industrial Construction Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Clear height:</strong> Every additional foot of clear height increases structural steel, wall cladding, and fire protection costs. A 36-foot clear warehouse costs materially more per square foot than a 24-foot clear building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Site conditions:</strong> Geotechnical conditions, topography, environmental remediation, utility availability, and stormwater management requirements significantly impact site development costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Specialized systems:</strong> Overhead cranes, heavy power, compressed air, process piping, temperature control, and automated material handling systems each add cost layers beyond a basic warehouse shell.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Fire protection complexity:</strong> ESFR sprinkler systems, fire pumps, and specialized suppression for high-piled storage or hazardous materials add significant cost compared to standard wet-pipe systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Office build-out ratio:</strong> The office component of an industrial building costs 2 to 3 times more per square foot than the warehouse portion due to comfort systems, finishes, and code requirements for occupied space.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Industrial & Warehouse Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte businesses ask about
                industrial construction, warehouse building costs, timelines, permits,
                and facility design.
              </p>
            </div>
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

      {/* Related Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Industrial Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and articles for more information on industrial and warehouse
              construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Warehouse Construction Costs in Charlotte: Complete Guide', slug: 'warehouse-construction-cost-charlotte' },
              { title: 'Choosing the Right Industrial Building Type', slug: 'choosing-industrial-building-type' },
              { title: 'Site Selection for Industrial Facilities in the Charlotte Market', slug: 'industrial-site-selection-charlotte' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Industrial Facility in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a new warehouse, distribution center, manufacturing
            facility, cold storage building, or industrial renovation in Charlotte, We Build
            has the experience, industrial expertise, and local knowledge to deliver your
            project on time and within budget.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site visit and detailed estimate. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities along the I-85 and I-77 industrial corridors.
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
              <a href="tel:7045748124">
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
