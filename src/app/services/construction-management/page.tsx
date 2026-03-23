import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
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
  Target,
  BarChart3,
  CalendarCheck,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Layers,
  Settings,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Construction Management Charlotte NC | CM Services & Project Oversight',
  description:
    'Professional construction management services in Charlotte, NC. CM at-risk, CM agency, owner\'s representative, program management, project oversight & schedule management. Veteran-owned, licensed in NC & SC. 60+ years combined experience. (704) 574-8124.',
  keywords: [
    'construction management Charlotte NC',
    'construction management company Charlotte',
    'construction project management Charlotte NC',
    'CM services Charlotte',
    'owner\'s representative Charlotte NC',
    'CM at risk Charlotte NC',
    'CM agency Charlotte',
    'construction manager Charlotte NC',
    'program management Charlotte NC',
    'project oversight Charlotte',
    'schedule management Charlotte NC',
    'construction management firm Charlotte',
  ],
  openGraph: {
    title: 'Construction Management Charlotte NC | We Build',
    description:
      'Expert construction management services in Charlotte. CM at-risk, CM agency, owner\'s representative, program management & project oversight. Veteran-owned, licensed NC & SC.',
    url: 'https://webuildclt.com/services/construction-management',
    type: 'website',
  },
};

const serviceTypes = [
  {
    icon: ShieldCheck,
    title: 'Construction Management at Risk (CM at-Risk)',
    slug: 'cm-at-risk',
    desc: 'We assume the financial risk by providing a Guaranteed Maximum Price (GMP), managing all subcontractors, and guaranteeing delivery within budget and schedule.',
    details:
      'Construction management at risk is the most comprehensive form of CM delivery. As the CM at-risk firm, We Build acts as both the construction manager during preconstruction and the general contractor during the build phase. We provide a Guaranteed Maximum Price after the design reaches a sufficient level of completion, typically between 60 and 90 percent design development. The GMP caps your total construction cost, and any savings below the GMP are shared between the owner and the CM firm based on a negotiated split. This delivery method is ideal for Charlotte commercial projects where budget certainty is paramount. We manage all subcontractor procurement, hold all trade contracts, coordinate the construction schedule, and bear the financial risk if costs exceed the GMP. Our preconstruction team provides continuous cost estimating as the design evolves, identifies value engineering opportunities before the GMP is set, and flags scope gaps or design conflicts that could lead to costly change orders later. CM at-risk projects in Charlotte typically range from $1 million to $50 million and include office buildings, medical facilities, educational institutions, and mixed-use developments.',
    fee: '3-7% of construction cost',
  },
  {
    icon: Users,
    title: 'Construction Management Agency (CM Agency)',
    slug: 'cm-agency',
    desc: 'We serve as your professional advisor, managing the project on your behalf without assuming financial risk for the construction cost.',
    details:
      'In a CM agency arrangement, We Build serves as the owner\'s professional construction advisor throughout the entire project lifecycle. Unlike CM at-risk, the CM agency does not hold the trade contracts or guarantee a maximum price. Instead, we act exclusively in the owner\'s best interest, providing expert guidance on contractor selection, schedule management, cost control, quality assurance, and risk mitigation. The owner holds the contracts directly with the general contractor or individual trade contractors, while we provide independent oversight and advocacy. This model is particularly valuable for Charlotte property owners who want an experienced construction professional watching out for their interests without the conflicts of interest that can arise when the construction manager also profits from holding trade contracts. CM agency services include preconstruction budgeting, constructability reviews, bid package preparation, contractor qualification and selection, construction observation, pay application review, change order negotiation, and schedule analysis. We have served as CM agency on institutional projects, corporate campuses, and healthcare facilities throughout the Charlotte metro area where independent oversight is a priority.',
    fee: '2-5% of construction cost',
  },
  {
    icon: Eye,
    title: 'Owner\'s Representative',
    slug: 'owners-representative',
    desc: 'We act as your dedicated advocate on the construction site, protecting your interests throughout every phase of the project.',
    details:
      'An owner\'s representative is a construction professional who acts as an extension of the property owner\'s team, providing day-to-day oversight and management of the construction project. This service is essential for business owners, investors, and organizations that do not have in-house construction expertise but are undertaking a significant building project. As your owner\'s representative in Charlotte, We Build attends all project meetings, reviews all contractor pay applications to verify work-in-place before recommending payment, evaluates change order requests to determine whether they are justified and fairly priced, monitors the construction schedule to identify delays before they cascade, conducts regular quality inspections, and ensures that the contractor is building in accordance with the approved plans and specifications. We serve as a single point of contact between you and the design team, the general contractor, and the various consultants and inspectors involved in the project. Owner\'s representative services are billed on a fixed monthly fee or as a percentage of construction cost, making the expense predictable and manageable. Charlotte developers, out-of-state investors building in the Charlotte market, and nonprofit organizations managing capital campaigns frequently engage owner\'s representatives to protect their investment.',
    fee: '1.5-4% of construction cost',
  },
  {
    icon: Layers,
    title: 'Program Management',
    slug: 'program-management',
    desc: 'We manage multiple concurrent construction projects under a unified program, ensuring consistent standards, budget control, and coordinated delivery.',
    details:
      'Program management is the discipline of overseeing a portfolio of related construction projects as a single coordinated effort. Charlotte businesses with multiple locations, institutional clients with multi-phase campus expansion plans, and corporate tenants rolling out standardized build-outs across several sites benefit from program management services. We Build provides a dedicated program manager who establishes consistent project delivery standards, procurement processes, quality benchmarks, and reporting templates across all projects in the program. This unified approach eliminates the inefficiencies that occur when each project is managed independently with different contractors, different processes, and different levels of quality oversight. Our program management services include master schedule development that sequences projects to optimize resource allocation, volume purchasing agreements with key suppliers and subcontractors that reduce per-project costs, standardized design templates that accelerate permitting and reduce design fees, centralized document management, and consolidated financial reporting that gives ownership a real-time view of the entire program\'s budget and schedule status. We have managed multi-site rollout programs for healthcare networks, retail chains, and corporate office portfolios across the Charlotte metro area and the greater Carolinas region.',
    fee: '2-6% of total program value',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Oversight & Quality Assurance',
    slug: 'project-oversight',
    desc: 'We provide independent third-party oversight of your construction project, ensuring quality standards, code compliance, and contract adherence.',
    details:
      'Project oversight and quality assurance services provide an independent set of eyes on your construction project. Unlike an owner\'s representative who is involved in day-to-day management, project oversight can be structured as periodic inspections, milestone reviews, or focused audits of specific construction phases. This service is valuable for lenders who require independent construction monitoring before releasing draw funds, for property owners who have a general contractor managing the project but want independent verification that work is being performed correctly, and for organizations with internal facilities teams that need supplemental expertise for complex projects. Our project oversight services in Charlotte include pre-construction plan reviews to identify potential constructability issues, foundation and structural inspections at critical milestones, mechanical, electrical, and plumbing rough-in verification, building envelope inspections including waterproofing, air barrier, and insulation, finish quality assessments before the contractor\'s punch list walk, and final occupancy readiness evaluations. We document all observations in detailed reports with photographs, referencing specific specification sections and drawing details so that any deficiencies can be communicated clearly to the contractor for correction. This level of documentation protects the owner in the event of warranty claims or construction defect disputes.',
    fee: '$150-$300/hour or fixed monthly retainer',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Management & Delay Analysis',
    slug: 'schedule-management',
    desc: 'We develop, monitor, and manage construction schedules using CPM methodology, providing early warning of delays and recovery strategies.',
    details:
      'Construction schedule management is the backbone of successful project delivery. A well-developed and properly maintained Critical Path Method schedule identifies every activity required to complete the project, the logical relationships between activities, the duration of each activity, and the critical path, which is the longest sequence of activities that determines the project\'s overall completion date. We Build provides professional schedule management services for Charlotte construction projects of all sizes. Our schedulers develop baseline schedules during preconstruction that incorporate realistic activity durations based on local productivity rates, Charlotte-specific permitting and inspection timelines, material lead times from regional suppliers, and weather contingency based on historical Mecklenburg County weather data. During construction, we update the schedule monthly, compare actual progress to the baseline, calculate schedule variance for every major activity, and identify activities that are trending behind schedule before they affect the critical path. When delays occur, we perform formal delay analysis using industry-standard methodologies including time impact analysis, as-planned versus as-built comparison, and window analysis. These analyses are critical for determining the cause and responsibility for delays, which directly impacts liquidated damages, extension of time claims, and acceleration cost recovery. Our schedule management services have been instrumental in keeping Charlotte commercial projects, healthcare facilities, and institutional buildings on track.',
    fee: '$125-$250/hour or included in CM fee',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Project Assessment & Needs Analysis',
    desc: 'We begin by understanding your project goals, budget parameters, timeline requirements, and organizational constraints. This includes reviewing any existing plans, feasibility studies, or program documents. We assess whether the project is best suited for CM at-risk, CM agency, owner\'s representative, or another delivery method based on the project\'s complexity, your risk tolerance, and your internal capabilities.',
  },
  {
    step: '02',
    title: 'Team Assembly & Role Definition',
    desc: 'We assign a dedicated construction manager and support team scaled to your project\'s size and complexity. We clearly define roles, responsibilities, and communication protocols between the owner, design team, construction manager, and any other project stakeholders. A detailed project management plan is prepared that documents decision-making authority, meeting schedules, reporting requirements, and escalation procedures.',
  },
  {
    step: '03',
    title: 'Preconstruction Services & Budget Development',
    desc: 'During preconstruction, we provide continuous cost estimating as the design evolves from concept through construction documents. We perform constructability reviews to identify design elements that could cause construction difficulties, schedule delays, or cost overruns. Value engineering workshops examine every major building system to find cost-effective alternatives without compromising quality or performance. The result is a reliable project budget that reflects actual Charlotte-area market conditions.',
  },
  {
    step: '04',
    title: 'Design Coordination & Document Review',
    desc: 'We review all architectural and engineering documents for completeness, coordination between disciplines, and compliance with applicable building codes. We identify conflicts between structural, mechanical, electrical, plumbing, and fire protection systems before construction begins, when corrections are inexpensive compared to field changes. We coordinate with the design team to resolve all review comments and ensure construction documents are ready for permitting and bidding.',
  },
  {
    step: '05',
    title: 'Contractor Procurement & Qualification',
    desc: 'For CM agency and owner\'s representative engagements, we manage the contractor procurement process. This includes preparing bid packages, developing qualified bidder lists based on our extensive knowledge of Charlotte-area subcontractors, conducting pre-bid conferences, evaluating submitted bids for completeness and competitiveness, checking contractor references and financial capacity, and making award recommendations. For CM at-risk projects, we competitively bid all trade packages to subcontractors we have vetted for quality, safety, and financial stability.',
  },
  {
    step: '06',
    title: 'Permitting & Regulatory Coordination',
    desc: 'We manage the permitting process with Mecklenburg County, the City of Charlotte, and any other jurisdictions with authority over your project. This includes coordinating plan review submissions, responding to reviewer comments, scheduling pre-construction meetings with the fire marshal, coordinating utility connections with Charlotte Water, Duke Energy, and Piedmont Natural Gas, and ensuring all regulatory approvals are in place before construction begins. Our familiarity with Charlotte permitting timelines and procedures helps avoid delays.',
  },
  {
    step: '07',
    title: 'Construction Phase Management',
    desc: 'During construction, our on-site management team provides daily oversight of all activities. We conduct weekly progress meetings with the contractor, review and process submittals and RFIs, manage the project schedule, review contractor pay applications against verified work-in-place, negotiate change orders, enforce safety compliance, and ensure quality standards are maintained. You receive regular progress reports with schedule updates, financial summaries, and issue logs so you always know your project\'s status.',
  },
  {
    step: '08',
    title: 'Quality Control & Inspection Coordination',
    desc: 'We implement a quality management program that includes pre-installation conferences for critical work, in-progress inspections at key milestones, coordination with third-party testing agencies for concrete, steel, soils, and other materials, and verification that all work meets the contract documents and applicable codes. We coordinate all required inspections with Mecklenburg County Code Enforcement and the Charlotte Fire Department to ensure timely approvals at each construction phase.',
  },
  {
    step: '09',
    title: 'Commissioning & Systems Verification',
    desc: 'Before substantial completion, we coordinate the commissioning process for all building systems including HVAC, electrical, plumbing, fire alarm, fire suppression, elevators, and building automation systems. Commissioning verifies that every system is installed correctly, operates according to the design intent, and meets the owner\'s performance requirements. We document all commissioning results and ensure any deficiencies are corrected before the building is occupied.',
  },
  {
    step: '10',
    title: 'Closeout, Warranty & Post-Occupancy Support',
    desc: 'We manage the project closeout process including final punch list resolution, collection of all close-out documents such as as-built drawings, operation and maintenance manuals, equipment warranties, and final lien waivers, coordination of the certificate of occupancy, and final financial reconciliation. After occupancy, we conduct warranty walks at 6 and 11 months to identify any items requiring warranty correction before the one-year warranty period expires. Our team remains available for post-occupancy support to ensure a seamless transition.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction management company rooted in the Charlotte community. Our military background drives our commitment to accountability, discipline, and integrity on every project. When we commit to a schedule and a budget, we treat that commitment as a mission to be accomplished, not a guideline to be adjusted. This mindset translates directly into better project outcomes for our clients.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction management experience spanning commercial, institutional, healthcare, and mixed-use projects. We have managed projects ranging from small tenant upfits to multi-million dollar ground-up developments. This depth of experience means we have encountered and resolved virtually every type of construction challenge, and we apply those lessons learned to protect your project from costly surprises.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, enabling us to provide construction management services throughout the greater Charlotte metro area. Whether your project is in Uptown Charlotte, the South End corridor, the University Research Park, Fort Mill, Rock Hill, or the Lake Norman communities, our dual-state licensing ensures full regulatory compliance and seamless project delivery across state lines.',
  },
  {
    icon: Lightbulb,
    title: 'Design-Build Integration',
    desc: 'Our construction management services integrate seamlessly with our design-build capability. When a project benefits from single-source responsibility for both design and construction, we can provide that through our in-house design-build team. When the project requires independent oversight with the CM agency model, we provide that with equal effectiveness. This flexibility means you get the delivery method that best fits your project, not the one that best fits our business model.',
  },
  {
    icon: Target,
    title: 'Proactive Risk Management',
    desc: 'We do not wait for problems to find us. Our construction management approach is built on proactive identification and mitigation of risks before they impact your project. We maintain a formal risk register for every project that identifies potential threats to schedule, budget, quality, and safety, assigns probability and impact ratings, and documents specific mitigation strategies. This systematic approach to risk management is what separates professional construction management from reactive project administration.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we bring sustainable building knowledge to our construction management services. We help clients evaluate green building strategies during preconstruction, coordinate LEED documentation requirements during construction, and verify that sustainable features are installed and commissioned correctly. Whether your project is pursuing formal LEED certification or simply incorporating sustainable practices, our USGBC membership reflects our commitment to responsible construction.',
  },
  {
    icon: MapPin,
    title: 'Deep Charlotte Market Knowledge',
    desc: 'We know the Charlotte construction market intimately. We understand local subcontractor capabilities and capacity, material availability from regional suppliers, Mecklenburg County permitting processes and timelines, Charlotte utility connection procedures, and the seasonal factors that affect construction productivity in the Carolinas. This local knowledge directly translates into more accurate budgets, more realistic schedules, and fewer unexpected delays on your project.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent Reporting & Communication',
    desc: 'Every We Build construction management client receives structured weekly progress reports, monthly financial summaries, and real-time access to project documentation. Our dedicated project manager serves as your single point of contact, providing immediate notification of any issues that could affect timeline, budget, or quality. We believe that informed owners make better decisions, and we invest heavily in communication systems and reporting tools that keep you fully informed throughout the life of your project.',
  },
];

