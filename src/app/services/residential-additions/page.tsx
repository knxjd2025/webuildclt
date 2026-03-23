import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  ArrowRight,
  Phone,
  CheckCircle,
  PlusCircle,
  Layers,
  Building,
  DoorOpen,
  Sun,
  Bath,
  ChefHat,
  Ruler,
  HardHat,
  FileCheck,
  DollarSign,
  MapPin,
  Shield,
  Clock,
  Hammer,
  Lightbulb,
  Wrench,
  ClipboardCheck,
  Users,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Additions Charlotte NC | Residential Addition Contractor',
  description:
    'Licensed home addition contractor in Charlotte, NC. Room additions, second story additions, garage conversions, in-law suites, kitchen extensions, sunrooms, bump-outs. Veteran-owned. 60+ years experience. Free estimates. (562) 708-6616.',
  keywords: [
    'home additions charlotte nc',
    'home addition contractor charlotte nc',
    'residential additions charlotte nc',
    'room addition charlotte nc',
    'second story addition charlotte',
    'garage conversion charlotte nc',
    'in-law suite charlotte nc',
    'kitchen extension charlotte nc',
    'sunroom addition charlotte nc',
    'bump-out addition charlotte',
    'bathroom addition charlotte nc',
    'home addition cost charlotte',
    'home addition permits mecklenburg county',
    'residential contractor charlotte nc',
  ],
};

const additionTypes = [
  {
    icon: PlusCircle,
    title: 'Room Additions',
    desc: 'Extra bedrooms, family rooms, home offices, and playrooms that seamlessly blend with your existing home structure and roofline.',
    details:
      'Room additions are the most common type of home addition in Charlotte. Whether you need an extra bedroom for a growing family, a dedicated home office for remote work, or a larger family room for entertaining, a room addition expands your footprint without changing your address. We match the roofline, siding, windows, and trim of your existing home so the new space looks like it was always part of the original design. Most room additions in Charlotte range from 150 to 500 square feet and can be completed in two to four months after permitting.',
    cost: '$150-$300/sq ft',
  },
  {
    icon: Layers,
    title: 'Second Story Additions',
    desc: 'Double your living space by adding a full or partial second floor to your one-story home without expanding your building footprint.',
    details:
      'A second story addition is one of the most dramatic ways to expand your living space. Instead of building outward into your yard, you build upward. This is ideal for homeowners in Charlotte neighborhoods where lot sizes are tight or setback requirements limit ground-level expansion. A full second story can double your home square footage, adding multiple bedrooms, bathrooms, and a bonus room. Partial second stories add space over a garage or one wing of the house. Second story additions require structural engineering to verify that your existing foundation and walls can support the additional load, and we handle that analysis as part of our planning process.',
    cost: '$250-$450/sq ft',
  },
  {
    icon: DoorOpen,
    title: 'Garage Conversions',
    desc: 'Transform unused garage space into a comfortable living area, home gym, art studio, rental unit, or accessory dwelling unit.',
    details:
      'If your garage has become a storage dumping ground rather than a place for your car, a garage conversion is one of the most cost-effective ways to add livable square footage to your Charlotte home. Because the structure, roof, and foundation already exist, conversion costs are significantly lower than building a new addition from the ground up. We insulate walls and ceiling, install proper flooring, add windows for natural light, and connect the space to your existing HVAC system. Garage conversions in Charlotte typically take six to ten weeks and cost thirty to fifty percent less per square foot than a conventional addition. Many homeowners use converted garages as accessory dwelling units for rental income or aging parents.',
    cost: '$80-$180/sq ft',
  },
  {
    icon: Home,
    title: 'In-Law Suites',
    desc: 'Self-contained living spaces with private entrance, kitchenette, bathroom, bedroom, and living area for family members or guests.',
    details:
      'An in-law suite, sometimes called a mother-in-law suite or accessory dwelling unit, is a self-contained living space attached to or built onto your existing home. These suites typically include a bedroom, full bathroom, kitchenette or full kitchen, living area, and a private entrance. In Charlotte, in-law suites are increasingly popular as multigenerational living becomes more common and housing costs continue to rise. They provide independence and privacy for aging parents, adult children, or long-term guests while keeping family close. Building an in-law suite requires careful attention to plumbing, electrical, HVAC zoning, and fire separation codes. We design suites that feel like their own home, not an afterthought.',
    cost: '$200-$400/sq ft',
  },
  {
    icon: ChefHat,
    title: 'Kitchen Extensions',
    desc: 'Expand your kitchen footprint for a larger cooking, dining, and entertaining space with modern layouts and premium finishes.',
    details:
      'The kitchen is the most-used room in most Charlotte homes, and it is often the room that feels most cramped. A kitchen extension pushes the exterior wall of your home outward to create additional floor space for a larger island, more cabinet storage, a walk-in pantry, a breakfast nook, or an open-concept flow into the dining and living areas. Kitchen extensions range from modest eight-foot bump-outs to full room additions that completely reimagine your cooking and entertaining space. Because kitchens involve plumbing, electrical, gas lines, and ventilation, kitchen extensions are among the more complex addition types. Visit our Design Center in South Charlotte to explore countertop materials, cabinetry styles, tile selections, and appliance layouts before construction begins.',
    cost: '$200-$400/sq ft',
  },
  {
    icon: Ruler,
    title: 'Bump-Out Additions',
    desc: 'Small strategic additions of two to fifteen feet that add meaningful space to a kitchen, bathroom, or bedroom without a full addition footprint.',
    details:
      'Not every home addition needs to be a major construction project. A bump-out is a small extension, typically two to fifteen feet, that pushes one wall of an existing room outward. Bump-outs are popular in Charlotte for expanding tight kitchens, adding space for a larger shower or soaking tub in a master bathroom, creating a breakfast nook, or widening a narrow bedroom. Because bump-outs are smaller in scale, they often require simpler foundations, shorter construction timelines, and lower budgets than full room additions. However, they still require permitting in Mecklenburg County, and structural considerations like foundation type and roof tie-in must be addressed properly.',
    cost: '$100-$250/sq ft',
  },
  {
    icon: Sun,
    title: 'Sunroom Additions',
    desc: 'Three-season or four-season sunrooms that bring natural light and outdoor views into a comfortable, climate-controlled indoor space.',
    details:
      'A sunroom addition is one of the most enjoyable spaces you can add to a Charlotte home. Three-season sunrooms use insulated glass and screen panels to create a bright, airy space usable from spring through fall. Four-season sunrooms are fully insulated and connected to your HVAC system, making them comfortable year-round. Sunrooms are ideal for morning coffee, reading, plant growing, or casual dining with views of your yard and garden. Charlotte homeowners love sunrooms because they bridge the gap between indoor and outdoor living, which is especially appealing given our mild climate. Sunroom additions typically attach to the back of your home and can range from 100 to 400 square feet.',
    cost: '$150-$350/sq ft',
  },
  {
    icon: Bath,
    title: 'Bathroom Additions',
    desc: 'Add a full or half bathroom to your home to increase convenience, reduce morning bottlenecks, and boost resale value.',
    details:
      'Adding a bathroom is one of the highest-ROI improvements you can make to a Charlotte home. Whether you need a full bathroom with shower, tub, vanity, and toilet, or a half bath (powder room) near the main living area, a bathroom addition addresses one of the most common pain points in older Charlotte homes: not enough bathrooms. Bathroom additions require careful planning for plumbing runs, drain placement, ventilation, waterproofing, and fixture selection. We design bathroom additions that match the style and finish level of your existing home. Common placements include converting closet space, adding onto a master bedroom, or building a new half bath near a family room or home office.',
    cost: '$180-$350/sq ft',
  },
];

