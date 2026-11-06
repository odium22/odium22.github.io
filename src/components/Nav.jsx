import { useState, useEffect, useRef } from 'react'
import { nav } from '../data/content.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const linksRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (linksRef.current && !linksRef.current.contains(e.target) && !e.target.classList.contains('nav-burger')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top" onClick={close}>odium<span>22</span></a>
        <nav className={`nav-links ${open ? 'open' : ''}`} ref={linksRef}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
        </nav>
        <a className="nav-cta" href="https://t.me/Odiumy" target="_blank" rel="noopener">Связаться</a>
        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
