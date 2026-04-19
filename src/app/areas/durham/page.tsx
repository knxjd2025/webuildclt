import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import {
  serviceAreaSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Paintbrush,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  HardHat,
  FileCheck,
  Clock,
  DollarSign,
  Users,
  Landmark,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Construction Durham NC | Veteran-Owned General Contractor',
  description:
    'Commercial construction company serving Durham NC. Veteran-owned general contractor for commercial upfits, tenant improvements, roof coatings, and ground-up commercial builds across Downtown Durham, American Tobacco District, Research Triangle Park, Duke / Ninth Street, Brightleaf, Southpoint, and Durham County. Licensed in NC. 60+ years combined experience. USGBC member. Free consultations. (980) 471-1745.',
  keywords: [
    'commercial construction durham nc',
    'general contractor durham nc',
    'commercial contractor durham',
    'commercial upfits durham nc',
    'tenant improvements durham',
    'durham commercial construction company',
    'commercial builder durham',
    'durham office buildout contractor',
    'durham restaurant construction',
    'durham medical office construction',
    'durham retail build-out',
    'commercial roof coating durham',
    'durham nc licensed contractor',
    'veteran-owned contractor durham',
    'research triangle construction',
    'american tobacco district construction',
    'downtown durham commercial construction',
    'ninth street commercial contractor',
    'brightleaf square construction',
    'southpoint commercial construction',
    'duke university area contractor',
    'durham county commercial construction',
    'rtp commercial construction',
    'bull city general contractor',
    'life sciences lab construction durham',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/durham',
  },
  openGraph: {
    title: 'Commercial Construction Durham NC | We Build',
    description:
      'Veteran-owned commercial construction company serving Durham NC. Commercial upfits, tenant improvements, and ground-up builds from American Tobacco District to RTP and Southpoint. Licensed in NC. Free consultations.',
    type: 'website',
    url: 'https://webuildclt.com/areas/durham',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Construction Durham NC | We Build',
    description:
      'Veteran-owned commercial construction in Durham NC. Commercial upfits, TI build-outs, roof coatings across Durham County and the Research Triangle.',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction for Durham businesses — ground-up office buildings, retail centers, medical and life-sciences facilities, and mixed-use developments across Durham County and the Research Triangle. From the American Tobacco Campus and Downtown Durham revitalization to emerging RTP-south corridors and the Southpoint commercial district, we coordinate with City of Durham permitting, Durham County inspections, and utility providers to deliver projects on schedule and on budget.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Tenant Improvements',
    href: '/services/commercial-upfits',
    description:
      'Durham&rsquo;s life-sciences, biotech, higher-education, and creative-economy markets drive constant demand for interior build-outs and tenant improvements. We Build provides commercial upfit and TI services throughout Durham, including Class A office space in the American Tobacco District and Downtown Durham, medical and research suites near Duke University Medical Center and the Ninth Street / Erwin Road corridor, restaurant and hospitality build-outs in Brightleaf Square and Downtown, and retail TI in Southpoint and Northgate. Typical Durham upfits complete in 2 to 5 months depending on scope, with permitting handled through the City of Durham Development Services or Durham County.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Durham commercial building owners save 40 to 60 percent versus full roof replacement with our reflective elastomeric roof coating systems. Coatings extend commercial roof life by 15 to 20 years, reduce cooling loads in Durham&rsquo;s humid summers, and prevent the ponding water and seam failures common on flat and low-slope commercial roofs. Delivered through our We Coat division with a 20-year No Dollar Limit warranty on qualifying systems.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in North Carolina, We Build coordinates every aspect of Durham commercial projects — permits, site preparation, subcontractor management, material procurement, inspections, and final certificate of occupancy. Our dual-state NC and SC licensing also supports clients with multi-site commercial portfolios spanning the Carolinas, including owners operating across Durham, Raleigh, and Charlotte metros.',
  },
];

