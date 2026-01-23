import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Design Center', href: '/design-center' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'We Coat', href: '/we-coat' },
    { name: 'Contact', href: '/contact' },
    { name: 'News', href: '/news' },
  ],
  services: [
    { name: 'Commercial Construction', href: '/portfolio?category=commercial' },
    { name: 'Commercial Upfits', href: '/portfolio?category=commercial' },
    { name: 'Residential New Builds', href: '/portfolio?category=residential' },
    { name: 'Residential Additions', href: '/portfolio?category=residential' },
    { name: 'Roof Coating', href: '/we-coat' },
    { name: 'Design & Build', href: '/design-center' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/logo-white.png"
              alt="We Build"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Family-owned construction company based in Charlotte, NC. Over 60
              years of combined experience in commercial and residential
              construction.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=14330+S+Lakes+Drive,+Charlotte+NC+28273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>14330 S Lakes Drive, Charlotte NC 28273</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7045748124"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  (704) 574-8124
                </a>
              </li>
              <li>
                <a
                  href="mailto:designcenter@webuildclt.com"
                  className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
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
              src="/images/certifications/we-are-neutral.png"
              alt="We Are Neutral"
              width={120}
              height={60}
              className="h-12 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/certifications/nclbgc.png"
              alt="NC Licensing Board"
              width={60}
              height={60}
              className="h-12 w-auto brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
            {/* Add more certifications as needed */}
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
