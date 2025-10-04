"use client"

import { motion } from "framer-motion"
import { HexContainer } from "@/components/ui-extensions/hex-container"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  animate?: boolean
}

export function Logo({ size = "md", animate = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  if (animate) {
    return (
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative ${sizeClasses[size]}`}
        >
          <HexContainer className="bg-background border-2 border-primary p-2">
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-1/3 h-1/3 bg-quantum"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
            </div>
          </HexContainer>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2 font-quantum font-bold text-xl"
        >
          <span className="text-primary">QX</span>
          <span className="text-quantum"> LABS</span>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <HexContainer className="bg-background border-2 border-primary p-2">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="w-1/3 h-1/3 bg-quantum"
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
          </div>
        </HexContainer>
      </div>
      <div className="mt-2 font-quantum font-bold text-xl">
        <span className="text-primary">QX</span>
        <span className="text-quantum"> LABS</span>
      </div>
    </div>
  )
}
