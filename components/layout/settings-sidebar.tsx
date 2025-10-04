"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { User, Shield, Bell, Palette } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SettingsSidebarProps {
  className?: string
}

export function SettingsSidebar({ className }: SettingsSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Profile",
      icon: User,
      href: "/settings/profile",
      active: pathname === "/settings" || pathname === "/settings/profile",
    },
    {
      label: "Security",
      icon: Shield,
      href: "/settings/security",
      active: pathname === "/settings/security",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/settings/notifications",
      active: pathname === "/settings/notifications",
    },
    {
      label: "Appearance",
      icon: Palette,
      href: "/settings/appearance",
      active: pathname === "/settings/appearance",
    },
  ]

  return (
    <nav className={cn("flex flex-col space-y-1", className)}>
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={route.active ? "default" : "ghost"}
          className={cn("justify-start", route.active && "bg-quantum text-quantum-foreground hover:bg-quantum/90")}
          asChild
        >
          <Link href={route.href}>
            <route.icon className="mr-2 h-5 w-5" />
            {route.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
