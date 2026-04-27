import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accessibility,
  DoorOpen,
  Bath,
  Signpost,
  ArrowUpFromLine,
  ParkingSquare,
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
  HeartHandshake,
  Lightbulb,
  BadgeCheck,
  Scale,
  AlertTriangle,
  ClipboardCheck,
  BookOpen,
  Building2,
  Ruler,
  Eye,
  Users,
  Gavel,
  CircleDollarSign,
  ShieldAlert,
  FileWarning,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'ADA Compliance Contractor Charlotte NC | We Build',
  description:
    'ADA compliance contractor in Charlotte NC. Restroom renovation, accessible entrances, ramps, parking lot compliance, elevator install, building code updates.',
  keywords: [
    'ADA compliance contractor Charlotte NC',
    'ADA compliance contractor near me',
    'ADA renovation Charlotte NC',
    'building code compliance Charlotte NC',
    'ADA accessibility construction Charlotte',
    'commercial ADA upgrades Charlotte',
    'ADA bathroom contractor Charlotte',
    'ADA ramp construction Charlotte NC',
    'accessible entrance contractor Charlotte',
    'ADA parking lot compliance Charlotte',
    'commercial building code updates Charlotte NC',
    'ADA elevator installation Charlotte',
    'ADA signage contractor Charlotte NC',
    'ADA compliance near me',
    'ADA contractor Charlotte North Carolina',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/ada-compliance',
  },
  openGraph: {
    title: 'ADA Compliance & Code Updates Charlotte NC | We Build',
    description:
      'Protect your business from ADA lawsuits and fines. Expert ADA compliance construction, accessible renovations & building code updates across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/ada-compliance',
    type: 'website',
  },
};

