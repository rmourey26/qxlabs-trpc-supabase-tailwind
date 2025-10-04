import { resetPassword } from "@/actions/auth"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { QxLabsLogo } from "@/components/new-logo"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <MatrixBackground density={0.02} />
      <div className="w-full max-w-md z-10">
        <div className="flex justify-center mb-8">
          <QxLabsLogo size="lg" />
        </div>
        <QuantumCard glowEffect>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <QuantumText>Reset Password</QuantumText>
            </CardTitle>
            <CardDescription className="text-center">Enter your email to receive a password reset link</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={resetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-background/50 border-quantum/30 focus:border-quantum"
                />
              </div>
              <QuantumButton className="w-full">Send Reset Link</QuantumButton>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/auth/login" className="text-quantum hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </QuantumCard>
      </div>
    </div>
  )
}
