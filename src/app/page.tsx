import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description:
      'Full-service commercial construction from the ground up. Office buildings, retail spaces, restaurants, medical facilities, and industrial projects across the Charlotte metro area.',
    href: '/services/commercial-construction',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    description:
      'Transform your business space with expert commercial upfit services. Office renovations, tenant improvements, restaurant build-outs, and retail transformations.',
    href: '/services/commercial-upfits',
  },
  {
    icon: Layers,
    title: 'Commercial Roof Coatings',
    description:
      'Eco-friendly roof restoration that saves up to 50% compared to full replacement. Silicone, acrylic, elastomeric, and SPF coatings for commercial buildings.',
    href: '/services/roof-coating',
  },
  {
    icon: Home,
    title: 'Custom Home Building',
    description:
      'Build the home of your dreams with Charlotte\'s trusted custom home builder. From lot selection through move-in, we guide you every step.',
    href: '/services/custom-home-builder',
  },
  {
    icon: PlusCircle,
    title: 'Residential Additions',
    description:
      'Expand your living space with room additions, second stories, garage conversions, and in-law suites that seamlessly match your existing home.',
    href: '/services/residential-additions',
  },
  {
    icon: Hammer,
    title: 'Design-Build Services',
    description:
      'Complete design and construction under one roof. Visit our Design Center to explore materials and collaborate with our integrated team.',
    href: '/services/design-build',
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
      'Contact us to discuss your project. We listen to your vision, assess your needs, and provide an initial scope and budget discussion — completely free.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Design & Planning',
    description:
      'Our design-build team creates detailed plans, helps you select materials at our Design Center, handles engineering, and manages all permit applications.',
  },
  {
    icon: HardHat,
    step: '03',
    title: 'Construction',
    description:
      'Our experienced crews bring your project to life with quality craftsmanship, regular progress updates, and transparent budget management throughout.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Delivery & Warranty',
    description:
      'A thorough walkthrough ensures everything meets your expectations. We stand behind our work with comprehensive warranties and responsive post-project support.',
  },
];

const areasServed = [
  { name: 'Charlotte', href: '/services/general-contractor' },
  { name: 'South Charlotte / Ballantyne', href: '/areas/south-charlotte' },
  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc' },
  { name: 'Lake Norman / Cornelius', href: '/areas/lake-norman' },
  { name: 'Huntersville', href: '/services/general-contractor' },
  { name: 'Matthews / Mint Hill', href: '/services/general-contractor' },
  { name: 'Waxhaw / Marvin', href: '/services/general-contractor' },
  { name: 'Mooresville', href: '/areas/lake-norman' },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'We hold active general contractor licenses in both North Carolina and South Carolina, backed by comprehensive insurance coverage. Your project is fully protected.',
  },
  {
    icon: Users,
    title: 'Veteran & Family Owned',
    description:
      'Founded by veterans who bring military discipline, integrity, and accountability to every project. We treat your project with the same care we\'d give our own family.',
  },
  {
    icon: Award,
    title: '60+ Years Combined Experience',
    description:
      'Our seasoned team brings decades of hands-on construction expertise to projects of every size — from commercial builds to custom homes and everything in between.',
  },
  {
    icon: Leaf,
    title: 'USGBC Member',
    description:
      'As a proud U.S. Green Building Council member, we integrate sustainable building practices into every project — reducing environmental impact while improving building performance.',
  },
  {
    icon: Target,
    title: 'Design-Build Efficiency',
    description:
      'Our integrated design-build approach delivers projects 20-30% faster with fewer surprises. Visit our dedicated Design Center to experience the difference.',
  },
  {
    icon: Star,
    title: 'Transparent Pricing',
    description:
      'Detailed, line-item estimates with no hidden fees. You know exactly what you\'re getting and what it costs. No surprises at project completion.',
  },
];

