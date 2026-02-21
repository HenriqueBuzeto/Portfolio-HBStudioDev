import type { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Henrique Buzeto Vieira — Desenvolvedor apaixonado por tecnologia. Minha história, valores e missão em desenvolvimento web (sites, landing pages, e-commerce).',
}

export default function About() {
  return <AboutContent />
}
