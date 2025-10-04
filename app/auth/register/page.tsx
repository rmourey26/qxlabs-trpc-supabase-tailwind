import { signUp } from "@/actions/auth"
import { QuantumCard } from "@/components/ui-extensions/quantum-card"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { QxLabsLogo } from "@/components/new-logo"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function RegisterPage() {
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
              <QuantumText>Create Account</QuantumText>
            </CardTitle>
            <CardDescription className="text-center">Sign up for a new account to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={signUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full_name">Full Name</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-quantum/30 focus:border-quantum"
                />
              </div>
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
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-background/50 border-quantum/30 focus:border-quantum"
                />
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
              </div>
              <QuantumButton className="w-full">Create Account</QuantumButton>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
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
