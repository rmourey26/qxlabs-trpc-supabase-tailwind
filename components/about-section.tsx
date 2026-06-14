"use client"

import Link from "next/link"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { HexContainer } from "@/components/ui-extensions/hex-container"
import { CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { User, Building2, ExternalLink, Code2, Cpu } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <QuantumText>About This Template</QuantumText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by an engineer at the intersection of enterprise software and frontier blockchain infrastructure.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Template credit card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QuantumCard glowEffect className="h-full">
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-center gap-3">
                  <HexContainer size="sm" className="bg-quantum/20">
                    <Code2 className="text-quantum h-4 w-4" />
                  </HexContainer>
                  <h3 className="text-lg font-bold">
                    <QuantumText>QxLabs Template</QuantumText>
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  This template was designed and engineered by{" "}
                  <span className="text-foreground font-semibold">Robert Mourey Jr.</span>, who provides custom
                  software engineering and architectural services through{" "}
                  <Link
                    href="https://theblockchain.company"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-quantum hover:underline inline-flex items-center gap-1"
                  >
                    The Blockchain Company.io LLC
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  .
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The Blockchain Company.io LLC specializes in delivering production-grade full-stack applications,
                  decentralized protocol architecture, and enterprise integrations — helping teams ship with
                  type-safety, security, and a modern developer experience from day one.
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Building2 className="h-4 w-4 text-quantum flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Custom software engineering &amp; architectural services
                  </span>
                </div>
              </CardContent>
            </QuantumCard>
          </motion.div>

          {/* Robert Mourey Jr. bio card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <QuantumCard dataStream className="h-full">
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-center gap-3">
                  <HexContainer size="sm" className="bg-quantum/20">
                    <User className="text-quantum h-4 w-4" />
                  </HexContainer>
                  <h3 className="text-lg font-bold">
                    <QuantumText>Robert Mourey Jr.</QuantumText>
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Robert Mourey Jr. is a software engineer and systems architect with deep expertise in full-stack
                  web development, blockchain infrastructure, and post-quantum cryptography. He brings a
                  first-principles approach to building resilient, scalable systems — from developer tooling like
                  this template to enterprise-grade distributed protocols.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Robert serves as Lead Architect of{" "}
                  <span className="text-foreground font-semibold">AetherNet</span> — the sovereign economic
                  settlement layer for autonomous AI agents featured on{" "}
                  <Link
                    href="https://kronova.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-quantum hover:underline inline-flex items-center gap-1"
                  >
                    kronova.io
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  . AetherNet provides post-quantum secure transport, cryptographic agent identity, and
                  Canton-based sub-transaction privacy — the infrastructure layer that enables AI agents to
                  transact autonomously at enterprise scale.
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Cpu className="h-4 w-4 text-quantum flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Lead Architect, AetherNet &mdash; Kronova
                  </span>
                </div>
              </CardContent>
            </QuantumCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
