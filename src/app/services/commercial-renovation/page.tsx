import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Store,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Building,
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
  RefreshCw,
  TrendingUp,
  Leaf,
  PenTool,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Commercial Renovation Charlotte NC | Building Remodeling & Renovation Contractor',
  description:
    'Leading commercial renovation contractor in Charlotte, NC with 60+ years experience. Office renovation, retail remodeling, restaurant renovation, warehouse upgrades, healthcare facility renovation & building exterior restoration. Veteran-owned, licensed in NC & SC. Minimize business disruption. Free estimates. (704) 574-8124.',
  keywords: [
    'commercial renovation Charlotte NC',
    'commercial renovation contractor Charlotte NC',
    'commercial renovation contractor near me',
    'commercial renovation near me',
    'commercial remodeling contractor Charlotte',
    'building renovation Charlotte NC',
    'commercial space renovation',
    'office renovation Charlotte NC',
    'retail renovation Charlotte',
    'restaurant renovation Charlotte NC',
    'warehouse renovation Charlotte',
    'commercial building remodel Charlotte',
    'healthcare facility renovation Charlotte',
    'building exterior renovation Charlotte NC',
    'commercial renovation Charlotte North Carolina',
    'commercial renovation fort mill sc',
    'commercial renovation lake norman nc',
    'commercial renovation detroit mi',
    'commercial building renovation near me',
    'commercial remodeling Charlotte NC',
    'commercial remodeling contractor Charlotte NC',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/commercial-renovation',
  },
  openGraph: {
    title: 'Commercial Renovation Charlotte NC | We Build',
    description:
      'Transform your commercial building with expert renovation services. Office, retail, restaurant, warehouse, healthcare & exterior renovation across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/commercial-renovation',
    type: 'website',
  },
};

