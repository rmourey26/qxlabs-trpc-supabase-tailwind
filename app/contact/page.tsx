"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, Send, Github, Twitter } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "Our team will contact you within 24 hours to discuss TACON-Sui integration.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        interest: "",
        message: "",
      })
    }, 1500)
  }

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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <QuantumText>Partner with TACON-Sui</QuantumText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the next evolution of Sui blockchain networking. Connect with our team to explore integration
                opportunities and early access programs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuantumCard>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Connect with the TACON-Sui development team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-quantum/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-quantum" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">inquiry@qxlabs.io</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        For technical inquiries and partnership discussions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-quantum/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 text-quantum" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-muted-foreground">github.com/qxlabs-dlt</p>
                      <p className="text-sm text-muted-foreground mt-1">Open source development and contributions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-quantum/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Twitter className="h-5 w-5 text-quantum" />
                    </div>
                    <div>
                      <h3 className="font-medium">Twitter</h3>
                      <p className="text-muted-foreground">@qxlabsdao</p>
                      <p className="text-sm text-muted-foreground mt-1">Latest updates and community discussions</p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-quantum/20">
                    <h3 className="font-medium mb-4">Current Development Status</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phase:</span>
                        <span>Foundation Development</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target Network:</span>
                        <span>Sui Mainnet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Early Access:</span>
                        <span>Q2 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Production Ready:</span>
                        <span>Q4 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-quantum/20">
                    <h3 className="font-medium mb-4">Integration Opportunities</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quantum rounded-full"></div>
                        <span className="text-sm">Validator Node Optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quantum rounded-full"></div>
                        <span className="text-sm">Enterprise Blockchain Infrastructure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quantum rounded-full"></div>
                        <span className="text-sm">DeFi Protocol Enhancement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-quantum rounded-full"></div>
                        <span className="text-sm">Research Collaboration</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle>Partnership Inquiry</CardTitle>
                  <CardDescription>Tell us about your interest in TACON-Sui</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          required
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Select value={formData.role} onValueChange={handleSelectChange("role")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cto">CTO / Technical Lead</SelectItem>
                            <SelectItem value="developer">Blockchain Developer</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="validator">Validator Operator</SelectItem>
                            <SelectItem value="investor">Investor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Primary Interest</Label>
                      <Select value={formData.interest} onValueChange={handleSelectChange("interest")}>
                        <SelectTrigger>
                          <SelectValue placeholder="What interests you most about TACON-Sui?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="validator_optimization">Validator Node Optimization</SelectItem>
                          <SelectItem value="enterprise_integration">Enterprise Integration</SelectItem>
                          <SelectItem value="research_collaboration">Research Collaboration</SelectItem>
                          <SelectItem value="early_access">Early Access Program</SelectItem>
                          <SelectItem value="investment">Investment Opportunity</SelectItem>
                          <SelectItem value="technical_partnership">Technical Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your use case, technical requirements, or how you'd like to collaborate with TACON-Sui..."
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-center pt-4">
                      <QuantumButton type="submit" disabled={isSubmitting} size="lg">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4 animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        )}
                      </QuantumButton>
                    </div>
                  </form>
                </CardContent>
              </QuantumCard>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <QuantumCard>
                <CardHeader>
                  <CardTitle className="text-center">Validators</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Optimize your Sui validator performance with intelligent network routing and reduced latency.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 40-60% latency reduction [^1]</li>
                    <li>• Enhanced network resilience</li>
                    <li>• Automated path optimization</li>
                    <li>• Real-time performance monitoring</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle className="text-center">Enterprises</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Deploy mission-critical blockchain applications with guaranteed performance and compliance.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• SLA-compliant networking</li>
                    <li>• Geographic policy enforcement</li>
                    <li>• Enterprise-grade monitoring</li>
                    <li>• Seamless integration support</li>
                  </ul>
                </CardContent>
              </QuantumCard>

              <QuantumCard>
                <CardHeader>
                  <CardTitle className="text-center">Researchers</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Collaborate on cutting-edge blockchain networking research and contribute to the Sui ecosystem.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Open source development</li>
                    <li>• Academic partnerships</li>
                    <li>• Research grants available</li>
                    <li>• Publication opportunities</li>
                  </ul>
                </CardContent>
              </QuantumCard>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
