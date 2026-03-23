import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import type { Project } from '@/types/project';
import { createAdminClient } from '@/lib/supabase';
import { hardcodedProjects } from '@/data/portfolio-projects';
import {
  Building2,
  Store,
  Home,
  PaintBucket,
  Hammer,
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  HardHat,
  MapPin,
  Star,
  Users,
  Ruler,
  ClipboardCheck,
  Eye,
  Award,
  Quote,
  Stethoscope,
  UtensilsCrossed,
  Warehouse,
  Briefcase,
} from 'lucide-react';

export const revalidate = false; // Static at build time — redeploy or use /api/revalidate to update

export const metadata: Metadata = {
  title:
    'Construction Portfolio Charlotte NC | Commercial & Residential Projects',
  description:
    'Explore our construction portfolio featuring commercial upfits, custom homes, residential additions, and roof coating projects across Charlotte NC, Fort Mill SC, and Lake Norman. Veteran-owned. (704) 574-8124.',
  keywords: [
    'construction portfolio charlotte nc',
    'commercial construction projects charlotte',
    'commercial upfit portfolio charlotte nc',
    'residential construction portfolio charlotte',
    'construction company projects charlotte nc',
    'building portfolio charlotte nc',
    'general contractor portfolio charlotte',
    'roof coating projects charlotte nc',
    'custom home builder portfolio charlotte',
    'construction project gallery charlotte',
  ],
  openGraph: {
    title:
      'Construction Portfolio Charlotte NC | Commercial & Residential Projects',
    description:
      'Explore our construction portfolio featuring commercial upfits, custom homes, residential additions, and roof coating projects across Charlotte NC and surrounding areas.',
    url: 'https://webuildclt.com/portfolio',
    type: 'website',
  },
};

const projects: Project[] = hardcodedProjects;

