import { NavLink } from 'react-router-dom'
import { mobileNavItems } from '../../config/navigation'

export default function MobileTabBar() {
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-40 flex border-t border-slate-700/50 bg-navy md:hidden">
      {mobileNavItems.map(({ path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/dashboard'}
          className={({ isActive }) =>
            [
              'flex flex-1 items-center justify-center py-3',
              isActive ? 'text-mint-300' : 'text-slate-500',
            ].join(' ')
          }
        >
          {({ isActive }) => (
            <Icon size={22} className={isActive ? 'text-mint-300' : 'text-slate-500'} />
          )}
        </NavLink>
      ))}
    </nav>
  )
}
