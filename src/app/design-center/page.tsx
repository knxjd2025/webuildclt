import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Calendar,
  Truck,
  Palette,
  Users,
  Layers,
  Monitor,
  Building,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Design Center',
  description:
    'Visit our We Build Design Center showroom in Charlotte, NC. Browse products, get inspiration, and meet our team. By appointment only.',
};

const features = [
  {
    icon: Palette,
    title: 'Curated Selection',
    description: 'Wide selection of high quality and high-end materials',
  },
  {
    icon: Users,
    title: 'Private Access',
    description: 'Private showroom access for personalized attention',
  },
  {
    icon: Building,
    title: 'Conference Space',
    description: 'Conference room space available for meetings',
  },
  {
    icon: Layers,
    title: 'Design Office',
    description: 'Design office for interior designers and builders',
  },
  {
    icon: Truck,
    title: 'White Glove Service',
    description: 'We deliver materials ordered from the showroom',
  },
  {
    icon: Monitor,
    title: '3D Rendering',
    description: '3D rendering services available for visualization',
  },
];

const showroomImages = [
  { src: '/images/showroom/lobby.jpg', alt: 'Showroom Lobby' },
  { src: '/images/showroom/lobby2.jpg', alt: 'Showroom Lobby View 2' },
  { src: '/images/showroom/bedroom.jpg', alt: 'Showroom Bedroom' },
  { src: '/images/showroom/kitchen.jpg', alt: 'Showroom Kitchen' },
  { src: '/images/showroom/kitchen2.jpg', alt: 'Showroom Kitchen View 2' },
  { src: '/images/showroom/lobby3.jpg', alt: 'Showroom Lobby View 3' },
];

export default function DesignCenterPage() {
  return (
    <>
      <PageHero
        title="Design Center"
        subtitle="Your one-stop shop for every room in the house"
        backgroundImage="/images/design-center-hero.jpg"
      />

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Welcome to the WeBuild Design Center
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We are excited to invite you to visit our WeBuild Design Center.
                Come see our space, browse products from manufacturers and get
                inspiration for your next projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During your visit, you will have the chance to explore our
                showroom, meet our team, and learn more about our services.
                Visits are by appointment only. Please reach out to let us know
                when you would like to stop by!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Virtual Tour
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://my.matterport.com/show/?m=CtFhaV3nbSx"
                title="Virtual Tour"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Showroom
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of materials and get inspired for
              your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden image-hover shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              WeBuild Showroom - Design & Build
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One-stop shop for every room in the house
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="p-6 flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold">Design & Build with We Build</h3>
                  <p className="text-sm text-muted-foreground">
                    We are able to custom build solutions for every space
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours & Booking */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Design Center Hours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Currently, visits are by appointment only. Book by clicking the
            button below! We look forward to seeing you at our showroom and
            sharing our passion for quality construction with you.
          </p>
          <Button size="lg" asChild>
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Design Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us to schedule your showroom visit and discover the
            possibilities for your next project.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
