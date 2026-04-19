import type { Metadata } from 'next';
import Image from 'next/image';
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
  Warehouse,
  UtensilsCrossed,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  DollarSign,
  FileCheck,
  HardHat,
  Ruler,
  MapPin,
  Users,
  Leaf,
  ClipboardCheck,
  Search,
  PenTool,
  FileText,
  Hammer,
  Zap,
  Paintbrush,
  Eye,
  Key,
  Briefcase,
  Heart,
  Coffee,
  GraduationCap,
  Church,
  Factory,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Construction Charlotte NC | Licensed General Contractor | We Build',
  description:
    'Top-rated commercial construction company serving Charlotte NC, Raleigh NC, and the Research Triangle with 60+ years combined experience. Commercial general contractors for office buildings, retail spaces, restaurants, medical facilities, warehouses & mixed-use. Licensed in NC & SC. Veteran & family-owned. USGBC member. Free consultations. (980) 471-1745.',
  keywords: [
    'commercial construction charlotte nc',
    'commercial construction companies charlotte nc',
    'commercial construction companies near me',
    'commercial construction near me',
    'commercial general contractor charlotte nc',
    'commercial general contractors near me',
    'commercial building contractor charlotte',
    'office construction charlotte nc',
    'commercial builder charlotte',
    'commercial building charlotte nc',
    'new commercial construction charlotte',
    'commercial construction cost charlotte',
    'commercial building permits mecklenburg county',
    'commercial contractor charlotte',
    'commercial upfit charlotte nc',
    'restaurant construction charlotte nc',
    'medical office construction charlotte nc',
    'warehouse construction charlotte nc',
    'commercial construction Charlotte North Carolina',
    'commercial contractor south charlotte',
    'commercial construction fort mill sc',
    'commercial construction lake norman nc',
    'commercial construction raleigh nc',
    'commercial construction research triangle',
    'commercial construction cary nc',
    'commercial general contractor raleigh',
    'commercial builder raleigh nc',
    'commercial construction north hills raleigh',
    'commercial construction brier creek',
    'wake county commercial construction',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/commercial-construction',
  },
};

const projectTypes = [
  {
    icon: Building2,
    title: 'Office Buildings',
    desc: 'New builds, expansions, and full renovations for modern workspaces. Open-concept layouts, private offices, conference rooms, and reception areas designed for productivity.',
    details: 'We handle everything from single-tenant professional offices to multi-story corporate buildings. We work closely with your architect and design team to ensure architecture, engineering, and construction are coordinated seamlessly, eliminating the communication gaps that cause delays. Whether you need a 1,500-square-foot professional suite or a 50,000-square-foot corporate headquarters, we bring the same attention to detail and project management discipline to every office construction project in Charlotte. Our office builds incorporate modern infrastructure including structured cabling for high-speed networking, energy-efficient HVAC zoning, and LED lighting systems that reduce operating costs from day one.',
    cost: '$150-$400/sq ft',
  },
  {
    icon: Store,
    title: 'Retail Spaces',
    desc: 'Storefronts, shopping centers, and retail build-outs that drive foot traffic. Custom displays, fitting rooms, storage, and point-of-sale areas.',
    details: 'Retail construction demands speed. Every day your doors are closed is revenue lost. We specialize in fast-track retail schedules that get Charlotte businesses open on time, with the fit-and-finish that attracts customers. Our retail construction experience spans boutique shops in South End to anchor tenant spaces in suburban shopping centers. We understand the unique requirements of retail: ADA-compliant entries and fitting rooms, security system infrastructure, high-visibility storefront glazing, durable flooring that handles heavy foot traffic, and efficient back-of-house storage layouts that maximize your selling floor.',
    cost: '$75-$200/sq ft',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Food Service',
    desc: 'Full restaurant build-outs including commercial kitchens, dining rooms, bar areas, outdoor patios, and health department-compliant infrastructure.',
    details: 'Restaurant construction is one of the most complex commercial project types. Grease traps, hood ventilation, fire suppression, walk-in coolers, plumbing for multiple stations, and ADA compliance all need to be coordinated precisely. Our team has built restaurants from fast-casual to fine dining across the Charlotte metro. We coordinate closely with kitchen equipment vendors to ensure rough-in dimensions match final equipment specs exactly, preventing costly rework. Our restaurant projects consistently pass Mecklenburg County health department inspections on the first visit, because we build to code from the first day of construction.',
    cost: '$150-$350/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Dental Facilities',
    desc: 'Healthcare spaces built to meet strict compliance, infection control, and safety standards. Exam rooms, imaging suites, labs, and patient areas.',
    details: 'Medical construction requires expertise in HVAC systems for air pressure control, lead-lined walls for radiology, specialized plumbing, and strict adherence to building codes for healthcare occupancy. We coordinate with equipment vendors and regulatory bodies to ensure your facility passes inspection on the first attempt. Our healthcare construction portfolio includes urgent care clinics, dental practices, physical therapy centers, specialty medical offices, and veterinary facilities. Each project type has unique requirements, from medical gas systems in surgical suites to the specialized flooring that meets infection control standards in exam rooms.',
    cost: '$150-$400/sq ft',
  },
  {
    icon: Warehouse,
    title: 'Industrial & Warehouse',
    desc: 'Warehouse construction, distribution centers, light industrial facilities, and manufacturing spaces built for operational efficiency.',
    details: 'From concrete slab work and steel erection to loading docks, overhead doors, and climate-controlled storage, we build industrial spaces that support your operations. Our Charlotte-area warehouse projects include distribution centers, flex spaces, and light manufacturing facilities. We design warehouse spaces with your workflow in mind, optimizing dock door placement, clear heights, column spacing, and office-to-warehouse ratios. Whether you need a simple shell building or a fully climate-controlled distribution facility with mezzanine office space, we have the experience to deliver industrial construction projects that support your logistics and operations.',
    cost: '$80-$200/sq ft',
  },
  {
    icon: Building2,
    title: 'Mixed-Use Developments',
    desc: 'Multi-purpose buildings combining retail, office, and other commercial spaces. Complex projects requiring coordination across multiple use types.',
    details: 'Mixed-use construction demands a contractor who understands different building codes, fire separations between occupancy types, separate utility metering, and the coordination required when retail, office, and other uses exist in the same structure. We have the experience to deliver these complex projects in Charlotte. Mixed-use developments require navigating overlapping code requirements, coordinating separate mechanical systems for different occupancy types, and managing the phased delivery schedules that allow retail tenants to open while upper floors are still under construction. Our project management systems are built for this level of complexity.',
    cost: '$200-$450/sq ft',
  },
];

