"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor's Degree in Information Technology",
      institution: "King Mongkut's University of Technology North Bangkok",
      period: "2022 - Present",
      description: "Focusing on software development, web technologies, and computer science fundamentals. Active in programming clubs and hackathons.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Web Development Club Member",
        "Hackathon Participant"
      ],
      icon: "fas fa-graduation-cap",
      color: "from-blue-400 to-cyan-400"
    },
    {
      degree: "High School Diploma",
      institution: "Science-Mathematics Program",
      period: "2019 - 2022",
      description: "Specialized in mathematics and science subjects, building a strong foundation for technical studies.",
      achievements: [
        "Honor Roll Student",
        "Mathematics Olympiad Participant",
        "Science Fair Winner"
      ],
      icon: "fas fa-school",
      color: "from-purple-400 to-pink-400"
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Academic journey and continuous learning experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-purple-400 rounded-full" />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-lg animate-glow`}>
                    <i className={`${edu.icon} text-white text-xl`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-block mb-4">
                      <span className={`glass-card px-4 py-2 text-sm rounded-full border border-white/10 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-semibold`}>
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="text-lg text-blue-400 mb-4">
                      {edu.institution}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center space-x-3 text-slate-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color}`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Online Courses", count: "50+", icon: "fas fa-laptop-code" },
              { name: "Certifications", count: "10+", icon: "fas fa-certificate" },
              { name: "Workshops", count: "15+", icon: "fas fa-users" },
              { name: "Tech Books", count: "25+", icon: "fas fa-book" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-white/10 text-center hover:border-blue-400/30 transition-all duration-300"
              >
                <i className={`${item.icon} text-3xl text-blue-400 mb-3`} />
                <div className="gradient-text text-2xl font-bold mb-1">{item.count}</div>
                <div className="text-slate-400 text-sm">{item.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
