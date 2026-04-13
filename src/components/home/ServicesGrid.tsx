import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/homepage';

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-32 gradient-warm content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">Construction Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Full-Service Construction Company in Charlotte, NC
          </h2>
          <p className="text-muted-foreground">
            From{' '}
            <Link href="/services/commercial-construction" className="text-primary hover:underline">
              commercial construction
            </Link>{' '}
            and{' '}
            <Link href="/services/commercial-upfits" className="text-primary hover:underline">
              office upfits
            </Link>{' '}
            to eco-friendly{' '}
            <Link href="/we-coat" className="text-primary hover:underline">
              roof coating
            </Link>{' '}
            and{' '}
            <Link href="/services/design-build" className="text-primary hover:underline">
              design-build
            </Link>
            , We Build offers comprehensive construction services for
            businesses across the Charlotte metro area. Every
            project is backed by our veteran-owned commitment to quality,
            transparency, and on-time delivery. Explore our{' '}
            <Link href="/guides/commercial-construction-charlotte-guide" className="text-primary hover:underline">
              Complete Guide to Commercial Construction in Charlotte
            </Link>{' '}
            for an in-depth look at what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group card-industrial reveal"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-none flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
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
  );
}
