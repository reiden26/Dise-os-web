import { useEffect, useState } from 'react'

const slides = [
  'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80',
]

function Luxury() {
  const [activeSlide, setActiveSlide] = useState(0)
  const products = [
    { name: 'Bolso Atelier', price: '$240', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80' },
    { name: 'Abrigo Aurora', price: '$410', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80' },
    { name: 'Zapatos Vela', price: '$190', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#efe4d1] text-[#2d241f]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-10 lg:px-16">
        <header className="mb-12 flex items-center justify-between">
          <h1 className="text-4xl sm:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>Maison Lumiere</h1>
          <button onClick={() => alert('Interaccion de demo: abrir carrito')} className="rounded-full border border-[#2d241f]/60 px-5 py-2 text-sm transition-all duration-300 hover:bg-[#2d241f] hover:text-[#efe4d1]">
            Carrito (0)
          </button>
        </header>

        <section className="mb-14 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl h-[440px]">
            {slides.map((slide, index) => (
              <img
                key={slide}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  activeSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/30 p-4 backdrop-blur-sm z-10 transition-opacity duration-300">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-sm text-white transition-all duration-300 hover:bg-white/35"
              >
                Anterior
              </button>
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${activeSlide === idx ? 'bg-white' : 'bg-white/45'}`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className="rounded-full border border-white/50 bg-white/20 px-3 py-1 text-sm text-white transition-all duration-300 hover:bg-white/35"
              >
                Siguiente
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-[#d8c4a8] p-10">
            <p className="text-xs uppercase tracking-[0.24em]">Coleccion SS26</p>
            <h2 className="mt-4 text-4xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>E-commerce de lujo con narrativa de marca.</h2>
            <p className="mt-5 text-[#4a3e36]">Visuales grandes, composicion editorial y producto protagonista para elevar valor percibido.</p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-3xl border border-[#c9ad8e] bg-[#f6ede2] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden p-3 h-72 relative">
                <div className="absolute inset-x-3 inset-y-3 z-10 rounded-2xl bg-[#5b4a3f]/0 transition-colors duration-500 group-hover:bg-[#5b4a3f]/20 pointer-events-none" />
                <img src={product.image} alt={product.name} className="h-full w-full rounded-2xl object-cover transition-all duration-700 group-hover:scale-110" />
              </div>
              <div className="space-y-3 px-5 pb-5 pt-1">
                <h3 className="text-2xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h3>
                <p className="text-lg text-[#5b4a3f]">{product.price}</p>
                <button
                  onClick={() => console.log(`Interaccion de demo: ver ${product.name}`)}
                  className="mt-2 rounded-full border border-[#8f6d58] px-5 py-2 text-sm transition-all duration-300 hover:bg-[#8f6d58] hover:text-[#f6ede2] hover:shadow-lg"
                >
                  Ver producto
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>

      <footer className="mt-20 border-t border-[#d2bba2] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#6c5547] sm:flex-row sm:items-center sm:justify-between">
          <p>Luxury Commerce Demo</p>
          <p>Catalogos · UX/UI Showcase 2026</p>
        </div>
      </footer>
    </main>
  )
}

export default Luxury
