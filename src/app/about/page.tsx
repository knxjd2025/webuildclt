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
  Home,
  Paintbrush,
  Layers,
  Leaf,
  Star,
  Clock,
  MapPin,
  Wrench,
  HardHat,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About We Build | Veteran-Owned Construction Company Charlotte NC',
  description:
    'We Build is a veteran and family-owned construction company in Charlotte, NC. 60+ years combined experience. Licensed in NC & SC. USGBC member. Commercial, residential, roof coating.',
  keywords: [
    'about we build charlotte',
    'veteran owned construction company charlotte nc',
    'family owned contractor charlotte',
    'construction company charlotte nc',
  ],
};

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Safety is not negotiable. It is the foundation we stand on for every project. Our team follows strict OSHA safety protocols, conducts daily safety briefings, and maintains a zero-tolerance policy for unsafe practices. Every worker on our job sites is trained, equipped, and empowered to prioritize safety.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We do what we say and say what we do. Honesty guides every decision — from the initial estimate to the final walkthrough. When we encounter a problem, we tell you immediately and present solutions. Our pricing is transparent, our timelines are realistic, and our word is our bond.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description:
      'Great construction is a team effort. Collaboration with our clients, within our crew, and among our subcontractor partners drives exceptional results. We communicate proactively, respect everyone involved, and work toward a shared goal — your successful project.',
  },
  {
    icon: Target,
    title: 'Accountability',
    description:
      'We take full responsibility for our work and stand behind every project we complete. Our veteran heritage instills a mission-first mentality — when we commit to a scope, a budget, and a timeline, we hold ourselves accountable for delivering. No excuses, only results.',
  },
];

const certifications = [
  {
    name: 'U.S. Green Building Council',
    image: '/images/certifications/usgbc-member-light.png',
    description: 'Committed to sustainable building practices and green construction standards.',
  },
  {
    name: 'NC Licensing Board for General Contractors',
    image: '/images/certifications/nclbgc.png',
    description: 'Licensed general contractor authorized to perform construction work in North Carolina.',
  },
  {
    name: 'CHAMP',
    image: '/images/certifications/champ.png',
    description: 'Certified in the Charlotte Housing Authority Maintenance Program.',
  },
  {
    name: 'SC General Contractors Licensing Board',
    image: '/images/certifications/scgc.png',
    description: 'Licensed to perform construction work throughout South Carolina.',
  },
  {
    name: 'Professional Home Builders',
    image: '/images/certifications/phh.png',
    description: 'Member of the professional home builders association.',
  },
  {
    name: 'IIBEC - International Institute of Building Enclosure Consultants',
    image: '/images/certifications/iibec.png',
    description: 'Certified in building enclosure consulting for roof coating and restoration.',
  },
];

const timeline = [
  { year: '2019', title: 'Founded in Charlotte', description: 'We Build is established as a veteran and family-owned construction company in Charlotte, NC.' },
  { year: '2020', title: 'First Commercial Projects', description: 'Completed our first commercial upfit projects across the Charlotte metro area.' },
  { year: '2021', title: 'Residential Expansion', description: 'Expanded services to include custom home building and residential additions.' },
  { year: '2022', title: 'We Coat Launch', description: 'Launched We Coat, our dedicated commercial roof coating and restoration division.' },
  { year: '2023', title: 'Design Center Opens', description: 'Opened the WeBuild Design Center showroom in South Charlotte for hands-on material selection.' },
  { year: '2024', title: 'SC License Obtained', description: 'Obtained South Carolina general contractor license, expanding service area into Fort Mill and York County.' },
  { year: '2025', title: 'IIBEC Certification', description: 'Team achieved IIBEC certification for professional building enclosure consulting.' },
  { year: '2026', title: 'USGBC Membership', description: 'Joined the U.S. Green Building Council, reinforcing our commitment to sustainable construction.' },
];

