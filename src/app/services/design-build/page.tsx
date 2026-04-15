import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Palette,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Building2,
  Ruler,
  FileCheck,
  HardHat,
  Lightbulb,
  Target,
  TrendingDown,
  Handshake,
  ClipboardCheck,
  MapPin,
  Wrench,
  Search,
  PenTool,
  Layers,
  Hammer,
  Eye,
  BadgeCheck,
  FolderOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design-Build Contractor Charlotte NC | Single-Source Design & Construction',
  description:
    'Design-build contractor in Charlotte, NC. One team handles design and construction — faster timelines, lower costs, single point of accountability. Visit our Design Center. Licensed in NC & SC. (704) 574-8124.',
  keywords: [
    'design build charlotte nc',
    'design build contractor charlotte',
    'design build construction charlotte nc',
    'design and build contractors',
    'design and build contractors near me',
    'design build firm charlotte',
    'design build company charlotte nc',
    'design build services charlotte',
    'design build commercial construction charlotte',
    'design build vs design bid build',
    'design build process charlotte nc',
    'design build cost charlotte',
    'design build contractor near me',
    'design build Charlotte North Carolina',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/services/design-build',
  },
};

const processPhases = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Needs Assessment',
    desc: 'Every design-build project begins with understanding your goals, budget, timeline, and functional requirements. During discovery, our team meets with you to discuss the scope of work, review the site conditions, and identify any constraints or opportunities that will shape the design. We ask the right questions early so we can deliver a project that fits your needs — not just your square footage.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Concept Design',
    desc: 'Our design team develops initial concepts based on your discovery session. This includes space planning, preliminary floor layouts, material palettes, and high-level aesthetic direction. You will review multiple options and provide feedback before we advance. At this stage, our construction managers are already providing input on cost feasibility and constructability so the design stays aligned with your budget.',
  },
  {
    icon: PenTool,
    step: '03',
    title: 'Schematic Design',
    desc: 'Schematic design refines the chosen concept into detailed drawings. Floor plans, elevations, sections, and 3D renderings take shape so you can visualize the finished space. Our Design Center in Charlotte allows you to browse materials, finishes, and fixtures in person during this phase. This hands-on selection process ensures no surprises when construction begins.',
  },
  {
    icon: Layers,
    step: '04',
    title: 'Design Development',
    desc: 'Design development adds engineering detail to the schematics. Structural, mechanical, electrical, and plumbing systems are integrated into the drawings. Specifications are written for every material and system. Our construction team finalizes the budget with line-item accuracy, and you receive a guaranteed maximum price before we break ground.',
  },
  {
    icon: FileCheck,
    step: '05',
    title: 'Pre-Construction Planning',
    desc: 'Before permitting, our pre-construction team develops the master project schedule, procurement plan, and subcontractor strategy. We identify long-lead materials, coordinate utility connections, and plan site logistics. Pre-construction planning is where design-build saves the most time compared to traditional delivery — because our builders and designers work from the same set of documents from the start.',
  },
  {
    icon: ClipboardCheck,
    step: '06',
    title: 'Permitting & Approvals',
    desc: 'We manage the entire permitting process with Mecklenburg County, the City of Charlotte, and surrounding jurisdictions. Building permits, mechanical permits, electrical permits, plumbing permits, fire permits, and zoning approvals are all handled by our team. Our familiarity with local building departments helps avoid delays and ensures drawings meet code on the first submission.',
  },
  {
    icon: Hammer,
    step: '07',
    title: 'Construction',
    desc: 'Construction begins with site preparation, foundation work, and structural framing. Our project managers coordinate all subcontractors, material deliveries, and inspections on a daily basis. You receive regular progress updates with photos, schedule tracking, and budget reports. Because we designed the project, our field team understands every detail — there is no learning curve or misinterpretation of drawings.',
  },
  {
    icon: Eye,
    step: '08',
    title: 'Quality Assurance & Inspections',
    desc: 'Throughout construction, our quality assurance team conducts regular inspections to verify workmanship meets our standards and building code requirements. We coordinate all municipal inspections and address any deficiencies immediately. Punch list items are tracked and resolved before project completion. Our design team also conducts field visits to ensure the finished product matches the design intent.',
  },
  {
    icon: BadgeCheck,
    step: '09',
    title: 'Commissioning & Testing',
    desc: 'Before turnover, we commission all building systems — HVAC, electrical, plumbing, fire protection, security, and low-voltage. Every system is tested, balanced, and verified to perform as designed. We walk you through the operation of your new space and provide manuals, warranties, and maintenance recommendations for every installed system.',
  },
  {
    icon: FolderOpen,
    step: '10',
    title: 'Project Closeout & Warranty',
    desc: 'Closeout includes final documentation, as-built drawings, certificate of occupancy, lien waivers, and warranty documentation. We conduct a final walkthrough with you to confirm everything meets your expectations. After move-in, our warranty program provides responsive support for any issues that arise. Your design-build relationship with We Build does not end at substantial completion.',
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Single Point of Accountability',
    desc: 'With design-build, one company is responsible for everything — design, engineering, permitting, and construction. There is no finger-pointing between a separate architect and contractor when issues arise. If something goes wrong, there is one phone number to call and one team that owns the solution. This accountability structure is the primary reason commercial clients across Charlotte choose design-build over traditional delivery.',
  },
  {
    icon: Clock,
    title: 'Faster Project Delivery',
    desc: 'Design-build projects are completed 20 to 33 percent faster than traditional design-bid-build projects, according to the Design-Build Institute of America. This speed comes from overlapping design and construction phases. While the architect finalizes interior details, the contractor can already be pouring foundations and erecting structural steel. For Charlotte businesses, faster delivery means earlier revenue and lower carrying costs.',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings & Budget Certainty',
    desc: 'Because the builder is involved from the first design meeting, cost feedback is continuous. There are no expensive redesigns after bid day reveals that the architect designed a building you cannot afford. Design-build projects are delivered at 6 percent lower cost on average than design-bid-build, according to industry research. You receive a guaranteed maximum price before construction begins, so there are no budget surprises.',
  },
  {
    icon: Handshake,
    title: 'Better Collaboration & Communication',
    desc: 'Design-build eliminates the adversarial relationship that often develops between architects and contractors in traditional delivery. When the designer and builder work for the same company, they share the same goal: delivering the best project for the owner. Weekly coordination meetings, shared project management software, and co-located teams mean information flows freely instead of getting lost in emails between separate firms.',
  },
  {
    icon: TrendingDown,
    title: 'Reduced Change Orders',
    desc: 'Change orders are the most common source of cost overruns in construction. They happen when the design is incomplete, the builder interprets drawings differently than the architect intended, or unforeseen conditions are discovered. Design-build reduces change orders because the builder reviews every drawing for constructability before it is finalized. Issues are caught in the design phase when they cost nothing to fix, not in the field when they cost thousands.',
  },
  {
    icon: Target,
    title: 'Value Engineering Built In',
    desc: 'Value engineering is the process of finding ways to deliver the same quality and performance at a lower cost. In traditional delivery, value engineering only happens after bids come in over budget — and it often feels like cutting corners. In design-build, value engineering happens throughout design because the builder is constantly evaluating alternatives. The result is a better building for less money, not a cheaper version of the original vision.',
  },
  {
    icon: Shield,
    title: 'Reduced Owner Risk',
    desc: 'In traditional delivery, the owner bears the risk of coordinating between the architect and contractor, managing disputes, and absorbing costs from design errors. In design-build, that risk transfers to the design-build firm. The owner signs one contract, receives one guaranteed price, and deals with one team. For business owners in Charlotte who need to focus on running their company, this risk reduction is invaluable.',
  },
  {
    icon: Palette,
    title: 'Seamless Design Integration',
    desc: 'Our dedicated Design Center in South Charlotte gives design-build clients a hands-on experience that traditional delivery cannot match. You browse actual material samples, compare finishes side by side, and make selections with both our designer and builder present. Every choice is evaluated for aesthetics, durability, cost, and installation complexity simultaneously — so your selections look great and build cleanly.',
  },
];

