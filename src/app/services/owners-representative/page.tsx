import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Eye,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  Lightbulb,
  FileCheck,
  HardHat,
  MapPin,
  Users,
  BadgeCheck,
  HeartHandshake,
  Target,
  ClipboardCheck,
  Scale,
  ShieldCheck,
  Briefcase,
  CalendarCheck,
  Handshake,
  Search,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: "Owner's Representative Charlotte NC | Construction Project Advocacy & Oversight",
  description:
    "Professional owner's representative services in Charlotte, NC. Construction project advocacy, contractor oversight, schedule & budget management, quality assurance & closeout management. Veteran-owned, licensed in NC & SC. 60+ years combined experience. (704) 574-8124.",
  keywords: [
    'owners representative Charlotte NC',
    'owners representative near me',
    'construction project advocate',
    "owner's rep contractor Charlotte",
    "owner's rep near me",
    'construction oversight services',
    'project management Charlotte NC',
    'construction consulting near me',
    'owner advocate commercial construction',
    'construction project oversight',
    "owner's representative near me",
    'construction project management Charlotte',
    'owner rep services Charlotte NC',
    'construction advocacy Charlotte',
    'owners representative Charlotte North Carolina',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/owners-representative',
  },
  openGraph: {
    title: "Owner's Representative Charlotte NC | We Build",
    description:
      "Expert owner's representative services in Charlotte. Construction project advocacy, contractor oversight, budget management & quality assurance. Veteran-owned, licensed NC & SC.",
    url: 'https://webuildclt.com/services/owners-representative',
    type: 'website',
  },
};

