import {
  Building2,
  Home,
  Paintbrush,
  Hammer,
  Layers,
  Radar,
  Phone,
  Shield,
  Award,
  Users,
  MapPin,
  Target,
  Ruler,
  Leaf,
  HardHat,
  Wrench,
  FileText,
  Eye,
  DollarSign,
  Briefcase,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Factory,
  Warehouse,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AreaItem {
  name: string;
  href: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const services: ServiceItem[] = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Full-service commercial construction from the ground up. We build office buildings, retail spaces, restaurants, medical facilities, warehouses, and industrial projects across the Charlotte metro area. Our commercial team manages every phase — pre-construction planning, permitting, structural work, mechanical systems, interior finishing, and final inspection — so you receive a turnkey building ready for business. Whether you are opening a new location or expanding an existing operation, We Build delivers commercial projects on time, on budget, and built to code in both North Carolina and South Carolina.',
    href: '/services/commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    description:
      'Transform your business space with expert commercial upfit and tenant improvement services. We specialize in office renovations, restaurant build-outs, retail transformations, medical clinic upfits, and coworking space conversions. Our upfit process minimizes disruption to your daily operations — we can phase construction around your business hours and coordinate with landlords, architects, and inspectors on your behalf. From demolition through punch list, We Build handles every detail of your commercial upfit project in Charlotte, Fort Mill, and the surrounding area.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Hammer,
    title: 'Design-Build Services',
    description:
      'Complete design and construction under one roof with our integrated design-build approach. Instead of hiring separate architects and contractors, you work with a single team from concept through completion. This eliminates communication gaps, reduces change orders, and delivers projects twenty to thirty percent faster than traditional methods. Visit our dedicated Design Center in South Charlotte to explore materials, review finishes, and collaborate with our design-build team face-to-face. One contract, one team, one point of accountability.',
    href: '/services/design-build',
  },
  {
    icon: Wrench,
    title: 'General Contractor',
    description:
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages the full scope of commercial construction projects. We coordinate subcontractors, procure materials, handle permitting and inspections, manage budgets, and maintain schedules. Our general contracting services cover ground-up construction, major renovations, tenant improvements, and multi-phase developments. With over sixty years of combined construction experience, we bring the project management discipline and trade expertise needed to deliver complex projects without surprises.',
    href: '/services/general-contractor',
  },
  {
    icon: Layers,
    title: 'Commercial Roof Coatings',
    description:
      'Eco-friendly roof restoration that saves up to fifty percent compared to full roof replacement. Our We Coat division applies silicone, acrylic, elastomeric, and SPF coatings to extend the life of your commercial roof by ten to twenty years. Roof coatings reduce energy costs by reflecting UV radiation, eliminate leaks, and keep roofing materials out of landfills. We serve commercial buildings of all sizes — from small retail plazas to large industrial facilities — across Charlotte, Fort Mill, Lake Norman, and the greater Carolina region.',
    href: '/services/roof-coating',
  },
];

export const heroFeatures = [
  '60+ years combined experience',
  'Veteran & family owned',
  'USGBC member',
  'Licensed in NC, SC & MI',
];

export const stats: StatItem[] = [
  { value: '60+', label: 'Years Combined Experience' },
  { value: '3', label: 'State Licenses (NC, SC & MI)' },
  { value: '2019', label: 'Founded in Charlotte' },
  { value: '25', label: 'Service Specialties' },
];

