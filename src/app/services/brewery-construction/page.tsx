import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Beer,
  Building2,
  Warehouse,
  Store,
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
  Thermometer,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ClipboardCheck,
  Droplets,
  Grape,
  Trees,
  Hammer,
  Scale,
  TrendingUp,
  Users,
  CalendarDays,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Brewery Construction Charlotte NC | Taproom Buildout & Craft Brewery Contractor',
  description:
    'Expert brewery construction contractor in Charlotte, NC. Craft brewery buildouts, taproom construction, brewpub builds, beer garden construction, and cidery/distillery facilities. ABC permit compliant. Veteran-owned, licensed in NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'brewery construction Charlotte NC',
    'brewery construction near me',
    'brewery construction contractor',
    'taproom buildout Charlotte',
    'craft brewery contractor Charlotte NC',
    'brewery build out near me',
    'brewery construction cost',
    'taproom construction Charlotte',
    'microbrewery buildout',
    'brewery production facility Charlotte',
    'beer garden construction Charlotte NC',
    'craft beverage construction',
    'brewpub construction Charlotte NC',
    'distillery construction Charlotte NC',
    'cidery construction near me',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/brewery-construction',
  },
  openGraph: {
    title: 'Brewery & Taproom Construction Charlotte NC | We Build',
    description:
      'Build your craft brewery, taproom, brewpub, or beer garden with Charlotte\'s veteran-owned construction team. ABC permit compliant. Licensed in NC & SC.',
    url: 'https://webuildclt.com/services/brewery-construction',
    type: 'website',
  },
};

