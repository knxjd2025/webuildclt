'use client';

import { useEffect, useState } from 'react';

/**
 * ReadingProgress — thin progress bar fixed below the header
 * that fills as the user scrolls through an article.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const totalHeight = target.scrollHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled past the top of the target
      const scrolled = -rect.top;
      // Total scrollable distance within the target
      const scrollableDistance = totalHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setProgress(100);
        return;
      }

      const pct = Math.min(100, Math.max(0, (scrolled / scrollableDistance) * 100));
      setProgress(pct);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/50"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
