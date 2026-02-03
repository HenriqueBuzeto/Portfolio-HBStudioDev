export interface Service {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
  tagline?: string
  installmentsTimes?: number
  priceLabel?: string
  discountLabel?: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Landing Page Básica',
    description: 'Perfeita para lançamentos, campanhas e conversão rápida',
    price: 1000,
    originalPrice: 1500,
    installmentsTimes: 10,
    features: [
      'Design responsivo e moderno',
      'SEO técnico inicial (estrutura, performance e indexação)',
      'Formulário de contato',
      'Integração com WhatsApp',
      'Suporte por 30 dias',
      '1 revisão de design',
    ],
  },
  {
    id: '2',
    title: 'Site Institucional',
    description: 'Presença profissional completa na web',
    price: 2500,
    originalPrice: 3500,
    popular: true,
    tagline: 'Ideal para empresas',
    installmentsTimes: 10,
    features: [
      'Até 5 páginas',
      'Design personalizado',
      'SEO on-page básico (títulos, meta tags e estrutura)',
      'Blog integrado (opcional)',
      'Painel administrativo',
      'Suporte por 60 dias',
      '3 revisões de design',
      'Google Analytics',
    ],
  },
  {
    id: '3',
    title: 'E-commerce Completo',
    description: 'Loja virtual profissional com pagamentos',
    price: 6000,
    originalPrice: 8000,
    installmentsTimes: 10,
    features: [
      'Cadastro de até 25 produtos',
      'Produtos adicionais sob orçamento',
      'Dashboard adicional sob orçamento',
      'Carrinho de compras',
      'Integração com gateways de pagamento',
      'Painel administrativo completo',
      'Gestão de estoque',
      'Cupons de desconto',
      'SEO on-page + estrutura para produtos',
      'Suporte por 90 dias',
      '5 revisões de design',
    ],
  },
  {
    id: '4',
    title: 'Site Premium',
    description: 'Solução completa com recursos avançados',
    price: 10000,
    originalPrice: 14000,
    installmentsTimes: 12,
    priceLabel: 'A partir de',
    discountLabel: 'até 20% de desconto',
    features: [
      'Páginas ilimitadas',
      'Design exclusivo e premium',
      'Animações avançadas',
      'Sistema de agendamento',
      'Integrações personalizadas',
      'Performance otimizada',
      'SEO técnico e estratégico (sem garantia de ranking)',
      'Suporte prioritário por 6 meses',
      'Revisões ilimitadas durante o período de desenvolvimento',
      'Hospedagem gerenciada por 1 ano (servidor compartilhado)',
    ],
  },
]
