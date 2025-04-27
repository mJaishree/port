"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const maskSize = useTransform(() => {
    if (!isHovered || !isMounted) return 0
    const max = Math.max(containerRef.current?.offsetWidth || 0, containerRef.current?.offsetHeight || 0)
    return max * 0.5
  })

  const maskX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  })

  const maskY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  })

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-full w-full relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full flex items-center justify-center text-center p-6">
        <div className="relative z-10 text-base md:text-lg font-light text-neutral-600 dark:text-neutral-300">
          <span className="font-bold">{text}</span>
        </div>
      </div>

      {isMounted && (
        <div
          className="absolute inset-0 flex items-center justify-center text-center p-6"
          style={{
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle ${maskSize}px at ${maskX}px ${maskY}px, black 40%, transparent 50%)`
              : "",
            maskImage: isHovered
              ? `radial-gradient(circle ${maskSize}px at ${maskX}px ${maskY}px, black 40%, transparent 50%)`
              : "",
          }}
        >
          <div className="relative z-10 text-base md:text-lg font-light text-white">
            <span className="font-bold">{revealText}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#adcdd4] via-[#f472b6] to-[#a78bfa] opacity-90" />
        </div>
      )}

      {children}
    </motion.div>
  )
}
