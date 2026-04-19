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
  Briefcase,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  FileCheck,
  HardHat,
  Lightbulb,
  Scale,
  BadgeCheck,
  HeartHandshake,
  Handshake,
  Key,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Tenant Improvement Contractor Charlotte NC | TI Build-Outs & Leasehold Improvements',
  description:
    'Expert tenant improvement contractor serving Charlotte NC, Raleigh NC, and the Research Triangle. Commercial renovation contractor for Class A & B office TI, retail tenant build-outs, restaurant TI, medical TI & industrial leasehold improvements. TI allowance maximization, landlord coordination. Veteran-owned, licensed NC & SC. Free consultations. (980) 471-1745.',
  keywords: [
    'tenant improvement contractor charlotte nc',
    'tenant improvement contractor near me',
    'tenant improvement charlotte nc',
    'tenant improvement near me',
    'ti contractor charlotte',
    'leasehold improvement charlotte nc',
    'leasehold improvement near me',
    'tenant buildout charlotte nc',
    'tenant buildout near me',
    'ti allowance charlotte',
    'tenant improvement allowance charlotte',
    'commercial tenant buildout charlotte',
    'office tenant improvement charlotte nc',
    'ti construction charlotte nc',
    'leasehold improvement contractor charlotte',
    'tenant fit out charlotte nc',
    'tenant improvement Charlotte North Carolina',
    'tenant improvement fort mill sc',
    'tenant improvement lake norman nc',
    'commercial tenant improvement near me',
    'tenant improvement contractor raleigh nc',
    'tenant improvement raleigh nc',
    'ti contractor raleigh',
    'leasehold improvement raleigh nc',
    'tenant buildout raleigh nc',
    'ti allowance raleigh',
    'office tenant improvement raleigh nc',
    'class a office ti raleigh',
    'tenant improvement research triangle',
    'tenant improvement north hills raleigh',
    'tenant improvement cary nc',
    'wake county tenant improvement',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/tenant-improvements',
  },
  openGraph: {
    title: 'Tenant Improvement Contractor Charlotte NC | We Build',
    description:
      'Expert tenant improvement contractor serving Charlotte, Fort Mill, Lake Norman, Raleigh, and the Research Triangle. Class A/B office TI, retail, restaurant, medical & industrial tenant build-outs. TI allowance maximization. Veteran-owned.',
    url: 'https://webuildclt.com/services/tenant-improvements',
    type: 'website',
  },
};

