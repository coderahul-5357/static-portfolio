import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'React', 'Java', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'AI/ML',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Deep Learning'],
    },
    {
      category: 'Web Development',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'REST APIs', 'Vite'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Linux'],
    },
  ]

  return (
    <motion.section 
      id="skills"
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
              Skills & Technologies
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-500/60 transition-all"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
              }}
            >
              <h3 className="text-xl font-bold text-indigo-400 mb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-400/30 text-sm font-medium hover:bg-indigo-500/30 hover:border-indigo-400/60 transition-all"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: 'rgba(99, 102, 241, 0.3)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/30"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-indigo-400 mb-8">Proficiency Levels</h3>
          
          <div className="space-y-6">
            {[
              { skill: 'Python & Machine Learning', level: 85 },
              { skill: 'Web Development (React)', level: 80 },
              { skill: 'Data Analysis', level: 75 },
              { skill: 'Problem Solving & Algorithms', level: 85 },
            ].map((item, idx) => (
              <motion.div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-indigo-400 font-semibold">{item.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
