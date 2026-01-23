import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Droplets,
  Sun,
  Shield,
  Leaf,
  DollarSign,
  Paintbrush,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'We Coat - Roof Restoration',
  description:
    'Professional roof coating services in Charlotte, NC. Eco-friendly alternative to roof replacement. Save up to 50% compared to traditional roof replacement.',
};

const benefits = [
  {
    icon: Droplets,
    title: '100% Waterproof',
    description: 'Tested and verified for complete waterproofing protection.',
  },
  {
    icon: Sun,
    title: 'UV Resistant',
    description: 'Verified to withstand long-term UV exposure.',
  },
  {
    icon: Shield,
    title: 'Damage Resistant',
    description: 'High resistance to damage from debris or hailstorms.',
  },
  {
    icon: Zap,
    title: 'Flexible',
    description: 'Great degree of flexibility to avoid cracking.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'No odors, off-gasses, and completely nontoxic.',
  },
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Huge cost savings compared to roof replacement.',
  },
  {
    icon: Paintbrush,
    title: 'Paintable',
    description: 'Paintable surface when correct paint is applied.',
  },
  {
    icon: CheckCircle,
    title: 'Versatile',
    description: 'Works on gypcrete, metal, concrete, and more.',
  },
];

const roofTypes = [
  { src: '/images/we-coat/roof1.jpg', alt: 'Metal roof coating' },
  { src: '/images/we-coat/roof2.jpg', alt: 'Commercial roof coating' },
  { src: '/images/we-coat/roof3.jpg', alt: 'Flat roof coating' },
  { src: '/images/we-coat/roof4.jpg', alt: 'Industrial roof coating' },
];

export default function WeCoatPage() {
  return (
    <>
      <PageHero
        title="We Coat - Roof Restoration"
        subtitle="Durable and long-lasting roof coating solutions"
        backgroundImage="/images/we-coat-hero.jpg"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Roof Restoration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Durable and Long Lasting Roof Coating
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Finding a quality alternative to replacing your roof can be a
                dilemma. Thankfully the team at We Coat now offers an
                eco-friendly substitute for roof replacement for multiple types
                of roofs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our roof coating can be used for a broad range of covered
                structures such as office buildings, schools, houses, hospitals,
                commercial property, and more.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Save Up to 50%
                </h3>
                <p className="text-muted-foreground">
                  Compared to typical roof replacement costs, plus reduce energy
                  costs for your building with improved efficiency.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a
                    href="http://www.wecoatus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More at WeCoatUS.com
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {roofTypes.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden image-hover"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Why Choose Roof Coating
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Benefits of Roof Restoration
            </h2>
            <p className="text-muted-foreground">
              When it comes time to replace a roof, most of us are never
              prepared mentally or financially for the process. Our roof coating
              provides an affordable, time-efficient alternative.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Roof Coating */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/we-coat/before-after.jpg"
                alt="Before and after roof coating"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Roof Coating is a Smart Choice
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When it comes time to replace a roof, most of us are never
                prepared mentally or financially for the process. Some roof
                replacement jobs can be very expensive and also take a lot of
                time due to the complexity of certain types of roofing
                materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a roof coating, the standard way of replacing a roof is
                avoided and replaced with a much more affordable and
                time-efficient procedure that will provide aesthetic appeal and
                extreme durability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the big advantages of a roof coating is that it can be
                applied by spray or roll-on methods over a large variety of
                surfaces including gypcrete, metal, concrete, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <Image
              src="/images/certifications/iibec.png"
              alt="International Institute of Building Enclosure Consultants"
              width={150}
              height={150}
              className="h-24 w-auto"
            />
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold mb-2">
                Certified Professionals
              </h3>
              <p className="text-muted-foreground">
                We are certified members of the International Institute of
                Building Enclosure Consultants (IIBEC), ensuring the highest
                standards in roof restoration services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Restore Your Roof?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free assessment and quote. Protect your
            investment with our eco-friendly roof coating solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:8562293568">(856) 229-3568</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
