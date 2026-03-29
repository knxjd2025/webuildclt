import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function FinanceSection() {
  return (
    <section className="py-12 bg-muted border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <p className="text-muted-foreground text-sm">
            Need financing for your construction project?
          </p>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://www.lyonfinancial.net/hi-dealer/we-build-nc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Finance your project with Lyon Financial (opens in new tab)"
            >
              Lyon Financial
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