const commercialAreas = [
  {
    name: 'Downtown Durham & American Tobacco District',
    description:
      'Downtown Durham and the American Tobacco Historic District have become one of the Triangle&rsquo;s most dynamic mixed-use markets, combining Class A office space, DPAC and hotel properties, restaurants, breweries, and creative-economy tenants in historic warehouse and tobacco-factory shells. We Build supports tenant upfits, restaurant build-outs, and commercial renovations throughout the American Tobacco Campus, City Center, Five Points, and surrounding downtown blocks. Downtown Durham projects often require coordination with historic-district design review, preservation-compatible construction methods, and after-hours work to minimize disruption in the active district.',
  },
  {
    name: 'Research Triangle Park (RTP) — Durham County Portion',
    description:
      'The northern and western portions of Research Triangle Park sit within Durham County, anchoring the region&rsquo;s life-sciences, biotech, pharmaceutical, and technology economy. We Build provides commercial construction and upfit services for lab-support space, Class A office, clean rooms, and flex space across RTP&rsquo;s Durham-side campuses. Life-sciences and tech build-outs frequently require specialized electrical capacity, redundant HVAC for server and lab environments, chemical-resistant finishes, and rigorous coordination with corporate real-estate and facilities teams on accelerated timelines.',
  },
  {
    name: 'Duke University Area, Ninth Street & Erwin Road',
    description:
      'The Duke University campus, Duke University Health System, and the Ninth Street / Erwin Road commercial corridor form one of Durham&rsquo;s densest commercial markets. We Build supports medical office build-outs near Duke Medical Center, retail and restaurant upfits in the Ninth Street district, and adaptive reuse projects in the surrounding West Durham neighborhoods. Projects here often involve Duke vendor requirements, coordination with property managers serving medical and higher-education tenants, and phased construction for spaces that must stay partially operational.',
  },
  {
    name: 'Brightleaf Square & Five Points',
    description:
      'Brightleaf Square and the Five Points historic district combine adaptive-reuse retail, boutique restaurants, and creative-economy offices in walkable urban-village settings. We Build supports tenant upfits, restaurant renovations, and retail build-outs in these established districts, where construction often requires working within older shell structures, coordinating with property owners on shared mechanical and electrical systems, and navigating the design-review requirements that apply to historic buildings.',
  },
  {
    name: 'Southpoint & Southwest Durham',
    description:
      'The Streets at Southpoint district and the broader Southwest Durham corridor along NC-751 and I-40 anchor Durham&rsquo;s most active suburban retail, hospitality, and medical commercial growth. We Build delivers retail, restaurant, medical, and hospitality build-outs throughout Southpoint, the Renaissance Parkway corridor, and the growing commercial centers along the Durham / Chatham County line. Southpoint projects commonly sit on high-visibility pad sites where storefront quality, signage, and night-lighting detailing matter as much as the interior build-out.',
  },
  {
    name: 'Northgate, North Durham & Hillsborough Road',
    description:
      'North Durham&rsquo;s commercial corridors — Northgate, Guess Road, and the Hillsborough Road retail district — support established neighborhood retail, restaurants, medical, and service-oriented commercial tenants. We Build serves office, retail, restaurant, and medical build-outs throughout North Durham where renovation and adaptive reuse of existing shell space is often the most cost-effective path for small and mid-sized commercial owners and tenants.',
  },
];

