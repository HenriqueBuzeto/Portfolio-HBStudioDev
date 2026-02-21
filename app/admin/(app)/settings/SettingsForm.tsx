'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import type { AdminSettingsRow } from '@/types/database'

export default function SettingsForm({ initial }: { initial: AdminSettingsRow | null }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const [full_name, setFullName] = useState(initial?.full_name ?? '')
  const [cpf, setCpf] = useState(initial?.cpf ?? '')
  const [cnpj, setCnpj] = useState(initial?.cnpj ?? '')
  const [phone, setPhone] = useState(initial?.phone ?? '')
  const [email, setEmail] = useState(initial?.email ?? '')
  const [address, setAddress] = useState(initial?.address ?? '')
  const [signature_image_url, setSignatureImageUrl] = useState(initial?.signature_image_url ?? '')
  const [logo_url, setLogoUrl] = useState(initial?.logo_url ?? '')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const res = await fetch('/admin/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name,
          cpf: cpf || null,
          cnpj: cnpj || null,
          phone: phone || null,
          email: email || null,
          address: address || null,
          signature_image_url: signature_image_url || null,
          logo_url: logo_url || null,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Erro ao salvar')
        return
      }
      setSuccess('Configurações salvas.')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Nome completo *</label>
        <input
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          required
          className={inputClass}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">CPF</label>
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Para pessoa física"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">CNPJ</label>
          <input
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="Para pessoa jurídica"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Telefone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Endereço</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          URL da imagem de assinatura
        </label>
        <input
          value={signature_image_url}
          onChange={(e) => setSignatureImageUrl(e.target.value)}
          type="url"
          placeholder="https://..."
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">URL do logo</label>
        <input
          value={logo_url}
          onChange={(e) => setLogoUrl(e.target.value)}
          type="url"
          placeholder="https://..."
          className={inputClass}
        />
      </div>
      {error && (
        <p className="rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">{error}</p>
      )}
      {success && (
        <p className="rounded-lg bg-green-500/10 px-4 py-2 text-sm text-green-700 dark:text-green-400">
          {success}
        </p>
      )}
      <div className="border-t border-border/50 pt-6">
        <Button type="submit" disabled={loading} className="rounded-xl px-5 py-2.5">
          {loading ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </form>
  )
}
