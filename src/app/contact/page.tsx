import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from '@/components/ContactForm';
import { localBusinessSchema, faqSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Shield,
  CheckCircle,
  Users,
  Award,
  FileCheck,
  HardHat,
  Building2,
  Home,
  Paintbrush,
  Ruler,
  Hammer,
  Star,
  Calendar,
  MessageSquare,
  ClipboardCheck,
  Handshake,
  Leaf,
  Navigation,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Contact We Build | Free Construction Estimates Charlotte NC | (704) 574-8124',
  description:
    'Contact We Build for free construction estimates in Charlotte NC. Commercial construction, residential additions, roof coating, design-build. Veteran-owned, licensed NC & SC. Call (704) 574-8124 or visit our South Charlotte office.',
  keywords: [
    'contact we build charlotte nc',
    'free construction estimate charlotte',
    'construction company charlotte nc phone number',
    'general contractor charlotte nc contact',
    'commercial construction estimate charlotte',
    'residential construction estimate charlotte nc',
    'south charlotte construction company',
    'charlotte nc builder contact',
  ],
  openGraph: {
    title: 'Contact We Build | Free Construction Estimates Charlotte NC',
    description:
      'Get a free construction estimate from We Build in Charlotte NC. Veteran and family-owned. Licensed in NC & SC. 60+ years combined experience. Call (704) 574-8124.',
    url: 'https://webuildclt.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webuildclt.com/contact',
  },
};

