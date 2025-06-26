"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 8;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 120);

      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="relative w-full max-w-md flex flex-col items-center">
        <motion.div
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading Experience
        </motion.div>
        
        {/* 3D Cube Animation */}
        <motion.div
          className="w-24 h-24 mb-12 perspective-500"
          animate={{ 
            rotateX: [0, 360], 
            rotateY: [0, 360] 
          }}
          transition={{ 
            duration: 3,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <div className="w-full h-full relative transform-style-3d">
            {/* Front face */}
            <div className="absolute w-full h-full bg-gradient-to-tr from-blue-500 to-purple-500 transform translate-z-12 opacity-80"></div>
            {/* Back face */}
            <div className="absolute w-full h-full bg-gradient-to-bl from-blue-500 to-purple-500 transform -translate-z-12 rotate-y-180 opacity-80"></div>
            {/* Left face */}
            <div className="absolute w-full h-full bg-gradient-to-r from-indigo-500 to-blue-500 transform -translate-x-12 rotate-y-90 opacity-80"></div>
            {/* Right face */}
            <div className="absolute w-full h-full bg-gradient-to-l from-indigo-500 to-blue-500 transform translate-x-12 rotate-y-90 opacity-80"></div>
            {/* Top face */}
            <div className="absolute w-full h-full bg-gradient-to-b from-violet-500 to-indigo-500 transform -translate-y-12 rotate-x-90 opacity-80"></div>
            {/* Bottom face */}
            <div className="absolute w-full h-full bg-gradient-to-t from-violet-500 to-indigo-500 transform translate-y-12 rotate-x-90 opacity-80"></div>
          </div>
        </motion.div>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        
        <motion.div 
          className="mt-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
