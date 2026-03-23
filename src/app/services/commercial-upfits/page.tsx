import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Store,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Paintbrush,
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Upfits Charlotte NC | Office, Retail & Restaurant Build-Outs',
  description:
    'Expert commercial upfit contractor in Charlotte, NC. Office upfits, restaurant build-outs, retail renovations, medical facility upgrades & tenant improvements. Veteran-owned, licensed in NC & SC. Minimize business disruption. Free estimates. (704) 574-8124.',
  keywords: [
    'commercial upfit charlotte nc',
    'office upfit charlotte nc',
    'tenant upfit charlotte',
    'tenant improvement charlotte nc',
    'commercial renovation charlotte nc',
    'restaurant build out charlotte nc',
    'retail upfit charlotte nc',
    'medical office upfit charlotte',
    'warehouse upfit charlotte nc',
    'commercial build out charlotte',
    'office renovation charlotte nc',
    'ti allowance charlotte',
  ],
  openGraph: {
    title: 'Commercial Upfits Charlotte NC | We Build',
    description:
      'Transform your commercial space with expert upfit services. Office, retail, restaurant, medical & warehouse upfits across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/commercial-upfits',
    type: 'website',
  },
};

const upfitTypes = [
  {
    icon: Building2,
    title: 'Office Upfits',
    slug: 'office-upfits',
    desc: 'Modern workspace transformations including open-concept layouts, private offices, executive suites, conference rooms, break rooms, and reception areas.',
    details:
      'Charlotte businesses are rethinking their office spaces. Whether you are consolidating floors, adding collaboration zones, or creating a hybrid-friendly environment, an office upfit lets you reshape the workspace without relocating. We handle everything from demolition of existing walls to new electrical circuits for workstation pods, upgraded HVAC zoning for open floor plans, acoustic treatments for conference rooms, and ADA-compliant restroom renovations. Our team works with your IT department to coordinate data cabling, access control systems, and audio-visual installations so your technology infrastructure is built into the walls, not bolted on as an afterthought. Most office upfits in the Charlotte metro complete in 8 to 14 weeks depending on scope.',
    cost: '$50-$175/sq ft',
  },
  {
    icon: Store,
    title: 'Retail Upfits',
    slug: 'retail-upfits',
    desc: 'Storefront renovations, retail build-outs, and showroom conversions designed to attract foot traffic and maximize selling floor area.',
    details:
      'Retail upfits demand speed because every day your doors are closed costs revenue. We specialize in fast-track retail schedules that get Charlotte businesses open on time with the fit-and-finish customers expect. Our retail upfit services include custom display fixtures, fitting room construction, point-of-sale counter builds, backroom storage optimization, storefront facade updates, signage coordination, and ADA-compliant entrances. We understand Mecklenburg County permitting timelines for retail spaces and plan ahead to avoid delays. From boutique shops in South End to anchor tenant build-outs in suburban shopping centers, we deliver retail spaces that reflect your brand and serve your customers.',
    cost: '$75-$200/sq ft',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Build-Outs',
    slug: 'restaurant-build-outs',
    desc: 'Complete restaurant upfits including commercial kitchens, dining rooms, bar areas, outdoor patios, and health department-compliant infrastructure.',
    details:
      'Restaurant construction is one of the most complex commercial upfit types. Grease traps, hood ventilation systems, fire suppression, walk-in coolers and freezers, plumbing for multiple prep and wash stations, and compliance with Mecklenburg County health department codes all need precise coordination. Our team has built restaurants from fast-casual concepts to upscale dining establishments across the Charlotte metro area. We coordinate with equipment vendors, hood cleaning companies, and fire marshal inspections to ensure your facility passes every inspection on the first attempt. Restaurant upfits typically range from 12 to 20 weeks depending on kitchen complexity and whether outdoor dining is included.',
    cost: '$150-$350/sq ft',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Dental Office Upfits',
    slug: 'medical-dental-upfits',
    desc: 'Healthcare facility renovations meeting strict compliance, infection control, patient privacy, and accessibility standards.',
    details:
      'Medical and dental upfits require expertise in specialized HVAC systems for air pressure control between treatment rooms, lead-lined walls for radiology suites, medical gas piping, specialized plumbing with backflow prevention, and strict adherence to healthcare occupancy building codes. We coordinate with equipment vendors for imaging machines, dental chairs, sterilization systems, and laboratory equipment to ensure infrastructure is installed before the finish work begins. Our team understands HIPAA-compliant layout planning for patient privacy, ADA requirements for examination rooms, and the infection control standards that govern material selection in clinical environments. We have completed upfits for urgent care clinics, dental practices, physical therapy offices, and specialty medical practices across Charlotte and Fort Mill.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Industrial Upfits',
    slug: 'warehouse-industrial-upfits',
    desc: 'Warehouse office build-outs, climate-controlled storage areas, loading dock modifications, and light industrial space conversions.',
    details:
      'Warehouse and industrial upfits often involve carving out office space within a larger shell, adding climate-controlled zones for inventory or personnel, upgrading electrical service for machinery, installing compressed air lines, and modifying loading docks for operational efficiency. We also handle mezzanine construction, security cage installations, and clean room build-outs for manufacturing environments. Charlotte industrial corridor properties along I-77 and I-85 frequently need these conversions as businesses scale. Our team understands the structural considerations of working within pre-engineered metal buildings, including fire separation requirements between office and warehouse occupancies.',
    cost: '$40-$150/sq ft',
  },
  {
    icon: Paintbrush,
    title: 'Tenant Improvements (TI)',
    slug: 'tenant-improvements',
    desc: 'Custom tenant build-outs for commercial leases, coordinated with landlord requirements, base building systems, and TI allowance budgets.',
    details:
      'Tenant improvements are upfits performed as part of a new commercial lease. The landlord typically provides a tenant improvement allowance, a dollar amount per square foot that covers a portion of the build-out cost. We work with both landlords and tenants to maximize the TI allowance, ensure the scope aligns with the lease work letter, and deliver a space that meets the tenant business requirements without exceeding budget. Our experience with Charlotte commercial landlords and property managers means we understand standard lease requirements, landlord approval processes, and how to structure the project so that reimbursable costs are clearly documented for TI reimbursement.',
    cost: '$50-$200/sq ft',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Consultation & Site Visit',
    desc: 'We meet at your space to discuss your vision, business requirements, timeline, and budget. During this visit, we evaluate existing conditions including structural elements, mechanical systems, electrical capacity, plumbing locations, and ceiling heights. If you are working within a lease, we review the work letter and TI allowance terms to ensure alignment.',
  },
  {
    step: '02',
    title: 'Space Planning & Conceptual Design',
    desc: 'Our design-build team creates initial floor plans and conceptual layouts based on your operational needs. We consider traffic flow, departmental adjacencies, ADA accessibility, natural light optimization, and code-required egress paths. You can visit our Design Center to explore material options and see finish samples in person.',
  },
  {
    step: '03',
    title: 'Detailed Estimate & Value Engineering',
    desc: 'We deliver a detailed, line-item estimate that breaks down every cost category: demolition, framing, electrical, plumbing, HVAC, fire protection, finishes, fixtures, and permits. If the estimate exceeds your budget, our team identifies value engineering opportunities to reduce costs without sacrificing quality or function.',
  },
  {
    step: '04',
    title: 'Design Development & Finish Selection',
    desc: 'Once the budget is approved, we finalize construction drawings, mechanical engineering plans, and finish schedules. You select flooring, paint colors, countertop materials, lighting fixtures, and hardware. Our Design Center lets you see and touch every material before it goes into your space.',
  },
  {
    step: '05',
    title: 'Permitting & Approvals',
    desc: 'We prepare and submit all permit applications to Mecklenburg County or the relevant jurisdiction. This includes building permits, mechanical permits, electrical permits, plumbing permits, and fire alarm permits. We coordinate with plan reviewers to address comments quickly and keep the permitting timeline on track. If landlord approval is required, we manage that process in parallel.',
  },
  {
    step: '06',
    title: 'Pre-Construction Planning',
    desc: 'Before breaking ground, we finalize the construction schedule, order long-lead materials, coordinate subcontractor availability, and develop a phasing plan that minimizes disruption to your business or neighboring tenants. We establish site logistics including material staging, debris removal, and dust containment protocols.',
  },
  {
    step: '07',
    title: 'Construction Phase',
    desc: 'Construction begins with demolition and rough-in work for framing, electrical, plumbing, and HVAC. We then progress through insulation, drywall, ceiling grid installation, flooring, painting, millwork, and fixture installation. Weekly progress updates keep you informed. Most disruptive work such as demolition and concrete cutting is scheduled during off-hours when possible.',
  },
  {
    step: '08',
    title: 'Inspections & Quality Control',
    desc: 'We coordinate all required inspections with local building officials at each construction milestone: rough-in inspection, above-ceiling inspection, fire alarm test, and final inspection. Our project manager conducts internal quality control walks before every official inspection to ensure we pass on the first attempt.',
  },
  {
    step: '09',
    title: 'Punch List & Final Details',
    desc: 'After the major construction is complete, we conduct a thorough punch list walk-through with you to identify any items that need adjustment, touch-up, or correction. Our team addresses every punch list item promptly so you can move in on schedule.',
  },
  {
    step: '10',
    title: 'Project Handoff & Warranty',
    desc: 'We deliver your completed space with all close-out documentation including as-built drawings, equipment warranties, maintenance manuals, and final lien waivers. Our one-year workmanship warranty covers all construction performed by our team. We remain available for any post-construction questions or warranty items.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company with deep roots in the Charlotte community. Our military background instills discipline, accountability, and a commitment to delivering on every promise we make. When we give you a timeline and a budget, we stand behind them.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to every project. We have seen every type of commercial upfit challenge and know how to solve problems before they become costly delays. This experience translates directly into smoother projects and better outcomes for your business.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, allowing us to serve businesses throughout the greater Charlotte metro area including Fort Mill, Rock Hill, Indian Land, and the Lake Norman corridor. Our licensing ensures full compliance with state regulations and building codes.',
  },
  {
    icon: Lightbulb,
    title: 'Design-Build Capability',
    desc: 'Our in-house design-build approach means architecture, engineering, and construction are coordinated under one contract and one team. This eliminates the finger-pointing and communication gaps that plague projects where design and construction are handled by separate firms. You get faster decisions, fewer change orders, and a single point of accountability.',
  },
  {
    icon: Zap,
    title: 'Minimal Business Disruption',
    desc: 'We specialize in phased construction that keeps your business running during the upfit. Our team plans the most disruptive work, such as demolition, concrete cutting, and heavy mechanical work, during off-hours, weekends, or in isolated phases so your employees and customers experience minimal impact.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we incorporate sustainable building practices into our upfit projects. From energy-efficient lighting and HVAC systems to low-VOC paints and recycled content materials, we help your commercial space reduce its environmental footprint without compromising performance or aesthetics.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Knowledge',
    desc: 'We know the Charlotte commercial real estate market intimately. We understand Mecklenburg County permitting timelines, local code requirements, subcontractor availability, and material lead times specific to this region. This local knowledge helps us give you accurate estimates and realistic schedules from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Communication',
    desc: 'Every We Build client receives weekly progress reports, a dedicated project manager as their single point of contact, and immediate notification of any issues that could affect timeline or budget. We believe that informed clients make better decisions, and we work hard to ensure you always know exactly where your project stands.',
  },
];

