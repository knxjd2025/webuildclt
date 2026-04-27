import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Warehouse,
  Building2,
  Thermometer,
  Factory,
  Container,
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
  MapPin,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ClipboardCheck,
  Hammer,
  Scale,
  Flame,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Warehouse Construction Charlotte NC | Distribution',
  description:
    'Warehouse construction in Charlotte NC: distribution centers, cold storage, flex space, logistics, renovations. Veteran-owned. Licensed NC & SC.',
  keywords: [
    'warehouse construction Charlotte NC',
    'warehouse construction near me',
    'warehouse construction contractor',
    'warehouse construction cost',
    'distribution center construction Charlotte',
    'warehouse buildout near me',
    'cold storage construction Charlotte',
    'flex space construction',
    'logistics facility Charlotte NC',
    'warehouse renovation Charlotte',
    'warehouse builder Charlotte NC',
    'warehouse contractor near me',
    'commercial warehouse construction',
    'warehouse construction raleigh nc',
    'distribution center construction raleigh',
    'flex space construction raleigh',
    'cold storage construction raleigh',
    'warehouse builder raleigh nc',
    'warehouse construction research triangle',
    'warehouse construction wake county',
    'logistics facility raleigh nc',
    'warehouse construction durham nc',
    'distribution center construction durham',
    'flex space construction durham',
    'life sciences warehouse durham',
    'lab support warehouse rtp',
    'warehouse construction rtp',
    'warehouse construction durham county',
    'i-40 corridor warehouse construction',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/warehouse-construction',
  },
  openGraph: {
    title: 'Warehouse Construction Charlotte NC | We Build',
    description:
      'Build your warehouse, distribution center, or cold storage facility with our veteran-owned construction team. Licensed in NC & SC. Serving Charlotte, Raleigh, Durham, and the Carolinas.',
    url: 'https://webuildclt.com/services/warehouse-construction',
    type: 'website',
  },
};

