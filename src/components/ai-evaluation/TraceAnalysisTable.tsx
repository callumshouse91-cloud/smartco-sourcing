import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { TraceRow } from '../../data/aiEvaluation'
import TypewriterText from '../ui/TypewriterText'
import { FadeIn, TableSkeleton, useLoadingReveal } from '../ui/Loading'

interface TraceAnalysisTableProps {
  rows: TraceRow[]
}

export default function TraceAnalysisTable({ rows }: TraceAnalysisTableProps) {
  const [search, setSearch] = useState('')
  const loading = useLoadingReveal()

  const filtered = useMemo(() => {
    if (!search) return rows
    const q = search.toLowerCase()
    return rows.filter(
      (r) =>
        r.id.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q) ||
        r.assessment.toLowerCase().includes(q),
    )
  }, [rows, search])

  if (loading) {
    return <TableSkeleton rows={8} />
  }

  return (
    <FadeIn>
      <div className="card overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-[#e0e4ec] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-bold text-navy">
              Requirement Trace Analysis
            </h3>
            <span className="rounded-full bg-smartco-500/10 px-2 py-0.5 text-[11px] font-medium text-smartco-500">
              247 requirements
            </span>
          </div>
          <div className="relative w-full sm:w-64">
            <Search
              size={16}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Filter requirements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-[#e0e4ec] bg-white py-2 pr-3 pl-9 text-sm text-navy placeholder:text-gray-400 focus:border-smartco-500 focus:outline-none"
            />
          </div>
        </div>
        <p className="px-5 pt-2 text-right text-[11px] text-gray-500 md:hidden">
          → scroll
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e0e4ec] bg-surface text-xs font-medium text-gray-600">
                <th className="px-4 py-3">Requirement ID</th>
                <th className="px-4 py-3">Summary</th>
                <th className="px-4 py-3">AI Assessment</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-[#e0e4ec] last:border-0 hover:bg-surface ${
                    row.flagged
                      ? 'border-l-[3px] border-l-amber-500'
                      : 'border-l-[3px] border-l-transparent'
                  }`}
                >
                  <td className="px-4 py-3.5 font-mono text-xs text-smartco-500">
                    {row.id}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-navy">
                    {row.summary}
                  </td>
                  <td className="max-w-sm px-4 py-3.5 text-gray-600">
                    <TypewriterText text={row.assessment} />
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-navy">
                    {row.score}%
                  </td>
                  <td className="px-4 py-3.5">
                    <button
                      type="button"
                      className="font-mono text-xs text-gray-600 transition-colors hover:text-mint-500"
                    >
                      {row.evidence} {row.flagged ? '⚠' : '✓'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  )
}
