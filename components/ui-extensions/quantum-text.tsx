"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface QuantumTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradient?: boolean
  animate?: boolean
  className?: string
}

export function QuantumText({ children, gradient = true, animate = false, className, ...props }: QuantumTextProps) {
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(gradient ? "quantum-text" : "text-quantum", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={cn(gradient ? "quantum-text" : "text-quantum", className)} {...props}>
      {children}
    </div>
  )
}
