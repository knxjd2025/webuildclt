import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';
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
  Factory,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construction Company Dearborn MI | Commercial Contractor Metro Detroit',
  description:
    'Looking for a contractor near me in Dearborn MI? Licensed general contractor serving Dearborn & Metro Detroit. Commercial construction, office buildouts, tenant improvements, industrial facilities, warehouse builds, roof coating & design-build. Veteran & family-owned. Michigan licensed. Free estimates.',
  keywords: [
    'construction company dearborn mi',
    'general contractor dearborn michigan',
    'commercial contractor dearborn',
    'contractor near me dearborn',
    'construction companies near me',
    'dearborn commercial construction',
    'dearborn remodeling contractor',
    'licensed contractor MI',
    'commercial construction dearborn',
    'contractor metro detroit',
    'dearborn renovation contractor',
    'commercial upfit dearborn mi',
    'office buildout dearborn michigan',
    'tenant improvement dearborn',
    'warehouse construction dearborn',
    'construction company near me dearborn',
    'general contractor near me metro detroit',
    'commercial construction Dearborn MI',
    'tenant improvement Dearborn',
    'office buildout Dearborn',
    'medical construction Dearborn',
    'restaurant construction Dearborn MI',
    'industrial construction Wayne County MI',
    'general contractor Wayne County Michigan',
    'commercial contractor dearborn heights',
    'lara contractor license michigan',
    'michigan licensed general contractor dearborn',
    'ford road commercial construction',
    'michigan avenue dearborn contractor',
    'henry ford health system construction',
    'um dearborn construction contractor',
  ],
  openGraph: {
    title: 'Construction Company Dearborn MI | Commercial Contractor Metro Detroit | We Build',
    description:
      'Licensed Michigan general contractor serving Dearborn & Metro Detroit. Commercial construction, office buildouts, tenant improvements & roof coating. Veteran & family-owned. Free estimates.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://webuildclt.com/areas/dearborn',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    desc: 'Ground-up commercial builds, office complexes, retail centers, and mixed-use developments throughout Dearborn and Wayne County.',
    href: '/services/commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    desc: 'Transform existing commercial spaces in Dearborn with expert tenant upfits, office renovations, and retail buildouts along Michigan Avenue and Ford Road.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Wrench,
    title: 'Tenant Improvements',
    desc: 'Office buildouts and tenant improvements for Dearborn businesses in the Fairlane district, downtown, and West Dearborn commercial corridors.',
    href: '/services/tenant-improvements',
  },
  {
    icon: Factory,
    title: 'Industrial Construction',
    desc: 'Warehouses, manufacturing facilities, and automotive supplier buildings serving Dearborn\u2019s industrial heritage and Metro Detroit\u2019s manufacturing sector.',
    href: '/services/industrial-construction',
  },
  {
    icon: Shield,
    title: 'Roof Coating',
    desc: 'Commercial roof restoration and protective coating systems for Dearborn building owners, extending roof life by 10-20 years against Michigan winters.',
    href: '/services/roof-coating',
  },
  {
    icon: Ruler,
    title: 'Design-Build',
    desc: 'Streamlined single-source design and construction for Dearborn commercial projects from concept to completion, saving 10-15% over traditional methods.',
    href: '/services/design-build',
  },
  {
    icon: Hammer,
    title: 'Medical Construction',
    desc: 'Healthcare facility buildouts and medical office construction for Henry Ford Health System partners and independent medical practices across Dearborn and Wayne County.',
    href: '/services/medical-construction',
  },
  {
    icon: Home,
    title: 'Restaurant Construction',
    desc: "Full restaurant buildouts on Michigan Ave, Ford Road, and Warren Ave — Dearborn's thriving Arab-American restaurant corridor. We handle kitchen equipment, hood systems, HVAC, and code compliance.",
    href: '/services/restaurant-construction',
  },
];

