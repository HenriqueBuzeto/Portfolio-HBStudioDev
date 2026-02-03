import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Desenvolvimento Web Premium | Landing Pages e Sites Institucionais',
    template: '%s | Henrique Buzeto'
  },
  description: 'Criação de sites e landing pages profissionais com foco em performance e conversão. Planejamento SEO para melhor posicionamento do seu site.',
  keywords: ['desenvolvimento web', 'landing page', 'site institucional', 'freelancer', 'Next.js'],
  authors: [{ name: 'Henrique Buzeto' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com',
    title: 'Desenvolvimento Web Premium',
    description: 'Criação de sites e landing pages profissionais',
    siteName: 'Henrique Buzeto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desenvolvimento Web Premium',
    description: 'Criação de sites e landing pages profissionais',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
          <Header />
          <main className="min-h-screen transition-colors duration-300">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
