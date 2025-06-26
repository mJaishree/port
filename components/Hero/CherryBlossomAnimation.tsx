"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cherry blossom petal component
const CherryBlossomPetal = ({ delay = 0, startSide = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getStartPosition = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
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
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    
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
const InteractivePetals = ({ triggerCount = 1 }) => {
  if (typeof window === 'undefined') return null;

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

// Mouse trailing petal component
const MouseTrailingPetal = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  return (
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
  );
};

// Corner decorative petals
const CornerPetals = () => {
  return (
    <>
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
    </>
  );
};

// Main Cherry Blossom Animation Component
interface CherryBlossomAnimationProps {
  interactivePetals: number;
  mousePosition: { x: number; y: number };
  mounted: boolean;
}

export default function CherryBlossomAnimation({ 
  interactivePetals, 
  mousePosition, 
  mounted 
}: CherryBlossomAnimationProps) {
  // Generate cherry blossom petals
  const cherryBlossoms = Array.from({ length: 15 }, (_, i) => (
    <CherryBlossomPetal
      key={i}
      delay={i * 800}
      startSide={['left', 'right', 'top'][i % 3]}
    />
  ));

  if (!mounted) return null;

  return (
    <>
      {/* Falling cherry blossoms */}
      {cherryBlossoms}
      
      {/* Interactive petals */}
      <InteractivePetals triggerCount={interactivePetals} />
      
      {/* Mouse trailing petals */}
      <MouseTrailingPetal mousePosition={mousePosition} />
      
      {/* Corner decorative petals */}
      <CornerPetals />
    </>
  );
}
