'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ParticlesBgLazy from '@/components/ParticlesBgLazy'
import CTA from '@/components/CTA'
import {
  Sparkles,
  Zap,
  Rocket,
  Link2,
  Target,
  Star,
  Award,
  Users,
  Code,
  TrendingUp,
  Heart,
  Lightbulb,
  MousePointerClick,
} from 'lucide-react'

const curiosidades = [
  'Já fiquei até tarde da noite debugando um CSS que "deveria funcionar".',
  'Meu primeiro contato com código foi por curiosidade: "como esse site foi feito?".',
  'Café é combustível. Código também.',
  'Cursando Sistemas de Informação com foco em me tornar Full Stack.',
  'Acredito que um bom site deve gerar resultados, não só impressão.',
  'Sempre que aprendo algo novo, penso em como aplicar no seu projeto.',
]

const stats = [
  { label: 'Projetos Entregues', value: '5+', icon: Rocket },
  { label: 'Clientes Satisfeitos', value: '5+', icon: Users },
  { label: 'Anos de Experiência', value: '1+', icon: Award },
  { label: 'Tecnologias Dominadas', value: '10+', icon: Code },
]

const values = [
  {
    title: 'Qualidade',
    description: 'Cada projeto é desenvolvido com atenção aos mínimos detalhes, garantindo excelência em cada linha de código.',
    icon: Sparkles,
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Inovação',
    description: 'Acordo todos os dias buscando me atualizar e trazer as melhores práticas do mundo moderno para seus projetos.',
    icon: Zap,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Resultados',
    description: 'Sites, landing pages e e-commerce funcionais que geram lucro, visibilidade e movimento para sua empresa.',
    icon: Rocket,
    color: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Compromisso',
    description: 'Entregar no prazo, dentro do orçamento e com total transparência. Seu sucesso é meu objetivo.',
    icon: Link2,
    color: 'from-emerald-400 to-green-500',
  },
]

