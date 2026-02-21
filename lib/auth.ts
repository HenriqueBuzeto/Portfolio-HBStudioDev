import { createClient } from '@/lib/supabase/server'

const ALLOWED_ADMIN_EMAIL = process.env.ALLOWED_ADMIN_EMAIL?.trim()

export async function getAdminUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) return null
  if (!ALLOWED_ADMIN_EMAIL || user.email?.toLowerCase().trim() !== ALLOWED_ADMIN_EMAIL.toLowerCase()) {
    return null
  }
  return user
}

export async function requireAdmin() {
  const user = await getAdminUser()
  if (!user) {
    throw new Error('Unauthorized')
  }
  return user
}

export function isAllowedEmail(email: string | undefined): boolean {
  if (!email || !ALLOWED_ADMIN_EMAIL) return false
  return email.toLowerCase().trim() === ALLOWED_ADMIN_EMAIL.toLowerCase()
}
