import type React from "react"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TRPCProvider } from "@/providers/trpc-provider"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-quantum",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "QxLabs Template | Built by The Blockchain Company.io LLC",
  description:
    "A production-ready Next.js template engineered by Robert Mourey Jr. at The Blockchain Company.io LLC — featuring tRPC, Supabase, and a quantum-inspired design system. Built for teams who demand type-safety, security, and a modern developer experience. Custom software engineering and architectural services available at kronova.io.",
  keywords: [
    "QxLabs",
    "Next.js template",
    "tRPC",
    "Supabase",
    "Tailwind CSS",
    "The Blockchain Company",
    "Robert Mourey Jr.",
    "custom software engineering",
    "blockchain architecture",
    "post-quantum cryptography",
    "AetherNet",
    "Kronova",
    "full-stack development",
    "enterprise integrations",
  ],
  authors: [
    {
      name: "Robert Mourey Jr. — The Blockchain Company.io LLC",
      url: "https://kronova.io",
    },
  ],
  creator: "The Blockchain Company.io LLC",
  metadataBase: new URL("https://qxlabs.theblockchain.company"),
  openGraph: {
    title: "QxLabs Template | Built by The Blockchain Company.io LLC",
    description:
      "Production-ready Next.js + tRPC + Supabase template engineered by The Blockchain Company.io LLC. Custom software engineering and architectural services available at kronova.io.",
    type: "website",
    url: "https://qxlabs.theblockchain.company",
    siteName: "QxLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "QxLabs Template | Built by The Blockchain Company.io LLC",
    description:
      "Production-ready Next.js + tRPC + Supabase template engineered by The Blockchain Company.io LLC. Custom software engineering and architectural services at kronova.io.",
    creator: "@theblockchainco",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TRPCProvider>
            {children}
            <Toaster />
          </TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
