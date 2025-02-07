'use client'

import { motion } from 'framer-motion'
import { PinCard } from './pin-card'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const skills = [
  { name: 'JavaFullStack', icon: '☕', description: 'Developing end-to-end applications' },
  { name: 'C#', icon: '🔷', description: 'Building robust Windows and web applications' },
  { name: '.NET', icon: '🖥️', description: 'Framework for scalable web and desktop solutions' },
  { name: 'PHP', icon: '🐘', description: 'Server-side scripting for dynamic websites' },
  { name: 'Laravel', icon: '🌟', description: 'Elegant web applications with PHP' },
  { name: 'JavaScript', icon: '🚀', description: 'Dynamic and interactive web development' },
  { name: 'TypeScript', icon: '🔹', description: 'Strongly typed JavaScript for scalable applications' },
  { name: 'WordPress', icon: '🌍', description: 'Creating and managing websites with ease' }
]

export function AboutSection() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleSkills = skills.slice(startIndex, startIndex + 4)

  const nextSlide = () => {
    if (startIndex + 4 < skills.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
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

            {/* Skills Section with Navigation */}
            <div className="relative flex items-center">
              {/* Left Arrow */}
              <button 
                onClick={prevSlide} 
                disabled={startIndex === 0} 
                className="p-2 text-white bg-black rounded-full hover:bg-black hover:text-blue-500 disabled:opacity-50"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Skills List */}
              <div className="grid grid-cols-2 gap-4 flex-1 px-4">
                {visibleSkills.map((skill, index) => (
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
              </div>

              {/* Right Arrow */}
              <button 
                onClick={nextSlide} 
                disabled={startIndex + 4 >= skills.length} 
                className="p-2 text-white bg-black rounded-full hover:bg-black hover:text-blue-500 disabled:opacity-50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
