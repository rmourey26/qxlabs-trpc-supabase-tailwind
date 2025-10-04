"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "default" | "horizontal" | "vertical" | "icon"
  animated?: boolean
  className?: string
}

export function QxLabsLogo({ size = "md", variant = "default", animated = true, className }: LogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  }

  // Icon-only version
  if (variant === "icon") {
    return (
      <div className={cn("relative", className)}>
        {mounted && animated ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={cn("relative", sizeClasses[size])}
          >
            <HexagonShape className="absolute inset-0 w-full h-full" />
            <motion.div
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <QuantumCore />
            </motion.div>
          </motion.div>
        ) : (
          <div className={cn("relative", sizeClasses[size])}>
            <HexagonShape className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <QuantumCore />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Horizontal layout
  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <HexagonShape className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <QuantumCore />
          </div>
        </div>
        {mounted && animated ? (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={cn("font-quantum font-bold", textSizes[size])}
          >
            <span className="text-white">QX</span>
            <motion.span
              initial={{ color: "#ffffff" }}
              animate={{ color: "#4dabf7" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              LABS
            </motion.span>
          </motion.div>
        ) : (
          <div className={cn("font-quantum font-bold", textSizes[size])}>
            <span className="text-white">QX</span>
            <span className="text-blue-400">LABS</span>
          </div>
        )}
      </div>
    )
  }

  // Vertical layout
  if (variant === "vertical") {
    return (
      <div className={cn("flex flex-col items-center gap-2", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <HexagonShape className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <QuantumCore />
          </div>
        </div>
        {mounted && animated ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={cn("font-quantum font-bold text-center", textSizes[size])}
          >
            <span className="text-white">QX</span>
            <motion.span
              initial={{ color: "#ffffff" }}
              animate={{ color: "#4dabf7" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              LABS
            </motion.span>
          </motion.div>
        ) : (
          <div className={cn("font-quantum font-bold text-center", textSizes[size])}>
            <span className="text-white">QX</span>
            <span className="text-blue-400">LABS</span>
          </div>
        )}
      </div>
    )
  }

  // Default version
  return (
    <div className={cn("flex flex-col items-center", className)}>
      {mounted && animated ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={cn("relative", sizeClasses[size])}
        >
          <HexagonShape className="absolute inset-0 w-full h-full" />
          <motion.div
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <QuantumCore />
          </motion.div>
        </motion.div>
      ) : (
        <div className={cn("relative", sizeClasses[size])}>
          <HexagonShape className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <QuantumCore />
          </div>
        </div>
      )}
      {mounted && animated ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={cn("mt-2 font-quantum font-bold", textSizes[size])}
        >
          <span className="text-white">QX</span>
          <motion.span
            initial={{ color: "#ffffff" }}
            animate={{ color: "#4dabf7" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            LABS
          </motion.span>
        </motion.div>
      ) : (
        <div className={cn("mt-2 font-quantum font-bold", textSizes[size])}>
          <span className="text-white">QX</span>
          <span className="text-blue-400">LABS</span>
        </div>
      )}
    </div>
  )
}

// Hexagon shape component
function HexagonShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("fill-current", className)}>
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c7ed6" /> {/* Darker blue */}
          <stop offset="50%" stopColor="#4dabf7" /> {/* Bright blue */}
          <stop offset="100%" stopColor="#74c0fc" /> {/* Light blue */}
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <polygon
        points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25"
        fill="url(#hexGradient)"
        stroke="#ffffff"
        strokeWidth="1.5"
        filter="url(#glow)"
        className="drop-shadow-[0_0_8px_rgba(77,171,247,0.8)]"
      />
    </svg>
  )
}

// Quantum core component
function QuantumCore() {
  return (
    <div className="relative w-1/2 h-1/2">
      {/* Inner quantum core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-white rounded-sm transform rotate-45 animate-pulse shadow-[0_0_15px_5px_rgba(255,255,255,0.8)]" />
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="25"
            fill="none"
            stroke="#74c0fc"
            strokeWidth="1.5"
            className="opacity-80"
          />
        </svg>
      </div>

      <div className="absolute inset-0 animate-spin-slow-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse
            cx="50"
            cy="50"
            rx="25"
            ry="45"
            fill="none"
            stroke="#4dabf7"
            strokeWidth="1.5"
            className="opacity-80"
          />
        </svg>
      </div>

      {/* Quantum particles */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-white animate-ping shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]" />
    </div>
  )
}
