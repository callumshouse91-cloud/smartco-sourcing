import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { usePageLoad } from '../../hooks/usePageLoad'

interface FadeInProps {
  children: ReactNode
  className?: string
}

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface LoadingRevealProps {
  loading: boolean
  skeleton: ReactNode
  children: ReactNode
}

export function LoadingReveal({ loading, skeleton, children }: LoadingRevealProps) {
  if (loading) return <>{skeleton}</>
  return <FadeIn>{children}</FadeIn>
}

export function Shimmer({ className = '' }: { className?: string }) {
  return <div className={`shimmer rounded-md bg-border/60 ${className}`} />
}

export function StatCardSkeleton() {
  return (
    <div className="card p-5">
      <Shimmer className="h-9 w-20" />
      <Shimmer className="mt-3 h-4 w-32" />
      <Shimmer className="mt-2 h-3 w-24" />
    </div>
  )
}

export function TableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="card p-5">
      <Shimmer className="mb-4 h-5 w-48" />
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, i) => (
          <Shimmer key={i} className="h-10 w-full" />
        ))}
      </div>
    </div>
  )
}

export function useLoadingReveal() {
  return usePageLoad()
}
