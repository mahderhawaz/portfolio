"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mahderhawaz16@gmail.com",
    label: "mahderhawaz16@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mahderhawaz",
    label: "@mahderhawaz",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mahderhawaz",
    label: "Mahder Hawaz",
    color: "from-blue-500 to-blue-700",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-pink-400 uppercase tracking-wider mb-4">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Let&apos;s Work
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Together
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* AI Assistant Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <div className="absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium text-white flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              AI Assistant
            </div>
            <p className="text-center text-muted-foreground mb-4">
              Click the floating button in the bottom right corner to chat with my AI assistant. 
              It can help you send an email, view my profiles, or learn more about my work!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-purple-500/30 transition-all duration-300 text-center">
                  <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold mb-1">{link.name}</h4>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>Addis Ababa, Ethiopia</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
