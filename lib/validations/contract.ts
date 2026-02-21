import { z } from 'zod'

const contractStatusSchema = z.enum(['draft', 'sent', 'signed', 'canceled'])

export const contractSchema = z.object({
  clientId: z.string().uuid('Cliente inválido'),
  projectTitle: z.string().min(2, 'Título deve ter pelo menos 2 caracteres').max(300),
  projectDescription: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  value: z.number().positive('Valor deve ser positivo'),
  paymentMethod: z.string().min(1, 'Informe a forma de pagamento'),
  installments: z.number().int().min(1).max(24),
  startDate: z.string().min(1, 'Data de início obrigatória'),
  deliveryDate: z.string().min(1, 'Data de entrega obrigatória'),
  status: contractStatusSchema.optional(),
  clauses: z.string().optional(),
})

export type ContractInput = z.infer<typeof contractSchema>