export const processSteps: ProcessStep[] = [
  {
    icon: Phone,
    step: '01',
    title: 'Free Consultation',
    description:
      'Contact us by phone, email, or through our website to discuss your project. We listen to your vision, assess your needs, review your site or space, and provide an initial scope discussion — completely free. Whether you have detailed blueprints or just an idea, we meet you where you are and guide you toward the best path forward for your budget and timeline.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Design & Planning',
    description:
      'Our design-build team creates detailed construction plans, engineers solutions for your specific site, helps you select materials at our Design Center, and manages all permit applications with local municipalities. This phase includes budgeting, scheduling, and value engineering to ensure your project delivers maximum value without cutting corners on quality or code compliance.',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Transparent Proposal',
    description:
      'You receive a detailed, line-item proposal that covers every aspect of your project — materials, labor, permits, inspections, and contingencies. No hidden fees, no vague allowances. We walk through the proposal together so you understand exactly what is included, what it costs, and how the project timeline breaks down. You sign off with full confidence before any construction begins.',
  },
  {
    icon: HardHat,
    step: '04',
    title: 'Pre-Construction',
    description:
      'Before breaking ground, we finalize subcontractor selections, order long-lead materials, establish the construction schedule, and set up communication protocols. You receive a dedicated project manager who serves as your single point of contact throughout the build. We also coordinate with your architect, landlord, and any relevant third parties to ensure a smooth start.',
  },
  {
    icon: Wrench,
    step: '05',
    title: 'Construction',
    description:
      'Our experienced crews bring your project to life with quality craftsmanship, strict adherence to building codes, and regular progress updates. You receive weekly photo updates and budget reports so there are never surprises. We manage every subcontractor, coordinate all inspections, maintain a clean and safe job site, and keep the project moving forward on the timeline we committed to.',
  },
  {
    icon: CheckCircle,
    step: '06',
    title: 'Final Walkthrough & Warranty',
    description:
      'A thorough walkthrough ensures every detail meets your expectations and local code requirements. We address any punch-list items promptly and deliver your completed project with all warranties, manuals, and certificates of occupancy. After handover, we stand behind our work with comprehensive warranties and responsive post-project support — because our relationship does not end when the last nail is driven.',
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Shield,
    title: 'Licensed & Insured in NC, SC & MI',
    description:
      'We hold active general contractor licenses in North Carolina, South Carolina, and Michigan, backed by comprehensive general liability, workers\' compensation, and commercial auto insurance. Your project is fully protected from permit application through final inspection. Multi-state licensing means we can serve clients across the Charlotte metro area, the South Carolina border communities, and the Detroit metropolitan area without jurisdictional delays.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'We Build was founded by veterans who bring military discipline, integrity, and accountability to every construction project. When you hire We Build, you work directly with the owners — not a sales team that hands you off to strangers. Our family-owned structure means faster decisions, personal accountability, and a genuine commitment to doing right by every client. We treat your project with the same care and attention we would give our own family\'s home or business.',
  },
  {
    icon: Award,
    title: '60+ Years Combined Experience',
    description:
      'Our leadership and field teams bring over sixty years of combined construction experience spanning commercial builds, industrial projects, and specialty roof coatings. This depth of knowledge means we have seen and solved virtually every construction challenge that arises in the Charlotte market — from problematic soil conditions and complex permitting to tight schedules and challenging site logistics. Experience eliminates guesswork.',
  },
  {
    icon: Leaf,
    title: 'USGBC Member — Sustainable Building',
    description:
      'As a proud member of the U.S. Green Building Council, We Build integrates sustainable construction practices into every project. From energy-efficient building envelopes and low-VOC materials to waste reduction strategies and high-performance HVAC systems, we help clients build greener without breaking the budget. Sustainable construction is not just good for the environment — it reduces long-term operating costs and increases property values for building owners.',
  },
  {
    icon: Eye,
    title: 'Dedicated Design Center',
    description:
      'Our Design Center in South Charlotte is a hands-on showroom where clients explore materials, compare finishes, and make confident selections with our design team by their side. Instead of guessing from small samples or catalog photos, you see and touch full-scale displays of countertops, flooring, cabinetry, tile, fixtures, and more. The Design Center streamlines the selection process, reduces change orders, and ensures you love every finish in your completed project.',
  },
  {
    icon: Target,
    title: 'Single Point of Contact',
    description:
      'Every We Build project is assigned a dedicated project manager who serves as your single point of contact from kickoff through completion. You never get bounced between departments or left wondering who to call. Your project manager coordinates all subcontractors, manages the schedule, handles inspections, and provides regular updates. One call, one person, complete accountability — that is how construction should work.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing — No Hidden Fees',
    description:
      'We provide detailed, line-item estimates that break down every cost — materials, labor, permits, and contingencies. You know exactly what you are getting and what it costs before signing a contract. No vague allowances, no surprise change orders, no inflated invoices at project completion. Our transparent pricing model builds trust and eliminates the financial anxiety that too many construction clients experience with other contractors.',
  },
  {
    icon: MapPin,
    title: 'Deep Local Knowledge',
    description:
      'Headquartered in South Charlotte at 14330 S Lakes Drive, We Build knows the Charlotte construction market inside and out. We understand local building codes in Mecklenburg, Union, Iredell, and York counties. We have established relationships with local inspectors, suppliers, and subcontractors. We know which neighborhoods have HOA requirements, which municipalities have expedited permitting, and which soil conditions require special foundation work. Local knowledge translates to faster, smoother projects.',
  },
  {
    icon: Radar,
    title: 'FAA-Certified Thermal Drone Inspections',
    description:
      'Our FAA-certified commercial drone pilot uses aerial thermal imaging technology to inspect commercial roofs without costly scaffolding or disrupting your business. Thermal drone inspections detect moisture intrusion, insulation failures, and hidden damage that visual inspections miss — saving you money by catching problems early and providing precise data for targeted repairs rather than full replacements.',
  },
];

