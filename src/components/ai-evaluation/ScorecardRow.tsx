import type { ScoreCard } from '../../data/aiEvaluation'
import AnimatedNumber from '../ui/AnimatedNumber'
import AnimatedProgressBar from '../ui/AnimatedProgressBar'
import PulseBadge from '../ui/PulseBadge'
import { FadeIn, StatCardSkeleton, useLoadingReveal } from '../ui/Loading'

function barColorClass(color: 'blue' | 'mint') {
  return color === 'mint' ? 'bg-mint-300' : 'bg-smartco-500'
}

function badgeClass(color: 'green' | 'amber' | 'red') {
  if (color === 'green') return 'bg-mint-500/15 text-mint-300 border-mint-300/30'
  if (color === 'amber') return 'bg-amber-500/15 text-amber-400 border-amber-500/30'
  return 'bg-coral-500/15 text-coral-500 border-coral-500/30'
}

export default function ScorecardRow({ cards }: { cards: ScoreCard[] }) {
  const loading = useLoadingReveal()

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {cards.map((card) => (
          <StatCardSkeleton key={card.category} />
        ))}
      </div>
    )
  }

  return (
    <FadeIn>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {cards.map((card) => (
          <div
            key={card.category}
            className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-4"
          >
            <p className="text-xs text-slate-500">{card.category}</p>
            {card.type === 'badge' ? (
              <PulseBadge
                className={`mt-2 inline-block rounded-full border px-2.5 py-0.5 text-sm font-semibold ${badgeClass(card.badgeColor!)}`}
              >
                {card.value}
              </PulseBadge>
            ) : (
              <>
                <p className="mt-1 font-display text-2xl font-bold text-white">
                  <AnimatedNumber value={card.value} />
                </p>
                <AnimatedProgressBar
                  value={card.barValue!}
                  barClassName={`h-full rounded-full ${barColorClass(card.barColor!)}`}
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-700"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
