import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield,
  Award,
  FileCheck,
  BadgeCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Scale,
  Plane,
  HardHat,
  Heart,
  Users,
  Building2,
  ShieldCheck,
  Leaf,
  Camera,
  Car,
  BookOpen,
  Flag,
} from 'lucide-react';

export const revalidate = false;

export const metadata: Metadata = {
  title:
    'Certifications & Licenses | We Build — Veteran-Owned, USGBC Member, Licensed in NC & SC',
  description:
    'We Build is a veteran-owned, fully licensed, and insured general contractor in Charlotte, NC. USGBC member, FAA Part 107 certified drone pilot, licensed in North Carolina and South Carolina. General liability, workers comp, and commercial auto insurance. Free consultations — (980) 471-1745.',
  keywords: [
    'veteran owned construction company Charlotte NC',
    'USGBC member contractor Charlotte',
    'licensed general contractor North Carolina',
    'licensed contractor South Carolina',
    'FAA certified drone pilot Charlotte',
    'insured construction company Charlotte NC',
    'certified green building contractor',
    'licensed contractor near me Charlotte',
    'bonded and insured contractor Charlotte NC',
    'veteran owned contractor near me',
    'OSHA certified contractor Charlotte',
    'commercial drone inspection Charlotte NC',
  ],
  openGraph: {
    title: 'Certifications & Licenses | We Build — Veteran-Owned, USGBC Member',
    description:
      'Fully licensed, insured, and certified general contractor in Charlotte, NC. USGBC member, FAA Part 107 drone pilot, licensed in NC & SC. Veteran and family-owned. (980) 471-1745.',
    url: 'https://webuildclt.com/about/certifications',
    type: 'website',
  },
};

const licenses = [
  {
    icon: Building2,
    title: 'North Carolina General Contractor License',
    authority: 'NC Licensing Board for General Contractors',
    description:
      'We Build holds an active general contractor license issued by the North Carolina Licensing Board for General Contractors. This license authorizes We Build to perform commercial construction projects of any value throughout the state of North Carolina. The NC general contractor license requires demonstrated experience, financial responsibility, and successful passage of the NC contractor examination. We Build maintains this license in good standing through continuing education and compliance with all Board requirements. Our NC license covers the Charlotte metro area including Mecklenburg, Cabarrus, Union, Gaston, Iredell, and Lincoln counties as well as every other county in North Carolina.',
  },
  {
    icon: Building2,
    title: 'South Carolina General Contractor License',
    authority: 'SC Contractors\' Licensing Board',
    description:
      'We Build is licensed by the South Carolina Contractors\' Licensing Board to perform general contracting work throughout the state. This license enables us to serve clients in Fort Mill, Rock Hill, Indian Land, Tega Cay, and other communities in York County and beyond. South Carolina requires general contractors to demonstrate financial responsibility, carry appropriate insurance, and pass examinations covering SC construction law and business practices. Our dual NC and SC licensing allows us to serve the entire Charlotte metro area without jurisdictional limitations, which is critical for clients with projects on both sides of the state line.',
  },
];

