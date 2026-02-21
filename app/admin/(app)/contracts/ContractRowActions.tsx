'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Download, Pencil, Trash2, CheckCircle } from 'lucide-react'
import type { ContractStatus } from '@/types/database'

export default function ContractRowActions({
  contractId,
  pdfUrl,
  status,
}: {
  contractId: string
  pdfUrl: string | null
  status: ContractStatus
}) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)
  const [markingSigned, setMarkingSigned] = useState(false)
  const canMarkSigned = status === 'draft' || status === 'sent'

  async function handleMarkSigned() {
    if (
      !confirm(
        'Marcar este contrato como assinado/pago? O valor será contabilizado na receita do dashboard.'
      )
    )
      return
    setMarkingSigned(true)
    try {
      const res = await fetch(`/admin/api/contracts/${contractId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'signed' as ContractStatus }),
      })
      const data = await res.json()
      if (!res.ok) {
        alert(data.error ?? 'Erro ao atualizar')
        return
      }
      router.refresh()
    } finally {
      setMarkingSigned(false)
    }
  }

  async function handleDelete() {
    if (!confirm('Excluir este contrato? Esta ação não pode ser desfeita.')) return
    setDeleting(true)
    try {
      const res = await fetch(`/admin/api/contracts/${contractId}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok) {
        alert(data.error ?? 'Erro ao excluir')
        return
      }
      router.refresh()
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="flex items-center justify-end gap-1">
      {canMarkSigned && (
        <button
          type="button"
          onClick={handleMarkSigned}
          disabled={markingSigned}
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-500/15 dark:text-green-400 disabled:opacity-50"
          title="Marcar como assinado/pago (contabiliza na receita)"
        >
          <CheckCircle className="h-4 w-4" />
          <span className="hidden sm:inline">{markingSigned ? 'Salvando...' : 'Assinado/Pago'}</span>
        </button>
      )}
      {pdfUrl && (
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          title="Baixar PDF"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Baixar</span>
        </a>
      )}
      <Link
        href={`/admin/contracts/edit/${contractId}`}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        title="Alterar"
      >
        <Pencil className="h-4 w-4" />
        <span className="hidden sm:inline">Alterar</span>
      </Link>
      <button
        type="button"
        onClick={handleDelete}
        disabled={deleting}
        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
        title="Excluir"
      >
        <Trash2 className="h-4 w-4" />
        <span className="hidden sm:inline">{deleting ? 'Excluindo...' : 'Excluir'}</span>
      </button>
    </div>
  )
}
