"use client"

import { useState } from "react"
import { signIn } from "@/actions/auth"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { QxLabsLogo } from "@/components/new-logo"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    console.log("[v0] Login form submitted")
    setIsLoading(true)

    try {
      const result = await signIn(formData)

      // If we get a result back, it means there was an error
      // (successful login would redirect and not return anything)
      if (result?.error) {
        toast({
          title: "Sign in failed",
          description: result.error,
          variant: "destructive",
        })
      } else if (result?.success) {
        toast({
          title: "Success",
          description: result.success,
        })
      }
    } catch (error) {
      // The redirect from successful login will cause this catch block to run
      // We can ignore redirect errors as they're expected
      console.log("[v0] Redirect occurred (this is expected for successful login)")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <MatrixBackground density={0.02} />
      <div className="w-full max-w-md relative z-50 pointer-events-auto">
        <div className="flex justify-center mb-8">
          <QxLabsLogo size="lg" />
        </div>

        <Alert className="border-quantum/50 bg-quantum/5 mb-4">
          <Info className="h-4 w-4 text-quantum" />
          <AlertDescription className="text-sm text-muted-foreground">
            <strong className="text-quantum">Demo Mode:</strong> Test the application with email:{" "}
            <code className="text-quantum">demo@example.com</code> and password:{" "}
            <code className="text-quantum">demo123</code>
          </AlertDescription>
        </Alert>

        <QuantumCard glowEffect>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <QuantumText>Sign In</QuantumText>
            </CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={isLoading}
                  className="bg-background/50 border-quantum/30 focus:border-quantum relative z-10"
                  onClick={() => console.log("[v0] Email input clicked")}
                  onFocus={() => console.log("[v0] Email input focused")}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/forgot-password" className="text-sm text-quantum hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="bg-background/50 border-quantum/30 focus:border-quantum relative z-10"
                  onClick={() => console.log("[v0] Password input clicked")}
                  onFocus={() => console.log("[v0] Password input focused")}
                />
              </div>
              <QuantumButton
                type="submit"
                className="w-full relative z-10"
                disabled={isLoading}
                onClick={() => console.log("[v0] Submit button clicked")}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </QuantumButton>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-quantum hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </QuantumCard>
      </div>
    </div>
  )
}
