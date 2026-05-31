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
    <div className="card p-3">
      <div className="flex flex-wrap gap-2">
        {suppliers.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => onChange(name)}
            className={
              active === name
                ? 'rounded-full bg-smartco-500 px-4 py-2 text-sm font-medium text-white'
                : 'rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-smartco-500'
            }
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

export function SupplierPlaceholder({ name }: { name: SupplierName }) {
  return (
    <div className="card flex flex-col items-center justify-center px-6 py-16 text-center">
      <Brain size={32} className="mb-4 text-gray-400" />
      <p className="font-display text-lg font-semibold text-navy">{name}</p>
      <p className="mt-2 max-w-md text-sm text-gray-600">
        Full requirement-level AI evaluation is available for Accenture and IBM
        in this demo. Select either supplier to view detailed trace analysis.
      </p>
    </div>
  )
}
