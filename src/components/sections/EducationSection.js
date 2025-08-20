"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "King Mongkut's University of Technology North Bangkok",
      period: "2022 - Present",
      description: "Focused on web development, software engineering, and modern programming technologies.",
      icon: "fas fa-graduation-cap",
      status: "In Progress"
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
      id="education"
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
              Education
              <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-500/30 -z-10" />
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
              
              <div className="flex items-start space-x-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-purple-500/30">
                  <i className={edu.icon} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {edu.institution}
                      </h4>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center space-x-3">
                      <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                        {edu.period}
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Animated decoration */}
                  <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
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