const neighborhoods = [
  'Downtown Durham',
  'American Tobacco District',
  'American Tobacco Campus',
  'City Center',
  'Five Points',
  'Brightleaf Square',
  'Ninth Street District',
  'Duke University area',
  'Duke Medical Center area',
  'Erwin Road corridor',
  'West Durham',
  'Trinity Park',
  'Forest Hills',
  'Hope Valley',
  'Southpoint',
  'Renaissance Parkway',
  'Southwest Durham',
  'Research Triangle Park (Durham)',
  'Northgate',
  'North Durham',
  'Hillsborough Road',
  'Guess Road corridor',
  'Chapel Hill border',
  'RTP border',
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Carolinas-Wide Coverage',
    description:
      'We Build is headquartered in Charlotte NC and licensed across North Carolina. Durham projects are handled by our established project-management system — weekly reporting, documented subcontractor coordination, and transparent scheduling — so distance from HQ never compromises delivery quality. For larger Durham engagements, we establish local trade partnerships during pre-construction to keep response times tight and leverage Triangle-area tradespeople who know Durham&rsquo;s permitting and inspection environment.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with 60+ years of combined commercial construction experience. The operational discipline, accountability, and mission-first mindset we bring to every Durham project come from military service and family ownership — you communicate directly with the principals, not a layered sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We Build holds active general contractor licenses in both North Carolina and South Carolina. Our licensing, insurance, and bonding meet or exceed the thresholds required for commercial construction in Durham, Durham County, and across the Research Triangle region. License verification and certificates of insurance are provided on request before any Durham project begins.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build supports sustainable construction practices aligned with the growing demand for energy-efficient, LEED-aligned buildings in Durham&rsquo;s life-sciences, higher-education, and corporate markets — where sustainability goals are often baked into tenant and institutional construction standards.',
  },
  {
    icon: Clock,
    title: 'City of Durham & Durham County Permitting',
    description:
      'Our team works with the City of Durham Development Services and Durham County inspectors on plan reviews, permits, and inspections. We prepare submission packages that anticipate the common plan-review comments specific to Durham jurisdictions — including historic-district design review where applicable — which keeps projects moving through the approval process without avoidable delays.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project in Durham includes a detailed, line-item estimate — no hidden allowances, no vague lump sums. We explain where every dollar goes, and our change-order process is documented and reviewed with you in writing before any work proceeds, so Durham owners always know their real project cost before construction starts.',
  },
];

