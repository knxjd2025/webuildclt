import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Shield,
  FileCheck,
  HardHat,
  MapPin,
  Lightbulb,
  Calculator,
  Scale,
  BadgeCheck,
  HeartHandshake,
  ClipboardCheck,
  Search,
  BarChart3,
  Ruler,
  FileText,
  Target,
  TrendingDown,
  Building2,
  CalendarDays,
  Layers,
  Hammer,
  Wrench,
  Eye,
  Users,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title: 'Pre-Construction Services Charlotte NC | Planning, Estimating & Value Engineering',
  description:
    'Expert pre-construction services in Charlotte, NC. Feasibility studies, cost estimating, value engineering, constructability reviews, scheduling, and site analysis. Veteran-owned, licensed in NC & SC. Save money before you break ground. (980) 471-1745.',
  keywords: [
    'pre-construction services Charlotte NC',
    'pre-construction services near me',
    'pre-construction planning Charlotte',
    'pre-construction contractor',
    'value engineering Charlotte NC',
    'construction estimating Charlotte NC',
    'construction estimating near me',
    'site feasibility Charlotte',
    'constructability review Charlotte NC',
    'construction cost estimating Charlotte',
    'pre-construction consulting Charlotte',
    'construction budgeting Charlotte NC',
    'construction scheduling Charlotte NC',
    'site analysis Charlotte NC',
    'construction feasibility study Charlotte',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/pre-construction',
  },
  openGraph: {
    title: 'Pre-Construction Services Charlotte NC | We Build',
    description:
      'Comprehensive pre-construction planning services including feasibility studies, cost estimating, value engineering, and site analysis across Charlotte, Fort Mill & Lake Norman.',
    url: 'https://webuildclt.com/services/pre-construction',
    type: 'website',
  },
};

