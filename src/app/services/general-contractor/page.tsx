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
  Home,
  Hammer,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Users,
  ClipboardCheck,
  FileCheck,
  HardHat,
  DollarSign,
  MapPin,
  Clock,
  Ruler,
  Scale,
  AlertTriangle,
  Search,
  Paintbrush,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Contractor Charlotte NC | Licensed & Veteran-Owned | We Build',
  description:
    'Licensed general contractor near me in Charlotte, NC. Commercial construction, upfits, design-build & roof coating. Veteran-owned, 60+ years combined experience. Licensed in NC & SC. Free estimates. (704) 574-8124.',
  keywords: [
    'general contractor charlotte nc',
    'general contractor near me',
    'general contractor in charlotte nc',
    'licensed general contractor charlotte',
    'commercial general contractor charlotte nc',
    'residential general contractor charlotte nc',
    'general contractor near me charlotte',
    'best general contractor charlotte nc',
    'charlotte nc construction company',
    'building contractor charlotte nc',
    'general contracting services charlotte',
    'general contractor Charlotte North Carolina',
    'general contractor contractor near me',
    'licensed general contractor near me',
    'commercial GC Charlotte NC',
    'GC Charlotte',
    'GC near me Charlotte',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/general-contractor',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Ground-up commercial construction for office buildings, retail centers, restaurants, medical facilities, warehouses, and mixed-use developments throughout Charlotte and the surrounding region. We manage every phase from site preparation and foundation work through framing, mechanical systems, interior finishing, and final inspections. Our commercial projects range from 2,000-square-foot retail spaces to multi-story office buildings, and we bring the same level of precision and accountability to each one. As a licensed commercial general contractor in both North Carolina and South Carolina, we handle permitting, code compliance, and inspections across jurisdictions.',
    href: '/services/commercial-construction',
  },
  {
    icon: Hammer,
    title: 'Commercial Upfits & Renovations',
    description:
      'Transform existing commercial spaces into high-performing work environments tailored to your business operations. Our commercial upfit services cover offices, restaurants, medical practices, retail stores, fitness studios, and industrial facilities across Charlotte. We specialize in tenant improvements that maximize your lease space, phased renovations that keep your business operational during construction, and fast-track schedules that minimize revenue disruption. Every upfit project includes a detailed scope of work, transparent pricing, and a dedicated project manager.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Paintbrush,
    title: 'Design-Build Services',
    description:
      'Our design-build approach combines architectural design, engineering, and construction under a single contract, giving you one point of accountability from concept through completion. This integrated method eliminates the communication gaps and finger-pointing that occur when architects and builders are separate entities. Visit our Design Center in South Charlotte to explore materials, finishes, and layouts with our design team before construction begins. Design-build consistently delivers projects faster and with fewer change orders than the traditional design-bid-build approach.',
    href: '/services/design-build',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    description:
      'Eco-friendly commercial roof coating systems that extend the life of your existing roof by 10 to 15 years at a fraction of the cost of full replacement. Our We Coat division applies high-performance elastomeric and silicone coatings that reflect UV radiation, reduce cooling costs by up to 30 percent, and eliminate leaks. Roof coating is ideal for flat and low-slope commercial roofs including TPO, EPDM, modified bitumen, and metal substrates. Most roof coating projects are completed in just two to five days with zero business disruption.',
    href: '/services/roof-coating',
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: 'Licensed in NC & SC',
    description:
      'Fully licensed and insured general contractor with active licenses in both North Carolina and South Carolina, allowing us to serve the entire Charlotte metro area without jurisdictional complications.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'Founded by veterans who bring military discipline, integrity, and accountability to every construction project. We treat your project like our own.',
  },
  {
    icon: CheckCircle,
    title: '60+ Years Combined Experience',
    description:
      'Our leadership team brings more than six decades of combined construction experience across commercial, residential, and industrial projects throughout the Carolinas.',
  },
  {
    icon: Shield,
    title: 'USGBC Member',
    description:
      'Proud member of the U.S. Green Building Council, committed to sustainable and energy-efficient building practices that reduce environmental impact and lower operating costs.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Initial Contact & Free Consultation',
    description:
      'Your project starts with a free, no-obligation conversation. We discuss your goals, timeline, budget expectations, and project requirements. Whether you reach us by phone at (704) 574-8124 or through our online contact form, we respond within one business day. During this initial consultation, we assess feasibility, identify potential challenges, and provide preliminary guidance on the best approach for your specific project.',
  },
  {
    step: '02',
    title: 'Site Visit & Assessment',
    description:
      'Our team visits your property to evaluate existing conditions, take measurements, assess structural elements, review utility connections, and identify any site-specific factors that will influence the project. For commercial projects, we also review lease requirements and landlord specifications. For new construction, we evaluate soil conditions, grading, drainage, and access. This in-person assessment is critical for providing an accurate estimate.',
  },
  {
    step: '03',
    title: 'Detailed Estimate & Proposal',
    description:
      'We prepare a comprehensive, line-item estimate that covers every aspect of your project — materials, labor, subcontractor costs, permits, equipment, and contingencies. Our estimates are transparent and detailed so you know exactly where every dollar goes. We also provide a projected timeline with milestones. There are no hidden fees, no vague allowances, and no surprise change orders. You review and approve the scope before any work begins.',
  },
  {
    step: '04',
    title: 'Contract & Pre-Construction Planning',
    description:
      'Once you approve the estimate, we execute a clear, straightforward contract that defines scope, pricing, timeline, payment schedule, warranty terms, and change order procedures. Our pre-construction phase includes finalizing material selections (visit our Design Center for hands-on selection assistance), coordinating with engineers and architects, preparing detailed construction drawings, and establishing the project schedule.',
  },
  {
    step: '05',
    title: 'Permitting & Regulatory Compliance',
    description:
      'We manage the entire permitting process with Mecklenburg County or the relevant jurisdiction. This includes preparing compliant plan submissions, responding to reviewer comments, scheduling plan review meetings, and obtaining all required building permits. We handle zoning verification, fire department reviews, health department approvals for restaurants, and any special-use permits your project requires. Permitting in Charlotte typically takes four to eight weeks depending on project complexity.',
  },
  {
    step: '06',
    title: 'Construction Mobilization',
    description:
      'Before the first nail is driven, we mobilize the job site — setting up safety protocols, establishing material staging areas, confirming subcontractor schedules, ordering long-lead materials, and preparing the site for construction. For commercial projects, we coordinate with building management and neighboring tenants to minimize disruption. For residential projects, we establish clear boundaries and protect existing landscaping and finishes.',
  },
  {
    step: '07',
    title: 'Active Construction & Project Management',
    description:
      'Our experienced superintendents manage daily construction operations with military precision. Every subcontractor is scheduled, every material delivery is confirmed, and every installation is inspected against our quality standards. You receive weekly progress reports with photos, and your dedicated project manager is available by phone and email throughout the project. We hold regular coordination meetings and proactively communicate any schedule or budget impacts.',
  },
  {
    step: '08',
    title: 'Quality Inspections & Phase Reviews',
    description:
      'We conduct internal quality inspections at every phase of construction — not just at the end. Foundation, framing, rough mechanical, insulation, drywall, and finishing stages are each verified before proceeding. We also coordinate all required municipal inspections and ensure every phase passes on the first attempt. This phase-gate approach means defects are caught early when they are inexpensive to correct, rather than at the final walkthrough when they are costly and disruptive.',
  },
  {
    step: '09',
    title: 'Final Walkthrough & Punch List',
    description:
      'When construction is substantially complete, we conduct a thorough final walkthrough with you to review every detail. Any items that need adjustment, correction, or completion are documented on a formal punch list. Our team addresses every punch list item promptly and schedules a follow-up walkthrough to confirm your complete satisfaction before closing the project.',
  },
  {
    step: '10',
    title: 'Project Closeout & Warranty',
    description:
      'We deliver all project documentation including as-built drawings, equipment manuals, warranty certificates, lien waivers, and certificate of occupancy. We provide comprehensive warranty coverage on all our work and remain available for any questions or issues that arise after completion. Our relationship with clients extends well beyond the final payment — many of our clients return to us for their next project.',
  },
];

