import { Link } from 'react-router-dom'

function DemoCard({ demo, index }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${demo.previewImage})` }}
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {demo.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative p-6 z-20">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {demo.name}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {demo.description || 'Proyecto profesional con diseño moderno y código limpio.'}
        </p>
        <Link
          to={`/demo/${demo.slug}`}
          className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group/link"
        >
          Ver proyecto
          <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
        </Link>
      </div>

      {/* Efecto de brillo */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:via-purple-500/5 transition-all duration-500" />
    </article>
  )
}

export default DemoCard
