"use client";
import { useEffect, useState } from "react";
import { Qwitcher_Grypen } from "next/font/google";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SparklesCore } from "../ui/sparkles";
import { MovingBorderButton } from "../ui/moving-border-button";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { motion } from "framer-motion";

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Node.js", icon: "🟢" },
  ];

  return (
    <section className="min-h-screen sm:min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 py-8 sm:py-0">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        {/* <BackgroundBeamsWithCollision className="h-full w-full" children={undefined} /> */}
        <div className="absolute inset-0 z-10 opacity-20 sm:opacity-30">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleCount={30}
            particleColor="#adcdd4"
            className="h-full w-full sm:min-size-[0.7] sm:max-size-[1.5] sm:particle-count-[50]"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Animated name with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-8 sm:mb-12 lg:mb-16 w-full"
        >
          <h1
            className={`${qwitcher.className} text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3 sm:mb-4 relative leading-tight`}
          >
            <span className="relative inline-block">
              JAISHREE
              <motion.span
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-0.5 sm:h-1 bg-pink-500 rounded-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  width: ["50%", "70%", "50%"],
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
            <div className="mb-6 sm:mb-8">
              <TextGenerateEffect
                words="Web Developer & Designer"
                className="text-lg xs:text-xl sm:text-xl md:text-2xl opacity-90 tracking-wide"
              />
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-sm xs:text-base sm:text-base md:text-lg mb-8 sm:mb-10 max-w-sm xs:max-w-md sm:max-w-xl mx-auto px-2 sm:px-0 leading-relaxed"
          >
            Creating beautiful, responsive web experiences with modern
            technologies and thoughtful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-0"
          >
            <MovingBorderButton
              borderRadius="9999px"
              className="text-white font-medium relative z-20 border-none px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
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
          className="flex justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap mb-8 sm:mb-12 lg:mb-20 w-full px-2"
        >
          {techStack.map((tech, index) => (
            <CardContainer
              key={tech.name}
              className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0"
            >
              <CardBody className="relative group">
                <CardItem
                  translateZ={20}
                  className="w-full h-full rounded-full bg-white/10 flex items-center justify-center border border-[#adcdd4]/30 group-hover:border-[#adcdd4]/60 transition-colors backdrop-blur-sm"
                >
                  <CardItem
                    translateZ={40}
                    className="text-base xs:text-lg sm:text-xl md:text-2xl"
                  >
                    {tech.icon}
                  </CardItem>
                </CardItem>
                <CardItem
                  translateZ={10}
                  className="absolute -bottom-4 xs:-bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs xs:text-sm text-white/70 whitespace-nowrap font-medium"
                >
                  {tech.name}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </motion.div>
      </div>

      {/* Leave space at the bottom for navbar */}
      <div className="h-12 sm:h-16"></div>
    </section>
  );
}
