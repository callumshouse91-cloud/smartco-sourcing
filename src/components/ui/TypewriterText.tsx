import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
}

export default function TypewriterText({
  text,
  speed = 12,
  className = '',
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span className={`typewriter-text ${className}`}>
      {displayed}
      {!done && <span className="typewriter-cursor">|</span>}
    </span>
  )
}
