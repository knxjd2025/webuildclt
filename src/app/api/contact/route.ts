import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/* Simple in-memory rate limiter: max 5 submissions per IP per minute */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

/* Validate webhook URL is HTTPS and on an allowed host */
const ALLOWED_WEBHOOK_HOSTS = [
  'hooks.zapier.com',
  'hook.us1.make.com',
  'hook.eu1.make.com',
  'discord.com',
  'hooks.slack.com',
];

function isAllowedWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && ALLOWED_WEBHOOK_HOSTS.some((h) => parsed.hostname === h || parsed.hostname.endsWith(`.${h}`));
  } catch {
    return false;
  }
}

/* Field length limits */
const MAX_LENGTHS: Record<string, number> = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 20,
  subject: 200,
  message: 5000,
};

function exceedsLength(data: ContactFormData): string | null {
  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = data[field as keyof ContactFormData];
    if (typeof value === 'string' && value.length > max) {
      return field;
    }
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Input length validation
    const tooLong = exceedsLength(data);
    if (tooLong) {
      return NextResponse.json(
        { error: `${tooLong} exceeds maximum length` },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('CONTACT_WEBHOOK_URL is not configured');
      return NextResponse.json(
        { error: 'Contact form is temporarily unavailable' },
        { status: 503 }
      );
    }

    // Validate webhook destination
    if (!isAllowedWebhookUrl(webhookUrl)) {
      console.error('CONTACT_WEBHOOK_URL is not an allowed destination');
      return NextResponse.json(
        { error: 'Contact form is temporarily unavailable' },
        { status: 503 }
      );
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
          source: 'webuildclt.com',
          submittedAt: new Date().toISOString(),
        }),
        signal: controller.signal,
      });

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', webhookResponse.status);
        return NextResponse.json(
          { error: 'Failed to send message' },
          { status: 502 }
        );
      }
    } finally {
      clearTimeout(timeoutId);
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