const tiTypes = [
  {
    icon: Building2,
    title: 'Class A Office Tenant Improvements',
    slug: 'class-a-office-ti',
    desc: 'Premium office build-outs in Class A towers and trophy buildings featuring executive finishes, custom millwork, glass-front offices, and high-end reception areas.',
    details:
      'Class A office tenant improvements in Charlotte demand a level of finish and craftsmanship that matches the prestige of the building. These projects typically involve Uptown Charlotte high-rises, South End trophy buildings, and premium Ballantyne office towers where tenant expectations are high and building standards are strict. Our team delivers executive suites with floor-to-ceiling glass partition walls, custom millwork reception desks and credenzas, integrated audio-visual conference rooms with motorized screens and concealed cabling, premium LVP or hardwood flooring, designer lighting packages, and sophisticated HVAC zoning that maintains precise temperature control across open and enclosed spaces. Class A buildings have strict construction rules including designated freight elevators, approved work hours, required insurance certificates, and building engineer coordination for tie-ins to base building systems. We manage every aspect of the landlord coordination process, from submitting architectural drawings for building management approval to scheduling after-hours deliveries through loading docks and coordinating fire alarm shutdowns for hot work. Most Class A office TI projects in Charlotte complete in 10 to 16 weeks depending on complexity and long-lead material procurement.',
    cost: '$85-$225/sq ft',
  },
  {
    icon: Briefcase,
    title: 'Class B Office Tenant Improvements',
    slug: 'class-b-office-ti',
    desc: 'Cost-effective office tenant build-outs in suburban office parks, mid-rise buildings, and flex space with professional finishes at competitive price points.',
    details:
      'Class B office tenant improvements represent the largest segment of the Charlotte TI market. These projects take place in suburban office parks along I-77 and I-485 corridors, mid-rise buildings in University City and Matthews, and mixed-use developments throughout Mecklenburg County. Class B TI projects balance professional appearance with budget consciousness, making value engineering a critical part of the planning process. Our team specializes in maximizing the impact of every dollar of TI allowance in Class B spaces. Typical scopes include new demising walls and interior partitions, upgraded LED lighting with occupancy sensors, LVP or commercial carpet tile flooring, painted drywall with accent walls, glass sidelites at offices for borrowed light, updated ceiling grid with new acoustical tile, and technology infrastructure including structured cabling and wireless access point locations. We frequently work with tenants whose TI allowance ranges from $20 to $45 per square foot, which requires careful prioritization of improvements. Our estimating team provides detailed cost breakdowns early in the lease negotiation process so tenants can make informed decisions about scope versus budget. Class B office TI projects typically complete in 6 to 12 weeks, with simpler cosmetic refreshes finishing in as few as four weeks.',
    cost: '$45-$130/sq ft',
  },
  {
    icon: Store,
    title: 'Retail Tenant Improvements',
    slug: 'retail-ti',
    desc: 'Storefront build-outs, shopping center tenant spaces, and retail showroom improvements designed to maximize customer experience and selling floor efficiency.',
    details:
      'Retail tenant improvements in Charlotte require a contractor who understands that time is money in the most literal sense. Every day a retail space sits under construction is a day without revenue, which makes schedule adherence the single most important factor in retail TI projects. We specialize in fast-track retail tenant build-outs that get Charlotte businesses open on time. Retail TI scopes typically include custom storefront modifications within shopping center design guidelines, interior demising walls and ceiling treatments, specialty lighting designed to highlight merchandise and create ambiance, fitting room construction with proper ventilation and lighting, point-of-sale counter and checkout area builds, stockroom and backroom optimization, ADA-compliant entrances and restrooms, and signage coordination with landlord and municipal requirements. Charlotte retail corridors along South Boulevard, Park Road, and in suburban shopping centers like Waverly, Blakeney, and Rea Farms each have unique landlord requirements and tenant design criteria that we navigate regularly. Shopping center landlords often require architectural review board approval before construction begins, and we prepare submission packages that meet these requirements to avoid costly redesigns. Our team coordinates with franchise operations teams, retail designers, fixture vendors, and IT integrators to ensure every element is in place for a successful opening day.',
    cost: '$65-$200/sq ft',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Tenant Improvements',
    slug: 'restaurant-ti',
    desc: 'Full-service restaurant build-outs including commercial kitchens, dining areas, bar installations, outdoor patios, and health department compliance infrastructure.',
    details:
      'Restaurant tenant improvements are among the most complex and expensive TI projects in commercial construction. The kitchen alone involves grease trap installation or connection to existing building grease interceptors, Type I and Type II hood ventilation systems with make-up air units, fire suppression systems above cooking equipment, walk-in cooler and freezer construction with proper drainage and electrical service, three-compartment sinks with grease traps, hand wash stations at code-required locations, and floor drains with proper slope throughout the kitchen area. Beyond the kitchen, restaurant TI includes bar plumbing with glycol beer line systems, ice machine infrastructure, dining room lighting and acoustic design, HVAC systems sized for cooking heat loads, outdoor patio construction with weather protection, and restroom facilities sized for the occupant load. Mecklenburg County health department inspections add an additional layer of compliance that must be designed into the project from day one. We coordinate with kitchen equipment vendors, hood manufacturers, fire suppression contractors, and refrigeration specialists to ensure every system is integrated properly. Restaurant TI projects in Charlotte typically take 14 to 22 weeks from permit issuance to certificate of occupancy, with landlord delivery of the warm shell adding additional lead time before construction can begin. Our experience with Charlotte restaurant build-outs means we know exactly what the health department inspector will look for and we design accordingly.',
    cost: '$150-$375/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Healthcare Tenant Improvements',
    slug: 'medical-ti',
    desc: 'Healthcare facility build-outs meeting strict compliance standards for medical offices, dental practices, urgent care clinics, veterinary offices, and specialty practices.',
    details:
      'Medical tenant improvements require specialized knowledge of healthcare construction standards, infection control protocols, and medical equipment infrastructure that most general contractors lack. Our team brings direct experience building urgent care clinics, dental practices, physical therapy offices, chiropractic offices, dermatology clinics, ophthalmology practices, and veterinary facilities across the Charlotte metro area. Medical TI scopes include specialized HVAC systems with air pressure relationships between treatment rooms, corridors, and waiting areas to prevent cross-contamination. Dental and surgical suites require dedicated vacuum and compressed air piping, medical gas systems for practices that use nitrous oxide, and specialized plumbing with backflow prevention devices. Radiology suites need lead-lined walls and doors with proper shielding calculations. Examination rooms must meet minimum size requirements with ADA-compliant maneuvering clearances, and clinical areas require material selections that meet infection control standards including seamless flooring, antimicrobial countertops, and washable wall surfaces. We coordinate with medical equipment vendors to ensure that electrical circuits, data connections, plumbing rough-ins, and structural supports are installed during the rough-in phase, long before the equipment arrives. This planning prevents costly field modifications that delay projects and exceed budgets. Medical TI projects in Charlotte typically require 10 to 18 weeks of construction time, with an additional 4 to 8 weeks for permitting and equipment procurement.',
    cost: '$125-$325/sq ft',
  },
  {
    icon: Warehouse,
    title: 'Industrial & Warehouse Tenant Improvements',
    slug: 'industrial-warehouse-ti',
    desc: 'Office build-outs within warehouse shells, climate-controlled zones, clean rooms, loading dock modifications, and light manufacturing space conversions.',
    details:
      'Industrial and warehouse tenant improvements serve a rapidly growing segment of the Charlotte commercial market, driven by the logistics, distribution, and light manufacturing sectors expanding along the I-77 and I-85 corridors. These TI projects range from simple office build-outs within a warehouse shell to complex manufacturing environments requiring specialized electrical service, compressed air systems, and clean room construction. Standard industrial TI scopes include demising walls between office and warehouse areas with proper fire-rated assemblies, drop ceiling and HVAC installation for the office portion, restrooms and break room facilities, climate-controlled storage areas for temperature-sensitive inventory, mezzanine construction for additional square footage within the existing building envelope, dock leveler and loading dock modifications, security systems including access control and surveillance, and three-phase electrical upgrades for machinery and equipment. Industrial landlords in Charlotte typically provide lower TI allowances than office landlords because the base building is simpler and tenant build-out requirements vary dramatically from one user to the next. We help industrial tenants prioritize their TI spending on infrastructure improvements that directly support their operations. For manufacturing tenants, we install epoxy or polished concrete floors, overhead crane support structures, dust collection systems, and process piping. Clean room build-outs for pharmaceutical, electronics, or food-grade manufacturing require specialized HVAC with HEPA filtration, positive or negative air pressure, and smooth, cleanable surfaces throughout. Industrial TI projects typically take 6 to 14 weeks depending on complexity.',
    cost: '$35-$160/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Lease Review & TI Allowance Assessment',
    desc: 'Before any design work begins, we review your lease agreement, work letter, and TI allowance terms. We identify what the landlord is responsible for delivering as base building condition, what the TI allowance covers versus what the tenant funds out of pocket, and any landlord-imposed construction requirements such as approved contractor lists, insurance minimums, or construction hour restrictions. This early review prevents expensive surprises during construction and gives you a clear picture of your total project budget before you commit to a scope of work.',
  },
  {
    step: '02',
    title: 'Initial Site Assessment & Existing Conditions Survey',
    desc: 'Our team visits the space to document existing conditions including structural elements, ceiling heights, column locations, electrical panel capacity, plumbing locations, HVAC system type and capacity, fire protection coverage, and ADA accessibility. For second-generation spaces, we identify what can be reused versus what must be demolished and rebuilt. This survey forms the foundation for accurate cost estimating and prevents change orders caused by undocumented conditions discovered during construction.',
  },
  {
    step: '03',
    title: 'Space Planning & Conceptual Layout',
    desc: 'We work with your architect and design team on conceptual floor plans based on your operational requirements, employee count, departmental adjacencies, growth projections, and workflow patterns. We consider natural light, ADA accessibility, building code egress requirements, and the most efficient use of every square foot within your leased footprint.',
  },
  {
    step: '04',
    title: 'Preliminary Budget & TI Allowance Alignment',
    desc: 'We prepare a preliminary construction budget based on the conceptual layout and align it with your TI allowance. If the projected cost exceeds the allowance, we identify value engineering opportunities, phasing options, or scope adjustments that bring the project within budget without sacrificing the improvements that matter most to your business operations. This step often happens in parallel with lease negotiations, giving you real construction cost data to support requests for additional TI allowance from the landlord.',
  },
  {
    step: '05',
    title: 'Design Development & Finish Selections',
    desc: 'Working from the architect&rsquo;s construction drawings, mechanical engineering plans, electrical layouts, and finish schedules, you select flooring materials, paint colors, countertop surfaces, lighting fixtures, hardware, and specialty items — documented so the estimate reflects the exact scope.',
  },
  {
    step: '06',
    title: 'Landlord Approval & Building Management Coordination',
    desc: 'We submit the completed construction documents to the landlord and building management for approval. This process varies by building but typically includes architectural drawing review, mechanical and electrical plan review, insurance certificate submission, and contractor registration. For Class A buildings, this process can take two to four weeks and may involve multiple rounds of comments and revisions. We manage the entire approval process and maintain direct communication with the property management team to resolve questions quickly and keep the project timeline on track.',
  },
  {
    step: '07',
    title: 'Permitting & Regulatory Approvals',
    desc: 'We prepare and submit all permit applications to Mecklenburg County Code Enforcement or the relevant jurisdiction. This includes building permits, mechanical permits, electrical permits, plumbing permits, and fire alarm permits. For spaces involving change of occupancy, additional code requirements may apply. We coordinate with plan reviewers to address comments promptly and schedule pre-construction meetings with building officials when the project scope warrants it. Permitting in Mecklenburg County typically takes 3 to 6 weeks for commercial TI projects.',
  },
  {
    step: '08',
    title: 'Pre-Construction Coordination & Material Procurement',
    desc: 'Before construction begins, we finalize the project schedule, order long-lead materials such as custom millwork, specialty lighting, glass partitions, and mechanical equipment. We confirm subcontractor availability, develop a phasing plan if the space is partially occupied or adjacent to occupied tenants, and establish site logistics including material staging, debris removal paths, and dust containment protocols. We hold a pre-construction meeting with you, the landlord representative, and key subcontractors to align expectations and communication protocols.',
  },
  {
    step: '09',
    title: 'Construction & Weekly Progress Updates',
    desc: 'Construction begins with demolition and rough-in work for framing, electrical, plumbing, HVAC, and fire protection. We then progress through insulation, drywall, ceiling grid installation, flooring, painting, millwork, and fixture installation. Your dedicated project manager provides weekly progress reports with photos, schedule updates, and budget tracking. We coordinate all required inspections with local building officials at each milestone. Most disruptive work is scheduled during off-hours when possible, and dust barriers and negative air containment protect adjacent occupied spaces throughout the construction phase.',
  },
  {
    step: '10',
    title: 'Punch List, Move-In Coordination & Project Close-Out',
    desc: 'After major construction is complete, we conduct a thorough punch list walk-through with you and the landlord representative to identify any items needing adjustment, touch-up, or correction. Our team addresses every item promptly. We coordinate the furniture installation schedule, IT move-in, and any landlord-required close-out documentation. You receive as-built drawings, equipment warranties, maintenance manuals, and final lien waivers. We prepare the TI reimbursement package with all required invoices and documentation so you can collect your TI allowance from the landlord without delays. Our one-year workmanship warranty covers all construction performed by our team.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Our military background instills discipline, accountability, and an unwavering commitment to delivering on every promise we make. When we give you a timeline and a budget for your tenant improvement project, we stand behind them. That reliability is especially important in TI projects where lease commencement dates and rent obligations create hard deadlines that cannot slip without financial consequences.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to every tenant improvement project. We have completed commercial TI projects across the Charlotte metro area, from 1,200 square foot dental suites to 40,000 square foot corporate headquarters. This depth of experience means we anticipate problems before they happen, understand the nuances of working within occupied buildings, and deliver consistently high-quality results regardless of project size or complexity.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve tenants throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, Tega Cay, and the Lake Norman corridor. Our dual-state licensing is particularly valuable for multi-location businesses that need a single TI contractor to handle build-outs on both sides of the state line with consistent quality, pricing, and project management.',
  },
  {
    icon: DollarSign,
    title: 'TI Allowance Maximization',
    desc: 'We understand how TI allowances work in the Charlotte commercial real estate market and we help tenants get the maximum value from every dollar. Our team provides preliminary construction budgets during lease negotiations so you have real cost data to support TI allowance requests. We structure scopes of work, billing, and documentation to align with landlord reimbursement requirements, ensuring you collect your full TI allowance without delays or disputes.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our tenant improvement projects. From energy-efficient LED lighting and high-performance HVAC controls to low-VOC paints, recycled content materials, and water-efficient fixtures, we help tenants reduce operating costs and environmental impact. For tenants pursuing LEED certification for their interior space, our USGBC membership and green building knowledge provide a significant advantage.',
  },
  {
    icon: Handshake,
    title: 'Landlord Relationship Network',
    desc: 'We have established working relationships with many of Charlotte\'s largest commercial landlords, property management companies, and building engineers. These relationships streamline the approval process, reduce construction coordination friction, and help resolve building-related issues quickly. When your TI contractor already knows the building manager, the property engineer, and the security team, your project runs more smoothly from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build tenant improvement client receives weekly progress reports with photos, a dedicated project manager as their single point of contact, and immediate notification of any issues that could affect timeline or budget. We believe informed tenants and landlords make better decisions, and we work to ensure all parties always know exactly where the project stands. Our close-out documentation and TI reimbursement packages are thorough, organized, and designed to make the financial close-out as smooth as the construction.',
  },
];

