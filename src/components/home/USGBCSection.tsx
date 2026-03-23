import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function USGBCSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-center md:text-left">
          <Image
            src="/images/certifications/usgbc-member-light.png"
            alt="USGBC Member"
            width={150}
            height={150}
            className="h-16 md:h-20 w-auto"
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
              impact. Green building is not just good for the planet — it
              saves our clients money through lower operating costs and
              higher property values. Ask us how USGBC-aligned practices can
              benefit your next project.
            </p>
          </div>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/blog/what-is-usgbc-green-building">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
