"use client"
import { cn } from "@/lib/utils"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: {
    id: number
    title: string
    thumbnail: string
    color: string
  }[]
  className?: string
}) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  })

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const rows = splitArrayIntoRows(images, 3)

  return (
    <div ref={gridRef} className={cn("relative", className)}>
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          style={{
            y: rowIndex === 0 ? translateFirst : rowIndex === 1 ? translateSecond : translateThird,
          }}
          className="flex gap-4 mb-4"
        >
          {row.map((image) => (
            <div key={image.id} className="relative group h-80 w-[30rem] overflow-hidden rounded-lg">
              <div
                className="absolute inset-0 z-10 transition-all duration-300 group-hover:bg-black/40"
                style={{
                  backgroundColor: `${image.color}66`, // 40% opacity
                }}
              />
              <img
                src={image.thumbnail || "/placeholder.svg"}
                alt={image.title}
                className="object-cover w-full h-full transition-all duration-500 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="relative z-30 text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

// Helper function to split array into rows
function splitArrayIntoRows<T>(array: T[], itemsPerRow: number): T[][] {
  return array.reduce((rows: T[][], item: T, index: number) => {
    const rowIndex = index % itemsPerRow
    if (!rows[rowIndex]) {
      rows[rowIndex] = []
    }
    rows[rowIndex].push(item)
    return rows
  }, [])
}