const serviceTypes = [
  {
    icon: Search,
    title: 'Feasibility Studies',
    slug: 'feasibility-studies',
    desc: 'Comprehensive site and project feasibility analysis to determine whether your construction project is viable before you invest in design or land acquisition.',
    details:
      'A feasibility study is the critical first step in any construction project. Before committing significant capital to design documents and permits, you need to know whether your project concept is viable on your intended site. Our feasibility studies evaluate zoning compliance, building setback and height restrictions, parking requirements, utility availability and capacity, environmental constraints such as wetlands or flood zones, and existing soil conditions that may affect foundation design. In Charlotte, Mecklenburg County zoning ordinances vary significantly across districts, and understanding which uses are permitted by right versus which require conditional zoning approval can save you months of delay and tens of thousands of dollars in rezoning costs. We also assess the financial feasibility by comparing estimated construction costs against market rents or projected revenue to help you determine whether the project will generate the return on investment you require. Our feasibility reports give property owners, developers, and business owners the objective data they need to make informed go or no-go decisions before spending money on full architectural plans.',
  },
  {
    icon: Calculator,
    title: 'Cost Estimating',
    slug: 'cost-estimating',
    desc: 'Detailed, line-item construction cost estimates that give you budget certainty before design documents are finalized, reducing the risk of sticker shock at bid time.',
    details:
      'Accurate cost estimating during pre-construction is the single most effective way to prevent budget overruns during construction. Our estimating process begins with a thorough review of available design documents, site conditions, and project requirements. We develop estimates at multiple levels of detail as the project progresses. Conceptual estimates during early planning provide order-of-magnitude cost ranges based on building type, square footage, and Charlotte-area market data. As design develops, we produce detailed estimates that break down every cost category including sitework, foundations, structural framing, building envelope, mechanical systems, electrical, plumbing, fire protection, interior finishes, and general conditions. Each line item includes current material pricing from Charlotte-area suppliers, labor rates reflecting local subcontractor markets, and realistic allowances for contingency. We benchmark our estimates against recent bid results from comparable Charlotte projects to ensure our numbers reflect what the market will actually deliver. This approach eliminates the painful scenario where a project is fully designed only to discover that construction costs exceed the budget by twenty or thirty percent.',
  },
  {
    icon: TrendingDown,
    title: 'Value Engineering',
    slug: 'value-engineering',
    desc: 'Systematic analysis of building systems, materials, and methods to reduce construction costs without sacrificing quality, performance, or design intent.',
    details:
      'Value engineering is not about cutting corners. It is a disciplined process of examining every building system and material specification to identify alternatives that deliver equal or better performance at lower cost. Our value engineering reviews start with the highest-cost line items in the estimate because that is where the largest savings opportunities exist. Common value engineering strategies include substituting structural steel connections that reduce fabrication time, selecting exterior cladding systems that install faster without sacrificing appearance, redesigning mechanical ductwork routing to reduce material quantity, specifying regionally available materials that avoid long shipping costs, consolidating electrical panel locations to reduce conduit runs, and adjusting building footprints to optimize structural grid spacing. On a typical Charlotte commercial project, a thorough value engineering review identifies savings of eight to fifteen percent of total construction cost. For a three million dollar project, that represents two hundred forty thousand to four hundred fifty thousand dollars returned to the owner budget without compromising the finished product. We present every value engineering recommendation with a clear explanation of the cost savings, any trade-offs in performance or appearance, and our professional recommendation on whether to accept or reject each item.',
  },
  {
    icon: ClipboardCheck,
    title: 'Constructability Review',
    slug: 'constructability-review',
    desc: 'Expert review of design documents from a builder perspective, identifying coordination issues, construction sequence conflicts, and cost drivers before they become change orders.',
    details:
      'Design documents created by architects and engineers are focused on what the finished building should look like and how it should perform. A constructability review adds the builder perspective, identifying how the building will actually be constructed and flagging issues that could cause problems during construction. Our constructability reviews examine structural connection details for field feasibility, mechanical and electrical system routing conflicts that will require costly field coordination, material specifications that are difficult to source or have extended lead times, construction sequences where one trade cannot complete work until another trade finishes, accessibility challenges for equipment and material delivery, and details that look elegant on paper but are extremely expensive to execute in the field. We review drawings at multiple design milestones, typically at schematic design, design development, and construction documents, so that issues are identified and resolved while changes are still inexpensive to make. A single constructability issue discovered during construction can cost ten to fifty times more to resolve than the same issue identified and corrected during design. Our constructability reviews routinely save Charlotte project owners hundreds of thousands of dollars in avoided change orders.',
  },
  {
    icon: CalendarDays,
    title: 'Scheduling & Phasing',
    slug: 'scheduling-phasing',
    desc: 'Detailed construction schedules with critical path analysis, resource leveling, and phasing plans that account for Charlotte-area permitting timelines and seasonal factors.',
    details:
      'An accurate construction schedule is essential for business planning, financing, and lease coordination. Our pre-construction scheduling services produce detailed Critical Path Method schedules that map every activity from permit submission through certificate of occupancy. We identify the critical path, the sequence of activities that determines the overall project duration, and flag activities where delays will directly impact the completion date. For each activity, we assign realistic durations based on Charlotte-area labor availability, typical subcontractor mobilization timelines, material lead times from regional suppliers, and seasonal weather considerations. Mecklenburg County permitting timelines are built into the schedule based on our current experience with the local plan review process, which currently runs four to eight weeks for commercial projects depending on complexity. For projects that require phased construction, such as occupied building renovations or campus developments, we create detailed phasing plans that define the sequence of work areas, temporary utility provisions, interim life safety requirements, and tenant or occupant relocation logistics. Our phasing plans include milestone dates that tie to lease commencement dates, financing draw schedules, and equipment delivery windows so that every stakeholder can plan their activities with confidence.',
  },
  {
    icon: MapPin,
    title: 'Site Analysis',
    slug: 'site-analysis',
    desc: 'Comprehensive evaluation of physical site conditions, infrastructure capacity, environmental factors, and regulatory requirements that affect construction cost and feasibility.',
    details:
      'The site itself is one of the largest variables in any construction project. Two parcels in the same Charlotte submarket can have dramatically different development costs depending on topography, soil conditions, utility infrastructure, environmental factors, and zoning. Our site analysis services evaluate all the physical and regulatory factors that affect construction feasibility and cost. We review topographic surveys to assess grading requirements and stormwater management needs. We coordinate geotechnical investigations to determine soil bearing capacity, groundwater levels, and whether rock or unsuitable soils will affect foundation design. We map existing utility infrastructure including water, sewer, natural gas, electrical service, and telecommunications to determine whether adequate capacity exists or whether costly extensions and upgrades are needed. In Mecklenburg County, stormwater management requirements under the Post-Construction Stormwater Ordinance can significantly affect site development costs, particularly on sites with limited pervious area. We evaluate tree preservation requirements, stream buffer setbacks, and flood zone boundaries that can restrict the buildable area of a site. For brownfield sites or properties with previous industrial use, we coordinate Phase I and Phase II environmental assessments to identify contamination that could trigger remediation costs. Our site analysis reports provide a complete picture of site development costs and constraints so that you can make informed decisions about land acquisition and project budgeting.',
  },
];

