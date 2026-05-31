import { Building2, Lock } from 'lucide-react'
import { vmoPreviewCards } from '../data/intelligenceLibrary'

export default function VendorManagement() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-[28px] font-bold text-navy">
            Vendor Management Office
          </h1>
          <span className="rounded-full bg-[#f0fdf9] px-3 py-1 text-[11px] font-bold tracking-wide text-mint-500 uppercase">
            Contract Awarded
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-600">
          Post-award supplier performance and contract governance — Accenture
          Technology Platform
        </p>
      </div>

      <div className="card relative overflow-hidden">
        <div className="pointer-events-none select-none blur-sm">
          <div className="grid grid-cols-1 gap-4 bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4">
            {vmoPreviewCards.map((card) => (
              <div key={card.title} className="card p-5 opacity-60">
                <p className="text-xs text-slate-400">{card.title}</p>
                <p className="mt-2 font-display text-xl font-bold text-gray-600">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 bg-surface px-6 pb-6 lg:grid-cols-2">
            <div className="card h-48 opacity-60" />
            <div className="card h-48 opacity-60" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px]">
          <div className="card mx-4 max-w-lg p-8 text-center shadow-lg">
            <Building2 size={60} className="mx-auto text-mint-500" />
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-slate-400">
              <Lock size={12} />
              Coming live post-award
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-navy">
              Vendor Management Office activates on contract award
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Track SLAs, KPIs, contract obligations, risks and renewal dates
              from one dashboard
            </p>
            <p className="mt-4 text-sm font-medium text-mint-500">
              Estimated go-live: 22 July 2025
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {vmoPreviewCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-border bg-surface p-3 opacity-80"
                >
                  <p className="text-[10px] text-slate-400">{card.title}</p>
                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