const faqs = [
  {
    question: 'Does We Build serve Durham NC?',
    answer:
      'Yes. We Build is a North Carolina-licensed general contractor and commercial construction company serving Durham, the American Tobacco District, the Duke University area, Research Triangle Park (Durham County portion), Southpoint, and greater Durham County. While our headquarters is in Charlotte NC, our project-management systems are built to deliver commercial projects anywhere in North Carolina, with local Triangle-area trade partnerships established during pre-construction for Durham engagements.',
  },
  {
    question: 'What commercial construction services does We Build offer in Durham?',
    answer:
      'We Build offers a full range of commercial construction services in Durham: commercial construction (ground-up office, retail, medical, life-sciences, and mixed-use), commercial upfits and tenant improvements, commercial renovation, adaptive reuse of historic and industrial buildings, restaurant construction, medical and dental office build-outs, retail build-outs, warehouse and industrial construction, roof coating and restoration through our We Coat division, drone inspections, ADA compliance upgrades, and green building services aligned with USGBC / LEED standards. Call (980) 471-1745 for a free consultation on any Durham commercial project.',
  },
  {
    question: 'How much does commercial construction cost per square foot in Durham NC?',
    answer:
      'Commercial construction costs in Durham generally align with the broader Research Triangle market and typically run slightly higher than Charlotte for specialty and life-sciences trades due to Triangle biotech and higher-education demand. Typical 2026 Durham commercial construction costs: office upfits $65-$185 per square foot, Class A office TI $120-$225 per square foot, retail build-outs $75-$215 per square foot, restaurant construction $155-$385 per square foot, medical and dental fit-outs $165-$340 per square foot, life-sciences / lab build-outs $275-$650+ per square foot depending on biosafety level and clean-room requirements, and ground-up commercial starts around $215 per square foot and can exceed $450 for complex builds. We Build provides detailed, line-item estimates for every Durham project.',
  },
  {
    question: 'What areas around Durham does We Build serve?',
    answer:
      'We Build serves the entire Durham metropolitan area including Downtown Durham, American Tobacco District, Ninth Street, Duke University and Duke Medical Center area, Brightleaf Square, Five Points, Trinity Park, Forest Hills, Hope Valley, Southpoint, Research Triangle Park (Durham County portion), Northgate, North Durham, Hillsborough Road, and the Chapel Hill / Durham border. Our NC general contractor license allows us to work throughout Durham County and the broader Research Triangle region.',
  },
  {
    question: 'How long does a typical commercial construction project take in Durham?',
    answer:
      'Durham commercial project timelines depend on scope, permitting, and trade availability. Commercial office upfits typically complete in 3 to 5 months, restaurant build-outs require 5 to 8 months due to kitchen and ventilation complexity, medical suite build-outs range from 10 to 16 weeks, life-sciences and lab build-outs typically require 14 to 24 weeks due to specialized MEP and biosafety commissioning, historic-district adaptive reuse projects can extend timelines 4 to 8 weeks for design review, and roof coating projects finish in 2 to 3 weeks. City of Durham and Durham County permitting typically adds 4 to 8 weeks before construction can begin. We Build delivers weekly schedule updates so there are no surprises.',
  },
  {
    question: 'Is We Build a licensed general contractor in Durham NC?',
    answer:
      'Yes. We Build holds an active North Carolina general contractor license from the NC Licensing Board for General Contractors (NCLBGC) and is authorized to perform commercial construction in Durham, Durham County, and throughout North Carolina. You can verify our NC license status at nclbgc.org. We also hold a South Carolina license, carry commercial general liability, workers compensation, and commercial auto insurance. License verification and certificates of insurance are provided on request before any Durham project begins.',
  },
  {
    question: 'Does We Build handle life-sciences or lab build-outs in Durham and RTP?',
    answer:
      'Yes. We Build provides commercial construction and upfit services for lab-support space, Class A office for biotech and pharmaceutical tenants, and flex space for life-sciences companies across the Durham County portion of Research Triangle Park and the broader Durham biotech corridor. Life-sciences projects involve specialized electrical capacity, redundant HVAC for lab and clean-room environments, chemical-resistant finishes, containment and biosafety coordination, and tight schedule discipline because lab tenants typically operate under aggressive equipment-installation deadlines tied to funding and product-development milestones. We coordinate directly with corporate facilities teams, third-party commissioning agents, and specialty MEP subcontractors to deliver lab build-outs that pass qualification the first time.',
  },
  {
    question: 'Does We Build handle historic and adaptive-reuse projects in Downtown Durham?',
    answer:
      'Yes. Downtown Durham&rsquo;s commercial stock is heavily concentrated in adaptive-reuse tobacco warehouses, textile mills, and early-20th-century commercial buildings — many within locally designated or National Register historic districts. We Build supports adaptive-reuse and tenant fit-outs in these properties, coordinating with Durham&rsquo;s historic preservation design review where applicable, preserving character-defining features, and integrating modern MEP and code requirements into historic shells. We budget preservation-specific soft costs and design-review time into the project schedule so there are no surprises during permitting.',
  },
  {
    question: 'Does We Build offer free consultations for Durham commercial projects?',
    answer:
      'Yes. All initial construction consultations are free with no obligation. We will visit your Durham property or review plans remotely, discuss your project goals, and assess scope. For Durham engagements, we typically schedule the initial site visit within one to two weeks and respond to all consultation requests within 2 business days. Contact us at (980) 471-1745 or through our online form.',
  },
  {
    question: 'What makes We Build different from other Durham commercial contractors?',
    answer:
      'Three things distinguish We Build in the Durham commercial construction market: first, veteran and family ownership with 60+ years of combined commercial construction experience, which translates to direct owner-level accountability on every project; second, dual NC and SC licensing plus USGBC membership, giving Durham clients flexibility for multi-state portfolios, sustainability alignment for Duke / institutional / life-sciences clients, and experience across the full commercial spectrum from adaptive reuse to new construction; and third, a structured project-management process with weekly reporting, documented change orders, and transparent line-item estimating that eliminates the budget-creep most commercial owners associate with construction.',
  },
];

