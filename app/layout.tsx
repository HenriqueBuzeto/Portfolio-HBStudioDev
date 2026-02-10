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
    default: 'HB Studio Dev',
    template: '%s | HB Studio Dev',
  },
  description: 'Criação de sites e landing pages profissionais com foco em performance e conversão. Planejamento SEO para melhor posicionamento do seu site.',
  keywords: ['desenvolvimento web', 'landing page', 'site institucional', 'freelancer', 'Next.js'],
  authors: [{ name: 'Henrique Buzeto' }],
  icons: {
    icon: [
      { url: '/LOGO%20HB.png?v=2', sizes: '128x128', type: 'image/png' },
      { url: '/LOGO%20HB.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/LOGO%20HB.png?v=2', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/LOGO%20HB.png?v=2', sizes: '128x128', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seusite.com',
    title: 'HB Studio Dev',
    description: 'Criação de sites e landing pages profissionais',
    siteName: 'HB Studio Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HB Studio Dev',
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
