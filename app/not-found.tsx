import Link from "next/link"
import { QuantumButton } from "@/components/ui-extensions/quantum-button"
import { QuantumText } from "@/components/ui-extensions/quantum-text"
import { MatrixBackground } from "@/components/ui-extensions/matrix-background"
import { QxLabsLogo } from "@/components/new-logo"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative p-4">
      <MatrixBackground density={0.03} />
      <div className="z-10 text-center">
        <QxLabsLogo size="lg" />
        <h1 className="mt-8 text-6xl md:text-8xl font-bold">
          <QuantumText>404</QuantumText>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold">Page Not Found</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          The quantum realm you're looking for doesn't exist or has been moved to another dimension.
        </p>
        <div className="mt-8">
          <Link href="/">
            <QuantumButton size="lg" glowEffect>
              Return Home
            </QuantumButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
