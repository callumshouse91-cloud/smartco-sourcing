import { useMemo, useState } from 'react'
import AuditTrail from '../components/decision-matrix/AuditTrail'
import ScoringNotesPanel from '../components/decision-matrix/ScoringNotesPanel'
import SupplierMatrixTable from '../components/decision-matrix/SupplierMatrixTable'
import WeightingPanel from '../components/decision-matrix/WeightingPanel'
import { supplierScores } from '../data/decisionMatrix'

const defaultNotes =
  supplierScores.find((s) => s.name === 'Accenture')?.notes ?? ''

export default function DecisionMatrix() {
  const [weightsOpen, setWeightsOpen] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState('Accenture')

  const visibleRows = useMemo(
    () => (showAll ? supplierScores : supplierScores.slice(0, 8)),
    [showAll],
  )

  const selectedNotes =
    supplierScores.find((s) => s.name === selectedSupplier)?.notes ?? defaultNotes

  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-display text-[28px] font-bold text-white">
            Decision Matrix
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Weighted evaluation across 247 requirements | Fully auditable |
            Export ready
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            className="rounded-lg bg-smartco-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-smartco-600"
          >
            Export to PDF
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Download Excel
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Share with Board
          </button>
        </div>
      </div>

      <WeightingPanel
        open={weightsOpen}
        onToggle={() => setWeightsOpen((v) => !v)}
      />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 space-y-6">
          <SupplierMatrixTable
            rows={visibleRows}
            selected={selectedSupplier}
            onSelect={setSelectedSupplier}
            showAll={showAll}
            onToggleShowAll={() => setShowAll((v) => !v)}
          />
          <AuditTrail />
        </div>
        <ScoringNotesPanel
          supplierName={selectedSupplier}
          notes={selectedNotes}
        />
      </div>
    </div>
  )
}