const processPhases = [
  {
    step: '01',
    title: 'Project Discovery & Goal Setting',
    desc: 'We begin every pre-construction engagement with a thorough discovery session where we learn about your project goals, business requirements, budget expectations, and timeline constraints. Whether you are a developer evaluating a new commercial building, a business owner planning an expansion, or a tenant preparing for a build-out, understanding your objectives and priorities is the foundation of effective pre-construction planning. We establish clear success criteria so that every recommendation we make during the pre-construction phase is aligned with what matters most to you.',
  },
  {
    step: '02',
    title: 'Site Evaluation & Due Diligence',
    desc: 'Our team visits the project site to evaluate existing conditions, document the current state of any structures, assess site access and logistics, and identify potential challenges. For greenfield sites, we coordinate geotechnical investigations, environmental assessments, and utility capacity research. For renovation projects, we conduct existing conditions surveys that document structural systems, mechanical equipment, electrical capacity, and building envelope condition. This due diligence prevents costly surprises during construction and provides the factual basis for accurate estimating and scheduling.',
  },
  {
    step: '03',
    title: 'Zoning & Regulatory Analysis',
    desc: 'We research all applicable zoning regulations, building codes, and permit requirements for your project. In Charlotte, this includes Mecklenburg County zoning district regulations, City of Charlotte Unified Development Ordinance requirements, NCDOI building code compliance, fire marshal requirements, and any applicable state or federal regulations. We identify potential zoning conflicts early and outline the approval pathway, whether the project is permitted by right or requires a conditional rezoning, variance, or special use permit. Understanding the regulatory landscape upfront prevents costly design changes and approval delays later in the process.',
  },
  {
    step: '04',
    title: 'Conceptual Budget Development',
    desc: 'Using the information gathered during discovery, site evaluation, and regulatory analysis, we develop a conceptual budget that establishes realistic cost expectations before significant design investment begins. This conceptual estimate includes hard construction costs, soft costs such as design fees, permits, and inspections, site development costs, and appropriate contingency allowances. We benchmark these numbers against comparable Charlotte-area projects and current market conditions. The conceptual budget becomes the financial framework that guides design decisions and ensures the project stays within your investment parameters from the very beginning.',
  },
  {
    step: '05',
    title: 'Design Coordination & Collaboration',
    desc: 'We work alongside your architect, engineers, and design team as a collaborative partner from the earliest stages of design. Our role is to provide real-time cost feedback as design decisions are made, flag constructability issues while they are still easy to resolve, and identify value engineering opportunities that the design team might not consider. This collaborative approach is fundamentally different from the traditional model where the contractor first sees the project at bid time. By integrating construction expertise into the design process, we prevent the costly redesign cycles that occur when a completed set of documents comes in over budget.',
  },
  {
    step: '06',
    title: 'Detailed Estimating & Cost Reconciliation',
    desc: 'As design documents progress through schematic design, design development, and construction documents, we produce increasingly detailed cost estimates at each milestone. Each estimate is reconciled against the conceptual budget to track cost trends and identify areas where the design is diverging from the budget. When costs exceed targets, we present specific value engineering alternatives and work with the design team to bring the project back into alignment. This iterative estimating process ensures that by the time construction documents are complete, the project cost is fully understood and within budget, eliminating the painful surprise of an over-budget bid.',
  },
  {
    step: '07',
    title: 'Value Engineering & Cost Optimization',
    desc: 'Our value engineering review examines every major building system and material specification to identify cost reduction opportunities. We evaluate structural systems, building envelope options, mechanical and electrical systems, interior finishes, and site development approaches. Each recommendation includes a detailed cost comparison, an assessment of any impact on quality or performance, and our professional opinion on whether the trade-off is worthwhile. Value engineering is not a one-time event but an ongoing process throughout pre-construction. The most impactful value engineering occurs early in design when changes are least expensive to implement.',
  },
  {
    step: '08',
    title: 'Schedule Development & Procurement Planning',
    desc: 'We develop a detailed construction schedule using Critical Path Method techniques that map every major activity from mobilization through substantial completion. The schedule identifies long-lead procurement items such as structural steel, custom mechanical equipment, elevators, and specialty materials that must be ordered months before they are needed on site. We create a procurement timeline that aligns purchase orders with the construction schedule to prevent delays. For projects with specific occupancy deadlines, we work backward from the required completion date to establish design milestone dates and permit submission deadlines that keep the project on track.',
  },
  {
    step: '09',
    title: 'Risk Assessment & Mitigation',
    desc: 'Every construction project carries risks. Our pre-construction risk assessment identifies the most significant risks to your project and develops specific mitigation strategies for each one. Common risks include material price escalation, subcontractor availability in Charlotte high-demand market, weather delays, permitting timeline uncertainty, and unknown existing conditions in renovation projects. For each identified risk, we assign a probability rating, estimate the potential cost impact, and recommend a mitigation strategy. This proactive approach to risk management is far more effective and far less expensive than reacting to problems after they occur during construction.',
  },
  {
    step: '10',
    title: 'Pre-Construction Deliverables & Construction Transition',
    desc: 'At the conclusion of the pre-construction phase, we deliver a comprehensive package that includes the final detailed estimate, construction schedule, value engineering log, constructability review findings, risk register, and procurement plan. This package provides the complete financial and logistical roadmap for the construction phase. We then transition seamlessly into construction with a team that already has deep knowledge of the project, the site, and the design intent. This continuity between pre-construction and construction is one of the greatest advantages of working with We Build, because the people who planned the project are the same people who build it.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    desc: 'We Build is a veteran and family-owned construction company rooted in the Charlotte community. Military service instills discipline, meticulous planning, and accountability qualities that translate directly into thorough pre-construction services. When we commit to a budget and schedule during pre-construction, we stand behind those numbers during construction because our reputation depends on it.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Our leadership team brings over 60 years of combined construction experience to the pre-construction process. We have estimated and planned hundreds of commercial projects across the Charlotte metro area. This depth of experience means our cost estimates reflect real-world construction conditions, not theoretical calculations, and our schedules account for the practical realities of building in this market.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    desc: 'We hold general contractor licenses in both North Carolina and South Carolina, giving us direct knowledge of building codes, permit processes, and regulatory requirements on both sides of the state line. For projects in Fort Mill, Rock Hill, Indian Land, or Lake Norman, our dual licensing means we understand the jurisdictional differences that affect project planning, permitting timelines, and construction costs.',
  },
  {
    icon: Calculator,
    title: 'Proven Estimating Accuracy',
    desc: 'Our pre-construction estimates consistently come within three to five percent of final construction cost. This accuracy comes from maintaining a current database of Charlotte-area subcontractor pricing, material costs, and labor rates that is updated with every project we bid and build. We do not rely on outdated cost databases or national averages. Our numbers reflect what construction actually costs in Charlotte right now.',
  },
  {
    icon: BadgeCheck,
    title: 'USGBC Member',
    desc: 'As a member of the U.S. Green Building Council, we bring sustainable building expertise to the pre-construction phase. We evaluate energy-efficient systems, sustainable material alternatives, and green building certification pathways during value engineering. Incorporating sustainable strategies during pre-construction is far more cost-effective than retrofitting green features into a design that was not planned for them from the beginning.',
  },
  {
    icon: MapPin,
    title: 'Charlotte Market Intelligence',
    desc: 'We know the Charlotte construction market intimately. We track subcontractor capacity, material pricing trends, permit processing times, and seasonal labor availability in this specific market. This local intelligence directly informs our estimates and schedules, producing more accurate pre-construction deliverables than a firm relying on regional or national data. We know which trades are overbooked, which materials have extended lead times, and where pricing pressure is building.',
  },
  {
    icon: HeartHandshake,
    title: 'Transparent, Collaborative Approach',
    desc: 'Pre-construction is a collaborative process, not a black box. We share our estimating assumptions, cost benchmarks, and scheduling logic with you and your design team in open-book format. Every recommendation is supported by data, every cost is explained, and every trade-off is presented honestly. This transparency builds the trust and alignment that carry through into a successful construction phase.',
  },
];

