'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Download, Pencil, Trash2 } from 'lucide-react'

export default function ContractRowActions({
  contractId,
  pdfUrl,
}: {
  contractId: string
  pdfUrl: string | null
}) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

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
