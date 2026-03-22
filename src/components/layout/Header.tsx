'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

const serviceLinks = [
  { name: 'Commercial Construction', href: '/services/commercial-construction' },
  { name: 'Commercial Upfits', href: '/services/commercial-upfits' },
  { name: 'Design-Build', href: '/services/design-build' },
  { name: 'Roof Coating', href: '/services/roof-coating' },
  { name: 'General Contractor', href: '/services/general-contractor' },
  { name: 'Custom Home Builder', href: '/services/custom-home-builder' },
  { name: 'Residential Additions', href: '/services/residential-additions' },
];

const areaLinks = [
  { name: 'Fort Mill, SC', href: '/areas/fort-mill-sc' },
  { name: 'Lake Norman', href: '/areas/lake-norman' },
  { name: 'South Charlotte', href: '/areas/south-charlotte' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services/general-contractor', hasDropdown: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Design Center', href: '/design-center' },
  { name: 'We Coat', href: '/we-coat' },
  { name: 'Guides', href: '/guides' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function openDropdown() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  }

  function closeDropdown() {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  function handleDropdownKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setDropdownOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
    }
  }

  return (
    <header
      className={cn(
        'fixed left-0 right-0 z-50 transition-[background-color,padding,box-shadow,top] duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-[oklch(0.12_0.015_240/0.95)] backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
      style={{ top: 'var(--banner-height, 0px)' }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="We Build"
              width={234}
              height={78}
              className="h-[62px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary inline-flex items-center gap-1',
                      isScrolled ? 'text-foreground' : 'text-foreground dark:text-white'
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>

                  <div
                    className={cn(
                      'absolute top-full left-0 mt-2 w-64 bg-white dark:bg-card rounded-lg shadow-xl border py-2 z-50 transition-[opacity,transform] duration-200',
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Services
                      </div>
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                      <div className="border-t my-1" />
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Areas We Serve
                      </div>
                      {areaLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isScrolled ? 'text-foreground' : 'text-foreground dark:text-white'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7045748124"
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                isScrolled ? 'text-foreground' : 'text-foreground dark:text-white'
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (704) 574-8124
            </a>
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled ? 'text-foreground' : 'text-foreground dark:text-white'
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8">
                <Image
                  src="/images/logo.png"
                  alt="We Build"
                  width={195}
                  height={65}
                  className="h-[52px] w-auto"
                />
                <nav className="flex flex-col gap-1">
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      About
                    </Link>
                  </SheetClose>

                  {/* Services Section */}
                  <div className="py-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Services
                    </div>
                    {serviceLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-base text-foreground hover:text-primary transition-colors py-1.5 pl-3"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/portfolio"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Portfolio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/design-center"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Design Center
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/we-coat"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      We Coat
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/guides"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Guides
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/blog"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      Contact
                    </Link>
                  </SheetClose>

                  {/* Areas */}
                  <div className="py-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Areas We Serve
                    </div>
                    {areaLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-base text-foreground hover:text-primary transition-colors py-1.5 pl-3"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </nav>

                <div className="flex flex-col gap-4 pt-6 border-t">
                  <a
                    href="tel:7045748124"
                    className="flex items-center gap-2 text-foreground"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    (704) 574-8124
                  </a>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