const projectTypes = [
  {
    icon: Building2,
    title: 'Commercial Design-Build',
    desc: 'Office buildings, corporate campuses, professional offices, and multi-tenant commercial spaces. Design-build is the preferred delivery method for commercial projects in Charlotte because it delivers faster occupancy and lower total cost. We handle everything from site selection analysis through final move-in coordination.',
    link: '/services/commercial-construction',
    linkLabel: 'Commercial Construction Services',
  },
  {
    icon: Wrench,
    title: 'Commercial Upfit Design-Build',
    desc: 'Tenant improvements, office renovations, retail build-outs, and restaurant fit-ups. Design-build is especially effective for upfit projects where speed matters — every day of construction is a day of lost revenue. Our integrated team can design and build a typical office upfit in Charlotte in 8 to 12 weeks.',
    link: '/services/commercial-upfits',
    linkLabel: 'Commercial Upfit Services',
  },
  {
    icon: Building2,
    title: 'Industrial & Warehouse',
    desc: 'Distribution centers, manufacturing facilities, flex spaces, and cold storage. Industrial design-build projects require close coordination between process engineering and building design. Our team integrates loading dock layouts, equipment foundations, and utility requirements into the building design from day one.',
    link: '/services/commercial-construction',
    linkLabel: 'View Industrial Projects',
  },
  {
    icon: Building2,
    title: 'Healthcare & Medical',
    desc: 'Medical offices, dental clinics, veterinary facilities, and outpatient centers. Healthcare design-build demands expertise in infection control, HVAC pressure relationships, lead-lined walls, and regulatory compliance. Our team coordinates with equipment vendors and health department officials throughout the process.',
    link: '/services/commercial-construction',
    linkLabel: 'Healthcare Construction',
  },
  {
    icon: Building2,
    title: 'Hospitality & Restaurant',
    desc: 'Hotels, restaurants, bars, event venues, and entertainment facilities. Hospitality projects have some of the most complex code requirements — commercial kitchens, fire suppression, grease traps, hood ventilation, and ADA compliance all need to be coordinated precisely. Design-build ensures nothing falls through the cracks.',
    link: '/services/commercial-construction',
    linkLabel: 'Hospitality Construction',
  },
];

