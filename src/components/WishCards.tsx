import { useReveal } from '../hooks/useReveal'
import { wishCards } from '../data/messages'
import './WishCards.css'

export default function WishCards() {
  const { ref, visible } = useReveal<HTMLElement>(0.15)

  return (
    <section ref={ref} className="wishes-cards" id="wishes-cards">
      <h2 className="wishes-cards__heading">Những điều anh muốn nói 💭</h2>

      <div className="wishes-cards__grid">
        {wishCards.map((card, i) => (
          <article
            key={card.id}
            className={`wishes-cards__card ${visible ? 'wishes-cards__card--in' : ''}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <span className="wishes-cards__emoji" aria-hidden="true">
              {card.emoji}
            </span>
            <p className="wishes-cards__text">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
