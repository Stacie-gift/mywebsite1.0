'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Bottom Jellyfish */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-8 left-1/4 w-16 h-24 opacity-15 animate-pulse">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm"></div>
          <div className="w-8 h-12 bg-purple-300 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-12 right-1/3 w-12 h-20 opacity-10 animate-pulse delay-1000">
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm"></div>
          <div className="w-6 h-10 bg-blue-300 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Stacie</h3>
            <p className="text-purple-200 mb-6 max-w-md">
              Diving deep into the world of computer science, creating innovative solutions, and sharing knowledge with the community.
            </p>
            <div className="flex gap-4">
              <a
                href="#github"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="#linkedin"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="#email"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-purple-200 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-purple-200 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-purple-200 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#resume" className="text-purple-200 hover:text-white transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#github" className="text-purple-200 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-purple-200 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="text-purple-200 hover:text-white transition-colors">
                  Articles
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-purple-300/20 mt-8 pt-8 text-center"
        >
          <p className="text-purple-200 text-sm">
            © 2024 Myat Su Mon (Stacie). Made with{' '}
            <Heart size={14} className="inline text-pink-400" />{' '}
            and lots of coffee ☕
          </p>
          <p className="text-purple-300 text-xs mt-2">
            Diving into the depths of technology, one line of code at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 