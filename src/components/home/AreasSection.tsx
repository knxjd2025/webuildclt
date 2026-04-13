import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin } from 'lucide-react';
import { areasServedDetailed } from '@/data/homepage';

export function AreasSection() {
  return (
    <section className="py-24 md:py-32 bg-background content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">Service Areas</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Areas We Serve Across the Charlotte Metro
          </h2>
          <p className="text-muted-foreground">
            Licensed in both North Carolina and South Carolina, We Build
            serves the entire Charlotte metropolitan area. Our South Charlotte
            headquarters at 14330 S Lakes Drive puts us within easy reach of
            every community listed below — and many more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areasServedDetailed.map((area) => (
            <Card key={area.name} className="card-industrial reveal">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-lg font-semibold">{area.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  View {area.name} Services
                  <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-muted rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">Our Headquarters</p>
            <p className="text-sm text-muted-foreground">
              14330 S Lakes Drive, Charlotte NC 28273 &mdash; serving
              Mecklenburg, Union, Iredell, Catawba, and York (SC) counties
            </p>
          </div>
          <Button variant="outline" asChild className="md:ml-auto">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