const breweryTypes = [
  {
    icon: Building2,
    title: 'Production Brewery Construction',
    slug: 'production-brewery',
    desc: 'Full brewing facility construction including fermentation halls, brewhouse platforms, packaging lines, grain storage, cold rooms, and waste management systems for craft breweries producing at scale.',
    details:
      'Production brewery construction is among the most specialized commercial builds in the Charlotte market. These facilities require reinforced concrete equipment pads engineered to support brew kettles, mash tuns, and lauter tuns weighing thousands of pounds when filled. The fermentation hall needs temperature-controlled environments with glycol chiller systems piped to each fermenter, CO2 collection and venting infrastructure, and floor drains throughout the entire production area sloped at a minimum of one-eighth inch per foot for washdown drainage. Grain handling areas require structural support for silo foundations or indoor bulk storage bins, dust collection systems to prevent combustible dust accumulation, and mill rooms with proper ventilation. Packaging lines for canning or bottling need compressed air systems, conveyor pad foundations, and floor drains at filling stations. The entire production facility requires specialized epoxy or urethane cement flooring rated for chemical resistance, thermal shock from hot wort spills, and daily caustic washdowns. We coordinate with your brewing equipment supplier from day one to ensure every utility connection, structural support, floor drain, and glycol line is precisely positioned before equipment delivery.',
    cost: '$175-$400/sq ft',
  },
  {
    icon: Beer,
    title: 'Taproom & Tasting Room Buildout',
    slug: 'taproom-tasting-room',
    desc: 'Customer-facing taproom spaces with custom bar construction, glycol-cooled draft systems, comfortable seating areas, restrooms, and the proper ABC-required separation between production and public zones.',
    details:
      'Taproom construction is where the brewery brand comes to life for customers, and it requires a completely different skill set from production area work. The centerpiece is the bar itself, which needs custom millwork, a glycol-cooled trunk line running from the walk-in cooler or serving tanks to the tap towers, proper drainage at the bar top and behind the bar, under-bar refrigeration for kegs and glassware, glass washing stations, and ice production. Draft systems in brewery taprooms are typically longer-draw systems than restaurant bars because the cooler or serving tanks may be located in the production area rather than immediately behind the bar. Longer glycol runs require careful insulation and proper chiller sizing to maintain consistent pour temperatures across all taps. The NC ABC Commission requires clear physical separation between production areas and public taproom spaces, typically a wall with a controlled access point. Taproom layouts must also account for ADA accessibility, occupancy-appropriate restroom counts, emergency egress paths, and adequate HVAC to keep the space comfortable despite its proximity to a heat-generating brewhouse. Most Charlotte taprooms in NoDa, South End, and LoSo target 100 to 250 seats, and we design layouts that maximize seating while maintaining comfortable circulation paths.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Store,
    title: 'Brewpub Construction',
    slug: 'brewpub',
    desc: 'Combined restaurant and brewery facilities with full commercial kitchens, taproom bars, dining areas, on-site brewing systems, and compliance with both health department and ABC requirements.',
    details:
      'Brewpub construction combines every challenge of restaurant buildouts with the specialized infrastructure of a production brewery. The commercial kitchen requires Type I and Type II hood ventilation, fire suppression, grease traps, walk-in coolers and freezers, three-compartment sinks, and health department compliance for food service. Simultaneously, the brewing production area needs equipment pads, glycol systems, floor drains, grain handling, CO2 routing, and ABC-compliant separation from public areas. The dining room bridges both worlds with a custom bar serving house-brewed beer alongside a full food menu, which means the draft system must integrate with the production area while the kitchen service line connects to the dining room. Brewpubs face dual regulatory oversight: the Mecklenburg County Health Department reviews the food service operation, while the NC ABC Commission governs the brewing and alcohol service components. This dual-permitting complexity is why brewpub construction timelines are typically 20 to 28 weeks. Charlotte brewpubs like those in the FreeMoreWest and Plaza Midwood corridors have found strong success combining craft beer with chef-driven food programs, and the construction must support both at a high level.',
    cost: '$200-$350/sq ft',
  },
  {
    icon: Trees,
    title: 'Beer Garden & Outdoor Space',
    slug: 'beer-garden-outdoor',
    desc: 'Outdoor drinking and entertainment areas with proper drainage, utility connections, weather protection, lighting, and code-compliant barriers for alcohol service in open-air environments.',
    details:
      'Beer gardens have become a defining feature of Charlotte craft breweries, particularly in neighborhoods like NoDa, LoSo, and the FreeMoreWest corridor where former industrial lots provide ample outdoor space. Beer garden construction involves far more infrastructure than most people realize. The site requires grading and drainage engineering to prevent standing water and direct stormwater away from seating areas and the building. Utility connections for outdoor bars include water supply, drain waste, electrical service for refrigeration and lighting, and glycol lines if draft service is provided outdoors. Permanent shade structures or covered pavilions need building permits, structural engineering for wind and snow loads, and proper foundation systems. Lighting design must balance ambiance with safety and code-required illumination levels at exits and walkways. The NC ABC Commission requires physical barriers, typically fences or walls at a minimum height, around any outdoor area where alcohol is consumed to define the permitted premises boundary. Charlotte zoning may also impose noise restrictions, parking requirements based on outdoor seating count, and screening requirements for adjacent properties. We build beer gardens that function year-round with heating elements, weather-resistant materials, and drainage systems that handle Charlotte heavy rain events.',
    cost: '$75-$200/sq ft',
  },
  {
    icon: Hammer,
    title: 'Brewery Expansion & Renovation',
    slug: 'brewery-expansion',
    desc: 'Adding fermentation capacity, canning lines, cold storage, taproom expansions, and production upgrades to existing brewery facilities without disrupting ongoing brewing operations.',
    details:
      'Many Charlotte craft breweries that started small are now expanding as demand grows, and expansion construction presents unique challenges because the brewery must continue operating during construction. Adding fermentation capacity requires new equipment pads, glycol system expansion or replacement with a higher-capacity chiller, additional floor drains, and potentially structural modifications if the building cannot support the weight of larger fermenters. Canning line additions need compressed air systems, electrical upgrades for line motors, floor drains at the filler, and enough clear floor space for can storage and pallet staging. Cold storage expansion may involve adding walk-in coolers, converting existing space, or building an external cold room with insulated panels and dedicated refrigeration. Taproom expansions trigger new occupancy calculations that may require additional restrooms, upgraded HVAC capacity, expanded parking, and ADA improvements. Throughout all expansion work, we implement dust containment, noise reduction, and scheduling strategies that protect the existing brewing operation. Phased construction allows the brewery to continue producing and serving while new capacity comes online.',
    cost: '$100-$250/sq ft',
  },
  {
    icon: Grape,
    title: 'Cidery & Distillery Construction',
    slug: 'cidery-distillery',
    desc: 'Craft cidery, meadery, and distillery facilities with specialized equipment infrastructure, different ABC licensing requirements, and production areas tailored to non-beer fermented and distilled beverages.',
    details:
      'While cideries, meaderies, and distilleries share many construction requirements with breweries, they have distinct infrastructure and regulatory differences that require specialized knowledge. Distilleries involve working with flammable spirits, which triggers additional fire code requirements including explosion-proof electrical fixtures in production areas, enhanced ventilation to prevent vapor accumulation, fire-rated separation between distillation and public areas, and sprinkler systems rated for alcohol fires. Distillery equipment pads must support stills, which have different weight distributions and utility requirements than brew kettles. Cideries require fruit processing areas with proper drainage, cold storage for juice and fruit, and pressing equipment foundations. The ABC licensing structure is entirely different for distilleries versus breweries in North Carolina, with different rules for tasting room operations, bottle sales, and cocktail service. We coordinate with your ABC attorney and equipment suppliers to ensure the facility meets all production, safety, and licensing requirements before you begin operations. Charlotte growing craft beverage scene includes several successful cideries and distilleries, and we understand the specific construction requirements that set these facilities apart from traditional breweries.',
    cost: '$200-$400/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Concept Review',
    desc: 'We meet with you to understand your brewery concept, production goals, target annual barrel output, taproom vision, food service plans, and budget parameters. Whether you are a first-time brewery owner or an experienced brewer expanding to a new location, this conversation establishes the scope, timeline, and key decision points for the entire project. We discuss your equipment vendor, brewing system size, fermentation tank count, and whether you plan to can, bottle, or draft-only.',
  },
  {
    step: '02',
    title: 'Concept & Licensing Review',
    desc: 'Before design begins, we review the regulatory landscape for your specific concept. NC ABC licensing requirements differ significantly between a brewery with taproom, a brewpub with food service, a cidery, and a distillery. We coordinate with your ABC attorney to ensure the floor plan will satisfy licensing requirements. If food service is planned, we review Mecklenburg County Health Department requirements for the kitchen scope. This step prevents expensive redesigns after permitting begins.',
  },
  {
    step: '03',
    title: 'Site Evaluation & Feasibility',
    desc: 'We conduct a detailed evaluation of your prospective or existing space to assess feasibility for brewery use. Key factors include floor load capacity for heavy brewing equipment, ceiling height for fermenters and grain silos, utility capacity for the electrical demand of glycol chillers and packaging equipment, water supply volume and pressure for brewing and cleaning, drain capacity for production washdown, roof structure for exhaust penetrations, and loading dock or drive-in door access for grain delivery and keg distribution. We identify deal-breakers early so you can negotiate your lease with full knowledge of required improvements.',
  },
  {
    step: '04',
    title: 'Brewery Layout & Equipment Coordination',
    desc: 'Working directly with your brewing equipment supplier, we develop a production floor layout that optimizes workflow from grain handling through packaging. Every equipment pad location, floor drain position, glycol line route, CO2 and nitrogen line path, electrical connection point, and water and drain tie-in is coordinated between our construction team and your equipment vendor. This coordination is critical because brewing equipment has specific utility requirements, clearance dimensions, and connection heights that must be built into the facility before equipment delivery.',
  },
  {
    step: '05',
    title: 'Permitting: Building, Health, ABC & Fire',
    desc: 'Brewery construction in Charlotte requires permits from multiple agencies. Building permits cover structural, mechanical, electrical, and plumbing plans. If food service is included, the Mecklenburg County Health Department reviews kitchen plans. The fire marshal reviews fire suppression, emergency exits, and occupancy calculations. ABC licensing requires floor plan review showing production and public area separation. We submit to all agencies in parallel and manage the review process to minimize total permitting time, which typically runs 4 to 8 weeks for brewery projects.',
  },
  {
    step: '06',
    title: 'Pre-Construction & Procurement',
    desc: 'Before construction begins, we finalize the build schedule, order long-lead materials like glycol chillers, custom bar components, and specialty flooring systems, coordinate subcontractor schedules, and develop a construction phasing plan. Brewery equipment often has 12 to 20 week lead times, so we align our construction schedule with your equipment delivery dates to ensure the facility is ready for installation when your brewing system arrives. We establish material staging areas and coordinate with your equipment supplier on delivery logistics.',
  },
  {
    step: '07',
    title: 'Construction Phase',
    desc: 'Construction begins with demolition and rough-in for plumbing, electrical, mechanical, and structural systems. The production area receives priority: equipment pad foundations are poured, floor drains are installed with proper slope, glycol line chases are roughed in, electrical panels are sized and installed for chiller and packaging loads, and water and drain connections are positioned per the equipment layout. The taproom build proceeds in parallel with bar construction, draft system installation, restroom buildout, HVAC installation, and finish work. Weekly progress updates and site walks keep you informed throughout the build.',
  },
  {
    step: '08',
    title: 'Inspections, Equipment Install & Handoff',
    desc: 'After construction passes building, fire, and health inspections, your brewing equipment is delivered and installed onto the prepared pads and utility connections. We coordinate with your equipment installer to verify that all utility connections, floor drains, and structural supports perform as designed. Final punch list items are addressed, and we deliver complete close-out documentation including as-built drawings, equipment pad specifications, glycol system schematics, and all permit certificates. Our one-year workmanship warranty covers all construction performed by our team.',
  },
];