const costGuide = [
  { type: 'Commercial Office Upfit', range: '$50–$175/sq ft', timeline: '3–5 months' },
  { type: 'Retail Build-Out', range: '$75–$200/sq ft', timeline: '3–5 months' },
  { type: 'Restaurant Build-Out', range: '$150–$350/sq ft', timeline: '5–8 months' },
  { type: 'Medical/Dental Office', range: '$150–$400/sq ft', timeline: '4–8 months' },
  { type: 'Ground-Up Commercial', range: '$200–$450/sq ft', timeline: '10–18 months' },
  { type: 'Warehouse/Industrial', range: '$80–$200/sq ft', timeline: '6–12 months' },
  { type: 'Custom Home', range: '$200–$600+/sq ft', timeline: '10–18 months' },
  { type: 'Home Addition', range: '$150–$400/sq ft', timeline: '3–6 months' },
  { type: 'Roof Coating', range: '$2–$5/sq ft', timeline: '2–5 days' },
];

const faqs = [
  {
    question: 'What does a general contractor do?',
    answer:
      'A general contractor serves as the single point of responsibility for an entire construction project. This includes project planning and budgeting, obtaining building permits, hiring and coordinating subcontractors (electricians, plumbers, HVAC technicians, painters, and other specialty trades), procuring materials, managing the construction schedule, conducting quality inspections, ensuring code compliance, and handling all communication between the property owner, design team, and construction crew. When you hire a general contractor, you get one phone number to call and one company accountable for the entire project — rather than managing a dozen separate trades yourself.',
  },
  {
    question: 'Do I need a licensed general contractor in Charlotte, NC?',
    answer:
      'Yes. North Carolina law requires general contractors to hold an active license from the NC Licensing Board for General Contractors (NCLBGC) for any project valued at $30,000 or more. South Carolina has an even lower threshold of $5,000. Hiring an unlicensed contractor exposes you to significant legal and financial risk: you may have no recourse if work is defective, your insurance claim could be denied, the building department could issue a stop-work order, and you could face fines for code violations. We Build holds active general contractor licenses in both North Carolina and South Carolina. You can verify our license status at nclbgc.org.',
  },
  {
    question: 'How much does a general contractor charge in Charlotte?',
    answer:
      'General contractor fees in Charlotte are typically structured in one of three ways. Cost-plus contracts charge the actual cost of materials and labor plus a management fee of 10 to 20 percent. Fixed-price (lump-sum) contracts include the contractor fee built into a single total price. Time-and-materials contracts charge hourly labor rates plus material costs, typically used for smaller or undefined-scope projects. For reference, commercial upfits in Charlotte run $50 to $175 per square foot, custom homes $200 to $600+ per square foot, and home additions $150 to $400 per square foot. We provide detailed, transparent estimates tailored to your specific project scope and specifications.',
  },
  {
    question: 'How long does a typical construction project take in Charlotte?',
    answer:
      'Project timelines vary significantly by type and scope. Commercial office upfits typically take 3 to 5 months. Restaurant build-outs require 5 to 8 months due to kitchen and ventilation complexity. Custom homes range from 10 to 18 months depending on size and finish level. Home additions average 3 to 6 months. Roof coating projects are completed in 2 to 5 days. The permitting process with Mecklenburg County adds approximately 4 to 8 weeks before construction can begin. We provide detailed project schedules during the planning phase and communicate proactively if any factors impact the timeline.',
  },
  {
    question: 'What areas does We Build serve as a general contractor?',
    answer:
      'We serve the entire Charlotte metropolitan area in both North Carolina and South Carolina. Our primary service area includes Charlotte, South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, Fort Mill SC, Rock Hill SC, Tega Cay SC, and Indian Land SC. Our headquarters is located at 14330 S Lakes Drive, Charlotte NC 28273, which places us centrally within the South Charlotte corridor with easy access to the entire metro region.',
  },
  {
    question: 'What is the difference between a general contractor and a subcontractor?',
    answer:
      'A general contractor manages the overall construction project and holds the primary contract with the property owner. The general contractor is responsible for scheduling, budgeting, quality control, safety, permitting, and project delivery. Subcontractors are specialty trade professionals — electricians, plumbers, HVAC technicians, framers, drywall installers, painters, roofers, and others — who are hired by the general contractor to perform specific portions of the work. As your general contractor, We Build manages all subcontractor relationships, vets their credentials, coordinates their schedules, inspects their work, and handles all payments. You deal with one company, not a dozen separate trades.',
  },
  {
    question: 'Does We Build handle building permits in Charlotte?',
    answer:
      'Yes. Permit management is one of the most valuable services a general contractor provides. We handle the entire permitting process from start to finish — preparing compliant plan submissions, coordinating with Mecklenburg County reviewers, responding to review comments, scheduling all required inspections, and obtaining the certificate of occupancy at project completion. For projects in Fort Mill, Indian Land, or other South Carolina jurisdictions, we manage those permitting processes as well. Our familiarity with local building departments means fewer review cycles and faster approvals.',
  },
  {
    question: 'What should I look for when hiring a general contractor in Charlotte?',
    answer:
      'The most important qualifications to verify are: an active North Carolina general contractor license (verify at nclbgc.org), current general liability insurance and workers compensation coverage, relevant experience with your project type, strong local references you can actually contact, a physical office or showroom (not just a truck and a cell phone), detailed and transparent estimates with line-item breakdowns, clear communication practices including regular progress updates, and a written warranty on completed work. We Build meets every one of these criteria and welcomes your due diligence. Visit our portfolio to see completed projects and contact our references directly.',
  },
  {
    question: 'What is the difference between commercial and residential general contracting?',
    answer:
      'While the fundamental project management principles are the same, commercial and residential construction differ significantly in scale, complexity, codes, and process. Commercial projects must comply with the International Building Code (IBC), ADA accessibility requirements, fire suppression mandates, commercial HVAC standards, and more stringent structural engineering requirements. Residential projects follow the International Residential Code (IRC) with different standards. Commercial projects also involve landlord coordination, tenant improvement allowances, and phased occupancy considerations. We Build is licensed and experienced in both commercial and residential general contracting, which gives us a broader perspective and deeper expertise than contractors who specialize in only one sector.',
  },
  {
    question: 'Can We Build handle both the design and construction of my project?',
    answer:
      'Yes. Our design-build services combine architectural design, engineering, and construction under a single contract. This integrated approach gives you one point of accountability, eliminates the communication gaps between separate design and construction firms, reduces change orders, and typically delivers projects faster and at lower cost than the traditional design-bid-build method. Visit our Design Center in South Charlotte to explore materials, finishes, and layouts with our design team. For clients who already have architectural plans, we are equally experienced working as a traditional general contractor building from existing drawings and specifications.',
  },
  {
    question: 'How much does a general contractor cost compared to managing subcontractors yourself in Charlotte?',
    answer:
      'Self-managing subcontractors may appear cheaper because you avoid the 10 to 20 percent general contractor fee, but it almost always costs more in the end. Owner-managed projects in Charlotte experience 20 to 40 percent more change orders, schedule delays that increase carrying costs, and quality problems that require costly rework. General contractors negotiate better material pricing through volume purchasing and prevent expensive mistakes through professional oversight. On a typical $500,000 commercial project, the GC fee of $50,000 to $100,000 routinely saves $75,000 to $150,000 in avoided overruns, making professional management the more cost-effective choice.',
  },
  {
    question: 'What is the difference between design-build and design-bid-build for projects in Charlotte?',
    answer:
      'Design-bid-build is the traditional method where you hire an architect to design the project, then solicit bids from general contractors to build it. Design-build combines both services under one contract with one team. In Charlotte, design-build projects typically complete 15 to 25 percent faster and experience 30 to 40 percent fewer change orders because the builder is involved from the design phase and can identify constructability issues before they become expensive field problems. Design-bid-build gives you more control over architect selection but creates a gap between designer and builder that often leads to disputes over scope interpretation.',
  },
  {
    question: 'Does Mecklenburg County require inspections during construction, and does We Build coordinate them?',
    answer:
      'Yes, Mecklenburg County Code Enforcement requires multiple inspections at specific construction milestones including foundation, framing, rough mechanical, electrical, plumbing, insulation, and final inspections. Missing or failing an inspection can shut down your project and add weeks to the schedule. As your general contractor, We Build schedules every required inspection, ensures the work is inspection-ready before the inspector arrives, accompanies the inspector on-site to address any questions, and resolves any deficiency notes immediately. Our familiarity with local inspectors and their expectations means fewer failed inspections and a smoother path to your certificate of occupancy.',
  },
];

