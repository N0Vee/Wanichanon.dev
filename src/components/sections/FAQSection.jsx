import FAQItemClient from "./FAQItemClient";

/**
 * FAQ Data - Server-side rendered for SEO
 * This content is in the initial HTML that search engines see
 */
const faqs = [
  {
    question: "Who is Wanichanon Saelee?",
    answer:
      "Wanichanon Saelee is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. He creates elegant, user-centered digital experiences and is currently open to new opportunities.",
  },
  {
    question: "What technologies does Wanichanon specialize in?",
    answer:
      "Wanichanon specializes in modern web technologies including React, Next.js, JavaScript, TypeScript, Node.js, Tailwind CSS, Supabase, Express, and MySQL. He is proficient in both frontend and backend development.",
  },
  {
    question: "How can I contact Wanichanon for collaboration?",
    answer:
      "You can contact Wanichanon via email at wanichanon.work@gmail.com, connect on LinkedIn at linkedin.com/in/wanichanon-saelee-0b2717252, or reach out on GitHub at github.com/N0Vee. He is open to freelance projects and full-time opportunities.",
  },
  {
    question: "What projects has Wanichanon built?",
    answer:
      "Wanichanon has built several projects including: University Management System (SaaS dashboard with role-based access), Wanichanon.blog (modern blog platform with PayloadCMS), Guitar E-Commerce (full e-commerce solution with admin dashboard), and Weather Forecast App (real-time weather application with API integration).",
  },
  {
    question: "Is Wanichanon available for hire?",
    answer:
      "Yes, Wanichanon is currently available for freelance projects and full-time positions. He is passionate about creating meaningful web solutions and is open to opportunities in full-stack development, frontend development, and web application development.",
  },
  {
    question: "What is Wanichanon's development approach?",
    answer:
      "Wanichanon follows a user-centered design approach, focusing on creating clean, maintainable code with modern best practices. He emphasizes performance optimization, responsive design, and accessibility in all his projects.",
  },
  {
    question: "Does Wanichanon work remotely?",
    answer:
      "Yes, Wanichanon is fully equipped for remote work and has experience collaborating with teams globally. He is proficient with remote collaboration tools and async communication workflows.",
  },
];

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
            {faqs.map((faq, index) => (
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
