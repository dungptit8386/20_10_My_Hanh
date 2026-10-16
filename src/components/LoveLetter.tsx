import { useReveal } from '../hooks/useReveal'
import './LoveLetter.css'

const PARAGRAPHS = [
  'Chúc em bé Mỹ Hạnh của anh ngày 20/10 thật nhiều niềm vui, luôn xinh xắn, đáng yêu và lúc nào cũng nở nụ cười thật tươi nhé.',
  'Anh mong rằng không chỉ hôm nay mà mỗi ngày bên cạnh anh, em đều cảm nhận được sự yêu thương, quan tâm và những điều dịu dàng nhất.',
  'Cảm ơn em vì đã xuất hiện trong cuộc sống của anh, để những ngày bình thường cũng trở nên đặc biệt hơn.',
  'Mong em luôn bình an, gặp thật nhiều điều tốt đẹp và dù có chuyện gì xảy ra, em vẫn luôn nhớ rằng mình xứng đáng được yêu thương thật nhiều.',
  'Chúc mừng ngày 20/10, công chúa nhỏ của anh. Anh thương em nhiều lắm! 💗',
]

export default function LoveLetter() {
  const { ref, visible } = useReveal<HTMLElement>(0.12)

  return (
    <section ref={ref} className="letter" id="letter">
      <div className={`letter__card ${visible ? 'letter__card--open' : ''}`}>
        <div className="letter__seal" aria-hidden="true">
          💋
        </div>

        <h2 className="letter__heading">Gửi Mỹ Hạnh, cô gái đặc biệt của anh 💌</h2>

        <div className="letter__body">
          {PARAGRAPHS.map((p, i) => (
            <p
              key={i}
              className="letter__para"
              style={{ transitionDelay: `${0.5 + i * 0.28}s` }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="letter__sign">
          <span className="letter__sign-name">— Anh của em —</span>
        </div>

        <div className="letter__deco letter__deco--tl" aria-hidden="true">🌸</div>
        <div className="letter__deco letter__deco--br" aria-hidden="true">🤍</div>
      </div>
    </section>
  )
}
