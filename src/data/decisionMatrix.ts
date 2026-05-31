export type Recommendation =
  | 'RECOMMEND'
  | 'SHORTLIST'
  | 'CHALLENGE'
  | 'HOLD'
  | 'REJECT'

export interface SupplierScore {
  name: string
  overall: number
  technical: number
  commercial: number
  delivery: number
  aviation: number
  risk: 'Low' | 'Med' | 'High'
  costBand: string
  recommendation: Recommendation
  notes?: string
}

export const evaluationWeights = [
  { category: 'Technical Capability', weight: 30 },
  { category: 'Commercial Terms', weight: 25 },
  { category: 'Delivery Approach', weight: 20 },
  { category: 'Aviation Experience', weight: 15 },
  { category: 'Risk Profile', weight: 10 },
]

export const supplierScores: SupplierScore[] = [
  {
    name: 'Accenture',
    overall: 86,
    technical: 91,
    commercial: 79,
    delivery: 82,
    aviation: 88,
    risk: 'Low',
    costBand: '£££',
    recommendation: 'RECOMMEND',
    notes:
      'Accenture consistently strong across all criteria. Key differentiator is depth of UK aviation references (4 vs avg 1.2 for other suppliers). Commercial terms slightly above mid-market but justified by delivery confidence. TUPE plan requires one clarification meeting before final award recommendation.',
  },
  {
    name: 'Deloitte',
    overall: 74,
    technical: 78,
    commercial: 81,
    delivery: 72,
    aviation: 71,
    risk: 'Med',
    costBand: '££',
    recommendation: 'SHORTLIST',
    notes:
      'Deloitte offers competitive commercial terms and solid governance framework. Aviation experience adequate but not market-leading. Recommend for shortlist pending commercial clarification on Phase 2 pricing.',
  },
  {
    name: 'IBM',
    overall: 71,
    technical: 84,
    commercial: 68,
    delivery: 76,
    aviation: 62,
    risk: 'Med',
    costBand: '££££',
    recommendation: 'CHALLENGE',
    notes:
      'Strong technical platform but aviation references below threshold. Cloud migration timeline inconsistency flagged by AI (p.47 vs p.112). Clarification meeting recommended before shortlist decision.',
  },
  {
    name: 'Capgemini',
    overall: 69,
    technical: 72,
    commercial: 74,
    delivery: 68,
    aviation: 66,
    risk: 'Med',
    costBand: '££',
    recommendation: 'SHORTLIST',
    notes:
      'Balanced proposal with competitive pricing. Commercial risk identified — potential £2.3M variance in scope assumptions. Suitable for shortlist with commercial moderation.',
  },
  {
    name: 'KPMG',
    overall: 63,
    technical: 67,
    commercial: 71,
    delivery: 61,
    aviation: 58,
    risk: 'High',
    costBand: '£££',
    recommendation: 'HOLD',
    notes:
      'Strong methodology but limited aviation sector references (1 vs required 3). Delivery approach credible but experience gap is material. Hold pending reference validation.',
  },
  {
    name: 'Infosys',
    overall: 58,
    technical: 63,
    commercial: 59,
    delivery: 62,
    aviation: 44,
    risk: 'High',
    costBand: '£',
    recommendation: 'REJECT',
    notes:
      'UK data residency commitment missing from response. Aviation experience significantly below requirement. Cost advantage does not offset compliance and delivery risks.',
  },
  {
    name: 'Wipro',
    overall: 54,
    technical: 58,
    commercial: 62,
    delivery: 51,
    aviation: 41,
    risk: 'High',
    costBand: '£',
    recommendation: 'REJECT',
    notes:
      'Lowest cost option but insufficient aviation sector depth. Delivery model relies heavily on offshore resources — misaligned with Heathrow requirements.',
  },
  {
    name: 'PwC',
    overall: 52,
    technical: 54,
    commercial: 67,
    delivery: 49,
    aviation: 38,
    risk: 'High',
    costBand: '£££',
    recommendation: 'REJECT',
    notes:
      'Advisory-led approach without sufficient platform delivery capability. Aviation experience minimal. Not suitable for technology platform sourcing.',
  },
  {
    name: 'Cognizant',
    overall: 61,
    technical: 65,
    commercial: 63,
    delivery: 58,
    aviation: 52,
    risk: 'High',
    costBand: '££',
    recommendation: 'HOLD',
    notes:
      'Mid-range scores across criteria. Offshore delivery model requires careful TUPE and governance review before consideration.',
  },
  {
    name: 'TCS',
    overall: 57,
    technical: 61,
    commercial: 55,
    delivery: 59,
    aviation: 46,
    risk: 'High',
    costBand: '£',
    recommendation: 'REJECT',
    notes:
      'Competitive pricing but aviation references and UK data residency commitments require substantial clarification.',
  },
  {
    name: 'HCL Technologies',
    overall: 55,
    technical: 59,
    commercial: 57,
    delivery: 54,
    aviation: 43,
    risk: 'High',
    costBand: '£',
    recommendation: 'REJECT',
    notes:
      'Technical capability adequate for generic enterprise but lacks aviation-specific platform experience.',
  },
  {
    name: 'Atos',
    overall: 60,
    technical: 64,
    commercial: 58,
    delivery: 62,
    aviation: 51,
    risk: 'High',
    costBand: '££',
    recommendation: 'HOLD',
    notes:
      'Existing public sector relationships noted. Aviation platform experience limited — hold for reference check.',
  },
  {
    name: 'DXC Technology',
    overall: 56,
    technical: 60,
    commercial: 54,
    delivery: 57,
    aviation: 47,
    risk: 'High',
    costBand: '££',
    recommendation: 'REJECT',
    notes:
      'Legacy infrastructure expertise but weak alignment to Heathrow agile delivery model and aviation use cases.',
  },
  {
    name: 'CGI',
    overall: 59,
    technical: 62,
    commercial: 61,
    delivery: 55,
    aviation: 53,
    risk: 'High',
    costBand: '££',
    recommendation: 'HOLD',
    notes:
      'Public sector track record in UK. Platform modernisation experience relevant but aviation depth below threshold.',
  },
]

