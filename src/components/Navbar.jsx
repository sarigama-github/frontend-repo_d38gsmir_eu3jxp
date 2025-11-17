import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-rose-600 shadow-lg" />
          <span className="font-semibold text-white tracking-tight">saasap</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#showcase" className="text-white/80 hover:text-white transition">Showcase</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#cta" className="px-4 py-2 rounded-md bg-white text-gray-900 font-medium hover:opacity-90 transition">Get Started</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-black/60 backdrop-blur-lg">
          <a href="#features" className="block text-white/90">Features</a>
          <a href="#showcase" className="block text-white/90">Showcase</a>
          <a href="#pricing" className="block text-white/90">Pricing</a>
          <a href="#cta" className="block px-4 py-2 rounded-md bg-white text-gray-900 font-medium w-max">Get Started</a>
        </div>
      )}
    </header>
  )
}
