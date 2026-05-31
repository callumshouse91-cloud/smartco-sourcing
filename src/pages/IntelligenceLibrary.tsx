import { useMemo, useState } from 'react'
import { Brain, Search } from 'lucide-react'
import AnimatedNumber from '../components/ui/AnimatedNumber'
import {
  FadeIn,
  LoadingReveal,
  StatCardSkeleton,
  useLoadingReveal,
} from '../components/ui/Loading'
import {
  accelerators,
  archivedRequirements,
  archiveStats,
  lessonsLearned,
  supplierProfiles,
  tagFilters,
} from '../data/intelligenceLibrary'

export default function IntelligenceLibrary() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const statsLoading = useLoadingReveal()

  const filteredRequirements = useMemo(() => {
    if (!search) return archivedRequirements
    const q = search.toLowerCase()
    return archivedRequirements.filter(
      (r) =>
        r.id.toLowerCase().includes(q) ||
        r.text.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q),
    )
  }, [search])

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[28px] font-bold text-navy">
              Supplier Intelligence Library
            </h1>
            <span className="rounded-full bg-yellow-brand px-3 py-1 text-[11px] font-bold tracking-wide text-navy uppercase">
              Post-RFP Value
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Everything you learned from this RFP — preserved, searchable, and
            reusable for future procurements
          </p>
        </div>
      </div>

      <div className="rounded-xl border-l-4 border-yellow-brand bg-[#fffef0] p-5">
        <p className="text-sm leading-relaxed text-navy">
          <span className="font-semibold">The RFP is complete.</span> The
          intelligence lives on. Every requirement, every supplier response, every
          score, and every decision rationale is preserved here — ready to
          accelerate your next procurement by up to{' '}
          <span className="font-semibold">60%</span>.
        </p>
      </div>

      <LoadingReveal
        loading={statsLoading}
        skeleton={
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {archiveStats.map((stat) => (
              <StatCardSkeleton key={stat.label} />
            ))}
          </div>
        }
      >
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {archiveStats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="font-display text-[36px] leading-none font-bold text-navy">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </LoadingReveal>

      <div>
        <div className="relative">
          <Search
            size={20}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search across all requirements, responses, suppliers and decisions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="card w-full py-3.5 pr-4 pl-12 text-sm text-navy placeholder:text-slate-400 focus:border-smartco-500 focus:outline-none"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {tagFilters.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={
                activeTag === tag
                  ? 'rounded-full bg-smartco-500 px-3 py-1 text-xs font-medium text-white'
                  : 'rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-surface'
              }
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-navy">Requirements</h3>
            <span className="text-xs text-slate-400">247</span>
          </div>
          <div className="space-y-3">
            {filteredRequirements.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-10 text-center">
                <Brain size={28} className="mb-3 text-slate-400" />
                <p className="text-sm text-gray-600">
                  No matches found — the AI is still learning your procurement
                </p>
              </div>
            ) : (
              filteredRequirements.map((req) => (
                <div
                  key={req.id}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-smartco-500">{req.id}</span>
                    <span className="rounded-full bg-smartco-50 px-2 py-0.5 text-[10px] text-smartco-500">
                      {req.category}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray-600">{req.text}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-navy">Supplier Profiles</h3>
            <span className="text-xs text-slate-400">14</span>
          </div>
          <div className="space-y-3">
            {supplierProfiles.map((supplier) => (
              <div
                key={supplier.name}
                className="flex items-center justify-between rounded-lg border border-border bg-[#f9fafc] px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-navy">{supplier.name}</p>
                  <p className="text-xs text-slate-400">{supplier.category}</p>
                </div>
                <span className="font-display text-sm font-bold text-mint-500">
                  {supplier.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[15px] font-bold text-navy">Lessons Learned</h3>
            <span className="text-xs text-slate-400">12 captured</span>
          </div>
          <ul className="space-y-3">
            {lessonsLearned.map((lesson) => (
              <li
                key={lesson}
                className="border-l-2 border-yellow-brand bg-[#fffef5] py-2 pl-3 text-sm leading-snug text-gray-600"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card p-5">
        <h3 className="font-display text-lg font-bold text-navy">
          Future Procurement Accelerators
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Use this procurement&apos;s intelligence to fast-start your next RFP
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {accelerators.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-border bg-surface p-4"
            >
              <h4 className="font-display font-semibold text-navy">{item.title}</h4>
              <p className="mt-2 flex-1 text-sm text-gray-600">{item.description}</p>
              <button
                type="button"
                className="mt-4 w-fit text-sm font-medium text-smartco-500 transition-colors hover:text-smartco-600"
              >
                {item.button} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
