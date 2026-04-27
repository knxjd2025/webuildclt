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
  Users,
  Stethoscope,
  Scale,
  Laptop,
  Crown,
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
  Lightbulb,
  BadgeCheck,
  HeartHandshake,
  Coffee,
  Heart,
  MonitorSmartphone,
  Armchair,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Office Buildout Charlotte NC | Corporate & Co-Working',
  description:
    'Office buildout contractor in Charlotte NC, Raleigh, Durham, RTP. Corporate HQs, co-working, medical office, law firms, life sciences. Hybrid-ready designs.',
  keywords: [
    'office buildout Charlotte NC',
    'office buildout near me',
    'office buildout contractor Charlotte NC',
    'office renovation Charlotte NC',
    'office construction Charlotte NC',
    'office construction near me',
    'office remodel Charlotte',
    'corporate office renovation Charlotte',
    'co-working space buildout Charlotte',
    'office space build out Charlotte NC',
    'medical office buildout Charlotte',
    'law firm office renovation Charlotte NC',
    'tech office buildout Charlotte',
    'executive suite renovation Charlotte NC',
    'office tenant improvement Charlotte',
    'office buildout Charlotte North Carolina',
    'office buildout fort mill sc',
    'office buildout lake norman nc',
    'commercial office construction near me',
    'office buildout raleigh nc',
    'office renovation raleigh nc',
    'office construction raleigh nc',
    'corporate office renovation raleigh',
    'co-working space buildout raleigh',
    'tech office buildout raleigh',
    'class a office buildout raleigh',
    'office buildout north hills raleigh',
    'office buildout downtown raleigh',
    'office buildout research triangle',
    'wake county office buildout',
    'office buildout durham nc',
    'office renovation durham nc',
    'office construction durham nc',
    'corporate office renovation durham',
    'tech office buildout durham',
    'life sciences office buildout durham',
    'office buildout american tobacco',
    'office buildout downtown durham',
    'office buildout duke university area',
    'office buildout rtp durham',
    'durham county office buildout',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/office-buildouts',
  },
  openGraph: {
    title: 'Office Buildouts & Renovation Charlotte NC | We Build',
    description:
      'Transform your office space with expert buildout and renovation services. Corporate HQ, co-working, medical, law firm, tech, life-sciences & executive offices across Charlotte, Fort Mill, Lake Norman, Raleigh, Durham, and the Research Triangle.',
    url: 'https://webuildclt.com/services/office-buildouts',
    type: 'website',
  },
};

