'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface BannerData {
  enabled: boolean;
  text: string;
  link_url: string;
  link_label: string;
  bg_color: string;
  text_color: string;
  dismissible: boolean;
}

export function BannerCTA() {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user already dismissed this banner
    const stored = sessionStorage.getItem('banner_dismissed');
    if (stored === 'true') {
      setDismissed(true);
      return;
    }

    fetch('/api/admin/banner')
      .then((res) => res.json())
      .then((data) => {
        if (data.enabled) {
          setBanner(data);
        }
      })
      .catch(() => {});
  }, []);

  // Set CSS variable for banner height so header can offset itself
  useEffect(() => {
    if (banner && !dismissed && bannerRef.current) {
      const height = bannerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--banner-height', `${height}px`);
    } else {
      document.documentElement.style.setProperty('--banner-height', '0px');
    }
  }, [banner, dismissed]);

  if (!banner || dismissed) return null;

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem('banner_dismissed', 'true');
    document.documentElement.style.setProperty('--banner-height', '0px');
  }

  return (
    <div
      ref={bannerRef}
      id="banner-cta"
      className="fixed top-0 left-0 right-0 z-[60]"
      style={{ backgroundColor: banner.bg_color, color: banner.text_color }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
        <p className="font-medium text-[15px] text-center sm:text-left">{banner.text}</p>
        {banner.link_url && banner.link_label && (
          <Link
            href={banner.link_url}
            className="shrink-0 rounded-md px-3 py-1 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: banner.text_color,
              color: banner.bg_color,
            }}
          >
            {banner.link_label}
          </Link>
        )}
        {banner.dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
