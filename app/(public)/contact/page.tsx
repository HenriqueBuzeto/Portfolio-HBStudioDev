import type { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas sobre nossos serviços.',
}

export default function Contact() {
  return <ContactContent />
}