const serviceTypes = [
  {
    icon: Eye,
    title: "Full Owner's Representation",
    desc: 'Comprehensive, end-to-end project management and advocacy from initial concept through final occupancy, serving as your dedicated construction professional throughout every phase of the project.',
    details:
      "Full owner's representation is our most comprehensive service, providing a dedicated construction professional who acts as an extension of your team from the earliest planning stages through construction completion and occupancy. As your full owner's representative in Charlotte, we participate in the selection of the architect and engineering team, provide input on design decisions that affect cost and constructability, manage the contractor procurement and selection process, oversee all aspects of construction including schedule, budget, quality, and safety, and coordinate the closeout, commissioning, and move-in process. This service is ideal for building owners and organizations that do not have in-house construction expertise but are undertaking a significant construction investment. Our full representation clients include corporate tenants building out new headquarters, medical practices developing new facilities, nonprofit organizations managing capital campaigns, church congregations building new worship spaces, and out-of-state investors developing commercial properties in the Charlotte market. We serve as your single point of contact, translating complex construction decisions into clear options with understandable trade-offs so you can make informed decisions without needing to become a construction expert yourself.",
    fee: '2-5% of construction cost',
  },
  {
    icon: ClipboardCheck,
    title: 'Construction Project Oversight',
    desc: 'Independent monitoring and oversight of your construction project, providing regular inspections, progress reporting, and quality verification without replacing your general contractor project management team.',
    details:
      "Construction project oversight provides an independent set of experienced eyes on your project without the full scope of owner's representation. This service is appropriate when you have a trusted general contractor managing the day-to-day construction but want independent verification that work is proceeding according to the plans, schedule, and budget. Our oversight services include regular site visits at intervals you determine, typically weekly or bi-weekly, where we inspect work in progress, photograph conditions, review the construction schedule status, and document any concerns. We provide written inspection reports after each visit that summarize progress, identify quality issues, note potential schedule risks, and recommend corrective actions when needed. This service is particularly valuable for lenders who require independent construction monitoring before releasing draw payments, for property owners with multiple projects who cannot give each one full-time personal attention, and for out-of-state owners who need a trusted local professional watching their Charlotte construction investment.",
    fee: '$150-$300/hour or fixed monthly retainer',
  },
  {
    icon: Search,
    title: 'Contractor Selection & Bidding',
    desc: 'Professional management of the contractor procurement process, from prequalification and bid package preparation through bid evaluation, negotiation, and contract award.',
    details:
      'Selecting the right general contractor is one of the most consequential decisions on any construction project. Our contractor selection and bidding services ensure you engage a qualified, competitively priced contractor through a professional procurement process. We begin by developing a list of qualified contractors based on their experience with similar project types, their current workload and capacity, their financial stability, their safety record, and their reputation in the Charlotte construction market. We prepare comprehensive bid packages that clearly define the scope of work, contract terms, schedule requirements, and evaluation criteria. During the bidding period, we conduct pre-bid conferences, manage clarification requests, and ensure all bidders receive the same information. When bids are received, we analyze each submission for completeness, evaluate pricing against our independent cost estimate, check for scope gaps or qualifications that could lead to change orders, verify contractor references, and prepare a bid comparison that enables an informed award decision. Our knowledge of Charlotte-area subcontractor markets and current pricing ensures you receive competitive bids from qualified firms.',
    fee: 'Included in full representation or $10,000-$25,000 standalone',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule & Budget Management',
    desc: 'Continuous monitoring and management of the construction schedule and budget on your behalf, with proactive identification of variances and recommended corrective actions before problems escalate.',
    details:
      "Schedule and budget management is the backbone of effective owner's representation. We monitor both continuously, comparing actual progress and expenditures against the approved baseline and alerting you to any variances that require attention. For schedule management, we review the contractor's monthly schedule updates, verify that reported progress matches observed field conditions, analyze the critical path for potential delays, and evaluate the contractor's schedule recovery plans when activities fall behind. For budget management, we review every contractor pay application by comparing billed amounts against verified work-in-place, evaluate change order requests to determine whether the scope change is valid and the pricing is fair, track the project contingency usage rate against the stage of completion, and maintain a cost projection that forecasts the final project cost at completion. Our budget management has consistently helped Charlotte project owners avoid the budget surprises that result from inadequate financial oversight, catching billing errors, unjustified change orders, and trending cost overruns before they become crises.",
    fee: 'Included in full representation',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Systematic inspection and verification program that ensures all construction work meets the contract documents, applicable codes, and your quality expectations.',
    details:
      "Quality assurance is where an owner's representative delivers some of the most tangible value. General contractors perform their own quality inspections, but the contractor's quality program is inherently a self-assessment. Our independent quality assurance provides an additional layer of verification performed by a professional whose only interest is ensuring the building meets your standards. Our quality program includes pre-installation conferences for critical work where we review the contractor's planned approach, materials, and crew qualifications before work begins; in-progress inspections at key milestones including foundations, structural framing, building envelope, mechanical rough-in, and finish installations; coordination with third-party testing agencies for concrete, structural steel, soils, and other materials requiring independent testing; punch list development and verification, ensuring that deficient items are identified, corrected, and re-inspected before you accept the building; and warranty documentation and tracking to ensure all warranty information is properly compiled and filed. Charlotte commercial property owners who invest in independent quality assurance during construction consistently report fewer post-occupancy problems, lower warranty claim rates, and greater satisfaction with their finished building.",
    fee: 'Included in full representation or $150-$300/hour standalone',
  },
  {
    icon: Briefcase,
    title: 'Closeout & Warranty Management',
    desc: 'Management of the project closeout process including punch list resolution, document collection, occupancy certification, and ongoing warranty enforcement during the warranty period.',
    details:
      "Project closeout is the phase where many construction projects lose momentum. The general contractor's attention shifts to the next project, subcontractors become difficult to recall for punch list work, and critical closeout documents like operation manuals, warranties, and as-built drawings remain uncollected. Our closeout management services ensure your project finishes as strongly as it started. We manage the punch list process from initial walk-through through final resolution, tracking every item to completion. We collect all required closeout documents including as-built drawings, operation and maintenance manuals, equipment warranties, material certifications, and final lien waivers. We coordinate the certificate of occupancy process with Mecklenburg County Code Enforcement. After occupancy, we conduct warranty walks at 6 months and 11 months to identify items requiring warranty correction before the one-year warranty period expires. For Charlotte commercial properties, this post-occupancy service alone can save tens of thousands of dollars in repair costs that would otherwise fall to the owner after the warranty expires.",
    fee: 'Included in full representation or $5,000-$15,000 standalone',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Needs Assessment & Engagement',
    desc: "We begin by understanding your project, your organization, and your specific needs. This includes reviewing any existing plans, budgets, or feasibility studies, understanding your decision-making structure and communication preferences, and defining the scope of our representation. We tailor our services to your situation, whether you need full representation from day one or targeted support in specific areas such as contractor selection, construction oversight, or closeout management.",
  },
  {
    step: '02',
    title: 'Team Selection & Design Oversight',
    desc: "For projects in the planning stage, we assist with the selection of the architect, engineers, and other consultants. We participate in design meetings, provide constructability input as the design develops, and ensure that design decisions are informed by current Charlotte-area construction costs and market conditions. Our early involvement helps prevent the budget surprises that occur when the design team works in isolation from construction cost reality.",
  },
  {
    step: '03',
    title: 'Contractor Procurement & Award',
    desc: "We manage the contractor selection process from prequalification through contract award. This includes preparing bid packages, conducting pre-bid conferences, evaluating submitted bids, checking references, and negotiating contract terms that protect your interests. Our knowledge of Charlotte-area general contractors, their specialties, their capacity, and their track records ensures you engage a firm that is well-suited to your specific project.",
  },
  {
    step: '04',
    title: 'Construction Monitoring & Advocacy',
    desc: "During construction, we serve as your on-site advocate. We attend all project meetings, review pay applications, evaluate change orders, monitor the schedule, conduct quality inspections, and ensure the contractor is performing in accordance with the contract. You receive regular progress reports and immediate notification of any issues that could affect your timeline, budget, or quality. We are your voice on the construction site, ensuring your interests are represented in every decision.",
  },
  {
    step: '05',
    title: 'Quality Control & Issue Resolution',
    desc: "We implement a systematic quality program that verifies work meets the contract documents and your expectations. When quality issues arise, we document the deficiency, notify the contractor, verify the corrective action, and ensure the issue does not recur. When disputes arise between the owner and contractor regarding scope, cost, or responsibility, we provide experienced analysis and advocacy that protects your position while maintaining a productive working relationship with the contractor.",
  },
  {
    step: '06',
    title: 'Closeout & Post-Occupancy Support',
    desc: "We manage the entire closeout process from punch list development through certificate of occupancy. After you occupy the building, we conduct warranty inspections at 6 and 11 months to identify items requiring correction before the warranty expires. We remain available for post-occupancy consultation, helping you address any building performance issues and ensuring a smooth transition from construction to operations.",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: "We Build is a veteran and family-owned construction company. Our military background means we understand what it means to serve as an advocate. As your owner's representative, we work exclusively in your interest, with the same loyalty, discipline, and accountability that defined our military service. Your project is our mission, and we do not stop until it is accomplished to your satisfaction.",
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: "Our leadership team brings over 60 years of combined construction experience across commercial, institutional, healthcare, and industrial projects. This experience means we have seen virtually every type of construction problem and know how to prevent it or resolve it quickly. An inexperienced owner's representative may identify problems but lack the depth of knowledge to guide you toward the right solution. Our experience provides both the diagnosis and the remedy.",
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: "We hold general contractor licenses in both North Carolina and South Carolina. This is significant because many owner's representative firms are consulting companies without construction licenses. Our licenses mean we understand the building codes, construction methods, and contractor obligations at a level that can only come from actually building projects. We do not just observe construction; we understand it from the inside out.",
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: "As a member of the U.S. Green Building Council, we bring sustainable building knowledge to our owner's representation services. We help you evaluate green building options during design, verify that sustainable features are properly installed during construction, and ensure that energy-efficient systems are commissioned to operate as designed.",
  },
  {
    icon: Target,
    title: 'Your Advocate, Not Your Contractor',
    desc: "When we serve as your owner's representative, we work exclusively for you. We do not hold trade contracts, we do not earn fees from subcontractors, and we have no financial interest in any aspect of the construction cost. This independence is essential because it eliminates the conflicts of interest that can arise when the party overseeing construction also profits from construction spending. Our only incentive is to protect your interests.",
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Expertise',
    desc: "Our deep knowledge of the Charlotte construction market is a significant advantage for our owner's representation clients. We know the local contractors, their strengths and weaknesses, their current workload, and their pricing patterns. We understand Mecklenburg County permitting processes, Charlotte utility connection procedures, and the seasonal factors that affect construction productivity in the Carolinas. This local expertise directly translates into better contractor selection, more accurate budget assessments, and faster problem resolution.",
  },
  {
    icon: Lightbulb,
    title: 'Both Sides of the Table',
    desc: "As a general contractor that also provides owner's representative services, we understand construction from both sides of the table. We know how contractors think, how they price their work, where their profit margins are, and what motivates them to perform. This dual perspective makes us more effective advocates because we can anticipate contractor strategies, evaluate contractor claims with credibility, and negotiate solutions that are fair to both parties while protecting your interests.",
  },
  {
    icon: HeartHandshake,
    title: 'Transparent & Accessible',
    desc: "Our owner's representation clients receive structured weekly progress reports, immediate notifications of significant issues, and direct access to their assigned representative at all times. We believe that an informed owner makes better decisions, and our communication systems ensure you are never surprised by developments on your project. Your representative is available by phone, email, and text whenever you need them, not just during scheduled meetings.",
  },
];