const commercialAreas = [
  {
    name: 'Ford Road Corridor',
    desc: 'Dearborn\u2019s busiest commercial corridor with national retailers, restaurants, medical offices, and service businesses. High-traffic retail upfits and restaurant buildouts are in constant demand along this major thoroughfare.',
  },
  {
    name: 'Michigan Avenue / Downtown Dearborn',
    desc: 'Historic downtown Dearborn along Michigan Avenue features mixed-use redevelopment, boutique retail, restaurants, and professional offices. Adaptive reuse and renovation projects are revitalizing this walkable urban core.',
  },
  {
    name: 'Fairlane Town Center Area',
    desc: 'Major retail and business hub surrounding the Fairlane Town Center, home to corporate offices, hotels, and retail developments. Office buildouts and commercial renovations are a primary construction need in this district.',
  },
  {
    name: 'Dearborn Village',
    desc: 'Charming commercial district with small businesses, restaurants, and retail shops requiring boutique-scale commercial upfits, storefront renovations, and ADA compliance upgrades.',
  },
  {
    name: 'West Dearborn',
    desc: 'Residential and neighborhood commercial area with medical offices, professional service firms, and community-serving retail requiring tenant improvements and light commercial construction.',
  },
  {
    name: 'Warren Avenue / Arab-American Business District',
    desc: "Dearborn is home to the largest Arab-American community in the United States. Warren Avenue and nearby corridors feature a dense concentration of restaurants, bakeries, grocers, and professional services — creating constant demand for restaurant construction, retail upfits, and storefront renovations.",
  },
  {
    name: 'Henry Ford Health System Corridor',
    desc: 'Henry Ford Health operates major hospital and outpatient facilities in and around Dearborn. The surrounding medical district generates ongoing medical office construction, clinical buildouts, and healthcare facility renovation projects requiring specialized mechanical, electrical, and plumbing systems.',
  },
];

const neighborhoods = [
  'Dearborn',
  'Dearborn Heights',
  'Allen Park',
  'Melvindale',
  'Inkster',
];

const businessDistricts = [
  {
    name: 'Ford Motor Company Campus Area',
    desc: 'The epicenter of Dearborn\u2019s economy. Supplier facilities, professional service offices, and hospitality venues serving the Ford ecosystem require specialized commercial construction. Office buildouts $70-150 per square foot.',
  },
  {
    name: 'Fairlane Business District',
    desc: 'Corporate offices, hotels, and mixed-use developments surrounding Fairlane Town Center. Commercial renovation and tenant improvement projects are the primary construction activity. Upfits $60-130 per square foot.',
  },
  {
    name: 'Michigan Avenue Corridor',
    desc: 'Historic commercial corridor undergoing revitalization with mixed-use projects, restaurant buildouts, and retail renovations. Adaptive reuse projects range $120-280 per square foot.',
  },
  {
    name: 'Ford Road Retail Corridor',
    desc: 'Dearborn\u2019s primary retail strip with constant turnover creating demand for commercial upfits, restaurant construction, and retail buildouts. Retail upfits typically $50-150 per square foot.',
  },
  {
    name: 'Automotive Supplier District',
    desc: 'Industrial and light manufacturing facilities serving Detroit\u2019s automotive sector. Specialized construction for clean rooms, testing labs, and precision manufacturing environments. Industrial construction $90-200 per square foot.',
  },
  {
    name: 'UM-Dearborn / Education District',
    desc: 'University of Michigan-Dearborn campus area with educational, research, and student-serving commercial developments. Institutional and mixed-use construction serving the academic community.',
  },
];

const whyChooseUs = [
  {
    icon: HardHat,
    title: 'Veteran & Family-Owned',
    desc: 'Military discipline and family values drive every project. We bring the same integrity, accountability, and work ethic to Dearborn that built our reputation in Charlotte.',
  },
  {
    icon: MapPin,
    title: 'Charlotte + Detroit Dual Market',
    desc: 'With operations in both Charlotte, NC and Metro Detroit, we bring cross-market expertise. Our national perspective delivers best practices from two of America\u2019s most active construction markets.',
  },
  {
    icon: Shield,
    title: 'Michigan Licensed',
    desc: 'Fully licensed general contractor in Michigan with comprehensive insurance coverage. We meet all Wayne County and City of Dearborn requirements for commercial and residential construction.',
  },
  {
    icon: Star,
    title: 'Drone Inspections',
    desc: 'Advanced drone-based roof assessments, site surveys, and progress documentation. Get accurate measurements and detailed aerial imagery before construction begins.',
  },
  {
    icon: Users,
    title: 'USGBC Member',
    desc: 'As a U.S. Green Building Council member, we bring sustainable building knowledge and energy-efficient construction to every Dearborn project — important for Michigan\u2019s harsh climate.',
  },
  {
    icon: FileText,
    title: 'Full Permit Management',
    desc: 'We handle all Wayne County and City of Dearborn building permits, inspections, and code compliance from application through certificate of occupancy.',
  },
];

