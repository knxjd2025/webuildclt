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
  Users,
  Heart,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Building2,
  Paintbrush,
  Layers,
  Leaf,
  Clock,
  MapPin,
  HardHat,
  HandshakeIcon,
  MessageCircle,
  Hammer,
  BadgeCheck,
  ThumbsUp,
  Truck,
  Gem,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About We Build | Veteran-Owned Construction Company Charlotte NC',
  description:
    'We Build is a veteran and family-owned construction company in Charlotte NC with 60+ years combined experience. Licensed in NC & SC. USGBC member. FAA-certified drone inspections. Commercial construction and roof coating services.',
  keywords: [
    'about we build charlotte',
    'veteran owned construction company charlotte nc',
    'family owned contractor charlotte',
    'construction company charlotte nc',
    'commercial construction charlotte',
    'general contractor charlotte nc',
    'licensed contractor north carolina south carolina',
    'USGBC member contractor charlotte',
    'veteran contractor charlotte nc',
    'drone inspection charlotte nc',
    'general contractor charlotte nc',
  ],
  openGraph: {
    title: 'About We Build | Veteran-Owned Construction Company Charlotte NC',
    description:
      'Veteran and family-owned construction company in Charlotte, NC. 60+ years combined experience. Licensed in NC & SC. USGBC member.',
    type: 'website',
    url: 'https://webuildclt.com/about',
  },
  alternates: {
    canonical: 'https://webuildclt.com/about',
  },
};

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Safety is not negotiable. It is the foundation we stand on for every project. Our team follows strict OSHA safety protocols, conducts daily safety briefings, and maintains a zero-tolerance policy for unsafe practices. Every worker on our job sites is trained, equipped, and empowered to prioritize safety above all else. We perform regular safety audits, maintain detailed incident logs, and ensure all personal protective equipment meets or exceeds industry standards. For our clients, this commitment to safety means fewer delays, lower liability exposure, and peace of mind knowing their project site is managed responsibly.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We do what we say and say what we do. Honesty guides every decision from the initial consultation to the final walkthrough. When we encounter a problem, we tell you immediately and present solutions. Our pricing is transparent, our timelines are realistic, and our word is our bond. We believe that trust is built through consistent action, not promises. That is why we provide detailed written proposals and never surprise our clients with hidden fees or unexpected change orders.',
  },
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    description:
      'Quality is measured in the details that most people never notice but everyone feels. We Build holds our work to exacting standards because we know that exceptional craftsmanship is what separates a good project from a great one. From precise framing and seamless finishes to properly graded drainage and meticulously installed mechanical systems, our crews take pride in doing the job right the first time. We back every project with our quality guarantee because we are confident in the work we deliver.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description:
      'Great construction is a team effort. Collaboration with our clients, within our crew, and among our subcontractor partners drives exceptional results. We communicate proactively, respect everyone involved, and work toward a shared goal: your successful project. Our project managers serve as the single point of contact, coordinating between architects, engineers, trade partners, and building inspectors so that every phase of construction flows smoothly and efficiently.',
  },
  {
    icon: Target,
    title: 'Accountability',
    description:
      'We take full responsibility for our work and stand behind every project we complete. Our veteran heritage instills a mission-first mentality. When we commit to a scope, a budget, and a timeline, we hold ourselves accountable for delivering. No excuses, only results. If something goes wrong, we own it, fix it, and learn from it. This culture of accountability extends to every member of our team, from project managers to field crew, because we believe that taking ownership is the foundation of great work.',
  },
  {
    icon: MessageCircle,
    title: 'Communication',
    description:
      'We believe that poor communication is the number one cause of construction project failures. That is why We Build prioritizes clear, consistent, and proactive communication throughout every project. You receive regular progress updates, immediate notification of any issues, and timely responses to every question. Our project management systems provide real-time visibility into project schedules, budgets, and milestones so you always know exactly where your project stands.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'As a proud member of the U.S. Green Building Council, We Build is committed to sustainable construction practices that reduce environmental impact without compromising quality. We incorporate energy-efficient building systems, specify recycled and sustainably sourced materials when possible, minimize construction waste through careful planning, and advise clients on green building strategies that lower operating costs over the life of their building. Sustainable construction is not just responsible; it is smart business.',
  },
  {
    icon: HandshakeIcon,
    title: 'Community',
    description:
      'We Build is more than a construction company. We are members of the Charlotte community. We live here, we raise our families here, and we are invested in making Charlotte a better place through quality construction, local hiring, veteran support, and community involvement. We believe that strong communities are built one project, one relationship, and one handshake at a time. Every project we complete adds to the fabric of this city we call home.',
  },
];

