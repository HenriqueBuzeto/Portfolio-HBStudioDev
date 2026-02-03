import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import PageTitle from '@/components/PageTitle'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Carousel from '@/components/Carousel'
import CTA from '@/components/CTA'
import { services } from '@/data/services'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Início',
  description: 'Desenvolvimento de sites e landing pages profissionais com foco em performance e conversão. Planejamento SEO para melhor posicionamento do seu site.',
}

const carouselImages = [
  {
    id: 'promo-inauguracao',
    src: '/BlackInauguracao.png?v=2',
    alt: 'Promoção de Inauguração',
    title: 'Promoção de Inauguração',
    description: 'Aproveite a promoção de inauguração! Condições especiais para o seu projeto.',
    objectFit: 'contain' as const,
    href: '/services',
  },
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&q=80',
    alt: 'Banner 1',
    title: 'Design Moderno e Profissional',
    description: 'Criamos experiências digitais que convertem',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
    alt: 'Banner 2',
    title: 'Performance e Velocidade',
    description: 'Sites rápidos que seus clientes vão adorar',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80',
    alt: 'Banner 3',
    title: 'Planejamento SEO',
    description: 'Melhor performance e posicionamento com as melhores técnicas',
  },
]

const testimonials = [
  {
    id: '1',
    name: 'João Silva',
    role: 'CEO',
    company: 'TechStart',
    content: 'Trabalho excepcional! O site superou todas as expectativas e já vimos um aumento significativo nas conversões.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Maria Santos',
    role: 'Diretora de Marketing',
    company: 'Inovação Digital',
    content: 'Profissionalismo e atenção aos detalhes. O projeto foi entregue no prazo e com qualidade impecável.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Pedro Costa',
    role: 'Empreendedor',
    content: 'Recomendo sem hesitação! Transformou completamente nossa presença online.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel images={carouselImages} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary-50 dark:to-secondary-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="Nossos Serviços"
            subtitle="Soluções completas para sua presença digital"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Por Que Escolher Nossos Serviços?
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
              Cada projeto é desenvolvido com cuidado, atenção aos detalhes e foco nas necessidades reais de cada cliente. Somos uma empresa em constante evolução, comprometida em entregar soluções digitais bem estruturadas, funcionais e alinhadas aos objetivos do seu negócio.
              </p>
              <ul className="space-y-4">
                {[
                  'Design moderno e responsivo',
                  'Performance otimizada',
                  'Planejamento SEO para melhor posicionamento',
                  'Suporte contínuo',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipe trabalhando"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-secondary-50 dark:from-secondary-900/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="O Que Nossos Clientes Dizem"
            subtitle="Feedback real de quem já trabalhou conosco"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="Tecnologias que Dominamos"
            subtitle="Utilizamos as melhores ferramentas do mercado para criar soluções de alta qualidade"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL',
              'MongoDB', 'AWS', 'Vercel', 'Figma', 'Git', 'Docker'
            ].map((tech, index) => (
              <div
                key={tech}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {tech.charAt(0)}
                </div>
                <div className="text-sm font-medium text-foreground/80">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-primary/5 dark:to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageTitle
            title="Nosso Processo de Trabalho"
            subtitle="Um método comprovado que garante resultados excepcionais"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Descoberta',
                description: 'Entendemos suas necessidades, objetivos e público-alvo através de reuniões estratégicas.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Criamos protótipos e designs modernos que refletem sua marca e convertem visitantes.',
              },
              {
                step: '03',
                title: 'Desenvolvimento',
                description: 'Construímos seu site com código limpo, otimizado e seguindo as melhores práticas.',
              },
              {
                step: '04',
                title: 'Lançamento',
                description: 'Testamos tudo, fazemos ajustes finais e lançamos seu site com suporte completo.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 rounded-lg bg-card border border-border hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