const certifications = [
  {
    icon: Leaf,
    title: 'USGBC Membership',
    subtitle: 'U.S. Green Building Council',
    showLogo: true,
    description:
      'We Build is a member of the U.S. Green Building Council (USGBC), the organization that developed and administers the LEED green building rating system. USGBC membership demonstrates our commitment to sustainable construction practices and positions us to support clients pursuing LEED Certified, Silver, Gold, or Platinum certification. As a USGBC member, we have access to the latest green building education, resources, and best practices. Our team applies LEED principles to commercial construction projects including energy-efficient building envelope design, sustainable material selection, water conservation systems, indoor air quality optimization, and construction waste diversion. Whether your project is pursuing formal LEED certification or simply incorporating sustainable building strategies, our USGBC membership gives you confidence that your contractor understands and can deliver on green building goals.',
  },
  {
    icon: Camera,
    title: 'FAA Part 107 Remote Pilot Certificate',
    subtitle: 'Federal Aviation Administration',
    showLogo: false,
    description:
      'We Build employs an FAA Part 107 certified commercial drone pilot, enabling us to provide aerial inspections, progress documentation, thermal imaging, and site surveys using unmanned aircraft systems. The FAA Part 107 certification requires passing a rigorous aeronautical knowledge test covering airspace classifications, weather theory, drone operations regulations, and flight safety protocols. Our drone capabilities include roof inspections that eliminate the need for scaffolding or lifts, thermal imaging to detect moisture intrusion and insulation gaps, high-resolution aerial photography for project documentation and marketing, topographic surveys for site development planning, and progress monitoring on active construction sites. Drone inspections reduce costs, improve safety by keeping workers off roofs and elevated structures, and provide detailed visual data that traditional inspection methods cannot match.',
  },
  {
    icon: HardHat,
    title: 'OSHA Safety Compliance',
    subtitle: 'Occupational Safety and Health Administration',
    showLogo: false,
    description:
      'We Build maintains strict compliance with OSHA construction safety standards (29 CFR 1926) across all jobsites. Our supervisory personnel hold OSHA 30-Hour Construction Safety certifications, and all field employees complete OSHA 10-Hour training before working on any We Build project. Our safety program includes daily toolbox talks, weekly jobsite safety inspections, fall protection plans for all elevated work, hazard communication training, personal protective equipment requirements, and an incident reporting and investigation protocol. We maintain a safety record that demonstrates our commitment to protecting every worker on every jobsite. Safety is not just a regulatory requirement for We Build — it reflects the discipline and accountability that define our company culture.',
  },
];

const insurancePolicies = [
  {
    icon: Shield,
    title: 'General Liability Insurance',
    description:
      'We Build carries comprehensive general liability insurance that protects property owners, tenants, and the public against claims arising from construction operations. Our GL policy covers bodily injury, property damage, completed operations, and personal and advertising injury. General liability insurance is your first line of financial protection if an accident occurs on your property during construction. Without it, property owners can be held personally liable for injuries and damages. We Build maintains GL coverage limits that meet or exceed the requirements of commercial property owners, property management companies, and government agencies throughout Charlotte and the surrounding region.',
  },
  {
    icon: Users,
    title: 'Workers\' Compensation Insurance',
    description:
      'We Build carries workers\' compensation insurance covering every employee on every jobsite. Workers\' comp provides medical benefits and wage replacement to employees who are injured on the job, and it protects property owners from liability for workplace injuries that occur during construction on their property. Both North Carolina and South Carolina require contractors to carry workers\' compensation insurance, and We Build maintains active policies in every state where we are licensed. Hiring an uninsured contractor exposes property owners to significant financial risk if a worker is injured on your project.',
  },
  {
    icon: Car,
    title: 'Commercial Auto Insurance',
    description:
      'We Build maintains commercial auto insurance on all company vehicles used to transport personnel, equipment, and materials to and from project sites. Commercial auto coverage protects against liability claims arising from vehicle accidents involving company trucks, vans, and equipment trailers. This coverage is separate from personal auto insurance and is specifically designed for vehicles used in business operations. Our commercial auto policy covers all vehicles operating in North Carolina and South Carolina.',
  },
  {
    icon: Scale,
    title: 'Surety Bonding',
    description:
      'We Build has bonding capacity for construction projects requiring performance bonds and payment bonds. A performance bond guarantees that the contractor will complete the project according to the contract terms, and a payment bond guarantees that subcontractors and material suppliers will be paid. Bonding is often required on government projects, institutional work, and larger commercial projects. Our ability to obtain surety bonds reflects the financial stability, construction experience, and track record of successful project completion that bonding companies evaluate before issuing bonds. We can provide project-specific bonds upon request.',
  },
];

