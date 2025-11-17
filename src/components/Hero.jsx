import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const layersRef = useRef([])
  const marqueeRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      // Parallax for layered cards
      layersRef.current.forEach((el, i) => {
        if (!el) return
        const depth = (i + 1) * 8
        el.style.transform = `translate3d(0, ${y / depth}px, 0)`
      })
      // Subtle skew on headline wrapper
      const wrap = document.getElementById('hero-wrap')
      if (wrap) {
        const skew = Math.min(6, y / 200)
        wrap.style.transform = `perspective(1000px) rotateX(${skew}deg)`
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Infinite marquee animation
    const el = marqueeRef.current
    if (!el) return
    let start = null
    const speed = 40 // px/sec
    const step = (ts) => {
      if (!start) start = ts
      const dt = (ts - start) / 1000
      el.style.transform = `translateX(${-((dt * speed) % el.scrollWidth)}px)`
      requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-[#0b0b0c] text-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#0b0b0c]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#0b0b0c]" />

      {/* Navbar spacing */}
      <div className="h-20" />

      {/* Hero content */}
      <div id="hero-wrap" className="relative mx-auto max-w-7xl px-6 pt-12 sm:pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headlines */}
          <div className="relative z-10 col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 animate-pulse" />
              Introducing saasap – launch faster than ever
            </div>
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Build modern SaaS in hours, not weeks.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-xl">
              A polished boilerplate with auth, billing, UI kit, and API wiring. Smooth motion, layered hero, and delightful scroll effects out of the box.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="px-5 py-3 rounded-md bg-white text-gray-900 font-semibold hover:opacity-90 transition">Get Started</a>
              <a href="#features" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">See Features</a>
            </div>
          </div>

          {/* Layered cards parallax stack */}
          <div className="relative col-span-5 h-[520px]">
            <div ref={el => (layersRef.current[0] = el)} className="absolute right-6 top-10 w-64 sm:w-72 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-4 rotate-2">
              <div className="h-40 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600" />
              <div className="mt-4 space-y-2">
                <div className="h-3 w-24 rounded bg-white/30" />
                <div className="h-3 w-40 rounded bg-white/20" />
              </div>
            </div>
            <div ref={el => (layersRef.current[1] = el)} className="absolute right-0 top-44 w-72 sm:w-80 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-4 -rotate-1">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500" />
                <div>
                  <div className="h-3 w-28 rounded bg-white/30" />
                  <div className="mt-2 h-3 w-20 rounded bg-white/20" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-16 rounded-lg bg-white/10 border border-white/10" />
                ))}
              </div>
            </div>
            <div ref={el => (layersRef.current[2] = el)} className="absolute -left-2 bottom-10 w-64 sm:w-80 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-4 rotate-3">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded bg-white/30" />
                  <div className="h-3 w-32 rounded bg-white/20" />
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-rose-600" />
              </div>
              <div className="mt-4 h-24 rounded-xl bg-black/30 border border-white/10" />
            </div>
          </div>
        </div>

        {/* Marquee tech stack */}
        <div className="relative mt-16 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div ref={marqueeRef} className="whitespace-nowrap will-change-transform">
            {['Auth', 'Billing', 'Emails', 'Stripe', 'NextAuth', 'Prisma', 'FastAPI', 'React', 'Tailwind', 'Framer Motion', 'MongoDB', 'Shadcn'].concat(['Auth','Billing']).map((t, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-6 py-3 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-600" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