const processSteps = [
  {
    icon: Phone,
    title: 'Initial Consultation',
    desc: 'We visit your home, discuss your goals, evaluate the existing structure, and outline preliminary options. This consultation is free and comes with no obligation.',
  },
  {
    icon: Lightbulb,
    title: 'Conceptual Design',
    desc: 'Our design team develops floor plans, elevations, and 3D renderings so you can visualize the addition before any construction begins. We refine the design based on your feedback.',
  },
  {
    icon: Ruler,
    title: 'Engineering & Structural Analysis',
    desc: 'A licensed structural engineer evaluates your existing foundation, framing, and load paths to determine what reinforcement is needed to support the new addition.',
  },
  {
    icon: FileCheck,
    title: 'Permitting & Approvals',
    desc: 'We prepare and submit all permit applications to Mecklenburg County, coordinate with zoning, and manage HOA architectural review submissions if required.',
  },
  {
    icon: ClipboardCheck,
    title: 'Material Selection',
    desc: 'Visit our Design Center to select finishes, fixtures, flooring, cabinetry, countertops, and hardware. We guide you through options that match your home and budget.',
  },
  {
    icon: HardHat,
    title: 'Site Preparation',
    desc: 'We protect your landscaping, set up temporary barriers between the construction zone and your living space, and prepare the site for foundation work.',
  },
  {
    icon: Hammer,
    title: 'Foundation & Framing',
    desc: 'The foundation is poured to match your existing foundation type. Walls are framed, roof structure is tied into the existing roofline, and the addition takes shape.',
  },
  {
    icon: Wrench,
    title: 'Mechanical Systems',
    desc: 'Electrical wiring, plumbing, HVAC ductwork, and insulation are installed. We coordinate with your existing systems to ensure seamless integration and code compliance.',
  },
  {
    icon: Home,
    title: 'Interior Finishing',
    desc: 'Drywall, painting, flooring, trim, cabinetry, countertops, fixtures, and all finish work is completed. The addition begins to look and feel like part of your home.',
  },
  {
    icon: CheckCircle,
    title: 'Final Walkthrough & Warranty',
    desc: 'We conduct a detailed walkthrough with you, address any punch list items, obtain the final inspection from the county, and provide your warranty documentation.',
  },
];

