"use client";
import { useEffect, useState } from "react";
import { Qwitcher_Grypen } from "next/font/google";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { SparklesCore } from "../ui/sparkles";
import { MovingBorderButton } from "../ui/moving-border-button";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { motion, AnimatePresence } from "framer-motion";

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
});

// Cherry blossom petal component
const CherryBlossomPetal = ({ delay = 0, startSide = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getStartPosition = () => {
    switch (startSide) {
      case 'left':
        return { x: -100, y: Math.random() * window.innerHeight };
      case 'right':
        return { x: window.innerWidth + 100, y: Math.random() * window.innerHeight };
      case 'top':
        return { x: Math.random() * window.innerWidth, y: -100 };
      default:
        return { x: Math.random() * window.innerWidth, y: -100 };
    }
  };

  const getEndPosition = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100
    };
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-10 text-2xl sm:text-3xl"
          initial={getStartPosition()}
          animate={{
            ...getEndPosition(),
            rotate: [0, 360, 720],
            scale: [0.5, 1, 0.8, 1.2, 0.3],
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: Math.random() * 8 + 12, // 12-20 seconds
            ease: "linear",
            rotate: {
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          style={{
            filter: `hue-rotate(${Math.random() * 60}deg) brightness(${0.8 + Math.random() * 0.4})`,
          }}
        >
          🌸
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Floating petals that appear on hover/interaction
const InteractivePetals = ({ triggerCount: triggerCount = 1 }) => {
  const petals = Array.from({ length: triggerCount }, (_, i) => (
    <motion.div
      key={`interactive-${i}-${Date.now()}`}
      className="fixed pointer-events-none z-30 text-xl"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0,
        scale: 0
      }}
      animate={{
        y: [null, -200],
        x: [null, Math.random() * 200 - 100],
        opacity: [0, 1, 1, 0],
        scale: [0, 1.5, 1, 0],
        rotate: [0, 360]
      }}
      transition={{
        duration: 3,
        ease: "easeOut"
      }}
    >
      🌸
    </motion.div>
  ));

  return <>{petals}</>;
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [interactivePetals, setInteractivePetals] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle mouse movement for trailing petals
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Node.js", icon: "🟢" },
  ];

  // Generate cherry blossom petals
  const cherryBlossoms = Array.from({ length: 15 }, (_, i) => (
    <CherryBlossomPetal
      key={i}
      delay={i * 800}
      startSide={['left', 'right', 'top'][i % 3]}
    />
  ));

  const handleInteraction = () => {
    setInteractivePetals(prev => prev + 5);
  };

  return (
    <section className="min-h-screen sm:min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 py-8 sm:py-0">
      {/* Cherry Blossom Animation Layer */}
      {mounted && (
        <>
          {cherryBlossoms}
          <InteractivePetals triggerCount={interactivePetals} />
          
          {/* Mouse trailing petals */}
          <motion.div
            className="fixed pointer-events-none z-20 text-lg opacity-60"
            animate={{
              x: mousePosition.x - 10,
              y: mousePosition.y - 10,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              mass: 0.5
            }}
          >
            🌸
          </motion.div>
        </>
      )}

      {/* Background animations */}
      <div className="absolute inset-0 z-0">
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
          onMouseEnter={handleInteraction}
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
              {/* Cherry blossom accent */}
              <motion.span
                className="absolute -top-4 -right-8 sm:-top-6 sm:-right-12 text-2xl sm:text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                🌸
              </motion.span>
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
              onClick={handleInteraction}
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
                  className="w-full h-full rounded-full bg-white/10 flex items-center justify-center border border-[#adcdd4]/30 group-hover:border-pink-400/60 transition-colors backdrop-blur-sm"
                  onMouseEnter={handleInteraction}
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

      {/* Corner decorative petals */}
      <motion.div
        className="absolute top-10 left-10 text-3xl opacity-60"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
      >
        🌸
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-16 text-2xl opacity-50"
        animate={{
          rotate: [360, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      >
        🌸
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-xl opacity-40"
        animate={{
          rotate: [0, -360],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
      >
        🌸
      </motion.div>

      {/* Leave space at the bottom for navbar */}
      <div className="h-12 sm:h-16"></div>
    </section>
  );
}
