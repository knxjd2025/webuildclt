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
  title: 'Commercial Construction Raleigh NC | We Build',
  description:
    'Veteran-owned commercial construction in Raleigh NC. Upfits, tenant improvements, roof coating, ground-up builds across Cary, RTP, North Hills, Brier Creek.',
  keywords: [
    'commercial construction raleigh nc',
    'general contractor raleigh nc',
    'commercial contractor raleigh',
    'commercial upfits raleigh nc',
    'tenant improvements raleigh',
    'raleigh commercial construction company',
    'commercial builder raleigh',
    'raleigh office buildout contractor',
    'raleigh restaurant construction',
    'raleigh medical office construction',
    'raleigh retail build-out',
    'commercial roof coating raleigh',
    'raleigh nc licensed contractor',
    'veteran-owned contractor raleigh',
    'research triangle construction',
    'north hills commercial contractor',
    'brier creek commercial construction',
    'downtown raleigh construction',
    'cary commercial contractor',
    'wake county commercial construction',
  ],
  alternates: {
    canonical: 'https://webuildclt.com/areas/raleigh',
  },
  openGraph: {
    title: 'Commercial Construction Raleigh NC | We Build',
    description:
      'Veteran-owned commercial construction company serving Raleigh NC. Commercial upfits, tenant improvements, and ground-up builds from Research Triangle to North Hills. Licensed in NC. Free consultations.',
    type: 'website',
    url: 'https://webuildclt.com/areas/raleigh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Construction Raleigh NC | We Build',
    description:
      'Veteran-owned commercial construction in Raleigh NC. Commercial upfits, TI build-outs, roof coatings across Wake County.',
  },
};

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'We Build delivers full-scope commercial construction for Raleigh businesses — ground-up office buildings, retail centers, medical facilities, and mixed-use developments across Wake County. From the Research Triangle innovation corridor to emerging North Hills and Midtown districts, we coordinate with Wake County permitting, City of Raleigh zoning, and local utility providers to deliver projects on schedule. Our structured process and weekly reporting cadence mean Raleigh property owners always know where their project stands.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits & Tenant Improvements',
    href: '/services/commercial-upfits',
    description:
      'Raleigh&rsquo;s growing professional-services, tech, and healthcare markets drive constant demand for interior build-outs. We Build provides commercial upfit and TI services throughout Raleigh, including Class A office buildings in Downtown and North Hills, medical suites in Cameron Village and Rex Healthcare corridors, and retail/restaurant build-outs in Brier Creek, Lafayette Village, and the Village District. Typical Raleigh upfits complete in 2 to 5 months depending on scope, with permitting handled through the City of Raleigh Development Services department or Wake County.',
  },
  {
    icon: Shield,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Raleigh commercial building owners save 40 to 60 percent versus full roof replacement with our reflective elastomeric roof coating systems. Coatings extend commercial roof life by 15 to 20 years, reduce cooling loads in Raleigh&rsquo;s humid summers, and prevent the ponding water and seam failures common on flat and low-slope commercial roofs. Delivered through our We Coat division with a 20-year No Dollar Limit warranty on qualifying systems.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'As a licensed general contractor in North Carolina, We Build coordinates every aspect of Raleigh commercial projects — permits, site preparation, subcontractor management, material procurement, inspections, and final certificate of occupancy. Our dual-state NC and SC licensing also supports clients with multi-site commercial portfolios across the Carolinas.',
  },
];