const areaServices = [
  { name: 'Commercial Construction', url: 'https://webuildclt.com/services/commercial-construction' },
  { name: 'Commercial Upfits', url: 'https://webuildclt.com/services/commercial-upfits' },
  { name: 'Tenant Improvements', url: 'https://webuildclt.com/services/tenant-improvements' },
  { name: 'Commercial Renovation', url: 'https://webuildclt.com/services/commercial-renovation' },
  { name: 'Restaurant Construction', url: 'https://webuildclt.com/services/restaurant-construction' },
  { name: 'Medical Construction', url: 'https://webuildclt.com/services/medical-construction' },
  { name: 'Retail Construction', url: 'https://webuildclt.com/services/retail-construction' },
  { name: 'Office Buildouts', url: 'https://webuildclt.com/services/office-buildouts' },
  { name: 'Roof Coating', url: 'https://webuildclt.com/services/roof-coating' },
  { name: 'General Contractor', url: 'https://webuildclt.com/services/general-contractor' },
];

export default function DurhamPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Durham NC' },
          ]),
          serviceAreaSchema(
            'Durham, NC',
            'Veteran-owned commercial construction company serving Durham NC, including Downtown Durham, American Tobacco District, Research Triangle Park (Durham County), Duke University area, Ninth Street, Brightleaf, Southpoint, and greater Durham County. Commercial upfits, tenant improvements, ground-up commercial construction, life-sciences lab build-outs, adaptive reuse, roof coating, and renovations.',
            areaServices,
          ),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        title="Commercial Construction Durham NC"
        subtitle="Veteran-owned general contractor serving Downtown Durham, American Tobacco, RTP, Duke area, Southpoint & Durham County"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[{ label: 'Areas', href: '/areas' }, { label: 'Durham NC' }]}
          />

          <div className="max-w-4xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Durham&rsquo;s Trusted Commercial Construction Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We Build is a veteran and family-owned commercial construction
              company licensed in North Carolina, serving Durham, Durham
              County, and the Research Triangle. With 60+ years of combined
              commercial construction experience, we deliver office buildouts,
              tenant improvements, life-sciences and lab build-outs,
              restaurant construction, medical facility buildouts, adaptive
              reuse of historic buildings, retail construction, and roof
              coating across the Bull City and the broader Triangle.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Durham&rsquo;s growth — anchored by Duke University and Duke
              Medical Center, the American Tobacco District revitalization,
              the Durham County portion of Research Triangle Park, a
              fast-expanding life-sciences and biotech economy, and dense
              mixed-use development along Downtown and Southpoint — drives
              constant demand for experienced commercial contractors. We Build
              supports that growth with structured project management, USGBC
              membership, life-sciences build-out experience, and dual NC / SC
              licensing that keeps multi-site portfolios straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.href}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Districts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Commercial Districts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Commercial Construction Across Durham
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We Build supports commercial projects throughout Durham&rsquo;s
              diverse commercial districts — from the American Tobacco
              District&rsquo;s adaptive-reuse office and entertainment core to
              the Duke Medical corridor, Research Triangle Park&rsquo;s
              Durham-side life-sciences campuses, the Southpoint retail and
              hospitality district, and the Ninth Street / Brightleaf historic
              commercial corridors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commercialAreas.map((area) => (
              <Card key={area.name}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{area.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Durham Neighborhoods & Districts We Serve
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We Build delivers commercial construction services throughout
              Durham and the Durham County portion of the Research Triangle.
              Below are the primary neighborhoods and districts in our Durham
              coverage area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div
                key={n}
                className="flex items-center gap-2 bg-muted rounded-md px-3 py-2"
              >
                <CheckCircle
                  className="h-4 w-4 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Durham Chooses We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Durham Businesses Choose We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Durham Commercial Construction FAQ
            </h2>
            <p className="text-muted-foreground">
              Common questions about commercial construction, upfits, and
              general contracting services in Durham NC.
            </p>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
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
            Ready to Build in Durham?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact We Build for a free consultation on your Durham commercial
            construction project. Whether you are planning a ground-up
            commercial build, a tenant improvement, a life-sciences lab
            build-out, or a roof coating, our team delivers on schedule and on
            budget.
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