const certifications = [
  {
    name: 'U.S. Green Building Council (USGBC)',
    image: '/images/certifications/usgbc-member-light.png',
    description:
      'As a USGBC member, We Build demonstrates a verified commitment to sustainable building practices, green construction standards, and environmentally responsible project delivery. USGBC membership means our team has access to the latest resources, education, and frameworks for energy-efficient and sustainable construction.',
  },
  {
    name: 'NC Licensing Board for General Contractors',
    image: '/images/certifications/nclbgc.png',
    description:
      'Our active North Carolina general contractor license authorizes We Build to perform construction work across the state. This license requires demonstrated experience, financial responsibility, and passing examinations on building codes, business law, and construction practices.',
  },
  {
    name: 'SC General Contractors Licensing Board',
    image: '/images/certifications/scgc.png',
    description:
      'Our South Carolina general contractor license extends our service area into Fort Mill, Rock Hill, York County, and throughout the state. Dual-state licensing means clients near the NC/SC border have a single, qualified contractor for projects in either state.',
  },
  {
    name: 'IIBEC - International Institute of Building Enclosure Consultants',
    image: '/images/certifications/iibec.png',
    description:
      'IIBEC certification demonstrates advanced expertise in building enclosure consulting, particularly for commercial roof coating and restoration projects. This certification ensures our roof coating division, We Coat, applies industry-leading techniques and materials.',
  },
  {
    name: 'CHAMP',
    image: '/images/certifications/champ.png',
    description:
      'Certified in the Charlotte Housing Authority Maintenance Program, demonstrating our commitment to quality maintenance and construction standards for housing authority projects in the Charlotte metro area.',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Founded in Charlotte',
    description:
      'We Build is established as a veteran and family-owned construction company in Charlotte, NC, with a focus on commercial construction.',
  },
  {
    year: '2020',
    title: 'First Commercial Projects',
    description:
      'Completed our first commercial upfit projects across the Charlotte metro area, establishing our reputation for quality and on-time delivery.',
  },
  {
    year: '2022',
    title: 'We Coat Launch',
    description:
      'Launched We Coat, our dedicated commercial roof coating and restoration division, offering eco-friendly alternatives to full roof replacement.',
  },
  {
    year: '2024',
    title: 'SC License Obtained',
    description:
      'Obtained South Carolina general contractor license, expanding our service area into Fort Mill, Rock Hill, and York County.',
  },
  {
    year: '2025',
    title: 'IIBEC Certification',
    description:
      'Team achieved IIBEC certification for professional building enclosure consulting, strengthening our commercial roof coating expertise.',
  },
  {
    year: '2026',
    title: 'USGBC Membership',
    description:
      'Joined the U.S. Green Building Council, reinforcing our commitment to sustainable construction practices and green building standards.',
  },
];

