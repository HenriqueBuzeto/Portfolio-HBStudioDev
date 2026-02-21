import type { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import ServiceCard from '@/components/ServiceCard'
import CTA from '@/components/CTA'
import ParticlesBgLazy from '@/components/ParticlesBgLazy'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça nossos planos e serviços de desenvolvimento web. Landing pages, sites institucionais e e-commerce.',
}

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50/50 dark:from-primary-950/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <PageTitle
            title="Nossos Serviços"
            subtitle="Escolha o plano ideal para o seu negócio. Todos os planos incluem suporte e garantia de qualidade."
          />
        </div>
      </section>

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mb-12 p-4 sm:p-6 rounded-lg border border-border bg-muted/30">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              <strong className="text-foreground">Observação:</strong> Conteúdo textual, imagens, domínio, anúncios pagos e manutenção contínua não estão inclusos, salvo quando especificado no plano.
            </p>
          </div>

          <div className="mt-16 bg-gradient-to-br from-card to-card/50 dark:from-card dark:to-card/80 rounded-lg p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              O Que Está Incluído em Todos os Planos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Design Responsivo',
                  description: 'Seu site funcionará perfeitamente em todos os dispositivos',
                  icon: '📱',
                },
                {
                  title: 'SEO técnico e on-page',
                  description: 'Estrutura, performance, indexação e boas práticas (títulos, meta tags). Não há garantia de posicionamento ou ranking.',
                  icon: '🔍',
                },
                {
                  title: 'Suporte Técnico',
                  description: 'Ajuda durante e após o lançamento do projeto',
                  icon: '💬',
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-background rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Comparação de Planos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 pr-4">Recurso</th>
                    <th className="pb-4 px-4 text-center">Básico</th>
                    <th className="pb-4 px-4 text-center">Institucional</th>
                    <th className="pb-4 px-4 text-center">E-commerce</th>
                    <th className="pb-4 px-4 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Páginas', basic: '1', inst: '5', ecom: 'Ilimitadas', premium: 'Ilimitadas' },
                    { feature: 'Design Personalizado', basic: '✓', inst: '✓', ecom: '✓', premium: '✓' },
                    { feature: 'E-commerce', basic: '✗', inst: '✗', ecom: '✓', premium: '✓' },
                    { feature: 'Blog', basic: '✗', inst: 'Opcional', ecom: '✓', premium: '✓' },
                    { feature: 'Painel Admin', basic: '✗', inst: '✓', ecom: '✓', premium: '✓' },
                    { feature: 'Suporte (meses)', basic: '1', inst: '2', ecom: '3', premium: '6' },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 pr-4 font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{row.basic}</td>
                      <td className="py-3 px-4 text-center">{row.inst}</td>
                      <td className="py-3 px-4 text-center">{row.ecom}</td>
                      <td className="py-3 px-4 text-center">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Perguntas Frequentes
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'Quanto tempo leva para desenvolver um site?',
                  answer: 'O prazo varia conforme o plano escolhido. Landing pages básicas levam de 1 a 2 semanas, enquanto sites mais complexos podem levar de 4 a 8 semanas.',
                },
                {
                  question: 'Posso solicitar alterações após a entrega?',
                  answer: 'Sim! Cada plano inclui um número específico de revisões. Revisões adicionais podem ser contratadas separadamente.',
                },
                {
                  question: 'Vocês oferecem hospedagem?',
                  answer: 'Oferecemos recomendações e auxílio na contratação e configuração. O plano Premium inclui hospedagem gerenciada por 1 ano (servidor compartilhado).',
                },
                {
                  question: 'Como funciona o processo de pagamento?',
                  answer: 'Trabalhamos com pagamento parcelado. Geralmente 50% no início e 50% na entrega, mas podemos negociar condições especiais.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Não Encontrou o Plano Ideal?"
        description="Entre em contato e vamos criar uma solução personalizada para você."
      />
    </>
  )
}
