import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  backgroundImage = '/images/hero-bg.jpg',
}: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center pt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
