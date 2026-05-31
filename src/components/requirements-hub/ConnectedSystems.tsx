import {
  Database,
  FolderOpen,
  Mail,
  ShoppingCart,
  Users,
} from 'lucide-react'

const systems = [
  { name: 'SAP S/4HANA', icon: Database, status: 'Connected', statusColor: 'bg-mint-500' },
  { name: 'SharePoint', icon: FolderOpen, status: 'Connected', statusColor: 'bg-mint-500' },
  { name: 'Microsoft Teams', icon: Users, status: 'Connected', statusColor: 'bg-mint-500' },
  { name: 'SAP Ariba', icon: ShoppingCart, status: 'Read-only', statusColor: 'bg-amber-500' },
  { name: 'Email (Outlook)', icon: Mail, status: 'Connected', statusColor: 'bg-mint-500' },
]

export default function ConnectedSystems() {
  return (
    <div className="card p-5">
      <h3 className="mb-4 font-display text-[15px] font-bold text-navy">
        Connected Systems
      </h3>
      <div className="space-y-3">
        {systems.map(({ name, icon: Icon, status, statusColor }) => (
          <div key={name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface">
                <Icon size={16} className="text-gray-600" />
              </div>
              <span className="text-sm text-navy">{name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
              <span className="text-xs text-gray-600">{status}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-gray-600">
        SmartCo AI Layer connects to your existing systems. No data migration
        required.
      </p>
    </div>
  )
}
