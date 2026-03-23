import { whyChooseUs } from '@/data/homepage';

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background content-lazy">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why We Build</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Why Charlotte Chooses We Build</h2>
          <p className="text-muted-foreground">Choosing the right construction company is one of the most important decisions you will make for your project. Here is what sets We Build apart.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 stagger-children">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 reveal ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <item.icon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
