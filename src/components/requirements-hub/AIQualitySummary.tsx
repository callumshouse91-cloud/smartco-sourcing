const qualityStats = [
  {
    icon: '✓',
    count: 219,
    label: 'Clear and unambiguous',
    color: 'text-mint-300',
  },
  {
    icon: '⚠',
    count: 18,
    label: 'Vague — may generate inconsistent supplier responses',
    color: 'text-amber-400',
  },
  {
    icon: '✗',
    count: 6,
    label: 'Conflicting — contradicts another requirement',
    color: 'text-coral-500',
  },
  {
    icon: 'ℹ',
    count: 4,
    label: 'Duplicate detected',
    color: 'text-smartco-400',
  },
]

export default function AIQualitySummary() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <h3 className="mb-4 text-[15px] font-bold text-white">
        AI Requirement Analysis
      </h3>
      <div className="space-y-3">
        {qualityStats.map((stat) => (
          <div key={stat.label} className="flex gap-3">
            <span className={`w-4 shrink-0 text-sm font-bold ${stat.color}`}>
              {stat.icon}
            </span>
            <p className="text-sm leading-snug text-slate-400">
              <span className={`font-semibold ${stat.color}`}>
                {stat.count} requirements
              </span>
              {' — '}
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-coral-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral-500/90"
      >
        Fix AI-Flagged Issues
      </button>
    </div>
  )
}
