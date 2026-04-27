import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Wrench, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { FaqAccordion } from '@/components/FaqAccordion';
import { servicesByCategory, areaLinks, allServices } from '@/data/services';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Construction Services Charlotte NC | We Build',
  description:
    '25 specialized commercial construction services in Charlotte NC: upfits, drone inspections, breweries, adaptive reuse, roof coating. Veteran-owned.',
  keywords: [
    'construction services charlotte nc',
    'commercial construction services charlotte',
    'construction company charlotte',
    'commercial upfits charlotte nc',
    'commercial contractor charlotte',
    'construction company charlotte nc',
    'adaptive reuse charlotte nc',
  ],
  openGraph: {
    title: 'Construction Services | We Build Charlotte',
    description:
      'Full-service commercial construction in Charlotte, NC. Specialized services. Veteran & family-owned. USGBC member.',
    url: `${BUSINESS.url}/services`,
    type: 'website',
  },
};

const categoryConfig = [
  {
    key: 'commercial' as const,
    title: 'Commercial Services',
    description:
      'From ground-up construction to interior upfits, we deliver commercial projects on time and on budget across the Charlotte metro area.',
    icon: Building2,
    services: servicesByCategory.commercial,
  },
  {
    key: 'specialty' as const,
    title: 'Specialty Services',
    description:
      'Construction management, green building, and other specialized capabilities that set us apart.',
    icon: Wrench,
    services: servicesByCategory.specialty,
  },
];

function servicesCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Construction Services',
    description: metadata.description,
    url: `${BUSINESS.url}/services`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allServices.length,
      itemListElement: allServices.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: `${BUSINESS.url}${service.href}`,
          provider: {
            '@type': 'GeneralContractor',
            name: BUSINESS.name,
            url: BUSINESS.url,
          },
        },
      })),
    },
  };
}

