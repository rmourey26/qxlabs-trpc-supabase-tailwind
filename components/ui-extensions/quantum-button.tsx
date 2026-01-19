"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface QuantumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "hex" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  glowEffect?: boolean
  className?: string
}

export function QuantumButton({
  children,
  variant = "default",
  size = "default",
  glowEffect = false,
  className,
  ...props
}: QuantumButtonProps) {
  if (variant === "hex") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn("hex-button py-2 px-6", glowEffect && "shadow-quantum-glow", className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }

  const getVariantClasses = () => {
    switch (variant) {
      case "default":
        return "bg-[hsl(var(--quantum))] hover:bg-[hsl(var(--quantum-muted))] text-[hsl(var(--quantum-foreground))] shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300"
      case "outline":
        return "border-2 border-[hsl(var(--quantum))] text-[hsl(var(--quantum))] hover:bg-[hsla(var(--quantum),0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
      case "ghost":
        return "text-[hsl(var(--quantum))] hover:bg-[hsla(var(--quantum),0.1)] transition-all duration-300"
      default:
        return ""
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        variant={variant === "default" ? "default" : variant}
        size={size}
        className={cn(getVariantClasses(), glowEffect && "animate-quantum-pulse shadow-quantum-pulse", className)}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}
