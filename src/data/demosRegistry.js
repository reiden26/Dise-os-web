import Interstellar from '../demos/saas/Interstellar'
import Minimal from '../demos/saas/Minimal'
import Luxury from '../demos/ecommerce/Luxury'
import Cyberpunk from '../demos/ecommerce/Cyberpunk'
import Classic from '../demos/blog/Classic'
import Newsletter from '../demos/blog/Newsletter'

// Registro central de demos para renderizar tarjetas y resolver rutas dinamicas.
export const demosRegistry = [
  {
    slug: 'interstellar-saas',
    name: 'SaaS Interstellar',
    category: 'Landing Pages SaaS / Tech',
    categoryKey: 'saas',
    previewImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    component: Interstellar,
  },
  {
    slug: 'minimal-lineal',
    name: 'SaaS Minimal Lineal',
    category: 'Landing Pages SaaS / Tech',
    categoryKey: 'saas',
    previewImage: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80',
    component: Minimal,
  },
  {
    slug: 'luxury-fashion',
    name: 'E-commerce Luxury',
    category: 'E-commerce / Producto',
    categoryKey: 'ecommerce',
    previewImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
    component: Luxury,
  },
  {
    slug: 'cyberpunk-store',
    name: 'E-commerce Cyberpunk',
    category: 'E-commerce / Producto',
    categoryKey: 'ecommerce',
    previewImage: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80',
    component: Cyberpunk,
  },
  {
    slug: 'classic-magazine',
    name: 'Blog Revista Clasica',
    category: 'Blog / Editorial',
    categoryKey: 'blog',
    previewImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
    component: Classic,
  },
  {
    slug: 'newsletter-modern',
    name: 'Blog Newsletter Moderno',
    category: 'Blog / Editorial',
    categoryKey: 'blog',
    previewImage: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80',
    component: Newsletter,
  },
]
