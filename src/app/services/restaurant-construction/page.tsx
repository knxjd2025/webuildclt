import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  UtensilsCrossed,
  Beer,
  ChefHat,
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
  Flame,
  Thermometer,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  ClipboardCheck,
  Droplets,
  Wind,
  Scale,
  Users,
  Calendar,
  AlertTriangle,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Restaurant Construction Charlotte NC | Restaurant Buildout & Commercial Kitchen Contractor',
  description:
    'Expert restaurant construction contractor in Charlotte, NC. Commercial construction companies for full-service restaurant buildouts, commercial kitchen construction, bar & brewery builds, food hall construction & hospitality renovations. Health department compliant. Veteran-owned, licensed in NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'restaurant construction Charlotte NC',
    'restaurant construction near me',
    'restaurant construction contractor Charlotte NC',
    'restaurant buildout Charlotte NC',
    'restaurant buildout near me',
    'commercial kitchen construction Charlotte',
    'commercial kitchen construction near me',
    'restaurant contractor Charlotte',
    'bar construction Charlotte NC',
    'brewery construction Charlotte',
    'restaurant renovation Charlotte NC',
    'commercial kitchen contractor Charlotte NC',
    'restaurant build out Charlotte',
    'hospitality construction Charlotte NC',
    'food hall construction Charlotte',
    'ghost kitchen construction Charlotte NC',
    'restaurant construction Charlotte North Carolina',
    'restaurant construction fort mill sc',
    'restaurant construction lake norman nc',
    'restaurant buildout contractor near me',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/restaurant-construction',
  },
  openGraph: {
    title: 'Restaurant & Hospitality Construction Charlotte NC | We Build',
    description:
      'Build your restaurant, bar, brewery, or commercial kitchen with Charlotte\'s veteran-owned construction team. Health department compliant. Licensed in NC & SC.',
    url: 'https://webuildclt.com/services/restaurant-construction',
    type: 'website',
  },
};

