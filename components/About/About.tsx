"use client";
import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 ">
      {/* Background with sparkles matching Hero */}
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
      
      {/* Keeping the original Ghibli floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-white rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-50 animate-float-slow"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section header with Ghibli-inspired styling but updated colors */}
        <div className="text-center mb-12">
          <h1 className={`${qwitcher.className} text-5xl md:text-7xl mb-4 text-white`}>
            About Me
            <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-lg"></span>
          </h1>
        </div>
        
        {/* Main content - keeping the layout but updating colors */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left column - Keeping the Ghibli-inspired portrait frame but with updated colors */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              {/* Decorative elements around the portrait */}
              <div className="absolute -inset-4 bg-[#adcdd4]/10 rounded-full -z-10 shadow-inner"></div>
              <div className="absolute -inset-2 bg-[#adcdd4]/20 rounded-full -z-10"></div>
              
              {/* Portrait container with updated border color */}
              <div className="absolute inset-0 border-4 border-[#adcdd4]/50 rounded-full overflow-hidden">
                {/* Image container */}
                <div className="relative w-full h-full">
                  <Image 
                    src="/profile/profile.gif" 
                    alt="Jaishree's profile picture"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                    priority
                  />
                  
                  {/* Updated overlay colors */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#adcdd4]/20 to-pink-500/20 rounded-full"></div>
                </div>
                
                {/* Small Ghibli-inspired decorative elements with updated colors */}
                <div className="absolute top-2 right-2 w-6 h-6">
                  <div className="w-full h-full bg-[#adcdd4] rounded-full opacity-70"></div>
                </div>
                <div className="absolute bottom-4 left-4 w-4 h-4">
                  <div className="w-full h-full bg-pink-500 rounded-full opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Text content with updated colors */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-[#adcdd4]/20 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Hi, I'm Jaishree
            </h2>
            
            <div className="space-y-4 text-white/80">
              <p>
                I'm a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites. With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
              </p>
              
              <p>
                My journey in web development began 5 years ago, and since then I've worked on a variety of projects ranging from personal portfolios to complex e-commerce platforms. I believe in creating websites that not only look great but also provide exceptional user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new design trends, experimenting with digital art, or enjoying a good book with a cup of coffee.
              </p>
            </div>
          </div>
        </div>
        
        {/* Keeping the Ghibli-inspired decorative elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20">
          <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')"}}></div>
        </div>
        <div className="absolute top-20 right-10 w-24 h-24">
          <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('/profile/leaf.png')"}}></div>
        </div>
      </div>
    </section>
  );
}
