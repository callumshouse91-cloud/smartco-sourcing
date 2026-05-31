import {
  Brain,
  Building2,
  Calendar,
  Target,
} from 'lucide-react'
import AIInsightBanner from '../components/control-tower/AIInsightBanner'
import EvaluationProgressChart from '../components/control-tower/EvaluationProgressChart'
import MilestonesTimeline from '../components/control-tower/MilestonesTimeline'
import RecommendationWidget from '../components/control-tower/RecommendationWidget'
import RiskFlagsPanel from '../components/control-tower/RiskFlagsPanel'
import StatCard from '../components/control-tower/StatCard'

export default function ControlTower() {
  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="font-display text-[28px] font-bold text-white">
            AI Sourcing Control Tower
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Technology Platform Sourcing — Heathrow Airport | RFP Active
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-smartco-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-smartco-600"
          >
            <Brain size={16} />
            Generate Exec Summary
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Export Pack
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          value="14"
          label="Suppliers Evaluated"
          icon={Building2}
          iconColor="#0065fc"
          sub={
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
              <span className="text-mint-300">8 fully compliant</span>
            </span>
          }
        />
        <StatCard
          value="247"
          label="Requirements Mapped"
          icon={Target}
          iconColor="#43e6a2"
          sub="94% traced to responses"
        />
        <StatCard
          value="86%"
          label="Top Supplier Score"
          icon={Brain}
          iconColor="#e6d343"
          sub={
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-brand" />
              <span className="text-yellow-brand">Recommendation ready</span>
            </span>
          }
        />
        <StatCard
          value="12"
          label="Days to Decision"
          icon={Calendar}
          iconColor="#e65c43"
          sub={
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-coral-500" />
              <span className="text-coral-500">Board pack due 15 Jul</span>
            </span>
          }
        />
      </div>

      {/* Two-column main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <EvaluationProgressChart />
          <RiskFlagsPanel />
        </div>
        <div className="space-y-6 lg:col-span-2">
          <RecommendationWidget />
          <MilestonesTimeline />
        </div>
      </div>

      {/* Bottom banner */}
      <AIInsightBanner />
    </div>
  )
}
