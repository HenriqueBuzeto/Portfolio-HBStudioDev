import { z } from 'zod'

export const clientSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres').max(200),
  email: z.string().email('E-mail inválido'),
  phone: z.string().max(30).optional().nullable(),
  company: z.string().max(200).optional().nullable(),
  document: z.string().max(20).optional().nullable(),
  address: z.string().max(500).optional().nullable(),
})

export type ClientInput = z.infer<typeof clientSchema>
