import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import type { SupplierEvaluation } from '../../data/aiEvaluation'
import PulseBadge from '../ui/PulseBadge'
import TypewriterText from '../ui/TypewriterText'

interface EvaluationSidebarProps {
  data: SupplierEvaluation
}

export default function EvaluationSidebar({ data }: EvaluationSidebarProps) {
  const badgeClass =
    data.recommendation.tone === 'recommend'
      ? 'bg-mint-500/15 text-mint-300'
      : data.recommendation.tone === 'challenge'
        ? 'bg-amber-500/15 text-amber-400'
        : 'bg-smartco-500/15 text-smartco-400'

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-mint-300/20 bg-[#1a2d4a] p-5">
        <h3 className="mb-4 text-[15px] font-bold text-mint-300">
          AI-Identified Strengths
        </h3>
        <ul className="space-y-3">
          {data.strengths.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-slate-300">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-mint-300"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-amber-500/20 bg-[#1a2d4a] p-5">
        <h3 className="mb-4 text-[15px] font-bold text-amber-400">
          Risks &amp; Gaps
        </h3>
        <ul className="space-y-3">
          {data.risks.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-slate-300">
              <AlertTriangle
                size={16}
                className="mt-0.5 shrink-0 text-amber-400"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-smartco-500/40 bg-gradient-to-br from-smartco-500/10 to-mint-300/10 p-5">
        <h3 className="text-[15px] font-bold text-white">AI Recommendation</h3>
        <PulseBadge
          className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide ${badgeClass}`}
        >
          {data.recommendation.badge}
        </PulseBadge>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          <TypewriterText text={data.recommendation.text} speed={10} />
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-smartco-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-smartco-600"
        >
          Generate Board Summary →
        </button>
      </div>
    </div>
  )
}
