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
  Palette,
  Ruler,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  HardHat,
  FileCheck,
  MapPin,
  Building2,
  Hammer,
  Lightbulb,
  TreePine,
  Wrench,
  Layers,
  DollarSign,
  Users,
  Sparkles,
  Zap,
  Thermometer,
  Wifi,
  Accessibility,
  Sun,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Custom Home Builder Charlotte NC | Build Your Dream Home',
  description:
    'Custom home builder in Charlotte, NC. Design and build your dream home with a veteran-owned team. Modern farmhouse, craftsman, contemporary, luxury homes. Licensed in NC & SC. Free consultation. (704) 574-8124.',
  keywords: [
    'custom home builder charlotte nc',
    'home builder charlotte nc',
    'new home builder charlotte nc',
    'luxury home builder charlotte nc',
    'build on your lot charlotte nc',
    'custom home building charlotte',
    'dream home builder charlotte',
    'design build homes charlotte nc',
    'new construction homes charlotte nc',
    'custom home builder south charlotte',
  ],
};

const buildPhases = [
  {
    icon: MapPin,
    step: '01',
    title: 'Lot Evaluation & Site Analysis',
    description:
      'Before you commit to a piece of land, we evaluate the lot for buildability, soil conditions, topography, drainage patterns, utility access, and zoning restrictions. We check setback requirements, easements, HOA covenants, and any environmental concerns that could affect construction. If you already own your lot, we assess it at no charge during the initial consultation. If you are still searching, we can recommend lots in desirable Charlotte neighborhoods and help you avoid costly surprises like rocky soil, wetlands, or inadequate utility infrastructure.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Design Consultation & Vision Planning',
    description:
      'This is where your dream home starts taking shape. You meet with our design team at our dedicated Design Center in South Charlotte to discuss your lifestyle, family needs, must-have features, aesthetic preferences, and budget. We review inspiration images, discuss floor plan concepts, and establish the scope of the project. This consultation typically lasts two to three hours and covers everything from the number of bedrooms and bathrooms to outdoor living priorities, garage size, and special-use rooms like home offices, media rooms, or multigenerational suites.',
  },
  {
    icon: Ruler,
    step: '03',
    title: 'Architectural Design & Floor Plans',
    description:
      'Our architectural partners translate your vision into detailed floor plans and elevations. You receive preliminary drawings for review and revision, typically going through two to three rounds of modifications until the plan is exactly right. The design phase covers structural layout, room dimensions, window and door placement, ceiling heights, roofline design, and exterior elevations. We also produce 3D renderings so you can visualize your home before a single nail is driven.',
  },
  {
    icon: FileCheck,
    step: '04',
    title: 'Structural Engineering',
    description:
      'Once architectural plans are finalized, structural engineers review and stamp the drawings. This includes foundation design based on soil analysis, load-bearing wall calculations, roof truss engineering, and seismic and wind load compliance for Mecklenburg County building codes. Engineering is not optional — it is what separates a home that lasts generations from one that develops problems within years.',
  },
  {
    icon: Shield,
    step: '05',
    title: 'Permitting & Approvals',
    description:
      'We handle the entire permitting process with Mecklenburg County, the City of Charlotte, or whichever jurisdiction governs your lot. This includes building permits, mechanical permits, electrical permits, plumbing permits, and any special approvals required by your HOA or historic district. Permitting in the Charlotte metro area typically takes four to eight weeks. Our familiarity with local code officials and submittal requirements helps avoid unnecessary delays.',
  },
  {
    icon: TreePine,
    step: '06',
    title: 'Site Preparation & Grading',
    description:
      'Construction begins with clearing the lot, establishing construction access, installing erosion control measures, and grading the site to proper elevations. We coordinate with the surveyor to stake the house position, establish finish floor elevation, and ensure proper drainage away from the foundation. Utility trenching for water, sewer (or septic), electrical, and gas connections happens during this phase.',
  },
  {
    icon: Layers,
    step: '07',
    title: 'Foundation Construction',
    description:
      'Depending on your home design and lot conditions, the foundation may be a concrete slab, crawl space, or full basement. Each type requires specific excavation, footer construction, waterproofing, and concrete work. Foundation inspections by the county building inspector must pass before we proceed. This is one of the most critical phases — a properly built foundation ensures the structural integrity of everything above it for decades to come.',
  },
  {
    icon: Hammer,
    step: '08',
    title: 'Framing & Structural Shell',
    description:
      'Framing transforms your floor plans into a three-dimensional structure. Walls go up, roof trusses are set, and the home begins to take its recognizable shape. During framing, you will walk through the house for the first time and see room sizes, ceiling heights, and window placements in real life. This is when minor adjustments are easiest to make. After framing, the home is wrapped with a weather-resistant barrier and the roof is installed, making the structure weather-tight.',
  },
  {
    icon: Wrench,
    step: '09',
    title: 'Rough-In: Mechanical, Electrical, Plumbing',
    description:
      'With the structure enclosed, plumbers, electricians, and HVAC technicians install their systems within the walls, floors, and ceilings. Plumbing supply and drain lines are run to every fixture location. Electrical wiring is pulled for outlets, switches, lighting, and dedicated circuits for appliances. HVAC ductwork and equipment are installed. This phase also includes low-voltage wiring for smart home systems, audio, security, and networking. All rough-in work is inspected before walls are closed.',
  },
  {
    icon: Building2,
    step: '10',
    title: 'Exterior Finishes',
    description:
      'The exterior of your home receives its final appearance during this phase. Siding, stone, brick, stucco, or a combination of materials is installed. Windows and exterior doors are permanently set and sealed. Exterior trim, soffits, fascia, and gutters go on. Exterior painting or staining is completed. Garage doors are installed. The goal is a weatherproof, finished exterior that matches the architectural vision while protecting the home from Charlotte\'s humid subtropical climate.',
  },
  {
    icon: Palette,
    step: '11',
    title: 'Interior Finishing & Design Selections',
    description:
      'This is the phase where your home truly becomes yours. Drywall is hung, taped, and finished. Interior trim including baseboards, crown molding, window casings, and door frames is installed. Cabinets, countertops, tile, hardwood flooring, carpet, and all finish materials are placed. Plumbing fixtures, light fixtures, and appliances are connected. Interior painting is completed. Every selection you made during the design phase at our Design Center comes together in this phase.',
  },
  {
    icon: Sun,
    step: '12',
    title: 'Landscaping, Final Inspections & Walkthrough',
    description:
      'The final phase includes driveway and walkway installation, basic landscaping with grading, sod, and plantings, and any outdoor features like patios, decks, or porches. We schedule the final building inspection with the county and obtain your certificate of occupancy. Then we conduct a thorough walkthrough with you, reviewing every room, system, and detail. We document any punch list items and address them before handing over the keys to your new custom home.',
  },
];

