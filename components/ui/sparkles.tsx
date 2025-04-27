"use client"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleCount?: number
  particleColor?: string
}

export const SparklesCore = ({
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleCount = 30,
  particleColor = "#adcdd4",
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])

  interface Particle {
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
    opacitySpeed: number
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random(),
          opacitySpeed: Math.random() * 0.02,
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.opacity += particle.opacitySpeed

        // Reset particle if it goes off screen or opacity changes
        if (
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height ||
          particle.opacity > 1 ||
          particle.opacity < 0
        ) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.opacity = Math.random()
          particle.opacitySpeed = Math.random() * 0.02 * (Math.random() > 0.5 ? 1 : -1)
        }
      })
    }

    const animate = () => {
      drawParticles()
      requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [background, maxSize, minSize, particleColor, particleCount])

  return <canvas ref={canvasRef} className={cn("h-full w-full", className)} />
}
