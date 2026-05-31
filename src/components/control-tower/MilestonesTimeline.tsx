const milestones = [
  {
    date: '28 Jun',
    label: 'Supplier responses received',
    status: 'complete' as const,
  },
  {
    date: '5 Jul',
    label: 'AI evaluation complete',
    status: 'complete' as const,
  },
  {
    date: '15 Jul',
    label: 'Board recommendation pack',
    status: 'current' as const,
  },
  {
    date: '22 Jul',
    label: 'Contract negotiations begin',
    status: 'upcoming' as const,
  },
]

function StatusDot({ status }: { status: 'complete' | 'current' | 'upcoming' }) {
  if (status === 'complete') {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-mint-300">
        ✓
      </span>
    )
  }
  if (status === 'current') {
    return (
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-smartco-500">
        ●
      </span>
    )
  }
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-600">
      ○
    </span>
  )
}

export default function MilestonesTimeline() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <h3 className="mb-4 text-[15px] font-bold text-white">Key Milestones</h3>
      <div className="space-y-3">
        {milestones.map((m) => (
          <div key={m.label} className="flex items-start gap-3">
            <StatusDot status={m.status} />
            <div className="min-w-0 flex-1">
              <p
                className={
                  m.status === 'current'
                    ? 'text-sm font-medium text-white'
                    : m.status === 'complete'
                      ? 'text-sm text-slate-400'
                      : 'text-sm text-slate-500'
                }
              >
                <span className="font-medium">{m.date}</span>
                {' — '}
                {m.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
