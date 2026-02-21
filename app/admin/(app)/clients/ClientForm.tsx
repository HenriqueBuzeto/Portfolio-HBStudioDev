'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { UserPlus } from 'lucide-react'

export default function ClientForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const form = e.currentTarget
    const fd = new FormData(form)
    const res = await fetch('/admin/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        phone: fd.get('phone') || null,
        company: fd.get('company') || null,
        document: fd.get('document') || null,
        address: fd.get('address') || null,
      }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) {
      setError(data.error ?? 'Erro ao criar cliente')
      return
    }
    setOpen(false)
    form.reset()
    router.refresh()
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5"
      >
        <UserPlus className="h-4 w-4" />
        Novo cliente
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-border/50 bg-card/95 p-6 shadow-xl backdrop-blur-md">
            <h2 className="mb-6 text-xl font-semibold text-foreground">Novo cliente</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Nome *</label>
                <input name="name" required className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">E-mail *</label>
                <input name="email" type="email" required className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Telefone</label>
                <input name="phone" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Empresa</label>
                <input name="company" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">CPF/CNPJ</label>
                <input name="document" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Endereço</label>
                <input name="address" className={inputClass} />
              </div>
              {error && (
                <p className="rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">
                  {error}
                </p>
              )}
              <div className="flex justify-end gap-3 border-t border-border/50 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-5 py-2.5"
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={loading} className="rounded-xl px-5 py-2.5">
                  {loading ? 'Salvando...' : 'Salvar'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
