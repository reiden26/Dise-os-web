function Classic() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80"
          alt="Redaccion periodistica"
          className="h-[120%] w-[120%] -ml-[10%] -mt-[10%] object-cover animate-slow-drift"
        />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute bottom-10 left-6 right-6 mx-auto max-w-7xl animate-fade-up sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-200">Revista Clasica</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-white sm:text-7xl">Periodismo visual con una portada contundente.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="mb-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-600">
          {['Politica', 'Cultura', 'Negocios', 'Tecnologia'].map((cat) => (
            <span key={cat} className="rounded-full border border-slate-400/50 px-4 py-1.5 cursor-pointer hover:bg-slate-800 hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md">{cat}</span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <article key={post} className="group overflow-hidden rounded-xl border border-slate-300 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80&sig=${post}`}
                  alt={`Articulo ${post}`}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold">Abr 2026 · Cultura</p>
                <h2 className="mt-3 text-2xl font-bold font-serif transition-colors duration-300 group-hover:text-blue-800">Titular de portada #{post}</h2>
                <h3 className="mt-2 text-slate-600 leading-relaxed">Resumen breve del articulo para mejorar escaneo y CTR editorial, proporcionando el contexto esencial.</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-slate-300 bg-white/60 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Classic Editorial Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Classic
