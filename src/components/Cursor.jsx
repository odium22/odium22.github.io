import { useEffect, useRef } from 'react'

// Кастомный курсор: точка идёт за мышью мгновенно, кольцо — с инерцией.
// На тач-устройствах отключается через CSS.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const target = useRef({ x: innerWidth / 2, y: innerHeight / 2 })
  const ring = useRef({ x: innerWidth / 2, y: innerHeight / 2 })

  useEffect(() => {
    let raf
    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }
    const loop = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18
      ring.current.y += (target.current.y - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    const hoverSel = 'a, button, .cell, .work-item, .proj, .mini-card, .nav-cta, .btn, .nav-burger'
    const onEnter = (el) => {
      if (el?.closest?.(hoverSel)) {
        dotRef.current?.classList.add('hover')
        ringRef.current?.classList.add('hover')
      }
    }
    const onLeave = (el) => {
      if (el?.closest?.(hoverSel)) {
        dotRef.current?.classList.remove('hover')
        ringRef.current?.classList.remove('hover')
      }
    }
    const over = (e) => onEnter(e.target)
    const out = (e) => onLeave(e.target)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    loop()
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
