'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ThemeToggle'
import OptimizedParticles from '@/components/OptimizedParticles'
import { useTheme } from '@/components/ThemeProvider'

const logoVariations = [
  { id: 1, effect: 'flame-blue' },
  { id: 2, effect: 'glow-purple' },
  { id: 3, effect: 'neon-cyan' },
  { id: 4, effect: 'electric-pink' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % logoVariations.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const currentLogo = logoVariations[currentLogoIndex]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <OptimizedParticles intensity="low" />
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLogo.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex items-center justify-center"
                  style={{ width: '180px', height: '180px' }}
                >
                  <Image
                    src="/logo.png"
                    alt="Henrique Buzeto Logo"
                    width={180}
                    height={180}
                    className={`object-contain drop-shadow-2xl transition-all duration-300 ${
                      resolvedTheme === 'light' ? 'brightness-0' : ''
                    }`}
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {currentLogo.effect === 'flame-blue' && (
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-t from-blue-400/20 via-cyan-500/15 to-transparent blur-2xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {currentLogo.effect === 'glow-purple' && (
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-t from-purple-400/20 via-primary/15 to-transparent blur-2xl"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {currentLogo.effect === 'neon-cyan' && (
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-t from-cyan-400/20 via-blue-500/15 to-transparent blur-2xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {currentLogo.effect === 'electric-pink' && (
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-t from-pink-400/20 via-rose-500/15 to-transparent blur-2xl"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 group px-3 py-2"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-600 transition-all duration-300 group-hover:w-full rounded-full" />
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-foreground hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border relative z-10"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <OptimizedParticles intensity="low" />
            </div>
            
            <div className="container mx-auto px-4 py-6 space-y-3 relative z-10">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-border">
                <span className="text-sm text-muted-foreground font-medium">Tema:</span>
                <ThemeToggle />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
              >
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Solicitar Orçamento
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
