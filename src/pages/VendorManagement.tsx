import { Building2, Lock } from 'lucide-react'
import { vmoPreviewCards } from '../data/intelligenceLibrary'

export default function VendorManagement() {
  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-display text-[28px] font-bold text-white">
            Vendor Management Office
          </h1>
          <span className="rounded-full bg-mint-500/15 px-3 py-1 text-[11px] font-bold tracking-wide text-mint-300 uppercase">
            Contract Awarded
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-400">
          Post-award supplier performance and contract governance — Accenture
          Technology Platform
        </p>
      </div>

      {/* Blurred dashboard with overlay */}
      <div className="relative overflow-hidden rounded-xl border border-slate-700/50">
        {/* Mock dashboard (blurred) */}
        <div className="pointer-events-none select-none blur-sm">
          <div className="grid grid-cols-1 gap-4 bg-[#0f1e35] p-6 sm:grid-cols-2 lg:grid-cols-4">
            {vmoPreviewCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5 opacity-60"
              >
                <p className="text-xs text-slate-500">{card.title}</p>
                <p className="mt-2 font-display text-xl font-bold text-slate-400">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 bg-[#0f1e35] px-6 pb-6 lg:grid-cols-2">
            <div className="h-48 rounded-xl border border-slate-700/50 bg-[#1a2d4a] opacity-60" />
            <div className="h-48 rounded-xl border border-slate-700/50 bg-[#1a2d4a] opacity-60" />
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-navy/70 backdrop-blur-[2px]">
          <div className="mx-4 max-w-lg rounded-2xl border border-mint-300/20 bg-[#1a2d4a]/95 p-8 text-center shadow-xl">
            <Building2 size={60} className="mx-auto text-mint-300" />
            <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-slate-500">
              <Lock size={12} />
              Coming live post-award
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-white">
              Vendor Management Office activates on contract award
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Track SLAs, KPIs, contract obligations, risks and renewal dates
              from one dashboard
            </p>
            <p className="mt-4 text-sm font-medium text-mint-300">
              Estimated go-live: 22 July 2025
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {vmoPreviewCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-lg border border-slate-700/40 bg-[#0f1e35]/80 p-3 opacity-70 blur-[0.5px]"
                >
                  <p className="text-[10px] text-slate-500">{card.title}</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
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
