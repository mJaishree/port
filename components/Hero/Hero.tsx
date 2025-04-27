"use client"
import { useEffect, useState } from "react"
import { Qwitcher_Grypen } from "next/font/google"
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision"
import { TextGenerateEffect } from "../ui/text-generate-effect"
import { SparklesCore } from "../ui/sparkles"
import { MovingBorderButton } from "../ui/moving-border-button"
import { CardContainer, CardBody, CardItem } from "../ui/3d-card"
import { motion } from "framer-motion"

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
})

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Node.js", icon: "🟢" },
  ]

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        {/* <BackgroundBeamsWithCollision className="h-full w-full" children={undefined} /> */}
        <div className="absolute inset-0 z-10 opacity-30">
          <SparklesCore
            background="transparent"
            minSize={0.7}
            maxSize={1.5}
            particleCount={50}
            particleColor="#adcdd4"
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Animated name with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <h1 className={`${qwitcher.className} text-6xl md:text-8xl mb-4 relative`}>
            <span className="relative inline-block">
              JAISHREE
              <motion.span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-pink-500 rounded-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  width: ["60%", "80%", "60%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h1>

          {mounted && (
            <TextGenerateEffect
              words="Web Developer & Designer"
              className="text-xl md:text-2xl opacity-90 tracking-wide mb-8"
            />
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-base mb-10 max-w-xl mx-auto"
          >
            Creating beautiful, responsive web experiences with modern technologies and thoughtful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <MovingBorderButton
              borderRadius="9999px"
              className=" text-white font-medium relative z-20 border-none"
              duration={3000}
            >
              View My Work
            </MovingBorderButton>
          </motion.div>
        </motion.div>

        {/* Tech stack with 3D hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7 }}
          className="flex justify-center gap-4 md:gap-8 flex-wrap mb-20"
        >
          {techStack.map((tech, index) => (
            <CardContainer key={tech.name} className="w-20 h-20 md:w-24 md:h-24">
              <CardBody className="relative group">
                <CardItem
                  translateZ={20}
                  className="w-full h-full rounded-full bg-white/10 flex items-center justify-center border border-[#adcdd4]/30 group-hover:border-[#adcdd4]/60 transition-colors"
                >
                  <CardItem translateZ={40} className="text-2xl">
                    {tech.icon}
                  </CardItem>
                </CardItem>
                <CardItem
                  translateZ={10}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-white/70 whitespace-nowrap"
                >
                  {tech.name}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </div>

      {/* Leave space at the bottom for navbar */}
      <div className="h-16"></div>
    </section>
  )
}
