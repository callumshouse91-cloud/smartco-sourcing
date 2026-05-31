import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const suppliers = [
  { name: 'Accenture', completed: 94, remaining: 6, score: '86%' },
  { name: 'Deloitte', completed: 88, remaining: 12, score: '74%' },
  { name: 'IBM', completed: 85, remaining: 15, score: '71%' },
  { name: 'Capgemini', completed: 81, remaining: 19, score: '69%' },
  { name: 'KPMG', completed: 76, remaining: 24, score: '63%' },
  { name: 'Infosys', completed: 71, remaining: 29, score: '58%' },
]

export default function EvaluationProgressChart() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <h3 className="mb-5 text-[15px] font-bold text-white">
        Supplier Evaluation Progress
      </h3>
      <div className="flex gap-4">
        <div className="min-w-0 flex-1">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={suppliers}
              layout="vertical"
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              barCategoryGap={14}
            >
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis
                type="category"
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 13 }}
                width={72}
              />
              <Bar
                dataKey="completed"
                stackId="progress"
                fill="#0065fc"
                radius={[0, 0, 0, 0]}
                barSize={18}
              />
              <Bar
                dataKey="remaining"
                stackId="progress"
                fill="#334155"
                radius={[0, 4, 4, 0]}
                barSize={18}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex shrink-0 flex-col justify-around py-1">
          {suppliers.map((s) => (
            <span
              key={s.name}
              className="rounded-md bg-smartco-500/15 px-2 py-0.5 text-center text-xs font-semibold text-white"
            >
              {s.score}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