export const industriesServed: IndustryItem[] = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Medical',
    description:
      'Medical office build-outs, urgent care facilities, physical therapy clinics, dental offices, and veterinary practices. We understand HIPAA-compliant space planning, ADA requirements, specialized plumbing for medical equipment, and the clean-room finishing standards that healthcare environments demand.',
  },
  {
    icon: Store,
    title: 'Retail & Shopping Centers',
    description:
      'Retail store build-outs, tenant improvements, shopping center renovations, and storefront construction. We work with national brands and local boutiques alike, managing landlord coordination, ADA compliance, and phased construction that minimizes lost revenue during renovation.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food Service',
    description:
      'Full-service restaurant construction including commercial kitchen build-outs, dining room design, bar construction, hood and ventilation systems, grease trap installation, and health department compliance. From fast-casual concepts to fine dining establishments across the Charlotte area.',
  },
  {
    icon: Briefcase,
    title: 'Office & Corporate',
    description:
      'Office construction and tenant upfits for corporate headquarters, coworking spaces, law firms, financial institutions, and professional service companies. We create productive work environments with modern floor plans, collaboration spaces, conference rooms, and technology infrastructure.',
  },
  {
    icon: Factory,
    title: 'Industrial & Manufacturing',
    description:
      'Warehouse construction, manufacturing facilities, distribution centers, and industrial renovations. Our industrial projects accommodate heavy equipment loads, specialized electrical requirements, overhead crane systems, loading docks, and environmental compliance.',
  },
  {
    icon: Warehouse,
    title: 'Mixed-Use & Multi-Family',
    description:
      'Mixed-use developments that combine retail, office, and residential spaces. We manage the complexity of multi-use construction — separate utility metering, fire separation requirements, parking structures, and phased occupancy schedules that allow tenants to move in while construction continues.',
  },
];