const faqs = [
  {
    question:
      'Are construction estimates from We Build really free?',
    answer:
      'Yes, all initial construction estimates from We Build are completely free with no obligation. We will visit your property, discuss your project goals, assess the scope of work, and provide a detailed written estimate at no charge. This applies to both commercial and residential projects across our entire service area including Charlotte, South Charlotte, Fort Mill, and Lake Norman. We believe you deserve to understand the full cost of your project before making any commitments, and we never pressure clients into signing a contract.',
  },
  {
    question:
      'How quickly does We Build respond to estimate requests?',
    answer:
      'We respond to all estimate requests within one business day. When you submit a contact form, call us at (704) 574-8124, or email designcenter@webuildclt.com, a member of our team will reach out within 24 hours during normal business hours (Monday through Friday, 8:00 AM to 5:00 PM). For urgent construction needs or emergency repairs, we do our best to respond the same day. Initial phone consultations typically last 15 to 20 minutes, and we can usually schedule an on-site visit within the same week depending on availability.',
  },
  {
    question:
      'What areas does We Build serve for construction projects?',
    answer:
      'We Build serves the entire Charlotte metropolitan area and surrounding regions in both North Carolina and South Carolina. Our primary service areas include Charlotte, South Charlotte, Ballantyne, Myers Park, Dilworth, NoDa, University City, Matthews, Mint Hill, Pineville, Fort Mill SC, Indian Land SC, Rock Hill SC, Lake Norman, Cornelius, Davidson, Mooresville, Huntersville, and Concord. We are licensed general contractors in both North Carolina and South Carolina, which allows us to take on projects across the state line without any additional permitting delays.',
  },
  {
    question:
      'Is there a minimum project size or budget for We Build?',
    answer:
      'We Build works on projects of varying sizes, from small residential additions and bathroom renovations to large-scale commercial construction and ground-up builds. While we do not have a strict minimum project dollar amount, most of our projects start at around $25,000. For smaller maintenance or repair tasks, we may be able to recommend trusted subcontractors in the Charlotte area. The best way to find out if your project is a good fit is to contact us for a free consultation, and we will give you an honest assessment.',
  },
  {
    question:
      'What are We Build\'s payment terms for construction projects?',
    answer:
      'We Build uses a milestone-based payment structure for all construction projects. Typically, this involves an initial deposit upon contract signing (usually 10-20 percent of the total project cost), followed by progress payments tied to specific project milestones such as foundation completion, framing, rough-ins, and final completion. We provide detailed payment schedules in every contract so there are no surprises. We accept checks, bank transfers, and can work with construction loan disbursements. Our transparent billing means you always know exactly what you are paying for at each stage of construction.',
  },
  {
    question:
      'Is We Build licensed and insured for construction in North Carolina?',
    answer:
      'Yes, We Build holds active general contractor licenses in both North Carolina and South Carolina. We carry comprehensive general liability insurance, workers compensation coverage for all employees, and builder risk insurance for active projects. We are fully bonded and meet all state and local requirements for commercial and residential construction. As a U.S. Green Building Council (USGBC) member, we also maintain certifications related to sustainable building practices. We are happy to provide copies of our licenses and insurance certificates upon request.',
  },
  {
    question:
      'How should I prepare for a construction estimate visit?',
    answer:
      'To get the most accurate estimate possible, we recommend having the following information ready before your site visit: a general idea of your project scope and goals, any architectural plans or sketches you may have (even rough hand drawings are helpful), your ideal timeline for starting and completing the project, your approximate budget range, any material preferences or specific brands you want to use, and photos of inspiration projects you admire. If you are planning a commercial project, having your lease terms or property ownership documentation available is also helpful. Do not worry if you do not have all of these items. Our team is experienced at helping you define your project scope during the consultation.',
  },
  {
    question:
      'Does We Build handle both commercial and residential construction?',
    answer:
      'Yes, We Build is a full-service general contractor that handles both commercial and residential construction projects in the Charlotte area. Our commercial services include office construction, retail build-outs, restaurant construction, medical and dental facilities, warehouse and industrial buildings, and commercial upfits and renovations. Our residential services include custom home building, home additions, kitchen and bathroom renovations, and whole-house remodels. Having expertise in both sectors allows us to bring commercial-grade quality and project management discipline to residential projects, and residential attention to detail to commercial builds.',
  },
  {
    question:
      'Can We Build handle emergency or urgent construction projects?',
    answer:
      'We Build does accommodate urgent and time-sensitive construction projects when possible. If you have storm damage, a structural issue, a commercial tenant improvement with a tight lease deadline, or any other time-critical situation, call us directly at (704) 574-8124 and let us know the urgency. We will do our best to schedule an emergency site visit within 24 to 48 hours and can often mobilize crews quickly for critical repairs. For commercial clients with active business operations, we also offer after-hours and weekend work to minimize disruption to your business.',
  },
  {
    question:
      'What makes We Build different from other Charlotte construction companies?',
    answer:
      'Several factors set We Build apart from other construction companies in Charlotte. First, we are a veteran and family-owned company, which means integrity, discipline, and attention to detail are core to how we operate. Second, we bring over 60 years of combined construction experience across commercial and residential projects. Third, we are licensed in both North Carolina and South Carolina, giving us the flexibility to serve the entire Charlotte metro area including Fort Mill and surrounding SC communities. Fourth, we are a U.S. Green Building Council member committed to sustainable building practices. Fifth, we offer a true design-build experience through our design center in South Charlotte, where clients can see materials, finishes, and fixtures before making selections. And finally, we provide transparent, milestone-based pricing with no hidden fees or surprise change orders.',
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: '14330 S Lakes Drive, Charlotte NC 28273',
    href: 'https://maps.google.com/?q=14330+S+Lakes+Drive,+Charlotte+NC+28273',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '(704) 574-8124',
    href: 'tel:7045748124',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'designcenter@webuildclt.com',
    href: 'mailto:designcenter@webuildclt.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 8:00 AM - 5:00 PM',
    href: null,
  },
];

