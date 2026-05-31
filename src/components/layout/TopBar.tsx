import { useLocation } from 'react-router-dom'
import { getPageTitle } from '../../config/navigation'

export default function TopBar() {
  const { pathname } = useLocation()
  const pageTitle = getPageTitle(pathname)

  return (
    <header className="relative flex h-14 shrink-0 items-center justify-between overflow-hidden bg-navy px-6">
      <div className="pointer-events-none absolute top-0 right-0 z-0 flex h-full">
        <div className="topbar-motif-mint h-full w-20 bg-mint-300" />
        <div className="topbar-motif-blue -ml-8 h-full w-20 bg-smartco-500" />
      </div>

      <span className="relative z-10 text-[15px] text-white">{pageTitle}</span>

      <div className="relative z-10 flex items-center gap-4">
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
