import { useEffect, useState } from 'react'

export const PAGE_LOAD_MS = 800

export function usePageLoad(delay = PAGE_LOAD_MS): boolean {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return loading
}
