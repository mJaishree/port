"use client"
import { useEffect, useState } from "react"
import { Qwitcher_Grypen } from "next/font/google";
import { motion } from "framer-motion"
import { HoverBorderGradient } from "@/components/ui/card-hover"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { GhibliBackground } from "@/components/ui/ghibli-background"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
const qwitcher = Qwitcher_Grypen({
    weight: "400",
    subsets: ["latin"],
  });

export default function Projects() {
  const [mounted, setMounted] = useState(false)
 
  useEffect(() => {
    setMounted(true)
  }, [])

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
    <div className="py-24 min-h-screen">
      <div className="container mx-auto px-4">
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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="w-full">
                <CardBody className="w-full h-full">
                  <HoverBorderGradient
                    containerClassName="w-full h-full"
                    className="p-0 overflow-hidden"
                    gradientClassName={project.color}
                  >
                    <div className="h-full flex flex-col">
                      {/* Project image */}
                      <div className="relative h-48 overflow-hidden">
                        <CardItem translateZ={20}>
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </CardItem>
                      </div>

                      {/* Project content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <CardItem translateZ={30}>
                          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        </CardItem>
                        <CardItem translateZ={20}>
                          <p className="text-white/70 text-sm mb-4">{project.description}</p>
                        </CardItem>

                        {/* Technologies */}
                        <CardItem translateZ={40} className="mt-auto">
                          <div className="mb-4">
                            <AnimatedTooltip items={project.technologies} />
                          </div>
                        </CardItem>

                        {/* Links */}
                        <CardItem translateZ={50}>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-3">
                              <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                              >
                                <Github size={18} />
                              </Link>
                              <Link
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                              >
                                <ExternalLink size={18} />
                              </Link>
                            </div>
                            <Link
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/70 hover:text-white flex items-center gap-1 text-sm transition-colors"
                            >
                              View Project <ArrowRight size={14} />
                            </Link>
                          </div>
                        </CardItem>
                      </div>
                    </div>
                  </HoverBorderGradient>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
