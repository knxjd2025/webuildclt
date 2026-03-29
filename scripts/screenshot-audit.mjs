import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:5000';
const OUT = './screenshots';
mkdirSync(OUT, { recursive: true });

const pages = [
  { name: 'home-top', url: '/', scroll: 0 },
  { name: 'home-cta', url: '/', scroll: 2000 },
  { name: 'home-footer', url: '/', scroll: 99999 },
  { name: 'services-commercial-upfits', url: '/services/commercial-upfits', scroll: 0 },
  { name: 'services-upfits-cta', url: '/services/commercial-upfits', scroll: 99999 },
  { name: 'services-renovation', url: '/services/commercial-renovation', scroll: 0 },
  { name: 'services-renovation-cta', url: '/services/commercial-renovation', scroll: 99999 },
  { name: 'contact', url: '/contact', scroll: 0 },
  { name: 'about', url: '/about', scroll: 0 },
  { name: 'about-footer', url: '/about', scroll: 99999 },
  { name: 'portfolio', url: '/portfolio', scroll: 0 },
  { name: 'blog', url: '/blog', scroll: 0 },
  { name: 'guides', url: '/guides', scroll: 0 },
];

const browser = await chromium.launch();

// Desktop screenshots
const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
for (const p of pages) {
  const page = await desktopCtx.newPage();
  await page.goto(`${BASE}${p.url}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);
  if (p.scroll > 0) {
    await page.evaluate((s) => window.scrollTo(0, Math.min(s, document.body.scrollHeight)), p.scroll);
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${OUT}/desktop-${p.name}.png`, fullPage: false });
  await page.close();
}

// Mobile screenshots
const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
for (const p of ['home-top', 'home-footer', 'services-commercial-upfits', 'contact']) {
  const cfg = pages.find(x => x.name === p);
  const page = await mobileCtx.newPage();
  await page.goto(`${BASE}${cfg.url}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);
  if (cfg.scroll > 0) {
    await page.evaluate((s) => window.scrollTo(0, Math.min(s, document.body.scrollHeight)), cfg.scroll);
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${OUT}/mobile-${p}.png`, fullPage: false });
  await page.close();
}

// Dark mode screenshots
const darkCtx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  colorScheme: 'dark'
});
for (const p of ['home-top', 'home-footer', 'services-commercial-upfits']) {
  const cfg = pages.find(x => x.name === p);
  const page = await darkCtx.newPage();
  await page.goto(`${BASE}${cfg.url}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);
  if (cfg.scroll > 0) {
    await page.evaluate((s) => window.scrollTo(0, Math.min(s, document.body.scrollHeight)), cfg.scroll);
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: `${OUT}/dark-${p}.png`, fullPage: false });
  await page.close();
}

await browser.close();
console.log('Screenshots saved to ./screenshots/');