const renovationTypes = [
  {
    icon: Building2,
    title: 'Office Renovation',
    slug: 'office-renovation',
    desc: 'Complete office building renovations including structural upgrades, systems modernization, layout reconfiguration, accessibility improvements, and full interior redesign for corporate and professional environments.',
    details:
      'Office renovation in Charlotte goes well beyond cosmetic updates. Many commercial office buildings across the metro area were constructed in the 1980s and 1990s, and their mechanical, electrical, and plumbing systems are approaching or past their useful lifespan. A comprehensive office renovation addresses these aging infrastructure issues while simultaneously modernizing the layout and finishes to attract today\'s workforce. Our office renovation projects routinely include full HVAC system replacement with modern variable refrigerant flow technology, electrical panel upgrades to support increased power demands from technology, LED lighting retrofits with occupancy sensors and daylight harvesting, plumbing system overhauls, new fire alarm and sprinkler systems, elevator modernization, and ADA accessibility improvements throughout the building. We also handle the interior transformation including demolition of outdated layouts, construction of modern open-concept workspaces with collaboration zones, private offices, huddle rooms, and amenity spaces like fitness centers, mother\'s rooms, and cafe-style break areas that today\'s tenants expect. Most office renovations in the Charlotte metro area complete in 12 to 24 weeks depending on building size and scope.',
    cost: '$65-$200/sq ft',
  },
  {
    icon: Store,
    title: 'Retail Renovation',
    slug: 'retail-renovation',
    desc: 'Retail space renovations including storefront upgrades, interior redesigns, customer flow optimization, display infrastructure, back-of-house improvements, and brand experience enhancements.',
    details:
      'Retail renovation in Charlotte is driven by the need to compete with online shopping by creating memorable in-store experiences that cannot be replicated on a screen. Our retail renovation services address every aspect of the customer journey, from the curb appeal of the storefront facade to the checkout counter at the point of sale. We handle structural modifications to open up floor plans, remove load-bearing walls with properly engineered beam replacements, install new storefront window systems for maximum visibility, upgrade lighting to highlight merchandise and create ambiance, install new flooring systems rated for heavy commercial foot traffic, and construct custom display fixtures and millwork that reinforce your brand identity. For multi-tenant retail centers, we coordinate with property managers and neighboring tenants to minimize disruption during construction. Mecklenburg County permitting for retail renovations can be complex, particularly when the scope involves changes to the building facade, fire separation walls, or accessibility paths. Our team manages the entire permitting process and has established relationships with local plan reviewers that help expedite approvals. Retail renovations in Charlotte typically range from 8 to 16 weeks depending on the size of the space and whether structural modifications are involved.',
    cost: '$80-$225/sq ft',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Renovation',
    slug: 'restaurant-renovation',
    desc: 'Full-service restaurant renovations including commercial kitchen upgrades, dining room transformations, bar area remodels, outdoor dining additions, and health code compliance improvements.',
    details:
      'Restaurant renovation is among the most technically demanding commercial renovation types because it involves specialized mechanical systems, strict health department compliance, and the need to work within extremely tight timelines to minimize revenue loss. Charlotte\'s restaurant industry is thriving, with new concepts opening regularly and established restaurants needing periodic refreshes to stay competitive. Our restaurant renovation services include complete commercial kitchen overhauls with new hood ventilation systems, grease trap replacement or upsizing, walk-in cooler and freezer upgrades, fire suppression system modernization, and new kitchen equipment infrastructure. On the dining side, we handle complete interior demolition and redesign, bar construction with draft beer systems and refrigeration, new restroom facilities, acoustic treatments to manage noise levels, and outdoor patio construction with weather protection systems. We coordinate closely with Mecklenburg County Health Department requirements to ensure that every renovation element meets current food service codes. For restaurants that need to remain partially operational during renovation, we develop phased construction plans that allow continued service in a portion of the restaurant while work proceeds in other areas. Restaurant renovations in Charlotte typically take 10 to 20 weeks depending on kitchen scope and whether outdoor dining areas are included in the project.',
    cost: '$150-$375/sq ft',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Industrial Renovation',
    slug: 'warehouse-industrial-renovation',
    desc: 'Industrial facility renovations including warehouse modernization, manufacturing space upgrades, loading dock improvements, climate control additions, and office space integration within industrial buildings.',
    details:
      'Charlotte\'s industrial corridors along I-77, I-85, and the airport area contain thousands of warehouse and industrial buildings that need renovation to meet modern operational demands. Many of these facilities were built decades ago with minimal office space, outdated electrical systems, and no climate control beyond the office areas. Our warehouse and industrial renovation services include electrical service upgrades to support modern machinery and automation equipment, three-phase power distribution, compressed air system installation, dock leveler and loading dock door replacement, overhead crane installation, mezzanine construction to maximize vertical space, climate-controlled storage areas for temperature-sensitive inventory, and the construction of modern office and employee amenity spaces within the warehouse shell. We understand the structural considerations of working within pre-engineered metal buildings and tilt-wall construction, including roof load limitations for new mechanical equipment, fire separation requirements between different occupancy types, and the coordination of sprinkler system modifications when building layout changes affect coverage patterns. For manufacturing environments, we also handle clean room construction, process piping, and specialized ventilation systems for operations that generate dust, fumes, or heat. Industrial renovations in the Charlotte area typically range from 8 to 20 weeks depending on the scope of work and whether the facility can remain operational during construction.',
    cost: '$45-$175/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Facility Renovation',
    slug: 'healthcare-facility-renovation',
    desc: 'Medical and dental facility renovations including clinical space upgrades, patient flow improvements, technology infrastructure modernization, infection control compliance, and accessibility enhancements.',
    details:
      'Healthcare facility renovation requires specialized expertise that goes far beyond standard commercial construction. Medical buildings must comply with healthcare-specific building codes, infection control standards, patient privacy requirements under HIPAA, and the Americans with Disabilities Act provisions that are more stringent for healthcare occupancies than for standard commercial spaces. Our healthcare renovation services include the replacement and upgrade of specialized HVAC systems with air pressure differentials between treatment rooms, corridors, and waiting areas to control airborne contamination. We handle medical gas system upgrades including oxygen, nitrous oxide, and vacuum piping. For imaging facilities, we install lead-lined walls, specialized structural supports for heavy equipment, and dedicated electrical circuits with clean power for sensitive diagnostic machines. Dental practice renovations include operatory plumbing for chair-side water and vacuum systems, compressed air for handpieces, and waste amalgam collection systems that meet environmental regulations. We coordinate equipment delivery and installation with medical equipment vendors so that infrastructure is precisely positioned before finish work begins, avoiding costly rework. Patient flow analysis drives our layout planning, ensuring that clinical workflows are efficient while maintaining clear separation between public, semi-restricted, and restricted areas. Healthcare facility renovations in Charlotte typically require 12 to 24 weeks and must be carefully phased to maintain adjacent clinical operations during construction.',
    cost: '$160-$325/sq ft',
  },
  {
    icon: Building,
    title: 'Building Exterior Renovation',
    slug: 'building-exterior-renovation',
    desc: 'Complete building exterior renovations including facade upgrades, roofing replacement, window and curtain wall systems, parking lot improvements, landscaping, signage, and ADA site accessibility.',
    details:
      'Building exterior renovation addresses the structural envelope and curb appeal of a commercial property. In Charlotte, many commercial buildings from the 1970s through 1990s are reaching the age where exterior systems need comprehensive renovation rather than patch repairs. Our exterior renovation services include full facade replacement or re-cladding with modern materials such as aluminum composite panels, fiber cement, stone veneer, or architectural metal panels. We handle window system replacement including storefront glazing and curtain wall systems that improve energy performance and meet current wind load requirements for the Charlotte building code region. Roof replacement or re-roofing is a common component of exterior renovation, and we coordinate with our roof coating division at <a href="/we-coat">We Coat</a> for silicone roof coating applications on flat commercial roofs. Parking lot renovation includes asphalt milling and overlay or full replacement, concrete curb repair, ADA-compliant parking space striping, and stormwater management improvements to comply with Charlotte-Mecklenburg stormwater regulations. We also handle exterior lighting upgrades, monument signage installation, and landscaping improvements that enhance the property\'s market appeal. Building exterior renovations are particularly important for commercial property owners seeking to reposition aging assets, attract higher-quality tenants, and increase property values in Charlotte\'s competitive commercial real estate market. Exterior renovation projects typically take 8 to 16 weeks depending on building size and the scope of facade, roofing, and site work involved.',
    cost: '$25-$120/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Assessment & Building Evaluation',
    desc: 'We conduct a thorough assessment of your existing commercial building, evaluating structural integrity, mechanical system condition, electrical capacity, plumbing infrastructure, roof condition, and building envelope performance. This evaluation identifies hidden issues such as asbestos-containing materials, outdated wiring, code deficiencies, and deferred maintenance that will affect the renovation scope and budget. If available, we review the original construction drawings and any previous renovation documentation.',
  },
  {
    step: '02',
    title: 'Scope Definition & Needs Analysis',
    desc: 'We work with you to define the full scope of the renovation based on your business objectives. Are you renovating to attract new tenants? Modernizing an owner-occupied facility? Repurposing a building for a new use? The answers to these questions drive every design decision. We identify code-required upgrades that are triggered by the renovation scope, accessibility improvements mandated by the ADA, and any zoning or occupancy changes that require Charlotte-Mecklenburg Planning Department approval.',
  },
  {
    step: '03',
    title: 'Conceptual Design & Space Planning',
    desc: 'Our design-build team creates conceptual floor plans, elevation drawings, and 3D renderings that bring your renovation vision to life. We consider traffic flow, departmental adjacencies, natural light optimization, ADA accessibility, building code egress requirements, and the practical constraints of the existing structure. You can visit our Design Center to explore material options, see finish samples, and make selections in person with guidance from our team.',
  },
  {
    step: '04',
    title: 'Detailed Budgeting & Value Engineering',
    desc: 'We prepare a comprehensive, line-item renovation budget that breaks down every cost category including demolition, structural modifications, mechanical upgrades, electrical work, plumbing, fire protection, finishes, fixtures, furniture, technology infrastructure, and permits. If the budget exceeds your target, our value engineering process identifies cost-saving alternatives that maintain the quality and functionality you need while reducing overall project cost.',
  },
  {
    step: '05',
    title: 'Construction Document Preparation',
    desc: 'Once the design and budget are approved, we finalize detailed construction drawings, structural engineering plans, mechanical engineering documents, electrical plans, plumbing layouts, and fire protection drawings. These documents are prepared to meet Mecklenburg County submittal requirements for commercial renovation permits. Finish schedules, equipment specifications, and material cut sheets are compiled into a comprehensive project manual.',
  },
  {
    step: '06',
    title: 'Permitting & Regulatory Approvals',
    desc: 'We submit all required permit applications to Mecklenburg County Code Enforcement or the applicable jurisdiction. Commercial renovation permits typically include building, mechanical, electrical, plumbing, and fire alarm permits. If the renovation involves a change of occupancy type, additional reviews by the fire marshal, health department, or planning department may be required. We manage all plan review comments and resubmissions to keep the permitting timeline on track.',
  },
  {
    step: '07',
    title: 'Pre-Construction Coordination',
    desc: 'Before construction begins, we finalize the detailed project schedule, order long-lead materials and equipment, confirm subcontractor availability, and develop the construction phasing plan. For occupied buildings, we create a comprehensive logistics plan that addresses dust containment, noise mitigation, temporary utility routing, construction access separate from occupied areas, and after-hours work scheduling to minimize disruption to building occupants and neighboring businesses.',
  },
  {
    step: '08',
    title: 'Demolition & Structural Work',
    desc: 'Construction begins with selective demolition of existing finishes, walls, ceilings, and building systems being replaced. If hazardous materials such as asbestos or lead paint are present, licensed abatement contractors perform removal before general demolition proceeds. Structural modifications including beam installations for wall removals, floor reinforcement for heavy equipment, and opening creation for new doorways and windows are completed during this phase. This is typically the most disruptive phase and is scheduled accordingly.',
  },
  {
    step: '09',
    title: 'Systems Installation & Rough-In',
    desc: 'New mechanical, electrical, plumbing, and fire protection systems are installed during the rough-in phase. This includes HVAC ductwork and equipment, electrical wiring and panels, plumbing piping and fixtures, fire sprinkler modifications, fire alarm devices, and low-voltage cabling for data, security, and audio-visual systems. All rough-in work is inspected by Mecklenburg County building officials before walls and ceilings are closed.',
  },
  {
    step: '10',
    title: 'Finish Work, Inspections & Handoff',
    desc: 'Insulation, drywall, ceiling systems, flooring, painting, millwork, and fixture installation complete the renovation. We coordinate all required final inspections with local building officials, conduct internal quality control walks, and perform a comprehensive punch list review with you to ensure every detail meets expectations. At project handoff, you receive complete close-out documentation including as-built drawings, equipment warranties, maintenance manuals, and final lien waivers. Our one-year workmanship warranty covers all construction performed by our team.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. The discipline, accountability, and integrity that come from military service define how we run every renovation project. When we commit to a timeline and a budget, we deliver on that commitment. Our clients trust us because we treat every project as a reflection of our company values.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience specifically in commercial renovation and remodeling. We have renovated office buildings, retail centers, restaurants, medical facilities, warehouses, and mixed-use properties throughout the Charlotte metro area. This depth of experience means we anticipate challenges before they arise and solve problems efficiently when they do.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, enabling us to serve businesses throughout the entire Charlotte metropolitan area. This dual-state licensing is especially valuable for companies with locations on both sides of the state line, including Fort Mill, Rock Hill, Indian Land, Tega Cay, and the Lake Norman corridor communities of Cornelius, Davidson, Huntersville, and Mooresville.',
  },
  {
    icon: Lightbulb,
    title: 'Design-Build Renovation',
    desc: 'Our design-build approach combines architecture, engineering, and construction under one contract and one team. For commercial renovations, this single-source accountability is especially valuable because renovation projects frequently encounter unexpected conditions that require real-time design modifications. When your designer and builder are the same team, decisions happen faster, change orders are minimized, and the project stays on schedule.',
  },
  {
    icon: Zap,
    title: 'Occupied Building Expertise',
    desc: 'Many commercial renovations must be completed while the building remains occupied and operational. We specialize in phased renovation schedules that isolate construction areas from occupied spaces using temporary walls, dust barriers, noise mitigation, and negative air pressure containment. The most disruptive work is scheduled during off-hours and weekends so that your employees, tenants, and customers experience minimal impact.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we bring sustainable building practices to every commercial renovation project. Energy-efficient HVAC systems, LED lighting with smart controls, low-VOC paints and adhesives, recycled content building materials, and improved building envelope insulation are standard considerations in our renovation specifications. Sustainable renovation reduces operating costs and demonstrates environmental responsibility.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Knowledge',
    desc: 'We know Charlotte\'s commercial building stock intimately, from the Class A office towers in Uptown and South End to the industrial parks along I-77 and I-85 and the suburban retail centers throughout Mecklenburg County. This market knowledge means we understand local code requirements, Mecklenburg County permitting processes, subcontractor availability, material lead times, and the construction challenges specific to buildings in this region.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every renovation client receives weekly progress reports with photographs, a dedicated project manager as their single point of contact, and immediate notification of any issues that could affect timeline or budget. We believe that surprises have no place in construction. When you partner with We Build, you always know exactly where your project stands, what is coming next, and how every dollar is being spent.',
  },
];

