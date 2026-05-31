import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'

const sampleResults = [
  {
    title: 'Accenture',
    subtitle: 'AI Score 86%',
    action: 'View supplier',
    href: '/ai-evaluation',
  },
  {
    title: 'REQ-003',
    subtitle: 'UK Data Residency — compliance gap flagged',
    action: 'View requirement',
    href: '/requirements',
  },
  {
    title: 'Board Recommendation Paper',
    subtitle: 'Generated 8 Jul',
    action: 'View document',
    href: '/exec-pack',
  },
]

interface GlobalSearchProps {
  open: boolean
  onClose: () => void
}

export default function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const showResults = query.length > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-navy/80 px-4 pt-[20vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-slate-700/50 bg-[#1a2d4a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-700/50 px-4 py-3">
          <Search size={18} className="shrink-0 text-slate-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suppliers, requirements, documents..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-white"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>
        {showResults && (
          <ul className="py-2">
            {sampleResults.map((result) => (
              <li key={result.title}>
                <Link
                  to={result.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-[#0f1e35]"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{result.title}</p>
                    <p className="text-xs text-slate-400">{result.subtitle}</p>
                  </div>
                  <span className="text-xs text-smartco-400">{result.action} →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!showResults && (
          <p className="px-4 py-6 text-center text-xs text-slate-500">
            Press <kbd className="rounded bg-slate-700 px-1.5 py-0.5">/</kbd> to
            search · <kbd className="rounded bg-slate-700 px-1.5 py-0.5">Esc</kbd> to
            close
          </p>
        )}
      </div>
    </div>
  )
}

export function useGlobalSearchShortcut(onOpen: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      if (e.key === '/' && !isInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault()
        onOpen()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onOpen])
}
