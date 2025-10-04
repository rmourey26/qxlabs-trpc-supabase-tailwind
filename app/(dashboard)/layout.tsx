"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/layout/dashboard-header"
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { TRPCProvider } from "@/providers/trpc-provider"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <TRPCProvider>
      <div className="min-h-screen bg-background relative">
        <MatrixBackground density={0.01} />
        <div className="relative z-10 flex min-h-screen flex-col">
          <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
          <div className="flex flex-1">
            <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
        </div>
      </div>
    </TRPCProvider>
  )
}