const costFactors = [
  {
    type: 'Cosmetic Office Renovation',
    range: '$35-$75/sq ft',
    desc: 'Paint, flooring replacement, ceiling tile updates, lighting fixture upgrades, and minor cosmetic refreshes without structural changes. Suitable for buildings needing a fresh look to attract tenants or update a dated appearance.',
  },
  {
    type: 'Standard Office Renovation',
    range: '$75-$150/sq ft',
    desc: 'New wall construction, reconfigured layouts, electrical and data infrastructure upgrades, HVAC improvements, modern finishes, and restroom updates. The most common renovation scope for Charlotte office buildings undergoing a repositioning or tenant change.',
  },
  {
    type: 'Full Building Systems Renovation',
    range: '$125-$225/sq ft',
    desc: 'Complete replacement of mechanical, electrical, and plumbing systems, new fire protection, elevator modernization, ADA upgrades throughout, and high-end interior finishes. Required for older buildings with aging infrastructure that needs comprehensive modernization.',
  },
  {
    type: 'Retail Space Renovation',
    range: '$80-$225/sq ft',
    desc: 'Storefront facade replacement, interior redesign, custom display fixtures, new flooring and lighting, back-of-house improvements, and brand-specific architectural elements. Cost depends on the extent of structural changes and finish quality.',
  },
  {
    type: 'Restaurant Renovation',
    range: '$150-$375/sq ft',
    desc: 'Commercial kitchen equipment and ventilation upgrades, dining room redesign, bar construction, restroom renovation, outdoor patio additions, and full health department compliance work. Kitchen-intensive renovations are at the top of this range.',
  },
  {
    type: 'Healthcare Facility Renovation',
    range: '$160-$325/sq ft',
    desc: 'Specialized HVAC with air pressure controls, medical gas upgrades, lead-lined walls for imaging, ADA-compliant clinical spaces, infection control materials, and equipment infrastructure. Dental and medical practices have different cost profiles within this range.',
  },
  {
    type: 'Warehouse & Industrial Renovation',
    range: '$45-$175/sq ft',
    desc: 'Electrical service upgrades, climate control additions, dock improvements, mezzanine construction, office build-outs within industrial space, and process-specific infrastructure. Cost varies widely based on whether work is primarily structural or includes finished spaces.',
  },
  {
    type: 'Building Exterior Renovation',
    range: '$25-$120/sq ft',
    desc: 'Facade replacement or re-cladding, window system upgrades, roof replacement or coating, parking lot renovation, exterior lighting, signage, and landscaping improvements. Scope depends on building size, number of stories, and the extent of envelope work required.',
  },
];