const faqs = [
  {
    question: 'How much does a home addition cost in Charlotte NC in 2026?',
    answer:
      'Home addition costs in Charlotte vary by type and complexity. Room additions typically range from $150 to $300 per square foot. Second story additions run $250 to $450 per square foot due to structural requirements. Garage conversions are the most affordable at $80 to $180 per square foot since the shell already exists. In-law suites with full kitchens and bathrooms cost $200 to $400 per square foot. Kitchen extensions and bathroom additions fall in the $180 to $400 range depending on finish level. We provide a detailed, line-item estimate after evaluating your specific project so there are no surprises.',
  },
  {
    question: 'Do I need a permit for a home addition in Charlotte?',
    answer:
      'Yes. All home additions in Mecklenburg County require building permits from the Charlotte-Mecklenburg Code Enforcement department. Depending on the scope, you may also need zoning approval, especially if your addition approaches setback limits or lot coverage maximums. Electrical, plumbing, and mechanical permits are also required for any addition that includes those systems. If you live in an HOA community, you will need architectural review approval before submitting for a building permit. We handle the entire permitting process on your behalf, including plan preparation, application submission, and coordination with inspectors throughout construction.',
  },
  {
    question: 'How long does a home addition take to build?',
    answer:
      'Typical construction timelines for Charlotte home additions: room additions take 2 to 4 months, second story additions take 4 to 6 months, garage conversions take 6 to 10 weeks, in-law suites take 3 to 5 months, kitchen extensions take 2 to 4 months, bump-outs take 4 to 8 weeks, and sunroom additions take 6 to 12 weeks. Design and permitting typically add 4 to 8 weeks before construction begins. Weather, material availability, and inspection scheduling can affect timelines. We provide a detailed project schedule at the start of every project.',
  },
  {
    question: 'Will a home addition increase my property value in Charlotte?',
    answer:
      'Yes. Well-designed, properly permitted additions typically return 50 to 80 percent of their cost in increased home value. Additions that add bedrooms, bathrooms, or functional living space tend to have the highest return on investment in the Charlotte real estate market. According to Remodeling Magazine Cost vs. Value data, a midrange primary suite addition recoups approximately 56 percent of its cost, while a two-story addition recoups approximately 65 percent. However, the real value often lies in avoiding the transaction costs of selling and buying a new home, which can total 8 to 10 percent of home value.',
  },
  {
    question: 'Can I live in my home during the addition construction?',
    answer:
      'In most cases, yes. We plan construction to minimize disruption to your daily life. We establish clear barriers between the construction zone and your living space, maintain clean work areas, and communicate the daily schedule so you know what to expect. For major projects like second story additions, there may be a brief period of several days when the roof is opened and temporary weatherproofing is in place. We discuss any temporary living arrangements needed well in advance during the planning phase.',
  },
  {
    question: 'What is the difference between a bump-out and a full room addition?',
    answer:
      'A bump-out is a small extension, typically two to fifteen feet, that pushes one wall of an existing room outward. It adds space to an existing room without creating an entirely new room. A full room addition is a larger project that creates one or more entirely new rooms with their own walls, ceiling, and often a separate foundation. Bump-outs are faster, less expensive, and often work well for kitchen expansions, larger bathrooms, or wider bedrooms. Full room additions are appropriate when you need a completely new space like an extra bedroom, family room, or home office.',
  },
  {
    question: 'How do you match the new addition to my existing home?',
    answer:
      'Matching is one of the most critical aspects of a successful home addition. We match the roofline pitch and style, siding material and profile, window brand and style, trim details, brick or stone work, and interior finishes like flooring, molding, and paint colors. For older Charlotte homes where exact material matches are no longer manufactured, we source the closest available alternatives and use techniques like feathering siding transitions to create a seamless appearance. Our goal is for guests to be unable to tell where the original home ends and the addition begins.',
  },
  {
    question: 'Do you handle the design or do I need to hire an architect separately?',
    answer:
      'We are a design-build contractor, which means we handle both design and construction under one roof. You do not need to hire a separate architect. Our design team creates floor plans, elevations, and 3D renderings for your addition. For complex structural additions like second stories or large multi-room additions, we coordinate with licensed structural engineers as part of our standard process. The design-build approach saves you time, reduces miscommunication, and typically costs 15 to 20 percent less than hiring separate design and construction teams.',
  },
  {
    question: 'What Charlotte neighborhoods do you build home additions in?',
    answer:
      'We build home additions throughout the greater Charlotte area including South Charlotte, Ballantyne, Myers Park, Dilworth, Plaza Midwood, NoDa, Huntersville, Cornelius, Davidson, Lake Norman, Matthews, Mint Hill, Pineville, Waxhaw, Indian Trail, and Stallings. We also serve Fort Mill and Indian Land across the state line in South Carolina. Our office is located at 14330 S Lakes Drive in South Charlotte, which puts us within easy reach of projects across the metro.',
  },
  {
    question: 'What happens if unexpected issues are found during construction?',
    answer:
      'Unexpected issues like hidden water damage, outdated wiring, insufficient insulation, or foundation concerns are not uncommon in home addition projects, especially in older Charlotte homes. When we encounter an unexpected condition, we document it with photos, explain the issue and its implications, present options for addressing it, and provide a cost estimate for the additional work before proceeding. We never proceed with unplanned work without your written approval. Our detailed pre-construction evaluation catches most potential issues before construction begins, but we build a contingency recommendation into every project budget.',
  },
];

