"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import TypeWriter from '@/components/ui/TypeWriter';

const socialLinks = [
  { href: "https://github.com/N0Vee", icon: "fab fa-github", label: "GitHub", color: "hover:text-gray-400" },
  { href: "https://www.linkedin.com/in/wanichanon-saelee-0b2717252/", icon: "fab fa-linkedin", label: "LinkedIn", color: "hover:text-blue-400" },
  { href: "https://discordapp.com/users/Nveee#9120", icon: "fab fa-discord", label: "Discord", color: "hover:text-indigo-400" },
  { href: "mailto:wanichanon.work@gmail.com", icon: "fas fa-envelope", label: "Email", color: "hover:text-emerald-400" }
];

export default function HeroSection() {

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-16 lg:pt-0">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)] lg:min-h-[80vh]">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block">
                <span className="glass-card px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-slate-300 border border-white/10">
                  👋 Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Wanichanon</span>
                <br />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400">
                <TypeWriter />
              </motion.div>
            </div>

            {/* Glassmorphism Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group max-w-lg mx-auto lg:mx-0"
            >
              <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-blue-400 text-xl sm:text-2xl opacity-60">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic">
                      "Simplicity is the ultimate sophistication."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start lg:items-start space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <div className="grid grid-cols-4 gap-3 sm:flex sm:space-x-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-slate-400 border border-white/10 hover:border-white/20 ${social.color} hover:-translate-y-2 transition-all duration-300`}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-base sm:text-lg`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Profile Image (LCP) */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: [0.95, 1.05, 1] }}
              transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
              className="relative group">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glassmorphism frame */}
                <div className="absolute inset-3 sm:inset-4 glass-card rounded-full overflow-hidden border border-white/20 group-hover:border-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
                  <Image
                    src="/images/Wanichanon.webp"
                    alt="Wanichanon Saelee"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating accent rings */}
                <div className="absolute top-0 right-0 w-16 h-16 border border-blue-400/30 rounded-full animate-glow" />
                <div className="absolute bottom-4 left-0 w-12 h-12 border border-cyan-400/30 rounded-full animate-glow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 left-0 w-8 h-8 border border-purple-400/30 rounded-full animate-glow" style={{ animationDelay: '2s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2, type: "spring", stiffness: 300 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "easeInOut" }}
          className="group cursor-pointer">
          <i className="fas fa-chevron-down text-slate-400 group-hover:text-white transition-colors duration-300 inline-block" />
        </motion.div>
      </motion.div>
    </section>
  );
}
