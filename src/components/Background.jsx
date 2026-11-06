import { useEffect, useRef } from 'react'

// Прогресс-бар скролла сверху + лёгкий параллакс фона под курсор.
export default function Background() {
  const bgRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      if (progressRef.current && h > 0) {
        progressRef.current.style.width = (scrollY / h) * 100 + '%'
      }
    }
    const onMove = (e) => {
      if (!bgRef.current) return
      const dx = (e.clientX / innerWidth - 0.5) * 20
      const dy = (e.clientY / innerHeight - 0.5) * 20
      bgRef.current.style.transform = `translate(${dx}px, ${dy}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="bg-gradient" ref={bgRef} aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
    </>
  )
}
