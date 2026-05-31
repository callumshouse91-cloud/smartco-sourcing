import type { ExecDocument } from '../../data/execPack'
import { statusBadgeClass, statusLabel } from '../../data/execPack'

interface DocumentCardProps {
  document: ExecDocument
  onPreview: (id: string) => void
}

export default function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const Icon = document.icon

  return (
    <div className="flex flex-col rounded-xl border border-slate-700/50 bg-[#1a2d4a] p-5">
      <Icon size={40} style={{ color: document.iconColor }} />
      <h3 className="mt-4 font-display text-base font-bold text-white">
        {document.title}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-400">
        {document.description}
      </p>
      <span
        className={`mt-4 inline-block w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium ${statusBadgeClass(document.status)}`}
      >
        {statusLabel(document.status)}
      </span>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => onPreview(document.id)}
          className="flex-1 rounded-lg border border-slate-600/50 bg-[#0f1e35] px-2 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-smartco-500/40 hover:text-white"
        >
          Preview
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg border border-slate-600/50 bg-[#0f1e35] px-2 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-smartco-500/40 hover:text-white"
        >
          Edit
        </button>
        <button
          type="button"
          disabled={document.status !== 'generated'}
          className="flex-1 rounded-lg border border-slate-600/50 bg-[#0f1e35] px-2 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-smartco-500/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download
        </button>
      </div>
    </div>
  )
}
