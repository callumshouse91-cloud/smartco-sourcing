import { Brain } from 'lucide-react'
import type { SupplierName } from '../../data/aiEvaluation'

interface SupplierTabsProps {
  suppliers: SupplierName[]
  active: SupplierName
  onChange: (supplier: SupplierName) => void
}

export default function SupplierTabs({
  suppliers,
  active,
  onChange,
}: SupplierTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suppliers.map((name) => (
        <button
          key={name}
          type="button"
          onClick={() => onChange(name)}
          className={
            active === name
              ? 'rounded-full bg-smartco-500 px-4 py-2 text-sm font-medium text-white'
              : 'rounded-full border border-slate-700/60 bg-[#1a2d4a] px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:border-slate-600 hover:text-white'
          }
        >
          {name}
        </button>
      ))}
    </div>
  )
}

export function SupplierPlaceholder({ name }: { name: SupplierName }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-[#1a2d4a] px-6 py-16 text-center">
      <Brain size={32} className="mb-4 text-slate-600" />
      <p className="font-display text-lg font-semibold text-white">{name}</p>
      <p className="mt-2 max-w-md text-sm text-slate-400">
        Full requirement-level AI evaluation is available for Accenture and IBM
        in this demo. Select either supplier to view detailed trace analysis.
      </p>
    </div>
  )
}
