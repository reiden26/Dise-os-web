const features = [
  ['Arquitectura de contenido', 'Secciones lineales para explicar valor, proceso y resultado sin distraer al usuario.'],
  ['Conversion basada en confianza', 'Testimonios, logos y microcopys ubicados en puntos de decision para mejorar CTR.'],
  ['Sistema visual mantenible', 'Tipografia editorial + espaciado consistente para escalar landing y subpaginas.'],
]

const metrics = [
  ['+31%', 'Activacion en prueba'],
  ['-22%', 'Costo por lead'],
  ['4.9/5', 'Satisfaccion de usuarios'],
]

function Minimal() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-10">
        <header className="grid gap-12 border-b border-slate-300 pb-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">SaaS Minimal</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">Una landing editorial que convierte sin ruido.</h1>
            <p className="mt-5 max-w-xl text-slate-600">
              Diseño minimal de alto nivel para productos SaaS: jerarquia clara, narrativa comercial y experiencia elegante.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => alert('Interaccion de demo: solicitar demo minimal')}
                className="rounded-full border border-slate-900 px-5 py-2 text-sm transition-all duration-300 hover:bg-slate-900 hover:text-white"
              >
                Solicitar demo
              </button>
              <button
                onClick={() => console.log('Interaccion de demo: ver casos')}
                className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-700 transition-all duration-300 hover:border-slate-900"
              >
                Ver casos de exito
              </button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80"
            alt="Diseño web editorial minimalista"
            className="h-80 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </header>

        <section className="grid gap-4 border-b border-slate-300 py-10 sm:grid-cols-3">
          {metrics.map(([value, label]) => (
            <article key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-serif text-3xl">{value}</p>
              <p className="mt-1 text-sm text-slate-600">{label}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-3">
          {features.map(([title, desc], i) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-400"
            >
              <p className="font-serif text-6xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-slate-300 leading-none">
                0{i + 1}
              </p>
              <div className="mt-5 h-[2px] w-10 bg-slate-900 transition-all duration-300 group-hover:w-16" />
              <h2 className="mt-5 font-serif text-2xl leading-snug">{title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 border-y border-slate-300 py-12 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Empresas que confian</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-4">
              {['NOVA', 'LUMEN', 'ATLAS', 'NEXO'].map((logo) => (
                <div key={logo} className="rounded-lg border border-slate-300 px-3 py-2 text-center">
                  {logo}
                </div>
              ))}
            </div>
          </div>
          <blockquote className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-serif text-2xl leading-relaxed">
              “Con este enfoque minimal redujimos friccion y aumentamos solicitudes de demo en menos de 6 semanas.”
            </p>
            <footer className="mt-4 text-sm text-slate-600">Andrea Ruiz · Head of Growth</footer>
          </blockquote>
        </section>

        <section className="pt-12 text-center">
          <h3 className="font-serif text-4xl">Listo para una landing SaaS de alto impacto?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Estructura modular, visual limpio y enfoque directo en conversion para ciclos de venta B2B.
          </p>
          <button
            onClick={() => alert('Interaccion de demo: iniciar proyecto')}
            className="mt-7 rounded-full border border-slate-900 bg-slate-900 px-7 py-3 text-sm text-white transition-all duration-300 hover:bg-slate-700"
          >
            Iniciar proyecto
          </button>
        </section>
      </section>

      <footer className="mt-20 border-t border-slate-300 px-6 py-14 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Minimal SaaS Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Minimal