const inquirySteps = [
  {
    icon: Phone,
    title: 'Initial Contact',
    description:
      'Reach out by phone, email, or through our online contact form. A member of our team will respond within one business day to discuss your project at a high level and answer any immediate questions you have.',
  },
  {
    icon: MessageSquare,
    title: 'Project Discussion',
    description:
      'During an initial phone or in-person consultation, we will learn about your vision, goals, timeline, and budget range. This conversation helps us understand the scope of your project and determine the best approach for your needs.',
  },
  {
    icon: MapPin,
    title: 'On-Site Visit',
    description:
      'One of our experienced project managers will visit your property to assess the site conditions, take measurements, evaluate any existing structures, and identify any potential challenges. For new construction, we will review the lot and discuss site preparation requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Estimate Preparation',
    description:
      'Our estimating team prepares a comprehensive, line-item proposal that includes material costs, labor, permitting fees, subcontractor work, project timeline, and any allowances. We take the time to be thorough so there are no surprises down the road.',
  },
  {
    icon: FileCheck,
    title: 'Proposal Review',
    description:
      'We schedule a detailed walkthrough of the proposal with you, explaining every line item and answering questions. We want you to fully understand what is included, what is not, and what optional upgrades or value engineering options are available.',
  },
  {
    icon: Handshake,
    title: 'Contract Signing',
    description:
      'Once you are satisfied with the proposal, we finalize the contract with a clear scope of work, milestone payment schedule, project timeline, and warranty information. We use straightforward contracts without hidden clauses or vague language.',
  },
  {
    icon: Ruler,
    title: 'Pre-Construction Planning',
    description:
      'Before breaking ground, our team handles all permits, coordinates with subcontractors, orders materials, and creates a detailed construction schedule. We keep you informed at every step and set clear expectations for what comes next.',
  },
  {
    icon: HardHat,
    title: 'Project Kickoff',
    description:
      'Construction begins with a formal kickoff meeting where you will meet your project superintendent, review the construction schedule, and establish communication protocols. Throughout the build, you will receive regular progress updates with photos and milestone notifications.',
  },
];

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Ground-up commercial buildings, office spaces, retail centers, restaurants, medical facilities, and warehouses across the Charlotte metro area.',
    href: '/services/commercial-construction',
  },
  {
    icon: Building2,
    title: 'Commercial Upfits',
    description:
      'Tenant improvements, office renovations, retail build-outs, and commercial space transformations for businesses in Charlotte and surrounding areas.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    description:
      'Custom-designed homes built to your specifications, from luxury estates to family homes, throughout Charlotte and the surrounding communities.',
    href: '/services/custom-home-builder',
  },
  {
    icon: Hammer,
    title: 'Residential Additions',
    description:
      'Home additions, second stories, sunrooms, garage conversions, and expansions that increase your living space and property value.',
    href: '/services/residential-additions',
  },
  {
    icon: Paintbrush,
    title: 'Design-Build',
    description:
      'Single-source design and construction under one contract. Architecture, engineering, and building coordinated seamlessly from concept to completion.',
    href: '/services/design-build',
  },
  {
    icon: Ruler,
    title: 'General Contracting',
    description:
      'Full general contracting services for projects of all sizes. We manage subcontractors, schedules, budgets, and quality control so you do not have to.',
    href: '/services/general-contractor',
  },
  {
    icon: Shield,
    title: 'Roof Coating',
    description:
      'Commercial and residential roof coating systems that extend the life of your roof, improve energy efficiency, and prevent costly replacements.',
    href: '/services/roof-coating',
  },
];

const serviceAreas = [
  {
    name: 'Charlotte',
    description:
      'As our home base, we serve every Charlotte neighborhood from Uptown and South End to Ballantyne, Myers Park, Dilworth, NoDa, University City, and beyond. Whether you are renovating a historic home in Dilworth or building a new commercial space in University Research Park, our team knows the local permitting process, building codes, and neighborhood requirements inside and out.',
    href: '/areas/south-charlotte',
  },
  {
    name: 'South Charlotte & Ballantyne',
    description:
      'Our office at 14330 S Lakes Drive puts us right in the heart of South Charlotte. We are deeply familiar with the Ballantyne, Rea Farms, Blakeney, and Waverly communities. South Charlotte is one of the fastest-growing areas in Mecklenburg County, and we have completed dozens of commercial upfits, restaurant build-outs, and residential projects in this area.',
    href: '/areas/south-charlotte',
  },
  {
    name: 'Fort Mill & Indian Land, SC',
    description:
      'With our South Carolina general contractor license, we serve Fort Mill, Indian Land, Tega Cay, and Rock Hill without any cross-state complications. Fort Mill is experiencing rapid commercial and residential growth, and we are actively building in the Kingsley, Baxter, and Riverwalk developments. Our SC licensing means no delays or extra permits for projects across the state line.',
    href: '/areas/fort-mill-sc',
  },
  {
    name: 'Lake Norman & North Mecklenburg',
    description:
      'We serve the entire Lake Norman area including Cornelius, Davidson, Mooresville, and Huntersville. Lake Norman is home to a growing number of commercial developments and luxury residential projects. From waterfront custom homes to retail build-outs along the I-77 corridor, our team brings the same quality and professionalism to every project north of Charlotte.',
    href: '/areas/lake-norman',
  },
];

