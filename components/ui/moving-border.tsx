"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { motion } from "framer-motion"

export const MovingBorder = ({
  children,
  duration = 6500,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) => {
  return (
    <Component className={cn("relative overflow-hidden", containerClassName)} {...otherProps}>
      <motion.div
        className={cn("absolute inset-0 z-0 rounded-[inherit]", borderClassName)}
        style={{
          backgroundImage: `conic-gradient(from 0deg, #adcdd4, #f472b6, #a78bfa, #adcdd4)`,
        }}
        animate={{
          rotate: ["0deg", "360deg"],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <div className={cn("relative z-10 rounded-[inherit] bg-black p-[1px]", className)}>
        <div className="rounded-[inherit] bg-black">{children}</div>
      </div>
    </Component>
  )
}
