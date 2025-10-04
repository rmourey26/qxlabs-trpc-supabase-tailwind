"use client"

import React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface QuantumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  glowEffect?: boolean
  dataStream?: boolean
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string
}

export function QuantumCard({
  children,
  glowEffect = false,
  dataStream = false,
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  ...props
}: QuantumCardProps) {
  // Find header, content, and footer children
  const childrenArray = React.Children.toArray(children)
  const header = childrenArray.find((child) => React.isValidElement(child) && child.type === CardHeader)
  const content = childrenArray.find((child) => React.isValidElement(child) && child.type === CardContent)
  const footer = childrenArray.find((child) => React.isValidElement(child) && child.type === CardFooter)
  const otherChildren = childrenArray.filter(
    (child) =>
      !React.isValidElement(child) ||
      (child.type !== CardHeader && child.type !== CardContent && child.type !== CardFooter),
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-lg overflow-hidden",
        glowEffect && "shadow-quantum-glow",
        dataStream && "data-stream",
        className,
      )}
      {...props}
    >
      <Card className="bg-background/80 backdrop-blur-sm border-quantum/30">
        {header && (
          <CardHeader className={cn("border-b border-[hsl(var(--quantum-border))]", headerClassName)}>
            {header}
          </CardHeader>
        )}
        {content && <CardContent className={cn("p-6", contentClassName)}>{content}</CardContent>}
        {otherChildren.length > 0 && otherChildren}
        {footer && (
          <CardFooter className={cn("border-t border-[hsl(var(--quantum-border))]", footerClassName)}>
            {footer}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}