const faqs = [
  {
    question:
      'What types of construction projects are in your Charlotte portfolio?',
    answer:
      'Our portfolio includes a wide range of commercial and residential construction projects across the Charlotte metro area. We have completed commercial upfits for healthcare facilities, fitness studios, retail stores, and professional offices. Our residential portfolio includes custom homes, kitchen renovations, bathroom remodels, room additions, and whole-home renovations. We also showcase our commercial roof coating projects through our We Coat division. Every project in our portfolio reflects our commitment to quality craftsmanship and client satisfaction.',
  },
  {
    question: 'Can I visit your completed projects or design center in person?',
    answer:
      'Yes. We encourage prospective clients to visit our Design Center located at 14330 S Lakes Drive, Charlotte NC 28273. Our showroom features material samples, finish options, and examples of our craftsmanship. We can also arrange visits to select completed projects with homeowner or business owner permission. Additionally, our website features a Matterport virtual tour of our Design Center so you can explore our capabilities from home. Call us at (704) 574-8124 to schedule a visit.',
  },
  {
    question:
      'What is the typical timeline for a commercial upfit project in Charlotte?',
    answer:
      'Commercial upfit timelines in Charlotte vary based on the scope and complexity of the project. A standard office upfit of 2,000-5,000 square feet typically takes 8-16 weeks from permit approval to completion. Retail build-outs average 10-16 weeks. Medical and healthcare facility upfits, which involve more complex infrastructure like specialized HVAC and plumbing, generally take 12-20 weeks. Our project managers create detailed schedules during the planning phase and provide regular updates throughout construction. We also work with Mecklenburg County permitting to minimize lead times.',
  },
  {
    question:
      'How much does commercial construction cost per square foot in Charlotte, NC?',
    answer:
      'Commercial construction costs in Charlotte depend on the type of project, finishes, and infrastructure requirements. Office upfits range from $50-$175 per square foot. Retail build-outs run $75-$200 per square foot. Restaurant and food service construction costs $150-$350 per square foot due to kitchen, ventilation, and plumbing complexity. Medical facilities range from $150-$400 per square foot. Ground-up commercial construction starts at $200 per square foot and can exceed $400 for complex builds. We provide detailed, line-item estimates for every project. Contact us for a free consultation and quote.',
  },
  {
    question: 'Can you customize a project based on our specific business needs?',
    answer:
      'Absolutely. Every project in our portfolio was customized to the specific needs of the client. We use a design-build approach that starts with understanding your business operations, workflow, branding, and growth plans. From there, our team develops architectural plans, selects materials, and creates a construction timeline tailored to your budget and schedule. Whether you need a healthcare facility with specialized exam rooms, a retail space with custom display fixtures, or a restaurant with a commercial kitchen, we build to your exact specifications.',
  },
  {
    question: 'What warranty do you offer on your construction work?',
    answer:
      'We stand behind every project in our portfolio with comprehensive warranty coverage. Our standard construction warranty covers workmanship and materials for one year after project completion. Many of the products and systems we install carry their own manufacturer warranties ranging from 5 to 25 years, including roofing systems, HVAC equipment, windows, and flooring. Our We Coat commercial roof coating system comes with a 20-year No Dollar Limit (NDL) warranty. We also provide a post-construction walkthrough at 11 months to address any warranty items before the coverage period ends.',
  },
  {
    question: 'How does We Build manage projects during construction?',
    answer:
      'Every project is assigned a dedicated project manager who serves as your single point of contact from pre-construction through final walkthrough. Our project management process includes weekly progress updates, a detailed construction schedule with milestone tracking, daily job site supervision by our field superintendent, regular quality inspections at each construction phase, coordination of all subcontractors and material deliveries, and budget tracking with transparent change order documentation. We use construction management software to keep all stakeholders informed in real time.',
  },
  {
    question:
      'Do you handle both commercial and residential construction projects?',
    answer:
      'Yes. We Build is a full-service general contractor licensed in both North Carolina and South Carolina. Our commercial portfolio includes office upfits, retail build-outs, healthcare facilities, restaurants, and industrial spaces across the Charlotte metro area. Our residential portfolio includes custom home construction, kitchen and bathroom renovations, room additions, and whole-home remodels. Many of our commercial clients also hire us for their personal residential projects because they trust the quality and professionalism we deliver on the job site.',
  },
  {
    question:
      'What areas around Charlotte do you serve for construction projects?',
    answer:
      'We Build serves the entire Charlotte metropolitan area and surrounding communities in both North Carolina and South Carolina. Our project portfolio includes work in Charlotte, South Charlotte, Ballantyne, Pineville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, and the greater Lake Norman area in North Carolina. In South Carolina, we regularly work in Fort Mill, Rock Hill, Tega Cay, Indian Land, and Lancaster. Our dual-state licensing allows us to take on projects throughout the greater Charlotte region without restrictions.',
  },
  {
    question: 'How do I get started with a construction project with We Build?',
    answer:
      'Getting started is simple. Call us at (704) 574-8124 or visit our Contact page to request a free consultation. During the initial meeting, we will discuss your project goals, timeline, and budget. We can meet at your project site, at our Design Center in South Charlotte, or virtually. From there, we develop a preliminary scope of work, provide a detailed estimate, and walk you through our design-build process. Once you approve the proposal, we handle permitting, scheduling, and all construction through to final walkthrough. Most clients go from initial consultation to construction start within 4-8 weeks.',
  },
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio' },
];

async function getSupabaseProjects(): Promise<Project[]> {
  try {
    const admin = createAdminClient();
    const { data } = await admin
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    return (data ?? []).map((p: Record<string, unknown>) => ({
      id: p.id as string,
      title: p.title as string,
      slug: p.slug as string,
      category: p.category as 'commercial' | 'residential' | 'roof-coating',
      service_type: p.service_type as string,
      short_description: p.short_description as string,
      ai_content: (p.ai_content as string) ?? null,
      ai_meta_title: (p.ai_meta_title as string) ?? null,
      ai_meta_description: (p.ai_meta_description as string) ?? null,
      address: (p.address as string) ?? null,
      city: p.city as string,
      state: p.state as string,
      zip: (p.zip as string) ?? null,
      latitude: (p.latitude as number) ?? null,
      longitude: (p.longitude as number) ?? null,
      neighborhood: (p.neighborhood as string) ?? null,
      images: (p.images as Project['images']) ?? [],
      featured_image: (p.featured_image as string) ?? null,
      square_footage: (p.square_footage as number) ?? null,
      completion_date: (p.completion_date as string) ?? null,
      status: p.status as 'draft' | 'published',
      created_at: p.created_at as string,
      updated_at: p.updated_at as string,
    }));
  } catch {
    return [];
  }
}