const processSteps = [
  {
    icon: Phone,
    title: 'Initial Consultation',
    desc: 'Every project starts with a conversation. We meet with you to understand your business needs, timeline, budget range, and vision for the space. This initial meeting is free and comes with no obligation. We listen first, then provide honest feedback about feasibility, approximate costs, and realistic timelines. We work closely with your architect and design team to ensure a seamless build process.',
  },
  {
    icon: Search,
    title: 'Site Evaluation & Due Diligence',
    desc: 'Before we estimate, we evaluate your site thoroughly. For existing buildings, this means assessing structural conditions, electrical capacity, plumbing infrastructure, HVAC systems, and ADA compliance. For ground-up projects, we review soil conditions, utility access, grading requirements, and zoning regulations. This due diligence prevents the expensive surprises that derail budgets and timelines.',
  },
  {
    icon: FileText,
    title: 'Permitting & Approvals',
    desc: 'We prepare and submit all required permits to the City of Charlotte, Mecklenburg County, or the applicable jurisdiction. This includes building, mechanical, electrical, plumbing, fire, and sign permits. Our familiarity with local code officials helps us submit clean applications that get approved on the first review, avoiding the resubmission cycle that can add weeks to your schedule.',
  },
  {
    icon: ClipboardCheck,
    title: 'Pre-Construction Planning',
    desc: 'With permits in hand, we finalize the construction schedule, order long-lead materials, coordinate subcontractor schedules, and establish communication protocols. You receive a detailed project timeline showing every milestone from demolition to certificate of occupancy. We identify and order long-lead items early so material delays do not become schedule delays.',
  },
  {
    icon: Hammer,
    title: 'Foundation & Structural Work',
    desc: 'For ground-up construction, this phase includes site preparation, foundation work, structural steel or wood framing, and building envelope installation. For upfit projects, this covers demolition of existing finishes, structural modifications, and framing for new walls and rooms. Every structural element is inspected and approved before we move to the next phase.',
  },
  {
    icon: Zap,
    title: 'Mechanical, Electrical & Plumbing',
    desc: 'Rough-in of all building systems happens in a carefully coordinated sequence. HVAC ductwork, electrical wiring, plumbing lines, fire sprinkler modifications, and low-voltage cabling (data, security, audio-visual) are installed and inspected. For specialized spaces like commercial kitchens or medical facilities, this phase requires precision coordination with equipment vendors.',
  },
  {
    icon: Paintbrush,
    title: 'Finishes & Interior Build-Out',
    desc: 'Drywall, painting, flooring, ceilings, cabinetry, countertops, lighting fixtures, plumbing fixtures, and all interior finishes are installed. This is where your space transforms from a construction site into the environment you envisioned. Our quality control process includes inspections at every stage to ensure workmanship meets our standards before moving forward.',
  },
  {
    icon: Eye,
    title: 'Final Inspections & Punch List',
    desc: 'We conduct a thorough internal quality inspection before requesting final inspections from the City of Charlotte or Mecklenburg County. Building, mechanical, electrical, plumbing, and fire inspections must all pass before a certificate of occupancy is issued. We walk the space with you to create a punch list of any items that need attention, and we complete every item before handover.',
  },
  {
    icon: Key,
    title: 'Project Handoff & Warranty',
    desc: 'The final step is a complete project handover. You receive all operation manuals, warranty documentation, as-built drawings, and maintenance guidelines for every system in your new space. We walk you through HVAC controls, electrical panels, and any specialized equipment. After handover, we provide responsive warranty support because we are a local Charlotte company that stands behind its work.',
  },
];

