import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  Archive,
  BarChart3,
  Brain,
  Building2,
  Calendar,
  CheckCircle,
  FileText,
  Search,
  Shield,
  Target,
} from 'lucide-react'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TOTAL_STEPS = 6

const PROGRESS_WIDTHS = [16, 33, 50, 66, 83, 100]

const STEP_LABELS = [
  'Step 1 of 6 — The Problem',
  'Step 2 of 6 — The Platform',
  'Step 3 of 6 — Live Data',
  'Step 4 of 6 — AI Evaluation in Action',
  'Step 5 of 6 — The Board Pack',
  'Step 6 of 6 — The Intelligence Stays',
]

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-smartco-500 uppercase">
      {children}
    </p>
  )
}

function Headline({ children }: { children: string }) {
  return (
    <h2 className="mb-6 font-display text-[26px] leading-snug font-semibold text-navy">
      {children}
    </h2>
  )
}

function StepCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-white p-9 shadow-sm">
      {children}
    </div>
  )
}

function DemoStatCard({
  value,
  label,
  icon: Icon,
  iconColor,
}: {
  value: string
  label: string
  icon: typeof Building2
  iconColor: string
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-5">
      <Icon size={24} className="mb-3" style={{ color: iconColor }} />
      <p className="font-display text-[36px] leading-none font-bold text-navy">
        {value}
      </p>
      <p className="mt-2 text-sm text-gray-600">{label}</p>
    </div>
  )
}

function Step1() {
  const pains = [
    'Weeks spent manually reading hundreds of supplier pages — with no AI assistance',
    'Evaluation reports written from scratch every procurement cycle',
    'No record of why decisions were made — zero auditability for future teams',
  ]

  return (
    <StepCard>
      <Eyebrow>WHY THIS EXISTS</Eyebrow>
      <Headline>
        Most RFPs end with a recommendation. Then everything disappears.
      </Headline>
      {pains.map((text) => (
        <div
          key={text}
          className="mb-3 rounded-lg border border-[#e0e4ec] border-l-[3px] border-l-coral-500 bg-[#fff5f5] px-4 py-4 last:mb-0"
        >
          <p className="text-sm leading-snug text-navy">{text}</p>
        </div>
      ))}
      <div className="mt-4 flex items-start gap-3 rounded-lg border border-mint-300 bg-[#f0fdf9] p-4">
        <Brain size={18} className="mt-0.5 shrink-0 text-mint-300" />
        <p className="text-sm leading-snug text-navy">
          SmartCo AI addresses all three — and leaves behind a reusable
          intelligence asset when the RFP is done.
        </p>
      </div>
    </StepCard>
  )
}

