import { Building2, Plane } from 'lucide-react'

interface DocumentPreviewProps {
  title: string
}

export default function DocumentPreview({ title }: DocumentPreviewProps) {
  const isBoardPaper = title === 'Board Recommendation Paper'

  return (
    <div className="card p-5">
      <h3 className="mb-4 text-[15px] font-bold text-navy">
        Preview — {title}
      </h3>

      <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
        <div className="h-1 bg-smartco-500" />
        <div className="p-6">
          {/* Document header */}
          <div className="mb-6 flex items-start justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                <Plane size={20} className="text-gray-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Heathrow Airport</p>
                <p className="text-[10px] text-gray-400">Procurement Board</p>
              </div>
            </div>
            <img
              src="/smartco-logo.svg"
              alt="SmartCo"
              className="h-6 w-auto"
            />
          </div>

          {isBoardPaper ? (
            <div className="space-y-5 text-sm leading-relaxed text-[#1a1a2e]">
              <div>
                <p className="text-xs tracking-wide text-gray-500 uppercase">
                  SmartCo | Heathrow Airport Technology Platform Sourcing
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Board Recommendation Paper | CONFIDENTIAL | 8 July 2025
                </p>
              </div>

              <section>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-smartco-500 uppercase">
                  Executive Recommendation
                </h4>
                <p>
                  Following evaluation of 14 supplier responses against 247
                  requirements, SmartCo recommends Accenture for award of the
                  Heathrow Technology Platform contract.
                </p>
              </section>

              <section>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-smartco-500 uppercase">
                  Summary Rationale
                </h4>
                <ul className="list-disc space-y-1 pl-5">
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
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-smartco-500 uppercase">
                  Top 3 Suppliers
                </h4>
                <ol className="list-decimal space-y-1 pl-5">
                  <li>
                    <span className="font-medium">Accenture</span> — 86% —{' '}
                    <span className="text-mint-500">RECOMMEND</span>
                  </li>
                  <li>
                    <span className="font-medium">Deloitte</span> — 74% —{' '}
                    <span className="text-smartco-500">SHORTLIST</span>
                  </li>
                  <li>
                    <span className="font-medium">IBM</span> — 71% —{' '}
                    <span className="text-amber-500">
                      CHALLENGE (pending clarification)
                    </span>
                  </li>
                </ol>
              </section>

              <section className="rounded-md border border-amber-500/20 bg-amber-500/5 p-3">
                <p className="text-xs font-bold text-amber-500 uppercase">
                  Key Risk
                </p>
                <p className="mt-1">
                  IBM&apos;s cloud migration timeline requires clarification before
                  any shortlist inclusion. Recommend a structured clarification
                  meeting no later than 12 July.
                </p>
              </section>

              <section>
                <h4 className="mb-2 font-display text-xs font-bold tracking-wider text-smartco-500 uppercase">
                  Next Steps
                </h4>
                <ol className="list-decimal space-y-1 pl-5">
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
              <Building2 size={32} className="mb-3 text-gray-400" />
              <p className="text-sm text-gray-600">
                Preview for <span className="font-medium text-[#1a1a2e]">{title}</span> will appear
                here once generation is complete.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                Select Board Recommendation Paper for a full document preview.
              </p>
            </div>
          )}

          <div className="mt-6 border-t border-border pt-3 text-center text-[10px] text-gray-400">
            Page 1 of 1 — SmartCo AI Sourcing Control Tower — Generated 8 Jul 2025
          </div>
        </div>
      </div>
    </div>
  )
}
