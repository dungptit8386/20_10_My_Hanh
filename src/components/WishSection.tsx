import { useReveal } from '../hooks/useReveal'
import { useTypewriter } from '../hooks/useTypewriter'
import './WishSection.css'

export default function WishSection() {
  const { ref, visible } = useReveal<HTMLElement>()
  const { text, done } = useTypewriter('Happy Vietnamese Women’s Day 20.10 💐', {
    enabled: visible,
    speed: 62,
    startDelay: 250,
  })

  return (
    <section ref={ref} className="wishes" id="wishes">
      <div className="wishes__glow" aria-hidden="true" />
      <div className="wishes__inner">
        <h1 className={`wishes__title ${done ? 'wishes__title--done' : ''}`}>
          {text}
          {!done && <span className="wishes__caret" aria-hidden="true" />}
        </h1>

        <p className={`wishes__sub ${done ? 'wishes__sub--show' : ''}`}>
          Chúc công chúa nhỏ của anh — <strong>Mỹ Hạnh</strong> — có một ngày 20/10 thật
          hạnh phúc.
        </p>

        <div className={`wishes__hearts ${done ? 'wishes__hearts--show' : ''}`} aria-hidden="true">
          <span style={{ left: '12%', animationDelay: '0s' }}>💗</span>
          <span style={{ left: '32%', animationDelay: '0.6s' }}>💕</span>
          <span style={{ left: '58%', animationDelay: '1.1s' }}>💗</span>
          <span style={{ left: '80%', animationDelay: '0.3s' }}>💞</span>
        </div>
      </div>
    </section>
  )
}