const costTiers = [
  {
    type: 'Taproom Only (No Production)',
    range: '$150-$300/sq ft',
    desc: 'Customer-facing taproom space with custom bar, glycol-cooled draft system, seating, restrooms, and finishes. Does not include production area construction. Typical for satellite taproom locations serving beer brewed at a separate production facility. Cost depends on bar complexity, draft line count, finish level, and outdoor space.',
  },
  {
    type: 'Brewpub (Restaurant + Brewing)',
    range: '$200-$350/sq ft',
    desc: 'Combined restaurant and brewery with full commercial kitchen, hood ventilation, fire suppression, taproom bar, dining area, and on-site brewing production area. The most complex and expensive brewery concept due to dual regulatory compliance with health department and ABC Commission.',
  },
  {
    type: 'Production Brewery',
    range: '$175-$400/sq ft',
    desc: 'Full brewing production facility including brewhouse platform, fermentation hall, packaging area, cold storage, grain handling, and utility infrastructure. Cost range is wide because a 5-barrel nano brewery has different infrastructure needs than a 30-barrel production facility with a canning line. Equipment pad engineering and glycol system sizing drive much of the cost variation.',
  },
  {
    type: 'Beer Garden / Outdoor Space',
    range: '$75-$200/sq ft',
    desc: 'Outdoor drinking and entertainment areas including grading, drainage, hardscaping, shade structures, outdoor bar stations, lighting, heating elements, and ABC-required perimeter barriers. Cost depends on whether the space is a simple gravel lot with picnic tables or a fully built-out covered pavilion with permanent bar service.',
  },
  {
    type: 'Brewery Expansion / Retrofit',
    range: '$100-$250/sq ft',
    desc: 'Adding capacity to an existing brewery including new fermentation space, canning line areas, cold storage, taproom expansion, or production floor modifications. Expansion work while the brewery continues operating requires phased construction and dust containment, which adds complexity compared to new construction.',
  },
  {
    type: 'Cidery / Meadery',
    range: '$120-$220/sq ft',
    desc: 'Craft cidery and meadery production areas share infrastructure requirements with breweries — chemical-resistant flooring, glycol systems, floor drains, equipment pads — but add fruit-processing areas, juice cold storage, and pressing equipment foundations. Tasting room construction costs mirror taproom builds. The ABC licensing structure for cideries differs from brewery permits, which affects floor plan requirements and the permitting timeline.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Military discipline drives our commitment to delivering brewery projects on schedule and on budget. When we commit to a date for your equipment installation, we plan every construction milestone backward from that date.',
  },
  {
    icon: ClipboardCheck,
    title: 'Health Department & ABC Expertise',
    desc: 'Brewery construction sits at the intersection of building code, health department requirements for food service, fire marshal regulations, and NC ABC Commission licensing rules. We have deep experience navigating all four agencies simultaneously, ensuring your floor plan satisfies every regulatory requirement before construction begins.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Craft Beer Market Knowledge',
    desc: 'Charlotte is one of the fastest-growing craft beer markets in the Southeast, with thriving brewery corridors in NoDa, South End, LoSo, FreeMoreWest, and Plaza Midwood. We understand the building stock, zoning requirements, utility infrastructure, and construction conditions in each of these neighborhoods and can provide site-specific guidance during your space search.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into brewery construction. Energy-efficient glycol systems, LED lighting, water-reclamation-ready plumbing, insulated panel systems, and efficient HVAC design reduce your operating costs and environmental footprint from day one.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, serving brewery owners throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, Lake Norman, and surrounding communities. Our dual-state licensing is valuable for brewery groups with locations on both sides of the state line.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to build a brewery in Charlotte, NC?',
    answer:
      'Brewery construction costs in Charlotte range from $150 per square foot for a taproom-only buildout to $400 per square foot or more for a full production brewery with a brewpub kitchen. A typical 5,000 square foot production brewery with a 1,500 square foot taproom in Charlotte costs between $800,000 and $1.5 million for the building construction, not including brewing equipment. The production area is the most expensive zone due to reinforced equipment pads, specialty flooring, glycol system infrastructure, floor drain networks, and heavy electrical service for chillers and packaging equipment. We provide detailed, line-item estimates after a site visit so you know exactly what every dollar covers before construction begins.',
  },
  {
    question: 'How long does it take to build a brewery in Charlotte?',
    answer:
      'Brewery construction timelines in Charlotte typically range from 16 to 28 weeks of construction depending on the scope. A taproom-only buildout with no production area can complete in 12 to 16 weeks. A production brewery with taproom takes 18 to 24 weeks. A full brewpub with commercial kitchen and production area takes 22 to 28 weeks. Before construction begins, add 4 to 8 weeks for design, equipment coordination, and permitting. The biggest timeline variables are equipment lead times, which can run 12 to 20 weeks for brewing systems, and the permitting process with Mecklenburg County, the fire marshal, and the ABC Commission.',
  },
  {
    question: 'What ABC permits do I need to open a brewery in North Carolina?',
    answer:
      'In North Carolina, you need a brewery permit from the NC ABC Commission to brew and sell beer. If you want a taproom where customers drink on-site, you need taproom authorization as part of your brewery permit. Brewpubs that serve food with a full bar may need additional mixed beverage permits. The ABC Commission reviews your floor plan as part of the application, requiring clear separation between production areas and public spaces, designated alcohol storage, and proper bar layout. Your floor plan must satisfy ABC requirements before you apply, which is why we coordinate construction plans with ABC licensing requirements during the design phase rather than discovering conflicts after construction starts.',
  },
  {
    question: 'How do you coordinate with our brewing equipment supplier?',
    answer:
      'Equipment coordination is one of the most critical aspects of brewery construction. We work directly with your brewing equipment supplier from the design phase through installation. During design, we obtain equipment specifications including weights, dimensions, utility connection points, clearance requirements, and anchor bolt patterns. We engineer equipment pads to match these specs, position floor drains at washdown locations specified by the equipment layout, route glycol lines from the chiller to each fermenter connection, size electrical panels for the total equipment load, and verify water supply pressure meets brewing system requirements. When your equipment arrives, every pad, drain, utility connection, and structural support is ready for installation.',
  },
  {
    question: 'What is the difference between a taproom and a brewpub?',
    answer:
      'A taproom is a customer-facing space where a brewery serves its own beer, typically with minimal or no food service beyond snacks or food truck partnerships. A brewpub is a full restaurant that also brews beer on-site, with a commercial kitchen, full menu, and typically a broader bar program that may include wine and liquor. From a construction standpoint, the difference is significant. A taproom requires bar construction, draft systems, restrooms, and basic HVAC. A brewpub adds a full commercial kitchen with hood ventilation, fire suppression, grease traps, walk-in coolers, three-compartment sinks, and health department compliance on top of the brewery production and taproom infrastructure. Brewpubs cost 30 to 50 percent more per square foot than taproom-only builds due to the kitchen complexity.',
  },
  {
    question: 'What health department requirements apply to brewery construction in Charlotte?',
    answer:
      'If your brewery serves food, the Mecklenburg County Health Department reviews your kitchen plans and conducts a pre-opening inspection. Requirements include non-porous flooring, FRP wall panels in food prep areas, handwash sinks at each prep station, three-compartment sinks, commercial dishwashers, proper refrigeration, and grease traps. Even taproom-only breweries without kitchens must meet certain health requirements for any food handling areas, including handwash stations and proper restroom facilities for the public occupancy load. The health department review adds 2 to 4 weeks to the permitting timeline for brewpub projects.',
  },
  {
    question: 'What are the production area requirements for a brewery?',
    answer:
      'Brewery production areas require several specialized construction elements. Flooring must be chemical-resistant epoxy or urethane cement that withstands daily caustic washdowns, thermal shock from hot wort, and constant moisture. Floor drains throughout the production area must be sloped to collect washdown water and route it to a sanitary sewer connection. Equipment pads need reinforced concrete engineered for the specific weight of your brew kettles, fermenters, and brite tanks when full. Glycol chiller systems require piping to every fermenter and brite tank for temperature control. CO2 systems need proper venting to prevent dangerous accumulation in enclosed spaces. Electrical service must handle the combined load of glycol chillers, pumps, packaging equipment, and grain mills. Adequate ventilation removes steam from the brewhouse and maintains safe air quality throughout the production floor.',
  },
  {
    question: 'How many seats should my taproom have and what affects occupancy?',
    answer:
      'Taproom seating capacity depends on your available square footage, occupancy classification, restroom count, parking availability, and ADA requirements. Most Charlotte brewery taprooms range from 80 to 250 seats including indoor and outdoor areas. Occupancy is calculated by the fire marshal based on the function of each area: assembly space for the taproom, typically 15 square feet per person for standing areas and 18 square feet per person for table seating. Restroom count is driven by occupancy: generally one fixture per 75 people for each gender. Parking requirements vary by zoning district but typically require one space per 3 to 4 seats. Adding a beer garden increases your total occupancy, which may trigger additional restroom, parking, and ADA requirements.',
  },
  {
    question: 'Do I need a brewery consultant, and how do they work with the contractor?',
    answer:
      'A brewery consultant can be valuable for first-time brewery owners, helping with recipe scaling, equipment selection, production workflow design, and business planning. From a construction standpoint, the consultant often acts as the bridge between your brewing vision and the physical facility requirements. They help select and specify the brewing equipment, which our construction team then designs the facility around. If you have an experienced head brewer, they can often fill this role. Either way, we need detailed equipment specifications, utility requirements, and production workflow information early in the design phase. The earlier your consultant or head brewer is involved in the construction planning process, the fewer changes and delays occur during construction.',
  },
  {
    question: 'What are the best Charlotte neighborhoods for opening a brewery?',
    answer:
      'Charlotte has several proven brewery corridors. NoDa, the arts district along North Davidson Street, is Charlotte original craft brewery hub with an established beer-drinking culture and walkable streets. South End along South Boulevard offers light rail access and a dense population of young professionals. LoSo, lower South End, has become a brewery and entertainment destination with former industrial buildings offering high ceilings and loading dock access ideal for production facilities. FreeMoreWest, between Freedom Drive and Morehead Street, is an emerging corridor with adaptive reuse spaces and competitive lease rates. Plaza Midwood attracts an eclectic, loyal customer base. When evaluating spaces, key construction factors include ceiling height for fermenters, floor load capacity for equipment, utility capacity for glycol and electrical loads, and loading access for grain delivery and keg distribution.',
  },
  {
    question: 'How much does a brewery taproom build-out cost compared to a full brewpub in Charlotte?',
    answer:
      'A taproom-only build-out in Charlotte typically costs $100 to $175 per square foot, covering bar construction, draft systems, seating, restrooms, and basic HVAC. A full brewpub with a commercial kitchen runs $200 to $400 per square foot because of the additional hood ventilation, fire suppression, grease traps, walk-in coolers, three-compartment sinks, and health department compliance requirements. For a 3,000 square foot space, that means a taproom costs roughly $300,000 to $525,000 while a brewpub costs $600,000 to $1.2 million for construction alone, excluding brewing equipment. We Build provides consultations that break out production, taproom, and kitchen costs separately so you can evaluate the right scope for your business model.',
  },
  {
    question: 'What wastewater requirements apply to brewery construction in Mecklenburg County?',
    answer:
      'Breweries in Mecklenburg County must comply with Charlotte Water industrial pretreatment requirements for wastewater discharge. Brewery effluent contains high biological oxygen demand from grain solids, yeast, and cleaning chemicals that can exceed standard commercial discharge limits. Charlotte Water may require a wastewater discharge permit, pH neutralization systems, and regular effluent monitoring depending on your production volume. Spent grain solids must be kept out of the sanitary sewer. During construction, we install properly sized floor drains with sediment traps, pH adjustment tanks where required, and appropriate sewer connections sized for your production capacity. Addressing these requirements during the build phase avoids costly retrofits after you open.',
  },
  {
    question: 'Can I convert an existing Charlotte warehouse or retail space into a brewery?',
    answer:
      'Yes, warehouse and retail conversions are the most common paths to opening a brewery in Charlotte. Warehouses are often ideal because they offer high ceilings for fermenters, concrete floors that can be coated with chemical-resistant epoxy, loading dock access for grain delivery, and heavy electrical service. Retail spaces work well for taproom-focused operations but may need structural reinforcement for equipment weight and upgraded electrical panels. Key conversion considerations include verifying the floor slab thickness supports fermenter loads, confirming adequate sewer capacity for brewery wastewater, ensuring ceiling height accommodates your brewing system, and confirming the zoning allows brewery use. We Build specializes in adaptive reuse and brewery construction, so we evaluate candidate spaces and provide feasibility assessments before you sign a lease.',
  },
];