const faqs = [
  {
    question: 'What is design-build construction and how does it work?',
    answer: 'Design-build is a project delivery method where a single company provides both design and construction services under one contract. Instead of hiring a separate architect and a separate general contractor, you work with one integrated team from concept through completion. The design-build firm manages architecture, engineering, permitting, and construction — giving you one point of contact, one schedule, and one guaranteed price. This approach eliminates the coordination gaps that cause delays and cost overruns in traditional construction.',
  },
  {
    question: 'How much does design-build construction cost in Charlotte, NC?',
    answer: 'Design-build construction costs in Charlotte vary by project type and complexity. Commercial office design-build typically runs $175 to $400 per square foot. Retail and restaurant design-build ranges from $100 to $350 per square foot. Custom residential design-build costs $200 to $500 per square foot depending on finishes and complexity. While design-build fees include both design and construction in one price, the total project cost is typically 6 percent lower than traditional design-bid-build because of fewer change orders, reduced redesigns, and value engineering built into the process.',
  },
  {
    question: 'How long does a design-build project take in Charlotte?',
    answer: 'Design-build projects are completed 20 to 33 percent faster than traditional delivery. A typical commercial office upfit in Charlotte takes 3 to 5 months from design kickoff to move-in. A ground-up commercial building takes 12 to 18 months. Custom residential design-build projects range from 8 to 14 months depending on size and complexity. The speed advantage comes from overlapping design and construction phases — site work and foundations can begin while interior design is still being finalized.',
  },
  {
    question: 'What is the difference between design-build and design-bid-build?',
    answer: 'In design-bid-build (traditional delivery), the owner hires an architect to complete the design, then puts the finished drawings out to bid, then selects a contractor to build it. This sequential process creates three separate contracts and no collaboration between designer and builder until construction begins. In design-build, the owner hires one firm that handles both design and construction. The builder participates in design decisions from day one, providing real-time cost feedback and constructability input. Design-build is faster, costs less, and produces fewer change orders.',
  },
  {
    question: 'Is design-build more expensive than hiring a separate architect and contractor?',
    answer: 'No. Design-build is typically less expensive than traditional design-bid-build. Research from the Design-Build Institute of America and multiple university studies shows that design-build projects cost an average of 6 percent less than traditional delivery. The savings come from reduced change orders, fewer design errors caught in the field, value engineering integrated throughout design, and shorter construction schedules that reduce overhead and financing costs. You also save on the owner management costs of coordinating between separate firms.',
  },
  {
    question: 'Do you have a design center or showroom in Charlotte?',
    answer: 'Yes. Our WeBuild Design Center is located at our South Charlotte office at 14330 S Lakes Drive, Charlotte NC 28273. The Design Center features a curated selection of materials, finishes, fixtures, and samples that you can browse, touch, and compare in person. Our design team guides you through the selection process while our construction managers provide input on cost, durability, and installation. Visits are by appointment — contact us at (704) 574-8124 to schedule.',
  },
  {
    question: 'What types of projects are best suited for design-build?',
    answer: 'Design-build works well for virtually any construction project, but it provides the greatest advantage on projects where speed is important, budget certainty is critical, or the scope is complex enough that designer-builder collaboration adds significant value. Commercial projects, tenant improvements, restaurants, medical facilities, custom homes, and industrial buildings all benefit from design-build. The method is less common for simple projects like basic residential renovations where a standard contractor relationship is sufficient.',
  },
  {
    question: 'Are you licensed for design-build in North Carolina and South Carolina?',
    answer: 'Yes. We Build holds active general contractor licenses in both North Carolina and South Carolina, allowing us to perform design-build services throughout the Charlotte metro area including Mecklenburg County, Union County, Iredell County, Cabarrus County, and York County SC. We are fully insured with general liability, workers compensation, and commercial auto coverage. We are also a proud member of the U.S. Green Building Council (USGBC).',
  },
  {
    question: 'What areas in Charlotte do you serve for design-build projects?',
    answer: 'We serve the entire Charlotte metropolitan area for design-build projects. This includes South Charlotte, Ballantyne, Uptown Charlotte, South End, NoDa, Plaza Midwood, Dilworth, Myers Park, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Fort Mill, Indian Land, Rock Hill, Matthews, Mint Hill, Pineville, Waxhaw, and surrounding communities. Our South Charlotte location provides convenient access to clients throughout the region.',
  },
  {
    question: 'How do I get started with a design-build project?',
    answer: 'Getting started is simple. Contact us at (704) 574-8124 or visit our contact page to request a free consultation. During the initial meeting, we will discuss your project goals, budget range, timeline requirements, and site conditions. We will then provide a preliminary scope and fee proposal. Once you approve, we begin the discovery and concept design phase. There is no obligation, and the consultation is free for projects in the Charlotte metro area.',
  },
  {
    question: 'How does design-build pricing compare to traditional construction delivery in Charlotte?',
    answer: 'Design-build projects in Charlotte typically cost 6 to 12 percent less than traditional design-bid-build delivery for the same scope and quality. The savings come from fewer change orders because the builder participates in design decisions from day one, value engineering opportunities identified during design rather than discovered during bidding, and shorter construction timelines that reduce overhead, financing costs, and delayed revenue. A $1 million Charlotte commercial project delivered through design-build commonly saves $60,000 to $120,000 compared to the traditional method. We Build provides transparent, itemized pricing so you can see exactly how the design-build budget compares.',
  },
  {
    question: 'What happens if I want to change the design after construction starts on a design-build project?',
    answer: 'Design changes during construction are handled through a straightforward change order process. Because the designer and builder are on the same team in a design-build contract, change orders are evaluated faster and with less conflict than in traditional delivery where the architect and contractor may disagree on cost and schedule impact. Our team provides a written change order with the cost and timeline impact before any work proceeds, so you have full control over every decision. Design-build projects experience 50 to 80 percent fewer change orders overall because the integrated team resolves design conflicts during the design phase rather than discovering them in the field.',
  },
  {
    question: 'Can We Build handle design-build for restaurants and medical offices in Mecklenburg County?',
    answer: 'Yes, restaurants and medical offices are two of the project types that benefit most from design-build delivery. Restaurant design-build requires close coordination between kitchen equipment suppliers, hood ventilation engineers, fire suppression contractors, and the health department, which is far more efficient under one contract than with separate design and construction firms. Medical office design-build integrates specialized requirements like medical gas systems, shielded radiology rooms, and infection control protocols into the design from the start. Our team has experience with Mecklenburg County health department reviews, fire marshal requirements, and the specialized inspections these project types demand throughout the Charlotte area.',
  },
];