const costTiers = [
  {
    type: 'Cosmetic Refresh / Light TI',
    range: '$25-$50/sq ft',
    desc: 'Paint, new carpet or LVP flooring, minor lighting upgrades, and cosmetic updates without structural changes. Ideal for tenants moving into a space that already has a functional layout and simply needs a fresh appearance. Common in Class B suburban offices where the previous tenant left the space in good condition.',
  },
  {
    type: 'Standard Office TI (Class B)',
    range: '$45-$100/sq ft',
    desc: 'New interior walls and partitions, upgraded LED lighting with controls, commercial-grade flooring, ceiling grid replacement, HVAC modifications for new layout, and basic technology infrastructure. This is the most common TI scope in the Charlotte market, covering the majority of suburban and mid-rise office tenant build-outs.',
  },
  {
    type: 'Premium Office TI (Class A)',
    range: '$85-$225/sq ft',
    desc: 'Executive-level finishes including glass partition walls, custom millwork, designer lighting, premium flooring such as hardwood or large-format porcelain tile, integrated AV conference rooms, and sophisticated HVAC zoning. Class A buildings in Uptown Charlotte and South End typically see TI costs in this range.',
  },
  {
    type: 'Retail Tenant Build-Out',
    range: '$65-$200/sq ft',
    desc: 'Storefront modifications, custom display fixtures, fitting rooms, specialty retail lighting, point-of-sale infrastructure, stockroom construction, and branded architectural elements. Cost varies significantly based on whether the space is delivered as a warm shell or cold shell by the landlord.',
  },
  {
    type: 'Restaurant Tenant Improvement',
    range: '$150-$375/sq ft',
    desc: 'Commercial kitchen with hood ventilation and fire suppression, grease interceptor, walk-in cooler and freezer, bar plumbing, dining room finishes, HVAC sized for kitchen heat loads, and outdoor patio construction. Restaurant TI is the most expensive category due to specialized mechanical, plumbing, and fire protection requirements.',
  },
  {
    type: 'Medical & Healthcare TI',
    range: '$125-$325/sq ft',
    desc: 'Specialized HVAC with air pressure controls, medical gas piping, lead-lined walls for radiology, ADA-compliant exam rooms and corridors, infection control materials, sterilization room infrastructure, and medical equipment rough-ins. Cost depends heavily on the type of practice and equipment requirements.',
  },
  {
    type: 'Industrial & Warehouse TI',
    range: '$35-$160/sq ft',
    desc: 'Office build-out within warehouse shell, climate-controlled storage zones, restroom and break room construction, electrical service upgrades for equipment, dock modifications, and mezzanine construction. Simple office carve-outs are at the low end while clean room and manufacturing build-outs push costs higher.',
  },
];