const homeFaqs = [
  {
    question: 'What types of construction projects does We Build handle?',
    answer:
      'We Build provides full-service general contracting for commercial construction (offices, retail, restaurants, medical facilities, warehouses), residential construction (custom homes, additions, renovations), commercial roof coating and restoration, and design-build services. We handle projects of all sizes across the Charlotte metro area and into South Carolina.',
  },
  {
    question: 'What areas in Charlotte do you serve?',
    answer:
      'We serve the entire Charlotte metropolitan area including South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Lake Norman, Waxhaw, Marvin, Weddington, Indian Trail, and Fort Mill, SC. Our headquarters is at 14330 S Lakes Drive, Charlotte NC 28273.',
  },
  {
    question: 'Are you a licensed general contractor?',
    answer:
      'Yes. We Build holds active general contractor licenses in both North Carolina (NC Licensing Board for General Contractors) and South Carolina (SC Contractors\' Licensing Board). We are fully insured with general liability, workers\' compensation, and commercial auto coverage.',
  },
  {
    question: 'How much does construction cost in Charlotte?',
    answer:
      'Construction costs vary by project type: commercial upfits run $50-$175/sq ft, custom homes $200-$600+/sq ft, home additions $150-$400/sq ft, and commercial roof coating $2-$5/sq ft. We provide free, detailed estimates tailored to your specific project scope and requirements.',
  },
  {
    question: 'What is design-build construction?',
    answer:
      'Design-build is a project delivery method where one company handles both design and construction. This eliminates the communication gaps between separate architects and contractors, delivers projects 20-30% faster, and provides greater cost certainty. Our Design Center in South Charlotte is where clients explore materials and collaborate with our integrated design-build team.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. We provide free consultations and detailed, transparent estimates for all project types. Our estimates include line-item breakdowns so you understand exactly what is included. Contact us at (704) 574-8124 or through our website to schedule your free consultation.',
  },
  {
    question: 'What makes We Build different from other Charlotte contractors?',
    answer:
      'We Build combines veteran-owned accountability, a dedicated Design Center for hands-on material selection, integrated design-build efficiency, USGBC membership for sustainable practices, and transparent pricing with no hidden costs. Our family-owned approach means the owner is personally involved in every project.',
  },
  {
    question: 'How long does a typical construction project take?',
    answer:
      'Project timelines vary: commercial upfits typically take 3-5 months, custom homes 10-18 months, home additions 3-6 months, and commercial roof coating 2-5 days. We provide detailed project schedules during the planning phase and communicate proactively if timelines shift.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="We Build construction site in Charlotte NC"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-6 leading-tight">
              Commercial Construction{' '}
              <span className="text-primary">Charlotte, NC</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We Build is Charlotte&apos;s trusted commercial construction
              company. From commercial upfits and design-build to roof coatings,
              we deliver quality craftsmanship backed by 60+ years of combined
              experience. Veteran &amp; family-owned.
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

      {/* Stats Bar */}
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

      {/* About Section — Expanded */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-image.jpg"
                  alt="We Build construction team Charlotte NC"
                  fill
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
                Commercial Construction Excellence in Charlotte Since 2019
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a veteran and family-owned construction company
                proudly based in Charlotte, NC. Founded in 2019, our team brings
                over 60 years of combined experience in commercial construction,
                residential building, roof coating, and design-build services to
                every project we undertake.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a licensed general contractor in both North Carolina and South
                Carolina, we serve the entire Charlotte metropolitan area — from
                Ballantyne and South Charlotte to Fort Mill, Lake Norman, and
                beyond. Our mission is simple: deliver exactly what you want, how
                you want it, with the integrity and accountability that comes from
                our veteran values.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets We Build apart is our integrated design-build approach.
                Our dedicated Design Center in South Charlotte gives clients a
                hands-on experience where they can explore materials, get inspired,
                and make confident selections — all with our experienced team by
                their side. Combined with our USGBC membership and commitment to
                sustainable building practices, we deliver construction that is
                good for our clients, our community, and the environment.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Services Section — Expanded Descriptions */}
      <section className="py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Construction Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Full-Service Construction Company in Charlotte, NC
            </h2>
            <p className="text-muted-foreground">
              From commercial construction and office upfits to custom homes and
              eco-friendly roof coating, We Build offers comprehensive
              construction services for businesses and homeowners across the
              Charlotte metro area. Every project is backed by our veteran-owned
              commitment to quality, transparency, and on-time delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
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

      {/* Why Choose Us — NEW Section */}
      <section className="py-20 bg-background">
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
              NC.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process — NEW Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Construction Process
            </h2>
            <p className="text-muted-foreground">
              From your first call to the final walkthrough, our proven
              four-step process ensures your project is delivered on time, on
              budget, and exactly to your specifications. Here is how we make
              construction simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card key={step.title}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase — NEW */}
      <section className="py-20 bg-background">
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
              metro area — from commercial upfits to custom home builds.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/portfolio/fyzical-therapy.jpg"
                >
                  <source src="/videos/fyzical-upfit.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">FYZICAL Therapy — Commercial Upfit</p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/images/we-coat/mics-aerial-1.jpg"
                >
                  <source src="/videos/we-coat-charlotte.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-sm text-muted-foreground text-center">We Coat — Commercial Roof Coating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Recent Construction Projects in Charlotte
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Browse our portfolio of completed commercial construction,
                residential builds, and roof coating projects across the
                Charlotte metro area. Each project showcases the quality
                craftsmanship and attention to detail that We Build delivers.
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Testimonial Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              What Our Charlotte Clients Say
            </h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention
              to detail and commitment to quality exceeded our expectations. The
              team was professional, communicative, and delivered on time and
              within budget. We highly recommend We Build for any commercial
              construction project in the Charlotte area.&quot;
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

      {/* Areas Served — NEW Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Service Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Construction Services Across the Charlotte Metro Area
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build serves the entire Charlotte metropolitan area, including
                communities in Mecklenburg, Union, Iredell, Catawba, and York
                (SC) counties. Our South Charlotte headquarters at 14330 S Lakes
                Drive puts us within easy reach of every community we serve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a commercial upfit in Ballantyne, a custom home
                on Lake Norman, a roof coating in Fort Mill, or a restaurant
                build-out in South End, We Build has the local knowledge and
                licensed credentials to deliver your project in both North
                Carolina and South Carolina.
              </p>
              <div className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
              <div className="grid grid-cols-2 gap-4">
                {areasServed.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{area.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t see your area? We likely serve it. Contact us to
                  confirm availability for your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USGBC Member Section */}
      <section className="py-16 bg-muted">
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
                impact. Green building is not just good for the planet — it saves
                our clients money through lower operating costs and higher
                property values.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog/what-is-usgbc-green-building">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section — NEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Questions About Construction in Charlotte?
              </h2>
              <p className="text-muted-foreground">
                We answer the questions Charlotte homeowners and business owners
                ask most about construction, costs, and working with a general
                contractor.
              </p>
            </div>
            <div className="space-y-6">
              {homeFaqs.map((faq) => (
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

      {/* Blog Preview — NEW Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              From Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Construction Tips & Insights
            </h2>
            <p className="text-muted-foreground">
              Expert advice on commercial construction, custom homes, roof
              coating, and building in Charlotte, NC.
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
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project in Charlotte?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact Charlotte&apos;s trusted construction company today for a
            free consultation and detailed estimate. Whether you need commercial
            construction, a custom home, roof coating, or a design-build
            project, We Build delivers quality results on time and on budget.
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
                <Phone className="mr-2 h-5 w-5" />
                (704) 574-8124
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Finance Section */}
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
