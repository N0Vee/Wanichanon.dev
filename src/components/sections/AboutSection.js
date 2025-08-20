"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id="about"
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-30 animate-pulse"
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
            About{' '}
            <span className="relative">
              Me
              <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-500/30 -z-10" />
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-10" />
                <Image
                  src="/images/me.jpg"
                  alt="Wanichanon Saelee"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-purple-500/30 rounded-2xl z-20" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Who I{' '}
                <span className="relative">
                  Am
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-500/30 -z-10" />
                </span>
              </h3>
              
              <div className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 mb-6 hover:bg-white/10 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello, my name is Wanichanon SaeLee, but you can call me Aum. I'm an IT student at KMUTNB with a passion for web development.
                </p>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I have skills in Next.js, React, Node.js, and UX/UI design. I'm always looking for ways to create websites that are both functional and visually appealing. I'm eager to learn new things and continue improving myself.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                My{' '}
                <span className="relative">
                  Journey
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-500/30 -z-10" />
                </span>
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                What started as a curiosity about how things work led me to develop my skills in website development. Through personal projects, I've had the opportunity to experiment and grow my abilities. I'm always looking for new challenges to expand my knowledge and technical skills.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
