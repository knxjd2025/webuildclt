import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/homepage';

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted content-lazy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="section-label">Featured Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Recent Construction Projects in Charlotte
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Browse our portfolio of completed commercial construction,
              design-build, and roof coating projects across the
              Charlotte metro area. Each project showcases the quality
              craftsmanship and attention to detail that We Build delivers.
              Visit our full{' '}
              <Link href="/portfolio" className="text-primary hover:underline">
                portfolio page
              </Link>{' '}
              to see more.
            </p>
          </div>
          <Button variant="outline" asChild className="mt-4 md:mt-0">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group image-hover rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-[opacity,transform] duration-300">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-[var(--on-image)] text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
