import {
  Archive,
  BarChart3,
  Brain,
  Building2,
  FileText,
  LayoutDashboard,
  Settings,
  Target,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  path: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: 'Control Tower', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Requirements Hub', path: '/requirements', icon: Target },
  { label: 'Supplier Workspace', path: '/suppliers', icon: Building2 },
  { label: 'AI Evaluation', path: '/ai-evaluation', icon: Brain },
  { label: 'Decision Matrix', path: '/decision-matrix', icon: BarChart3 },
  { label: 'Exec Pack', path: '/exec-pack', icon: FileText },
  { label: 'Intelligence Library', path: '/library', icon: Archive },
  { label: 'Vendor Management', path: '/vmo', icon: Settings },
]

export const mobileNavItems = navItems.slice(0, 5)

export function getPageTitle(pathname: string): string {
  const item = navItems.find(
    (nav) =>
      nav.path === pathname ||
      (nav.path !== '/dashboard' && pathname.startsWith(nav.path)),
  )
  return item?.label ?? 'Control Tower'
}
