import { createClient as createSupabase } from '@/lib/supabase/server'
import type { AdminSettingsRow } from '@/types/database'
import { adminSettingsSchema, type AdminSettingsInput } from '@/lib/validations/adminSettings'

export async function getAdminSettings(): Promise<AdminSettingsRow | null> {
  const supabase = await createSupabase()
  const { data, error } = await supabase
    .from('admin_settings')
    .select('*')
    .limit(1)
    .single()
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  return data
}

export async function upsertAdminSettings(input: AdminSettingsInput): Promise<AdminSettingsRow> {
  const parsed = adminSettingsSchema.safeParse(input)
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((e) => e.message).join(', '))
  }
  const supabase = await createSupabase()
  const existing = await getAdminSettings()
  const payload = {
    full_name: parsed.data.full_name,
    cpf: parsed.data.cpf ?? null,
    cnpj: parsed.data.cnpj ?? null,
    phone: parsed.data.phone ?? null,
    email: parsed.data.email || null,
    address: parsed.data.address ?? null,
    signature_image_url: parsed.data.signature_image_url || null,
    logo_url: parsed.data.logo_url || null,
    updated_at: new Date().toISOString(),
  }
  if (existing) {
    const { data, error } = await supabase
      .from('admin_settings')
      .update(payload)
      .eq('id', existing.id)
      .select()
      .single()
    if (error) throw new Error(error.message)
    return data
  }
  const { data, error } = await supabase
    .from('admin_settings')
    .insert(payload)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}
