"use client";

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';

export default function SkillsSection() {
  const [mounted, setMounted] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  // Precompute dots positions to prevent re-renders causing new randoms
  const dots = useMemo(
    () => Array.from({ length: 24 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      key: i,
    })),
    []
  );

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Animated Background Dots */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {dots.map((d) => (
              <motion.div
                key={d.key}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                style={{ left: d.left, top: d.top }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: d.duration, repeat: Infinity, delay: d.delay }}
              />
            ))}
          </div>
        </div>
      )}

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
            Technical{' '}
            <span className="gradient-text relative">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {Object.entries(skillsData).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group h-full"
            >
              <div className="glass-card rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Category Header */}
                <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b border-white/5">
                  <h3 className="text-lg sm:text-xl font-bold gradient-text">{category}</h3>
                </div>

                {/* Skills Content */}
                <div className="p-4 sm:p-6 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                        className="skill-tag glass-card px-3 py-2 sm:px-4 sm:py-2 rounded-full border border-blue-400/20 text-slate-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-400/10 duration-300 cursor-default hover:shadow-lg hover:shadow-blue-400/20 text-xs sm:text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
