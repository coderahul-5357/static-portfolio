import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer 
      className="border-t border-indigo-500/30 bg-dark/50 backdrop-blur-sm py-8 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
    >
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              ER
            </a>
            <p className="text-gray-400 mt-2">Computer Science Student</p>
            <p className="text-gray-500 text-sm">MS Ramaiah University</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-indigo-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#education" className="hover:text-indigo-400 transition-colors">Education</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-indigo-400 mb-4">Follow</h3>
            <div className="flex gap-4">
              {[
                { icon: 'GitHub', link: '#' },
                { icon: 'LinkedIn', link: '#' },
                { icon: 'Twitter', link: '#' },
                { icon: 'Email', link: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/30 hover:border-indigo-500/60 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-indigo-500/30 pt-8">
          <motion.p 
            className="text-center text-gray-500 text-sm"
            variants={itemVariants}
          >
            © {currentYear} Endla Rahul. All rights reserved. | Built with React, Tailwind CSS & Framer Motion
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}
