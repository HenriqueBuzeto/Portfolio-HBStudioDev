'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderOpen,
  Settings,
  LogOut,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const ParticlesBgLazy = dynamic(() => import('@/components/ParticlesBgLazy'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" aria-hidden />,
})

const nav = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/clients', label: 'Clientes', icon: Users },
  { href: '/admin/contracts', label: 'Contratos', icon: FileText },
  { href: '/admin/contracts/saved', label: 'Contratos salvos', icon: FolderOpen },
  { href: '/admin/settings', label: 'Configurações', icon: Settings },
]

interface AdminShellProps {
  children: React.ReactNode
  userEmail: string
}

export default function AdminShell({ children, userEmail }: AdminShellProps) {
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-background via-primary-950/20 dark:via-primary-950/30 to-background">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 z-0 h-full w-full">
        <ParticlesBgLazy className="h-full w-full" />
      </div>

      <aside className="relative z-20 flex w-64 flex-shrink-0 flex-col border-r border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="border-b border-border/50 p-6">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 text-lg font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Sparkles className="h-5 w-5" />
            </span>
            HB Admin
          </Link>
        </div>
        <nav className="flex-1 space-y-0.5 p-4">
          {nav.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-border/50 p-4">
          <p className="truncate text-xs text-muted-foreground" title={userEmail}>
            {userEmail}
          </p>
          <form action="/admin/logout" method="post">
            <button
              type="submit"
              className="mt-2 flex items-center gap-2 text-xs text-primary transition-colors hover:text-primary/80"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sair
            </button>
          </form>
        </div>
      </aside>

      <main className="relative z-10 flex-1 overflow-auto pl-64">
        <div className="min-h-screen p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  )
}
