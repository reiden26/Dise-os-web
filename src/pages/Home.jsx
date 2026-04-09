import { useState } from 'react'
import { Link } from 'react-router-dom'
import { demosRegistry } from '../data/demosRegistry'

// Icons
const Icons = {
  Code: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Design: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Github: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
}

// Skill Tag con colores solidos
const SkillTag = ({ name, level }) => (
  <div className="group p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300">
    <h4 className="font-semibold text-white mb-2">{name}</h4>
    <div className="w-full bg-slate-700 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
)

// Project Card - VERSION CORREGIDA
const ProjectCard = ({ demo, index }) => (
  <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
    {/* Imagen */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
      <img
        src={demo.previewImage}
        alt={demo.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
          {demo.category}
        </span>
      </div>
    </div>

    {/* Contenido */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {demo.name}
      </h3>
      <p className="text-slate-400 text-sm mb-4">
        {demo.description || 'Proyecto profesional con diseño moderno y código limpio.'}
      </p>
      <Link
        to={`/demo/${demo.slug}`}
        className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
      >
        Ver proyecto
        <span>→</span>
      </Link>
    </div>
  </div>
)

function Home() {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'saas', label: 'SaaS / Tech' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'blog', label: 'Blog / Editorial' },
    { id: 'landing', label: 'Landing Pages' },
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

  const filteredDemos = activeTab === 'all'
    ? demosRegistry
    : demosRegistry.filter(demo => demo.categoryKey === activeTab)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-white font-bold text-xl">Dev<span className="text-blue-400">Portfolio</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">Sobre mí</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Proyectos</a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/30 text-blue-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm font-medium">Disponible para proyectos</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Desarrollador
                <span className="text-blue-400"> Full Stack</span>
                <br />
                & Diseñador UI
              </h1>

              <p className="text-xl text-slate-400 mb-8 max-w-xl">
                Creo experiencias digitales excepcionales. Especializado en React,
                TypeScript y diseño moderno. Transformo ideas en productos escalables.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:-translate-y-1"
                >
                  Ver proyectos
                  <Icons.ArrowRight />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-white font-semibold hover:border-blue-500 hover:bg-blue-600/10 transition-all"
                >
                  Contactar
                </a>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icons.Github />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icons.Linkedin />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icons.Mail />
                </a>
              </div>
            </div>

            {/* Code Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-slate-400">const <span className="text-blue-400">developer</span> = {'{'}</div>
                    <div className="pl-4 text-slate-300">
                      name: <span className="text-green-400">'Tu Nombre'</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      role: <span className="text-green-400">'Full Stack'</span>,
                    </div>
                    <div className="pl-4 text-slate-300">
                      skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'TypeScript'</span>],
                    </div>
                    <div className="text-slate-400">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Proyectos <span className="text-blue-400">Destacados</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Una selección de mis trabajos más recientes, desde aplicaciones SaaS hasta e-commerce de alto rendimiento.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid - AHORA SI FUNCIONA */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo, index) => (
              <ProjectCard key={demo.slug} demo={demo} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-600/30 text-blue-400 font-semibold hover:bg-blue-600/10 transition-all"
            >
              Ver todos los proyectos
              <Icons.ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Habilidades & <span className="text-blue-400">Tecnologías</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Domino un stack tecnológico moderno y escalable. Mi enfoque está en crear
                código limpio, mantenible y con excelente experiencia de usuario.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <SkillTag key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* Skills Visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Icons.Code, label: 'Frontend', desc: 'React, Vue, Next.js' },
                { icon: Icons.Rocket, label: 'Backend', desc: 'Node.js, Python, APIs' },
                { icon: Icons.Design, label: 'Design', desc: 'Figma, Tailwind' },
                { icon: Icons.Code, label: 'Database', desc: 'PostgreSQL, MongoDB' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-4">
                    <item.icon />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para tu próximo proyecto?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Estoy disponible para trabajar en proyectos freelance o colaboraciones.
            Si tienes una idea o necesitas ayuda con tu producto digital, hablemos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tu@email.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all hover:-translate-y-1"
            >
              <Icons.Mail />
              Enviar email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-slate-600 text-white font-semibold hover:border-blue-500 hover:bg-blue-600/10 transition-all"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white font-semibold">DevPortfolio</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2024 - Diseñado y desarrollado con pasión.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icons.Github />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icons.Linkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
