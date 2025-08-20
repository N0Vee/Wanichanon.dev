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
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border-t border-purple-500/30">
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="relative">
                  Wanichanon.dev
                  <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-500/30 -z-10" />
                </span>
              </h3>
              <p className="text-gray-300 text-lg mb-6 max-w-md">
                Passionate full-stack developer creating modern web experiences with cutting-edge technologies.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    <i className={social.icon} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="fas fa-envelope text-purple-400" />
                  <span>wanichanon.work@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="fas fa-map-marker-alt text-purple-400" />
                  <span>Bangkok, Thailand</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <i className="fas fa-graduation-cap text-purple-400" />
                  <span>KMUTNB Student</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-purple-500/30 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Wanichanon Saelee. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-2">
                <span>Built with</span>
                <i className="fas fa-heart text-red-400 animate-pulse" />
                <span>using Next.js & Tailwind CSS</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
    </footer>
  );
}
