"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-0"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/50 rounded-lg"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3
          className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 pr-4"
          itemProp="name"
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <i className="fas fa-chevron-down text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="pb-6" itemProp="text">
          <p className="text-slate-400 text-base leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
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
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