const warehouseTypes = [
  {
    icon: Container,
    title: 'Distribution Center Construction',
    slug: 'distribution-center',
    desc: 'Large-scale logistics and distribution facilities with loading docks, high clear heights, cross-dock configurations, and sortation system infrastructure for regional and national supply chains.',
    details:
      'Distribution center construction requires a fundamentally different approach than standard commercial buildings. These facilities are designed around product flow: receiving docks on one side, storage in the middle, and shipping docks on the other, with cross-dock configurations enabling direct transfer from inbound to outbound trucks when speed is critical. Clear heights of 32 to 40 feet are standard for modern distribution centers to maximize vertical storage with racking systems. Concrete floor slabs must meet FM2 or tighter flatness tolerances for forklift traffic and automated guided vehicles, with typical thickness of 6 to 8 inches using fiber-reinforced or rebar-reinforced concrete. Dock equipment includes hydraulic dock levelers, dock seals or shelters, trailer restraints for safety, and dock lights. Fire suppression in distribution centers requires Early Suppression Fast Response (ESFR) sprinkler systems designed for the specific commodity and rack storage configuration, which is far more complex than standard sprinkler design. Charlotte position along the I-85 corridor between Atlanta and the Northeast makes it a prime location for regional distribution, and we understand the site requirements, utility demands, and construction timelines that distribution center operators need in this market.',
    cost: '$100-$200/sq ft',
  },
  {
    icon: Thermometer,
    title: 'Cold Storage & Refrigerated Warehouse',
    slug: 'cold-storage',
    desc: 'Temperature-controlled storage facilities with insulated panel systems, refrigeration infrastructure, vapor barriers, and specialized flooring for frozen, refrigerated, and multi-temperature operations.',
    details:
      'Cold storage construction is among the most technically demanding warehouse types due to the thermal engineering required to maintain temperature zones ranging from -20 degrees Fahrenheit for frozen storage to 34-38 degrees for refrigerated. The building envelope requires continuous insulated metal panels, typically 4 to 6 inches thick with polyurethane or polyisocyanurate cores, installed with sealed joints to prevent thermal bridging and moisture infiltration. Vapor barriers on the warm side of the insulation prevent condensation that would degrade insulation performance and create ice buildup. Floor construction in freezer areas requires heated slabs to prevent frost heave, where the ground beneath the slab freezes and expands, potentially cracking the floor and destabilizing racking systems. Refrigeration systems include compressors, condensers, evaporators, and control systems sized for the specific temperature requirements and product load. Dock areas in cold storage facilities need air curtains, strip curtains, or insulated dock doors to minimize temperature loss during loading and unloading. Multi-temperature facilities with separate frozen, refrigerated, and ambient zones require thermal separation walls and independent refrigeration circuits for each zone. Charlotte growing food distribution sector along the I-85 and I-77 corridors has increased demand for cold storage construction.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Building2,
    title: 'Flex Space Construction',
    slug: 'flex-space',
    desc: 'Combined office and warehouse buildings designed for growing businesses that need professional front-office space connected to warehouse, production, or distribution operations under one roof.',
    details:
      'Flex space construction serves the large and growing segment of businesses that need both professional office environments and functional warehouse or production space in a single building. The typical flex building has a front office section with standard commercial finishes, HVAC, and ceiling heights of 9 to 10 feet, transitioning to a warehouse section in the rear with 18 to 24 foot clear heights, concrete floors, and dock-height or drive-in doors. The critical design challenge is the transition zone between office and warehouse: soundproofing to prevent warehouse noise from reaching the office, separate HVAC systems because the warehouse and office have different temperature and air quality requirements, and fire-rated separation walls between occupancy types. Flex buildings are popular with e-commerce businesses, specialty manufacturers, technology companies with inventory, and service companies that need both a customer-facing office and a back-of-house operations space. Charlotte flex space market is particularly active along the I-77 corridor, in the University area, and in the Airport-West submarket where businesses want proximity to logistics infrastructure without sacrificing office quality.',
    cost: '$120-$200/sq ft',
  },
  {
    icon: Factory,
    title: 'Manufacturing Facility Construction',
    slug: 'manufacturing-facility',
    desc: 'Production floors with specialized utilities, heavy-duty ventilation, overhead crane infrastructure, reinforced flooring, and process-specific mechanical and electrical systems.',
    details:
      'Manufacturing facility construction requires understanding the specific production process that will operate within the building because every manufacturing operation has unique infrastructure demands. Heavy manufacturing may require reinforced foundation systems and thickened floor slabs rated for equipment loads exceeding 500 pounds per square foot, overhead bridge crane infrastructure with runway beams supported by building columns engineered for crane capacity and wheel loads, and heavy-duty electrical service with 480-volt three-phase power for production equipment. Process ventilation systems must address the specific contaminants or heat generated by the manufacturing process, whether that is welding fumes, paint ovens, CNC coolant mist, or dust from woodworking or metalworking. Compressed air systems sized for the total connected load of pneumatic tools and equipment, process piping for gases or liquids, and waste handling systems for chips, shavings, or liquid waste are common requirements. Floor finishes depend on the manufacturing environment: chemical-resistant coatings for food or chemical processing, hardened surfaces for heavy forklift traffic, or anti-static finishes for electronics manufacturing. Charlotte manufacturing base spans automotive parts, food processing, metal fabrication, and advanced manufacturing.',
    cost: '$130-$250/sq ft',
  },
  {
    icon: Hammer,
    title: 'Warehouse Renovation & Expansion',
    slug: 'warehouse-renovation',
    desc: 'Adding dock doors, mezzanines, clear height improvements, new fire suppression systems, office buildouts, and expanded storage capacity to existing warehouse facilities.',
    details:
      'Warehouse renovation and expansion is often more cost-effective than new construction when the existing building has a good location and sound structural bones. Common renovation scopes include adding dock doors and dock equipment to increase shipping and receiving capacity, installing mezzanine levels to create additional storage or office space within the existing building footprint, upgrading fire suppression systems from standard sprinklers to ESFR systems required for higher rack storage configurations, improving LED lighting for energy savings and better visibility, adding or upgrading HVAC for climate-sensitive inventory, and building out office space within the warehouse for administrative operations. Clear height improvements are possible in some buildings by removing suspended ceilings, relocating ductwork and utilities above the racking zone, or in rare cases modifying the roof structure. Expansion projects that add square footage require foundation work, structural steel, roofing, and exterior wall construction that ties into the existing building while maintaining weather-tight conditions during construction. We phase renovation work to minimize disruption to ongoing warehouse operations, often working nights and weekends in active facilities.',
    cost: '$60-$150/sq ft',
  },
  {
    icon: Truck,
    title: 'Last-Mile Delivery Facilities',
    slug: 'last-mile-delivery',
    desc: 'Smaller distribution hubs for e-commerce and delivery operations with high door counts, van staging areas, sortation zones, and rapid-turn loading configurations.',
    details:
      'Last-mile delivery facilities have become one of the fastest-growing warehouse segments as e-commerce and same-day delivery reshape the logistics landscape. These buildings differ from traditional distribution centers in several key ways. They are typically smaller, ranging from 50,000 to 200,000 square feet, but require significantly higher dock door counts relative to their size because the entire inventory turns over daily or multiple times per day. Van staging and parking areas must accommodate dozens or hundreds of delivery vehicles with clear traffic flow patterns for efficient dispatch and return. Interior layouts prioritize sortation speed over storage density, with conveyor systems, sort walls, and staging lanes designed for rapid package processing. Clear heights are moderate at 24 to 32 feet because last-mile facilities store packages temporarily rather than warehousing inventory long-term. Electrical infrastructure must support battery charging stations for delivery vans as fleets electrify. Charlotte position as a growing metro area with expanding suburbs makes it an active market for last-mile facilities, particularly in the I-485 outer belt corridor and the Airport-West submarket where proximity to delivery zones is critical.',
    cost: '$90-$175/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Site Selection Assistance',
    desc: 'For clients who have not yet secured a site, we provide construction-focused site evaluation to assess candidate properties. Key factors include zoning for industrial use, utility capacity for the planned operation, soil conditions for foundation design, access to major transportation corridors, truck turning radius and dock approach requirements, stormwater management feasibility, and proximity to labor markets. Charlotte industrial market spans several distinct submarkets along I-85, I-77, I-485, and the Airport-West corridor, each with different land costs, utility availability, and access characteristics.',
  },
  {
    step: '02',
    title: 'Permitting & Approvals',
    desc: 'Warehouse and industrial construction in the Charlotte metro requires building permits from the local jurisdiction, which may be Mecklenburg County, the City of Charlotte, or surrounding municipalities depending on the site location. Permits cover structural, mechanical, electrical, plumbing, and fire protection plans. Stormwater permits are required for sites that disturb land or add impervious surface. Environmental permits may apply for operations involving hazardous materials or air emissions. We manage the full permitting process and maintain relationships with local plan reviewers to facilitate efficient reviews.',
  },
  {
    step: '03',
    title: 'Site Work & Foundations',
    desc: 'Site work begins with clearing, grading, and erosion control installation. Foundation work for warehouse construction typically involves continuous spread footings under building columns, thickened slab edges at dock doors and drive-in doors, and a reinforced concrete floor slab designed for the specific floor load requirements, flatness tolerances, and joint spacing your operation demands. Site utilities including water, sewer, storm drainage, electrical service, and natural gas are installed during this phase. Truck courts and parking areas are graded and paved with concrete or heavy-duty asphalt rated for truck traffic loads.',
  },
  {
    step: '04',
    title: 'Steel Erection & Enclosure',
    desc: 'Structural steel erection is the most visible phase of warehouse construction. Pre-engineered metal building systems or conventional structural steel frames are erected on the prepared foundations, followed by roof deck installation, exterior wall panel or tilt-up concrete wall construction, and roofing system installation. The building is dried in as quickly as possible to allow interior work to proceed regardless of weather. Dock doors, drive-in doors, personnel doors, and windows are installed during the enclosure phase.',
  },
  {
    step: '05',
    title: 'Interior Buildout & Systems',
    desc: 'Interior construction includes fire suppression system installation and testing, electrical distribution and lighting, HVAC systems for office areas and any climate-controlled warehouse zones, plumbing for restrooms and break rooms, office buildout with finishes, and any specialized systems for your operation such as compressed air, process piping, or overhead crane installation. Warehouse lighting, typically high-bay LED fixtures, is installed and aimed for optimal illumination in aisle ways and dock areas.',
  },
  {
    step: '06',
    title: 'Inspections, Commissioning & Handoff',
    desc: 'Final inspections cover structural, mechanical, electrical, plumbing, fire protection, and accessibility compliance. Fire suppression systems are flow-tested and certified. HVAC systems are balanced and commissioned. Floor flatness is verified against specification tolerances. We conduct a detailed punch list walk-through and address every item before certificate of occupancy is issued. At handoff, you receive complete close-out documentation including as-built drawings, equipment warranties, maintenance schedules, and all permit certificates. Our one-year workmanship warranty covers all construction.',
  },
];