const commercialAreas = [
  {
    name: 'Downtown Raleigh & Glenwood South',
    description:
      'Downtown Raleigh and the Glenwood South entertainment district support a dense concentration of office towers, restaurants, bars, breweries, and boutique retail. We Build provides tenant upfits, restaurant build-outs, and commercial renovations for businesses in Fayetteville Street, Warehouse District, Moore Square, and the Glenwood South corridor. Downtown projects typically involve coordination with the City of Raleigh Urban Design Center, historic district reviews where applicable, and after-hours construction to minimize street-level disruption.',
  },
  {
    name: 'North Hills & Midtown',
    description:
      'North Hills has become one of Raleigh&rsquo;s premier mixed-use districts, combining Class A office towers, luxury retail, restaurants, and residential towers in a walkable urban core. We Build supports commercial upfits, restaurant build-outs, and retail tenant improvements throughout the North Hills district and the surrounding Midtown / Six Forks Road corridor. Projects here often require coordination with property-management standards that match the district&rsquo;s premium positioning.',
  },
  {
    name: 'Research Triangle Park (RTP) & the 540 / I-40 Tech Corridor',
    description:
      'The Research Triangle innovation corridor anchors Raleigh&rsquo;s tech, biotech, and life-sciences economy. We Build provides commercial construction and upfit services for office, lab support, and flex space across the I-40 and NC-540 corridors, from Raleigh&rsquo;s western edge through Morrisville and Cary. Tech-sector build-outs frequently require specialized electrical capacity, structured cabling, redundant HVAC for server rooms, and adaptive space planning for growing teams.',
  },
  {
    name: 'Brier Creek & Northwest Raleigh',
    description:
      'Brier Creek is a high-growth commercial district along US-70 and the I-540 corridor, anchored by Brier Creek Commons retail, major hotel and office development, and proximity to RDU Airport. We Build delivers retail, restaurant, medical, and hospitality build-outs throughout Brier Creek and the broader Northwest Raleigh commercial corridor, where development continues to follow population growth in Wake County&rsquo;s northwestern suburbs.',
  },
  {
    name: 'Cameron Village (The Village District) & Five Points',
    description:
      'The Village District (formerly Cameron Village) and the Five Points neighborhood combine established retail, boutique services, restaurants, and professional offices in walkable urban-village settings. We Build supports tenant upfits, restaurant renovations, and retail build-outs in these established districts, where construction often requires working within older shell structures and coordinating with property owners on shared-systems improvements.',
  },
  {
    name: 'Cary, Morrisville & the I-40 West Corridor',
    description:
      'While technically outside Raleigh city limits, Cary and Morrisville function as extensions of the Raleigh commercial market. We Build serves office, retail, restaurant, and medical build-outs throughout Cary, Morrisville, and the I-40 west corridor — particularly Weston Parkway, Cary Towne Center district, Park West Village, and the Research Triangle foothold in western Wake County.',
  },
];

const neighborhoods = [
  'Downtown Raleigh',
  'Glenwood South',
  'Warehouse District',
  'Moore Square',
  'North Hills',
  'Midtown',
  'Six Forks',
  'Brier Creek',
  'Umstead Park',
  'Cameron Village / Village District',
  'Five Points',
  'Hayes Barton',
  'Inside the Beltline (ITB)',
  'North Raleigh',
  'Falls of Neuse',
  'Wakefield',
  'Research Triangle Park',
  'Morrisville',
  'Cary',
  'Apex border',
  'Garner border',
  'Knightdale border',
];

