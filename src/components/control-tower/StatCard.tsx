import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import AnimatedNumber from '../ui/AnimatedNumber'
import { FadeIn, LoadingReveal, StatCardSkeleton, useLoadingReveal } from '../ui/Loading'

interface StatCardProps {
  value: string
  label: string
  sub: ReactNode
  icon: LucideIcon
  iconColor: string
}

export default function StatCard({
  value,
  label,
  sub,
  icon: Icon,
  iconColor,
}: StatCardProps) {
  const loading = useLoadingReveal()

  return (
    <LoadingReveal loading={loading} skeleton={<StatCardSkeleton />}>
      <FadeIn>
        <div className="card relative p-5">
          <Icon
            size={24}
            className="absolute top-5 right-5"
            style={{ color: iconColor }}
          />
          <p className="font-display text-[36px] leading-none font-bold text-navy">
            <AnimatedNumber value={value} />
          </p>
          <p className="mt-2 text-sm text-gray-600">{label}</p>
          <div className="mt-1.5 text-xs text-slate-400">{sub}</div>
        </div>
      </FadeIn>
    </LoadingReveal>
  )
}
