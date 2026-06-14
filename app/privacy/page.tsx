import Link from "next/link"
import { QxLabsLogo } from "@/components/new-logo"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Shield,
  Database,
  Share2,
  Lock,
  Clock,
  Cookie,
  UserCheck,
  Globe,
  Baby,
  MapPin,
  RefreshCw,
  Mail,
  FileText,
} from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | The Blockchain Company.io LLC",
  description:
    "Privacy Policy for The Blockchain Company.io LLC — learn how we collect, use, and protect your personal information.",
}

const sections = [
  {
    id: "introduction",
    icon: Shield,
    title: "1. Introduction",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          The Blockchain Company.io LLC (&quot;The Blockchain Company.io LLC,&quot; &quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our enterprise AI platform, services, and related
          technologies (collectively, the &quot;Services&quot;).
        </p>
        <p>
          By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our policies
          and practices, please do not use our Services.
        </p>
      </div>
    ),
  },
  {
    id: "information-collected",
    icon: Database,
    title: "2. Information We Collect",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">2.1 Information You Provide</h3>
          <ul className="space-y-2 ml-4">
            {[
              "Account Information: Name, email address, company name, job title, phone number, and billing information",
              "Customer Data: Assets, transaction data, operational information, and other content you upload or generate using our Services",
              "Communications: Information you provide when contacting our support team or participating in surveys",
              "Payment Information: Credit card details and billing addresses processed through secure third-party payment processors",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-quantum mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">2.2 Automatically Collected Information</h3>
          <ul className="space-y-2 ml-4">
            {[
              "Usage Data: API calls, feature usage, performance metrics, error logs, and system diagnostics",
              "Device Information: IP addresses, browser types, operating systems, device identifiers, and time zones",
              "Cookies and Tracking: Session data, preferences, and analytics information (see Section 8)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-quantum mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">2.3 Third-Party Sources</h3>
          <p>
            We may receive information about you from third-party services you connect to our platform, including
            Canton Network, Supabase authentication, and integrated blockchain services.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    icon: FileText,
    title: "3. How We Use Your Information",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>We use the information we collect to:</p>
        <ul className="space-y-2 ml-4">
          {[
            "Provide, maintain, and improve our Services",
            "Process transactions and manage your account",
            "Develop and train our AI models and algorithms",
            "Provide customer support and respond to inquiries",
            "Send administrative information, updates, and security alerts",
            "Monitor and analyze usage patterns and trends",
            "Detect, prevent, and address technical issues and security threats",
            "Comply with legal obligations and enforce our Terms of Service",
            "Conduct research and development for new features",
            "Send marketing communications (with your consent)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "gdpr",
    icon: Globe,
    title: "4. Legal Basis for Processing (GDPR)",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          If you are located in the European Economic Area (EEA), our legal basis for collecting and using your
          personal information depends on the data and context:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              label: "Contract Performance",
              desc: "Processing necessary to provide Services under our agreement with you",
            },
            {
              label: "Legitimate Interests",
              desc: "Improving Services, preventing fraud, and ensuring security",
            },
            {
              label: "Legal Compliance",
              desc: "Fulfilling regulatory requirements and legal obligations",
            },
            {
              label: "Consent",
              desc: "Marketing communications and optional features requiring explicit consent",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-background/50 border border-quantum/20 rounded-lg p-4"
            >
              <p className="font-medium text-foreground mb-1">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "sharing",
    icon: Share2,
    title: "5. How We Share Your Information",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          We do not sell your personal information. We may share your information in the following circumstances:
        </p>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">5.1 Service Providers</h3>
          <p className="mb-3">
            We share information with trusted third-party service providers who perform services on our behalf:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Cloud infrastructure providers (Vercel, Supabase)",
              "Payment processors (Stripe)",
              "Email service providers (Resend)",
              "Analytics and monitoring services",
              "Blockchain infrastructure providers (Canton Network)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-quantum mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">5.2 Business Transfers</h3>
          <p>
            If The Blockchain Company.io LLC is involved in a merger, acquisition, or sale of assets, your
            information may be transferred as part of that transaction.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">5.3 Legal Requirements</h3>
          <p className="mb-3">We may disclose information when required by law or to:</p>
          <ul className="space-y-2 ml-4">
            {[
              "Comply with legal processes or government requests",
              "Enforce our Terms of Service and other agreements",
              "Protect the rights, property, or safety of The Blockchain Company.io LLC, our users, or others",
              "Prevent fraud, security breaches, or illegal activities",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-quantum mt-1 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "6. Data Security",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>We implement robust security measures to protect your information:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Encryption", desc: "Data encrypted in transit (TLS 1.3) and at rest (AES-256)" },
            {
              label: "Authentication",
              desc: "OAuth 2.1 with PKCE flow and multi-factor authentication support",
            },
            {
              label: "Access Controls",
              desc: "Role-based access control (RBAC) and principle of least privilege",
            },
            { label: "Monitoring", desc: "Continuous security monitoring and intrusion detection" },
            { label: "Compliance", desc: "SOC 2 Type II certified security practices" },
            {
              label: "Incident Response",
              desc: "Documented procedures for security breach notification",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-background/50 border border-quantum/20 rounded-lg p-4"
            >
              <p className="font-medium text-foreground mb-1">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>
          While we strive to protect your information, no security system is impenetrable. You are responsible for
          maintaining the confidentiality of your account credentials.
        </p>
      </div>
    ),
  },
  {
    id: "retention",
    icon: Clock,
    title: "7. Data Retention",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          We retain your information for as long as necessary to provide Services and fulfill the purposes outlined in
          this Privacy Policy. Retention periods vary based on:
        </p>
        <div className="space-y-3">
          {[
            {
              label: "Account Data",
              desc: "Retained while your account is active plus 90 days after termination",
            },
            {
              label: "Customer Data",
              desc: "Retained according to your subscription agreement or data retention settings",
            },
            {
              label: "Transaction Records",
              desc: "Retained for 7 years to comply with financial regulations",
            },
            {
              label: "Logs and Analytics",
              desc: "Typically retained for 13 months for operational purposes",
            },
          ].map((item) => (
            <div key={item.label} className="border-l-4 border-quantum/50 pl-4">
              <span className="font-medium text-foreground">{item.label}: </span>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
        <p>We may retain anonymized or aggregated data indefinitely for analytics and research purposes.</p>
      </div>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "8. Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>We use cookies and similar technologies to:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              label: "Essential Cookies",
              desc: "Required for authentication and basic functionality",
            },
            {
              label: "Analytics Cookies",
              desc: "Help us understand how users interact with our Services",
            },
            {
              label: "Preference Cookies",
              desc: "Remember your settings and customization choices",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-background/50 border border-quantum/20 rounded-lg p-4"
            >
              <p className="font-medium text-foreground mb-1">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p>
          You can control cookies through your browser settings, but disabling certain cookies may limit
          functionality.
        </p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "9. Your Privacy Rights",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Depending on your location, you may have the following rights:</p>
        <ul className="space-y-2 ml-4">
          {[
            "Access: Request access to your personal information",
            "Correction: Request correction of inaccurate information",
            "Deletion: Request deletion of your information (subject to legal obligations)",
            "Portability: Request a copy of your data in a structured format",
            "Objection: Object to processing based on legitimate interests",
            "Restriction: Request restricted processing in certain circumstances",
            "Withdraw Consent: Withdraw consent for processing requiring consent",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@theblockchaincompany.io" className="text-quantum hover:underline">
            privacy@theblockchaincompany.io
          </a>
          . We will respond within 30 days.
        </p>
      </div>
    ),
  },
  {
    id: "international",
    icon: Globe,
    title: "10. International Data Transfers",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          The Blockchain Company.io LLC is based in the United States. If you access our Services from outside the
          U.S., your information may be transferred to, stored, and processed in the United States and other
          countries.
        </p>
        <p>
          We implement appropriate safeguards for international transfers, including Standard Contractual Clauses
          (SCCs) approved by the European Commission for transfers from the EEA.
        </p>
      </div>
    ),
  },
  {
    id: "children",
    icon: Baby,
    title: "11. Children's Privacy",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal
          information from children. If you become aware that a child has provided us with personal information,
          please contact us immediately.
        </p>
      </div>
    ),
  },
  {
    id: "california",
    icon: MapPin,
    title: "12. California Privacy Rights",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>California residents have additional rights under the California Consumer Privacy Act (CCPA):</p>
        <ul className="space-y-2 ml-4">
          {[
            "Right to know what personal information is collected, used, shared, or sold",
            "Right to delete personal information (subject to exceptions)",
            "Right to opt-out of the sale of personal information (we do not sell data)",
            "Right to non-discrimination for exercising CCPA rights",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-quantum mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          To exercise these rights, email{" "}
          <a href="mailto:privacy@theblockchaincompany.io" className="text-quantum hover:underline">
            privacy@theblockchaincompany.io
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "13. Changes to This Privacy Policy",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          We may update this Privacy Policy periodically. We will notify you of material changes by posting the new
          policy on this page and updating the &quot;Last Updated&quot; date. For significant changes, we will provide
          additional notice such as email notification.
        </p>
      </div>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "14. Contact Us",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-background/50 border border-quantum/20 rounded-lg p-6 space-y-2">
          <p className="font-semibold text-foreground">The Blockchain Company.io LLC</p>
          <p>
            Email:{" "}
            <a href="mailto:privacy@theblockchaincompany.io" className="text-quantum hover:underline">
              privacy@theblockchaincompany.io
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
          <p>
            Data Protection Officer:{" "}
            <a href="mailto:dpo@theblockchaincompany.io" className="text-quantum hover:underline">
              dpo@theblockchaincompany.io
            </a>
          </p>
        </div>
        <p className="text-sm">
          Additional Resources: For more information about our security practices, visit our Security page. For
          service terms, see our{" "}
          <Link href="/terms" className="text-quantum hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    ),
  },
]

export default function PrivacyPage() {
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
                <Shield className="h-3.5 w-3.5" />
                Legal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                <QuantumText>Privacy Policy</QuantumText>
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
                Your privacy matters to us. Questions?{" "}
                <a href="mailto:privacy@theblockchaincompany.io" className="text-quantum hover:underline">
                  Contact our privacy team
                </a>
                .{" "}
                <Link href="/terms" className="text-quantum hover:underline">
                  View our Terms of Service
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
