import Link from 'next/link'
import { getContracts } from '@/services/contractService'
import { FolderOpen, Plus, FileText } from 'lucide-react'
import ContractRowActions from '../ContractRowActions'

const statusLabel: Record<string, string> = {
  draft: 'Rascunho',
  sent: 'Enviado',
  signed: 'Assinado',
  canceled: 'Cancelado',
}

export default async function AdminContractsSavedPage() {
  const contracts = await getContracts()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Contratos salvos</h1>
          <p className="mt-1 text-muted-foreground">
            Histórico de todos os contratos criados.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            href="/admin/contracts"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            Novo contrato
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 overflow-hidden shadow-sm backdrop-blur-sm">
        <div className="border-b border-border/50 bg-muted/30 px-6 py-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <FolderOpen className="h-4 w-4 text-primary" />
            Lista de contratos
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border/50 bg-muted/20">
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Nº
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Cliente
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Projeto
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Valor
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Data
                </th>
                <th className="min-w-[180px] px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {contracts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <FileText className="h-12 w-12 opacity-50" />
                      <p className="font-medium">Nenhum contrato salvo</p>
                      <p className="text-sm">Crie um contrato na aba Contratos.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                contracts.map((c) => (
                  <tr
                    key={c.id}
                    className="border-b border-border/30 transition-colors hover:bg-muted/20"
                  >
                    <td className="px-6 py-4 font-mono text-sm font-medium text-foreground">
                      {c.contract_number}
                    </td>
                    <td className="px-6 py-4 font-medium text-foreground">
                      {c.clients?.name ?? '—'}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{c.project_title}</td>
                    <td className="px-6 py-4 text-sm font-medium tabular-nums text-foreground">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(Number(c.value))}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          c.status === 'signed'
                            ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                            : c.status === 'sent'
                              ? 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                              : c.status === 'canceled'
                                ? 'bg-red-500/20 text-red-700 dark:text-red-400'
                                : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {statusLabel[c.status] ?? c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(c.created_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <ContractRowActions contractId={c.id} pdfUrl={c.pdf_url} />
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