export default async function PortfolioPage() {
  const supabaseProjects = await getSupabaseProjects();

  // Merge: Supabase projects first (newest), then hardcoded ones
  const existingSlugs = new Set(supabaseProjects.map((p) => p.slug));
  const filteredHardcoded = projects.filter((p) => !existingSlugs.has(p.slug));
  const allProjects = [...supabaseProjects, ...filteredHardcoded];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        title="Construction Portfolio Charlotte NC"
        subtitle="Commercial & residential projects built with 60+ years of combined experience across Charlotte, Fort Mill, and Lake Norman"
        backgroundImage="/images/portfolio-hero.jpg"
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* ── Intro Section ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Body of Work: Construction Projects Across Charlotte NC
          </h2>
          <div className="prose-width space-y-4 text-muted-foreground">
            <p>
              Every project in our portfolio represents a partnership between We Build and a
              client who trusted us to bring their vision to life. As a{' '}
              <Link href="/about" className="text-primary hover:underline">
                veteran and family-owned construction company
              </Link>{' '}
              based in Charlotte, North Carolina, we take that trust seriously. Our portfolio
              spans commercial construction, commercial upfits, custom home building,
              residential renovations, and commercial roof coating projects delivered across
              the greater Charlotte metropolitan area, Fort Mill, and the Lake Norman region.
            </p>
            <p>
              What you will see on this page is more than a collection of finished buildings
              and renovated spaces. Each project tells a story of careful planning, skilled
              craftsmanship, and relentless attention to detail. From the initial consultation
              at our{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center in South Charlotte
              </Link>{' '}
              to the final walkthrough with the client, every step of our process is designed
              to deliver a result that exceeds expectations. We are licensed{' '}
              <Link href="/services/general-contractor" className="text-primary hover:underline">
                general contractors in both North Carolina and South Carolina
              </Link>
              , and our team brings more than 60 years of combined construction experience to
              every job site.
            </p>
            <p>
              Our project diversity is intentional. We believe that a construction company
              should be able to handle whatever challenge a client brings to the table. That
              is why our portfolio includes urgent care facility build-outs, physical therapy
              centers, retail storefronts, fitness studios, commercial roof restorations, and
              residential kitchen transformations. Each project demanded a different set of
              skills, materials, and problem-solving approaches, and our team delivered on
              every one. As a proud member of the{' '}
              <strong>U.S. Green Building Council (USGBC)</strong>, we also bring sustainable
              building practices to every project, helping our clients reduce their
              environmental footprint without sacrificing quality or performance.
            </p>
            <p>
              Whether you are a business owner planning a{' '}
              <Link href="/services/commercial-upfits" className="text-primary hover:underline">
                commercial upfit
              </Link>{' '}
              for a new retail location, a healthcare provider expanding into a second
              facility, or a homeowner ready to transform your kitchen, our portfolio
              demonstrates that We Build has the experience, the team, and the process to
              deliver your project on time and on budget. Browse our completed projects below,
              then{' '}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>{' '}
              to discuss how we can build something great together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Completed Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Filter by category to explore our commercial upfits, roof coating projects,
            and residential work across Charlotte and surrounding areas.
          </p>

          <PortfolioGrid projects={allProjects} />

          {/* Project Videos */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Project Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  src: '/videos/fyzical-upfit.mp4',
                  poster: '/images/portfolio/fyzical-therapy.jpg',
                  title: 'FYZICAL Therapy — Commercial Upfit',
                },
                {
                  src: '/videos/we-coat-charlotte.mp4',
                  poster: '/images/we-coat/mics-aerial-1.jpg',
                  title: 'We Coat — Roof Coating Charlotte',
                },
                {
                  src: '/videos/pure-remedies-cbd.mp4',
                  poster: '/images/portfolio/pure-remedies.jpg',
                  title: 'Pure Remedies CBD — Retail Build-Out',
                },
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
                  <p className="text-sm text-muted-foreground text-center font-medium">
                    {video.title}
                  </p>
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

      {/* ── Our Project Categories ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Project Categories
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We deliver construction projects across five core categories, each requiring
            specialized expertise, materials, and project management approaches.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Commercial Construction */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">Commercial Construction</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Ground-up commercial buildings are the foundation of our portfolio. We
                  construct office buildings, retail centers, restaurants, medical facilities,
                  and industrial spaces across the Charlotte metro area. Every commercial
                  project starts with a thorough site analysis, detailed architectural plans,
                  and a construction schedule built around your business timeline. Our team
                  manages everything from Mecklenburg County permitting and site preparation
                  to steel erection, interior finishes, and certificate of occupancy. We
                  understand that commercial construction is an investment in your business,
                  and we treat every project with the seriousness it deserves.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/commercial-construction">
                    View Commercial Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Upfits */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Store className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">Commercial Upfits</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Commercial upfits make up the largest portion of our portfolio, and for good
                  reason. Charlotte is a fast-growing market where businesses need existing
                  spaces transformed to fit their unique operations. Our upfit projects include
                  urgent care facilities with specialized exam rooms and reception areas,
                  physical therapy centers with open gym floors and treatment rooms, retail
                  stores with custom display systems, and fitness studios with branded
                  storefronts. We work within occupied buildings, coordinate with landlords and
                  property managers, and deliver on aggressive schedules so your business opens
                  on time. Every upfit is a custom project tailored to your brand, workflow,
                  and budget.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/commercial-upfits">
                    View Upfit Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Custom Homes */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Home className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">Custom Homes</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Building a custom home is one of the most significant investments a family
                  will make, and our portfolio reflects the care we bring to every residential
                  new build. Our custom home projects in the Charlotte area feature
                  personalized floor plans, premium materials, energy-efficient systems, and
                  finishes selected at our Design Center showroom. From lot selection and
                  architectural design to framing, mechanical systems, and final
                  landscaping, our team manages every phase of construction. We build homes
                  that reflect the lifestyle and taste of each family, with the structural
                  integrity and craftsmanship that stand the test of time.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/custom-home-builder">
                    View Custom Home Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Residential Additions & Renovations */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Hammer className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Residential Additions & Renovations
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our residential renovation portfolio demonstrates our ability to transform
                  existing homes into spaces that feel brand new. Kitchen renovations with
                  modern cabinetry, quartz countertops, and updated appliances. Bathroom
                  remodels with walk-in showers, custom tile, and luxury fixtures. Room
                  additions that expand living space while maintaining architectural
                  consistency with the existing home. Basement finishing, deck construction,
                  and whole-home renovations that update everything from flooring and paint to
                  electrical and plumbing. We work in occupied homes with respect for your
                  family and your property, keeping job sites clean and organized daily.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/residential-additions">
                    View Residential Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Roof Coating */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <PaintBucket className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Commercial Roof Coating (We Coat)
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our{' '}
                  <Link href="/we-coat" className="text-primary hover:underline">
                    We Coat division
                  </Link>{' '}
                  specializes in commercial roof restoration using multi-layer silicone coating
                  systems that extend roof life by 20 or more years. Our roof coating portfolio
                  includes schools, churches, warehouses, office buildings, and retail
                  centers across the Charlotte area. Each project involves thorough roof
                  inspection, surface preparation, seam and penetration sealing, and
                  application of our premium silicone coating system. Our roof coatings come
                  with a 20-year No Dollar Limit (NDL) warranty, and they reduce cooling
                  costs by reflecting UV radiation. Roof coating is a fraction of the cost
                  of a full roof replacement, making it one of the smartest investments a
                  commercial building owner can make.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/we-coat">
                    View Roof Coating Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Design-Build */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Ruler className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold">Design-Build Projects</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Many of the projects in our portfolio were delivered using our{' '}
                  <Link href="/services/design-build" className="text-primary hover:underline">
                    design-build approach
                  </Link>
                  , where architecture, engineering, and construction are managed under one
                  contract. This eliminates the communication breakdowns that plague
                  traditional design-bid-build projects, reduces timelines, and gives clients
                  a single point of accountability. Our design-build portfolio includes
                  commercial offices, healthcare facilities, retail spaces, and custom homes
                  where the client benefited from having one team handle everything from
                  concept sketches to certificate of occupancy. If you want a streamlined
                  construction experience, design-build is the way to go.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/services/design-build">
                    View Design-Build Services <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Our Construction Process ── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Construction Process
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Every project in our portfolio followed the same proven construction process.
            This consistency is what allows us to deliver on time, on budget, and above
            expectations regardless of project size or complexity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: ClipboardCheck,
                title: 'Consultation & Planning',
                desc: 'We meet at your project site or our Design Center to understand your goals, timeline, and budget. Our team evaluates the space, discusses design options, and develops a preliminary scope of work with a detailed estimate.',
              },
              {
                step: '02',
                icon: Ruler,
                title: 'Design & Permitting',
                desc: 'Our design-build team creates architectural plans, selects materials, and coordinates engineering. We handle all permitting with Mecklenburg County or your local municipality so construction can begin without delays.',
              },
              {
                step: '03',
                icon: HardHat,
                title: 'Construction & Management',
                desc: 'Your dedicated project manager oversees daily construction, coordinates subcontractors, manages material deliveries, and provides weekly progress updates. Quality inspections happen at every phase.',
              },
              {
                step: '04',
                icon: CheckCircle,
                title: 'Walkthrough & Delivery',
                desc: 'We conduct a thorough final walkthrough with you, address any punch list items, and deliver your completed project with all warranties, manuals, and documentation. Your satisfaction is our measure of success.',
              },
            ].map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Project Highlights ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured Project Highlights
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A closer look at some of the standout projects in our portfolio that showcase
            our range of capabilities and commitment to quality.
          </p>

          <div className="space-y-12">
            {/* Highlight 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="section-label text-sm text-primary font-semibold uppercase tracking-wider">
                  Healthcare
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Broken to Better Urgent Care — Charlotte, NC
                </h3>
                <p className="text-muted-foreground mb-4">
                  This commercial upfit transformed a raw shell space into a fully operational
                  urgent care facility in Charlotte. The project required specialized
                  construction including medical-grade flooring, exam room partitioning with
                  sound attenuation, a reception and waiting area designed for patient flow,
                  ADA-compliant restrooms, and dedicated HVAC zoning for clinical areas. Our
                  team coordinated with medical equipment vendors to ensure all infrastructure
                  was in place before the facility opened its doors. The project was completed
                  on schedule, allowing the client to begin serving patients on their target
                  opening date.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Commercial Upfit
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Healthcare
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Charlotte NC
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/urgent-care">
                    View Project Details <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground">
                  <Stethoscope className="h-16 w-16 opacity-20" aria-hidden="true" />
                </div>
              </Card>
            </div>

            {/* Highlight 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="overflow-hidden md:order-first lg:order-first">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground">
                  <Users className="h-16 w-16 opacity-20" aria-hidden="true" />
                </div>
              </Card>
              <div>
                <span className="section-label text-sm text-primary font-semibold uppercase tracking-wider">
                  Fitness & Wellness
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  FYZICAL Therapy & Balance Centers — Charlotte, NC
                </h3>
                <p className="text-muted-foreground mb-4">
                  The FYZICAL Therapy build-out was a comprehensive commercial upfit that
                  required balancing open gym space with private treatment rooms, a welcoming
                  front desk and lobby area, and durable finishes that could withstand daily
                  use from a high-traffic rehabilitation facility. Our team installed
                  reinforced flooring for therapy equipment, specialty lighting for treatment
                  areas, and a custom millwork reception desk that reflects the FYZICAL brand.
                  The layout was designed in collaboration with the physical therapy team to
                  optimize patient flow from check-in through treatment and checkout. This
                  project demonstrates our ability to build healthcare-adjacent spaces that
                  meet both clinical and aesthetic requirements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Commercial Upfit
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Physical Therapy
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Charlotte NC
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/fyzical-therapy">
                    View Project Details <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="section-label text-sm text-primary font-semibold uppercase tracking-wider">
                  Roof Restoration
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Mountain Island Charter School — Roof Coating
                </h3>
                <p className="text-muted-foreground mb-4">
                  This commercial roof coating project through our{' '}
                  <Link href="/we-coat" className="text-primary hover:underline">
                    We Coat division
                  </Link>{' '}
                  restored the aging roof of Mountain Island Charter School in Charlotte. The
                  existing roof was deteriorating and causing leak concerns, but a full
                  replacement would have been prohibitively expensive and disruptive to school
                  operations. Our team performed a thorough roof inspection, repaired all
                  damaged areas, sealed every seam and penetration point, and applied our
                  multi-layer silicone coating system. The result is a watertight, UV-reflective
                  roof surface backed by a 20-year No Dollar Limit warranty. The school
                  saved significantly compared to a full tear-off and replacement, and the
                  work was completed during a school break to minimize disruption to students
                  and staff.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Roof Coating
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Education
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Charlotte NC
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/mics-roof-coating">
                    View Project Details <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground">
                  <PaintBucket className="h-16 w-16 opacity-20" aria-hidden="true" />
                </div>
              </Card>
            </div>

            {/* Highlight 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="overflow-hidden md:order-first lg:order-first">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground">
                  <Store className="h-16 w-16 opacity-20" aria-hidden="true" />
                </div>
              </Card>
              <div>
                <span className="section-label text-sm text-primary font-semibold uppercase tracking-wider">
                  Retail
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-4">
                  Pure Remedies CBD — Retail Build-Out, Charlotte NC
                </h3>
                <p className="text-muted-foreground mb-4">
                  The Pure Remedies CBD retail build-out showcases our ability to create
                  customer-facing commercial spaces that are both functional and visually
                  compelling. This project included custom display cabinetry for product
                  merchandising, a branded point-of-sale counter, specialty lighting designed
                  to highlight products, durable luxury vinyl plank flooring, and a clean,
                  modern aesthetic consistent with the wellness industry. Our team worked
                  closely with the business owner to translate their brand vision into a
                  physical space that attracts customers and supports daily retail operations.
                  The build-out was completed on an accelerated schedule to align with the
                  store opening date, and the client reported strong customer feedback on the
                  store design from day one.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Retail Build-Out
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Wellness
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Charlotte NC
                  </span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/portfolio/pure-remedies">
                    View Project Details <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We've Served ── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Industries We Have Served
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our construction portfolio spans a wide range of industries across Charlotte
            and the surrounding region. Each industry brings unique requirements, and our
            team has the expertise to deliver.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Stethoscope,
                title: 'Healthcare & Medical',
                desc: 'Urgent care facilities, physical therapy centers, dental offices, and medical clinics built to healthcare compliance standards. Our healthcare portfolio includes projects requiring specialized HVAC, infection control measures, and ADA accessibility throughout.',
              },
              {
                icon: Store,
                title: 'Retail & Wellness',
                desc: 'Retail storefronts, wellness shops, boutiques, and service-based businesses. We build customer-facing spaces designed to drive foot traffic and support daily retail operations with custom displays, branded interiors, and durable commercial finishes.',
              },
              {
                icon: UtensilsCrossed,
                title: 'Hospitality & Food Service',
                desc: 'Restaurants, cafes, bars, and food service establishments with commercial kitchens, hood ventilation systems, grease traps, and health department-compliant infrastructure. Our hospitality projects prioritize both the guest experience and operational efficiency.',
              },
              {
                icon: Briefcase,
                title: 'Office & Professional',
                desc: 'Corporate offices, professional service firms, coworking spaces, and executive suites. Our office portfolio includes open-concept layouts, private offices, conference rooms, reception areas, and technology infrastructure for modern workplaces.',
              },
              {
                icon: Warehouse,
                title: 'Industrial & Warehouse',
                desc: 'Distribution centers, light manufacturing facilities, flex spaces, and storage buildings. Our industrial projects include concrete slab work, steel construction, loading docks, overhead doors, and climate-controlled storage areas built for operational efficiency.',
              },
              {
                icon: Home,
                title: 'Residential',
                desc: 'Custom homes, kitchen renovations, bathroom remodels, room additions, and whole-home renovations for homeowners across the Charlotte area. Our residential portfolio demonstrates the same attention to detail and project management rigor we bring to our commercial work.',
              },
            ].map((industry) => (
              <Card key={industry.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <industry.icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas We've Built In ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Areas We Have Built In
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Licensed in both North Carolina and South Carolina, our portfolio includes
            projects across the greater Charlotte metropolitan area.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                area: 'Charlotte, NC',
                desc: 'Our home base and where the majority of our portfolio is concentrated. From Uptown commercial builds to South Charlotte residential renovations, we know this city inside and out.',
                href: '/services/commercial-construction',
              },
              {
                area: 'South Charlotte & Ballantyne',
                desc: 'A rapidly growing area with strong demand for commercial upfits, retail build-outs, and custom home construction. Many of our healthcare and wellness projects are located here.',
                href: '/services/commercial-upfits',
              },
              {
                area: 'Fort Mill, SC',
                desc: 'Just across the state line, Fort Mill is booming with new commercial and residential development. Our SC license allows us to serve this market seamlessly.',
                href: '/services/general-contractor',
              },
              {
                area: 'Lake Norman Area',
                desc: 'Huntersville, Cornelius, Davidson, and Mooresville. The Lake Norman region features a mix of commercial construction and premium residential projects.',
                href: '/services/custom-home-builder',
              },
            ].map((location) => (
              <Card key={location.area} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">{location.area}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {location.desc}
                  </p>
                  <Link
                    href={location.href}
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    View Services <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality & Craftsmanship ── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Quality & Craftsmanship
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              What separates the projects in our portfolio from average construction work is
              the level of attention we give to quality and craftsmanship at every stage of
              the build. It starts with material selection. We do not cut corners on
              materials to save a few dollars. We source commercial-grade products from
              trusted suppliers, and our{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center
              </Link>{' '}
              gives clients the opportunity to see and touch material samples before making
              decisions. From flooring and tile to countertops, cabinetry, fixtures, and
              paint, every selection is made with durability, aesthetics, and long-term
              performance in mind.
            </p>
            <p>
              On the job site, quality is enforced through our multi-point inspection process.
              Our field superintendent performs daily checks on workmanship, and our project
              manager conducts formal quality inspections at each major construction milestone
              including rough-in, drywall, trim, and final finishes. We hold every
              subcontractor to the same standard we hold ourselves: if it is not right, it
              gets redone. This is non-negotiable. The result is a finished product that
              looks and performs exactly as promised, a standard that every client in our
              portfolio can attest to.
            </p>
            <p>
              Our commitment to quality extends beyond construction. As a member of the{' '}
              <strong>U.S. Green Building Council (USGBC)</strong>, we incorporate
              sustainable building practices into our projects whenever possible. This
              includes energy-efficient HVAC systems, LED lighting, low-VOC paints and
              adhesives, and water-conserving fixtures. Quality construction is not just about
              what looks good today. It is about building spaces that perform well and last
              for decades. That is the We Build standard.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: Shield,
                title: 'Warranty Backed',
                desc: '1-year workmanship warranty on every project, plus manufacturer warranties up to 25 years on installed products.',
              },
              {
                icon: Award,
                title: 'USGBC Member',
                desc: 'U.S. Green Building Council member committed to sustainable, energy-efficient construction practices.',
              },
              {
                icon: Eye,
                title: 'Inspected at Every Phase',
                desc: 'Multi-point quality inspections at rough-in, drywall, trim, and final finishes ensure nothing is missed.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The best measure of our portfolio is the satisfaction of the clients we built
            it for. Here is what they have to say about working with We Build.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'We Build transformed our empty shell into a fully functional urgent care facility. Their team handled everything from design through construction, and we opened on schedule. The attention to detail in the exam rooms and patient areas was exactly what we needed. We would hire them again without hesitation.',
                name: 'Healthcare Facility Owner',
                project: 'Commercial Upfit — Charlotte, NC',
              },
              {
                quote:
                  'From the first meeting at their Design Center to the final walkthrough, the We Build team was professional, communicative, and detail-oriented. Our fitness studio build-out was completed on time and the space looks incredible. Our members love it and so do we.',
                name: 'Fitness Studio Owner',
                project: 'Commercial Upfit — Fort Mill, SC',
              },
              {
                quote:
                  'The roof coating project saved us a significant amount compared to a full roof replacement. The We Coat team was thorough, clean, and the 20-year warranty gives us real peace of mind. We have already recommended them to other building owners in the area.',
                name: 'Commercial Property Manager',
                project: 'Roof Coating — Charlotte, NC',
              },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote
                    className="h-8 w-8 text-primary/20 mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-muted-foreground text-sm mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.project}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Start Your Project ── */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Start Your Project with We Build
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Every project in our portfolio started with a single conversation. Whether you
              are a business owner planning a{' '}
              <Link
                href="/services/commercial-construction"
                className="text-primary hover:underline"
              >
                commercial construction project
              </Link>
              , a property manager looking to{' '}
              <Link href="/we-coat" className="text-primary hover:underline">
                restore a commercial roof
              </Link>
              , or a homeowner ready for a{' '}
              <Link
                href="/services/residential-additions"
                className="text-primary hover:underline"
              >
                kitchen renovation or room addition
              </Link>
              , the first step is reaching out to our team. We offer free consultations where
              we discuss your project goals, walk through your space (or review plans), and
              provide an honest assessment of scope, timeline, and budget.
            </p>
            <p>
              You can meet with us at your project site, at our{' '}
              <Link href="/design-center" className="text-primary hover:underline">
                Design Center in South Charlotte
              </Link>
              , or schedule a virtual consultation. Our Design Center showroom features
              material samples, finish options, and examples of our work so you can make
              informed decisions about your project before construction begins. From that
              initial consultation, we develop a detailed proposal, handle all permitting and
              design coordination, and manage every aspect of construction through to final
              walkthrough.
            </p>
            <p>
              As a veteran and family-owned company with over 60 years of combined
              experience, we treat every client like a partner. We are not a faceless
              corporation that moves on after the job is done. We are a local Charlotte
              company that stakes our reputation on every project we build. That is why our
              clients come back to us for their next project, and why they refer us to their
              colleagues, friends, and family. If you are ready to add your project to our
              portfolio, we are ready to build it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a Free Consultation
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:7045748124">
                <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                (704) 574-8124
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Frequently Asked Questions About Our Portfolio
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Common questions about our construction projects, process, and how to get
            started with We Build.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Whether you are planning a commercial build, a{' '}
            <Link
              href="/services/commercial-upfits"
              className="text-primary hover:underline"
            >
              commercial upfit
            </Link>
            , a{' '}
            <Link
              href="/services/custom-home-builder"
              className="text-primary hover:underline"
            >
              custom home
            </Link>
            , or a{' '}
            <Link
              href="/services/residential-additions"
              className="text-primary hover:underline"
            >
              residential renovation
            </Link>
            , our team is here to bring your vision to life. Serving Charlotte NC, Fort
            Mill SC, Lake Norman, and surrounding areas.
          </p>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
            Visit our{' '}
            <Link href="/design-center" className="text-primary hover:underline">
              Design Center
            </Link>{' '}
            to explore materials and finishes, read the latest on our{' '}
            <Link href="/blog" className="text-primary hover:underline">
              blog
            </Link>
            , or learn more{' '}
            <Link href="/about" className="text-primary hover:underline">
              about our company
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/design-center">Visit Our Design Center</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