const restaurantTypes = [
  {
    icon: UtensilsCrossed,
    title: 'Full-Service Restaurant Construction',
    slug: 'full-service-restaurant',
    desc: 'Complete restaurant buildouts including commercial kitchens, dining rooms, bar areas, private dining spaces, host stations, and outdoor patios for fine dining and casual sit-down restaurants.',
    details:
      'Full-service restaurant construction in Charlotte is among the most complex commercial buildout categories. These projects require a fully engineered commercial kitchen with hood ventilation systems rated for the cooking equipment being installed, Type I and Type II hoods with fire suppression, grease trap sizing based on fixture count, walk-in coolers and freezers with proper refrigeration lines, and multiple prep and wash stations plumbed to code. The front-of-house demands a completely different set of finishes and systems: ambient lighting design, sound-dampening materials for comfortable dining, HVAC zoning that separates the hot kitchen from the temperature-controlled dining room, accessible restrooms, and a host station with point-of-sale infrastructure. We coordinate with Mecklenburg County Health Department, fire marshal, and ABC Commission when alcohol service is included. Most full-service restaurant buildouts in Charlotte take 14 to 22 weeks depending on kitchen complexity and finish level.',
    cost: '$200-$400/sq ft',
  },
  {
    icon: Store,
    title: 'Fast-Casual & QSR Restaurant Buildouts',
    slug: 'fast-casual-qsr',
    desc: 'Efficient counter-service restaurants, quick-service concepts, and fast-casual buildouts optimized for high throughput, visible prep lines, and streamlined kitchen operations.',
    details:
      'Fast-casual and quick-service restaurant buildouts prioritize operational efficiency and customer flow above all else. The kitchen layout is typically designed around a linear or U-shaped workflow that moves food from prep to assembly to service with minimal wasted motion. These concepts often feature open or semi-open kitchens where guests can see food being prepared, which requires a higher level of finish and cleanliness in the kitchen area than a traditional back-of-house setup. Counter-service layouts need careful planning for queuing areas, order pickup zones, digital menu board infrastructure, and drive-through windows if applicable. Charlotte fast-casual operators in areas like South End, NoDa, and Plaza Midwood often want a design-forward aesthetic that competes with full-service restaurants on ambiance while maintaining the speed and labor efficiency of counter service. We build fast-casual concepts that balance kitchen productivity with guest experience.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Beer,
    title: 'Bar, Brewery & Taproom Construction',
    slug: 'bar-brewery-taproom',
    desc: 'Custom bar builds, craft brewery taprooms, wine bars, and cocktail lounges including draft systems, glycol cooling, production areas, and ABC permit-compliant layouts.',
    details:
      'Charlotte has become one of the top craft beer cities in the Southeast, and bar and brewery construction requires specialized knowledge that most general contractors lack. Brewery taprooms need a clear separation between production areas and public spaces to satisfy ABC Commission requirements and building code occupancy classifications. Draft beer systems require glycol-cooled trunk lines running from walk-in coolers to tap towers, with proper insulation and drainage at every connection point. Bar construction involves custom millwork, under-bar refrigeration, three-compartment sinks, glass washers, ice bins, speed rails, and bottle display lighting. For production breweries, we handle equipment pads for brew kettles, grain silo foundations, floor drains with proper slope, glycol chiller installations, CO2 and nitrogen line routing, and canning or bottling line infrastructure. Mecklenburg County ABC permits require specific layout features including separate storage for liquor versus beer and wine, and we ensure your floor plan satisfies these requirements before you apply for your license.',
    cost: '$175-$350/sq ft',
  },
  {
    icon: ChefHat,
    title: 'Commercial Kitchen Construction',
    slug: 'commercial-kitchen',
    desc: 'Standalone commercial kitchens, commissary kitchens, catering facilities, and production kitchens built to Mecklenburg County health code with full ventilation and fire suppression systems.',
    details:
      'Commercial kitchen construction is the technical backbone of every restaurant project, and it is also the area where mistakes are most expensive to fix after the fact. A properly built commercial kitchen starts with the floor: a sealed, non-porous surface sloped to floor drains for proper sanitation and drainage. Walls require FRP panels or commercial tile to a minimum height specified by the health department. The ventilation system is the most critical and expensive component, with Type I exhaust hoods over cooking equipment and Type II hoods over dishwashers and steam tables, all connected to a rooftop exhaust fan and a makeup air unit that replaces the exhausted air to maintain proper building pressure. Fire suppression systems with Ansul or similar wet chemical agents must cover all cooking surfaces under the hood. Walk-in coolers and freezers need dedicated refrigeration circuits and proper drainage for defrost cycles. Grease traps must be sized according to fixture count and flow rate calculations, and Mecklenburg County requires a grease trap maintenance log. We handle the full scope of commercial kitchen construction from utility rough-in through health department final inspection.',
    cost: '$250-$400/sq ft',
  },
  {
    icon: Building2,
    title: 'Hotel & Hospitality Construction',
    slug: 'hotel-hospitality',
    desc: 'Restaurant, bar, banquet kitchen, and food service facility construction within hotels, resorts, event venues, and hospitality properties throughout the Charlotte metro area.',
    details:
      'Hotel and hospitality food service construction presents unique challenges because the work typically happens within an operating building that has guests, staff, and strict noise and dust restrictions. Hotel restaurant buildouts must coordinate with the property existing mechanical, electrical, and plumbing infrastructure, which may have capacity limitations that require upgrades before new kitchen equipment can be installed. Banquet kitchens need high-volume production capability with staging areas for plated service, buffet prep zones, and separate dishwashing operations. Room service kitchens require holding equipment and expediting stations designed for individual plate preparation rather than bulk production. We have experience working within Charlotte hospitality properties where construction must be phased to avoid disrupting guest experiences, and where dust containment, noise control, and after-hours scheduling are standard requirements rather than optional courtesies. Our team coordinates with hotel operations managers to develop construction schedules that protect revenue-generating spaces while delivering the new food service facilities on time.',
    cost: '$200-$375/sq ft',
  },
  {
    icon: Warehouse,
    title: 'Food Hall & Ghost Kitchen Construction',
    slug: 'food-hall-ghost-kitchen',
    desc: 'Multi-vendor food halls, shared commercial kitchens, ghost kitchen facilities, and food incubator spaces with individual ventilation, utilities, and health department separation.',
    details:
      'Food halls and ghost kitchens are two of the fastest-growing restaurant concepts in Charlotte, and both require construction expertise that goes beyond a standard single-tenant restaurant buildout. Food halls like those in Camp North End, Optimist Park, and South End feature multiple independent food vendors operating under one roof, each requiring their own health department permit, separate ventilation system, individual utility metering, and proper separation between adjacent kitchen operations. The shared common areas need seating, restrooms, and mechanical systems sized for the combined occupancy of all vendors plus guests. Ghost kitchens, also called cloud kitchens or delivery-only kitchens, are pure production facilities with no public-facing dining space. These facilities maximize kitchen density within the building footprint, with each unit requiring full commercial kitchen infrastructure including hoods, fire suppression, grease management, and independent health department approval. We Build has the experience to navigate the complex code and permitting requirements that multi-vendor food service facilities demand in Mecklenburg County.',
    cost: '$175-$350/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Concept Review',
    desc: 'We meet with you to understand your restaurant concept, menu type, service style, seating capacity goals, budget parameters, and timeline requirements. During this first meeting, we discuss your brand vision, target customer experience, kitchen equipment needs, alcohol service plans, and any special requirements like outdoor dining or live entertainment. If you have a lease in negotiation, we can provide preliminary pricing to help you secure an appropriate tenant improvement allowance.',
  },
  {
    step: '02',
    title: 'Site Evaluation & Feasibility Assessment',
    desc: 'We conduct a thorough evaluation of your prospective or existing space to assess feasibility for restaurant use. This includes verifying utility capacity for gas, electrical, water, and sewer connections, evaluating existing ventilation pathways to the roof, checking floor-to-ceiling height for hood installation, confirming grease trap capacity or identifying where one needs to be installed, reviewing structural load capacity for heavy kitchen equipment, and verifying that the zoning allows restaurant use with alcohol service if applicable. We identify potential deal-breakers early so you can make informed decisions before signing a lease.',
  },
  {
    step: '03',
    title: 'Kitchen Layout & Equipment Planning',
    desc: 'Our team works with you and your chef or kitchen consultant to design a kitchen layout that maximizes workflow efficiency for your specific menu and service volume. We plan equipment placement, utility rough-in locations, hood coverage zones, walk-in cooler and freezer sizing, prep station configurations, dish pit layout, and dry storage locations. Every kitchen layout decision affects utility costs, equipment procurement timelines, and health department compliance, so getting this right before construction begins is critical.',
  },
  {
    step: '04',
    title: 'Design Development & Front-of-House Planning',
    desc: 'While the kitchen layout drives the back-of-house design, the front-of-house is where your brand comes to life. We work with your architect and design team to develop dining room layouts, bar designs, host station placement, restroom locations, outdoor patio plans, lighting design, acoustic treatments, and finish material selections. Our coordinated approach ensures the front-of-house design integrates seamlessly with the kitchen and mechanical systems behind the walls.',
  },
  {
    step: '05',
    title: 'Permitting: Building, Health Department & Fire Marshal',
    desc: 'Restaurant construction in Charlotte requires multiple permits from different agencies. We prepare and submit building permit applications to Mecklenburg County Code Enforcement covering structural, mechanical, electrical, and plumbing plans. Simultaneously, we submit kitchen plans to the Mecklenburg County Health Department for food service establishment review. Fire marshal review covers hood fire suppression systems, emergency exits, occupancy calculations, and sprinkler modifications. We manage all three review processes in parallel to minimize the total permitting timeline, which typically runs 4 to 8 weeks for restaurant projects.',
  },
  {
    step: '06',
    title: 'ABC Permit Coordination (Alcohol Service)',
    desc: 'If your restaurant, bar, or brewery will serve alcohol, you need an ABC permit from the North Carolina Alcoholic Beverage Control Commission. The ABC Commission has specific requirements for floor plan layout, storage locations for different alcohol types, separation between bar service and production areas in breweries, and proximity to churches and schools. We ensure your construction plans satisfy all ABC layout requirements before you submit your application, so your permit is not delayed by plan corrections after construction is already underway.',
  },
  {
    step: '07',
    title: 'Pre-Construction & Procurement',
    desc: 'Before breaking ground, we finalize the construction schedule, order long-lead items like custom hood systems, walk-in coolers, and specialty finishes, coordinate subcontractor schedules, and develop a phasing plan. Kitchen equipment often has 8 to 12 week lead times, so we initiate procurement early to ensure equipment arrives when the kitchen is ready for installation. We establish material staging logistics, debris removal schedules, and dust containment protocols especially important if the restaurant is in a multi-tenant building.',
  },
  {
    step: '08',
    title: 'Construction Phase',
    desc: 'Construction begins with demolition of existing conditions followed by rough-in for plumbing, electrical, gas, and HVAC systems. The kitchen area receives priority because it is the most infrastructure-intensive zone: floor drains, grease trap connections, gas lines for cooking equipment, high-amperage electrical circuits, hood ductwork to the roof, and fire suppression piping. Once rough-in passes inspection, we proceed with insulation, drywall, ceiling installation, FRP panels in the kitchen, flooring, painting, millwork, bar construction, and fixture installation. Weekly progress updates and site walks keep you informed throughout.',
  },
  {
    step: '09',
    title: 'Health Department & Fire Marshal Inspections',
    desc: 'Restaurant projects require specialized inspections beyond standard building inspections. The Mecklenburg County Health Department conducts a pre-opening inspection verifying that all food contact surfaces, handwash stations, three-compartment sinks, equipment installations, refrigeration temperatures, ventilation performance, and pest prevention measures meet North Carolina food code requirements. The fire marshal inspects hood fire suppression activation, emergency lighting, exit signage, sprinkler coverage, and occupancy postings. We coordinate all inspections and conduct internal quality walks before each official inspection to ensure first-attempt passage.',
  },
  {
    step: '10',
    title: 'Final Punch List, Training & Handoff',
    desc: 'After all inspections pass, we conduct a detailed punch list walk-through with you to identify any items needing adjustment or touch-up. We address every item promptly so you can begin staff training and soft-opening preparation on schedule. At handoff, you receive complete close-out documentation including as-built drawings, equipment warranties and manuals, hood system maintenance requirements, grease trap pumping schedule documentation, and all permit certificates. Our one-year workmanship warranty covers all construction performed by our team, and we remain available for any post-opening warranty items.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company with deep roots in the Charlotte community. Our military background instills discipline, accountability, and a commitment to delivering on every promise. When we commit to an opening date, we plan every detail backward from that date to ensure you open on time.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience, including extensive restaurant and food service buildout work across the Charlotte metro area. We understand the specialized systems, code requirements, and vendor coordination that restaurant construction demands. This experience translates directly into fewer surprises, fewer change orders, and faster project delivery.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve restaurant owners throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, and the Lake Norman corridor. Our dual-state licensing is especially valuable for restaurant groups expanding across the state line.',
  },
  {
    icon: ClipboardCheck,
    title: 'Health Department Expertise',
    desc: 'We have deep experience with Mecklenburg County Health Department requirements for food service establishments. Our team builds kitchens that pass health inspections on the first attempt because we design for compliance from day one, not as a last-minute fix. We understand the specific requirements for food contact surfaces, handwash station placement, ventilation, and pest prevention that inspectors look for.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into restaurant construction projects. Energy-efficient kitchen ventilation, LED lighting, low-flow plumbing fixtures, recycled content materials, and efficient HVAC design reduce your operating costs from day one while minimizing environmental impact.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Knowledge',
    desc: 'We know Charlotte restaurant construction intimately. We understand which neighborhoods are trending for new restaurant concepts, what Mecklenburg County inspectors prioritize, how long permitting takes for different project types, which subcontractors specialize in restaurant work, and what material lead times look like in this market. This local knowledge saves you time and money.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build client receives weekly progress reports, a dedicated project manager as their single point of contact, and immediate notification of any issues affecting timeline or budget. Restaurant openings involve coordinating staff hiring, menu finalization, vendor setup, and marketing launches around your construction completion date, so transparent communication about schedule is absolutely critical.',
  },
];

