import { Building2, Plane } from 'lucide-react'

interface DocumentPreviewProps {
  title: string
}

export default function DocumentPreview({ title }: DocumentPreviewProps) {
  const isBoardPaper = title === 'Board Recommendation Paper'

  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <h3 className="mb-4 text-[15px] font-bold text-white">
        Preview — {title}
      </h3>

      <div className="rounded-lg border border-slate-600/40 bg-[#0f1e35] p-6 shadow-inner">
        {/* Document header */}
        <div className="mb-6 flex items-start justify-between border-b border-slate-600/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600/40 bg-[#1a2d4a]">
              <Plane size={20} className="text-slate-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Heathrow Airport</p>
              <p className="text-[10px] text-slate-600">Procurement Board</p>
            </div>
          </div>
          <img
            src="/smartco-logo-white.png"
            alt="SmartCo"
            className="h-6 w-auto opacity-80"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/smartco-logo-white.svg'
            }}
          />
        </div>

        {isBoardPaper ? (
          <div className="space-y-5 text-sm leading-relaxed text-slate-200">
            <div>
              <p className="text-xs tracking-wide text-slate-500 uppercase">
                SmartCo | Heathrow Airport Technology Platform Sourcing
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Board Recommendation Paper | CONFIDENTIAL | 8 July 2025
              </p>
            </div>

            <section>
              <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-white uppercase">
                Executive Recommendation
              </h4>
              <p>
                Following evaluation of 14 supplier responses against 247
                requirements, SmartCo recommends Accenture for award of the
                Heathrow Technology Platform contract.
              </p>
            </section>

            <section>
              <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-white uppercase">
                Summary Rationale
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-slate-300">
                <li>Highest overall score: 86% (industry benchmark: 71%)</li>
                <li>
                  Strongest UK aviation sector credentials: 4 verified references
                </li>
                <li>Full UK data sovereignty compliance confirmed</li>
                <li>
                  Delivery approach aligned to Heathrow&apos;s agile governance
                  model
                </li>
              </ul>
            </section>

            <section>
              <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-white uppercase">
                Top 3 Suppliers
              </h4>
              <ol className="list-decimal space-y-1 pl-5 text-slate-300">
                <li>
                  <span className="text-white">Accenture</span> — 86% —{' '}
                  <span className="text-mint-300">RECOMMEND</span>
                </li>
                <li>
                  <span className="text-white">Deloitte</span> — 74% —{' '}
                  <span className="text-smartco-400">SHORTLIST</span>
                </li>
                <li>
                  <span className="text-white">IBM</span> — 71% —{' '}
                  <span className="text-amber-400">
                    CHALLENGE (pending clarification)
                  </span>
                </li>
              </ol>
            </section>

            <section className="rounded-md border border-amber-500/20 bg-amber-500/5 p-3">
              <p className="text-xs font-bold text-amber-400 uppercase">
                Key Risk
              </p>
              <p className="mt-1 text-slate-300">
                IBM&apos;s cloud migration timeline requires clarification before
                any shortlist inclusion. Recommend a structured clarification
                meeting no later than 12 July.
              </p>
            </section>

            <section>
              <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-white uppercase">
                Next Steps
              </h4>
              <ol className="list-decimal space-y-1 pl-5 text-slate-300">
                <li>Distribute this paper to procurement board by 10 July</li>
                <li>IBM clarification meeting — 12 July</li>
                <li>
                  Contract negotiations with Accenture — commence 22 July
                </li>
              </ol>
            </section>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Building2 size={32} className="mb-3 text-slate-600" />
            <p className="text-sm text-slate-400">
              Preview for <span className="text-white">{title}</span> will appear
              here once generation is complete.
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Select Board Recommendation Paper for a full document preview.
            </p>
          </div>
        )}

        <div className="mt-6 border-t border-slate-600/30 pt-3 text-center text-[10px] text-slate-600">
          Page 1 of 1 — SmartCo AI Sourcing Control Tower — Generated 8 Jul 2025
        </div>
      </div>
    </div>
  )
}
