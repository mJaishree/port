"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef, useState } from "react"

export const Spotlight = ({
  className,
  fill = "white",
  children,
  ...props
}: {
  className?: string
  fill?: string
  children?: React.ReactNode
  [key: string]: any
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      mouseX.current = x
      mouseY.current = y
    }

    const handleMouseLeave = () => {
      mouseX.current = container.offsetWidth / 2
      mouseY.current = container.offsetHeight / 2
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} {...props}>
      {isMounted && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mouseX.current}px ${mouseY.current}px, ${fill}, transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
