import { Star } from 'lucide-react';

// TODO: Replace with real testimonials fetched from WordPress or Supabase.
// This is a single placeholder testimonial — expand to a carousel or grid
// once more client reviews are collected.

export function TestimonialSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground content-lazy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">What Our Charlotte Clients Say</h2>

          {/* Star rating */}
          <div className="flex justify-center gap-1 mb-6" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic relative">
            <span className="absolute -top-6 -left-2 text-6xl text-primary/30 font-serif" aria-hidden="true">&ldquo;</span>
            We Build transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, communicative, and delivered on time and within budget. We highly recommend We Build for any commercial construction project in the Charlotte area.
            <span className="text-6xl text-primary/30 font-serif leading-none" aria-hidden="true">&rdquo;</span>
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">PP</span>
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
  );
}
