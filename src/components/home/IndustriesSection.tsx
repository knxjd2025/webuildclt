import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { industriesServed } from '@/data/homepage';

export function IndustriesSection() {
  return (
    <section className="py-20 bg-muted content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Industries We Serve in Charlotte</h2>
          <p className="text-muted-foreground">Deep experience across commercial industries — each with unique construction requirements.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children">
          {industriesServed.map((industry) => (
            <div
              key={industry.title}
              className="group bg-background rounded-lg p-5 hover:shadow-md transition-shadow reveal"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <industry.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
              </div>
              <h3 className="font-semibold mb-1">{industry.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">Don&apos;t see your industry? We likely have experience in it.</p>
          <Button asChild>
            <Link href="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