const homeStyles = [
  {
    title: 'Modern Farmhouse',
    description:
      'The modern farmhouse has become one of the most requested custom home styles in Charlotte. Characterized by clean lines, board-and-batten siding, metal roof accents, large covered porches, and open-concept interiors with shiplap details. Modern farmhouse homes balance rustic warmth with contemporary conveniences, featuring spacious kitchens with oversized islands, vaulted ceilings with exposed beams, and seamless indoor-outdoor living transitions. These homes work beautifully on larger lots in South Charlotte, Fort Mill, and the Lake Norman area.',
  },
  {
    title: 'Craftsman',
    description:
      'Craftsman-style custom homes emphasize handcrafted detail and natural materials. Signature elements include tapered columns on stone bases, wide front porches, exposed rafter tails, and detailed woodwork throughout the interior. Craftsman homes in Charlotte often feature built-in cabinetry, coffered ceilings, and warm wood tones paired with stone fireplaces. The style appeals to homeowners who value architectural character and timeless design over trends. Craftsman homes suit established Charlotte neighborhoods where character and curb appeal matter.',
  },
  {
    title: 'Contemporary',
    description:
      'Contemporary custom homes in Charlotte embrace clean geometry, large windows, flat or low-slope rooflines, and open floor plans that prioritize natural light and flow. Materials often include steel, concrete, glass, and natural wood in combination. Interior spaces feature minimalist design with high-end finishes, floating staircases, and dramatic ceiling heights. Contemporary homes are ideal for homeowners who want a distinctive, architecturally forward residence that stands apart from traditional Charlotte neighborhoods.',
  },
  {
    title: 'Traditional',
    description:
      'Traditional custom homes draw from classic American and European architectural traditions. Think symmetrical facades, brick or stone exteriors, multi-pane windows, formal entryways, and defined interior rooms including separate dining rooms, studies, and living rooms. Traditional homes in Charlotte often include detailed moldings, wainscoting, built-in bookshelves, and elegant material selections. This style remains popular in established South Charlotte neighborhoods like Ballantyne, Myers Park, and Providence Plantation.',
  },
  {
    title: 'Transitional',
    description:
      'Transitional custom homes blend traditional architecture with contemporary interior design. The exterior may feature classic proportions and materials like brick, stone, and clapboard siding, while the interior opens up with modern floor plans, clean-lined cabinetry, and neutral color palettes. Transitional homes give homeowners the best of both worlds — curb appeal that fits in with Charlotte\'s established neighborhoods plus interiors that feel current and functional. This style has become increasingly popular in the Charlotte market.',
  },
];

