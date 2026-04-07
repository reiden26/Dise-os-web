import Navbar from '../components/Navbar'
import DemoCard from '../components/DemoCard'
import { demosRegistry } from '../data/demosRegistry'
import { useMemo, useState } from 'react'

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'saas', label: 'SaaS' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'blog', label: 'Blog' },
]

function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredDemos = useMemo(() => {
    if (activeFilter === 'all') return demosRegistry
    return demosRegistry.filter((demo) => demo.categoryKey === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[#f5efe6] text-slate-900">
      <Navbar theme="light" />
      <main className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Portafolio de Demos UI</h1>
          <p className="max-w-2xl text-slate-600">
            Diseños varios con React + Tailwind
            .
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'border-[#b06a4f] bg-[#f3dfd5] text-[#6b3f2d]'
                  : 'border-slate-300 bg-white/70 text-slate-700 hover:border-[#c18770]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDemos.map((demo) => (
            <DemoCard key={demo.slug} demo={demo} />
          ))}
        </section>
      </main>

      <footer className="mt-20 border-t border-[#d8c7b9] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Catalogos de Conceptos de Diseno</p>
          <p>React + Tailwind · Showcase 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
