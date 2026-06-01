"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = ["About", "Skills", "Projects", "Services", "Contact"];

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5 shrink-0" aria-label="MERN Stack Developer">
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-green-500/15 text-green-400 border border-green-500/25">M</span>
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-zinc-500/15 text-zinc-400 border border-zinc-500/25">E</span>
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/25">R</span>
          <span className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-bold bg-lime-500/15 text-lime-400 border border-lime-500/25">N</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-1 shrink-0">
          <a href="https://github.com/mahderhawaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/mahderhawaz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="/image.png" target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors">
                  Resume
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

      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-14">
        {/* Background glow — left-biased to follow text */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-center gap-8">

            {/* ── LEFT: Text content ── */}
            <div className="flex flex-col items-start max-w-lg">

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
                className="text-4xl md:text-5xl font-bold mb-3 leading-tight tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Mahder Hawaz
              </motion.h1>

              {/* Role tag */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-xs font-medium tracking-widest uppercase text-muted-foreground/50 mb-5"
              >
                Full Stack Developer · MERN Stack · Addis Ababa
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-base text-muted-foreground mb-8 leading-relaxed"
              >
                I build fast, scalable web applications from clean UIs to robust
                APIs using{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  MongoDB, Express, React & Node
                </span>
                .
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.26 }}
                className="flex items-center gap-3"
              >
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/20 group px-7"
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

            {/* ── RIGHT: Profile image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex shrink-0 items-center justify-center"
            >
              {/* Blob shape container */}
              <div className="relative w-[340px] h-[380px]">
                {/* Decorative ring */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
                  }}
                />
                {/* Subtle animated ring */}
                <div
                  className="absolute inset-[-6px] border border-purple-500/10 animate-pulse"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
                  }}
                />
                {/* Image clipped to blob shape */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: "60% 40% 55% 45% / 45% 55% 45% 55%",
                  }}
                >
                  {/* Replace /images/mahder.jpg with your actual image path */}
                  <img
                    src="/image2.png"
                    alt="Mahder Hawaz"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Fallback placeholder shown when image is missing */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/60 to-pink-900/40 text-muted-foreground/40 text-xs tracking-widest uppercase [img:not([src])~&]:flex hidden">
                    Your Photo
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}