export const areasServedDetailed: AreaItem[] = [
  {
    name: 'Charlotte',
    href: '/services/general-contractor',
    description:
      'As Charlotte\'s go-to commercial construction company, We Build serves every neighborhood in Mecklenburg County — from the rapidly growing South End and NoDa districts to established areas like Myers Park, Dilworth, and Plaza Midwood. Charlotte\'s booming economy continues to drive demand for commercial construction, office upfits, restaurant build-outs, and retail renovations. Our headquarters at 14330 S Lakes Drive puts us at the center of Charlotte\'s construction activity, with easy access to Uptown, University City, Steele Creek, and every corridor in between.',
  },
  {
    name: 'South Charlotte & Ballantyne',
    href: '/areas/south-charlotte',
    description:
      'Our home base in South Charlotte gives us unmatched access to the Ballantyne, Pineville, and Waxhaw communities. South Charlotte is one of the fastest-growing areas in the region, with new commercial developments, retail centers, medical offices, and custom homes under construction year-round. We know the permitting process in both Charlotte and the surrounding towns, understand the deed restrictions in planned communities, and have deep relationships with South Charlotte subcontractors and suppliers.',
  },
  {
    name: 'Fort Mill, SC',
    href: '/areas/fort-mill-sc',
    description:
      'Licensed in South Carolina, We Build is a trusted construction partner for businesses in Fort Mill, Tega Cay, Rock Hill, and York County. Fort Mill\'s proximity to Charlotte makes it one of the hottest markets for commercial construction in the Carolinas. We handle everything from restaurant build-outs along Carowinds Boulevard to commercial upfits in Tega Cay — all managed by our Charlotte-based team with full SC licensing and insurance.',
  },
  {
    name: 'Lake Norman & Cornelius',
    href: '/areas/lake-norman',
    description:
      'The Lake Norman area — including Cornelius, Davidson, Huntersville, and Mooresville — is one of Charlotte\'s premier markets for custom home construction and commercial development. We build lakefront custom homes, commercial spaces along the I-77 corridor, restaurant build-outs in downtown Davidson, and office upfits in Mooresville\'s growing business parks. Our team understands the unique requirements of lakefront construction including setback regulations, erosion control, and dock permitting.',
  },
  {
    name: 'Huntersville & North Charlotte',
    href: '/areas/huntersville',
    description:
      'We Build serves Huntersville, Birkdale Village, Northlake, and the I-77 corridor north of Charlotte. This fast-growing area features new commercial developments and retail centers that need experienced general contractors who understand Mecklenburg County requirements and the unique character of the Lake Norman south shore communities.',
  },
  {
    name: 'Matthews & Mint Hill',
    href: '/areas/matthews',
    description:
      'Construction services for Matthews, Mint Hill, Indian Trail, and Stallings in eastern Mecklenburg and Union counties. From downtown Matthews commercial renovations to new construction along Independence Boulevard, We Build handles commercial projects across this growing suburban market.',
  },
  {
    name: 'Mooresville & Race City',
    href: '/areas/mooresville',
    description:
      'Serving Mooresville, the Lake Norman west shore, and Iredell County with commercial construction. Home to NASCAR and a booming technology corridor along I-77, Mooresville offers strong demand for office construction, retail build-outs, and commercial development.',
  },
  {
    name: 'Rock Hill, SC',
    href: '/areas/rock-hill-sc',
    description:
      'Licensed in South Carolina, We Build serves Rock Hill, Tega Cay, and York County with commercial construction and tenant improvements. Rock Hill\'s Knowledge Park tech hub and Dave Lyle Boulevard corridor are driving significant commercial development and construction demand.',
  },
  {
    name: 'Detroit Metro, MI',
    href: '/areas/detroit',
    description:
      'We Build is bringing our commercial construction expertise to the Detroit metropolitan area. From commercial upfits and tenant improvements in Dearborn to industrial construction in Warren and restaurant build-outs in Royal Oak, we serve businesses across Metro Detroit with the same quality and accountability that defines our Charlotte operations.',
  },
  {
    name: 'Dearborn, MI',
    href: '/areas/dearborn',
    description:
      'Construction services in Dearborn, Dearborn Heights, and western Wayne County. From the Ford Road commercial corridor to Michigan Avenue, We Build delivers commercial upfits, office renovations, and tenant improvements for businesses in this key Metro Detroit market.',
  },
];

