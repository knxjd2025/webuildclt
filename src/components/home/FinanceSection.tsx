import { Button } from '@/components/ui/button';

export function FinanceSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-4">
          Need financing for your construction project?
        </p>
        <Button variant="link" asChild>
          <a
            href="https://www.lyonfinancial.net/hi-dealer/we-build-nc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg"
            aria-label="Finance your project with Lyon Financial (opens in new tab)"
          >
            Finance Your Project with Lyon Financial →
          </a>
        </Button>
      </div>
    </section>
  );
}
