"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ResumeDownload - Dropdown for EN/TH resume download
 */
function ResumeDownload() {
  const [isOpen, setIsOpen] = useState(false);

  const resumes = [
    {
      label: 'English',
      shortLabel: 'EN',
      href: '/documents/Wanichanon_SaeLee_Resume_EN_2025.pdf',
      flag: '🇬🇧'
    },
    {
      label: 'ภาษาไทย',
      shortLabel: 'TH',
      href: '/documents/Wanichanon_SaeLee_Resume_TH_2025.pdf',
      flag: '🇹🇭'
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center space-x-2 glass-card px-5 py-3 rounded-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-slate-300 hover:text-white"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <i className="fas fa-file-pdf text-red-400" />
        <span>Resume</span>
        <motion.i
          className="fas fa-chevron-down text-xs"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 mt-2 w-48 glass-card rounded-xl border border-white/10 overflow-hidden z-20 shadow-xl"
            >
              <div className="py-1">
                {resumes.map((resume) => (
                  <a
                    key={resume.shortLabel}
                    href={resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg">{resume.flag}</span>
                    <span>{resume.label}</span>
                    <i className="fas fa-download text-xs text-slate-500 ml-auto" />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * AboutSection - Client Component with rich biographical content for AEO
 * Uses "use client" for Framer Motion animations
 * Content is still pre-rendered for SSR
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-16 sm:py-20 relative overflow-hidden"
      aria-label="About Wanichanon Saelee"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Hidden structured content for SEO/AEO - visible to crawlers */}
      <div className="sr-only">
        <h2 itemProp="name">Wanichanon Saelee</h2>
        <p itemProp="jobTitle">Full-Stack Developer</p>
        <p itemProp="description">
          Wanichanon Saelee is a passionate full-stack developer from Thailand
          specializing in React, Next.js, TypeScript, and modern web technologies.
          He creates elegant, user-centered digital experiences and is currently
          available for freelance projects and full-time positions.
        </p>
        <p itemProp="knowsAbout">React, Next.js, JavaScript, TypeScript, Node.js, Tailwind CSS</p>
        <a itemProp="email" href="mailto:wanichanon.work@gmail.com">wanichanon.work@gmail.com</a>
        <a itemProp="url" href="https://wanichanon.dev">https://wanichanon.dev</a>
        <span itemProp="nationality">Thai</span>
        <link itemProp="sameAs" href="https://github.com/N0Vee" />
        <link itemProp="sameAs" href="https://www.linkedin.com/in/wanichanon-saelee-0b2717252/" />
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About{' '}
            <span className="gradient-text">Wanichanon Saelee</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center order-first lg:order-first"
          >
            <div className="relative group">
              {/* Glassmorphism container */}
              <div className="glass-card p-4 sm:p-6 rounded-3xl border border-white/10">
                <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 z-10" />
                  <Image
                    src="/images/Wanichanon.webp"
                    alt="Wanichanon Saelee - Full-Stack Developer from Thailand"
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400/20 rounded-full animate-glow" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400/20 rounded-full animate-glow" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left mt-8 lg:mt-0"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Hi, I&apos;m <span className="gradient-text">Wanichanon Saelee</span>
              </h3>

              <div className="space-y-4 text-slate-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate <strong className="text-white">full-stack developer from Thailand</strong> with
                  a love for creating elegant, user-centered digital experiences. My journey
                  in technology began with curiosity and has evolved into a career focused on
                  building meaningful solutions.
                </p>

                <p>
                  I specialize in modern web technologies including <strong className="text-white">React, Next.js,
                    TypeScript, and Node.js</strong>. I enjoy the challenge of transforming complex
                  problems into simple, beautiful, and intuitive designs.
                </p>

                <p>
                  Currently <strong className="text-white">available for freelance projects and full-time positions</strong>.
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill, index) => (
                  <span
                    key={index}
                    className="glass-card px-4 py-2 text-sm rounded-full border border-white/10 text-slate-300 hover:border-blue-400/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:wanichanon.work@gmail.com"
                className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full border border-white/10 hover:border-blue-400/30 transition-all duration-300 text-white hover:text-blue-400"
              >
                <i className="fas fa-envelope" />
                <span>Contact Me</span>
              </a>
              <ResumeDownload />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