const deliverables = [
  {
    icon: FileText,
    title: 'Detailed Cost Estimate',
    desc: 'A comprehensive, line-item construction cost estimate organized by CSI division, including material quantities, labor hours, subcontractor pricing, general conditions, overhead, and contingency. Updated at each design milestone to track budget alignment.',
  },
  {
    icon: CalendarDays,
    title: 'Construction Schedule',
    desc: 'A Critical Path Method schedule showing every major construction activity, duration, dependencies, and milestones from mobilization through certificate of occupancy. Includes procurement lead times and permit processing periods.',
  },
  {
    icon: TrendingDown,
    title: 'Value Engineering Log',
    desc: 'A documented record of every value engineering recommendation including the proposed alternative, estimated cost savings, impact assessment, and acceptance or rejection status. Provides a clear audit trail of cost optimization decisions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Constructability Review Report',
    desc: 'A detailed report identifying design coordination issues, construction sequence conflicts, material sourcing challenges, and field execution concerns discovered during document review. Each item includes a recommended resolution.',
  },
  {
    icon: Target,
    title: 'Risk Register',
    desc: 'A structured risk assessment document that identifies project-specific risks, assigns probability and impact ratings, estimates potential cost exposure, and outlines mitigation strategies for each identified risk.',
  },
  {
    icon: BarChart3,
    title: 'Budget Reconciliation Report',
    desc: 'A comparison document tracking how the project budget has evolved from conceptual estimate through detailed estimate, highlighting where costs increased or decreased and the reasons for each change.',
  },
  {
    icon: Layers,
    title: 'Procurement Plan',
    desc: 'A timeline for ordering long-lead materials and equipment, including structural steel, custom mechanical units, electrical switchgear, elevators, and specialty items that require early commitment to maintain the construction schedule.',
  },
  {
    icon: Search,
    title: 'Site Due Diligence Summary',
    desc: 'A consolidated report of all site investigation findings including geotechnical data, utility capacity, environmental assessment results, zoning analysis, and regulatory requirements that affect project scope and cost.',
  },
];

