import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Heart, Target, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about We Build - a veteran and family-owned construction company in Charlotte, NC with over 60 years of combined experience.',
};

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Safety is not negotiable. It\'s the foundation we stand on for every project.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We do what we say and say what we do. Honesty guides every decision.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description:
      'Collaboration with our clients and within our team drives exceptional results.',
  },
  {
    icon: Target,
    title: 'Accountability',
    description:
      'We take responsibility for our work and stand behind every project we complete.',
  },
];

const certifications = [
  { name: 'USGBC Member', image: '/images/certifications/usgbc-member-light.png' },
  { name: 'NC Licensing Board', image: '/images/certifications/nclbgc.png' },
  { name: 'CHAMP', image: '/images/certifications/champ.png' },
  { name: 'SC General Contractors', image: '/images/certifications/scgc.png' },
  { name: 'PHH', image: '/images/certifications/phh.png' },
  { name: 'IIBEC', image: '/images/certifications/iibec.png' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Veteran & Family Owned Since 2019"
        backgroundImage="/images/about-hero.jpg"
      />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                We Build
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Excellence in Charlotte Since 2019
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2019, We Build is a Veteran and family owned business
                that is based and operated from Charlotte, NC. With more than 60
                years of combined experience in high quality construction and
                remodeling, our seasoned team is committed to giving what you
                want, how you want.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission at We Build is to provide top-quality construction
                  services, backed by our commitment to outstanding customer
                  service. We strive to maintain the highest standards of
                  craftsmanship, integrity and efficiency while being dedicated
                  to delivering the best projects to our clients and fostering
                  long-term relationships.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="We Build team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">60+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Excellence Looks Like
            </h2>
            <p className="text-muted-foreground">
              We bring focus, expertise, and dedication to every project we
              undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Focus</h3>
                <p className="text-muted-foreground">
                  What you want, how you want. We listen and deliver.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Upfits</h3>
                <p className="text-muted-foreground">
                  Bring new energy into your business with our commercial
                  services.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">New Construction</h3>
                <p className="text-muted-foreground">
                  Build the home of your dreams with our expert team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              These core values drive us to improve every day so we can continue
              providing exceptional quality and service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Memberships
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards and are proud members
              of these organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={100}
                  height={100}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation
            and discover what We Build can do for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
