import { NavLink } from 'react-router-dom'
import { mobileNavItems } from '../../config/navigation'

export default function MobileTabBar() {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-40 flex border-t border-border bg-white md:hidden">
      {mobileNavItems.map(({ path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/dashboard'}
          className={({ isActive }) =>
            [
              'flex flex-1 items-center justify-center py-3',
              isActive ? 'text-smartco-500' : 'text-slate-400',
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <Icon size={22} className={isActive ? 'text-smartco-500' : 'text-slate-400'} />
          )}
        </NavLink>
      ))}
    </nav>
  )
}
