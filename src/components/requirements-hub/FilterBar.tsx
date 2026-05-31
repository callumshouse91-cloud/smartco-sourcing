import { Search } from 'lucide-react'

const filters = [
  { label: 'All', count: 247 },
  { label: 'Functional', count: 89 },
  { label: 'Non-Functional', count: 44 },
  { label: 'Commercial', count: 38 },
  { label: 'Compliance', count: 31 },
  { label: 'Security', count: 27 },
  { label: 'Integration', count: 18 },
]

interface FilterBarProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
  search: string
  onSearchChange: (value: string) => void
}

export default function FilterBar({
  activeFilter,
  onFilterChange,
  search,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map(({ label, count }) => (
          <button
            key={label}
            type="button"
            onClick={() => onFilterChange(label)}
            className={
              activeFilter === label
                ? 'rounded-full bg-smartco-500 px-3.5 py-1.5 text-xs font-medium text-white'
                : 'rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-smartco-500/30 hover:text-navy'
            }
          >
            {label} ({count})
          </button>
        ))}
      </div>
      <div className="relative w-full lg:w-72">
        <Search
          size={16}
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search requirements..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-border bg-white py-2 pr-3 pl-9 text-sm text-navy placeholder:text-gray-400 focus:border-smartco-500 focus:outline-none"
        />
      </div>
    </div>
  )
}

export { filters }
