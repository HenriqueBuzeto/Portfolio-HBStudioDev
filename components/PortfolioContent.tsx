'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Globe, Sparkles, ChevronDown, ArrowRight } from 'lucide-react'
import ParticlesBgLazy from '@/components/ParticlesBgLazy'
import PageTitle from '@/components/PageTitle'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { portfolioItems, categories, type PortfolioItem } from '@/data/portfolio'

export default function PortfolioContent() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const scrollToDestaques = useCallback(() => {
    document.getElementById('destaques')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const filteredItems = selectedCategory === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const featuredItems = portfolioItems.filter(item => item.featured)

  return (
    <>
      <section className="relative pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-primary-50/50 dark:from-primary-950/30 via-background to-primary-100/20 dark:to-primary-900/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticlesBgLazy />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <PageTitle
              title="Portfólio"
              subtitle="Projetos que transformam ideias em realidade digital"
            />

            {featuredItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full max-w-4xl mx-auto mt-4 sm:mt-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {featuredItems.slice(0, 3).map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative block rounded-2xl overflow-hidden border-2 border-border/60 bg-card/80 dark:bg-card/90 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <span className="text-xs font-semibold text-primary/90 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md line-clamp-1">
                            {item.title}
                          </h3>
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.button
                  type="button"
                  onClick={scrollToDestaques}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 sm:mt-8 mx-auto flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary/15 dark:bg-primary/20 text-primary font-semibold border-2 border-primary/40 hover:border-primary hover:bg-primary/25 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <Sparkles className="h-4 w-4" />
                  Ver todos os destaques
                  <ChevronDown className="h-4 w-4 mt-0.5" />
                </motion.button>
              </motion.div>
            )}

            {featuredItems.length === 0 && (
              <motion.button
                type="button"
                onClick={scrollToDestaques}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary/15 text-primary font-semibold border-2 border-primary/40 hover:border-primary hover:bg-primary/25 transition-all"
              >
                <ArrowRight className="h-4 w-4" />
                Ver projetos
                <ChevronDown className="h-4 w-4" />
              </motion.button>
            )}
          </motion.div>
        </div>
      </section>

      {featuredItems.length > 0 && (
        <section id="destaques" className="relative py-20 bg-background overflow-hidden scroll-mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="h-4 w-4" />
                Destaques
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Projetos em Destaque
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtros e Grid de Projetos - sem partículas para melhor performance */}
      <section className="relative py-20 bg-gradient-to-b from-background via-primary/5 dark:via-primary/10 to-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Filtros Futuristas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all relative overflow-hidden ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/50'
                    : 'bg-card text-foreground hover:bg-primary/10 border-2 border-border hover:border-primary/50'
                }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
  featured?: boolean
}

function PortfolioCard({ item, index, featured = false }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative"
    >
      <Card className="relative h-full bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
        
        {/* Badge de Destaque */}
        {featured && (
          <div className="absolute top-4 right-4 z-20">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold shadow-lg">
              <Sparkles className="h-3 w-3" />
              Destaque
            </div>
          </div>
        )}

        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
            <motion.a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-600 text-white shadow-2xl hover:shadow-primary/50 transition-all group/btn"
              aria-label={`Ver ${item.title} ao vivo`}
            >
              <ExternalLink className="h-6 w-6 group-hover/btn:rotate-12 transition-transform" />
            </motion.a>
            {item.githubUrl && (
              <motion.a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-foreground to-secondary text-white shadow-2xl hover:shadow-lg transition-all group/btn"
                aria-label={`Ver código do ${item.title}`}
              >
                <Github className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
              </motion.a>
            )}
          </div>
          
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
              <Globe className="h-3 w-3" />
              Preview
            </div>
          </div>
        </div>

        <CardContent className="p-6 relative z-10">
          {/* Categoria */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            {item.category}
          </div>

          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 group/btn border-2 hover:border-primary hover:bg-primary/5"
              >
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-semibold"
                >
                  <Globe className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Ver Projeto
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </Button>
            </motion.div>
            {item.githubUrl && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="group/btn hover:bg-primary/10"
                >
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label="Ver código no GitHub"
                  >
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