const officeTypes = [
  {
    icon: Building2,
    title: 'Corporate Headquarters',
    slug: 'corporate-headquarters',
    desc: 'Full-scale corporate office buildouts including executive floors, open workstations, boardrooms, reception lobbies, employee amenities, and branded architectural elements.',
    details:
      'Charlotte has become one of the top corporate relocation destinations in the Southeast, and companies establishing or expanding their headquarters here need office environments that reflect their brand identity and support their operational culture. A corporate headquarters buildout involves far more than cubicles and conference rooms. We design and construct executive suites with premium finishes, large-format boardrooms with integrated audio-visual technology, open-plan work floors with acoustic management, employee cafeterias and break areas, fitness rooms, mother rooms, and visitor-facing lobbies that make a lasting first impression. Our team coordinates with furniture dealers, IT infrastructure providers, and security system integrators to ensure every element of your corporate environment is seamlessly built into the architecture. Most corporate headquarters buildouts in the Charlotte market range from 10,000 to 100,000 square feet and complete in 12 to 24 weeks depending on finish level and mechanical complexity.',
    cost: '$85-$250/sq ft',
  },
  {
    icon: Users,
    title: 'Co-Working & Flex Space',
    slug: 'co-working-flex-space',
    desc: 'Shared workspace environments with hot-desking, private offices, phone booths, meeting rooms, event spaces, and member amenity areas designed for maximum flexibility.',
    details:
      'The co-working industry in Charlotte has expanded dramatically, driven by remote workers, freelancers, startups, and enterprise teams seeking flexible workspace options. Building a successful co-working space requires a unique blend of durability, aesthetics, and adaptability. We construct co-working environments that include open hot-desking areas with power and data at every seat, soundproof phone booths and focus pods, private offices in various sizes that can be reconfigured as demand shifts, large meeting rooms with video conferencing technology, community kitchens, lounge areas, event spaces for networking and workshops, and secure mail and package handling areas. Material selection is critical in co-working spaces because high-traffic surfaces must withstand constant use while maintaining the design-forward aesthetic that members expect. Our team specifies commercial-grade flooring, durable millwork, and institutional-quality fixtures that look premium but perform under heavy daily use. Charlotte neighborhoods like South End, NoDa, Plaza Midwood, and Uptown are prime locations for co-working spaces, and we understand the zoning, parking, and code requirements specific to each area.',
    cost: '$75-$200/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Medical Office Suite',
    slug: 'medical-office-suite',
    desc: 'Healthcare office buildouts including exam rooms, treatment areas, nurse stations, patient waiting areas, and medical-grade infrastructure meeting compliance standards.',
    details:
      'Medical office buildouts require specialized construction knowledge that goes well beyond standard office renovation. We build medical suites that include patient waiting and check-in areas designed for privacy and comfort, exam rooms with proper lighting, cabinetry, and sink configurations, treatment rooms with specialized electrical requirements for medical equipment, nurse stations with sight lines to patient areas, medical records storage, laboratory spaces, and staff break rooms. Infrastructure requirements include medical gas piping for oxygen and suction, specialized HVAC with air pressure differentials between clean and soiled areas, antimicrobial surface materials, hands-free fixtures, and plumbing with backflow prevention devices. We coordinate with medical equipment vendors to ensure wall blocking, electrical circuits, and data connections are precisely positioned for imaging machines, sterilization equipment, and diagnostic tools. All our medical office buildouts comply with North Carolina healthcare facility licensing requirements, ADA accessibility standards, and infection control guidelines. We have completed medical suites for primary care practices, specialist clinics, urgent care facilities, and physical therapy offices across the Charlotte metro area.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Scale,
    title: 'Law Firm & Professional Office',
    slug: 'law-firm-professional-office',
    desc: 'Sophisticated office environments for law firms, accounting practices, financial advisors, and consulting firms with private offices, file storage, and client-facing spaces.',
    details:
      'Law firms and professional services offices in Charlotte require environments that communicate credibility, professionalism, and attention to detail. These offices typically feature a higher ratio of private offices to open workstations, with each partner or associate office designed for focused work and confidential client meetings. We construct law firm offices with rich material palettes including hardwood or stone flooring in reception areas, custom millwork for partner offices and conference rooms, floor-to-ceiling glass partition walls that maintain privacy while allowing natural light, and high-quality acoustic treatments that ensure conversations in adjacent offices remain confidential. File and records storage is a critical element, and we build secure file rooms with proper load-bearing floor structures, climate control to preserve documents, and fire-rated enclosures. Client-facing conference rooms receive premium finishes, integrated technology for video depositions and remote meetings, and hospitality-grade coffee and beverage stations. Many Charlotte law firms are located in Uptown Class A buildings where landlord aesthetic standards are high, and we work within those requirements while delivering spaces that are uniquely branded to each firm.',
    cost: '$100-$225/sq ft',
  },
  {
    icon: Laptop,
    title: 'Tech & Startup Office',
    slug: 'tech-startup-office',
    desc: 'Dynamic, agile workspaces for technology companies with collaboration zones, open floor plans, server rooms, and infrastructure supporting rapid growth and team scaling.',
    details:
      'Charlotte technology and startup companies need office spaces that can evolve as quickly as their businesses. Tech office buildouts prioritize flexibility, collaboration, and infrastructure density. We build open floor plans with modular furniture systems that can be reconfigured without construction, collaboration zones with writable walls and large displays, huddle rooms for quick stand-up meetings, dedicated video conferencing rooms for distributed teams, server rooms and IT closets with proper cooling, power redundancy, and cable management, and maker spaces or lab areas for hardware-focused companies. Electrical and data infrastructure in tech offices is significantly more robust than standard office construction. We install high-density power distribution for workstation clusters, redundant electrical circuits for critical IT equipment, structured cabling with fiber backbone, and wireless access point infrastructure designed for high-density connectivity. Charlotte tech hubs in South End, Uptown, and the University Research Park area each have different building stock and infrastructure capabilities, and we match the buildout approach to the specific building conditions. Most tech office buildouts include provisions for future growth, with capped utilities, pre-wired data runs, and structural blocking for future wall additions so the space can expand without major construction disruption.',
    cost: '$70-$185/sq ft',
  },
  {
    icon: Crown,
    title: 'Executive Suite & Serviced Office',
    slug: 'executive-suite-serviced-office',
    desc: 'Turnkey executive office suites with shared reception, conference rooms, kitchen facilities, and high-end finishes for professional tenants seeking move-in-ready space.',
    details:
      'Executive suite buildouts create multi-tenant environments where individual offices and small suites share common reception, conference rooms, kitchen, and lounge facilities. These spaces serve professionals who need a prestigious business address and polished environment without the commitment or cost of a full office buildout. We construct executive suite facilities with individually lockable offices featuring premium finishes, shared reception desks staffed or virtual, bookable conference rooms with video conferencing capability, communal kitchens and break areas, mail handling and package rooms, and print and copy centers. The construction challenge with executive suites is balancing shared and private spaces, managing acoustic separation between offices, and building the mechanical infrastructure to support flexible tenant configurations. We install HVAC zoning that allows individual temperature control in each office, sound-rated wall assemblies between units, and electrical metering systems where needed. Common areas receive the highest finish levels to create the premium first impression that attracts and retains tenants. Charlotte locations along the I-77 corridor, SouthPark, Ballantyne, and Uptown are popular markets for executive suite operations, and we have completed multiple facilities serving these submarkets.',
    cost: '$90-$210/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Meeting & Workplace Assessment',
    desc: 'We begin with an in-depth conversation about your business operations, team structure, growth plans, and workplace culture. This is not just a walkthrough of the space. We ask detailed questions about how your teams collaborate, how many employees will use the office daily versus working remotely, what technology systems are mission-critical, and what impression you want to make on clients and visitors. We evaluate the existing space conditions including structural elements, ceiling heights, mechanical capacity, electrical service, and natural light availability.',
  },
  {
    step: '02',
    title: 'Space Planning & Programming',
    desc: 'Based on the discovery session, we work with your architect and design team on a space program that defines every room and zone in the office: private offices, open workstations, conference rooms, huddle rooms, phone booths, collaboration areas, break rooms, reception, storage, server rooms, and amenity spaces. Preliminary floor plans show how each element fits within the available footprint, with attention to traffic flow, departmental adjacencies, sight lines, natural light distribution, and building code egress requirements.',
  },
  {
    step: '03',
    title: 'Conceptual Design & Material Exploration',
    desc: 'Working from your designer&rsquo;s material palettes, lighting concepts, ceiling treatments, and architectural features, the estimate reflects the selected aesthetic.',
  },
  {
    step: '04',
    title: 'Detailed Estimate & Budget Alignment',
    desc: 'We deliver a comprehensive, line-item estimate that breaks down every cost category: demolition, framing, drywall, electrical, data and low-voltage, plumbing, HVAC modifications, fire protection, flooring, painting, ceiling systems, millwork, doors and hardware, glass partitions, furniture coordination, and permits. If the estimate exceeds your budget, our team identifies value engineering opportunities that reduce costs.',
  },
  {
    step: '05',
    title: 'Construction Documents & Engineering',
    desc: 'Once budget is approved, we finalize construction documents including architectural plans, reflected ceiling plans, electrical layouts, mechanical engineering plans, plumbing plans, and fire protection drawings. These documents are prepared to meet Mecklenburg County or the relevant jurisdiction building code requirements and serve as the basis for permit applications. We also coordinate with your IT team, furniture dealer, and any specialty consultants during this phase.',
  },
  {
    step: '06',
    title: 'Permitting & Landlord Approvals',
    desc: 'We prepare and submit all required permit applications including building, electrical, mechanical, plumbing, and fire alarm permits. Our experience with Mecklenburg County Code Enforcement, City of Charlotte, and surrounding jurisdiction plan review processes means we know how to prepare documents that move through review efficiently. If you are in a leased space, we coordinate landlord approval in parallel, submitting plans to the property management team and addressing any comments related to base building systems or aesthetic standards.',
  },
  {
    step: '07',
    title: 'Pre-Construction Coordination',
    desc: 'Before construction begins, we finalize the project schedule, order long-lead materials such as custom millwork, specialty glass, and electrical switchgear, confirm subcontractor availability, and develop a phasing plan. If your business will remain operational during construction, we create a detailed logistics plan that includes dust containment barriers, noise mitigation schedules, temporary HVAC arrangements, and construction access routes that minimize disruption to your employees and clients.',
  },
  {
    step: '08',
    title: 'Demolition & Rough-In Construction',
    desc: 'Construction begins with selective demolition of existing walls, ceilings, and flooring as needed. We then install new framing, rough-in electrical wiring and data cabling, rough-in plumbing, modify or extend HVAC ductwork, and install fire protection piping. This phase establishes the skeleton of your new office layout. All rough-in work is inspected by local building officials before we close walls and ceilings.',
  },
  {
    step: '09',
    title: 'Finishes, Fixtures & Technology Integration',
    desc: 'With rough-in complete and inspected, we install drywall, tape, and finish walls. Ceiling grid and tile systems go in, followed by flooring, paint, and wall treatments. Millwork, cabinetry, and countertops are installed, then plumbing fixtures, light fixtures, electrical devices, and door hardware. We coordinate with your IT team and audio-visual integrator for network equipment, wireless access points, conference room displays, and security systems. This is where the office design comes to life and you see the finished product take shape.',
  },
  {
    step: '10',
    title: 'Final Inspections, Punch List & Handoff',
    desc: 'We schedule and coordinate all final inspections with local building officials including building, electrical, mechanical, plumbing, and fire alarm. After passing inspections, we conduct a thorough punch list walkthrough with your team to identify any items requiring touch-up, adjustment, or correction. Every punch list item is resolved before we hand over the space. At closeout, you receive as-built drawings, equipment warranties, maintenance manuals, and final lien waivers. Our one-year workmanship warranty covers all construction performed by our team.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. The discipline, integrity, and accountability that come from military service define how we run every project. When we commit to a timeline and a budget, we treat that commitment as a promise that will be kept. Our clients trust us because we have earned that trust through consistent performance on every office buildout we deliver.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to your office buildout project. We have encountered and solved every type of office construction challenge from outdated building infrastructure to complex phased renovations in occupied spaces. This depth of experience means fewer surprises, faster problem resolution, and a finished office that meets your expectations in every detail.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve businesses across the entire Charlotte metropolitan area. Whether your office is in Uptown Charlotte, SouthPark, Ballantyne, Fort Mill, Rock Hill, or the Lake Norman corridor, we have the licensing, insurance, and local code knowledge to build your project in full compliance with all applicable regulations.',
  },
  {
    icon: Zap,
    title: 'Minimal Business Disruption',
    desc: 'We understand that your business cannot afford weeks of downtime while the office is under construction. Our team develops phased construction plans that allow you to continue operating during the buildout, with noisy and dusty work scheduled during off-hours, weekends, or isolated behind containment barriers. We have completed office renovations with employees working in adjacent areas throughout the entire construction period.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into every office buildout. From energy-efficient LED lighting and high-performance HVAC systems to low-VOC paints, recycled content materials, and daylighting strategies, we help your office space reduce its environmental footprint. Sustainable office design also improves indoor air quality and occupant comfort, which research shows increases employee productivity and satisfaction.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Expertise',
    desc: 'We know the Charlotte office market inside and out. We understand which buildings have the infrastructure to support high-density office buildouts, which jurisdictions have the fastest permitting processes, where subcontractor availability is strongest, and what material lead times to expect for the finishes Charlotte businesses prefer. This local expertise translates into more accurate estimates, realistic schedules, and fewer surprises during your project.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build client receives a dedicated project manager as their single point of contact, weekly progress reports with photos and schedule updates, and immediate notification of any issue that could affect timeline or budget. We believe that well-informed clients make better decisions, and we invest heavily in communication tools and processes to ensure you always know exactly where your office buildout stands at every stage of construction.',
  },
];