const benefits = [
  {
    icon: HardHat,
    title: 'Veteran & Family-Owned',
    desc: 'We Build was founded on the values of service, integrity, and craftsmanship. As a veteran and family-owned company, we bring military-grade discipline to project management and a family commitment to treating every client like a neighbor. Our reputation in the Charlotte community is built on decades of handshake-quality relationships, and we protect that reputation on every project.',
  },
  {
    icon: Shield,
    title: 'Licensed in NC & SC',
    desc: 'We hold active general contractor licenses with both the North Carolina Licensing Board for General Contractors and the South Carolina Contractors Licensing Board. This dual licensing allows us to serve the entire Charlotte metro area seamlessly, including projects in Fort Mill, Indian Land, Rock Hill, and other communities across the state line.',
  },
  {
    icon: Users,
    title: 'Single Point of Contact',
    desc: 'Every project is assigned a dedicated project manager who serves as your single point of contact from groundbreaking to handover. You will never be passed between departments or left wondering who to call. Our project managers provide weekly written updates, maintain shared photo documentation, and are available by phone during business hours.',
  },
  {
    icon: Leaf,
    title: 'USGBC Member — Sustainable Building',
    desc: 'As a proud member of the U.S. Green Building Council, sustainable building practices are integrated into every project. From energy-efficient HVAC systems and LED lighting to low-VOC materials and waste reduction protocols, we help Charlotte businesses build spaces that are better for occupants and the environment without compromising performance or budget.',
  },
  {
    icon: DollarSign,
    title: 'Transparent, Line-Item Pricing',
    desc: 'We provide detailed, line-item estimates that show exactly where every dollar goes. No hidden fees, no vague allowances, no surprise change orders. Our transparent pricing approach means you can compare bids accurately, make informed decisions about scope adjustments, and maintain confidence in your budget throughout the construction process.',
  },
  {
    icon: Clock,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to every project. That experience translates into better problem-solving, more accurate estimating, stronger subcontractor relationships, and the ability to anticipate issues before they become expensive problems. Experience is the difference between a project that finishes on time and one that does not.',
  },
];

const industries = [
  {
    icon: Heart,
    title: 'Healthcare & Medical',
    desc: 'Urgent care clinics, dental practices, physical therapy centers, specialty medical offices, imaging centers, and veterinary facilities. We understand healthcare construction compliance requirements including infection control, medical gas systems, lead-lined walls, and specialized HVAC for pressure-controlled environments.',
  },
  {
    icon: Store,
    title: 'Retail & Shopping',
    desc: 'Boutique shops, national chain stores, shopping center anchor tenants, showrooms, and specialty retail spaces. Our fast-track retail schedules minimize lost revenue by getting your doors open on time with the customer-facing quality that drives foot traffic and sales.',
  },
  {
    icon: Coffee,
    title: 'Hospitality & Food Service',
    desc: 'Restaurants, bars, breweries, cafes, bakeries, food halls, and catering facilities. We have deep experience with commercial kitchen construction, health department compliance, hood ventilation, grease traps, walk-in coolers, and the specialized plumbing and electrical systems that food service demands.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Law firms, accounting offices, financial services, insurance agencies, real estate offices, and coworking spaces. We build professional environments that project credibility to your clients while creating productive, comfortable workplaces for your team.',
  },
  {
    icon: Factory,
    title: 'Industrial & Logistics',
    desc: 'Distribution centers, flex spaces, light manufacturing, cold storage, and warehouse facilities. From concrete slab work and steel erection to loading docks and climate-controlled storage, we build industrial spaces optimized for your specific operational workflow.',
  },
  {
    icon: Church,
    title: 'Religious & Nonprofit',
    desc: 'Churches, community centers, nonprofit offices, and event spaces. We work with religious and nonprofit organizations to maximize the impact of every construction dollar, creating spaces that serve their communities with quality materials and thoughtful design within budget constraints.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Childcare',
    desc: 'Daycare centers, tutoring facilities, private schools, and training centers. Educational construction requires specific safety standards, age-appropriate design, proper egress planning, and compliance with state licensing requirements for childcare and educational occupancy.',
  },
];

