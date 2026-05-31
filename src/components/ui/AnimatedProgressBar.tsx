import { useEffect, useState } from 'react'

interface AnimatedProgressBarProps {
  value: number
  className?: string
  barClassName?: string
}

export default function AnimatedProgressBar({
  value,
  className = 'h-1.5 overflow-hidden rounded-full bg-slate-700',
  barClassName = 'h-full rounded-full bg-smartco-500',
}: AnimatedProgressBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setWidth(value))
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <div className={className}>
      <div
        className={barClassName}
        style={{
          width: `${width}%`,
          transition: 'width 600ms ease-out',
        }}
      />
    </div>
  )
}
