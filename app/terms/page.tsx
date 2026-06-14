import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Scale, Shield, CreditCard, ServerCrash, AlertTriangle, Handshake, FileText, Globe, Info } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | The Blockchain Company.io LLC",
  description: "Terms of Service for The Blockchain Company.io LLC — read our policies governing use of the QxLabs platform and services.",
}

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Welcome to The Blockchain Company.io LLC. By accessing or using our enterprise AI platform, services, APIs,
          or related technologies (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of
          Service (&quot;Terms&quot;). If you are using the Services on behalf of an organization, you represent and
          warrant that you have the authority to bind that organization to these Terms.
        </p>
        <p>
          If you do not agree to these Terms, you may not access or use the Services. We reserve the right to modify
          these Terms at any time, and such modifications will be effective immediately upon posting.
        </p>
      </div>
    ),
  },
  {
    id: "service-description",
    icon: Info,
    title: "2. Service Description",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          The Blockchain Company.io LLC provides an enterprise-grade AI platform combining Agent2Agent (A2A) Protocol
          integration, Canton Network blockchain infrastructure, AetherNet P2P framework, and proprietary AI tools
          designed to solve enterprise operational challenges. The Services include but are not limited to:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Asset Intelligence Suite and tokenization capabilities",
            "Private stablecoin deployment and treasury management",
            "AI-powered operations optimization and predictive maintenance",
            "Voice AI operations and multi-language support",
            "OAuth 2.1 enterprise authentication infrastructure",
            "API access and developer tools",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "account-security",
    icon: Shield,
    title: "3. Account Registration and Security",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          To access certain features of the Services, you must register for an account. You agree to:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Provide accurate, current, and complete information during registration",
            "Maintain and promptly update your account information",
            "Maintain the security of your account credentials",
            "Immediately notify The Blockchain Company.io LLC of any unauthorized use of your account",
            "Accept responsibility for all activities that occur under your account",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          You may not share your account credentials or allow others to access your account. The Blockchain
          Company.io LLC reserves the right to suspend or terminate accounts that violate these Terms or pose a
          security risk.
        </p>
      </div>
    ),
  },
  {
    id: "acceptable-use",
    icon: Scale,
    title: "4. Acceptable Use Policy",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Violate any applicable laws, regulations, or third-party rights",
            "Engage in any activity that could damage, disable, or impair the Services",
            "Attempt to gain unauthorized access to any portion of the Services",
            "Use the Services to transmit malware, viruses, or malicious code",
            "Reverse engineer, decompile, or disassemble any aspect of the Services",
            "Use the Services to compete with The Blockchain Company.io LLC or create similar products",
            "Remove, obscure, or alter any proprietary notices on the Services",
            "Use automated systems to access the Services without authorization",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-red-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    icon: Globe,
    title: "5. Intellectual Property Rights",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          The Services and all content, features, and functionality are owned by The Blockchain Company.io LLC and are
          protected by United States and international copyright, trademark, patent, trade secret, and other
          intellectual property laws. This includes but is not limited to:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Proprietary AI models and algorithms",
            "Software code, APIs, and technical architecture",
            "Canton Network and AetherNet implementations",
            "Documentation, training materials, and methodologies",
            "Trademarks, service marks, and brand identities",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Subject to your compliance with these Terms, The Blockchain Company.io LLC grants you a limited,
          non-exclusive, non-transferable, revocable license to access and use the Services for your internal
          business purposes.
        </p>
      </div>
    ),
  },
  {
    id: "data-privacy",
    icon: Shield,
    title: "6. Data and Privacy",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Your use of the Services is also governed by our{" "}
          <Link href="/privacy" className="text-quantum hover:underline">
            Privacy Policy
          </Link>
          , which describes how we collect, use, and protect your information. By using the Services, you consent to
          our data practices as described in the Privacy Policy.
        </p>
        <p>
          You retain all rights to your data and content that you submit to the Services (&quot;Customer Data&quot;).
          The Blockchain Company.io LLC will not use Customer Data except as necessary to provide the Services or as
          otherwise permitted by these Terms and the Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "7. Payment and Billing",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Enterprise plans and services are subject to the fees described in your service agreement or order form.
          You agree to pay all fees in accordance with the billing terms. Unless otherwise specified:
        </p>
        <ul className="space-y-2 ml-4">
          {[
            "Fees are payable in advance on a monthly or annual basis",
            "All fees are non-refundable except as required by law",
            "Fees may be increased upon 30 days' written notice",
            "Failure to pay may result in service suspension or termination",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          You are responsible for all taxes, duties, and assessments (except taxes based on The Blockchain
          Company.io LLC&apos;s net income).
        </p>
      </div>
    ),
  },
  {
    id: "availability",
    icon: ServerCrash,
    title: "8. Service Level and Availability",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          The Blockchain Company.io LLC strives to maintain high availability of the Services but does not guarantee
          uninterrupted access. We may perform scheduled maintenance and updates that temporarily affect service
          availability. Enterprise customers may be subject to separate Service Level Agreements (SLAs) as specified
          in their service agreements.
        </p>
        <p>
          The Blockchain Company.io LLC reserves the right to modify, suspend, or discontinue any aspect of the
          Services at any time with reasonable notice.
        </p>
      </div>
    ),
  },
  {
    id: "warranties",
    icon: AlertTriangle,
    title: "9. Warranties and Disclaimers",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className="uppercase text-xs font-mono tracking-wide text-foreground/80 bg-background/50 border border-quantum/20 rounded p-4">
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, THE BLOCKCHAIN COMPANY.IO LLC DISCLAIMS
          ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          The Blockchain Company.io LLC does not warrant that the Services will be uninterrupted, error-free, or
          secure. You acknowledge that your use of the Services is at your own risk.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "10. Limitation of Liability",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p className="uppercase text-xs font-mono tracking-wide text-foreground/80 bg-background/50 border border-quantum/20 rounded p-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE BLOCKCHAIN COMPANY.IO LLC SHALL NOT BE LIABLE FOR ANY INDIRECT,
          INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
          INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
        </p>
        <p>
          In no event shall The Blockchain Company.io LLC&apos;s total liability exceed the amount you paid to The
          Blockchain Company.io LLC in the twelve (12) months preceding the event giving rise to liability, or one
          thousand dollars ($1,000), whichever is greater.
        </p>
      </div>
    ),
  },
  {
    id: "indemnification",
    icon: Handshake,
    title: "11. Indemnification",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          You agree to indemnify, defend, and hold harmless The Blockchain Company.io LLC and its officers, directors,
          employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from
          your use of the Services, violation of these Terms, or infringement of any third-party rights.
        </p>
      </div>
    ),
  },
  {
    id: "termination",
    icon: FileText,
    title: "12. Term and Termination",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          These Terms commence when you first access the Services and continue until terminated. Either party may
          terminate for convenience with thirty (30) days&apos; written notice. The Blockchain Company.io LLC may
          terminate immediately for cause, including breach of these Terms.
        </p>
        <p>
          Upon termination, your right to access the Services ceases immediately. Sections that by their nature should
          survive termination shall survive, including intellectual property provisions, disclaimers, and limitations
          of liability.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "13. Governing Law and Dispute Resolution",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without
          regard to its conflict of law provisions. Any disputes arising from these Terms or the Services shall be
          resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
        </p>
        <p>
          You waive any right to participate in a class action lawsuit or class-wide arbitration against The
          Blockchain Company.io LLC.
        </p>
      </div>
    ),
  },
  {
    id: "general",
    icon: FileText,
    title: "14. General Provisions",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <div className="space-y-3">
          <div className="border-l-4 border-quantum/50 pl-4">
            <span className="font-medium text-foreground">Entire Agreement: </span>
            These Terms constitute the entire agreement between you and The Blockchain Company.io LLC regarding the
            Services and supersede all prior agreements.
          </div>
          <div className="border-l-4 border-quantum/50 pl-4">
            <span className="font-medium text-foreground">Severability: </span>
            If any provision is found unenforceable, the remaining provisions will remain in full effect.
          </div>
          <div className="border-l-4 border-quantum/50 pl-4">
            <span className="font-medium text-foreground">No Waiver: </span>
            The Blockchain Company.io LLC&apos;s failure to enforce any right or provision shall not constitute a
            waiver of such right or provision.
          </div>
          <div className="border-l-4 border-quantum/50 pl-4">
            <span className="font-medium text-foreground">Assignment: </span>
            You may not assign these Terms without The Blockchain Company.io LLC&apos;s prior written consent. The
            Blockchain Company.io LLC may assign these Terms without restriction.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    icon: Globe,
    title: "15. Contact Information",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>If you have questions about these Terms, please contact us at:</p>
        <div className="bg-background/50 border border-quantum/20 rounded-lg p-6 space-y-2">
          <p className="font-semibold text-foreground">The Blockchain Company.io LLC</p>
          <p>
            Email:{" "}
            <a href="mailto:legal@theblockchaincompany.io" className="text-quantum hover:underline">
              legal@theblockchaincompany.io
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://theblockchaincompany.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum hover:underline"
            >
              theblockchaincompany.io
            </a>
          </p>
        </div>
      </div>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixBackground density={0.008} />
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
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-quantum/10 border border-quantum/30 rounded-full px-4 py-1.5 text-sm text-quantum mb-6">
                <Scale className="h-3.5 w-3.5" />
                Legal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                <QuantumText>Terms of Service</QuantumText>
              </h1>
              <p className="text-muted-foreground text-lg">
                Last Updated: <span className="text-foreground font-medium">January 31, 2026</span>
              </p>
            </div>

            {/* Table of Contents */}
            <QuantumCard className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FileText className="h-4 w-4 text-quantum" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-muted-foreground hover:text-quantum transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </QuantumCard>

            {/* Sections */}
            <div className="space-y-6">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <QuantumCard key={section.id} id={section.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-quantum flex-shrink-0" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{section.content}</CardContent>
                  </QuantumCard>
                )
              })}
            </div>

            {/* Footer note */}
            <div className="mt-10 text-center text-sm text-muted-foreground">
              <p>
                By using our Services you acknowledge you have read and understood these Terms.{" "}
                <Link href="/privacy" className="text-quantum hover:underline">
                  View our Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
