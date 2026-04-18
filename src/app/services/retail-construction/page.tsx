import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Store,
  ShoppingBag,
  Building2,
  Warehouse,
  Coffee,
  Sparkles,
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
  Eye,
  Lightbulb,
  Calculator,
  BadgeCheck,
  HeartHandshake,
  Hammer,
  Footprints,
  PaintBucket,
  DoorOpen,
  Accessibility,
  LayoutGrid,
  MonitorSmartphone,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Retail Construction & Buildouts Charlotte NC | Store Build-Out Contractor',
  description:
    'Expert retail construction and buildout contractor in Charlotte, NC. Commercial construction companies for boutique shops, big box stores, shopping center renovations, showrooms, quick-service restaurants & pop-up retail. Veteran-owned, licensed in NC & SC. We build fast. Free consultations. (980) 471-1745.',
  keywords: [
    'retail construction Charlotte NC',
    'retail construction near me',
    'retail construction contractor Charlotte NC',
    'retail buildout contractor Charlotte',
    'store buildout Charlotte NC',
    'store buildout near me',
    'retail renovation Charlotte',
    'shopping center renovation Charlotte',
    'retail space construction',
    'retail store construction Charlotte NC',
    'boutique buildout Charlotte',
    'shopping center contractor Charlotte NC',
    'retail tenant buildout Charlotte',
    'storefront construction Charlotte NC',
    'retail interior construction Charlotte',
    'retail construction Charlotte North Carolina',
    'retail construction fort mill sc',
    'retail construction lake norman nc',
    'commercial retail contractor near me',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/retail-construction',
  },
  openGraph: {
    title: 'Retail Construction & Buildouts Charlotte NC | We Build',
    description:
      'Build or renovate your retail space with Charlotte\'s veteran-owned construction team. Boutique shops, anchor tenants, shopping centers, showrooms, and pop-up retail across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/retail-construction',
    type: 'website',
  },
};

