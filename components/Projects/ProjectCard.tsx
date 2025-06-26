"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/card-hover";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronDown,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { getStatusBadge } from "./statusUtils";
import { Project } from "./projects";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onToggle: () => void;
}

export default function ProjectCard({ project, isActive, onToggle }: ProjectCardProps) {
  return (
    <HoverBorderGradient
      containerClassName="w-full"
      className="p-0 overflow-hidden"
      gradientClassName={project.color}
    >
      <div className="w-full">
        {/* Accordion Header - Responsive */}
        <motion.div
          className="p-3 sm:p-4 md:p-5 flex justify-between items-center cursor-pointer"
          onClick={onToggle}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate">
              {project.title}
            </h3>
            <div className="hidden xs:block">
              {getStatusBadge(project.status)}
            </div>
          </div>
          
          {/* Status badge for very small screens */}
          <div className="block xs:hidden mr-2">
            {getStatusBadge(project.status)}
          </div>
          
          <motion.div
            animate={{
              rotate: isActive ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="text-white" size={16} />
          </motion.div>
        </motion.div>

        {/* Accordion Content - Responsive */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-3 sm:p-4 md:p-5 pt-0 border-t border-white/10">
                {/* Project Icon and Key Features - Responsive Layout */}
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                  {/* Mobile: Centered Icon, Desktop: Left-aligned with content */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
                    {/* Icon Display - Responsive sizing */}
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                      >
                        <project.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>

                    {/* Project Details - Responsive text */}
                    <div className="flex-1 min-w-0">
                      {/* Project description - Responsive text size */}
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                        {project.description}
                      </p>

                      {/* Key Features - Responsive grid */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-white font-semibold text-xs sm:text-sm mb-2">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                          {project.keyFeatures.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-white/60 text-xs leading-relaxed"
                            >
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="break-words">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies and Links - Responsive layout */}
                <div className="flex flex-col gap-4">
                  {/* Technologies - Responsive spacing */}
                  <div className="w-full">
                    <div className="flex justify-center sm:justify-start">
                      <AnimatedTooltip items={project.technologies} />
                    </div>
                  </div>

                  {/* Links - Responsive button layout */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 sm:gap-4">
                    {project.status !== "confidential" && (
                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* GitHub Link */}
                        {project.links.github !== "#" && (
                          <Link
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            aria-label="View GitHub Repository"
                          >
                            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </Link>
                        )}
                        
                        {/* External Link */}
                        {project.links.live !== "#" && (
                          <Link
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                            aria-label="View Live Project"
                          >
                            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                          </Link>
                        )}
                        
                        {/* Main CTA Button - Responsive */}
                        {project.links.live !== "#" && (
                          <Link
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 text-xs sm:text-sm transition-all duration-300 hover:shadow-glow whitespace-nowrap"
                          >
                            <span className="hidden xs:inline">View Project</span>
                            <span className="xs:hidden">View</span>
                            <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Confidential Status - Responsive */}
                    {project.status === "confidential" && (
                      <div className="flex items-center gap-2 text-white/50">
                        <Lock size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm">
                          <span className="hidden sm:inline">Private Repository</span>
                          <span className="sm:hidden">Private</span>
                        </span>
                      </div>
                    )}

                    {/* In Progress Status - Responsive */}
                    {project.status === "in-progress" && (
                      <div className="flex items-center gap-2 text-white/70">
                        <span className="text-xs sm:text-sm text-center sm:text-left">
                          <span className="hidden sm:inline">🚧 Under Development</span>
                          <span className="sm:hidden">🚧 In Progress</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HoverBorderGradient>
  );
}
