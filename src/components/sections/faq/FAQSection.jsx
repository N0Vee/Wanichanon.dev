import FAQItemClient from "./FAQItemClient";
import { faqData } from "@/data/faq";

/**
 * FAQ Section - Server Component
 * Static content is SSR, only accordion interaction is client-side
 */
export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - Static SSR content */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Quick answers to common questions. Can&apos;t find what you&apos;re
            looking for? Feel free to reach out directly.
          </p>
        </div>

        {/* FAQ List with Schema.org microdata */}
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqData.map((faq, index) => (
              <FAQItemClient
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA - Static SSR content */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Still have questions? I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:wanichanon.work@gmail.com"
            className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-white hover:text-blue-400"
          >
            <i className="fas fa-envelope" />
            <span>Send me an email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
