"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TypeWriter from '@/utils/TypeWriter';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [toggleText, setToggleText] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Hello there, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="relative">
                  Wanichanon
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-500/30 -z-10" />
                </span>
              </h1>
            </div>

            <div className="mb-8">
              <TypeWriter className="text-2xl md:text-4xl font-bold" />
            </div>

            <motion.div
              className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 max-w-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setToggleText(true)}
              onMouseLeave={() => setToggleText(false)}
              whileHover={{ y: -3 }}
            >
              <p className="text-xl text-gray-300 font-medium">
                {toggleText 
                  ? '"ความเรียบง่ายคือสิ่งที่ซับซ้อนสูงสุด"' 
                  : '"Simplicity is the ultimate sophistication."'
                }
              </p>
            </motion.div>

            <div className="flex items-center space-x-6">
              {[
                { href: "https://github.com/N0Vee", icon: "fab fa-github", label: "GitHub" },
                { href: "https://www.linkedin.com/in/wanichanon-saelee-0b2717252/", icon: "fab fa-linkedin", label: "LinkedIn" },
                { href: "https://discordapp.com/users/Nveee#9120", icon: "fab fa-discord", label: "Discord" },
                { href: "mailto:wanichanon.work@gmail.com", icon: "fas fa-envelope", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-purple-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <i className={social.icon} />
                </motion.a>
              ))}
              
              <motion.button
                onClick={() => window.open('/images/Wanichanon_SaeLee_Resume.pdf')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:-rotate-3 transform">
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
        </div>
      </div>

      {/* Section Separator */}
      <div className="relative z-10 py-12">
        <div className="flex items-center justify-center max-w-4xl mx-auto px-6">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="px-8 text-white/70 hover:text-purple-400 transition-colors duration-300">
            <i className="fas fa-code text-2xl" />
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
