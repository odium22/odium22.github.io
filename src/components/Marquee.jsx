import { profile } from '../data/content.js'

// Бесконечная бегущая строка со стеком — дублируем массив для плавного цикла.
const items = [...profile.marquee, ...profile.marquee]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  )
}
