import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
      transition: { duration: 0.8 },
    },
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here (can integrate with email service)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      icon: '📧',
      label: 'Email',
      value: 'endlarahul@example.com',
      link: 'mailto:endlarahul@example.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/endla-rahul',
      link: 'https://linkedin.com/in/endla-rahul',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/endlarahul',
      link: 'https://github.com/endlarahul',
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@endla_rahul',
      link: 'https://twitter.com/endla_rahul',
    },
  ]

  return (
    <motion.section 
      id="contact"
      className="min-h-screen flex items-center py-20 px-4"
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
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></div>
          <p className="text-gray-400 text-lg mt-4">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg p-8 border border-indigo-500/30"
            variants={itemVariants}
          >
            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-indigo-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-indigo-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-900/50 border border-indigo-500/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>

            {submitted && (
              <motion.p 
                className="mt-4 text-center text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Links */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <p className="text-gray-300 text-lg mb-8">
              Connect with me on social media or reach out via email. I'm always open to new opportunities and collaborations!
            </p>

            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-lg border border-indigo-500/30 hover:border-indigo-500/60 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="text-3xl">{contact.icon}</div>
                <div>
                  <h4 className="text-indigo-400 font-semibold">{contact.label}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