const retailTypes = [
  {
    icon: ShoppingBag,
    title: 'Boutique & Specialty Retail',
    slug: 'boutique-specialty-retail',
    desc: 'Custom build-outs for fashion boutiques, jewelry stores, specialty food shops, gift stores, and niche retail concepts that demand unique interior environments.',
    details:
      'Boutique and specialty retail spaces are where brand identity matters most. Every surface, fixture, and lighting choice communicates your brand to customers the moment they walk through the door. We Build constructs boutique retail environments that balance aesthetics with functionality, creating spaces that tell your brand story while maximizing every square foot of selling floor. Our boutique build-outs include custom millwork for display cases, specialty lighting design that highlights merchandise without creating glare, fitting room construction with proper ventilation and lighting, stockroom optimization to keep inventory accessible but hidden, and storefront facade work that draws foot traffic from the street or mall corridor. Charlotte neighborhoods like South End, NoDa, and Plaza Midwood are experiencing a surge in boutique retail, and we understand the architectural character and landlord requirements specific to each district. Most boutique build-outs in Charlotte complete in 6 to 10 weeks depending on custom fixture complexity.',
    cost: '$85-$200/sq ft',
  },
  {
    icon: Building2,
    title: 'Big Box & Anchor Tenant',
    slug: 'big-box-anchor-tenant',
    desc: 'Large-format retail construction for anchor tenants, department stores, home improvement centers, and national brand flagship locations with complex logistics.',
    details:
      'Big box and anchor tenant construction projects are among the most demanding retail build-outs due to their scale, logistics complexity, and strict corporate brand standards. These projects typically involve 10,000 to 100,000 square feet or more and require meticulous coordination of structural modifications, heavy-duty HVAC systems, high-bay lighting, industrial-grade flooring, loading dock infrastructure, and extensive fire protection systems. We Build has the capacity and experience to manage large-format retail projects across the Charlotte metro area. Our team coordinates directly with national brand construction managers and third-party project management firms to ensure every corporate specification is met, from proprietary fixture mounting details to approved paint colors and flooring materials. We manage phased openings where portions of the store begin operating while construction continues in other zones. Charlotte-area shopping centers like Northlake Mall, SouthPark Mall, and the Carolina Place corridor regularly require anchor tenant build-outs, and we understand the unique access, staging, and noise restrictions these environments demand. Large-format projects typically run 16 to 30 weeks.',
    cost: '$60-$150/sq ft',
  },
  {
    icon: Store,
    title: 'Shopping Center & Strip Mall',
    slug: 'shopping-center-strip-mall',
    desc: 'Multi-tenant shopping center renovations, strip mall unit build-outs, common area upgrades, facade modernization, and parking lot improvements.',
    details:
      'Shopping center and strip mall construction encompasses both individual tenant build-outs within multi-tenant properties and larger-scale renovations that update the entire shopping center to attract new tenants and customers. Individual unit build-outs within strip malls require careful coordination with neighboring businesses, shared utility systems, and landlord-mandated construction standards. Common area renovations involve facade upgrades, new signage infrastructure, improved lighting for parking lots and walkways, ADA accessibility upgrades, and modernized restroom facilities. Charlotte has hundreds of strip malls and neighborhood shopping centers along corridors like South Boulevard, Independence Boulevard, Albemarle Road, and the Highway 51 corridor through Pineville and South Charlotte. Many of these centers were built in the 1980s and 1990s and need significant renovations to remain competitive with newer developments. We Build works with both individual tenants and shopping center ownership groups to execute renovations that minimize disruption to operating businesses while transforming the property. Strip mall unit build-outs typically complete in 4 to 8 weeks, while full center renovations may take 3 to 6 months depending on phasing.',
    cost: '$65-$175/sq ft',
  },
  {
    icon: Eye,
    title: 'Showroom & Gallery',
    slug: 'showroom-gallery',
    desc: 'Showroom construction for furniture, automotive, flooring, kitchen and bath, art galleries, and product demonstration spaces requiring premium presentation.',
    details:
      'Showrooms and galleries are retail environments where the product experience takes center stage. These spaces require construction that supports dramatic product displays, controlled lighting environments, durable flooring that withstands heavy foot traffic and product movement, and flexible layouts that can be reconfigured as product lines change. We Build constructs showrooms across multiple industries including furniture retailers, automotive dealerships, flooring and tile distributors, kitchen and bath showrooms, appliance centers, and fine art galleries. Our showroom build-outs include reinforced flooring for heavy displays, adjustable track lighting and accent lighting systems, climate control systems that protect sensitive inventory, high-end finish work that supports the premium environment without competing with the products on display, and secure storage areas for high-value inventory. The Ballantyne and South Charlotte corridors have seen significant growth in showroom-style retail, particularly for home furnishing and design-related businesses. Charlotte showroom build-outs typically range from 8 to 14 weeks, with premium finish work and custom fixture installation driving the timeline.',
    cost: '$90-$225/sq ft',
  },
  {
    icon: Coffee,
    title: 'Convenience & Quick-Service',
    slug: 'convenience-quick-service',
    desc: 'Build-outs for convenience stores, quick-service restaurants, coffee shops, juice bars, and fast-casual concepts with food-service infrastructure.',
    details:
      'Convenience stores and quick-service retail spaces combine retail selling floor with food-service infrastructure, creating a hybrid construction scope that requires expertise in both retail build-out and commercial kitchen construction. These projects involve food prep areas with health department-compliant surfaces, beverage station plumbing, walk-in coolers and freezers, commercial ventilation for food preparation, grease interceptors, ADA-compliant service counters, and drive-through window construction where applicable. Quick-service restaurants and coffee shops in Charlotte are expanding rapidly along high-traffic corridors and in mixed-use developments throughout South End, NoDa, University City, and the I-485 interchange nodes. We Build understands Mecklenburg County health department requirements for food-service construction and coordinates inspections to avoid the delays that can push back your opening date. Time is especially critical for quick-service concepts because franchise agreements and lease commencement dates create hard deadlines. Our team specializes in fast-track schedules that compress the typical 10 to 14 week timeline for these projects without sacrificing quality or code compliance.',
    cost: '$125-$300/sq ft',
  },
  {
    icon: Sparkles,
    title: 'Pop-Up & Seasonal Retail',
    slug: 'pop-up-seasonal-retail',
    desc: 'Rapid-deployment build-outs for pop-up shops, seasonal retail, holiday kiosks, temporary showrooms, and short-term brand activations.',
    details:
      'Pop-up and seasonal retail construction demands the fastest possible turnaround because these spaces operate on fixed, often short-term lease windows where every day of construction directly reduces selling days. We Build offers rapid-deployment build-out services that transform empty retail shells into fully operational pop-up stores in as little as 1 to 3 weeks. Our pop-up retail services include modular fixture systems that install quickly and can be relocated to future locations, temporary partition walls that meet code requirements without permanent construction, electrical distribution for lighting and point-of-sale systems, temporary signage and branding installations, and demobilization services that return the space to its original condition at the end of the lease. Charlotte hosts numerous seasonal retail opportunities including holiday pop-ups in SouthPark and Ballantyne, brand activation spaces in South End and NoDa, and temporary retail in mixed-use developments like Atherton Mill and The Camp North End. We understand the permitting shortcuts available for temporary installations and help retailers navigate Mecklenburg County requirements to get doors open as fast as possible. Pop-up build-outs typically complete in 1 to 3 weeks, with seasonal retail installations taking 2 to 4 weeks depending on fixture complexity.',
    cost: '$40-$120/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Revenue Timeline Assessment',
    desc: 'We meet at your retail space or prospective location to understand your brand, product flow, customer experience goals, lease commencement date, and target opening day. In retail construction, every day the store is closed represents lost revenue, so the first thing we establish is a realistic timeline that gets you open as fast as possible. We evaluate existing conditions including storefront configuration, ceiling heights, electrical capacity, plumbing availability, HVAC adequacy, and any landlord-imposed construction standards.',
  },
  {
    step: '02',
    title: 'Retail Space Planning & Customer Flow Design',
    desc: 'We work with your architect and design team to create floor plans optimized for retail performance. We map customer traffic flow from entrance to checkout, position high-margin merchandise in prime sight lines, plan fitting room locations for convenience without consuming premium selling floor, design stockroom and receiving areas for efficient inventory management, and ensure ADA compliance throughout.',
  },
  {
    step: '03',
    title: 'Detailed Estimate & Value Engineering',
    desc: 'We deliver a line-item estimate covering demolition, framing, electrical, plumbing, HVAC, fire protection, storefront modifications, custom fixtures, flooring, painting, signage infrastructure, security systems, and permits. If the estimate exceeds your budget or tenant improvement allowance, our team identifies value engineering opportunities that reduce costs without compromising the customer experience or brand presentation. We work with your visual merchandising team to ensure construction supports your fixture plan.',
  },
  {
    step: '04',
    title: 'Design Development & Brand Integration',
    desc: 'Once the budget is approved, we finalize construction drawings that integrate your brand guidelines. This includes storefront design with signage locations, interior color palettes aligned with your brand standards, lighting design that creates the right atmosphere for your merchandise, and material specifications for all finish surfaces. For franchise and national brand retailers, we coordinate directly with your corporate construction department to ensure compliance with brand standards manuals and approved vendor lists.',
  },
  {
    step: '05',
    title: 'Permitting & Fast-Track Approvals',
    desc: 'We prepare and submit all permit applications to Mecklenburg County or the relevant jurisdiction. Retail construction permits include building, mechanical, electrical, plumbing, and fire alarm permits. For food-service retail, we also coordinate health department plan review. We understand the permitting timelines specific to Charlotte-area jurisdictions and submit complete, code-compliant packages that minimize review cycles. Where available, we pursue expedited review to compress the permitting timeline.',
  },
  {
    step: '06',
    title: 'Pre-Construction Coordination & Material Procurement',
    desc: 'Before demolition begins, we finalize the construction schedule, order long-lead materials such as custom storefront systems, specialty flooring, and branded fixtures, and coordinate subcontractor availability. For shopping center locations, we confirm construction access hours, loading dock schedules, material staging areas, and noise restrictions with property management. We develop a phasing plan that front-loads critical path items to protect your opening date.',
  },
  {
    step: '07',
    title: 'Demolition & Rough-In Construction',
    desc: 'Construction begins with selective demolition of existing conditions followed by rough-in work for framing, electrical, plumbing, and HVAC. For retail spaces in operating shopping centers, we install dust barriers and coordinate noisy work during off-hours to minimize impact on neighboring tenants. Storefront rough openings and structural modifications are completed during this phase. Fire sprinkler modifications and fire alarm rough-in are coordinated with the building fire protection system.',
  },
  {
    step: '08',
    title: 'Finish Construction & Fixture Installation',
    desc: 'Finish work transforms the raw construction into your retail environment. This phase includes drywall finishing, painting, ceiling installation, flooring, trim and millwork, lighting installation, and all final mechanical and electrical connections. Custom retail fixtures, display cases, shelving systems, fitting room enclosures, and point-of-sale counters are installed and aligned with your merchandising plan. Signage and branding elements are mounted. Security system sensors, cameras, and alarm panels are installed and tested.',
  },
  {
    step: '09',
    title: 'Inspections & Punch List',
    desc: 'We coordinate all required inspections with local building officials: rough-in, above-ceiling, fire alarm acceptance test, and final building inspection. For food-service retail, we schedule the health department inspection. Our project manager conducts internal quality control walks before every official inspection to ensure first-attempt pass rates. After inspections, we complete a thorough punch list walk-through with you to identify any items needing adjustment, touch-up, or correction, and address every item promptly.',
  },
  {
    step: '10',
    title: 'Handoff, Merchandising Support & Warranty',
    desc: 'We deliver your completed retail space with sufficient lead time before your planned opening date so your team can merchandise, train staff, and conduct soft openings. Close-out documentation includes as-built drawings, equipment warranties, maintenance manuals, and final lien waivers. Our one-year workmanship warranty covers all construction performed by our team. We remain available for post-opening adjustments, seasonal reconfiguration support, and future expansion projects.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Our military background instills the discipline, accountability, and urgency that retail construction demands. In retail, your opening date is not a suggestion but a hard deadline tied to lease obligations, marketing campaigns, and seasonal windows. When we commit to a date, we deliver.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience, including extensive retail-specific expertise across boutiques, national chains, shopping center renovations, and quick-service build-outs. We have encountered every type of retail construction challenge from outdated electrical panels in aging strip malls to complex storefront modifications in historic districts and know how to solve problems before they delay your opening.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, enabling us to serve retailers throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, and the Lake Norman corridor. For retailers expanding across the state line, our dual licensing eliminates the need to hire separate contractors for each jurisdiction.',
  },
  {
    icon: Zap,
    title: 'Speed-First Retail Scheduling',
    desc: 'Every day your retail space is under construction instead of open for business represents lost revenue. We structure retail construction schedules with opening-day urgency, front-loading critical path work, overlapping trades where safely possible, and scheduling inspections proactively to avoid waiting periods. Our fast-track approach has consistently delivered retail spaces ahead of schedule across the Charlotte market.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our retail construction projects. Energy-efficient LED lighting, high-performance HVAC systems, low-VOC paints and adhesives, and recycled content materials reduce your operating costs and environmental footprint. Sustainability-conscious retailers increasingly seek USGBC-aligned construction partners, and we deliver on that commitment.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Retail Market Knowledge',
    desc: 'We know Charlotte retail corridors intimately, from the high-end boutique environment of SouthPark to the creative independent retail scene in NoDa and South End, to the high-traffic strip mall corridors along South Boulevard and Independence Boulevard. This local knowledge means accurate cost estimates, realistic permitting timelines, and established relationships with the subcontractors and inspectors who keep retail projects moving.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build retail client receives weekly progress reports, a dedicated project manager as their single point of contact, and immediate notification of any issue that could affect the opening date or budget. We believe retail owners and brand managers need real-time visibility into construction progress, and we provide it consistently from groundbreaking through grand opening.',
  },
];

