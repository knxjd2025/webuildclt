import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building2,
  Home,
  Paintbrush,
  Hammer,
  PlusCircle,
  Layers,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Full-service commercial builds from ground up.',
    href: '/portfolio?category=commercial',
  },
  {
    icon: Paintbrush,
    title: 'Commercial Upfits',
    description: 'Transform your business space with our upfit services.',
    href: '/portfolio?category=commercial',
  },
  {
    icon: Layers,
    title: 'Commercial Roof Coatings',
    description: 'Eco-friendly roof restoration solutions.',
    href: '/we-coat',
  },
  {
    icon: Home,
    title: 'Residential New Builds',
    description: 'Build the home of your dreams with us.',
    href: '/portfolio?category=residential',
  },
  {
    icon: PlusCircle,
    title: 'Residential Additions',
    description: 'Expand your living space seamlessly.',
    href: '/portfolio?category=residential',
  },
  {
    icon: Hammer,
    title: 'Design & Build',
    description: 'Complete design-build services under one roof.',
    href: '/design-center',
  },
];

const features = [
  '60+ years combined experience',
  'Veteran & family owned',
  'USGBC member',
  'Licensed in NC & SC',
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 pt-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Excellence in{' '}
              <span className="text-primary">Charlotte</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Family-owned construction company with over 60 years of combined
              experience. From commercial builds to custom homes, we deliver
              quality craftsmanship you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Feature badges */}
            <div className="mt-12 flex flex-wrap gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-image.jpg"
                  alt="We Build team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                  About We Build
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building More Than Just Structures
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We Build is a family-owned company proudly based in Charlotte,
                North Carolina. With over 60 years of combined experience in
                commercial construction and roof coating services, our team
                brings seasoned expertise, personal dedication, and a commitment
                to delivering exactly what our clients need—how they need it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to build more than just structures. We create
                spaces where businesses grow and families feel at home. From
                custom residential builds to large-scale commercial projects, we
                bring the same level of passion, precision, and professionalism
                to every job.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What We Build
            </h2>
            <p className="text-muted-foreground">
              From commercial construction to residential dreams, we offer
              comprehensive building services tailored to your needs.
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
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Our Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Recent Projects
              </h2>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio items - these would come from WordPress */}
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href={`/portfolio/project-${i}`}
                className="group image-hover rounded-lg overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`/images/portfolio/project-${i}.jpg`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-primary text-sm font-medium">
                      Commercial
                    </span>
                    <h3 className="text-white text-xl font-semibold">
                      Project Title {i}
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
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              What Our Clients Say
            </h2>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
              &quot;We Build transformed our vision into reality. Their attention to
              detail and commitment to quality exceeded our expectations. The
              team was professional, communicative, and delivered on time and
              within budget.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">PP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">Pure Physique</div>
                <div className="text-sm text-secondary-foreground/70">
                  Fort Mill, SC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USGBC Member Section */}
      <section className="py-16 bg-background">
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
                As a proud member of the U.S. Green Building Council, we are
                committed to sustainable building practices and advancing green
                construction standards in every project we undertake.
              </p>
            </div>
            <Button variant="outline" asChild>
              <a
                href="https://www.usgbc.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let&apos;s build
            something great together.
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
              <a href="tel:7045748124">(704) 574-8124</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Need financing for your project?
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
