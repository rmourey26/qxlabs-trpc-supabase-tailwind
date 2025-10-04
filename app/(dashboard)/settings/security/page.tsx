"use client"

import type React from "react"

import { useState } from "react"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export default function SecurityPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirm password must match.",
        variant: "destructive",
      })
      return
    }

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully.",
      })
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    }, 1000)
  }

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled)

    toast({
      title: !twoFactorEnabled ? "Two-factor authentication enabled" : "Two-factor authentication disabled",
      description: !twoFactorEnabled
        ? "Your account is now more secure with two-factor authentication."
        : "Two-factor authentication has been disabled for your account.",
    })
  }

  return (
    <div className="space-y-6">
      <QuantumCard>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password to keep your account secure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <QuantumButton type="submit">Update Password</QuantumButton>
          </CardFooter>
        </form>
      </QuantumCard>

      <QuantumCard>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h4 className="text-sm font-medium">Two-factor authentication</h4>
              <p className="text-sm text-muted-foreground">Receive a verification code on your phone when signing in</p>
            </div>
            <Switch checked={twoFactorEnabled} onCheckedChange={handleTwoFactorToggle} />
          </div>
        </CardContent>
      </QuantumCard>

      <QuantumCard>
        <CardHeader>
          <CardTitle>Sessions</CardTitle>
          <CardDescription>Manage your active sessions and devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Current Session</p>
                <p className="text-xs text-muted-foreground">Chrome on Windows • IP: 192.168.1.1</p>
              </div>
              <span className="text-xs bg-quantum/20 text-quantum px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Mobile App</p>
                <p className="text-xs text-muted-foreground">iPhone 13 • Last active: 2 days ago</p>
              </div>
              <QuantumButton variant="outline" size="sm">
                Revoke
              </QuantumButton>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <QuantumButton variant="outline" className="w-full">
            Sign Out All Devices
          </QuantumButton>
        </CardFooter>
      </QuantumCard>
    </div>
  )
}
