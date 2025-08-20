"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "University Management (Full-Stack SaaS Dashboard)",
      category: "Web Application",
      image: "/images/projects_img/UniversityManagement.png",
      github: "https://github.com/N0Vee/University-Admin-Dashboard",
      description: "University Student Management Dashboard is a comprehensive web-based platform for managing university students, built with Next.js (App Router) and Supabase. It features a robust authentication system with role-based access control (Admin / Instructor / Student), student and course management, and a built-in announcement system"
    },
    {
      id: 2,
      title: "InkSpace",
      category: "Web Development",
      image: "/images/projects_img/InkSpace.png",
      github: "https://github.com/N0Vee/InkSpace",
      description: "A sophisticated blog platform developed with Next.js, styled with Bulma and SCSS, featuring seamless content management through Editor.js, and powered by AI Gemini to generate creative topic ideas."
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/images/projects_img/WebPortfolio.png",
      github: "https://github.com/N0Vee/Portfolio-project",
      description: "A responsive personal portfolio website built with React, featuring a clean UI designed with Bulma. Enhanced with smooth animations using Framer Motion for a visually appealing experience."
    },
    {
      id: 4,
      title: "Guitar E-Commerce Website",
      category: "Web Development",
      image: "/images/projects_img/Guitarshop.png",
      github: "https://github.com/Wanidx/project_front-end",
      description: "A fully functional e-commerce website with an admin dashboard, featuring complete CRUD operations. Built with JavaScript, utilizing Axios for API calls and Express for backend management."
    },
    {
      id: 5,
      title: "Weather Forecast Website",
      category: "Web Application",
      image: "/images/projects_img/weatherforcast.png",
      github: "https://github.com/N0Vee/Weather-Forecast-Website",
      description: "A weather forecast web app that fetches data from the OpenWeather API, providing real-time weather information for almost every country worldwide. Features a clean and minimalist UI built with Ant Design."
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
      id="projects"
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
            My{' '}
            <span className="relative">
              Projects
              <div className="absolute bottom-2 left-0 w-full h-3 bg-purple-500/30 -z-10" />
            </span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-purple-500/30 hover:border-purple-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-white transition-colors duration-300"
                    >
                      <i className="fab fa-github text-lg" />
                      <span className="font-medium">View Code</span>
                    </a>

                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/N0Vee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-github text-lg" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