const costTiers = [
  {
    type: 'Basic Retail Shell Build-Out',
    range: '$40-$75/sq ft',
    desc: 'Minimal interior build-out of a vanilla shell space including basic demising walls, standard lighting, LVP or polished concrete flooring, basic electrical for POS and lighting circuits, and paint. Suitable for retailers with minimal fixture requirements or temporary retail concepts.',
  },
  {
    type: 'Standard Retail Build-Out',
    range: '$75-$140/sq ft',
    desc: 'Complete retail build-out with custom wall layouts, upgraded lighting design, quality flooring, fitting rooms or demonstration areas, stockroom construction, branded paint scheme, signage infrastructure, and security system rough-in. The most common scope for Charlotte retail tenants.',
  },
  {
    type: 'Premium Boutique Build-Out',
    range: '$140-$225/sq ft',
    desc: 'High-end retail environment with custom millwork, specialty display fixtures, accent lighting and feature lighting design, premium flooring such as hardwood or natural stone, designer wall treatments, custom fitting rooms, and architectural details that reflect luxury brand positioning.',
  },
  {
    type: 'Quick-Service & Food Retail',
    range: '$125-$300/sq ft',
    desc: 'Retail space with food-service infrastructure including commercial kitchen or food prep area, ventilation hood, grease interceptor, walk-in cooler or freezer, health department-compliant surfaces, beverage station plumbing, and drive-through window construction where applicable.',
  },
  {
    type: 'Big Box & Large Format',
    range: '$60-$150/sq ft',
    desc: 'Large-format retail construction for spaces over 10,000 square feet including high-bay lighting, industrial-grade flooring, heavy-duty HVAC, loading dock work, fire suppression systems, and phased construction to allow partial openings during build-out.',
  },
  {
    type: 'Pop-Up & Seasonal Retail',
    range: '$40-$120/sq ft',
    desc: 'Rapid-deployment build-outs with modular fixtures, temporary partition walls, portable electrical distribution, temporary signage, and demobilization at lease end. Lower per-square-foot cost due to reduced permanent construction and simplified permitting.',
  },
  {
    type: 'Shopping Center Common Area',
    range: '$50-$130/sq ft',
    desc: 'Multi-tenant common area renovations including facade modernization, new storefront systems, parking lot lighting, ADA accessibility upgrades, restroom renovations, wayfinding signage, and landscaping improvements to refresh the overall center appearance.',
  },
];

