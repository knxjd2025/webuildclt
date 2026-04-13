import { processSteps } from '@/data/homepage';

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32 bg-muted content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Construction Process — From First Call to Final Walkthrough</h2>
          <p className="text-muted-foreground">Our proven six-step process ensures your project is delivered on time, on budget, and exactly to your specifications.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" aria-hidden="true" />

            <div className="space-y-12">
              {processSteps.map((step) => (
                <div key={step.title} className="relative flex gap-6 reveal">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
