import { useEffect, useState } from 'react'

function Cyberpunk() {
  const [activeSlide, setActiveSlide] = useState(0)
  const items = [
    'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1593642702744-d377ab507dc8?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % items.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [items.length])

  return (
    <main className="min-h-screen bg-black text-lime-300">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:px-16">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-lime-400">Cyber Commerce</p>
          <h1 className="mt-4 text-5xl font-bold uppercase tracking-[0.2em] sm:text-7xl animate-cyber-pulse shadow-lime-400/20 drop-shadow-[0_0_10px_rgba(190,242,100,0.8)]">Neon Grid Store</h1>
          <p className="mt-5 max-w-2xl text-lime-200">Landing agresiva para productos tech: ritmo visual, contraste extremo y micro-efectos.</p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-[1.8fr_1fr]">
          <div className="group relative overflow-hidden border border-lime-300/60 p-6 [clip-path:polygon(4%_0,100%_0,100%_88%,96%_100%,0_100%,0_12%)] hover:shadow-cyber-neon transition-shadow duration-300">
            <img src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80" alt="Setup gamer neon" className="h-72 w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 drop-shadow-[0_0_8px_rgba(190,242,100,0.6)]">
              <p className="text-xs uppercase tracking-[0.2em]">Oferta limitada</p>
              <h2 className="mt-2 text-3xl font-semibold">XR Creator Pack</h2>
            </div>
            <div className="absolute top-0 right-0 h-full w-1 bg-lime-400/50 blur-sm group-hover:bg-lime-400 animate-cyber-pulse" />
          </div>
          <div className="border border-lime-300/60 p-6 [clip-path:polygon(8%_0,100%_0,100%_78%,92%_100%,0_100%,0_22%)] flex flex-col justify-center items-center text-center hover:bg-lime-900/20 transition-colors duration-300">
            <p className="text-sm tracking-widest uppercase text-lime-300/70">Entrega 24h</p>
            <p className="mt-2 text-4xl font-bold animate-cyber-pulse text-lime-200"> -15%</p>
            <p className="mt-1 text-sm">solo hoy</p>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {items.map((img, index) => (
            <article
              key={img}
              className={`group border border-lime-300/70 p-4 transition-all duration-500 [clip-path:polygon(8%_0,100%_0,100%_80%,92%_100%,0_100%,0_20%)] hover:bg-lime-900/10 ${
                activeSlide === index ? 'scale-[1.02] shadow-[0_0_30px_rgba(163,230,53,0.35)] bg-lime-950/20' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <div className="relative mb-4 h-44 overflow-hidden bg-[#141414] [clip-path:polygon(0_0,100%_0,100%_100%,8%_100%,0_92%)]">
                <img src={img} alt={`Producto tech ${index + 1}`} className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <h3 className="text-xl font-bold tracking-wide">Producto XR-{index + 1}</h3>
              <button onClick={() => console.log('Interaccion de demo: agregar producto cyberpunk')} className="mt-4 border border-lime-300 px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-lime-300 hover:text-black hover:shadow-[0_0_15px_rgba(190,242,100,0.8)]">
                Agregar al enlace
              </button>
            </article>
          ))}
        </section>

        <section className="mt-6 flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-lime-300' : 'w-2.5 bg-lime-300/45'}`}
              aria-label={`Mostrar slide ${index + 1}`}
            />
          ))}
        </section>
      </section>

      <footer className="mt-20 border-t border-lime-300/20 px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-lime-200/80 sm:flex-row sm:items-center sm:justify-between">
          <p>Cyberpunk Commerce Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Cyberpunk