const faqs = [
  {
    question: 'What construction services does We Build offer in Charlotte?',
    answer:
      'We Build offers over twenty specialized construction services across the Charlotte metro area and the Carolinas. Our core services include commercial construction, commercial upfits and tenant improvements, general contracting, construction management, pre-construction planning, roof coating and restoration, drone inspections, restaurant construction, medical facility build-outs, office buildouts, retail construction, industrial and warehouse construction, brewery construction, adaptive reuse, site development, value engineering, ADA compliance, green building, and owner\'s representative services. We are licensed in NC & SC.',
  },
  {
    question: 'How do I know if I need a commercial upfit or a full renovation?',
    answer:
      'A commercial upfit modifies the interior of an existing space — new walls, flooring, electrical, plumbing, and finishes — while keeping the building shell and structure intact. A full renovation addresses the building envelope, structural systems, and potentially the exterior in addition to interior work. If your building\'s roof, walls, foundation, and mechanical systems are in good condition but the interior layout does not meet your needs, an upfit is the right choice. If the structure itself needs significant work, a renovation is more appropriate. We Build provides free assessments to help you determine which approach fits your Charlotte project.',
  },
  {
    question: 'Do you offer construction services outside of Charlotte?',
    answer:
      'Yes. While our headquarters is at 14330 S Lakes Drive in Charlotte, NC, we serve the entire Charlotte metropolitan area including South Charlotte, Lake Norman, Fort Mill SC, Rock Hill SC, Matthews, Huntersville, Mooresville, and surrounding communities in Mecklenburg, Union, Iredell, Cabarrus, and York counties. Our multi-state licensing allows us to take on projects across NC & SC.',
  },
  {
    question: 'What is the most cost-effective way to renovate a commercial space?',
    answer:
      'The most cost-effective commercial renovation strategy depends on your goals, but several approaches consistently save money. First, consider a phased approach that prioritizes revenue-generating improvements. Second, explore value engineering with We Build to identify where you can reduce costs without sacrificing quality. Third, for roof issues, coating is fifty to seventy percent less expensive than replacement. Contact us for a free consultation to evaluate the best strategy for your specific space in the Charlotte area.',
  },
  {
    question: 'How do I get started with a construction project?',
    answer:
      'Getting started is simple. Call us at (980) 471-1745 or submit a request through our contact page for a free consultation. During the initial meeting, we discuss your project goals, timeline, and budget. We can meet at your project site, at our office in South Charlotte, or virtually. From there, we develop a preliminary scope of work, provide a detailed line-item estimate, and walk you through our process. Once you approve the proposal, we handle permitting, scheduling, and all construction through final walkthrough. Most clients go from initial consultation to construction start within four to eight weeks.',
  },
  {
    question: 'What types of commercial buildings does We Build construct?',
    answer:
      'We Build constructs a wide range of commercial buildings across the Charlotte region. Our project experience includes office buildings and corporate spaces, retail stores and shopping centers, restaurants and food service facilities, medical and dental offices, urgent care and therapy clinics, warehouses and distribution centers, industrial and manufacturing facilities, breweries and taprooms, mixed-use developments, and educational facilities. Each building type has unique code requirements, and our sixty-plus years of combined experience ensures we handle them efficiently.',
  },
  {
    question: 'Do you handle permits and inspections for all services?',
    answer:
      'Yes. We Build manages the entire permitting and inspection process for every project. This includes preparing and submitting permit applications to Mecklenburg County, the City of Charlotte, York County SC, and other local jurisdictions. We coordinate all required inspections — foundation, framing, electrical, plumbing, mechanical, fire, and final — and resolve any code compliance issues directly with inspectors. Our familiarity with local building departments across the Charlotte metro area helps avoid delays and ensures your project moves through the approval process efficiently.',
  },
  {
    question: 'What is pre-construction planning and why does it matter?',
    answer:
      'Pre-construction planning is the critical phase before construction begins where we define scope, create detailed budgets, develop schedules, identify risks, and coordinate with architects, engineers, and subcontractors. This phase matters because construction problems are far cheaper to solve on paper than on the job site. Good pre-construction catches design conflicts, unrealistic budgets, long-lead material issues, and permitting complications before they become expensive change orders. We Build includes pre-construction planning in every project to protect your budget and timeline.',
  },
  {
    question: 'How does We Build\'s drone inspection service work?',
    answer:
      'Our FAA-certified commercial drone pilot uses aerial thermal imaging to inspect commercial roofs and building exteriors without scaffolding, lifts, or business disruption. The drone captures high-resolution photographs and thermal maps that reveal moisture intrusion, insulation failures, membrane damage, and structural issues invisible to ground-level or even on-roof visual inspections. We compile the data into a detailed report with annotated images and actionable recommendations. The entire process typically takes about one hour for most commercial buildings in the Charlotte area.',
  },
  {
    question: 'What green building options are available for commercial projects?',
    answer:
      'As a U.S. Green Building Council member, We Build offers a range of sustainable building options for commercial projects in Charlotte and the Carolinas. These include energy-efficient HVAC and lighting systems, high-performance building envelopes, low-VOC paints and adhesives, recycled-content and locally sourced materials, water-efficient plumbing fixtures, reflective roof coatings that reduce cooling costs by fifteen to twenty-five percent, and waste diversion strategies that minimize landfill impact during construction. Green building features often qualify for utility rebates and tax incentives while reducing long-term operating costs for building owners.',
  },
  {
    question: 'Can you help with ADA compliance for an existing building?',
    answer:
      'Yes. We Build provides ADA compliance assessments and renovation services for existing commercial buildings in Charlotte and the surrounding area. We evaluate your facility against current Americans with Disabilities Act standards, identify non-compliant areas — including entrances, restrooms, parking, signage, and interior accessibility — and develop a prioritized remediation plan. ADA compliance is not optional; it is a federal requirement, and non-compliance can result in costly lawsuits and fines. Our team handles the construction work needed to bring your building into full compliance efficiently and with minimal disruption to your operations.',
  },
  {
    question: 'What should I budget for a commercial construction project in Charlotte?',
    answer:
      'Commercial construction costs in the Charlotte area vary by project type. Commercial upfits typically run fifty to one hundred seventy-five dollars per square foot depending on finish level and mechanical complexity. Ground-up commercial buildings range from one hundred fifty to three hundred dollars or more per square foot. Restaurant build-outs cost one hundred fifty to three hundred fifty dollars per square foot due to kitchen, ventilation, and plumbing requirements. Medical facilities range from one hundred fifty to four hundred dollars per square foot. Roof coating costs two to five dollars per square foot. We provide free consultations tailored to your specific project scope and requirements.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), servicesCollectionSchema(), faqSchema(faqs)]} />

      <PageHero
        title="Our Construction Services"
        subtitle="Specialized services for commercial and specialty construction across Charlotte and the Carolinas."
      />

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      {/* Intro */}
      <section className="py-16 reveal">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="section-label">Full-Service Construction</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Build
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With 60+ years of combined experience, We Build delivers commercial
            construction services across Charlotte, Lake Norman,
            and the greater Carolinas region. As a veteran and family-owned
            company and USGBC member, we bring integrity, craftsmanship, and
            accountability to every project.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {categoryConfig.map((category) => {
        const Icon = category.icon;
        return (
          <section
            key={category.key}
            className="py-16 even:bg-muted/30 reveal"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="section-label mb-0">{category.title}</p>
                </div>
                <p className="text-muted-foreground text-lg">
                  {category.description}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                {category.services.map((service) => (
                  <Link key={service.href} href={service.href} className="group">
                    <Card className="h-full card-hover transition-colors">
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm flex-1">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Service Areas */}
      <section className="py-16 reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <p className="section-label mb-0">Service Areas</p>
            </div>
            <p className="text-muted-foreground text-lg">
              Licensed in North Carolina and South Carolina, we serve the
              greater Charlotte metro and surrounding communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 stagger-children">
            {areaLinks.map((area) => (
              <Link key={area.href} href={area.href} className="group">
                <Card className="h-full card-hover transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {area.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-4">
                      View area
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-center">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Construction Services FAQ
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Common questions about our construction services in Charlotte and the Carolinas.
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground reveal">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Get a free consultation from our team. We will walk through your scope,
            timeline, and budget — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="btn-shimmer"
            >
              <Link href="/contact">
                Request a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={`tel:${BUSINESS.phoneTel}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
