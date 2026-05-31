import { useLocation } from 'react-router-dom'
import { getPageTitle } from '../../config/navigation'

export default function TopBar() {
  const { pathname } = useLocation()
  const pageTitle = getPageTitle(pathname)

  return (
    <header className="flex h-14 shrink-0 items-center justify-between bg-navy px-6">
      <span className="text-[15px] text-white">{pageTitle}</span>

      <div className="flex items-center gap-4">
        <span className="rounded-full border border-yellow-brand px-3 py-1 text-[11px] font-medium tracking-wide text-yellow-brand uppercase">
          Live Demo
        </span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-smartco-500 text-xs font-semibold text-white">
          HC
        </div>
      </div>
    </header>
  )
}
