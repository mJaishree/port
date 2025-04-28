"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 0.2,
  background = "bg-black",
  containerBackground = "bg-black",
  gradientClassName = "from-[#adcdd4] via-[#f472b6] to-[#a78bfa]",
  ...props
}: {
  children?: React.ReactNode
  containerClassName?: string
  className?: string
  as?: any
  duration?: number
  background?: string
  containerBackground?: string
  gradientClassName?: string
  [key: string]: any
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Component
      className={cn("relative rounded-xl p-[1px] overflow-hidden", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            className="absolute inset-0 z-0"
          >
            <div className={cn("absolute inset-0 bg-gradient-to-r opacity-100", gradientClassName)} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={cn("relative z-10 rounded-[10px]", background, className)}>{children}</div>
    </Component>
  )
}
