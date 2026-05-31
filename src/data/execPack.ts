import type { LucideIcon } from 'lucide-react'
import {
  FileText,
  FileCheck,
  ShieldAlert,
  ClipboardList,
  Scale,
  FileSignature,
} from 'lucide-react'

export type DocumentStatus = 'generated' | 'generating' | 'not_started'

export interface ExecDocument {
  id: string
  title: string
  description: string
  status: DocumentStatus
  icon: LucideIcon
  iconColor: string
}

export const execDocuments: ExecDocument[] = [
  {
    id: 'comparison',
    title: 'Supplier Comparison Pack',
    description:
      'Side-by-side evaluation of all 14 suppliers across 247 requirements',
    status: 'generated',
    icon: FileText,
    iconColor: '#0065fc',
  },
  {
    id: 'board-paper',
    title: 'Board Recommendation Paper',
    description:
      'Executive summary with recommendation, rationale and risk summary',
    status: 'generated',
    icon: FileCheck,
    iconColor: '#43e6a2',
  },
  {
    id: 'risk-report',
    title: 'Risk & Compliance Report',
    description:
      'Identified risks, compliance gaps and mitigation recommendations',
    status: 'generated',
    icon: ShieldAlert,
    iconColor: '#e65c43',
  },
  {
    id: 'full-eval',
    title: 'Full Evaluation Report',
    description:
      'Complete requirement-by-requirement analysis for all shortlisted suppliers',
    status: 'generating',
    icon: ClipboardList,
    iconColor: '#0065fc',
  },
  {
    id: 'shortlist',
    title: 'Shortlist Rationale',
    description:
      'Documented rationale for shortlist decisions — audit ready',
    status: 'not_started',
    icon: Scale,
    iconColor: '#e6d343',
  },
  {
    id: 'contracting',
    title: 'Contracting Considerations',
    description:
      'AI-identified contract points, SLA recommendations and commercial flags',
    status: 'not_started',
    icon: FileSignature,
    iconColor: '#64748b',
  },
]

export function statusLabel(status: DocumentStatus): string {
  switch (status) {
    case 'generated':
      return 'Generated ✓'
    case 'generating':
      return 'Generating...'
    case 'not_started':
      return 'Not started'
  }
}

export function statusBadgeClass(status: DocumentStatus): string {
  switch (status) {
    case 'generated':
      return 'bg-mint-500/15 text-mint-300'
    case 'generating':
      return 'bg-smartco-500/15 text-smartco-400'
    case 'not_started':
      return 'bg-slate-600/20 text-slate-500'
  }
}