const complianceServices = [
  {
    icon: Bath,
    title: 'ADA Restroom Renovation',
    slug: 'ada-restroom-renovation',
    desc: 'Full-scope ADA-compliant restroom renovations including grab bars, accessible stalls, proper clearances, compliant fixtures, and tactile signage for commercial buildings.',
    details:
      'Restrooms are one of the most commonly cited ADA violations in commercial properties across Charlotte and Mecklenburg County. An ADA-compliant restroom requires a turning radius of at least 60 inches for wheelchair access, grab bars mounted at specific heights and locations, accessible toilet seat heights between 17 and 19 inches, lavatory mounting heights with knee clearance underneath, lever-operated or sensor-activated faucets, accessible paper towel and soap dispensers within reach ranges, and tactile signage with Braille on the door or adjacent wall. Our team handles complete restroom demolition and reconstruction when needed, or targeted modifications to bring existing restrooms into compliance. We coordinate plumbing relocation, floor drain modifications, non-slip flooring installation, and partition reconfiguration to achieve full compliance without unnecessary demolition. Most commercial restroom ADA renovations in Charlotte complete in two to four weeks per restroom depending on the extent of modifications required.',
    cost: '$8,000-$35,000 per restroom',
  },
  {
    icon: DoorOpen,
    title: 'Accessible Entrance & Ramp Construction',
    slug: 'accessible-entrance-ramp-construction',
    desc: 'Design and construction of ADA-compliant entrances, concrete ramps, automatic door systems, and accessible pathways that meet slope, width, and landing requirements.',
    details:
      'The ADA requires that at least one entrance to every commercial building be accessible to people with disabilities, and that entrance must be on an accessible route from public transportation stops, accessible parking spaces, and passenger loading zones. An ADA-compliant ramp must have a maximum slope of 1:12, meaning one inch of rise for every 12 inches of run, with a minimum clear width of 36 inches between handrails. Ramps longer than six feet require handrails on both sides at heights between 34 and 38 inches. Level landings are required at the top and bottom of every ramp and at every 30 inches of rise. We design and construct concrete ramps, aluminum modular ramp systems, and wooden ramp structures depending on the application and aesthetics of your Charlotte commercial property. Our entrance modifications also include automatic door operators, threshold modifications to eliminate tripping hazards, vestibule reconfiguration for wheelchair clearance, and accessible hardware replacement. We ensure that the accessible entrance is clearly identified with compliant signage and that the route from parking to entrance is barrier-free.',
    cost: '$5,000-$50,000',
  },
  {
    icon: Accessibility,
    title: 'Interior Accessibility Upgrades',
    slug: 'interior-accessibility-upgrades',
    desc: 'Corridor widening, doorway modifications, accessible route creation, threshold elimination, flooring transitions, and interior barrier removal for full building accessibility.',
    details:
      'Interior accessibility goes far beyond entrances and restrooms. The ADA requires that accessible routes connect all accessible elements within a building, including reception areas, service counters, meeting rooms, break rooms, and common areas. Accessible routes must have a minimum clear width of 36 inches, and corridors must provide 60 inches of width where two wheelchairs need to pass each other. Doorways must provide a minimum 32 inches of clear width when the door is open 90 degrees, and door hardware must be operable with one hand without tight grasping, pinching, or twisting of the wrist. Our interior accessibility upgrades include widening doorways by reframing openings and installing wider door units, removing or ramping thresholds that exceed half-inch height, replacing round door knobs with lever handles, lowering service counters to provide a 36-inch-maximum height section for wheelchair users, modifying break room cabinetry and appliance placement for reach range compliance, and installing accessible drinking fountains at proper mounting heights. We also address floor surface transitions between carpet and hard surfaces to eliminate tripping hazards that affect wheelchair and mobility device users.',
    cost: '$3,000-$25,000 per area',
  },
  {
    icon: Signpost,
    title: 'ADA Signage & Wayfinding',
    slug: 'ada-signage-wayfinding',
    desc: 'Compliant signage systems with Braille, tactile characters, proper mounting heights, high-contrast colors, and directional wayfinding for commercial and multi-tenant buildings.',
    details:
      'ADA signage requirements are specific and frequently violated. Every permanent room and space in a commercial building must have a sign with raised characters and Braille, mounted on the wall adjacent to the latch side of the door at a height between 48 and 60 inches measured to the baseline of the lowest tactile character. Directional and informational signs must use high-contrast color combinations with a non-glare finish, and characters must meet minimum size requirements based on viewing distance. The International Symbol of Accessibility must be displayed at accessible entrances, accessible parking spaces, accessible restrooms, and along accessible routes where the path of travel is not obvious. Our signage services include comprehensive building audits to identify every sign that needs replacement or addition, specification of compliant sign materials and finishes, coordination with sign fabrication vendors who specialize in ADA-compliant products, and professional installation at code-required heights and locations. For multi-tenant buildings and large commercial complexes in the Charlotte area, we develop complete wayfinding systems that guide visitors from parking through lobbies, corridors, and elevator lobbies to their destination using consistent, accessible signage throughout.',
    cost: '$2,000-$15,000',
  },
  {
    icon: ArrowUpFromLine,
    title: 'Elevator & Lift Installation',
    slug: 'elevator-lift-installation',
    desc: 'Commercial elevator installation, wheelchair platform lifts, Limited Use/Limited Application (LULA) elevators, and vertical lift systems for multi-story ADA compliance.',
    details:
      'Multi-story commercial buildings are generally required to have an elevator serving every floor if the building has three or more stories or more than 3,000 square feet per floor. Even buildings with fewer stories may need an elevator or lift if they contain a professional office of a health care provider, a shopping center, the professional office of a certified public accountant or attorney, a public transportation station, or an airport terminal. When a full commercial elevator is not feasible due to structural limitations or budget constraints, Limited Use/Limited Application elevators and vertical wheelchair platform lifts provide compliant alternatives. LULA elevators require a smaller shaft footprint than standard commercial elevators and can often be installed in existing buildings without major structural modifications. We coordinate with elevator engineering consultants, structural engineers, and equipment manufacturers to design and install the most appropriate vertical access solution for your Charlotte commercial property. Our installation services include shaft construction or modification, machine room preparation, electrical service upgrades, pit excavation if required, and all finish work including cab interiors, landing doors, and control panels. Most elevator installations in existing Charlotte commercial buildings take 12 to 20 weeks from permit approval to final inspection.',
    cost: '$50,000-$200,000',
  },
  {
    icon: ParkingSquare,
    title: 'Parking Lot ADA Compliance',
    slug: 'parking-lot-ada-compliance',
    desc: 'Accessible parking space striping, van-accessible spaces, access aisles, curb ramp construction, accessible route paving, and signage for commercial parking lots.',
    details:
      'Parking lot ADA violations are among the most visible and most frequently cited in Department of Justice enforcement actions and private lawsuits. The number of accessible parking spaces required depends on the total number of spaces in the lot. For every six or fraction of six accessible spaces, at least one must be van-accessible with a minimum 96-inch-wide access aisle. Standard accessible spaces require a 60-inch-wide access aisle. All accessible spaces must be located on the shortest accessible route to the building entrance, and the route from accessible spaces to the entrance must be barrier-free with properly constructed curb ramps. Accessible parking signs must be mounted high enough to be visible when a vehicle is parked in the space, typically with the bottom of the sign at least 60 inches above the ground. We handle complete parking lot ADA renovations including re-striping for compliant space and aisle dimensions, constructing or replacing curb ramps with detectable warning surfaces, resurfacing damaged pavement along accessible routes, installing compliant signage with the International Symbol of Accessibility and tow-away warnings where required by North Carolina law, and ensuring proper slope and cross-slope on accessible spaces and access aisles. Our parking lot work is coordinated to minimize disruption to your Charlotte business operations, often performed during off-hours or in phased sections.',
    cost: '$3,000-$30,000',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'ADA Compliance Assessment & Building Audit',
    desc: 'We conduct a comprehensive, room-by-room audit of your commercial property measuring doorway widths, restroom clearances, ramp slopes, parking spaces, signage placement, counter heights, and accessible route continuity. Every element is compared against current ADA Standards for Accessible Design and documented with photographs and measurements. You receive a detailed written report identifying every deficiency, its location, the applicable ADA standard, and the recommended corrective action.',
  },
  {
    step: '02',
    title: 'Scope Development & Budget Planning',
    desc: 'Based on the audit findings and priority classification, we develop a scope of work that addresses deficiencies in the most cost-effective order. If budget constraints exist, we create a phased plan that addresses the highest-risk items first while establishing a timeline for completing all remaining work. You receive a detailed line-item estimate for each phase so you can plan capital expenditures and demonstrate good-faith compliance efforts.',
  },
  {
    step: '03',
    title: 'Design & Engineering',
    desc: 'For complex projects such as elevator installations, ramp construction, or restroom reconfigurations, we coordinate with the client&rsquo;s design team — structural engineers, mechanical engineers, and ADA consultants — to ensure every detail meets code requirements. Drawings are prepared for Mecklenburg County permit submission.',
  },
  {
    step: '04',
    title: 'Permitting & Code Review',
    desc: 'We prepare and submit all permit applications to Mecklenburg County Code Enforcement or the relevant jurisdiction in York County, Iredell County, or Cabarrus County. Our team responds to plan review comments quickly and coordinates with building officials to ensure the proposed modifications meet both ADA Standards for Accessible Design and North Carolina State Building Code accessibility provisions. We manage the full permitting timeline so you can plan your construction schedule with confidence.',
  },
  {
    step: '05',
    title: 'Pre-Construction Coordination',
    desc: 'Before construction begins, we finalize the schedule, order materials and equipment, coordinate subcontractor availability, and develop a phasing plan that keeps your business operational throughout the project. For occupied buildings, we establish dust containment, noise management, and alternative accessible route plans so that your customers and employees can continue to access the building safely during construction.',
  },
  {
    step: '06',
    title: 'Construction & Installation',
    desc: 'Construction proceeds according to the approved plans and schedule. Our team performs demolition, structural modifications, concrete work, plumbing relocation, electrical upgrades, finish installation, and equipment mounting. For projects involving multiple areas of the building, we phase the work so that accessible routes and restrooms remain available at all times. Weekly progress reports keep you informed of schedule, budget, and any field conditions that require attention.',
  },
  {
    step: '07',
    title: 'Quality Verification & Compliance Testing',
    desc: 'Before calling for official inspections, our project manager conducts a detailed compliance verification of every modification using the same measurement standards from the initial audit. We verify ramp slopes with a digital level, door clearances with precision measurements, grab bar locations against ADA mounting specifications, and signage placement against required heights. This internal quality check ensures we pass official inspections on the first attempt.',
  },
  {
    step: '08',
    title: 'Official Inspections & Approvals',
    desc: 'We schedule and coordinate all required inspections with Mecklenburg County or the applicable jurisdiction. This includes building inspections, plumbing inspections, electrical inspections, and any specialized inspections required for elevator or lift installations. Our project manager is present at every inspection to answer questions and address any items immediately.',
  },
  {
    step: '09',
    title: 'Documentation & Compliance Certification',
    desc: 'Upon completion, we provide comprehensive close-out documentation including as-built drawings showing all modifications, before-and-after photographs, equipment warranties, maintenance manuals for automatic doors and elevators, and a detailed compliance summary that you can retain as evidence of your good-faith efforts to comply with the ADA. This documentation is valuable if you ever face a complaint or inquiry from the Department of Justice or a private plaintiff.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company with deep roots in the Charlotte community. Our military background instills discipline, accountability, and a commitment to delivering on every promise we make. When we tell you a modification will meet ADA standards, we stand behind that commitment with our reputation and our warranty.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to every project, including extensive work on ADA compliance renovations for commercial properties, medical facilities, retail spaces, restaurants, and multi-tenant office buildings throughout the Charlotte metro area. We understand the ADA standards because we have applied them on hundreds of projects.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve businesses throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, and the Lake Norman corridor. Our licensing ensures full compliance with state regulations and building codes on both sides of the state line.',
  },
  {
    icon: Scale,
    title: 'ADA Code Expertise',
    desc: 'Our team maintains current knowledge of the ADA Standards for Accessible Design, the North Carolina State Building Code accessibility provisions, and Department of Justice enforcement guidance. We attend annual continuing education on accessibility standards and stay informed of regulatory changes, court decisions, and enforcement trends that affect Charlotte commercial property owners.',
  },
  {
    icon: Zap,
    title: 'Minimal Business Disruption',
    desc: 'ADA renovations in occupied commercial buildings require careful phasing to maintain accessibility for customers and employees throughout the project. We develop detailed phasing plans that ensure at least one accessible route and one accessible restroom remain available at all times during construction, with the most disruptive work scheduled during off-hours and weekends.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our ADA compliance projects. Energy-efficient automatic door operators, LED lighting in renovated restrooms, low-flow fixtures that meet both ADA reach requirements and water conservation goals, and recycled content materials are standard in our accessibility renovations.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Knowledge',
    desc: 'We know the Charlotte commercial real estate market intimately. We understand Mecklenburg County permitting timelines, local code requirements, inspector expectations, and the specific building types common in the Charlotte area. This local knowledge helps us provide accurate estimates, realistic schedules, and construction solutions that work within the constraints of Charlotte commercial properties.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build client receives weekly progress reports, a dedicated project manager as their single point of contact, and immediate notification of any issues that could affect timeline or budget. ADA compliance projects often uncover hidden conditions behind walls or under floors that require scope adjustments. We communicate these findings immediately with clear cost and schedule implications so you can make informed decisions.',
  },
];