const faqs = [
  {
    question: 'What does commercial construction cost in Dearborn, MI?',
    answer:
      'Commercial construction costs in Dearborn vary by project type and complexity. Office buildouts and tenant improvements typically cost $60-150 per square foot. Ground-up commercial construction ranges from $150 to $350+ per square foot depending on the building type and finishes. Industrial and warehouse construction runs $90-200 per square foot. Restaurant and medical facility buildouts range $120-250 per square foot. We provide free, detailed estimates after an on-site consultation so you know exact costs before any work begins.',
  },
  {
    question: 'Are you licensed to work in Dearborn and Michigan?',
    answer:
      'Yes. We Build holds active general contractor licensing in Michigan, in addition to our North Carolina and South Carolina licenses. Our Michigan licensing covers the full scope of general contracting including commercial construction, residential builds, tenant improvements, industrial facilities, and specialty work like roof coating throughout Dearborn, Wayne County, and Metro Detroit. We maintain all required insurance and bonding for Michigan projects.',
  },
  {
    question: 'How do building permits work in Dearborn?',
    answer:
      'Construction permits in Dearborn are issued by the City of Dearborn Building Department. Most projects require building permits including new construction, significant renovations, tenant improvements, electrical work, plumbing modifications, and structural changes. Plan review typically takes 2-4 weeks for residential and 4-8 weeks for commercial projects. Dearborn follows the Michigan Building Code, which is based on the International Building Code (IBC). As your general contractor, We Build handles the entire permitting and inspection process on your behalf.',
  },
  {
    question: 'Do you do construction work for automotive industry clients?',
    answer:
      'Yes. Dearborn is the headquarters of Ford Motor Company, and the Metro Detroit area is home to thousands of automotive suppliers, engineering firms, and related businesses. We Build provides commercial construction services for automotive industry clients including office buildouts, testing lab construction, clean room facilities, supplier manufacturing spaces, and showroom builds. Our experience with precision commercial construction translates well to the quality standards automotive companies expect.',
  },
  {
    question: 'How long does a typical commercial project take in Dearborn?',
    answer:
      'Project timelines in Dearborn depend on scope and complexity. A standard office tenant improvement under 5,000 square feet typically takes 6-10 weeks. Larger commercial upfits and restaurant buildouts run 10-16 weeks. Ground-up commercial construction ranges from 8-18 months depending on the building size and systems involved. Michigan\u2019s winter weather can affect exterior work schedules from December through March, so we plan accordingly and focus interior work during cold months. We provide detailed project schedules during the planning phase.',
  },
  {
    question: 'What is the difference between Michigan and North Carolina construction requirements?',
    answer:
      'Michigan and North Carolina both follow International Building Code standards, but there are key differences. Michigan has stricter energy code requirements due to the colder climate, requiring higher insulation values, more efficient HVAC systems, and frost-depth footings (42 inches in Wayne County versus 12 inches in Charlotte). Michigan also has snow load requirements for roof design and different seismic design categories. Our dual-market experience means we understand both states\u2019 requirements and can bring best practices from each market to your Dearborn project.',
  },
  {
    question: 'Why would I hire a Charlotte-based contractor for a Dearborn project?',
    answer:
      'We Build has expanded to Metro Detroit with full Michigan licensing and local project management capabilities. Our Charlotte + Detroit dual-market presence is an advantage, not a limitation. We bring national-scale experience, cross-market best practices, and the financial stability of a multi-market contractor. Our Dearborn projects receive the same hands-on project management, quality craftsmanship, and transparent communication that built our reputation in the Charlotte metro area. We maintain local crews and subcontractor relationships in Metro Detroit.',
  },
  {
    question: 'Do you offer roof coating services in Dearborn?',
    answer:
      'Yes. Our commercial roof coating service through We Coat is particularly valuable in Michigan where harsh winters, freeze-thaw cycles, and heavy snow loads accelerate roof deterioration. Our elastomeric and silicone coating systems extend the life of existing commercial roofs by 10-20 years at a fraction of full replacement cost. We use drone inspections for accurate roof assessments before recommending solutions. Roof coating is ideal for flat and low-slope commercial roofs on warehouses, office buildings, retail centers, and industrial facilities throughout Dearborn and Metro Detroit.',
  },
  {
    question: 'What areas near Dearborn do you serve?',
    answer:
      'In addition to Dearborn, we serve Dearborn Heights, Allen Park, Melvindale, Inkster, Detroit, Southfield, Livonia, Westland, Garden City, and the broader Metro Detroit region in Wayne County. We also serve Oakland County communities including Troy, Royal Oak, and Farmington Hills. Contact us to discuss your project location and we will confirm our availability.',
  },
  {
    question: 'How do I get a construction estimate for my Dearborn project?',
    answer:
      'Getting a free estimate from We Build is straightforward. Call us at (704) 574-8124 or fill out our online contact form. We will schedule an on-site consultation at your Dearborn property to review your project scope, take measurements, discuss your timeline and budget, and answer any questions. Within 5-10 business days you will receive a detailed, itemized proposal with transparent pricing. There is no obligation, and we never pressure clients into signing.',
  },
  {
    question: 'How do construction costs in Dearborn compare to nearby cities like Southfield or Livonia?',
    answer:
      'Dearborn construction costs are generally comparable to Southfield and Livonia, though specific factors create variations. Office buildouts in Dearborn average $60 to $150 per square foot, similar to Livonia. Southfield commercial spaces in the Town Center area may run slightly higher due to premium finish expectations. The City of Dearborn permitting process is well-organized, which can reduce soft costs compared to some neighboring municipalities. We Build provides location-specific estimates that account for municipal fee differences, zoning requirements, and local market conditions across Wayne County.',
  },
  {
    question: 'Can We Build handle construction near the Ford campus and Michigan Avenue corridor in Dearborn?',
    answer:
      'Yes. We Build serves all of Dearborn including the Michigan Avenue commercial corridor, the Ford Road retail district, the area surrounding Ford Motor Company headquarters, and the emerging mixed-use developments near Wagner Place. Projects along Michigan Avenue often involve tenant improvements for retail and restaurant spaces with specific City of Dearborn facade and signage requirements. Our team coordinates with the Dearborn planning department to ensure projects comply with the corridor improvement standards and any overlay district regulations that apply.',
  },
  {
    question: 'Does We Build offer green building or energy-efficient construction in Dearborn?',
    answer:
      'Yes. As a U.S. Green Building Council (USGBC) member, We Build provides sustainable construction options for Dearborn commercial projects. Michigan energy codes already require higher insulation values and more efficient mechanical systems than many states, and we go further with options like high-performance building envelopes, energy recovery ventilation, and LED lighting systems. Green building upgrades are especially cost-effective in Dearborn where harsh winters drive significant heating expenses. We help clients reduce long-term operating costs while meeting sustainability goals.',
  },
];

