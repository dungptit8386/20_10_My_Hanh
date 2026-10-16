import './FloatingHearts.css'

interface Heart {
  id: number
  left: number
  size: number
  duration: number
  delay: number
}

const HEARTS: Heart[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: (i * 37 + 9) % 100,
  size: 14 + ((i * 7) % 14),
  duration: 9 + ((i * 3) % 7),
  delay: (i * 1.4) % 9,
}))

/** Trái tim bay lơ lửng nhẹ nhàng phủ lên trang — rất nhẹ, chỉ 10 phần tử. */
export default function FloatingHearts() {
  return (
    <div className="float-hearts" aria-hidden="true">
      {HEARTS.map((h) => (
        <span
          key={h.id}
          className="float-hearts__item"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `-${h.delay}s`,
          }}
        >
          💗
        </span>
      ))}
    </div>
  )
}
