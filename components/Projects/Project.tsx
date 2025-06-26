"use client";
import { useEffect, useState } from "react";
import { Qwitcher_Grypen } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import CategoryNavigation from "./CategoryNavigation";
import ProjectCard from "./ProjectCard";
import ProjectStats from "./ProjectStats";
import { projectData } from "./projects";

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("websites");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleProject = (projectId: number) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveProject(null); // Close any open project when switching categories
  };

  return (
    <div className="py-24 min-h-[60vh] relative overflow-hidden">
      {/* Background sparkles similar to About section */}
      <div className="absolute inset-0 z-0">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-12">
            <h1
              className={`${qwitcher.className} text-5xl md:text-7xl mb-4 text-white`}
            >
              Projects
              <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-lg"></span>
            </h1>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <CategoryNavigation
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Projects Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {projectData[activeCategory as keyof typeof projectData].map(
                (project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <ProjectCard
                      project={project}
                      isActive={activeProject === project.id}
                      onToggle={() => toggleProject(project.id)}
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Summary Stats */}
        <ProjectStats />
      </div>
    </div>
  );
}
