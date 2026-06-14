"use client"

import { trpc } from "@/utils/trpc"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Activity, TrendingUp, Cpu, Shield, Zap, Users } from "lucide-react"

export default function DashboardPage() {
  const { data: profile } = trpc.profile.get.useQuery()
  const { data: projects } = trpc.project.getAll.useQuery()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to <QuantumText>QxLabs</QuantumText>, {profile?.full_name || "Developer"}
        </h1>
        <p className="text-muted-foreground">Monitor your Sui network optimization and performance metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Latency</CardTitle>
            <Activity className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127ms</div>
            <p className="text-xs text-muted-foreground">-45% from baseline</p>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Validator Nodes</CardTitle>
            <Network className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Connected & optimized</p>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Throughput</CardTitle>
            <TrendingUp className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+32%</div>
            <p className="text-xs text-muted-foreground">Performance improvement</p>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NTCS Status</CardTitle>
            <Cpu className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">Topology mapping online</p>
          </CardContent>
        </QuantumCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <QuantumCard className="lg:col-span-4" dataStream>
          <CardHeader>
            <CardTitle>Network Performance</CardTitle>
            <CardDescription>Real-time QxLabs optimization metrics</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center border border-dashed border-quantum/30 rounded-md">
              <div className="text-center">
                <Activity className="h-12 w-12 text-quantum mx-auto mb-2" />
                <p className="text-muted-foreground">Live network performance dashboard</p>
                <p className="text-sm text-muted-foreground">Latency, throughput, and path optimization</p>
              </div>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Active Components</CardTitle>
            <CardDescription>QxLabs system status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-quantum animate-pulse" />
                <div>
                  <p className="text-sm font-medium">NTCS Core</p>
                  <p className="text-xs text-muted-foreground">Topology discovery active</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-quantum/20 text-quantum">Online</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-quantum animate-pulse" />
                <div>
                  <p className="text-sm font-medium">TARM Module</p>
                  <p className="text-xs text-muted-foreground">DAG block optimization</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-quantum/20 text-quantum">Active</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-quantum animate-pulse" />
                <div>
                  <p className="text-sm font-medium">SCDP Protocol</p>
                  <p className="text-xs text-muted-foreground">Checkpoint sync enhanced</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-quantum/20 text-quantum">Running</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <div>
                  <p className="text-sm font-medium">SCION Integration</p>
                  <p className="text-xs text-muted-foreground">Path selection layer</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-500">Beta</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div>
                  <p className="text-sm font-medium">Anemo P2P</p>
                  <p className="text-xs text-muted-foreground">Foundation layer</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">Stable</span>
                </div>
              </div>
            </div>
          </CardContent>
        </QuantumCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-quantum h-5 w-5" />
              Security Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Path Verification</span>
                <span className="text-quantum text-sm">SCION Enabled</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Geo-fencing</span>
                <span className="text-quantum text-sm">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">DDoS Protection</span>
                <span className="text-quantum text-sm">Enhanced</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-quantum h-5 w-5" />
              Performance Gains
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Latency Reduction</span>
                <span className="text-quantum text-sm">-45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Bandwidth Efficiency</span>
                <span className="text-quantum text-sm">+32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sync Speed</span>
                <span className="text-quantum text-sm">2.3x Faster</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-quantum h-5 w-5" />
              Network Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Connected Validators</span>
                <span className="text-quantum text-sm">24/24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Network Uptime</span>
                <span className="text-quantum text-sm">99.97%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Consensus Health</span>
                <span className="text-quantum text-sm">Optimal</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>
      </div>
    </div>
  )
}
