import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[70vh] md:h-[80vh] w-full bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none"></div>
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight max-w-4xl">
          Reliable Industrial Supplies & Services
        </h1>
        <p className="mt-4 text-slate-200/90 text-base md:text-lg max-w-2xl">
          Fast delivery. Certified quality. Safe execution. Serving Saudi Arabia and Bahrain.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#contact" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-slate-100 transition">Request a Quote</a>
          <a href="#services" className="px-5 py-3 rounded-md ring-1 ring-white/30 text-white hover:bg-white/10 transition">Our Services</a>
        </div>
      </div>
    </section>
  )
}