const costFactors = [
  {
    type: 'Basic Office Upfit',
    range: '$50-$80/sq ft',
    desc: 'Paint, carpet or LVP flooring, basic lighting upgrades, minor layout changes, and cosmetic updates. Ideal for refreshing an existing office layout without structural changes.',
  },
  {
    type: 'Mid-Range Office Upfit',
    range: '$80-$130/sq ft',
    desc: 'New wall construction, upgraded finishes, modern LED lighting, technology infrastructure, glass partition walls, and upgraded HVAC controls. The most common scope for Charlotte office tenants.',
  },
  {
    type: 'High-End Executive Office',
    range: '$130-$200/sq ft',
    desc: 'Premium finishes, custom millwork, floor-to-ceiling glass walls, high-end lighting design, integrated audio-visual systems, and executive-level details throughout.',
  },
  {
    type: 'Retail Build-Out',
    range: '$75-$200/sq ft',
    desc: 'Custom display fixtures, fitting rooms, storefront modifications, signage infrastructure, specialty lighting design, and branded architectural elements.',
  },
  {
    type: 'Restaurant Build-Out',
    range: '$150-$350/sq ft',
    desc: 'Commercial kitchen with hood ventilation, grease trap, fire suppression, walk-in coolers, bar plumbing, dining room finishes, and outdoor patio construction.',
  },
  {
    type: 'Medical/Dental Facility',
    range: '$150-$300/sq ft',
    desc: 'Specialized HVAC with air pressure controls, medical gas piping, lead-lined walls, ADA-compliant exam rooms, infection control materials, and equipment infrastructure.',
  },
  {
    type: 'Warehouse Office Build-Out',
    range: '$40-$100/sq ft',
    desc: 'Office space carved out of warehouse shell, including demising walls, drop ceilings, HVAC for the office area, restrooms, and break room facilities.',
  },
];

