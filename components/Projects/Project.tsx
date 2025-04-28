"use client"
import { useEffect, useState } from "react"
import { Qwitcher_Grypen } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion"
import { HoverBorderGradient } from "@/components/ui/card-hover"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { ExternalLink, Github, ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { SparklesCore } from "@/components/ui/sparkles"

const qwitcher = Qwitcher_Grypen({
    weight: "400",
    subsets: ["latin"],
});

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
 
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleProject = (projectId: number) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "Dreamscape Gallery",
      description: "An immersive digital art gallery inspired by Ghibli's magical worlds",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        { id: 1, name: "React", color: "#61dafb" },
        { id: 2, name: "Three.js", color: "#049ef4" },
        { id: 3, name: "GSAP", color: "#88ce02" },
      ],
      links: {
        live: "https://example.com/project1",
        github: "https://github.com/username/project1",
      },
      color: "from-[#a7e9af] to-[#adcdd4]",
    },
    {
      id: 2,
      title: "Spirit Journeys",
      description: "A storytelling platform where users create and share their own magical adventures",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        { id: 1, name: "Next.js", color: "#ffffff" },
        { id: 2, name: "Tailwind", color: "#38bdf8" },
        { id: 3, name: "Framer Motion", color: "#ff00e5" },
      ],
      links: {
        live: "https://example.com/project2",
        github: "https://github.com/username/project2",
      },
      color: "from-[#f472b6] to-[#fcd34d]",
    },
    {
      id: 3,
      title: "Forest Whispers",
      description: "An ambient sound experience featuring nature-inspired audio landscapes",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        { id: 1, name: "Web Audio API", color: "#f43f5e" },
        { id: 2, name: "Vue.js", color: "#42b883" },
        { id: 3, name: "Canvas", color: "#ff9900" },
      ],
      links: {
        live: "https://example.com/project3",
        github: "https://github.com/username/project3",
      },
      color: "from-[#a78bfa] to-[#a7e9af]",
    },
    {
      id: 4,
      title: "Sky Castle",
      description: "A floating island adventure game with hand-drawn animations",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        { id: 1, name: "Phaser", color: "#8e44ad" },
        { id: 2, name: "TypeScript", color: "#3178c6" },
        { id: 3, name: "Howler.js", color: "#ff6b6b" },
      ],
      links: {
        live: "https://example.com/project4",
        github: "https://github.com/username/project4",
      },
      color: "from-[#fcd34d] to-[#a78bfa]",
    },
    {
      id: 5,
      title: "Moonlight Tales",
      description: "An interactive storybook with parallax illustrations and ambient soundscapes",
      image: "/placeholder.svg?height=400&width=600",
      technologies: [
        { id: 1, name: "React", color: "#61dafb" },
        { id: 2, name: "GSAP", color: "#88ce02" },
        { id: 3, name: "Tone.js", color: "#f97316" },
      ],
      links: {
        live: "https://example.com/project5",
        github: "https://github.com/username/project5",
      },
      color: "from-[#adcdd4] to-[#f472b6]",
    },
  ]

  return (
    <div className="py-24 min-h-screen relative overflow-hidden">
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
      
      {/* Ghibli floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-16 h-16 bg-white rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-60 right-40 w-10 h-10 bg-white rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-white rounded-full opacity-50 animate-float-slow"></div>
      </div>
      
      {/* Ghibli-inspired decorative leaves */}
      <div className="absolute bottom-10 left-10 w-20 h-20">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')"}}></div>
      </div>
      <div className="absolute top-20 right-10 w-24 h-24">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')"}}></div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-40 right-20 w-16 h-16">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')", transform: "rotate(45deg)"}}></div>
      </div>
      <div className="absolute top-60 left-20 w-14 h-14">
        <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')", transform: "rotate(-30deg)"}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with simple animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-12">
            <h1 className={`${qwitcher.className} text-5xl md:text-7xl mb-4 text-white`}>
              Projects
              <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-lg"></span>
            </h1>
          </div>
        </motion.div>

        {/* Projects Accordion */}
        <div className="max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <HoverBorderGradient
                containerClassName="w-full"
                className="p-0 overflow-hidden"
                gradientClassName={project.color}
              >
                <div className="w-full">
                  {/* Accordion Header */}
                  <motion.div 
                    className="p-5 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleProject(project.id)}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <motion.div
                      animate={{ rotate: activeProject === project.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="text-white" size={20} />
                    </motion.div>
                  </motion.div>
                  
                  {/* Accordion Content */}
                  <AnimatePresence>
                    {activeProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-white/10">
                          {/* Project image */}
                          <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          
                          {/* Project description */}
                          <p className="text-white/70 text-sm mb-6">{project.description}</p>
                          
                          {/* Technologies and Links */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="mb-4 sm:mb-0">
                              <AnimatedTooltip items={project.technologies} />
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                              >
                                <Github size={18} />
                              </Link>
                              <Link
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                              >
                                <ExternalLink size={18} />
                              </Link>
                              <Link
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-4 py-2 rounded-full flex items-center gap-1 text-sm transition-all duration-300 hover:shadow-glow"
                              >
                                View Project <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
