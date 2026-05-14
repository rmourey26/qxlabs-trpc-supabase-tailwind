"use client"

import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-quantum/20 py-10 relative mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <QxLabsLogo size="md" variant="horizontal" animated={false} />

          {/* Built by credit */}
          <p className="text-sm text-muted-foreground text-center">
            Built by{" "}
            <Link
              href="https://linkedin.com/in/robertmoureyjr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum hover:text-quantum/80 transition-colors font-medium"
            >
              Robert Mourey Jr.
            </Link>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              aria-label="View source on GitHub"
              className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
            >
              <Github className="h-5 w-5 text-quantum" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/robertmoureyjr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              aria-label="Connect on LinkedIn"
              className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
            >
              <Linkedin className="h-5 w-5 text-quantum" />
            </motion.a>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-quantum/10 w-full pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <span className="text-xs text-muted-foreground flex items-center gap-1 flex-wrap justify-center md:justify-start">
              © {currentYear}{" "}
              <QuantumText className="text-xs">QxLabs Template</QuantumText>
              . Open source under the MIT License.
            </span>
            <div className="flex gap-5">
              <Link
                href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-quantum transition-colors"
              >
                GitHub Repository
              </Link>
              <Link
                href="https://linkedin.com/in/robertmoureyjr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-quantum transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