const serviceOverview = [
  { icon: Building2, title: 'Commercial Construction', href: '/services/commercial-construction', description: 'Ground-up commercial builds, office buildings, retail spaces, restaurants, medical facilities, and industrial projects.' },
  { icon: Paintbrush, title: 'Commercial Upfits', href: '/services/commercial-upfits', description: 'Office renovations, tenant improvements, restaurant build-outs, and retail transformations that minimize business disruption.' },
  { icon: Home, title: 'Custom Home Building', href: '/services/custom-home-builder', description: 'Design and build custom homes from lot selection through move-in, with hands-on support at our Design Center.' },
  { icon: Layers, title: 'Roof Coating & Restoration', href: '/services/roof-coating', description: 'Eco-friendly commercial roof coating that saves up to 50% vs. full replacement. IIBEC certified team.' },
  { icon: Wrench, title: 'Residential Additions', href: '/services/residential-additions', description: 'Room additions, second stories, garage conversions, and in-law suites that blend seamlessly with your home.' },
  { icon: HardHat, title: 'Design-Build', href: '/services/design-build', description: 'Integrated design and construction under one roof. Visit our Design Center to experience the difference.' },
];

const aboutFaqs = [
  {
    question: 'Who owns We Build?',
    answer: 'We Build is a veteran and family-owned company founded in 2019 in Charlotte, NC. Our founders bring military discipline, integrity, and accountability to every construction project. The owner is personally involved in every project, ensuring the quality and service our clients expect.',
  },
  {
    question: 'How long has We Build been in business?',
    answer: 'We Build was founded in 2019 in Charlotte, North Carolina. While the company is relatively young, our team brings over 60 years of combined construction experience spanning commercial building, residential construction, roof coating, and project management.',
  },
  {
    question: 'What certifications does We Build hold?',
    answer: 'We Build holds active general contractor licenses in both North Carolina (NC Licensing Board for General Contractors) and South Carolina (SC Contractors\' Licensing Board). We are also members of the U.S. Green Building Council (USGBC), hold IIBEC certification for building enclosure consulting, and maintain multiple professional trade certifications.',
  },
  {
    question: 'What areas does We Build serve?',
    answer: 'We serve the entire Charlotte metropolitan area including Charlotte, South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, and Fort Mill, SC. Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273.',
  },
  {
    question: 'Is We Build insured?',
    answer: 'Yes. We Build carries comprehensive general liability insurance, workers\' compensation insurance, and commercial auto insurance. We provide certificates of insurance proactively as part of our contract process. Your project and property are fully protected.',
  },
  {
    question: 'What makes We Build different from other contractors?',
    answer: 'We Build combines veteran-owned accountability with a dedicated Design Center, integrated design-build services, USGBC membership for sustainable practices, dual-state licensing (NC & SC), and transparent pricing with no hidden costs. Our family-owned approach means the owner is personally invested in every project\'s success.',
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

      {/* Company Story — Expanded */}
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
                family values and genuine craftsmanship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founders brought over 60 years of combined construction
                experience to We Build — spanning commercial construction,
                residential building, roof coating, and project management. That
                experience, combined with the accountability and mission-focus
                instilled by military service, created a construction company
                that operates differently than most.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At We Build, we do not just build structures. We build
                relationships based on trust, transparency, and results. Every
                project — whether a multi-million dollar commercial build or a
                kitchen renovation — receives the same level of attention,
                professionalism, and commitment to quality. Our promise is
                simple: what you want, how you want it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, We Build serves commercial and residential clients across
                the Charlotte metro area and into South Carolina. We have grown
                steadily by staying true to our founding principles, and we are
                proud to be a trusted construction partner for businesses and
                families throughout the region.
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
                services backed by our commitment to outstanding customer
                service. We strive to maintain the highest standards of
                craftsmanship, integrity, and efficiency while being dedicated
                to delivering the best projects to our clients and fostering
                long-term relationships.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every client deserves a contractor who listens
                carefully, communicates honestly, delivers what they promise,
                and stands behind their work. This belief drives everything we
                do — from the first phone call to the final walkthrough and
                beyond.
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
                families feel at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Charlotte grows, we are committed to building responsibly. Our
                USGBC membership reflects our dedication to sustainable
                construction practices that benefit our clients, our community,
                and the environment. We envision a Charlotte built with quality,
                purpose, and care — and every project we complete moves us closer
                to that vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran-Owned Section */}
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
                Veteran Owned
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Military Values, Construction Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is proudly veteran-owned. Our military background is not
                just a label — it fundamentally shapes how we operate. The
                discipline, accountability, teamwork, and mission-focus that
                military service instills translate directly into better
                construction project outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When we commit to a timeline, a budget, or a quality standard,
                we hold ourselves accountable. There are no excuses — only
                solutions and results. This veteran mentality means you get a
                contractor who plans meticulously, communicates clearly, adapts
                when conditions change, and drives toward project completion with
                unwavering focus.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team operates with the same unit cohesion that makes military
                operations successful. Every crew member, subcontractor, and
                trade partner is aligned around a shared mission: delivering your
                project to the highest standards, on time, and on budget.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'Discipline & precision',
                  'Mission-first mentality',
                  'Clear communication',
                  'Zero-excuse accountability',
                  'Safety non-negotiable',
                  'Team-based execution',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section — Expanded */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Excellence Across Every Service
            </h2>
            <p className="text-muted-foreground">
              We Build delivers comprehensive construction services for
              commercial and residential clients across the Charlotte metro
              area. Each service is backed by our veteran-owned commitment to
              quality, transparency, and on-time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceOverview.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                    Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section — Expanded */}
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
              experience our clients receive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                    <div className="text-sm text-primary font-semibold">{item.year}</div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Center Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Design Center
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Where Your Vision Comes to Life
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A major milestone in our journey was opening the WeBuild Design
                Center in South Charlotte. This dedicated showroom gives our
                clients a hands-on experience where they can explore materials,
                browse curated selections, and make confident design decisions
                with our experienced team by their side.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Design Center is central to our design-build approach. Rather
                than making selections from catalog images, you see and touch
                actual materials — countertops, flooring, cabinetry, tile,
                fixtures, and more. Our design team helps you coordinate
                selections, visualize combinations, and stay within budget.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you are building a custom home, renovating a commercial
                space, or planning an addition, the Design Center transforms the
                selection process from overwhelming to enjoyable. Visits are by
                appointment so you receive personalized, unrushed attention.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild>
                  <Link href="/design-center">
                    Visit the Design Center
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Virtual Tour
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: '/images/showroom/lobby.jpg', alt: 'Design Center lobby' },
                { src: '/images/showroom/kitchen.jpg', alt: 'Kitchen display' },
                { src: '/images/showroom/bedroom.jpg', alt: 'Bedroom display' },
                { src: '/images/showroom/lobby2.jpg', alt: 'Material selection area' },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden image-hover">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section — Expanded */}
      <section className="py-20 bg-muted">
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
              construction organizations. These credentials reflect our
              commitment to quality, safety, and professional excellence.
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
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
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
                From our headquarters in South Charlotte, We Build serves
                clients across the entire Charlotte metropolitan area and into
                South Carolina. Our dual-state licensing (NC and SC) allows us
                to take on projects throughout the region without licensing
                complications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your project is in uptown Charlotte, the Ballantyne
                corporate corridor, lakefront Lake Norman, or growing Fort Mill,
                our team brings the same commitment to quality and
                professionalism. We know the local building codes, permitting
                processes, and subcontractor landscape in every community we
                serve.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Our Headquarters</p>
                  <p className="text-sm text-muted-foreground">14330 S Lakes Drive, Charlotte NC 28273</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Charlotte', 'South Charlotte', 'Ballantyne', 'Pineville',
                  'Matthews', 'Mint Hill', 'Huntersville', 'Cornelius',
                  'Davidson', 'Mooresville', 'Lake Norman', 'Waxhaw',
                  'Marvin', 'Weddington', 'Indian Trail', 'Fort Mill, SC',
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{area}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About We Build FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {aboutFaqs.map((faq) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to work with Charlotte&apos;s trusted veteran-owned
            construction company? Contact us today for a free consultation and
            discover the We Build difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:7045748124">
                <Phone className="mr-2 h-5 w-5" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
