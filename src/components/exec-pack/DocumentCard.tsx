import type { ExecDocument } from '../../data/execPack'
import { statusLabel } from '../../data/execPack'

interface DocumentCardProps {
  document: ExecDocument
  onPreview: (id: string) => void
}

function statusBadgeClassLight(status: ExecDocument['status']): string {
  switch (status) {
    case 'generated':
      return 'bg-mint-500/15 text-mint-500'
    case 'generating':
      return 'bg-smartco-500/15 text-smartco-500'
    case 'not_started':
      return 'bg-gray-100 text-gray-500'
  }
}

export default function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const Icon = document.icon

  return (
    <div className="card flex flex-col p-5">
      <Icon size={40} style={{ color: document.iconColor }} />
      <h3 className="mt-4 font-display text-base font-bold text-navy">
        {document.title}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-600">
        {document.description}
      </p>
      <span
        className={`mt-4 inline-block w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium ${statusBadgeClassLight(document.status)}`}
      >
        {statusLabel(document.status)}
      </span>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onPreview(document.id)}
          className="flex-1 rounded-lg border border-border bg-surface px-2 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-smartco-500/40 hover:text-smartco-500"
        >
          Preview
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg border border-border bg-surface px-2 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-smartco-500/40 hover:text-smartco-500"
        >
          Edit
        </button>
        <button
          type="button"
          disabled={document.status !== 'generated'}
          className="flex-1 rounded-lg border border-border bg-surface px-2 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-smartco-500/40 hover:text-smartco-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download
        </button>
      </div>
    </div>
  )
}
