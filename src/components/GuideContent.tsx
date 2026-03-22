'use client';

import { useEffect, useRef } from 'react';
import { enrichBlogContent } from '@/lib/blog-enricher';

/**
 * GuideContent — renders enriched HTML guide content with scroll-reveal
 * animations on each major section (h2 blocks, callouts, tables, etc.)
 */
export function GuideContent({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Find all major visual blocks and add reveal animations
    const selectors = [
      ':scope > h2',
      ':scope > .callout',
      ':scope > .key-takeaway',
      ':scope > .process-steps',
      ':scope > .cost-table',
      ':scope > .stats-grid',
      ':scope > .inline-cta',
      ':scope > .two-col',
      ':scope > .mini-story',
      ':scope > .comparison-chart',
      ':scope > blockquote',
    ];

    const elements = el.querySelectorAll(selectors.join(', '));

    if (prefersReducedMotion) {
      elements.forEach((node) => node.classList.add('visible'));
      return;
    }

    // Apply reveal class
    const revealVariants = ['reveal', 'reveal-left', 'reveal-right', 'reveal-scale'];
    elements.forEach((node, i) => {
      const tagName = node.tagName.toLowerCase();
      const className = node.className;

      // Pick animation variant based on element type
      let variant = 'reveal'; // default: fade up
      if (className.includes('stats-grid') || className.includes('two-col')) {
        variant = 'reveal-scale';
      } else if (className.includes('callout') || className.includes('mini-story')) {
        variant = i % 2 === 0 ? 'reveal-left' : 'reveal-right';
      } else if (tagName === 'h2') {
        variant = 'reveal';
      } else if (className.includes('process-steps')) {
        variant = 'reveal-scale';
      }

      // Don't double-apply
      if (!revealVariants.some((v) => node.classList.contains(v))) {
        node.classList.add(variant);
      }
    });

    // Observe all reveal elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const allRevealElements = el.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    allRevealElements.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const enrichedHtml = enrichBlogContent(html);

  return (
    <div
      ref={containerRef}
      className="article-prose"
      dangerouslySetInnerHTML={{ __html: enrichedHtml }}
    />
  );
}
