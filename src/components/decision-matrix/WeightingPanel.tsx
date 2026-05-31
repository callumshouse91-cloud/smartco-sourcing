import { ChevronDown } from 'lucide-react'
import { evaluationWeights } from '../../data/decisionMatrix'

interface WeightingPanelProps {
  open: boolean
  onToggle: () => void
}

export default function WeightingPanel({ open, onToggle }: WeightingPanelProps) {
  return (
    <div className="card">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <h3 className="text-[15px] font-bold text-navy">Evaluation Weighting</h3>
        <div className="flex items-center gap-3">
          <span
            onClick={(e) => e.stopPropagation()}
            className="rounded-lg border border-smartco-500/40 px-3 py-1 text-xs font-medium text-smartco-500"
          >
            Edit Weights
          </span>
          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      {open && (
        <div className="border-t border-border px-5 pb-5">
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {evaluationWeights.map(({ category, weight }) => (
              <div key={category}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">{category}</span>
                  <span className="font-semibold text-navy">{weight}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-smartco-500"
                    style={{ width: `${weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Weights set by SmartCo in consultation with Heathrow procurement team.
            Any change automatically recalculates all scores.
          </p>
        </div>
      )}
    </div>
  )
}