const faqs = [
  {
    question: 'What is a tenant improvement (TI) and how does it differ from a commercial upfit?',
    answer:
      'A tenant improvement is a construction project that customizes a leased commercial space to meet the specific needs of the tenant occupying it. The term is closely related to commercial upfit, and in Charlotte the two terms are often used interchangeably. The primary distinction is that tenant improvements are specifically tied to a lease agreement, with the scope, budget, and timeline governed by the lease work letter and tenant improvement allowance. A commercial upfit can refer to any renovation of a commercial space, whether the occupant is a tenant or an owner. In practice, the construction process is identical. The key difference is the financial and contractual framework: TI projects involve landlord coordination, TI allowance reimbursement documentation, and compliance with building management construction rules that owner-occupied upfits do not require.',
  },
  {
    question: 'What is a TI allowance and how much can I expect in Charlotte?',
    answer:
      'A tenant improvement allowance is a dollar amount per square foot that a commercial landlord contributes toward the cost of building out a leased space for a new tenant. The TI allowance is negotiated as part of the lease and is factored into the overall lease economics, meaning a higher TI allowance is often offset by higher base rent over the lease term. In Charlotte\'s current commercial market, typical TI allowances range from $15 to $25 per square foot for Class B suburban office space, $30 to $60 per square foot for Class A Uptown and South End office space, $20 to $40 per square foot for retail spaces in established shopping centers, and $5 to $20 per square foot for industrial and warehouse spaces. These ranges vary based on lease term length, tenant creditworthiness, current vacancy rates, and the landlord\'s motivation to fill the space. Longer lease terms and stronger tenant credit typically command higher TI allowances.',
  },
  {
    question: 'Who pays for tenant improvements: the landlord or the tenant?',
    answer:
      'Tenant improvement costs are shared between the landlord and the tenant based on the TI allowance negotiated in the lease. The landlord provides the TI allowance, which covers a portion of the build-out cost. The tenant is responsible for any costs that exceed the TI allowance, often referred to as the tenant\'s out-of-pocket contribution or above-allowance costs. In some cases, the landlord will increase the TI allowance in exchange for a longer lease term or higher base rent, which effectively amortizes the additional TI cost over the life of the lease. Some leases are structured as turnkey agreements where the landlord manages the entire build-out to a specified design, eliminating the TI allowance concept entirely. Understanding these financial structures before signing the lease is critical, and we provide preliminary construction budgets during lease negotiations to help tenants make informed decisions about how much TI allowance they need to request.',
  },
  {
    question: 'How long does a tenant improvement project take in Charlotte?',
    answer:
      'Tenant improvement project timelines in Charlotte depend on the scope of work, space type, and permitting requirements. Cosmetic refreshes involving paint, flooring, and minor updates can complete in 3 to 5 weeks. Standard office TI projects with new walls, electrical, and finishes take 6 to 14 weeks of construction. Premium Class A office build-outs with custom millwork and complex mechanical systems require 10 to 18 weeks. Restaurant TI projects are the longest at 14 to 22 weeks due to kitchen complexity and health department inspections. Medical facility TI projects require 10 to 18 weeks. In addition to construction time, you should plan for 3 to 6 weeks of permitting through Mecklenburg County, 2 to 4 weeks of landlord approval in Class A buildings, and 4 to 8 weeks for design and procurement. We provide a detailed schedule during the planning phase and recommend starting the TI process as early as possible after lease signing to ensure the space is ready by your lease commencement date.',
  },
  {
    question: 'Do I need permits for tenant improvements in Charlotte, NC?',
    answer:
      'Yes, most tenant improvement projects in Charlotte require building permits from Mecklenburg County Code Enforcement. Any work involving structural modifications, new wall construction, electrical changes, plumbing alterations, HVAC modifications, or fire alarm system updates requires a permit. Even projects that seem cosmetic may trigger permit requirements if they affect egress paths, change the occupancy classification, or modify fire-rated assemblies. Permit review times in Mecklenburg County currently range from 3 to 6 weeks for commercial TI projects, though expedited review is available for an additional fee. We handle the entire permitting process from preparing code-compliant construction documents to submitting applications, responding to plan review comments, and scheduling all required inspections throughout construction. Our familiarity with Mecklenburg County code requirements and plan reviewers helps us prepare submittals that minimize the number of review cycles needed for approval.',
  },
  {
    question: 'What does the landlord provide as base building condition before my TI starts?',
    answer:
      'The base building condition, sometimes called the shell condition or warm shell, defines what the landlord delivers before tenant improvement construction begins. This is specified in the lease work letter and varies by building. A typical warm shell delivery in Charlotte includes the building envelope with roof, exterior walls, and windows, a concrete slab floor, stubbed-in plumbing connections for restrooms, base building HVAC with main distribution but no tenant ductwork, electrical service to the floor with a tenant electrical panel, fire sprinkler main loop with heads on a standard spacing that may not match the final ceiling layout, and a fire alarm notification panel. Some landlords deliver a cold shell, which is essentially a bare structure without any mechanical, electrical, or plumbing provisions. Cold shell TI costs are significantly higher because the tenant must fund all systems from scratch. We review the work letter during lease negotiations to identify exactly what the landlord is providing and what the tenant must fund, preventing surprises that could blow the TI budget.',
  },
  {
    question: 'How do I negotiate a higher TI allowance from my landlord?',
    answer:
      'Negotiating a favorable TI allowance requires preparation and real cost data. The single most effective strategy is to have your TI contractor provide a preliminary construction budget before lease negotiations begin. This gives you a credible, third-party cost estimate to present to the landlord, which is far more persuasive than an arbitrary number. Beyond the initial budget, several factors influence TI allowance negotiations: lease term length is the most powerful lever, as landlords are willing to invest more in tenants who commit to longer terms. Tenant creditworthiness and brand reputation matter because landlords want stable, long-term tenants. Current market vacancy rates affect landlord flexibility, and buildings with higher vacancy are more willing to offer generous TI packages. You can also negotiate for the landlord to perform specific base building upgrades outside of the TI allowance, such as restroom renovations, elevator lobby updates, or HVAC capacity improvements. We regularly assist Charlotte tenants with pre-lease budgeting and can provide multiple scope scenarios at different budget levels to support your negotiation strategy.',
  },
  {
    question: 'What items are typically included in and excluded from TI allowance reimbursement?',
    answer:
      'TI allowance reimbursement rules vary by lease, but common inclusions are hard construction costs such as demolition, framing, drywall, electrical, plumbing, HVAC, fire protection, flooring, painting, ceiling, and millwork. Many leases also cover soft costs including architectural and engineering fees, permit fees, and construction management. Items typically excluded from TI reimbursement include furniture, fixtures, and equipment that are not permanently attached to the space. This means desks, chairs, modular workstations, and freestanding equipment are usually the tenant\'s responsibility outside of the TI allowance. Technology infrastructure such as computers, servers, phone systems, and audiovisual equipment is also typically excluded, though the structured cabling and electrical infrastructure to support these systems is often included. Signage may or may not be included depending on the lease. Some landlords exclude certain soft costs like space planning, project management fees, or move coordination. We structure our billing and documentation to clearly separate reimbursable TI costs from non-reimbursable items so you can maximize your allowance collection.',
  },
  {
    question: 'Does my landlord need to approve my tenant improvement plans?',
    answer:
      'Yes, virtually every commercial lease in Charlotte requires landlord approval of tenant improvement plans before construction can begin. The approval process varies by building class and landlord. Class A office buildings typically require submission of full architectural and engineering drawings to the building management team, with a review period of two to four weeks that may involve multiple rounds of comments. The landlord reviews for compliance with building standards, impact on base building systems, aesthetic consistency with common areas, and structural impact on the building. Class B buildings and retail centers usually have a simpler approval process focused on ensuring the TI work does not adversely affect other tenants, the building structure, or base building systems. Restaurant TI approvals tend to be more involved due to the impact of kitchen ventilation, grease traps, and increased utility demand on the building.',
  },
  {
    question: 'Can I reuse existing improvements from the previous tenant to save money?',
    answer:
      'Reusing elements from a previous tenant\'s build-out is one of the most effective ways to reduce TI costs and keep a project within the TI allowance. Common items that can often be reused include existing wall locations that happen to work with your layout, ceiling grid and tile that is in good condition, HVAC ductwork and diffusers that serve the new layout, plumbing rough-ins for restrooms and break rooms in their current locations, electrical panels and circuits that provide adequate capacity, and fire sprinkler heads that align with the new ceiling plan. However, reuse requires careful assessment during the initial site survey. Walls that appear structurally sound may have outdated electrical wiring inside them. Ceiling tiles may contain asbestos in older buildings. HVAC systems designed for the previous tenant\'s layout may not provide adequate air distribution for your configuration. Our team evaluates every reuse opportunity during the site assessment and provides honest recommendations about which elements are worth keeping versus which ones should be replaced to avoid problems after you move in.',
  },
  {
    question: 'What areas does We Build serve for tenant improvement projects?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for tenant improvement projects. Our primary service area includes Charlotte, South Charlotte, Uptown, South End, NoDa, University City, Ballantyne, and surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman corridor communities of Cornelius, Davidson, Huntersville, and Mooresville. Our general contractor licenses in both North Carolina and South Carolina allow us to work on both sides of the state line, which is especially convenient for businesses with multiple locations across the Charlotte metro.',
  },
  {
    question: 'How much does a Class A office tenant improvement cost per square foot in Uptown Charlotte?',
    answer:
      'Class A office tenant improvements in Uptown Charlotte typically cost $50 to $120 per square foot for construction, depending on the level of finish, mechanical complexity, and custom features. A standard open-plan office with perimeter offices and a break room runs $50 to $75 per square foot. Executive suites with custom millwork, glass-front offices, and premium finishes range from $80 to $120 per square foot. High-end law firm or financial services build-outs with conference centers and specialized AV infrastructure can exceed $120 per square foot. These costs are in addition to soft costs like design fees and furniture. We provide detailed line-item estimates during lease negotiation so you can request the right TI allowance from your landlord.',
  },
  {
    question: 'How does a tenant improvement in South End compare to one in Ballantyne or University City?',
    answer:
      'Construction costs per square foot are comparable across these Charlotte submarkets because material and labor costs are market-wide. The differences are in building type, landlord requirements, and base building condition. South End buildings tend to be newer Class A mixed-use with modern base building systems, streamlined landlord approval, and warm shell deliveries. Ballantyne office parks are typically suburban Class A or B with established building management teams and standard approval processes. University City spaces vary more widely in age and condition, with some offering cost savings through lower lease rates and simpler landlord requirements. We have completed TI projects in all three submarkets and tailor our approach to each building management team.',
  },
  {
    question: 'What is the difference between a tenant improvement and a commercial renovation?',
    answer:
      'A tenant improvement is construction performed within a leased commercial space, governed by the lease agreement, work letter, and TI allowance. The landlord owns the building and typically retains ownership of all permanent improvements upon lease expiration. A commercial renovation is construction performed by a property owner on their own building, with no landlord approval process, no TI allowance structure, and full ownership of all improvements. The physical construction work may be identical, but the contractual framework, documentation requirements, and financial structure are different. We Build handles both tenant improvements and owner-occupied commercial renovations throughout the Charlotte metro area and structures our process to match whichever arrangement applies to your project.',
  },
];

