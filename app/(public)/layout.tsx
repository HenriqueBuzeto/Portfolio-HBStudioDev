import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </>
  )
}
