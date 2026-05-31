import { Link } from 'react-router-dom'
import { Archive, Brain, Shield } from 'lucide-react'
import AnimatedNumber from '../components/ui/AnimatedNumber'

const features = [
  {
    icon: Brain,
    iconColor: '#43e6a2',
    title: 'AI Evaluation',
    description:
      'Compare 14 suppliers against 247 requirements in minutes, not weeks',
  },
  {
    icon: Shield,
    iconColor: '#0065fc',
    title: 'Defensible Decisions',
    description:
      'Full audit trail, weighted scoring and traceable rationale for every recommendation',
  },
  {
    icon: Archive,
    iconColor: '#e6d343',
    title: 'Reusable Intelligence',
    description:
      'The platform stays after the RFP. Every decision becomes future procurement capital.',
  },
]

type CellValue = 'yes' | 'no' | 'basic' | 'partial' | 'manual' | 'limited' | 'ai'

interface ComparisonRow {
  capability: string
  traditional: CellValue
  ariba: CellValue
  smartco: CellValue
}

const comparisonRows: ComparisonRow[] = [
  {
    capability: 'Manage supplier responses',
    traditional: 'yes',
    ariba: 'yes',
    smartco: 'yes',
  },
  {
    capability: 'AI comparison of suppliers',
    traditional: 'no',
    ariba: 'basic',
    smartco: 'yes',
  },
  {
    capability: 'Requirement traceability',
    traditional: 'manual',
    ariba: 'partial',
    smartco: 'yes',
  },
  {
    capability: 'Executive summaries',
    traditional: 'manual',
    ariba: 'limited',
    smartco: 'ai',
  },
  {
    capability: 'Lessons learned repository',
    traditional: 'no',
    ariba: 'no',
    smartco: 'yes',
  },
  {
    capability: 'Future procurement intelligence',
    traditional: 'no',
    ariba: 'limited',
    smartco: 'yes',
  },
  {
    capability: 'Vendor management post-award',
    traditional: 'no',
    ariba: 'yes',
    smartco: 'yes',
  },
]

function ComparisonCell({ value }: { value: CellValue }) {
  if (value === 'yes') {
    return <span className="font-semibold text-mint-300">✓</span>
  }
  if (value === 'no') {
    return <span className="font-semibold text-coral-500">✗</span>
  }
  if (value === 'ai') {
    return <span className="text-mint-300">✓ AI-generated</span>
  }
  const labels: Record<string, string> = {
    basic: 'Basic',
    partial: 'Partial',
    manual: 'Manual',
    limited: 'Limited',
  }
  return <span className="text-slate-400">{labels[value]}</span>
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <p className="text-[11px] font-medium tracking-[0.15em] text-mint-300 uppercase">
          SmartCo × Heathrow Airport
        </p>
        <h1 className="mt-6 max-w-4xl text-center font-display text-4xl leading-tight font-bold md:text-[64px]">
          AI Enabled Strategic Sourcing
        </h1>
        <p className="mt-6 max-w-[600px] text-center text-lg text-slate-400 md:text-2xl">
          Run the RFP. Improve the decision. Keep the intelligence.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/dashboard"
            className="rounded-lg bg-smartco-500 px-8 py-3.5 text-center font-display text-base font-semibold text-white transition-colors hover:bg-smartco-600"
          >
            Enter Control Tower →
          </Link>
          <Link
            to="/ai-evaluation"
            className="rounded-lg border border-white px-8 py-3.5 text-center font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
          >
            Watch 90-sec Demo
          </Link>
        </div>
        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:gap-0">
          {[
            { value: '14', label: 'Suppliers Evaluated' },
            { value: '6,847', label: 'Pages Analysed' },
            { value: '86%', label: 'Top Supplier Score' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-8 sm:px-12 ${
                i > 0 ? 'sm:border-l sm:border-slate-700' : ''
              }`}
            >
              <p className="font-display text-3xl font-bold md:text-4xl">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-t border-slate-800 bg-[#0a1628] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          {features.map(({ icon: Icon, iconColor, title, description }) => (
            <div key={title} className="text-center md:text-left">
              <Icon size={32} style={{ color: iconColor }} className="mx-auto md:mx-0" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-slate-800 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-bold md:text-3xl">
            SmartCo doesn&apos;t replace your procurement system. We make it
            smarter.
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-slate-700/50">
            <p className="py-2 text-center text-[11px] text-slate-500 md:hidden">
              → scroll
            </p>
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700/50 bg-[#0f1e35]">
                  <th className="px-5 py-4 font-medium text-slate-400">
                    Capability
                  </th>
                  <th className="px-5 py-4 font-medium text-slate-400">
                    Traditional RFP
                  </th>
                  <th className="px-5 py-4 font-medium text-slate-400">
                    SAP Ariba
                  </th>
                  <th className="bg-smartco-500 px-5 py-4 font-semibold text-white">
                    SmartCo AI Layer
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.capability}
                    className={
                      i % 2 === 0
                        ? 'bg-[#1a2d4a]'
                        : 'bg-[#162540]'
                    }
                  >
                    <td className="px-5 py-3.5 font-medium text-slate-300">
                      {row.capability}
                    </td>
                    <td className="px-5 py-3.5">
                      <ComparisonCell value={row.traditional} />
                    </td>
                    <td className="px-5 py-3.5">
                      <ComparisonCell value={row.ariba} />
                    </td>
                    <td className="bg-smartco-500/10 px-5 py-3.5">
                      <ComparisonCell
                        value={
                          row.capability === 'Vendor management post-award'
                            ? 'yes'
                            : row.smartco
                        }
                      />
                      {row.capability === 'Vendor management post-award' && (
                        <span className="text-mint-300"> with AI</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © SmartCo 2025 — smart-co.co.uk — AI Enabled Strategic Sourcing
          </p>
          <img
            src="/smartco-logo-white.png"
            alt="SmartCo"
            className="h-6 w-auto opacity-90"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/smartco-logo-white.svg'
            }}
          />
        </div>
      </footer>
    </div>
  )
}
