"use client"

import { motion } from "framer-motion"

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "PostgreSQL", "Authentication"],
  "AI Tools": ["ChatGPT Integration", "AI APIs", "Prompt Engineering", "LLM Integration"],
  Design: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Responsive Design"],
}

export function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-sm mb-2 tracking-wide uppercase">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-semibold text-sm mb-4 tracking-wide">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li 
                    key={skill}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
