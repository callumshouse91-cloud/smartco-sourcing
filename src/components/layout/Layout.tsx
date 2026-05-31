import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import DemoBanner from './DemoBanner'
import GlobalSearch, { useGlobalSearchShortcut } from './GlobalSearch'
import MobileTabBar from './MobileTabBar'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function Layout() {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)

  useGlobalSearchShortcut(() => setSearchOpen(true))

  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />
      <div className="flex min-h-0 flex-1 pb-14 md:pb-0">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar />
          <main className="flex-1 bg-[#0f1e35]">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
      <MobileTabBar />
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
