"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef } from "react"

export const GhibliBackground = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Ghibli-inspired colors
    const colors = [
      "rgba(173, 205, 212, 0.7)", // Light blue
      "rgba(244, 114, 182, 0.7)", // Pink
      "rgba(167, 139, 250, 0.7)", // Purple
      "rgba(167, 233, 175, 0.7)", // Light green
      "rgba(252, 211, 77, 0.7)", // Yellow
    ]

    // Particles
    let particles: Particle[] = []

    interface Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      opacityChange: number
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor(canvas.width / 20) // Adjust density based on screen width

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
          opacityChange: Math.random() * 0.01 * (Math.random() > 0.5 ? 1 : -1),
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace("0.7", particle.opacity.toString())
        ctx.fill()

        // Update particle position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.opacity += particle.opacityChange

        // Change direction or opacity
        if (particle.opacity > 0.7 || particle.opacity < 0.2) {
          particle.opacityChange = -particle.opacityChange
        }

        // Reset particle if it goes off screen
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
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
  }, [])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
