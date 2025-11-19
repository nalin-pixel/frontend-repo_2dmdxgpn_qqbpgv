function Card({ title, points = [], badge }) {
  return (
    <div className="group bg-slate-900/60 border border-white/10 rounded-xl p-6 hover:border-white/20 transition overflow-hidden">
      {badge && (
        <span className="inline-block text-[11px] uppercase tracking-wider text-emerald-300 bg-emerald-500/10 ring-1 ring-emerald-400/30 px-2 py-1 rounded mb-3">{badge}</span>
      )}
      <h3 className="text-lg md:text-xl font-medium text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-emerald-300">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Grid({ items }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  )
}

export default Card
