import { useRef } from 'react'
import { skills } from '../data/content.js'

function Cell({ tag, title, text }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%')
    ref.current.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%')
  }
  return (
    <div className="cell" ref={ref} onMouseMove={onMove}>
      <span className="cell-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label">/ 02 — Стек</div>
      <h2 className="section-title">Что в работе</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <Cell key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}
