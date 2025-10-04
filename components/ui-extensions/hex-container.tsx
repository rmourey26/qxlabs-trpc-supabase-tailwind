"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HexContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  rotate?: boolean
  pulse?: boolean
  className?: string
}

export function HexContainer({ children, rotate = false, pulse = false, className, ...props }: HexContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "hex-container relative",
        rotate && "animate-hex-rotate",
        pulse && "animate-quantum-pulse",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
