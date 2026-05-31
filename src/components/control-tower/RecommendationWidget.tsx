import PulseBadge from '../ui/PulseBadge'

function CircularProgress({ value }: { value: number }) {
  const size = 120
  const stroke = 8
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="mx-auto">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#334155"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#0065fc"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="22"
        fontWeight="700"
        fontFamily="Outfit, system-ui, sans-serif"
      >
        {value}%
      </text>
    </svg>
  )
}

const rankings = [
  { rank: 1, supplier: 'Accenture', score: '86%', status: 'Recommend', statusType: 'recommend' as const },
  { rank: 2, supplier: 'Deloitte', score: '74%', status: 'Shortlist', statusType: 'shortlist' as const },
  { rank: 3, supplier: 'IBM', score: '71%', status: 'Challenge', statusType: 'challenge' as const },
]

const criteria = ['Highest Score', 'Best Aviation Fit', 'Lowest Risk']

export default function RecommendationWidget() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <h3 className="mb-5 text-[15px] font-bold text-white">
        AI Recommendation Status
      </h3>

      <CircularProgress value={86} />

      <div className="mt-4 text-center">
        <p className="font-display text-lg font-semibold text-white">Accenture</p>
        <PulseBadge className="mt-1.5 inline-block rounded-full bg-mint-500/15 px-3 py-0.5 text-[11px] font-bold tracking-wide text-mint-300">
          RECOMMEND
        </PulseBadge>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {criteria.map((c) => (
          <span
            key={c}
            className="rounded-md border border-slate-600/50 bg-[#0f1e35] px-2.5 py-1 text-[11px] text-slate-400"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-lg border border-slate-700/40">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-700/40 bg-[#0f1e35]/80 text-slate-500">
              <th className="px-3 py-2 font-medium">Rank</th>
              <th className="px-3 py-2 font-medium">Supplier</th>
              <th className="px-3 py-2 font-medium">Score</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((row) => (
              <tr
                key={row.rank}
                className="border-b border-slate-700/30 last:border-0"
              >
                <td className="px-3 py-2.5 text-slate-400">{row.rank}</td>
                <td className="px-3 py-2.5 font-medium text-white">
                  {row.supplier}
                </td>
                <td className="px-3 py-2.5 text-white">{row.score}</td>
                <td className="px-3 py-2.5">
                  <span
                    className={
                      row.statusType === 'recommend'
                        ? 'text-mint-300'
                        : row.statusType === 'challenge'
                          ? 'text-yellow-brand'
                          : 'text-slate-400'
                    }
                  >
                    {row.status}
                    {row.statusType === 'recommend' && ' ✓'}
                    {row.statusType === 'challenge' && ' ⚠'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
