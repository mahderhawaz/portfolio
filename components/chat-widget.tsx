"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Message = {
  id: number;
  type: "bot" | "user";
  content: string;
  options?: { label: string; action: string; icon?: React.ReactNode }[];
};

const initialMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    content: "Hey there! I'm Mahder's AI assistant. How can I help you today?",
    options: [
      { label: "Send Email", action: "email", icon: <Mail className="w-4 h-4" /> },
      { label: "View GitHub", action: "github", icon: <Github className="w-4 h-4" /> },
      { label: "View LinkedIn", action: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
      { label: "Learn More", action: "about" },
    ],
  },
];

const responses: Record<string, Message> = {
  email: {
    id: 0,
    type: "bot",
    content: "Great choice! I'll open your email client so you can reach Mahder directly at mahderhawaz16@gmail.com. Feel free to discuss projects, collaborations, or just say hi!",
    options: [
      { label: "Open Email", action: "open_email", icon: <Mail className="w-4 h-4" /> },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  github: {
    id: 0,
    type: "bot",
    content: "Mahder's GitHub profile showcases all his projects and contributions. You'll find the source code for Brana Art, HealthBridge, E-Learning Platform, and more!",
    options: [
      { label: "Open GitHub", action: "open_github", icon: <Github className="w-4 h-4" /> },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  linkedin: {
    id: 0,
    type: "bot",
    content: "Connect with Mahder on LinkedIn for professional networking, job opportunities, or to stay updated with his latest work and achievements!",
    options: [
      { label: "Open LinkedIn", action: "open_linkedin", icon: <Linkedin className="w-4 h-4" /> },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  about: {
    id: 0,
    type: "bot",
    content: "Mahder is a passionate MERN Stack Developer based in Addis Ababa, Ethiopia. He specializes in building scalable web applications with MongoDB, Express.js, React, and Node.js. He also has expertise in UI/UX design with Figma and AI tool integration.",
    options: [
      { label: "View Projects", action: "projects" },
      { label: "Contact Mahder", action: "contact_options" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  projects: {
    id: 0,
    type: "bot",
    content: "Here are Mahder's featured projects:\n\n🎨 Brana Art - Ethiopian art marketplace\n📚 E-Learning Platform - Online courses\n🏥 HealthBridge - Healthcare booking\n🤝 Warm Intro - AI investor outreach\n\nWould you like to see them live?",
    options: [
      { label: "View Live Projects", action: "scroll_projects" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  contact_options: {
    id: 0,
    type: "bot",
    content: "Here are the best ways to reach Mahder:",
    options: [
      { label: "Send Email", action: "email", icon: <Mail className="w-4 h-4" /> },
      { label: "View GitHub", action: "github", icon: <Github className="w-4 h-4" /> },
      { label: "View LinkedIn", action: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
    ],
  },
  menu: {
    id: 0,
    type: "bot",
    content: "How else can I help you?",
    options: [
      { label: "Send Email", action: "email", icon: <Mail className="w-4 h-4" /> },
      { label: "View GitHub", action: "github", icon: <Github className="w-4 h-4" /> },
      { label: "View LinkedIn", action: "linkedin", icon: <Linkedin className="w-4 h-4" /> },
      { label: "Learn More", action: "about" },
    ],
  },
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAction = (action: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: action.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Handle external actions
    if (action === "open_email") {
      window.location.href = "mailto:mahderhawaz16@gmail.com";
    } else if (action === "open_github") {
      window.open("https://github.com/mahderhawaz", "_blank");
    } else if (action === "open_linkedin") {
      window.open("https://www.linkedin.com/in/mahderhawaz", "_blank");
    } else if (action === "scroll_projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // Add bot response
    setTimeout(() => {
      const response = responses[action];
      if (response) {
        setMessages((prev) => [...prev, { ...response, id: Date.now() }]);
      }
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputValue,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simple keyword matching for custom messages
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let responseKey = "menu";

      if (lowerInput.includes("email") || lowerInput.includes("contact") || lowerInput.includes("reach")) {
        responseKey = "email";
      } else if (lowerInput.includes("github") || lowerInput.includes("code") || lowerInput.includes("source")) {
        responseKey = "github";
      } else if (lowerInput.includes("linkedin") || lowerInput.includes("connect") || lowerInput.includes("network")) {
        responseKey = "linkedin";
      } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
        responseKey = "projects";
      } else if (lowerInput.includes("about") || lowerInput.includes("who") || lowerInput.includes("mahder")) {
        responseKey = "about";
      }

      const response = responses[responseKey];
      setMessages((prev) => [...prev, { ...response, id: Date.now() }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow ${isOpen ? "hidden" : ""}`}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] rounded-2xl overflow-hidden bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">AI Assistant</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl rounded-br-sm"
                        : "bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm"
                    } p-3`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    {message.options && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.options.map((option) => (
                          <button
                            key={option.action}
                            onClick={() => handleAction(option.action)}
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          >
                            {option.icon}
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <Button
                  size="icon"
                  onClick={handleSendMessage}
                  className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