const commonViolations = [
  {
    icon: ParkingSquare,
    title: 'Non-Compliant Parking',
    desc: 'Insufficient number of accessible spaces, missing van-accessible spaces, access aisles that are too narrow, faded or missing striping, signs mounted too low, and slopes exceeding 2% on accessible spaces or aisles. Parking violations are the most common trigger for ADA lawsuits in Charlotte because they are visible from the street.',
  },
  {
    icon: DoorOpen,
    title: 'Inaccessible Entrances',
    desc: 'No accessible entrance, entrance ramps that are too steep, missing handrails, door hardware requiring tight grasping or twisting, doors that are too heavy to open with one hand, thresholds exceeding half-inch height, and vestibules without adequate wheelchair maneuvering clearance.',
  },
  {
    icon: Bath,
    title: 'Non-Compliant Restrooms',
    desc: 'Accessible stalls that are too small for wheelchair turning, grab bars missing or mounted at incorrect heights, toilet seats at non-compliant heights, lavatories without knee clearance, inaccessible paper towel and soap dispensers, and missing tactile Braille signage on restroom doors.',
  },
  {
    icon: Ruler,
    title: 'Service Counter Heights',
    desc: 'Reception desks, retail checkout counters, and service counters that exceed 36 inches in height without a lowered accessible section. This affects virtually every business that serves the public and is a frequent citation in retail, restaurant, and office environments.',
  },
  {
    icon: Signpost,
    title: 'Missing or Non-Compliant Signage',
    desc: 'Rooms without tactile Braille signage, signs mounted at incorrect heights or on the wrong side of doors, missing International Symbol of Accessibility at accessible features, and directional signs without adequate contrast or character sizing.',
  },
  {
    icon: AlertTriangle,
    title: 'Barrier-Laden Routes',
    desc: 'Steps or level changes without ramps along accessible routes, corridors narrower than 36 inches, protruding objects that reduce clear passage, floor surfaces that are uneven or have gaps wider than half an inch, and missing detectable warning surfaces at curb ramps.',
  },
];