const costFactors = [
  {
    type: 'CM at-Risk Fee',
    range: '3-7% of construction cost',
    desc: 'The CM at-risk fee covers preconstruction services, project management, on-site supervision, and the financial guarantee of the Guaranteed Maximum Price. The fee percentage decreases as project size increases. A $2 million project might carry a 6-7% fee, while a $20 million project might be 3-4%. The fee is included within the GMP, so it does not add to your total project cost beyond the guaranteed amount.',
  },
  {
    type: 'CM Agency Fee',
    range: '2-5% of construction cost',
    desc: 'CM agency fees are lower than CM at-risk fees because the construction manager does not assume financial risk for the construction cost. The fee covers professional advisory services including preconstruction estimating, contractor procurement management, construction oversight, schedule management, and quality assurance. For larger institutional projects, the fee typically falls toward the lower end of the range.',
  },
  {
    type: 'Owner\'s Representative',
    range: '1.5-4% of construction cost or fixed monthly fee',
    desc: 'Owner\'s representative services are often structured as a fixed monthly fee rather than a percentage of construction cost, making the expense predictable regardless of change orders or cost fluctuations. Monthly fees for Charlotte commercial projects typically range from $5,000 to $25,000 depending on the project\'s size, complexity, and the level of on-site presence required.',
  },
  {
    type: 'Program Management',
    range: '2-6% of total program value',
    desc: 'Program management fees reflect the scope and duration of the overall program. Multi-year, multi-site programs benefit from economies of scale as the program manager develops standardized processes, leverages volume purchasing, and amortizes startup costs across multiple projects. The fee covers master scheduling, consolidated financial reporting, procurement coordination, and quality standard enforcement across all projects in the program.',
  },
  {
    type: 'Project Oversight & QA',
    range: '$150-$300/hour or monthly retainer',
    desc: 'Project oversight services billed hourly are suitable for periodic inspections and milestone reviews. For projects requiring regular on-site presence, a fixed monthly retainer provides better value and ensures consistent availability. Monthly retainers for Charlotte commercial projects typically range from $3,000 to $15,000 depending on the frequency and depth of oversight required.',
  },
  {
    type: 'Schedule Management',
    range: '$125-$250/hour or included in CM fee',
    desc: 'Standalone schedule management services are typically engaged by owners who need independent schedule analysis on a project where they have already contracted directly with a general contractor. The hourly rate covers baseline schedule development, monthly updates, critical path analysis, and delay analysis when schedule disputes arise. For CM at-risk and CM agency engagements, schedule management is included in the base CM fee.',
  },
];

