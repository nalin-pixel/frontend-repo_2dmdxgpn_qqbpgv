export default function Footer() {
  return (
    <footer className="bg-black text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Gate of Reliance Co. All rights reserved.</p>
        <p className="text-sm">Serving Saudi Arabia & Bahrain</p>
      </div>
    </footer>
  )
}