export default function GeneralContractorPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'General Contractor Services Charlotte NC',
            'Licensed general contractor in Charlotte, NC providing commercial construction, custom homes, upfits, design-build, and roof coating services. Veteran-owned, 60+ years combined experience. Licensed in NC & SC.',
            'https://webuildclt.com/services/general-contractor'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'General Contractor' },
          ]),
        ]}
      />

      <PageHero
        title="General Contractor Charlotte NC"
        subtitle="Licensed, veteran-owned general contractor serving Charlotte and the Carolinas with 60+ years combined experience"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs + Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'General Contractor' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Trusted General Contractor (GC) in Charlotte, North Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned general contracting company headquartered in
                South Charlotte, NC. With more than 60 years of combined construction experience, our
                team delivers high-quality commercial construction services across the
                entire Charlotte metropolitan area — from Lake Norman and Cornelius to Fort Mill, SC
                and every community in between. We are licensed in both North Carolina and South
                Carolina, which means your project is never complicated by state-line jurisdictional
                issues.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As your general contractor, We Build serves as the single point of accountability for
                your entire construction project. We handle everything — initial planning, design
                coordination, permitting with Mecklenburg County and surrounding jurisdictions,
                subcontractor management, material procurement, construction oversight, quality
                inspections, and final delivery. You get one phone number to call, one company
                responsible for results, and one team committed to delivering your project on time, on
                budget, and exactly to your specifications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte is one of the fastest-growing cities in the Southeast, and the construction
                market here is dynamic and competitive. New commercial developments, office buildings,
                retail centers, and residential communities are transforming neighborhoods from South
                End to Ballantyne. In this environment, choosing the right general contractor is one of
                the most important decisions you will make. The wrong contractor can cost you months of
                delays, tens of thousands in unexpected costs, and endless frustration. The right
                contractor — one who is licensed, insured, experienced, and communicative — turns your
                vision into reality on schedule and within budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial construction
                </Link>{' '}
                project managed from the ground up, a{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                  commercial upfit
                </Link>{' '}
                for your growing business, a{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">
                  design-build project
                </Link>{' '}
                managed from concept to completion, or an eco-friendly{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  roof coating
                </Link>{' '}
                that saves you thousands versus full replacement, We Build brings the same level of
                professionalism, precision, and military-instilled accountability to every job.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+17045748124">
                    <Phone className="mr-2 h-5 w-5" />
                    (704) 574-8124
                  </a>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                {[
                  'Licensed general contractor in NC & SC',
                  'Veteran & family-owned since 2019',
                  'USGBC member — committed to green building',
                  'Commercial & residential construction',
                  '60+ years combined team experience',
                  'Free consultations and detailed estimates',
                  'Full design-build capabilities with in-house Design Center',
                  'Serving Charlotte metro, Lake Norman, Fort Mill & beyond',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a General Contractor Do? */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Understanding General Contracting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              What Does a General Contractor Do?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A general contractor is the central coordinator and manager of a construction project.
                Think of the general contractor as the CEO of your building project — the person
                responsible for turning architectural plans and your vision into a finished, functional
                building. While the general contractor may perform some work directly, the primary value
                is in project management: planning, scheduling, budgeting, quality control, and
                coordination of the many specialized trades required to complete a construction project.
              </p>
              <p>
                On a typical commercial or residential construction project, a general contractor is
                responsible for reviewing and interpreting architectural and engineering plans, preparing
                detailed cost estimates and project budgets, obtaining all required building permits from
                the local jurisdiction, hiring qualified and licensed subcontractors for each trade
                (electrical, plumbing, HVAC, framing, drywall, painting, flooring, roofing, and others),
                scheduling and sequencing all work so that trades do not conflict with each other,
                procuring materials and managing deliveries, conducting quality inspections at each phase
                of construction, coordinating all required municipal inspections, managing the project
                budget and controlling costs, communicating regularly with the property owner on progress
                and any issues, ensuring compliance with all building codes and safety regulations, and
                delivering the completed project with documentation, warranties, and certificate of
                occupancy.
              </p>
              <p>
                Without a general contractor, a property owner would need to individually hire, schedule,
                and manage every trade — electricians, plumbers, framers, drywall crews, painters,
                flooring installers, roofers, and more. Each trade needs to arrive in a specific
                sequence (you cannot install drywall before electrical rough-in, for example), and
                coordinating these dependencies is a full-time job that requires deep construction
                knowledge. A missed inspection, an out-of-sequence trade, or an unvetted subcontractor
                can cost weeks of delay and thousands of dollars. The general contractor absorbs this
                complexity so you do not have to.
              </p>
              <p>
                In Charlotte specifically, a general contractor also needs familiarity with Mecklenburg
                County building codes, the Charlotte-Mecklenburg zoning ordinance, local permitting
                procedures, and relationships with building inspectors and plan reviewers. For projects
                across the South Carolina border in{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>{' '}
                or Indian Land, the contractor needs to understand South Carolina licensing requirements,
                different code adoptions, and separate permitting processes. We Build is licensed and
                experienced in both states, giving our clients a seamless experience regardless of
                project location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              General Contracting Services in Charlotte
            </h2>
            <p className="text-muted-foreground">
              From ground-up{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline">
                commercial construction
              </Link>{' '}
              to{' '}
              <Link href="/services/design-build" className="text-primary hover:underline">
                design-build
              </Link>
              , we offer comprehensive construction services tailored to your needs and budget. Every
              service includes transparent pricing, dedicated project management, and our commitment
              to quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    View {service.title}
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
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
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our General Contracting Process
            </h2>
            <p className="text-muted-foreground">
              From your first phone call to the final walkthrough and beyond, our proven ten-step
              process ensures your project is delivered on time, on budget, and exactly to your
              specifications. Every step is designed to eliminate surprises and keep you informed.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire a Licensed General Contractor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Licensing & Protection
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Why Hire a Licensed General Contractor in Charlotte
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                North Carolina takes contractor licensing seriously. The NC Licensing Board for General
                Contractors (NCLBGC) requires any contractor performing work valued at $30,000 or more
                to hold an active state license. South Carolina has an even lower threshold of $5,000
                through the SC Contractors&apos; Licensing Board. These licensing requirements exist to
                protect property owners by ensuring that contractors have demonstrated minimum
                competency, financial responsibility, and legal accountability.
              </p>
              <p>
                Hiring an unlicensed contractor — even one who offers a lower price — exposes you to
                serious risks. If an unlicensed contractor does defective work, you may have no legal
                recourse through the licensing board&apos;s complaint process. If a worker is injured on
                your property and the contractor does not carry workers&apos; compensation insurance,
                you could be held personally liable. If the building department discovers that an
                unlicensed contractor pulled your permits (or worse, that no permits were obtained), you
                could face stop-work orders, fines, and the requirement to tear out and redo
                non-compliant work at your expense.
              </p>
              <p>
                A licensed general contractor like We Build provides multiple layers of protection for
                your investment. Our state licenses verify that we have passed competency examinations
                and met financial requirements. Our general liability insurance protects your property
                against construction-related damage. Our workers&apos; compensation insurance covers
                every person working on your project. Our knowledge of current building codes (the
                International Building Code for commercial and the International Residential Code for
                residential) ensures your project passes inspections. And our management of
                subcontractors means every trade on your job is vetted, insured, and held to our quality
                standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {whyChooseUs.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercial vs. Residential */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Comparing Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Commercial vs. Residential General Contracting
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                While the core principles of project management apply to both commercial and residential
                construction, the two sectors differ in meaningful ways that affect how a general
                contractor approaches your project.
              </p>
              <p>
                <strong className="text-foreground">Building codes and regulations</strong> are the most
                significant difference. Commercial projects in Charlotte must comply with the
                International Building Code (IBC), which imposes stricter requirements for fire
                protection, structural engineering, ADA accessibility, egress, and mechanical systems
                than the International Residential Code (IRC) used for homes. Commercial projects also
                require fire suppression systems (sprinklers), commercial-grade fire alarm systems, and
                compliance with the Americans with Disabilities Act — none of which apply to most
                residential construction.
              </p>
              <p>
                <strong className="text-foreground">Project complexity and scale</strong> also differ.
                A commercial office upfit may involve coordinating with the landlord, the property
                management company, the tenant&apos;s architect, the fire marshal, the health
                department (for food service), and multiple municipal departments — all while other
                tenants in the building continue to operate. Residential projects typically involve
                fewer stakeholders but require more personalized attention to finishes, aesthetics, and
                the homeowner&apos;s daily living patterns during construction.
              </p>
              <p>
                <strong className="text-foreground">Subcontractor requirements</strong> vary between
                sectors as well. Commercial electrical, plumbing, and HVAC systems are larger, more
                complex, and subject to different code requirements than residential systems. A
                commercial general contractor needs subcontractor relationships with firms experienced
                in commercial-scale work — not residential-only trades.
              </p>
              <p>
                We Build is licensed and experienced in both{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial construction
                </Link>{' '}
                and residential general contracting. This dual expertise gives us a broader perspective
                and deeper problem-solving capabilities than contractors who specialize in only one
                sector. Our commercial discipline informs our residential quality standards, and our
                residential attention to detail enhances our commercial client experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Contractor Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Charlotte Cost Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                General Contractor Costs in Charlotte (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding how general contractors price their services helps you make informed
                decisions and compare proposals accurately. Here is how pricing typically works in the
                Charlotte construction market.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
              <p>
                <strong className="text-foreground">Cost-plus contracts</strong> are the most
                transparent pricing structure. Under a cost-plus agreement, you pay the actual cost of
                materials, labor, and subcontractors, plus a management fee that typically ranges from
                10 to 20 percent of total project cost. This structure works well when the scope is not
                fully defined or when the owner wants maximum visibility into where every dollar goes.
                The trade-off is that the final cost is not known until the project is complete.
              </p>
              <p>
                <strong className="text-foreground">Fixed-price (lump-sum) contracts</strong> provide a
                single total price for the entire project. The general contractor&apos;s fee is built
                into the total, and the owner knows the exact cost upfront. This structure works best
                when the scope, plans, and specifications are well-defined before construction begins.
                It provides budget certainty but offers less flexibility for changes during construction.
              </p>
              <p>
                <strong className="text-foreground">Time-and-materials contracts</strong> charge hourly
                labor rates plus the actual cost of materials. This structure is common for smaller
                projects, repair work, or projects where the scope cannot be precisely defined in
                advance. It provides flexibility but requires trust between the owner and contractor.
              </p>
              <p>
                <strong className="text-foreground">Budgeting guidance:</strong> regardless of contract
                type, we recommend setting aside 10 to 15 percent of your construction budget as a
                contingency reserve for unforeseen conditions — especially on renovation projects where
                hidden issues (old wiring, plumbing, structural deficiencies) are common. For new
                construction on a clean site, 5 to 10 percent contingency is typically sufficient.
              </p>
            </div>

            <div className="space-y-4">
              {costGuide.map((item) => (
                <div
                  key={item.type}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div>
                    <h3 className="font-semibold">{item.type}</h3>
                    <p className="text-sm text-muted-foreground">
                      Typical timeline: {item.timeline}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary">{item.range}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Prices are estimates for the Charlotte NC market in 2026. Actual costs depend on
              project scope, finish level, site conditions, and material selections.{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              for a free project-specific estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Charlotte Building Codes & Permits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Local Requirements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Charlotte Building Codes & Permits
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Construction in Charlotte and Mecklenburg County is regulated by the Code Enforcement
                Division, which administers building permits, plan reviews, and inspections. Most
                construction projects — including commercial build-outs, new construction, structural
                modifications, and major renovations — require a building permit before work can begin.
                Working without the required permits can result in stop-work orders, fines, the
                requirement to remove non-compliant work, and difficulty selling the property in the
                future.
              </p>
              <p>
                <strong className="text-foreground">The permitting process</strong> in Mecklenburg
                County begins with submitting construction plans for review. Plan reviewers check for
                compliance with the North Carolina State Building Code, zoning ordinance, fire code, and
                energy code. The review process typically takes four to eight weeks for commercial
                projects and two to four weeks for residential projects. Complex commercial projects may
                require multiple review cycles if revisions are needed. We Build manages this entire
                process, including preparing code-compliant plan submissions, responding to reviewer
                comments, and scheduling all follow-up reviews.
              </p>
              <p>
                <strong className="text-foreground">Inspections</strong> are required at specific phases
                of construction: foundation, framing, rough electrical, rough plumbing, rough HVAC,
                insulation, and final inspection. Each inspection must pass before the next phase of
                construction can proceed. Failing an inspection causes delays and rework costs. Our
                internal quality inspection process is specifically designed to ensure every phase passes
                the municipal inspection on the first attempt.
              </p>
              <p>
                <strong className="text-foreground">Zoning compliance</strong> is another critical
                requirement. Before a building permit is issued, the proposed use must be permitted
                under the property&apos;s zoning classification. Charlotte&apos;s Unified Development
                Ordinance (UDO) governs land use, setbacks, parking requirements, signage, and building
                height. We verify zoning compliance at the outset of every project to prevent costly
                surprises mid-construction.
              </p>
              <p>
                For projects in South Carolina communities like{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>
                , Indian Land, and Rock Hill, the permitting process follows different state codes and
                local ordinances. Our dual-state licensing and experience with both North Carolina and
                South Carolina building departments means we manage these differences seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing the Right General Contractor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Making the Right Choice
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Choosing the Right General Contractor in Charlotte
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Selecting a general contractor is one of the most consequential decisions you will make
                on any construction project. The right contractor delivers your vision on time and
                within budget. The wrong one can cost you months of delays, tens of thousands in
                unexpected charges, and the stress of managing a project gone sideways. Here is what to
                look for — and what to watch out for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  What to Look For
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Active state license</strong> — verify at
                      nclbgc.org for NC or llr.sc.gov for SC. No license means no legal protection.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Current insurance</strong> — request
                      certificates of general liability and workers&apos; compensation. Call the insurance
                      company to verify they are active.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Relevant experience</strong> — ask for
                      examples of completed projects similar to yours in type, size, and budget. Visit
                      their{' '}
                      <Link href="/portfolio" className="text-primary hover:underline">
                        portfolio
                      </Link>{' '}
                      and talk to references.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Detailed, transparent estimates</strong> —
                      line-item breakdowns that show exactly where every dollar goes, not vague lump sums
                      with no detail.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Physical office or showroom</strong> — a
                      contractor with a permanent location (like our{' '}
                      <Link href="/design-center" className="text-primary hover:underline">
                        Design Center
                      </Link>
                      ) is invested in the community and easier to find if issues arise.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Clear communication practices</strong> —
                      regular progress updates, responsive to calls and emails, proactive about issues.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
                  Red Flags to Watch For
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">No verifiable license</strong> — if they
                      cannot provide a license number you can verify online, walk away immediately.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Demands large upfront payment</strong> — a
                      reasonable deposit is normal, but demanding 50 percent or more upfront before any
                      work is a major warning sign.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Vague or verbal-only estimates</strong> — a
                      professional general contractor provides written, detailed proposals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Pressures you to sign immediately</strong> —
                      a reputable contractor gives you time to review proposals and ask questions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">No physical address</strong> — contractors
                      operating from a truck with no office are harder to hold accountable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-foreground">Price far below competitors</strong> — if one
                      bid is dramatically lower, the contractor may be cutting corners, using
                      unqualified labor, or planning to hit you with change orders later.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="text-xl font-semibold text-foreground">Questions to Ask Before Hiring</h3>
              <p>
                Before signing a contract with any general contractor in Charlotte, ask these
                questions: What is your NC general contractor license number, and can I verify it
                online? Can you provide current certificates of general liability and workers&apos;
                compensation insurance? Can you show me three to five completed projects similar to
                mine? Can I speak with recent clients as references? Will you provide a detailed,
                line-item estimate? How do you handle change orders and unexpected costs? What is your
                communication process — how often will I receive updates? Who will be my day-to-day
                contact on the job site? What is your warranty policy on completed work? How do you
                handle disputes or complaints?
              </p>
              <p>
                We Build welcomes every one of these questions. We encourage prospective clients to
                visit our{' '}
                <Link href="/design-center" className="text-primary hover:underline">
                  Design Center
                </Link>
                , review our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  portfolio
                </Link>{' '}
                of completed projects, and speak with our references directly. Learn more{' '}
                <Link href="/about" className="text-primary hover:underline">
                  about our company
                </Link>{' '}
                and the values that guide our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Client Testimonial
            </span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-6 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to detail and
              commitment to quality exceeded our expectations. The team was professional,
              communicative, and delivered on time and within budget. We highly recommend We Build
              as your general contractor.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">
                  Commercial Upfit — Fort Mill, SC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                General Contractor Serving the Charlotte Metro Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed general contractor in both North Carolina and South Carolina, We Build
                serves the entire Charlotte metropolitan area. Our South Charlotte headquarters at
                14330 S Lakes Drive puts us within easy reach of every community in the region, and our
                dual-state licensing means no project is complicated by state-line issues.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your project is a{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                  commercial upfit
                </Link>{' '}
                in Ballantyne, a{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">
                  design-build project
                </Link>{' '}
                near{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>
                , a restaurant build-out in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                , or a{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  roof coating
                </Link>{' '}
                in{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>
                , We Build has the local knowledge, licensed credentials, and experienced team to
                deliver exceptional results.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Charlotte',
                  'South Charlotte',
                  'Ballantyne',
                  'Fort Mill, SC',
                  'Lake Norman',
                  'Cornelius',
                  'Huntersville',
                  'Matthews',
                  'Waxhaw',
                  'Marvin',
                  'Mooresville',
                  'Indian Trail',
                  'Mint Hill',
                  'Pineville',
                  'Davidson',
                  'Rock Hill, SC',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Related Services</h2>
            <p className="text-muted-foreground mt-2">
              As your general contractor, we offer a full range of construction services across the Charlotte metro area.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction for office, retail, restaurant, medical, warehouse, and mixed-use developments.' },
              { title: 'Design-Build Services', href: '/services/design-build', type: 'Service', desc: 'Single-source design and construction with one point of accountability, faster timelines, and lower costs.' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service', desc: 'Professional CM services with schedule control, budget management, and quality oversight for complex projects.' },
              { title: 'Commercial Upfits & Renovations', href: '/services/commercial-upfits', type: 'Service', desc: 'Transform existing commercial spaces with tenant improvements, phased renovations, and fast-track buildouts.' },
              { title: 'Pre-Construction Services', href: '/services/pre-construction', type: 'Service', desc: 'Feasibility studies, cost estimating, and value engineering before you break ground.' },
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

      {/* Related Blog Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">General Contracting Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Hire a General Contractor: The Complete Guide',
                slug: 'how-to-hire-general-contractor-guide',
              },
              {
                title: 'Questions to Ask a Contractor Before Signing',
                slug: 'questions-to-ask-contractor-before-signing',
              },
              {
                title: 'Construction Project Timeline: What to Expect',
                slug: 'construction-project-timeline-expectations',
              },
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

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              General Contractor FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Answers to the most common questions about hiring a general contractor in Charlotte, NC.
            </p>
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&apos;s trusted general contractor today for a free consultation and
            detailed estimate. Whether you are planning a{' '}
            <span className="text-primary-foreground">commercial build</span>, a{' '}
            <span className="text-primary-foreground">custom home</span>, or a{' '}
            <span className="text-primary-foreground">renovation</span>, We Build is ready to turn
            your vision into reality. Let&apos;s build something great together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Your Free Estimate</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+17045748124">(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
