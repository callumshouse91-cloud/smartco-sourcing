import { useState } from 'react'
import { Brain } from 'lucide-react'
import ComparisonPanel from '../components/ai-evaluation/ComparisonPanel'
import EvaluationSidebar from '../components/ai-evaluation/EvaluationSidebar'
import ScorecardRow from '../components/ai-evaluation/ScorecardRow'
import SupplierTabs, {
  SupplierPlaceholder,
} from '../components/ai-evaluation/SupplierTabs'
import TraceAnalysisTable from '../components/ai-evaluation/TraceAnalysisTable'
import {
  supplierEvaluations,
  suppliers,
  type SupplierName,
} from '../data/aiEvaluation'

export default function AIEvaluation() {
  const [activeSupplier, setActiveSupplier] = useState<SupplierName>('Accenture')
  const evaluation = supplierEvaluations[activeSupplier]

  return (
    <div className="space-y-6 p-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="font-display text-[28px] font-bold text-white">
              AI Evaluation Engine
            </h1>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-300" />
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            6,847 pages analysed across 14 suppliers | Powered by SmartCo AI
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg bg-smartco-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-smartco-600"
          >
            <Brain size={16} />
            Compare Suppliers
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Generate Eval Report
          </button>
          <button
            type="button"
            className="rounded-lg border border-smartco-500 px-4 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-500/10"
          >
            Draft Moderation Pack
          </button>
        </div>
      </div>

      {/* Supplier selector */}
      <SupplierTabs
        suppliers={suppliers}
        active={activeSupplier}
        onChange={setActiveSupplier}
      />

      {evaluation ? (
        <>
          <ScorecardRow cards={evaluation.scorecards} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[65fr_35fr]">
            <TraceAnalysisTable rows={evaluation.traceRows} />
            <EvaluationSidebar data={evaluation} />
          </div>
        </>
      ) : (
        <SupplierPlaceholder name={activeSupplier} />
      )}

      <ComparisonPanel />
    </div>
  )
}
