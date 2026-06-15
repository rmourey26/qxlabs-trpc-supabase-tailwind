import Link from "next/link"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { HexContainer } from "@/components/ui-extensions/hex-container"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Database,
  Zap,
  Palette,
  Shield,
  Layers,
  Sparkles,
  Rocket,
  GitBranch,
  Server,
  Lock,
  Globe,
} from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground density={0.02} />
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HexContainer size="sm" className="bg-quantum/20">
              <Code2 className="text-quantum h-5 w-5" />
            </HexContainer>
            <span className="text-xl font-bold">
              <QuantumText>QxLabs Template</QuantumText>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-quantum transition-colors">
              Features
            </Link>
            <Link href="#stack" className="text-foreground hover:text-quantum transition-colors">
              Tech Stack
            </Link>
            <Link href="#components" className="text-foreground hover:text-quantum transition-colors">
              Components
            </Link>
            <Link href="#getting-started" className="text-foreground hover:text-quantum transition-colors">
              Get Started
            </Link>
            <Link href="#about" className="text-foreground hover:text-quantum transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-foreground hover:text-quantum transition-colors">
              Demo
            </Link>
            <Link
              href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <QuantumButton>View on GitHub</QuantumButton>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <HexContainer size="lg" className="bg-quantum/10 mx-auto">
                <Sparkles className="text-quantum h-12 w-12" />
              </HexContainer>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              <QuantumText>Next.js Full-Stack Template</QuantumText>
              <br />
              <span className="text-foreground">with Quantum Design System</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto text-pretty">
              Production-ready template featuring Next.js 15, tRPC, Supabase, and a stunning custom Tailwind theme.
              Build modern web applications with type-safety and beautiful UI out of the box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#getting-started">
                <QuantumButton size="lg" glowEffect>
                  Get Started
                </QuantumButton>
              </Link>
              <Link href="#components">
                <QuantumButton size="lg" variant="outline">
                  Explore Components
                </QuantumButton>
              </Link>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>Next.js 15</QuantumText>
              </h3>
              <p className="text-sm text-muted-foreground">App Router</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>tRPC</QuantumText>
              </h3>
              <p className="text-sm text-muted-foreground">Type-Safe API</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>Supabase</QuantumText>
              </h3>
              <p className="text-sm text-muted-foreground">Database & Auth</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-6 text-center quantum-border">
              <h3 className="text-3xl font-bold mb-2">
                <QuantumText>Tailwind</QuantumText>
              </h3>
              <p className="text-sm text-muted-foreground">Custom Theme</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Everything You Need</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive full-stack template with modern tooling and best practices built-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>Optimized for performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built on Next.js 15 with App Router, React Server Components, and optimized bundling for blazing
                    fast load times.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Type-Safe</CardTitle>
                  <CardDescription>End-to-end TypeScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full TypeScript support with tRPC for type-safe API calls. Catch errors at compile time, not
                    runtime.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Database className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Database Ready</CardTitle>
                  <CardDescription>Supabase integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pre-configured Supabase client with authentication, database queries, and real-time subscriptions
                    ready to go.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Quantum Theme</CardTitle>
                  <CardDescription>Custom design system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beautiful custom Tailwind theme with quantum-inspired components, animations, and color palette.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Auth Built-In</CardTitle>
                  <CardDescription>Secure authentication</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete authentication system with Supabase Auth, including login, signup, and protected routes.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard glowEffect>
                <CardHeader>
                  <div className="w-12 h-12 bg-quantum/10 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="text-quantum h-6 w-6" />
                  </div>
                  <CardTitle>Demo Mode</CardTitle>
                  <CardDescription>Try before you configure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore the template without setting up environment variables. Demo mode with mock data included.
                  </p>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="stack" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Modern Tech Stack</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built with the latest and greatest tools for modern web development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <QuantumCard dataStream>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="text-quantum" />
                    Frontend & Backend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">Next.js 15</h4>
                    <p className="text-sm text-muted-foreground">
                      React framework with App Router, Server Components, and Server Actions for optimal performance.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">tRPC</h4>
                    <p className="text-sm text-muted-foreground">
                      End-to-end type-safe APIs without code generation. Automatic type inference from server to client.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">TypeScript</h4>
                    <p className="text-sm text-muted-foreground">
                      Full type safety across your entire application with strict mode enabled.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">React 19</h4>
                    <p className="text-sm text-muted-foreground">
                      Latest React features including Server Components and improved hooks.
                    </p>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard dataStream>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="text-quantum" />
                    Database & Styling
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">Supabase</h4>
                    <p className="text-sm text-muted-foreground">
                      PostgreSQL database with real-time subscriptions, authentication, and storage built-in.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">Tailwind CSS</h4>
                    <p className="text-sm text-muted-foreground">
                      Utility-first CSS with custom quantum theme, design tokens, and responsive utilities.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">shadcn/ui</h4>
                    <p className="text-sm text-muted-foreground">
                      Beautiful, accessible components built with Radix UI and customized with quantum theme.
                    </p>
                  </div>
                  <div className="border-l-4 border-quantum pl-4">
                    <h4 className="font-bold mb-1">Framer Motion</h4>
                    <p className="text-sm text-muted-foreground">
                      Smooth animations and transitions for enhanced user experience.
                    </p>
                  </div>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </section>

        {/* Components Showcase */}
        <section id="components" className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Quantum Components</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Custom-built components with the quantum theme for a unique, futuristic aesthetic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <QuantumCard>
                <CardHeader>
                  <CardTitle>QuantumButton</CardTitle>
                  <CardDescription>Interactive buttons with glow effects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <QuantumButton>Default</QuantumButton>
                    <QuantumButton variant="outline">Outline</QuantumButton>
                    <QuantumButton variant="ghost">Ghost</QuantumButton>
                    <QuantumButton glowEffect>With Glow</QuantumButton>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Multiple variants with hover animations and optional glow effects powered by Framer Motion.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle>QuantumCard</CardTitle>
                  <CardDescription>Elevated cards with quantum styling</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Cards with backdrop blur, quantum borders, optional glow effects, and data stream animations.
                  </p>
                  <div className="bg-quantum/5 border border-quantum/20 rounded-lg p-4">
                    <p className="text-sm">This card has quantum borders and subtle animations on hover.</p>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle>QuantumText</CardTitle>
                  <CardDescription>Gradient text with quantum colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    <QuantumText>Beautiful Gradient Text</QuantumText>
                  </h3>
                  <p className="text-muted-foreground">
                    Apply stunning gradient effects to any text using the quantum color palette.
                  </p>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle>HexContainer</CardTitle>
                  <CardDescription>Hexagonal containers for icons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 items-center mb-4">
                    <HexContainer size="sm" className="bg-quantum/20">
                      <Code2 className="text-quantum h-4 w-4" />
                    </HexContainer>
                    <HexContainer size="md" className="bg-quantum/20">
                      <Database className="text-quantum h-5 w-5" />
                    </HexContainer>
                    <HexContainer size="lg" className="bg-quantum/20">
                      <Zap className="text-quantum h-6 w-6" />
                    </HexContainer>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Geometric hexagonal shapes perfect for icons and logos.
                  </p>
                </CardContent>
              </QuantumCard>
            </div>

            <QuantumCard glowEffect>
              <CardHeader>
                <CardTitle>MatrixBackground</CardTitle>
                <CardDescription>Animated background with matrix-style effects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The animated background you see on this page is the MatrixBackground component. It creates a subtle,
                  flowing matrix effect that adds depth and movement to your pages without being distracting.
                  Configurable density and color options available.
                </p>
              </CardContent>
            </QuantumCard>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>Get Started in Minutes</QuantumText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Clone the template and start building your next project with a solid foundation.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-quantum rounded-full flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                    <div>
                      <CardTitle>Clone the Repository</CardTitle>
                      <CardDescription>Get the template code</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/50 border border-quantum/20 rounded-lg p-4 font-mono text-sm">
                    <code className="text-quantum">
                      git clone https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind.git
                    </code>
                    <br />
                    <code className="text-quantum">cd qxlabs-trpc-supabase-tailwind</code>
                    <br />
                    <code className="text-quantum">npm install</code>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-quantum rounded-full flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                    <div>
                      <CardTitle>Configure Environment (Optional)</CardTitle>
                      <CardDescription>Set up Supabase for full functionality</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The template works in demo mode without configuration. For full functionality, add your Supabase
                    credentials. Supabase now uses <strong>publishable</strong> and <strong>secret</strong> keys —
                    find them under <code className="text-quantum bg-background/50 px-1 rounded">Settings &gt; API Keys</code> in
                    your Supabase dashboard.
                  </p>
                  <div className="bg-background/50 border border-quantum/20 rounded-lg p-4 font-mono text-sm space-y-2 mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-sans">New API Keys (recommended)</p>
                    <code className="text-muted-foreground block">NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url</code>
                    <code className="text-muted-foreground block">NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...</code>
                    <code className="text-muted-foreground block">SUPABASE_SECRET_KEY=sb_secret_...</code>
                  </div>
                  <div className="bg-background/50 border border-quantum/20 rounded-lg p-4 font-mono text-sm space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-sans">Legacy Keys (deprecated end of 2026)</p>
                    <code className="text-muted-foreground block">NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url</code>
                    <code className="text-muted-foreground block">NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key</code>
                    <code className="text-muted-foreground block">SUPABASE_SERVICE_ROLE_KEY=your_service_role_key</code>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-quantum rounded-full flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                    <div>
                      <CardTitle>Start Development</CardTitle>
                      <CardDescription>Run the development server</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/50 border border-quantum/20 rounded-lg p-4 font-mono text-sm mb-4">
                    <code className="text-quantum">npm run dev</code>
                  </div>
                  <p className="text-muted-foreground">
                    Open <code className="text-quantum bg-background/50 px-2 py-1 rounded">http://localhost:3000</code>{" "}
                    to see your app running!
                  </p>
                </CardContent>
              </QuantumCard>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Check out the README.md file for detailed documentation and advanced configuration options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <QuantumButton size="lg" glowEffect>
                    <GitBranch className="mr-2 h-5 w-5" />
                    View on GitHub
                  </QuantumButton>
                </Link>
                <Link href="/auth/login">
                  <QuantumButton size="lg" variant="outline">
                    Try Demo Mode
                  </QuantumButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background/80">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <QuantumText>What's Included</QuantumText>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Code2, text: "TypeScript configuration" },
                { icon: Server, text: "tRPC API setup" },
                { icon: Database, text: "Supabase integration" },
                { icon: Lock, text: "Authentication system" },
                { icon: Palette, text: "Custom Tailwind theme" },
                { icon: Sparkles, text: "Quantum components" },
                { icon: GitBranch, text: "Git-friendly structure" },
                { icon: Globe, text: "SEO optimized" },
                { icon: Zap, text: "Performance optimized" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-quantum/20 rounded-lg p-4 quantum-border"
                >
                  <item.icon className="text-quantum h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <QuantumText>Ready to Build Something Amazing?</QuantumText>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Start your next project with a production-ready template that includes everything you need to ship fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <QuantumButton size="lg" glowEffect>
                  <GitBranch className="mr-2 h-5 w-5" />
                  Get Started Now
                </QuantumButton>
              </Link>
              <Link href="#components">
                <QuantumButton size="lg" variant="outline">
                  Explore Components
                </QuantumButton>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
