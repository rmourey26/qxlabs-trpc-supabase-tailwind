"use client"

import { useState } from "react"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"

export default function AppearancePage() {
  const [theme, setTheme] = useState("dark")
  const [animationLevel, setAnimationLevel] = useState(75)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [compactMode, setCompactMode] = useState(false)

  const handleSave = () => {
    toast({
      title: "Appearance settings saved",
      description: "Your appearance preferences have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <QuantumCard>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Customize the appearance of the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Color Theme</Label>
            <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="dark" id="dark" className="sr-only" />
                <Label
                  htmlFor="dark"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-quantum [&:has([data-state=checked])]:border-quantum"
                >
                  <div className="mb-2 h-16 w-full rounded-md bg-zinc-950" />
                  <span>Dark</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="light" id="light" className="sr-only" />
                <Label
                  htmlFor="light"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-quantum [&:has([data-state=checked])]:border-quantum"
                >
                  <div className="mb-2 h-16 w-full rounded-md bg-white" />
                  <span>Light</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="system" id="system" className="sr-only" />
                <Label
                  htmlFor="system"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-quantum [&:has([data-state=checked])]:border-quantum"
                >
                  <div className="mb-2 h-16 w-full rounded-md bg-gradient-to-r from-zinc-950 to-white" />
                  <span>System</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="animation-level">Animation Level</Label>
              <span className="text-sm text-muted-foreground">{animationLevel}%</span>
            </div>
            <Slider
              id="animation-level"
              min={0}
              max={100}
              step={1}
              value={[animationLevel]}
              onValueChange={(value) => setAnimationLevel(value[0])}
              className="[&>span:first-child]:bg-quantum"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reduced-motion">Reduced Motion</Label>
              <p className="text-sm text-muted-foreground">Minimize animations for accessibility</p>
            </div>
            <Switch id="reduced-motion" checked={reducedMotion} onCheckedChange={setReducedMotion} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="compact-mode">Compact Mode</Label>
              <p className="text-sm text-muted-foreground">Reduce spacing and size of elements</p>
            </div>
            <Switch id="compact-mode" checked={compactMode} onCheckedChange={setCompactMode} />
          </div>
        </CardContent>
        <CardFooter>
          <QuantumButton onClick={handleSave}>Save Preferences</QuantumButton>
        </CardFooter>
      </QuantumCard>

      <QuantumCard>
        <CardHeader>
          <CardTitle>Matrix Background</CardTitle>
          <CardDescription>Customize the matrix background effect</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Background Density</Label>
              <p className="text-sm text-muted-foreground">Adjust the density of the matrix background effect</p>
            </div>
            <div className="w-1/3">
              <Slider min={1} max={10} step={1} defaultValue={[3]} className="[&>span:first-child]:bg-quantum" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Animation Speed</Label>
              <p className="text-sm text-muted-foreground">Adjust the speed of the matrix background animation</p>
            </div>
            <div className="w-1/3">
              <Slider min={1} max={10} step={1} defaultValue={[5]} className="[&>span:first-child]:bg-quantum" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enable-matrix">Enable Matrix Background</Label>
              <p className="text-sm text-muted-foreground">Toggle the matrix background effect</p>
            </div>
            <Switch id="enable-matrix" defaultChecked={true} />
          </div>
        </CardContent>
      </QuantumCard>
    </div>
  )
}
