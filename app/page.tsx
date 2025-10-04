import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, Shield, Zap, Globe, Building2, Landmark, Activity, GitBranch } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground density={0.02} />
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QxLabsLogo size="sm" variant="horizontal" animated={false} />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#architecture" className="text-foreground hover:text-quantum transition-colors">
              Architecture
            </Link>
            <Link href="#features" className="text-foreground hover:text-quantum transition-colors">
              Features
            </Link>
            <Link href="#performance" className="text-foreground hover:text-quantum transition-colors">
              Performance
            </Link>
            <Link href="#roadmap" className="text-foreground hover:text-quantum transition-colors">
              Roadmap
            </Link>
            <Link href="#team" className="text-foreground hover:text-quantum transition-colors">
              Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-foreground hover:text-quantum transition-colors">
              Sign In
            </Link>
            <Link href="/contact">
              <QuantumButton>Get Started</QuantumButton>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <QuantumText>TACON-Sui</QuantumText>
              <br />
              <span className="text-quantum">Topology-Aware Consensus</span> Networking
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto">
              Revolutionary network optimization framework for Sui blockchain, delivering sub-second finality with
              intelligent topology discovery and cost-aware routing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#architecture">
                <QuantumButton size="lg" glowEffect>
                  Explore Technology
                </QuantumButton>
              </Link>
              <Link href="/whitepaper">
                <QuantumButton size="lg" variant="outline">
                  Technical Paper
                </QuantumButton>
              </Link>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 w-full max-w-6xl">
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>390-500ms</QuantumText>
              </h3>
              <p className="text-muted-foreground">Mysticeti Finality Time</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>NTCS</QuantumText>
              </h3>
              <p className="text-muted-foreground">Network Topology & Cost Service</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>SCION</QuantumText>
              </h3>
              <p className="text-muted-foreground">Next-Gen Internet Architecture</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>DAG</QuantumText>
              </h3>
              <p className="text-muted-foreground">Optimized Block Propagation</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>The Network Challenge</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Current Sui networking lacks topology awareness, leading to suboptimal performance in global
                deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <QuantumCard>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="text-red-400" />
                      Current Limitations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">No Network Topology Awareness</h4>
                        <p className="text-sm text-muted-foreground">
                          Limited to direct peer connections without global network view.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Suboptimal Routing</h4>
                        <p className="text-sm text-muted-foreground">Default IP routing without cost consideration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Inefficient Resource Utilization</h4>
                        <p className="text-sm text-muted-foreground">No bandwidth or latency optimization.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Limited Resilience</h4>
                        <p className="text-sm text-muted-foreground">Vulnerable to BGP issues and network anomalies.</p>
                      </div>
                    </div>
                  </CardContent>
                </QuantumCard>
              </div>

              <div>
                <QuantumCard glowEffect>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="text-quantum" />
                      TACON-Sui Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quantum rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Dynamic Topology Discovery</h4>
                        <p className="text-sm text-muted-foreground">
                          Real-time network mapping with cost annotations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quantum rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Intelligent Path Selection</h4>
                        <p className="text-sm text-muted-foreground">
                          SCION-powered optimal routing with policy compliance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quantum rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Cost-Aware Optimization</h4>
                        <p className="text-sm text-muted-foreground">
                          Multi-metric optimization for latency, bandwidth, and reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-quantum rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium">Enhanced Resilience</h4>
                        <p className="text-sm text-muted-foreground">
                          Adaptive routing with failure detection and recovery.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </QuantumCard>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>TACON-Sui Architecture</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive framework enhancing Sui's networking layer with intelligent topology awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <QuantumCard className="h-full" dataStream>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative aspect-square w-full">
                      <svg viewBox="0 0 600 600" className="w-full h-full">
                        {/* NTCS Core */}
                        <rect
                          x="250"
                          y="250"
                          width="100"
                          height="100"
                          rx="10"
                          fill="none"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="3"
                        />
                        <text
                          x="300"
                          y="295"
                          textAnchor="middle"
                          fill="hsl(var(--quantum))"
                          fontSize="14"
                          fontWeight="bold"
                        >
                          NTCS
                        </text>
                        <text x="300" y="310" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Core
                        </text>

                        {/* TARM Module */}
                        <rect
                          x="100"
                          y="100"
                          width="120"
                          height="80"
                          rx="5"
                          fill="none"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="2"
                        />
                        <text x="160" y="135" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="12">
                          TARM
                        </text>
                        <text x="160" y="150" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          DAG Block
                        </text>
                        <text x="160" y="165" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Propagation
                        </text>

                        {/* SCDP Module */}
                        <rect
                          x="380"
                          y="100"
                          width="120"
                          height="80"
                          rx="5"
                          fill="none"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="2"
                        />
                        <text x="440" y="135" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="12">
                          SCDP
                        </text>
                        <text x="440" y="150" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Checkpoint
                        </text>
                        <text x="440" y="165" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Dissemination
                        </text>

                        {/* SCION Integration */}
                        <rect
                          x="200"
                          y="420"
                          width="200"
                          height="80"
                          rx="5"
                          fill="none"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="2"
                        />
                        <text x="300" y="455" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="12">
                          SCION Integration
                        </text>
                        <text x="300" y="470" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Next-Gen Internet
                        </text>
                        <text x="300" y="485" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          Path Selection
                        </text>

                        {/* Anemo P2P Layer */}
                        <ellipse
                          cx="300"
                          cy="550"
                          rx="150"
                          ry="30"
                          fill="none"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                        <text x="300" y="555" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="12">
                          Anemo P2P Foundation
                        </text>

                        {/* Connections */}
                        <line x1="220" y1="140" x2="250" y2="280" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <line x1="380" y1="140" x2="350" y2="280" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <line x1="300" y1="350" x2="300" y2="420" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <line x1="300" y1="500" x2="300" y2="520" stroke="hsl(var(--quantum))" strokeWidth="2" />

                        {/* Validator Nodes */}
                        <circle cx="50" cy="300" r="20" fill="none" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <text x="50" y="305" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          V1
                        </text>

                        <circle cx="550" cy="300" r="20" fill="none" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <text x="550" y="305" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          V2
                        </text>

                        <circle cx="300" cy="50" r="20" fill="none" stroke="hsl(var(--quantum))" strokeWidth="2" />
                        <text x="300" y="55" textAnchor="middle" fill="hsl(var(--quantum))" fontSize="10">
                          V3
                        </text>

                        {/* Network paths */}
                        <line
                          x1="70"
                          y1="300"
                          x2="250"
                          y2="300"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="1"
                          strokeDasharray="3,3"
                        />
                        <line
                          x1="350"
                          y1="300"
                          x2="530"
                          y2="300"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="1"
                          strokeDasharray="3,3"
                        />
                        <line
                          x1="300"
                          y1="70"
                          x2="300"
                          y2="250"
                          stroke="hsl(var(--quantum))"
                          strokeWidth="1"
                          strokeDasharray="3,3"
                        />
                      </svg>
                    </div>
                  </CardContent>
                </QuantumCard>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Core Components</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-quantum pl-4">
                      <h4 className="font-bold">Network Topology & Cost Service (NTCS)</h4>
                      <p className="text-sm text-muted-foreground">
                        Central intelligence hub that discovers and maintains dynamic network topology with cost
                        annotations.
                      </p>
                    </div>
                    <div className="border-l-4 border-quantum pl-4">
                      <h4 className="font-bold">Topology-Aware Routing Module (TARM)</h4>
                      <p className="text-sm text-muted-foreground">
                        Optimizes DAG block propagation using intelligent peer selection and multicast strategies.
                      </p>
                    </div>
                    <div className="border-l-4 border-quantum pl-4">
                      <h4 className="font-bold">Smart Checkpoint Dissemination Protocol (SCDP)</h4>
                      <p className="text-sm text-muted-foreground">
                        Enhances state synchronization with efficient summary gossip and bulk transfer optimization.
                      </p>
                    </div>
                    <div className="border-l-4 border-quantum pl-4">
                      <h4 className="font-bold">SCION Integration Layer</h4>
                      <p className="text-sm text-muted-foreground">
                        Leverages next-generation internet architecture for verified, policy-compliant routing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <QuantumCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="text-quantum" />
                    Network Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Latency</span>
                    <span className="font-mono">Real-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bandwidth</span>
                    <span className="font-mono">Adaptive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reliability</span>
                    <span className="font-mono">99.9%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Jitter</span>
                    <span className="font-mono">Minimized</span>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitBranch className="text-quantum" />
                    Path Selection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Algorithm</span>
                    <span className="font-mono">Cost-based</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Updates</span>
                    <span className="font-mono">Dynamic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Policies</span>
                    <span className="font-mono">Configurable</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Failover</span>
                    <span className="font-mono">Automatic</span>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="text-quantum" />
                    Security Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Path Verification</span>
                    <span className="font-mono">SCION</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Geo-fencing</span>
                    <span className="font-mono">Supported</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">AS Preference</span>
                    <span className="font-mono">Configurable</span>
                  </div>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* Performance Benefits */}
        <section id="performance" className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Performance Improvements</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quantitative gains from intelligent network optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <QuantumCard glowEffect>
                <CardHeader>
                  <CardTitle>Latency Reduction</CardTitle>
                  <CardDescription>Optimized block propagation and checkpoint sync</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">DAG Block Propagation</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Low-latency path selection maintains Mysticeti's 390-500ms finality under diverse WAN conditions.
                    </p>
                    <div className="bg-background/50 p-3 rounded border border-quantum/20">
                      <div className="flex justify-between items-center">
                        <span>Tail Latency Improvement</span>
                        <span className="text-quantum font-bold">40-60%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Missing Block Fetching</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Intelligent pull requests to responsive, geographically proximate peers.
                    </p>
                    <div className="bg-background/50 p-3 rounded border border-quantum/20">
                      <div className="flex justify-between items-center">
                        <span>Sync Time Reduction</span>
                        <span className="text-quantum font-bold">50-70%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <CardTitle>Throughput Enhancement</CardTitle>
                  <CardDescription>Bandwidth optimization and resource efficiency</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Bandwidth Utilization</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Optimal path selection maximizes available bandwidth while avoiding congested routes.
                    </p>
                    <div className="bg-background/50 p-3 rounded border border-quantum/20">
                      <div className="flex justify-between items-center">
                        <span>Efficiency Gain</span>
                        <span className="text-quantum font-bold">25-35%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Checkpoint Dissemination</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Parallel streams and erasure coding for efficient bulk data transfer.
                    </p>
                    <div className="bg-background/50 p-3 rounded border border-quantum/20">
                      <div className="flex justify-between items-center">
                        <span>Transfer Speed</span>
                        <span className="text-quantum font-bold">2-3x Faster</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </QuantumCard>
            </div>

            {/* Comparison Table */}
            <QuantumCard>
              <CardHeader>
                <CardTitle>Current vs TACON-Sui Comparison</CardTitle>
                <CardDescription>Key improvements across network operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-quantum/20">
                        <th className="text-left py-3 px-4">Component</th>
                        <th className="text-left py-3 px-4">Current Sui</th>
                        <th className="text-left py-3 px-4">TACON-Sui</th>
                        <th className="text-left py-3 px-4">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-quantum/10">
                        <td className="py-3 px-4 font-medium">DAG Block Propagation</td>
                        <td className="py-3 px-4 text-muted-foreground">Direct push to all validators</td>
                        <td className="py-3 px-4">TARM with intelligent peer selection</td>
                        <td className="py-3 px-4 text-quantum">Reduced latency, optimized bandwidth</td>
                      </tr>
                      <tr className="border-b border-quantum/10">
                        <td className="py-3 px-4 font-medium">Missing Data Retrieval</td>
                        <td className="py-3 px-4 text-muted-foreground">Indirect polling</td>
                        <td className="py-3 px-4">Topology-aware targeted requests</td>
                        <td className="py-3 px-4 text-quantum">Faster sync, reduced load</td>
                      </tr>
                      <tr className="border-b border-quantum/10">
                        <td className="py-3 px-4 font-medium">Checkpoint Sync</td>
                        <td className="py-3 px-4 text-muted-foreground">Seed-peer discovery</td>
                        <td className="py-3 px-4">SCDP with parallel streams</td>
                        <td className="py-3 px-4 text-quantum">Enhanced availability, resilience</td>
                      </tr>
                      <tr className="border-b border-quantum/10">
                        <td className="py-3 px-4 font-medium">Path Selection</td>
                        <td className="py-3 px-4 text-muted-foreground">Default IP routing</td>
                        <td className="py-3 px-4">SCION with cost modeling</td>
                        <td className="py-3 px-4 text-quantum">Optimal paths, policy compliance</td>
                      </tr>
                      <tr className="border-b border-quantum/10">
                        <td className="py-3 px-4 font-medium">Network Awareness</td>
                        <td className="py-3 px-4 text-muted-foreground">Limited peer connections</td>
                        <td className="py-3 px-4">NTCS dynamic topology mapping</td>
                        <td className="py-3 px-4 text-quantum">Global optimization, adaptability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </QuantumCard>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Enterprise Applications</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                TACON-Sui enables high-performance blockchain applications across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <QuantumCard className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Landmark className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Financial Services</CardTitle>
                  <CardDescription>High-frequency trading and settlements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sub-second finality enables real-time financial applications with guaranteed performance under
                    global network conditions.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Real-time settlement networks</li>
                    <li>• Cross-border payment systems</li>
                    <li>• High-frequency trading platforms</li>
                    <li>• Regulatory compliance reporting</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Global Supply Chain</CardTitle>
                  <CardDescription>Multi-region coordination and tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Optimized network paths ensure consistent performance across global supply chain networks with
                    geo-fencing support.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Real-time inventory tracking</li>
                    <li>• Cross-border logistics</li>
                    <li>• Compliance verification</li>
                    <li>• Multi-party coordination</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Enterprise Infrastructure</CardTitle>
                  <CardDescription>Mission-critical blockchain applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enhanced resilience and performance guarantees for enterprise blockchain deployments with SLA
                    compliance.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Identity management systems</li>
                    <li>• Document verification</li>
                    <li>• Audit trail management</li>
                    <li>• Inter-org collaboration</li>
                  </ul>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Development Roadmap</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic implementation phases for TACON-Sui deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-quantum rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-sm text-quantum">Q1 2025</span>
                  </div>
                  <CardTitle>Foundation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• NTCS core development</li>
                    <li>• Anemo integration layer</li>
                    <li>• Basic topology discovery</li>
                    <li>• Cost modeling framework</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-quantum rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-sm text-quantum">Q2 2025</span>
                  </div>
                  <CardTitle>Core Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• TARM implementation</li>
                    <li>• SCDP development</li>
                    <li>• Intelligent peer selection</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-quantum rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-sm text-quantum">Q3 2025</span>
                  </div>
                  <CardTitle>SCION Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• SCION path selection</li>
                    <li>• Policy enforcement</li>
                    <li>• Geo-fencing support</li>
                    <li>• Security enhancements</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-quantum rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-sm text-quantum">Q4 2025</span>
                  </div>
                  <CardTitle>Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Mainnet deployment</li>
                    <li>• Enterprise integration</li>
                    <li>• Monitoring & analytics</li>
                    <li>• Community adoption</li>
                  </ul>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Research Team</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading experts in blockchain networking and enterprise fintech solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <QuantumCard>
                <CardContent className="text-center p-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/avatar.png"
                      alt="Robert Mourey Jr."
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Robert Mourey Jr.</h3>
                  <p className="text-quantum text-sm mb-3">Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Expert in distributed systems with 15 plus years of enterprise experience.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardContent className="text-center p-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/avatar.png"
                      alt="Cody Clark"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Cody Clark</h3>
                  <p className="text-quantum text-sm mb-3">Co-Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Fintech sales expert with 10+ years of enterprise experience.
                  </p>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <QuantumText>Join the Future of Sui Networking</QuantumText>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Be part of the next evolution in blockchain infrastructure. TACON-Sui is ready for enterprise deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <QuantumButton size="lg" glowEffect>
                  Partner With Us
                </QuantumButton>
              </Link>
              <Link href="/whitepaper">
                <QuantumButton size="lg" variant="outline">
                  Technical Documentation
                </QuantumButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
