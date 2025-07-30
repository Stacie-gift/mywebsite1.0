'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Globe, Smartphone } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      icon: Globe,
      category: "Web Development"
    },
    {
      title: "Machine Learning Model",
      description: "Implemented a predictive model using Python and scikit-learn for analyzing student performance data and providing insights for educational improvement.",
      technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      github: "#",
      live: "#",
      icon: Code,
      category: "Machine Learning"
    },
    {
      title: "Mobile Task Manager",
      description: "A cross-platform mobile application for task management with offline capabilities, built using React Native and Firebase.",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      github: "#",
      live: "#",
      icon: Smartphone,
      category: "Mobile Development"
    },
    {
      title: "Database Management System",
      description: "A comprehensive database management system with user interface for managing student records, built with Java and MySQL.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      github: "#",
      live: "#",
      icon: Database,
      category: "Database"
    },
    {
      title: "Algorithm Visualizer",
      description: "An interactive web application that visualizes various sorting and pathfinding algorithms with step-by-step animations.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "D3.js"],
      github: "#",
      live: "#",
      icon: Code,
      category: "Web Development"
    },
    {
      title: "Social Media Analytics",
      description: "A data analysis tool that processes social media data to provide insights on trends, sentiment analysis, and user engagement metrics.",
      technologies: ["Python", "Pandas", "NLTK", "Plotly"],
      github: "#",
      live: "#",
      icon: Database,
      category: "Data Science"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Jellyfish Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-20 h-28 jellyfish-pulse">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm glow-effect"></div>
          <div className="w-10 h-14 bg-purple-300 rounded-full blur-sm mx-auto mt-3"></div>
        </div>
        <div className="absolute bottom-32 left-16 w-16 h-24 jellyfish-pulse" style={{animationDelay: '2s'}}>
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm glow-effect"></div>
          <div className="w-8 h-12 bg-blue-300 rounded-full blur-sm mx-auto mt-3"></div>
        </div>
        
        {/* Floating bubbles */}
        <div className="underwater-particle top-24 right-1/3" style={{animationDelay: '1s'}}></div>
        <div className="underwater-particle bottom-20 left-1/3" style={{animationDelay: '3s'}}></div>
        <div className="underwater-particle top-1/2 left-1/4" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">My Projects</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto shimmer-text">
            Here are some of the projects I've worked on during my CS journey. Each project represents my passion for learning and creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden project-card card-hover"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg glow-effect">
                    <project.icon size={24} className="text-purple-300" />
                  </div>
                  <span className="text-sm font-medium text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-purple-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-md border border-purple-300/20 skill-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors text-sm font-medium nav-link"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium nav-link"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#github"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium border border-purple-400/30 btn-underwater"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
} 