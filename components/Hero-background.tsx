'use client'

import { useEffect, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
}

export default function BackgroundReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef<MousePosition>({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()
  const imgRef = useRef<HTMLImageElement | null>(null)
  const splashImgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configuration
    const CONFIG = {
      SPLASH_SCALE: 1.5, // Scale factor for the splash image
      BACKGROUND_COLOR: 'rgba(0, 0, 0, 0.8)', // Background color outside the hover area
      OVERLAY_OPACITY: 0.5, // Overlay opacity for the revealed image
    }

    // Setup canvas
    const setupCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Reveal effect logic
    const revealEffect = () => {
      if (!ctx || !imgRef.current || !splashImgRef.current) return

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Fill the background with the chosen color
      ctx.fillStyle = CONFIG.BACKGROUND_COLOR
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw the background image
      ctx.drawImage(imgRef.current, 0, 0, canvas.width, canvas.height)

      // Draw the splash image at the cursor position
      const splash = splashImgRef.current
      const splashWidth = splash.width * CONFIG.SPLASH_SCALE
      const splashHeight = splash.height * CONFIG.SPLASH_SCALE

      const x = mousePositionRef.current.x - splashWidth / 2
      const y = mousePositionRef.current.y - splashHeight / 2

      ctx.save()
      ctx.globalCompositeOperation = 'destination-in' // Use the splash image to define the visible area
      ctx.drawImage(splash, x, y, splashWidth, splashHeight)
      ctx.restore()

      // Add a global semi-transparent overlay to the revealed area
      ctx.save()
      ctx.globalAlpha = CONFIG.OVERLAY_OPACITY
      ctx.fillStyle = 'rgba(0, 0, 0, 1)' // Semi-transparent black overlay
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()
    }

    // Main animation loop
    const createRevealEffect = () => {
      // Draw the reveal effect on each frame
      revealEffect()

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(createRevealEffect)
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.pageX,
        y: e.pageY,
      }
    }

    const handleResize = () => {
      setupCanvas()
    }

    // Initial setup
    setupCanvas()
    mousePositionRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    // Load the background image
    const img = new Image(1450,1474)
    img.src = 'https://huly.io/_next/static/media/e4c3a7bd600393b1420b0ffef056534d.svg' // Replace with the correct image path
    img.onload = () => {
      imgRef.current = img
    }

    // Load the splash image
    const splashImg = new Image()
    splashImg.src = 'https://static.vecteezy.com/system/resources/thumbnails/030/925/984/small/soft-cloud-paint-realistic-png.png' // Replace with your splash PNG image URL
    splashImg.onload = () => {
      splashImgRef.current = splashImg

      // Start animation once the images are loaded
      createRevealEffect()
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array as we want this to run once

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full h-full"
      aria-hidden="true"
    />
  )
}