const faqs = [
  {
    question: 'How much does a commercial upfit cost in Charlotte, NC?',
    answer:
      'Commercial upfit costs in Charlotte vary significantly by space type and scope. Basic office upfits start around $50 per square foot for cosmetic refreshes, while mid-range office renovations with new walls and finishes run $80 to $130 per square foot. Restaurant build-outs are the most expensive at $150 to $350 per square foot due to kitchen ventilation, plumbing, and fire suppression requirements. Medical facility upfits range from $150 to $300 per square foot. We provide detailed, line-item estimates after an initial site visit so you know exactly what every dollar covers before construction begins.',
  },
  {
    question: 'How long does a commercial upfit take in Charlotte?',
    answer:
      'Timelines depend on project scope and permitting. Simple office refreshes with cosmetic updates can complete in 4 to 6 weeks. Standard office upfits with new walls, electrical, and finishes take 8 to 14 weeks. Restaurant build-outs require 12 to 20 weeks due to kitchen complexity and specialized inspections. Medical facility upfits take 10 to 16 weeks. Mecklenburg County permitting adds 3 to 6 weeks before construction can begin. We provide a detailed schedule during the planning phase and update it weekly throughout construction.',
  },
  {
    question: 'Do I need permits for a commercial upfit in Charlotte?',
    answer:
      'Yes, most commercial upfits in Charlotte require building permits from Mecklenburg County Code Enforcement. Any work that involves structural changes, electrical modifications, plumbing alterations, HVAC changes, or fire alarm updates requires a permit. Even cosmetic renovations may require a permit if they affect egress paths or ADA compliance. We handle the entire permitting process, from preparing construction documents that meet code requirements to submitting applications, responding to plan review comments, and scheduling inspections.',
  },
  {
    question: 'What is a tenant improvement (TI) allowance and how does it work?',
    answer:
      'A tenant improvement allowance is a dollar amount per square foot that a commercial landlord provides to help cover the cost of customizing a leased space for a new tenant. For example, a TI allowance of $40 per square foot on a 3,000 square foot space provides $120,000 toward the build-out. The allowance amount is negotiated as part of the lease and varies based on market conditions, lease term length, and the landlord credit. We help tenants maximize their TI allowance by structuring the scope of work so that reimbursable costs are clearly documented and the most impactful improvements are prioritized within the available budget.',
  },
  {
    question: 'Can my business stay open during the upfit?',
    answer:
      'In many cases, yes. We specialize in phased construction that allows businesses to continue operating during the upfit. We create a phasing plan that isolates construction areas from occupied spaces using temporary walls, dust barriers, and negative air pressure containment. The most disruptive work, such as demolition, concrete cutting, and loud mechanical work, is scheduled during off-hours, weekends, or during periods when the adjacent spaces are unoccupied. For businesses where remaining open is critical, we develop a detailed logistics plan before construction begins.',
  },
  {
    question: 'Do you handle the design or do I need to hire an architect separately?',
    answer:
      'We Build offers full design-build services, which means we handle design and construction under one contract. Our team creates space plans, selects materials, coordinates engineering, and builds the project, all managed by a single project team. This eliminates the communication gaps and delays that occur when design and construction are handled by separate firms. If you already have an architect or designer, we are equally comfortable working with outside design professionals. Visit our Design Center in Charlotte to see material options and work through design decisions in person.',
  },
  {
    question: 'What ADA requirements apply to commercial upfits?',
    answer:
      'The Americans with Disabilities Act requires that commercial spaces be accessible to people with disabilities. For upfits, this includes accessible entrances, doorways with minimum 32-inch clear width, accessible restrooms, accessible routes throughout the space without steps or barriers, and proper signage. If your upfit involves a change in occupancy type or affects more than a certain percentage of the building value, additional ADA upgrades to the overall building may be triggered. Our team designs every upfit with ADA compliance built into the plans from the beginning, not added as an afterthought.',
  },
  {
    question: 'What insurance and warranties do you provide?',
    answer:
      'We Build carries comprehensive general liability insurance, workers compensation insurance, and commercial auto insurance. We are fully bonded and can provide payment and performance bonds for projects that require them. All construction work is backed by a one-year workmanship warranty covering materials and labor. Major building systems including HVAC, plumbing, and electrical have manufacturer warranties that typically extend 5 to 10 years. We provide complete close-out documentation at project handoff including all warranty certificates and maintenance manuals.',
  },
  {
    question: 'How do I finance a commercial upfit?',
    answer:
      'Commercial upfits can be financed through several methods. If you are leasing, the tenant improvement allowance covers a portion of the cost, with the tenant funding the balance. Some landlords will increase the TI allowance in exchange for a longer lease term or higher rent. SBA loans, commercial lines of credit, and equipment financing can cover costs beyond the TI allowance. For owner-occupied properties, commercial construction loans or business lines of credit are common financing tools. We provide detailed estimates and payment schedules that work with your financing timeline.',
  },
  {
    question: 'What areas do you serve for commercial upfits?',
    answer:
      'We Build serves the entire Charlotte metropolitan area for commercial upfits. Our primary service area includes Charlotte, South Charlotte, University City, NoDa, South End, Uptown, and surrounding Mecklenburg County communities. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman communities of Cornelius, Davidson, Huntersville, and Mooresville. Our NC and SC general contractor licenses allow us to work across both states, which is especially convenient for businesses with locations on both sides of the state line.',
  },
];

