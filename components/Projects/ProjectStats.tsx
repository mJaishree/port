"use client";
import { motion } from "framer-motion";
import { projectData } from "./projects";


export default function ProjectStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-16 text-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl font-bold text-white mb-1">
            {projectData.websites.length}
          </div>
          <div className="text-white/70 text-sm">Live Websites</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl font-bold text-white mb-1">
            {projectData.applications.length}
          </div>
          <div className="text-white/70 text-sm">Main Applications</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl font-bold text-white mb-1">
            {projectData.ai.length}
          </div>
          <div className="text-white/70 text-sm">AI Projects</div>
        </div>
      </div>
    </motion.div>
  );
}
