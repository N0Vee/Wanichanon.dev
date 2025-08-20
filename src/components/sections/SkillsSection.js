"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = {
    "Frontend / Frameworks": ["HTML", "CSS", "JavaScript", "React"],
    "UI Libraries": ["Bulma", "Bootstrap", "Tailwind"],
    "Backend": ["Node.js", "Express", "Bun", "Elysia.js"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    "Full-Stack Framework": ["Next.js"],
    "Software": ["Postman", "Docker"]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className="py-20 relative overflow-hidden bg-transparent"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="relative">
              Skills
              <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-500/30 -z-10" />
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 h-full hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                {/* Category Header */}
                <div className="border-b border-purple-500/20 pb-4 mb-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/10 hover:bg-purple-500 text-white border border-purple-500/30 hover:border-purple-500 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
