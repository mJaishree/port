"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { motion } from "framer-motion"

export const AnimatedGradientBorder = ({
  children,
  containerClassName,
  className,
  borderClassName,
  duration = 8,
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  containerClassName?: string
  className?: string
  borderClassName?: string
  duration?: number
  delay?: number
  [key: string]: any
}) => {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-lg", containerClassName)} {...props}>
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
          delay,
        }}
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-[#adcdd4] via-[#f472b6] to-[#a78bfa] bg-[length:200%_200%]",
          borderClassName,
        )}
      />
      <div className={cn("relative bg-black rounded-lg", className)}>{children}</div>
    </div>
  )
}