const costGuide = [
  {
    type: 'ADA Restroom Renovation',
    range: '$8,000-$35,000 per restroom',
    desc: 'Complete restroom reconfiguration including partition removal, plumbing relocation, grab bar installation, accessible fixture mounting, non-slip flooring, and tactile signage. Cost varies based on the number of fixtures and extent of plumbing work required.',
  },
  {
    type: 'Accessible Entrance & Ramp',
    range: '$5,000-$50,000',
    desc: 'Concrete ramp construction, automatic door installation, threshold modifications, and accessible pathway creation. Simple ramp additions are on the lower end while full entrance reconstructions with automatic operators and vestibule modifications are on the higher end.',
  },
  {
    type: 'Interior Accessibility Upgrades',
    range: '$3,000-$25,000 per area',
    desc: 'Doorway widening, hardware replacement, counter lowering, threshold removal, and accessible route creation within the building interior. Scope and cost depend on the number of areas being modified.',
  },
  {
    type: 'Parking Lot ADA Compliance',
    range: '$3,000-$30,000',
    desc: 'Accessible space re-striping, curb ramp construction with detectable warnings, access aisle creation, signage installation, and route paving from accessible parking to building entrance.',
  },
  {
    type: 'ADA Signage Package',
    range: '$2,000-$15,000',
    desc: 'Building-wide ADA signage audit and replacement including tactile Braille room signs, directional wayfinding, International Symbol of Accessibility signs, and proper mounting at code-required heights.',
  },
  {
    type: 'Elevator Installation (LULA)',
    range: '$50,000-$120,000',
    desc: 'Limited Use/Limited Application elevator installation including shaft construction, cab equipment, controls, and finish work. Ideal for two-story buildings where a full commercial elevator is not feasible.',
  },
  {
    type: 'Full Commercial Elevator',
    range: '$100,000-$200,000+',
    desc: 'Standard commercial elevator installation for multi-story buildings including shaft construction, machine room, cab equipment, landing doors, and all electrical and structural modifications.',
  },
  {
    type: 'Comprehensive ADA Renovation',
    range: '$25,000-$250,000+',
    desc: 'Full-building ADA compliance renovation addressing restrooms, entrances, interior routes, parking, signage, and vertical access. Cost depends on building size, age, number of deficiencies, and construction complexity.',
  },
];