function Step2() {
  const cards = [
    {
      icon: Brain,
      color: '#0065fc',
      title: 'AI Evaluation',
      body: 'Every supplier response read, scored and traced back to your requirements. Automatically.',
      tag: 'Weeks → Minutes',
      tagClass: 'bg-smartco-50 text-smartco-500',
    },
    {
      icon: Shield,
      color: '#43e6a2',
      title: 'Defensible Decisions',
      body: 'Weighted scoring, full audit trail, traceable rationale for every recommendation.',
      tag: 'Fully Auditable',
      tagClass: 'bg-[#f0fdf9] text-mint-500',
    },
    {
      icon: Archive,
      color: '#e6d343',
      title: 'Reusable Intelligence',
      body: 'Every score, response and decision preserved — ready to accelerate your next procurement.',
      tag: 'Stays After RFP',
      tagClass: 'bg-[#fffef0] text-navy',
    },
  ]

  return (
    <StepCard>
      <Eyebrow>WHAT SMARTCO DELIVERS</Eyebrow>
      <Headline>Three things your procurement team has never had before.</Headline>
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 rounded-xl border border-border p-6"
          >
            <card.icon size={36} style={{ color: card.color }} />
            <h3 className="font-display text-base font-semibold text-navy">
              {card.title}
            </h3>
            <p className="flex-1 text-[13px] leading-snug text-gray-600">
              {card.body}
            </p>
            <span
              className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${card.tagClass}`}
            >
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </StepCard>
  )
}

function Step3() {
  const risks = [
    {
      border: 'border-l-coral-500',
      bg: 'bg-[#fff5f5]',
      text: 'IBM: Cloud migration timeline inconsistent with stated team size (p.47 vs p.112)',
      tag: 'Delivery Risk',
    },
    {
      border: 'border-l-amber-500',
      bg: 'bg-[#fffbf0]',
      text: 'Capgemini: Pricing not aligned to scope — potential £2.3M variance',
      tag: 'Commercial Risk',
    },
    {
      border: 'border-l-amber-500',
      bg: 'bg-[#fffbf0]',
      text: 'Infosys: UK data residency commitment missing',
      tag: 'Compliance Gap',
    },
    {
      border: 'border-l-smartco-500',
      bg: 'bg-[#f0f6ff]',
      text: 'KPMG: Limited aviation references (1 vs required 3)',
      tag: 'Experience Gap',
    },
  ]

  return (
    <StepCard>
      <Eyebrow>HEATHROW AIRPORT RFP — LIVE</Eyebrow>
      <Headline>Here's what the platform shows on your RFP right now.</Headline>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <DemoStatCard
          value="14"
          label="Suppliers Evaluated"
          icon={Building2}
          iconColor="#0065fc"
        />
        <DemoStatCard
          value="247"
          label="Requirements Mapped"
          icon={Target}
          iconColor="#43e6a2"
        />
        <DemoStatCard
          value="86%"
          label="Top Supplier Score"
          icon={Brain}
          iconColor="#e6d343"
        />
        <DemoStatCard
          value="12"
          label="Days to Decision"
          icon={Calendar}
          iconColor="#e65c43"
        />
      </div>
      <div className="rounded-xl border border-border bg-white p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h3 className="text-[15px] font-bold text-navy">
            AI-Identified Risk Flags
          </h3>
          <span className="rounded-full bg-coral-500/15 px-2.5 py-0.5 text-[11px] font-medium text-coral-500">
            4 require attention
          </span>
        </div>
        <div className="space-y-3">
          {risks.map((risk) => (
            <div
              key={risk.text}
              className={`rounded-lg border border-border border-l-[3px] px-4 py-3 ${risk.border} ${risk.bg}`}
            >
              <p className="text-sm leading-snug text-gray-600">{risk.text}</p>
              <p className="mt-1.5 text-[11px] font-medium text-slate-400">
                {risk.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-gray-600 italic">
        Generated by SmartCo AI reading 6,847 pages across 14 supplier
        submissions.
      </p>
    </StepCard>
  )
}

function ScoreColumn({
  label,
  score,
  fillColor = '#0065fc',
}: {
  label: string
  score: string
  fillColor?: string
}) {
  const numeric = parseInt(score, 10)
  const width = Number.isNaN(numeric) ? 0 : numeric

  return (
    <div className="flex flex-1 flex-col items-center text-center">
      <p className="text-[11px] font-medium tracking-wide text-gray-600 uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-[22px] font-bold text-navy">
        {score}
      </p>
      {width > 0 && (
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${width}%`, backgroundColor: fillColor }}
          />
        </div>
      )}
    </div>
  )
}

