"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo — MERN stack icon */}
        <div className="flex items-center gap-1.5" aria-label="MERN Stack Developer">
          {/* M - MongoDB green */}
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-green-500/15 text-green-400 border border-green-500/25">M</span>
          {/* E - Express gray */}
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-zinc-500/15 text-zinc-400 border border-zinc-500/25">E</span>
          {/* R - React blue */}
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/25">R</span>
          {/* N - Node green */}
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-lime-500/15 text-lime-400 border border-lime-500/25">N</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Projects", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/mahderhawaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mahderhawaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
        {/* Subtle radial background */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-xl">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs text-muted-foreground tracking-wide">
                Available for new projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Mahder Hawaz
            </motion.h1>

            {/* Role + location */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base md:text-lg text-muted-foreground mb-7 leading-relaxed"
            >
              Full Stack Developer crafting modern web apps with the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                MERN stack
              </span>
              . Based in Addis Ababa, Ethiopia.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToContact}
                className="text-muted-foreground hover:text-foreground"
              >
                Get in touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}