export const homeFaqs: FAQItem[] = [
  {
    question: 'What types of construction projects does We Build handle?',
    answer:
      'We Build provides full-service general contracting for commercial construction (offices, retail, restaurants, breweries, medical facilities, warehouses), residential construction (custom homes, additions, renovations), commercial roof coating and restoration through our We Coat division, FAA-certified thermal drone roof inspections, site development, value engineering, adaptive reuse, and integrated design-build services. We handle projects of all sizes across the Charlotte metro area, South Carolina, and the Detroit metropolitan area. Our team manages every phase from pre-construction planning through final walkthrough and warranty support.',
  },
  {
    question: 'What areas in the Charlotte region do you serve?',
    answer:
      'We serve the entire Charlotte metropolitan area including South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, Fort Mill SC, and Rock Hill SC. We are also expanding into the Detroit metropolitan area including Dearborn, Troy, Southfield, Royal Oak, and Warren. Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273. We hold active general contractor licenses in North Carolina, South Carolina, and Michigan.',
  },
  {
    question: 'Are you a licensed and insured general contractor?',
    answer:
      'Yes. We Build holds active general contractor licenses in North Carolina, South Carolina, and Michigan. We carry comprehensive insurance including general liability, workers\' compensation, and commercial auto coverage. Our FAA Part 107 certification also authorizes our commercial drone pilot to conduct aerial inspections legally in any state. We are happy to provide copies of our licenses and certificates of insurance to any prospective client or property manager upon request.',
  },
  {
    question: 'How much does commercial construction cost in Charlotte?',
    answer:
      'Construction costs in Charlotte vary by project type and scope. Commercial upfits typically run fifty to one hundred seventy-five dollars per square foot, depending on the level of finish and mechanical complexity. Ground-up commercial construction ranges from one hundred fifty to three hundred dollars per square foot. Custom homes cost two hundred to six hundred plus dollars per square foot. Home additions run one hundred fifty to four hundred dollars per square foot. Commercial roof coating costs two to five dollars per square foot. We provide free, detailed estimates tailored to your specific project.',
  },
  {
    question: 'What is design-build construction and why should I consider it?',
    answer:
      'Design-build is a project delivery method where one company handles both the design and construction phases of your project. Instead of hiring a separate architect and contractor — who may not communicate well with each other — you work with a single integrated team. This approach eliminates communication gaps, reduces change orders, speeds up project delivery by twenty to thirty percent, and provides greater cost certainty from the start. Our Design Center in South Charlotte is where clients explore materials and collaborate with our design-build team in person.',
  },
  {
    question: 'Do you offer free estimates for construction projects?',
    answer:
      'Yes. We provide free consultations and detailed, transparent estimates for all project types — commercial construction, upfits, custom homes, additions, and roof coating. Our estimates include line-item breakdowns so you understand exactly what is included and what each element costs. There are no hidden fees or vague allowances. Contact us at (704) 574-8124 or through our website to schedule your free consultation. We typically respond within one business day.',
  },
  {
    question: 'What makes We Build different from other Charlotte contractors?',
    answer:
      'Several things set We Build apart from other general contractors in Charlotte. We are veteran and family-owned, which means the owners are personally involved in every project. We maintain a dedicated Design Center where clients explore materials hands-on. We offer integrated design-build services that deliver projects faster and with fewer surprises. We are a USGBC member committed to sustainable building practices. Our FAA-certified drone pilot provides thermal roof inspections that detect problems invisible to the naked eye. We provide transparent, line-item pricing with no hidden costs. And we hold licenses in North Carolina, South Carolina, and Michigan, giving us coverage from Charlotte to the Detroit metro area.',
  },
  {
    question: 'How long does a typical construction project take?',
    answer:
      'Project timelines depend on the type and scope of work. Commercial upfits typically take three to five months from permit to completion. Ground-up commercial buildings take six to fourteen months. Custom homes take ten to eighteen months from design through move-in. Home additions take three to six months. Commercial roof coatings take two to five days per building. We provide detailed project schedules during the planning phase, communicate proactively if timelines shift, and include schedule milestones in every contract.',
  },
  {
    question: 'Is We Build a veteran-owned construction company?',
    answer:
      'Yes. We Build is a veteran and family-owned construction company founded in Charlotte, NC in 2019. Our founders bring military service backgrounds that instill discipline, integrity, accountability, and a mission-first mindset into every construction project. These values are not just marketing — they show up in how we communicate with clients, how we manage job sites, how we treat subcontractors, and how we stand behind our work after project completion.',
  },
  {
    question: 'What is the USGBC and why does membership matter?',
    answer:
      'The USGBC — U.S. Green Building Council — is the organization behind LEED certification and the leading authority on sustainable building practices in the United States. We Build\'s USGBC membership demonstrates our commitment to environmentally responsible construction. This means we incorporate energy-efficient systems, sustainable materials, waste reduction strategies, and green building techniques into our projects. For building owners, this translates to lower operating costs, healthier indoor environments, higher property values, and reduced environmental impact over the life of the building.',
  },
  {
    question: 'What financing options are available for construction projects in Charlotte?',
    answer:
      'Several financing options are available for construction projects in the Charlotte area. Commercial projects can utilize SBA loans, conventional construction loans, or commercial lines of credit through local and national lenders. We Build works with clients at every budget level and can provide referrals to trusted lending partners who specialize in construction financing in Mecklenburg County and the greater Charlotte region. Our transparent, milestone-based payment structure also helps manage cash flow throughout the project, and we coordinate directly with lender disbursement schedules when needed.',
  },
  {
    question: 'How does We Build use drone inspections for construction and roofing projects?',
    answer:
      'We Build operates FAA-certified commercial drones equipped with thermal imaging cameras to inspect roofs and construction sites without scaffolding, ladders, or business disruption. Thermal drone inspections detect hidden moisture intrusion, insulation failures, and structural issues that visual inspections miss entirely. The data is compiled into detailed reports with annotated imagery so building owners can make informed decisions about repairs or coating. This technology saves time, reduces inspection costs, and delivers more accurate assessments than traditional methods — a capability most Charlotte contractors do not offer.',
  },
  {
    question: 'Does We Build offer construction services in the Detroit area?',
    answer:
      'Yes. We Build has expanded into the Detroit metropolitan area with an active general contractor license in Michigan. We serve businesses in Dearborn, Southfield, Troy, Royal Oak, Warren, and surrounding Wayne and Oakland County communities. Our Detroit operations offer the same commercial construction, upfit, and renovation services that define our Charlotte work — backed by the same veteran-owned accountability and transparent pricing. Clients in Metro Detroit benefit from our sixty-plus years of combined experience and a dedicated project manager for every job.',
  },
];

