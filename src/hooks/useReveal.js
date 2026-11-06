import { useEffect, useRef } from 'react'

// Появление элемента при попадании в зону видимости.
// Возвращает ref, который навешивается на любой блок.
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('reveal')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          io.unobserve(el)
        }
      },
      { threshold: 0.12, ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options])
  return ref
}
