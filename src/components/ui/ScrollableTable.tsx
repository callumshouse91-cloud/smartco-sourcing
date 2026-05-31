import type { ReactNode } from 'react'
import { LoadingReveal, TableSkeleton, useLoadingReveal } from './Loading'

interface ScrollableTableProps {
  children: ReactNode
  skeletonRows?: number
  className?: string
}

export default function ScrollableTable({
  children,
  skeletonRows = 6,
  className = '',
}: ScrollableTableProps) {
  const loading = useLoadingReveal()

  return (
    <LoadingReveal
      loading={loading}
      skeleton={<TableSkeleton rows={skeletonRows} />}
    >
      <div className={className}>
        <p className="mb-1 text-right text-[11px] text-slate-500 md:hidden">
          → scroll
        </p>
        <div className="overflow-x-auto">{children}</div>
      </div>
    </LoadingReveal>
  )
}
