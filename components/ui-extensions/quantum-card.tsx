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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative rounded-lg overflow-hidden group",
        glowEffect && "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500",
        dataStream && "data-stream",
        className,
      )}
      {...props}
    >
      <Card
        className={cn(
          "bg-background/80 backdrop-blur-sm border-quantum/30 relative",
          "before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent",
          glowEffect && "before:group-hover:border-quantum/50 before:transition-all before:duration-500",
        )}
      >
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
