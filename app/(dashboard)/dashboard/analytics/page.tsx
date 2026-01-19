"use client"

import { trpc } from "@/utils/trpc"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, TrendingUp, TrendingDown, Clock, Network, Zap, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AnalyticsPage() {
  const { data: overview } = trpc.analytics.getOverview.useQuery()
  const { data: performance } = trpc.analytics.getPerformance.useQuery()
  const { data: nodePerformance } = trpc.analytics.getNodePerformance.useQuery()
  const { data: topPaths } = trpc.analytics.getTopPaths.useQuery()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          <QuantumText>Analytics</QuantumText> Dashboard
        </h1>
        <p className="text-muted-foreground">Monitor and analyze your network performance metrics</p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Activity className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview?.totalRequests.toLocaleString()}</div>
            <div className="flex items-center text-xs text-quantum">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+12.5% from last week</span>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
            <Clock className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview?.avgLatency}ms</div>
            <div className="flex items-center text-xs text-quantum">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              <span>-18% improvement</span>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Zap className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview?.uptime}%</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>99.9% SLA target</span>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Nodes</CardTitle>
            <Network className="h-4 w-4 text-quantum" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overview?.activeNodes}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>All nodes operational</span>
            </div>
          </CardContent>
        </QuantumCard>
      </div>

      {/* Performance Trend */}
      <QuantumCard dataStream>
        <CardHeader>
          <CardTitle>Performance Trend</CardTitle>
          <CardDescription>7-day latency, throughput, and request metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {performance?.map((day, index) => (
              <div key={day.date} className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">{new Date(day.date).toLocaleDateString()}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Latency: {day.latency}ms</span>
                    <span className="text-quantum">Throughput: {day.throughput.toLocaleString()}/s</span>
                  </div>
                  <Progress value={(day.requests / 20000) * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground">{day.requests.toLocaleString()} requests</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </QuantumCard>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Node Performance */}
        <QuantumCard>
          <CardHeader>
            <CardTitle>Node Performance</CardTitle>
            <CardDescription>Performance metrics by node location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nodePerformance?.map((node) => (
                <div key={node.node} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-sm">{node.node}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{node.latency}ms</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-quantum/20 text-quantum">
                        {node.uptime}%
                      </span>
                    </div>
                  </div>
                  <Progress value={node.uptime} className="h-1" />
                  <div className="text-xs text-muted-foreground">{node.requests.toLocaleString()} requests</div>
                </div>
              ))}
            </div>
          </CardContent>
        </QuantumCard>

        {/* Top API Paths */}
        <QuantumCard>
          <CardHeader>
            <CardTitle>Top API Paths</CardTitle>
            <CardDescription>Most requested endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPaths?.map((path, index) => (
                <div key={path.path} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="text-quantum font-mono text-lg">#{index + 1}</div>
                      <div className="font-mono text-sm">{path.path}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{path.avgLatency}ms avg</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={(path.requests / 50000) * 100} className="flex-1 h-1" />
                    <span className="text-xs text-muted-foreground w-20 text-right">
                      {path.requests.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </QuantumCard>
      </div>

      {/* Performance Indicators */}
      <div className="grid gap-4 md:grid-cols-3">
        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-quantum h-5 w-5" />
              Optimization Gains
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">TACON-Sui Enhancement</span>
                <span className="text-quantum text-sm font-medium">+45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Path Selection</span>
                <span className="text-quantum text-sm font-medium">+32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cache Hit Rate</span>
                <span className="text-quantum text-sm font-medium">94.3%</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="text-quantum h-5 w-5" />
              Network Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Bandwidth Utilization</span>
                <span className="text-quantum text-sm font-medium">87%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Packet Loss</span>
                <span className="text-quantum text-sm font-medium">0.02%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Jitter</span>
                <span className="text-quantum text-sm font-medium">4.2ms</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>

        <QuantumCard>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="text-quantum h-5 w-5" />
              Real-time Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Current QPS</span>
                <span className="text-quantum text-sm font-medium">2,347</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Active Connections</span>
                <span className="text-quantum text-sm font-medium">1,892</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">CPU Utilization</span>
                <span className="text-quantum text-sm font-medium">42%</span>
              </div>
            </div>
          </CardContent>
        </QuantumCard>
      </div>
    </div>
  )
}
