"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="min-h-screen py-16 sm:py-20 relative overflow-hidden"
    >
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
            <span className="gradient-text">
              Me
            </span>
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
                    alt="Wanichanon Saelee"
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
                Full Stack Developer
              </h3>
              
              <div className="space-y-4 text-slate-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating elegant,
                  user-centered digital experiences. My journey in technology began with
                  curiosity and has evolved into a career focused on building meaningful
                  solutions.
                </p>
                
                <p className="hidden sm:block">
                  Currently specializing in modern web technologies including React, Next.js,
                  and Node.js, I enjoy the challenge of transforming complex problems into
                  simple, beautiful, and intuitive designs.
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
                {["Next.js","React","TailwindCSS", "Node.js"].map((skill, index) => (
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
              className="flex items-center space-x-4"
            > 
              <motion.a
                href="mailto:wanichanon.work@gmail.com"
                className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <span>Let's work together</span>
                <i className="fas fa-arrow-right" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