const costTiers = [
  {
    type: 'Fast-Casual Counter Service',
    range: '$150-$250/sq ft',
    desc: 'Counter-service restaurant with standard commercial kitchen, basic hood system, limited bar or beverage station, open prep line visibility, and contemporary but cost-effective finishes. Typical for fast-casual concepts, poke bowls, sandwich shops, and similar quick-service formats in Charlotte.',
  },
  {
    type: 'Casual Dining Restaurant',
    range: '$200-$300/sq ft',
    desc: 'Full-service casual dining with a complete commercial kitchen, dining room with booth and table seating, basic bar area, standard restrooms, and mid-range finishes. Includes hood ventilation, fire suppression, walk-in cooler and freezer, and grease trap. The most common restaurant buildout type in Charlotte.',
  },
  {
    type: 'Upscale / Fine Dining Restaurant',
    range: '$300-$400/sq ft',
    desc: 'High-end restaurant with premium kitchen equipment, custom bar millwork, private dining rooms, designer lighting, acoustic treatments, premium flooring and wall finishes, and architecturally detailed interiors. These projects demand the highest level of craftsmanship in both kitchen infrastructure and guest-facing spaces.',
  },
  {
    type: 'Bar / Cocktail Lounge',
    range: '$175-$300/sq ft',
    desc: 'Custom bar construction with draft systems, under-bar refrigeration, glass washers, ice makers, specialty lighting, acoustic design for entertainment, and lounge seating areas. Cost depends heavily on bar length, draft line count, and finish level of millwork and back-bar displays.',
  },
  {
    type: 'Brewery Taproom',
    range: '$200-$350/sq ft',
    desc: 'Taproom with draft system from production area, custom bar, seating, restrooms, and separation between public and production spaces per ABC requirements. Does not include brewing equipment but includes all infrastructure: equipment pads, floor drains, glycol lines, CO2 routing, and utility connections for brew systems.',
  },
  {
    type: 'Commercial / Ghost Kitchen',
    range: '$250-$400/sq ft',
    desc: 'Production-focused commercial kitchen with no public dining space. Maximum kitchen density including multiple hood systems, extensive refrigeration, high-capacity grease management, heavy-duty electrical service, and industrial-grade flooring. Ghost kitchens require the same health department compliance as full-service restaurants but without front-of-house construction costs.',
  },
  {
    type: 'Food Hall Vendor Stall',
    range: '$175-$300/sq ft',
    desc: 'Individual food hall vendor space with dedicated hood, fire suppression, grease connection, utilities, and finishes. Cost per stall is typically higher per square foot than a standalone restaurant because each vendor needs independent kitchen systems within a smaller footprint. Shared common area costs are typically allocated by the food hall developer.',
  },
  {
    type: 'Outdoor Dining / Patio Addition',
    range: '$75-$200/sq ft',
    desc: 'Covered or uncovered outdoor dining construction including structural framing, roofing or shade structures, outdoor-rated flooring, weather-resistant furniture anchoring, lighting, heating elements, and code-compliant railings. Mecklenburg County requires permits for permanent outdoor structures and may require additional restroom capacity based on increased seating count.',
  },
];

