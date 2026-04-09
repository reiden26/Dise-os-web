import { useState, useEffect } from 'react'

// Iconos SVG inline para no depender de librerías externas
const Icons = {
  Zap: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Chart: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Star: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
}

// Datos de features
const features = [
  {
    icon: Icons.Zap,
    title: 'Automatización Inteligente',
    description: 'Reduce tareas manuales en un 80% con flujos automatizados que se adaptan a tu negocio.',
    color: 'blue',
  },
  {
    icon: Icons.Shield,
    title: 'Seguridad Enterprise',
    description: 'Encriptación de nivel bancario, auditoría completa y compliance con GDPR, SOC2.',
    color: 'emerald',
  },
  {
    icon: Icons.Chart,
    title: 'Analytics Avanzado',
    description: 'Dashboards en tiempo real con insights predictivos para tomar decisiones data-driven.',
    color: 'violet',
  },
  {
    icon: Icons.Users,
    title: 'Colaboración en Equipo',
    description: 'Trabaja con tu equipo en tiempo real. Permisos granulares y control de versiones.',
    color: 'amber',
  },
]

// Datos de pricing
const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfecto para startups y pequeños equipos',
    features: ['Hasta 5 usuarios', '10GB almacenamiento', 'Soporte por email', 'API básica'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Para equipos en crecimiento',
    features: ['Hasta 25 usuarios', '100GB almacenamiento', 'Soporte prioritario', 'API completa', 'Automatizaciones avanzadas'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solución a medida para grandes organizaciones',
    features: ['Usuarios ilimitados', 'Almacenamiento ilimitado', 'Soporte 24/7', 'On-premise disponible', 'SLA garantizado'],
    highlighted: false,
  },
]

// Logos de empresas (placeholders)
const logos = ['Vercel', 'Stripe', 'Notion', 'Slack', 'Figma', 'Linear']

function Interstellar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold text-slate-900">Nexus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Características</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Precios</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonios</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-slate-600 hover:text-slate-900 font-medium">
                Iniciar sesión
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Empezar gratis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Nueva versión 2.0 disponible
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                La plataforma que tu{' '}
                <span className="text-blue-600">equipo necesita</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Centraliza workflows, automatiza procesos y escala tu operación sin perder el control.
                Usado por más de 10,000 empresas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-600/25">
                  Comenzar prueba gratuita
                  <Icons.ArrowRight />
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all">
                  Ver demo
                </button>
              </div>

              <p className="text-sm text-slate-500">
                ✓ 14 días gratis sin tarjeta  ✓ Cancela cuando quieras
              </p>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                {/* Dashboard Mockup */}
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-slate-100 rounded w-32"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-blue-50 rounded-lg"></div>
                      <div className="h-8 w-8 bg-slate-50 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">2,543</div>
                      <div className="text-sm text-slate-600">Usuarios</div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">+42%</div>
                      <div className="text-sm text-slate-600">Crecimiento</div>
                    </div>
                    <div className="p-4 bg-violet-50 rounded-xl">
                      <div className="text-2xl font-bold text-violet-600">98%</div>
                      <div className="text-sm text-slate-600">Satisfacción</div>
                    </div>
                  </div>
                  <div className="h-32 bg-slate-50 rounded-xl flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 55, 70, 85].map((h, i) => (
                      <div key={i} className="w-8 bg-blue-200 rounded-t" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl border border-slate-100 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icons.Chart />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600">Activación</div>
                    <div className="text-lg font-bold text-emerald-600">+42% este mes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">
            Empresas que confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {logos.map((logo) => (
              <span key={logo} className="text-xl font-bold text-slate-400">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Todo lo que necesitas en una sola plataforma
            </h2>
            <p className="text-lg text-slate-600">
              Diseñado para equipos que quieren trabajar más inteligentemente, no más duro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  feature.color === 'violet' ? 'bg-violet-100 text-violet-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Empresas' },
              { value: '99.9%', label: 'Uptime' },
              { value: '50M+', label: 'Tareas automatizadas' },
              { value: '4.9/5', label: 'Rating promedio' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star key={i} />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium text-slate-900 mb-6 leading-relaxed">
                "Nexus transformó completamente nuestra operación. Lo que antes tomaba horas, ahora se hace en minutos.
                El ROI fue evidente desde el primer mes."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                <div>
                  <div className="font-semibold text-slate-900">María González</div>
                  <div className="text-slate-600">CTO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { stat: '73%', desc: 'Reducción en tareas manuales' },
                { stat: '3x', desc: 'Incremento en productividad' },
                { stat: '24h', desc: 'Tiempo de implementación' },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</div>
                  <div className="text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Precios simples y transparentes
            </h2>
            <p className="text-lg text-slate-600">
              Sin costos ocultos. Sin complicaciones. Empieza gratis y escala cuando estés listo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-slate-900 text-white shadow-2xl'
                  : 'bg-slate-50 border border-slate-200'
              }`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Más popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    ${plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className={`${plan.highlighted ? 'text-slate-400' : 'text-slate-600'}`}>/mes</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-blue-600' : 'bg-blue-100'
                      }`}>
                        <div className={plan.highlighted ? 'text-white' : 'text-blue-600'}>
                          <Icons.Check />
                        </div>
                      </div>
                      <span className={plan.highlighted ? 'text-slate-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50'
                }`}>
                  {plan.price === 'Custom' ? 'Contactar ventas' : 'Empezar prueba'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tu operación?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya están trabajando más inteligentemente.
            Prueba Nexus gratis durante 14 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
              Comenzar prueba gratuita
              <Icons.ArrowRight />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-slate-600 rounded-xl font-semibold hover:border-slate-400 transition-all">
              Contactar ventas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <span className="text-xl font-bold text-white">Nexus</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                La plataforma todo-en-uno para equipos que quieren escalar sin perder el control.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Nexus. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Interstellar
