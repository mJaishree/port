"use client"
import { useEffect, useState } from "react"
import { Qwitcher_Grypen } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion"
import { HoverBorderGradient } from "@/components/ui/card-hover"
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { SparklesCore } from "@/components/ui/sparkles"

const qwitcher = Qwitcher_Grypen({
    weight: "400",
    subsets: ["latin"],
});

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form and show success message
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourusername", label: "Twitter" },
  ]

  const contactInfo = [
    { icon: <Mail size={20} />, text: "hello@example.com", label: "Email" },
    { icon: <Phone size={20} />, text: "+1 (123) 456-7890", label: "Phone" },
    { icon: <MapPin size={20} />, text: "Tokyo, Japan", label: "Location" },
  ]

  return (
    <div className="py-24 min-h-screen relative overflow-hidden">
      {/* Background sparkles */}
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
              Contact Me
              <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-lg"></span>
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HoverBorderGradient
              containerClassName="w-full h-full"
              className="p-6 h-full"
              gradientClassName="from-[#f472b6] to-[#a78bfa]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm transition-all duration-300 hover:shadow-glow disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </div>
                
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-green-500/20 border border-green-500/30 text-green-400 p-3 rounded-lg text-sm"
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </HoverBorderGradient>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Details */}
            <HoverBorderGradient
              containerClassName="w-full"
              className="p-6"
              gradientClassName="from-[#a7e9af] to-[#adcdd4]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Details</h2>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white/10 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{item.label}</p>
                      <p className="text-white">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </HoverBorderGradient>
            
            {/* Social Links */}
            <HoverBorderGradient
              containerClassName="w-full"
              className="p-6"
              gradientClassName="from-[#a78bfa] to-[#f472b6]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <div className="text-white">{social.icon}</div>
                      <span className="text-sm text-white/70">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
