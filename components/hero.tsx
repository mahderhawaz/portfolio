"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <p className="text-muted-foreground text-sm md:text-base mb-4 tracking-wide">
          Hello, I&apos;m
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Mahder Hawaz
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-8">
          MERN Fullstack Developer
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">
          I build accessible, pixel-perfect digital experiences for the web. 
          Specializing in frontend and backend development, AI tools integration, 
          and Figma design. Creating impactful applications that bridge technology 
          and user needs.
        </p>
        
        <div className="flex items-center gap-6">
          <Link 
            href="https://github.com/mahderhawaz" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </Link>
          
          <Link 
            href="https://www.linkedin.com/in/mahder-hawaz" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24"
      >
        <Link 
          href="#projects"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          <span className="text-sm">View Projects</span>
        </Link>
      </motion.div>
    </section>
  )
}
