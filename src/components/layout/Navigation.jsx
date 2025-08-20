"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', href: '#home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', href: '#about', label: 'About', icon: 'fas fa-user' },
    { id: 'skills', href: '#skills', label: 'Skills', icon: 'fas fa-code' },
    { id: 'education', href: '#education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'projects', href: '#projects', label: 'Projects', icon: 'fas fa-folder-open' },
  ];

  const scrollToSection = useCallback((href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Section detection logic
          const sections = navItems.map(item => item.id);
          const scrollPosition = window.scrollY + 150; // Offset for better detection
          
          let currentSection = 'home'; // Default to home
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = window.scrollY + rect.top;
              const elementBottom = elementTop + element.offsetHeight;
              
              // Check if we're in this section
              if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                currentSection = sectionId;
                break;
              }
            }
          }
          
          // Update active section only if it changed
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, navItems]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/20 border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
          >
            <button 
              onClick={() => scrollToSection('#home')}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <span className="gradient-text">
                Wanichanon.dev
              </span>
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out border-none ${
                  activeSection === item.id
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <i className={item.icon} />
                  <span>{item.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => window.open('/images/Resume(Eng).pdf')}
              className="relative overflow-hidden backdrop-blur-sm bg-blue-500/20 px-6 py-2 rounded-full font-medium text-white border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-500 ease-out group"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center space-x-2">
                <i className="fas fa-paperclip" />
                <span>Resume</span>
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden backdrop-blur-sm bg-black/20 rounded-b-2xl border-b border-white/5"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-500 ease-out ${
                  activeSection === item.id
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="flex items-center space-x-3">
                  <i className={item.icon} />
                  <span>{item.label}</span>
                </span>
              </button>
            ))}
            
            <div className="px-4 py-2 border-t border-white/5 mt-4">
              <button
                onClick={() => window.open('/images/Wanichanon_SaeLee_Resume.pdf')}
                className="w-full backdrop-blur-sm bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-500/30 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-500 ease-out"
              >
                <i className="fas fa-download" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
