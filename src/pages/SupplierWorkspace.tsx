const suppliers = [
  { name: 'Accenture', score: 86, status: 'Recommend', responses: '247/247' },
  { name: 'Deloitte', score: 74, status: 'Shortlist', responses: '231/247' },
  { name: 'IBM', score: 71, status: 'Challenge', responses: '218/247' },
  { name: 'Capgemini', score: 69, status: 'Shortlist', responses: '225/247' },
  { name: 'KPMG', score: 63, status: 'Hold', responses: '201/247' },
  { name: 'Infosys', score: 58, status: 'Reject', responses: '189/247' },
]

export default function SupplierWorkspace() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="font-display text-[28px] font-bold text-navy">
          Supplier Workspace
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          14 supplier responses ingested — 6,847 pages indexed
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="card overflow-hidden">
            <div className="border-b border-border bg-[#f9fafc] px-5 py-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {supplier.name}
                </h3>
                <span className="font-display text-xl font-bold text-navy">
                  {supplier.score}%
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-600">{supplier.status}</p>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Requirements traced</span>
                  <span className="font-medium text-navy">{supplier.responses}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-smartco-500"
                    style={{ width: `${supplier.score}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <p className="text-slate-400">Pages</p>
                  <p className="font-medium text-navy">482</p>
                </div>
                <div>
                  <p className="text-slate-400">AI flags</p>
                  <p className="font-medium text-navy">3</p>
                </div>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-smartco-500 hover:text-smartco-600"
              >
                View full evaluation →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
