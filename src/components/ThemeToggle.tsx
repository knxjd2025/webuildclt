'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Theme = 'light' | 'dark' | 'system';

/** Theme-color values derived from the design system (secondary bg tones) */
const THEME_META_COLORS = {
  light: '#1a1a2e', // oklch(0.12 0.015 240) — secondary
  dark: '#0f1420',  // oklch(0.10 0.015 240) — dark secondary
} as const;

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function applyTheme(theme: Theme) {
  const resolved = theme === 'system' ? getSystemTheme() : theme;
  const root = document.documentElement;

  if (resolved === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Update meta theme-color to match
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      'content',
      THEME_META_COLORS[resolved]
    );
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial = stored || 'light';
    setTheme(initial);
    applyTheme(initial);

    // Listen for system theme changes when in system mode
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (localStorage.getItem('theme') === 'system' || !localStorage.getItem('theme')) {
        applyTheme('system');
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  // Prevent flash of wrong icon during hydration
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-11"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
      </Button>
    );
  }

  const resolved = theme === 'system' ? getSystemTheme() : theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-11"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      {resolved === 'dark' ? (
        <Moon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  );
}