const whyChooseReasons = [
  {
    icon: Shield,
    title: 'Veteran & Family-Owned',
    description:
      'We Build was founded by veterans and is operated as a family business. The values we learned in military service, discipline, integrity, attention to detail, and commitment to the mission, are the same values we bring to every construction project. When you work with us, you are working with people who take personal pride in the quality of our work.',
  },
  {
    icon: Award,
    title: '60+ Years Combined Experience',
    description:
      'Our leadership team brings over six decades of combined experience in commercial and residential construction. We have seen every type of project challenge and know how to solve problems before they become costly delays. This depth of experience means your project benefits from lessons learned across hundreds of successful builds.',
  },
  {
    icon: FileCheck,
    title: 'Licensed in NC & SC',
    description:
      'We hold active general contractor licenses in both North Carolina and South Carolina, allowing us to work seamlessly across the state line. This is especially valuable for clients in the Fort Mill, Indian Land, and Lake Norman areas where the NC/SC border runs through active development zones.',
  },
  {
    icon: Leaf,
    title: 'USGBC Member',
    description:
      'As a member of the U.S. Green Building Council, we are committed to sustainable building practices. We can incorporate energy-efficient systems, sustainable materials, and green building strategies into your project to reduce operating costs and environmental impact without sacrificing quality or aesthetics.',
  },
  {
    icon: Users,
    title: 'Transparent Communication',
    description:
      'We believe the biggest source of frustration in construction is poor communication. That is why we provide regular progress updates, detailed milestone reporting, and direct access to your project manager throughout the build. You will always know what is happening on your job site and what comes next.',
  },
  {
    icon: CheckCircle,
    title: 'No Surprise Pricing',
    description:
      'Our detailed, line-item estimates leave nothing to guesswork. We clearly define the scope of work, material specifications, labor costs, and timeline in every proposal. If something changes during construction, we communicate it immediately and get your written approval before proceeding with any additional work.',
  },
  {
    icon: Paintbrush,
    title: 'In-House Design Center',
    description:
      'Our South Charlotte design center gives you a hands-on experience where you can see and touch materials, finishes, flooring, countertops, cabinetry, and fixtures before making selections. This eliminates the guesswork of choosing materials from small samples or online photos and helps you make confident decisions.',
  },
  {
    icon: Calendar,
    title: 'On-Time Project Delivery',
    description:
      'We understand that delays cost money, whether it is lost rent on a commercial space, extended temporary housing costs, or missed business opening dates. Our project management methodology emphasizes schedule discipline, proactive problem-solving, and clear accountability so your project finishes on time.',
  },
];

