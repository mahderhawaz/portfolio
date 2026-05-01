"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "MongoDB", category: "Backend", color: "from-green-500 to-green-600" },
  { name: "Express.js", category: "Backend", color: "from-gray-500 to-gray-600" },
  { name: "React", category: "Frontend", color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", category: "Backend", color: "from-green-600 to-green-700" },
  { name: "Next.js", category: "Frontend", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", category: "Language", color: "from-blue-500 to-blue-600" },
  { name: "PostgreSQL", category: "Database", color: "from-blue-600 to-blue-700" },
  { name: "Prisma", category: "ORM", color: "from-indigo-500 to-purple-500" },
  { name: "Tailwind CSS", category: "Styling", color: "from-cyan-400 to-cyan-600" },
  { name: "Figma", category: "Design", color: "from-pink-500 to-purple-500" },
  { name: "Clerk", category: "Auth", color: "from-purple-500 to-indigo-500" },
  { name: "Brevo", category: "Email", color: "from-blue-500 to-indigo-500" },
  { name: "Git", category: "Version Control", color: "from-orange-500 to-red-500" },
  { name: "GitHub", category: "Platform", color: "from-gray-600 to-gray-800" },
  { name: "AI Tools", category: "AI", color: "from-purple-400 to-pink-500" },
  { name: "REST APIs", category: "Architecture", color: "from-green-400 to-emerald-500" },
];

export function TechStack() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
            Tech Stack
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Technologies I
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Work With
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              <div className="relative px-5 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border group-hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`} />
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1 block">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
