'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const colors = [
  'rgb(var(--primary))',
  'rgb(var(--blue))',
  'rgb(var(--green))',
  'rgb(var(--purple))',
  'rgb(var(--orange))'
]

export function TracingBeam() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })
  
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const prevScrollY = useRef(0)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const direction = latest > prevScrollY.current ? 'down' : 'up'
      setScrollDirection(direction)
      prevScrollY.current = latest
    })
  }, [scrollY])

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const colorIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, 4]
  )
  const currentColor = useTransform(colorIndex, (i) => colors[Math.round(i)])

  const beamY = useTransform(
    scrollYProgress,
    [0, 1],
    scrollDirection === 'down' ? ['0%', '100%'] : ['100%', '0%']
  )

  return (
    <motion.div
      ref={ref}
      className="relative h-full w-full"
    >
      {/* Main timeline line with color transition */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-px w-[3px] h-full"
        style={{ 
          scaleY, 
          originY: scrollDirection === 'down' ? 0 : 1,
          background: currentColor
        }}
      />
      
      {/* Glowing beam effect */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-px w-[5px] h-32"
        style={{ 
          opacity: glowOpacity,
          y: beamY,
          background: useTransform(currentColor, (color) => 
            `linear-gradient(${scrollDirection === 'down' ? 'to bottom' : 'to top'}, 
              transparent, ${color}, transparent)`
          ),
          filter: 'blur(4px)',
        }}
      />
      
      {/* Additional glow for intensity */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-px w-[8px] h-32"
        style={{ 
          opacity: useTransform(glowOpacity, [0, 1], [0, 0.75]),
          y: beamY,
          background: useTransform(currentColor, (color) => 
            `linear-gradient(${scrollDirection === 'down' ? 'to bottom' : 'to top'}, 
              transparent, ${color}, transparent)`
          ),
          filter: 'blur(12px)',
        }}
      />
    </motion.div>
  )
}

