"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface MatrixBackgroundProps extends React.HTMLAttributes<HTMLCanvasElement> {
  className?: string
  density?: number
  speed?: number
  color?: string
}

export function MatrixBackground({
  className,
  density = 0.05,
  speed = 50,
  color = "hsl(var(--quantum))",
  ...props
}: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix rain effect
    const columns = Math.floor(canvas.width * density)
    const drops: number[] = Array(columns).fill(1)

    // Characters to display
    const chars = "01QXLABS"

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = color
      ctx.font = "15px monospace"

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)]

        // x coordinate of the drop
        const x = (i * (canvas.width / density)) / columns

        // y coordinate of the drop
        const y = drops[i] * 20

        ctx.fillText(text, x, y)

        // Reset drop to top with random condition
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    const interval = setInterval(draw, speed)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [density, speed, color])

  return <canvas ref={canvasRef} className={cn("fixed inset-0 -z-10 pointer-events-none", className)} {...props} />
}
