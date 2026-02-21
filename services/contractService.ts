import { createClient as createSupabase } from '@/lib/supabase/server'
import type { ContractRow, ContractStatus } from '@/types/database'
import type { ContractWithClient } from '@/types/contract'
import { contractSchema, type ContractInput } from '@/lib/validations/contract'

function generateContractNumber(): string {
  const date = new Date()
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const r = Math.random().toString(36).slice(2, 8).toUpperCase()
  return `HB-${y}${m}${d}-${r}`
}

export async function getContracts(): Promise<ContractWithClient[]> {
  const supabase = await createSupabase()
  const { data, error } = await supabase
    .from('contracts')
    .select(`
      *,
      clients (
        name,
        email,
        phone,
        company,
        document,
        address
      )
    `)
    .order('created_at', { ascending: false })
  if (error) throw new Error(error.message)
  return (data ?? []) as ContractWithClient[]
}

export async function getContractById(id: string): Promise<ContractWithClient | null> {
  const supabase = await createSupabase()
  const { data, error } = await supabase
    .from('contracts')
    .select(`
      *,
      clients (
        name,
        email,
        phone,
        company,
        document,
        address
      )
    `)
    .eq('id', id)
    .single()
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  return data as ContractWithClient
}

export async function createContract(input: ContractInput): Promise<ContractRow> {
  const parsed = contractSchema.safeParse(input)
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((e) => e.message).join(', '))
  }
  const supabase = await createSupabase()
  const contractNumber = generateContractNumber()
  const { data, error } = await supabase
    .from('contracts')
    .insert({
      client_id: parsed.data.clientId,
      project_title: parsed.data.projectTitle,
      project_description: parsed.data.projectDescription,
      value: parsed.data.value,
      payment_method: parsed.data.paymentMethod,
      installments: parsed.data.installments,
      start_date: parsed.data.startDate,
      delivery_date: parsed.data.deliveryDate,
      status: (parsed.data.status as ContractStatus) ?? 'draft',
      contract_number: contractNumber,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deleteContract(id: string): Promise<void> {
  const supabase = await createSupabase()
  const { error } = await supabase.from('contracts').delete().eq('id', id)
  if (error) throw new Error(error.message)
}

export async function updateContract(
  id: string,
  input: Partial<ContractInput> & { status?: ContractStatus; pdf_url?: string | null }
): Promise<ContractRow> {
  const supabase = await createSupabase()
  const updates: Record<string, unknown> = {}
  if (input.clientId !== undefined) updates.client_id = input.clientId
  if (input.projectTitle !== undefined) updates.project_title = input.projectTitle
  if (input.projectDescription !== undefined) updates.project_description = input.projectDescription
  if (input.value !== undefined) updates.value = input.value
  if (input.paymentMethod !== undefined) updates.payment_method = input.paymentMethod
  if (input.installments !== undefined) updates.installments = input.installments
  if (input.startDate !== undefined) updates.start_date = input.startDate
  if (input.deliveryDate !== undefined) updates.delivery_date = input.deliveryDate
  if (input.status !== undefined) updates.status = input.status
  if (input.pdf_url !== undefined) updates.pdf_url = input.pdf_url
  const { data, error } = await supabase
    .from('contracts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function getContractsStats(): Promise<{
  total: number
  signed: number
  totalValue: number
  pending: number
  byMonth: { month: string; value: number }[]
}> {
  const contracts = await getContracts()
  const signed = contracts.filter((c) => c.status === 'signed')
  const pending = contracts.filter((c) => c.status === 'draft' || c.status === 'sent')
  const totalValue = signed.reduce((acc, c) => acc + Number(c.value), 0)
  const byMonth: Record<string, number> = {}
  signed.forEach((c) => {
    const d = new Date(c.created_at)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    byMonth[key] = (byMonth[key] ?? 0) + Number(c.value)
  })
  const byMonthArr = Object.entries(byMonth)
    .map(([month, value]) => ({ month, value }))
    .sort((a, b) => a.month.localeCompare(b.month))
    .slice(-12)
  return {
    total: contracts.length,
    signed: signed.length,
    totalValue,
    pending: pending.length,
    byMonth: byMonthArr,
  }
}
