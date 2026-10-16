import './Petals.css'

interface Petal {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  sway: number
}

const PETALS: Petal[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: (i * 43 + 5) % 100,
  size: 10 + ((i * 5) % 8),
  duration: 11 + ((i * 4) % 8),
  delay: (i * 2.3) % 12,
  sway: 30 + ((i * 17) % 50),
}))

/** Cánh hoa rơi nhẹ nhàng — 8 phần tử, rất nhẹ. */
export default function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map((p) => (
        <span
          key={p.id}
          className="petals__item"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
            ['--sway' as string]: `${p.sway}px`,
          }}
        >
        </span>
      ))}
    </div>
  )
}