const featureCategories = [
  {
    icon: Thermometer,
    title: 'Energy Efficiency & Green Building',
    features: [
      'Spray foam insulation for superior thermal performance',
      'High-performance windows with Low-E glass coatings',
      'ENERGY STAR certified appliances and HVAC systems',
      'Sealed building envelope to minimize air infiltration',
      'LED lighting throughout with dimmer controls',
      'Tankless water heaters for on-demand hot water',
      'Solar-ready electrical panel and roof structure',
      'USGBC green building practices integrated into every project',
    ],
  },
  {
    icon: Wifi,
    title: 'Smart Home Technology',
    features: [
      'Whole-home network wiring with CAT6 or fiber',
      'Smart thermostat with zone control',
      'Smart lighting with scene programming',
      'Whole-home audio system with built-in speakers',
      'Video doorbell and smart lock integration',
      'Motorized window shades',
      'Home automation hub for centralized control',
      'Structured media panel in utility room',
    ],
  },
  {
    icon: Sun,
    title: 'Outdoor Living',
    features: [
      'Covered porches and screened-in living areas',
      'Outdoor kitchen with gas grill, sink, and refrigerator',
      'Stone or paver patio with fire pit',
      'Deck construction with composite or hardwood materials',
      'Landscape lighting with pathway and accent fixtures',
      'Irrigation system installation',
      'Fencing and privacy screening',
      'Pool-ready plumbing and electrical rough-in',
    ],
  },
  {
    icon: Sparkles,
    title: 'Luxury Finishes & Upgrades',
    features: [
      'Custom cabinetry with soft-close hardware',
      'Quartz, granite, or marble countertops',
      'Hardwood flooring throughout main living areas',
      'Large-format tile in bathrooms and wet areas',
      'Frameless glass shower enclosures',
      'Freestanding soaking tubs',
      'Custom millwork and built-in storage',
      'Designer lighting fixtures and hardware',
    ],
  },
  {
    icon: Accessibility,
    title: 'Aging-in-Place & Universal Design',
    features: [
      'Zero-threshold entries and doorways',
      'First-floor primary suite option',
      'Wider hallways and doorways (36 inches minimum)',
      'Walk-in shower with bench and grab bar blocking',
      'Lever-style door handles and rocker light switches',
      'Reinforced bathroom walls for future grab bar installation',
      'Elevator shaft rough-in for multi-story homes',
      'Non-slip flooring in wet areas',
    ],
  },
];

