"use client"

import Image from "next/image"
import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const screenshots = [
  {
    id: "01",
    title: "Landing Page",
    description: "Full hero section with quantum design system showcase, tech stack, features, and get started guide.",
    file: "/portfolio/01-landing-page.jpg",
  },
  {
    id: "02",
    title: "Dashboard",
    description: "Main dashboard with KPI stat cards, recent projects table, and activity feed.",
    file: "/portfolio/02-dashboard.jpg",
  },
  {
    id: "03",
    title: "Analytics",
    description: "Network performance metrics, request volume charts, and API path breakdowns.",
    file: "/portfolio/03-analytics.jpg",
  },
  {
    id: "04",
    title: "Team Management",
    description: "Team member listing, role management, and member invite system.",
    file: "/portfolio/04-team.jpg",
  },
  {
    id: "05",
    title: "Login Page",
    description: "Authentication page with matrix background, demo credentials callout, and quantum card styling.",
    file: "/portfolio/05-login.jpg",
  },
  {
    id: "06",
    title: "Quantum Components",
    description: "Showcase of QuantumButton, QuantumCard, QuantumText, HexContainer, and MatrixBackground components.",
    file: "/portfolio/06-quantum-components.jpg",
  },
  {
    id: "07",
    title: "Settings",
    description: "Profile settings form, security options, notifications, and appearance preferences.",
    file: "/portfolio/07-settings.jpg",
  },
  {
    id: "08",
    title: "Projects",
    description: "Project management grid with status badges, tech stack tags, and search/filter controls.",
    file: "/portfolio/08-projects.jpg",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground opacity={0.03} />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-quantum transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-quantum text-sm font-mono uppercase tracking-widest mb-3">Portfolio Assets</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <QuantumText>Page Screenshots</QuantumText>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            High-quality screenshot mockups of every page and component in the QxLabs template. Right-click any image
            to save, or use the download button.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <QuantumCard className="overflow-hidden group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-background/50">
                    <Image
                      src={shot.file}
                      alt={shot.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay with download on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={shot.file}
                        download={`qxlabs-${shot.id}-${shot.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                        className="flex items-center gap-2 bg-quantum text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-quantum/90 transition-colors shadow-quantum-glow"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 border border-quantum/30 text-quantum text-xs font-mono px-2 py-1 rounded">
                      {shot.id}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-semibold text-foreground mb-1">{shot.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{shot.description}</p>
                    </div>
                    <a
                      href={shot.file}
                      download={`qxlabs-${shot.id}-${shot.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                      aria-label={`Download ${shot.title} screenshot`}
                      className="shrink-0 p-2 rounded-lg border border-quantum/20 hover:border-quantum/60 hover:shadow-quantum-glow text-quantum transition-all"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </QuantumCard>
            </motion.div>
          ))}
        </div>

        {/* Download all note */}
        <p className="text-center text-xs text-muted-foreground mt-12">
          All images are JPG format at 1440px width. Free to use in your portfolio under the MIT License.
        </p>
      </div>
    </div>
  )
}
