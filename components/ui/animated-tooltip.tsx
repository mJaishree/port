"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    color: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-16 -translate-x-1/4 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                style={{
                  left: "50%",
                }}
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs border transition-colors duration-200",
              hoveredIndex === idx ? "border-white/50 bg-white/10" : "border-white/20 bg-white/5",
            )}
            style={{
              color: item.color,
            }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