const faqs = [
  {
    question: 'How much does a commercial renovation cost in Charlotte, NC?',
    answer:
      'Commercial renovation costs in Charlotte vary widely based on building type, scope, existing conditions, and finish level. Cosmetic office renovations start around $35 to $75 per square foot for paint, flooring, and lighting updates. Standard office renovations with layout changes and systems upgrades run $75 to $150 per square foot. Restaurant renovations are the most expensive at $150 to $375 per square foot due to kitchen infrastructure and health code requirements. Healthcare facilities range from $160 to $325 per square foot because of specialized mechanical systems and compliance standards. We provide detailed, line-item estimates after a thorough building assessment so that every cost is transparent and documented before construction begins.',
  },
  {
    question: 'How long does a commercial renovation take in Charlotte?',
    answer:
      'Commercial renovation timelines depend on the building size, scope of work, existing conditions, and permitting requirements. Cosmetic refreshes of small commercial spaces can complete in 4 to 8 weeks. Standard office renovations involving layout changes and system upgrades typically take 12 to 20 weeks. Full building renovations that include mechanical, electrical, and plumbing system replacement may require 16 to 30 weeks. Restaurant renovations take 10 to 20 weeks depending on kitchen complexity. Mecklenburg County permitting adds 3 to 8 weeks before construction can begin, depending on the scope and whether change-of-occupancy reviews are required. We build detailed schedules during the planning phase and provide weekly updates throughout construction.',
  },
  {
    question: 'Do I need permits for a commercial renovation in Charlotte?',
    answer:
      'Yes, virtually all commercial renovations in Charlotte require building permits from Mecklenburg County Code Enforcement. Any work involving structural modifications, electrical changes, plumbing alterations, HVAC modifications, fire alarm or sprinkler system changes, or accessibility improvements requires a permit. If the renovation changes the occupancy type of the building, such as converting office space to a restaurant or retail to medical use, additional reviews by the fire marshal, health department, and planning department are required. Even seemingly minor renovations may trigger permit requirements if they affect egress paths, fire separation walls, or accessibility routes. We handle the complete permitting process from document preparation through final inspections.',
  },
  {
    question: 'Can my business stay open during a commercial renovation?',
    answer:
      'In most cases, yes. We specialize in phased renovation schedules that allow businesses to remain operational during construction. Our approach involves dividing the renovation into manageable phases, completing one area before moving to the next, and using temporary walls, dust containment barriers, and negative air pressure systems to isolate construction zones from occupied areas. Noisy and disruptive work such as demolition, concrete cutting, and heavy equipment installation is scheduled during off-hours, weekends, or holiday periods when the building is unoccupied. For multi-tenant buildings, we coordinate closely with property managers and neighboring tenants to minimize impact. Every occupied renovation project begins with a detailed logistics plan that addresses access, safety, noise, dust, and utility interruptions.',
  },
  {
    question: 'What is the difference between a renovation and an upfit?',
    answer:
      'A commercial renovation and a commercial upfit are related but distinct types of construction projects. An upfit, also called a build-out or tenant improvement, typically involves customizing a vacant or white-box commercial space to meet a specific tenant\'s needs. The building structure, exterior, and base systems remain largely unchanged. A renovation is more comprehensive and may include structural modifications, building system replacement, exterior envelope work, and upgrades to the base building infrastructure beyond the interior finishes. Renovations are common for aging buildings that need systems modernization, buildings being repurposed for a different use, or properties undergoing repositioning to compete in the current Charlotte commercial real estate market. We Build handles both renovations and upfits, and we can help you determine which scope is appropriate for your situation.',
  },
  {
    question: 'Do you handle hazardous material abatement during renovations?',
    answer:
      'Commercial buildings constructed before the mid-1980s in Charlotte frequently contain asbestos in floor tiles, ceiling tiles, pipe insulation, mastic adhesives, and even some drywall joint compounds. Lead-based paint may be present in buildings constructed before 1978. Before any demolition work begins, we conduct a hazardous materials survey to identify asbestos-containing materials, lead paint, and other regulated substances. If hazardous materials are identified, licensed and certified abatement contractors perform removal under controlled conditions following all EPA and North Carolina DHHS regulations. Abatement costs are included in our renovation estimates so there are no surprise expenses. Proper documentation of abatement work is provided for your records and future regulatory compliance.',
  },
  {
    question: 'Will a commercial renovation trigger additional code requirements?',
    answer:
      'Commercial renovations in Charlotte can trigger additional building code requirements depending on the scope of work. Mecklenburg County applies a proportional compliance standard: the more extensive the renovation, the more current code requirements apply. Minor cosmetic renovations may not trigger significant additional requirements, but renovations affecting more than 50 percent of the building area or value typically require the entire building to comply with current fire protection, accessibility, energy efficiency, and structural codes. Changes in occupancy type, such as converting an office to a restaurant, trigger full code compliance regardless of the renovation extent. Our team evaluates code trigger thresholds during the initial assessment phase so that you understand the full scope of required upgrades before committing to the project budget.',
  },
  {
    question: 'How do I finance a commercial renovation project?',
    answer:
      'Commercial renovation projects in Charlotte can be financed through several mechanisms depending on whether you own or lease the building. For owner-occupied properties, commercial construction loans, SBA 504 loans, business lines of credit, and commercial mortgage refinancing with renovation funds rolled into the loan are common options. Some Charlotte-area banks offer specialized commercial renovation loan programs. For leased spaces, tenant improvement allowances from the landlord cover a portion of renovation costs, with the tenant funding the balance through business capital or SBA lending. Property owners renovating investment buildings often use commercial bridge loans or value-add investment loans structured around the property\'s projected post-renovation value. We provide detailed cost estimates and payment schedules that align with your financing requirements.',
  },
  {
    question: 'What areas of Charlotte do you serve for commercial renovations?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for commercial renovation projects. Our primary service area includes Uptown Charlotte, South End, NoDa, University City, Ballantyne, South Charlotte, and all Mecklenburg County communities. We also serve York County, South Carolina, including Fort Mill, Rock Hill, Indian Land, Tega Cay, and Fort Mill Industrial Park. In the Lake Norman region, we serve Cornelius, Davidson, Huntersville, and Mooresville. Our general contractor licenses in both North Carolina and South Carolina allow us to work seamlessly across state lines, which is particularly convenient for property owners and businesses with multiple locations throughout the greater Charlotte area. We have completed commercial renovation projects from Mooresville to Rock Hill and everywhere in between.',
  },
  {
    question: 'What insurance and warranties do you provide for renovation projects?',
    answer:
      'We Build carries comprehensive general liability insurance, workers compensation insurance, and commercial auto insurance for all renovation projects. We are fully bonded and provide payment and performance bonds for projects that require them, which is especially common for renovations in leased commercial properties where the landlord requires bonding. All renovation work is covered by our one-year workmanship warranty that guarantees the quality of materials and labor. Major building systems including HVAC equipment, plumbing fixtures, electrical panels, and roofing materials carry manufacturer warranties that typically extend 5 to 15 years depending on the product. At project completion, we deliver a comprehensive close-out package that includes all warranty certificates, equipment manuals, maintenance schedules, and as-built drawings documenting the renovation work.',
  },
  {
    question: 'How do you minimize disruption to neighboring tenants during a renovation?',
    answer:
      'Minimizing disruption to neighboring tenants is a critical consideration in multi-tenant commercial buildings. Our approach includes constructing temporary demising walls with sound-dampening insulation between the renovation area and occupied spaces, installing negative air pressure systems to prevent dust and odors from migrating into adjacent suites, scheduling high-impact work such as demolition, concrete cutting, and hammering during off-hours or weekends, coordinating material deliveries to avoid blocking shared corridors and loading areas, and maintaining clean and safe common areas throughout the project. We assign a dedicated logistics coordinator for multi-tenant renovation projects who communicates directly with the property manager and neighboring tenants about upcoming activities, temporary utility interruptions, and schedule milestones. This proactive communication prevents complaints and ensures a professional construction experience for everyone in the building.',
  },
  {
    question: 'Should I renovate my commercial building or build new?',
    answer:
      'The decision between renovating an existing commercial building and building new depends on several factors. Renovation is typically the better choice when the existing building is structurally sound, the location is established and desirable, you want to preserve an existing tenant base, or you need to minimize the time between investment and revenue generation. Renovation costs are generally 30 to 50 percent less than new construction for comparable finished space. New construction makes more sense when the existing structure has severe foundation or structural problems, when the building cannot accommodate the mechanical and electrical systems required for its new use, or when you need complete control over the building design from the ground up. We Build offers both commercial renovation and new commercial construction services, so we provide unbiased guidance on which approach delivers the best return on investment for your specific situation.',
  },
  {
    question: 'How much does it cost to renovate a 10,000 square foot commercial building in Charlotte?',
    answer:
      'For a 10,000 square foot commercial building in Charlotte, renovation costs typically range from $350,000 to $1.5 million depending on scope and existing conditions. A cosmetic refresh with paint, flooring, and lighting runs $350,000 to $750,000. A standard renovation with layout changes and systems upgrades costs $750,000 to $1.2 million. A comprehensive renovation including mechanical, electrical, plumbing replacement and structural modifications ranges from $1.2 to $1.5 million or more. These estimates do not include hazardous material abatement, which adds $10 to $50 per square foot if asbestos or lead is present. We Build provides detailed, line-item estimates after a thorough building assessment so every cost is documented before construction begins.',
  },
  {
    question: 'What is the difference between a commercial renovation and an adaptive reuse project?',
    answer:
      'A commercial renovation updates and modernizes a building while keeping its existing use type largely the same, such as renovating an office building that remains an office. Adaptive reuse fundamentally changes the building use, such as converting a warehouse into a restaurant or a church into an event venue. The distinction matters because adaptive reuse projects typically trigger more extensive code compliance requirements including change-of-occupancy reviews, additional fire suppression, updated egress configurations, and full ADA compliance for the new use. Adaptive reuse may also qualify for historic tax credits worth up to 45 percent of rehabilitation costs. We Build handles both commercial renovations and adaptive reuse projects throughout the Charlotte metro area.',
  },
  {
    question: 'Do Charlotte commercial renovations require energy code upgrades in Mecklenburg County?',
    answer:
      'Yes, commercial renovations in Mecklenburg County must comply with the current North Carolina Energy Conservation Code for all new and altered building systems. When you replace HVAC equipment, lighting, or the building envelope during a renovation, the new systems must meet current energy efficiency standards. If the renovation scope exceeds 50 percent of the building value, the entire building may be required to comply with current energy code provisions. Common energy code upgrades include higher-efficiency HVAC systems, LED lighting with occupancy controls, improved insulation, and updated window assemblies. As a USGBC member, We Build helps Charlotte property owners meet and exceed energy code requirements, often identifying upgrades that pay for themselves through reduced utility costs within 3 to 5 years.',
  },
];

