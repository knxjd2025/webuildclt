'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollProgress — a thin brand-colored progress bar at the top of the page
 * that fills as the user scrolls down. Uses direct DOM manipulation to avoid
 * React re-renders on every scroll event.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;

    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar!.style.transform = `scaleX(${progress})`;
      bar!.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ transform: 'scaleX(0)' }}
      role="progressbar"
      aria-valuenow={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
