"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    {
      category: "Frontend",
      icon: "fas fa-code",
      items: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript", "TailwindCSS"],
      color: "from-blue-400 to-blue-600"
    },
    {
      category: "Backend",
      icon: "fas fa-server",
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      category: "Tools & Others",
      icon: "fas fa-tools",
      items: ["Git", "Docker", "Postman", "Figma", "VS Code", "Linux"],
      color: "from-purple-400 to-purple-600"
    }
  ];

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
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My{' '}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skillGroup.color} flex items-center justify-center`}>
                    <i className={`${skillGroup.icon} text-white text-lg`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`} />
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Full-Stack Development", "UI/UX Design", "API Integration", 
              "Database Design", "Responsive Design", "Version Control",
              "Problem Solving", "Team Collaboration"
            ].map((competency, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                className="glass-card px-6 py-3 rounded-full border border-white/10 text-slate-300 hover:text-white hover:border-blue-400/30 transition-all duration-300"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
