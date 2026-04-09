import { useEffect, useRef, useState } from 'react'

function FutbolLanding() {
  const [count, setCount] = useState(0)
  const statsRef = useRef(null)

  const stats = [
    { value: 50, suffix: '', label: 'Años de Experiencia' },
    { value: 10000, suffix: '+', label: 'Jugadores Activos' },
    { value: 500, suffix: '+', label: 'Torneos Realizados' },
    { value: 25, suffix: '', label: 'Países Participantes' },
  ]

  const features = [
    {
      icon: '🏆',
      title: 'Torneos Premium',
      desc: 'Compite en los torneos más prestigiosos con premios increíbles y reconocimiento mundial.'
    },
    {
      icon: '🌍',
      title: 'Comunidad Global',
      desc: 'Conecta con jugadores de todo el mundo y forma parte de una comunidad apasionada.'
    },
    {
      icon: '📊',
      title: 'Estadísticas en Vivo',
      desc: 'Seguimiento detallado de tu rendimiento con análisis avanzado de cada partido.'
    },
    {
      icon: '🎓',
      title: 'Academia Virtual',
      desc: 'Aprende de los mejores con cursos diseñados por profesionales del fútbol.'
    },
    {
      icon: '📅',
      title: 'Eventos Exclusivos',
      desc: 'Acceso a eventos exclusivos, masterclasses y encuentros con leyendas del fútbol.'
    },
    {
      icon: '📱',
      title: 'App Móvil',
      desc: 'Lleva tu experiencia a donde vayas con nuestra aplicación móvil completa.'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let current = 0
              const increment = stat.value / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                const element = document.getElementById(`stat-${index}`)
                if (element) {
                  element.innerText = Math.floor(current).toLocaleString() + stat.suffix
                }
              }, 30 + index * 10)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">⚽</span>
              <span className="text-xl font-bold text-emerald-600">FÚTBOL ELITE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Inicio</a>
              <a href="#caracteristicas" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Características</a>
              <a href="#galeria" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Galería</a>
              <a href="#contacto" className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">Contacto</a>
            </div>
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors">
              Unirse
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            VIVE LA PASIÓN
            <br />
            <span className="text-amber-400">DEL FÚTBOL</span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Donde los sueños se convierten en goles y la pasión nunca se detiene
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Descubre Más
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all">
              Únete Ahora
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  id={`stat-${index}`}
                  className="text-4xl md:text-5xl font-black text-emerald-400 mb-2"
                >
                  0
                </div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Nuestras <span className="text-emerald-600">Características</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Todo lo que necesitas para vivir el fútbol al máximo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Momentos <span className="text-emerald-600">Épicos</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Revive los mejores momentos del fútbol mundial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Gol de la Victoria', desc: 'Final del Mundial 2022', size: 'large' },
              { title: 'Celebración', desc: 'Emociones únicas', size: 'normal' },
              { title: 'Equipo Campeón', desc: 'La gloria eterna', size: 'normal' },
              { title: 'Técnica Superior', desc: 'Maestría en el campo', size: 'normal' },
              { title: 'Entrenamiento', desc: 'Dedicación total', size: 'normal' },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="relative h-64 md:h-full min-h-[300px] flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-emerald-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 to-teal-900/50" />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40Z' fill='%2310b981' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Únete a miles de jugadores que ya viven la pasión del fútbol
          </p>
          <button className="px-10 py-5 bg-amber-500 text-white rounded-full font-bold text-xl hover:bg-amber-600 transition-all transform hover:-translate-y-1 shadow-xl">
            Comienza Gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">⚽</span>
                <span className="text-xl font-bold text-emerald-500">FÚTBOL ELITE</span>
              </div>
              <p className="text-slate-400">
                La pasión del fútbol, llevada al siguiente nivel. Únete a la revolución del deporte rey.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-slate-400 hover:text-emerald-400 transition-colors">Inicio</a></li>
                <li><a href="#caracteristicas" className="text-slate-400 hover:text-emerald-400 transition-colors">Características</a></li>
                <li><a href="#galeria" className="text-slate-400 hover:text-emerald-400 transition-colors">Galería</a></li>
                <li><a href="#contacto" className="text-slate-400 hover:text-emerald-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📧 info@futbolelite.com</li>
                <li>📱 +1 234 567 890</li>
                <li>📍 Estadio Mundial, Ciudad</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2024 Fútbol Elite. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FutbolLanding
