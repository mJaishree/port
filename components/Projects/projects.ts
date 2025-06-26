import { Globe, Code, Baby, Lock, Zap, Brain } from "lucide-react";

export interface Technology {
  id: number;
  name: string;
  color: string;
}

export interface ProjectLinks {
  live: string;
  github: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
  keyFeatures: string[];
  technologies: Technology[];
  links: ProjectLinks;
  status: "live" | "in-progress" | "confidential" | "completed";
  color: string;
}

export interface ProjectData {
  websites: Project[];
  applications: Project[];
  ai: Project[];
}

export const projectData: ProjectData = {
  websites: [
    {
      id: 1,
      title: "Pentad Academy",
      description:
        "A responsive platform based on 8 intelligences where parents can explore personalized content and shop products for their kids with smooth UI and secure payments.",
      icon: Globe,
      keyFeatures: [
        "8 Intelligence-Based Personalization",
        "Responsive Design",
        "Smooth Animations",
        "Product Purchase with Razorpay",
        "Rest API Integration",
        "AWS Cloud Integration",
      ],
      technologies: [
        { id: 1, name: "Next.js", color: "#ffffff" },
        { id: 2, name: "TypeScript", color: "#3178c6" },
        { id: 3, name: "Tailwind CSS", color: "#38bdf8" },
        { id: 4, name: "Framer Motion", color: "#ff00e5" },
        { id: 5, name: "AWS", color: "#ff9900" },
        { id: 6, name: "Razorpay", color: "#0d254c" },
      ],
      links: {
        live: "https://www.pentadacademy.com/",
        github: "https://github.com/username/kids-intelligence-platform",
      },
      status: "live",
      color: "from-[#fbc2eb] to-[#a6c1ee]",
    },
    {
      id: 2,
      title: "Vedanta Nico",
      description:
        "A responsive website for showcasing Vedanta's chemical products with a clean UI, interactive animations, and smooth performance.",
      icon: Code,
      keyFeatures: [
        "Product Showcase",
        "Interactive Animations",
        "Responsive Design",
        "Firebase Hosting",
        "Modern UI/UX",
      ],
      technologies: [
        { id: 1, name: "Next.js", color: "#ffffff" },
        { id: 2, name: "React", color: "#61dafb" },
        { id: 3, name: "TypeScript", color: "#3178c6" },
        { id: 4, name: "Tailwind CSS", color: "#38bdf8" },
        { id: 5, name: "Framer Motion", color: "#ff00e5" },
        { id: 6, name: "Firebase", color: "#ffcb2b" },
      ],
      links: {
        live: "https://vedantanico.in/",
        github: "https://github.com/username/vedanta-site",
      },
      status: "live",
      color: "from-[#c2e9fb] to-[#a1c4fd]",
    },
  ],
  applications: [
    {
      id: 3,
      title: "Learning Platform - Parent & Admin App",
      description:
        "Main app for parents to assign/review activities and admin to manage performance, schools, and test links.",
      icon: Baby,
      keyFeatures: [
        "Parent & Admin Modules",
        "Activity-Based Learning",
        "School & Test Management",
        "AWS Integration",
        "Scalable Architecture",
      ],
      technologies: [
        { id: 1, name: "Next.js", color: "#ffffff" },
        { id: 2, name: "TypeScript", color: "#3178c6" },
        { id: 3, name: "Tailwind CSS", color: "#38bdf8" },
        { id: 4, name: "AWS", color: "#ff9900" },
        { id: 5, name: "Tailwind CSS", color: "#38bdf8" },
        { id: 6, name: "Framer Motion", color: "#ff00e5" },
      ],
      links: {
        live: "#",
        github: "#",
      },
      status: "in-progress",
      color: "from-[#fcd34d] to-[#a78bfa]",
    },
    {
      id: 4,
      title: "Payment Integration System",
      description:
        "A secure payment processing system with advanced security features and compliance standards",
      icon: Lock,
      keyFeatures: [
        "Secure Transactions",
        "PCI Compliance",
        "Multi-Gateway Support",
        "Fraud Detection",
      ],
      technologies: [
        { id: 1, name: "Next.js", color: "#61dafb" },
        { id: 2, name: "Node.js", color: "#339933" },
        { id: 3, name: "REST API", color: "#635bff" },
        { id: 4, name: "AWS", color: "#336791" },
      ],
      links: {
        live: "#",
        github: "#",
      },
      status: "confidential",
      color: "from-[#fcd34d] to-[#a78bfa]",
    },
  ],
  ai: [
    {
      id: 5,
      title: "AI Integration with FastAPI",
      description:
        "An AI-powered application using FastAPI backend with OpenAI integration for intelligent responses",
      icon: Zap,
      keyFeatures: [
        "OpenAI Integration",
        "RESTful API",
        "Real-time Processing",
        "Data Persistence",
      ],
      technologies: [
        { id: 1, name: "FastAPI", color: "#009688" },
        { id: 2, name: "Python", color: "#3776ab" },
        { id: 3, name: "OpenAI API", color: "#412991" },
        { id: 4, name: "SQLite", color: "#003b57" },
      ],
      links: {
        live: "#",
        github: "https://github.com/username/ai-fastapi-project",
      },
      status: "completed",
      color: "from-[#adcdd4] to-[#f472b6]",
    },
    {
      id: 6,
      title: "Ollama AI Project",
      description:
        "Local AI implementation using Ollama for privacy-focused AI interactions and learning",
      icon: Brain,
      keyFeatures: [
        "Local AI Processing",
        "Privacy-Focused",
        "Custom Models",
        "Interactive Interface",
      ],
      technologies: [
        { id: 1, name: "Ollama", color: "#ff6b6b" },
        { id: 2, name: "Python", color: "#3776ab" },
        { id: 3, name: "Streamlit", color: "#ff4b4b" },
        { id: 4, name: "LangChain", color: "#1c3d5a" },
      ],
      links: {
        live: "#",
        github: "https://github.com/username/ollama-project",
      },
      status: "completed",
      color: "from-[#a7e9af] to-[#adcdd4]",
    },
  ],
};
