import { useState } from 'react'
import { playOpenChime } from '../lib/sfx'
import './IntroScreen.css'

interface Props {
  onOpen: () => void
}

export default function IntroScreen({ onOpen }: Props) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    playOpenChime()
    // Chờ animation mở quà xong rồi chuyển sang nội dung chính
    window.setTimeout(onOpen, 1500)
  }

  return (
    <div className={`intro ${opening ? 'intro--opening' : ''}`}>
      <div className="intro__stars" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="intro__star"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 9) * 0.35}s`,
              fontSize: `${8 + ((i * 7) % 10)}px`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="intro__content">
        <p className="intro__kicker">Có một món quà nhỏ</p>
        <h1 className="intro__title">
          dành riêng cho <span className="intro__name">Mỹ&nbsp;Hạnh</span> 💌
        </h1>

        <div className="gift" aria-hidden="true">
          <div className="gift__box">
            <div className="gift__lid">
              <div className="gift__ribbon-v" />
              <div className="gift__ribbon-h" />
            </div>
            <div className="gift__body">
              <div className="gift__ribbon-v gift__ribbon-v--body" />
            </div>
            <div className="gift__heart">💗</div>
          </div>
        </div>

        <button type="button" className="intro__btn" onClick={handleOpen} disabled={opening}>
          {opening ? 'Đang mở nè…' : 'Mở quà đi bé yêu 💗'}
        </button>
      </div>
    </div>
  )
}