export default function CommercialRenovationPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Renovation Charlotte NC',
            'Expert commercial renovation and remodeling services in Charlotte, NC. Office renovation, retail remodeling, restaurant renovation, warehouse upgrades, healthcare facility renovation, and building exterior restoration. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/commercial-renovation'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Commercial Renovation' },
          ]),
        ]}
      />

      <PageHero
        title="Commercial Renovation Charlotte NC"
        subtitle="Expert commercial renovation and remodeling services from Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Commercial Renovation' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Renovation &amp; Remodeling Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Commercial renovation transforms an aging, outdated, or underperforming building into a
                modern, efficient, and attractive commercial space that meets the demands of today&apos;s
                businesses and their customers. Unlike a simple cosmetic refresh or a targeted{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit</Link>,
                a full commercial renovation addresses the fundamental systems and structural elements of
                a building, including mechanical, electrical, and plumbing infrastructure, building envelope
                performance, accessibility compliance, and interior layout. Charlotte&apos;s commercial
                building inventory includes thousands of properties built in the 1970s, 1980s, and 1990s
                that are now reaching the age where comprehensive renovation is no longer optional but
                necessary to remain competitive in the market, comply with current building codes, and
                meet the expectations of modern tenants and customers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Charlotte commercial real estate market continues to grow, with major employers,
                healthcare systems, retail chains, and restaurant groups expanding throughout the metro
                area. This growth creates strong demand for renovated commercial spaces because the
                supply of new construction cannot keep pace and many businesses prefer the established
                locations, existing parking, and proven traffic patterns that come with renovating an
                existing building rather than building from the ground up. Whether you own a multi-tenant
                office building that needs repositioning to attract higher-quality tenants, a restaurant
                that has not been updated in fifteen years and is losing customers to newer competitors,
                a medical practice that has outgrown its current layout and needs a complete clinical
                redesign, or a warehouse facility that requires modernization to support new equipment
                and operational workflows, commercial renovation delivers the transformation you need
                at a fraction of the cost and timeline of{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">new commercial construction</Link>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience specializing in commercial renovation
                throughout the Charlotte metropolitan area. Our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">design-build</Link> approach
                means we handle every aspect of your renovation project from the initial building
                assessment and conceptual design through permitting, construction, and final handoff,
                all under one contract with a single point of accountability. Our{' '}
                <Link href="/design-center" className="text-primary hover:underline">Design Center</Link> allows
                you to see, touch, and compare finish materials before they go into your building.
                Licensed in both North Carolina and South Carolina, we serve commercial renovation
                clients across Charlotte,{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>,
                and the surrounding communities. As a USGBC member, we incorporate sustainable building
                practices into every renovation project to reduce long-term operating costs and
                environmental impact.
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
                { icon: TrendingUp, title: 'Increase Property Value', desc: 'A comprehensive commercial renovation increases building value by 20 to 40 percent, attracts higher-quality tenants at premium rents, and extends the useful life of the property by decades.' },
                { icon: Clock, title: 'Faster Than New Construction', desc: 'Most commercial renovations complete in 3 to 7 months, getting you into a modernized space far ahead of the 12 to 18 months typically required for new commercial construction from the ground up.' },
                { icon: Zap, title: 'Occupied Building Expertise', desc: 'We specialize in phased renovation schedules that keep your building operational during construction, using dust containment, noise mitigation, and off-hours scheduling to minimize disruption.' },
                { icon: Shield, title: 'Veteran-Owned Quality', desc: 'Military discipline defines our commitment to schedules, budgets, and craftsmanship on every commercial renovation project. When we make a commitment, we deliver on it without excuses.' },
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

      {/* Types of Commercial Renovations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Renovation Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Commercial Renovations We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every commercial building has different renovation requirements depending on its age,
              construction type, current condition, and intended use. We bring specialized experience
              to each project type, from straightforward office refreshes to complex healthcare facility
              renovations and complete building envelope restorations that demand precision engineering
              and strict regulatory compliance.
            </p>
          </div>
          <div className="space-y-8">
            {renovationTypes.map((type) => (
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

      {/* Our Renovation Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Commercial Renovation Process: 10 Steps from Assessment to Handoff
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent renovation process designed to minimize business disruption,
              eliminate cost surprises, and deliver your commercial renovation on time and within
              budget. Every step includes clear communication so you always know exactly where your
              project stands and what comes next.
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
              Why Choose We Build for Your Commercial Renovation
            </h2>
            <p className="text-muted-foreground">
              Choosing the right contractor is the most critical decision in any commercial renovation
              project. The wrong contractor can result in months of delays, tens of thousands in change
              orders, code violations that require costly rework, and a finished product that falls
              short of your expectations. Here is what sets We Build apart from other renovation
              contractors in Charlotte.
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

      {/* Commercial Renovation Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Commercial Renovation Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Commercial renovation costs in Charlotte depend on the building type, scope of work,
                existing conditions, age of current building systems, and finish level. Below are
                typical cost ranges based on our recent renovation projects in the Charlotte metro
                area. Every project is unique, and we provide detailed, line-item estimates after a
                thorough building assessment.
              </p>
            </div>
            <div className="space-y-4">
              {costFactors.map((item) => (
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Renovation Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Building age and condition:</strong> Older buildings frequently contain hazardous materials requiring abatement, outdated electrical systems that need complete replacement, and structural deficiencies that add to the renovation scope and cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Scope of systems work:</strong> Renovations that include full HVAC replacement, electrical service upgrades, new fire protection, and plumbing overhauls cost significantly more per square foot than projects focused on interior finishes only.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Code compliance triggers:</strong> Extensive renovations may trigger requirements to bring the entire building up to current fire, accessibility, energy, and structural codes, adding scope beyond the original renovation intent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Occupied building logistics:</strong> Renovating an occupied building requires phasing, temporary barriers, off-hours work, and additional safety measures that increase project costs compared to renovating a vacant building.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Finish level and material selections:</strong> Standard commercial-grade finishes versus premium materials such as natural stone, custom millwork, designer lighting, and high-end flooring can shift costs significantly at the same scope of work.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation vs. New Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Commercial Renovation vs. New Construction: Which Is Right for Your Business?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                One of the most important decisions Charlotte business owners and property investors
                face is whether to renovate an existing commercial building or invest in{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  new commercial construction
                </Link>. Both approaches have distinct advantages depending on your budget, timeline,
                location requirements, and long-term business goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <RefreshCw className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Commercial Renovation</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>30-50% lower cost:</strong> Renovation preserves the existing foundation, structure, envelope, and site work, eliminating the most expensive components of new construction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Faster occupancy:</strong> Most renovations complete in 3 to 7 months versus 12 to 18 months for new construction, reducing lost revenue and carrying costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Established location:</strong> Renovate in a proven commercial area with existing traffic patterns, visibility, parking, and utility infrastructure already in place.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Sustainability benefits:</strong> Reusing an existing structure reduces construction waste, embodied carbon, and the environmental impact of your project compared to demolition and new construction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Simpler permitting:</strong> Renovation permits are generally less complex and faster to obtain than new construction permits that involve site plans, stormwater reviews, and zoning approvals.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">New Construction</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Complete design freedom:</strong> Every element of the building is designed to your exact specifications, from floor plan to ceiling heights to facade appearance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>All-new building systems:</strong> Brand-new HVAC, electrical, plumbing, and fire protection systems designed specifically for your operations with full manufacturer warranties.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>No hidden conditions:</strong> New construction eliminates the risk of discovering asbestos, structural deficiencies, or outdated systems that can add cost during a renovation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Optimal site selection:</strong> Choose the ideal location, lot size, visibility, and access for your business rather than adapting to an existing building site.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Maximum energy efficiency:</strong> New buildings can be designed to meet the latest energy codes and even achieve LEED or ENERGY STAR certification from day one.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-muted-foreground text-center max-w-2xl mx-auto">
              For most Charlotte businesses and property owners, commercial renovation provides the
              best combination of cost efficiency, speed to occupancy, and location advantage. If you
              are weighing the options between renovation and new construction,{' '}
              <Link href="/contact" className="text-primary hover:underline">contact our team</Link> for
              a free consultation. We will assess your existing building, evaluate its renovation
              potential, and provide an honest recommendation based on your specific goals and budget.
            </p>
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
                Commercial Renovation Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte business owners and property
                investors ask about commercial renovation costs, timelines, permits, financing,
                and the renovation process.
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

      {/* Related Blog Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Commercial Renovation Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and articles for more information on commercial renovation in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Charlotte NC', href: '/services/commercial-upfits', type: 'Service' },
              { title: 'Tenant Improvements Charlotte NC', href: '/services/tenant-improvements', type: 'Service' },
              { title: 'Adaptive Reuse Charlotte NC', href: '/services/adaptive-reuse', type: 'Service' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service' },
              { title: 'How Much Does a Commercial Renovation Cost?', href: '/blog/commercial-renovation-cost-charlotte', type: 'Blog' },
              { title: 'Renovation vs. New Construction: A Cost Comparison', href: '/blog/renovation-vs-new-construction-cost', type: 'Blog' },
              { title: '5 Signs Your Commercial Building Needs Renovation', href: '/blog/5-signs-commercial-building-needs-renovation', type: 'Blog' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{resource.type}</span>
                  <h3 className="font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    {resource.type === 'Service' ? 'View Service' : 'Read Article'} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Renovate Your Commercial Building?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning an office renovation, retail remodel, restaurant transformation,
            healthcare facility upgrade, or complete building modernization in Charlotte, We Build
            has the experience, licenses, and local knowledge to deliver your renovation project on
            time and within budget. Our veteran-owned team brings over 60 years of combined
            construction experience to every project.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free building assessment and detailed renovation estimate. We
            serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities throughout the greater Charlotte metropolitan area.
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
