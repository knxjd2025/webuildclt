import { stats } from '@/data/homepage';

export function StatsBar() {
  return (
    <section className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm text-primary-foreground/80 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
