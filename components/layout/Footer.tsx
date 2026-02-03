'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { navigation, socialLinks, contactInfo } from '@/data/navigation'
import { motion } from 'framer-motion'
import { useTheme } from '@/components/ThemeProvider'

const OptimizedParticles = dynamic(() => import('@/components/OptimizedParticles'), { ssr: false })

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { resolvedTheme } = useTheme()

  const socialIcons = [
    { name: 'Github', icon: Github, href: socialLinks.github, color: 'from-gray-400 to-gray-600' },
    { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin, color: 'from-blue-400 to-blue-600' },
    { name: 'Instagram', icon: Instagram, href: socialLinks.instagram, color: 'from-pink-400 via-purple-500 to-orange-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const isLight = resolvedTheme === 'light'

  return (
    <footer 
      className={`relative mt-20 overflow-hidden text-foreground ${
        isLight
          ? 'bg-background border-t border-border'
          : 'bg-gradient-to-b from-background via-secondary-900/50 to-secondary-900'
      }`}
      aria-label="Rodapé"
    >
      {!isLight && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <OptimizedParticles intensity="low" />
        </div>
      )}

      <div className={`absolute top-0 left-0 right-0 h-px ${
        isLight ? 'bg-border' : 'bg-gradient-to-r from-transparent via-primary/50 to-transparent'
      }`} />
      
      {!isLight && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className={`absolute inset-0 pointer-events-none ${
        isLight ? 'opacity-[0.03]' : 'opacity-5'
      }`}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(109, 40, 217, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(109, 40, 217, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-4 mb-6 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Henrique Buzeto Logo"
                    width={64}
                    height={64}
                    className={`object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300 ${
                      isLight ? 'brightness-0' : ''
                    }`}
                  />
                </div>
                {!isLight && (
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-t from-primary/30 via-primary/20 to-transparent blur-xl rounded-full"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}
              </motion.div>
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary-400 group-hover:to-primary transition-all duration-300"
                whileHover={{ x: 2 }}
              >
                Henrique Buzeto
              </motion.span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-6">
              Desenvolvimento de sites e landing pages profissionais com foco em performance e conversão. 
              Planejamento SEO para melhor posicionamento do seu site com as melhores técnicas.
            </p>
            
            <div className="space-y-3">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>{contactInfo.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${contactInfo.phoneFull}`}
                className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                whileHover={{ x: 4 }}
              >
                <Phone size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>(17) 99265-1033</span>
              </motion.a>
              <motion.div
                className="flex items-center space-x-3 text-sm text-muted-foreground"
                whileHover={{ x: 4 }}
              >
                <MapPin size={16} className="text-primary" />
                <span>{contactInfo.location}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Links Rápidos
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-600"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="group relative text-muted-foreground hover:text-primary transition-all duration-300 text-sm flex items-center space-x-2"
                  >
                    <motion.span
                      className="absolute -left-4 opacity-0 group-hover:opacity-100 text-primary"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6 relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Redes Sociais
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-600"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                    aria-label={social.name}
                  >
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} p-[2px] overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className={`relative w-full h-full rounded-xl flex items-center justify-center backdrop-blur-sm ${
                        isLight ? 'bg-background/90' : 'bg-secondary-900/80'
                      }`}>
                        <Icon 
                          size={20} 
                          className="text-foreground group-hover:text-white transition-colors relative z-10"
                        />
                      </div>
                    </div>
                    
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-30 blur-md rounded-xl`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ${
                      isLight ? 'bg-foreground text-background' : 'bg-secondary-800 text-white'
                    }`}>
                      {social.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>
            
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Conecte-se comigo nas redes sociais para acompanhar projetos e novidades.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-border relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {!isLight && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          )}
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-sm text-muted-foreground text-center md:text-left"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              © {currentYear} <span className="text-primary font-semibold">Henrique Buzeto</span>. Todos os direitos reservados.
            </motion.p>

            <motion.div
              className="flex items-center space-x-6 text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacidade
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Termos
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">
                Desenvolvido com Next.js & React
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-px ${
        isLight ? 'bg-border' : 'bg-gradient-to-r from-transparent via-primary/30 to-transparent'
      }`} />
    </footer>
  )
}
