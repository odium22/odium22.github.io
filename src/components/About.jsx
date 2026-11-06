import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-label">/ 01 — Обо мне</div>
      <h2 className="section-title">
        {about.title[0]}<br />{about.title[1]}
      </h2>
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p, i) => {
            // выделяем жирный фрагмент про разработку во втором абзаце
            if (i === 1) {
              const parts = p.split('(лендинги, многостраничники и информационные системы)')
              return (
                <p key={i}>
                  {parts[0]}<b>лендинги, многостраничники и информационные системы</b>{parts[1]}
                </p>
              )
            }
            return <p key={i}>{p}</p>
          })}
        </div>
        <div className="about-cards">
          {about.cards.map((c) => (
            <div className="mini-card" key={c.num}>
              <div className="mini-num">{c.num}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
