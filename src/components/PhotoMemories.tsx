import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { photos, type PhotoSlot } from '../data/messages'
import './PhotoMemories.css'

function PhotoFrame({ slot, visible }: { slot: PhotoSlot; visible: boolean }) {
  const [failed, setFailed] = useState(false)

  return (
    <figure
      className={`photo ${visible ? 'photo--in' : ''}`}
      style={{ transform: `rotate(${slot.tilt}deg)`, transitionDelay: `${slot.id * 0.12}s` }}
    >
      <div className="photo__frame">
        {failed ? (
          <div className="photo__placeholder">
            <span aria-hidden="true">💗</span>
            <small>{slot.caption}</small>
          </div>
        ) : (
          <img
            src={slot.src}
            alt={slot.alt}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <figcaption className="photo__caption">{slot.caption}</figcaption>
    </figure>
  )
}

export default function PhotoMemories() {
  const { ref, visible } = useReveal<HTMLElement>(0.1)

  return (
    <section ref={ref} className="memories" id="memories">
      <h2 className="memories__heading">Khoảnh khắc của chúng mình 🤍</h2>
      <p className="memories__sub">Những bức ảnh anh luôn giữ thật cẩn thận</p>

      <div className="memories__grid">
        {photos.map((slot) => (
          <PhotoFrame key={slot.id} slot={slot} visible={visible} />
        ))}
      </div>
    </section>
  )
}