const areaPages = [
  { name: 'Detroit, MI', href: '/areas/detroit' },
  { name: 'South Charlotte', href: '/areas/south-charlotte' },
  { name: 'Lake Norman', href: '/areas/lake-norman' },
  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc' },
  { name: 'Rock Hill, SC', href: '/areas/rock-hill-sc' },
  { name: 'Huntersville', href: '/areas/huntersville' },
];

export default function DearbornPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs), breadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Service Areas' },
        { label: 'Dearborn' },
      ])]} />

      <PageHero
        title="Construction Company Dearborn MI"
        subtitle="Licensed Michigan general contractor serving Dearborn, Wayne County & Metro Detroit — commercial construction, office buildouts, tenant improvements & roof coating"
        backgroundImage="/images/hero-bg.jpg"
      />

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: 'Areas', href: '/areas/dearborn' },
              { label: 'Dearborn, MI' },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Contractor Serving Dearborn, Michigan
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a licensed Michigan general contractor providing commercial
                construction, tenant improvements, office buildouts, roof coating, and design-build
                services throughout Dearborn and Metro Detroit. We are a veteran and family-owned
                company expanding from our Charlotte, NC headquarters to serve the Metro Detroit
                market with the same quality, transparency, and professionalism.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dearborn is home to Ford Motor Company&apos;s world headquarters and the University
                of Michigan-Dearborn, making it one of Metro Detroit&apos;s most important economic
                centers. With a population of approximately 110,000, Dearborn features a diverse mix
                of automotive industry offices, healthcare facilities, retail corridors, hospitality
                venues, and residential neighborhoods. The city&apos;s{' '}
                <Link
                  href="/services/commercial-construction"
                  className="text-primary hover:underline"
                >
                  commercial construction
                </Link>{' '}
                market is driven by the Ford ecosystem, university expansion, retail redevelopment
                along Ford Road and Michigan Avenue, and ongoing revitalization of the downtown core.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are an automotive supplier building out office or lab space, a retailer
                opening on Ford Road, a restaurant launching in downtown Dearborn, or a property
                owner seeking commercial{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  roof coating
                </Link>{' '}
                to protect against Michigan winters, We Build delivers the craftsmanship and project
                management that Dearborn&apos;s business community expects. As a{' '}
                <Link href="/services/general-contractor" className="text-primary hover:underline">
                  general contracting company
                </Link>{' '}
                with dual-market operations in Charlotte and Detroit, we bring national-scale
                experience with local accountability.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Headquarters & Michigan Operations</p>
                  <p className="text-sm text-muted-foreground">
                    HQ: 14330 S Lakes Drive, Charlotte NC 28273 — Michigan licensed with local
                    Metro Detroit project management
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
                  <a href="tel:+17045748124">
                    <Phone className="mr-2 h-5 w-5" />
                    (704) 574-8124
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

      {/* Dearborn Economic Context */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Dearborn Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Why Dearborn Is a Major Construction Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dearborn sits at the intersection of several powerful economic forces — automotive
              industry leadership, higher education, a nationally significant cultural community,
              and proximity to Detroit&apos;s urban revitalization. Each driver creates distinct
              commercial construction opportunities.
            </p>

            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  Ford Motor Company HQ & Michigan Central Station
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ford Motor Company&apos;s world headquarters is anchored in Dearborn, making the
                  city the epicenter of the American automotive industry. Ford&apos;s landmark
                  $950 million redevelopment of{' '}
                  <strong>Michigan Central Station</strong> in Detroit — just minutes from Dearborn
                  — is one of the most significant adaptive reuse projects in U.S. history,
                  transforming the historic 1913 depot into a mobility and technology innovation
                  campus. This investment signals the broader Detroit metro revitalization and
                  continues to generate demand for commercial construction, office buildouts, and
                  supplier facility upgrades throughout the Dearborn-Detroit corridor. Automotive
                  suppliers, engineering consultancies, and technology firms serving the Ford
                  ecosystem regularly need office expansions, lab buildouts, and facility
                  renovations near the Ford campus.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  Arab-American Business Community — Warren Ave & Michigan Ave
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dearborn is home to the <strong>largest Arab-American community in the United
                  States</strong>, with a thriving business culture concentrated along Warren
                  Avenue and Michigan Avenue. This community supports hundreds of restaurants,
                  bakeries, specialty grocers, import/export businesses, and professional service
                  firms — creating a constant pipeline of{' '}
                  <Link
                    href="/services/restaurant-construction"
                    className="text-primary hover:underline"
                  >
                    restaurant construction
                  </Link>
                  , retail upfits, storefront renovations, and new commercial construction
                  projects. We Build has the cultural sensitivity and construction expertise to
                  serve business owners in this vibrant community, from small storefront
                  renovations to full restaurant and banquet hall buildouts.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  Henry Ford Health System
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Henry Ford Health System is one of Michigan&apos;s largest healthcare
                  organizations, with major facilities serving Dearborn and the surrounding
                  communities. Healthcare construction is among the most technically demanding
                  sectors, requiring specialized{' '}
                  <Link
                    href="/services/medical-construction"
                    className="text-primary hover:underline"
                  >
                    medical construction
                  </Link>{' '}
                  capabilities including infection control during renovation (ICRA protocols),
                  medical-grade HVAC, specialized plumbing, and compliance with healthcare
                  facility design standards. We Build provides{' '}
                  <Link
                    href="/services/medical-construction"
                    className="text-primary hover:underline"
                  >
                    medical office buildouts
                  </Link>{' '}
                  and clinical renovations for independent practices, specialists, and outpatient
                  facilities in the Dearborn healthcare corridor.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  University of Michigan-Dearborn
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The University of Michigan-Dearborn (UM-Dearborn) campus anchors the
                  Evergreen Road corridor and supports a cluster of student housing, research
                  facilities, and university-serving commercial development. Campus expansion
                  projects, technology lab buildouts, and student-oriented retail and hospitality
                  development near the university create sustained construction demand. The
                  proximity of UM-Dearborn to the Ford Motor Company campus also drives
                  research-oriented commercial construction for engineering and technology
                  partnerships between academia and the automotive industry.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  Fairlane Town Center Area Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Fairlane Town Center is one of Southeast Michigan&apos;s premier retail
                  destinations, anchoring a major commercial corridor that includes corporate
                  office parks, hotels, restaurants, and service businesses. Commercial
                  development around Fairlane continues to evolve with mixed-use projects,
                  hotel renovations, and corporate campus expansions. Office{' '}
                  <Link
                    href="/services/tenant-improvements"
                    className="text-primary hover:underline"
                  >
                    tenant improvements
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    commercial upfits
                  </Link>{' '}
                  in the Fairlane district typically run $70-150 per square foot, with premium
                  Class A office finishes at the higher end of that range.
                </p>
              </div>
            </div>

            <div className="mt-8 p-5 bg-background rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <strong>Dearborn + Detroit:</strong> Many of our Dearborn clients also have
                facilities or operations in Detroit proper. We Build serves the entire Metro
                Detroit region.{' '}
                <Link href="/areas/detroit" className="text-primary hover:underline font-medium">
                  See our Detroit construction services page
                </Link>{' '}
                for more information on the broader Detroit market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services in Dearborn */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Construction Services in Dearborn, MI
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              We Build offers a comprehensive range of construction services for Dearborn
              businesses and property owners. From{' '}
              <Link
                href="/services/commercial-construction"
                className="text-primary hover:underline"
              >
                commercial construction
              </Link>{' '}
              and{' '}
              <Link
                href="/services/industrial-construction"
                className="text-primary hover:underline"
              >
                industrial facilities
              </Link>{' '}
              to precision{' '}
              <Link
                href="/services/tenant-improvements"
                className="text-primary hover:underline"
              >
                tenant improvements
              </Link>
              , every project receives experienced project management, quality materials, and
              transparent pricing tailored to the Metro Detroit market.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dearborn&apos;s commercial real estate market is anchored by the Ford Motor
                  Company ecosystem and a diverse small business community. We Build provides
                  full-service{' '}
                  <Link
                    href="/services/commercial-construction"
                    className="text-primary hover:underline"
                  >
                    commercial construction
                  </Link>{' '}
                  for Dearborn, including ground-up office buildings, retail centers, medical
                  facilities, restaurants, and mixed-use developments. Commercial construction in
                  Dearborn typically costs $150-350+ per square foot depending on project type and
                  complexity. Michigan&apos;s building requirements include 42-inch frost-depth
                  footings, enhanced insulation standards, and snow load engineering that our team
                  incorporates into every design and build plan.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Paintbrush className="h-6 w-6 text-primary" aria-hidden="true" />
                  Commercial Upfits & Tenant Improvements
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are leasing office space near Fairlane Town Center or renovating a
                  retail location on Ford Road,{' '}
                  <Link
                    href="/services/commercial-upfits"
                    className="text-primary hover:underline"
                  >
                    commercial upfits
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/services/tenant-improvements"
                    className="text-primary hover:underline"
                  >
                    tenant improvements
                  </Link>{' '}
                  are core specialties for our Dearborn work. Our upfit services include demolition,
                  new partition walls, electrical and data wiring, HVAC modifications, plumbing,
                  flooring, custom millwork, and ADA-compliant accessibility features. Office
                  buildouts in Dearborn typically cost $60-150 per square foot, with restaurant and
                  medical buildouts at $120-250 per square foot. Automotive supplier office and lab
                  buildouts with specialized requirements range from $100-200+ per square foot.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Factory className="h-6 w-6 text-primary" aria-hidden="true" />
                  Industrial & Automotive Construction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dearborn and the surrounding Metro Detroit area remain the heart of American
                  automotive manufacturing. We Build provides{' '}
                  <Link
                    href="/services/industrial-construction"
                    className="text-primary hover:underline"
                  >
                    industrial construction
                  </Link>{' '}
                  services including supplier manufacturing facilities, testing laboratories, clean
                  room environments, warehouse and distribution centers, and flex space developments.
                  Industrial construction in the Dearborn area typically costs $90-200 per square
                  foot. Our experience with precision commercial construction meets the quality
                  standards that automotive industry clients demand, including specialized MEP
                  systems, controlled environments, and heavy equipment foundations.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                  Roof Coating
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Michigan&apos;s harsh winters, freeze-thaw cycles, ice dams, and heavy snow loads
                  take a severe toll on commercial roofing systems. Our{' '}
                  <Link href="/services/roof-coating" className="text-primary hover:underline">
                    commercial roof coating
                  </Link>{' '}
                  service through{' '}
                  <Link href="/we-coat" className="text-primary hover:underline">
                    We Coat
                  </Link>{' '}
                  provides a cost-effective alternative to full roof replacement, extending the life
                  of your existing commercial roof by 10-20 years. Our silicone and elastomeric
                  coating systems create a seamless, waterproof membrane that withstands Michigan&apos;s
                  extreme temperature swings from -10F winters to 90F+ summers. We use drone
                  inspections to accurately assess roof conditions before recommending the right
                  coating system for your Dearborn building.
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
                  providing Dearborn clients with a streamlined project delivery method that saves
                  time and money. This is especially valuable in Michigan where weather-shortened
                  construction seasons make schedule efficiency critical. Design-build typically
                  reduces project timelines by 20-30% and costs by 10-15% compared to the
                  traditional design-bid-build approach. Visit our{' '}
                  <Link href="/design-center" className="text-primary hover:underline">
                    Design Center
                  </Link>{' '}
                  to explore materials and finishes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
                  Medical Construction Dearborn
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dearborn&apos;s healthcare sector — anchored by Henry Ford Health System and
                  a dense concentration of independent medical practices — generates consistent
                  demand for{' '}
                  <Link
                    href="/services/medical-construction"
                    className="text-primary hover:underline"
                  >
                    medical construction
                  </Link>{' '}
                  and clinical space buildouts. We Build constructs and renovates medical offices,
                  dental practices, urgent care centers, outpatient surgical suites, and specialty
                  clinic spaces throughout Dearborn. Medical construction requires specialized
                  compliance with FGI Guidelines, Michigan Department of Health and Human Services
                  facility standards, ADA accessibility, and healthcare-grade HVAC with precise
                  temperature and humidity controls. Medical office buildouts in Dearborn typically
                  cost $140-250 per square foot depending on clinical complexity and imaging
                  equipment requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary" aria-hidden="true" />
                  Restaurant Construction Dearborn
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dearborn&apos;s dining scene is among the most distinctive in Metro Detroit, led
                  by the nationally recognized Arab-American restaurant corridor along Warren
                  Avenue and Michigan Avenue. We Build specializes in{' '}
                  <Link
                    href="/services/restaurant-construction"
                    className="text-primary hover:underline"
                  >
                    restaurant construction
                  </Link>{' '}
                  and food service buildouts throughout Dearborn — from quick-service and fast
                  casual to full-service dining and banquet hall facilities. Our restaurant
                  construction services include commercial kitchen design and build, Type I and
                  Type II hood systems, fire suppression, health department-compliant plumbing,
                  dining room finishes, bar construction, and ADA-compliant restrooms.
                  Restaurant buildouts in Dearborn typically cost $120-250 per square foot
                  depending on kitchen complexity and dining room finishes. We are experienced
                  working with Dearborn&apos;s Building Safety Department to navigate food service
                  permit requirements and health department inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dearborn Commercial Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Commercial Market
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Dearborn Commercial Construction Areas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dearborn&apos;s commercial landscape is shaped by its automotive industry heritage,
              university presence, and diverse retail corridors. Each district has unique
              construction needs, zoning requirements, and market opportunities. We Build serves
              every commercial area in Dearborn and the surrounding communities.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {commercialAreas.map((area) => (
                <div key={area.name} className="space-y-3">
                  <h3 className="text-xl font-bold">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Business Districts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Dearborn Business Districts & Construction Costs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Understanding construction costs across Dearborn&apos;s business districts helps
              property owners and investors plan their budgets accurately. Here is a breakdown of
              the key commercial areas and typical construction cost ranges.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {businessDistricts.map((district) => (
                <Card key={district.name}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{district.name}</h3>
                    <p className="text-sm text-muted-foreground">{district.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dearborn Market Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Market Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Dearborn Construction Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dearborn&apos;s construction market is driven by the automotive industry, university
              expansion, healthcare growth, and ongoing revitalization of commercial corridors.
              The city&apos;s strategic position in Metro Detroit makes it a hub for business
              investment and development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">110,000+</p>
                  <p className="text-sm text-muted-foreground">
                    Population — Dearborn is Wayne County&apos;s second-largest city and a major
                    Metro Detroit economic center
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">Ford HQ</p>
                  <p className="text-sm text-muted-foreground">
                    Home to Ford Motor Company world headquarters, anchoring a massive automotive
                    supplier and professional services ecosystem
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="text-3xl font-bold text-primary mb-1">42&quot;</p>
                  <p className="text-sm text-muted-foreground">
                    Frost depth requirement in Wayne County — Michigan builds require deeper
                    foundations than most southern states
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Surrounding Communities We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhoods.map((name) => (
                    <span
                      key={name}
                      className="bg-muted px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Michigan Building Codes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Michigan follows the Michigan Building Code, which is based on the International
                  Building Code (IBC) with state-specific amendments. Key Michigan requirements
                  include 42-inch minimum frost-depth footings, enhanced energy code compliance
                  (Michigan Energy Code based on IECC), snow load engineering for roof systems,
                  and specific fire suppression requirements for commercial buildings over certain
                  thresholds. The City of Dearborn Building Department handles permitting and
                  inspections for projects within city limits. Our team&apos;s experience with
                  Michigan codes ensures your project passes inspections without costly delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Michigan Weather Considerations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Michigan&apos;s climate significantly impacts construction planning. Exterior
                  work is typically limited from December through March due to snow, ice, and
                  freezing temperatures. Concrete pours require cold-weather protection below 40F.
                  We plan project schedules to maximize exterior work during the April-November
                  building season and schedule interior finishing, mechanical systems, and other
                  enclosed work during winter months. This strategic scheduling minimizes weather
                  delays and keeps projects on timeline. Our{' '}
                  <Link href="/services/design-build" className="text-primary hover:underline">
                    design-build
                  </Link>{' '}
                  approach is particularly valuable in Michigan where schedule efficiency is
                  critical to working within the shorter construction season.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Michigan Contractor Licensing & Permitting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Michigan contractor licensing is administered by the{' '}
                  <strong>LARA (Department of Licensing and Regulatory Affairs)</strong> through its
                  Bureau of Construction Codes (BCC). General contractors performing commercial and
                  residential projects in Michigan must hold the appropriate LARA-issued license.
                  We Build holds active Michigan general contractor licensing, fully compliant with
                  LARA and BCC requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  For projects in Dearborn specifically, building permits are issued by the{' '}
                  <strong>City of Dearborn Building Safety Department</strong>. Commercial projects
                  typically require a building permit, electrical permit, plumbing permit, and
                  mechanical permit depending on scope. Wayne County may also have jurisdiction for
                  certain site work and land use items. Plan review for commercial projects generally
                  takes 4-8 weeks. We Build manages the entire permitting process — from application
                  to final certificate of occupancy — so our clients can focus on their business.
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
              Why Choose We Build for Your Dearborn Project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Choosing the right{' '}
              <Link
                href="/services/general-contractor"
                className="text-primary hover:underline"
              >
                general contractor
              </Link>{' '}
              is one of the most important decisions for your Dearborn construction project. We
              Build brings Michigan licensing, dual-market expertise, veteran values, and modern
              construction technology that makes us the right partner for Dearborn businesses
              and property owners.
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
                family values. Our expansion to Metro Detroit brings Charlotte&apos;s construction
                quality standards to the Michigan market, combined with local expertise and
                relationships. Visit our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  project portfolio
                </Link>{' '}
                to see examples of our completed work, or{' '}
                <Link href="/about" className="text-primary hover:underline">
                  learn more about our company
                </Link>{' '}
                and the team behind your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas We Serve */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Other Areas We Serve</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to Dearborn, We Build serves the broader Metro Detroit region including{' '}
              <Link href="/areas/detroit" className="text-primary hover:underline font-medium">
                Detroit
              </Link>
              , as well as the greater Charlotte NC region. Our multi-state licensing allows us to serve clients across MI, NC, and SC.
            </p>
            <div className="flex flex-wrap gap-3">
              {areaPages.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="inline-flex items-center gap-2 bg-background border rounded-lg px-4 py-2 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {area.name}
                </Link>
              ))}
            </div>
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
              Dearborn Construction FAQ
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Answers to common questions about construction services, permitting, costs, and
              timelines for Dearborn and Metro Detroit projects.
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
            Ready to Build in Dearborn?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            Whether you need an office buildout near Fairlane, a tenant improvement on Ford Road,
            a roof coating for your Dearborn warehouse, or an industrial facility in Wayne County,
            We Build is your licensed Michigan general contractor with the experience to deliver.
          </p>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on your Dearborn construction
            project. Our team will schedule a site visit, discuss your goals, and provide a
            detailed proposal with transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
              <a href="tel:+17045748124">
                <Phone className="mr-2 h-5 w-5" />
                (704) 574-8124
              </a>
            </Button>
          </div>

          {/* Area Links */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 mb-4">
              We also serve these areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {areaPages.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-4"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
