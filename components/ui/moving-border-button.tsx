"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const MovingBorderButton = ({
  borderRadius = "1.75rem",
  children,
  duration = 2500,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) => {
  return (
    <Component
      className={cn("relative text-center p-px font-medium", containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn("absolute inset-0 overflow-hidden", borderClassName)}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <div className="h-[300%] w-[100%]">
          <motion.div
            className="w-full h-full relative"
            animate={{
              y: ["0%", "-66.6%"],
            }}
            transition={{
              duration: duration / 1000,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#adcdd4] via-[#f472b6] to-[#adcdd4]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#adcdd4] via-[#f472b6] to-[#adcdd4]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#adcdd4] via-[#f472b6] to-[#adcdd4]" />
          </motion.div>
        </div>
      </div>

      <div
        className={cn("relative bg-black text-white px-6 py-2", className)}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