const faqs = [
  {
    question: 'How much does retail construction cost in Charlotte, NC?',
    answer:
      'Retail construction costs in Charlotte vary significantly by space type, size, finish level, and whether food-service infrastructure is involved. Basic shell build-outs for simple retail concepts start around $40 to $75 per square foot. Standard retail build-outs with custom layouts, quality finishes, fitting rooms, and branded environments run $75 to $140 per square foot. Premium boutique spaces with custom millwork and high-end finishes range from $140 to $225 per square foot. Quick-service and food retail build-outs are the most expensive at $125 to $300 per square foot due to kitchen ventilation, plumbing, and health department compliance. We provide detailed, line-item estimates after an initial site visit so you know exactly what every dollar covers before construction begins.',
  },
  {
    question: 'How long does a retail build-out take in Charlotte?',
    answer:
      'Retail build-out timelines in Charlotte depend on project scope, permitting, and existing conditions. Pop-up and temporary retail spaces can be ready in 1 to 3 weeks. Basic retail shell build-outs with standard finishes typically complete in 4 to 8 weeks. Standard retail build-outs with custom layouts and branded environments take 8 to 12 weeks. Premium boutique spaces with custom millwork and high-end details require 10 to 14 weeks. Quick-service food retail build-outs take 10 to 16 weeks due to kitchen complexity and health department inspections. Big box and anchor tenant projects run 16 to 30 weeks. Mecklenburg County permitting adds 2 to 6 weeks before construction can begin. We provide a detailed schedule during planning and update it weekly throughout construction.',
  },
  {
    question: 'Do I need permits for a retail build-out in Charlotte?',
    answer:
      'Yes, virtually all retail build-outs in Charlotte require permits from Mecklenburg County Code Enforcement. Any construction involving new walls, electrical work, plumbing modifications, HVAC changes, fire alarm alterations, or storefront modifications requires a building permit. Food-service retail spaces also require health department plan review and approval before opening. Even cosmetic renovations may trigger permitting requirements if they affect egress paths, fire protection coverage, or ADA compliance. We handle the entire permitting process including document preparation, application submission, plan review response, and inspection scheduling. Our familiarity with Mecklenburg County permitting helps avoid delays that can push back your opening date.',
  },
  {
    question: 'Can you build out my retail space while neighboring stores stay open?',
    answer:
      'Yes, this is standard practice for retail construction in shopping centers and strip malls. We install dust barriers, noise containment measures, and negative air pressure systems to isolate construction activity from adjacent operating businesses. Demolition, concrete cutting, and other noisy or dusty work is scheduled during off-hours or early mornings before neighboring stores open. Material deliveries and debris removal are coordinated with property management to avoid blocking customer parking or store entrances. We maintain clean, professional job sites because we understand that the shopping center environment directly impacts sales for all tenants, not just the space under construction.',
  },
  {
    question: 'What is a vanilla shell versus a warm shell in retail construction?',
    answer:
      'A vanilla shell, also called a cold shell or gray shell, is a retail space delivered by the landlord with only the most basic building elements: concrete floor, exterior walls, roof structure, and utility stub-ins at the perimeter. The tenant is responsible for all interior construction. A warm shell includes additional landlord-provided improvements such as finished storefront with entry door, ceiling grid, basic lighting, HVAC distribution, finished restrooms, and possibly basic flooring. The distinction matters because it directly affects your build-out cost and timeline. Vanilla shell build-outs cost more because they require constructing everything from the ground up, while warm shell spaces need less new construction. We evaluate the shell condition during our initial site visit and factor it into our estimate.',
  },
  {
    question: 'How do you handle corporate brand standards for national retailers?',
    answer:
      'We Build has extensive experience constructing spaces for national and regional retail brands that require strict adherence to corporate brand standards manuals. Our process starts with a thorough review of your brand construction standards document, approved vendor lists, proprietary fixture specifications, approved material schedules, and quality benchmarks. We coordinate directly with your corporate construction manager or third-party project management firm throughout the project. We submit material samples and mock-ups for approval before proceeding with full installation. Our documentation includes detailed photo logs at each construction milestone that corporate teams can review remotely. This structured approach ensures your Charlotte location matches the brand experience at every other location nationwide.',
  },
  {
    question: 'What retail design considerations affect construction costs?',
    answer:
      'Several retail-specific design elements significantly impact construction costs. Storefront modifications including new glass, entry doors, and signage infrastructure can add $15,000 to $50,000 or more depending on the storefront system. Custom millwork for display cases, checkout counters, and built-in shelving adds $20 to $80 per linear foot depending on materials and complexity. Fitting rooms require framing, doors, lighting, mirrors, ventilation, and often specialty flooring, typically costing $3,000 to $8,000 per room. Specialty lighting design with track lighting, accent lights, and dimmable zones costs more than standard grid lighting but dramatically improves merchandise presentation. Point-of-sale areas need dedicated electrical circuits, data cabling, and often custom countertops. We help you prioritize the design elements that deliver the highest return on your construction investment.',
  },
  {
    question: 'Do you handle storefront and facade construction?',
    answer:
      'Yes, storefront and facade work is a core component of retail construction. We install new aluminum storefront systems, glass curtain walls, entry vestibules, automatic doors, roll-up security gates, and exterior signage infrastructure. For shopping center tenants, storefront modifications must comply with the landlord design criteria document that specifies approved storefront systems, signage dimensions, lighting requirements, and architectural details. For standalone retail buildings, facade work may include new cladding, awnings, canopies, and exterior lighting. Storefront construction requires coordination with glass fabricators, door hardware suppliers, and signage companies, and we manage all of these vendor relationships. ADA-compliant entry requirements including door width, threshold height, and hardware type are incorporated into every storefront design.',
  },
  {
    question: 'What ADA requirements apply to retail construction?',
    answer:
      'The Americans with Disabilities Act requires that retail spaces be fully accessible to people with disabilities. For retail construction, this includes accessible entrances with automatic doors or doors that meet maximum opening force requirements, accessible routes throughout the selling floor without steps or barriers, checkout counters with an accessible transaction surface no higher than 36 inches, fitting rooms that meet minimum size requirements with accessible hardware and seating, accessible restrooms if restrooms are provided for customers, and proper signage throughout the space. If your retail build-out involves a change in occupancy type or exceeds a certain percentage of the building value, additional ADA upgrades to the overall building path of travel may be required. Our team designs every retail space with ADA compliance built into the plans from the beginning.',
  },
  {
    question: 'How does tenant improvement allowance work for retail leases?',
    answer:
      'A tenant improvement allowance is a dollar amount per square foot that a retail landlord provides to help cover the cost of building out a leased space. For retail leases in Charlotte, TI allowances typically range from $15 to $50 per square foot for inline spaces and $20 to $75 per square foot for anchor spaces, depending on the landlord, property condition, lease term, and negotiating leverage. For example, a $30 per square foot allowance on a 2,500 square foot retail space provides $75,000 toward the build-out. We help retail tenants maximize their TI allowance by structuring the scope of work so that reimbursable construction costs are clearly documented. Having our consultation during lease negotiations gives you leverage to request an appropriate allowance based on actual construction costs rather than guesswork.',
  },
  {
    question: 'What areas do you serve for retail construction?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for retail construction. Our primary service area includes Charlotte, South Charlotte, SouthPark, Ballantyne, University City, NoDa, South End, Uptown, Plaza Midwood, Dilworth, and surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman communities of Cornelius, Davidson, Huntersville, and Mooresville. Our NC and SC general contractor licenses allow us to work across both states seamlessly, which is especially beneficial for retail brands with locations on both sides of the state line. From SouthPark Mall to the Baxter Village shopping district in Fort Mill, we deliver retail construction wherever Charlotte-area retailers need us.',
  },
  {
    question: 'Can you handle multiple retail locations simultaneously?',
    answer:
      'Yes, We Build has the project management capacity and subcontractor relationships to manage multiple retail construction projects simultaneously across the Charlotte metro area. National and regional retailers expanding into the Charlotte market often need several locations built out on parallel timelines. We assign a dedicated project manager to each location while our operations team coordinates shared resources, material purchasing economies, and subcontractor scheduling across all projects. Running multiple projects simultaneously also allows us to negotiate volume pricing with material suppliers and subcontractors, which can reduce per-location costs. If you are planning a multi-location rollout in the Charlotte market, contact us early so we can plan resource allocation and sequencing that supports your launch timeline.',
  },
  {
    question: 'How much does it cost to open a retail store in SouthPark versus South End Charlotte?',
    answer:
      'Construction costs are similar in both areas, but lease economics differ significantly. SouthPark retail lease rates run $35 to $65 per square foot annually for inline space near SouthPark Mall, with TI allowances of $25 to $50 per square foot. South End rates range from $30 to $55 per square foot with TI allowances of $20 to $45 per square foot. Build-out construction costs average $75 to $150 per square foot in both areas for standard retail. The key difference is customer profile: SouthPark draws affluent suburban shoppers, while South End attracts younger urban professionals with high foot traffic from the light rail. We Build has completed retail projects in both submarkets and can advise on construction considerations specific to each area.',
  },
  {
    question: 'How does retail build-out compare to restaurant construction in terms of cost and complexity?',
    answer:
      'Retail build-outs are generally less expensive and faster than restaurant construction because they do not require commercial kitchen ventilation, grease traps, extensive plumbing, or health department compliance. A standard retail build-out in Charlotte costs $75 to $140 per square foot, while restaurant construction runs $150 to $400 per square foot. Retail timelines are also shorter, typically 8 to 12 weeks versus 12 to 22 weeks for restaurants. The exception is food retail concepts like juice bars, bakeries, or coffee shops, which require some food-service infrastructure and fall between pure retail and full restaurant complexity. We handle all of these project types and help clients understand what their specific concept will actually require.',
  },
  {
    question: 'What Mecklenburg County signage permits do I need for my retail storefront?',
    answer:
      'Retail signage in Mecklenburg County requires a sign permit from Charlotte-Mecklenburg Code Enforcement for any permanent exterior signage. The Sign Ordinance regulates sign type, size, height, illumination, and placement based on zoning district and street frontage. Shopping center tenants must also comply with the landlord sign criteria document, which often imposes additional restrictions on sign dimensions, materials, colors, and mounting methods. Interior window graphics covering more than 25 percent of the glass area may also require a permit. We coordinate signage infrastructure during construction, including electrical conduit, structural blocking, and mounting brackets, so your sign installer has everything needed for a clean, code-compliant installation on day one.',
  },
];

