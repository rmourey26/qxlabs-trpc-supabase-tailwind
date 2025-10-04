"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { HexContainer } from "@/components/ui-extensions/hex-container"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { Logo } from "@/components/logo"
import { CuboidIcon as Cube, Hexagon, Zap, Lock, Sparkles } from "lucide-react"

export default function ThemeDemo() {
  const [activeTab, setActiveTab] = useState("components")

  return (
    <div className="min-h-screen bg-background text-foreground font-quantum relative overflow-hidden">
      <MatrixBackground density={0.03} />

      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="flex flex-col items-center justify-center mb-12">
          <Logo size="lg" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 text-4xl md:text-6xl font-bold text-center"
          >
            <QuantumText>Quantum Blockchain</QuantumText> Theme
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 text-xl text-muted-foreground text-center max-w-2xl"
          >
            A high-tech theme designed for the future of decentralized applications
          </motion.p>
        </div>

        <Tabs defaultValue="components" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger
              value="components"
              onClick={() => setActiveTab("components")}
              className={activeTab === "components" ? "text-quantum" : ""}
            >
              Components
            </TabsTrigger>
            <TabsTrigger
              value="cards"
              onClick={() => setActiveTab("cards")}
              className={activeTab === "cards" ? "text-quantum" : ""}
            >
              Cards
            </TabsTrigger>
            <TabsTrigger
              value="buttons"
              onClick={() => setActiveTab("buttons")}
              className={activeTab === "buttons" ? "text-quantum" : ""}
            >
              Buttons
            </TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuantumCard glowEffect>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cube className="text-quantum" />
                    <span>Quantum Components</span>
                  </CardTitle>
                  <CardDescription>Futuristic UI components with quantum-inspired design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our components use advanced animations and styling to create a high-tech feel that matches the
                    quantum blockchain aesthetic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <HexContainer className="w-16 h-16 bg-quantum/20 flex items-center justify-center">
                      <Hexagon className="text-quantum" />
                    </HexContainer>
                    <HexContainer className="w-16 h-16 bg-quantum/20 flex items-center justify-center">
                      <Zap className="text-quantum" />
                    </HexContainer>
                    <HexContainer className="w-16 h-16 bg-quantum/20 flex items-center justify-center">
                      <Lock className="text-quantum" />
                    </HexContainer>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard dataStream>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-quantum" />
                    <span>Data Visualization</span>
                  </CardTitle>
                  <CardDescription>Visualize complex blockchain data with elegant components</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our data visualization components make it easy to display complex blockchain data in an intuitive
                    and visually appealing way.
                  </p>
                  <div className="h-32 rounded-md bg-secondary/50 border border-quantum/30 flex items-center justify-center">
                    <p className="text-quantum">Data Visualization Placeholder</p>
                  </div>
                </CardContent>
              </QuantumCard>
            </div>
          </TabsContent>

          <TabsContent value="cards" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <QuantumCard glowEffect>
                <CardHeader>
                  <CardTitle>Glowing Card</CardTitle>
                  <CardDescription>With quantum glow effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has a subtle quantum glow effect that pulses gently.</p>
                </CardContent>
                <CardFooter>
                  <QuantumButton size="sm">Learn More</QuantumButton>
                </CardFooter>
              </QuantumCard>

              <QuantumCard dataStream>
                <CardHeader>
                  <CardTitle>Data Stream</CardTitle>
                  <CardDescription>With animated data flow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has an animated data stream effect at the top.</p>
                </CardContent>
                <CardFooter>
                  <QuantumButton size="sm">Learn More</QuantumButton>
                </CardFooter>
              </QuantumCard>

              <QuantumCard className="quantum-border">
                <CardHeader>
                  <CardTitle>Quantum Border</CardTitle>
                  <CardDescription>With hover effect</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This card has a quantum border that glows on hover.</p>
                </CardContent>
                <CardFooter>
                  <QuantumButton size="sm">Learn More</QuantumButton>
                </CardFooter>
              </QuantumCard>
            </div>
          </TabsContent>

          <TabsContent value="buttons" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuantumCard>
                <CardHeader>
                  <CardTitle>Standard Buttons</CardTitle>
                  <CardDescription>Various button styles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <QuantumButton>Default</QuantumButton>
                    <QuantumButton variant="outline">Outline</QuantumButton>
                    <QuantumButton variant="ghost">Ghost</QuantumButton>
                    <QuantumButton glowEffect>Glow Effect</QuantumButton>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle>Hexagonal Buttons</CardTitle>
                  <CardDescription>Unique hexagonal shape buttons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <QuantumButton variant="hex">Hex Button</QuantumButton>
                    <QuantumButton variant="hex" glowEffect>
                      Glowing Hex
                    </QuantumButton>
                  </div>
                </CardContent>
              </QuantumCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
