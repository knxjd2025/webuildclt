import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { Card, CardContent } from '@/components/ui/card';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import {
  Building2,
  Home,
  Paintbrush,
  Hammer,
  PlusCircle,
  Layers,
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Users,
  MapPin,
  Clock,
  Star,
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
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title:
    'We Build | Commercial Construction Company Charlotte NC | General Contractor',
  description:
    'We Build is Charlotte NC\'s veteran-owned commercial construction company. General contractor licensed in NC & SC. Commercial upfits, design-build, custom homes, roof coating. 60+ years combined experience. USGBC member. Free estimates: (704) 574-8124.',
  keywords: [
    'commercial construction charlotte nc',
    'general contractor charlotte nc',
    'construction company charlotte nc',
    'commercial upfit charlotte nc',
    'design build charlotte nc',
    'custom home builder charlotte nc',
    'roof coating charlotte nc',
    'veteran owned contractor charlotte',
    'licensed general contractor nc sc',
    'commercial construction company near me',
    'office upfit charlotte',
    'restaurant build out charlotte nc',
    'residential additions charlotte nc',
    'USGBC member contractor charlotte',
    'construction company fort mill sc',
    'contractor lake norman nc',
    'south charlotte contractor',
  ],
  alternates: {
    canonical: 'https://webuildclt.com',
  },
  openGraph: {
    title: 'We Build | Commercial Construction Company Charlotte NC',
    description:
      'Veteran-owned commercial construction company in Charlotte, NC. Licensed in NC & SC. Commercial upfits, design-build, custom homes, roof coating. 60+ years combined experience. Free estimates.',
    url: 'https://webuildclt.com',
    siteName: 'We Build',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://webuildclt.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'We Build — Commercial Construction Charlotte NC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We Build | Commercial Construction Company Charlotte NC',
    description:
      'Veteran-owned commercial construction. Licensed in NC & SC. 60+ years experience. Free estimates: (704) 574-8124.',
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const services = [
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
      'As a licensed general contractor in both North Carolina and South Carolina, We Build manages the full scope of commercial and residential construction projects. We coordinate subcontractors, procure materials, handle permitting and inspections, manage budgets, and maintain schedules. Our general contracting services cover ground-up construction, major renovations, tenant improvements, and multi-phase developments. With over sixty years of combined construction experience, we bring the project management discipline and trade expertise needed to deliver complex projects without surprises.',
    href: '/services/general-contractor',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    description:
      'Build the home of your dreams with Charlotte\'s trusted custom home builder. From lot selection and site evaluation through architectural design, permitting, construction, and final walkthrough, we guide you every step. Our custom homes feature high-performance building envelopes, energy-efficient systems, and finish selections curated at our Design Center. We build on your lot or help you find the perfect site in Charlotte, South Charlotte, Lake Norman, Fort Mill, or anywhere in our service area.',
    href: '/services/custom-home-builder',
  },
  {
    icon: PlusCircle,
    title: 'Residential Additions',
    description:
      'Expand your living space with expertly crafted room additions, second stories, garage conversions, sunrooms, and in-law suites that seamlessly match your existing home. Our residential addition process starts with a thorough assessment of your home\'s structure and foundation, followed by design development at our Design Center, permitting, and construction. We protect your landscaping, maintain clean job sites, and coordinate every trade so the addition integrates perfectly with your existing home.',
    href: '/services/residential-additions',
  },
  {
    icon: Layers,
    title: 'Commercial Roof Coatings',
    description:
      'Eco-friendly roof restoration that saves up to fifty percent compared to full roof replacement. Our We Coat division applies silicone, acrylic, elastomeric, and SPF coatings to extend the life of your commercial roof by ten to twenty years. Roof coatings reduce energy costs by reflecting UV radiation, eliminate leaks, and keep roofing materials out of landfills. We serve commercial buildings of all sizes — from small retail plazas to large industrial facilities — across Charlotte, Fort Mill, Lake Norman, and the greater Carolina region.',
    href: '/services/roof-coating',
  },
];

const features = [
  '60+ years combined experience',
  'Veteran & family owned',
  'USGBC member',
  'Licensed in NC & SC',
];

const stats = [
  { value: '60+', label: 'Years Combined Experience' },
  { value: '2', label: 'State Licenses (NC & SC)' },
  { value: '2019', label: 'Founded in Charlotte' },
  { value: '100%', label: 'Client Satisfaction Focus' },
];

const processSteps = [
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

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Licensed & Insured in NC and SC',
    description:
      'We hold active general contractor licenses in both North Carolina and South Carolina, backed by comprehensive general liability, workers\' compensation, and commercial auto insurance. Your project is fully protected from permit application through final inspection. Dual-state licensing means we can serve clients across the Charlotte metro area without jurisdictional delays, whether your project is in Mecklenburg County, York County, or anywhere in between.',
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
      'Our leadership and field teams bring over sixty years of combined construction experience spanning commercial builds, residential custom homes, industrial projects, and specialty roof coatings. This depth of knowledge means we have seen and solved virtually every construction challenge that arises in the Charlotte market — from problematic soil conditions and complex permitting to tight schedules and challenging site logistics. Experience eliminates guesswork.',
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
];

const industriesServed = [
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

const areasServedDetailed = [
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
      'Licensed in South Carolina, We Build is a trusted construction partner for businesses and homeowners in Fort Mill, Tega Cay, Rock Hill, and York County. Fort Mill\'s proximity to Charlotte makes it one of the hottest markets for commercial construction and custom home building in the Carolinas. We handle everything from restaurant build-outs along Carowinds Boulevard to custom lakefront homes in Tega Cay — all managed by our Charlotte-based team with full SC licensing and insurance.',
  },
  {
    name: 'Lake Norman & Cornelius',
    href: '/areas/lake-norman',
    description:
      'The Lake Norman area — including Cornelius, Davidson, Huntersville, and Mooresville — is one of Charlotte\'s premier markets for custom home construction and commercial development. We build lakefront custom homes, commercial spaces along the I-77 corridor, restaurant build-outs in downtown Davidson, and office upfits in Mooresville\'s growing business parks. Our team understands the unique requirements of lakefront construction including setback regulations, erosion control, and dock permitting.',
  },
];

const homeFaqs = [
  {
    question: 'What types of construction projects does We Build handle?',
    answer:
      'We Build provides full-service general contracting for commercial construction (offices, retail, restaurants, medical facilities, warehouses), residential construction (custom homes, additions, renovations), commercial roof coating and restoration through our We Coat division, and integrated design-build services. We handle projects of all sizes across the Charlotte metro area and into South Carolina. Our team manages every phase from pre-construction planning through final walkthrough and warranty support.',
  },
  {
    question: 'What areas in the Charlotte region do you serve?',
    answer:
      'We serve the entire Charlotte metropolitan area including South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, and Fort Mill, SC. Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273. We hold active general contractor licenses in both North Carolina and South Carolina, allowing us to serve clients on both sides of the state line without delays.',
  },
  {
    question: 'Are you a licensed and insured general contractor?',
    answer:
      'Yes. We Build holds active general contractor licenses in both North Carolina (NC Licensing Board for General Contractors) and South Carolina (SC Contractors\' Licensing Board). We carry comprehensive insurance including general liability, workers\' compensation, and commercial auto coverage. We are happy to provide copies of our licenses and certificates of insurance to any prospective client or property manager upon request.',
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
      'Several things set We Build apart from other general contractors in Charlotte. We are veteran and family-owned, which means the owners are personally involved in every project. We maintain a dedicated Design Center where clients explore materials hands-on. We offer integrated design-build services that deliver projects faster and with fewer surprises. We are a USGBC member committed to sustainable building practices. We provide transparent, line-item pricing with no hidden costs. And we hold dual licenses in North Carolina and South Carolina, giving us seamless coverage across the Charlotte metro area.',
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
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />

      {/* ============================================================ */}
      {/* Hero Section                                                  */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center">
        <HeroSlideshow />

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-6 leading-tight">
              Commercial Construction{' '}
              <span className="text-primary">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
              We Build is Charlotte&apos;s trusted commercial construction
              company. Veteran and family-owned, licensed in both North Carolina
              and South Carolina, with over sixty years of combined construction
              experience. From ground-up{' '}
              <Link href="/services/commercial-construction" className="underline text-white hover:text-primary transition-colors">
                commercial construction
              </Link>{' '}
              and{' '}
              <Link href="/services/commercial-upfits" className="underline text-white hover:text-primary transition-colors">
                commercial upfits
              </Link>{' '}
              to{' '}
              <Link href="/services/design-build" className="underline text-white hover:text-primary transition-colors">
                design-build
              </Link>{' '}
              and{' '}
              <Link href="/services/roof-coating" className="underline text-white hover:text-primary transition-colors">
                roof coatings
              </Link>
              , we deliver quality craftsmanship on time and on budget.
            </p>
            <p className="text-base text-white/80 mb-8 leading-relaxed">
              USGBC member. Serving Charlotte, South Charlotte, Fort Mill SC,
              Lake Norman, and the greater Carolina region. Call{' '}
              <a href="tel:7045748124" className="text-primary font-semibold hover:underline">
                (704) 574-8124
              </a>{' '}
              for a free estimate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="btn-shimmer cta-pulse">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground md:hidden"
                asChild
              >
                <a href="tel:7045748124">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-sm text-white font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Stats Bar                                                     */}
      {/* ============================================================ */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* About We Build                                                */}
      {/* ============================================================ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-image.jpg"
                  alt="We Build construction team Charlotte NC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="section-label">
                Charlotte&apos;s Trusted Commercial Contractor
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                About We Build — Veteran-Owned Construction Excellence in
                Charlotte Since 2019
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned construction company
                proudly headquartered in Charlotte, North Carolina. Founded in
                2019, our team brings over sixty years of combined experience in{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial construction
                </Link>
                , residential building,{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  roof coating
                </Link>
                , and{' '}
                <Link href="/services/design-build" className="text-primary hover:underline">
                  design-build services
                </Link>{' '}
                to every project we undertake. Our founders are veterans who
                bring military discipline, integrity, and a mission-first mindset
                to the construction industry — values that show up in how we
                manage budgets, communicate with clients, and stand behind our
                finished work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contractor
                </Link>{' '}
                in both North Carolina and South Carolina, we serve the entire
                Charlotte metropolitan area — from Ballantyne and{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>{' '}
                to{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>
                ,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>
                , and beyond. Our mission is simple: deliver exactly what you
                want, how you want it, with the integrity and accountability
                that comes from our veteran values and family ownership.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets We Build apart is our integrated approach to
                construction. Our dedicated{' '}
                <Link href="/design-center" className="text-primary hover:underline">
                  Design Center
                </Link>{' '}
                in South Charlotte gives clients a hands-on experience where
                they can explore materials, compare finishes, and make confident
                selections — all with our experienced team by their side. As a
                proud member of the U.S. Green Building Council (USGBC), we
                integrate sustainable building practices into every project,
                reducing environmental impact while improving building
                performance and lowering long-term operating costs for our
                clients. Read more on our{' '}
                <Link href="/about" className="text-primary hover:underline">
                  About page
                </Link>
                .
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/design-center">Visit Our Design Center</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Our Construction Services                                     */}
      {/* ============================================================ */}
      <section className="py-20 gradient-warm content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Construction Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Full-Service Construction Company in Charlotte, NC
            </h2>
            <p className="text-muted-foreground">
              From{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline">
                commercial construction
              </Link>{' '}
              and{' '}
              <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                office upfits
              </Link>{' '}
              to{' '}
              <Link href="/services/custom-home-builder" className="text-primary hover:underline">
                custom homes
              </Link>{' '}
              and eco-friendly{' '}
              <Link href="/we-coat" className="text-primary hover:underline">
                roof coating
              </Link>
              , We Build offers comprehensive construction services for
              businesses and homeowners across the Charlotte metro area. Every
              project is backed by our veteran-owned commitment to quality,
              transparency, and on-time delivery. Explore our{' '}
              <Link href="/guides/commercial-construction-charlotte-guide" className="text-primary hover:underline">
                Complete Guide to Commercial Construction in Charlotte
              </Link>{' '}
              for an in-depth look at what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-shadow reveal"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
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

      {/* ============================================================ */}
      {/* Our Construction Process                                      */}
      {/* ============================================================ */}
      <section className="py-20 bg-muted content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Construction Process — From First Call to Final Walkthrough
            </h2>
            <p className="text-muted-foreground">
              Our proven six-step process ensures your project is delivered on
              time, on budget, and exactly to your specifications. Whether you
              are planning a commercial upfit, a custom home, or a ground-up
              build, here is how we make construction predictable and
              stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {processSteps.map((step) => (
              <Card key={step.title} className="reveal">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Why Charlotte Chooses We Build                                */}
      {/* ============================================================ */}
      <section className="py-20 bg-background content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Charlotte Chooses We Build
            </h2>
            <p className="text-muted-foreground">
              Choosing the right construction company is one of the most
              important decisions you will make for your project. Here is what
              sets We Build apart from other general contractors in Charlotte,
              NC — and why businesses and homeowners across the region trust us
              with their most important builds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="reveal">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Industries We Serve                                           */}
      {/* ============================================================ */}
      <section className="py-20 bg-muted content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Industries
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Industries We Serve in Charlotte
            </h2>
            <p className="text-muted-foreground">
              We Build has deep experience across a range of commercial
              industries. Every sector has unique construction requirements —
              from healthcare compliance and restaurant ventilation to
              industrial load ratings and mixed-use fire separation. Our team
              brings industry-specific knowledge to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {industriesServed.map((industry) => (
              <Card key={industry.title} className="reveal">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don&apos;t see your industry? We likely have experience in it.
            </p>
            <Button asChild>
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Video Showcase                                                */}
      {/* ============================================================ */}
      <section className="py-20 bg-background content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              See Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              We Build in Action
            </h2>
            <p className="text-muted-foreground">
              Watch our team deliver quality construction across the Charlotte
              metro area — from commercial upfits to roof coatings and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="none"
                  poster="/images/portfolio/fyzical-therapy.jpg"
                >
                  <source src="/videos/fyzical-upfit.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                FYZICAL Therapy — Commercial Upfit
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="none"
                  poster="/images/we-coat/mics-aerial-1.jpg"
                >
                  <source src="/videos/we-coat-charlotte.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                We Coat — Commercial Roof Coating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Featured Projects / Portfolio Preview                         */}
      {/* ============================================================ */}
      <section className="py-20 bg-muted content-lazy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Featured Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Recent Construction Projects in Charlotte
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Browse our portfolio of completed commercial construction,
                residential builds, and roof coating projects across the
                Charlotte metro area. Each project showcases the quality
                craftsmanship and attention to detail that We Build delivers.
                Visit our full{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  portfolio page
                </Link>{' '}
                to see more.
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/images/portfolio/urgent-care.jpg',
                alt: 'Broken to Better Urgent Care commercial upfit Charlotte NC',
                category: 'Commercial Upfit',
                title: 'Broken to Better Urgent Care',
                href: '/portfolio',
              },
              {
                image: '/images/portfolio/fyzical-therapy.jpg',
                alt: 'FYZICAL Therapy & Balance Centers commercial upfit',
                category: 'Commercial Upfit',
                title: 'FYZICAL Therapy & Balance Centers',
                href: '/portfolio',
              },
              {
                image: '/images/portfolio/pure-physique.jpg',
                alt: 'Pure Physique fitness studio commercial upfit Fort Mill SC',
                category: 'Commercial Upfit',
                title: 'Pure Physique',
                href: '/portfolio',
              },
            ].map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group image-hover rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Client Testimonials                                           */}
      {/* ============================================================ */}
      <section className="py-20 bg-secondary text-secondary-foreground content-lazy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              What Our Charlotte Clients Say
            </h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &quot;We Build transformed our vision into reality. Their
              attention to detail and commitment to quality exceeded our
              expectations. The team was professional, communicative, and
              delivered on time and within budget. We highly recommend We Build
              for any commercial construction project in the Charlotte
              area.&quot;
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

      {/* ============================================================ */}
      {/* Areas We Serve                                                */}
      {/* ============================================================ */}
      <section className="py-20 bg-background content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Areas We Serve Across the Charlotte Metro
            </h2>
            <p className="text-muted-foreground">
              Licensed in both North Carolina and South Carolina, We Build
              serves the entire Charlotte metropolitan area. Our South Charlotte
              headquarters at 14330 S Lakes Drive puts us within easy reach of
              every community listed below — and many more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areasServedDetailed.map((area) => (
              <Card key={area.name} className="reveal">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold">{area.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View {area.name} Services
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Our Headquarters</p>
              <p className="text-sm text-muted-foreground">
                14330 S Lakes Drive, Charlotte NC 28273 &mdash; serving
                Mecklenburg, Union, Iredell, Catawba, and York (SC) counties
              </p>
            </div>
            <Button variant="outline" asChild className="md:ml-auto">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Charlotte Construction Market                                 */}
      {/* ============================================================ */}
      <section className="py-20 bg-muted content-lazy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Local Market Insight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              The Charlotte Construction Market — Why Quality Matters More Than
              Ever
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Charlotte is one of the fastest-growing cities in the United
                States, and the construction industry here reflects that growth.
                From Uptown high-rises and South End mixed-use developments to
                suburban commercial corridors in Ballantyne, Lake Norman, and
                Fort Mill, the demand for quality commercial construction has
                never been higher. At the same time, the rapid pace of
                development has attracted contractors of varying quality — making
                it more important than ever for business owners and property
                managers to choose carefully.
              </p>
              <p>
                The Charlotte construction market presents unique challenges that
                require local expertise. Mecklenburg County has specific
                stormwater management requirements, fire separation standards,
                and ADA compliance protocols that differ from surrounding
                jurisdictions. York County in South Carolina operates under a
                different building code cycle with its own inspection processes.
                A contractor who knows these differences — and has established
                relationships with local plan reviewers and inspectors — can
                navigate permitting significantly faster than one who does not.
              </p>
              <p>
                Material costs and labor availability in the Charlotte market
                fluctuate with national trends but are also influenced by local
                demand cycles. Major infrastructure projects, university
                expansions, and the continued growth of Charlotte&apos;s
                financial services sector create competition for skilled labor
                and materials. Working with an experienced, locally connected
                general contractor like We Build means your project benefits
                from established supplier relationships, reliable subcontractor
                networks, and procurement strategies that protect both schedule
                and budget. For a deeper dive into the local market, read our{' '}
                <Link href="/guides/commercial-construction-charlotte-guide" className="text-primary hover:underline">
                  Complete Guide to Commercial Construction in Charlotte
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* USGBC Member Section                                          */}
      {/* ============================================================ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image
              src="/images/certifications/usgbc-member-light.png"
              alt="USGBC Member"
              width={150}
              height={150}
              className="h-20 w-auto"
            />
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-2">
                U.S. Green Building Council Member
              </h3>
              <p className="text-muted-foreground">
                We Build is a proud member of the U.S. Green Building Council.
                Our commitment to sustainable construction means every project
                benefits from energy-efficient design, responsible material
                sourcing, and building practices that reduce environmental
                impact. Green building is not just good for the planet — it
                saves our clients money through lower operating costs and
                higher property values. Ask us how USGBC-aligned practices can
                benefit your next project.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog/what-is-usgbc-green-building">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ Section — 10 FAQs with structured data                    */}
      {/* ============================================================ */}
      <section className="py-20 bg-muted content-lazy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Charlotte Construction Questions — Answered
              </h2>
              <p className="text-muted-foreground">
                We answer the questions Charlotte homeowners and business owners
                ask most about construction, costs, timelines, licensing, and
                working with a general contractor. If your question is not
                listed here,{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{' '}
                and we will be happy to help.
              </p>
            </div>
            <div className="space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question} className="bg-background rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Blog Preview                                                  */}
      {/* ============================================================ */}
      <section className="py-20 bg-background content-lazy">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              From Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Construction Tips & Industry Insights
            </h2>
            <p className="text-muted-foreground">
              Expert advice on commercial construction, custom homes, roof
              coating, and building in Charlotte, NC. Read our latest articles
              on the{' '}
              <Link href="/blog" className="text-primary hover:underline">
                We Build blog
              </Link>
              .
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
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
            ].map((post) => (
              <Card key={post.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Section                                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&apos;s trusted veteran-owned construction company
            today for a free consultation and detailed estimate. Whether you
            need{' '}
            <span className="text-primary-foreground font-medium">
              commercial construction
            </span>
            , a{' '}
            <span className="text-primary-foreground font-medium">
              custom home
            </span>
            ,{' '}
            <span className="text-primary-foreground font-medium">
              roof coating
            </span>
            , or a{' '}
            <span className="text-primary-foreground font-medium">
              design-build project
            </span>
            , We Build delivers quality results on time and on budget. Licensed
            in NC and SC. USGBC member. Sixty plus years combined experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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

      {/* ============================================================ */}
      {/* Finance Section                                               */}
      {/* ============================================================ */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Need financing for your construction project?
          </p>
          <Button variant="link" asChild>
            <a
              href="https://www.lyonfinancial.net/hi-dealer/we-build-nc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              Finance Your Project with Lyon Financial →
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