const whyChooseUs = [
  {
    icon: MapPin,
    title: 'Carolinas-Wide Coverage',
    description:
      'We Build is headquartered in Charlotte NC and licensed across North Carolina. Raleigh projects are handled by our established project-management system — weekly reporting, documented subcontractor coordination, and transparent scheduling — so distance from HQ never compromises delivery quality. For larger Raleigh engagements, we establish local trade partnerships during pre-construction to keep response times tight.',
  },
  {
    icon: Users,
    title: 'Veteran & Family-Owned',
    description:
      'We Build is a veteran and family-owned company with 60+ years of combined commercial construction experience. The operational discipline, accountability, and mission-first mindset we bring to every Raleigh project come from military service and family ownership — you communicate directly with the principals, not a layered sales team.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We Build holds active general contractor licenses in both North Carolina and South Carolina. Our licensing, insurance, and bonding meet or exceed the thresholds required for commercial construction in Raleigh, Wake County, and across the Research Triangle region.',
  },
  {
    icon: Landmark,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, We Build supports sustainable construction practices aligned with the growing demand for energy-efficient, LEED-aligned buildings in Raleigh&rsquo;s tech and corporate markets.',
  },
  {
    icon: Clock,
    title: 'Wake County & City of Raleigh Permitting',
    description:
      'Our team works with the City of Raleigh Development Services department and Wake County inspectors on plan reviews, permits, and inspections. We prepare submission packages that anticipate the common plan-review comments specific to Raleigh jurisdictions, which keeps projects moving through the approval process without avoidable delays.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Every We Build project in Raleigh includes a detailed, line-item estimate — no hidden allowances, no vague lump sums. We explain where every dollar goes, and our change-order process is documented and reviewed with you in writing before any work proceeds.',
  },
];

