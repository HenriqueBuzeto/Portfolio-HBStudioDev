'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import type { ClientRow } from '@/types/database'

type InitialContract = {
  clientId: string
  projectTitle: string
  projectDescription: string
  value: number
  paymentMethod: string
  installments: number
  startDate: string
  deliveryDate: string
  status?: string
  clauses?: string
}

export default function ContractForm({
  clients,
  preselectedClientId,
  contractId,
  initialContract,
}: {
  clients: ClientRow[]
  preselectedClientId?: string
  contractId?: string
  initialContract?: InitialContract
}) {
  const isEdit = Boolean(contractId)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const [clientId, setClientId] = useState(
    initialContract?.clientId ?? preselectedClientId ?? ''
  )
  const [projectTitle, setProjectTitle] = useState(initialContract?.projectTitle ?? '')
  const [projectDescription, setProjectDescription] = useState(
    initialContract?.projectDescription ?? ''
  )
  const [value, setValue] = useState(
    initialContract != null ? String(initialContract.value) : ''
  )
  const [paymentMethod, setPaymentMethod] = useState(initialContract?.paymentMethod ?? '')
  const [installments, setInstallments] = useState(
    initialContract != null ? String(initialContract.installments) : '1'
  )
  const [startDate, setStartDate] = useState(initialContract?.startDate ?? '')
  const [deliveryDate, setDeliveryDate] = useState(initialContract?.deliveryDate ?? '')
  const [clauses, setClauses] = useState(initialContract?.clauses ?? '')

  useEffect(() => {
    if (preselectedClientId && !initialContract) setClientId(preselectedClientId)
  }, [preselectedClientId, initialContract])

  async function handleSaveDraft(e: React.FormEvent) {
    e.preventDefault()
    await submit('draft')
  }

  async function handleMarkSent(e: React.FormEvent) {
    e.preventDefault()
    await submit('sent')
  }

  async function handleGeneratePdf(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      if (isEdit && contractId) {
        const res = await fetch(`/admin/api/contracts/${contractId}/regenerate-pdf`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ clauses: clauses || undefined }),
        })
        const data = await res.json()
        if (!res.ok) {
          setError(data.error ?? 'Erro ao regenerar PDF')
          return
        }
        if (data.url) {
          window.open(data.url, '_blank')
          setSuccess('PDF regenerado.')
        }
      } else {
        const res = await fetch('/admin/api/contracts/generate-pdf', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId,
            projectTitle,
            projectDescription,
            value: Number(value),
            paymentMethod,
            installments: Number(installments),
            startDate,
            deliveryDate,
            clauses: clauses || undefined,
          }),
        })
        const data = await res.json()
        if (!res.ok) {
          setError(data.error ?? 'Erro ao gerar PDF')
          return
        }
        if (data.url) {
          window.open(data.url, '_blank')
          setSuccess('PDF gerado e contrato salvo.')
        }
      }
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  async function submit(status: 'draft' | 'sent') {
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const payload = {
        clientId,
        projectTitle,
        projectDescription,
        value: Number(value),
        paymentMethod,
        installments: Number(installments),
        startDate,
        deliveryDate,
        status,
        clauses: clauses || undefined,
      }
      const url = isEdit && contractId
        ? `/admin/api/contracts/${contractId}`
        : '/admin/api/contracts'
      const res = await fetch(url, {
        method: isEdit ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Erro ao salvar')
        return
      }
      setSuccess(status === 'draft' ? 'Rascunho salvo.' : 'Marcado como enviado.')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Cliente *</label>
        <select
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          required
          className={inputClass}
        >
          <option value="">Selecione um cliente</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} — {c.email}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Título do projeto *</label>
        <input
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Descrição do projeto *</label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
          rows={4}
          className={inputClass}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Valor (R$) *</label>
          <input
            type="number"
            step="0.01"
            min="0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Forma de pagamento *</label>
          <input
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            placeholder="Ex: PIX, parcelado"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Parcelas *</label>
          <input
            type="number"
            min="1"
            max="24"
            value={installments}
            onChange={(e) => setInstallments(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Data início *</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Data entrega *</label>
          <input
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Cláusulas (opcional)</label>
        <textarea
          value={clauses}
          onChange={(e) => setClauses(e.target.value)}
          rows={6}
          placeholder="Uma cláusula por linha. Deixe em branco para usar o texto padrão."
          className={inputClass}
        />
      </div>
      {error && <p className="rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p>}
      {success && (
        <p className="rounded-lg bg-green-500/10 px-4 py-2 text-sm text-green-700 dark:text-green-400">
          {success}
        </p>
      )}
      <div className="flex flex-wrap gap-3 border-t border-border/50 pt-6">
        <Button
          type="button"
          onClick={handleGeneratePdf}
          disabled={loading}
          className="rounded-xl px-5 py-2.5"
        >
          {loading ? 'Gerando...' : isEdit ? 'Regenerar PDF' : 'Gerar PDF e salvar'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleSaveDraft}
          disabled={loading}
          className="rounded-xl px-5 py-2.5"
        >
          Salvar como rascunho
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={handleMarkSent}
          disabled={loading}
          className="rounded-xl px-5 py-2.5"
        >
          Marcar como enviado
        </Button>
      </div>
    </form>
  )
}
