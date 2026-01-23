'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// This data would come from WordPress GraphQL in production
const categories = [
  { id: 'all', name: 'All', slug: 'all' },
  { id: 'commercial', name: 'Commercial', slug: 'commercial' },
  { id: 'residential', name: 'Residential', slug: 'residential' },
];

const projects = [
  {
    id: '1',
    title: 'Urgent Care',
    slug: 'urgent-care',
    category: 'commercial',
    image: '/images/portfolio/urgent-care.jpg',
    excerpt: 'Modern urgent care facility build-out.',
  },
  {
    id: '2',
    title: 'FYZICAL Therapy',
    slug: 'fyzical-therapy',
    category: 'commercial',
    image: '/images/portfolio/fyzical-therapy.jpg',
    excerpt: 'Physical therapy center renovation.',
  },
  {
    id: '3',
    title: 'Fairway Kitchen Renovation',
    slug: 'fairway-kitchen',
    category: 'residential',
    image: '/images/portfolio/fairway-kitchen.jpg',
    excerpt: 'Complete kitchen transformation.',
  },
  {
    id: '4',
    title: 'Wingrave Build',
    slug: 'wingrave-build',
    category: 'residential',
    image: '/images/portfolio/wingrave-build.jpg',
    excerpt: 'Custom home construction.',
  },
  {
    id: '5',
    title: 'Pure Physique',
    slug: 'pure-physique',
    category: 'commercial',
    image: '/images/portfolio/pure-physique.jpg',
    excerpt: 'Fitness studio commercial upfit.',
  },
  {
    id: '6',
    title: 'Lake Wylie Remodel',
    slug: 'lake-wylie-remodel',
    category: 'residential',
    image: '/images/portfolio/lake-wylie-remodel.jpg',
    excerpt: 'Lakefront home renovation.',
  },
  {
    id: '7',
    title: 'PureRemedies CBD',
    slug: 'pure-remedies',
    category: 'commercial',
    image: '/images/portfolio/pure-remedies.jpg',
    excerpt: 'Retail store build-out.',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="Explore our completed commercial and residential projects"
        backgroundImage="/images/portfolio-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.slug)}
                className="min-w-[120px]"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className={cn(
                  'group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-all duration-300',
                  'animate-in fade-in-0 slide-in-from-bottom-4'
                )}
              >
                <div className="relative aspect-[4/3] image-hover">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="capitalize">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you&apos;re planning a commercial build or a residential
            renovation, we&apos;re here to help bring your vision to life.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
