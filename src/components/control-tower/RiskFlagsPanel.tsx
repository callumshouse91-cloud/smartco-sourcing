const risks = [
  {
    border: 'border-l-red-500',
    text: 'IBM: Cloud migration timeline appears inconsistent with stated team size (p.47 vs p.112)',
    tag: 'Delivery Risk',
  },
  {
    border: 'border-l-amber-500',
    text: 'Capgemini: Pricing assumptions not aligned to scope — potential £2.3M variance',
    tag: 'Commercial Risk',
  },
  {
    border: 'border-l-amber-500',
    text: 'Infosys: UK data residency commitment missing from response',
    tag: 'Compliance Gap',
  },
  {
    border: 'border-l-smartco-500',
    text: 'KPMG: Strong methodology but limited aviation sector reference (1 vs required 3)',
    tag: 'Experience Gap',
  },
]

export default function RiskFlagsPanel() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-[15px] font-bold text-white">
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
            className={`rounded-lg border border-slate-700/40 border-l-[3px] bg-[#0f1e35]/60 px-4 py-3 ${risk.border}`}
          >
            <p className="text-sm leading-snug text-slate-300">{risk.text}</p>
            <p className="mt-1.5 text-[11px] font-medium text-slate-500">
              {risk.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
