import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PulseBadgeProps {
  children: ReactNode
  className?: string
}

export default function PulseBadge({ children, className = '' }: PulseBadgeProps) {
  return (
    <motion.span
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
