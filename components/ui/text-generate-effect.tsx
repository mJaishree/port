"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
  textClassName,
}: {
  words: string
  className?: string
  textClassName?: string
}) => {
  const [animatedWords, setAnimatedWords] = useState<string[]>([])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0
    const wordArray = words.split("")

    const animateText = () => {
      if (currentIndex < wordArray.length) {
        setAnimatedWords((prev) => [...prev, wordArray[currentIndex]])
        currentIndex++
        timeout = setTimeout(animateText, 30)
      }
    }

    animateText()

    return () => clearTimeout(timeout)
  }, [words])

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className={cn("text-white", textClassName)}>
          {animatedWords.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
