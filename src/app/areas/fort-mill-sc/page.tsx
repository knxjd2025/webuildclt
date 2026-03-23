import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Home,
  Paintbrush,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Ruler,
  Hammer,
  HardHat,
  Clock,
  Star,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Fort Mill SC | Licensed General Contractor',
  description:
    'Licensed general contractor serving Fort Mill, SC. Commercial construction, commercial upfits, custom homes, residential additions, roof coating & design-build. SC licensed. 60+ years combined experience. Free estimates.',
  keywords: [
    'construction company fort mill sc',
    'general contractor fort mill sc',
    'commercial construction fort mill sc',
    'home builder fort mill sc',
    'commercial upfit fort mill sc',
    'custom home builder fort mill',
    'roof coating fort mill sc',
    'design build fort mill sc',
    'york county contractor',
    'fort mill residential construction',
  ],
  openGraph: {
    title: 'Construction Company Fort Mill SC | Licensed General Contractor | We Build',
    description:
      'Licensed SC general contractor serving Fort Mill. Commercial construction, upfits, custom homes, roof coating & design-build. Veteran & family-owned. Free estimates.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://webuildclt.com/areas/fort-mill-sc',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    desc: 'Ground-up commercial builds, office complexes, retail centers, and industrial facilities throughout Fort Mill and York County.',
    href: '/services/commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    desc: 'Transform existing commercial spaces in Fort Mill with expert tenant upfits, office renovations, and retail buildouts.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    desc: 'Build your dream home in Fort Mill communities like Baxter, Tega Cay, Waterside, and throughout York County.',
    href: '/services/custom-home-builder',
  },
  {
    icon: Hammer,
    title: 'Residential Additions',
    desc: 'Expand your Fort Mill home with professionally designed and built additions that blend seamlessly with your existing structure.',
    href: '/services/residential-additions',
  },
  {
    icon: Shield,
    title: 'Roof Coating',
    desc: 'Commercial roof restoration and protective coating systems for Fort Mill building owners seeking to extend roof life.',
    href: '/services/roof-coating',
  },
  {
    icon: Ruler,
    title: 'Design-Build',
    desc: 'Streamlined single-source design and construction for Fort Mill commercial and residential projects from concept to completion.',
    href: '/services/design-build',
  },
];