export default function CommercialUpfitsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Commercial Upfits Charlotte NC',
            'Expert commercial upfit services in Charlotte, NC. Office upfits, restaurant build-outs, retail renovations, medical facility upgrades, warehouse conversions, and tenant improvements. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/commercial-upfits'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Commercial Upfits Charlotte NC"
        subtitle="Transform your commercial space with expert upfit services from Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Commercial Upfits' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Upfit Contractor in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A commercial upfit transforms an existing building shell or previously occupied space
                into a fully functional environment tailored to your specific business needs. Unlike
                ground-up <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>,
                an upfit works within the existing structure, preserving the building envelope while
                completely reimagining the interior. This makes commercial upfits one of the most
                cost-effective ways for Charlotte businesses to get exactly the space they need
                without the timeline, expense, or complexity of new construction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s commercial real estate market is one of the most active in the Southeast.
                With more than 50 million square feet of office space, a booming restaurant scene,
                rapidly expanding healthcare facilities, and a thriving retail corridor along South
                Boulevard and beyond, the demand for commercial upfits has never been higher. Businesses
                moving into second-generation spaces, expanding within their current footprint, or
                adapting to new operational requirements all need an experienced upfit contractor who
                understands the unique challenges of renovating occupied and active commercial
                buildings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> with
                over 60 years of combined construction experience. We have completed commercial upfits
                across the Charlotte metro area for offices, restaurants, retail stores, medical
                facilities, dental practices, fitness studios, and warehouses. Our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">design-build</Link> approach
                means we handle everything from initial space planning and material selection at our{' '}
                <Link href="/design-center" className="text-primary hover:underline">Design Center</Link> to
                permitting, construction, and final handoff, all under one roof. Licensed in both
                North Carolina and South Carolina, we serve Charlotte and the surrounding communities
                including <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>.
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
                { icon: DollarSign, title: 'Cost-Effective', desc: 'Commercial upfits cost a fraction of new construction while completely transforming your space to meet your exact business requirements.' },
                { icon: Clock, title: 'Faster Timeline', desc: 'Most commercial upfits complete in 8 to 16 weeks, getting you into your new space months ahead of what new construction would require.' },
                { icon: Zap, title: 'Minimal Disruption', desc: 'We plan and phase work to keep your business running during construction, scheduling the most disruptive tasks during off-hours and weekends.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to schedules, budgets, and quality. When we make a promise, we keep it.' },
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

      {/* Types of Commercial Upfits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Upfit Types
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Commercial Upfits We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every commercial space has different requirements. We bring specialized experience to
              each project type, from straightforward office refreshes to complex restaurant kitchens
              and medical facilities that demand precision engineering and strict code compliance.
            </p>
          </div>
          <div className="space-y-8">
            {upfitTypes.map((type) => (
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

      {/* Our Upfit Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Commercial Upfit Process: 10 Steps from Consultation to Handoff
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent process designed to minimize business disruption, eliminate
              surprises, and deliver your commercial upfit on time and within budget. Every step
              includes clear communication so you always know exactly where your project stands.
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
              Why Choose We Build for Your Commercial Upfit
            </h2>
            <p className="text-muted-foreground">
              Choosing the right contractor is the most important decision in any commercial upfit
              project. The wrong contractor can cost you months of delays, thousands in change orders,
              and a finished product that does not match your vision. Here is what sets We Build apart.
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

      {/* Commercial Upfit Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Commercial Upfit Costs in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Commercial upfit costs in Charlotte depend on the type of space, scope of work,
                existing conditions, and finish level. Below are typical cost ranges based on our
                recent projects in the Charlotte metro area. Every project is different, and we
                provide detailed, line-item estimates after an initial site visit.
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
              <h3 className="font-semibold mb-3">Factors That Affect Your Upfit Cost</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Existing conditions:</strong> Older buildings may need asbestos abatement, outdated electrical panel upgrades, or plumbing replacements that add to the base cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Finish level:</strong> Standard commercial-grade finishes versus premium materials like natural stone, custom millwork, or designer lighting can shift costs significantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Mechanical complexity:</strong> Spaces requiring specialized HVAC, medical gas, commercial kitchen ventilation, or clean room environments cost more per square foot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Permitting requirements:</strong> Change of occupancy type triggers additional code requirements and inspections that add time and cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Timeline acceleration:</strong> Fast-track schedules requiring overtime labor, expedited material orders, or multiple shift work increase project costs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upfit vs. New Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Commercial Upfit vs. New Construction: Which Is Right for You?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                One of the most common questions Charlotte business owners ask is whether they should
                upfit an existing space or invest in{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  new commercial construction
                </Link>. Both approaches have distinct advantages depending on your situation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Commercial Upfit</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Lower cost:</strong> Typically 40-60% less than new construction because the building shell, foundation, roof, and site work already exist.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Faster timeline:</strong> Most upfits complete in 2 to 5 months versus 10 to 18 months for new construction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Established location:</strong> Move into a proven commercial area with existing traffic, parking, and infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>TI allowance:</strong> Landlords often contribute to upfit costs through tenant improvement allowances.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Less permitting:</strong> Interior upfits involve fewer regulatory hurdles than ground-up construction.</span>
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
                      <span><strong>Complete customization:</strong> Every element is built to your exact specifications from the ground up.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Optimal systems:</strong> Brand-new mechanical, electrical, and plumbing systems designed specifically for your operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Building ownership:</strong> Own the asset, build equity, and control your long-term occupancy costs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Site selection:</strong> Choose the ideal location, orientation, and visibility for your business.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>No existing limitations:</strong> No ceiling height, column spacing, or structural constraints from a previous building.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-muted-foreground text-center max-w-2xl mx-auto">
              For most Charlotte businesses, a commercial upfit provides the best combination of
              cost, speed, and customization. If you are unsure which approach is right for your
              situation, <Link href="/contact" className="text-primary hover:underline">contact our team</Link> for
              a free consultation. We will evaluate your requirements and help you make the most
              informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* Tenant Improvement Allowance Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                TI Allowance Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Tenant Improvement (TI) Allowance Guide for Charlotte Businesses
              </h2>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What Is a Tenant Improvement Allowance?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A tenant improvement allowance, commonly called a TI allowance or build-out
                  allowance, is a negotiated dollar amount that a commercial landlord contributes
                  toward the cost of customizing a leased space for a new tenant. The allowance
                  is typically expressed as a dollar amount per square foot and is factored into
                  the overall lease economics. For example, a $45 per square foot TI allowance on
                  a 5,000 square foot space provides $225,000 toward the build-out.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In Charlotte&apos;s current commercial real estate market, TI allowances for office
                  spaces typically range from $20 to $60 per square foot depending on the building
                  class, lease term, and negotiating leverage. Class A office buildings in Uptown
                  Charlotte and South End often offer higher allowances to attract quality tenants,
                  while suburban office parks may offer lower allowances but with more favorable
                  base rent rates.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">How to Maximize Your TI Allowance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Get a Contractor Involved Early',
                      desc: 'Having your upfit contractor provide preliminary pricing during lease negotiations gives you leverage to request an appropriate TI allowance based on actual construction costs, not guesswork.',
                    },
                    {
                      title: 'Negotiate the Work Letter',
                      desc: 'The lease work letter defines what the landlord will provide as base building condition and what the TI allowance covers. Ensure the work letter clearly defines base building HVAC, electrical, plumbing, and fire protection so you are not paying for items the landlord should provide.',
                    },
                    {
                      title: 'Prioritize High-Impact Improvements',
                      desc: 'If your TI allowance does not cover the full build-out, focus spending on items that are hardest to change later such as wall locations, plumbing rough-ins, electrical capacity, and HVAC zones. Cosmetic upgrades can be added in phases.',
                    },
                    {
                      title: 'Document Everything for Reimbursement',
                      desc: 'Most landlords require detailed invoices, lien waivers, and proof of payment before releasing TI funds. We structure our billing to align with landlord reimbursement requirements so you receive your allowance without delays.',
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
                <p className="text-muted-foreground leading-relaxed">
                  We Build has extensive experience working with Charlotte commercial landlords and
                  property management companies on tenant improvement projects. We understand the
                  standard TI reimbursement processes, documentation requirements, and landlord
                  approval workflows. If you are entering a new lease and need help understanding
                  how much your upfit will cost, <Link href="/contact" className="text-primary hover:underline">contact us for a preliminary estimate</Link> that
                  you can use during lease negotiations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Upfit Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Recent Commercial Upfit Projects in Charlotte
            </h2>
            <p className="text-muted-foreground">
              See how We Build has transformed commercial spaces across the Charlotte metro area.
              Visit our <Link href="/portfolio" className="text-primary hover:underline">full portfolio</Link> for
              more project examples.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/portfolio/urgent-care.jpg', alt: 'Broken to Better Urgent Care waiting room upfit in Charlotte NC', title: 'Urgent Care — Waiting Room' },
              { src: '/images/portfolio/fyzical-therapy.jpg', alt: 'FYZICAL Therapy front desk commercial build-out Charlotte', title: 'FYZICAL Therapy — Front Desk' },
              { src: '/images/portfolio/pure-physique.jpg', alt: 'Pure Physique fitness studio storefront upfit Fort Mill SC', title: 'Pure Physique — Storefront' },
              { src: '/images/portfolio/urgent-care-4.jpg', alt: 'Urgent care exam room build-out and medical upfit', title: 'Urgent Care — Exam Room' },
              { src: '/images/portfolio/fyzical-therapy-2.jpg', alt: 'FYZICAL Therapy treatment room commercial renovation', title: 'FYZICAL — Treatment Room' },
              { src: '/images/portfolio/pure-physique-3.jpg', alt: 'Pure Physique interior gym build-out and fitness studio upfit', title: 'Pure Physique — Interior' },
            ].map((img) => (
              <div key={img.src} className="space-y-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden image-hover">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center">{img.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Watch Our Upfit Projects</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { src: '/videos/fyzical-upfit.mp4', poster: '/images/portfolio/fyzical-therapy.jpg', title: 'FYZICAL Therapy Build-Out' },
                { src: '/videos/pure-remedies-cbd.mp4', poster: '/images/portfolio/pure-remedies.jpg', title: 'Pure Remedies CBD Build-Out' },
              ].map((video) => (
                <div key={video.src} className="space-y-3">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video className="w-full h-full object-cover" controls preload="metadata" poster={video.poster}>
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-medium">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Upfit Clients Say</h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention
              to detail and commitment to quality exceeded our expectations.
              The team was professional, communicative, and delivered on time
              and within budget. We could not have asked for a better contractor
              for our commercial build-out.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">
                  Commercial Upfit — <Link href="/areas/fort-mill-sc" className="hover:underline">Fort Mill, SC</Link>
                </div>
              </div>
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
                Commercial Upfit Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte business owners ask about
                commercial upfits, costs, timelines, permits, and tenant improvements.
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
            <h2 className="text-3xl font-bold">Commercial Upfit Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and articles for more information on commercial upfits in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How Much Does a Commercial Upfit Cost?', slug: 'commercial-upfit-cost-charlotte' },
              { title: 'Office Upfit vs. Full Renovation', slug: 'office-upfit-vs-full-renovation' },
              { title: '7 Signs Your Space Needs an Upfit', slug: '7-signs-commercial-space-needs-upfit' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
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
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning an office upfit, restaurant build-out, medical facility
            renovation, or tenant improvement project in Charlotte, We Build has the experience,
            licenses, and local knowledge to deliver your project on time and within budget.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site visit and detailed estimate. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities.
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
              <a href="tel:7045748124">
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
