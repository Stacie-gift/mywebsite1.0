'use client'

import { motion } from 'framer-motion'
import { Heart, Camera, MapPin, Calendar } from 'lucide-react'

export default function Memories() {
  const memories = [
    {
      title: "First Hackathon Victory",
      description: "Winning my first hackathon with a team of amazing developers. The thrill of building something meaningful in 48 hours.",
      date: "December 2023",
      location: "University Campus",
      image: "🏆",
      category: "Achievement"
    },
    {
      title: "Late Night Coding Sessions",
      description: "Those endless nights debugging code with friends, fueled by coffee and determination. Every bug fixed was a small victory.",
      date: "November 2023",
      location: "Dorm Room",
      image: "☕",
      category: "Learning"
    },
    {
      title: "First Open Source Contribution",
      description: "The excitement of making my first pull request to an open source project. Contributing to something bigger than myself.",
      date: "October 2023",
      location: "GitHub",
      image: "🌟",
      category: "Community"
    },
    {
      title: "Algorithm Competition",
      description: "Participating in my first competitive programming contest. The rush of solving problems under pressure.",
      date: "September 2023",
      location: "Online",
      image: "⚡",
      category: "Competition"
    },
    {
      title: "Mentoring Junior Students",
      description: "Teaching others what I've learned. The joy of seeing someone understand a concept for the first time.",
      date: "August 2023",
      location: "Study Group",
      image: "📚",
      category: "Teaching"
    },
    {
      title: "Building My First App",
      description: "The moment my first complete application went live. A simple calculator that sparked my passion for development.",
      date: "July 2023",
      location: "Home",
      image: "📱",
      category: "First Steps"
    }
  ]

  return (
    <section id="memories" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating Jellyfish */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-16 h-24 opacity-30 animate-bounce">
          <div className="w-full h-full bg-purple-400 rounded-full blur-sm"></div>
          <div className="w-8 h-12 bg-purple-300 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute top-32 right-1/3 w-12 h-20 opacity-25 animate-bounce delay-1000">
          <div className="w-full h-full bg-blue-400 rounded-full blur-sm"></div>
          <div className="w-6 h-10 bg-blue-300 rounded-full blur-sm mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-32 left-1/3 w-14 h-22 opacity-20 animate-bounce delay-500">
          <div className="w-full h-full bg-purple-300 rounded-full blur-sm"></div>
          <div className="w-7 h-11 bg-purple-200 rounded-full blur-sm mx-auto mt-2"></div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Ocean of Memories</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Diving into the depths of my journey, each memory like a pearl in the vast ocean of experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-blue-300/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{memory.image}</span>
                  <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full">
                    {memory.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {memory.title}
                </h3>
                
                <p className="text-blue-200 mb-4 leading-relaxed text-sm">
                  {memory.description}
                </p>
                
                <div className="space-y-2 text-xs text-blue-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {memory.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {memory.location}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                  <Heart size={16} className="text-pink-400" />
                  <span className="text-xs text-blue-300">Precious Memory</span>
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
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-200 px-8 py-3 rounded-lg border border-blue-400/30">
            <Camera size={20} />
            More Memories Coming Soon...
          </div>
        </motion.div>
      </div>
    </section>
  )
} 