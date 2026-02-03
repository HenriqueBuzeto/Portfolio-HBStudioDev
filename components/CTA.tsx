'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTA({
  title = 'Pronto para Transformar Seu Negócio?',
  description = 'Entre em contato e vamos criar algo incrível juntos.',
  buttonText = 'Solicitar Orçamento',
  buttonHref = '/contact',
}: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-600 to-primary-700 dark:from-primary-800 dark:via-primary-700 dark:to-primary-600 text-white relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 group"
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
