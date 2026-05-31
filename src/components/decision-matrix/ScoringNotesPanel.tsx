interface ScoringNotesPanelProps {
  supplierName: string
  notes: string
}

export default function ScoringNotesPanel({
  supplierName,
  notes,
}: ScoringNotesPanelProps) {
  return (
    <div className="card w-full shrink-0 p-5 lg:w-[280px]">
      <h3 className="text-[15px] font-bold text-navy">Scoring Notes</h3>
      <p className="mt-1 text-xs text-gray-500">{supplierName}</p>
      <textarea
        readOnly
        value={notes}
        rows={12}
        className="mt-4 w-full resize-none rounded-lg border border-border bg-surface p-3 text-sm leading-relaxed text-gray-700 focus:outline-none"
      />
      <p className="mt-3 text-xs text-gray-500">
        Last updated: Tom Bradshaw — 5 Jul 2025 14:32
      </p>
    </div>
  )
}