const faqs = [
  {
    question: 'Does We Build serve Raleigh NC?',
    answer:
      'Yes. We Build is a North Carolina-licensed general contractor and commercial construction company serving Raleigh, Cary, Morrisville, the Research Triangle Park, and greater Wake County. While our headquarters is in Charlotte NC, our project-management systems are built to deliver commercial projects anywhere in North Carolina, with local trade partnerships established during pre-construction for Raleigh-area engagements.',
  },
  {
    question: 'What commercial construction services does We Build offer in Raleigh?',
    answer:
      'We Build offers a full range of commercial construction services in Raleigh: commercial construction (ground-up office, retail, medical, mixed-use), commercial upfits and tenant improvements, commercial renovation, restaurant construction, medical office buildouts, retail build-outs, warehouse and industrial construction, roof coating and restoration through our We Coat division, drone inspections, ADA compliance upgrades, and green building services aligned with USGBC/LEED standards. Call (980) 471-1745 for a free consultation on any Raleigh commercial project.',
  },
  {
    question: 'How much does commercial construction cost per square foot in Raleigh NC?',
    answer:
      'Commercial construction costs in Raleigh generally align with the broader North Carolina metro markets but can run slightly higher than Charlotte for specialty trades due to Research Triangle tech-sector demand. As a reference: commercial office upfits in Raleigh typically run $60 to $185 per square foot, retail build-outs $75 to $210 per square foot, restaurant construction $150 to $375 per square foot, medical facilities $160 to $420 per square foot, and ground-up commercial construction starts around $210 per square foot and can exceed $425 for complex builds. We Build provides detailed, line-item estimates for every Raleigh project.',
  },
  {
    question: 'What areas around Raleigh does We Build serve?',
    answer:
      'We Build serves the entire Raleigh metropolitan area including Downtown Raleigh, Glenwood South, North Hills, Midtown, Brier Creek, Cameron Village / The Village District, Five Points, North Raleigh, Research Triangle Park, Morrisville, Cary, Apex, Garner, Knightdale, and Wake Forest. Our NC general contractor license allows us to work throughout Wake County and the broader Research Triangle region.',
  },
  {
    question: 'How long does a typical commercial construction project take in Raleigh?',
    answer:
      'Raleigh commercial project timelines depend on scope, permitting, and trade availability. Commercial office upfits typically complete in 3 to 5 months, restaurant build-outs require 5 to 8 months due to kitchen and ventilation complexity, medical suite build-outs range from 10 to 16 weeks, and roof coating projects finish in 2 to 3 weeks. City of Raleigh and Wake County permitting typically adds 4 to 8 weeks before construction can begin. We Build delivers weekly schedule updates so there are no surprises.',
  },
  {
    question: 'Is We Build a licensed general contractor in Raleigh NC?',
    answer:
      'Yes. We Build holds an active North Carolina general contractor license from the NC Licensing Board for General Contractors (NCLBGC) and is authorized to perform commercial construction in Raleigh, Wake County, and throughout North Carolina. We also hold a South Carolina license, carry commercial general liability, workers compensation, and commercial auto insurance. We will provide license verification and certificates of insurance on request before any Raleigh project begins.',
  },
  {
    question: 'Does We Build offer free consultations for Raleigh commercial projects?',
    answer:
      'Yes. All initial construction consultations are free with no obligation. We will visit your Raleigh property or review plans remotely, discuss your project goals, and assess scope. For Raleigh engagements, we typically schedule the initial site visit within one to two weeks and respond to all consultation requests within 2 business days. Contact us at (980) 471-1745 or through our online form.',
  },
  {
    question: 'What makes We Build different from other Raleigh commercial contractors?',
    answer:
      'Three things distinguish We Build in the Raleigh commercial construction market: first, veteran and family ownership with 60+ years of combined commercial construction experience, which translates to direct owner-level accountability on every project; second, dual NC and SC licensing plus USGBC membership, giving Raleigh clients flexibility for multi-state portfolios and sustainable construction expertise; and third, a structured project-management process with weekly reporting, documented change orders, and transparent line-item estimating that eliminates the budget-creep most commercial owners associate with construction.',
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

export default function RaleighPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Areas', href: '/areas' },
            { label: 'Raleigh NC' },
          ]),
          serviceAreaSchema(
            'Raleigh, NC',
            'Veteran-owned commercial construction company serving Raleigh NC, including Downtown Raleigh, North Hills, Brier Creek, Research Triangle Park, Cary, Morrisville, and greater Wake County. Commercial upfits, tenant improvements, ground-up commercial construction, roof coating, and renovations.',
            areaServices,
          ),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        title="Commercial Construction Raleigh NC"
        subtitle="Veteran-owned general contractor serving Raleigh, Cary, Research Triangle, North Hills, Brier Creek & Wake County"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[{ label: 'Areas', href: '/areas' }, { label: 'Raleigh NC' }]}
          />

          <div className="max-w-4xl mt-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Raleigh&rsquo;s Trusted Commercial Construction Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We Build is a veteran and family-owned commercial construction
              company licensed in North Carolina, serving Raleigh, Cary,
              Morrisville, and greater Wake County. With 60+ years of combined
              commercial construction experience, we deliver office buildouts,
              tenant improvements, restaurant construction, medical facility
              buildouts, retail construction, and roof coating across the
              Research Triangle region.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Raleigh&rsquo;s growth — anchored by the Research Triangle, a
              expanding tech and biotech sector, and dense commercial development
              in North Hills, Downtown, Brier Creek, and Midtown — drives
              constant demand for experienced commercial contractors. We Build
              supports that growth with structured project management, USGBC
              membership, and dual NC/SC licensing that keeps multi-site
              portfolios straightforward.
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
              Commercial Construction Across Raleigh
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We Build supports commercial projects throughout Raleigh&rsquo;s
              diverse commercial districts — from Class A office towers and
              high-end retail in North Hills to the Research Triangle&rsquo;s
              tech corridor, the Brier Creek high-growth retail district, and
              Downtown Raleigh&rsquo;s restaurant and entertainment scene.
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
              Raleigh Neighborhoods & Districts We Serve
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We Build delivers commercial construction services throughout
              Raleigh and the Research Triangle. Below are the primary
              neighborhoods and districts in our Raleigh coverage area.
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
              Why Raleigh Chooses We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Raleigh Businesses Choose We Build
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
              Raleigh Commercial Construction FAQ
            </h2>
            <p className="text-muted-foreground">
              Common questions about commercial construction, upfits, and
              general contracting services in Raleigh NC.
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
            Ready to Build in Raleigh?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact We Build for a free consultation on your Raleigh commercial
            construction project. Whether you are planning a ground-up
            commercial build, a tenant improvement, or a roof coating, our
            team delivers on schedule and on budget.
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
