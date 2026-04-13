import Link from 'next/link';
import { homeFaqs } from '@/data/homepage';

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 bg-muted content-lazy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Charlotte Construction Questions — Answered
            </h2>
            <p className="text-muted-foreground">
              We answer the questions Charlotte homeowners and business owners
              ask most about construction, costs, timelines, licensing, and
              working with a general contractor. If your question is not
              listed here,{' '}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>{' '}
              and we will be happy to help.
            </p>
          </div>
          <div className="space-y-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="bg-background rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
