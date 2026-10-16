import { useCallback, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FinalSurprise.css'

interface BurstHeart {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  hue: number
}

function makeHearts(count: number): BurstHeart[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 16 + Math.random() * 22,
    duration: 2.4 + Math.random() * 2,
    delay: Math.random() * 0.7,
    hue: i % 3,
  }))
}

export default function FinalSurprise() {
  const { ref, visible } = useReveal<HTMLElement>(0.12)
  const [hugged, setHugged] = useState(false)
  const [hearts, setHearts] = useState<BurstHeart[]>([])

  const handleHug = useCallback(() => {
    setHugged(true)
    setHearts(makeHearts(140))
    window.setTimeout(() => setHearts([]), 5200)
  }, [])

  const handleRestart = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <section ref={ref} className={`finale ${visible ? 'finale--in' : ''}`} id="finale">
      <div className="finale__stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="finale__star"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 67) % 100}%`,
              animationDelay: `${(i % 10) * 0.4}s`,
              fontSize: `${7 + ((i * 5) % 9)}px`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="finale__glow-hearts" aria-hidden="true">
        <span style={{ left: '10%', top: '20%', animationDelay: '0s' }}>💗</span>
        <span style={{ left: '85%', top: '30%', animationDelay: '1.2s' }}>💕</span>
        <span style={{ left: '20%', top: '70%', animationDelay: '2s' }}>💞</span>
        <span style={{ left: '78%', top: '75%', animationDelay: '0.6s' }}>💗</span>
      </div>

      <div className="finale__content">
        <h2 className="finale__title">Happy 20/10, Mỹ Hạnh yêu dấu! 💖</h2>
        <p className="finale__sub">
          Hy vọng món quà nhỏ này có thể khiến em mỉm cười. Anh thương em!
        </p>

        {!hugged ? (
          <button type="button" className="finale__btn" onClick={handleHug}>
            Nhấn vào đây để nhận một cái ôm 💗
          </button>
        ) : (
          <div className="finale__hug">
            <p className="finale__hug-text">Ôm em một cái thật lâu nèee 🫂</p>
            <button type="button" className="finale__btn finale__btn--ghost" onClick={handleRestart}>
              Quay lại từ đầu 🔄
            </button>
          </div>
        )}
      </div>

      {hearts.length > 0 && (
        <div className="finale__burst" aria-hidden="true">
          {hearts.map((h) => (
            <span
              key={h.id}
              className={`finale__burst-heart finale__burst-heart--${h.hue}`}
              style={{
                left: `${h.left}%`,
                fontSize: `${h.size}px`,
                animationDuration: `${h.duration}s`,
                animationDelay: `${h.delay}s`,
              }}
            >
              {h.hue === 1 ? '💕' : '💗'}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
