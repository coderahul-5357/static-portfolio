import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section 
      id="about"
      className="min-h-screen flex items-center py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-5xl w-full mx-auto">
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning at MS Ramaiah University of Applied Sciences. My journey combines technical expertise with creative problem-solving.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With a deep interest in building intelligent systems and creating user-friendly applications, I spend my time exploring the latest trends in AI, web development, and data science. I believe in learning by doing and am always excited to take on new challenges.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, reading tech blogs, or participating in hackathons. I'm driven by the desire to create meaningful solutions that make a real impact.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {[
              { number: '50+', label: 'Projects Built' },
              { number: '8+', label: 'Technologies' },
              { number: '2+', label: 'Years Learning' },
              { number: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-500/60 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