export default function ResidentialAdditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Residential Additions',
            'Licensed home addition contractor in Charlotte, NC. Room additions, second stories, garage conversions, in-law suites, kitchen extensions, sunrooms, bump-outs, bathroom additions. Veteran-owned. 60+ years combined experience.',
            'https://webuildclt.com/services/residential-additions'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Home Additions Charlotte NC"
        subtitle="Expand your living space with expert residential additions. Licensed in NC & SC. Veteran & family-owned."
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs + Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Residential Additions' },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 mt-8">
            {/* Main Content */}
            <div className="article-prose">
              <h2 id="overview">Residential Addition Contractor in Charlotte, NC</h2>

              <p>
                Charlotte homeowners face a familiar dilemma every year. The family is growing, the work-from-home
                situation needs a dedicated office, the in-laws need a place to stay, or the kitchen that felt
                spacious ten years ago now feels impossibly cramped. The question becomes: do you sell and move to a
                bigger house, or do you add onto the home you already love? For thousands of Charlotte families every
                year, the answer is a home addition.
              </p>

              <p>
                A home addition lets you expand your living space without leaving the neighborhood you chose, the
                school district your kids attend, or the commute route you have perfected over the years. You avoid
                the real estate transaction costs of selling and buying, which in Charlotte typically total eight to
                ten percent of home value. You avoid the stress of packing, moving, and unpacking. And you get
                exactly the space you need, designed exactly the way you want it, rather than compromising on someone
                else&rsquo;s floor plan.
              </p>

              <p>
                We Build is a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contractor
                </Link>{' '}
                based in South Charlotte. We design and build residential additions that integrate seamlessly with
                your existing home, matching the architectural style, materials, roofline, and finishes so the new
                space feels like it was always part of the original design. With over 60 years of combined
                construction experience and active general contractor licenses in both North Carolina and South
                Carolina, we have the expertise to handle additions of every size and complexity. As a proud member
                of the U.S. Green Building Council (USGBC), we incorporate energy-efficient building practices into
                every project.
              </p>

              <p>
                Whether you need a single room addition, a full second story, a garage conversion, an in-law suite,
                a kitchen extension, or a sunroom, our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">
                  design-build
                </Link>{' '}
                approach means your architect and builder work as one team. That eliminates the miscommunication and
                change orders that plague projects where design and construction are handled separately. Visit our{' '}
                <Link href="/design-center" className="text-primary hover:underline">
                  Design Center
                </Link>{' '}
                in South Charlotte to explore materials, finishes, and fixture options before construction begins.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">We Build</p>
                        <p className="text-muted-foreground">14330 S Lakes Drive</p>
                        <p className="text-muted-foreground">Charlotte, NC 28273</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:5627086616" className="font-medium hover:text-primary">
                        (562) 708-6616
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">Licensed NC & SC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">60+ Years Combined Exp.</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/contact">
                      Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Related Services</h3>
                  <nav className="space-y-2 text-sm">
                    <Link
                      href="/services/custom-home-builder"
                      className="block text-muted-foreground hover:text-primary"
                    >
                      Custom Home Builder &rarr;
                    </Link>
                    <Link
                      href="/services/design-build"
                      className="block text-muted-foreground hover:text-primary"
                    >
                      Design-Build &rarr;
                    </Link>
                    <Link
                      href="/services/general-contractor"
                      className="block text-muted-foreground hover:text-primary"
                    >
                      General Contractor &rarr;
                    </Link>
                    <Link
                      href="/services/commercial-construction"
                      className="block text-muted-foreground hover:text-primary"
                    >
                      Commercial Construction &rarr;
                    </Link>
                  </nav>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Types of Home Additions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Addition Types</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Types of Home Additions We Build in Charlotte
            </h2>
            <p className="text-muted-foreground">
              Every home and every family is different. We build eight distinct types of residential additions,
              each tailored to your specific goals, budget, and property.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {additionTypes.map((t) => (
              <Card key={t.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <t.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
                      <p className="text-muted-foreground mb-3">{t.desc}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t.details}</p>
                      <p className="text-sm font-medium text-primary mt-3">
                        Typical cost: {t.cost}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Home Addition Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Home Addition Process: 10 Steps from Concept to Completion
            </h2>
            <p className="text-muted-foreground">
              A successful home addition requires careful planning and disciplined execution. Here is exactly
              how we take your project from initial idea to finished space.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-full bg-border mt-2 hidden md:block" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Adding vs. Moving */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Why Add?</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Benefits of Adding to Your Home vs. Moving
              </h2>
            </div>
            <div className="article-prose">
              <p>
                The decision to build an addition versus sell and buy a larger home is one of the biggest financial
                decisions Charlotte homeowners face. Both options have merits, but in many cases, building an
                addition is the smarter financial move and the less stressful life decision.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Lower Transaction Costs</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Selling a home in Charlotte typically costs 5 to 6 percent in agent commissions plus 2 to 4
                      percent in closing costs, transfer taxes, and moving expenses. On a $500,000 home, that is
                      $35,000 to $50,000 in transaction costs alone, money that goes to agents and attorneys rather
                      than into your living space. A home addition puts every dollar into your property.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Keep Your Neighborhood</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You chose your neighborhood for a reason: the schools, the commute, the neighbors, the
                      community. Finding all of those things again in a new location is difficult and uncertain. A
                      home addition lets you keep everything you love about where you live while fixing the one thing
                      you do not: the amount of space.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Strong ROI</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A well-built home addition in Charlotte typically recoups 50 to 80 percent of its cost in
                      increased home value. Two-story additions and bedroom/bathroom additions tend to have the
                      highest returns. When you factor in the transaction costs you avoid by not moving, the
                      effective ROI of an addition is often higher than it appears on paper.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Complete Customization</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      When you buy an existing home, you compromise. The kitchen is not quite right, the bedrooms
                      are not where you would put them, the master bathroom is too small. With an addition, you
                      design exactly the space you need, down to the last outlet placement and light fixture. Visit
                      our{' '}
                      <Link href="/design-center" className="text-primary hover:underline">
                        Design Center
                      </Link>{' '}
                      to see how we help you make every selection.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Of course, there are situations where moving makes more sense. If your lot is too small for the
                addition you need, if the cost of the addition would push your home well above comparable values in
                the neighborhood, or if you are ready for a completely different location, selling may be the better
                option. We are happy to discuss the specifics of your situation during a free consultation and give
                you an honest assessment of whether an addition is the right investment for your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Addition Costs in Charlotte */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Home Addition Costs in Charlotte, NC
              </h2>
            </div>
            <div className="article-prose">
              <p>
                One of the first questions every homeowner asks is how much a home addition costs. The honest
                answer is that costs vary significantly based on the type of addition, the size, the finish level,
                and the structural complexity involved. Below is a detailed breakdown of typical costs for home
                additions in the Charlotte area as of 2026.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 px-4 font-semibold">Addition Type</th>
                      <th className="text-left py-3 px-4 font-semibold">Cost per Sq Ft</th>
                      <th className="text-left py-3 px-4 font-semibold">Typical Size</th>
                      <th className="text-left py-3 px-4 font-semibold">Total Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Room Addition</td>
                      <td className="py-3 px-4">$150-$300</td>
                      <td className="py-3 px-4">200-400 sq ft</td>
                      <td className="py-3 px-4">$30,000-$120,000</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="py-3 px-4">Second Story</td>
                      <td className="py-3 px-4">$250-$450</td>
                      <td className="py-3 px-4">600-1,500 sq ft</td>
                      <td className="py-3 px-4">$150,000-$675,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Garage Conversion</td>
                      <td className="py-3 px-4">$80-$180</td>
                      <td className="py-3 px-4">400-600 sq ft</td>
                      <td className="py-3 px-4">$32,000-$108,000</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="py-3 px-4">In-Law Suite</td>
                      <td className="py-3 px-4">$200-$400</td>
                      <td className="py-3 px-4">400-800 sq ft</td>
                      <td className="py-3 px-4">$80,000-$320,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Kitchen Extension</td>
                      <td className="py-3 px-4">$200-$400</td>
                      <td className="py-3 px-4">100-300 sq ft</td>
                      <td className="py-3 px-4">$20,000-$120,000</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="py-3 px-4">Bump-Out</td>
                      <td className="py-3 px-4">$100-$250</td>
                      <td className="py-3 px-4">50-150 sq ft</td>
                      <td className="py-3 px-4">$5,000-$37,500</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4">Sunroom</td>
                      <td className="py-3 px-4">$150-$350</td>
                      <td className="py-3 px-4">150-400 sq ft</td>
                      <td className="py-3 px-4">$22,500-$140,000</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="py-3 px-4">Bathroom Addition</td>
                      <td className="py-3 px-4">$180-$350</td>
                      <td className="py-3 px-4">50-120 sq ft</td>
                      <td className="py-3 px-4">$9,000-$42,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Factors That Affect Home Addition Costs</h3>

              <p>
                Several factors influence the final cost of your addition beyond the basic per-square-foot rate.
                Understanding these factors helps you plan a realistic budget.
              </p>

              <ul>
                <li>
                  <strong>Foundation type:</strong> Slab foundations are the least expensive. Crawl space
                  foundations cost more. Full basements under the addition are the most expensive option.
                </li>
                <li>
                  <strong>Structural complexity:</strong> Second story additions require engineering analysis and
                  potential reinforcement of existing foundation and walls. Additions that modify the roof structure
                  cost more than those that extend under a simple shed roof.
                </li>
                <li>
                  <strong>Plumbing and electrical:</strong> Additions that include bathrooms, kitchens, or
                  laundry rooms cost more per square foot due to plumbing runs, drain lines, water heater capacity,
                  and electrical panel upgrades.
                </li>
                <li>
                  <strong>Finish level:</strong> Builder-grade finishes, mid-range finishes, and premium finishes
                  can vary the cost per square foot by $50 to $150 or more. Hardwood versus laminate, granite versus
                  laminate countertops, and custom versus stock cabinetry all affect the bottom line.
                </li>
                <li>
                  <strong>Site conditions:</strong> Sloped lots, difficult access for equipment, tree removal,
                  retaining walls, and underground utilities all add cost.
                </li>
                <li>
                  <strong>HVAC capacity:</strong> If your existing heating and cooling system cannot handle the
                  additional square footage, you may need a supplemental system or a full HVAC upgrade.
                </li>
              </ul>

              <h3>Financing Your Home Addition</h3>

              <p>
                Charlotte homeowners typically finance home additions through one of several options: home equity
                loans (fixed rate, lump sum), home equity lines of credit (variable rate, draw as needed),
                cash-out refinancing (if current rates are favorable), construction loans (short-term financing
                converted to permanent mortgage), or personal savings. We recommend consulting with your lender
                early in the planning process. Many Charlotte banks and credit unions offer competitive rates for
                home improvement projects. We are happy to provide the detailed project estimate your lender will
                need to process the loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charlotte Zoning & Permits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Permits & Zoning</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Charlotte Zoning & Permits for Home Additions
              </h2>
            </div>
            <div className="article-prose">
              <p>
                Building a home addition in Charlotte requires navigating the permitting and zoning requirements of
                Mecklenburg County and, in many cases, your homeowners association. Understanding these requirements
                upfront prevents costly surprises and delays during construction. We handle the entire permit process
                for every project, but here is what you should know.
              </p>

              <h3>Mecklenburg County Building Permits</h3>

              <p>
                All home additions in Mecklenburg County require a building permit from the Charlotte-Mecklenburg
                Code Enforcement department. The permit application requires architectural plans showing the proposed
                addition, including floor plans, elevations, structural details, and site plans showing setbacks and
                lot coverage. Electrical, plumbing, and mechanical permits are required separately for any addition
                that includes those systems. Inspections are required at multiple stages during construction:
                foundation, framing, rough mechanical, insulation, and final inspection.
              </p>

              <h3>Zoning Setback Requirements</h3>

              <p>
                Zoning regulations in Charlotte dictate how close your addition can be to property lines. Standard
                residential setbacks in most Charlotte neighborhoods require a minimum front yard setback of 20 to
                30 feet, side yard setbacks of 5 to 15 feet depending on the zoning district, and rear yard
                setbacks of 20 to 30 feet. Your addition must also comply with lot coverage maximums, which
                typically limit the total building footprint to 30 to 50 percent of your lot area depending on your
                zoning classification. If your desired addition would encroach on setback requirements, a variance
                may be possible through the Charlotte Board of Adjustment, but this adds time and is not guaranteed.
              </p>

              <h3>HOA Architectural Review</h3>

              <p>
                If you live in a community with a homeowners association, you will likely need architectural review
                committee approval before applying for a building permit. HOA requirements vary widely but typically
                address exterior materials, colors, roofline compatibility, and sometimes the size and placement of
                the addition. We help prepare HOA submission packages including renderings and material samples.
                Starting the HOA process early is important because review cycles can take two to six weeks depending
                on your association&rsquo;s meeting schedule.
              </p>

              <h3>Additions in Fort Mill, Lake Norman, and South Charlotte</h3>

              <p>
                For homeowners in{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill, SC
                </Link>
                , permits are issued by York County or the Town of Fort Mill, with different setback and zoning
                requirements than Mecklenburg County. In the{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>{' '}
                area, Huntersville, Cornelius, and Davidson each have their own zoning ordinances and permit
                processes. In{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                , many homes are in HOA communities with particularly detailed architectural standards. Regardless
                of your location, we handle the jurisdictional requirements specific to your property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Considerations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Engineering</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Structural Considerations for Home Additions
              </h2>
            </div>
            <div className="article-prose">
              <p>
                A home addition is not just about building new walls and a roof. It is about connecting new
                construction to an existing structure in a way that is structurally sound, weathertight, and
                code-compliant. Here are the key structural considerations we address on every addition project.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Foundation Matching</h3>
                    <p className="text-sm text-muted-foreground">
                      The new addition&rsquo;s foundation must be compatible with your existing foundation in both
                      type and depth. If your home sits on a slab, the addition typically uses a slab. If your home
                      has a crawl space or basement, the addition should match. Mismatched foundation types can lead
                      to differential settlement, cracking, and structural problems. We excavate and inspect the
                      existing foundation before designing the addition&rsquo;s foundation system.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Roof Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Tying a new roof into an existing roofline is one of the most critical details in any addition
                      project. Poor roof integration leads to leaks, ice dams, and aesthetic problems. We match the
                      existing roof pitch, use proper flashing and waterproofing at the connection point, and ensure
                      the new ridge and valley lines create proper drainage. For second story additions, the entire
                      roof is rebuilt, which actually simplifies the integration challenge.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">HVAC Expansion</h3>
                    <p className="text-sm text-muted-foreground">
                      Your existing heating and cooling system was sized for your current square footage. Adding
                      200 to 1,000 or more square feet means your HVAC system may not have the capacity to heat and
                      cool the additional space effectively. We perform a load calculation to determine whether your
                      existing system can be extended with additional ductwork or whether a supplemental mini-split
                      system or full HVAC upgrade is needed. Proper HVAC planning prevents hot and cold spots in
                      both the new and existing areas of your home.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Electrical & Plumbing</h3>
                    <p className="text-sm text-muted-foreground">
                      Most home additions require additional electrical circuits, and many require an electrical panel
                      upgrade. Older Charlotte homes with 100-amp or 150-amp panels often need a 200-amp upgrade to
                      support the additional load. Plumbing for bathroom or kitchen additions requires careful
                      planning for supply lines, drain lines, vent stacks, and water heater capacity. We coordinate
                      all mechanical systems early in the design phase to prevent costly changes during construction.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Every structural decision is backed by engineering analysis. We work with licensed structural
                engineers who evaluate your existing home and design the connection points, load paths, and
                reinforcements needed to make your addition structurally integrated with the original home. This
                engineering is not optional; it is required by Mecklenburg County building code and it is essential
                to the long-term performance of your addition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tips for Seamless Additions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Design</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Design Tips for a Seamless Home Addition
              </h2>
            </div>
            <div className="article-prose">
              <p>
                The hallmark of a great home addition is that nobody can tell it was added after the fact. Achieving
                that seamless look requires intentional design decisions at every step. Here are the principles we
                follow and recommend to every homeowner planning an addition in Charlotte.
              </p>

              <h3>Match the Architecture</h3>
              <p>
                Your addition should follow the same architectural language as your existing home. If your home is
                a Craftsman, the addition should have Craftsman details: tapered columns, exposed rafter tails,
                wide trim. If your home is a traditional Colonial, the addition should maintain symmetry, proportional
                windows, and classic trim profiles. Charlotte has a diverse mix of architectural styles, from
                mid-century ranch homes in older neighborhoods like Myers Park and Dilworth to newer traditional and
                transitional homes in Ballantyne and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                . We study your home&rsquo;s existing details and replicate them in the addition.
              </p>

              <h3>Match Materials and Finishes</h3>
              <p>
                Exterior materials, including siding, brick, stone, and roofing, must match or closely complement the
                existing materials. For newer homes, exact matches are often available. For older Charlotte homes
                where original siding or brick is no longer manufactured, we source the closest available match and
                use transition techniques to blend the old and new sections. Interior finishes, including flooring,
                molding profiles, door styles, and hardware, should also carry through from the existing home into
                the addition. Our{' '}
                <Link href="/design-center" className="text-primary hover:underline">
                  Design Center
                </Link>{' '}
                has samples to help you make matching decisions with confidence.
              </p>

              <h3>Create Natural Flow</h3>
              <p>
                The connection point between your existing home and the new addition should feel natural and
                intuitive. Hallways should be wide enough to not feel like an afterthought. Floor levels should
                match exactly, with no steps or transitions between old and new sections. Ceiling heights should
                be consistent or transition gracefully. The goal is for someone walking from the original home into
                the addition to experience a continuous, harmonious space rather than a jarring shift.
              </p>

              <h3>Consider the Exterior from All Angles</h3>
              <p>
                An addition changes the exterior profile of your home from every viewing angle: street view, side
                yard, backyard, and neighboring properties. We create 3D renderings that show the addition from
                multiple perspectives so you can evaluate the visual impact before committing. A well-designed
                addition improves your home&rsquo;s curb appeal rather than creating an awkward appendage. This
                is especially important in Charlotte neighborhoods with{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  high aesthetic standards
                </Link>
                {' '}and active HOA architectural review committees.
              </p>

              <h3>Plan for Natural Light</h3>
              <p>
                Additions built with insufficient windows or poor window placement feel dark, cramped, and
                disconnected. We design additions with generous natural light, positioning windows to capture
                the best orientation for daylight and views. Skylights, transom windows, and glass doors can
                bring even more light into the addition and the existing rooms adjacent to it. In Charlotte,
                south-facing windows maximize winter sun while properly sized overhangs control summer heat gain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Home Addition FAQ
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions Charlotte homeowners ask about residential additions.
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

      {/* Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Serving Charlotte and Surrounding Communities
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We build home additions throughout the greater Charlotte metropolitan area, including communities
              in both North Carolina and South Carolina.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                'South Charlotte',
                'Ballantyne',
                'Myers Park',
                'Dilworth',
                'Plaza Midwood',
                'NoDa',
                'Huntersville',
                'Cornelius',
                'Davidson',
                'Matthews',
                'Mint Hill',
                'Pineville',
                'Waxhaw',
                'Indian Trail',
                'Stallings',
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-background rounded-full border text-muted-foreground"
                >
                  {area}
                </span>
              ))}
              <Link
                href="/areas/fort-mill-sc"
                className="px-4 py-2 bg-background rounded-full border text-primary hover:bg-primary/5"
              >
                Fort Mill, SC &rarr;
              </Link>
              <Link
                href="/areas/lake-norman"
                className="px-4 py-2 bg-background rounded-full border text-primary hover:bg-primary/5"
              >
                Lake Norman &rarr;
              </Link>
              <Link
                href="/areas/south-charlotte"
                className="px-4 py-2 bg-background rounded-full border text-primary hover:bg-primary/5"
              >
                South Charlotte &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Expand Your Home?</h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need an extra bedroom, a second story, a kitchen extension, or a complete in-law suite,
            we are here to make it happen. Contact us for a free consultation and detailed estimate on your home
            addition project in Charlotte, NC.
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Veteran and family-owned. Licensed in NC & SC. USGBC member. Over 60 years of combined experience.
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
              <a href="tel:5627086616">
                <Phone className="mr-2 h-5 w-5" />
                (562) 708-6616
              </a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-8">
            <Link href="/about" className="hover:text-primary-foreground underline">
              Learn about our company
            </Link>
            {' '}&bull;{' '}
            <Link href="/portfolio" className="hover:text-primary-foreground underline">
              View our portfolio
            </Link>
            {' '}&bull;{' '}
            <Link href="/services/custom-home-builder" className="hover:text-primary-foreground underline">
              Custom home building
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
