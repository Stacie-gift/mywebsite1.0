'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      title: "Diving into Machine Learning: My First Neural Network",
      excerpt: "Exploring the fascinating world of neural networks and how I built my first model from scratch. A journey through the depths of AI and deep learning.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "🧠"
    },
    {
      title: "The Art of Algorithm Optimization",
      excerpt: "How I learned to optimize algorithms and improve performance. From bubble sort to advanced data structures, every step counts in the ocean of code.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Algorithms",
      image: "⚡"
    },
    {
      title: "Building Responsive Web Applications",
      excerpt: "My experience creating web applications that work seamlessly across all devices. The importance of responsive design in today's digital ocean.",
      date: "February 10, 2024",
      readTime: "10 min read",
      category: "Web Development",
      image: "🌊"
    },
    {
      title: "The Future of Computer Science Education",
      excerpt: "Reflections on how CS education is evolving and what skills will be most valuable in the coming years. Navigating the currents of change.",
      date: "January 25, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "🎓"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Enhanced Jellyfish Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 jellyfish-pulse">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm glow-effect"></div>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 jellyfish-pulse" style={{animationDelay: '2s'}}>
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm glow-effect"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 jellyfish-pulse" style={{animationDelay: '4s'}}>
          <div className="w-full h-full bg-purple-300 rounded-full blur-sm glow-effect"></div>
        </div>
        
        {/* Floating bubbles */}
        <div className="underwater-particle top-32 left-1/3" style={{animationDelay: '1s'}}></div>
        <div className="underwater-particle top-48 right-1/4" style={{animationDelay: '3s'}}></div>
        <div className="underwater-particle bottom-20 left-1/2" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">Deep Thoughts</h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto shimmer-text">
            Exploring the depths of technology and sharing insights from my journey through the digital ocean.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden blog-post card-hover"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl wave-animation">{post.image}</span>
                  <span className="text-sm font-medium text-purple-300 bg-purple-900/50 px-3 py-1 rounded-full skill-tag">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-purple-200 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-medium nav-link"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
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
            href="#blog"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium border border-purple-400/30 btn-underwater"
          >
            Explore All Posts
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 