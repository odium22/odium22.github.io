import { works } from '../data/content.js'

const statusLabel = { live: 'live', wip: 'в разработке' }
const statusClass = { live: 'status status-on', wip: 'status status-off' }

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-label">/ 03 — Работы</div>
      <h2 className="section-title">Сделанные проекты</h2>
      <p className="section-lead">Реальные сайты на React + FastAPI, которые работают в проде.</p>
      <div className="work-list">
        {works.map((w) => (
          <a className="work-item" key={w.num} href={w.url} target="_blank" rel="noopener">
            <div className="work-num">{w.num}</div>
            <div className="work-body">
              <div className="work-head">
                <h3>{w.title}</h3>
                <span className={statusClass[w.status]}>{statusLabel[w.status]}</span>
              </div>
              <p>{w.text}</p>
              <div className="work-tags">
                {w.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <span className="work-link">{w.url.replace('https://', '')} →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
