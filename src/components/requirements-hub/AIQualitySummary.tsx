const qualityStats = [
  {
    icon: '✓',
    count: 219,
    label: 'Clear and unambiguous',
    color: 'text-mint-500',
  },
  {
    icon: '⚠',
    count: 18,
    label: 'Vague — may generate inconsistent supplier responses',
    color: 'text-amber-500',
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
    color: 'text-smartco-500',
  },
]

export default function AIQualitySummary() {
  return (
    <div className="card p-5">
      <h3 className="mb-4 font-display text-[15px] font-bold text-navy">
        AI Requirement Analysis
      </h3>
      <div className="space-y-3">
        {qualityStats.map((stat) => (
          <div key={stat.label} className="flex gap-3">
            <span className={`w-4 shrink-0 text-sm font-bold ${stat.color}`}>
              {stat.icon}
            </span>
            <p className="text-sm leading-snug text-gray-600">
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
