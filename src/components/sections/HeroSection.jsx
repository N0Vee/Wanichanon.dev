"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import TypeWriter from '@/utils/TypeWriter';

const socialLinks = [
  { href: "https://github.com/N0Vee", icon: "fab fa-github", label: "GitHub", color: "hover:text-gray-400" },
  { href: "https://www.linkedin.com/in/wanichanon-saelee-0b2717252/", icon: "fab fa-linkedin", label: "LinkedIn", color: "hover:text-blue-400" },
  { href: "https://discordapp.com/users/Nveee#9120", icon: "fab fa-discord", label: "Discord", color: "hover:text-indigo-400" },
  { href: "mailto:wanichanon.work@gmail.com", icon: "fas fa-envelope", label: "Email", color: "hover:text-emerald-400" }
];

export default function HeroSection() {

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block">
                <span className="glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-300 border border-white/10">
                  👋 Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="gradient-text">Wanichanon</span>
                <br />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl text-slate-400">
                <TypeWriter />
              </motion.div>
            </div>

            {/* Glassmorphism Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group max-w-lg"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 text-2xl opacity-60">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div>
                    <p className="text-slate-300 text-lg leading-relaxed italic">
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
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card w-12 h-12 rounded-full flex items-center justify-center text-slate-400 border border-white/10 hover:border-white/20 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Profile Image (LCP) */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: [0.95, 1.05, 1]  }}
              transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
              className="relative group">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glassmorphism frame */}
                <div className="absolute inset-4 glass-card rounded-full overflow-hidden border border-white/20 group-hover:border-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />
                  <Image
                    src="/images/me.jpg"
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="glass-card p-3 rounded-full border border-white/10 group cursor-pointer">
          <motion.i
            className="fas fa-chevron-down text-slate-400 group-hover:text-white transition-colors duration-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