const faqs = [
  {
    question: 'How much does restaurant construction cost in Charlotte, NC?',
    answer:
      'Restaurant construction costs in Charlotte range from approximately $150 per square foot for simple fast-casual counter-service concepts to $400 per square foot or more for upscale fine dining establishments with premium finishes and complex kitchen systems. The kitchen is the most expensive area, typically accounting for 40 to 60 percent of the total construction budget due to ventilation, fire suppression, plumbing, electrical, and refrigeration requirements. A 2,500 square foot casual dining restaurant in Charlotte typically costs between $500,000 and $750,000 for the complete buildout, not including kitchen equipment, furniture, or soft costs like design fees and permits. We provide detailed, line-item estimates after a site visit so you know exactly what every dollar covers before construction begins.',
  },
  {
    question: 'How long does it take to build out a restaurant in Charlotte?',
    answer:
      'Restaurant buildout timelines in Charlotte typically range from 12 to 22 weeks of construction, depending on the complexity of the kitchen, the scope of front-of-house finishes, and whether the space requires significant utility upgrades. Before construction begins, add 4 to 8 weeks for design, permitting, and procurement. Fast-casual concepts with simpler kitchens can complete in 12 to 16 weeks. Full-service restaurants with complete bar programs and complex kitchens take 16 to 22 weeks. Brewery taprooms that require production area infrastructure may take 18 to 24 weeks. The single biggest factor affecting timeline is the permitting process with Mecklenburg County, the health department, and the fire marshal, which is why we submit all three in parallel rather than sequentially.',
  },
  {
    question: 'What health department requirements apply to restaurant construction in Charlotte?',
    answer:
      'The Mecklenburg County Health Department enforces the North Carolina Food Code for all food service establishments. Key construction requirements include: non-porous, easily cleanable floor surfaces sloped to floor drains in the kitchen; FRP panels or commercial tile on kitchen walls to a height specified by code; handwash sinks at every food preparation area and near the restrooms; three-compartment sink for manual dishwashing; commercial dishwasher with proper temperature verification; separate storage for chemicals away from food; adequate refrigeration with temperature monitoring; proper ventilation to prevent grease accumulation; and pest prevention measures including sealed penetrations and self-closing exterior doors. The health department reviews your kitchen plans before permits are issued and conducts a pre-opening inspection before you can serve food. We design every kitchen to pass these inspections on the first attempt.',
  },
  {
    question: 'Do I need an ABC permit for alcohol service and how does it affect construction?',
    answer:
      'Yes, any restaurant, bar, or brewery serving alcohol in North Carolina needs a permit from the NC Alcoholic Beverage Control Commission. The type of permit depends on your concept: restaurants typically get mixed beverage permits, bars may need on-premises malt beverage and wine permits plus a mixed beverage permit, and breweries need brewery permits with taproom authorization. ABC permits have specific construction implications including designated alcohol storage areas, separation between production and public spaces in breweries, proper bar layout for responsible service, and distance requirements from churches and schools. Your floor plan must be submitted with your ABC application, so construction plans need to satisfy ABC requirements before you apply. We coordinate the floor plan to meet building code, health department, fire marshal, and ABC requirements simultaneously so you do not have to redesign after one agency requests changes.',
  },
  {
    question: 'What is involved in commercial kitchen ventilation and hood systems?',
    answer:
      'Commercial kitchen ventilation is the most critical and expensive mechanical system in any restaurant. Type I exhaust hoods are required over cooking equipment that produces grease-laden vapors, such as fryers, grills, ranges, and charbroilers. Type II hoods are required over equipment that produces heat and moisture without grease, such as dishwashers and steam tables. Each hood connects to ductwork that runs to a rooftop exhaust fan sized for the hood airflow capacity. Fire suppression systems, typically Ansul or similar wet chemical systems, are installed within Type I hoods and automatically discharge extinguishing agent if a fire is detected. A makeup air unit is required to replace the air exhausted through the hoods, maintaining proper building pressure and preventing backdrafting. The hood system must be designed by a mechanical engineer, installed by a licensed mechanical contractor, and inspected by both the building inspector and fire marshal before the kitchen can operate.',
  },
  {
    question: 'Can I build outdoor dining or a patio for my Charlotte restaurant?',
    answer:
      'Yes, outdoor dining is extremely popular in Charlotte and can significantly increase your seating capacity and revenue, especially in neighborhoods like South End, NoDa, Plaza Midwood, and Dilworth where sidewalk and patio dining is part of the culture. However, outdoor dining construction requires permits from Mecklenburg County and must comply with several requirements. Permanent structures like covered patios need building permits and may require site plan review. If the patio is on a public sidewalk, you need an encroachment agreement from the City of Charlotte. Outdoor seating increases your total occupancy count, which may trigger requirements for additional restrooms, parking spaces, or ADA-accessible routes. If alcohol will be served outdoors, the ABC permit must cover the outdoor area and a physical barrier such as a fence or railing is typically required. We handle all of these requirements as part of the outdoor dining construction scope.',
  },
  {
    question: 'What is a grease trap and does my restaurant need one?',
    answer:
      'A grease trap, also called a grease interceptor, is a plumbing device that captures fats, oils, and grease from kitchen wastewater before it enters the municipal sewer system. Charlotte Water requires grease traps for all food service establishments that produce grease-laden waste, which includes virtually every restaurant, bar, or commercial kitchen. The grease trap must be sized based on the number and type of plumbing fixtures in your kitchen, calculated using a formula specified by the plumbing code. Smaller grease traps can be installed under sinks inside the kitchen, while larger interceptors are buried outside the building. Charlotte Water conducts inspections and requires a maintenance log showing regular pumping and cleaning. Grease trap installation must be planned early in the construction process because it affects plumbing layout, floor elevation, and sometimes requires excavation of the building slab or exterior ground. Retrofitting a grease trap after construction is significantly more expensive than planning for it from the beginning.',
  },
  {
    question: 'How much does a commercial kitchen hood system cost?',
    answer:
      'Commercial kitchen hood system costs in Charlotte vary based on hood length, equipment underneath, ductwork routing distance to the roof, and whether the building already has roof penetrations from a previous restaurant use. A basic hood system covering a single cooking line, including the hood canopy, ductwork, rooftop exhaust fan, makeup air unit, and fire suppression system, typically costs between $25,000 and $60,000 installed. Larger kitchens with multiple hood sections, longer duct runs, or premium stainless steel canopies can reach $80,000 to $120,000 or more. The fire suppression system alone typically costs $5,000 to $15,000 depending on the number of nozzles and coverage area. When evaluating restaurant spaces for lease, always check whether existing hood infrastructure is in place and in usable condition, as this single system can represent 10 to 15 percent of your total construction budget.',
  },
  {
    question: 'What Charlotte neighborhoods are best for opening a new restaurant?',
    answer:
      'Charlotte has several thriving restaurant corridors, each with distinct characteristics. South End along South Boulevard offers high foot traffic from young professionals, excellent light rail access, and a density of new apartment construction that creates a built-in customer base. NoDa, Charlotte arts district, attracts a creative and adventurous dining crowd and has become a hub for craft breweries and unique dining concepts. Optimist Park and Camp North End are emerging as food hall and restaurant destinations with adaptive reuse spaces that offer character and competitive lease rates. Plaza Midwood delivers a loyal neighborhood customer base with an eclectic dining scene. Dilworth and Myers Park serve the established upscale market. South Charlotte along Rea Road and Providence Road serves a family-oriented suburban demographic. Each neighborhood has different lease economics, parking requirements, and customer profiles. We serve all of these areas and can provide construction-specific insights about building conditions, utility availability, and permitting timelines for spaces in each neighborhood.',
  },
  {
    question: 'What is the difference between a restaurant upfit and ground-up restaurant construction?',
    answer:
      'A restaurant upfit, also called a buildout or tenant improvement, transforms an existing commercial space into a restaurant. You are working within an existing building shell with established ceiling heights, column locations, utility entry points, and structural limitations. A ground-up restaurant construction project starts with bare land and builds the entire structure from the foundation up, giving you complete control over the building layout, ceiling height, utility sizing, kitchen placement, and exterior design. Most restaurant projects in Charlotte are upfits because suitable commercial spaces are available in established retail corridors and mixed-use developments. Ground-up construction makes sense when you own the land, need a building specifically designed for your concept, or cannot find an existing space with adequate utility capacity and ceiling height for your kitchen requirements. We Build handles both approaches and can help you evaluate which option best fits your concept, budget, and timeline.',
  },
  {
    question: 'Do you handle brewery and taproom construction in Charlotte?',
    answer:
      'Yes, brewery and taproom construction is one of our specialties. Charlotte has one of the fastest-growing craft beer scenes in the Southeast, with new breweries opening regularly in neighborhoods like NoDa, South End, LoSo, and the FreeMoreWest corridor. Brewery construction involves two distinct zones: the production area where beer is brewed, fermented, and packaged, and the taproom where customers enjoy the finished product. The production side requires equipment pads engineered for heavy brew kettles, floor drains throughout the production area with proper slope for washdown, glycol chiller infrastructure for fermentation temperature control, CO2 and nitrogen line routing, grain storage and milling areas, and waste management systems. The taproom side requires custom bar construction with glycol-cooled draft lines, restrooms sized for taproom occupancy, and the proper ABC-required separation between production and public areas. We coordinate with your brewing equipment supplier to ensure all utility connections, floor drains, and structural supports are ready when your equipment arrives.',
  },
  {
    question: 'What fire safety systems are required in restaurant construction?',
    answer:
      'Restaurant fire safety in Charlotte involves multiple overlapping systems that the fire marshal inspects before you can open. First, the commercial kitchen hood fire suppression system, typically an Ansul or similar wet chemical system, automatically detects and suppresses cooking fires under the hood. This system must be installed by a licensed fire protection contractor and inspected semi-annually after installation. Second, the building sprinkler system may need modifications if the restaurant construction changes the ceiling layout, adds rooms, or modifies the floor plan. Third, the fire alarm system must include pull stations at exits, smoke detectors in appropriate locations, and audible and visual notification devices throughout the space. If the building is part of a larger complex, the restaurant fire alarm must integrate with the building master fire alarm panel. Fourth, emergency lighting, illuminated exit signs, and a posted evacuation plan are required. The fire marshal conducts a separate inspection from the building inspector, and both must approve the space before occupancy.',
  },
  {
    question: 'How much does a full restaurant build-out cost compared to converting an existing restaurant space in Charlotte?',
    answer:
      'Converting a second-generation restaurant space, one that previously operated as a restaurant, typically costs 30 to 50 percent less than building out a raw retail shell. The savings come from reusing existing hood ductwork, grease traps, floor drains, gas lines, and electrical capacity that were installed for the previous tenant. A second-gen conversion in Charlotte usually runs $100 to $250 per square foot, while a first-generation build-out from a vanilla shell ranges from $150 to $400 per square foot. However, reuse savings depend on condition and code compliance of the existing systems. We inspect every component before recommending reuse versus replacement.',
  },
  {
    question: 'How does restaurant construction in Charlotte differ from building in Fort Mill or Rock Hill, SC?',
    answer:
      'The biggest differences are permitting jurisdiction and health department requirements. Charlotte restaurants are reviewed by Mecklenburg County Code Enforcement and the Mecklenburg County Health Department, which enforce the North Carolina Food Code. Fort Mill and Rock Hill fall under York County building permits and the South Carolina Department of Health and Environmental Control, which follows a different set of food service regulations. ABC licensing also differs because South Carolina has its own alcohol control commission with separate permit types and requirements. We Build holds general contractor licenses in both states and has completed restaurant projects on both sides of the state line, so we manage these jurisdictional differences seamlessly for our clients.',
  },
  {
    question: 'Is it better to lease a restaurant space or build a freestanding restaurant building in Charlotte?',
    answer:
      'Leasing is the right choice for most first-time restaurant operators and new concept launches because it requires significantly less upfront capital and allows you to test the market before committing to a permanent building. A leased space with a landlord-provided TI allowance might require $300,000 to $750,000 in construction costs, while a freestanding ground-up restaurant on owned land typically costs $800,000 to $2 million or more depending on size and site work. Freestanding buildings make sense for established operators with proven concepts who want to build equity, control their space long-term, and design from scratch without landlord restrictions. We Build handles both lease build-outs and ground-up restaurant construction throughout the Charlotte metro area.',
  },
];

