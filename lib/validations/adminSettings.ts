import { z } from 'zod'

export const adminSettingsSchema = z.object({
  full_name: z.string().min(2).max(200),
  cpf: z.string().max(20).optional().nullable(),
  cnpj: z.string().max(20).optional().nullable(),
  phone: z.string().max(30).optional().nullable(),
  email: z.string().email().optional().nullable().or(z.literal('')),
  address: z.string().max(500).optional().nullable(),
  signature_image_url: z.string().url().optional().nullable().or(z.literal('')),
  logo_url: z.string().url().optional().nullable().or(z.literal('')),
})

export type AdminSettingsInput = z.infer<typeof adminSettingsSchema>
