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
import { servicesByCategory, areaLinks } from '@/data/services';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services/general-contractor', hasDropdown: true },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'We Coat', href: '/we-coat' },
  { name: 'Guides', href: '/guides' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Clean up pending dropdown timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
      triggerRef.current?.focus();
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
      return;
    }
    if (!dropdownOpen) return;

    const menu = menuRef.current;
    if (!menu) return;
    const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>('a[href]'));
    const current = document.activeElement as HTMLElement;
    const idx = links.indexOf(current as HTMLAnchorElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = idx < links.length - 1 ? idx + 1 : 0;
      links[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = idx > 0 ? idx - 1 : links.length - 1;
      links[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      links[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      links[links.length - 1]?.focus();
    }
  }

  return (
    <header
      className="fixed left-0 right-0 z-50 shadow-md py-2"
      style={{ top: 'var(--banner-height, 0px)', backgroundColor: '#ffffff' }}
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
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <Link
                    ref={triggerRef}
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary inline-flex items-center gap-1',
                      'text-foreground'
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="menu"
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>

                  <div
                    ref={menuRef}
                    role="menu"
                    aria-label="Services menu"
                    aria-hidden={!dropdownOpen}
                    className={cn(
                      'absolute top-full -left-4 mt-2 rounded-lg shadow-xl border py-4 px-4 z-50 transition-[opacity,transform,visibility] duration-200',
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 -translate-y-2 pointer-events-none invisible delay-0'
                    )}
                    style={{ width: 'var(--dropdown-width)', backgroundColor: '#ffffff' }}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {/* Commercial — first column */}
                      <div>
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Commercial
                        </div>
                        {servicesByCategory.commercial.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className="block px-2 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      {/* Specialty — second column */}
                      <div>
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Specialty
                        </div>
                        {servicesByCategory.specialty.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className="block px-2 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      {/* Areas — third column */}
                      <div>
                        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Areas We Serve
                        </div>
                        {areaLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className="block px-2 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    'text-foreground'
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
              href="tel:+19804711745"
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                'text-foreground'
              )}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (980) 471-1745
            </a>
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
                  'text-foreground'
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
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      About
                    </Link>
                  </SheetClose>

                  {/* Services — Commercial */}
                  <div className="py-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Commercial Services
                    </div>
                    {servicesByCategory.commercial.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-base text-foreground hover:text-primary transition-colors py-3 pl-3 min-h-11"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Services — Specialty */}
                  <div className="py-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Specialty Services
                    </div>
                    {servicesByCategory.specialty.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="block text-base text-foreground hover:text-primary transition-colors py-3 pl-3 min-h-11"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="/portfolio"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      Portfolio
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/we-coat"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      We Coat
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/guides"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      Guides
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/blog"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
                    >
                      Blog
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 min-h-11 flex items-center"
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
                          className="block text-base text-foreground hover:text-primary transition-colors py-3 pl-3 min-h-11"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </nav>

                <div className="flex flex-col gap-4 pt-6 border-t">
                  <a
                    href="tel:+19804711745"
                    className="flex items-center gap-2 text-foreground"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    (980) 471-1745
                  </a>
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
