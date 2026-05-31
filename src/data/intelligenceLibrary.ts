export const archiveStats = [
  { value: '247', label: 'Requirements archived' },
  { value: '6,847', label: 'Pages indexed and searchable' },
  { value: '14', label: 'Supplier profiles retained' },
  { value: '100%', label: 'Decision rationale documented' },
]

export const tagFilters = [
  'Requirements',
  'Supplier Responses',
  'Scores',
  'Decisions',
  'Lessons Learned',
]

export const archivedRequirements = [
  {
    id: 'REQ-001',
    text: 'Real-time data ingestion from minimum 12 legacy airport systems',
    category: 'Functional',
  },
  {
    id: 'REQ-003',
    text: 'All data must remain within UK borders — no offshore processing',
    category: 'Compliance',
  },
  {
    id: 'REQ-004',
    text: 'Dedicated UK-based team with min 3 aviation sector references',
    category: 'Commercial',
  },
  {
    id: 'REQ-005',
    text: "Integration with Heathrow's existing SAP S/4HANA environment",
    category: 'Integration',
  },
  {
    id: 'REQ-007',
    text: 'Detailed TUPE transfer plan for 47 affected staff',
    category: 'Commercial',
  },
]

export const supplierProfiles = [
  { name: 'Accenture', score: '86%', category: 'Technology Platform' },
  { name: 'Deloitte', score: '74%', category: 'Technology Platform' },
  { name: 'IBM', score: '71%', category: 'Technology Platform' },
  { name: 'Capgemini', score: '69%', category: 'Technology Platform' },
  { name: 'KPMG', score: '63%', category: 'Technology Platform' },
]

export const lessonsLearned = [
  'UK data residency requirement should be Must Have from outset — 3 suppliers non-compliant',
  'Aviation sector references should require minimum quantity in requirement text (REQ-004)',
  'TUPE requirements were underspecified — recommend dedicated TUPE section in future RFPs',
  'Commercial scoring weight should increase to 30% for infrastructure procurements',
]

export const accelerators = [
  {
    title: 'Requirements Template',
    description:
      'Export the 247 requirements as a pre-validated template for similar future procurements',
    button: 'Download Template',
  },
  {
    title: 'Supplier Benchmarks',
    description:
      '14 supplier profiles with scores — use as a benchmark shortlist for future technology sourcing',
    button: 'View Benchmarks',
  },
  {
    title: 'Scoring Framework',
    description:
      "Weighted evaluation framework — adapted for Heathrow's procurement standards",
    button: 'Reuse Framework',
  },
]

export const vmoPreviewCards = [
  { title: 'Contract Obligations', value: '47 tracked' },
  { title: 'SLA Performance', value: 'Live feeds' },
  { title: 'Risk Register', value: '12 items' },
  { title: 'Renewal Date', value: '22 Jul 2027' },
]
