'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import React from 'react'

const roles = [ "Java Full Stack Developer"]

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  const [roleIndex, setRoleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto text-center z-10"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi 👋  I'm <span className="text-primary">Hariharan</span>
          </h1>
          
          <motion.div
            className="h-12 text-2xl md:text-3xl text-muted-foreground"
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {roles[roleIndex]}
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* View & Download Resume Button */}
            <motion.a
              href="Resume/Hari-25.pdf" // Make sure 'resume.pdf' is in the public folder
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Download Resume
            </motion.a>

            {/* Contact Me Button */}
            <motion.button 
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#contact"}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