const serviceOverview = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    href: '/services/commercial-construction',
    description:
      'Ground-up commercial builds, office buildings, retail spaces, restaurants, medical facilities, and industrial projects throughout Charlotte and the surrounding region.',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    href: '/services/commercial-upfits',
    description:
      'Office renovations, tenant improvements, restaurant build-outs, and retail transformations designed to minimize business disruption and maximize ROI.',
  },
  {
    icon: Layers,
    title: 'Roof Coating & Restoration',
    href: '/services/roof-coating',
    description:
      'Eco-friendly commercial roof coating that saves up to 50% vs. full replacement. IIBEC certified team with proven restoration systems.',
  },
  {
    icon: Hammer,
    title: 'General Contracting',
    href: '/services/general-contractor',
    description:
      'Full-service general contracting for commercial projects of all sizes. Licensed in both North Carolina and South Carolina.',
  },
];

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Veteran-Owned Accountability',
    description:
      'Military discipline translates directly into construction excellence. Our veteran ownership means you get a contractor who plans meticulously, communicates clearly, adapts when conditions change, and drives toward project completion with unwavering focus. We treat every project like a mission with clearly defined objectives, timelines, and quality standards.',
  },
  {
    icon: Award,
    title: 'Licensed in NC & SC',
    description:
      'We Build holds active general contractor licenses in North Carolina and South Carolina. Multi-state licensing allows us to serve the Charlotte metro and South Carolina border communities. View all our certifications and licenses on our credentials page.',
  },
  {
    icon: Leaf,
    title: 'USGBC Member',
    description:
      'Our U.S. Green Building Council membership reflects a genuine commitment to sustainable construction. We incorporate energy-efficient systems, specify sustainable materials, and advise clients on green building strategies that reduce environmental impact and lower long-term operating costs.',
  },
  {
    icon: Clock,
    title: 'Transparent Pricing & Timelines',
    description:
      'We provide detailed written proposals with clear line items, realistic project schedules, and proactive communication throughout every phase. There are no hidden fees, no surprise change orders, and no vague timelines. You know exactly what your project will cost and when it will be complete.',
  },
  {
    icon: ThumbsUp,
    title: '60+ Years Combined Experience',
    description:
      'Our team brings over six decades of combined construction experience spanning commercial building, roof coating and restoration, and project management. This depth of experience means we have encountered virtually every construction challenge and know how to solve it efficiently.',
  },
  {
    icon: Truck,
    title: 'Trusted Local Subcontractor Network',
    description:
      'Over years of building in Charlotte, we have assembled a vetted network of trade partners: electricians, plumbers, HVAC technicians, concrete specialists, and more. These long-standing relationships mean better pricing, reliable scheduling, and consistent quality across every trade on your project.',
  },
  {
    icon: Heart,
    title: 'Family-Owned, Client-Focused',
    description:
      'As a family-owned company, the owner is personally invested in every project. You are not a number or an account. You work directly with decision-makers who care about your satisfaction, your budget, and the long-term quality of the work we deliver. Our reputation is our family name, and we protect it on every job.',
  },
];