function Step4() {
  const strengths = [
    'Strongest aviation experience of all 14 suppliers',
    'SAP integration validated with live deployments',
    'UK data residency — zero compliance risk',
    'Delivery methodology aligned to Heathrow governance',
  ]

  const risks = [
    'TUPE plan incomplete — clarification recommended',
    'Phase 3 AI/ML pricing insufficiently detailed',
    'Key personnel not contractually committed',
  ]

  return (
    <StepCard>
      <Eyebrow>THE CORE DIFFERENTIATOR</Eyebrow>
      <Headline>The AI reads every page. You make the decision.</Headline>
      <div className="flex flex-wrap gap-4 border-b border-border pb-6">
        <ScoreColumn label="Overall Fit" score="86%" />
        <ScoreColumn label="Technical" score="91%" />
        <ScoreColumn label="Commercial" score="79%" />
        <ScoreColumn label="Aviation" score="88%" fillColor="#43e6a2" />
        <ScoreColumn label="Delivery" score="82%" />
        <ScoreColumn label="Risk" score="Low" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border border-l-[3px] border-l-mint-300 bg-[#f0fdf9] p-4">
          <p className="mb-3 text-[13px] font-bold text-navy">
            AI-Identified Strengths
          </p>
          <ul className="space-y-2">
            {strengths.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <CheckCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-mint-300"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border border-l-[3px] border-l-amber-500 bg-[#fffbf0] p-4">
          <p className="mb-3 text-[13px] font-bold text-navy">
            Risks & Gaps
          </p>
          <ul className="space-y-2">
            {risks.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <AlertTriangle
                  size={16}
                  className="mt-0.5 shrink-0 text-amber-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-3">
        <span className="rounded-full bg-mint-300 px-7 py-2.5 font-display text-sm font-bold text-navy">
          ✓ RECOMMEND FOR SHORTLIST — ACCENTURE
        </span>
        <p className="text-center text-xs text-gray-600 italic">
          247 requirements traced · 6,847 pages analysed · 30 seconds
        </p>
      </div>
    </StepCard>
  )
}

function Step5() {
  return (
    <StepCard>
      <Eyebrow>EXEC PACK GENERATOR</Eyebrow>
      <Headline>The board paper writes itself.</Headline>
      <div
        className="mx-auto max-w-[620px] rounded-lg border border-border bg-white p-8 shadow-md"
        style={{ borderTop: '3px solid #0065fc' }}
      >
        <div className="mb-6 flex items-center justify-between">
          <img
            src="/smartco-logo.png"
            alt="SmartCo"
            className="h-6 w-auto"
            onError={(e) => {
              e.currentTarget.src = '/smartco-logo.svg'
            }}
          />
          <span className="text-[11px] text-gray-600">
            CONFIDENTIAL · 8 July 2025
          </span>
        </div>
        <div className="font-serif text-[13px] leading-relaxed text-[#1a1a2e]">
          <p className="text-[11px] tracking-wide text-gray-600 uppercase">
            SMARTCO · HEATHROW AIRPORT TECHNOLOGY PLATFORM SOURCING
          </p>
          <h3 className="mt-2 font-display text-lg font-bold text-navy">
            Board Recommendation Paper
          </h3>
          <h4 className="mt-4 text-sm font-bold text-smartco-500">
            EXECUTIVE RECOMMENDATION
          </h4>
          <p className="mt-2">
            Following evaluation of 14 supplier responses against 247
            requirements, SmartCo recommends Accenture for award of the Heathrow
            Technology Platform contract.
          </p>
          <h4 className="mt-4 text-sm font-bold text-smartco-500">
            SUMMARY RATIONALE
          </h4>
          <ul className="mt-2 list-none space-y-1">
            <li>· Highest overall score: 86% (industry benchmark: 71%)</li>
            <li>· Strongest UK aviation credentials: 4 verified references</li>
            <li>· Full UK data sovereignty confirmed</li>
          </ul>
          <h4 className="mt-4 text-sm font-bold text-smartco-500">
            TOP 3 SUPPLIERS
          </h4>
          <table className="mt-2 w-full border-collapse text-xs">
            <tbody>
              {[
                ['1', 'Accenture', '86%', 'RECOMMEND', 'bg-mint-500/20 text-mint-500'],
                ['2', 'Deloitte', '74%', 'SHORTLIST', 'bg-smartco-50 text-smartco-500'],
                ['3', 'IBM', '71%', 'CHALLENGE', 'bg-amber-500/15 text-amber-600'],
              ].map(([rank, name, score, status, pillClass]) => (
                <tr key={name} className="border-b border-border">
                  <td className="py-2 pr-2">{rank}</td>
                  <td className="py-2 pr-2 font-medium">{name}</td>
                  <td className="py-2 pr-2">{score}</td>
                  <td className="py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${pillClass}`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="mt-4 text-sm font-bold text-smartco-500">
            NEXT STEPS
          </h4>
          <ul className="mt-2 space-y-1">
            <li>Board paper distributed — 10 July</li>
            <li>IBM clarification meeting — 12 July</li>
            <li>Contract negotiations begin — 22 July</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-gray-600 italic">
        Review, approve, send. Not 3 weeks of manual writing.
      </p>
    </StepCard>
  )
}

function Step6({ onEnterTower }: { onEnterTower: () => void }) {
  const reuseCards = [
    {
      icon: FileText,
      title: 'Requirements Template',
      body: '247 validated requirements ready to reuse on your next technology procurement',
      link: 'Download Template →',
    },
    {
      icon: Building2,
      title: 'Supplier Benchmarks',
      body: '14 scored supplier profiles — use as a benchmark shortlist for future sourcing',
      link: 'View Benchmarks →',
    },
    {
      icon: BarChart3,
      title: 'Scoring Framework',
      body: "Weighted evaluation framework adapted to Heathrow's procurement standards",
      link: 'Reuse Framework →',
    },
  ]

  return (
    <StepCard>
      <Eyebrow>POST-RFP VALUE</Eyebrow>
      <Headline>When the RFP ends, the knowledge doesn't.</Headline>
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DemoStatCard
          value="247"
          label="Requirements Archived"
          icon={Archive}
          iconColor="#0065fc"
        />
        <DemoStatCard
          value="6,847"
          label="Pages Indexed"
          icon={Search}
          iconColor="#43e6a2"
        />
        <DemoStatCard
          value="14"
          label="Supplier Profiles Retained"
          icon={Building2}
          iconColor="#e6d343"
        />
        <DemoStatCard
          value="100%"
          label="Decision Rationale Documented"
          icon={CheckCircle}
          iconColor="#43e6a2"
        />
      </div>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {reuseCards.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-border border-l-[3px] border-l-yellow-brand bg-white p-5"
          >
            <card.icon size={24} className="text-yellow-brand" />
            <h3 className="mt-3 font-display text-sm font-semibold text-navy">
              {card.title}
            </h3>
            <p className="mt-2 text-[13px] leading-snug text-gray-600">
              {card.body}
            </p>
            <button
              type="button"
              className="mt-3 text-sm font-medium text-smartco-500 hover:underline"
            >
              {card.link}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={onEnterTower}
          className="h-[52px] rounded-xl bg-smartco-500 px-10 font-display text-base font-semibold text-white transition-colors hover:bg-smartco-600"
        >
          Enter the Control Tower →
        </button>
        <p className="text-xs text-gray-600">
          You've seen the overview. The full platform is ready.
        </p>
      </div>
    </StepCard>
  )
}

function renderStep(step: number, onEnterTower: () => void) {
  switch (step) {
    case 1:
      return <Step1 />
    case 2:
      return <Step2 />
    case 3:
      return <Step3 />
    case 4:
      return <Step4 />
    case 5:
      return <Step5 />
    case 6:
      return <Step6 onEnterTower={onEnterTower} />
    default:
      return null
  }
}

export default function Demo() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const goNext = useCallback(() => {
    if (step >= TOTAL_STEPS) {
      navigate('/dashboard')
      return
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }, [step, navigate])

  const goBack = useCallback(() => {
    setStep((s) => Math.max(s - 1, 1))
  }, [])

  const enterTower = useCallback(() => {
    navigate('/dashboard')
  }, [navigate])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goBack()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goBack])

  const progressWidth = PROGRESS_WIDTHS[step - 1]

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <div className="sticky top-0 z-50 bg-white">
        <header className="flex h-14 items-center justify-between border-b border-border px-6 md:px-10">
          <img
            src="/smartco-logo.png"
            alt="SmartCo"
            className="h-7 w-[110px] object-contain object-left"
            onError={(e) => {
              e.currentTarget.src = '/smartco-logo.svg'
            }}
          />

          <div className="flex items-center gap-0">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => {
              const stepNum = i + 1
              const active = stepNum === step
              const done = stepNum < step
              return (
                <div key={stepNum} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="h-px w-4 sm:w-6"
                      style={{
                        backgroundColor:
                          done || active ? '#0065fc' : '#e0e4ec',
                      }}
                    />
                  )}
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: active ? 10 : 8,
                      height: active ? 10 : 8,
                      backgroundColor:
                        active || done ? '#0065fc' : '#e0e4ec',
                    }}
                  />
                </div>
              )
            })}
          </div>

          <Link
            to="/"
            className="text-[13px] text-gray-600 transition-colors hover:text-navy"
          >
            Exit Demo
          </Link>
        </header>

        <div className="h-[3px] w-full bg-border">
          <div
            className="h-full bg-smartco-500 transition-all duration-[400ms] ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[860px] px-6 py-10 md:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep(step, enterTower)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="sticky bottom-0 z-50 border-t border-border bg-white px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <p className="text-[13px] text-gray-600">{STEP_LABELS[step - 1]}</p>
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="rounded-lg border border-smartco-500 px-5 py-2 text-sm font-medium text-smartco-500 transition-colors hover:bg-smartco-50"
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={goNext}
              className="rounded-lg bg-smartco-500 px-5 py-2 font-display text-sm font-semibold text-white transition-colors hover:bg-smartco-600"
            >
              {step === TOTAL_STEPS
                ? 'Enter Control Tower →'
                : 'Next →'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