const costTiers = [
  {
    type: 'Basic Warehouse Shell',
    range: '$80-$150/sq ft',
    desc: 'Pre-engineered metal building or tilt-up concrete shell with standard clear height, basic dock doors, concrete floor slab, minimal office space, and standard fire suppression. Suitable for general warehousing, light distribution, and storage operations that do not require climate control or specialized systems.',
  },
  {
    type: 'Distribution Center',
    range: '$100-$200/sq ft',
    desc: 'Purpose-built distribution facility with 32 to 40 foot clear heights, ESFR fire suppression, multiple dock doors with levelers and restraints, cross-dock configuration, FM2 or better floor flatness, sortation system infrastructure, and office space. Cost depends on building size, dock count, and automation infrastructure.',
  },
  {
    type: 'Cold Storage Facility',
    range: '$150-$300/sq ft',
    desc: 'Temperature-controlled warehouse with insulated panel systems, refrigeration infrastructure, vapor barriers, heated floor slabs in freezer areas, air curtains at docks, and multi-temperature zone capability. The most expensive warehouse type due to thermal engineering, refrigeration equipment, and specialized construction details.',
  },
  {
    type: 'Flex Space (Office/Warehouse)',
    range: '$120-$200/sq ft',
    desc: 'Combined office and warehouse building with professional front-office finishes, separate HVAC zones, fire-rated separation between occupancy types, and dock or drive-in door access to the warehouse section. Popular with e-commerce, specialty manufacturers, and service companies in the Charlotte market.',
  },
  {
    type: 'Manufacturing Facility',
    range: '$130-$250/sq ft',
    desc: 'Production facility with reinforced floors, heavy electrical service, process ventilation, compressed air systems, and potentially overhead crane infrastructure. Cost varies significantly based on the manufacturing process, equipment loads, and environmental control requirements.',
  },
  {
    type: 'Warehouse Renovation',
    range: '$60-$150/sq ft',
    desc: 'Renovation of existing warehouse including dock door additions, mezzanine installation, fire suppression upgrades, office buildout, lighting improvements, and HVAC modifications. Cost depends on the scope of work and whether the building remains occupied during construction.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company with military discipline driving our commitment to schedules, budgets, and quality on every industrial project. Warehouse construction timelines directly impact your revenue and operations, and we treat every milestone with the urgency it deserves.',
  },
  {
    icon: HardHat,
    title: 'Industrial Construction Experience',
    desc: 'Our team has extensive experience with warehouse, distribution, and manufacturing construction including structural steel erection, heavy concrete floor systems, fire suppression design coordination, dock equipment installation, and the specialized MEP systems that industrial facilities demand. We understand the engineering requirements that separate warehouse construction from standard commercial builds.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Industrial Market Knowledge',
    desc: 'Charlotte industrial market spans the I-85 corridor from Concord to Gastonia, the I-77 corridor toward Mooresville, the Airport-West submarket near Charlotte Douglas International, and the I-485 outer belt. We understand site conditions, utility availability, zoning requirements, and construction timelines in each of these submarkets.',
  },
  {
    icon: Scale,
    title: 'Charlotte & Carolinas Coverage',
    desc: 'We Build serves the Charlotte, NC metro and the greater Carolinas region, giving us deep insight into one of the most active industrial construction markets in the Southeast. Whether you are building a distribution center on the I-85 corridor or a manufacturing facility along I-77, we bring local market knowledge and construction expertise.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into warehouse construction. Energy-efficient LED lighting with daylight harvesting, high-performance insulation, cool roof systems, electric vehicle charging infrastructure, and solar-ready roof structures reduce operating costs and support sustainability goals.',
  },
];

