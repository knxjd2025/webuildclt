'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    src: '/images/portfolio/pure-physique.jpg',
    alt: 'Pure Physique commercial upfit by We Build in Charlotte NC',
    label: 'Commercial Upfits',
  },
  {
    src: '/images/we-coat/mics-aerial-1.jpg',
    alt: 'Aerial view of commercial roof coating project by We Build',
    label: 'Roof Coatings',
  },
  {
    src: '/images/portfolio/fyzical-therapy.jpg',
    alt: 'Fyzical Therapy medical office buildout by We Build Charlotte',
    label: 'Medical & Office Buildouts',
  },
  {
    src: '/images/showroom/lobby.jpg',
    alt: 'We Build design center showroom lobby in Charlotte NC',
    label: 'Design-Build',
  },
  {
    src: '/images/portfolio/urgent-care.jpg',
    alt: 'Urgent care facility construction by We Build Charlotte',
    label: 'Healthcare Construction',
  },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setCurrent(i)}
            className="group flex flex-col items-center gap-2"
            aria-label={`Show ${slide.label}`}
          >
            <span
              className={`text-xs font-medium transition-opacity duration-300 hidden md:block ${
                i === current ? 'text-white opacity-100' : 'text-white/0 group-hover:text-white/70 group-hover:opacity-100 opacity-0'
              }`}
            >
              {slide.label}
            </span>
            <span className="relative h-1 w-10 rounded-full bg-white/30 overflow-hidden">
              {i === current ? (
                <span
                  key={`progress-${current}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-primary"
                  style={
                    !isPaused
                      ? { animation: 'slideProgress 5s linear forwards' }
                      : { width: '100%' }
                  }
                />
              ) : (
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-white/60 w-0 transition-all duration-300 group-hover:w-1/2"
                />
              )}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}