const costTiers = [
  {
    type: 'Basic Office Refresh',
    range: '$45-$75/sq ft',
    desc: 'Cosmetic updates including new paint, carpet or LVP flooring, updated lighting fixtures, and minor layout adjustments without moving walls. Ideal for second-generation office spaces that have good bones but need a visual refresh to attract employees or clients.',
  },
  {
    type: 'Standard Office Buildout',
    range: '$75-$130/sq ft',
    desc: 'New wall construction, glass partition systems, modern LED lighting, upgraded HVAC controls, structured data cabling, new ceiling grid and tile, and mid-range commercial finishes throughout. This is the most common scope for Charlotte office tenants building out raw or second-generation space.',
  },
  {
    type: 'High-End Corporate Office',
    range: '$130-$250/sq ft',
    desc: 'Premium finishes including natural stone, custom millwork, floor-to-ceiling glass walls, designer lighting, integrated audio-visual systems, high-end acoustic treatments, and executive-level details in every room. Typical for corporate headquarters, law firms, and financial services companies.',
  },
  {
    type: 'Co-Working / Flex Space',
    range: '$75-$200/sq ft',
    desc: 'Durable commercial-grade finishes designed for high traffic, soundproof phone booths and focus pods, flexible furniture infrastructure, community kitchen and lounge buildout, event space construction, and robust technology infrastructure for shared connectivity.',
  },
  {
    type: 'Medical Office Suite',
    range: '$150-$300/sq ft',
    desc: 'Specialized healthcare construction including medical gas piping, HVAC with air pressure controls, antimicrobial surfaces, ADA-compliant exam rooms, nurse stations, lab spaces, and equipment infrastructure coordination with medical device vendors.',
  },
  {
    type: 'Tech / Startup Office',
    range: '$70-$185/sq ft',
    desc: 'Open floor plans with high-density power and data distribution, collaboration zones, server room construction with dedicated cooling, video conferencing rooms, maker spaces, and infrastructure provisions for future growth and reconfiguration.',
  },
  {
    type: 'Executive Suite / Serviced Office',
    range: '$90-$210/sq ft',
    desc: 'Multi-tenant office environments with individually lockable offices, shared reception and conference facilities, communal kitchen and lounge areas, sound-rated wall assemblies, individual HVAC zoning, and premium common area finishes.',
  },
];

