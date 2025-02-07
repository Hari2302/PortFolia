'use client'

import { motion, useScroll } from 'framer-motion'
import { PinCard } from './pin-card'
import { TracingBeam } from './tracing-beam'
import { useRef } from 'react'

interface TimelineItem {
  date: string
  title: string
  description: string
  color: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const timelineColors = {
  blue: 'bg-blue-500 dark:bg-blue-400',
  green: 'bg-green-500 dark:bg-green-400',
  purple: 'bg-purple-500 dark:bg-purple-400',
  orange: 'bg-orange-500 dark:bg-orange-400',
  primary: 'bg-primary'
}

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const {  } = useScroll({
    target: containerRef,
    offset: ['end end', 'start start']  // Reversed direction
  })

  return (
    <div ref={containerRef} className="relative">
      <TracingBeam />
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <PinCard className="mx-4">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </PinCard>
            </div>
            <div className="w-16 flex justify-center">
              <motion.div
                className={`w-3 h-3 rounded-full ${timelineColors[item.color as keyof typeof timelineColors]}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.5
                }}
              />
            </div>
            <div className={`flex-1 `}>
              <div className={`mx-4 flex ${index % 2 === 0 ? 'justify-end' : ''}`}>
                <span className="text-sm font-medium text-muted-foreground">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