const costFactors = [
  {
    type: "Full Owner's Representation",
    range: '2-5% of construction cost',
    desc: "Full owner's representation fees are typically structured as a percentage of construction cost, making the expense proportional to the project size. For a $5 million Charlotte commercial project, representation costs range from $100,000 to $250,000, covering all services from preconstruction through post-occupancy warranty management. The fee percentage decreases as project size increases. Projects over $10 million typically fall toward the lower end of the range.",
  },
  {
    type: 'Fixed Monthly Retainer',
    range: '$5,000-$25,000 per month',
    desc: "Many owner's representation engagements are structured as fixed monthly retainers, providing budget predictability regardless of construction cost fluctuations. Monthly retainers are sized based on the project's complexity, the required level of on-site presence, and the duration of the engagement. A 12-month construction project with weekly site visits and full meeting attendance might carry a retainer of $8,000 to $15,000 per month.",
  },
  {
    type: 'Hourly Consulting',
    range: '$150-$300/hour',
    desc: "Hourly consulting rates are used for targeted engagements such as periodic construction oversight, change order review, bid evaluation, or dispute resolution support. Hourly arrangements are cost-effective for owners who need occasional expert input rather than full-time representation. We provide detailed time records so you always know exactly how your consulting budget is being used.",
  },
  {
    type: 'Contractor Selection & Bidding',
    range: '$10,000-$25,000 standalone',
    desc: "When engaged specifically for contractor procurement, fees cover the entire selection process from prequalification through contract negotiation. This service typically takes 6 to 12 weeks and includes bid package preparation, bidder prequalification, pre-bid conferences, bid analysis, reference checks, and contract negotiation support. The investment consistently delivers value by ensuring you engage the best-qualified contractor at a competitive price.",
  },
  {
    type: 'Closeout & Warranty Management',
    range: '$5,000-$15,000 standalone',
    desc: "Standalone closeout and warranty management covers punch list development and resolution, closeout document collection, certificate of occupancy coordination, and two warranty walks during the first year of occupancy. This service is valuable for owners who managed their own project during construction but want professional support for the critical closeout phase and warranty period.",
  },
];

