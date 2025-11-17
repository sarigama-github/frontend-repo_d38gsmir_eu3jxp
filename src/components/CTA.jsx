export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0b0b0c] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 to-rose-600/20 p-10">
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-gradient-to-br from-rose-600 to-orange-500 blur-2xl opacity-40" />
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-600 to-rose-500 blur-2xl opacity-40" />
          <div className="relative">
            <h3 className="text-2xl sm:text-4xl font-bold">Start your next product with saasap.</h3>
            <p className="mt-3 text-white/80 max-w-2xl">An opinionated boilerplate with motion-first UI and a robust backend so you can focus on your unique features.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="px-5 py-3 rounded-md bg-white text-gray-900 font-semibold hover:opacity-90 transition">Get saasap</a>
              <a href="#pricing" className="px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">View Pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
