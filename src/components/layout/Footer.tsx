import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { servicesByCategory, areaLinks } from '@/data/services';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Certifications & Licenses', href: '/about/certifications' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Design Center', href: '/design-center' },
    { name: 'We Coat', href: '/we-coat' },
    { name: 'Guides', href: '/guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/webuildclt/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/WeBuildCLT', icon: Facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company Info — spans 2 cols on lg */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/images/logo-white.png"
              alt="We Build"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Charlotte&rsquo;s trusted commercial construction company. Over 60
              years of combined experience in commercial upfits, design-build,
              and roof coatings. Veteran &amp; family-owned. USGBC member.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label={`Follow We Build on ${item.name}`}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Commercial Services */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Commercial</h2>
            <ul className="space-y-2.5">
              {servicesByCategory.commercial.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Services */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Specialty</h2>
            <ul className="space-y-2.5">
              {servicesByCategory.specialty.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Service Areas */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Quick Links</h2>
            <ul className="space-y-2.5">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-base font-semibold mt-6 mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {areaLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Contact Us</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=14330+S+Lakes+Drive,+Charlotte+NC+28273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>14330 S Lakes Drive, Charlotte NC 28273</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17045748124"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  (704) 574-8124
                </a>
              </li>
              <li>
                <a
                  href="mailto:designcenter@webuildclt.com"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  designcenter@webuildclt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image
              src="/images/certifications/usgbc-member-dark.png"
              alt="USGBC Member"
              width={80}
              height={80}
              className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col items-center gap-1.5">
              <Image
                src="/images/certifications/nclbgc.png"
                alt="NC Licensing Board for General Contractors"
                width={64}
                height={64}
                className="h-14 w-14 object-contain invert opacity-90 hover:opacity-100 transition-opacity"
              />
              <span className="text-[10px] text-secondary-foreground/50 uppercase tracking-wider">NC Licensed</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} We Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
