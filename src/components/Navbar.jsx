import { Link } from 'react-router-dom'

function Navbar({ theme = 'dark' }) {
  const isLight = theme === 'light'

  return (
    <header className={`sticky top-0 z-50 backdrop-blur ${isLight ? 'border-b border-slate-300 bg-[#f5efe6]/90' : 'border-b border-white/10 bg-slate-950/80'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`text-lg font-semibold tracking-wide transition-all duration-300 ${
            isLight ? 'text-slate-900 hover:text-[#6b3f2d]' : 'text-white hover:text-fuchsia-300'
          }`}
        >
          Catalogo de Conceptos
        </Link>
        <span className={`rounded-full border px-3 py-1 text-xs ${isLight ? 'border-slate-400/60 text-slate-700' : 'border-fuchsia-400/40 text-fuchsia-200'}`}>
          React + Tailwind
        </span>
      </div>
    </header>
  )
}

export default Navbar
