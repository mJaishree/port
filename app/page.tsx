"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Loader from "@/components/Loader/Loader";
import Projects from "@/components/Projects/Project";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconUser, IconCode, IconMail } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const navigationItems = [
  {
    title: "Home",
    icon: <IconHome className="h-4 w-4" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <IconUser className="h-4 w-4" />,
    href: "#about",
  },
  {
    title: "Projects",
    icon: <IconCode className="h-4 w-4" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-4 w-4" />,
    href: "#contact",
  },
];

export default function Home() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // State for active section and loading
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  // Custom scroll function with loading animation
  const scrollToSection = (ref, sectionId) => {
    setIsLoading(true);
    
    // Simulate loading time
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsLoading(false);
    }, 1500); // Loading time in milliseconds
  };

  // Updated navigation items with onClick handlers
  const enhancedNavItems = navigationItems.map((item) => {
    let clickHandler;
    let sectionId = item.href.substring(1); // Remove the # from href

    switch (item.href) {
      case "#home":
        clickHandler = () => scrollToSection(homeRef, sectionId);
        break;
      case "#about":
        clickHandler = () => scrollToSection(aboutRef, sectionId);
        break;
      case "#projects":
        clickHandler = () => scrollToSection(projectsRef, sectionId);
        break;
      case "#contact":
        clickHandler = () => scrollToSection(contactRef, sectionId);
        break;
      default:
        clickHandler = () => {};
    }

    return {
      ...item,
      onClick: clickHandler,
      isActive: activeSection === sectionId,
    };
  });

  return (
    <main className="gradient-bg">
      <AnimatePresence>
        <Loader isLoading={isLoading} />
      </AnimatePresence>

      <motion.section
        id="home"
        ref={homeRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <About />
      </motion.section>

      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <Contact />
      </motion.section>

      <FloatingDock
        items={enhancedNavItems}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-40"
        mobileClassName="fixed bottom-4 right-4 z-40"
      />
    </main>
  );
}
