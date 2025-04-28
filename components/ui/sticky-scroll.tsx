"use client"
import { cn } from "@/lib/utils"

import { motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    image?: string
    technologies?: { id: number; name: string; color: string }[]
    links?: {
      live: string
      github: string
    }
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const backgroundColors = [
    "linear-gradient(to bottom right, #a7e9af, #adcdd4)",
    "linear-gradient(to bottom right, #f472b6, #fcd34d)",
    "linear-gradient(to bottom right, #a78bfa, #a7e9af)",
    "linear-gradient(to bottom right, #fcd34d, #a78bfa)",
    "linear-gradient(to bottom right, #adcdd4, #f472b6)",
  ]

  const cardColors = [
    "rgba(167, 233, 175, 0.05)",
    "rgba(244, 114, 182, 0.05)",
    "rgba(167, 139, 250, 0.05)",
    "rgba(252, 211, 77, 0.05)",
    "rgba(173, 205, 212, 0.05)",
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { scrollTop, scrollHeight, clientHeight } = ref.current
      const scrollFraction = scrollTop / (scrollHeight - clientHeight)
      const index = Math.min(Math.floor(scrollFraction * content.length), content.length - 1)
      setActiveCard(index)
    }

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [content.length])

  return (
    <motion.div
      ref={ref}
      className="h-[30rem] md:h-[82vh] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-4 scrollbar-hide"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left side - Sticky images */}
            <div className="hidden md:block sticky top-0 h-screen flex items-center">
              <div className="relative h-[30rem] w-[30rem] rounded-md overflow-hidden">
                {content.map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 h-full w-full rounded-md overflow-hidden"
                    style={{
                      backgroundImage: backgroundColors[index % backgroundColors.length],
                      opacity: activeCard === index ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      {item.image ? (
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-md"
                          style={{
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-black/20 rounded-md flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">{item.title}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Scrolling content */}
            <div className="py-10 md:py-40">
              {content.map((item, index) => (
                <div key={index} className="mb-32">
                  {/* Mobile image (only visible on mobile) */}
                  <div
                    className="md:hidden w-full h-60 mb-6 rounded-md overflow-hidden"
                    style={{
                      backgroundImage: backgroundColors[index % backgroundColors.length],
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-black/20 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{item.title}</span>
                      </div>
                    )}
                  </div>

                  <motion.div
                    className={cn("p-8 rounded-md", contentClassName)}
                    style={{
                      backgroundColor: cardColors[index % cardColors.length],
                      border: `1px solid ${item.technologies?.[0]?.color || "rgba(255,255,255,0.1)"}`,
                      opacity: isMobile ? 1 : activeCard === index ? 1 : 0.3,
                      transform: isMobile ? "none" : activeCard === index ? "scale(1)" : "scale(0.95)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-base md:text-lg text-white/70 mb-6">{item.description}</p>

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-white/50 mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech.id}
                              className="px-3 py-1 rounded-full text-xs border border-white/20 bg-white/5"
                              style={{ color: tech.color }}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    {item.links && (
                      <div className="flex gap-4">
                        <a
                          href={item.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                        >
                          View Project
                        </a>
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-md bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors"
                        >
                          GitHub
                        </a>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
