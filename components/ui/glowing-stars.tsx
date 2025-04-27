"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef, useState } from "react"

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true)
      }}
      onMouseLeave={() => {
        setMouseEnter(false)
      }}
      className={cn(
        "h-full w-full bg-black p-4 rounded-xl border border-[#adcdd4]/[0.2] relative overflow-hidden",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      <GlowingStarsBackground mouseEnter={mouseEnter} />
    </div>
  )
}

export const GlowingStarsBackground = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; color: string }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      const newStars = Array.from({ length: 20 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        color: getRandomColor(),
      }))
      setStars(newStars)
    }
  }, [])

  const getRandomColor = () => {
    const colors = ["#adcdd4", "#f472b6", "#a78bfa", "#60a5fa"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: mouseEnter ? `0 0 10px 2px ${star.color}` : "none",
            transition: "box-shadow 0.3s ease",
          }}
        />
      ))}
    </div>
  )
}
