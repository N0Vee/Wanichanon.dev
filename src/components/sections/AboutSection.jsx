"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="gradient-text">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Glassmorphism container */}
              <div className="glass-card p-6 rounded-3xl border border-white/10">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 z-10" />
                  <Image
                    src="/images/me.jpg"
                    alt="Wanichanon Saelee"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400/20 rounded-full animate-glow" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Full Stack Developer
              </h3>
              
              <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a love for creating elegant,
                  user-centered digital experiences. My journey in technology began with
                  curiosity and has evolved into a career focused on building meaningful
                  solutions.
                </p>
                
                <p>
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