export default function RestaurantConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Restaurant & Hospitality Construction Charlotte NC',
            'Expert restaurant construction contractor in Charlotte, NC. Full-service restaurant buildouts, commercial kitchen construction, bar and brewery builds, food hall and ghost kitchen construction, and hospitality renovations. Health department compliant. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/restaurant-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Restaurant Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Restaurant & Hospitality Construction Charlotte NC"
        subtitle="Build your restaurant, bar, brewery, or commercial kitchen with Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Restaurant Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Restaurant Construction Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s food and beverage scene is booming. From the craft breweries lining North Davidson
                Street in NoDa to the upscale dining destinations along East Boulevard in Dilworth, from the food
                halls and adaptive reuse spaces at Camp North End and Optimist Park to the fast-casual concepts
                filling every new mixed-use development in South End, Charlotte has become one of the most dynamic
                restaurant markets in the Southeast. That growth means restaurant owners, hospitality groups, and
                food entrepreneurs need a construction partner who understands the unique complexity of building
                spaces where food is prepared, alcohol is served, and health department compliance is not optional.
                Restaurant construction is fundamentally different from standard{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link> because
                it involves specialized mechanical, plumbing, electrical, and fire protection systems that most
                general contractors rarely encounter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Building a restaurant in Charlotte requires navigating a web of overlapping regulatory agencies:
                Mecklenburg County Code Enforcement for building permits, the Mecklenburg County Health Department
                for food service establishment approval, the Charlotte Fire Department for fire suppression and
                life safety systems, the NC Alcoholic Beverage Control Commission for alcohol permits, and Charlotte
                Water for grease trap compliance. Each agency has its own review process, inspection schedule, and
                approval requirements. A single failed inspection from any one of these agencies can delay your
                opening by weeks, costing you rent, payroll for hired staff, and lost revenue during your critical
                launch period. You need a restaurant contractor who has been through this process dozens of times
                and knows exactly what each inspector will look for.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. We specialize in restaurant buildouts, commercial
                kitchen construction, bar and brewery builds, and hospitality renovations across the Charlotte metro
                area. We handle everything from coordinating with your architect and design team on kitchen layout
                planning and material selection to permitting, construction, health department coordination, and
                final handoff.
                Licensed in both North Carolina and South Carolina, we serve Charlotte and surrounding communities
                including <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
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
                { icon: ChefHat, title: 'Kitchen Expertise', desc: 'Full commercial kitchen construction including hood systems, fire suppression, grease traps, walk-in coolers, and health department-compliant infrastructure.' },
                { icon: Clock, title: 'On-Time Openings', desc: 'We plan backward from your target opening date, coordinating permits, inspections, and construction milestones to protect your launch timeline.' },
                { icon: ClipboardCheck, title: 'Code Compliance', desc: 'Deep experience with Mecklenburg County Health Department, fire marshal, and ABC Commission requirements means fewer inspection failures and delays.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and quality. When we commit to an opening date, we deliver.' },
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

      {/* Types of Restaurant Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Restaurant Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Restaurant & Hospitality Construction We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every restaurant concept has different construction requirements. From fast-casual
              counter service to upscale fine dining, from craft brewery taprooms to multi-vendor
              food halls, we bring specialized experience and code knowledge to each project type.
            </p>
          </div>
          <div className="space-y-8">
            {restaurantTypes.map((type) => (
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

      {/* Our Restaurant Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Restaurant Construction Process: 10 Steps from Concept to Opening Day
            </h2>
            <p className="text-muted-foreground">
              Restaurant construction involves more regulatory agencies, specialized systems, and
              coordination points than any other commercial buildout type. Our structured 10-step
              process ensures every permit, inspection, and construction milestone is planned and
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
              Why Choose We Build for Your Restaurant Construction
            </h2>
            <p className="text-muted-foreground">
              Restaurant construction is too complex and too high-stakes to trust to a contractor
              who builds restaurants as a side project. Every week of delay costs you rent, payroll,
              and revenue. Here is what sets We Build apart from general contractors who occasionally
              take on restaurant projects.
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

      {/* Featured Restaurant Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Charlotte Restaurant Construction Projects
            </h2>
            <p className="text-muted-foreground">
              From intimate neighborhood bistros to multi-vendor food halls, our restaurant construction
              portfolio spans the full range of food and beverage concepts across the Charlotte metro area.
              Below are representative projects that illustrate the complexity and quality we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Farm-to-Table Restaurant',
                neighborhood: 'South End, Charlotte',
                sqft: '3,200',
                duration: '14 weeks',
                icon: ChefHat,
                highlights: [
                  'Full commercial kitchen with custom ventilation hood array',
                  'Walk-in cooler + freezer with remote condensing units',
                  'Custom reclaimed wood bar and back-bar display',
                  'Exposed brick dining room with acoustic ceiling panels',
                  'Mecklenburg County Health Department first-attempt approval',
                ],
                desc: 'A complete ground-up interior buildout in a 1920s warehouse shell in Charlotte\'s South End corridor. The farm-to-table concept required a production-forward kitchen visible through a pass-through window, an open prep station for guest interaction, a full bar with ABC mixed beverage permit compliance, and premium finishes that honored the historic character of the space.',
              },
              {
                title: 'Fast-Casual Restaurant',
                neighborhood: 'Ballantyne, Charlotte',
                sqft: '2,400',
                duration: '10 weeks',
                icon: Store,
                highlights: [
                  'Inline retail center upfit from vanilla shell',
                  'Commissary-style kitchen with linear workflow prep line',
                  'Open kitchen concept with guest-facing assembly counter',
                  'Digital menu board and POS infrastructure rough-in',
                  'Drive-through window with dedicated order confirmation screen',
                ],
                desc: 'A fast-casual buildout in a Ballantyne retail center positioned for high lunch and dinner throughput. The compact commissary kitchen layout maximizes efficiency within the footprint, with a visible assembly line designed to reinforce the brand\'s freshness story. Delivered in 10 weeks including permitting to accommodate a pre-planned marketing launch.',
              },
              {
                title: 'Upscale Bar & Lounge',
                neighborhood: 'NoDa, Charlotte',
                sqft: '4,100',
                duration: '18 weeks',
                icon: Beer,
                highlights: [
                  'Adaptive reuse of a 1940s industrial warehouse',
                  '42-foot custom craft cocktail bar with 16-tap draft system',
                  'VIP lounge area with private bottle service stations',
                  'Exposed steel, concrete floors, and designer pendant lighting',
                  'Full ABC on-premises mixed beverage permit layout coordination',
                ],
                desc: 'An adaptive reuse of a mid-century industrial warehouse in NoDa, transformed into an upscale cocktail lounge with a 42-foot bar, VIP lounge pods, and a full draft beer program. The project required structural reinforcement of the existing roof deck, complete mechanical and electrical upgrades, and careful acoustic design to support a live entertainment program within a mixed-use corridor.',
              },
              {
                title: 'Food Hall Vendor Stall',
                neighborhood: 'Camp North End, Charlotte',
                sqft: '800',
                duration: '6 weeks',
                icon: Warehouse,
                highlights: [
                  'Individual health department permit with dedicated hood system',
                  'Compact commercial kitchen with shared prep access',
                  'Independent utility metering for vendor accountability',
                  'FRP wall panels, sealed epoxy flooring, and floor drain network',
                  'Coordinated with food hall developer\'s shared common area scope',
                ],
                desc: 'A compact vendor stall buildout within the Camp North End food hall development. Despite the tight 800 square foot footprint, the stall required its own independent commercial kitchen infrastructure: a dedicated exhaust hood with fire suppression, grease management connection, individual electrical and plumbing service, and health department approval as a standalone food service establishment. Completed in 6 weeks to meet the food hall\'s coordinated opening schedule.',
              },
            ].map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/5 border-b border-primary/10 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                            {project.neighborhood}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                            <Scale className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                            {project.sqft} sq ft
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                            {project.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">
                View Full Project Portfolio
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Kitchen Design Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Kitchen Construction
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Commercial Kitchen Construction: The Heart of Every Restaurant
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The commercial kitchen is the most technically complex and heavily regulated area of any
                restaurant. It requires specialized mechanical, plumbing, electrical, and fire protection
                systems that must work together seamlessly and pass inspections from multiple agencies.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Hood Ventilation Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The exhaust hood system is the single most expensive and critical mechanical component
                  in a commercial kitchen. Type I hoods are required over any cooking equipment that
                  produces grease-laden vapors: fryers, grills, charbroilers, ranges, woks, and rotisseries.
                  Type II hoods cover equipment that produces steam and heat without grease, such as
                  dishwashers, steam tables, and ovens. Each hood connects to dedicated ductwork that runs
                  to the roof, where an exhaust fan pulls contaminated air out of the kitchen. A makeup air
                  unit, often the most overlooked component, replaces the exhausted air to maintain proper
                  building pressure. Without adequate makeup air, the kitchen creates negative pressure that
                  pulls air through doors and windows, makes doors difficult to open, causes backdrafting of
                  gas appliances, and creates uncomfortable temperature swings. We size and design hood systems
                  in coordination with the mechanical engineer to ensure proper airflow balance throughout the
                  restaurant.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Fire Suppression Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every Type I exhaust hood must include an automatic fire suppression system, typically an
                  Ansul or similar wet chemical suppression system. The system includes nozzles aimed at each
                  piece of cooking equipment under the hood, a detection mechanism that triggers automatically
                  when temperatures exceed safe levels, a manual pull station for emergency activation, and an
                  automatic gas shutoff that cuts fuel to cooking equipment when the system activates. Fire
                  suppression systems must be installed by a licensed fire protection contractor, inspected by
                  the fire marshal before occupancy, and serviced semi-annually after the restaurant opens.
                  The system design must match the specific cooking equipment layout, so changes to equipment
                  placement after installation require the fire suppression system to be reconfigured and
                  re-inspected.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Grease Trap & Waste Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Charlotte Water requires grease interceptors for all food service establishments to prevent
                  fats, oils, and grease from entering the municipal sewer system. Grease trap sizing is
                  calculated based on the number and type of fixtures in the kitchen that produce greasy
                  wastewater: three-compartment sinks, pre-rinse sprayers, floor drains under cooking equipment,
                  and automatic dishwashers. Smaller point-of-use grease traps can be installed under individual
                  sinks for limited applications, but most restaurants require a larger interceptor, either an
                  interior below-grade unit or an exterior buried tank. Charlotte Water conducts inspections
                  and requires documented maintenance records showing regular pumping. Planning the grease trap
                  location and sizing early in the design process is essential because it affects plumbing layout,
                  floor elevations, and may require excavation of the building slab.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Walk-In Coolers & Freezers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Walk-in coolers and freezers are essential for any restaurant handling fresh ingredients at
                  volume. These units require dedicated electrical circuits for refrigeration compressors, proper
                  drainage for defrost cycles, adequate structural support for the weight of the unit and its
                  contents, and clear access paths wide enough for deliveries and food prep traffic. Floor
                  construction underneath walk-in units must account for condensation and potential leaks. Remote
                  condensing units, which locate the heat-generating compressor outside the building rather than
                  on top of the walk-in box, reduce kitchen heat load but require refrigeration line routing to
                  the exterior. We coordinate walk-in placement with the overall kitchen layout to optimize
                  workflow between cold storage, prep stations, and the cooking line.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Mecklenburg County Health Department Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Mecklenburg County Health Department enforces the North Carolina Food Code and reviews
                  kitchen plans before construction permits are issued. Key requirements that affect construction
                  include: non-porous and easily cleanable floor surfaces such as sealed quarry tile or epoxy
                  coatings sloped to floor drains for proper sanitation; FRP panels or commercial-grade tile on
                  walls and ceilings in food preparation areas; handwash sinks with hot and cold running water,
                  soap, and paper towels located at each food preparation station and adjacent to restrooms;
                  three-compartment sinks sized for the largest pots and pans used in the kitchen; proper
                  separation between raw and ready-to-eat food preparation areas to prevent cross-contamination;
                  adequate ventilation to prevent grease and moisture accumulation; and sealed wall and floor
                  penetrations to prevent pest entry. Building your kitchen to satisfy these requirements from the
                  start, rather than fixing deficiencies during the pre-opening inspection, saves weeks of delay
                  and thousands of dollars in rework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Construction Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Restaurant Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Restaurant construction costs in Charlotte depend on the concept type, kitchen complexity,
                finish level, existing building conditions, and scope of front-of-house improvements. Below
                are typical cost ranges based on our recent restaurant projects in the Charlotte metro area.
                Every project is unique, and we provide detailed, line-item estimates after an initial site visit.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Restaurant Construction Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Kitchen complexity:</strong> The number of cooking stations, hood length, walk-in count, and specialty equipment like wood-fired ovens, tandoor ovens, or sushi cases significantly affect kitchen construction cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Existing infrastructure:</strong> Spaces with existing hood systems, grease traps, gas lines, and adequate electrical service from a previous restaurant tenant cost significantly less to build out than raw shell spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Bar program scope:</strong> A simple beer and wine bar costs far less than a full cocktail bar with custom millwork, extensive draft systems, under-bar refrigeration, and glass washing equipment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Finish level:</strong> Standard commercial finishes versus premium materials like reclaimed wood, natural stone, custom metalwork, and designer tile create significant cost differences in the dining room and bar areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Outdoor dining:</strong> Adding a covered patio, rooftop deck, or enclosed sidewalk dining area increases both construction cost and permitting complexity.</span>
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
                Restaurant Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte restaurant owners, chefs, and
                hospitality groups ask about restaurant construction costs, timelines, permits, kitchen
                systems, and health department requirements.
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
            <h2 className="text-3xl font-bold">Restaurant Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and related services for restaurant and hospitality construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Charlotte NC', href: '/services/commercial-upfits', type: 'Service', desc: 'Explore our full commercial upfit services including restaurant build-outs, office renovations, and retail spaces.' },
              { title: 'Tenant Improvements Charlotte NC', href: '/services/tenant-improvements', type: 'Service', desc: 'TI build-outs and leasehold improvements for restaurant tenants, including TI allowance maximization.' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction for restaurants, retail, and mixed-use developments across the Charlotte metro.' },
              { title: 'Restaurant Opening Guide: Build-Out, Permits & Timeline in Charlotte', href: '/guides/restaurant-opening-guide-charlotte', type: 'Guide', desc: 'Everything you need to know about opening a restaurant in Charlotte, from permits and timeline to build-out costs.' },
              { title: 'Brewery Construction Charlotte NC', href: '/services/brewery-construction', type: 'Service', desc: 'Craft brewery, taproom, and brewpub construction with specialized systems for glycol, CO2, grain handling, and ABC licensing.' },
              { title: 'Commercial Flooring Guide: Best Options by Business Type', href: '/guides/commercial-flooring-guide-business-type', type: 'Guide', desc: 'Choose the best commercial flooring for your restaurant, retail space, or office with our comprehensive guide.' },
              { title: 'Commercial Construction Costs Charlotte NC', href: '/guides/commercial-construction-costs-charlotte', type: 'Guide', desc: 'Detailed cost breakdowns for commercial construction in Charlotte — per-square-foot pricing by project type, finish level, and market conditions.' },
              { title: 'Charlotte Building Permit Guide', href: '/guides/charlotte-building-permit-guide', type: 'Guide', desc: 'Step-by-step walkthrough of the Mecklenburg County building permit process for commercial projects, including timelines and required documents.' },
              { title: 'Commercial Construction Timeline Guide Charlotte', href: '/guides/commercial-construction-timeline-guide-charlotte', type: 'Guide', desc: 'Understand realistic schedules for commercial buildouts in Charlotte — from permit submission through final inspection and occupancy.' },
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
                    {resource.type === 'Guide' ? 'Read Guide' : 'Learn More'} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Build Your Restaurant in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a full-service restaurant, fast-casual concept, craft brewery
            taproom, commercial kitchen, or food hall in Charlotte, We Build has the restaurant
            construction expertise, health department knowledge, and local experience to deliver
            your project on time and ready to open.
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
