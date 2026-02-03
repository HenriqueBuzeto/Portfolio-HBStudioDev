import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Conheça alguns dos projetos que desenvolvemos. Sites e landing pages que geram resultados reais.',
}

const PortfolioContent = dynamic(() => import('@/components/PortfolioContent'), {
  ssr: true,
  loading: () => (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-hidden />
    </div>
  ),
})

export default function Portfolio() {
  return <PortfolioContent />
}
