"use client";

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/N0Vee",
      icon: "fab fa-github",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://www.linkedin.com/in/wanichanon-saelee-0b2717252/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "https://discordapp.com/users/Nveee#9120",
      icon: "fab fa-discord",
      label: "Discord",
      color: "hover:text-indigo-400"
    },
    {
      href: "mailto:wanichanon.work@gmail.com",
      icon: "fas fa-envelope",
      label: "Email",
      color: "hover:text-emerald-400"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" }
  ];

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="glass-card border-0 rounded-none">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Wanichanon.dev
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Passionate full-stack developer creating elegant digital experiences 
                  with modern web technologies and clean, minimalist design.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card w-12 h-12 rounded-full flex items-center justify-center text-slate-400 border border-white/10 hover:border-white/20 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="glass-card w-10 h-10 rounded-full flex items-center justify-center border border-white/10">
                    <i className="fas fa-envelope text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a 
                      href="mailto:wanichanon.work@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors duration-200"
                    >
                      wanichanon.work@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="glass-card w-10 h-10 rounded-full flex items-center justify-center border border-white/10">
                    <i className="fas fa-map-marker-alt text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="mailto:wanichanon.work@gmail.com"
                className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full border border-white/20 hover:border-blue-400/50 text-white font-medium transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Let's collaborate</span>
                <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Wanichanon Saelee. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <i className="fab fa-react text-blue-400" />
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-heart text-red-400" />
                <span>& passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
