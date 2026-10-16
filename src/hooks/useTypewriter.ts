import { useEffect, useMemo, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

interface TypewriterOptions {
  speed?: number
  startDelay?: number
  enabled?: boolean
}

/**
 * Hiện chữ từng ký tự (an toàn với emoji bằng cách duyệt theo code point).
 * Nếu bật "giảm chuyển động" thì hiện ngay toàn bộ chữ.
 */
export function useTypewriter(
  fullText: string,
  { speed = 55, startDelay = 400, enabled = true }: TypewriterOptions = {},
) {
  const reduced = usePrefersReducedMotion()
  const chars = useMemo(() => Array.from(fullText), [fullText])
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!enabled) return
    if (reduced) {
      setCount(chars.length)
      return
    }

    setCount(0)
    startedRef.current = false

    let interval: number | undefined

    const timeout = window.setTimeout(() => {
      startedRef.current = true
      interval = window.setInterval(() => {
        setCount((c) => {
          if (c >= chars.length) {
            if (interval) window.clearInterval(interval)
            return c
          }
          return c + 1
        })
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeout)
      if (interval) window.clearInterval(interval)
    }
  }, [enabled, chars, speed, startDelay, reduced])

  const text = chars.slice(0, count).join('')
  const done = count >= chars.length
  return { text, done }
}
