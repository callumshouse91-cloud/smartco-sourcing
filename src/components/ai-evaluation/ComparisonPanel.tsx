import { Link } from 'react-router-dom'
import {
  comparisonCriteria,
  comparisonMatrix,
  type ComparisonRating,
} from '../../data/aiEvaluation'

const suppliers = ['Accenture', 'Deloitte', 'IBM'] as const

function RatingDot({ rating }: { rating: ComparisonRating }) {
  const colors = {
    green: 'bg-mint-300',
    amber: 'bg-amber-400',
    red: 'bg-coral-500',
  }
  return (
    <span
      className={`inline-block h-3 w-3 rounded-full ${colors[rating]}`}
      title={rating}
    />
  )
}

export default function ComparisonPanel() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-[15px] font-bold text-white">
          Side-by-Side Comparison
        </h3>
        <Link
          to="/decision-matrix"
          className="rounded-lg border border-smartco-500/40 bg-smartco-500/10 px-4 py-2 text-sm font-medium text-smartco-400 transition-colors hover:bg-smartco-500/20"
        >
          View Full Comparison →
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-slate-700/50 text-left text-xs text-slate-500">
              <th className="pb-3 pr-4 font-medium">Criteria</th>
              {suppliers.map((s) => (
                <th key={s} className="pb-3 px-4 text-center font-medium">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonCriteria.map((criterion) => (
              <tr
                key={criterion}
                className="border-b border-slate-700/30 last:border-0"
              >
                <td className="py-3 pr-4 text-slate-400">{criterion}</td>
                {suppliers.map((supplier) => (
                  <td key={supplier} className="px-4 py-3 text-center">
                    <RatingDot rating={comparisonMatrix[criterion][supplier]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
