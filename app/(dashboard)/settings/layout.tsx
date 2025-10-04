import type React from "react"
import { Separator } from "@/components/ui/separator"
import { SettingsSidebar } from "@/components/layout/settings-sidebar"

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>
      <Separator className="border-quantum/20" />
      <div className="flex flex-col gap-8 md:flex-row">
        <SettingsSidebar className="md:w-1/4" />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
