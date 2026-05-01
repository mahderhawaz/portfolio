"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Rocket, Server, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "End-to-end development with the MERN stack, from database design to responsive frontends.",
  },
  {
    icon: Server,
    title: "API Development",
    description: "RESTful API design and implementation with Node.js and Express, including authentication and security.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Modern, responsive UIs with React/Next.js, featuring smooth animations and optimal performance.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture with MongoDB and PostgreSQL, including Prisma ORM integration.",
  },
  {
    icon: Palette,
    title: "UI/UX Collaboration",
    description: "Bridging design and development with Figma expertise, ensuring pixel-perfect implementations.",
  },
  {
    icon: Rocket,
    title: "Deployment & Scaling",
    description: "Cloud deployment on Vercel, AWS, and other platforms with CI/CD pipelines and monitoring.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
            What I Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Services &
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Expertise
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              
              <div className="relative h-full p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-purple-400" />
                </div>
                
                <h4 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
