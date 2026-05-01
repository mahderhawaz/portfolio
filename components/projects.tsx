"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: "brana-art",
    name: "Brana Art",
    description: "A commercial marketplace for Ethiopian artists to showcase and sell their artwork. Features secure payments, artist profiles, and artwork management.",
    longDescription: "Brana Art is a full-featured e-commerce platform designed specifically for Ethiopian artists. It provides a seamless experience for artists to upload, manage, and sell their artworks while giving buyers a curated marketplace to discover authentic Ethiopian art.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://brana-artworks.vercel.app/",
    githubUrl: "https://github.com/mahderhawaz",
    featured: true,
    category: "MERN",
    emoji: "🎨",
  },
  {
    id: "e-learning",
    name: "E-Learning Platform",
    description: "An educational platform for Directed Development Bootcamp featuring courses, progress tracking, and interactive learning modules.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    liveUrl: "https://e-learning-app-seven.vercel.app/",
    githubUrl: "https://github.com/mahderhawaz",
    featured: false,
    category: "MERN",
    emoji: "📚",
  },
  {
    id: "healthbridge",
    name: "HealthBridge",
    description: "Healthcare booking platform that bridges the gap between patients and hospitals with online doctor appointments and health records.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Real-time Chat"],
    liveUrl: "https://health-bridge-app-frontendapp.vercel.app/",
    githubUrl: "https://github.com/mahderhawaz",
    featured: false,
    category: "MERN",
    emoji: "🏥",
  },
  {
    id: "warm-intro",
    name: "Warm Intro",
    description: "AI-powered tool helping startup founders craft compelling introductions when reaching out to potential investors.",
    techStack: ["Next.js", "AI Integration", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://warmly-intro-assistant.vercel.app/",
    githubUrl: "https://github.com/mahderhawaz",
    featured: false,
    category: "AI",
    emoji: "🤝",
  },
];

const categories = ["All", "MERN", "AI", "UI"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProject = projects.find(p => p.featured);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
            Portfolio
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Featured
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my expertise in full-stack development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-muted-foreground hover:text-foreground border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-background/90 backdrop-blur-xl rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium text-yellow-500">Featured Project</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {featuredProject.name}
                    </h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {featuredProject.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-1.5 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      >
                        <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="border-purple-500/50 hover:bg-purple-500/10">
                        <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-white/10 group-hover:border-purple-500/30 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-7xl mb-4">{featuredProject.emoji}</div>
                        <span className="text-muted-foreground">Brana Art Marketplace</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => activeCategory !== "All" || !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="relative h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                  {/* Project Preview */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30 mb-6 border border-white/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {project.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-muted-foreground border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-muted-foreground border border-white/10">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-pink-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
