const bullets = [
  'Tacticas de UX accionables',
  'Frameworks de growth por etapa',
  'Casos reales y aprendizajes',
]

function Newsletter() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 animate-slow-drift bg-[radial-gradient(circle_at_15%_20%,#bfdbfe_0,#ffffff_35%),radial-gradient(circle_at_85%_80%,#ddd6fe_0,#ffffff_35%)] opacity-70" style={{ transformOrigin: 'center' }} />

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Newsletter Moderna</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">Insights semanales para equipos de producto y diseño.</h1>
          <p className="mt-5 max-w-xl text-slate-600">Una landing de conversion real: promesa clara, beneficio tangible y formulario protagonista.</p>
          <div className="mt-8 space-y-4">
            {bullets.map((item, index) => (
              <div key={item} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg font-bold">✓</span>
                <span className="text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '160ms' }}>
          <div className="animate-float rounded-3xl border border-white/40 bg-white/70 p-9 shadow-2xl backdrop-blur-xl">
            <h2 className="text-3xl font-semibold tracking-tight">Unete a 12,000 lectores</h2>
            <p className="mt-3 text-slate-600">Recibe una guia practica y exclusiva cada viernes.</p>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                alert('Interaccion de demo: suscripcion enviada')
              }}
              className="mt-8 space-y-4"
            >
              <input type="text" placeholder="Tu nombre" className="h-14 w-full rounded-2xl border border-slate-200 bg-white/80 px-5 transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100/50 shadow-sm focus:shadow-md" />
              <input type="email" required placeholder="tu@email.com" className="h-14 w-full rounded-2xl border border-slate-200 bg-white/80 px-5 transition-all duration-300 placeholder:text-slate-400 focus:-translate-y-0.5 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100/50 shadow-sm focus:shadow-md" />
              <button className="h-14 w-full rounded-2xl bg-slate-900 px-6 font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0">
                Suscribirme ahora
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mt-20 border-t border-slate-300 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Modern Newsletter Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Newsletter
