"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end solutions with MongoDB, Express, React, and Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing interfaces with Figma",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Leveraging AI tools to enhance user experiences and productivity",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Deploying and scaling applications for optimal performance",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Passionate About Building
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Digital Experiences
            </span>
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
          >
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-purple-500 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pink-500 rounded-br-lg" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I am a passionate MERN stack developer with strong experience building scalable, 
              user-focused web applications. I specialize in MongoDB, Express.js, React, and Node.js, 
              creating full-stack solutions that deliver real value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond the core stack, I have hands-on experience with Clerk for authentication, 
              Brevo for email services, PostgreSQL with Prisma ORM, and modern AI tools. 
              My design skills in Figma allow me to bridge the gap between development and design, 
              ensuring every project looks as good as it functions.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
