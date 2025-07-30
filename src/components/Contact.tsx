'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Floating Jellyfish */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-16 w-20 h-28 opacity-20 animate-bounce">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm"></div>
          <div className="w-10 h-14 bg-purple-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-6 h-10 bg-purple-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute top-48 right-24 w-16 h-24 opacity-15 animate-bounce delay-1000">
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm"></div>
          <div className="w-8 h-12 bg-blue-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-4 h-8 bg-blue-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-18 h-26 opacity-10 animate-bounce delay-500">
          <div className="w-full h-full bg-purple-300 rounded-full blur-sm"></div>
          <div className="w-9 h-13 bg-purple-200 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-5 h-8 bg-purple-100 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Ready to dive into a conversation? I'm always excited to connect with fellow developers and tech enthusiasts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-300/20 p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-purple-200 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-purple-200 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell me about your project, collaboration idea, or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-purple-200 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <Mail size={24} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-purple-200">stacie@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Phone size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-blue-200">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <MapPin size={24} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-purple-200">University Campus, Tech City</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="#github"
                  className="p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-gray-300" />
                </a>
                <a
                  href="#linkedin"
                  className="p-3 bg-blue-800/50 rounded-full hover:bg-blue-700/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-blue-300" />
                </a>
                <a
                  href="#twitter"
                  className="p-3 bg-blue-600/50 rounded-full hover:bg-blue-500/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} className="text-blue-300" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-300/20 p-6">
              <h4 className="text-white font-medium mb-3">Quick Response</h4>
              <p className="text-purple-200 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on social media!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 