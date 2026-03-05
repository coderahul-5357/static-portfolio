import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const projects = [
    {
      id: 1,
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot built with NLP and machine learning to understand and respond to user queries.',
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask'],
      link: '#',
      github: '#',
      image: '🤖',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Creative, responsive portfolio landing page with smooth animations and modern design.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      link: '#',
      github: '#',
      image: '🌐',
    },
    {
      id: 3,
      title: 'Movie Recommendation System',
      description: 'ML-based recommendation engine using collaborative filtering and content-based approaches.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      link: '#',
      github: '#',
      image: '🎬',
    },
    {
      id: 4,
      title: 'Real-time Data Dashboard',
      description: 'Interactive dashboard for visualizing live data with real-time updates and analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      link: '#',
      github: '#',
      image: '📊',
    },
    {
      id: 5,
      title: 'Image Classification App',
      description: 'Deep learning model for classifying images using CNN architecture with web interface.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      link: '#',
      github: '#',
      image: '🖼️',
    },
    {
      id: 6,
      title: 'Weather Prediction API',
      description: 'REST API that predicts weather patterns using historical data and ML models.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'REST API'],
      link: '#',
      github: '#',
      image: '⛈️',
    },
  ]

  return (
    <motion.section 
      id="projects"
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl w-full mx-auto">
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg overflow-hidden border border-indigo-500/30 hover:border-indigo-500/60 transition-all cursor-pointer h-80"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold text-indigo-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-indigo-500/20 text-indigo-300 rounded border border-indigo-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More indicator */}
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 10 }}
                  whileHover={{ x: 15 }}
                >
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-dark border border-indigo-500/30 rounded-lg max-w-2xl w-full p-8 relative"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-5xl mb-4">{selectedProject.image}</div>
                <h3 className="text-3xl font-bold text-indigo-400 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-indigo-400 font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                  <motion.button
                    className="flex-1 px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
