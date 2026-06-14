"use client"

import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { HexContainer } from "@/components/ui-extensions/hex-container"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-quantum/20 py-12 relative mt-12">
      <div className="container mx-auto px-4">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <QxLabsLogo size="md" variant="horizontal" animated={false} />
              <p className="mt-4 text-sm text-muted-foreground">
                TACON-Sui: Revolutionizing Sui blockchain networking with topology-aware consensus and intelligent
                routing for unprecedented performance and resilience.
              </p>
            </div>
          </div>

          {/* Technical Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">
              <QuantumText>Technical</QuantumText>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/whitepaper"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Technical Paper <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  API Documentation <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  GitHub Repository <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Integration Guide <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">
              <QuantumText>Community</QuantumText>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Partner With Us <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Discord Community <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Developer Forum <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-quantum transition-colors flex items-center gap-1"
                >
                  Research Blog <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">
              <QuantumText>Stay Updated</QuantumText>
            </h3>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-background/50 border border-quantum/30 focus:border-quantum rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-quantum"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-quantum text-quantum-foreground p-1 rounded-md hover:bg-quantum/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get updates on TACON-Sui development, research publications, and early access opportunities.
              </p>
            </form>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <motion.a
            href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
          >
            <Github className="h-5 w-5 text-quantum" />
          </motion.a>
          <motion.a
            href="https://x.com/qxlabsdao"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
          >
            <Twitter className="h-5 w-5 text-quantum" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/company/qxlabs-dao"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
          >
            <Linkedin className="h-5 w-5 text-quantum" />
          </motion.a>
          <motion.a
            href="mailto:inquiry@qxlabs.io"
            whileHover={{ y: -3 }}
            className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
          >
            <Mail className="h-5 w-5 text-quantum" />
          </motion.a>
          <motion.a
            href="https://sui.io"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="bg-background/50 border border-quantum/20 p-2 rounded-full hover:border-quantum/50 hover:shadow-quantum-glow transition-all"
          >
            <Globe className="h-5 w-5 text-quantum" />
          </motion.a>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-quantum/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} QxLabs. All rights reserved. Built for the Sui ecosystem.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-quantum transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-quantum transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-quantum transition-colors">
              Research Ethics
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-quantum transition-colors">
              Open Source License
            </Link>
          </div>
        </div>

        {/* Quantum decoration */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6 opacity-30 pointer-events-none">
          <HexContainer className="w-12 h-12 bg-quantum/20 animate-pulse-glow">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 bg-quantum rounded-full animate-pulse"></div>
            </div>
          </HexContainer>
        </div>
      </div>
    </footer>
  )
}
