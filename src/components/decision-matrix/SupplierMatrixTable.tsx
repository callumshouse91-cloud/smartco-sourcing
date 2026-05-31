import PulseBadge from '../ui/PulseBadge'
import { FadeIn, TableSkeleton, useLoadingReveal } from '../ui/Loading'
import {
  recommendationBadgeClass,
  riskBadgeClass,
  scoreColorClass,
  type SupplierScore,
} from '../../data/decisionMatrix'

interface SupplierMatrixTableProps {
  rows: SupplierScore[]
  selected: string
  onSelect: (name: string) => void
  showAll: boolean
  onToggleShowAll: () => void
}

function ScoreCell({ value }: { value: number }) {
  return (
    <span className={`font-medium ${scoreColorClass(value)}`}>{value}%</span>
  )
}

export default function SupplierMatrixTable({
  rows,
  selected,
  onSelect,
  showAll,
  onToggleShowAll,
}: SupplierMatrixTableProps) {
  const loading = useLoadingReveal()

  if (loading) {
    return <TableSkeleton rows={8} />
  }

  return (
    <FadeIn>
      <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a]">
        <p className="px-4 pt-3 text-right text-[11px] text-slate-500 md:hidden">
          → scroll
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left text-sm">
            <thead className="sticky top-0 z-10 bg-[#0f1e35]">
              <tr className="border-b border-slate-700/50 text-xs font-medium text-slate-500">
                <th className="px-4 py-3">Supplier</th>
                <th className="px-4 py-3">Overall</th>
                <th className="px-4 py-3">Technical</th>
                <th className="px-4 py-3">Commercial</th>
                <th className="px-4 py-3">Delivery</th>
                <th className="px-4 py-3">Aviation</th>
                <th className="px-4 py-3">Risk</th>
                <th className="px-4 py-3">Cost Band</th>
                <th className="px-4 py-3">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.name}
                  onClick={() => onSelect(row.name)}
                  className={`cursor-pointer border-b border-slate-700/30 transition-colors last:border-0 hover:bg-smartco-500/5 ${
                    index % 2 === 0 ? 'bg-[#1a2d4a]' : 'bg-[#162540]'
                  } ${selected === row.name ? 'ring-1 ring-inset ring-smartco-500/50' : ''}`}
                >
                  <td className="px-4 py-3 font-medium text-white">{row.name}</td>
                  <td className="px-4 py-3">
                    <ScoreCell value={row.overall} />
                  </td>
                  <td className="px-4 py-3">
                    <ScoreCell value={row.technical} />
                  </td>
                  <td className="px-4 py-3">
                    <ScoreCell value={row.commercial} />
                  </td>
                  <td className="px-4 py-3">
                    <ScoreCell value={row.delivery} />
                  </td>
                  <td className="px-4 py-3">
                    <ScoreCell value={row.aviation} />
                  </td>
                  <td
                    className={`px-4 py-3 text-xs font-medium ${riskBadgeClass(row.risk)}`}
                  >
                    {row.risk}
                  </td>
                  <td className="px-4 py-3 text-slate-400">{row.costBand}</td>
                  <td className="px-4 py-3">
                    <PulseBadge
                      className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${recommendationBadgeClass(row.recommendation)}`}
                    >
                      {row.recommendation}
                    </PulseBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-slate-700/50 px-4 py-3">
          <button
            type="button"
            onClick={onToggleShowAll}
            className="text-sm font-medium text-smartco-400 transition-colors hover:text-smartco-300"
          >
            {showAll ? 'Show top 8 suppliers' : 'Show all 14 suppliers'}
          </button>
        </div>
      </div>
    </FadeIn>
  )
}
