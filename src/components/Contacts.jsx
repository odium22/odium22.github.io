import { contacts } from '../data/content.js'

export default function Contacts() {
  return (
    <section id="contacts" className="section section-last">
      <div className="section-label">/ 05 — Контакты</div>
      <h2 className="section-title big">
        {contacts.title[0]}<br />
        <span className="accent">{contacts.title[1]}</span>
      </h2>
      <p className="section-lead">{contacts.lead}</p>
      <div className="contact-row">
        {contacts.links.map((l) => (
          <a
            key={l.label}
            className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'} big`}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}
