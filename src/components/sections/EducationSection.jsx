"use client";

import { motion } from 'framer-motion';

export default function EducationSection() {
  const educationData = [
    {
      degree: "Bachelor's degree in IT, Software Engineering",
      institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
      period: "2022 - Present",
      description: "Focusing on IT with emphasis on web development, IoT, and networking. Gained more independence and explored new subjects.",
      icon: "fas fa-graduation-cap",
      color: "from-blue-400 to-cyan-400"
    },
    {
      degree: "Vocational degree in Information Technology",
      institution: "SIAM BUSINESS ADMINISTRATION TECHNOLOGICAL COLLEGE (SBAC)",
      period: "2019 - 2022",
      description: "Studied IT with focus on computer systems, basic networking, and some web development. Balanced technical and general education.",
      icon: "fas fa-school",
      color: "from-purple-400 to-pink-400"
    },
    {
      degree: "Science and Mathematics program",
      institution: "Rajavinit Bangkhen School",
      period: "2017 - 2019",
      description: "General education with some focus on science and mathematics.",
      icon: "fas fa-school",
      color: "from-green-400 to-yellow-400"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
            My <span className="gradient-text">Education</span>
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center shadow-lg animate-glow`}>
                    <i className={`${edu.icon} text-white text-xl`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-block mb-4">
                      <span className={`inline-flex items-center px-4 py-2 text-sm rounded-full text-white font-semibold border border-white/20 backdrop-blur-sm bg-gradient-to-r ${edu.color} bg-opacity-30 shadow-lg`}>
                        {edu.period}
                      </span>
                    </div>
                    
                    {/* Institution */}
                    <h4 className="text-2xl text-blue-400 mb-4">{edu.institution}</h4>

                    {/* Degree */}
                    <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
