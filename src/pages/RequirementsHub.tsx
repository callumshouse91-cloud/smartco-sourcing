import { useMemo, useState } from 'react'
import { Brain } from 'lucide-react'
import AIQualitySummary from '../components/requirements-hub/AIQualitySummary'
import ConnectedSystems from '../components/requirements-hub/ConnectedSystems'
import FilterBar from '../components/requirements-hub/FilterBar'
import MoSCoWChart from '../components/requirements-hub/MoSCoWChart'
import RequirementsTable, {
  requirements,
} from '../components/requirements-hub/RequirementsTable'

export default function RequirementsHub() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filteredRows = useMemo(() => {
    return requirements.filter((row) => {
      const matchesFilter =
        activeFilter === 'All' || row.category === activeFilter
      const matchesSearch =
        search === '' ||
        row.id.toLowerCase().includes(search.toLowerCase()) ||
        row.text.toLowerCase().includes(search.toLowerCase()) ||
        row.category.toLowerCase().includes(search.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, search])

  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-display text-[28px] font-bold text-white">
            Requirements Hub
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            247 requirements | 94% traced | Last AI review: today at 09:14
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-mint-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-mint-400"
          >
            <Brain size={16} />
            Run AI Quality Check
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Export Requirements
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        search={search}
        onSearchChange={setSearch}
      />

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-10">
        <div className="lg:col-span-7">
          <RequirementsTable rows={filteredRows} />
        </div>
        <div className="space-y-6 lg:col-span-3">
          <AIQualitySummary />
          <MoSCoWChart />
          <ConnectedSystems />
        </div>
      </div>
    </div>
  )
}