const faqs = [
  {
    question: 'Is We Build a licensed general contractor?',
    answer:
      'Yes. We Build is a licensed general contractor in two states: North Carolina and South Carolina. Our North Carolina license is issued by the NC Licensing Board for General Contractors and our South Carolina license is issued by the SC Contractors\' Licensing Board. These licenses authorize We Build to perform commercial construction work throughout both states. We maintain all licenses in active, good standing.',
  },
  {
    question: 'Is We Build insured?',
    answer:
      'Yes. We Build carries comprehensive insurance including general liability insurance, workers\' compensation insurance, and commercial auto insurance. Our coverage meets or exceeds the requirements of commercial property owners, property management companies, and government agencies. Copies of all current certificates of insurance are available upon request. We recommend that every property owner verify their contractor\'s insurance coverage before allowing any construction work to begin on their property.',
  },
  {
    question: 'What is USGBC membership and why does it matter?',
    answer:
      'USGBC stands for the U.S. Green Building Council, the organization that created and administers the LEED (Leadership in Energy and Environmental Design) green building rating system. We Build is a USGBC member, which means we have committed to advancing sustainable building practices and have access to the latest green building education, resources, and professional development. For clients, hiring a USGBC member contractor means your builder understands sustainable construction principles, can support LEED certification projects, and is committed to environmentally responsible building practices. Learn more on our green building services page.',
  },
  {
    question: 'Is We Build veteran-owned?',
    answer:
      'Yes. We Build is a veteran and family-owned construction company founded in 2019. Our military background instills the discipline, integrity, accountability, and attention to detail that define how we run every construction project. Veteran ownership is a core part of our company identity — it shapes our leadership approach, our commitment to keeping promises, and our dedication to delivering quality work on time and within budget for every client.',
  },
  {
    question: 'Do you have FAA drone certification?',
    answer:
      'Yes. We Build employs an FAA Part 107 certified commercial drone pilot. This federal certification authorizes us to operate unmanned aircraft systems for commercial purposes including roof inspections, thermal imaging, aerial photography, site surveys, and construction progress documentation. Our drone capabilities allow us to inspect roofs and elevated structures without scaffolding, detect moisture intrusion with thermal cameras, and provide high-resolution aerial documentation of construction projects. Visit our drone inspections page for more details.',
  },
  {
    question: 'Can you provide proof of insurance and licensing?',
    answer:
      'Absolutely. We Build provides copies of all current certificates of insurance and contractor licenses to clients upon request, and we are happy to have our insurance carrier add your organization as an additional insured on our general liability policy if your project requires it. We strongly encourage every property owner to verify their contractor\'s insurance and licensing before any construction work begins. Contact us at (980) 471-1745 or through our contact page to request documentation.',
  },
  {
    question: 'What safety certifications does We Build hold?',
    answer:
      'We Build maintains strict OSHA safety compliance across all jobsites. Our supervisory personnel hold OSHA 30-Hour Construction Safety certifications, and all field employees complete OSHA 10-Hour training. Our safety program includes daily toolbox talks, weekly safety inspections, fall protection plans, hazard communication training, PPE requirements, and incident investigation protocols. Safety is a non-negotiable aspect of every We Build project — a reflection of the military discipline that drives our company culture.',
  },
  {
    question: 'How many years of experience does We Build have?',
    answer:
      'We Build was founded in 2019 and our team brings over 60 years of combined construction experience spanning commercial construction, commercial upfits, roof coatings, general contracting, and project management. Our experience covers projects across North Carolina and South Carolina in sectors including commercial offices, retail, restaurants, medical facilities, warehouses, and industrial buildings.',
  },
  {
    question: 'What areas does We Build serve?',
    answer:
      'We Build serves the Charlotte, NC metropolitan area including South Charlotte, Lake Norman, Huntersville, Matthews, Mooresville, Fort Mill SC, Rock Hill SC, and surrounding communities in North Carolina and South Carolina. Contact us at (980) 471-1745 to discuss your project — if it is within our licensed service areas, we can help.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(faqs)]} />

      <PageHero
        title="Certifications, Licenses & Credentials"
        subtitle="Fully licensed, insured, and certified — backed by veteran integrity and USGBC membership"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: 'About', href: '/about' },
            { label: 'Certifications & Licenses' },
          ]}
        />
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We Build is a fully licensed, insured, and certified general contractor serving
              Charlotte, NC and the surrounding region. We hold active general contractor licenses in
              North Carolina and South Carolina. We are a{' '}
              <Link href="/services/green-building" className="text-primary hover:underline">
                U.S. Green Building Council (USGBC) member
              </Link>
              , an{' '}
              <Link href="/services/drone-inspections" className="text-primary hover:underline">
                FAA Part 107 certified commercial drone pilot
              </Link>
              , and maintain comprehensive insurance coverage including general liability, workers&apos;
              compensation, and commercial auto. Founded in 2019, We Build is veteran and
              family-owned with over 60 years of combined construction experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every credential we hold exists for one reason: to protect our clients. A licensed
              contractor has demonstrated competency to a state licensing board. An insured contractor
              shields property owners from financial liability. A USGBC member contractor brings
              verified knowledge of sustainable building practices. An FAA-certified drone pilot
              operates legally and safely. When you hire We Build, you are hiring a contractor whose
              credentials have been earned, verified, and maintained — not just claimed.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Credentials
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+19804711745">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  (980) 471-1745
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              State Licenses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Licensed General Contractor in Two States
            </h2>
            <p className="text-muted-foreground">
              We Build holds active general contractor licenses in North Carolina and South Carolina
              — enabling us to serve clients across the Charlotte metro area and the Upstate SC
              region with full legal authority and accountability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {licenses.map((license) => (
              <Card key={license.title}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <license.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{license.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{license.authority}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {license.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Certifications & Memberships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Industry Certifications That Set Us Apart
            </h2>
            <p className="text-muted-foreground">
              Beyond state licensing, We Build holds certifications and memberships that demonstrate
              our commitment to sustainable building, safety, and professional excellence.
            </p>
          </div>
          <div className="space-y-8">
            {certifications.map((cert) => (
              <Card key={cert.title}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {cert.showLogo ? (
                      <div className="flex gap-4 flex-shrink-0">
                        <Image
                          src="/USGBC Member 1.png"
                          alt="USGBC Member"
                          width={120}
                          height={120}
                          className="rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cert.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{cert.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                      {cert.title === 'USGBC Membership' && (
                        <Link
                          href="/services/green-building"
                          className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-3"
                        >
                          View Our Green Building Services{' '}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                      {cert.title === 'FAA Part 107 Remote Pilot Certificate' && (
                        <Link
                          href="/services/drone-inspections"
                          className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-3"
                        >
                          View Our Drone Inspection Services{' '}
                          <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Bonding Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Insurance & Bonding
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Comprehensive Insurance Protection
            </h2>
            <p className="text-muted-foreground">
              We Build carries the full spectrum of construction insurance required to protect property
              owners, employees, and the public. Every policy is current, active, and available for
              verification.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {insurancePolicies.map((policy) => (
              <Card key={policy.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <policy.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{policy.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {policy.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-background rounded-lg px-6 py-4 text-sm text-muted-foreground">
              <FileCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                Copies of all insurance certificates and contractor licenses are available upon
                request.{' '}
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Contact us
                </Link>{' '}
                or call{' '}
                <a href="tel:+19804711745" className="text-primary hover:underline font-medium">
                  (980) 471-1745
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran-Owned Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  Veteran & Family-Owned
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Military Values, Construction Excellence
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We Build was founded in 2019 as a veteran and family-owned construction company.
                  While veteran ownership is not a certification in the traditional sense, it is the
                  single most defining characteristic of how we operate. The values forged through
                  military service — discipline, integrity, accountability, and an unwavering
                  commitment to finishing what you start — are the same values that drive every
                  construction project we deliver.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Military service teaches you to plan meticulously, communicate clearly, adapt to
                  changing conditions without losing sight of the mission, and hold yourself and your
                  team to the highest standards. In construction, these qualities translate directly
                  into projects that stay on schedule, stay within budget, and meet the quality
                  standards we promised when we shook your hand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When you hire We Build, you are hiring a company that treats every commitment as a
                  promise — because that is how we were trained, and that is who we are.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Flag,
                    title: 'Discipline',
                    desc: 'Rigorous project planning, daily progress tracking, and adherence to schedules that keep your project on time.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Integrity',
                    desc: 'Transparent pricing, honest communication about timelines and challenges, and no hidden costs or surprise change orders.',
                  },
                  {
                    icon: BadgeCheck,
                    title: 'Accountability',
                    desc: 'A single point of contact who owns your project from start to finish and takes personal responsibility for the outcome.',
                  },
                  {
                    icon: Award,
                    title: 'Excellence',
                    desc: 'Military-grade attention to detail applied to every joint, every finish, and every system in your building.',
                  },
                ].map((value) => (
                  <Card key={value.title}>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Credentials Matter */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Client Protection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Why Hiring a Credentialed Contractor Matters
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Credentials are not just badges on a website. They represent verified competency,
                financial protection, and professional accountability that directly protect you as a
                property owner.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Financial Protection',
                  desc: 'A licensed and insured contractor protects you from personal liability if a worker is injured on your property, if construction causes damage to adjacent properties, or if the work does not meet code requirements. Without these protections, property owners bear the full financial risk of construction operations.',
                },
                {
                  icon: BookOpen,
                  title: 'Verified Competency',
                  desc: 'State licensing boards require contractors to demonstrate construction knowledge, business acumen, and financial stability before issuing a license. When you hire a licensed contractor, you know they have been vetted by a state agency and meet minimum competency standards that unlicensed contractors have not proven.',
                },
                {
                  icon: Scale,
                  title: 'Legal Recourse',
                  desc: 'If a dispute arises with a licensed contractor, you have recourse through the state licensing board, which can investigate complaints, impose disciplinary actions, and require restitution. With an unlicensed contractor, your only option is civil litigation — a slower, more expensive process with no guarantee of recovery.',
                },
                {
                  icon: Leaf,
                  title: 'Sustainability Expertise',
                  desc: 'USGBC membership means your contractor has invested in understanding sustainable building practices, energy-efficient systems, and the LEED certification process. This is not general construction knowledge — it requires specific training and ongoing education that non-member contractors may not possess.',
                },
                {
                  icon: CheckCircle,
                  title: 'Code Compliance',
                  desc: 'Licensed contractors are required to build to current building codes and obtain proper permits for all work. Code-compliant construction protects your building\'s structural integrity, fire safety, and systems performance. Non-permitted work can void insurance coverage, create liability issues, and reduce property value.',
                },
                {
                  icon: HardHat,
                  title: 'Jobsite Safety',
                  desc: 'OSHA-compliant contractors maintain formal safety programs that protect workers, property owners, and the public. Proper safety training, fall protection plans, hazard communication, and incident reporting reduce accidents and the liability exposure that comes with them.',
                },
              ].map((reason) => (
                <Card key={reason.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
                Certifications & Licensing FAQ
              </h2>
              <p className="text-muted-foreground">
                Answers to the most common questions clients ask about We Build&apos;s licenses,
                certifications, insurance coverage, and credentials.
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/USGBC Member.png"
              alt="USGBC Member"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work with a Contractor You Can Verify
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto">
            We Build is licensed in North Carolina and South Carolina. We are a USGBC
            member, FAA Part 107 certified, fully insured, and bondable. Every credential is
            verifiable, and copies of all documentation are available upon request.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We serve{' '}
            <Link href="/areas/south-charlotte" className="underline hover:text-primary-foreground">
              Charlotte and South Charlotte
            </Link>
            ,{' '}
            <Link href="/areas/fort-mill-sc" className="underline hover:text-primary-foreground">
              Fort Mill
            </Link>
            ,{' '}
            <Link href="/areas/lake-norman" className="underline hover:text-primary-foreground">
              Lake Norman
            </Link>
            , and surrounding communities.
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