const neighborhoods = [
  {
    area: 'South Charlotte',
    link: '/areas/south-charlotte',
    description:
      'South Charlotte remains the most popular area for custom home building in the Charlotte metro. Communities like Ballantyne, Providence Plantation, Rea Farms, and Marvin offer a mix of established neighborhoods with available lots and new developments. South Charlotte provides excellent schools through the CMS system, convenient access to I-485, and proximity to shopping, dining, and medical facilities. Lot sizes for custom builds in South Charlotte typically range from a quarter acre in planned communities to multi-acre parcels in areas like Marvin and Weddington. Land costs range from $80,000 to $300,000+ depending on location, size, and community amenities.',
  },
  {
    area: 'Lake Norman',
    link: '/areas/lake-norman',
    description:
      'The Lake Norman area including Cornelius, Davidson, Huntersville, and Mooresville offers lakefront and lake-community custom home building opportunities that are unique in the Charlotte market. Waterfront lots on Lake Norman are premium properties commanding $200,000 to $1,000,000+ for buildable lakefront parcels. Interior lake community lots are more accessible, typically $75,000 to $250,000. Lake Norman custom homes often incorporate outdoor living features, boat storage, and elevated designs to maximize water views. The area offers top-rated schools, a charming downtown Davidson, and growing retail and dining options.',
  },
  {
    area: 'Fort Mill, SC',
    link: '/areas/fort-mill-sc',
    description:
      'Fort Mill and the Indian Land corridor in York County, South Carolina offer some of the best value for custom home building in the Charlotte metro. Lower property taxes compared to North Carolina, excellent Fort Mill schools (consistently ranked among the top in SC), and rapid growth in retail and amenities have made Fort Mill a top destination for families building custom homes. Lot prices in Fort Mill range from $60,000 to $200,000+ in master-planned communities like Tega Cay, Baxter, and Riverwalk. We Build holds a South Carolina general contractor license, allowing us to build throughout York County.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to build a custom home in Charlotte, NC in 2026?',
    answer:
      'Custom home construction costs in Charlotte range from $200 to $600+ per square foot depending on the level of finishes, architectural complexity, and lot conditions. A 2,500-square-foot mid-range custom home typically costs between $687,500 and $1,000,000 for construction alone, not including land. Entry-level custom homes with standard finishes start around $200-$275 per square foot. Luxury custom homes with premium materials, smart home technology, and custom millwork run $400-$600+ per square foot. We provide detailed, line-item cost breakdowns during the planning phase so you know exactly where every dollar goes.',
  },
  {
    question: 'How long does it take to build a custom home in Charlotte?',
    answer:
      'The total timeline from first meeting to move-in is typically 12 to 18 months. The design and planning phase, including architectural drawings, engineering, and permitting, takes 2 to 4 months. Construction typically takes 8 to 14 months depending on the size and complexity of the home. Larger luxury homes and homes with complex features like basements, pools, or extensive outdoor living areas may take longer. Weather, material lead times, and permitting timelines can also affect the schedule. We provide a detailed construction schedule at the start of every project.',
  },
  {
    question: 'Can I build a custom home on my own lot in Charlotte?',
    answer:
      'Absolutely. Build-on-your-lot projects are one of our specialties. We can build on a lot you already own or help you evaluate potential lots before purchase. Our lot evaluation covers soil conditions, topography, drainage, utility access, setback requirements, zoning restrictions, HOA covenants, and any environmental concerns. This evaluation helps you avoid costly surprises after purchase. We build on lots throughout the Charlotte metro area including Mecklenburg County, Union County, Iredell County, and York County, SC.',
  },
  {
    question: 'What is included in your design-build custom home service?',
    answer:
      'Our design-build service includes everything from concept to completion under one contract with a single point of contact. That includes initial design consultation, architectural floor plans and elevations, 3D renderings, structural engineering, permitting, all construction phases from site work through landscaping, interior design consultation at our Design Center, project management with regular progress updates, final inspections, and post-completion warranty support. The design-build approach eliminates miscommunication between separate architects and builders, which typically saves 15-20% on total project cost.',
  },
  {
    question: 'Do you build luxury custom homes in Charlotte?',
    answer:
      'Yes. We build custom homes across all price ranges, including luxury homes featuring premium materials throughout, custom millwork, designer fixtures, smart home technology, outdoor kitchens, pool-ready infrastructure, wine rooms, home theaters, and distinctive architectural details. Visit our Design Center in South Charlotte to explore luxury material options including natural stone, exotic hardwoods, custom tile, and high-end fixtures from brands like Kohler, Thermador, and Sub-Zero.',
  },
  {
    question: 'What custom home styles do you build in Charlotte?',
    answer:
      'We build all architectural styles including modern farmhouse, craftsman, contemporary, traditional, and transitional designs. Our architectural partners can design your home from scratch based on your vision, or we can modify an existing plan to suit your needs and lot. The most popular styles in the Charlotte market right now are modern farmhouse and transitional, but we have experience building homes in every architectural style.',
  },
  {
    question: 'Do you handle permits for custom home construction in Charlotte?',
    answer:
      'Yes, we manage the entire permitting process from start to finish. This includes building permits, mechanical permits, electrical permits, plumbing permits, and any special approvals required by your HOA, historic district, or local jurisdiction. We handle permits with Mecklenburg County, the City of Charlotte, Town of Matthews, Town of Huntersville, Town of Cornelius, Town of Davidson, and York County (SC). Our familiarity with local building departments and code requirements helps avoid delays.',
  },
  {
    question: 'What energy-efficient features can I include in my custom home?',
    answer:
      'Energy efficiency is built into every We Build custom home. Standard features include high-performance windows, ENERGY STAR appliances, sealed building envelope construction, and efficient HVAC systems. Upgrades include spray foam insulation, tankless water heaters, solar-ready electrical systems, geothermal heating and cooling, and LED lighting throughout. As a USGBC member, we follow green building practices on every project. An energy-efficient custom home in Charlotte can reduce utility bills by 30-50% compared to standard construction.',
  },
  {
    question: 'How do I finance a custom home build in Charlotte?',
    answer:
      'Custom home construction typically requires a construction-to-permanent loan, which converts to a traditional mortgage upon completion. Most lenders require 20-25% down for construction loans. The loan process involves appraisal of the completed home value based on plans and specifications, and funds are disbursed in draws as construction milestones are completed. We work with several Charlotte-area lenders who specialize in construction loans and can provide referrals. Some clients also use land equity as part of their down payment if they already own the lot.',
  },
  {
    question: 'What warranty do you provide on custom homes?',
    answer:
      'We provide a comprehensive warranty on every custom home we build. This includes a one-year builder warranty covering workmanship and materials, a two-year warranty on mechanical systems including HVAC, plumbing, and electrical, and a ten-year structural warranty covering the foundation and load-bearing components. We also honor all manufacturer warranties on products and materials installed in your home. Our post-build support team is available to address any concerns that arise after you move in.',
  },
];