const faqs = [
  {
    question: 'Does We Build handle office buildouts in Raleigh NC and the Research Triangle?',
    answer:
      'Yes. We Build delivers office buildouts, corporate headquarters construction, co-working space build-outs, and Class A / Class B office renovations throughout Raleigh, Cary, Morrisville, North Hills, Brier Creek, Downtown Raleigh, Glenwood South, and greater Wake County. Raleigh office projects often target tech, professional services, and life-sciences office tenants, with heavy demand for Class A TI in North Hills and the Research Triangle Park corridor. We coordinate City of Raleigh and Wake County permitting, landlord work-letter review, building-standard compliance, and after-hours construction scheduling. Call (980) 471-1745 for a free Raleigh office buildout consultation.',
  },
  {
    question: 'Does We Build handle office buildouts in Durham NC?',
    answer:
      'Yes. We Build provides office buildouts, corporate office renovations, tech and life-sciences office TI, and Class A office fit-outs throughout Durham — including Downtown Durham, the American Tobacco District, the Duke University area, Ninth Street, Brightleaf, Southpoint, and the Durham County portion of Research Triangle Park. Many Durham office projects involve adaptive reuse of historic tobacco and textile buildings, which requires coordination with the City of Durham historic-district design review and preservation-compatible construction methods. We also handle life-sciences office build-outs for biotech and pharmaceutical tenants on the Durham County side of RTP, where specialized MEP, redundant HVAC, and lab-adjacent office requirements are common. Call (980) 471-1745 for a free Durham office buildout consultation.',
  },
  {
    question: 'How much does an office buildout cost in Charlotte, NC?',
    answer:
      'Office buildout costs in Charlotte vary based on the type of office, scope of construction, existing conditions, and finish level. Basic office refreshes with cosmetic updates start around $45 to $75 per square foot. Standard office buildouts with new walls, electrical, data cabling, and mid-range finishes run $75 to $130 per square foot. High-end corporate offices with premium finishes, custom millwork, and integrated technology range from $130 to $250 per square foot. Medical office suites cost $150 to $300 per square foot due to specialized infrastructure. We provide a detailed, line-item estimate after an initial site visit so you understand exactly what every dollar covers before construction begins.',
  },
  {
    question: 'How long does an office buildout take in Charlotte?',
    answer:
      'Office buildout timelines depend on project size, complexity, and permitting. Simple cosmetic office refreshes under 5,000 square feet can complete in 4 to 6 weeks. Standard office buildouts with new walls, electrical, and finishes typically take 8 to 14 weeks of construction. Large corporate headquarters buildouts over 20,000 square feet may require 16 to 24 weeks. Medical office suites take 12 to 18 weeks due to specialized systems and inspections. Add 3 to 6 weeks for Mecklenburg County permitting before construction begins. We provide a detailed construction schedule during planning and update it weekly throughout the project.',
  },
  {
    question: 'Can we stay in our office during the renovation?',
    answer:
      'In many cases, yes. We specialize in phased construction that allows your team to continue working while we renovate. We create a phasing plan that divides the project into isolated construction zones, separated from occupied areas by temporary walls, dust barriers, and negative air pressure containment systems. The most disruptive work including demolition, concrete cutting, and heavy mechanical installation is scheduled during evenings, weekends, or periods when the office is unoccupied. For large renovations, we sometimes relocate teams to temporary swing space within the building during their section of the phased work, then move them into the finished area before starting the next phase.',
  },
  {
    question: 'What permits are required for an office buildout in Charlotte?',
    answer:
      'Most office buildouts in Charlotte require building permits from Mecklenburg County Code Enforcement or the City of Charlotte. Any work involving new wall construction, electrical modifications, plumbing changes, HVAC alterations, or fire alarm system updates requires a permit. Even if you are only reconfiguring an existing office layout, changes that affect egress paths, ADA accessibility, or fire separation ratings will trigger a permit requirement. We handle the entire permitting process from preparing code-compliant construction documents through submitting applications, responding to plan review comments, scheduling inspections, and obtaining the certificate of occupancy.',
  },
  {
    question: 'How do you design offices for hybrid work in Charlotte?',
    answer:
      'Hybrid work has fundamentally changed office design in Charlotte. Instead of assigning every employee a permanent desk, hybrid-ready offices allocate more square footage to collaboration zones, meeting rooms, video conferencing spaces, and social areas while reducing the number of dedicated workstations. We design hybrid offices with hot-desking areas where employees reserve desks through a booking system, multiple sizes of enclosed meeting rooms from two-person huddle rooms to twelve-person conference rooms, technology-equipped video conferencing rooms that make remote participants feel equally included, quiet focus rooms for concentrated work, and informal lounge areas for spontaneous collaboration. The key is building flexible infrastructure including modular furniture systems, adaptable lighting, and robust wireless connectivity so the space can be reconfigured as hybrid work patterns evolve.',
  },
  {
    question: 'What is the difference between an office buildout and a commercial upfit?',
    answer:
      'The terms overlap significantly, and in the Charlotte market they are often used interchangeably. Technically, an office buildout refers specifically to constructing a new office environment within a raw or previously occupied commercial space, while a commercial upfit is a broader term that encompasses any type of commercial interior renovation including offices, restaurants, retail stores, medical facilities, and warehouses. When Charlotte tenants lease raw shell space and build it out for the first time, that is typically called a buildout. When an existing office is renovated or reconfigured, that is often called an upfit or renovation. We handle both new buildouts and renovations, and the construction process is similar regardless of which term you use.',
  },
  {
    question: 'Do you coordinate IT and audio-visual installation during the office buildout?',
    answer:
      'Yes, technology coordination is a critical part of every office buildout we manage. We work directly with your IT team or managed service provider to ensure structured cabling, fiber backbone, wireless access point locations, electrical circuits for network equipment, and server room or IT closet infrastructure are built into the construction plans from day one. For audio-visual systems, we coordinate with your AV integrator to install conduit, backing, power, and data connections for conference room displays, video conferencing cameras, ceiling microphones, and sound systems. By integrating technology requirements into the construction documents before permits are submitted, we avoid costly field modifications and ensure that every cable, power outlet, and data drop is in the right location when your technology team is ready to install their equipment.',
  },
  {
    question: 'What are tenant improvement allowances for office buildouts in Charlotte?',
    answer:
      'A tenant improvement allowance is a negotiated dollar amount per square foot that a commercial landlord contributes toward the cost of building out a leased office space. In Charlotte, TI allowances for office space currently range from $20 to $65 per square foot depending on building class, lease term, location, and market conditions. Class A office buildings in Uptown and South End typically offer higher allowances, while suburban office parks may offer lower allowances with more favorable base rent. We help tenants maximize their TI allowance by providing preliminary construction estimates during lease negotiations so you can request an allowance based on real construction costs rather than guesswork. We also structure our invoicing to align with landlord reimbursement requirements.',
  },
  {
    question: 'How do you handle office buildouts in occupied buildings with other tenants?',
    answer:
      'Building management and neighboring tenant coordination is a standard part of our office buildout process. We develop construction logistics plans that address noise control, dust containment, elevator scheduling for material deliveries, dumpster placement, construction worker parking, and after-hours access procedures. Before construction begins, we meet with the property management team to review building rules, identify any restrictions on work hours or access, and establish communication protocols for notifying building management and adjacent tenants of any planned disruptive activities. We install dust barriers and maintain negative air pressure in the construction zone to prevent dust migration to other tenant spaces. Loading dock and freight elevator usage is coordinated with building management to avoid conflicts with other tenants.',
  },
  {
    question: 'What sustainable and green building options are available for office buildouts?',
    answer:
      'As a USGBC member, We Build offers a full range of sustainable building options for office construction. Energy-efficient LED lighting with occupancy sensors and daylight harvesting controls can reduce lighting energy consumption by 40 to 60 percent. High-efficiency HVAC systems with smart thermostats and demand-controlled ventilation reduce energy costs while improving indoor air quality. Low-VOC paints, adhesives, and sealants minimize off-gassing for healthier indoor environments. Recycled content ceiling tiles, carpet tiles with take-back programs, and FSC-certified wood products reduce material environmental impact. We also design for biophilic elements including living plant walls, natural materials, daylighting strategies, and views to nature that research shows improve employee wellbeing and cognitive performance.',
  },
  {
    question: 'What areas in Charlotte do you serve for office buildouts?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for office buildouts and renovations. Our primary service area includes Uptown Charlotte, South End, NoDa, Plaza Midwood, University City, SouthPark, Ballantyne, and all surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman corridor communities of Cornelius, Davidson, Huntersville, and Mooresville in North Carolina. Our general contractor licenses in both North Carolina and South Carolina allow us to work across the state line, which is especially valuable for companies with office locations in both Charlotte and the growing South Carolina submarkets along I-77.',
  },
  {
    question: 'What warranty do you provide on office buildout construction?',
    answer:
      'All office buildout construction performed by We Build is backed by a one-year workmanship warranty covering materials and labor. Major building systems installed during the buildout carry manufacturer warranties that typically extend well beyond our workmanship warranty: HVAC equipment carries 5 to 10 year manufacturer warranties, commercial lighting fixtures carry 5 to 7 year warranties, and plumbing fixtures carry lifetime or limited lifetime warranties. At project closeout, we provide complete warranty documentation, equipment maintenance manuals, and as-built drawings so you have everything needed to maintain your office space for years to come.',
  },
  {
    question: 'How does an office buildout cost in Charlotte compare to Raleigh or Atlanta?',
    answer:
      'Charlotte office buildout costs are generally competitive with other major Southeast markets. Standard buildouts in Charlotte run $75 to $130 per square foot, compared to $85 to $145 in Raleigh-Durham and $90 to $160 in Atlanta for similar scope and finish levels. Charlotte benefits from a deep pool of experienced commercial subcontractors, competitive material pricing, and lower base rents that reduce total occupancy cost. Tenant improvement allowances in Charlotte are also competitive, typically ranging from $20 to $65 per square foot depending on building class and lease terms. These factors combine to make Charlotte one of the most cost-effective office markets in the Southeast for companies expanding their footprint.',
  },
  {
    question: 'What is the difference between a Generation 1 and Generation 2 office buildout in Charlotte?',
    answer:
      'A Generation 1 or first-generation buildout converts raw shell space with concrete floors, exposed ceilings, and no interior improvements into a finished office. A Generation 2 or second-generation buildout renovates a space that was previously built out for another tenant. Generation 1 buildouts cost more because everything must be installed new, but you get exactly the layout you want with no compromises. Generation 2 buildouts can be less expensive if the existing layout partially works for your needs, but they often involve demolition of existing walls, removal of outdated systems, and remediation of concealed conditions like asbestos tile or outdated wiring. We evaluate both options and advise which approach delivers the best value for your situation.',
  },
  {
    question: 'Do Mecklenburg County office buildouts require ADA compliance upgrades?',
    answer:
      'Yes, all office buildouts in Mecklenburg County must comply with the 2010 ADA Standards for Accessible Design and the North Carolina Accessibility Code. New buildouts must be fully accessible including entrances, corridors, restrooms, break rooms, and common areas. Renovations that exceed a certain cost threshold trigger a path-of-travel obligation requiring you to spend up to 20 percent of the renovation cost on accessibility improvements to the primary path between the accessible entrance and the renovated area. Common ADA requirements for office buildouts include 36-inch minimum clear door widths, 60-inch turning radius in restrooms, lowered counters and controls, and compliant signage. We design every office buildout with full ADA compliance integrated from the start to avoid costly rework during final inspection.',
  },
];

