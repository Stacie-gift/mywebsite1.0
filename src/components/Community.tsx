'use client'

import { motion } from 'framer-motion'
import { Users, MessageCircle, Share2, Heart } from 'lucide-react'

export default function Community() {
  const communities = [
    {
      name: "University CS Club",
      role: "Active Member",
      description: "Leading workshops on web development and mentoring junior students in programming fundamentals.",
      members: "150+",
      image: "🎓",
      category: "Academic"
    },
    {
      name: "Open Source Contributors",
      role: "Contributor",
      description: "Contributing to various open source projects and helping maintain documentation for developer tools.",
      members: "1000+",
      image: "🌟",
      category: "Open Source"
    },
    {
      name: "Women in Tech",
      role: "Mentor",
      description: "Supporting and mentoring other women in technology, sharing experiences and encouraging diversity in tech.",
      members: "500+",
      image: "💪",
      category: "Diversity"
    },
    {
      name: "Algorithm Enthusiasts",
      role: "Member",
      description: "Participating in competitive programming contests and sharing solutions with fellow algorithm lovers.",
      members: "300+",
      image: "⚡",
      category: "Competitive"
    },
    {
      name: "Web Development Hub",
      role: "Moderator",
      description: "Helping developers with React, Next.js, and modern web development practices through discussions and code reviews.",
      members: "800+",
      image: "🌐",
      category: "Web Dev"
    },
    {
      name: "Machine Learning Study Group",
      role: "Study Partner",
      description: "Collaborating on ML projects, sharing research papers, and exploring the latest developments in AI.",
      members: "200+",
      image: "🤖",
      category: "AI/ML"
    }
  ]

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Jellyfish */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-20 w-24 h-32 opacity-25 animate-pulse">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm"></div>
          <div className="w-12 h-16 bg-purple-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-8 h-12 bg-purple-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute top-48 right-16 w-20 h-28 opacity-20 animate-pulse delay-700">
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm"></div>
          <div className="w-10 h-14 bg-blue-300 rounded-full blur-sm mx-auto mt-3"></div>
          <div className="w-6 h-10 bg-blue-200 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-24 left-1/3 w-18 h-26 opacity-15 animate-pulse delay-300">
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
          <h2 className="text-4xl font-bold text-white mb-4">My Community</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Swimming with fellow developers, learners, and innovators in the vast ocean of technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-300/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{community.image}</span>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full">
                      {community.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {community.name}
                </h3>
                
                <p className="text-blue-300 text-sm font-medium mb-3">
                  {community.role}
                </p>
                
                <p className="text-blue-200 mb-4 leading-relaxed text-sm">
                  {community.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-300 text-sm">
                    <Users size={16} />
                    {community.members} members
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-colors">
                      <MessageCircle size={16} className="text-blue-300" />
                    </button>
                    <button className="p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/30 transition-colors">
                      <Share2 size={16} className="text-purple-300" />
                    </button>
                    <button className="p-2 bg-pink-600/20 rounded-full hover:bg-pink-600/30 transition-colors">
                      <Heart size={16} className="text-pink-300" />
                    </button>
                  </div>
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
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium border border-blue-400/30"
          >
            <Users size={20} />
            Join My Community
          </a>
        </motion.div>
      </div>
    </section>
  )
} 