export default function DesignBuildPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Design-Build Construction Services',
            'Design-build contractor in Charlotte, NC. One team for design and construction — faster timelines, lower costs, single point of accountability. Licensed in NC & SC.',
            'https://webuildclt.com/services/design-build'
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Design-Build' },
          ]),
        ]}
      />

      <PageHero
        title="Design-Build Contractor Charlotte NC"
        subtitle="One team for design and construction. Faster timelines, lower costs, and single-point accountability for commercial and residential projects across Charlotte."
        backgroundImage="/images/design-center-hero.jpg"
      />

      {/* Breadcrumbs + Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Design-Build' },
            ]}
          />

          <div className="grid lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Design-Build Construction in Charlotte, NC
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Design-build is the fastest-growing project delivery method in the United States, and for good reason. Instead of hiring a separate architect to design your project and then a separate{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">general contractor</Link>{' '}
                to build it, design-build puts one integrated team in charge of everything from the first sketch to the final walkthrough. At We Build, design-build is not just a service we offer — it is how we operate. Our designers, engineers, and construction managers work under one roof, share one set of goals, and answer to one contract. The result is a project that gets designed better, built faster, and costs less than traditional construction delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Charlotte is growing rapidly, and businesses and homeowners across the metro area are discovering that design-build eliminates the frustrations that have plagued construction for decades. No more waiting months for an architect to finish drawings before a contractor can even look at them. No more watching bids come in 30 percent over budget because the architect did not understand construction costs. No more finger-pointing between the designer and builder when something goes wrong on site. Design-build solves all of these problems by aligning everyone on the same team from day one.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial construction company</Link>{' '}
                with over 60 years of combined experience and a dedicated{' '}
                <Link href="/design-center" className="text-primary hover:underline">Design Center</Link>{' '}
                in South Charlotte where clients can browse materials, explore finishes, and make selections with our design and construction teams present. We are licensed in both North Carolina and South Carolina, insured, and a proud member of the U.S. Green Building Council (USGBC). Whether you are planning a{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">commercial upfit</Link>, a ground-up office building, or a{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">commercial build</Link>, our design-build approach delivers the results you need on the timeline and budget you require.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Free Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/design-center">
                    <Palette className="mr-2 h-5 w-5" aria-hidden="true" />
                    Visit Design Center
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Design-Build at a Glance</h3>
              <ul className="space-y-4">
                {[
                  'One contract, one team, one price',
                  '20-33% faster than traditional delivery',
                  '6% lower average project cost',
                  'Guaranteed maximum pricing',
                  'In-house design and engineering',
                  'Dedicated Charlotte Design Center',
                  'Licensed in NC & SC',
                  'USGBC member',
                  'Veteran & family-owned',
                  '60+ years combined experience',
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

      {/* What Is Design-Build Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is Design-Build Construction?
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Design-build is a project delivery method in which a single entity — the design-build firm — provides both design services and construction services under one contract. The owner signs one agreement, works with one team, and receives one guaranteed price for the entire project. This contrasts with the traditional design-bid-build method, where the owner hires an architect separately, waits for complete design documents, solicits competitive bids from contractors, and then manages the relationship between two separate firms throughout construction.
              </p>
              <p>
                The design-build concept is not new. In fact, it is the oldest form of construction delivery, dating back to ancient civilizations where a single master builder was responsible for both design and construction. The separation of design and construction into distinct professions is a relatively modern development that emerged in the 19th and 20th centuries. Over the past three decades, the construction industry has increasingly returned to the integrated design-build model because it consistently delivers better outcomes for owners.
              </p>
              <p>
                According to the Design-Build Institute of America (DBIA), design-build now accounts for over 45 percent of all non-residential construction spending in the United States. The method has grown from a niche approach used primarily on government and industrial projects to the dominant delivery method for commercial, institutional, and increasingly residential construction. In the Charlotte metro area, design-build adoption has accelerated as developers and business owners have recognized the time and cost advantages over traditional delivery.
              </p>
              <p>
                The key differentiator of design-build is collaboration. In traditional delivery, the architect designs in isolation, the contractor bids on finished documents, and conflicts are resolved through change orders — which the owner pays for. In design-build, the designer and builder work together from the first meeting. The builder provides real-time cost feedback during design so the project stays within budget. The designer understands construction sequencing so the drawings are buildable. And the owner benefits from a process that is transparent, efficient, and focused on delivering the best possible project rather than protecting individual firms from liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design-Build vs. Traditional Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Design-Build vs. Traditional Design-Bid-Build
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Understanding the differences between these two delivery methods helps you choose the right approach for your Charlotte construction project.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold">Design-Build</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { label: 'Contracts', value: 'One contract with one firm' },
                      { label: 'Timeline', value: '20-33% faster delivery' },
                      { label: 'Cost', value: '6% lower average cost' },
                      { label: 'Change Orders', value: 'Significantly fewer' },
                      { label: 'Accountability', value: 'Single point of responsibility' },
                      { label: 'Communication', value: 'Direct, integrated team' },
                      { label: 'Budget Feedback', value: 'Continuous during design' },
                      { label: 'Value Engineering', value: 'Built into the process' },
                      { label: 'Owner Risk', value: 'Lower — transferred to DB firm' },
                      { label: 'Best For', value: 'Speed, budget certainty, complex projects' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Ruler className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold">Design-Bid-Build</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { label: 'Contracts', value: 'Separate contracts for design and build' },
                      { label: 'Timeline', value: 'Sequential — design then bid then build' },
                      { label: 'Cost', value: 'Higher due to change orders and redesigns' },
                      { label: 'Change Orders', value: 'More frequent and costly' },
                      { label: 'Accountability', value: 'Split between architect and contractor' },
                      { label: 'Communication', value: 'Filtered through the owner' },
                      { label: 'Budget Feedback', value: 'Only after bidding is complete' },
                      { label: 'Value Engineering', value: 'Reactive — after bids come in high' },
                      { label: 'Owner Risk', value: 'Higher — owner coordinates both parties' },
                      { label: 'Best For', value: 'Public projects with competitive bid requirements' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">
                          <strong className="text-foreground">{item.label}:</strong> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-8 text-center max-w-3xl mx-auto">
              For most private-sector construction projects in Charlotte — offices, retail, restaurants, medical facilities, and custom homes — design-build delivers superior results. The traditional design-bid-build method remains common for government projects that require competitive bidding by law, but even public agencies are increasingly adopting design-build through progressive design-build and best-value selection processes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Design-Build Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Design-Build Process: 10 Phases from Concept to Completion
            </h2>
            <p className="text-muted-foreground">
              Every We Build design-build project follows a structured, transparent process. Here is exactly what to expect when you partner with us for your Charlotte construction project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {processPhases.map((phase) => (
              <div key={phase.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <phase.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-primary">Phase {phase.step}</span>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Design-Build */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Design-Build Construction
            </h2>
            <p className="text-muted-foreground">
              Design-build is the preferred delivery method for commercial and residential construction because it delivers measurable advantages over traditional approaches. Here are the eight benefits that matter most to Charlotte project owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design-Build Project Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design-Build Project Types We Deliver
            </h2>
            <p className="text-muted-foreground">
              Our design-build services cover the full range of commercial and residential construction in{' '}
              <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>,{' '}
              <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill</Link>,{' '}
              <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman</Link>, and the greater Charlotte metro area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type) => (
              <Card key={type.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <type.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{type.desc}</p>
                  <Link href={type.link} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                    {type.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design-Build Costs in Charlotte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Design-Build Costs in Charlotte, NC
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                One of the most common questions we receive is how much design-build construction costs in Charlotte. The answer depends on the project type, size, complexity, site conditions, and finish level. However, design-build consistently delivers projects at a lower total cost than traditional design-bid-build — typically 6 percent less according to industry research — because the integrated process reduces waste, eliminates redesigns, and minimizes change orders.
              </p>
              <p>
                For commercial design-build projects in Charlotte, expect the following approximate ranges in 2026. Office buildings and corporate spaces run $175 to $400 per square foot for new construction, and $50 to $175 per square foot for{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">upfits and tenant improvements</Link>. Retail spaces and storefronts cost $100 to $250 per square foot. Restaurants and food service facilities range from $150 to $350 per square foot due to the complexity of commercial kitchen infrastructure. Medical and dental facilities cost $175 to $400 per square foot because of specialized HVAC, plumbing, and regulatory requirements. Industrial and warehouse projects run $80 to $200 per square foot depending on the level of interior finish.
              </p>
              <p>
                Commercial renovation and upfit projects typically range from $50 to $200 per square foot depending on the scope and complexity of the work.
              </p>
              <p>
                These ranges include both design fees and construction costs — that is the advantage of design-build pricing. In traditional delivery, you would pay the architect separately (typically 8 to 15 percent of construction cost) on top of the construction contract. With design-build, all professional services are bundled into one price, and that price is guaranteed before construction begins. We provide detailed, line-item estimates with full cost transparency so you know exactly where every dollar goes.
              </p>
              <p>
                Design-build saves money in ways that are not always obvious on the initial price comparison. Shorter construction schedules reduce financing costs and overhead. Fewer change orders prevent the 10 to 15 percent cost overruns that are common in traditional delivery. Value engineering during design identifies cost-effective alternatives before they become expensive field changes. And the elimination of redesign cycles — which happen when bids come in over budget in traditional delivery — saves both time and money. For a detailed estimate on your specific project, <Link href="/contact" className="text-primary hover:underline">contact us for a free consultation</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Design-Build Market */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Charlotte Design-Build Market
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Charlotte is one of the fastest-growing cities in the United States, and its construction market reflects that growth. The Charlotte metro area adds thousands of new residents each year, driving demand for commercial space, retail development, healthcare facilities, and residential construction. This sustained growth has made Charlotte one of the most active construction markets in the Southeast, and design-build has become the preferred delivery method for owners who need projects completed quickly and cost-effectively.
              </p>
              <p>
                The Charlotte market presents unique opportunities and challenges for construction. Land costs in desirable areas like{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">South Charlotte</Link>, Ballantyne, and the South End corridor have increased significantly, making efficient construction delivery more important than ever. Design-build helps owners maximize their investment by ensuring the design is optimized for both function and cost before construction begins. In a competitive market, the 20 to 33 percent time savings of design-build can mean the difference between opening a business on schedule and losing months of revenue to construction delays.
              </p>
              <p>
                The{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">Fort Mill and Indian Land corridor</Link>{' '}
                in York County, South Carolina has experienced explosive growth as Charlotte expands south across the state line. Design-build is particularly popular in this area because developers need to navigate permitting in both North Carolina and South Carolina jurisdictions. Our dual-state licensing allows us to manage projects seamlessly across the border.
              </p>
              <p>
                The{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">Lake Norman area</Link>{' '}
                — including Huntersville, Cornelius, Davidson, and Mooresville — continues to attract both commercial development and luxury residential construction. Design-build custom homes on Lake Norman benefit from our integrated approach, where the architect, builder, and interior designer collaborate to maximize lake views, outdoor living spaces, and energy efficiency from the very first design meeting.
              </p>
              <p>
                We Build is headquartered in South Charlotte at 14330 S Lakes Drive, giving us convenient access to projects throughout the metro area. Our team has deep knowledge of local building codes, permitting processes, and subcontractor networks in Mecklenburg County, Union County, Iredell County, Cabarrus County, and York County SC. We are active members of the Charlotte business community and proud to be a USGBC member committed to sustainable building practices. To see examples of our work, visit our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">project portfolio</Link>{' '}
                or learn more{' '}
                <Link href="/about" className="text-primary hover:underline">about our company</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Design-Build FAQ: Your Questions Answered
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Common questions about design-build construction in Charlotte, NC.
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

      {/* Related Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Related Services</h2>
            <p className="text-muted-foreground mt-2">
              Design-build integrates with many of our core construction capabilities.
              Explore our related services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Commercial Construction Charlotte NC', href: '/services/commercial-construction', type: 'Service', desc: 'Ground-up commercial construction for office, retail, restaurant, medical, and mixed-use projects across the Charlotte metro area.' },
              { title: 'Pre-Construction Services', href: '/services/pre-construction', type: 'Service', desc: 'Feasibility studies, cost estimating, and value engineering that set the foundation for successful design-build delivery.' },
              { title: 'Construction Management', href: '/services/construction-management', type: 'Service', desc: 'Professional CM services with schedule control, budget management, and quality oversight for complex projects.' },
              { title: 'Green Building & Sustainability', href: '/services/green-building', type: 'Service', desc: 'USGBC member contractor integrating LEED strategies and sustainable building practices into design-build projects.' },
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Design-Build Project in Charlotte
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project goals, visit our{' '}
            <Link href="/design-center" className="underline hover:text-primary-foreground">Design Center</Link>, and see why Charlotte businesses and homeowners choose We Build for design-build construction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
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
