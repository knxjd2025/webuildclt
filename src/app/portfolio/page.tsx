import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import type { Project } from '@/types/project';

export const revalidate = 3600;

const projects: Project[] = [
  {
    id: '1',
    title: 'Broken to Better Urgent Care',
    slug: 'urgent-care',
    category: 'commercial',
    service_type: 'upfit',
    short_description: 'Complete commercial upfit of an urgent care facility featuring modern waiting areas, exam rooms, and reception.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/portfolio/urgent-care.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '2',
    title: 'FYZICAL Therapy & Balance Centers',
    slug: 'fyzical-therapy',
    category: 'commercial',
    service_type: 'upfit',
    short_description: 'Full build-out of a physical therapy and balance center including front desk, treatment rooms, and gym area.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/portfolio/fyzical-therapy.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '3',
    title: 'Pure Physique',
    slug: 'pure-physique',
    category: 'commercial',
    service_type: 'upfit',
    short_description: 'Commercial upfit of a fitness studio in Fort Mill, SC. Complete interior build-out with branded storefront.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Fort Mill',
    state: 'SC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/portfolio/pure-physique.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '4',
    title: 'Pure Remedies CBD',
    slug: 'pure-remedies',
    category: 'commercial',
    service_type: 'upfit',
    short_description: 'Retail store build-out for a CBD wellness shop with custom displays and modern finishes.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/portfolio/pure-remedies.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '5',
    title: 'Mountain Island Charter School',
    slug: 'mics-roof-coating',
    category: 'roof-coating',
    service_type: 'roof-coating',
    short_description: 'Full commercial roof coating for Mountain Island Charter School. Multi-layer silicone system with 20-year NDL warranty.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/we-coat/mics-aerial-1.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '6',
    title: '14330 S Lakes Drive Roof Coating',
    slug: 's-lakes-roof-coating',
    category: 'roof-coating',
    service_type: 'roof-coating',
    short_description: 'Commercial roof coating at our own headquarters in South Charlotte — We Coat quality applied to our own building.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/we-coat/mics-aerial-2.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
  {
    id: '7',
    title: 'Fairway Kitchen Renovation',
    slug: 'fairway-kitchen',
    category: 'residential',
    service_type: 'renovation',
    short_description: 'Complete kitchen transformation with modern cabinetry, countertops, and fixtures.',
    ai_content: null,
    ai_meta_title: null,
    ai_meta_description: null,
    address: null,
    city: 'Charlotte',
    state: 'NC',
    zip: null,
    latitude: null,
    longitude: null,
    neighborhood: null,
    images: [],
    featured_image: '/images/portfolio/urgent-care-3.jpg',
    square_footage: null,
    completion_date: null,
    status: 'published',
    created_at: '',
    updated_at: '',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        subtitle="Explore our completed commercial and residential projects"
        backgroundImage="/images/portfolio-hero.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <PortfolioGrid projects={projects} />

          {/* Project Videos */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Project Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/videos/fyzical-upfit.mp4', poster: '/images/portfolio/fyzical-therapy.jpg', title: 'FYZICAL Therapy — Commercial Upfit' },
                { src: '/videos/we-coat-charlotte.mp4', poster: '/images/we-coat/mics-aerial-1.jpg', title: 'We Coat — Roof Coating Charlotte' },
                { src: '/videos/pure-remedies-cbd.mp4', poster: '/images/portfolio/pure-remedies.jpg', title: 'Pure Remedies CBD — Retail Build-Out' },
              ].map((video) => (
                <div key={video.src} className="space-y-3">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster={video.poster}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-sm text-muted-foreground text-center font-medium">{video.title}</p>
                </div>
              ))}
            </div>
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found. Check back soon!
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
