import { Link } from 'react-router-dom'

function DemoCard({ demo }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#d8c7b9] bg-[#fffdf9] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Mini screenshot del demo para dar contexto real del estilo */}
      <div className="relative bg-[#efe5d9] p-3">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="relative overflow-hidden rounded-lg border border-[#d8c7b9]">
          <img
            src={demo.previewImage}
            alt={`Vista previa ${demo.name}`}
            className="h-36 w-full object-cover saturate-[0.88] sepia-[0.1] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,233,220,0.10)_0%,rgba(186,124,93,0.18)_100%)]" />
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{demo.category}</p>
        <h3 className="text-lg font-semibold text-slate-900">{demo.name}</h3>
        <Link
          to={`/demo/${demo.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-[#b06a4f]/50 px-4 py-2 text-sm text-[#6b3f2d] transition-all duration-300 hover:bg-[#f3dfd5]"
        >
          Ver Preview
        </Link>
      </div>
    </article>
  )
}

export default DemoCard