const faqs = [
  {
    question: 'Are you licensed to work in Fort Mill, SC?',
    answer:
      'Yes. We Build holds active general contractor licenses in both North Carolina and South Carolina. This dual licensing allows us to legally perform commercial construction, residential builds, upfits, and all other construction work in Fort Mill and throughout York County. Our SC license covers the full scope of general contracting services, and we maintain all required insurance and bonding for projects in the state.',
  },
  {
    question: 'Have you completed projects in Fort Mill?',
    answer:
      'Yes. One of our featured projects is the Pure Physique commercial upfit in Fort Mill, SC, where we transformed a raw commercial space into a fully functional fitness facility. This project involved structural modifications, custom interior buildout, specialized flooring, and mechanical systems work. We regularly serve clients across the Charlotte-Fort Mill metro area for both commercial and residential construction.',
  },
  {
    question: 'How far is Fort Mill from your Charlotte office?',
    answer:
      'Fort Mill is approximately 20 minutes south of our Charlotte headquarters at 14330 S Lakes Drive, Charlotte NC 28273. We are located just off I-77, which provides a direct route into Fort Mill and York County. This proximity means our project managers and crews can be on-site quickly, and we do not charge travel premiums for Fort Mill projects.',
  },
  {
    question: 'What does commercial construction cost in Fort Mill, SC?',
    answer:
      'Commercial construction costs in Fort Mill typically range from $150 to $400+ per square foot depending on the project type, complexity, finishes, and site conditions. A basic office upfit might start around $50-80 per square foot, while ground-up commercial construction with specialized systems can exceed $300 per square foot. We provide detailed, transparent estimates for every Fort Mill project after an initial consultation and site assessment. Contact us for a free estimate tailored to your specific project.',
  },
  {
    question: 'How long does a typical construction project take in Fort Mill?',
    answer:
      'Project timelines in Fort Mill vary by scope. A commercial upfit typically takes 6-12 weeks, depending on the size and complexity of the space. Ground-up commercial construction ranges from 6-18 months depending on square footage and building systems. Custom home builds generally take 8-14 months from groundbreaking to final walkthrough. We provide detailed project schedules during the planning phase and keep clients informed with regular progress updates throughout the build.',
  },
  {
    question: 'Do I need a building permit for construction in Fort Mill?',
    answer:
      'Yes. Fort Mill falls under York County building jurisdiction, and most construction projects require building permits. This includes new construction, significant renovations, additions, commercial upfits, electrical work, plumbing modifications, and structural changes. York County follows the International Building Code (IBC) for commercial projects and the International Residential Code (IRC) for homes. As your general contractor, We Build handles the entire permitting process, from application submission through all required inspections.',
  },
  {
    question: 'What is the difference between commercial and residential construction in Fort Mill?',
    answer:
      'Commercial construction in Fort Mill follows the International Building Code (IBC) and typically involves more stringent requirements for fire safety, ADA accessibility, structural engineering, and occupancy ratings. Commercial projects also require specialized insurance, commercial-grade materials, and often involve coordination with multiple municipal departments. Residential construction follows the International Residential Code (IRC) and focuses on single-family homes, additions, and renovations. We Build is experienced in both commercial and residential construction codes and standards for York County projects.',
  },
  {
    question: 'Can you help with the design phase of my Fort Mill project?',
    answer:
      'Absolutely. Our design-build service provides a single point of responsibility for both the design and construction of your Fort Mill project. This streamlined approach eliminates the communication gaps that often occur between separate architects and contractors, saves time on the overall project timeline, and can reduce costs by 10-15% compared to the traditional design-bid-build method. Visit our Design Center to explore materials, finishes, and design options with our team.',
  },
  {
    question: 'Do you build custom homes in Fort Mill and Tega Cay?',
    answer:
      'Yes. We build custom homes throughout the Fort Mill area including Tega Cay, Baxter, Waterside at Lake Wylie, and other York County communities. We handle everything from lot evaluation and site preparation through final construction and landscaping. Our custom home process includes architectural planning, material selection at our Design Center, and hands-on project management to ensure your home meets your exact specifications and is built to the highest standards.',
  },
  {
    question: 'What areas near Fort Mill do you serve?',
    answer:
      'In addition to Fort Mill, we serve the entire Charlotte metropolitan region including Tega Cay, Indian Land, Rock Hill, Pineville, South Charlotte, Lake Norman, and surrounding communities. Our dual NC-SC licensing means we can handle projects on either side of the state line without delay. We also serve the Lake Wylie area, Ballantyne, and the I-77 corridor between Charlotte and Rock Hill.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'SC Licensed & Insured',
    desc: 'Fully licensed general contractor in South Carolina with comprehensive insurance coverage for every Fort Mill project.',
  },
  {
    icon: MapPin,
    title: '20 Minutes Away',
    desc: 'Our Charlotte headquarters is just a quick drive down I-77 from Fort Mill. No travel surcharges, fast response times.',
  },
  {
    icon: Star,
    title: 'Proven Fort Mill Experience',
    desc: 'Featured projects in Fort Mill including the Pure Physique commercial upfit. We know the local market and building codes.',
  },
  {
    icon: HardHat,
    title: '60+ Years Combined Experience',
    desc: 'Veteran and family-owned with deep construction expertise across commercial, residential, and specialty projects.',
  },
  {
    icon: FileText,
    title: 'Full Permit Management',
    desc: 'We handle all York County building permits, inspections, and code compliance so you can focus on your business or family.',
  },
  {
    icon: Users,
    title: 'USGBC Member',
    desc: 'As a U.S. Green Building Council member, we bring sustainable building knowledge to every Fort Mill project.',
  },
];

