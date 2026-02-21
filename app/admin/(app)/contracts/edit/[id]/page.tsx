import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getClients } from '@/services/clientService'
import { getContractById } from '@/services/contractService'
import ContractForm from '../../ContractForm'
import { FileText, ArrowLeft } from 'lucide-react'

export default async function AdminContractEditPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const [contract, clients] = await Promise.all([
    getContractById(id),
    getClients(),
  ])
  if (!contract) notFound()

  const initialContract = {
    clientId: contract.client_id,
    projectTitle: contract.project_title,
    projectDescription: contract.project_description,
    value: Number(contract.value),
    paymentMethod: contract.payment_method,
    installments: contract.installments,
    startDate: contract.start_date.slice(0, 10),
    deliveryDate: contract.delivery_date.slice(0, 10),
    status: contract.status,
    clauses: '',
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <Link
          href="/admin/contracts/saved"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar à lista de contratos
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Alterar contrato</h1>
        <p className="text-muted-foreground">
          Nº {contract.contract_number}
        </p>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
          <FileText className="h-5 w-5 text-primary" />
          Dados do contrato
        </h2>
        <ContractForm
          clients={clients}
          contractId={id}
          initialContract={initialContract}
        />
      </div>
    </div>
  )
}
