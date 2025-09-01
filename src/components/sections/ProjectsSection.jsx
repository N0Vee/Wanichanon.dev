"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: "University Management System",
      category: "Full-Stack",
      image: "/images/projects_img/UniversityManagement.png",
      github: "https://github.com/N0Vee/University-Admin-Dashboard",
      tech: ["Next.js", "Supabase", "JavaScript", "TailwindCSS"],
      description: "Comprehensive SaaS dashboard for university management with role-based access control, student management, and announcement system."
    },
    {
      id: 2,
      title: "Wanichanon.blog",
      category: "Full-Stack",
      image: "/images/projects_img/WebBlog.png",
      github: "https://github.com/N0Vee/Wanichanon.blog",
      tech: ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
      description: "Modern blog platform built with Next.js 14 (App Router), PayloadCMS, and a custom glassmorphism design system."
    },
    {
      id: 3,
      title: "Wanichanon.dev",
      category: "Frontend",
      image: "/images/projects_img/WebPortfolio.png",
      github: "https://github.com/N0Vee/Wanichanon.dev",
      tech: ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
      description: "Responsive personal portfolio with clean UI design and smooth animations for enhanced visual experience."
    },
    {
      id: 4,
      title: "Guitar E-Commerce",
      category: "Full-Stack",
      image: "/images/projects_img/Guitarshop.png",
      github: "https://github.com/Wanidx/project_front-end",
      tech: ["JavaScript", "Express", "MySQL", "Axios"],
      description: "Complete e-commerce solution with admin dashboard featuring full CRUD operations and inventory management."
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "Frontend",
      image: "/images/projects_img/weatherforcast.png",
      github: "https://github.com/N0Vee/Weather-Forecast-Website",
      tech: ["Next.js", "JavaScript", "Weather API"],
      description: "Real-time weather application with location-based forecasting and interactive weather data visualization."
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-2 rounded-2xl border border-white/10 inline-flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border-none ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-white border border-white/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className="group"
            >
              <div className="glass-card rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="glass-card px-3 py-1 text-xs rounded-full border border-white/10 text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-white/5 rounded-md text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors duration-200 group/link"
                  >
                    <span className="text-sm font-medium">View Project</span>
                    <i className="fas fa-external-link-alt text-xs group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Interested in working together?</h3>
          <motion.a
            href="mailto:wanichanon.work@gmail.com"
            className="inline-flex items-center space-x-3 glass-card px-8 py-4 rounded-full border border-white/20 hover:border-blue-400/50 text-white font-medium transition-all duration-300 group"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get in touch</span>
            <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
