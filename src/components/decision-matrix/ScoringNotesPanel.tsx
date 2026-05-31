interface ScoringNotesPanelProps {
  supplierName: string
  notes: string
}

export default function ScoringNotesPanel({
  supplierName,
  notes,
}: ScoringNotesPanelProps) {
  return (
    <div className="w-full shrink-0 rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5 lg:w-[280px]">
      <h3 className="text-[15px] font-bold text-white">Scoring Notes</h3>
      <p className="mt-1 text-xs text-slate-500">{supplierName}</p>
      <textarea
        readOnly
        value={notes}
        rows={12}
        className="mt-4 w-full resize-none rounded-lg border border-slate-700/60 bg-[#0f1e35] p-3 text-sm leading-relaxed text-slate-300 focus:outline-none"
      />
      <p className="mt-3 text-xs text-slate-500">
        Last updated: Tom Bradshaw — 5 Jul 2025 14:32
      </p>
    </div>
  )
}
