"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef, useState } from "react"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const defaultColors = ["#adcdd4", "#f472b6", "#a78bfa"]
  const waveColors = colors ?? defaultColors
  const speedClass = speed === "fast" ? "animate-wave-fast" : "animate-wave-slow"

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col items-center justify-center overflow-hidden relative", containerClassName)}
      {...props}
    >
      <svg
        className="absolute w-full h-full"
        style={{
          filter: `blur(${blur}px)`,
          opacity: waveOpacity,
        }}
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 1000 L 0 500 Q 250 450 500 500 T 1000 500 L 1000 1000 Z"
          fill={waveColors[0]}
          className={cn(speedClass, "translate-y-2")}
        />
        <path
          d="M 0 1000 L 0 600 Q 250 550 500 600 T 1000 600 L 1000 1000 Z"
          fill={waveColors[1]}
          className={cn(speedClass, "translate-y-1")}
        />
        <path
          d="M 0 1000 L 0 700 Q 250 650 500 700 T 1000 700 L 1000 1000 Z"
          fill={waveColors[2]}
          className={speedClass}
        />
      </svg>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
