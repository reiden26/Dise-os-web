const features = [
  {
    title: 'Automatizacion Inteligente',
    desc: 'Flujos con IA para onboarding, soporte y retencion sin friccion.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Analitica Predictiva',
    desc: 'Dashboards de comportamiento para anticipar churn y crecimiento.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 19h16" />
        <path d="M6 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Seguridad Enterprise',
    desc: 'Permisos granulares, auditoria y proteccion de extremo a extremo.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" />
      </svg>
    ),
  },
]

function Interstellar() {
  return (
    <main className="min-h-screen bg-[#060713] text-white">
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <div className="absolute -left-20 top-10 h-72 w-72 animate-slow-drift rounded-full bg-fuchsia-600/30 blur-[110px]" />
        <div className="absolute right-0 top-0 h-80 w-80 animate-slow-drift rounded-full bg-violet-600/30 blur-[110px]" style={{ animationDelay: '2s' }} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300">SaaS Interstellar</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Escala tu operacion digital con una experiencia de otra galaxia.
            </h1>
            <p className="mt-6 max-w-xl text-slate-300 sm:text-lg">
              Landing premium para producto tech: narrativa de valor, enfoque en conversion y visuales inmersivos.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => alert('Interaccion de demo: iniciar prueba')} className="rounded-xl border border-fuchsia-300/70 bg-fuchsia-500/10 px-6 py-3 text-fuchsia-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon hover:bg-fuchsia-500/20">
                Iniciar prueba
              </button>
              <button onClick={() => console.log('Interaccion de demo: reservar llamada')} className="rounded-xl border border-white/20 px-6 py-3 transition-all duration-300 hover:border-fuchsia-300/50 hover:bg-white/5">
                Reservar llamada
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
              {['+320%', '99.98%', '1.2M'].map((kpi) => (
                <div key={kpi} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:bg-white/10 px-3 py-3">
                  {kpi}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '140ms' }}>
            <img
              src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard SaaS futurista"
              className="animate-float h-[480px] w-full rounded-3xl border border-fuchsia-300/30 object-cover shadow-2xl shadow-fuchsia-900/20"
            />
            <div className="absolute -bottom-6 -left-6 animate-float rounded-2xl border border-fuchsia-300/40 bg-[#0a0f24]/90 p-5 backdrop-blur shadow-neon" style={{ animationDelay: '1.5s' }}>
              <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-300">Realtime insights</p>
              <p className="mt-2 text-2xl font-semibold">+42% activacion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16 animate-fade-up" style={{ animationDelay: '240ms' }}>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-300/60 hover:shadow-neon hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg border border-fuchsia-300/40 p-2 text-fuchsia-200 transition-transform duration-300 group-hover:scale-110">{f.icon}</div>
              <h3 className="text-xl font-medium">{f.title}</h3>
              <p className="mt-3 text-slate-300">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-white/10 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>Interstellar SaaS Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Interstellar
