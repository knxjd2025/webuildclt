import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="We Build construction team Charlotte NC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-bold">60+</div>
              <div className="text-sm">Years Combined Experience</div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="section-label">
              Charlotte&apos;s Trusted Commercial Contractor
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              About We Build — Veteran-Owned Construction Excellence in
              Charlotte Since 2019
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We Build is a veteran and family-owned construction company
              proudly headquartered in Charlotte, North Carolina. Founded in
              2019, our team brings over sixty years of combined experience in{' '}
              <Link href="/services/commercial-construction" className="text-primary hover:underline">
                commercial construction
              </Link>
              ,{' '}
              <Link href="/services/roof-coating" className="text-primary hover:underline">
                roof coating
              </Link>
              , and{' '}
              <Link href="/services/design-build" className="text-primary hover:underline">
                design-build services
              </Link>{' '}
              to every project we undertake. Our founders are veterans who
              bring military discipline, integrity, and a mission-first mindset
              to the construction industry — values that show up in how we
              manage budgets, communicate with clients, and stand behind our
              finished work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a licensed{' '}
              <Link href="/services/general-contractor" className="text-primary hover:underline">
                general contractor
              </Link>{' '}
              in both North Carolina and South Carolina, we serve the entire
              Charlotte metropolitan area — from Ballantyne and{' '}
              <Link href="/areas/south-charlotte" className="text-primary hover:underline">
                South Charlotte
              </Link>{' '}
              to{' '}
              <Link href="/areas/fort-mill-sc" className="text-primary hover:underline">
                Fort Mill
              </Link>
              ,{' '}
              <Link href="/areas/lake-norman" className="text-primary hover:underline">
                Lake Norman
              </Link>
              , and beyond. Our mission is simple: deliver exactly what you
              want, how you want it, with the integrity and accountability
              that comes from our veteran values and family ownership.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets We Build apart is our integrated approach to
              construction. Our dedicated{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center
              </Link>{' '}
              in South Charlotte gives clients a hands-on experience where
              they can explore materials, compare finishes, and make confident
              selections — all with our experienced team by their side. As a
              proud member of the U.S. Green Building Council (USGBC), we
              integrate sustainable building practices into every project,
              reducing environmental impact while improving building
              performance and lowering long-term operating costs for our
              clients. Read more on our{' '}
              <Link href="/about" className="text-primary hover:underline">
                About page
              </Link>
              .
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
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
  );
}
