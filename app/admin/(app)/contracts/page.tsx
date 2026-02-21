import { getClients } from '@/services/clientService'
import ContractForm from './ContractForm'
import { FileText } from 'lucide-react'

export default async function AdminContractsPage({
  searchParams,
}: {
  searchParams: Promise<{ clientId?: string }>
}) {
  const params = await searchParams
  const clients = await getClients()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Novo contrato</h1>
        <p className="text-muted-foreground">
          Preencha os dados e gere o PDF ou salve como rascunho.
        </p>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
          <FileText className="h-5 w-5 text-primary" />
          Dados do contrato
        </h2>
        <ContractForm clients={clients} preselectedClientId={params.clientId ?? undefined} />
      </div>
    </div>
  )
}
