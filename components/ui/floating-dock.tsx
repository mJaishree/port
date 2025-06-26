"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="h-12 w-12 rounded-full bg-white/90 dark:bg-neutral-800/90 flex items-center justify-center backdrop-blur-sm shadow-lg border border-pink-200 dark:border-pink-800"
                  onClick={() => setShowHint(false)} // Hide hint when menu item is clicked
                >
                  <div className="h-5 w-5 text-pink-500">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Ghibli-style hint with aesthetic cursive text and arrow */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute -top-20 -left-20 pointer-events-none"
          >
            {/* Aesthetic cursive text - NO BOX BACKGROUND */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <span 
                className="text-sm font-light text-white dark:text-pink-400 whitespace-nowrap"
                style={{ 
                  fontFamily: 'Dancing Script, Brush Script MT, cursive',
                  textShadow: '0 0 10px rgba(236, 72, 153, 0.3)',
                  letterSpacing: '0.5px'
                }}
              >
                🌸 Discover my world
              </span>
              
              {/* Subtle glow effect behind text */}
              <motion.div
                className="absolute inset-0 blur-sm opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                 <span 
                  className="text-sm font-light text-pink-400 whitespace-nowrap"
                  style={{ 
                    fontFamily: 'Dancing Script, Brush Script MT, cursive',
                    letterSpacing: '0.5px'
                  }}
                >
                  🌸 Discover my world
                </span>
              </motion.div>
            </motion.div>
            
            {/* Slightly bigger arrow coming from BELOW the text, pointing down */}
            <motion.svg
              width="40"
              height="35"
              viewBox="0 0 40 35"
              className="absolute top-full left-1/2 -translate-x-1/2 text-pink-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {/* Curved arrow pointing downward */}
              <motion.path
                d="M20 3 Q 16 12, 20 22 Q 24 28, 20 32"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              />
              
              {/* Arrow head pointing down */}
              <motion.path
                d="M15 27 L20 32 L25 27"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              />
              
              {/* Sparkles around the arrow */}
              <motion.circle
                cx="22"
                cy="15"
                r="1.2"
                fill="currentColor"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.5,
                }}
              />
              
              {/* Additional sparkle */}
              <motion.circle
                cx="18"
                cy="8"
                r="0.8"
                fill="currentColor"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 3,
                }}
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Profile button with image - Clean without overlay */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-16 w-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-pink-300 dark:ring-pink-700"
      >
        {/* Profile Image - Clean without overlay */}
        <div className="relative h-full w-full">
          <Image
            src="/profile/profile.png"
            alt="Profile"
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        
        {/* Pulse animation when closed */}
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full ring-2 ring-pink-400"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        {/* Floating particles - Ghibli magic effect */}
        <AnimatePresence>
          {!open && (
            <>
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 bg-pink-400 rounded-full"
                  initial={{ 
                    x: 32, 
                    y: 32, 
                    opacity: 0 
                  }}
                  animate={{
                    x: [32, 32 + (Math.random() - 0.5) * 30],
                    y: [32, 32 - Math.random() * 20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Alternative hint text below button */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ delay: 2 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <span className="text-xs text-pink-500 dark:text-pink-400 font-medium whitespace-nowrap">
              Tap to explore
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};





// Keep the desktop component unchanged
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white hover:bg-pink-500/20 flex items-center justify-center relative transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-white dark:bg-neutral-800 border dark:border-neutral-700 text-pink-600 dark:text-pink-400 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs font-medium"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
