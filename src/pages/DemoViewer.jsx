import { Link, useParams } from 'react-router-dom'
import { demosRegistry } from '../data/demosRegistry'

function DemoViewer() {
  const { slug } = useParams()
  const currentDemo = demosRegistry.find((demo) => demo.slug === slug)

  if (!currentDemo) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold">Demo no encontrado</h2>
          <Link to="/" className="mt-6 inline-block rounded-lg border border-white/20 px-4 py-2 transition-all duration-300 hover:border-indigo-400">
            Volver al portafolio
          </Link>
        </div>
      </div>
    )
  }

  const Component = currentDemo.component

  return (
    <div className="relative min-h-screen">
      {/* Boton flotante para volver sin romper el layout de cada landing */}
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <Link
          to="/"
          className="rounded-lg border border-white/30 bg-black/45 px-4 py-2 text-sm text-white backdrop-blur transition-all duration-300 hover:border-indigo-400 hover:bg-black/60"
        >
          ← Volver al portafolio
        </Link>
      </div>
      <Component />
    </div>
  )
}

export default DemoViewer
