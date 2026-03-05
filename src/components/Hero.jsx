import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section 
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div className="flex-1 z-10" variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Endla Rahul
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-2"
              variants={itemVariants}
            >
              CSE-AIML Student
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8"
              variants={itemVariants}
            >
              MS Ramaiah University of Applied Sciences
            </motion.p>
            
            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-10"
              variants={itemVariants}
            >
              Passionate developer exploring the intersection of AI, Machine Learning, and Web Development. 
              Crafting creative solutions with modern technologies.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Animated Background Shape */}
          <motion.div 
            className="flex-1 relative h-96 lg:h-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
            <div className="absolute inset-12 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </motion.section>
  )
}
