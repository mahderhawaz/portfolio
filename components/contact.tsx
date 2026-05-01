"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/mahderhawaz",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mahder-hawaz",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <p className="text-muted-foreground text-sm mb-2 tracking-wide uppercase">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Contact
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          If you would like to discuss a project or just say hi, I&apos;m always 
          open to new opportunities and collaborations. Feel free to reach out 
          through any of the channels below.
        </p>
        
        <div className="space-y-8">
          {socialLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-300"
              >
                <link.icon className="w-5 h-5" />
                <span className="text-lg">{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground text-sm">
          Designed and built by Mahder Hawaz
        </p>
      </motion.footer>
    </section>
  )
}
