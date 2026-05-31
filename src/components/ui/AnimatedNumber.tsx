import { useEffect, useState } from 'react'

interface AnimatedNumberProps {
  value: string
  duration?: number
  className?: string
}

export default function AnimatedNumber({
  value,
  duration = 1000,
  className = '',
}: AnimatedNumberProps) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : value
  const isInteger = !match || !match[1].includes('.')

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frame: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const next = target * eased
      setCurrent(isInteger ? Math.round(next) : Math.round(next * 10) / 10)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration, isInteger])

  const display = isInteger ? String(current) : current.toFixed(1)

  return (
    <span className={className}>
      {match ? `${display}${suffix}` : value}
    </span>
  )
}
