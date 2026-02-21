import { createClient as createSupabase } from '@/lib/supabase/server'
import type { ClientRow } from '@/types/database'
import { clientSchema, type ClientInput } from '@/lib/validations/client'

export async function getClients(): Promise<ClientRow[]> {
  const supabase = await createSupabase()
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('name')
  if (error) throw new Error(error.message)
  return data ?? []
}

export async function getClientById(id: string): Promise<ClientRow | null> {
  const supabase = await createSupabase()
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('id', id)
    .single()
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  return data
}

export async function createClient(data: ClientInput): Promise<ClientRow> {
  const parsed = clientSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((e) => e.message).join(', '))
  }
  const supabase = await createSupabase()
  const { data: row, error } = await supabase
    .from('clients')
    .insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      company: parsed.data.company ?? null,
      document: parsed.data.document ?? null,
      address: parsed.data.address ?? null,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return row
}

export async function updateClient(id: string, data: Partial<ClientInput>): Promise<ClientRow> {
  const parsed = clientSchema.partial().safeParse(data)
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((e) => e.message).join(', '))
  }
  const supabase = await createSupabase()
  const { data: row, error } = await supabase
    .from('clients')
    .update({
      ...(parsed.data.name !== undefined && { name: parsed.data.name }),
      ...(parsed.data.email !== undefined && { email: parsed.data.email }),
      ...(parsed.data.phone !== undefined && { phone: parsed.data.phone }),
      ...(parsed.data.company !== undefined && { company: parsed.data.company }),
      ...(parsed.data.document !== undefined && { document: parsed.data.document }),
      ...(parsed.data.address !== undefined && { address: parsed.data.address }),
    })
    .eq('id', id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return row
}

export async function deleteClient(id: string): Promise<void> {
  const supabase = await createSupabase()
  const { error } = await supabase.from('clients').delete().eq('id', id)
  if (error) throw new Error(error.message)
}
