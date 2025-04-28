"use client";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Project";
import CardDemo from "@/components/cards-demo-3"
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconUser, IconCode, IconMail } from "@tabler/icons-react";

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
  return (
    <main className="gradient-bg">
      <Hero />
      <About/>
      <Projects />
      <CardDemo />
      <FloatingDock
        items={navigationItems}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-4 right-4 z-50"
      />
    </main>
  );
}
