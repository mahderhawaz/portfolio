"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Brana Art",
    description: "A commercial center platform for Ethiopian art workers to showcase, sell, and upload their artwork. Built to support local artists and connect them with global audiences.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveUrl: "https://brana-artworks.vercel.app/",
    features: [
      "Artist profile management",
      "Artwork upload and gallery",
      "E-commerce functionality",
      "Search and filtering"
    ]
  },
  {
    title: "E-Learning Platform",
    description: "A comprehensive e-learning website for Directed Development Bootcamp featuring structured courses, progress tracking, and interactive learning experiences.",
    technologies: ["Next.js", "MongoDB", "Node.js", "Express.js", "Authentication"],
    liveUrl: "https://e-learning-app-seven.vercel.app/",
    features: [
      "Course management system",
      "Progress tracking",
      "User authentication",
      "Responsive design"
    ]
  },
  {
    title: "HealthBridge",
    description: "A healthcare platform designed to bridge the gap between patients and hospitals through online doctor booking, appointment management, and healthcare accessibility.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    liveUrl: "https://health-bridge-app-frontendapp.vercel.app/",
    features: [
      "Online doctor booking",
      "Appointment scheduling",
      "Patient-doctor communication",
      "Healthcare accessibility"
    ]
  },
  {
    title: "Warm Intro",
    description: "An AI-powered tool to help startup founders craft warmer, more personalized introductions when reaching out to investors, improving their chances of engagement.",
    technologies: ["React", "AI Integration", "Node.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://warmly-intro-assistant.vercel.app/",
    features: [
      "AI-powered intro generation",
      "Personalization suggestions",
      "Template management",
      "Investor outreach optimization"
    ]
  },
]

export function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-sm mb-2 tracking-wide uppercase">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Projects
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-muted-foreground text-sm font-mono">
                      0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-300 text-sm"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-foreground mb-3">Key Features:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li 
                          key={feature}
                          className="text-muted-foreground text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