const journey = [
  {
    year: 'Infância',
    title: 'Era do celular de botão',
    description: 'Cresci junto com a inovação: computadores lentos, 1MB que eram dias de download. A curiosidade nasceu aí.',
    icon: Rocket,
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    year: 'Curiosidade',
    title: 'Como é feito?',
    description: 'Sempre me perguntei: como funciona um download? Como é feito esse site de música? O interesse pela área de desenvolvimento despertou.',
    icon: Star,
    gradient: 'from-primary to-primary-700',
  },
  {
    year: 'Hoje',
    title: 'Inovação no dia a dia',
    description: 'Todos os dias busco inovação e me manter atualizado. Cursando Sistemas de Informação, com objetivo em Full Stack.',
    icon: Code,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    year: 'Objetivo',
    title: 'O melhor para sua empresa',
    description: 'Fazer do meu desenvolvimento web — sites, landing pages, e-commerce — algo funcional e importante para você: lucros, visibilidade e resultados.',
    icon: Target,
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function AboutContent() {
  const [curiosidadeIndex, setCuriosidadeIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextCuriosidade = useCallback(() => {
    setCuriosidadeIndex((i) => (i + 1) % curiosidades.length)
  }, [])

  const randomCuriosidade = useCallback(() => {
    setCuriosidadeIndex((i) => (i + Math.floor(Math.random() * (curiosidades.length - 1)) + 1) % curiosidades.length)
  }, [])

  return (
    <>
      <section className="relative min-h-[70vh] pt-32 pb-24 bg-gradient-to-br from-background via-primary-50/30 dark:via-primary-950/20 to-primary-100/20 dark:to-primary-900/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(109,40,217,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px]"
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.05, 1.15, 1.05] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              Sobre Mim
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 blur-lg opacity-60 animate-pulse" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl ring-4 ring-background">
                  <Image
                    src="/foto perfil.png"
                    alt="Henrique Buzeto Vieira - Perfil"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            >
              Henrique Buzeto Vieira
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-6"
            >
              Apaixonado por tecnologia. Desenvolvedor em evolução, focado em trazer o melhor para sua empresa.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base text-muted-foreground/90 max-w-xl mx-auto"
            >
              Sites, Landing Pages e E-commerce que geram lucro, visibilidade e resultados reais.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(109,40,217,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              {/* Texto da história */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                  <Star className="h-4 w-4" />
                  Minha História
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Da curiosidade ao código
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sou apaixonado por tecnologia desde pequeno. Cresci com a inovação: era do celular de botão, 
                  computadores lentos, quando 1MB era dias de download. Sempre fui curioso — <span className="text-foreground font-medium">como é feito o download? 
                  Como é feito esse site de música?</span> — e foi aí que despertou meu interesse na área de desenvolvimento.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Hoje acordo todos os dias buscando inovação e me atualizar nesse mundo moderno. 
                  Atualmente curso <span className="text-primary font-semibold">Sistemas de Informação</span>, com objetivo em 
                  <span className="text-primary font-semibold"> Full Stack</span> e em trazer o melhor de mim.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Meu foco é fazer do desenvolvimento web — <strong>Sites, Landing Pages, E-commerce</strong> — algo 
                  <strong> funcional e importante para sua empresa</strong>: gerar lucros, movimentação, visibilidade e resultados reais. 
                  Essa é uma breve história resumida de quem sou e onde quero chegar.
                </p>
              </div>

              <motion.div
                className="flex-1 min-h-[140px] flex items-stretch"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <button
                  type="button"
                  onClick={nextCuriosidade}
                  onMouseEnter={() => { setIsHovered(true); randomCuriosidade() }}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative w-full rounded-2xl overflow-hidden bg-card/50 border-2 border-border/60 hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 text-left flex flex-col"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col flex-1 p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 group-hover:bg-primary/25 group-hover:scale-110 transition-all duration-300">
                        <Lightbulb className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold">Uma curiosidade</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={curiosidadeIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1"
                      >
                        &ldquo;{curiosidades[curiosidadeIndex]}&rdquo;
                      </motion.p>
                    </AnimatePresence>
                    <p className="mt-3 text-xs text-muted-foreground/80 flex items-center gap-1.5">
                      <MousePointerClick className="h-3.5 w-3.5" />
                      {isHovered ? 'Passe o mouse de novo ou clique para outra' : 'Passe o mouse ou clique para outra'}
                    </p>
                  </div>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-xl mx-auto"
            >
              <motion.div
                className="absolute -inset-[1px] rounded-2xl pointer-events-none"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  boxShadow: '0 0 18px 1px hsl(262 83% 58% / 0.15), inset 0 0 0 1px hsl(262 83% 58% / 0.1)',
                }}
              />
              <div className="relative rounded-2xl overflow-hidden bg-card/50 border border-border/60 shadow-lg">
                <div className="relative w-full aspect-[3/4] min-h-0">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    className="about-photos-swiper !h-full w-full"
                  >
                    <SwiperSlide>
                      <div className="relative w-full h-full">
                        <Image
                          src="/Foto fogo.png"
                          alt="Henrique Buzeto - Foto com efeito de fogo"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 90vw, 520px"
                          priority
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="relative w-full h-full">
                        <Image
                          src="/foto perfil.png"
                          alt="Henrique Buzeto - Perfil com fundo de código"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 90vw, 520px"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="p-6 sm:p-7 border-t border-border/60 bg-card/80 backdrop-blur-sm">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center sm:text-left">
                    &ldquo;Fazer do meu trabalho algo que realmente faça diferença para o seu negócio.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Estatísticas — Cards alinhados */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon ?? Star
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative"
                >
                  <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 border-border bg-card/80 dark:bg-card/90 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 text-center sm:text-left">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                        {IconComponent ? <IconComponent className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                <Award className="h-4 w-4" />
                Minha Jornada
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Da infância à missão
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journey.map((step, index) => {
                const IconComponent = step.icon ?? Star
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 border-border bg-card/80 dark:bg-card/90 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
                      <div className="relative z-10 flex gap-4 items-start">
                        <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} text-white shadow-lg group-hover:scale-105 transition-transform`}>
                          {IconComponent ? <IconComponent className="h-6 w-6" /> : <Star className="h-6 w-6" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">{step.year}</span>
                          <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                <Heart className="h-4 w-4" />
                O Que Me Move
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Valores que guiam meu trabalho
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon ?? Star
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative"
                  >
                    <div className="relative h-full p-6 rounded-2xl border-2 border-border bg-card/80 dark:bg-card/90 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                      <div className={`absolute -inset-px bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-4 group-hover:scale-105 group-hover:rotate-3 transition-all shadow-lg`}>
                          {IconComponent ? <IconComponent className="h-7 w-7" /> : <Star className="h-7 w-7" />}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-b from-background via-primary/5 dark:via-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative"
            >
              <div className="relative h-full p-8 sm:p-10 rounded-3xl border-2 border-border bg-card/90 dark:bg-card/95 backdrop-blur-sm hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-orange-500/20 to-amber-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white mb-6 shadow-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Minha Missão</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Entregar desenvolvimento web de alta qualidade — sites, landing pages e e-commerce — que sejam 
                    <strong> funcionais e importantes para sua empresa</strong>: gerando lucros, movimentação, visibilidade e resultados reais. 
                    Trazer o melhor de mim em cada projeto.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative"
            >
              <div className="relative h-full p-8 sm:p-10 rounded-3xl border-2 border-border bg-card/90 dark:bg-card/95 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white mb-6 shadow-lg">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Minha Visão</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Ser referência em desenvolvimento web, evoluindo como <strong>Full Stack</strong> e mantendo-me sempre 
                    atualizado com as melhores técnicas. Ser a escolha de quem busca um site que realmente 
                    <strong> traz resultados</strong> para o negócio.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(109,40,217,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              <TrendingUp className="h-4 w-4" />
              Por Que Me Escolher?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Diferenciais que fazem a diferença
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Foco em resultados',
                description: 'Cada projeto é pensado para gerar lucro, visibilidade e movimento para sua empresa — não apenas um site bonito.',
                icon: Target,
                gradient: 'from-blue-400 to-cyan-500',
              },
              {
                title: 'Suporte e transparência',
                description: 'Não sumo após a entrega. Ofereço suporte e comunicação clara, com orçamentos transparentes e sem surpresas.',
                icon: Link2,
                gradient: 'from-emerald-400 to-green-500',
              },
              {
                title: 'Sempre atualizado',
                description: 'Busco inovação todo dia. Uso as melhores práticas e tecnologias para seu projeto estar à frente.',
                icon: Zap,
                gradient: 'from-violet-400 to-purple-500',
              },
            ].map((item, index) => {
              const IconComponent = item.icon ?? Star
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl border-2 border-border bg-card/80 dark:bg-card/90 backdrop-blur-sm hover:border-primary/40 hover:shadow-2xl transition-all text-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg`}>
                        {IconComponent ? <IconComponent className="h-8 w-8" /> : <Star className="h-8 w-8" />}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Pronto para trabalhar juntos?"
        description="Vamos criar algo funcional e importante para sua empresa."
      />
    </>
  )
}
