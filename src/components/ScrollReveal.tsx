'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children in an Intersection Observer
 * that adds `.visible` when the element enters the viewport.
 *
 * Usage:
 *   <ScrollReveal className="reveal">
 *     <h2>Heading</h2>
 *   </ScrollReveal>
 *
 * Variants: "reveal" | "reveal-left" | "reveal-right" | "reveal-scale"
 * Add "stagger-children" to parent to stagger child .reveal elements
 */
export function ScrollReveal({
  children,
  className = 'reveal',
  as: Tag = 'div',
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
