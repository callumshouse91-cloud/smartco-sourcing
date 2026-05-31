import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Must Have', value: 142, color: '#0065fc' },
  { name: 'Should Have', value: 67, color: '#43e6a2' },
  { name: 'Nice to Have', value: 38, color: '#64748b' },
]

export default function MoSCoWChart() {
  return (
    <div className="card p-5">
      <h3 className="mb-4 font-display text-[15px] font-bold text-navy">
        MoSCoW Breakdown
      </h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={72}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="font-medium text-navy">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
