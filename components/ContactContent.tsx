'use client'

import PageTitle from '@/components/PageTitle'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Zap,
  Globe,
  CheckCircle2
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ParticlesBgLazy from '@/components/ParticlesBgLazy'
import { contactInfo } from '@/data/navigation'

export default function ContactContent() {
  const whatsappNumber = contactInfo.phoneFull

  return (
    <>
      <section className="relative min-h-[60vh] pt-32 pb-16 bg-gradient-to-br from-primary-50/50 dark:from-primary-950/30 via-background to-primary-100/20 dark:to-primary-900/10 overflow-hidden">
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
          >
            <PageTitle
              title="Entre em Contato"
              subtitle="Vamos conversar sobre seu projeto. Estou aqui para ajudar!"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParticlesBgLazy />
          </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      WhatsApp
                    </CardTitle>
                    <CardDescription>
                      Resposta rápida e direta
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
                    >
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm">
                  {/* Efeito de brilho */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-sky-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
                        <Mail className="h-5 w-5" />
                      </div>
                      Email
                    </CardTitle>
                    <CardDescription>
                      Envie uma mensagem detalhada
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group/link"
                    >
                      <Mail className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      {contactInfo.email}
                    </a>
                  </CardContent>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      Localização
                    </CardTitle>
                    <CardDescription>
                      Onde estamos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {contactInfo.location}
                    </p>
                  </CardContent>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <ContactForm />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative py-20 bg-gradient-to-b from-background via-primary/5 dark:via-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParticlesBgLazy />
          </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Informações Importantes
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Outras Formas de Contato
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Horário de Atendimento',
                content: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h',
                icon: Clock,
                gradient: 'from-blue-400 to-cyan-500',
              },
              {
                title: 'Tempo de Resposta',
                content: 'WhatsApp: Imediato\nEmail: Até 24 horas',
                icon: Zap,
                gradient: 'from-yellow-400 to-orange-500',
              },
              {
                title: 'Área de Atuação',
                content: 'Atendemos clientes de todo o Brasil de forma remota',
                icon: Globe,
                gradient: 'from-green-400 to-emerald-500',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all text-center overflow-hidden backdrop-blur-sm">
                    {/* Efeito de brilho */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="relative py-20 bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParticlesBgLazy />
          </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <CheckCircle2 className="h-4 w-4" />
              Dúvidas Frequentes
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Perguntas Frequentes sobre Contato
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Qual é a melhor forma de entrar em contato?',
                answer: 'O WhatsApp é a forma mais rápida e direta. Você receberá uma resposta quase imediata durante o horário comercial.',
                icon: MessageCircle,
              },
              {
                question: 'Vocês atendem clientes de outras cidades?',
                answer: 'Sim! Trabalhamos 100% remoto e atendemos clientes de todo o Brasil. Todas as reuniões são realizadas por videoconferência.',
                icon: Globe,
              },
              {
                question: 'Quanto tempo leva para receber uma resposta?',
                answer: 'Via WhatsApp: resposta imediata durante horário comercial. Via email: até 24 horas úteis.',
                icon: Clock,
              },
            ].map((faq, index) => {
              const Icon = faq.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-card via-card/80 to-card/50 dark:from-card dark:via-card/90 dark:to-card/70 p-6 rounded-2xl border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all overflow-hidden backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 text-lg text-foreground">{faq.question}</h4>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