const faqs = [
  {
    question: "What does an owner's representative do in construction?",
    answer:
      "An owner's representative is a construction professional who acts as the building owner's dedicated advocate throughout the construction project. The owner's representative attends all project meetings, reviews contractor pay applications to verify billed amounts match actual work completed, evaluates change order requests for legitimacy and fair pricing, monitors the construction schedule for delays, conducts independent quality inspections, coordinates with the design team on clarifications and changes, and serves as the owner's single point of contact with the entire project team. The owner's representative does not replace the general contractor but provides an independent layer of oversight that ensures the contractor performs in accordance with the contract and the owner's interests are protected.",
  },
  {
    question: "When do I need an owner's representative?",
    answer:
      "You should consider an owner's representative when you are undertaking a construction project of $500,000 or more and you do not have in-house construction expertise to manage the project, when you are an out-of-state investor developing property in the Charlotte area and need a trusted local professional watching your investment, when your project is complex enough that managing it yourself would take you away from running your business, when you have had a bad experience on a previous construction project and want professional oversight this time, or when your lender requires independent construction monitoring as a condition of the construction loan. The cost of an owner's representative is a small fraction of the total project cost, and the protection it provides against budget overruns, schedule delays, and quality problems consistently delivers a positive return on investment.",
  },
  {
    question: "How much does an owner's representative cost in Charlotte?",
    answer:
      "Owner's representative fees in Charlotte typically range from 2 to 5 percent of construction cost for full representation, or $5,000 to $25,000 per month as a fixed retainer. Hourly consulting rates for targeted oversight services range from $150 to $300 per hour. For a $5 million commercial project, full owner's representation typically costs $100,000 to $250,000 over the life of the project. While this represents a significant investment, our clients consistently report that the savings from avoided change orders, caught billing errors, and prevented quality problems more than offset the representation fee.",
  },
  {
    question: "What is the difference between an owner's representative and a project manager?",
    answer:
      "The terms are sometimes used interchangeably, but there is an important distinction. A project manager may work for the general contractor, the architect, or the owner, and their loyalty is to their employer. An owner's representative works exclusively for the building owner and has no financial interest in any other aspect of the project. The owner's representative is an advocate, not a neutral party. Their job is to protect the owner's interests in every interaction with the contractor, the design team, and the regulatory authorities. A general contractor's project manager manages the construction work. An owner's representative manages the owner's interests in the construction work.",
  },
  {
    question: "Can I hire an owner's representative after construction has already started?",
    answer:
      "Yes, we are frequently engaged after construction has started, often because the owner has encountered problems with the contractor's performance, received unexpected change orders, or realized that managing a construction project requires more time and expertise than they anticipated. While early engagement provides the greatest benefit, bringing in an owner's representative mid-project can still deliver significant value by establishing proper oversight procedures, catching and correcting quality issues, managing the remaining budget, and ensuring a thorough closeout process. We begin every mid-project engagement with a comprehensive assessment of the project's current status, reviewing all contract documents, change orders, schedule updates, and financial records to establish a baseline.",
  },
  {
    question: "Do you serve as owner's representative on projects where you are not the general contractor?",
    answer:
      "Yes, that is actually the most common structure for our owner's representation engagements. When we serve as your owner's representative, we are working for you, not for the general contractor. Our role is to provide independent oversight and advocacy. The general contractor manages the construction; we manage your interests in the construction. We work with general contractors throughout the Charlotte market and maintain professional, productive relationships with them because effective advocacy does not require an adversarial approach. It requires competence, fairness, and a clear understanding of the contract terms.",
  },
  {
    question: "What qualifications should I look for in an owner's representative?",
    answer:
      "Look for construction experience, not just consulting experience. The most effective owner's representatives have actually built projects, which gives them the practical knowledge to evaluate contractor performance, assess change order validity, and identify quality issues that a less experienced professional might miss. Specific qualifications to evaluate include years of construction experience with projects similar to yours, state contractor licensing (which demonstrates construction competence beyond consulting), local market knowledge (Charlotte-area permitting processes, contractors, and pricing), professional references from recent clients, adequate professional liability insurance, and a clear fee structure. We Build meets all of these criteria and provides a level of construction expertise that pure consulting firms cannot match.",
  },
  {
    question: "How does an owner's representative save me money?",
    answer:
      "An owner's representative saves money in several specific ways: catching billing errors on pay applications where the contractor bills for work not yet completed; evaluating change order requests to ensure the scope change is legitimate and the pricing is fair, often negotiating significant reductions; identifying construction quality issues during installation when correction is inexpensive, rather than after completion when correction requires demolition and reinstallation; monitoring the schedule to prevent delays that increase your carrying costs including construction loan interest, temporary office rental, and delayed revenue; and managing the closeout process to ensure all warranty documentation is collected and warranty inspections are performed, protecting you from repair costs that should be covered by the contractor's warranty. On Charlotte commercial projects, these savings consistently exceed the cost of the owner's representative fee.",
  },
  {
    question: "What areas do you serve for owner's representative services?",
    answer:
      "We provide owner's representative services throughout the greater Charlotte metropolitan area, including Uptown Charlotte, South End, NoDa, University City, Ballantyne, South Charlotte, and all Mecklenburg County communities. We also serve the Lake Norman corridor including Cornelius, Davidson, Huntersville, and Mooresville, as well as Fort Mill, Rock Hill, Indian Land, and the broader York County area in South Carolina. Our general contractor licenses in both North Carolina and South Carolina enable us to provide informed oversight regardless of which side of the state line your project is located. ",
  },
  {
    question: "How do I get started with owner's representative services?",
    answer:
      "Contact us for a free initial consultation. We will discuss your project, assess your specific needs, and recommend the level of representation that makes sense for your situation. Not every project needs full owner's representation; some benefit most from targeted support in areas like contractor selection, construction oversight, or closeout management. We will provide a clear proposal with scope, fee structure, and timeline so you can make an informed decision. Call us at (704) 574-8124 or submit a request through our contact page.",
  },
  {
    question: "How much can an owner's representative save on a $5 million Charlotte construction project?",
    answer:
      "On a $5 million commercial project in Charlotte, an owner's representative typically saves 5 to 12 percent of total construction cost, which translates to $250,000 to $600,000 in avoided overruns. These savings come from catching pay application billing errors averaging 3 to 5 percent of billed amounts, negotiating change order reductions of 15 to 30 percent on average, preventing quality deficiencies that would require costly demolition and reinstallation, and avoiding schedule delays that increase carrying costs by $10,000 to $25,000 per week. The representation fee of $100,000 to $250,000 on a project of this size consistently delivers a 2-to-1 or better return on investment.",
  },
  {
    question: "What is the difference between an owner's representative and a construction manager in Charlotte?",
    answer:
      "A construction manager directly manages the construction process, often holding trade contracts, running the job site, and being responsible for delivering the building. An owner's representative does not manage construction directly but instead provides independent oversight and advocacy on behalf of the building owner. The construction manager is accountable for building the project; the owner's representative is accountable for protecting the owner's interests while the project is being built. Some Charlotte projects use both: a construction manager to execute the work and an owner's representative to provide independent oversight of the construction manager's performance.",
  },
  {
    question: "Do Charlotte lenders require an owner's representative for construction loans?",
    answer:
      "Many Charlotte-area commercial construction lenders require independent construction monitoring as a condition of the loan, particularly for projects exceeding $2 million. This monitoring verifies that construction progress matches draw requests, ensuring the lender is not advancing funds ahead of actual work completion. Some lenders hire their own third-party inspectors, but many accept a qualified owner's representative as satisfying this requirement, which benefits the borrower because the owner's representative provides broader advocacy beyond the lender's narrow draw verification needs. We provide draw inspection reports in the format required by major Charlotte commercial lenders including Bank of America, Truist, and regional community banks.",
  },
];