const faqs = [
  {
    question: 'What is pre-construction and why does it matter for my Charlotte project?',
    answer:
      'Pre-construction is the planning phase that occurs before physical construction begins. It includes feasibility analysis, cost estimating, value engineering, constructability review, scheduling, and procurement planning. Pre-construction matters because the decisions made during this phase have the greatest impact on final project cost and timeline. Studies consistently show that every dollar invested in pre-construction planning saves five to ten dollars during construction by preventing change orders, eliminating redesign, and avoiding schedule delays. For Charlotte commercial projects where construction costs continue to rise, thorough pre-construction planning is the most effective way to protect your budget and ensure your project is buildable within your financial parameters before you commit to construction.',
  },
  {
    question: 'How much do pre-construction services cost in Charlotte, NC?',
    answer:
      'Pre-construction service fees in Charlotte typically range from 0.5 to 1.5 percent of estimated construction cost, depending on project complexity and the scope of services required. For a three million dollar commercial project, that represents fifteen thousand to forty-five thousand dollars. Many construction firms, including We Build, offer pre-construction services at reduced cost or no cost when the pre-construction engagement leads to a construction contract, because the knowledge gained during pre-construction makes the construction phase more efficient and profitable for everyone. The return on investment is substantial because pre-construction typically identifies cost savings of eight to fifteen percent through value engineering alone, far exceeding the cost of the pre-construction services themselves.',
  },
  {
    question: 'How long does the pre-construction phase take for a commercial project?',
    answer:
      'The pre-construction phase for a typical Charlotte commercial project takes six to sixteen weeks, depending on project complexity and the stage of design when pre-construction begins. Simple interior renovation projects with clear scope may require only four to six weeks of pre-construction planning. Complex ground-up commercial buildings with extensive site work, multiple building systems, and phased construction may require twelve to sixteen weeks of pre-construction to properly plan. The duration also depends on how quickly design decisions are made, how long site investigations take, and whether zoning or regulatory approvals are needed. Investing adequate time in pre-construction consistently saves more time during construction than it adds to the overall project timeline.',
  },
  {
    question: 'When should I engage a pre-construction contractor for my project?',
    answer:
      'The earlier you engage a pre-construction contractor, the more value they can provide. Ideally, bring a contractor into the process during or even before schematic design, when the most impactful decisions about building systems, materials, and construction methods are being made. At this stage, changes are inexpensive to implement because they only require revising drawings. By the time construction documents are complete, making changes requires costly redesign, reprinting, and re-permitting. If you are evaluating a potential site for purchase or a lease space for build-out, engaging a pre-construction contractor before you commit can provide the cost and feasibility data you need to negotiate effectively and make an informed investment decision.',
  },
  {
    question: 'What is value engineering and how does it reduce my construction costs?',
    answer:
      'Value engineering is a systematic process of reviewing every building component and specification to identify alternatives that achieve the same functional performance at lower cost. It is not about choosing cheaper materials or cutting corners. Instead, value engineering examines whether there are smarter ways to achieve the design intent. For example, switching from a structural steel moment frame to a braced frame system might save fifteen percent on structural costs while providing identical performance. Substituting a high-performance commercial LVT flooring for natural stone in low-visibility corridors saves material and installation costs without affecting the appearance of public-facing spaces. Rerouting mechanical ductwork to reduce the total linear footage saves material, labor, and ceiling space. On Charlotte commercial projects, our value engineering reviews typically identify savings of eight to fifteen percent of total construction cost.',
  },
  {
    question: 'What is a constructability review and why do I need one?',
    answer:
      'A constructability review is an evaluation of design documents from the perspective of the builder, not the designer. Architects and engineers create drawings that show what the finished building should look like, but those drawings sometimes include details that are difficult, expensive, or impossible to build as drawn. A constructability review catches these issues before construction begins when they are inexpensive to fix. Common findings include mechanical and electrical routing conflicts where ducts and conduit occupy the same space above a ceiling, structural connection details that cannot be welded in the field as shown, material specifications with lead times that will delay the schedule, and construction sequences where one trade physically cannot access their work area because another trade is already installed. Discovering these issues during construction results in change orders, schedule delays, and field rework that typically costs ten to fifty times more than fixing the same issue on paper during pre-construction.',
  },
  {
    question: 'How accurate are your pre-construction cost estimates?',
    answer:
      'Our pre-construction estimates consistently achieve accuracy within three to five percent of final construction cost. This accuracy comes from several factors. First, we maintain a current database of Charlotte-area construction costs that is updated continuously with actual bid results and project final costs. Second, our estimators have decades of experience building in this market and understand the nuances that affect local pricing. Third, we solicit preliminary pricing from key subcontractors during pre-construction to validate our estimates against real market conditions rather than relying on published cost data. Fourth, we include appropriate contingency allowances that reflect the level of design completion and the specific risks identified for each project. As design progresses and more information becomes available, each successive estimate becomes more precise.',
  },
  {
    question: 'Do I still need pre-construction services if I already have an architect?',
    answer:
      'Absolutely. Architects bring essential expertise in design, aesthetics, building code compliance, and space planning. Pre-construction contractors bring different but equally important expertise in construction cost, scheduling, material procurement, subcontractor markets, and field execution. These are complementary skill sets, not overlapping ones. Most architects will welcome a pre-construction contractor joining the team because it means they receive real-time cost feedback as they design, reducing the frustrating cycle of designing over budget, value engineering, and redesigning. The most successful Charlotte commercial projects are those where the architect, contractor, and owner work collaboratively from the earliest stages of planning. Our pre-construction services integrate seamlessly with your existing design team without replacing any of their roles.',
  },
  {
    question: 'What Charlotte-specific factors affect pre-construction planning?',
    answer:
      'Charlotte has several market-specific factors that directly affect pre-construction planning. Mecklenburg County plan review currently takes four to eight weeks for commercial projects, and that timeline fluctuates with submission volume. The Charlotte construction labor market is tight, particularly for skilled trades like electricians, plumbers, and HVAC technicians, which affects both scheduling and labor costs. Material lead times for structural steel, custom mechanical equipment, and specialty items can run twelve to twenty weeks depending on demand. Charlotte soil conditions vary significantly, with areas of residual clay soils that present foundation challenges and pockets of rock that increase excavation costs. Stormwater management requirements under Mecklenburg County Post-Construction Stormwater Ordinance can add significant site development costs, particularly in areas with high impervious coverage. Our pre-construction planning accounts for all of these Charlotte-specific variables.',
  },
  {
    question: 'Can pre-construction services help me secure financing for my project?',
    answer:
      'Yes, pre-construction deliverables are extremely valuable for securing construction financing. Lenders require detailed cost estimates, construction schedules, and project feasibility documentation before approving construction loans. A professionally prepared pre-construction package from an experienced contractor gives lenders confidence that the project has been thoroughly planned and that the budget is realistic. Our detailed estimates organized by CSI division, our Critical Path Method schedules with milestone dates, and our risk assessments provide exactly the documentation that banks and SBA lenders need to evaluate a construction loan application. We routinely work with Charlotte-area commercial lenders and understand their documentation requirements. Several of our clients have reported that the quality of our pre-construction deliverables directly contributed to faster loan approval and more favorable financing terms.',
  },
  {
    question: 'What areas do you serve for pre-construction services?',
    answer:
      'We Build provides pre-construction services throughout the greater Charlotte metropolitan area. Our primary service area includes Charlotte, South Charlotte, University City, NoDa, South End, Uptown, and all of Mecklenburg County. We also serve Fort Mill, Rock Hill, Indian Land, and Tega Cay in South Carolina, as well as the Lake Norman corridor communities of Cornelius, Davidson, Huntersville, and Mooresville. Our general contractor licenses in both North Carolina and South Carolina give us direct knowledge of building codes, permitting processes, and regulatory requirements in all of these jurisdictions. For clients with projects in both states, our cross-border experience ensures consistent planning regardless of which side of the state line your project sits on.',
  },
  {
    question: 'How does pre-construction cost estimating compare to hiring a separate cost consultant in Charlotte?',
    answer:
      'A dedicated pre-construction contractor typically provides more accurate and actionable estimates than an independent cost consultant. Independent estimators rely on published cost databases that may not reflect current Charlotte subcontractor pricing, material availability, or local labor conditions. A contractor performing pre-construction solicits real preliminary pricing from the subcontractors who will actually bid the work, giving you estimates grounded in current market reality. We Build maintains active relationships with hundreds of Charlotte-area subcontractors and suppliers, which means our estimates reflect what the project will actually cost to build today, not what a national cost index suggests it should cost.',
  },
  {
    question: 'What pre-construction deliverables will a Mecklenburg County lender expect for a construction loan?',
    answer:
      'Mecklenburg County lenders typically require a detailed cost estimate organized by CSI division, a Critical Path Method construction schedule with milestone dates, proof of contractor licensing and insurance, a project feasibility summary, and evidence that zoning and environmental reviews support the planned use. Some lenders also want a geotechnical report summary and a preliminary site plan showing utility connections and stormwater compliance. We Build assembles these deliverables as part of our standard pre-construction package, and our documentation has supported successful construction loan approvals with Charlotte-area banks, credit unions, and SBA lenders across a wide range of project sizes.',
  },
  {
    question: 'How does pre-construction planning reduce change orders during construction?',
    answer:
      'Change orders are the single largest source of cost overruns on commercial projects, and most originate from issues that could have been identified before construction started. Pre-construction planning reduces change orders by conducting constructability reviews that catch coordination conflicts between trades, performing detailed scope gap analysis to ensure nothing falls between subcontractor scopes, verifying material lead times so procurement delays do not force field substitutions, and confirming that existing site conditions match design assumptions through thorough surveys and investigations. On Charlotte projects where we perform full pre-construction services, our clients typically experience 60 to 80 percent fewer change orders compared to projects that skip the pre-construction phase.',
  },
];