const officeTrends = [
  {
    icon: MonitorSmartphone,
    title: 'Hybrid-Ready Office Design',
    details:
      'Charlotte companies are rethinking their office footprint as hybrid work becomes the permanent standard rather than a temporary pandemic response. Hybrid-ready offices in Charlotte are designed with fewer assigned desks and more shared collaboration spaces. The typical ratio has shifted from 80 percent workstations and 20 percent meeting rooms to closer to 50-50 or even 40 percent workstations and 60 percent collaboration and meeting spaces. We build hybrid offices with desk booking infrastructure, multiple sizes of enclosed meeting rooms from two-person huddle pods to large team rooms, technology-equipped video conferencing studios that make remote participants visible and audible as equals, and flexible zones that can shift from individual focus work to group collaboration depending on the day. Charlotte employers across banking, technology, and professional services are finding that well-designed hybrid offices actually increase in-office attendance because employees want to come to a space that supports how they work.',
  },
  {
    icon: Armchair,
    title: 'Hot-Desking & Activity-Based Working',
    details:
      'Activity-based working assigns no permanent desks and instead provides a variety of work settings that employees choose based on their task for the hour or day. Charlotte offices adopting this model feature open neighborhoods with unassigned sit-stand desks, quiet library zones for focused concentration, enclosed phone booths for private calls, high-top collaboration tables for quick teamwork sessions, comfortable lounge seating for casual conversations and reading, and outdoor work terraces for fresh-air focus time. The construction implications are significant because the office must support equal technology access at every setting, robust wireless connectivity throughout, adequate power and charging in every zone, and personal storage solutions like lockers since employees no longer have a permanent desk drawer. We design and build activity-based offices that feel intentional and organized rather than chaotic, with clear wayfinding, proper acoustic separation between zones, and durable materials that withstand the constant movement of people and equipment throughout the day.',
  },
  {
    icon: Coffee,
    title: 'Collaboration Zones & Social Hubs',
    details:
      'The most requested office feature in Charlotte corporate buildouts today is not more conference rooms but rather informal collaboration zones that encourage spontaneous interaction and team bonding. These spaces include open cafe-style seating areas with barista-quality coffee stations, writable wall surfaces where teams can brainstorm visually, tiered seating areas that double as presentation venues for all-hands meetings, project rooms with large displays and persistent work surfaces where teams can leave work-in-progress visible, and maker spaces with prototyping tools for product-focused companies. The design challenge is creating these spaces with proper acoustic management so that spontaneous collaboration does not disrupt focused work happening nearby. We use a combination of acoustic ceiling treatments, sound-masking systems, strategic placement of solid walls and glass partitions, and spatial buffering to create collaboration zones that feel energetic and connected without becoming disruptive. Charlotte companies in financial services, advertising, technology, and consulting have found that investing in collaboration infrastructure directly improves cross-team communication and innovation.',
  },
  {
    icon: Heart,
    title: 'Wellness Rooms & Employee Wellbeing',
    details:
      'Employee wellness has become a top priority for Charlotte employers competing for talent, and office design plays a central role. Modern office buildouts now routinely include dedicated wellness rooms for meditation, prayer, nursing, or simply decompressing during a stressful day. Fitness facilities or yoga studios allow employees to exercise without leaving the building. Mother rooms with comfortable seating, refrigeration, sink access, and privacy locks support working parents. Some Charlotte corporate offices are adding nap pods or quiet rest areas for employees who need a brief reset. Beyond dedicated wellness rooms, the overall office environment supports wellbeing through biophilic design elements such as living plant walls, natural wood and stone materials, abundant natural light through strategic glazing and interior glass partitions, circadian-aligned lighting systems that shift color temperature throughout the day, and improved indoor air quality through enhanced filtration and increased fresh air ventilation. We design and construct all of these wellness features as integrated elements of the office architecture, not afterthought additions.',
  },
];