export default function RetailConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Retail Construction & Buildouts Charlotte NC',
            'Expert retail construction and buildout services in Charlotte, NC. Boutique shops, big box stores, shopping center renovations, showrooms, quick-service food retail, and pop-up retail spaces. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/retail-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Retail Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Retail Construction & Buildouts Charlotte NC"
        subtitle="Get your retail space open faster with Charlotte's veteran-owned construction team — because every day closed is lost revenue"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Retail Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Retail Construction & Buildout Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s retail landscape is evolving at an extraordinary pace. From the
                luxury retail environment surrounding SouthPark Mall, one of the Southeast&apos;s
                premier shopping destinations, to the independent boutiques and creative retail
                concepts lining the streets of South End and NoDa, to the expanding suburban retail
                corridors of Ballantyne, Waverly, and the Rea Road corridor, Charlotte offers
                retailers a diverse and growing consumer market. The Charlotte metropolitan area
                serves more than 2.7 million people and continues to add residents faster than
                almost any other major metro in the United States, creating sustained demand for
                new retail spaces across every segment from neighborhood convenience to high-end
                specialty retail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Retail construction is fundamentally different from other types of{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>.
                Speed is paramount because every day your doors are closed during construction
                represents lost revenue, lost customer awareness, and lost competitive positioning.
                Brand presentation must be flawless from day one because retail customers form
                impressions within seconds of walking through your door. And the construction
                itself must support the unique operational requirements of retail, from customer
                traffic flow and merchandise display to fitting rooms, stockrooms, point-of-sale
                infrastructure, and loss prevention systems. A retail build-out is not just a
                construction project; it is the physical foundation of your customer experience
                and your revenue stream.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link>{' '}
                with over 60 years of combined construction experience, and retail construction
                is one of our core specialties. We understand that retail clients need a contractor
                who moves fast without cutting corners, communicates proactively because surprise
                delays can derail a carefully planned grand opening, and delivers finished spaces
                that meet both brand standards and building codes. We work closely with your architect
                and design team, handling everything from coordinating space planning and material selection
                to permitting, construction, and final handoff. Licensed
                in both North Carolina and South Carolina, we serve retailers across Charlotte,{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>,
                and the surrounding communities.
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
                { icon: Clock, title: 'Opening-Day Urgency', desc: 'Every day under construction is a day without revenue. We structure retail schedules with speed as the driving priority, front-loading critical path work and overlapping trades to get you open faster.' },
                { icon: DollarSign, title: 'Revenue-Focused Design', desc: 'We design retail spaces that maximize selling floor area, optimize customer flow, and position high-margin merchandise in prime sight lines so your space works as hard as you do.' },
                { icon: Zap, title: 'Minimal Neighbor Disruption', desc: 'For shopping center and strip mall build-outs, we contain dust, manage noise, and coordinate deliveries to protect neighboring tenants and their customers throughout construction.' },
                { icon: Shield, title: 'Veteran-Owned Reliability', desc: 'Military discipline drives our commitment to deadlines, budgets, and accountability. When your lease commencement date and grand opening are on the line, you need a contractor who delivers.' },
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

      {/* Types of Retail Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Retail Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Retail Construction We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Charlotte&apos;s retail market spans everything from independent boutiques in walkable
              urban neighborhoods to anchor tenants in regional shopping centers. We bring
              specialized retail construction experience to every project type, with the speed
              and precision that retailers demand.
            </p>
          </div>
          <div className="space-y-8">
            {retailTypes.map((type) => (
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

      {/* Our Retail Construction Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Retail Build-Out Process: 10 Steps from Consultation to Grand Opening
            </h2>
            <p className="text-muted-foreground">
              A structured, speed-focused process designed to get your retail space open as fast
              as possible without compromising quality, code compliance, or brand standards.
              Every day of construction is a day without revenue, and our process reflects that
              urgency at every step.
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
              Why Choose We Build for Your Retail Construction Project
            </h2>
            <p className="text-muted-foreground">
              Choosing the right contractor for retail construction is a decision that directly
              impacts your opening date, your budget, and the customer experience your space
              delivers from day one. The wrong contractor means missed deadlines, cost overruns,
              and a finished product that fails to represent your brand. Here is what sets We Build apart.
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

      {/* Retail Design Considerations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Design Considerations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Retail Design Considerations That Impact Construction
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retail construction is not just about building walls and installing fixtures. The
                design decisions made during planning directly affect construction scope, cost,
                timeline, and ultimately the revenue performance of your retail space. Here are
                the key retail design elements we coordinate during every build-out.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: DoorOpen,
                  title: 'Storefront & Entry Design',
                  desc: 'Your storefront is the first impression and the primary driver of walk-in traffic. Construction considerations include storefront glazing systems, entry door type and placement, vestibule design for climate control, roll-up security gates, ADA-compliant thresholds and door hardware, and integration with the overall building or shopping center facade requirements. A well-designed storefront balances maximum visibility with energy efficiency and security.',
                },
                {
                  icon: LayoutGrid,
                  title: 'Signage Infrastructure',
                  desc: 'Retail signage requires dedicated electrical circuits, structural mounting points, and coordination with landlord signage criteria. Interior signage includes illuminated channel letters, backlit graphics, wayfinding elements, and digital display mounting. Exterior signage involves monument signs, blade signs, awning graphics, and facade-mounted channel letters. We install all signage infrastructure during construction so your sign vendor can mount finished signage without requiring additional construction work or permitting.',
                },
                {
                  icon: Accessibility,
                  title: 'ADA Compliance',
                  desc: 'ADA requirements for retail spaces include accessible entrances, clear aisle widths of at least 36 inches with 60-inch passing zones, accessible checkout counters no higher than 36 inches, fitting rooms that accommodate wheelchairs with accessible hardware and bench seating, accessible restrooms, and compliant signage. Non-compliance exposes retailers to lawsuits and fines. We integrate ADA requirements into the initial design so compliance is built in, not retrofitted.',
                },
                {
                  icon: Footprints,
                  title: 'Customer Traffic Flow',
                  desc: 'Retail floor plans must guide customers through the space in a pattern that maximizes product exposure and encourages browsing. Construction supports this through strategic wall placement, fixture anchoring points, flooring transitions that create visual zones, sightline management, and checkout positioning that captures impulse purchases. We work with your visual merchandising team to ensure the constructed space supports your planned traffic pattern and product placement strategy.',
                },
                {
                  icon: Ruler,
                  title: 'Fitting Room Construction',
                  desc: 'Fitting rooms are a critical conversion point for apparel retailers and require careful construction. Each room needs proper dimensions per ADA guidelines, a solid door with quality hardware, adequate lighting that flatters without distorting, ventilation connected to the HVAC system, hooks and seating, full-length mirrors, and flooring that is easy to maintain. At least one fitting room must be ADA-accessible with larger dimensions and grab bar provisions. We typically construct fitting rooms at $3,000 to $8,000 per room depending on finish level.',
                },
                {
                  icon: MonitorSmartphone,
                  title: 'POS & Technology Placement',
                  desc: 'Modern retail requires extensive technology infrastructure that must be planned during construction. Point-of-sale stations need dedicated electrical circuits, data cabling, and often custom countertop builds. Inventory management systems may require wireless access point locations planned into the ceiling grid. Digital signage needs power and data at specific locations. Security cameras and loss prevention sensors require both power and network connectivity. We coordinate all technology rough-in during the framing phase so wiring is concealed within walls and ceilings rather than surface-mounted.',
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
            <p className="mt-8 text-muted-foreground text-center max-w-2xl mx-auto">
              Every retail design decision has construction implications. The earlier you involve
              your contractor in the design process, the more accurately we can estimate costs,
              identify potential challenges, and ensure the finished space performs exactly as you
              envision.{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              to discuss your retail project during the planning phase.
            </p>
          </div>
        </div>
      </section>

      {/* Retail Construction Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Retail Construction Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retail construction costs in Charlotte depend on space type, existing shell
                condition, finish level, and whether food-service infrastructure is required.
                Below are typical cost ranges based on our recent retail projects in the
                Charlotte metro area. Every project is unique, and we provide detailed,
                line-item estimates after an initial site visit.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Retail Build-Out Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Shell condition:</strong> Vanilla shell spaces require significantly more construction than warm shell spaces because all interior elements must be built from scratch, adding $15 to $40 per square foot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Storefront modifications:</strong> New storefront systems, entry vestibules, and facade work can add $15,000 to $50,000 or more depending on the scope and landlord requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Custom fixtures and millwork:</strong> Built-in display cases, checkout counters, and fitting rooms with premium finishes cost significantly more than off-the-shelf retail fixtures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Food-service infrastructure:</strong> Adding a kitchen, prep area, or beverage station with ventilation, grease traps, and health department compliance can double the per-square-foot cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Fast-track schedule:</strong> Accelerated timelines requiring overtime labor, expedited material procurement, or weekend work increase project costs but can get you open and generating revenue sooner.</span>
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
                Retail Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte retailers ask about retail
                construction costs, timelines, permits, design considerations, and the build-out
                process.
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
            <h2 className="text-3xl font-bold">Retail Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and related services for more information on retail and commercial
              construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits', desc: 'Office, restaurant, medical, and retail upfit services across Charlotte.', href: '/services/commercial-upfits', type: 'Service' },
              { title: 'Tenant Improvements', desc: 'TI build-outs and leasehold improvements for retail tenants in shopping centers and mixed-use.', href: '/services/tenant-improvements', type: 'Service' },
              { title: 'Commercial Construction', desc: 'Ground-up commercial construction for new retail buildings and shopping centers.', href: '/services/commercial-construction', type: 'Service' },
              { title: 'Retail Space Build-Out Guide for Charlotte Business Owners', desc: 'Plan your retail build-out with cost estimates, timelines, and design tips for Charlotte retail spaces.', href: '/guides/retail-space-build-out-guide-charlotte', type: 'Guide' },
              { title: 'Commercial Flooring Guide: Best Options by Business Type', desc: 'Find the best flooring for your retail store, from durability ratings to cost per square foot.', href: '/guides/commercial-flooring-guide-business-type', type: 'Guide' },
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
            Ready to Build Your Retail Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a boutique build-out in South End, an anchor tenant
            construction in a regional shopping center, a quick-service food retail space, or
            a pop-up shop for the holiday season, We Build has the retail construction experience,
            speed-first approach, and Charlotte market knowledge to deliver your project on time
            and within budget.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site visit and consultation. We serve Charlotte,{' '}
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
