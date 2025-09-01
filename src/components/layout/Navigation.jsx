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
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Fixed nav height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          // Section detection logic
          const sections = navItems.map(item => item.id);
          const scrollPosition = window.scrollY + 100; // Better offset for mobile
          
          let currentSection = 'home';
          
          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = window.scrollY + rect.top;
              const elementBottom = elementTop + element.offsetHeight;
              
              if (scrollPosition >= elementTop - 200 && scrollPosition < elementBottom - 200) {
                currentSection = sectionId;
                break;
              }
            }
          }
          
          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttle scroll events for better performance
    const throttledScroll = () => {
      if (!ticking) {
        handleScroll();
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledScroll);
    };
  }, [navItems]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-none ${
          isScrolled 
            ? 'backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold z-60"
            >
              <button 
                onClick={() => scrollToSection('#home')}
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <span className="gradient-text">
                  <span className="hidden sm:inline">Wanichanon.dev</span>
                  <span className="sm:hidden">WS</span>
                </span>
              </button>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out border-none ${
                    activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm shadow-lg'
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

            {/* Desktop Resume Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={() => window.open('/images/Resume(Eng).pdf', '_blank')}
                className="relative overflow-hidden backdrop-blur-sm bg-blue-500/20 px-6 py-2 rounded-full font-medium text-white border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-500 ease-out group"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center space-x-2">
                  <i className="fas fa-download" />
                  <span>Resume</span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300 z-60"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="flex-1 px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="flex items-center space-x-4">
                  <i className={`${item.icon} text-lg w-5`} />
                  <span>{item.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Resume Button */}
          <div className="p-6 border-t border-white/10">
            <motion.button
              onClick={() => {
                window.open('/images/Resume(Eng).pdf', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full backdrop-blur-sm bg-blue-500/20 border border-blue-400/30 hover:border-blue-400/50 hover:bg-blue-500/30 text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center space-x-3 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download" />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
