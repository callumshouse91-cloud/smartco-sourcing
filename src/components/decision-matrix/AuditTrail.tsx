import { auditEvents } from '../../data/decisionMatrix'

export default function AuditTrail() {
  return (
    <div className="card p-5">
      <h3 className="text-[15px] font-bold text-navy">Audit Trail</h3>
      <p className="mt-1 text-xs text-gray-500">
        All scoring decisions are traceable and exportable for procurement
        governance
      </p>
      <div className="mt-4 space-y-3">
        {auditEvents.map((event) => (
          <div key={event.text} className="flex gap-3 text-sm text-gray-600">
            <span className="shrink-0">{event.icon}</span>
            <span>{event.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
