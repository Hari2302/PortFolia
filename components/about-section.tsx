'use client'

import { motion } from 'framer-motion'
import { PinCard } from './pin-card'
import { useState } from 'react'

const skills = [
  { name: 'JavaFullStack', icon: '☕', description: 'Developing end-to-end applications' },
  { name: 'C#', icon: '🔷', description: 'Building robust Windows and web applications' },
  { name: '.NET', icon: '🖥️', description: 'Framework for scalable web and desktop solutions' },
  { name: 'PHP', icon: '🐘', description: 'Server-side scripting for dynamic websites' },
  { name: 'JavaScript', icon: '🚀', description: 'Dynamic and interactive web development' },
  { name: 'TypeScript', icon: '🔹', description: 'Strongly typed JavaScript for scalable applications' },
  { name: 'WordPress', icon: '🌍', description: 'Creating and managing websites with ease' }
]

export function AboutSection() {
  const [visibleCount, setVisibleCount] = useState(4)
  const [expanded, setExpanded] = useState(false)

  const toggleSkills = () => {
    if (expanded) {
      setVisibleCount(4) // Show only 4
    } else {
      setVisibleCount(skills.length) // Show all
    }
    setExpanded(!expanded)
  }

  return (
    <section id="about" className="py-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <div className="relative">
            <motion.div
              className="rounded-full overflow-hidden w-[300px] h-[300px] mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQEQ91QyjYccMQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174742372?e=2147483647&v=beta&t=77qfS1_SDRvCTpYp_5C4pyVrBj4Qwo-mvU7xjZ5gVtY"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* About & Skills Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with a love for creating beautiful, 
              functional, and user-friendly applications. With years of experience in 
              web development, I specialize in building modern web applications using 
              cutting-edge technologies.
            </p>

            {/* Skills List */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              animate={{ height: expanded ? 'auto' : '240px' }} // Smooth height transition
              transition={{ duration: 0.4 }}
            >
              {skills.slice(0, visibleCount).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PinCard>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </PinCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Show More / Show Less Button */}
            <button 
              onClick={toggleSkills} 
              className="mt-6 px-6 py-3 mx-auto block bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              {expanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
