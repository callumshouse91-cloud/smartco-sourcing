import AnimatedProgressBar from '../ui/AnimatedProgressBar'
import { FadeIn, TableSkeleton, useLoadingReveal } from '../ui/Loading'

export type Priority = 'Must Have' | 'Should Have' | 'Nice to Have'
export type AIStatus = 'Clear' | 'Vague' | 'Conflicting'

export interface Requirement {
  id: string
  text: string
  category: string
  priority: Priority
  aiStatus: AIStatus
  trace: number
}

export const requirements: Requirement[] = [
  {
    id: 'REQ-001',
    text: 'The platform must support real-time data ingestion from minimum 12 legacy airport systems',
    category: 'Functional',
    priority: 'Must Have',
    aiStatus: 'Clear',
    trace: 86,
  },
  {
    id: 'REQ-002',
    text: 'Solution must achieve 99.9% uptime SLA with documented failover under 4 minutes',
    category: 'Non-Functional',
    priority: 'Must Have',
    aiStatus: 'Clear',
    trace: 79,
  },
  {
    id: 'REQ-003',
    text: 'All data must remain within UK borders — no offshore processing without written consent',
    category: 'Compliance',
    priority: 'Must Have',
    aiStatus: 'Vague',
    trace: 64,
  },
  {
    id: 'REQ-004',
    text: 'Supplier must provide dedicated UK-based team with min 3 aviation sector references',
    category: 'Commercial',
    priority: 'Must Have',
    aiStatus: 'Clear',
    trace: 92,
  },
  {
    id: 'REQ-005',
    text: "Platform must integrate with Heathrow's existing SAP S/4HANA environment",
    category: 'Integration',
    priority: 'Must Have',
    aiStatus: 'Clear',
    trace: 88,
  },
  {
    id: 'REQ-006',
    text: 'System response time under 2 seconds for 95% of user interactions at peak load',
    category: 'Non-Functional',
    priority: 'Should Have',
    aiStatus: 'Clear',
    trace: 71,
  },
  {
    id: 'REQ-007',
    text: 'Supplier to provide detailed TUPE transfer plan for 47 affected staff',
    category: 'Commercial',
    priority: 'Must Have',
    aiStatus: 'Conflicting',
    trace: 43,
  },
  {
    id: 'REQ-008',
    text: 'AI/ML capabilities for predictive analytics on passenger flow and resource allocation',
    category: 'Functional',
    priority: 'Should Have',
    aiStatus: 'Clear',
    trace: 68,
  },
]

function PriorityBadge({ priority }: { priority: Priority }) {
  const styles = {
    'Must Have': 'bg-coral-500/10 text-coral-500 border-coral-500/30',
    'Should Have': 'bg-amber-500/10 text-amber-600 border-amber-500/30',
    'Nice to Have': 'bg-gray-100 text-gray-600 border-border',
  }

  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 text-[11px] font-medium whitespace-nowrap ${styles[priority]}`}
    >
      {priority}
    </span>
  )
}

function AIStatusBadge({ status }: { status: AIStatus }) {
  if (status === 'Clear') {
    return (
      <span className="text-mint-500">
        ✓ Clear
      </span>
    )
  }
  return (
    <span className="text-amber-500">
      ⚠ {status}
    </span>
  )
}

interface RequirementsTableProps {
  rows: Requirement[]
}

export default function RequirementsTable({ rows }: RequirementsTableProps) {
  const loading = useLoadingReveal()

  if (loading) {
    return <TableSkeleton rows={8} />
  }

  return (
    <FadeIn>
      <div className="card overflow-hidden">
        <p className="px-4 pt-3 text-right text-[11px] text-gray-400 md:hidden">
          → scroll
        </p>
        <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface text-[11px] font-medium uppercase text-gray-600">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Requirement</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">AI Status</th>
              <th className="px-4 py-3">Supplier Trace %</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-border transition-colors last:border-0 hover:bg-surface ${
                  index % 2 === 0 ? 'bg-white' : 'bg-[#f9fafc]'
                }`}
              >
                <td className="px-4 py-3.5 font-mono text-xs text-navy">
                  {row.id}
                </td>
                <td className="max-w-md px-4 py-3.5 text-navy">
                  {row.text}
                </td>
                <td className="px-4 py-3.5 text-navy">{row.category}</td>
                <td className="px-4 py-3.5">
                  <PriorityBadge priority={row.priority} />
                </td>
                <td className="px-4 py-3.5 text-xs font-medium">
                  <AIStatusBadge status={row.aiStatus} />
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2">
                    <AnimatedProgressBar
                      value={row.trace}
                      className="h-1.5 w-16 overflow-hidden rounded-full bg-border"
                      barClassName="h-full rounded-full bg-smartco-500"
                    />
                    <span className="text-xs font-medium text-navy">
                      {row.trace}%
                    </span>
                  </div>
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