export default function OwnersRepresentativePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            "Owner's Representative Charlotte NC",
            "Professional owner's representative services in Charlotte, NC. Construction project advocacy, contractor oversight, schedule and budget management, quality assurance, and closeout management. Veteran-owned, licensed in NC & SC. 60+ years combined experience.",
            'https://webuildclt.com/services/owners-representative'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: "Owner's Representative" },
          ]),
        ]}
      />

      <PageHero
        title="Owner's Representative Charlotte NC"
        subtitle="Your dedicated construction advocate, protecting your interests on every project"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: "Owner's Representative" },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Owner&apos;s Representative Services in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                An owner&apos;s representative is a construction professional who serves as your dedicated
                advocate throughout every phase of a building project. If you are investing in commercial
                construction in Charlotte but do not have an in-house construction team, an owner&apos;s
                representative provides the expertise, oversight, and advocacy you need to protect your
                investment and achieve a successful outcome. Your owner&apos;s rep attends every meeting,
                reviews every pay application, evaluates every change order, inspects every phase of work,
                and ensures that your contractor is building your project in accordance with the contract,
                on schedule, and within budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte&apos;s commercial construction market is dynamic and competitive. General
                contractors are managing multiple projects, subcontractors are in high demand, and the
                complexity of modern commercial buildings means there are thousands of decisions and
                potential problems on every project. Without experienced construction oversight, building
                owners are vulnerable to billing errors, unjustified change orders, quality shortcuts,
                schedule slippage, and closeout delays that add cost and frustration. An owner&apos;s
                representative levels the playing field by ensuring you have the same caliber of
                construction expertise on your side of the table as the contractor has on theirs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link> that
                also provides professional owner&apos;s representative services. Our unique advantage is
                that we understand construction from the builder&apos;s perspective, giving us insight into
                how contractors operate, how they price their work, and where the common pitfalls lie. With
                over 60 years of combined experience, licenses in both North Carolina and South Carolina,
                and deep knowledge of the Charlotte construction market, we provide representation that
                protects your interests with competence and credibility. We serve{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and
                the entire Charlotte metro area. As a USGBC member, we bring sustainable building
                knowledge to every project we oversee.
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
                { icon: Eye, title: 'Independent Advocacy', desc: 'We work exclusively for you with no financial interest in construction spending. Your interests are our only priority.' },
                { icon: DollarSign, title: 'Budget Protection', desc: 'Pay application review, change order evaluation, and cost tracking that consistently saves more than the representation fee.' },
                { icon: Clock, title: 'Schedule Accountability', desc: 'Proactive schedule monitoring with early warning of delays and recommended recovery actions before problems escalate.' },
                { icon: Shield, title: 'Veteran-Owned', desc: 'Military-trained advocacy: loyal, disciplined, accountable, and committed to accomplishing your project mission.' },
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

      {/* Service Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Owner&apos;s Representative Services We Provide in Charlotte
            </h2>
            <p className="text-muted-foreground">
              From full representation spanning the entire project lifecycle to targeted oversight
              of specific phases, we tailor our services to your needs and your project.
            </p>
          </div>
          <div className="space-y-8">
            {serviceTypes.map((type) => (
              <Card key={type.title}>
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

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Owner&apos;s Representation Process: 6 Steps from Assessment to Occupancy
            </h2>
            <p className="text-muted-foreground">
              A comprehensive advocacy process that protects your interests from project inception
              through post-occupancy warranty management.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build as Your Owner&apos;s Representative
            </h2>
            <p className="text-muted-foreground">
              Your owner&apos;s representative should be someone who has actually built projects, not
              just observed them. Our construction expertise makes us more effective advocates
              for your interests.
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

      {/* Costs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Fee Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Owner&apos;s Representative Fees in Charlotte, NC (2026)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Owner&apos;s representative fees are structured to match your project&apos;s needs and
                your budget. Below are typical fee ranges for Charlotte-area commercial projects.
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
              <h3 className="font-semibold mb-3">When Owner&apos;s Representation Delivers the Most Value</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>No in-house construction team:</strong> If your organization does not have construction professionals on staff, an owner&apos;s representative provides the expertise you need to manage a complex construction investment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Out-of-state investors:</strong> Charlotte is a major market for out-of-state commercial real estate investment. A local owner&apos;s representative provides the on-the-ground oversight that remote ownership cannot.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Large or complex projects:</strong> Projects over $2 million or with complex systems benefit most from independent oversight that catches issues before they become expensive problems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Lender requirements:</strong> Many construction lenders require independent construction monitoring as a loan condition. Our owner&apos;s representative services satisfy this requirement while also protecting your interests.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Owner&apos;s Representative Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte property owners ask about
                owner&apos;s representative services, fees, and project advocacy.
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

      {/* Related Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Related Services</h2>
            <p className="text-muted-foreground mt-2">
              Owner&apos;s representation works alongside our other services to deliver
              successful project outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service' },
              { title: 'Pre-Construction Services', href: '/services/pre-construction', type: 'Service' },
              { title: 'Value Engineering', href: '/services/value-engineering', type: 'Service' },
              { title: 'Commercial Construction', href: '/services/commercial-construction', type: 'Service' },
              { title: 'Design-Build Delivery', href: '/services/design-build', type: 'Service' },
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
            Ready to Protect Your Construction Investment?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need full owner&apos;s representation from project inception, targeted
            construction oversight during the build, or closeout management to ensure a successful
            finish, We Build has the experience and integrity to serve as your trusted construction
            advocate.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We serve Charlotte,{' '}
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