const aboutFaqs = [
  {
    question: 'Who owns We Build and what is the company history?',
    answer:
      'We Build is a veteran and family-owned construction company founded in 2019 in Charlotte, North Carolina. The company was established by a veteran with extensive construction experience who saw an opportunity to bring military discipline, integrity, and accountability to the Charlotte construction market. Since our founding, We Build has grown from a small commercial upfit contractor into a full-service commercial construction company offering commercial construction, roof coating, and more. The owner remains personally involved in every project, ensuring the quality and client service standards that have driven our growth.',
  },
  {
    question: 'What are the benefits of hiring a veteran-owned construction company?',
    answer:
      'Hiring a veteran-owned construction company like We Build means working with a team whose culture is built on military values: discipline, accountability, clear communication, mission-focus, and teamwork. These values translate directly into better construction project outcomes. Veterans are trained to plan meticulously, execute under pressure, adapt to changing conditions, and never quit until the mission is complete. For clients, this means realistic schedules that are met, budgets that are respected, problems that are solved proactively, and a contractor who takes personal ownership of your project success. Additionally, many government and corporate procurement programs give preference to veteran-owned businesses.',
  },
  {
    question: 'Is We Build licensed and insured?',
    answer:
      'Yes. We Build holds active general contractor licenses in both North Carolina (NC Licensing Board for General Contractors) and South Carolina (SC Contractors Licensing Board). We carry comprehensive general liability insurance, workers compensation insurance, and commercial auto insurance. We provide certificates of insurance proactively as part of our contract process. Our dual-state licensing means we can legally perform construction work throughout both states, and our insurance coverage ensures your project and property are fully protected throughout the construction process.',
  },
  {
    question: 'What does USGBC membership mean for my project?',
    answer:
      'Our U.S. Green Building Council (USGBC) membership means We Build has access to the latest sustainable building resources, education, and frameworks including LEED standards. For your project, this translates to expert guidance on energy-efficient building systems, sustainable material specifications, waste reduction strategies, and green building practices that lower long-term operating costs. Whether you are building a new commercial facility or renovating an existing space, our USGBC membership ensures we can advise on environmentally responsible options that benefit both your bottom line and the environment.',
  },
  {
    question: 'How much construction experience does the We Build team have?',
    answer:
      'The We Build team brings over 60 years of combined construction experience spanning commercial building, roof coating and restoration, and project management. Our experience covers a wide range of project types including office buildings, retail spaces, restaurants, medical facilities, commercial upfits, and industrial projects. This depth of experience means we have encountered virtually every construction challenge and know how to solve it efficiently while keeping your project on schedule and on budget.',
  },
  {
    question: 'What areas does We Build serve?',
    answer:
      'We Build serves the entire Charlotte metropolitan area and beyond. Our primary service areas include Charlotte, South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, and Fort Mill, SC. Our headquarters is located at 14330 S Lakes Drive, Charlotte NC 28273, and our dual-state licensing (NC and SC) allows us to take on projects throughout both states without licensing complications. We are especially well-established in South Charlotte, Lake Norman, and the Fort Mill corridor.',
  },
  {
    question: 'Does We Build offer free consultations?',
    answer:
      'Yes. We Build provides free project consultations for all construction projects. During the initial consultation, we visit your site (or review your plans), discuss your goals and budget, and provide a detailed written proposal with clear line items. Our proposals are thorough and transparent so you can make informed decisions. There is no pressure, no obligation, and no hidden fees. Contact us at (980) 471-1745 or visit our contact page to schedule your free consultation.',
  },
  {
    question: 'What types of construction projects does We Build handle?',
    answer:
      'We Build handles a comprehensive range of commercial construction projects. Our services include ground-up commercial construction, commercial upfits and tenant improvements, restaurant build-outs, medical facility construction, retail spaces, office buildings, industrial projects, and commercial roof coating through our We Coat division.',
  },
  {
    question: 'How is We Build different from other construction companies in Charlotte?',
    answer:
      'We Build is differentiated by several factors that most Charlotte contractors cannot match. First, our veteran ownership instills a culture of discipline, accountability, and mission-focus that produces better project outcomes. Second, our USGBC membership ensures we can advise on sustainable building practices. Third, our dual-state licensing (NC and SC) provides flexibility for clients near the state border. Fourth, our transparent pricing model means no hidden fees or surprise change orders. And fifth, as a family-owned company, the owner is personally involved in every project, ensuring the quality and care that larger firms often cannot provide.',
  },
  {
    question: 'How does veteran ownership influence the way We Build runs construction projects?',
    answer:
      'Veteran ownership shapes every aspect of how We Build operates. Military service instills a planning-first mentality — we develop detailed scopes, schedules, and contingency plans before breaking ground, just as a mission is planned before execution. On the job site, this translates to clear daily objectives for every crew, disciplined safety protocols, and proactive problem-solving rather than reactive firefighting. Clients consistently tell us they notice the difference in communication, punctuality, and follow-through compared to other contractors they have worked with in the Charlotte market.',
  },
  {
    question: 'What sustainable building certifications and practices does We Build support?',
    answer:
      'As a U.S. Green Building Council member, We Build supports LEED-aligned sustainable building practices across our commercial projects in Charlotte and the Carolinas. We specify energy-efficient HVAC systems, low-VOC paints and adhesives, FSC-certified lumber, recycled-content building materials, and high-performance insulation. Our We Coat roof coating division extends roof life by ten to twenty years — keeping thousands of tons of roofing material out of Mecklenburg County landfills. We also advise clients on energy modeling, daylighting strategies, and water-efficient fixtures that reduce operating costs over the life of the building.',
  },
  {
    question: 'How long has We Build been serving the Charlotte construction market?',
    answer:
      'We Build was founded in Charlotte, North Carolina in 2019 and has been delivering commercial construction, upfits, and roof coatings across the region ever since. While the company is relatively young, our leadership team brings over sixty years of combined construction experience spanning commercial builds, industrial projects, and specialty coatings. That depth of field knowledge, combined with fresh energy and veteran-driven accountability, has fueled our growth from a small upfit contractor to a multi-state construction company serving Charlotte, Fort Mill, Lake Norman, and the surrounding Carolinas.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(aboutFaqs)]} />

      <PageHero
        title="About We Build"
        subtitle="Veteran & Family Owned Construction Company — Charlotte, NC"
        backgroundImage="/images/about-hero.jpg"
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Excellence in Charlotte Since 2019
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned construction company
                proudly based in Charlotte, North Carolina. Founded in 2019, our
                company was born from a simple conviction: Charlotte deserved a
                construction company that combined military discipline with
                family values and genuine craftsmanship. Our founder, a veteran
                with decades of construction experience, saw firsthand how the
                industry often fell short on communication, transparency, and
                accountability. We Build was created to change that.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our earliest days, We Build focused on{' '}
                <Link href="/services/commercial-construction" className="text-primary hover:underline">
                  commercial construction
                </Link>{' '}
                projects in the Charlotte metro area. Our first projects were{' '}
                <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                  commercial upfits
                </Link>{' '}
                for local businesses that needed reliable, quality-focused
                contractors who could deliver on time and on budget. Word spread
                quickly. Clients appreciated our veteran-instilled work ethic,
                our transparent pricing, and our genuine commitment to doing the
                job right the first time. As our reputation grew, so did our
                scope of services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, We Build is a full-service commercial construction company serving
                clients across Charlotte,{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                ,{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>
                ,{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill, SC
                </Link>
                , and the surrounding region. We offer everything from
                ground-up commercial building to{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  commercial roof coating
                </Link>{' '}
                . Our team brings over 60 years of combined construction
                experience, and every project receives the same level of
                attention, professionalism, and commitment to quality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have grown steadily by staying true to our founding
                principles: do what you say, deliver quality work, communicate
                honestly, and treat every client like family. We are proud to be
                a trusted construction partner for businesses
                throughout the Charlotte region, and we look forward to building
                that trust with you. View our completed work on our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  portfolio page
                </Link>
                .
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="We Build construction team Charlotte NC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold">Why We Build</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission at We Build is to provide top-quality construction
                services backed by an unwavering commitment to outstanding
                customer service. We strive to maintain the highest standards of
                craftsmanship, integrity, and efficiency while being dedicated
                to delivering exceptional projects for our clients and fostering
                long-term relationships that extend well beyond the final
                walkthrough.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every client deserves a contractor who listens
                carefully, communicates honestly, delivers what they promise,
                and stands behind their work without exception. This belief
                drives everything we do — from the first phone call to the
                final inspection and beyond. We measure our success not by the
                number of projects we complete, but by the number of clients
                who trust us with their next project and refer us to their
                colleagues and neighbors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission extends beyond individual projects. We are committed
                to building Charlotte&apos;s future responsibly through sustainable
                construction practices, local hiring, veteran support, and
                community involvement. Every building we construct, every space
                we renovate, and every roof we restore contributes to the
                growth and vitality of the community we call home.
              </p>
            </div>
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Vision
              </span>
              <h2 className="text-3xl font-bold">Building Charlotte&apos;s Future</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be Charlotte&apos;s most trusted construction
                company — known for veteran-owned integrity, sustainable
                building practices, and spaces that make businesses thrive and
                families feel at home. We envision a Charlotte built with
                quality, purpose, and care, where every structure reflects the
                craftsmanship and commitment of the people who built it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Charlotte continues its rapid growth, We Build is committed
                to building responsibly. Our membership in the{' '}
                <strong>U.S. Green Building Council (USGBC)</strong> reflects
                our dedication to sustainable construction practices that
                benefit our clients, our community, and the environment. We
                believe the best construction companies do more than build
                structures — they build communities, create spaces where people
                thrive, and leave the places they work better than they found
                them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Looking ahead, We Build is investing in expanded capabilities
                including our{' '}
                <Link href="/we-coat" className="text-primary hover:underline">
                  We Coat
                </Link>{' '}
                commercial roof coating division and our commitment to staying
                at the forefront of construction technology and sustainable
                building practices. Our goal is simple: to be the construction
                company that Charlotte trusts most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran-Owned & Family-Operated */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="We Build veteran-owned construction Charlotte"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Veteran Owned & Family Operated
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Military Values, Construction Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is proudly veteran-owned and family-operated. Our
                military background is not just a label — it fundamentally
                shapes how we operate every day. The discipline, accountability,
                teamwork, and mission-focus that military service instills
                translate directly into better construction project outcomes for
                our clients. When you hire a veteran-owned contractor, you are
                hiring a team that was trained to plan thoroughly, execute under
                pressure, and never accept anything less than mission success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In the military, there is a clear chain of command and every
                team member knows their role, their responsibilities, and the
                standards they must meet. We bring that same organizational
                clarity to construction. Our project managers lead with
                authority and accountability. Our field crews execute with
                precision and pride. And our clients always know who is
                responsible, what is happening, and when their project will be
                complete. This structured approach eliminates the confusion,
                finger-pointing, and missed deadlines that plague so many
                construction projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Being family-operated adds another dimension to our work. The
                owner is personally invested in every project because our family
                name is on the line. You are not dealing with a faceless
                corporation or a distant management team. You are working with
                a family that cares about your project as if it were their own
                home or business. That personal investment shows in the quality
                of our work, the responsiveness of our communication, and the
                pride we take in every finished project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also believe in supporting our fellow veterans and military
                families. We are proud to be working with Purple Heart Homes,
                bringing the discipline and standards of military service to
                every project we deliver. When you choose We Build, you are
                supporting a company that supports those who served.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'Discipline & precision',
                  'Mission-first mentality',
                  'Clear chain of command',
                  'Zero-excuse accountability',
                  'Safety non-negotiable',
                  'Team-based execution',
                  'Structured project management',
                  'Personal ownership of quality',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Meet the People Behind We Build
            </h2>
            <p className="text-muted-foreground">
              Our team is the engine that drives everything We Build
              accomplishes. From experienced project managers and skilled
              tradespeople to our dedicated design consultants, every member of
              the We Build team shares a commitment to quality, accountability,
              and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HardHat className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our leadership team brings decades of experience in commercial
                  construction, project management, and business
                  operations. Led by our veteran founder, the leadership team
                  sets the standard for quality, integrity, and client service
                  that defines the We Build experience. They are hands-on
                  leaders who spend time on job sites, review project details
                  personally, and maintain direct relationships with clients.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Project Managers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our project managers are the single point of contact for every
                  client. They coordinate between architects, engineers, trade
                  partners, inspectors, and the client to ensure that every
                  phase of construction flows smoothly. Each project manager
                  brings years of field experience before moving into
                  management, which means they understand construction from the
                  ground up and can anticipate issues before they become problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Field Crews & Trade Partners</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled field crews and vetted trade partners execute the
                  hands-on work that turns plans into reality. Every crew member
                  is trained in safety protocols, quality standards, and the We
                  Build approach to construction. Our long-standing
                  relationships with local subcontractors in Charlotte mean
                  consistent quality, reliable scheduling, and competitive
                  pricing across every trade on your project.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Construction Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                60+ Years of Combined Construction Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The We Build team brings over 60 years of combined construction
                experience to every project. This is not theoretical knowledge
                from textbooks — it is hard-won expertise from decades of
                building in the field. Our team has designed and constructed{' '}
                <Link href="/services/office-buildouts" className="text-primary hover:underline">
                  office buildings
                </Link>
                ,{' '}
                <Link href="/services/retail-construction" className="text-primary hover:underline">
                  retail centers
                </Link>
                ,{' '}
                <Link href="/services/restaurant-construction" className="text-primary hover:underline">
                  restaurants
                </Link>
                ,{' '}
                <Link href="/services/medical-construction" className="text-primary hover:underline">
                  medical facilities
                </Link>
                ,{' '}
                <Link href="/services/industrial-construction" className="text-primary hover:underline">
                  industrial warehouses
                </Link>
                , and commercial roof restoration projects across
                North Carolina and South Carolina.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This breadth of experience means we understand the unique
                requirements of different industries and project types. A{' '}
                <Link href="/services/medical-construction" className="text-primary hover:underline">
                  medical facility
                </Link>{' '}
                has different code requirements than a{' '}
                <Link href="/services/restaurant-construction" className="text-primary hover:underline">
                  restaurant
                </Link>
                . A{' '}
                <Link href="/services/tenant-improvements" className="text-primary hover:underline">
                  retail tenant improvement
                </Link>{' '}
                has different timeline
                pressures than a ground-up commercial build. And a{' '}
                <Link href="/services/roof-coating" className="text-primary hover:underline">
                  commercial roof coating
                </Link>{' '}
                project requires specialized knowledge that differs entirely
                from ground-up construction. Our team has the depth and
                diversity of experience to handle all of it — efficiently,
                professionally, and to the highest standards.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We have also built deep expertise in Charlotte&apos;s specific
                building environment: local building codes, permitting
                processes, inspection requirements, soil conditions, weather
                patterns, and the subcontractor landscape. This local knowledge
                saves our clients time and money by avoiding common mistakes
                and navigating the construction process efficiently. See
                examples of our work on our{' '}
                <Link href="/portfolio" className="text-primary hover:underline">
                  project portfolio
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '60+', label: 'Years Combined Experience' },
                { number: '2', label: 'State Licenses (NC & SC)' },
                { number: '6+', label: 'Certifications & Memberships' },
                { number: '2019', label: 'Year Founded' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted rounded-lg p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Construction Services Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Comprehensive Construction Services in Charlotte
            </h2>
            <p className="text-muted-foreground">
              We Build delivers a full range of construction services for
              commercial clients across the Charlotte metro
              area. Each service is backed by our veteran-owned commitment to
              quality, transparency, and on-time delivery. Whether you need a
              ground-up commercial build or a tenant upfit,
              our experienced team delivers results you can count on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOverview.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View {service.title} <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              We also offer specialized{' '}
              <Link href="/we-coat" className="text-primary hover:underline">
                commercial roof coating through We Coat
              </Link>
              ,{' '}
              <Link href="/services/green-building" className="text-primary hover:underline">
                green building
              </Link>
              .{' '}
              <Link href="/services" className="text-primary hover:underline font-medium">
                View all of our construction services
              </Link>
              , or read about our latest projects and industry insights on our{' '}
              <Link href="/blog" className="text-primary hover:underline">
                blog
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Values That Define We Build
            </h2>
            <p className="text-muted-foreground">
              These core values are not aspirational statements on a wall. They
              are the standards we hold ourselves to on every project, every
              day. They guide our decisions, shape our culture, and define the
              experience our clients receive. Each value reflects the veteran
              discipline and family commitment that set We Build apart from
              other Charlotte construction companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              We Build Timeline
            </h2>
            <p className="text-muted-foreground">
              From our founding in 2019 to our continued growth today, every
              milestone reflects our commitment to expanding our capabilities
              while maintaining the quality and integrity our clients expect.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm text-primary font-semibold">
                      {item.year}
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Certifications, Licenses & Memberships
            </h2>
            <p className="text-muted-foreground">
              We maintain the highest industry standards through active
              licensing, professional certifications, and membership in leading
              construction organizations. These credentials are more than
              badges — they represent verified competence, ongoing education,
              and financial responsibility. Each certification reflects our
              commitment to professional excellence and provides our clients
              with the confidence that their project is in qualified hands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={64}
                      height={64}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose We Build */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              The We Build Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Clients Choose We Build
            </h2>
            <p className="text-muted-foreground">
              Charlotte has no shortage of construction companies. But clients
              choose We Build — and keep coming back — because of the unique
              combination of veteran discipline, family commitment,
              professional credentials, and genuine client care that defines
              our approach to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason) => (
              <Card key={reason.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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

      {/* Community Involvement */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Community
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Investing in the Charlotte Community
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is more than a construction company — we are active
                members of the Charlotte community. Our headquarters at 14330 S
                Lakes Drive in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>{' '}
                is home base for a team that lives, works, and raises families
                in this region. We believe that the strength of a construction
                company is measured not only by the buildings it creates but by
                the community it supports.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a veteran-owned company, supporting veteran causes and
                organizations is close to our heart. We support local veteran
                organizations and participate in community events that honor
                military service members and their families.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We Build partners with local suppliers and subcontractors
                whenever possible, keeping construction dollars circulating
                within the Charlotte economy. We invest in training and
                development for our team members. And we are proud to contribute to
                Charlotte&apos;s built environment through quality construction that
                enhances neighborhoods, supports local businesses, and creates
                spaces where people thrive.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 space-y-6">
              <h3 className="text-xl font-semibold">Our Community Commitments</h3>
              {[
                {
                  title: 'Veteran Community Support',
                  description:
                    'Supporting veteran-focused community organizations and honoring military service members and their families.',
                },
                {
                  title: 'Local Supplier Partnerships',
                  description:
                    'Prioritizing Charlotte-area suppliers and subcontractors to keep construction investment in our local economy.',
                },
                {
                  title: 'Workforce Development',
                  description:
                    'Investing in training and career development for our team, building the next generation of skilled construction professionals.',
                },
                {
                  title: 'Sustainable Building Practices',
                  description:
                    'USGBC membership and sustainable construction practices that benefit our community and environment for decades.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Where We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Serving the Greater Charlotte Metro Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                From our headquarters in{' '}
                <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                  South Charlotte
                </Link>
                , We Build serves clients across the entire Charlotte
                metropolitan area and into South Carolina. Our dual-state
                licensing (NC and SC) allows us to take on projects throughout
                the region without licensing complications, providing seamless
                service whether your project is in North Carolina or South
                Carolina.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your project is in uptown Charlotte, the Ballantyne
                corporate corridor, lakefront{' '}
                <Link href="/areas/lake-norman" className="text-primary hover:underline">
                  Lake Norman
                </Link>
                , or growing{' '}
                <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                  Fort Mill
                </Link>
                , our team brings the same commitment to quality and
                professionalism. We know the local building codes, permitting
                processes, and subcontractor landscape in every community we
                serve. This local expertise saves you time and money.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Our Headquarters</p>
                  <p className="text-sm text-muted-foreground">
                    14330 S Lakes Drive, Charlotte NC 28273
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">
                Communities We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Charlotte', href: '' },
                  { name: 'South Charlotte', href: '/areas/south-charlotte' },
                  { name: 'Ballantyne', href: '' },
                  { name: 'Pineville', href: '' },
                  { name: 'Matthews', href: '' },
                  { name: 'Mint Hill', href: '' },
                  { name: 'Huntersville', href: '' },
                  { name: 'Cornelius', href: '' },
                  { name: 'Davidson', href: '' },
                  { name: 'Mooresville', href: '' },
                  { name: 'Lake Norman', href: '/areas/lake-norman' },
                  { name: 'Waxhaw', href: '' },
                  { name: 'Marvin', href: '' },
                  { name: 'Weddington', href: '' },
                  { name: 'Indian Trail', href: '' },
                  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc' },
                ].map((area) => (
                  <div key={area.name} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                    {area.href ? (
                      <Link
                        href={area.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {area.name}
                      </Link>
                    ) : (
                      <span className="text-sm">{area.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Client Testimonial
            </span>
            <blockquote className="text-xl md:text-2xl leading-relaxed mt-6 mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention
              to detail and commitment to quality exceeded our expectations.
              The team was professional, communicative, and delivered on time
              and within budget. We highly recommend We Build for any
              construction project.&quot;
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

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Frequently Asked Questions About We Build
              </h2>
              <p className="text-muted-foreground">
                Have questions about our company, our services, or what it is
                like to work with a veteran-owned construction company? Here
                are answers to the questions we hear most often. For additional
                questions,{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  contact our team directly
                </Link>
                .
              </p>
            </div>
            <div className="space-y-6">
              {aboutFaqs.map((faq) => (
                <div key={faq.question} className="bg-muted rounded-lg p-6">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to work with Charlotte&apos;s trusted veteran-owned
            construction company? Whether you need{' '}
            <Link href="/services/commercial-construction" className="underline hover:text-primary-foreground">
              commercial construction
            </Link>
            {' '}or{' '}
            <Link href="/services/roof-coating" className="underline hover:text-primary-foreground">
              roof coating
            </Link>
            , contact us today for a free consultation and discover the We
            Build difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
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
