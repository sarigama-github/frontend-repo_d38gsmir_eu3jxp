import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="bg-[#0b0b0c] border-t border-white/10 text-white/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between">
          <p>© {new Date().getFullYear()} saasap. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
