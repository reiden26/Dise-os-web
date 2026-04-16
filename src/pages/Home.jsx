import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { demosRegistry } from '../data/demosRegistry'

// ============================================
// ICONS - SVG Consistentes
// ============================================
const Icons = {
  Code: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Design: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  Rocket: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Github: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Mail: ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ArrowRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  ExternalLink: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
}

// ============================================
// COMPONENTES ATÓMICOS
// ============================================

// Skill Tag con Glassmorphism
const SkillTag = ({ name, level, index }) => (
  <div
    className="group p-5 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="flex items-center justify-between mb-3">
      <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{name}</h4>
      <span className="text-xs font-medium text-indigo-400">{level}%</span>
    </div>
    <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
      <div
        className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-full transition-all duration-700 ease-out group-hover:from-indigo-400 group-hover:to-cyan-400"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
)

// Category Badge con gradiente dinámico
const CategoryBadge = ({ category, categoryKey }) => {
  const gradients = {
    saas: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300',
    ecommerce: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
    blog: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
    landing: 'from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-300',
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${gradients[categoryKey] || gradients.saas} border backdrop-blur-sm`}>
      {category}
    </span>
  )
}

// Project Card - Glassmorphism Avanzado
const ProjectCard = ({ demo, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group relative rounded-2xl overflow-hidden bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
      style={{
        animationDelay: `${index * 80}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con Overlay Gradiente */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
        <img
          src={demo.previewImage}
          alt={`Vista previa de ${demo.name}`}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Badge de categoría flotante */}
        <div className="absolute top-4 left-4 z-20">
          <CategoryBadge category={demo.category} categoryKey={demo.categoryKey} />
        </div>

        {/* Overlay al hover */}
        <div className={`absolute inset-0 bg-indigo-600/20 backdrop-blur-[2px] z-10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        {/* Botón de vista rápida */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium flex items-center gap-2">
            <Icons.ExternalLink className="w-4 h-4" />
            Vista rápida
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors line-clamp-1">
          {demo.name}
        </h3>
        <p className="text-slate-400 text-sm mb-5 line-clamp-2 leading-relaxed">
          {demo.description || 'Proyecto profesional con diseño moderno y código limpio.'}
        </p>

        {/* Footer de la card */}
        <div className="flex items-center justify-between">
          <Link
            to={`/demo/${demo.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
          >
            Ver proyecto
            <span className="transform transition-transform group-hover/link:translate-x-1">→</span>
          </Link>

          {/* Tags técnicos */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-indigo-500 transition-colors" />
            <span className="text-xs text-slate-500">React</span>
          </div>
        </div>
      </div>

      {/* Glow effect en hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-cyan-500/0 group-hover:from-indigo-500/20 group-hover:via-indigo-500/10 group-hover:to-cyan-500/20 rounded-2xl transition-all duration-500 -z-10 blur-xl opacity-0 group-hover:opacity-100" />
    </article>
  )
}

// Stat Card con animación de contador
const StatCard = ({ value, label, index }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = parseInt(value.replace(/\D/g, ''))
    const duration = 1500
    const steps = 30
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  const suffix = value.replace(/[0-9]/g, '')

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: isVisible ? 'fadeInUp 0.5s ease-out forwards' : 'none',
        opacity: 0
      }}
    >
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2 font-mono">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-sm font-medium tracking-wide uppercase">{label}</div>
    </div>
  )
}

// Skill Feature Card
const SkillFeatureCard = ({ icon: Icon, label, desc, index }) => (
  <div
    className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1 group"
    style={{
      animationDelay: `${index * 100}ms`,
      animation: 'fadeInUp 0.5s ease-out forwards',
      opacity: 0
    }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-white font-semibold mb-1">{label}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
)

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Detectar scroll para navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { id: 'all', label: 'Todos', icon: Icons.Sparkles },
    { id: 'saas', label: 'SaaS / Tech', color: 'blue' },
    { id: 'ecommerce', label: 'E-commerce', color: 'emerald' },
    { id: 'blog', label: 'Blog / Editorial', color: 'amber' },
    { id: 'landing', label: 'Landing Pages', color: 'rose' },
  ]

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 98 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'PostgreSQL', level: 75 },
  ]

  const stats = [
    { value: '50+', label: 'Proyectos Completados' },
    { value: '3+', label: 'Años de Experiencia' },
    { value: '30+', label: 'Clientes Satisfechos' },
    { value: '100%', label: 'Compromiso' },
  ]

  const skillFeatures = [
    { icon: Icons.Code, label: 'Frontend', desc: 'React, Vue, Next.js' },
    { icon: Icons.Rocket, label: 'Backend', desc: 'Node.js, Python, APIs' },
    { icon: Icons.Design, label: 'Design', desc: 'Figma, Tailwind' },
    { icon: Icons.Code, label: 'Database', desc: 'PostgreSQL, MongoDB' },
  ]

  const filteredDemos = activeTab === 'all'
    ? demosRegistry
    : demosRegistry.filter(demo => demo.categoryKey === activeTab)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden">
      {/* ============================================
          GLOBAL STYLES & ANIMATIONS
      ============================================ */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* ============================================
          NAVIGATION - Glassmorphism
      ============================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Portfolio</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {['Sobre mí', 'Proyectos', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium text-sm hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50">
            <div className="px-4 py-4 space-y-1">
              {['Sobre mí', 'Proyectos', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-3 mt-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-slate-950">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px]" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left" style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">Disponible para proyectos</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Desarrollador
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 animate-gradient">
                  Full Stack
                </span>
                & Diseñador UI
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Creo experiencias digitales excepcionales. Especializado en React,
                TypeScript y diseño moderno. Transformo ideas en productos escalables.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#proyectos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                >
                  Ver proyectos
                  <Icons.ArrowRight />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-all duration-200"
                >
                  Contactar
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-slate-500 text-sm">Sígueme:</span>
                {[
                  { icon: Icons.Github, label: 'GitHub' },
                  { icon: Icons.Linkedin, label: 'LinkedIn' },
                  { icon: Icons.Mail, label: 'Email' },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Visual - Code Terminal */}
            <div className="hidden lg:block relative" style={{ animation: 'fadeInUp 1s ease-out 0.2s forwards', opacity: 0 }}>
              <div className="relative">
                {/* Glow behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      online
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="font-mono text-sm space-y-3">
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">1</span>
                      <span>
                        <span className="text-indigo-400">const</span>
                        <span className="text-cyan-400 ml-2">developer</span>
                        <span className="text-slate-300"> = {'{'}</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">2</span>
                      <span className="pl-4">
                        <span className="text-slate-300">name:</span>
                        <span className="text-emerald-400 ml-2">'Tu Nombre'</span>
                        <span className="text-slate-300">,</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">3</span>
                      <span className="pl-4">
                        <span className="text-slate-300">role:</span>
                        <span className="text-emerald-400 ml-2">'Full Stack'</span>
                        <span className="text-slate-300">,</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">4</span>
                      <span className="pl-4">
                        <span className="text-slate-300">skills: [</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">5</span>
                      <span className="pl-8">
                        <span className="text-emerald-400">'React'</span>
                        <span className="text-slate-300">, </span>
                        <span className="text-emerald-400">'TypeScript'</span>
                        <span className="text-slate-300">, </span>
                        <span className="text-emerald-400">'Node.js'</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">6</span>
                      <span className="pl-4 text-slate-300">],</span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">7</span>
                      <span className="pl-4">
                        <span className="text-slate-300">passion:</span>
                        <span className="text-amber-400 ml-2">Infinity</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-600 select-none mr-4">8</span>
                      <span className="text-slate-300">{'}'}</span>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-indigo-400">➜</span>
                    <span className="text-slate-500">~</span>
                    <span className="w-2 h-4 bg-indigo-400 animate-pulse" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-white/10 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full backdrop-blur-sm border border-white/10 animate-float" style={{ animationDelay: '3s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
      ============================================ */}
      <section className="py-16 lg:py-20 border-y border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS SECTION
      ============================================ */}
      <section id="proyectos" className="py-24 lg:py-32 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Destacados</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes, desde aplicaciones SaaS hasta e-commerce de alto rendimiento.
            </p>
          </div>

          {/* Filter Tabs - Glassmorphism */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => {
              const isActive = activeTab === cat.id
              const Icon = cat.icon

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 overflow-hidden ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {/* Active background */}
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl" />
                  )}
                  {/* Hover background */}
                  {!isActive && (
                    <span className="absolute inset-0 bg-slate-800/50 rounded-xl opacity-0 hover:opacity-100 transition-opacity" />
                  )}
                  <span className="relative flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDemos.map((demo, index) => (
              <ProjectCard key={demo.slug} demo={demo} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredDemos.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/50 flex items-center justify-center">
                <Icons.Sparkles className="w-8 h-8 text-slate-500" />
              </div>
              <p className="text-slate-400">No hay proyectos en esta categoría aún.</p>
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-200"
            >
              Ver todos los proyectos
              <Icons.ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SKILLS SECTION
      ============================================ */}
      <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-4">
                Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Habilidades & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Tecnologías</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Domino un stack tecnológico moderno y escalable. Mi enfoque está en crear
                código limpio, mantenible y con excelente experiencia de usuario.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillTag key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="grid grid-cols-2 gap-4">
              {skillFeatures.map((item, index) => (
                <SkillFeatureCard key={item.label} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            Disponible para trabajar
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para tu próximo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">proyecto?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para trabajar en proyectos freelance o colaboraciones.
            Si tienes una idea o necesitas ayuda con tu producto digital, hablemos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:tu@email.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold hover:from-indigo-500 hover:to-cyan-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <Icons.Mail className="w-5 h-5" />
              Enviar email
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white transition-all duration-200"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
      ============================================ */}
      <footer className="py-12 border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white font-semibold">DevPortfolio</span>
            </Link>

            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} - Diseñado y desarrollado con pasión.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Icons.Github, label: 'GitHub' },
                { icon: Icons.Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
