'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';

const categories = [
  { id: 'all', name: 'All', slug: 'all' },
  { id: 'commercial', name: 'Commercial Upfits', slug: 'commercial' },
  { id: 'roof-coating', name: 'Roof Coating', slug: 'roof-coating' },
];

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
            className="min-w-[120px]"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className={cn(
              'group block rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow duration-300',
              'animate-in fade-in-0 slide-in-from-bottom-4'
            )}
          >
            <div className="relative aspect-[4/3] image-hover">
              {project.featured_image ? (
                <Image
                  src={project.featured_image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground/70">
                  No image
                </div>
              )}
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
              <p className="text-muted-foreground text-sm mb-2">
                {project.short_description}
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {project.neighborhood || project.city}, {project.state}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
