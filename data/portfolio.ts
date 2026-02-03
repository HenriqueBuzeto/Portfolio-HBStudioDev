export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image: string
  liveUrl: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-commerce Moderno',
    description: 'Plataforma completa de e-commerce com carrinho, checkout e integração de pagamento.',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: 'https://exemplo-ecommerce.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    featured: true,
  },
  {
    id: '2',
    title: 'Landing Page Premium',
    description: 'Landing page de alta conversão com design moderno e animações suaves.',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    liveUrl: 'https://exemplo-landing.com',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '3',
    title: 'Site Institucional',
    description: 'Site corporativo completo com blog integrado e painel administrativo.',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    liveUrl: 'https://exemplo-institucional.com',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    id: '4',
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo com gráficos e métricas em tempo real.',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: 'https://exemplo-dashboard.com',
    githubUrl: 'https://github.com/usuario/dashboard',
    technologies: ['React', 'Chart.js', 'TypeScript'],
  },
  {
    id: '5',
    title: 'App Mobile Web',
    description: 'Aplicativo web responsivo com PWA e funcionalidades offline.',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    liveUrl: 'https://exemplo-mobile.com',
    technologies: ['Next.js', 'PWA', 'Service Workers'],
  },
  {
    id: '6',
    title: 'Plataforma SaaS',
    description: 'Software como serviço completo com autenticação e assinaturas.',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    liveUrl: 'https://exemplo-saas.com',
    technologies: ['Next.js', 'Stripe', 'Auth0', 'MongoDB'],
    featured: true,
  },
]

export const categories = ['Todos', 'E-commerce', 'Landing Page', 'Institucional', 'Dashboard', 'Mobile', 'SaaS']