const faqs = [
  {
    question: 'Does We Build handle warehouse and industrial construction in Raleigh NC and the Research Triangle?',
    answer:
      'Yes. We Build delivers warehouse construction, distribution center construction, cold storage, flex space, and industrial buildings throughout Raleigh, Cary, Morrisville, and greater Wake County — with specific experience along the I-40, I-540, and US-70 logistics corridors that serve the Research Triangle tech and biotech economy. Typical Raleigh warehouse projects include regional distribution centers serving the Triangle-and-I-40-east market, flex and lab-support warehouse for RTP tenants, and cold storage for Raleigh food-service and pharmaceutical distributors. Call (980) 471-1745 for a free Raleigh warehouse construction consultation.',
  },
  {
    question: 'Does We Build handle warehouse and industrial construction in Durham NC?',
    answer:
      'Yes. We Build provides warehouse, distribution center, cold storage, and industrial construction services throughout Durham and Durham County — including the Durham County portion of Research Triangle Park, the I-40 west corridor, and the NC-147 / Durham Freeway industrial submarkets. Durham warehouse and lab-support industrial projects frequently involve specialized requirements for the life-sciences and biotech economy, including clean-room-adjacent warehouse, temperature- and humidity-controlled storage for pharmaceutical and research materials, and specialty MEP capacity for high-tech tenants. Call (980) 471-1745 for a free Durham warehouse construction consultation.',
  },
  {
    question: 'How much does it cost to build a warehouse in Charlotte, NC?',
    answer:
      'Warehouse construction costs in Charlotte range from $80 per square foot for a basic warehouse shell to $300 per square foot for a refrigerated cold storage facility. A standard 50,000 square foot distribution warehouse with 32-foot clear heights, dock doors, ESFR sprinklers, and basic office space typically costs between $5 million and $10 million for the complete building. The biggest cost variables are building size, clear height requirements, floor slab specifications, fire suppression system type, dock equipment count, and any climate control or specialized systems. We provide consultations after a site visit and operational needs assessment.',
  },
  {
    question: 'How long does it take to build a warehouse in Charlotte?',
    answer:
      'Warehouse construction timelines in Charlotte typically range from 6 to 14 months depending on building size and complexity. A basic 30,000 square foot warehouse shell can be completed in 6 to 8 months. A 100,000 square foot distribution center with full systems takes 10 to 14 months. Cold storage facilities take 12 to 16 months due to the additional insulation, refrigeration, and thermal engineering work. Before construction, add 2 to 4 months for design, engineering, and permitting. Site work duration depends heavily on soil conditions and grading requirements, which can vary significantly across Charlotte industrial submarkets.',
  },
  {
    question: 'How do I choose the right site for a warehouse in Charlotte?',
    answer:
      'Site selection for warehouse construction in Charlotte should consider proximity to major highways, particularly I-85, I-77, and I-485 for regional distribution access. Evaluate zoning to confirm industrial use is permitted for your specific operation. Verify utility capacity, especially electrical service if your operation involves refrigeration, manufacturing equipment, or EV charging. Assess soil conditions because some Charlotte areas have rocky soil that increases foundation costs while others have expansive clay that requires engineered fill. Confirm that the site has adequate truck turning radius, typically 130 feet or more for tractor-trailer access. Check stormwater management requirements, which can be significant on larger sites. Charlotte key industrial submarkets include the Airport-West area near Charlotte Douglas International, the I-85 North corridor through Concord and Kannapolis, and the I-77 corridor toward Mooresville.',
  },
  {
    question: 'What permits are required for warehouse construction in Charlotte?',
    answer:
      'Warehouse construction in the Charlotte metro requires building permits covering structural, mechanical, electrical, plumbing, and fire protection plans from the local jurisdiction, which may be the City of Charlotte, Mecklenburg County, or a surrounding municipality. Stormwater management permits are required for sites that disturb more than one acre or add significant impervious surface. Environmental permits may apply if your operation involves hazardous materials, air emissions, or wastewater discharge. Zoning verification or special use permits may be needed depending on the specific industrial use and site location. Access permits from NCDOT are required if the site connects to a state-maintained road. We manage all permitting processes and maintain relationships with local plan reviewers.',
  },
  {
    question: 'What clear height should my warehouse have?',
    answer:
      'Clear height depends on your storage method and operational requirements. General warehousing with standard pallet racking typically needs 24 to 28 feet of clear height. Modern distribution centers that maximize vertical storage efficiency use 32 to 40 feet of clear height with high-reach forklifts or automated storage and retrieval systems. Flex space buildings typically provide 18 to 24 feet in the warehouse section. Manufacturing facilities vary based on the production process and equipment height but commonly require 20 to 30 feet. Cold storage facilities typically have lower clear heights of 30 to 35 feet because taller freezer spaces are more expensive to maintain at temperature. The building clear height directly affects structural steel design, column spacing, fire suppression requirements, and construction cost, so selecting the right height early in design is critical.',
  },
  {
    question: 'How many dock doors does my warehouse need?',
    answer:
      'Dock door count depends on your daily truck volume, load and unload times, and operational schedule. A general rule of thumb is one dock door per 5,000 to 10,000 square feet of warehouse space, but high-volume distribution operations may need one door per 3,000 to 5,000 square feet. Cross-dock facilities need doors on both sides of the building. Last-mile delivery facilities need high door counts relative to building size because of rapid daily inventory turns. Each dock door requires a dock leveler, dock seal or shelter, trailer restraint, and dock light, which adds $15,000 to $30,000 per door for equipment alone. Overbuilding dock capacity adds cost, but underbuilding creates bottlenecks that are expensive to fix after construction. We help size dock capacity based on your projected operations.',
  },
  {
    question: 'What fire suppression system does my warehouse need?',
    answer:
      'Warehouse fire suppression requirements depend on what you store, how high you rack it, and whether commodities are classified as high-hazard. Standard wet-pipe sprinkler systems are adequate for low-hazard warehousing at modest rack heights. Modern distribution centers with high-pile storage, typically anything racked above 12 feet, require ESFR sprinkler systems that deliver much higher water volumes at higher pressures to suppress fires in tall rack configurations before they spread. ESFR systems have specific ceiling height, sprinkler spacing, and obstruction clearance requirements that must be coordinated with the building structural design. Rubber tire storage, aerosol products, flammable liquids, and certain plastics trigger additional fire protection requirements. Cold storage facilities need dry-pipe or pre-action systems in freezer areas where wet-pipe systems would freeze. Fire suppression design is one of the first systems we coordinate because it affects structural steel layout, water supply sizing, and construction cost.',
  },
  {
    question: 'How can I make my warehouse more energy efficient?',
    answer:
      'Warehouse energy efficiency starts with the building envelope: high-performance insulated metal panels, cool roof systems that reflect solar heat, and well-sealed construction to minimize air infiltration. LED lighting with occupancy sensors and daylight harvesting through translucent roof panels or skylights can reduce lighting energy by 60 to 80 percent compared to older metal halide fixtures. HVAC efficiency matters for climate-controlled warehouses: high-efficiency refrigeration systems with variable frequency drives, air curtains at dock doors to minimize conditioned air loss, and destratification fans to push warm air down from high ceilings in winter. Solar-ready roof structures allow future photovoltaic installation. EV charging infrastructure for delivery fleets is increasingly requested. Dock door seals and shelters prevent heated or cooled air from escaping during loading. As a USGBC member, we incorporate these strategies into every warehouse project.',
  },
  {
    question: 'What are the best areas for warehouse construction in Charlotte?',
    answer:
      'Charlotte has several active industrial submarkets, each with distinct advantages. The Airport-West submarket near Charlotte Douglas International Airport offers proximity to air cargo and major highways with competitive land costs. The I-85 North corridor through Concord, Kannapolis, and Salisbury provides excellent interstate access for regional distribution with available land for larger facilities. The I-77 North corridor toward Mooresville and Statesville serves the Lake Norman market with good labor access. The I-85 South corridor toward Gastonia and Kings Mountain connects to the Greenville-Spartanburg industrial market. The I-485 outer belt offers last-mile proximity to Charlotte delivery markets for e-commerce and logistics operations. South Charlotte along I-77 near Fort Mill provides access to the growing South Carolina market. We serve all of these submarkets and can provide construction-specific guidance on site conditions, utility availability, and permitting timelines.',
  },
  {
    question: 'Should I build with steel frame or tilt-up concrete?',
    answer:
      'Both pre-engineered metal building systems and tilt-up concrete construction are common for warehouses in the Charlotte market, and the right choice depends on building size, aesthetics, and budget. Pre-engineered metal buildings use factory-manufactured steel frames with metal wall and roof panels. They are typically faster to erect, cost-effective for buildings under 100,000 square feet, and offer wide column spacing. Tilt-up concrete construction pours wall panels on-site and tilts them into place with a crane. Tilt-up provides superior durability, fire resistance, and a more substantial appearance, making it the standard for larger distribution centers and facilities where exterior aesthetics matter. Tilt-up is generally more cost-effective above 50,000 to 75,000 square feet because the per-panel cost decreases with repetition. Hybrid approaches using tilt-up walls with steel roof structures are also common. We build with both systems and can recommend the most cost-effective approach for your specific project.',
  },
  {
    question: 'How much does warehouse floor slab construction cost in Charlotte, and what thickness do I need?',
    answer:
      'Warehouse floor slabs in Charlotte typically cost $6 to $12 per square foot depending on thickness, reinforcement, and finish requirements. Standard warehouse operations with conventional forklifts need a 6-inch slab with fiber or wire mesh reinforcement. Heavy-duty distribution centers with high-capacity racking and reach trucks require 7 to 8-inch slabs with rebar reinforcement. Cold storage facilities need insulated slabs with vapor barriers and in some cases heated sub-slab systems to prevent frost heave. Floor flatness specifications such as FF50/FL30 for standard use or FF100/FL50 for very narrow aisle racking directly affect installation cost and must be specified correctly before concrete is placed.',
  },
  {
    question: 'What should I know about building a warehouse in the Charlotte metro area?',
    answer:
      'Charlotte offers significant advantages for warehouse construction, including year-round construction weather that shortens project timelines and strong interstate access via I-85 and I-77. The Charlotte industrial market spans from Concord to Gastonia along I-85 and up to Mooresville along I-77, with the Airport-West submarket near Charlotte Douglas International providing excellent logistics connectivity. Charlotte sites frequently encounter clay soils requiring engineered fill, which we account for during the site evaluation and budgeting process. Our deep familiarity with local permitting timelines, soil conditions, and building code requirements across Mecklenburg, Union, Iredell, Cabarrus, and York counties ensures your project moves efficiently from design through occupancy.',
  },
  {
    question: 'What is the difference between a distribution center and a fulfillment center, and how does it affect construction?',
    answer:
      'A distribution center receives bulk shipments and redistributes them to retail stores or regional hubs, emphasizing efficient truck dock operations, pallet storage, and high throughput. A fulfillment center processes individual customer orders, requiring extensive sorting systems, conveyor infrastructure, packing stations, and often mezzanine levels for order-picking operations. Fulfillment centers typically need more electrical capacity for conveyor motors and automation equipment, higher lighting levels in pick-and-pack areas, and office and break room space for larger workforces. Construction costs for fulfillment centers generally run 15 to 30 percent higher than distribution centers of the same size due to interior systems complexity.',
  },
];