const faqs = [
  {
    question: 'What types of commercial construction does We Build handle in Charlotte?',
    answer: 'We Build handles all types of commercial construction across the Charlotte metro area including ground-up office buildings, retail spaces, restaurants, medical and dental facilities, warehouses, industrial buildings, mixed-use developments, and commercial renovations. Our NC and SC general contractor licenses allow us to work throughout the greater Charlotte region including Fort Mill, Lake Norman, and surrounding counties.',
  },
  {
    question: 'How much does commercial construction cost in Charlotte, NC in 2026?',
    answer: 'Commercial construction costs in Charlotte vary by project type. Office upfits range from $50-$175 per square foot. Retail build-outs run $75-$200 per square foot. Restaurant construction costs $150-$350 per square foot. Medical facilities range from $150-$400 per square foot. Ground-up office construction typically runs $200-$400+ per square foot. We provide detailed, line-item estimates for every project so there are no surprises.',
  },
  {
    question: 'How long does commercial construction take in Charlotte?',
    answer: 'Timelines depend on project scope. Standard office upfits take 3-5 months. Retail build-outs average 3-5 months. Restaurant construction requires 5-8 months. Medical facilities take 4-8 months. Ground-up commercial buildings range from 10-18 months. The Mecklenburg County permitting process typically adds 4-8 weeks before construction can begin. We provide a detailed timeline during the pre-construction phase.',
  },
  {
    question: 'Do you handle commercial building permits in Mecklenburg County?',
    answer: 'Yes, we manage the entire permitting process with Mecklenburg County, the City of Charlotte, and surrounding jurisdictions including Fort Mill, Huntersville, and Matthews. This includes building permits, mechanical permits, electrical permits, plumbing permits, fire permits, zoning approvals, and certificates of occupancy. Our familiarity with local code officials helps avoid delays.',
  },
  {
    question: 'Are you a licensed and insured commercial contractor in North Carolina?',
    answer: 'Yes, We Build holds active general contractor licenses in both North Carolina and South Carolina. We are fully insured with general liability, workers compensation, and commercial auto coverage. We also carry builder risk insurance for projects under construction. As a USGBC member, we maintain the highest professional standards in the commercial construction industry.',
  },
  {
    question: 'What financing options are available for commercial construction projects?',
    answer: 'Most commercial construction projects are financed through commercial construction loans from banks or SBA loans for small business owners. Some landlords provide tenant improvement allowances for commercial upfits. We work with your lender to provide the documentation they require, including detailed cost breakdowns, draw schedules, and progress certifications. We can recommend local lenders experienced with construction financing.',
  },
  {
    question: 'How do you handle ADA compliance in commercial construction?',
    answer: 'ADA compliance is integrated into every commercial project from the design phase. We ensure accessible entrances, restrooms, parking, pathways, counters, and signage meet or exceed current ADA Standards for Accessible Design. For existing buildings, we conduct ADA assessments to identify required modifications. Compliance is not optional and we build it into every project by default.',
  },
  {
    question: 'Do you incorporate green building practices into commercial projects?',
    answer: 'As a U.S. Green Building Council member, sustainable practices are part of our standard approach. We incorporate energy-efficient HVAC, LED lighting, low-VOC paints and adhesives, water-saving fixtures, and recycled-content materials where appropriate. We can also pursue LEED certification for clients who want formal green building recognition for their commercial space.',
  },
  {
    question: 'What warranty do you provide on commercial construction work?',
    answer: 'We provide a one-year workmanship warranty on all commercial construction projects, covering any defects in materials or labor. Major building systems like HVAC, roofing, and electrical carry manufacturer warranties ranging from 5-25 years. As a local Charlotte company, we are accessible for warranty service and stand behind our work long after the project is complete.',
  },
  {
    question: 'How does commercial construction cost in Charlotte compare to Raleigh or Atlanta?',
    answer: 'Charlotte commercial construction costs are generally 5 to 15 percent lower than Atlanta and comparable to Raleigh-Durham. Charlotte benefits from a competitive subcontractor market, lower labor costs than major gateway cities, and efficient permitting through Mecklenburg County. However, Charlotte construction costs have been rising 3 to 6 percent annually due to population growth and sustained demand. Material costs are similar across all three markets since they share Southeast supply chains. We Build provides current, Charlotte-specific pricing on every estimate so you are working with real local numbers, not national averages.',
  },
  {
    question: 'What Mecklenburg County inspections are required during commercial construction?',
    answer: 'Commercial construction in Mecklenburg County requires multiple inspections at prescribed milestones. Typical inspections include footing and foundation before concrete pour, rough framing, rough electrical, rough plumbing, rough mechanical and HVAC, fire alarm and sprinkler systems, insulation and energy code compliance, and final building inspection before certificate of occupancy is issued. The fire marshal conducts separate inspections for fire suppression, alarm systems, and egress compliance. Failed inspections require corrections and reinspection, which can delay the schedule. Our project managers coordinate all inspections proactively and ensure each trade is ready before calling for inspection to avoid delays.',
  },
  {
    question: 'Do I need a separate architect or can We Build work with my existing design team?',
    answer: 'Most commercial projects require an architect, and we work closely with your architect and design team to ensure a seamless build process. We coordinate engineering, permitting, and construction to keep the project on schedule and on budget. If you do not yet have an architect, we can recommend experienced commercial architects in the Charlotte area who specialize in your project type.',
  },
];