export const auditEvents = [
  {
    icon: '📋',
    text: 'Evaluation criteria finalised — SmartCo & Heathrow team — 28 Jun 2025',
  },
  {
    icon: '📄',
    text: '14 supplier responses ingested by AI — 1 Jul 2025',
  },
  {
    icon: '🤖',
    text: 'AI scoring completed — 247 requirements × 14 suppliers — 3 Jul 2025',
  },
  {
    icon: '👥',
    text: 'Human moderation review — Tom Bradshaw, Hannah Mercer (SmartCo) — 5 Jul 2025',
  },
  {
    icon: '✅',
    text: 'Scores finalised and locked — 7 Jul 2025',
  },
  {
    icon: '📊',
    text: 'Decision Matrix exported to Heathrow Procurement Board — pending',
  },
]

export function scoreColorClass(value: number): string {
  if (value >= 90) return 'text-mint-300'
  if (value >= 75) return 'text-white'
  if (value >= 60) return 'text-amber-400'
  return 'text-coral-500'
}

export function recommendationBadgeClass(rec: Recommendation): string {
  switch (rec) {
    case 'RECOMMEND':
      return 'bg-mint-500/15 text-mint-300 border-mint-300/30'
    case 'SHORTLIST':
      return 'bg-smartco-500/15 text-smartco-400 border-smartco-500/30'
    case 'CHALLENGE':
      return 'bg-amber-500/15 text-amber-400 border-amber-500/30'
    case 'HOLD':
      return 'bg-slate-600/20 text-slate-400 border-slate-600/40'
    case 'REJECT':
      return 'bg-coral-500/15 text-coral-500 border-coral-500/30'
  }
}

export function riskBadgeClass(risk: 'Low' | 'Med' | 'High'): string {
  switch (risk) {
    case 'Low':
      return 'text-mint-300'
    case 'Med':
      return 'text-amber-400'
    case 'High':
      return 'text-coral-500'
  }
}
