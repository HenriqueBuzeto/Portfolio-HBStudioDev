import Link from 'next/link'
import { getClients } from '@/services/clientService'
import { Button } from '@/components/ui/Button'
import ClientForm from './ClientForm'
import { Users, UserPlus } from 'lucide-react'

export default async function AdminClientsPage() {
  const clients = await getClients()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Clientes</h1>
          <p className="mt-1 text-muted-foreground">
            Cadastre e gerencie os clientes para usar nos contratos.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <ClientForm />
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 overflow-hidden shadow-sm backdrop-blur-sm">
        <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Users className="h-4 w-4 text-primary" />
            Lista de clientes
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border/50 bg-muted/20">
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nome
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  E-mail
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Telefone
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Empresa
                </th>
                <th className="w-28 px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <UserPlus className="h-12 w-12 opacity-50" />
                      <p className="font-medium">Nenhum cliente cadastrado</p>
                      <p className="text-sm">Use o botão &quot;Novo cliente&quot; para começar.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                clients.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-border/30 transition-colors hover:bg-muted/20"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{c.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{c.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {c.phone ?? '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {c.company ?? '—'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/admin/contracts?clientId=${c.id}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary/15 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/25"
                      >
                        Usar
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
