"use client"

import { QxLabsLogo } from "@/components/new-logo"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { useState } from "react"

export default function LogoShowcase() {
  const [animated, setAnimated] = useState(true)

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground density={0.01} />
      <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Q1XLABS Logo Showcase</h1>
        <p className="text-center text-blue-300 mb-8">Updated with bright blue and ionic white colors</p>

        <Tabs defaultValue="default" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="default">Default</TabsTrigger>
            <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
            <TabsTrigger value="vertical">Vertical</TabsTrigger>
            <TabsTrigger value="icon">Icon Only</TabsTrigger>
          </TabsList>

          <div className="mb-6 flex items-center justify-end gap-2">
            <span className="text-sm">Animation:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={animated}
                onChange={() => setAnimated(!animated)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>

          <TabsContent
            value="default"
            className="flex justify-center p-12 bg-background/50 rounded-lg border border-blue-500/20"
          >
            <QxLabsLogo size="xl" animated={animated} />
          </TabsContent>

          <TabsContent
            value="horizontal"
            className="flex justify-center p-12 bg-background/50 rounded-lg border border-blue-500/20"
          >
            <QxLabsLogo size="xl" variant="horizontal" animated={animated} />
          </TabsContent>

          <TabsContent
            value="vertical"
            className="flex justify-center p-12 bg-background/50 rounded-lg border border-blue-500/20"
          >
            <QxLabsLogo size="xl" variant="vertical" animated={animated} />
          </TabsContent>

          <TabsContent
            value="icon"
            className="flex justify-center p-12 bg-background/50 rounded-lg border border-blue-500/20"
          >
            <QxLabsLogo size="xl" variant="icon" animated={animated} />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <QuantumCard>
            <CardHeader>
              <CardTitle>Logo Sizes</CardTitle>
              <CardDescription>The logo is available in multiple sizes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-8 items-end justify-center">
              <div className="flex flex-col items-center">
                <QxLabsLogo size="sm" animated={false} />
                <span className="mt-2 text-sm text-muted-foreground">Small</span>
              </div>
              <div className="flex flex-col items-center">
                <QxLabsLogo size="md" animated={false} />
                <span className="mt-2 text-sm text-muted-foreground">Medium</span>
              </div>
              <div className="flex flex-col items-center">
                <QxLabsLogo size="lg" animated={false} />
                <span className="mt-2 text-sm text-muted-foreground">Large</span>
              </div>
            </CardContent>
          </QuantumCard>

          <QuantumCard>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>The updated blue and ionic white color scheme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c7ed6]"></div>
                <div>
                  <p className="font-medium">Dark Blue</p>
                  <p className="text-xs text-muted-foreground">#1c7ed6</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4dabf7]"></div>
                <div>
                  <p className="font-medium">Bright Blue</p>
                  <p className="text-xs text-muted-foreground">#4dabf7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#74c0fc]"></div>
                <div>
                  <p className="font-medium">Light Blue</p>
                  <p className="text-xs text-muted-foreground">#74c0fc</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.5)]"></div>
                <div>
                  <p className="font-medium">Ionic White</p>
                  <p className="text-xs text-muted-foreground">With glow effect</p>
                </div>
              </div>
            </CardContent>
          </QuantumCard>
        </div>
      </div>
    </div>
  )
}
