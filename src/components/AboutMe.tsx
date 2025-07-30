'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function AboutMe() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Floating Jellyfish */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-32 jellyfish-float">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm glow-effect"></div>
          <div className="w-12 h-16 bg-purple-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-8 h-12 bg-purple-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute top-40 right-20 w-20 h-28 jellyfish-float" style={{animationDelay: '2s'}}>
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm glow-effect"></div>
          <div className="w-10 h-14 bg-blue-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-6 h-10 bg-blue-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-16 h-24 jellyfish-float" style={{animationDelay: '4s'}}>
          <div className="w-full h-full bg-purple-300 rounded-full blur-sm glow-effect"></div>
          <div className="w-8 h-12 bg-purple-200 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-4 h-8 bg-purple-100 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        
        {/* Floating bubbles */}
        <div className="underwater-particle top-32 left-1/3" style={{animationDelay: '1s'}}></div>
        <div className="underwater-particle top-48 right-1/4" style={{animationDelay: '3s'}}></div>
        <div className="underwater-particle bottom-40 left-1/2" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Hi, I'm <span className="gradient-text">Myat Su Mon</span>
          </h1>
          <p className="text-xl text-purple-200 mb-2 shimmer-text">(Stacie)</p>
          <p className="text-lg text-blue-200">Computer Science Student & Aspiring Developer</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="w-80 h-80 mx-auto md:mx-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-8 glow-effect card-hover">
              MS
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">About Me</h3>
              <p className="text-purple-200 leading-relaxed">
                I'm a passionate Computer Science student with a love for problem-solving and creating innovative solutions. 
                I enjoy exploring new technologies and building projects that make a difference.
              </p>
              <p className="text-purple-200 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the community.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'JavaScript/TypeScript',
                  'Python',
                  'React/Next.js',
                  'Node.js',
                  'Java',
                  'SQL',
                  'Git/GitHub',
                  'Data Structures',
                  'Algorithms',
                  'Machine Learning',
                  'Web Development',
                  'Mobile Development'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-3 rounded-lg text-center text-purple-200 font-medium skill-tag card-hover"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="glass-effect p-6 rounded-xl card-hover">
              <h4 className="text-lg font-semibold text-white mb-3">Resume</h4>
              <p className="text-purple-200 mb-4">
                Download my latest resume to learn more about my experience and skills.
              </p>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium border border-purple-400/30 btn-underwater"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#github"
                className="p-3 glass-effect rounded-full social-icon"
                aria-label="GitHub"
              >
                <Github size={24} className="text-white" />
              </a>
              <a
                href="#linkedin"
                className="p-3 glass-effect rounded-full social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a
                href="#email"
                className="p-3 glass-effect rounded-full social-icon"
                aria-label="Email"
              >
                <Mail size={24} className="text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 