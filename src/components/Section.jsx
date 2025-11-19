export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">{eyebrow}</p>
        )}
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-8 grid gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}
