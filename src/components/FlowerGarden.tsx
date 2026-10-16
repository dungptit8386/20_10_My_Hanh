import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { flowers, type FlowerSpec } from '../data/messages'
import './FlowerGarden.css'

function Flower({ spec, bloomed, onClick }: { spec: FlowerSpec; bloomed: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={`flower flower--${spec.type} ${bloomed ? 'flower--bloomed' : ''}`}
      style={{
        left: `${spec.left}%`,
        width: spec.size,
        height: spec.size * 1.7,
        transitionDelay: `${spec.bloomDelay}ms`,
      }}
      onClick={onClick}
      aria-label="Bông hoa — nhấn để nhận lời nhắn"
    >
      <span className="flower__stem" aria-hidden="true">
        <span className="flower__leaf" />
      </span>
      <span className="flower__head" aria-hidden="true">
        <span className="flower__petals" />
        <span className="flower__center" />
      </span>
    </button>
  )
}

export default function FlowerGarden() {
  const { ref, visible } = useReveal<HTMLElement>(0.15)
  const [message, setMessage] = useState<{ text: string; key: number } | null>(null)

  const handleClick = (spec: FlowerSpec) => {
    setMessage({ text: spec.message, key: Date.now() })
  }

  return (
    <section ref={ref} className="garden" id="garden">
      <h2 className="garden__heading">Vườn hoa dành cho em 🌷</h2>
      <p className="garden__sub">Nhấn vào từng bông hoa để nhận một lời nhắn nho nhỏ nhé</p>

      <div className="garden__bed">
        {flowers.map((spec) => (
          <Flower
            key={spec.id}
            spec={spec}
            bloomed={visible}
            onClick={() => handleClick(spec)}
          />
        ))}
        <div className="garden__grass" aria-hidden="true" />
      </div>

      {message && (
        <div key={message.key} className="garden__toast" role="status">
          {message.text}
        </div>
      )}
    </section>
  )
}
