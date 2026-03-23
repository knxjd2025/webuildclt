import Link from 'next/link';

export function MarketInsightSection() {
  return (
    <section className="py-20 bg-muted content-lazy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Local Market Insight
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            The Charlotte Construction Market — Why Quality Matters More Than
            Ever
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Charlotte is one of the fastest-growing cities in the United
              States, and the construction industry here reflects that growth.
              From Uptown high-rises and South End mixed-use developments to
              suburban commercial corridors in Ballantyne, Lake Norman, and
              Fort Mill, the demand for quality commercial construction has
              never been higher. At the same time, the rapid pace of
              development has attracted contractors of varying quality — making
              it more important than ever for business owners and property
              managers to choose carefully.
            </p>
            <p>
              The Charlotte construction market presents unique challenges that
              require local expertise. Mecklenburg County has specific
              stormwater management requirements, fire separation standards,
              and ADA compliance protocols that differ from surrounding
              jurisdictions. York County in South Carolina operates under a
              different building code cycle with its own inspection processes.
              A contractor who knows these differences — and has established
              relationships with local plan reviewers and inspectors — can
              navigate permitting significantly faster than one who does not.
            </p>
            <p>
              Material costs and labor availability in the Charlotte market
              fluctuate with national trends but are also influenced by local
              demand cycles. Major infrastructure projects, university
              expansions, and the continued growth of Charlotte&apos;s
              financial services sector create competition for skilled labor
              and materials. Working with an experienced, locally connected
              general contractor like We Build means your project benefits
              from established supplier relationships, reliable subcontractor
              networks, and procurement strategies that protect both schedule
              and budget. For a deeper dive into the local market, read our{' '}
              <Link href="/guides/commercial-construction-charlotte-guide" className="text-primary hover:underline">
                Complete Guide to Commercial Construction in Charlotte
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