const valueEngineeringExamples = [
  {
    category: 'Structural Systems',
    original: 'Steel moment frame with field-welded connections',
    alternative: 'Braced frame system with bolted connections',
    savings: '12-18% on structural steel costs',
    explanation:
      'Braced frame systems use diagonal members to resist lateral loads instead of rigid welded connections. Bolted connections are faster to install, require less skilled labor, and eliminate weather-sensitive welding operations. The building performs identically under load, but the structure costs significantly less to fabricate and erect.',
  },
  {
    category: 'Building Envelope',
    original: 'Custom curtain wall system with architectural mullion profiles',
    alternative: 'Standard storefront glazing system with thermally broken frames',
    savings: '30-45% on glazing system costs',
    explanation:
      'For buildings under four stories in Charlotte, standard storefront systems provide excellent thermal performance and weather resistance at a fraction of custom curtain wall cost. The visual difference from the exterior is minimal, while the savings on material, engineering, and installation are substantial.',
  },
  {
    category: 'Mechanical Systems',
    original: 'Variable Refrigerant Flow system with dedicated outdoor units per zone',
    alternative: 'High-efficiency packaged rooftop units with VAV distribution',
    savings: '15-25% on HVAC system costs',
    explanation:
      'While VRF systems offer excellent efficiency, the equipment cost premium and specialized installation requirements often outweigh the energy savings for standard commercial occupancies. High-efficiency packaged units with variable air volume distribution provide comparable comfort and efficiency with lower installation costs and easier maintenance access in Charlotte climate conditions.',
  },
  {
    category: 'Interior Finishes',
    original: 'Natural stone flooring throughout common corridors and lobbies',
    alternative: 'Large-format porcelain tile with stone appearance in corridors, natural stone limited to main lobby',
    savings: '40-60% on flooring costs in those areas',
    explanation:
      'Modern large-format porcelain tiles achieve a remarkably convincing stone appearance at a fraction of the material and installation cost. By reserving genuine natural stone for the main lobby where the visual impact is greatest and using high-quality porcelain elsewhere, the building maintains a premium aesthetic while significantly reducing flooring costs.',
  },
  {
    category: 'Site Development',
    original: 'Underground detention system for stormwater management',
    alternative: 'Surface detention basin with landscaped perimeter',
    savings: '50-70% on stormwater system costs',
    explanation:
      'Where site area permits, surface detention basins provide the same stormwater management capacity as underground systems at dramatically lower cost. The basin can be landscaped to serve as an attractive amenity feature. In Mecklenburg County, both approaches satisfy Post-Construction Stormwater Ordinance requirements. Underground systems are necessary only when site constraints prevent surface solutions.',
  },
];

