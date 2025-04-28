"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

export const MagneticButton = ({
  children,
  className,
  magneticStrength = 1,
  ...props
}: {
  children: React.ReactNode
  className?: string
  magneticStrength?: number
  [key: string]: any
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * magneticStrength, y: y * magneticStrength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