export default function WarehouseConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Warehouse & Industrial Construction Charlotte NC',
            'Expert warehouse construction contractor in Charlotte, NC and the Carolinas. Distribution centers, cold storage, flex space, manufacturing facilities, and warehouse renovations. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/warehouse-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Warehouse Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Warehouse & Industrial Construction Charlotte NC"
        subtitle="Build your warehouse, distribution center, or industrial facility with Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Warehouse Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Warehouse & Distribution Center Construction Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Warehouse construction in Charlotte costs between $80 and $300 per square foot depending
                on building type, with basic warehouse shells starting around $80 per square foot and
                cold storage facilities reaching $300 or more. Charlotte position at the intersection of
                I-85 and I-77, with Charlotte Douglas International Airport and extensive rail infrastructure,
                makes it one of the most active industrial construction markets in the Southeast.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a regional distribution center along the I-85 corridor, a cold storage
                facility for the food supply chain, a flex space combining office and warehouse operations,
                a manufacturing facility with heavy utilities and overhead crane infrastructure, or a
                last-mile delivery hub near the I-485 outer belt, warehouse construction requires structural
                engineering, fire protection design, heavy concrete work, and site development expertise that
                goes far beyond standard{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>.
                The concrete floor slab alone, which must meet specific flatness tolerances, load-bearing
                capacity, and joint spacing requirements for forklift traffic and racking systems, represents
                one of the most critical and technically demanding elements of any warehouse project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> serving
                the Charlotte, NC metro and the greater Carolinas region. With over 60 years of combined
                construction experience, we specialize in warehouse construction, distribution center builds,
                cold storage facilities, flex space development, manufacturing facility construction, and
                warehouse renovation and expansion. We work closely with your architect and design team to
                integrate structural, mechanical, and fire protection engineering with construction
                seamlessly. Licensed in North Carolina and South Carolina, we serve the greater Charlotte
                metro including{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Consultation
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
                { icon: Warehouse, title: 'Industrial Expertise', desc: 'Specialized warehouse and distribution center construction including structural steel, heavy concrete, ESFR fire suppression, dock equipment, and industrial MEP systems.' },
                { icon: Clock, title: 'On-Schedule Delivery', desc: 'We build backward from your occupancy date, coordinating steel delivery, concrete pours, and system installations to protect your operational launch.' },
                { icon: ClipboardCheck, title: 'Code & Fire Compliance', desc: 'Deep experience with warehouse fire suppression design, high-pile storage requirements, and industrial building code compliance across the Charlotte market.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and safety on every industrial construction project.' },
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

      {/* Types of Warehouse Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Warehouse Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Warehouse & Industrial Construction We Build
            </h2>
            <p className="text-muted-foreground">
              Every warehouse operation has different construction requirements. From basic storage
              shells to temperature-controlled cold storage, from flex office-warehouse combinations
              to heavy manufacturing facilities, we bring specialized engineering and construction
              expertise to each industrial project type.
            </p>
          </div>
          <div className="space-y-8">
            {warehouseTypes.map((type) => (
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

      {/* Our Warehouse Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Warehouse Construction Process: 8 Steps from Site to Occupancy
            </h2>
            <p className="text-muted-foreground">
              Warehouse construction involves heavy structural engineering, complex fire protection
              design, precision concrete work, and industrial-scale MEP systems. Our structured 8-step
              process ensures every foundation, steel connection, fire suppression zone, and floor
              flatness tolerance is engineered and built to protect your operational timeline.
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
              Why Choose We Build for Your Warehouse Construction
            </h2>
            <p className="text-muted-foreground">
              Warehouse construction demands structural engineering precision, fire protection expertise,
              and heavy construction capabilities that most commercial contractors do not have. Here is
              what sets We Build apart for industrial projects.
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

      {/* Warehouse Construction Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Warehouse Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Warehouse construction costs in Charlotte depend on building type, size, clear height,
                floor specifications, fire suppression requirements, and any climate control or specialized
                systems. Below are typical cost ranges for industrial construction in the Charlotte metro
                area. Every project is unique, and we provide consultations after a site visit.
              </p>
            </div>
            <div className="space-y-4">
              {costTiers.map((item) => (
                <div key={item.type} className="p-6 bg-muted rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{item.type}</h3>
                    <span className="font-semibold text-primary">{item.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">Factors That Affect Your Warehouse Construction Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Clear height:</strong> Every additional foot of clear height increases structural steel costs, wall panel area, and fire suppression complexity. A 40-foot clear warehouse costs significantly more per square foot than a 24-foot clear building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Floor slab specifications:</strong> A standard 6-inch slab costs less than an 8-inch fiber-reinforced slab with FM2 flatness tolerances required for automated guided vehicles and very narrow aisle forklifts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Fire suppression type:</strong> Standard wet-pipe sprinklers cost a fraction of ESFR systems designed for high-pile rack storage of specific commodity classifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Site conditions:</strong> Rocky soil, poor drainage, significant grading requirements, or environmental remediation on brownfield sites can add substantial cost to site work.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Climate control:</strong> Any temperature control beyond basic ventilation adds cost, with cold storage and freezer facilities representing the highest per-square-foot investment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Warehouse Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions about warehouse construction costs, timelines,
                site selection, fire suppression, energy efficiency, and industrial building requirements
                in the Charlotte metro area.
              </p>
            </div>
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

      {/* Related Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Warehouse Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our related services for industrial and commercial construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Industrial Construction Charlotte NC', href: '/services/industrial-construction', type: 'Service', desc: 'Full industrial construction services including manufacturing facilities, processing plants, and heavy industrial buildings.' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction for office, retail, mixed-use, and specialty buildings across the Charlotte metro area.' },
              { title: 'Commercial Upfits', href: '/services/commercial-upfits', type: 'Service', desc: 'Tenant improvements, build-outs, and interior renovations for warehouse and flex-space tenants.' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{resource.type}</span>
                  <h3 className="font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.desc}</p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Build Your Warehouse or Distribution Center?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a distribution center, cold storage facility, flex space,
            manufacturing plant, or warehouse expansion in the Charlotte metro area,
            We Build has the industrial construction expertise, structural engineering capability,
            and fire protection knowledge to deliver your project on schedule and ready for operations.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site evaluation and consultation. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and the greater Carolinas region.
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
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                (980) 471-1745
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