const faqs = [
  {
    question: 'What triggers ADA compliance requirements for an existing building in Charlotte?',
    answer:
      'Several events can trigger ADA compliance requirements for existing commercial buildings in Charlotte. The most common trigger is undertaking a renovation or alteration that affects the usability of a primary function area. Under the ADA, when you alter a primary function area such as a lobby, dining area, sales floor, or office space, you must also make the path of travel to that area accessible, including restrooms, telephones, and drinking fountains serving the altered area. This obligation applies up to 20% of the total alteration cost, often called the disproportionate cost threshold. Additionally, all existing commercial properties open to the public have an ongoing obligation to remove architectural barriers when removal is readily achievable, meaning easily accomplishable without much difficulty or expense. A change in tenant or business use, even without physical alterations, can also trigger ADA review by the new occupant.',
  },
  {
    question: 'Is my Charlotte building grandfathered in under older building codes for ADA?',
    answer:
      'There is no ADA grandfather clause. This is one of the most common and most dangerous misconceptions among commercial property owners in Charlotte. The ADA is a federal civil rights law, not a building code, and it applies to all commercial properties open to the public regardless of when they were built. While the North Carolina State Building Code applies the specific code edition that was in effect when the building was constructed or last permitted for renovation, the ADA has applied to all places of public accommodation since January 26, 1993. If your building was built before that date without accessible features, you still have an ongoing obligation to remove barriers when it is readily achievable to do so. The only protection older buildings have is that the readily achievable standard considers cost and difficulty, so the obligations may be somewhat less extensive for small businesses with limited resources. However, doing nothing because you believe your building is grandfathered is not a valid legal defense.',
  },
  {
    question: 'How many accessible parking spaces does my Charlotte business need?',
    answer:
      'The number of accessible parking spaces required depends on the total number of spaces in your parking lot. For lots with 1 to 25 total spaces, you need 1 accessible space. For 26 to 50 spaces, you need 2. For 51 to 75 spaces, you need 3. For 76 to 100 spaces, you need 4. For 101 to 150 spaces, you need 5. For 151 to 200 spaces, you need 6. For 201 to 300 spaces, you need 7. For 301 to 400 spaces, you need 8. Beyond 400 spaces, you need 2% of total spaces. For every 6 or fraction of 6 accessible spaces, at least 1 must be van-accessible with a minimum 96-inch-wide access aisle. Accessible spaces must be located on the shortest accessible route to the building entrance, on level ground with slopes not exceeding 2% in any direction. Van-accessible spaces require 98 inches of vertical clearance. Charlotte property owners often overlook that the access aisle must connect to an accessible route to the entrance, which means proper curb ramps and pathway construction are part of the parking compliance requirement.',
  },
  {
    question: 'What are the ADA restroom requirements for commercial buildings?',
    answer:
      'ADA-compliant restrooms in commercial buildings must meet detailed dimensional and equipment standards. The accessible stall must be at least 60 inches wide and 59 inches deep for wall-mounted toilets, or 60 inches wide and 56 inches deep for floor-mounted toilets. The toilet seat must be 17 to 19 inches above the finished floor. Side grab bars must be at least 42 inches long, mounted 12 inches from the rear wall, at a height between 33 and 36 inches. Rear grab bars must be at least 36 inches long, centered on the toilet. Lavatories must have a rim no higher than 34 inches with knee clearance of at least 27 inches. Faucet controls must be operable with one hand, without tight grasping or twisting. Paper towel dispensers, soap dispensers, and hand dryers must be within accessible reach ranges, generally between 15 and 48 inches from the floor for a forward reach. Restroom doors must have a minimum 32-inch clear width, and the restroom layout must accommodate a 60-inch turning radius for wheelchair access.',
  },
  {
    question: 'Can I be sued for ADA non-compliance at my Charlotte commercial property?',
    answer:
      'Yes, and ADA lawsuits against Charlotte commercial properties have increased significantly in recent years. Under Title III of the ADA, any individual who encounters an accessibility barrier at a place of public accommodation can file a lawsuit in federal court seeking injunctive relief, which means the court can order you to make modifications, plus attorney fees and costs. In North Carolina, state law also provides additional avenues for disability discrimination claims. Serial ADA litigants and their attorneys file hundreds of lawsuits annually in the Western District of North Carolina, often targeting businesses with visible violations such as non-compliant parking, inaccessible entrances, or missing signage. The average cost to settle an ADA lawsuit ranges from $10,000 to $75,000 including attorney fees, which is often far more than the cost of correcting the violations proactively. Department of Justice enforcement actions can result in civil penalties of up to $75,000 for first violations and $150,000 for subsequent violations. The most effective legal defense is demonstrating a comprehensive, good-faith compliance program with documented barrier removal efforts.',
  },
  {
    question: 'What is the 20% disproportionate cost rule for ADA path of travel upgrades?',
    answer:
      'When you renovate a primary function area of your commercial building, the ADA requires you to also upgrade the path of travel to that area, including entrances, corridors, restrooms, telephones, and drinking fountains that serve the renovated space. However, the cost of these path-of-travel upgrades is capped at 20% of the total cost of the primary alteration, which is known as the disproportionate cost limitation. For example, if you spend $100,000 renovating your office space, you must spend up to $20,000 on accessibility improvements along the path of travel. If the full cost of making the path of travel accessible exceeds 20%, you must still spend up to that cap, prioritizing the improvements in this order: accessible entrance, accessible route to the altered area, accessible restrooms, accessible telephones, and accessible drinking fountains. The 20% obligation is not optional; it is a requirement that applies every time you perform a qualifying alteration. Multiple small renovations over time each trigger their own 20% obligation, so the accessibility upgrades accumulate with each project.',
  },
  {
    question: 'Do Charlotte restaurants need to be ADA compliant?',
    answer:
      'Absolutely. Restaurants are places of public accommodation under Title III of the ADA and must comply with all applicable accessibility standards. This includes accessible parking, an accessible entrance, an accessible route to the dining area, accessible seating with tables that accommodate wheelchairs, accessible restrooms, accessible service counters or ordering stations, and accessible self-service areas including salad bars and beverage stations. At least 5% of dining tables, but never fewer than one, must be accessible with a minimum 28-inch knee clearance, a maximum 34-inch top surface height, and 36-inch clear width for wheelchair approach. Outdoor dining areas must also be accessible if the restaurant offers outdoor seating. Restaurant owners in Charlotte sometimes assume that grandfathering protects older buildings, but as noted above, there is no ADA grandfather clause. Whether you are opening a new restaurant in a commercial upfit or operating in a building constructed decades ago, ADA compliance is required.',
  },
  {
    question: 'What building code requirements apply when I renovate my Charlotte commercial property?',
    answer:
      'When you renovate a commercial property in Charlotte, the North Carolina State Building Code and the Mecklenburg County Code Enforcement office determine which current code provisions apply to your project. The general rule is that new work must comply with the current code edition while existing, unaltered portions of the building may remain under the code edition in effect when they were last permitted. However, several conditions can trigger broader code compliance requirements. A change of occupancy type, for example converting a retail space to a restaurant, triggers full compliance with the new occupancy requirements including fire protection, exiting, plumbing fixture counts, and accessibility. Renovations exceeding 50% of the building value in some jurisdictions trigger full code compliance for the entire building. Even minor renovations require that the work itself meets current code standards for energy efficiency, electrical safety, fire protection, and accessibility. Our team navigates Mecklenburg County code requirements daily and ensures your renovation meets all applicable standards without triggering unnecessary additional scope.',
  },
  {
    question: 'How much does an ADA compliance audit cost in Charlotte?',
    answer:
      'The cost of an ADA compliance audit in Charlotte depends on the size and complexity of the property being evaluated. We Build offers comprehensive ADA assessments as part of our compliance renovation services. For small commercial spaces under 5,000 square feet with a single entrance and one or two restrooms, an audit typically takes half a day and ranges from $1,500 to $3,000. Mid-size commercial properties between 5,000 and 20,000 square feet with multiple entrances, restrooms, and floors range from $3,000 to $6,000. Large commercial complexes, multi-tenant buildings, and properties with parking structures can range from $6,000 to $15,000 or more. Our audit reports include detailed measurements, photographs, applicable ADA standard references, priority classifications, preliminary cost estimates for corrections, and recommended phasing. This documentation serves as both a construction planning tool and a legal record of your good-faith compliance efforts. Many Charlotte commercial property owners find that the audit cost is a small fraction of the potential litigation exposure they face without documented compliance efforts.',
  },
  {
    question: 'What areas in Charlotte does We Build serve for ADA compliance work?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for ADA compliance construction and building code update projects. Our primary service area includes Charlotte, South Charlotte, University City, NoDa, South End, Uptown, and surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman communities of Cornelius, Davidson, Huntersville, and Mooresville. Our NC and SC general contractor licenses allow us to work across both states, which is especially convenient for property owners and management companies with buildings on both sides of the state line. Whether you own a single commercial property in South Charlotte or manage a portfolio of buildings across the Lake Norman and Fort Mill areas, we provide consistent ADA compliance services throughout the region.',
  },
  {
    question: 'Can I phase ADA improvements over time or do I have to do everything at once?',
    answer:
      'Yes, phasing ADA improvements is both allowed and often recommended, particularly for existing buildings with multiple deficiencies and limited budgets. The ADA barrier removal obligation for existing buildings uses a readily achievable standard, which considers the cost of removal relative to the size and resources of the business. The Department of Justice recommends prioritizing barrier removal in the following order: Priority 1 is providing access to the building from public sidewalks, parking, and public transportation through accessible entrances. Priority 2 is providing access to goods, services, and programs inside the building. Priority 3 is providing access to restrooms. Priority 4 is removing barriers to other amenities. A phased compliance plan demonstrates good faith and reduces litigation risk even before all work is complete. We help Charlotte property owners create documented, multi-year compliance plans with clear timelines and budgets for each phase. This documentation shows courts and the Department of Justice that you are taking the ADA seriously and making steady progress toward full compliance, which is a meaningful defense against claims of willful non-compliance.',
  },
  {
    question: 'What is the difference between ADA compliance and North Carolina Building Code accessibility?',
    answer:
      'The ADA and the North Carolina State Building Code are separate requirements that often overlap but are not identical. The ADA is a federal civil rights law enforced by the Department of Justice and through private lawsuits. It applies to all places of public accommodation and commercial facilities regardless of whether construction or renovation is occurring. The North Carolina State Building Code is a construction regulation enforced by Mecklenburg County Code Enforcement and applies when construction permits are issued. The building code adopts accessibility standards based on ICC A117.1, which are similar to but not identical to the ADA Standards for Accessible Design. In some cases the building code is more stringent than the ADA, and in others the ADA requires more than the building code. For example, the ADA ongoing barrier removal obligation has no building code equivalent. When you renovate a commercial property in Charlotte, you must comply with both the ADA and the building code, and where they differ, you must meet the more stringent requirement. Our team ensures that every project we build satisfies both sets of requirements so you are fully protected.',
  },
  {
    question: 'How much does it cost to build an ADA-compliant ramp for a commercial building in Charlotte?',
    answer:
      'ADA ramp construction in Charlotte typically costs between $1,500 and $8,000 depending on the rise height, length, materials, and site conditions. A short concrete ramp with a single run and one landing averages $2,000 to $4,000. Longer ramps with switchback configurations, intermediate landings, and handrails on both sides can reach $6,000 to $12,000. ADA ramps must maintain a maximum slope of 1:12, meaning one inch of rise for every twelve inches of run, with 60-inch landings at the top, bottom, and every 30 inches of rise. Handrails must extend 12 inches beyond the top and bottom of the ramp. We Build handles the full scope from engineering through Mecklenburg County permitting and construction.',
  },
  {
    question: 'How does ADA compliance compare to the newer 2010 ADA Standards versus the original 1991 Standards?',
    answer:
      'The 2010 ADA Standards for Accessible Design replaced the original 1991 Standards and introduced significant changes that affect commercial properties in Charlotte. Key differences include updated reach range requirements, revised accessible parking space dimensions, new standards for recreational facilities and play areas, and more detailed requirements for sales and service counters. The 2010 Standards also added requirements for areas that were not previously covered, such as fishing piers, golf courses, and swimming pools. Any new construction or alteration started after March 15, 2012, must comply with the 2010 Standards. For existing buildings, the 2010 Standards serve as the benchmark when evaluating barrier removal obligations. Our team applies the current 2010 Standards to all ADA compliance projects in Charlotte and Mecklenburg County.',
  },
  {
    question: 'Are there tax credits or deductions available for ADA compliance work in Mecklenburg County?',
    answer:
      'Yes, two federal tax incentives help offset the cost of ADA compliance construction. The Disabled Access Credit, IRS Code Section 44, provides eligible small businesses with a tax credit of up to $5,000 per year for expenditures incurred to comply with the ADA. To qualify, the business must have 30 or fewer full-time employees or no more than $1 million in gross receipts in the prior year. The Architectural Barrier Removal Deduction, IRS Code Section 190, allows businesses of any size to deduct up to $15,000 per year for expenses related to removing architectural and transportation barriers for people with disabilities. These incentives can be used together and renewed annually, significantly reducing the net cost of phased compliance programs. We Build helps Charlotte property owners document their ADA construction expenses to support these tax filings.',
  },
];