const testimonials = [
  {
    quote:
      'We Build completely transformed our office space in Ballantyne. From the initial estimate to the final walkthrough, the entire process was professional, transparent, and on schedule. The team communicated with us every step of the way, and the finished result exceeded our expectations. We would absolutely recommend them to any business looking for a reliable commercial contractor in Charlotte.',
    name: 'David R.',
    project: 'Commercial Office Upfit, Ballantyne',
  },
  {
    quote:
      'As a restaurant owner, I needed a contractor who understood the complexity of kitchen build-outs, health department requirements, and the importance of staying on schedule. We Build delivered on every front. Our restaurant opened on time and on budget, which is incredibly rare in this industry. Their attention to detail and problem-solving ability made all the difference.',
    name: 'Sarah M.',
    project: 'Restaurant Construction, South Charlotte',
  },
  {
    quote:
      'We hired We Build for a major addition to our home in Fort Mill. They handled everything from design through final construction, and the quality of workmanship was outstanding. What impressed us most was their honesty and transparency. When they identified an issue with our existing foundation, they explained it clearly, presented options, and helped us make an informed decision without any pressure.',
    name: 'James & Lisa K.',
    project: 'Residential Addition, Fort Mill SC',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        title="Contact We Build | Free Construction Estimates Charlotte NC"
        subtitle="Veteran and family-owned construction company serving Charlotte, South Charlotte, Fort Mill, and Lake Norman. Call (704) 574-8124 or fill out our contact form for a free, no-obligation estimate on your commercial or residential construction project."
        backgroundImage="/images/contact-hero.jpg"
      />

      {/* Breadcrumbs */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch With We Build</h2>
                <p className="text-muted-foreground">
                  Ready to start your construction project in Charlotte? Whether you need a
                  commercial build-out, residential addition, roof coating, or a full
                  design-build project, our team is here to help. Reach out using the form,
                  give us a call, or stop by our South Charlotte office. We respond to every
                  inquiry within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-4">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="flex items-start gap-4 hover:text-primary transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.content}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/webuildclt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Follow We Build on Instagram"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/WeBuildCLT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Follow We Build on Facebook"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect When You Contact Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              What to Expect When You Contact We Build
            </h2>
            <p className="text-muted-foreground text-lg">
              From your first phone call to project completion, we follow a structured process
              designed to keep you informed, protected, and confident at every stage. Here is
              exactly what happens after you reach out to our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {inquirySteps.map((step, index) => (
              <Card key={step.title} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Estimate Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
                No Obligation
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
                Free Construction Estimate Process
              </h2>
            </div>

            <div className="prose-width mx-auto space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every construction project begins with an accurate estimate, and at We Build, we
                provide detailed, written estimates at absolutely no cost to you. Our free estimate
                process is designed to give you a complete picture of your project costs, timeline,
                and scope before you commit to anything.
              </p>
              <p>
                When you request a free estimate, one of our experienced project managers will
                visit your property to assess the site conditions, take measurements, discuss your
                goals, and identify any potential challenges or opportunities. For commercial
                projects, this includes evaluating the existing structure, mechanical systems,
                code compliance requirements, and ADA accessibility. For residential projects, we
                assess the lot, existing home condition, foundation, roofing, and any structural
                considerations that may affect the scope of work.
              </p>
              <p>
                After the site visit, our estimating team prepares a comprehensive proposal that
                breaks down every cost component: materials, labor, subcontractor fees, permit
                costs, equipment rentals, and project management overhead. We include a detailed
                construction timeline with milestones, a payment schedule tied to those milestones,
                and a clear scope of work that defines exactly what is included and what is not.
              </p>
              <p>
                To get the most out of your free estimate, we recommend having a general idea of
                your project goals, any inspiration photos or rough sketches, your preferred
                timeline, and an approximate budget range. If you have architectural plans or
                engineering drawings, bring those to the site visit as well. Do not worry if you are
                still in the early planning stages. Our team regularly helps clients refine their
                vision and find creative solutions that work within their budget.
              </p>
              <p>
                The typical timeline from initial contact to receiving your written estimate is five
                to ten business days, depending on the complexity of the project. Simple commercial
                upfits and residential renovations may receive estimates faster, while ground-up
                construction and large-scale projects may require additional time for accurate
                pricing. We will always communicate expected timelines upfront so you know exactly
                when to expect your proposal.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <a href="tel:7045748124">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call (704) 574-8124 for a Free Estimate
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Area */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Where We Work
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Our Construction Service Area
            </h2>
            <p className="text-muted-foreground text-lg">
              We Build serves the entire Charlotte metropolitan area and surrounding communities
              in both North Carolina and South Carolina. Our dual-state licensing means no
              delays or complications for projects near the state line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceAreas.map((area) => (
              <Card key={area.name}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        <Link
                          href={area.href}
                          className="hover:text-primary transition-colors"
                        >
                          {area.name}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.description}
                      </p>
                      <Link
                        href={area.href}
                        className="inline-flex items-center text-primary text-sm font-medium mt-3 hover:underline"
                      >
                        View {area.name} projects
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Construction Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              What We Build
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Our Construction Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Not sure which service you need? Browse our full range of commercial and residential
              construction services below. Each one is available for free estimates across our
              entire service area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    <Link
                      href={service.href}
                      className="hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Want to see examples of our completed work?
            </p>
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                View Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Office Location & Directions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
                Visit Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
                Office Location & Directions
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">
                    We Build Office & Design Center
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our office and{' '}
                    <Link href="/design-center" className="text-primary hover:underline">
                      design center
                    </Link>{' '}
                    are located at 14330 S Lakes Drive in South Charlotte, conveniently situated
                    near the intersection of I-485 and South Boulevard. We are easily accessible
                    from all major highways serving the Charlotte metro area.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">From I-77 South (Fort Mill / Rock Hill)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Take I-77 North to I-485 Inner Loop (Exit 1). Follow I-485 Inner Loop east
                    and take the South Boulevard exit. Turn left onto South Boulevard heading
                    north. Turn right onto S Lakes Drive. Our office will be on the right.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">From Uptown Charlotte</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Take South Boulevard south from Uptown through South End, heading toward
                    Pineville. Continue past I-485 and turn left onto S Lakes Drive. Our office
                    is located on the right side of the street.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">From I-485 (Ballantyne / Rea Road)</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Take I-485 to the South Boulevard exit. Head north on South Boulevard and
                    turn right onto S Lakes Drive. Our office is a short drive from the
                    Ballantyne and Rea Road corridors.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Parking</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Free parking is available directly in front of our office building. Visitor
                    parking is clearly marked. Our design center is accessible from the main
                    entrance. If you are visiting for a scheduled consultation, we recommend
                    arriving a few minutes early to browse our material showroom.
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="h-[400px] lg:h-full min-h-[350px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.3!2d-80.9!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA2JzAwLjAiTiA4MMKwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="We Build Office Location - 14330 S Lakes Drive, Charlotte NC 28273"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
                When We Are Available
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
                Hours of Operation
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-bold text-xl mb-4">Office & Design Center Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
                    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
                    { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
                    { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
                    { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
                    { day: 'Saturday', hours: 'By Appointment Only' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">Response Time Expectations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We respond to all inquiries within one business day. Phone calls during
                    business hours are answered directly by our team. If you reach our voicemail,
                    we will return your call the same day. Contact form submissions and emails
                    received after 5:00 PM are responded to the following business morning.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Emergency Contact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For urgent construction issues such as storm damage, structural concerns, or
                    active water intrusion, call us directly at{' '}
                    <a
                      href="tel:7045748124"
                      className="text-primary hover:underline font-medium"
                    >
                      (704) 574-8124
                    </a>{' '}
                    and leave a detailed message if you reach voicemail. We monitor messages
                    outside of business hours and prioritize emergency situations. For existing
                    clients with active projects, your project manager can provide their direct
                    cell phone number for after-hours communication.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-3">Construction Site Hours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Active construction projects are typically staffed Monday through Friday from
                    7:00 AM to 4:00 PM. Weekend and after-hours work is available for commercial
                    projects that require minimal disruption to business operations. All extended
                    hours are coordinated in advance with the property owner and comply with
                    local noise ordinances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Why We Build
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Why Choose We Build for Your Charlotte Construction Project
            </h2>
            <p className="text-muted-foreground text-lg">
              Choosing the right construction company is one of the most important decisions you
              will make for your property. Here is why Charlotte homeowners and business owners
              trust We Build with their construction projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseReasons.map((reason) => (
              <Card key={reason.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              What Our Clients Say About Working With We Build
            </h2>
            <p className="text-muted-foreground text-lg">
              Do not just take our word for it. Here is what property owners and business leaders
              across the Charlotte area have to say about their experience working with our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-primary fill-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Planning Resources */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Helpful Resources
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Project Planning Resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Not quite ready to request an estimate? Explore these resources to help you plan
              your construction project. From our portfolio of completed work to our design center
              showroom, we have tools to help you visualize and plan your next build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: 'Design Center',
                description:
                  'Visit our South Charlotte showroom to see materials, finishes, and fixtures in person. Schedule a visit to browse countertops, flooring, cabinetry, and more.',
                href: '/design-center',
                label: 'Visit Design Center',
              },
              {
                icon: Building2,
                title: 'Project Portfolio',
                description:
                  'Browse photos and details from our completed commercial and residential construction projects across the Charlotte metro area.',
                href: '/portfolio',
                label: 'View Portfolio',
              },
              {
                icon: Users,
                title: 'About We Build',
                description:
                  'Learn about our company history, values, team, and what makes us different from other Charlotte construction companies.',
                href: '/about',
                label: 'About Us',
              },
              {
                icon: FileCheck,
                title: 'Blog & Guides',
                description:
                  'Read our construction guides, project planning tips, and industry insights to help you make informed decisions about your build.',
                href: '/blog',
                label: 'Read Blog',
              },
            ].map((resource) => (
              <Card key={resource.title} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    {resource.label}
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label text-primary font-semibold text-sm uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">
              Frequently Asked Questions About Contacting We Build
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions before reaching out? Here are answers to the most common questions
              we receive from prospective clients about our estimate process, service area,
              licensing, and project approach.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
              Whether you are planning a commercial build-out, a residential addition, a roof
              coating project, or a full design-build from the ground up, We Build is ready to
              help. Contact us today for a free, no-obligation estimate and discover why
              Charlotte property owners trust our veteran and family-owned team to deliver
              quality construction on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="btn-shimmer" asChild>
                <a href="tel:7045748124">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call (704) 574-8124
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                asChild
              >
                <a href="mailto:designcenter@webuildclt.com">
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Email Us
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-secondary-foreground/60">
              14330 S Lakes Drive, Charlotte NC 28273 | Licensed in NC &amp; SC |{' '}
              <Link href="/about" className="underline hover:text-secondary-foreground/80">
                USGBC Member
              </Link>{' '}
              | 60+ Years Combined Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