export default function OfficeBuildoutsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Office Buildouts & Renovation Charlotte NC',
            'Expert office buildout and renovation services in Charlotte, NC. Corporate headquarters, co-working spaces, medical office suites, law firms, tech startups, and executive suites. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/office-buildouts'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Office Buildouts' },
          ]),
        ]}
      />

      <PageHero
        title="Office Buildouts & Renovation Charlotte NC"
        subtitle="Expert office construction and renovation from Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Office Buildouts' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Office Buildout & Renovation Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s office market is undergoing a transformation unlike anything the city has
                experienced in decades. With more than 50 million square feet of office space across the
                metro area, companies of every size are rethinking how their physical workspace supports
                productivity, culture, and talent retention. Whether you are building out raw shell space
                for a new corporate headquarters, renovating an existing office to support hybrid work
                patterns, or converting an outdated floor plan into a modern collaboration-focused
                environment, the quality of your office buildout directly impacts your ability to attract
                top talent and operate at peak efficiency. Charlotte has emerged as one of the fastest-growing
                corporate markets in the Southeast, and the demand for skilled office buildout contractors
                who understand the nuances of commercial office construction has never been higher.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An office buildout is far more than walls and carpet. Today&apos;s Charlotte offices must
                accommodate hybrid work schedules with flexible hot-desking, video conferencing rooms
                that connect distributed teams seamlessly, wellness rooms that support employee health,
                collaboration zones that spark innovation, and technology infrastructure that powers
                everything reliably. The office must also reflect your brand identity, comply with
                Mecklenburg County building codes and ADA requirements, coordinate with base building
                systems in multi-tenant properties, and stay within budget and timeline constraints. Getting
                all of these elements right requires a construction partner with deep office buildout
                experience and a structured process that eliminates surprises. At We Build, we approach every
                office project with the same discipline and attention to detail that defines our veteran-owned
                company, ensuring your finished workspace performs exactly as intended from the first day your
                team walks through the door.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. We have completed office buildouts across
                the Charlotte metro area for corporate headquarters, co-working operators, medical practices,
                law firms, technology companies, financial advisors, and professional services firms. We work
                closely with your architect and design team to ensure architecture, engineering, and construction
                are coordinated seamlessly, eliminating the finger-pointing and coordination gaps that delay
                conventional projects. Licensed
                in both North Carolina and South Carolina, we serve Charlotte and surrounding communities
                including <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                and <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>.
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
                { icon: DollarSign, title: 'Cost-Effective', desc: 'Office buildouts within existing commercial space cost a fraction of new construction while delivering a fully customized workspace tailored to your business operations.' },
                { icon: Clock, title: 'Faster Timeline', desc: 'Most office buildouts in Charlotte complete in 8 to 16 weeks of construction, getting your team into a new workspace months ahead of what ground-up building would require.' },
                { icon: Zap, title: 'Minimal Disruption', desc: 'We phase construction to keep your business running during the buildout, scheduling the most disruptive work during evenings, weekends, or in isolated containment zones.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and quality. When we commit to your project, we treat that commitment as a promise that will be honored.' },
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

      {/* Types of Office Buildouts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Office Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Office Buildouts We Deliver in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every office serves a different purpose and every business has unique operational
              requirements. We bring specialized experience to each office type, from corporate
              headquarters demanding executive-level finishes to tech startups that need maximum
              flexibility and infrastructure density.
            </p>
          </div>
          <div className="space-y-8">
            {officeTypes.map((type) => (
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

      {/* Our Office Buildout Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Office Buildout Process: 10 Steps from Discovery to Move-In
            </h2>
            <p className="text-muted-foreground">
              A disciplined, transparent process that eliminates surprises and delivers your office
              buildout on time and within budget. Every step includes clear communication so you
              always know exactly where your project stands and what comes next.
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
              Why Choose We Build for Your Office Buildout
            </h2>
            <p className="text-muted-foreground">
              Your office environment directly impacts employee productivity, client perception, and
              business performance. Choosing the wrong contractor can mean months of delays, budget
              overruns, and a finished space that falls short of your vision. Here is what sets We Build apart.
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

      {/* Charlotte Office Trends */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Office Trends
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Charlotte Office Design Trends Shaping 2026 Buildouts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The way Charlotte companies use office space has changed fundamentally. These four
                trends are driving the design decisions behind every office buildout we deliver
                today, and understanding them helps you plan a workspace that will serve your
                business well into the future.
              </p>
            </div>
            <div className="space-y-8">
              {officeTrends.map((trend) => (
                <Card key={trend.title}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <trend.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{trend.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{trend.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Buildout Costs */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Office Buildout Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Office buildout costs in Charlotte depend on the type of office, scope of work,
                existing conditions, finish level, and mechanical complexity. Below are typical
                cost ranges based on our recent projects in the Charlotte metro area. Every project
                is unique, and we provide detailed, line-item estimates after an initial site visit.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Office Buildout Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Existing conditions:</strong> Second-generation spaces may need asbestos abatement, outdated electrical panel upgrades, or plumbing replacements that add cost beyond the base buildout scope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Finish level:</strong> Standard commercial-grade finishes versus premium materials such as natural stone, custom millwork, designer lighting, and glass partition walls can shift costs significantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Technology density:</strong> High-density data cabling, redundant power systems, server room construction, and extensive audio-visual integration increase electrical and low-voltage costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>HVAC modifications:</strong> Adding zones, extending ductwork, or upgrading equipment to serve new office configurations adds mechanical costs that vary based on existing building infrastructure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Phased construction:</strong> Building out occupied offices in phases to keep your business running adds logistics costs for temporary walls, dust containment, and off-hours scheduling.</span>
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
                Office Buildout Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions Charlotte business owners ask about office
                buildouts, renovation costs, timelines, permits, hybrid work design, and
                tenant improvement allowances.
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
            <h2 className="text-3xl font-bold">Office Buildout Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our related services and guides for more information on office construction in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Upfits Charlotte NC', href: '/services/commercial-upfits', type: 'Service' },
              { title: 'Tenant Improvements Charlotte NC', href: '/services/tenant-improvements', type: 'Service' },
              { title: 'Commercial Renovation Charlotte NC', href: '/services/commercial-renovation', type: 'Service' },
              { title: 'Office Build-Out Guide: Planning Your Charlotte Workspace', href: '/guides/office-build-out-guide-charlotte', type: 'Guide' },
              { title: 'Commercial Flooring Guide: Best Options by Business Type', href: '/guides/commercial-flooring-guide-business-type', type: 'Guide' },
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
                    {resource.type === 'Guide' ? 'Read Guide' : 'View Service'} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Build Your Ideal Office Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a corporate headquarters buildout, co-working space construction,
            medical office renovation, or tech office expansion in Charlotte, We Build has the experience,
            licenses, and local knowledge to deliver your project on time and within budget.
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
