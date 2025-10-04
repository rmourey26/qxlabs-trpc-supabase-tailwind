import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, ArrowLeft, Network, Cpu, Activity, GitBranch } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground density={0.01} />
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <QxLabsLogo size="sm" variant="horizontal" animated={false} />
          </div>
          <Link href="/">
            <QuantumButton variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </QuantumButton>
          </Link>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <QuantumText>TACON-Sui Technical Paper</QuantumText>
              </h1>
              <p className="text-xl text-muted-foreground">
                Optimizing Sui's Network Layer: A Topology-Aware and Cost-Optimized Approach for Consensus and Data
                Dissemination
              </p>
            </div>

            <QuantumCard className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-quantum" />
                  Abstract
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p>
                  Sui blockchain has distinguished itself through its object-centric data model, parallel transaction
                  execution, and the high-performance Mysticeti consensus protocol. However, the efficiency of any
                  distributed consensus mechanism is intrinsically linked to the underlying peer-to-peer (P2P)
                  networking layer responsible for block propagation, synchronization, and state dissemination.
                </p>
                <p>
                  Currently, Sui's networking layer operates without traditional gossip protocols between validators for
                  DAG block dissemination, instead employing a "direct push" mechanism for newly created blocks and
                  "indirect polling" for missing data. While functional under ideal conditions, this approach lacks
                  awareness of underlying network topology and varying communication costs, potentially leading to
                  suboptimal routing and reduced resilience.
                </p>
                <p>
                  This paper proposes TACON-Sui (Topology-Aware Consensus Networking for Sui), a comprehensive solution
                  designed to enhance the networking aspects of Sui's consensus and critical P2P components. TACON-Sui
                  introduces intelligent networking subsystems that actively discover network topology, estimate path
                  costs, and utilize this intelligence to optimize data propagation across all phases: push, pull
                  (sync), and checkpoint dissemination.
                </p>
              </CardContent>
            </QuantumCard>

            <QuantumCard className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="text-quantum" />
                  Current Sui Network Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Mysticeti Consensus Protocol</h3>
                    <p className="text-muted-foreground mb-4">
                      Sui's current consensus protocol, Mysticeti, is a DAG-based Byzantine Fault Tolerant (BFT)
                      protocol designed for low latency and high throughput. Key benefits include parallel block
                      proposals, commitment in three message rounds, and tolerance for unavailable leaders.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Performance Metrics</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 200,000-400,000 TPS in controlled tests</li>
                          <li>• Sub-second latency capability</li>
                          <li>• 390-500ms finality observed</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Architecture Features</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Single message type (signed block)</li>
                          <li>• Single multi-cast transmission</li>
                          <li>• Implicit commitment mechanism</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Current Network Limitations</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-medium text-red-400">Direct Push Mechanism</h4>
                        <p className="text-sm text-muted-foreground">
                          Validators directly push newly created DAG blocks to all other validators without considering
                          network topology or path costs.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-medium text-red-400">Indirect Polling Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Missing blocks are detected and requested through polling, but without intelligent peer
                          selection based on network proximity or reliability.
                        </p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4">
                        <h4 className="font-medium text-red-400">No Topology Awareness</h4>
                        <p className="text-sm text-muted-foreground">
                          The system lacks global network view and cannot adapt to changing network conditions or
                          optimize for different communication costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </QuantumCard>

            <QuantumCard className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="text-quantum" />
                  TACON-Sui Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Core Concepts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-background/50 p-4 rounded border border-quantum/20">
                          <h4 className="font-medium mb-2">Dynamic Network Topology Discovery</h4>
                          <p className="text-sm text-muted-foreground">
                            Continuously build and update a map of the validator and relevant full node network,
                            including their interconnections and geographic locations.
                          </p>
                        </div>
                        <div className="bg-background/50 p-4 rounded border border-quantum/20">
                          <h4 className="font-medium mb-2">Path Cost and Quality Estimation</h4>
                          <p className="text-sm text-muted-foreground">
                            Actively and passively measure various metrics (latency, bandwidth, jitter, reliability) for
                            paths between nodes.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-background/50 p-4 rounded border border-quantum/20">
                          <h4 className="font-medium mb-2">Intelligent Peer Selection</h4>
                          <p className="text-sm text-muted-foreground">
                            Utilize topology and cost data to select optimal peers for pushing blocks, pulling missing
                            data, and synchronizing checkpoints.
                          </p>
                        </div>
                        <div className="bg-background/50 p-4 rounded border border-quantum/20">
                          <h4 className="font-medium mb-2">Optimized Data Propagation</h4>
                          <p className="text-sm text-muted-foreground">
                            Employ distinct strategies for direct push (multicast/broadcast optimization) and indirect
                            pull (targeted requests).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">System Components</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Network Topology and Cost Service (NTCS)</h4>
                        <p className="text-sm text-muted-foreground">
                          Central service responsible for discovering, maintaining, and providing network topology
                          information with associated cost metrics.
                        </p>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Topology-Aware Routing Module (TARM)</h4>
                        <p className="text-sm text-muted-foreground">
                          Handles DAG block propagation with intelligent peer selection and multicast optimization
                          strategies.
                        </p>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Smart Checkpoint Dissemination Protocol (SCDP)</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimizes checkpoint summary gossip and bulk data transfer using parallel streams and erasure
                          coding.
                        </p>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">SCION Integration Layer</h4>
                        <p className="text-sm text-muted-foreground">
                          Leverages SCION's next-generation internet architecture for verified, policy-compliant path
                          selection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </QuantumCard>

            <QuantumCard className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="text-quantum" />
                  Performance Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Quantitative Improvements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Latency Reduction</h4>
                        <div className="space-y-3">
                          <div className="bg-background/50 p-3 rounded border border-quantum/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">DAG Block Propagation</span>
                              <span className="text-quantum font-bold">40-60%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Reduced tail latencies through optimal path selection
                            </p>
                          </div>
                          <div className="bg-background/50 p-3 rounded border border-quantum/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Missing Block Fetching</span>
                              <span className="text-quantum font-bold">50-70%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Intelligent pull requests to responsive peers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium">Throughput Enhancement</h4>
                        <div className="space-y-3">
                          <div className="bg-background/50 p-3 rounded border border-quantum/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Bandwidth Utilization</span>
                              <span className="text-quantum font-bold">25-35%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Optimal path selection maximizes available bandwidth
                            </p>
                          </div>
                          <div className="bg-background/50 p-3 rounded border border-quantum/20">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Checkpoint Sync</span>
                              <span className="text-quantum font-bold">2-3x</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Parallel streams and erasure coding</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">System Resilience Improvements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Network Fault Tolerance</h4>
                        <p className="text-sm text-muted-foreground">
                          Adaptive routing around failed paths and congested links with automatic failover.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Geographic Distribution</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimized performance across globally distributed validator sets with regional preferences
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">DDoS Mitigation</h4>
                        <p className="text-sm text-muted-foreground">
                          Enhanced protection against network-layer attacks through intelligent path diversity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </QuantumCard>

            <QuantumCard className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="text-quantum" />
                  Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Development Phases</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Phase 1: Foundation (Q1 2025)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Core NTCS development and Anemo integration layer implementation.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Basic topology discovery mechanisms</li>
                          <li>• Cost modeling framework</li>
                          <li>• Anemo RPC interface design</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Phase 2: Core Modules (Q2 2025)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          TARM and SCDP implementation with intelligent peer selection algorithms.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• DAG block propagation optimization</li>
                          <li>• Checkpoint dissemination enhancement</li>
                          <li>• Performance monitoring integration</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Phase 3: SCION Integration (Q3 2025)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Advanced path selection with SCION network architecture integration.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• SCION path discovery and selection</li>
                          <li>• Policy enforcement mechanisms</li>
                          <li>• Geo-fencing and AS preference support</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-quantum pl-4">
                        <h4 className="font-medium">Phase 4: Production Deployment (Q4 2025)</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mainnet integration and enterprise-grade monitoring capabilities.
                        </p>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Mainnet validator deployment</li>
                          <li>• Enterprise integration tools</li>
                          <li>• Community adoption programs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Future Research Directions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Machine Learning Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Adaptive algorithms for dynamic network optimization and predictive path selection based on
                          historical performance data.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Formal Verification</h4>
                        <p className="text-sm text-muted-foreground">
                          Mathematical verification of TACON-Sui protocols to ensure correctness and resilience
                          properties.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Cross-Chain Optimization</h4>
                        <p className="text-sm text-muted-foreground">
                          Extension of topology-aware networking to multi-chain environments and interoperability
                          protocols.
                        </p>
                      </div>
                      <div className="bg-background/50 p-4 rounded border border-quantum/20">
                        <h4 className="font-medium mb-2">Quantum-Resistant Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Integration of post-quantum cryptographic methods for long-term security in network
                          communications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </QuantumCard>

            <div className="text-center mb-8">
              <a
                href="https://quantumone.b-cdn.net/tacon/Sui%20Network%20Topology%20Optimization.pdf"
                download="TACON-Sui-Technical-Paper.pdf"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <QuantumButton size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Technical Paper (PDF)
                </QuantumButton>
              </a>
            </div>

            <QuantumCard>
              <CardHeader>
                <CardTitle>Table of Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Introduction</li>
                  <li>
                    Sui's Current Network Architecture and Identified Challenges
                    <ul className="pl-6 mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Consensus: Mysticeti and its Predecessors</li>
                      <li>DAG Block Propagation: Direct Push and Indirect Polling</li>
                      <li>Checkpoint Dissemination and State Synchronization</li>
                      <li>Anemo P2P Library Integration</li>
                    </ul>
                  </li>
                  <li>
                    TACON-Sui: A Topology-Aware and Cost-Optimized Networking Framework
                    <ul className="pl-6 mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Core Concepts and Design Principles</li>
                      <li>Network Topology and Cost Service (NTCS)</li>
                      <li>Topology-Aware Routing Module (TARM)</li>
                      <li>Smart Checkpoint Dissemination Protocol (SCDP)</li>
                      <li>SCION Integration for Advanced Path Selection</li>
                    </ul>
                  </li>
                  <li>
                    Implementation Architecture and API Design
                    <ul className="pl-6 mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>System Architecture Overview</li>
                      <li>Anemo RPC Interface Extensions</li>
                      <li>Cost Metrics and Measurement Framework</li>
                      <li>Dynamic Configuration and Policy Management</li>
                    </ul>
                  </li>
                  <li>
                    Anticipated Performance Gains and System Resilience
                    <ul className="pl-6 mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Quantitative Improvements</li>
                      <li>Latency and Throughput Analysis</li>
                      <li>Network Resilience Enhancements</li>
                      <li>Scalability Considerations</li>
                    </ul>
                  </li>
                  <li>
                    Enterprise Deployment and Integration
                    <ul className="pl-6 mt-1 space-y-1 list-disc list-inside text-muted-foreground">
                      <li>Deployment Strategies</li>
                      <li>Monitoring and Analytics</li>
                      <li>Security Considerations</li>
                      <li>Compliance and Governance</li>
                    </ul>
                  </li>
                  <li>Conclusion and Future Directions</li>
                  <li>References and Citations</li>
                </ol>
              </CardContent>
            </QuantumCard>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
