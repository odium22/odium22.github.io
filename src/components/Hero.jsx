import { useEffect, useRef } from 'react'
import { profile } from '../data/content.js'

function Counter({ to }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        let cur = 0
        const step = Math.max(1, Math.ceil(to / 30))
        const tick = () => {
          cur += step
          if (cur >= to) { el.textContent = to; return }
          el.textContent = cur
          requestAnimationFrame(tick)
        }
        tick()
        io.unobserve(el)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return <b ref={ref}>0</b>
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-badge">{profile.role}</div>
      <h1>
        {profile.tagline[0]}<br />
        {profile.tagline[1]}<br />
        <span className="accent">{profile.tagline[2]}</span>
      </h1>
      <p className="hero-sub">{profile.heroSub}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#work">Смотреть работы</a>
        <a className="btn btn-ghost" href="/resume.jpg" target="_blank" rel="noopener">Резюме</a>
        <a className="btn btn-ghost" href="https://t.me/Odiumy" target="_blank" rel="noopener">Telegram</a>
      </div>
      <div className="hero-stats">
        {profile.stats.map((s, i) => (
          <div className="hstat" key={i}>
            <Counter to={s.count} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