const nearbyAreas = [
  { name: 'Tega Cay', desc: 'Custom homes and lakefront construction near Lake Wylie' },
  { name: 'Indian Land', desc: 'Rapidly growing area with commercial and residential opportunities' },
  { name: 'Rock Hill', desc: 'Commercial construction and revitalization projects in downtown Rock Hill' },
  { name: 'Pineville', desc: 'Retail upfits and commercial builds near Carolina Place' },
  { name: 'South Charlotte', desc: 'Ballantyne, Blakeney, and South Charlotte commercial projects', href: '/areas/south-charlotte' },
  { name: 'Lake Norman', desc: 'Lakefront custom homes and commercial construction north of Charlotte', href: '/areas/lake-norman' },
];

export default function FortMillPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <PageHero
        title="Construction Company Fort Mill SC"
        subtitle="Licensed SC general contractor serving Fort Mill, Tega Cay, and York County — commercial construction, custom homes, upfits & more"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas/fort-mill-sc' },
              { label: 'Fort Mill, SC' },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                General Contractor Serving Fort Mill, South Carolina
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a licensed South Carolina general contractor proudly serving Fort Mill
                and the greater York County area. Located just minutes from the NC-SC state line
                along the I-77 corridor, our Charlotte-based team brings over 60 years of combined
                construction experience to every Fort Mill project. As a veteran and family-owned{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contracting company
                </Link>
                , we understand that Fort Mill property owners and business leaders demand
                exceptional quality, transparent communication, and reliable project delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fort Mill has experienced extraordinary growth over the past two decades,
                transforming from a quiet mill town into one of the most sought-after communities in
                the Charlotte metropolitan area. The population has more than tripled since 2000,
                driven by excellent schools in the Fort Mill School District, proximity to
                Charlotte&apos;s job market, a favorable South Carolina tax environment, and
                world-class master-planned communities like Baxter and Tega Cay. This growth has
                created tremendous demand for quality{' '}
                <Link
                  href="/services/commercial-construction"
                  className="text-primary hover:underline"
                >
                  commercial construction
                </Link>
                , professional office upfits, and custom residential builds throughout the area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are a business owner looking to build out a new retail space along
                Carowinds Boulevard, an entrepreneur opening a fitness studio or medical practice in
                one of Fort Mill&apos;s growing commercial districts, or a family ready to build a
                custom home in Baxter Village or near Lake Wylie, We Build delivers the
                craftsmanship, professionalism, and attention to detail that Fort Mill&apos;s
                discerning community expects. Our headquarters at 14330 S Lakes Drive in Charlotte
                is approximately 20 minutes north of Fort Mill via I-77, which means our project
                managers and skilled crews are never far from your job site.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Serving Fort Mill from Charlotte</p>
                  <p className="text-sm text-muted-foreground">
                    14330 S Lakes Drive, Charlotte NC 28273 — approximately 20 minutes from Fort
                    Mill via I-77
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:5627086616">
                    <Phone className="mr-2 h-5 w-5" />
                    (562) 708-6616
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {services.map((s) => (
                <Card key={s.title} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <Link href={s.href} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Fort Mill */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Construction Services in Fort Mill, SC
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              We Build offers a comprehensive range of construction services for Fort Mill
              businesses and homeowners. From large-scale{' '}
              <Link
                href="/services/commercial-construction"
                className="text-primary hover:underline"
              >
                commercial construction
              </Link>{' '}
              projects to intimate{' '}
              <Link
                href="/services/residential-additions"
                className="text-primary hover:underline"
              >
                residential additions
              </Link>
              , every project receives the same level of dedication, quality materials, and
              experienced project management.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill&apos;s commercial real estate market continues to expand as businesses
                  relocate to York County seeking lower taxes and access to the Charlotte talent
                  pool. We Build provides full-service{' '}
                  <Link
                    href="/services/commercial-construction"
                    className="text-primary hover:underline"
                  >
                    commercial construction
                  </Link>{' '}
                  for Fort Mill, including ground-up office buildings, retail centers, medical
                  facilities, industrial warehouses, and mixed-use developments. Our commercial
                  construction process begins with thorough site evaluation and pre-construction
                  planning, moves through permitting and foundation work, and continues with
                  structural framing, mechanical systems installation, interior finishing, and final
                  inspections. We coordinate with architects, engineers, and subcontractors to
                  deliver projects on schedule and within budget, adhering to all York County
                  commercial building codes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Paintbrush className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Upfits
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are leasing a new commercial space or renovating an existing one,{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    commercial upfits
                  </Link>{' '}
                  are one of our core specialties in the Fort Mill market. An upfit — also called a
                  tenant improvement or buildout — transforms a bare or outdated commercial space
                  into a fully functional environment tailored to your business needs. Our Fort Mill
                  upfit work includes demolition of existing layouts, new partition walls, electrical
                  and data wiring, HVAC modifications, plumbing for restrooms and kitchens, flooring
                  installation, custom millwork, and ADA-compliant accessibility features. Our Pure
                  Physique project in Fort Mill is a prime example of our upfit capabilities,
                  demonstrating our ability to handle complex commercial transformations with
                  precision and quality.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary" aria-hidden="true" />
                  Custom Home Building
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill offers some of the finest residential communities in the Charlotte
                  metro, and We Build helps families bring their dream homes to life. As an
                  experienced{' '}
                  <Link
                    href="/services/custom-home-builder"
                    className="text-primary hover:underline"
                  >
                    custom home builder
                  </Link>
                  , we guide clients through every phase of the custom home process — from initial
                  lot evaluation and architectural planning through material selection at our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>{' '}
                  to final construction, landscaping, and move-in. We build in Baxter Village, Tega
                  Cay lakefront communities, Waterside at Lake Wylie, Massey, and other York County
                  neighborhoods. Our custom homes feature quality framing, energy-efficient systems,
                  premium fixtures, and the personalized finishes that make a house truly yours.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
                  Residential Additions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many Fort Mill homeowners love their neighborhoods but need more space. Our{' '}
                  <Link
                    href="/services/residential-additions"
                    className="text-primary hover:underline"
                  >
                    residential additions
                  </Link>{' '}
                  service allows you to expand your home without the disruption and cost of moving.
                  We design and build room additions, second-story expansions, sunrooms, garage
                  conversions, and in-law suites that blend seamlessly with your existing
                  architecture. Every addition project in Fort Mill requires careful attention to
                  York County setback requirements, structural load calculations, and matching
                  exterior materials to maintain your home&apos;s aesthetic consistency. We handle
                  all permitting and inspections to ensure your addition meets code and adds lasting
                  value to your property.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                  Roof Coating
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill&apos;s commercial building owners face significant costs when roof
                  systems deteriorate. Our{' '}
                  <Link href="/services/roof-coating" className="text-primary hover:underline">
                    commercial roof coating
                  </Link>{' '}
                  service through{' '}
                  <Link href="/we-coat" className="text-primary hover:underline">
                    We Coat
                  </Link>{' '}
                  provides a cost-effective alternative to full roof replacement, extending the life
                  of your existing commercial roof by 10-20 years. Our elastomeric and silicone
                  coating systems create a seamless, waterproof membrane over your existing roof
                  substrate, reflecting UV radiation to reduce cooling costs and protecting against
                  the intense Carolina sun, heavy rain, and temperature fluctuations that Fort Mill
                  experiences throughout the year. This service is ideal for flat and low-slope
                  commercial roofs on warehouses, office buildings, retail centers, and industrial
                  facilities throughout York County.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Ruler className="h-6 w-6 text-primary" aria-hidden="true" />
                  Design-Build
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our{' '}
                  <Link href="/services/design-build" className="text-primary hover:underline">
                    design-build
                  </Link>{' '}
                  approach combines architectural design and construction under one contract,
                  providing Fort Mill clients with a streamlined project delivery method that saves
                  time and money. Instead of hiring separate architects, engineers, and contractors —
                  and managing the communication between them — our design-build process gives you a
                  single point of contact from concept through completion. This method typically
                  reduces project timelines by 20-30% and costs by 10-15% compared to the
                  traditional design-bid-build approach. For Fort Mill business owners and
                  homeowners who value efficiency and accountability, design-build is often the
                  smartest path forward. Visit our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>{' '}
                  to explore materials and finishes in person.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Mill Commercial Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Commercial Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Fort Mill Commercial Construction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fort Mill&apos;s commercial construction landscape has evolved dramatically as the
              town has grown from a small York County community into a thriving commercial hub.
              Major employers, retailers, restaurants, and service businesses continue to establish
              operations in Fort Mill, drawn by the strategic location along I-77 between Charlotte
              and Rock Hill, favorable South Carolina business taxes, and a growing residential
              population that provides both workforce and customer base.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Office Parks & Professional Space</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill&apos;s office market has expanded significantly along the I-77 corridor,
                  with professional office parks, medical offices, and corporate campuses providing
                  opportunities for{' '}
                  <Link
                    href="/services/commercial-construction"
                    className="text-primary hover:underline"
                  >
                    commercial construction
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    upfit projects
                  </Link>
                  . Businesses leasing space in these developments often require customized buildouts
                  to match their operational needs, from open-concept tech offices to private medical
                  examination rooms and professional service suites.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Retail on Carowinds Boulevard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Carowinds Boulevard serves as Fort Mill&apos;s primary retail corridor,
                  connecting the town to the Carowinds amusement park and the North Carolina state
                  line. This high-traffic area features shopping centers, restaurants, hotels, and
                  service businesses that frequently require new construction and tenant upfits. The
                  retail development along this corridor creates ongoing demand for commercial
                  construction services, from restaurant buildouts to retail showroom fit-outs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Kingsley Town Center & Baxter Village</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kingsley Town Center and Baxter Village represent Fort Mill&apos;s vision for
                  walkable, mixed-use development. These areas combine residential housing with
                  commercial retail, dining, and professional office space. Commercial construction
                  in these districts requires careful attention to architectural guidelines, material
                  standards, and community design requirements that maintain the character of these
                  planned communities. We Build has the experience to navigate these design
                  standards while delivering quality commercial spaces.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Industrial & I-77 Corridor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill&apos;s industrial sector benefits from excellent interstate access and
                  proximity to Charlotte Douglas International Airport. Warehousing, distribution
                  centers, light manufacturing, and flex space developments along the I-77 corridor
                  represent significant commercial construction opportunities. These projects often
                  involve large-scale metal building construction, concrete work, loading dock
                  systems, and specialized mechanical and electrical installations that require an
                  experienced{' '}
                  <Link
                    href="/services/general-contractor"
                    className="text-primary hover:underline"
                  >
                    general contractor
                  </Link>{' '}
                  with commercial building expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Mill Residential Construction */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Residential Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Fort Mill Residential Construction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fort Mill&apos;s residential market ranks among the most active in the Carolinas,
              consistently attracting families relocating from across the country for the area&apos;s
              top-rated schools, safe neighborhoods, and convenient access to Charlotte. While
              large-scale tract home development handles much of the demand, there remains strong
              interest in{' '}
              <Link
                href="/services/custom-home-builder"
                className="text-primary hover:underline"
              >
                custom-built homes
              </Link>{' '}
              that reflect individual family needs, architectural preferences, and premium
              craftsmanship. We Build specializes in this custom home market, delivering
              one-of-a-kind residences throughout Fort Mill&apos;s finest communities.
            </p>

            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 space-y-3">
                <h3 className="text-xl font-bold">Tega Cay & Lake Wylie Waterfront</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tega Cay, a peninsula city on Lake Wylie just minutes from Fort Mill, offers some
                  of the most desirable lakefront homesites in York County. Custom home construction
                  on Lake Wylie requires specialized knowledge of waterfront building codes,
                  shoreline setback requirements, dock permitting, and erosion control measures. The
                  Waterside at Lake Wylie community and surrounding lakefront lots provide excellent
                  opportunities for families seeking custom lakefront living with easy access to Fort
                  Mill schools and amenities.
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 space-y-3">
                <h3 className="text-xl font-bold">Baxter Village & Baxter</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Baxter is one of Fort Mill&apos;s signature master-planned communities, offering a
                  new-urbanist design with tree-lined streets, village-style commercial centers, and
                  diverse housing options. Custom lots and infill opportunities in the Baxter area
                  allow buyers to build homes that complement the community&apos;s architectural
                  character while incorporating personalized design features, energy-efficient
                  systems, and premium interior finishes selected at our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-background rounded-lg p-6 space-y-3">
                <h3 className="text-xl font-bold">Fort Mill Neighborhoods & Lot Availability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond the major master-planned communities, Fort Mill offers custom home
                  opportunities in established neighborhoods, rural acreage parcels along Highway
                  160 and Pleasant Road, and newer subdivisions with available lots. York County
                  continues to approve new residential developments, and scattered individual lots
                  become available throughout the area. We Build helps clients evaluate potential
                  building sites for soil conditions, utility access, topography, and zoning
                  compatibility before purchase, ensuring your lot can support the home you envision.
                  Our{' '}
                  <Link
                    href="/services/residential-additions"
                    className="text-primary hover:underline"
                  >
                    residential additions
                  </Link>{' '}
                  service is also popular among Fort Mill homeowners who want to expand their current
                  homes rather than relocate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Mill Construction Market */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Market Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Fort Mill Construction Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fort Mill&apos;s construction market reflects the broader economic momentum driving
              York County and the Charlotte metropolitan area. Understanding the local market
              conditions, regulatory environment, and development trends helps property owners and
              investors make informed decisions about their construction projects.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">3x</p>
                  <p className="text-sm text-muted-foreground">
                    Population growth since 2000 — Fort Mill is one of SC&apos;s fastest-growing
                    towns
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">$2B+</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated commercial and residential development investment in the Fort Mill area
                    over the past decade
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">1,000+</p>
                  <p className="text-sm text-muted-foreground">
                    New residential permits issued annually in the Fort Mill and Tega Cay area
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Growth & New Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill continues to attract residential and commercial development at a pace
                  that outstrips most South Carolina communities. New subdivisions, commercial
                  centers, and mixed-use projects are announced regularly, driven by the
                  area&apos;s school system reputation, proximity to Charlotte, and relatively
                  affordable land compared to Mecklenburg County. The Catawba Indian Nation&apos;s
                  economic development along the I-77 corridor has added entertainment, hospitality,
                  and commercial facilities to the area, further accelerating growth. For
                  construction companies, this growth translates into sustained demand for both new
                  builds and renovation projects.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Zoning & Land Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fort Mill&apos;s zoning and land use regulations are administered by the Town of
                  Fort Mill Planning Department for properties within town limits, and by York
                  County for unincorporated areas. Commercial projects must comply with zoning
                  designations that dictate allowable uses, building heights, setbacks, parking
                  requirements, and signage. Residential zoning categories determine lot sizes,
                  density, and building envelope constraints. As your general contractor, We Build
                  works closely with local planning departments to ensure your project meets all
                  zoning requirements and navigates the approval process efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">York County Building Codes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  York County enforces the International Building Code (IBC) for commercial
                  construction and the International Residential Code (IRC) for residential
                  projects, along with the National Electrical Code (NEC), International Plumbing
                  Code (IPC), and International Mechanical Code (IMC). South Carolina also requires
                  compliance with state energy codes and wind load requirements. Understanding and
                  navigating these codes is essential for a smooth construction process, and our
                  team&apos;s experience with York County inspectors and code requirements helps
                  prevent costly delays and rework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Why Choose We Build for Your Fort Mill Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Choosing the right{' '}
              <Link
                href="/services/general-contractor"
                className="text-primary hover:underline"
              >
                general contractor
              </Link>{' '}
              is one of the most important decisions you will make for your Fort Mill construction
              project. The wrong choice can lead to budget overruns, schedule delays, code
              violations, and subpar workmanship that costs far more to fix than it would have cost
              to do right the first time. We Build brings a combination of licensing, proximity,
              experience, and values that makes us the right partner for Fort Mill property owners.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <item.icon
                      className="h-8 w-8 text-primary mb-3"
                      aria-hidden="true"
                    />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a veteran and family-owned business, We Build operates with the integrity,
                discipline, and commitment to excellence that define both military service and
                family values. We treat every Fort Mill project — whether a multi-million-dollar
                commercial development or a home addition — with the same level of professionalism
                and care. Our team communicates proactively, delivers transparent pricing with no
                hidden fees, and stands behind our work with solid warranties. We invite you to
                visit our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  project portfolio
                </Link>{' '}
                to see examples of our completed work, or{' '}
                <Link href="/about" className="text-primary hover:underline">
                  learn more about our company
                </Link>{' '}
                and the team that will be managing your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Spotlight */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Fort Mill Project Spotlight
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              Pure Physique Commercial Upfit — Fort Mill, SC
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-secondary-foreground/90 leading-relaxed">
                  The Pure Physique project exemplifies We Build&apos;s approach to{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    commercial upfit
                  </Link>{' '}
                  construction in Fort Mill. The client needed to transform a raw commercial shell
                  into a premium fitness facility that would serve the Fort Mill community. The
                  project required careful planning to accommodate specialized equipment loads,
                  open training spaces, private consultation areas, and modern amenities.
                </p>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  Our team delivered a complete interior buildout including structural
                  modifications to support heavy fitness equipment, custom flooring systems designed
                  for high-impact athletic use, upgraded HVAC capacity to handle the increased
                  ventilation demands of a fitness facility, new electrical systems with dedicated
                  circuits for commercial equipment, plumbing for restrooms and a hydration station,
                  and custom interior finishes that reflect the Pure Physique brand identity.
                </p>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  The project was completed on schedule and within budget, demonstrating our ability
                  to manage complex commercial upfits in the Fort Mill market. From initial
                  consultation through final walkthrough, the Pure Physique team received proactive
                  communication, transparent cost management, and the quality craftsmanship that We
                  Build is known for across the Charlotte region.
                </p>
              </div>

              <div className="space-y-6">
                <blockquote className="text-xl leading-relaxed italic border-l-4 border-primary pl-6">
                  &quot;We Build transformed our vision into reality. Their attention to detail and
                  commitment to quality exceeded our expectations. The team was professional,
                  communicative, and delivered on time and within budget.&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">PP</span>
                  </div>
                  <div>
                    <div className="font-semibold">Pure Physique</div>
                    <div className="text-sm text-secondary-foreground/70">
                      Commercial Upfit — Fort Mill, SC
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wider">
                    Project Details
                  </h4>
                  <ul className="text-sm text-secondary-foreground/80 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      Full commercial shell-to-finish upfit
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      Structural modifications for equipment loads
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      Specialized flooring and HVAC systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      On-time, on-budget delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      Custom interior branding and finishes
                    </li>
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/portfolio">
                    View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* York County Building Permits & Codes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Permits & Regulations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              York County Building Permits & Codes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Navigating the building permit process is a critical part of any construction project
              in Fort Mill. York County&apos;s Building Codes and Permits Department oversees all
              construction permitting for the unincorporated areas of the county, while the Town of
              Fort Mill handles permits within town limits. As your{' '}
              <Link
                href="/services/general-contractor"
                className="text-primary hover:underline"
              >
                general contractor
              </Link>
              , We Build manages the entire permitting process on your behalf, from initial
              application through final certificate of occupancy.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">The Permit Process</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Fort Mill and York County building permit process typically follows these
                  steps: pre-application consultation with the planning department, submission of
                  construction plans and engineering documents, plan review by the building
                  department (typically 2-4 weeks for residential, 4-8 weeks for commercial),
                  permit issuance, construction with scheduled inspections at each major milestone,
                  and final inspection leading to certificate of occupancy. Commercial projects may
                  also require site plan approval, stormwater management permits, fire marshal
                  review, and health department approvals depending on the intended use.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Required Inspections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  York County requires inspections at multiple stages of construction to verify
                  code compliance. Typical inspection milestones include foundation and footing
                  inspection, framing and structural inspection, rough electrical inspection, rough
                  plumbing inspection, rough mechanical/HVAC inspection, insulation inspection,
                  and final inspection before occupancy. Commercial projects may require additional
                  specialized inspections including fire suppression systems, commercial kitchen
                  equipment, elevator installations, and accessibility compliance. Our project
                  managers schedule all inspections proactively and address any findings immediately
                  to keep your project on schedule.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Special Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certain Fort Mill construction projects have additional requirements beyond
                  standard building permits. Properties in flood zones require elevation
                  certificates and flood-resistant construction methods. Projects near streams and
                  wetlands must comply with buffer zone regulations. Commercial developments
                  typically require stormwater management plans and may need South Carolina DHEC
                  land disturbance permits for sites over one acre. Renovations to historic
                  structures in downtown Fort Mill may require historic preservation review.
                  Homeowners associations in communities like Baxter and Tega Cay have their own
                  architectural review processes that must be completed before construction begins.
                  We Build navigates all of these requirements as part of our comprehensive project
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Near Fort Mill We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Areas Near Fort Mill We Serve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              While Fort Mill is a key market for We Build, our service area extends throughout
              the Charlotte metropolitan region on both sides of the state line. Our dual NC-SC
              licensing means we handle projects seamlessly whether your property is in York
              County, Mecklenburg County, or anywhere in between. Here are the communities near
              Fort Mill where we regularly complete construction projects.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyAreas.map((area) => (
                <Card key={area.name}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold mb-1">
                          {area.href ? (
                            <Link href={area.href} className="hover:text-primary transition-colors">
                              {area.name}
                            </Link>
                          ) : (
                            area.name
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground">{area.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mt-8">
              No matter where your project is located in the greater Charlotte-Fort Mill region, We
              Build provides the same level of quality, communication, and project management
              that has earned us a reputation as one of the area&apos;s most trusted construction
              companies. We also serve the Lake Wylie corridor, Ballantyne, Waxhaw, and
              communities throughout Union County, Gaston County, and Lancaster County.{' '}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{' '}
              to discuss your project location and we will confirm our availability for your area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm text-center block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Fort Mill Construction FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Answers to common questions about construction services, permitting, costs, and
              timelines for Fort Mill and York County projects.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build in Fort Mill?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need a commercial buildout on Carowinds Boulevard, a custom home in
            Baxter, or a roof coating for your Fort Mill warehouse, We Build is your licensed SC
            general contractor with the experience to deliver.
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on your Fort Mill construction
            project. Our team will schedule a site visit, discuss your goals, and provide a
            detailed proposal with transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
        </div>
      </section>
    </>
  );
}
