export type SupplierName =
  | 'Accenture'
  | 'Deloitte'
  | 'IBM'
  | 'Capgemini'
  | 'KPMG'
  | 'Infosys'

export const suppliers: SupplierName[] = [
  'Accenture',
  'Deloitte',
  'IBM',
  'Capgemini',
  'KPMG',
  'Infosys',
]

export interface ScoreCard {
  category: string
  value: string
  type: 'bar' | 'badge'
  barValue?: number
  barColor?: 'blue' | 'mint'
  badgeColor?: 'green' | 'amber' | 'red'
}

export interface TraceRow {
  id: string
  summary: string
  assessment: string
  score: number
  evidence: string
  flagged: boolean
}

export interface SupplierEvaluation {
  scorecards: ScoreCard[]
  traceRows: TraceRow[]
  strengths: string[]
  risks: string[]
  recommendation: {
    badge: string
    text: string
    tone: 'recommend' | 'challenge' | 'shortlist'
  }
}

export const supplierEvaluations: Partial<
  Record<SupplierName, SupplierEvaluation>
> = {
  Accenture: {
    scorecards: [
      { category: 'Overall Fit', value: '86%', type: 'bar', barValue: 86, barColor: 'blue' },
      { category: 'Technical Capability', value: '91%', type: 'bar', barValue: 91, barColor: 'mint' },
      { category: 'Commercial Terms', value: '79%', type: 'bar', barValue: 79, barColor: 'blue' },
      { category: 'Aviation Experience', value: '88%', type: 'bar', barValue: 88, barColor: 'mint' },
      { category: 'Delivery Approach', value: '82%', type: 'bar', barValue: 82, barColor: 'blue' },
      { category: 'Risk Profile', value: 'Low', type: 'badge', badgeColor: 'green' },
    ],
    traceRows: [
      {
        id: 'REQ-001',
        summary: 'Real-time data ingestion',
        assessment:
          'Accenture commits to 15 integration connectors covering all 12 legacy systems. Reference: Section 3.2, p.47',
        score: 95,
        evidence: 'p.47',
        flagged: false,
      },
      {
        id: 'REQ-002',
        summary: '99.9% uptime SLA',
        assessment:
          'Confirmed with Azure infrastructure and documented 3.5-min failover in ref case (Gatwick 2022)',
        score: 92,
        evidence: 'p.89',
        flagged: false,
      },
      {
        id: 'REQ-003',
        summary: 'UK data residency',
        assessment:
          'Full UK data sovereignty confirmed. ISO 27001 and Cyber Essentials Plus certified.',
        score: 94,
        evidence: 'p.103',
        flagged: false,
      },
      {
        id: 'REQ-004',
        summary: 'UK aviation references',
        assessment:
          '4 references provided: Gatwick, Manchester, Dublin, Edinburgh. Exceeds minimum requirement.',
        score: 97,
        evidence: 'p.12',
        flagged: false,
      },
      {
        id: 'REQ-005',
        summary: 'SAP S/4HANA integration',
        assessment:
          'Accenture SAP practice confirmed. 3 active S/4HANA aviation deployments referenced.',
        score: 89,
        evidence: 'p.67',
        flagged: false,
      },
      {
        id: 'REQ-006',
        summary: '<2 second response time',
        assessment:
          'SLA committed. Load test results from comparable deployment provided.',
        score: 87,
        evidence: 'p.201',
        flagged: false,
      },
      {
        id: 'REQ-007',
        summary: 'TUPE transfer plan',
        assessment:
          'Preliminary TUPE plan provided. Some gaps in timeline — clarification recommended.',
        score: 71,
        evidence: 'p.178',
        flagged: true,
      },
      {
        id: 'REQ-008',
        summary: 'AI/ML capabilities',
        assessment:
          'Advanced ML platform described. 2 live aviation AI use cases referenced.',
        score: 88,
        evidence: 'p.234',
        flagged: false,
      },
    ],
    strengths: [
      'Strongest aviation sector experience of all 14 suppliers',
      'SAP integration capability fully validated with live references',
      'UK data residency confirmed — no compliance risk',
      "Delivery methodology aligned to Heathrow's agile governance model",
    ],
    risks: [
      'TUPE plan incomplete — recommend clarification meeting',
      'Pricing for Phase 3 (AI/ML build) not sufficiently detailed',
      'Key personnel commitments not contractually locked',
    ],
    recommendation: {
      badge: 'RECOMMEND FOR SHORTLIST',
      text: 'Accenture presents the strongest overall fit across all 247 requirements. Two clarification points recommended before final award.',
      tone: 'recommend',
    },
  },
  IBM: {
    scorecards: [
      { category: 'Overall Fit', value: '71%', type: 'bar', barValue: 71, barColor: 'blue' },
      { category: 'Technical Capability', value: '78%', type: 'bar', barValue: 78, barColor: 'mint' },
      { category: 'Commercial Terms', value: '68%', type: 'bar', barValue: 68, barColor: 'blue' },
      { category: 'Aviation Experience', value: '62%', type: 'bar', barValue: 62, barColor: 'mint' },
      { category: 'Delivery Approach', value: '74%', type: 'bar', barValue: 74, barColor: 'blue' },
      { category: 'Risk Profile', value: 'Medium', type: 'badge', badgeColor: 'amber' },
    ],
    traceRows: [
      {
        id: 'REQ-001',
        summary: 'Real-time data ingestion',
        assessment:
          'IBM proposes 11 connectors with phased rollout. Two legacy systems require custom middleware — timeline risk identified (p.47 vs p.112).',
        score: 72,
        evidence: 'p.47',
        flagged: true,
      },
      {
        id: 'REQ-002',
        summary: '99.9% uptime SLA',
        assessment:
          'SLA offered at 99.7% in base contract; 99.9% available at premium tier. Failover documentation incomplete.',
        score: 68,
        evidence: 'p.91',
        flagged: true,
      },
      {
        id: 'REQ-003',
        summary: 'UK data residency',
        assessment:
          'UK hosting confirmed for primary workloads. Secondary analytics processing may use EU region — requires legal review.',
        score: 76,
        evidence: 'p.108',
        flagged: false,
      },
      {
        id: 'REQ-004',
        summary: 'UK aviation references',
        assessment:
          '2 aviation references provided (Heathrow-adjacent cargo hub, regional airport). Below minimum of 3.',
        score: 58,
        evidence: 'p.18',
        flagged: true,
      },
      {
        id: 'REQ-005',
        summary: 'SAP S/4HANA integration',
        assessment:
          'IBM SAP partnership cited. One active S/4HANA aviation deployment referenced — limited depth.',
        score: 74,
        evidence: 'p.72',
        flagged: false,
      },
      {
        id: 'REQ-006',
        summary: '<2 second response time',
        assessment:
          'Performance benchmarks provided from financial services deployment. Aviation peak-load scenario not modelled.',
        score: 70,
        evidence: 'p.205',
        flagged: false,
      },
      {
        id: 'REQ-007',
        summary: 'TUPE transfer plan',
        assessment:
          'Detailed TUPE plan with 47-staff mapping. Strong HR transition framework — exceeds preliminary requirement.',
        score: 85,
        evidence: 'p.182',
        flagged: false,
      },
      {
        id: 'REQ-008',
        summary: 'AI/ML capabilities',
        assessment:
          'Watson AI platform described with aviation passenger flow prototype. Not yet in production deployment.',
        score: 79,
        evidence: 'p.241',
        flagged: false,
      },
    ],
    strengths: [
      'Enterprise-grade cloud infrastructure with proven global scale',
      'Strong TUPE transition planning and HR governance framework',
      'Competitive base pricing with flexible licensing model',
      'Deep technical bench in integration middleware',
    ],
    risks: [
      'Cloud migration timeline inconsistent with stated team size (p.47 vs p.112)',
      'Aviation sector references below minimum requirement',
      '99.9% uptime SLA requires premium tier — commercial impact unquantified',
    ],
    recommendation: {
      badge: 'CHALLENGE — CLARIFICATION REQUIRED',
      text: 'IBM shows solid enterprise capability but material gaps in aviation experience and delivery timeline consistency. Recommend clarification meeting before shortlisting.',
      tone: 'challenge',
    },
  },
}

export const comparisonCriteria = [
  'Technical Capability',
  'Commercial Terms',
  'Aviation Experience',
  'Delivery Approach',
  'Risk Profile',
] as const

export type ComparisonRating = 'green' | 'amber' | 'red'

export const comparisonMatrix: Record<
  (typeof comparisonCriteria)[number],
  Record<'Accenture' | 'Deloitte' | 'IBM', ComparisonRating>
> = {
  'Technical Capability': { Accenture: 'green', Deloitte: 'green', IBM: 'amber' },
  'Commercial Terms': { Accenture: 'amber', Deloitte: 'green', IBM: 'amber' },
  'Aviation Experience': { Accenture: 'green', Deloitte: 'amber', IBM: 'red' },
  'Delivery Approach': { Accenture: 'green', Deloitte: 'amber', IBM: 'amber' },
  'Risk Profile': { Accenture: 'green', Deloitte: 'green', IBM: 'red' },
}
