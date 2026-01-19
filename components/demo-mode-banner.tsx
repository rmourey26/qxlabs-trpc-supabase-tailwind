"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Link from "next/link"

export function DemoModeBanner() {
  // Check if we're in demo mode on the client side
  const isDemoMode =
    typeof window !== "undefined" &&
    (!process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_URL === "your_supabase_project_url")

  if (!isDemoMode) return null

  return (
    <Alert className="border-quantum/50 bg-quantum/5 mb-6">
      <Info className="h-4 w-4 text-quantum" />
      <AlertTitle className="text-quantum">Demo Mode Active</AlertTitle>
      <AlertDescription className="text-muted-foreground">
        You're viewing this template in demo mode with mock data. To enable full functionality,{" "}
        <Link
          href="https://github.com/rmourey26/qxlabs-trpc-supabase-tailwind#setup"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-quantum"
        >
          configure your environment variables
        </Link>
        . You can explore the UI and test the login with demo credentials: email:{" "}
        <code className="text-quantum text-xs">demo@example.com</code>, password:{" "}
        <code className="text-quantum text-xs">demo123</code>
      </AlertDescription>
    </Alert>
  )
}
