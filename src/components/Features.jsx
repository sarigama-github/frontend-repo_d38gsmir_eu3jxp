import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Sparkles, Gauge, Shield } from 'lucide-react'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6])

  const features = [
    { icon: Sparkles, title: 'Instant polish', desc: 'Beautiful defaults, refined motion and carefully tuned visuals.' },
    { icon: Gauge, title: 'Speed-focused', desc: 'Optimized stack and patterns so you ship in hours, not weeks.' },
    { icon: Shield, title: 'Production-ready', desc: 'Auth, billing and best-practices wired from the start.' },
    { icon: CheckCircle2, title: 'Composable', desc: 'Modular pieces you can adopt gradually or all at once.' },
  ]

  return (
    <section id="features" ref={ref} className="relative bg-[#0b0b0c] text-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, rotate }} className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Everything you need to launch.</h2>
            <p className="text-white/70 max-w-xl">Sane defaults, elegant components and a pragmatic backend to build real products fast.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <Icon className="h-6 w-6 text-rose-400" />
                  <h3 className="mt-3 font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/70">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative h-[420px]">
            <motion.div style={{ y }} className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-rose-500/20 to-orange-500/20" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0,1], [40,-40]) }} className="absolute -left-6 top-10 h-24 w-24 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600" />
            <motion.div style={{ y: useTransform(scrollYProgress, [0,1], [-20,20]) }} className="absolute right-10 bottom-8 h-16 w-16 rounded-full bg-gradient-to-br from-rose-600 to-orange-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
