import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="max-w-sm mx-auto">
          <h3 className="font-semibold mb-4">Popular Pages</h3>
          <nav className="flex flex-col gap-2">
            {[
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'About Us', href: '/about' },
              { name: 'Roof Coating', href: '/we-coat' },
              { name: 'Blog', href: '/blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-3 w-3" />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
