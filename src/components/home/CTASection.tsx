import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Construction Project in Charlotte?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Contact Charlotte&apos;s trusted veteran-owned construction company
          today for a free consultation and detailed estimate. Whether you
          need{' '}
          <span className="text-primary-foreground font-medium">
            commercial construction
          </span>
          , a{' '}
          <span className="text-primary-foreground font-medium">
            custom home
          </span>
          ,{' '}
          <span className="text-primary-foreground font-medium">
            roof coating
          </span>
          , or a{' '}
          <span className="text-primary-foreground font-medium">
            design-build project
          </span>
          , We Build delivers quality results on time and on budget. Licensed
          in NC and SC. USGBC member. Sixty plus years combined experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="tel:7045748124">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              (704) 574-8124
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