export default function CustomHomeBuilderPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(
            'Custom Home Building',
            'Custom home builder in Charlotte, NC. Design and build your dream home with a veteran-owned team. Modern farmhouse, craftsman, contemporary, luxury homes. Licensed in NC & SC.',
            'https://webuildclt.com/services/custom-home-builder'
          ),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        title="Custom Home Builder Charlotte NC"
        subtitle="Build your dream home with Charlotte's veteran and family-owned custom home builder. Licensed in NC & SC."
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Breadcrumbs + Intro with Sidebar */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/general-contractor' },
              { label: 'Custom Home Builder' },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_340px] gap-12 mt-8">
            {/* Main Content */}
            <div className="article-prose">
              <h2 id="overview">Custom Home Building in Charlotte, NC</h2>

              <p>
                Charlotte, North Carolina is one of the best places in the Southeast to build a custom home.
                The metro area offers diverse neighborhoods, strong property values, excellent schools, and a
                quality of life that continues to attract families and professionals from across the country.
                Whether you are relocating to Charlotte, upgrading from your current home, or building on a lot
                you have been saving for years, a custom-built home gives you something no existing home can —
                a residence designed entirely around how you live.
              </p>

              <p>
                Building a custom home instead of buying an existing one means every room, every finish, and
                every feature is chosen by you. No compromises on floor plan layout. No settling for someone
                else&apos;s kitchen design. No renovations needed on day one. You choose the lot, the
                architectural style, the number of bedrooms and bathrooms, the ceiling heights, the flooring,
                the countertops, the lighting — every single detail. For most families, their home is the
                largest investment they will ever make. Building custom ensures that investment reflects exactly
                what you want.
              </p>

              <p>
                We Build is a veteran and family-owned custom home builder based in South Charlotte at 14330
                S Lakes Drive, Charlotte NC 28273. We hold active general contractor licenses in both North
                Carolina and South Carolina, and we bring over 60 years of combined construction experience to
                every home we build. Our{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">
                  design-build approach
                </Link>{' '}
                means your architect and your builder work as one coordinated team, eliminating the
                miscommunication and change orders that plague traditional home building projects. We also
                maintain a dedicated{' '}
                <Link href="/design-center" className="text-primary hover:underline">
                  Design Center
                </Link>{' '}
                in South Charlotte where you can see and touch materials, explore finish options, and make
                selections in person rather than guessing from catalogs.
              </p>

              <p>
                As a proud member of the U.S. Green Building Council (USGBC), sustainable building practices
                are integrated into every home we build — not added as an afterthought. From energy-efficient
                insulation and high-performance windows to sealed building envelopes and ENERGY STAR appliances,
                we build homes that are better for the environment and less expensive to operate.
              </p>

              <h2 id="why-custom">Why Build a Custom Home in Charlotte</h2>

              <p>
                The Charlotte housing market continues to be competitive. Inventory of existing homes remains
                tight, and buyers often find themselves competing for properties that do not quite meet their
                needs. Homes in the most desirable neighborhoods sell quickly, often above asking price, and
                many require significant renovations to bring them up to modern standards. For buyers who know
                what they want, building a custom home in Charlotte is often a better investment than purchasing
                an existing home and spending six figures renovating it.
              </p>

              <p>
                Charlotte&apos;s custom home market benefits from several factors. Buildable lots remain
                available in desirable areas like South Charlotte, the Lake Norman corridor, and Fort Mill, SC.
                Mecklenburg County&apos;s building department, while thorough, processes permits efficiently
                compared to many other major metros. The Charlotte labor market for skilled construction trades
                is deep, thanks to the region&apos;s long history as a construction hub. And the variety of
                neighborhoods and lot types — from quarter-acre lots in planned communities to multi-acre
                parcels in rural Weddington and Marvin — means there is a custom home opportunity for nearly
                every budget level.
              </p>

              <div className="callout">
                <div className="callout-title">Charlotte Market Context</div>
                <p>
                  The Charlotte metro area adds roughly 50,000 new residents per year, making it one of the
                  fastest-growing regions in the United States. This sustained growth supports strong property
                  values for custom-built homes and ensures long-term return on your investment.
                </p>
              </div>

              <p>
                Building custom also gives you control over energy efficiency, technology infrastructure, and
                future-proofing that older homes simply cannot match. A new custom home built with modern
                insulation, HVAC, and window technology can reduce energy costs by 30-50% compared to a home
                built even 15 years ago. Smart home wiring, structured networking, and aging-in-place features
                are dramatically easier and less expensive to include during initial construction than to
                retrofit later.
              </p>

              <h2 id="process">Our Custom Home Building Process</h2>

              <p>
                Building a custom home is the most complex construction project most families will ever
                undertake. At We Build, we have refined our process over hundreds of projects to keep your build
                on schedule, on budget, and exactly to your specifications. Here is a detailed walkthrough of
                every phase, from lot evaluation through final walkthrough and key delivery.
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
                      <Palette className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-muted-foreground">In-house Design Center</span>
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
                    Tell us about your dream home. We provide complimentary consultations with no obligation.
                  </p>
                  <Button variant="secondary" className="w-full mb-3" asChild>
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                  <a
                    href="tel:7045748124"
                    className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    (704) 574-8124
                  </a>
                </div>

                {/* TOC */}
                <nav className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">On This Page</h3>
                  <div className="toc-sidebar">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'why-custom', label: 'Why Build Custom' },
                      { id: 'process', label: 'Building Process' },
                      { id: 'home-styles', label: 'Home Styles' },
                      { id: 'features', label: 'Features & Upgrades' },
                      { id: 'cost-guide', label: 'Cost Guide' },
                      { id: 'neighborhoods', label: 'Neighborhoods' },
                      { id: 'choosing-builder', label: 'Choosing a Builder' },
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

      {/* Build Process — 12 Phases */}
      <section className="py-16 gradient-warm" id="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              12-Phase Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              How We Build Your Custom Home
            </h2>
            <p className="text-muted-foreground">
              A proven twelve-phase process refined over hundreds of projects. Every step is documented,
              inspected, and communicated so you always know exactly where your home stands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildPhases.map((phase) => (
              <Card key={phase.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary/20 mb-3">
                    {phase.step}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <phase.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <div className="container mx-auto px-4">
        <div className="inline-cta my-0 rounded-none md:rounded-lg md:my-8">
          <p>Ready to start planning your custom home in Charlotte? Schedule a free design consultation at our South Charlotte Design Center.</p>
          <Link href="/contact">Schedule Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>

      {/* Home Styles */}
      <section className="py-16 bg-background" id="home-styles-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="home-styles">Custom Home Styles We Build in Charlotte</h2>

            <p>
              Charlotte&apos;s custom home market embraces a wide range of architectural styles. The style you choose
              affects everything from exterior materials and roofline to interior layout and finish selections. Here
              are the five most popular custom home styles we build in the Charlotte metro area, along with what makes
              each one distinctive.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            {homeStyles.map((style) => (
              <Card key={style.title} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{style.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{style.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 article-prose">
            <p>
              Not sure which style fits your vision? Visit our{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center
              </Link>{' '}
              to explore material samples, browse inspiration portfolios, and discuss architectural options with
              our design team. You can also view completed projects in our{' '}
              <Link href="/portfolio" className="text-primary hover:underline">
                portfolio
              </Link>{' '}
              to see the quality and range of homes we have built across Charlotte.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Upgrades */}
      <section className="py-16 bg-muted" id="features-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Features &amp; Upgrades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" id="features">
              Custom Home Features &amp; Upgrades
            </h2>
            <p className="text-muted-foreground">
              One of the greatest advantages of building custom is choosing exactly which features and
              upgrades go into your home. Here are the most popular feature categories our Charlotte
              clients select.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featureCategories.map((category) => (
              <Card key={category.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Guide */}
      <section className="py-16 bg-background" id="cost-guide-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="cost-guide">Custom Home Costs in Charlotte (2026 Guide)</h2>

            <p>
              The most common question we hear from prospective custom home clients is: &ldquo;How much does it
              cost to build a custom home in Charlotte?&rdquo; The honest answer depends on your lot, the size of
              the home, architectural complexity, and the level of finishes you select. However, we can provide
              realistic cost ranges based on our experience building custom homes in the Charlotte market.
            </p>

            <p>
              The following ranges represent construction costs only — they do not include land, site development
              costs for challenging lots (steep grades, rock removal, septic systems), swimming pools, or
              architectural and engineering fees (which typically add 5-10% to total project cost).
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-8 space-y-4">
            {[
              {
                level: 'Entry-Level Custom',
                range: '$200-$275/sq ft',
                desc: 'Quality construction with standard builder-grade finishes. Efficient floor plans, granite countertops, LVP or carpet flooring, standard cabinetry, builder-grade plumbing and light fixtures. A solid, well-built home without luxury upgrades.',
                example: '2,500 sq ft: $500,000 - $687,500',
              },
              {
                level: 'Mid-Range Custom',
                range: '$275-$400/sq ft',
                desc: 'Upgraded finishes throughout. Hardwood floors in main living areas, quartz countertops, custom cabinetry with soft-close hardware, tile shower surrounds, upgraded plumbing fixtures, smart home basics, energy-efficient upgrades. This is the most popular tier for Charlotte custom homes.',
                example: '2,500 sq ft: $687,500 - $1,000,000',
              },
              {
                level: 'Luxury Custom',
                range: '$400-$600+/sq ft',
                desc: 'Premium materials and finishes throughout. Custom millwork, designer fixtures, natural stone, exotic hardwoods, whole-home smart automation, commercial-grade appliances, wine storage, home theater, outdoor kitchen, and distinctive architectural details.',
                example: '2,500 sq ft: $1,000,000 - $1,500,000+',
              },
            ].map((item) => (
              <div key={item.level} className="p-6 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{item.level}</h3>
                  <span className="font-semibold text-primary">{item.range}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                <p className="text-sm font-medium text-foreground">{item.example}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-8 article-prose">
            <h3>Lot Costs in the Charlotte Metro Area</h3>

            <p>
              Land is a separate and significant expense in the custom home building budget. Lot costs in the
              Charlotte metro vary dramatically by location, size, and community.{' '}
              <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                South Charlotte
              </Link>{' '}
              lots in established communities typically range from $80,000 to $300,000+.{' '}
              <Link href="/areas/lake-norman" className="text-primary hover:underline">
                Lake Norman
              </Link>{' '}
              waterfront lots can exceed $1,000,000.{' '}
              <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                Fort Mill, SC
              </Link>{' '}
              offers more accessible pricing, with lots ranging from $60,000 to $200,000+ in master-planned
              communities. Rural lots in areas like Waxhaw, Weddington, and Marvin offer larger parcels at
              lower per-acre prices.
            </p>

            <h3>Factors That Affect Custom Home Cost</h3>

            <p>
              Beyond size and finish level, several factors can significantly impact your custom home budget.
              Architectural complexity — multiple rooflines, bump-outs, curved walls, and unusual ceiling
              treatments — adds to framing and finish costs. Lot conditions including slope, soil type, tree
              removal, and rock can increase site work expenses by $20,000-$100,000+. Foundation type matters:
              a full basement costs more than a crawl space or slab. Mechanical systems like geothermal HVAC,
              whole-home generators, and solar installations add to the upfront cost but reduce long-term
              operating expenses.
            </p>

            <h3>Financing Your Custom Home Build</h3>

            <p>
              Custom home construction typically requires a construction-to-permanent loan. This type of loan
              provides funds during construction (disbursed in draws as milestones are completed) and then
              converts to a traditional mortgage when the home is finished. Most lenders require 20-25% down
              for construction loans. If you already own your lot, the equity in the land can often count
              toward your down payment. We work with several Charlotte-area lenders who specialize in
              construction loans and can provide referrals during the planning phase.
            </p>
          </div>
        </div>
      </section>

      {/* Charlotte Neighborhoods */}
      <section className="py-16 gradient-warm" id="neighborhoods-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Charlotte Neighborhoods
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" id="neighborhoods">
              Best Charlotte Neighborhoods for Custom Home Builds
            </h2>
            <p className="text-muted-foreground">
              The Charlotte metro area offers diverse neighborhoods for custom home building, each with its own
              character, lot availability, school districts, and price points.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.area} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="text-xl font-semibold">{neighborhood.area}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {neighborhood.description}
                  </p>
                  <Link
                    href={neighborhood.link}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Explore {neighborhood.area} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Choosing a Builder */}
      <section className="py-16 bg-background" id="choosing-builder-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto article-prose">
            <h2 id="choosing-builder">Choosing a Custom Home Builder in Charlotte</h2>

            <p>
              Selecting the right custom home builder is one of the most consequential decisions you will make
              in the building process. You will be working closely with this company for 12-18 months, trusting
              them with hundreds of thousands of dollars, and living with the results for decades. Here is what
              to look for and what questions to ask when evaluating custom home builders in Charlotte.
            </p>

            <h3>What to Look For in a Charlotte Custom Home Builder</h3>

            <p>
              Start with licensing. Any legitimate custom home builder in North Carolina must hold a general
              contractor license from the NC Licensing Board for General Contractors. If you are building in
              South Carolina (Fort Mill, Tega Cay, Indian Land), the builder also needs a SC contractor license.
              Verify both before signing any contract. Next, confirm insurance: general liability, workers
              compensation, and builder&apos;s risk coverage should all be current and adequate.
            </p>

            <p>
              Experience matters, but the type of experience matters more. A builder who specializes in
              production housing operates differently from one who builds custom homes. Custom home building
              requires flexibility, attention to individual client preferences, and the ability to manage
              unique design challenges on every project. Ask specifically about custom home experience — not
              just years in business.
            </p>

            <p>
              Look for a builder who offers{' '}
              <Link href="/services/design-build" className="text-primary hover:underline">
                design-build services
              </Link>
              . When your architect and builder are on the same team, communication is seamless and
              accountability is clear. Traditional design-bid-build, where you hire an architect first and
              then bid the project to builders, often results in plans that exceed your budget, leading to
              costly redesigns and delays.
            </p>

            <h3>Questions to Ask Your Custom Home Builder</h3>

            <div className="space-y-3 my-6">
              {[
                'How many custom homes have you built in the Charlotte metro area?',
                'Can I visit a home currently under construction?',
                'Do you have a Design Center where I can see material samples?',
                'What is your process for handling change orders during construction?',
                'How do you communicate progress during the build?',
                'What warranty do you provide after completion?',
                'Are you licensed in both NC and SC?',
                'Can you provide references from recent custom home clients?',
                'Do you provide fixed-price contracts or cost-plus?',
                'How do you handle allowances for finishes and fixtures?',
              ].map((question) => (
                <div key={question} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground">{question}</span>
                </div>
              ))}
            </div>

            <p>
              At We Build, we welcome these questions because transparency is central to how we operate. We invite
              every prospective client to visit our{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center
              </Link>
              , tour an active job site, speak with past clients, and review our{' '}
              <Link href="/portfolio" className="text-primary hover:underline">
                portfolio
              </Link>{' '}
              of completed work. We also offer{' '}
              <Link href="/services/residential-additions" className="text-primary hover:underline">
                residential additions
              </Link>{' '}
              for homeowners who love their current home and lot but need more space, as well as{' '}
              <Link href="/services/roof-coating" className="text-primary hover:underline">
                roof coating services
              </Link>{' '}
              for protecting your new investment. Learn more{' '}
              <Link href="/about" className="text-primary hover:underline">
                about our company
              </Link>
              , our veteran and family values, and the team behind every We Build custom home.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Testimonial</span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-6 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to detail and commitment to
              quality exceeded our expectations. The team was professional, communicative, and delivered on
              time and within budget. We could not be happier with our new home.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">WB</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">We Build Custom Home Client</div>
                <div className="text-sm text-secondary-foreground/70">South Charlotte, NC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted" id="faq-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" id="faq">
                Custom Home Building FAQ
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions Charlotte homeowners ask about building a custom home.
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Custom Home Building Resources</h2>
            <p className="text-muted-foreground">
              Helpful guides for Charlotte homeowners planning a custom home build.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'How Much Does a Custom Home Cost in Charlotte?', slug: 'cost-to-build-custom-home-charlotte-nc' },
              { title: 'Build on Your Lot: Step-by-Step Guide', slug: 'build-on-your-lot-charlotte-guide' },
              { title: 'Builder Checklist: 10 Questions to Ask', slug: 'custom-home-builder-checklist-questions' },
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                    Read Article <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Design-Build', href: '/services/design-build', icon: Palette, desc: 'Architecture and construction under one team for seamless execution.' },
              { title: 'Residential Additions', href: '/services/residential-additions', icon: Home, desc: 'Expand your existing home with room additions and new living spaces.' },
              { title: 'General Contractor', href: '/services/general-contractor', icon: HardHat, desc: 'Full-service general contracting for residential and commercial projects.' },
              { title: 'Roof Coating', href: '/services/roof-coating', icon: Shield, desc: 'Protective roof coatings to extend the life of your new or existing roof.' },
            ].map((service) => (
              <Card key={service.title} className="group card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                  <Link
                    href={service.href}
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
            Ready to Build Your Dream Home in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with Charlotte&apos;s trusted veteran-owned custom home builder.
            Visit our Design Center, explore your options, and take the first step toward the home you
            have always imagined.
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
