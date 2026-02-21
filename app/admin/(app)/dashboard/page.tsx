import Link from 'next/link'
import { getContractsStats } from '@/services/contractService'
import { LayoutDashboard, FileText, DollarSign, Clock, Plus, Users, TrendingUp } from 'lucide-react'

export default async function AdminDashboardPage() {
  const stats = await getContractsStats()
  const formatCurrency = (n: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral dos contratos e receita.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total de contratos</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">{stats.total}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <FileText className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Contratos assinados/pagos</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">{stats.signed}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 dark:text-green-400">
              <FileText className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Receita (assinados)</p>
              <p className="mt-2 text-2xl font-bold tabular-nums text-foreground sm:text-3xl">
                {formatCurrency(stats.totalValue)}
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-600 dark:text-green-400">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
              <p className="mt-2 text-3xl font-bold tabular-nums text-foreground">{stats.pending}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
          <LayoutDashboard className="h-5 w-5 text-primary" />
          Receita por mês
        </h2>
        {stats.byMonth.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border/50 py-12 text-center">
            <p className="text-muted-foreground">Nenhum contrato assinado ainda.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Em &quot;Contratos salvos&quot;, use o botão <strong>Assinado/Pago</strong> para
              contabilizar a receita por mês.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {stats.byMonth.map(({ month, value }) => (
              <div
                key={month}
                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border/30 bg-muted/20 px-4 py-3"
              >
                <span className="text-sm font-medium text-muted-foreground capitalize">
                  {new Date(month + '-01').toLocaleDateString('pt-BR', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-lg font-semibold tabular-nums text-foreground">
                  {formatCurrency(value)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-border/50 pt-8">
        <Link
          href="/admin/contracts"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Novo contrato
        </Link>
        <Link
          href="/admin/clients"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/80 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-muted/50"
        >
          <Users className="h-4 w-4" />
          Ver clientes
        </Link>
      </div>
    </div>
  )
}