const faqs = [
  {
    question: 'What is construction management and how is it different from general contracting?',
    answer:
      'Construction management is a professional service that provides leadership and oversight of a construction project on behalf of the owner. The key difference from general contracting is the focus and timing of engagement. A general contractor is typically hired after the design is complete to build the project at a competitively bid price. A construction manager is engaged early in the design process, often before architectural drawings begin, and provides preconstruction services including budgeting, scheduling, constructability review, and value engineering that shape the project before construction starts. The CM\'s early involvement reduces surprises during construction, improves budget accuracy, and often shortens the overall project timeline. In a CM at-risk arrangement, the construction manager eventually takes on a role similar to a general contractor during the build phase, but the preconstruction involvement is what distinguishes the delivery method.',
  },
  {
    question: 'How much does construction management cost in Charlotte, NC?',
    answer:
      'Construction management fees in Charlotte vary by the type of service and the project\'s size. CM at-risk fees typically range from 3 to 7 percent of the construction cost, with larger projects commanding lower percentage fees. CM agency fees range from 2 to 5 percent. Owner\'s representative services typically run 1.5 to 4 percent or are structured as a fixed monthly fee ranging from $5,000 to $25,000 depending on the project. While these fees represent an additional cost, professional construction management consistently delivers value that exceeds the fee through more accurate budgeting, fewer change orders, faster schedules, and better quality outcomes. Studies by the Construction Management Association of America show that projects with professional CM oversight experience 5 to 15 percent lower overall costs compared to projects without dedicated management.',
  },
  {
    question: 'What is CM at-risk and what does the Guaranteed Maximum Price include?',
    answer:
      'CM at-risk, which stands for Construction Manager at Risk, is a project delivery method where the construction manager provides a Guaranteed Maximum Price, or GMP, that caps the total construction cost. The GMP includes all direct construction costs such as subcontractor contracts, materials, and equipment, plus the CM fee, general conditions covering on-site management, temporary facilities, and project logistics, and a contingency for unforeseen conditions. If the actual construction cost comes in below the GMP, the savings are typically shared between the owner and the CM based on a negotiated formula. If costs exceed the GMP due to causes within the CM\'s control, the CM absorbs the overrun. This risk transfer is why the delivery method is called CM at-risk. Owner-directed changes and unforeseen site conditions that are outside the CM\'s control are handled through the change order process, similar to a general contractor arrangement.',
  },
  {
    question: 'When should I hire a construction manager versus a general contractor?',
    answer:
      'Construction management is most valuable on projects that are complex, have significant budget constraints, require an accelerated schedule, or where the owner wants professional involvement during the design phase. Projects that benefit most from construction management include healthcare facilities, educational buildings, multi-phase developments, projects with occupied adjacent spaces, and any project where the owner does not have in-house construction expertise. A general contractor engaged through competitive bidding is often appropriate for straightforward projects with complete design documents and well-defined scope. However, even on smaller projects, a construction manager\'s preconstruction services can prevent costly design errors, identify value engineering opportunities, and establish realistic budgets before the project goes to bid. In Charlotte\'s active construction market, engaging a CM early helps secure subcontractor commitments before pricing escalates.',
  },
  {
    question: 'What is the difference between CM agency and CM at-risk?',
    answer:
      'The fundamental difference is risk allocation. In a CM agency arrangement, the construction manager serves as the owner\'s advisor and advocate but does not hold the trade contracts or guarantee a maximum price. The owner contracts directly with the general contractor or individual trade contractors and bears the financial risk for the construction cost. The CM agency\'s role is to provide independent, expert oversight to protect the owner\'s interests. In a CM at-risk arrangement, the construction manager holds all trade contracts, provides a Guaranteed Maximum Price, and assumes financial responsibility if construction costs exceed the GMP. CM agency is often preferred for institutional clients who are required to publicly bid their projects, for owners who want truly independent oversight without conflicts of interest, and for projects where the owner has internal resources to manage contracts. CM at-risk is preferred when the owner wants single-point accountability, budget certainty through the GMP, and a streamlined decision-making structure.',
  },
  {
    question: 'What does an owner\'s representative do during construction?',
    answer:
      'An owner\'s representative serves as the owner\'s on-site advocate during the construction phase. Day-to-day responsibilities include attending all project meetings and documenting decisions and action items, reviewing contractor pay applications by comparing billed amounts to actual work completed in the field, evaluating change order requests to determine whether the scope change is valid, the pricing is fair, and the schedule impact is reasonable, monitoring the construction schedule and alerting the owner to any activities that are falling behind, conducting regular quality inspections to verify that work meets the specifications and approved submittals, coordinating with the design team on clarifications, substitution requests, and design changes, managing the submittal review process to prevent delays caused by late approvals, and serving as a single point of contact between the owner and the project team. The owner\'s representative does not replace the general contractor\'s project manager but provides an independent layer of oversight that ensures the contractor is performing in accordance with the contract.',
  },
  {
    question: 'How long does preconstruction take for a construction management project?',
    answer:
      'Preconstruction duration depends on the project\'s size and complexity. For a straightforward commercial project in Charlotte, preconstruction typically lasts 8 to 16 weeks and runs concurrently with the design phase. For large, complex projects such as healthcare facilities, educational buildings, or mixed-use developments, preconstruction can extend 6 to 12 months as the design evolves through schematic design, design development, and construction documents. Preconstruction activities include preliminary budgeting based on the program and conceptual design, constructability reviews at each design milestone, value engineering workshops to optimize cost and performance, long-lead item identification and early procurement when schedule requires it, phasing and logistics planning, subcontractor prequalification for critical trades, and development of the baseline construction schedule. The key benefit of this extended preconstruction engagement is that budget and schedule issues are identified and resolved during design, when changes are inexpensive, rather than during construction, when changes are disruptive and costly.',
  },
  {
    question: 'Do you provide construction management for residential projects?',
    answer:
      'While our primary focus is commercial construction management, we do provide CM and owner\'s representative services for large-scale residential projects including custom homes exceeding $1 million in construction value, multi-family residential developments, and residential subdivision infrastructure. For custom home projects, our owner\'s representative service is particularly valuable for homeowners building high-end residences who want professional oversight of their general contractor\'s work. We review pay applications, inspect quality, monitor the schedule, and advocate for the homeowner throughout the build process. For most single-family residential projects under $1 million, a traditional general contractor relationship is more cost-effective than adding a construction manager. Visit our custom home building page for information about our residential construction services, or contact us to discuss whether construction management is appropriate for your residential project.',
  },
  {
    question: 'What qualifications should I look for in a construction management firm?',
    answer:
      'When selecting a construction management firm in Charlotte, evaluate the following qualifications: relevant project experience with projects similar to yours in type, size, and complexity; the specific personnel who will be assigned to your project, not just the firm\'s overall resume; state contractor licensing in North Carolina and South Carolina if your project crosses state lines; adequate insurance coverage including professional liability, general liability, and workers compensation; financial stability demonstrated through bonding capacity and financial references; references from recent clients with similar project types; knowledge of local conditions including Charlotte-area subcontractor markets, permitting processes, and regulatory requirements; and a transparent fee structure that clearly defines what services are included. We Build meets all of these qualifications and welcomes the opportunity to provide references, resumes, and detailed proposals for your construction management needs.',
  },
  {
    question: 'Can construction management save money on my project?',
    answer:
      'Professional construction management consistently delivers cost savings that exceed the CM fee. The savings come from several sources: preconstruction budgeting catches scope gaps and design coordination issues before they become expensive field change orders; value engineering identifies cost-effective alternatives for materials, systems, and construction methods; competitive subcontractor procurement ensures you receive fair market pricing from qualified firms; schedule management reduces the carrying costs associated with extended construction timelines, including loan interest, temporary facilities, and delayed revenue; quality assurance prevents costly rework and warranty issues; and change order management ensures that every change is justified, competitively priced, and properly documented. Industry data from the Construction Management Association of America indicates that projects with professional CM oversight typically achieve 5 to 15 percent lower total project costs compared to projects without dedicated construction management. On a $5 million Charlotte commercial project, that represents $250,000 to $750,000 in savings, far exceeding the CM fee.',
  },
  {
    question: 'What areas in Charlotte do you serve for construction management?',
    answer:
      'We Build provides construction management services throughout the greater Charlotte metropolitan area. Our primary service area includes Uptown Charlotte, South End, NoDa, Plaza Midwood, University City, Ballantyne, South Charlotte, and all Mecklenburg County communities. We also serve the Lake Norman corridor including Cornelius, Davidson, Huntersville, and Mooresville in Iredell County. In South Carolina, our service area includes Fort Mill, Rock Hill, Indian Land, Tega Cay, and the broader York County area. Our general contractor licenses in both North Carolina and South Carolina allow us to work seamlessly across the state line, which is particularly convenient for businesses and developers with projects in both states. We have also provided construction management services for projects in the Concord, Kannapolis, Gastonia, and Indian Trail areas within the wider Charlotte region.',
  },
];

