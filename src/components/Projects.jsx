import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-label">/ 04 — QA-портфолио</div>
      <h2 className="section-title">4 проекта в работе</h2>
      <p className="section-lead">Портфолио QA-инженера: от ручного тестирования до фреймворка с CI/CD.</p>
      <div className="proj-grid">
        {projects.map((p) => (
          <div className="proj" key={p.num}>
            <div className="proj-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <span className="proj-status">в работе</span>
          </div>
        ))}
      </div>
    </section>
  )
}
