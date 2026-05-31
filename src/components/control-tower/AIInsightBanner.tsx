import { Brain } from 'lucide-react'

export default function AIInsightBanner() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-smartco-500/30 bg-gradient-to-r from-smartco-500/20 to-mint-300/10 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-3">
        <Brain size={22} className="mt-0.5 shrink-0 text-mint-300" />
        <p className="text-sm leading-relaxed text-slate-300">
          <span className="font-semibold text-white">AI Insight:</span> Based on
          247 requirements and 14 supplier responses (6,847 pages analysed),
          Accenture presents the strongest overall fit. IBM requires a
          clarification meeting before shortlisting. Recommend proceeding to
          moderation on 8 July.
        </p>
      </div>
      <button
        type="button"
        className="shrink-0 rounded-lg border border-smartco-500/40 bg-smartco-500/10 px-4 py-2 text-sm font-medium whitespace-nowrap text-smartco-400 transition-colors hover:bg-smartco-500/20"
      >
        View Full AI Report →
      </button>
    </div>
  )
}