export default function TenantImprovementsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Tenant Improvement Contractor Charlotte NC',
            'Expert tenant improvement contractor in Charlotte, NC. Class A & B office TI, retail tenant build-outs, restaurant TI, medical TI, industrial leasehold improvements. TI allowance maximization, landlord coordination. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/tenant-improvements'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Tenant Improvements' },
          ]),
        ]}
      />

      <PageHero
        title="Tenant Improvement Contractor Charlotte NC"
        subtitle="Expert TI contractor for office, retail, restaurant, medical & industrial tenant build-outs across Charlotte, Fort Mill & Lake Norman"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Tenant Improvements' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tenant Improvement Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A tenant improvement transforms a leased commercial space into a fully functional
                environment tailored to your specific business operations. Whether you are moving into
                a new office in Uptown Charlotte, building out a retail storefront in a South End
                shopping center, or converting a warehouse shell along the I-77 corridor into a
                modern workplace, the tenant improvement process turns raw or previously occupied
                square footage into a space that supports your team, your customers, and your growth.
                Unlike ground-up{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial construction
                </Link>, tenant improvements work within an existing building structure, making them
                significantly faster, more cost-effective, and less disruptive than new construction
                while still allowing extensive customization of the interior environment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s commercial real estate market continues to be one of the most dynamic
                in the Southeast, with over 50 million square feet of office space, a rapidly expanding
                medical corridor, a thriving restaurant scene, and robust retail and industrial sectors
                that generate steady demand for tenant improvement contractors who understand the local
                market. The TI allowance is a central element of nearly every commercial lease in
                Charlotte, and navigating the relationship between landlord-provided allowances,
                construction costs, work letter requirements, and building management approval processes
                requires a contractor with deep experience in the Charlotte commercial real estate
                ecosystem. The difference between a contractor who understands TI allowance structures
                and one who does not can mean tens of thousands of dollars left on the table or a
                build-out that exceeds budget before the first wall goes up.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contractor
                </Link>{' '}
                with over 60 years of combined construction experience and a track record of delivering
                tenant improvement projects across the Charlotte metro area. From Class A executive
                suites in Uptown high-rises to medical clinic build-outs in suburban office parks, we
                bring the same level of professionalism, budget discipline, and schedule accountability
                to every TI project. We work closely with your architect and design team, handling
                everything from coordinating space planning and finish selection to landlord coordination,
                permitting, construction, TI reimbursement documentation, and final handoff. Licensed in
                both North Carolina and South Carolina, we serve Charlotte
                and the surrounding communities including{' '}
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
                { icon: DollarSign, title: 'TI Allowance Experts', desc: 'We help tenants maximize their TI allowance with preliminary budgets during lease negotiations, structured billing for reimbursement, and documentation that meets landlord requirements.' },
                { icon: Clock, title: 'Meet Your Lease Date', desc: 'TI projects run on lease commencement deadlines. Our team builds detailed schedules that account for landlord approvals, permitting, and construction to ensure you move in on time.' },
                { icon: Key, title: 'Landlord Coordination', desc: 'We manage the entire landlord approval process including plan submissions, building management coordination, insurance requirements, and construction rule compliance.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and quality. When we commit to a lease commencement date, we deliver.' },
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

      {/* Types of Tenant Improvements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              TI Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Tenant Improvements We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every tenant improvement project has unique requirements driven by the type of business,
              the building class, landlord specifications, and the TI allowance budget. We bring
              specialized experience to each project type, delivering spaces that support your
              operations and reflect your brand within the financial framework of your lease.
            </p>
          </div>
          <div className="space-y-8">
            {tiTypes.map((type) => (
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

      {/* TI Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Tenant Improvement Process: 10 Steps from Lease Signing to Move-In
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent process designed specifically for tenant improvement projects
              where lease commencement dates, TI allowance budgets, and landlord coordination create
              unique constraints that require experienced management. Every step includes clear
              communication so you, your broker, and your landlord always know exactly where the
              project stands.
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
              Why Choose We Build for Your Tenant Improvement Project
            </h2>
            <p className="text-muted-foreground">
              Choosing the right TI contractor is the most important decision in any tenant
              improvement project. The wrong contractor can miss your lease commencement date,
              exceed your TI allowance, create disputes with your landlord, and deliver a space
              that does not match your vision. Here is what sets We Build apart from other
              tenant improvement contractors in Charlotte.
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

      {/* TI Allowance Deep Dive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                TI Allowance Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Tenant Improvement Allowance Guide for Charlotte Businesses
              </h2>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Understanding TI Allowances in Charlotte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A tenant improvement allowance, commonly referred to as a TI allowance, build-out
                  allowance, or leasehold improvement allowance, is a negotiated dollar amount that a
                  commercial landlord contributes toward the cost of customizing a leased space for a
                  new tenant. The allowance is expressed as a dollar amount per rentable square foot
                  and is a critical component of the overall lease economics. For example, a $50 per
                  square foot TI allowance on a 5,000 square foot space provides $250,000 toward the
                  tenant build-out. The TI allowance is not free money from the landlord. It is factored
                  into the lease economics, meaning a higher TI allowance is typically offset by higher
                  base rent over the lease term. Understanding this relationship is essential for making
                  informed lease decisions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Charlotte TI Allowance Rates by Building Class</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Class A Office (Uptown / South End)',
                      range: '$35-$65/sq ft',
                      desc: 'Trophy and Class A buildings in Uptown Charlotte and South End offer the highest TI allowances in the market to attract premium tenants. Longer lease terms of 7 to 10 years can push allowances to the higher end of this range. Buildings competing for tenants in a high-vacancy environment may offer even more generous packages.',
                    },
                    {
                      title: 'Class B Office (Suburban / I-485 Corridor)',
                      range: '$15-$35/sq ft',
                      desc: 'Suburban office parks and Class B mid-rise buildings along the I-485 corridor, University City, and Matthews typically offer moderate TI allowances. These spaces often have lower base rent, which limits the landlord\'s ability to amortize large TI investments. Five-year lease terms are standard in this segment.',
                    },
                    {
                      title: 'Retail (Shopping Centers & Inline)',
                      range: '$20-$50/sq ft',
                      desc: 'Retail TI allowances in Charlotte vary dramatically based on the shopping center, the tenant\'s brand strength, and the lease term. National credit tenants signing long-term leases at premium locations receive the highest allowances. Local tenants in neighborhood centers may receive minimal TI contributions from the landlord.',
                    },
                    {
                      title: 'Industrial & Warehouse',
                      range: '$5-$25/sq ft',
                      desc: 'Industrial landlords provide the lowest TI allowances because warehouse and flex space requires minimal build-out compared to office or retail. However, the per-square-foot cost of industrial TI is also lower, so the allowance often covers a larger percentage of the total project cost than it would in an office environment.',
                    },
                  ].map((tier) => (
                    <Card key={tier.title}>
                      <CardContent className="p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="font-semibold">{tier.title}</h4>
                          <span className="text-primary font-semibold text-sm">{tier.range}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{tier.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">How to Negotiate a Better TI Allowance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Get a Contractor Estimate Before Signing',
                      desc: 'Having your TI contractor provide a preliminary construction budget during lease negotiations gives you a credible, third-party cost estimate to present to the landlord. This is far more persuasive than requesting an arbitrary dollar amount and demonstrates that you have done your homework.',
                    },
                    {
                      title: 'Leverage Lease Term Length',
                      desc: 'Lease term is the single most powerful negotiating lever for TI allowance. Landlords invest more in tenants who commit to longer terms because the TI cost is amortized over more months of rent. Extending from a 5-year to a 7-year term can unlock significantly more TI dollars.',
                    },
                    {
                      title: 'Negotiate the Work Letter Carefully',
                      desc: 'The lease work letter defines what the landlord delivers as base building condition and what the TI allowance covers. Ensure the work letter clearly specifies landlord-provided items like restroom cores, base HVAC, electrical panels, and fire protection so you are not spending TI allowance on items the landlord should provide.',
                    },
                    {
                      title: 'Structure Billing for Maximum Reimbursement',
                      desc: 'We structure our invoicing, lien waivers, and payment documentation to align with landlord reimbursement requirements. Most landlords require detailed cost breakdowns, proof of payment, and lien waivers before releasing TI funds. Proper documentation prevents delays in collecting your allowance.',
                    },
                  ].map((tip) => (
                    <Card key={tip.title}>
                      <CardContent className="p-5">
                        <h4 className="font-semibold mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What Is Included and Excluded from TI Allowance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                      Typically Included
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Demolition and debris removal</li>
                      <li>Framing, drywall, and interior partitions</li>
                      <li>Electrical wiring, outlets, and lighting</li>
                      <li>Plumbing modifications and fixtures</li>
                      <li>HVAC ductwork, controls, and modifications</li>
                      <li>Fire sprinkler and fire alarm modifications</li>
                      <li>Flooring, painting, and ceiling work</li>
                      <li>Millwork, cabinetry, and countertops</li>
                      <li>Architectural and engineering fees</li>
                      <li>Building permit and inspection fees</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Scale className="h-5 w-5 text-primary" aria-hidden="true" />
                      Typically Excluded
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Furniture, desks, and workstations</li>
                      <li>Computers, servers, and IT hardware</li>
                      <li>Phone systems and AV equipment</li>
                      <li>Freestanding equipment and appliances</li>
                      <li>Moving and relocation costs</li>
                      <li>Signage (varies by lease)</li>
                      <li>Window treatments and blinds</li>
                      <li>Security deposits and rent</li>
                      <li>Inventory and business supplies</li>
                      <li>Marketing and grand opening costs</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We Build has extensive experience working with Charlotte commercial landlords and
                  property management companies on tenant improvement reimbursement. We understand the
                  standard documentation requirements and structure our billing to ensure tenants collect
                  their full TI allowance without delays. If you are entering a new lease and need help
                  understanding how much your tenant improvement will cost,{' '}
                  <Link href="/contact" className="text-primary hover:underline">
                    contact us for a preliminary estimate
                  </Link>{' '}
                  that you can use during lease negotiations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Tenant Improvement Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tenant improvement costs in Charlotte depend on the type of space, building class,
                scope of work, existing conditions, and finish level. Below are typical cost ranges
                based on our recent TI projects in the Charlotte metro area. Every project is
                different, and we provide detailed, line-item estimates after an initial site visit
                so you know exactly what every dollar covers before construction begins.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Tenant Improvement Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Base building condition:</strong> A warm shell delivery with HVAC, electrical, and plumbing stubbed in costs less to build out than a cold shell where all systems must be installed from scratch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Second-generation reuse:</strong> Reusing walls, ceiling, HVAC, and plumbing from a previous tenant can reduce costs by 20 to 40 percent compared to a ground-up build-out in a shell space.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Finish level:</strong> Standard commercial finishes versus premium materials like natural stone, glass partition walls, custom millwork, and designer lighting can shift costs significantly within the same space type.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Mechanical complexity:</strong> Spaces requiring specialized HVAC, medical gas, commercial kitchen ventilation, or clean room environments cost substantially more per square foot than standard office environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Building class requirements:</strong> Class A buildings often have stricter construction standards, designated work hours, and coordination requirements that add cost compared to building out the same scope in a Class B property.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Timeline acceleration:</strong> Fast-track schedules requiring overtime labor, expedited material procurement, or multiple work shifts increase total project cost by 10 to 20 percent.</span>
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
                Tenant Improvement Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte tenants, landlords, and brokers
                ask about tenant improvements, TI allowances, timelines, permits, costs, and the
                build-out process.
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

      {/* Resources Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Tenant Improvement Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and related services for more information on tenant improvements
              and commercial construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Charlotte NC', href: '/services/commercial-upfits', type: 'service' },
              { title: 'Office Buildouts Charlotte NC', href: '/services/office-buildouts', type: 'service' },
              { title: 'Commercial Renovation Charlotte NC', href: '/services/commercial-renovation', type: 'service' },
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'service' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Related Service
                  </span>
                  <h3 className="font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
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
            Ready to Start Your Tenant Improvement Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a Class A office build-out, retail tenant improvement,
            restaurant TI, medical facility build-out, or industrial leasehold improvement in
            Charlotte, We Build has the experience, landlord relationships, and local knowledge
            to deliver your project on time, within your TI allowance, and to the highest
            standard of quality.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site visit and preliminary TI budget. We serve Charlotte,{' '}
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
