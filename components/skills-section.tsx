'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const skills = [
  { name: 'Core Java', level: 'Advanced' },
  { name: 'SpringBoot', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Basic' },
  { name: 'C#', level: 'Intermediate' },
  { name: 'SQL', level: 'Intermediate' },
  { name: 'PHP', level: 'Advanced' },
  { name: 'Dot Net', level: 'Advanced' },
  { name: 'WordPress', level: 'Intermediate' },

]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 relative z-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge
                variant="secondary"
                className="text-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground cursor-default transition-colors"
              >
                {skill.name}
                <span className="ml-2 text-xs text-muted-foreground">
                  {skill.level}
                </span>
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

