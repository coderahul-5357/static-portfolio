import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
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

  const education = [
    {
      degree: 'BTech in Computer Science (AIML)',
      institution: 'MS Ramaiah University of Applied Sciences',
      duration: '2023 - 2027',
      details: [
        'Specialization: Artificial Intelligence & Machine Learning',
        'Relevant Coursework: Data Structures, Algorithms, ML, Deep Learning, NLP',
        'CGPA: 8.5/10.0',
        'Core skills: Python, SQL, TensorFlow, Scikit-learn',
      ],
    },
    {
      degree: '12th Grade (High School)',
      institution: 'Secondary School',
      duration: '2021 - 2023',
      details: [
        'Science Stream with strong focus on Physics, Chemistry, Mathematics',
        'Developed interest in computer science and technology',
        'Participated in science olympiad and coding competitions',
      ],
    },
  ]

  return (
    <motion.section 
      id="education"
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl w-full mx-auto">
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-indigo-500/50 hover:border-indigo-500 transition-colors"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              ></motion.div>

              <motion.div
                className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg p-6 border border-indigo-500/30 hover:border-indigo-500/60 transition-all"
                whileHover={{ translateX: 10 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-lg">{edu.institution}</p>
                  </div>
                  <span className="text-pink-400 font-semibold text-lg">{edu.duration}</span>
                </div>

                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      className="text-gray-300 flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-indigo-400 mr-3 mt-1">▹</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
