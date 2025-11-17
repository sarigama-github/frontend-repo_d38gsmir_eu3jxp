import { useEffect, useRef } from 'react'

export default function Showcase() {
  const stickyRef = useRef(null)

  useEffect(() => {
    const sections = stickyRef.current?.querySelectorAll('[data-step]')
    const handle = () => {
      const y = window.scrollY
      sections?.forEach((el, i) => {
        const offset = i * 120
        const progress = Math.min(1, Math.max(0, (y - offset) / 200))
        el.style.opacity = String(progress)
        el.style.transform = `translateY(${(1 - progress) * 30}px)`
      })
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <section id="showcase" className="relative bg-[#0b0b0c] text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4 sticky top-24 self-start">
            <h3 className="text-2xl sm:text-4xl font-bold">Uncommon scroll that tells a story.</h3>
            <p className="text-white/70">Elements fade and slide into place as you move, creating a dynamic, guided narrative.</p>
          </div>
          <div ref={stickyRef} className="lg:col-span-7 space-y-8">
            {[1,2,3,4].map((i) => (
              <div key={i} data-step className="opacity-0 translate-y-6 transition will-change-transform rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="h-40 rounded-xl bg-gradient-to-br from-rose-500/30 to-orange-500/30 mb-4" />
                <div className="h-3 w-40 rounded bg-white/30 mb-2" />
                <div className="h-3 w-72 rounded bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
