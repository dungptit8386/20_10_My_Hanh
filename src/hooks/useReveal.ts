import { useEffect, useRef, useState } from 'react'

/** Hiện dần phần tử khi cuộn tới — dùng Intersection Observer, nhẹ và mượt. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        }
      },
      { threshold, rootMargin: '0px 0px -5% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}
