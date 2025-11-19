import { useState } from 'react'
import { Menu } from 'lucide-react'

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-[15px] text-slate-200 hover:text-white transition-colors px-3 py-2"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#supplies', label: 'Industrial Supplies' },
    { href: '#services', label: 'Industrial Services' },
    { href: '#rental', label: 'Equipment Rental' },
    { href: '#construction', label: 'Construction' },
    { href: '#industries', label: 'Industries' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-tr from-slate-600 to-slate-300 rounded-sm ring-1 ring-white/20"></div>
            <span className="text-white font-semibold tracking-wide">Gate of Reliance Co</span>
          </a>

          <nav className="hidden md:flex items-center">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-1">
            {links.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