export default function ConstructionManagementPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Construction Management Charlotte NC',
            'Professional construction management services in Charlotte, NC. CM at-risk, CM agency, owner\'s representative, program management, project oversight, and schedule management. Veteran-owned, licensed in NC & SC. 60+ years combined experience.',
            'https://webuildclt.com/services/construction-management'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Construction Management Charlotte NC"
        subtitle="Professional CM services from Charlotte's veteran-owned construction management company"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Construction Management' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Construction Management Company in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Construction management is the professional practice of providing leadership, oversight,
                and coordination throughout every phase of a construction project, from initial concept
                and preconstruction planning through design coordination, contractor procurement,
                construction execution, and final closeout. Unlike a traditional general contracting
                arrangement where the contractor is hired after the design is complete, a construction
                manager is engaged early in the project lifecycle, often before architectural drawings
                begin, providing the owner with expert guidance that shapes the project&apos;s budget,
                schedule, and quality outcomes from the very beginning. In Charlotte&apos;s rapidly growing
                commercial construction market, where project complexity and subcontractor demand continue
                to increase, professional construction management has become an essential service for
                property owners, developers, institutions, and businesses that want to protect their
                construction investments and achieve predictable results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s construction economy is among the most active in the southeastern United
                States. With billions of dollars in{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction</Link>{' '}
                underway across the metro area, including office towers in Uptown, mixed-use developments
                along the Blue Line corridor, healthcare expansions in South Charlotte and the Lake Norman
                region, and industrial distribution centers along the I-77 and I-85 corridors, the demand
                for experienced construction management professionals has never been greater. The complexity
                of modern commercial construction, with its intricate building systems, stringent code
                requirements, tight schedules, and competitive subcontractor markets, means that even
                experienced property owners benefit from having a dedicated construction management team
                advocating for their interests. A professional construction manager identifies risks before
                they become problems, controls costs before they escalate, and maintains quality standards
                before deficiencies become embedded in the finished building.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> and
                construction management firm with over 60 years of combined construction experience. We
                provide a full spectrum of CM services including CM at-risk with Guaranteed Maximum Pricing,
                CM agency advisory services, owner&apos;s representative oversight, program management for
                multi-project portfolios, and independent project oversight and quality assurance. Our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">design-build</Link> capability
                allows us to offer integrated delivery when a project benefits from single-source
                responsibility, while our CM agency and owner&apos;s representative services provide the
                independent oversight that institutional and corporate clients require. Licensed in both
                North Carolina and South Carolina, we serve the entire Charlotte metropolitan area including{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and
                surrounding communities. As a USGBC member, we bring sustainable building knowledge to every
                project we manage.
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
                { icon: DollarSign, title: 'Budget Certainty', desc: 'CM at-risk delivery with a Guaranteed Maximum Price protects your budget. Preconstruction estimating ensures no surprises when construction begins.' },
                { icon: Clock, title: 'Schedule Control', desc: 'CPM scheduling with monthly updates and proactive delay mitigation keeps your project on track for the target completion date.' },
                { icon: Eye, title: 'Independent Oversight', desc: 'Whether as CM agency or owner\'s representative, we provide independent advocacy that protects your interests throughout construction.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military discipline drives our commitment to accountability, transparency, and mission accomplishment on every project we manage.' },
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

      {/* Types of Construction Management Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              CM Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Construction Management Services We Provide in Charlotte
            </h2>
            <p className="text-muted-foreground">
              We offer a full spectrum of construction management services tailored to your project&apos;s
              specific needs, complexity, and risk profile. Each service model provides a different level
              of involvement, risk allocation, and cost structure so you get exactly the support your
              project requires.
            </p>
          </div>
          <div className="space-y-8">
            {serviceTypes.map((type) => (
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
                          {type.fee}
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

      {/* Our CM Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Construction Management Process: 10 Steps from Assessment to Closeout
            </h2>
            <p className="text-muted-foreground">
              A disciplined, transparent management process designed to deliver your construction project
              on time, within budget, and to the quality standards you expect. Every step includes clear
              communication and documented decision-making so you maintain full control of your project.
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
              Why Choose We Build for Construction Management
            </h2>
            <p className="text-muted-foreground">
              Selecting the right construction management firm is one of the most consequential decisions
              you will make on your project. The CM firm you choose will influence every aspect of your
              project&apos;s outcome, from budget accuracy and schedule performance to quality and risk
              management. Here is what sets We Build apart.
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

      {/* Construction Management Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Fee Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Construction Management Fees in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Construction management fees depend on the type of service, the project&apos;s size and
                complexity, and the level of on-site presence required. Below are typical fee ranges
                for CM services in the Charlotte metro area. We provide detailed proposals with clear
                fee structures after understanding your project&apos;s specific requirements.
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
              <h3 className="font-semibold mb-3">Factors That Affect Construction Management Fees</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Project size:</strong> Larger projects have lower percentage fees because the CM can spread fixed management costs across a larger construction volume. A $20 million project typically commands a lower percentage than a $2 million project.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Project complexity:</strong> Healthcare facilities, laboratories, data centers, and buildings with specialized systems require more intensive management and command higher fees than straightforward commercial office or retail projects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Duration:</strong> Longer projects require sustained management staffing, which is reflected in the fee. Accelerated schedules may also increase fees due to the intensity of management required during compressed timelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Level of on-site presence:</strong> Full-time on-site construction management costs more than part-time or periodic oversight. The required level depends on the project&apos;s size, the contractor&apos;s experience, and the owner&apos;s risk tolerance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Scope of preconstruction services:</strong> Extended preconstruction phases with multiple estimate iterations, value engineering workshops, and phasing studies increase the overall CM fee but deliver significant value through better project definition.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CM vs GC Comparison */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Comparison
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Construction Management vs. General Contracting: Which Is Right for Your Project?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the differences between construction management and traditional general
                contracting helps you choose the delivery method that best fits your project&apos;s needs,
                risk profile, and organizational structure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Construction Management</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Early engagement:</strong> CM is involved from project inception, providing budgeting, scheduling, and constructability input during design when changes are inexpensive.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Budget control:</strong> Continuous estimating during design prevents cost surprises. CM at-risk provides a Guaranteed Maximum Price for budget certainty.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Faster delivery:</strong> Construction can begin on early phases while design is still being completed on later phases, compressing the overall project timeline.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Owner advocacy:</strong> The CM works in the owner&apos;s interest, providing transparent cost reporting and independent schedule analysis.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Risk management:</strong> Formal risk identification and mitigation planning throughout the project lifecycle reduces surprises and their financial impact.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">General Contracting</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Competitive pricing:</strong> Multiple GCs bid on completed design documents, creating price competition that can yield the lowest initial construction cost.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Clear scope:</strong> With completed design documents, the project scope is well-defined before pricing, reducing ambiguity about what is included in the contract.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Simple structure:</strong> One contract between the owner and GC simplifies the contractual relationship and responsibility for all construction work.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Familiar process:</strong> Most property owners and lenders are comfortable with the traditional design-bid-build process using a general contractor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span><strong>Lower management fees:</strong> The GC&apos;s overhead and profit are included in the bid price without a separate CM fee, though total project cost may be higher due to lack of preconstruction input.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="mt-8 text-muted-foreground text-center max-w-2xl mx-auto">
              For complex Charlotte commercial projects, construction management consistently delivers
              better outcomes through proactive preconstruction involvement, budget certainty, and
              professional oversight. For straightforward projects with completed designs, traditional
              general contracting may be more cost-effective. Not sure which approach is right for your
              project?{' '}
              <Link href="/contact" className="text-primary hover:underline">Contact our team</Link> for
              a free consultation. We will evaluate your project and recommend the delivery method that
              best serves your goals.
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
                Construction Management Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte property owners, developers, and
                businesses ask about construction management services, fees, delivery methods, and
                project oversight.
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
            <h2 className="text-3xl font-bold">Construction Management Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides, service pages, and articles for more information on construction
              management and related services in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Construction Services', href: '/services/commercial-construction', type: 'service' },
              { title: 'Design-Build Delivery', href: '/services/design-build', type: 'service' },
              { title: 'Commercial Upfit Services', href: '/services/commercial-upfits', type: 'service' },
            ].map((resource) => (
              <Card key={resource.href} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {resource.type}
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
            Ready to Discuss Construction Management for Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need CM at-risk with a Guaranteed Maximum Price, an owner&apos;s representative
            to protect your interests, or program management for a multi-project portfolio, We Build
            has the experience, licenses, and Charlotte market knowledge to deliver your project
            successfully.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free project consultation. We serve Charlotte,{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">South Charlotte</Link>,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">Fort Mill</Link>,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">Lake Norman</Link>,
            and surrounding communities throughout the Carolinas.
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