export default function PreConstructionPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Pre-Construction Services Charlotte NC',
            'Comprehensive pre-construction planning services in Charlotte, NC. Feasibility studies, cost estimating, value engineering, constructability reviews, scheduling, and site analysis. Veteran-owned, licensed in NC & SC.',
            'https://webuildclt.com/services/pre-construction'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Pre-Construction' },
          ]),
        ]}
      />

      <PageHero
        title="Pre-Construction Services Charlotte NC"
        subtitle="Save money, reduce risk, and build with confidence through expert pre-construction planning from Charlotte's veteran-owned construction team"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Pre-Construction Planning' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pre-Construction Planning Services in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In Charlotte&apos;s competitive construction market, the most costly mistakes are made
                before a single shovel hits the ground. Projects that skip thorough pre-construction
                planning routinely suffer budget overruns of twenty to forty percent, schedule delays
                measured in months rather than weeks, and change orders that erode profit margins and
                strain client relationships. Pre-construction services exist to prevent these outcomes
                by applying rigorous analysis, accurate estimating, and experienced construction
                judgment to your project before you commit the capital and resources required for
                construction. Whether you are planning a new{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial building
                </Link>, a major{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                  commercial upfit
                </Link>, or a complex new construction project, investing in pre-construction planning is the single most effective way to
                protect your investment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte is experiencing sustained commercial development activity across nearly every
                sector. Office developments along South Boulevard and in the University City corridor,
                medical facilities expanding to serve a growing population, retail and restaurant
                build-outs in emerging neighborhoods, and industrial projects along the I-77 and I-85
                corridors are all competing for the same pool of skilled labor, materials, and
                subcontractor capacity. In this environment, accurate cost estimating, realistic
                scheduling, and strategic value engineering are not optional luxuries, they are
                essential tools for delivering a successful project. Charlotte construction costs have
                risen significantly in recent years, and the projects that come in on budget are
                overwhelmingly those that invested the time and resources in proper pre-construction
                planning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contractor
                </Link>{' '}
                with over 60 years of combined construction experience serving the Charlotte metro
                area. Our pre-construction services bring the same discipline, thoroughness, and
                accountability that define our construction work to the planning phase. Licensed in
                both North Carolina and South Carolina, we provide pre-construction services for
                projects throughout Charlotte,{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>, and the surrounding communities. As a member of the U.S. Green Building
                Council, we also integrate sustainable building analysis into our pre-construction
                reviews, helping clients evaluate energy-efficient alternatives and green building
                strategies before they are locked into a design.
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
                { icon: DollarSign, title: 'Budget Protection', desc: 'Pre-construction planning identifies and resolves cost issues before construction begins, when changes are inexpensive to make. Our clients avoid the painful surprise of over-budget bids.' },
                { icon: Clock, title: 'Schedule Certainty', desc: 'Detailed scheduling during pre-construction accounts for Charlotte-area permitting timelines, material lead times, and labor availability so your project timeline is realistic from day one.' },
                { icon: TrendingDown, title: 'Value Engineering Savings', desc: 'Our value engineering reviews typically identify savings of 8-15% of total construction cost by finding smarter alternatives that deliver the same performance at lower cost.' },
                { icon: Shield, title: 'Veteran-Owned Discipline', desc: 'Military-grade planning discipline means every detail is analyzed, every risk is assessed, and every recommendation is backed by data, not guesswork.' },
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
              Pre-Construction Services We Provide in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Our pre-construction services cover every aspect of project planning from initial
              feasibility through construction-ready deliverables. Each service is designed to
              reduce risk, control cost, and set your project up for a successful construction phase.
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
                      <h3 className="text-xl font-bold mb-3">{type.title}</h3>
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

      {/* Process Phases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Pre-Construction Process: 10 Phases from Discovery to Construction
            </h2>
            <p className="text-muted-foreground">
              A structured, transparent process that transforms your project concept into a
              fully planned, accurately budgeted, and construction-ready package. Every phase
              includes clear deliverables and collaborative decision-making.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {processPhases.map((s) => (
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
              Why Choose We Build for Pre-Construction Planning
            </h2>
            <p className="text-muted-foreground">
              The quality of your pre-construction planning directly determines the success of your
              construction project. Choosing a contractor with deep local experience, proven estimating
              accuracy, and a collaborative approach is the best investment you can make.
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

      {/* Value Engineering Deep-Dive */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Value Engineering
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Value Engineering: Real Examples of Pre-Construction Cost Savings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Value engineering is not abstract theory. These are real categories of savings we
                identify during pre-construction on Charlotte commercial projects. Every recommendation
                maintains or improves building performance while reducing cost.
              </p>
            </div>
            <div className="space-y-6">
              {valueEngineeringExamples.map((example) => (
                <div key={example.category} className="p-6 bg-muted rounded-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-semibold text-lg">{example.category}</h3>
                    <span className="font-semibold text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">
                      {example.savings}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Original Specification</span>
                      <p className="text-sm text-muted-foreground mt-1">{example.original}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Value-Engineered Alternative</span>
                      <p className="text-sm text-muted-foreground mt-1">{example.alternative}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{example.explanation}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="font-semibold mb-3">How Value Engineering Adds Up</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cumulative impact:</strong> Individual value engineering items may save one to five percent each, but across a full project, the cumulative savings typically reach eight to fifteen percent of total construction cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Early timing matters:</strong> Value engineering during schematic design saves the most because changes require minimal redesign. The same changes during construction documents cost more to implement and during construction cost dramatically more.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Owner controls every decision:</strong> We present recommendations with full cost and trade-off analysis. You decide which items to accept and which to reject based on your priorities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Documented audit trail:</strong> Every value engineering recommendation is logged with cost data, so you have a clear record of the decisions that shaped your project budget.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Deliverables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What You Receive: Pre-Construction Deliverables
            </h2>
            <p className="text-muted-foreground">
              At the conclusion of the pre-construction phase, you receive a comprehensive package
              of documents that serve as the roadmap for your construction project. These
              deliverables provide budget certainty, schedule clarity, and risk transparency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
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
            These deliverables are not generic templates. Every document is customized to your
            specific project, site, and market conditions. They serve as living documents that are
            updated throughout the pre-construction process as design evolves and new information
            becomes available.
          </p>
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
                Pre-Construction Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Get answers to the most common questions Charlotte project owners ask about
                pre-construction services, costs, timelines, and value engineering.
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

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Related Services</h2>
            <p className="text-muted-foreground mt-2">
              Pre-construction planning sets the stage for successful project delivery.
              Explore our complementary services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Value Engineering', href: '/services/value-engineering', type: 'Service', desc: 'Construction cost optimization and material substitution analysis that delivers 10-25% savings without sacrificing quality.' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service', desc: 'Professional CM services with schedule control, budget management, and quality oversight from pre-construction through closeout.' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service', desc: 'Professional CM services with schedule control, budget management, and quality oversight for complex projects.' },
              { title: 'Site Development', href: '/services/site-development', type: 'Service', desc: 'Land clearing, grading, and site preparation informed by thorough pre-construction site analysis.' },
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

      {/* Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Pre-Construction Resources</h2>
            <p className="text-muted-foreground mt-2">
              Explore our guides and articles for more information on construction planning in Charlotte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'How Pre-Construction Planning Saves Money', slug: 'pre-construction-planning-saves-money-charlotte' },
              { title: 'Value Engineering Guide for Commercial Projects', slug: 'value-engineering-guide-commercial-construction' },
              { title: 'Construction Cost Estimating: What to Expect', slug: 'construction-cost-estimating-charlotte-nc' },
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
            Ready to Plan Your Construction Project the Right Way?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you are planning a new commercial building, a major renovation, or a complex
            tenant build-out in Charlotte, pre-construction services from We Build give you the
            budget certainty, schedule confidence, and risk visibility you need to build with
            confidence.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free pre-construction consultation. We serve Charlotte,{' '}
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
