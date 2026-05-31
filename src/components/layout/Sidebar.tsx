import { NavLink } from 'react-router-dom'
import { navItems } from '../../config/navigation'

export default function Sidebar() {
  return (
    <aside className="hidden w-[240px] shrink-0 flex-col bg-navy md:flex">
      <div className="px-5 pt-6 pb-8">
        <img
          src="/smartco-logo-white.png"
          alt="SmartCo"
          width={140}
          className="w-[140px]"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/smartco-logo-white.svg'
          }}
        />
        <p className="mt-4 text-[10px] font-medium tracking-[0.2em] text-mint-300 uppercase">
          AI Sourcing Control Tower
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/dashboard'}
            className={({ isActive }) =>
              [
                'flex h-11 items-center gap-3 rounded-md pl-4 text-sm font-medium transition-colors',
                isActive
                  ? 'border-l-[3px] border-smartco-500 bg-smartco-500/15 text-white'
                  : 'border-l-[3px] border-transparent text-slate-400 hover:bg-white/5',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={18}
                  className={isActive ? 'text-mint-300' : 'text-slate-500'}
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mx-3 mb-4 rounded-lg border border-smartco-500/20 bg-smartco-500/10 p-3">
        <p className="text-[13px] font-bold text-white">Heathrow Airport RFP</p>
        <p className="mt-0.5 text-[11px] text-slate-400">Technology Platform Sourcing</p>
        <p className="mt-2 flex items-center gap-1.5 text-[11px] text-mint-300">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-300" />
          Active — 14 suppliers
        </p>
      </div>
    </aside>
  )
}
