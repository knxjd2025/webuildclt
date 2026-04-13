import { stats } from '@/data/homepage';

export function StatsBar() {
  return (
    <section className="py-10 md:py-14 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="relative">
              <div className="stat-value text-4xl md:text-5xl lg:text-6xl text-primary">{stat.value}</div>
              <div className="text-sm text-secondary-foreground/85 mt-2 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