export default function BreweryConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Brewery & Taproom Construction Charlotte NC',
            'Expert brewery construction contractor in Charlotte, NC. Craft brewery buildouts, taproom construction, brewpub builds, beer garden construction, and cidery/distillery facilities. ABC permit compliant. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/brewery-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Brewery Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Brewery & Taproom Construction Charlotte NC"
        subtitle="Build your craft brewery, taproom, or brewpub with Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Brewery Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Craft Brewery Construction Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Brewery construction in Charlotte costs between $150 and $400 per square foot depending on whether
                you are building a taproom, production facility, or full brewpub with a commercial kitchen.
                Charlotte has become one of the top craft beer markets in the Southeast, and building a brewery
                requires a construction partner who understands the specialized infrastructure that most general
                contractors have never encountered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From the glycol-cooled draft systems and reinforced equipment pads in the production area to the
                custom bar construction and ABC-compliant floor plans in the taproom, brewery construction sits at
                the intersection of heavy industrial infrastructure and hospitality-grade finish work. Charlotte
                craft beer corridors in NoDa, South End, LoSo, FreeMoreWest, and Plaza Midwood each present
                different building conditions, zoning requirements, and construction challenges. You need a
                contractor who has navigated the specific permitting requirements of Mecklenburg County, the NC
                ABC Commission, the fire marshal, and the health department for brewery projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. We specialize in craft brewery construction,
                taproom buildouts, brewpub builds, beer garden construction, and cidery and distillery facilities
                across the Charlotte metro area. We work closely with your architect and design team to
                coordinate production layout, equipment supplier specifications, taproom design, and regulatory
                compliance seamlessly. Licensed in both North Carolina and South Carolina, we serve Charlotte
                and surrounding communities including{' '}
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
                { icon: Beer, title: 'Brewery Expertise', desc: 'Specialized construction for production breweries, taprooms, brewpubs, and beer gardens including glycol systems, equipment pads, floor drains, and draft infrastructure.' },
                { icon: Clock, title: 'Equipment-Ready Builds', desc: 'We coordinate with your brewing equipment supplier to ensure every pad, drain, and utility connection is ready when your system arrives.' },
                { icon: ClipboardCheck, title: 'ABC & Code Compliance', desc: 'Deep experience with NC ABC Commission, Mecklenburg County building code, fire marshal, and health department requirements for brewery projects.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and quality. Your equipment delivery date drives our entire construction schedule.' },
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

      {/* Featured Brewery Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Recent Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Brewery &amp; Taproom Projects in the Charlotte Area
            </h2>
            <p className="text-muted-foreground">
              Every brewery project is different. These representative builds illustrate the range of
              concepts, square footages, production systems, and timelines we deliver across the
              Charlotte metro area.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Beer,
                title: 'Craft Brewery & Taproom',
                neighborhood: 'NoDa Arts District',
                size: '6,500 sq ft',
                scope: '15-barrel brewhouse with mash tun, lauter tun, and hot liquor tank; fermentation hall with eight 30-barrel fermenters on glycol-cooled system; taproom with custom 40-foot bar and 20 taps; outdoor beer garden with covered pavilion; ABC-compliant production-to-taproom separation.',
                highlights: ['15-barrel brewhouse platform', '20-tap glycol trunk line', 'Outdoor beer garden with covered pavilion', 'ABC-compliant floor plan'],
                timeline: '20 weeks',
                sqft: '6,500',
              },
              {
                icon: Store,
                title: 'Brewpub & Restaurant',
                neighborhood: 'South End',
                size: '4,200 sq ft',
                scope: '7-barrel nano brewing system integrated with full commercial kitchen; Type I hood ventilation, fire suppression, grease trap, and walk-in cooler; dining room seating 80 guests with taproom bar; dual Mecklenburg Health Department and ABC Commission permitting.',
                highlights: ['7-barrel nano brewing system', 'Full commercial kitchen & hood', 'Dual health dept + ABC permitting', '80-seat dining room & bar'],
                timeline: '16 weeks',
                sqft: '4,200',
              },
              {
                icon: Warehouse,
                title: 'Production Brewery',
                neighborhood: 'Steele Creek',
                size: '12,000 sq ft',
                scope: 'Warehouse adaptive reuse into 30-barrel production brewery; brewhouse platform with reinforced concrete equipment pads; fermentation hall with 12 fermenters; canning line with compressed air system and conveyor foundations; two walk-in cold rooms; loading dock modifications for keg distribution.',
                highlights: ['30-barrel brewhouse platform', 'Canning line foundations & compressed air', 'Walk-in cold storage (2)', 'Loading dock & keg distribution area'],
                timeline: '24 weeks',
                sqft: '12,000',
              },
              {
                icon: Grape,
                title: 'Cidery & Tasting Room',
                neighborhood: 'Matthews',
                size: '3,000 sq ft',
                scope: 'Cidery production area with fruit pressing equipment foundations, juice cold storage, fermentation tanks on glycol system, and chemical-resistant flooring; tasting room with 12-tap bar and retail shelving; ABC cidery permit coordination; outdoor patio with ABC-required perimeter fencing.',
                highlights: ['Cidery production infrastructure', '12-tap tasting room bar', 'Retail area & bottle shop', 'ABC cidery permit coordination'],
                timeline: '12 weeks',
                sqft: '3,000',
              },
            ].map((project) => (
              <Card key={project.title} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-0.5">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{project.neighborhood}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.scope}</p>
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <span className="font-semibold">{project.sqft}</span>
                      <span className="text-muted-foreground">sq ft</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <span className="font-semibold">{project.timeline}</span>
                      <span className="text-muted-foreground">build</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Types of Brewery Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Brewery Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Brewery & Craft Beverage Construction We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every brewery concept has different construction requirements. From nano breweries and
              satellite taprooms to full production facilities with canning lines and commercial kitchens,
              we bring specialized equipment coordination and regulatory expertise to each project type.
            </p>
          </div>
          <div className="space-y-8">
            {breweryTypes.map((type) => (
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

      {/* Our Brewery Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Brewery Construction Process: 8 Steps from Concept to First Pour
            </h2>
            <p className="text-muted-foreground">
              Brewery construction involves specialized equipment coordination, multiple regulatory agencies,
              and infrastructure systems that most commercial builds never encounter. Our structured 8-step
              process ensures every equipment pad, glycol line, floor drain, and permit is planned and
              executed to protect your opening date.
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
              Why Choose We Build for Your Brewery Construction
            </h2>
            <p className="text-muted-foreground">
              Brewery construction is too specialized to trust to a general contractor who has never
              coordinated with a brewing equipment supplier, routed a glycol system, or navigated ABC
              licensing requirements. Here is what sets We Build apart.
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

      {/* Charlotte Brewery Market Context */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Charlotte Craft Beer Market
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Building in Charlotte&apos;s Booming Craft Beer Scene
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Charlotte has grown into one of the top craft beer cities in the Southeast, with more than
                80 breweries operating across the metro area. Understanding the local market is essential
                for siting and designing a brewery that can compete and grow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">80+ Breweries &amp; Growing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The Charlotte metro area has surpassed 80 licensed breweries, with new taprooms and
                      production facilities opening regularly. Despite the crowded market, strong neighborhood
                      loyalty and tourism continue to support new entrants with differentiated concepts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Prime Brewery Corridors</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Charlotte&apos;s craft beer density is concentrated in a few key corridors. NoDa (North
                      Davidson) is the original brewery hub with an arts-district walkability that drives
                      strong taproom foot traffic. South End and LoSo offer light rail access and dense
                      young professional populations. FreeMoreWest and Plaza Midwood attract loyal local
                      audiences. Each corridor has different building stock, lease rates, and construction
                      challenges that affect your project cost and timeline.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Outdoor Seating Demand</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Charlotte&apos;s climate supports outdoor beer gardens and patio seating for roughly
                      eight months of the year. Breweries with well-designed outdoor spaces consistently
                      outperform those without. Charlotte zoning and ABC regulations require physical
                      barriers around outdoor permitted premises — a detail that must be designed into
                      the site plan from the beginning to avoid costly post-permit revisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ABC Permit Requirements</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The NC ABC Commission requires brewery applicants to submit floor plans showing
                      production and public area separation, alcohol storage locations, and bar layout
                      before a brewery permit is issued. Approval can take 60 to 90 days, and any floor
                      plan revision after submission restarts the review clock. Getting the floor plan
                      ABC-ready during the design phase — not after construction — is one of the most
                      important steps in hitting your target opening date.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adaptive Reuse Opportunities</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Many of Charlotte&apos;s most successful breweries occupy converted industrial and
                      warehouse buildings, particularly in LoSo, FreeMoreWest, and Steele Creek. These
                      spaces often have high ceilings, heavy floor loads, and existing floor drains that
                      reduce construction costs compared to raw shell space. Our adaptive reuse
                      expertise means we evaluate potential spaces with an eye toward brewery-specific
                      construction requirements before you sign a lease.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Outdoor Seating Zoning Rules</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Charlotte&apos;s UDO (Unified Development Ordinance) governs outdoor seating as an
                      accessory use to the primary food or beverage establishment. Depending on the
                      zoning district, outdoor seating may require a special use permit, noise mitigation,
                      or screening from adjacent uses. Parking calculations also increase
                      with outdoor seat count. We navigate these requirements during the design phase so
                      your beer garden is compliant before the first shovel hits the ground.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-2">Planning Your Brewery Build? Start with a Site Evaluation.</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Before you sign a lease, let us evaluate your prospective space for brewery construction
                feasibility — ceiling heights, floor loads, utility capacity, drain infrastructure, and
                ABC floor plan compatibility. We identify issues that could blow your budget before you
                are contractually committed to the space.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" asChild>
                  <Link href="/contact">Request a Site Evaluation</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/guides/charlotte-building-permit-guide">Charlotte Permit Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brewery Construction Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Brewery Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Brewery construction costs in Charlotte depend on the concept type, production capacity,
                taproom size, food service scope, and existing building conditions. Below are typical cost
                ranges based on recent brewery projects in the Charlotte metro area. Every project is unique,
                and we provide consultations after an initial site visit.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Brewery Construction Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Production capacity:</strong> A 3-barrel nano system has different pad, utility, and glycol requirements than a 30-barrel production system with a canning line, which directly impacts construction cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Existing infrastructure:</strong> Spaces with industrial flooring, adequate floor drains, high ceilings, and heavy electrical service from previous industrial use cost significantly less to convert than raw shell spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Food service scope:</strong> Adding a full commercial kitchen for a brewpub concept adds $250 to $400 per square foot for the kitchen area alone, plus permitting complexity with the health department.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Taproom finish level:</strong> A casual industrial aesthetic with exposed ceilings and polished concrete costs significantly less than a high-end taproom with custom millwork, acoustic treatments, and premium finishes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Outdoor space:</strong> Adding a beer garden with covered structures, outdoor bar service, drainage, lighting, and ABC-compliant barriers adds to both construction cost and permitting timeline.</span>
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
                Brewery Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte brewery owners and craft beverage
                entrepreneurs ask about brewery construction costs, timelines, ABC permits, equipment
                coordination, and regulatory requirements.
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
            <h2 className="text-3xl font-bold">Brewery Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our related services for brewery and hospitality construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Restaurant Construction Charlotte NC', href: '/services/restaurant-construction', type: 'Service', desc: 'Full-service restaurant buildouts including commercial kitchens, bars, and hospitality renovations across the Charlotte metro area.' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction for breweries, restaurants, retail, and mixed-use developments across Charlotte.' },
              { title: 'Green Building', href: '/services/green-building', type: 'Service', desc: 'Sustainable building practices that reduce operating costs for energy-intensive brewery facilities.' },
              { title: 'Commercial Construction Cost Guide', href: '/guides/commercial-construction-costs-charlotte', type: 'Guide', desc: 'Detailed cost breakdowns for commercial construction in Charlotte — understand what drives brewery and taproom build costs.' },
              { title: 'Charlotte Building Permit Guide', href: '/guides/charlotte-building-permit-guide', type: 'Guide', desc: 'A complete guide to the Charlotte permitting process for commercial projects, including timelines, agencies, and requirements.' },
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
            Ready to Build Your Brewery in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a production brewery, taproom, brewpub, beer garden, or cidery
            in Charlotte, We Build has the brewery construction expertise, equipment coordination
            experience, and ABC compliance knowledge to deliver your project on time and ready for
            your first pour.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site evaluation and consultation. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities.
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
