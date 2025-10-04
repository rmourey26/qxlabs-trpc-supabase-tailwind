"use client"

import { useState } from "react"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState({
    email: {
      marketing: true,
      social: true,
      security: true,
      updates: false,
    },
    push: {
      marketing: false,
      social: true,
      security: true,
      updates: true,
    },
  })

  const handleToggle = (category: string, type: "email" | "push") => {
    setNotifications({
      ...notifications,
      [type]: {
        ...notifications[type],
        [category]: !notifications[type][category as keyof typeof notifications.email],
      },
    })
  }

  const handleSave = () => {
    toast({
      title: "Notification preferences saved",
      description: "Your notification preferences have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <QuantumCard>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage the emails you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Marketing emails</h4>
              <p className="text-sm text-muted-foreground">Receive emails about new products, features, and more</p>
            </div>
            <Switch
              checked={notifications.email.marketing}
              onCheckedChange={() => handleToggle("marketing", "email")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Social notifications</h4>
              <p className="text-sm text-muted-foreground">Receive emails for friend requests, follows, and more</p>
            </div>
            <Switch checked={notifications.email.social} onCheckedChange={() => handleToggle("social", "email")} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Security emails</h4>
              <p className="text-sm text-muted-foreground">Receive emails about your account activity and security</p>
            </div>
            <Switch checked={notifications.email.security} onCheckedChange={() => handleToggle("security", "email")} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Product updates</h4>
              <p className="text-sm text-muted-foreground">Receive emails about updates to products you've purchased</p>
            </div>
            <Switch checked={notifications.email.updates} onCheckedChange={() => handleToggle("updates", "email")} />
          </div>
        </CardContent>
      </QuantumCard>

      <QuantumCard>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage your mobile and desktop push notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Marketing notifications</h4>
              <p className="text-sm text-muted-foreground">
                Receive notifications about new products, features, and more
              </p>
            </div>
            <Switch checked={notifications.push.marketing} onCheckedChange={() => handleToggle("marketing", "push")} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Social notifications</h4>
              <p className="text-sm text-muted-foreground">
                Receive notifications for friend requests, follows, and more
              </p>
            </div>
            <Switch checked={notifications.push.social} onCheckedChange={() => handleToggle("social", "push")} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Security notifications</h4>
              <p className="text-sm text-muted-foreground">
                Receive notifications about your account activity and security
              </p>
            </div>
            <Switch checked={notifications.push.security} onCheckedChange={() => handleToggle("security", "push")} />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Product updates</h4>
              <p className="text-sm text-muted-foreground">
                Receive notifications about updates to products you've purchased
              </p>
            </div>
            <Switch checked={notifications.push.updates} onCheckedChange={() => handleToggle("updates", "push")} />
          </div>
        </CardContent>
        <CardFooter>
          <QuantumButton onClick={handleSave}>Save Preferences</QuantumButton>
        </CardFooter>
      </QuantumCard>
    </div>
  )
}
