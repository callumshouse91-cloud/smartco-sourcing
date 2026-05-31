const risks = [
  {
    border: 'border-l-red-500',
    bg: 'bg-[#fff5f5]',
    text: 'IBM: Cloud migration timeline appears inconsistent with stated team size (p.47 vs p.112)',
    tag: 'Delivery Risk',
  },
  {
    border: 'border-l-amber-500',
    bg: 'bg-[#fffbf0]',
    text: 'Capgemini: Pricing assumptions not aligned to scope — potential £2.3M variance',
    tag: 'Commercial Risk',
  },
  {
    border: 'border-l-amber-500',
    bg: 'bg-[#fffbf0]',
    text: 'Infosys: UK data residency commitment missing from response',
    tag: 'Compliance Gap',
  },
  {
    border: 'border-l-smartco-500',
    bg: 'bg-[#f0f6ff]',
    text: 'KPMG: Strong methodology but limited aviation sector reference (1 vs required 3)',
    tag: 'Experience Gap',
  },
]

export default function RiskFlagsPanel() {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-[15px] font-bold text-navy">
          AI-Identified Risk Flags
        </h3>
        <span className="rounded-full bg-coral-500/15 px-2.5 py-0.5 text-[11px] font-medium text-coral-500">
          4 require attention
        </span>
      </div>
      <div className="space-y-3">
        {risks.map((risk) => (
          <div
            key={risk.text}
            className={`rounded-lg border border-[#e0e4ec] border-l-[3px] px-4 py-3 ${risk.border} ${risk.bg}`}
          >
            <p className="text-sm leading-snug text-gray-600">{risk.text}</p>
            <p className="mt-1.5 text-[11px] font-medium text-slate-400">
              {risk.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
