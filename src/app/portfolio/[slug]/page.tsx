import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Ruler, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import {
  constructionProjectSchema,
  breadcrumbSchema,
} from '@/lib/structured-data';
import type { Project } from '@/types/project';
import { hardcodedProjects } from '@/data/portfolio-projects';
import { allServices, type ServiceLink } from '@/data/services';

// Use anon key for public reads (RLS allows reading published projects)
function getPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

async function getProject(slug: string): Promise<Project | null> {
  // Try Supabase first (admin-created projects)
  try {
    const supabase = getPublicClient();
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (data) return data;
  } catch {
    // Supabase unavailable or project not found — fall through to hardcoded
  }

  // Fall back to hardcoded portfolio projects
  return hardcodedProjects.find((p) => p.slug === slug) ?? null;
}

/** Keyword-to-service mapping for cross-linking portfolio items to service pages. */
const categoryServiceMap: Record<string, string[]> = {
  // Project categories
  commercial: ['commercial-construction', 'commercial-upfits', 'general-contractor'],
  residential: ['general-contractor', 'design-build', 'commercial-construction'],
  'roof-coating': ['roof-coating', 'commercial-construction', 'green-building'],
  // Service types
  upfit: ['commercial-upfits', 'tenant-improvements', 'office-buildouts'],
  'new-construction': ['commercial-construction', 'design-build', 'general-contractor'],
  renovation: ['commercial-renovation', 'design-build', 'general-contractor'],
  addition: ['design-build', 'general-contractor', 'commercial-construction'],
  'design-build': ['design-build', 'commercial-construction', 'pre-construction'],
  'custom-home': ['design-build', 'general-contractor', 'commercial-construction'],
  'tenant-improvement': ['tenant-improvements', 'commercial-upfits', 'office-buildouts'],
};

/** Return up to 3 unique services relevant to a project's category and service_type. */
function getRelatedServices(project: Project): ServiceLink[] {
  const serviceHrefIndex = new Map(allServices.map((s) => [s.href.replace('/services/', ''), s]));
  const seen = new Set<string>();
  const result: ServiceLink[] = [];

  // Gather candidate slugs from service_type first (more specific), then category
  const candidateSlugs = [
    ...(categoryServiceMap[project.service_type] ?? []),
    ...(categoryServiceMap[project.category] ?? []),
  ];

  for (const slug of candidateSlugs) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const svc = serviceHrefIndex.get(slug);
    if (svc) result.push(svc);
    if (result.length >= 3) break;
  }

  return result;
}

/** Fetch other published projects in the same category, excluding the current one. */
async function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Project[]> {
  // Try Supabase first
  try {
    const supabase = getPublicClient();
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .eq('status', 'published')
      .neq('slug', currentSlug)
      .limit(limit);

    if (data && data.length > 0) return data;
  } catch (err) {
    console.error('[getRelatedProjects] Supabase error:', err);
  }

  // Fall back to hardcoded projects
  return hardcodedProjects
    .filter((p) => p.category === category && p.slug !== currentSlug)
    .slice(0, limit);
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const locationStr = [project.neighborhood, project.city, project.state]
    .filter(Boolean)
    .join(', ');

  return {
    title: project.ai_meta_title || `${project.title} | We Build`,
    description:
      project.ai_meta_description ||
      `${project.title} — ${project.category} ${project.service_type} project in ${locationStr} by We Build.`,
    openGraph: {
      title: project.ai_meta_title || project.title,
      description: project.ai_meta_description || project.short_description,
      type: 'article',
      url: `https://webuildclt.com/portfolio/${project.slug}`,
      images: project.featured_image
        ? [{ url: project.featured_image, width: 1200, height: 630, alt: project.title }]
        : undefined,
    },
    other: {
      // Geo meta tags for search engines and AI
      ...(project.latitude && project.longitude
        ? {
            'geo.position': `${project.latitude};${project.longitude}`,
            'geo.placename': `${project.neighborhood || project.city}, ${project.state}`,
            'geo.region': `US-${project.state}`,
            ICBM: `${project.latitude}, ${project.longitude}`,
          }
        : {}),
    },
  };
}

export const revalidate = false; // Static at build time — redeploy or use /api/revalidate to update

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const relatedServices = getRelatedServices(project);
  const relatedProjects = await getRelatedProjects(slug, project.category);

  const locationStr = [project.neighborhood, project.city, project.state]
    .filter(Boolean)
    .join(', ');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: project.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          constructionProjectSchema(project),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />

      {/* Hero Image */}
      {project.featured_image && (
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <Image
            src={project.featured_image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Badge className="mb-3 capitalize">{project.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-white/80 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {locationStr}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {!project.featured_image && (
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h1>
              )}

              {project.ai_content ? (
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.ai_content }}
                />
              ) : (
                <p className="text-muted-foreground text-lg">
                  {project.short_description}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Project Details Card */}
              <div className="bg-muted rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Project Details</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        {project.address && <>{project.address}<br /></>}
                        {locationStr}
                        {project.zip && ` ${project.zip}`}
                      </p>
                    </div>
                  </div>

                  {project.service_type && (
                    <div className="flex items-start gap-3">
                      <Ruler className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Service</p>
                        <p className="text-muted-foreground capitalize">
                          {project.service_type.replace(/-/g, ' ')}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.square_footage && (
                    <div className="flex items-start gap-3">
                      <Ruler className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Size</p>
                        <p className="text-muted-foreground">
                          {project.square_footage.toLocaleString()} sq ft
                        </p>
                      </div>
                    </div>
                  )}

                  {project.completion_date && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Completed</p>
                        <p className="text-muted-foreground">
                          {new Date(project.completion_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center space-y-4">
                <h3 className="font-semibold text-lg">
                  Start Your Project
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ready for a similar project in {project.neighborhood || project.city}?
                </p>
                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+17045748124">
                      <Phone className="h-4 w-4 mr-2" />
                      (704) 574-8124
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 1 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img: { url: string; alt: string }, index: number) => (
                  <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.alt || `${project.title} image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to portfolio */}
          <div className="mt-12">
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Related Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore the services behind this project.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <Card key={service.href} className="group hover:shadow-md transition-shadow">
                  <CardContent className="space-y-3">
                    <Badge variant="secondary" className="capitalize">
                      {service.category}
                    </Badge>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={service.href}>
                        Learn more
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Related Projects
            </h2>
            <p className="text-muted-foreground mb-8">
              More {project.category} projects by We Build.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/portfolio/${related.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                    {related.featured_image && (
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={related.featured_image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="space-y-2">
                      <Badge variant="secondary" className="capitalize">
                        {related.category}
                      </Badge>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.short_description}
                      </p>
                      <span className="inline-flex items-center text-sm text-primary font-medium">
                        View project
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for a Contractor in {project.neighborhood || project.city}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We Build is a veteran and family-owned general contractor
            headquartered in Charlotte, NC. We serve{' '}
            {project.neighborhood || project.city} and surrounding communities
            with commercial construction services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