export default function CommercialConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Construction',
            'Full-service commercial construction in Charlotte, NC. Office buildings, retail, restaurants, medical facilities, warehouses, mixed-use developments. Licensed general contractor in NC and SC. Veteran & family-owned. USGBC member. 60+ years combined experience.',
            'https://webuildclt.com/services/commercial-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Commercial Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Commercial Construction Charlotte NC"
        subtitle="Full-service commercial construction for Charlotte businesses. Licensed in NC & SC. Veteran & family-owned. 60+ years combined experience."
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs + Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Commercial Construction' },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 mt-8">
            {/* Main Content */}
            <div className="article-prose">
              <h2 id="overview">Commercial Construction Services in Charlotte, NC</h2>

              <p>
                Charlotte is one of the fastest-growing commercial markets in the Southeast. New businesses are opening every week. Existing companies are expanding into larger spaces. Landlords are converting outdated buildings into modern, productive workplaces. If you need a commercial construction company in Charlotte that delivers on its promises, that communicates clearly throughout the process, and that stands behind its work after the keys are handed over, you are in the right place.
              </p>

              <p>
                We Build is a veteran and family-owned commercial construction company based in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>.
                We hold active <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> licenses
                in both North Carolina and South Carolina, and we bring over 60 years of combined construction experience to every project. Our clients include business owners, property managers, franchise operators, healthcare providers, and commercial real estate developers throughout the Charlotte metro area, from Uptown Charlotte to{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill, SC</Link> and{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>.
              </p>

              <p>
                What makes us different from other commercial construction companies in Charlotte? Two things. First, we work closely with your architect and design team to ensure seamless coordination between design and construction, eliminating the finger-pointing and change orders that plague fragmented projects. Second, we are U.S. Green Building Council (USGBC) members, so sustainable building practices are integrated into every project from the start, not bolted on as an afterthought.
              </p>

              <p>
                Whether you are planning a ground-up office building, a restaurant build-out, a medical clinic, a{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit</Link>,
                or a warehouse expansion, our team has the licensing, experience, and project management systems to deliver your commercial construction project on time, on budget, and to the quality standard your business deserves. We also offer specialized{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">roof coating</Link> services
                through our <Link href="/we-coat" className="text-primary hover:underline">We Coat</Link> division for commercial buildings that need roof restoration rather than full replacement.
              </p>

              <h2 id="why-charlotte">Charlotte&rsquo;s Commercial Construction Market in 2026</h2>

              <p>
                Charlotte is the 15th largest city in the United States and the largest city in North Carolina. The metro area is home to over 2.7 million people and continues to grow at a rate of roughly 50,000 new residents per year. That population growth drives demand for commercial space across every sector: offices for the financial services and technology companies that are relocating here, retail spaces to serve new neighborhoods, restaurants to feed a city that loves to eat out, and medical facilities to care for a growing and aging population.
              </p>

              <p>
                The Charlotte commercial real estate market remains strong heading into 2026. According to commercial real estate data, the Charlotte metro has over 190 million square feet of office space, 175 million square feet of industrial space, and 90 million square feet of retail space. New commercial development continues along I-77, I-85, and the I-485 loop, with particular growth in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and the{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>/Indian Land corridor across the state line.
              </p>

              <div className="callout">
                <div className="callout-title">Key Market Insight</div>
                <p>
                  Charlotte added over 40,000 jobs in 2025, with the strongest growth in healthcare, technology, and professional services. Each of these sectors requires specialized commercial construction, from medical exam rooms with infection control systems to open-concept tech offices with advanced networking infrastructure. For a comprehensive overview of the local market and what to expect when building commercial in Charlotte, read our{' '}
                  <Link href="/guides/commercial-construction-charlotte-guide" className="text-primary hover:underline">complete commercial construction guide</Link>.
                </p>
              </div>

              <p>
                For business owners, this growth means opportunity, but it also means competition for quality contractors. The best commercial construction companies in Charlotte are booked months in advance. Starting your planning early and choosing a contractor with a proven track record is critical to staying on schedule and within budget. The demand for commercial space shows no signs of slowing, which means construction costs will continue to be influenced by labor availability and material pricing in the Charlotte market.
              </p>

              <h2 id="project-types">Types of Commercial Construction We Handle</h2>

              <p>
                We Build handles commercial construction projects of all sizes and types across the Charlotte metro area. Whether you are building from the ground up or renovating an existing space, our team has the experience and licensing to deliver your project. Here is a detailed look at the commercial project types we specialize in. For projects that involve renovating an existing commercial space rather than new construction, see our{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfits</Link> page for more specific information.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Quick Stats */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Licensed in NC &amp; SC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">60+ years combined experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <HardHat className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Veteran &amp; family-owned</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileCheck className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">USGBC member</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">Based in South Charlotte</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">Free Consultation</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Tell us about your commercial project. We provide detailed, transparent estimates with no obligation.
                  </p>
                  <Button variant="secondary" className="w-full mb-3" asChild>
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                  <a
                    href="tel:+19804711745"
                    className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    (980) 471-1745
                  </a>
                </div>

                {/* TOC */}
                <nav className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">On This Page</h3>
                  <div className="toc-sidebar">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'why-charlotte', label: 'Charlotte Market' },
                      { id: 'project-types', label: 'Project Types' },
                      { id: 'cost-guide', label: 'Cost Guide' },
                      { id: 'construction-process', label: 'Our 9-Step Process' },
                      { id: 'why-we-build', label: 'Why Choose We Build' },
                      { id: 'industries', label: 'Industries We Serve' },
                      { id: 'permits', label: 'Permits & Regulations' },
                      { id: 'faq', label: 'FAQ' },
                    ].map((item) => (
                      <a key={item.id} href={`#${item.id}`}>{item.label}</a>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Project Types Grid */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((type) => (
              <Card key={type.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{type.desc}</p>
                  <p className="text-sm text-muted-foreground mb-3">{type.details}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="font-semibold text-foreground">{type.cost}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="container mx-auto px-4">
        <div className="inline-cta my-0 rounded-none md:rounded-lg md:my-8">
          <p>Ready to discuss your commercial construction project in Charlotte? We provide free consultations with detailed, line-item breakdowns.</p>
          <Link href="/contact">Get a Free Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>

      {/* Cost Guide */}
      <section className="py-16 bg-background" id="cost-guide-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="cost-guide">Commercial Construction Costs in Charlotte (2026)</h2>

            <p>
              One of the most common questions we hear from Charlotte business owners is: &ldquo;How much does commercial construction cost?&rdquo; The honest answer is that it depends on your project type, scope, finishes, and site conditions. However, we can provide realistic cost ranges based on our experience building commercial projects in the Charlotte market. Understanding these ranges helps you plan a realistic budget and have more productive conversations with lenders, landlords, and contractors.
            </p>

            <p>
              The table below shows current pricing ranges for common commercial construction project types in the Charlotte metro area. These ranges include labor, materials, permits, and general contractor overhead. They do not include furniture, fixtures, equipment (FF&amp;E), or architectural/engineering fees, which typically add 8-15% to the total project cost.
            </p>

            <table className="cost-table">
              <thead>
                <tr>
                  <th>Project Type</th>
                  <th>Cost per Sq Ft</th>
                  <th>Typical Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Office Upfit (Standard)', cost: '$50-$120', time: '3-4 months' },
                  { type: 'Office Upfit (High-End)', cost: '$120-$175', time: '3-5 months' },
                  { type: 'Retail Build-Out', cost: '$75-$200', time: '3-5 months' },
                  { type: 'Restaurant Build-Out', cost: '$150-$350', time: '5-8 months' },
                  { type: 'Medical/Dental Office', cost: '$150-$400', time: '4-8 months' },
                  { type: 'Warehouse (Shell + Office)', cost: '$80-$200', time: '6-10 months' },
                  { type: 'Ground-Up Office Building', cost: '$200-$400+', time: '10-18 months' },
                  { type: 'Mixed-Use Development', cost: '$200-$450+', time: '12-24 months' },
                ].map((item) => (
                  <tr key={item.type}>
                    <td>{item.type}</td>
                    <td className="cost-value">{item.cost}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="callout callout-cost">
              <div className="callout-title">Cost-Saving Tip</div>
              <p>
                Value engineering can
                save 10-20% on total project costs. By identifying cost-effective alternatives for materials and methods early in the planning phase, you reduce expenses without sacrificing quality. Ask us about our value engineering process for your commercial project.
              </p>
            </div>

            <h3>What Drives Commercial Construction Costs in Charlotte?</h3>

            <p>
              Several factors influence the final cost of your commercial construction project in Charlotte. Understanding these factors helps you plan a realistic budget and avoid surprises during construction.
            </p>

            <ul>
              <li><strong>Project type and complexity.</strong> A standard office upfit with drywall, carpet, and paint is far less expensive than a restaurant requiring commercial kitchen ventilation, grease traps, and fire suppression systems. Medical facilities that need specialized HVAC for air pressure control or lead-lined walls for radiology cost more per square foot than general office space.</li>
              <li><strong>Finish level.</strong> The gap between builder-grade finishes and high-end finishes can be 50-100% of the base cost. Polished concrete is cheaper than hardwood flooring. Standard drywall ceilings cost less than exposed structural ceilings with custom lighting. We help you understand the full range of finish options and how selections affect your budget.</li>
              <li><strong>Site conditions.</strong> Existing building conditions matter significantly. An older building may need electrical panel upgrades, structural reinforcement, asbestos abatement, or ADA accessibility improvements that are not immediately obvious. A thorough site assessment before bidding prevents expensive surprises later. This is why our process always begins with a detailed site evaluation.</li>
              <li><strong>Location within Charlotte.</strong> Construction costs vary by location. Projects in Uptown Charlotte or South End may face higher labor costs due to parking challenges, restricted delivery windows, and urban site logistics. Suburban locations like Ballantyne, <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>, or <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link> typically have lower site-related costs.</li>
              <li><strong>Current market conditions.</strong> Material costs fluctuate based on supply chain conditions and demand. Labor availability also affects pricing. In Charlotte, the strong construction market means skilled tradespeople are in high demand, which can impact scheduling and costs. Planning ahead and booking your contractor early helps lock in favorable pricing.</li>
              <li><strong>Permitting and code requirements.</strong> Mecklenburg County building codes, fire codes, and zoning regulations all affect construction scope and cost. Projects in historic districts or those requiring special zoning variances may have additional costs and longer timelines.</li>
            </ul>

            <h3>Budgeting Tips for Commercial Construction in Charlotte</h3>

            <p>
              Based on our experience building commercial projects across the Charlotte metro, here are practical budgeting recommendations that help business owners avoid common financial pitfalls:
            </p>

            <ul>
              <li><strong>Budget a 10-15% contingency.</strong> Even the best-planned projects encounter surprises. Hidden conditions in existing buildings, material price increases, or minor scope changes are normal. A contingency fund prevents these from derailing your project or forcing you to cut corners on finishes.</li>
              <li><strong>Get detailed estimates, not lump-sum bids.</strong> Line-item estimates allow you to compare contractors accurately, understand where your money goes, and make informed decisions about where to invest or save. We provide detailed breakdowns for every project.</li>
              <li><strong>Factor in soft costs.</strong> Architectural and engineering fees, permit fees, furniture and equipment, technology infrastructure, moving costs, and temporary space rental during construction are all expenses that exist outside the construction contract but affect your total project budget.</li>
              <li><strong>Consider phased construction.</strong> If your budget is tight, we can help you plan a phased approach that builds the essential spaces first and adds secondary areas later. This is common with growing businesses that need to open quickly but plan to expand within their lease.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 bg-muted" id="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Process</span>
            <h2 id="construction-process" className="mt-2 mb-4">Our 9-Step Commercial Construction Process</h2>
            <p className="text-muted-foreground">
              Every commercial construction project at We Build follows a proven nine-step process. This structured approach ensures your project stays on schedule, on budget, and meets your quality expectations from initial consultation through final handover.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <Card key={step.title} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-background" id="why-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Why We Build</span>
            <h2 id="why-we-build" className="mt-2 mb-4">Why Choose We Build for Commercial Construction</h2>
            <p className="text-muted-foreground">
              Charlotte has dozens of commercial contractors. Here is why business owners, property managers, and developers choose We Build for their commercial construction projects. Visit our{' '}
              <Link href="/portfolio" className="text-primary hover:underline">portfolio</Link> to see the results, or{' '}
              <Link href="/about" className="text-primary hover:underline">learn more about our company</Link>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 gradient-warm" id="industries-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Industries</span>
            <h2 id="industries" className="mt-2 mb-4">Industries We Serve with Commercial Construction</h2>
            <p className="text-muted-foreground">
              Every industry has unique construction requirements. Our 60+ years of combined experience span healthcare compliance, restaurant kitchen systems, retail storefront design, and industrial logistics. Here are the industries we serve most frequently in the Charlotte metro area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry) => (
              <Card key={industry.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="container mx-auto px-4">
        <div className="inline-cta my-0 rounded-none md:rounded-lg md:my-8">
          <p>Looking for a commercial contractor who understands your industry? Tell us about your project and we will show you relevant examples from our <Link href="/portfolio" className="text-primary-foreground underline hover:no-underline">portfolio</Link>.</p>
          <Link href="/contact">Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>

      {/* Permits & Regulations */}
      <section className="py-16 bg-background" id="permits-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="permits">Commercial Construction Permits &amp; Regulations in Charlotte</h2>

            <p>
              Every commercial construction project in Charlotte requires permits from the local jurisdiction, which is typically the City of Charlotte or Mecklenburg County. For projects in{' '}
              <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link> or York County, South Carolina permitting applies. Understanding the permitting process upfront helps you plan realistic timelines and avoid costly delays. As your{' '}
              <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link>, we manage this entire process on your behalf.
            </p>

            <h3>Types of Permits Required</h3>

            <p>
              Most commercial projects require multiple permits, which can be submitted simultaneously to shorten the overall timeline:
            </p>

            <ul>
              <li><strong>Building permit.</strong> Required for all construction that involves structural changes, new walls, or changes to the building envelope. This is the primary permit and the one that takes the longest to review.</li>
              <li><strong>Mechanical permit.</strong> Required for HVAC installation, ductwork modifications, and ventilation systems. Commercial kitchens and medical facilities typically have more complex mechanical requirements.</li>
              <li><strong>Electrical permit.</strong> Required for new circuits, panel upgrades, lighting installations, and low-voltage systems (data, security, fire alarm).</li>
              <li><strong>Plumbing permit.</strong> Required for new fixtures, pipe modifications, grease traps, and medical gas systems.</li>
              <li><strong>Fire permit.</strong> Required for fire sprinkler modifications, fire alarm installations, and commercial kitchen hood suppression systems.</li>
              <li><strong>Sign permit.</strong> Required for exterior signage, which has its own regulations regarding size, lighting, and placement based on your zoning district.</li>
            </ul>

            <h3>Charlotte Permitting Timeline</h3>

            <p>
              As of 2026, the commercial permitting timeline in Mecklenburg County typically runs 4-8 weeks from submission to approval. Simple projects (minor upfits with no structural changes) may be reviewed faster through expedited review. Complex projects (restaurants, medical facilities, or projects requiring zoning variances) may take longer. We factor permitting timelines into every project schedule so you have a realistic opening date from day one.
            </p>

            <h3>Building Codes and Compliance</h3>

            <p>
              Charlotte commercial construction projects must comply with the North Carolina State Building Code, which adopts the International Building Code (IBC) with state-specific amendments. Key compliance areas include structural integrity, fire safety and egress, energy efficiency (NC Energy Conservation Code), accessibility (ADA and NC Accessibility Code), and mechanical, electrical, and plumbing systems. For businesses in specific industries, additional regulations apply. Restaurants must meet Mecklenburg County Health Department standards. Medical facilities must comply with healthcare-specific codes. Childcare facilities must meet state licensing construction requirements.
            </p>

            <p>
              We manage all code compliance as part of our standard service. Our experience with Mecklenburg County code officials and inspectors helps us submit clean permit applications that are approved on the first review whenever possible, avoiding the resubmission cycle that can add weeks to your timeline.
            </p>

            <h3>How to Choose a Commercial Contractor in Charlotte</h3>

            <p>
              Choosing the right commercial construction company in Charlotte is one of the most important decisions you will make for your project. The wrong contractor can cost you months of delays, thousands in change orders, and a finished product that does not meet your expectations. Here are the criteria that matter most when evaluating commercial contractors in the Charlotte market.
            </p>

            <ul>
              <li><strong>Licensing.</strong> Verify that the contractor holds an active general contractor license with the NC Licensing Board for General Contractors. If your project is in South Carolina (<Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>, Indian Land, Rock Hill), they also need an SC Contractors Licensing Board license. Ask for license numbers and verify them online.</li>
              <li><strong>Insurance.</strong> Require proof of general liability insurance ($1 million minimum), workers compensation coverage, and commercial auto insurance. Without adequate insurance, you could be liable for injuries or property damage on your job site.</li>
              <li><strong>Commercial experience.</strong> Not every contractor is qualified to build a medical office or restaurant. Ask for references and photos from projects similar to yours. Experience with your specific project type matters.</li>
              <li><strong>Financial stability.</strong> Commercial construction projects can run into the hundreds of thousands or millions of dollars. Your contractor needs the financial capacity to fund materials and labor before drawing on your construction loan. Ask about their bonding capacity and banking relationships.</li>
              <li><strong>Communication style.</strong> During construction, you will interact with your contractor weekly or even daily. Choose a contractor whose communication style matches your expectations. We provide weekly written updates, maintain a shared photo log, and make our project managers available by phone during business hours.</li>
              <li><strong>Local market knowledge.</strong> A Charlotte-based contractor understands Mecklenburg County permitting timelines, local subcontractor availability, material lead times from regional suppliers, and the specific building codes that apply to your project location.</li>
            </ul>

            <div className="callout callout-tip">
              <div className="callout-title">Pro Tip</div>
              <p>
                Ask potential contractors for a detailed, line-item estimate rather than a single lump-sum number. Line-item estimates let you compare bids accurately, understand where your money is going, and identify areas where you might adjust scope to fit your budget. We provide line-item estimates on every project as standard practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Our Work</span>
            <h2 className="mt-2 mb-4">Recent Commercial Projects in Charlotte</h2>
            <p className="text-muted-foreground">
              See examples of our commercial construction work across the Charlotte metro area. Visit our{' '}
              <Link href="/portfolio" className="text-primary hover:underline">full portfolio</Link> for more projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/portfolio/urgent-care.jpg', alt: 'Broken to Better Urgent Care commercial construction Charlotte', title: 'Broken to Better Urgent Care' },
              { src: '/images/portfolio/fyzical-therapy.jpg', alt: 'FYZICAL Therapy commercial build-out Charlotte NC', title: 'FYZICAL Therapy' },
              { src: '/images/portfolio/pure-physique.jpg', alt: 'Pure Physique commercial upfit Fort Mill SC', title: 'Pure Physique' },
              { src: '/images/we-coat/mics-aerial-1.jpg', alt: 'Mountain Island Charter School commercial roof coating', title: 'MICS Roof Coating' },
            ].map((img) => (
              <Link key={img.src} href="/portfolio" className="group space-y-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden image-hover">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium group-hover:text-primary transition-colors">{img.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 gradient-steel text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &ldquo;We Build transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, communicative, and delivered on time and within budget. We highly recommend We Build for any construction project.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">Commercial Upfit &mdash; Fort Mill, SC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background" id="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq" className="text-center mb-8">
              Commercial Construction FAQ
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Answers to the questions Charlotte business owners ask most about commercial construction, costs, timelines, permits, insurance, green building, and working with a general contractor.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Related Services</span>
            <h2 className="mt-2">Explore Our Other Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Commercial Upfits', href: '/services/commercial-upfits', desc: 'Tenant improvements and space renovations for existing commercial buildings.' },
              { title: 'Commercial Renovation', href: '/services/commercial-renovation', desc: 'Full building renovation and remodeling for offices, retail, restaurants, and warehouses.' },
              { title: 'Tenant Improvements', href: '/services/tenant-improvements', desc: 'TI build-outs and leasehold improvements for office, retail, and medical tenants.' },
              { title: 'General Contractor', href: '/services/general-contractor', desc: 'Full-service general contracting for commercial projects of any size.' },
            ].map((service) => (
              <Card key={service.href} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Resources</span>
            <h2 className="mt-2">Commercial Construction Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Complete Guide to Commercial Construction in Charlotte', href: '/blog/commercial-construction-guide-charlotte-nc', category: 'Guide' },
              { title: 'Commercial Upfit Cost Breakdown', href: '/blog/commercial-upfit-cost-charlotte', category: 'Blog' },
              { title: 'Construction Permits in Mecklenburg County', href: '/blog/commercial-building-permits-mecklenburg-county-guide', category: 'Blog' },
              { title: 'Commercial Building Maintenance Checklist for Charlotte', href: '/guides/commercial-building-maintenance-checklist', category: 'Guide' },
              { title: 'Permit Guide: What Charlotte Property Owners Need to Know', href: '/guides/permit-guide-charlotte-property-owners', category: 'Guide' },
            ].map((post) => (
              <Card key={post.href} className="card-hover">
                <CardContent className="p-6">
                  <span className="section-label">{post.category}</span>
                  <h3 className="text-base font-semibold mt-2 mb-4">{post.title}</h3>
                  <Link
                    href={post.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    {post.category === 'Guide' ? 'Read Guide' : 'Read Article'}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">
            Ready to Build Your Commercial Project in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&rsquo;s trusted commercial construction company for a free consultation. Whether you need a{' '}
            <span className="text-primary-foreground">ground-up office building</span>, a{' '}
            <span className="text-primary-foreground">restaurant build-out</span>, a{' '}
            <span className="text-primary-foreground">medical facility</span>, or a{' '}
            <span className="text-primary-foreground">warehouse</span>, We Build delivers quality commercial construction on time and on budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="btn-shimmer">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
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