export const featuredProjects = [
  {
    image: '/images/portfolio/urgent-care.jpg',
    alt: 'Broken to Better Urgent Care commercial upfit Charlotte NC',
    category: 'Commercial Upfit',
    title: 'Broken to Better Urgent Care',
    href: '/portfolio/urgent-care',
  },
  {
    image: '/images/portfolio/fyzical-therapy.jpg',
    alt: 'FYZICAL Therapy & Balance Centers commercial upfit',
    category: 'Commercial Upfit',
    title: 'FYZICAL Therapy & Balance Centers',
    href: '/portfolio/fyzical-therapy',
  },
  {
    image: '/images/portfolio/pure-physique.jpg',
    alt: 'Pure Physique fitness studio commercial upfit Fort Mill SC',
    category: 'Commercial Upfit',
    title: 'Pure Physique',
    href: '/portfolio/pure-physique',
  },
];

export const blogPreviewPosts = [
  {
    title: 'Complete Guide to Commercial Construction in Charlotte',
    slug: 'commercial-construction-guide-charlotte-nc',
    category: 'Commercial',
  },
  {
    title: 'How Much Does a Custom Home Cost in Charlotte?',
    slug: 'cost-to-build-custom-home-charlotte-nc',
    category: 'Residential',
  },
  {
    title: 'Roof Coating vs. Roof Replacement: Cost Comparison',
    slug: 'roof-coating-vs-roof-replacement',
    category: 'Roof Coating',
  },
];