export default function ADACompliancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'ADA Compliance & Code Updates Charlotte NC',
            'Expert ADA compliance contractor in Charlotte, NC. ADA restroom renovation, accessible entrance construction, ramp building, parking lot compliance, elevator installation, signage, and building code updates. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/ada-compliance'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'ADA Compliance' },
          ]),
        ]}
      />

      <PageHero
        title="ADA Compliance & Code Updates Charlotte NC"
        subtitle="Protect your business from lawsuits and fines with expert ADA compliance construction from Charlotte's veteran-owned contractor"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'ADA Compliance & Code Updates' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                ADA Compliance Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Americans with Disabilities Act requires every commercial property open to the
                public to be accessible to people with disabilities. In Charlotte and across
                Mecklenburg County, thousands of commercial buildings contain ADA violations that
                expose their owners to federal lawsuits, Department of Justice enforcement actions,
                and civil penalties reaching $75,000 for first violations and $150,000 for repeat
                offenses. Whether your property is a retail store, restaurant, medical office,
                multi-tenant office building, or warehouse with public-facing areas, ADA compliance
                is not optional and there is no grandfather clause that exempts older buildings from
                these requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Department of Justice enforcement of ADA Title III has intensified significantly
                in recent years, with the Western District of North Carolina seeing a sharp increase
                in both government-initiated enforcement actions and private lawsuits filed by serial
                litigants targeting Charlotte-area businesses. Common targets include businesses with
                visible parking lot violations, inaccessible entrances, non-compliant restrooms, and
                missing tactile signage. The average ADA lawsuit settlement in North Carolina ranges
                from $10,000 to $75,000 in attorney fees and damages alone, often far exceeding the
                cost of correcting the underlying violations proactively. Many Charlotte business
                owners do not realize they are at risk until they receive a demand letter or a
                federal court summons.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link>{' '}
                with over 60 years of combined construction experience specializing in ADA compliance
                renovations and building code updates for commercial properties throughout the Charlotte
                metro area. Our team conducts comprehensive ADA audits, develops prioritized compliance
                plans, and performs the construction work needed to bring your property into full
                compliance with both the ADA Standards for Accessible Design and the North Carolina
                State Building Code. Licensed in both North Carolina and South Carolina, we serve
                Charlotte and surrounding communities including{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>.
                From single-restroom modifications to full-building accessibility renovations, we
                deliver ADA solutions that protect your business and serve your community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request a Free ADA Assessment
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
                { icon: ShieldAlert, title: 'Lawsuit Prevention', desc: 'Proactive ADA compliance is the most effective defense against costly lawsuits. Serial ADA litigants target Charlotte businesses with visible violations every day.' },
                { icon: DollarSign, title: 'Avoid Costly Fines', desc: 'DOJ penalties reach $75,000 for first violations and $150,000 for subsequent violations. Proactive compliance costs a fraction of enforcement penalties.' },
                { icon: Clock, title: 'Fast-Track Renovations', desc: 'Many ADA modifications complete in days or weeks, not months. We prioritize the highest-risk items first to reduce your exposure as quickly as possible.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to precision, standards compliance, and accountability. ADA construction demands exactness and we deliver it.' },
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

      {/* ADA Compliance Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              ADA Compliance Services for Charlotte Commercial Properties
            </h2>
            <p className="text-muted-foreground">
              From restroom renovations and ramp construction to elevator installations and
              parking lot compliance, we deliver the full range of ADA accessibility construction
              services that Charlotte commercial properties need to meet federal and state requirements.
            </p>
          </div>
          <div className="space-y-8">
            {complianceServices.map((service) => (
              <Card key={service.title} id={service.slug}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <span className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                          {service.cost}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{service.desc}</p>
                      <p className="text-muted-foreground">{service.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common ADA Violations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Warning Signs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Common ADA Violations in Charlotte Commercial Buildings
            </h2>
            <p className="text-muted-foreground">
              These are the most frequently cited ADA deficiencies we find during building audits
              in Charlotte and Mecklenburg County. If any of these conditions exist at your property,
              you are at risk for a lawsuit or DOJ enforcement action.{' '}
              <Link href="/contact" className="text-primary hover:underline">Contact us for a free assessment</Link>.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonViolations.map((violation) => (
              <Card key={violation.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <violation.icon className="h-6 w-6 text-destructive" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{violation.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{violation.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our ADA Compliance Process: 10 Steps from Audit to Certification
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent process designed to identify every ADA deficiency, prioritize
              corrections by risk level, and deliver compliant construction that protects your business
              from lawsuits and fines. Every step includes documentation that serves as evidence of
              your good-faith compliance efforts.
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for ADA Compliance Construction
            </h2>
            <p className="text-muted-foreground">
              ADA compliance construction demands precision, code expertise, and attention to detail
              that general renovation contractors often lack. The wrong contractor can leave you with
              modifications that look compliant but fail to meet the specific dimensional and
              functional requirements of the ADA Standards for Accessible Design. Here is what sets
              We Build apart.
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

      {/* Code Compliance Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Code Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Charlotte & Mecklenburg County Building Code Compliance
              </h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">When Renovations Trigger ADA & Code Upgrades</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many Charlotte commercial property owners are surprised to learn that routine
                  renovations can trigger significant ADA and building code upgrade requirements.
                  Understanding these triggers before you begin a{' '}
                  <Link href="/services/commercial-renovation" className="text-primary hover:underline">commercial renovation</Link>{' '}
                  or{' '}
                  <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit</Link>{' '}
                  is critical for accurate budgeting and project planning. The consequences of
                  discovering these requirements mid-project can include costly change orders,
                  schedule delays, and permit complications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under the ADA, any alteration to a primary function area triggers a path of travel
                  obligation up to 20% of the alteration cost. Under the North Carolina State Building
                  Code, a change of occupancy type triggers full compliance with the requirements for the
                  new occupancy classification. This can include fire sprinkler installation, additional
                  exits, upgraded fire alarm systems, increased plumbing fixture counts, and full
                  accessibility compliance. Even within the same occupancy type, substantial renovations
                  can trigger energy code compliance, electrical code updates, and structural seismic
                  requirements depending on the scope and value of the work.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Mecklenburg County Code Enforcement Process</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mecklenburg County Code Enforcement reviews all commercial construction permits for
                  compliance with the North Carolina State Building Code, which includes accessibility
                  provisions based on ICC A117.1. Plan reviewers evaluate proposed renovations against
                  the current code edition and identify any additional requirements triggered by the
                  scope of work. This review process typically takes 2 to 4 weeks for standard commercial
                  projects and longer for complex submissions. Our team prepares permit applications
                  that anticipate plan review questions and include the accessibility documentation
                  that reviewers need to approve the project efficiently.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Path of Travel Threshold (20%)',
                    desc: 'When you alter a primary function area, accessibility upgrades along the path of travel are required up to 20% of the alteration cost. This includes entrances, corridors, restrooms, and drinking fountains serving the altered area.',
                  },
                  {
                    title: 'Change of Occupancy',
                    desc: 'Converting a space from one use to another, such as retail to restaurant or office to medical, triggers full compliance with the requirements of the new occupancy type including fire protection, accessibility, and plumbing.',
                  },
                  {
                    title: 'Substantial Renovation Threshold',
                    desc: 'Renovations exceeding certain cost thresholds relative to building value may trigger broader code compliance requirements. Mecklenburg County evaluates this on a project-by-project basis during plan review.',
                  },
                  {
                    title: 'Barrier Removal Obligation',
                    desc: 'Independent of any renovation, all existing commercial properties have an ongoing ADA obligation to remove accessibility barriers when removal is readily achievable. This is not triggered by construction but exists continuously.',
                  },
                ].map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-5">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We Build navigates these code requirements daily for{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>{' '}
                projects throughout Charlotte and the surrounding area. If you are planning a renovation
                and want to understand what ADA and code upgrades may be triggered before you commit to a
                budget, <Link href="/contact" className="text-primary hover:underline">contact us for a pre-renovation code analysis</Link>.
                We evaluate your proposed scope against current code requirements and provide a realistic
                budget that includes all triggered upgrades, so there are no surprises after permits
                are submitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                ADA Compliance Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ADA compliance costs in Charlotte vary significantly depending on the type of
                modification, existing building conditions, and scope of deficiencies. Below are
                typical cost ranges based on our recent ADA compliance projects in the Charlotte
                metro area. Every project is different, and we provide detailed proposals after
                an initial assessment.
              </p>
            </div>
            <div className="space-y-4">
              {costGuide.map((item) => (
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
              <h3 className="font-semibold mb-3">Factors That Affect Your ADA Compliance Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Building age:</strong> Older buildings often require more extensive modifications because they were constructed before any accessibility standards existed. Plumbing, structural, and electrical systems may need significant upgrades to support ADA-compliant features.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Number of deficiencies:</strong> A building with one non-compliant restroom is a different scope than a building with parking, entrance, interior route, restroom, signage, and counter violations throughout.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Structural constraints:</strong> Some modifications, such as widening doorways in load-bearing walls or installing elevators in buildings without elevator shafts, require structural engineering that adds to the project cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Occupied building phasing:</strong> Working in occupied commercial buildings requires phasing, temporary accessible accommodations, and off-hours scheduling that can increase labor costs compared to work in vacant spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Permitting requirements:</strong> Complex modifications requiring structural, mechanical, or electrical permits add time and engineering costs to the project budget.</span>
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
                ADA Compliance Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte commercial property owners ask
                about ADA compliance, building code requirements, trigger thresholds, parking,
                restrooms, lawsuits, and grandfather clauses.
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

      {/* Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">ADA Compliance Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and related services for more information on ADA compliance
              and commercial renovations in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Charlotte NC', href: '/services/commercial-upfits', desc: 'Full-service commercial upfit construction including ADA-compliant layouts for office, retail, restaurant, and medical spaces.' },
              { title: 'Commercial Renovation Charlotte NC', href: '/services/commercial-renovation', desc: 'Complete commercial renovation services that incorporate ADA compliance and building code updates into every project scope.' },
              { title: 'Tenant Improvements Charlotte NC', href: '/services/tenant-improvements', desc: 'Tenant buildouts and improvements that meet current ADA standards and building code requirements from the start.' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', desc: 'Ground-up commercial construction built to current ADA standards and North Carolina Building Code from day one.' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
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
            Protect Your Business with ADA Compliance
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Do not wait for a lawsuit or a DOJ demand letter to address ADA deficiencies at your
            Charlotte commercial property. Proactive compliance costs a fraction of litigation
            and demonstrates good faith that protects your business. We Build has the code expertise,
            construction experience, and local knowledge to bring your property into full compliance
            efficiently and affordably.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free ADA assessment. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Free ADA Assessment</Link>
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
