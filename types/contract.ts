import type { ContractStatus } from './database'

export interface ContractFormData {
  clientId: string
  projectTitle: string
  projectDescription: string
  value: number
  paymentMethod: string
  installments: number
  startDate: string
  deliveryDate: string
  status?: ContractStatus
  clauses?: string
}

export interface ContractWithClient {
  id: string
  client_id: string
  project_title: string
  project_description: string
  value: number
  payment_method: string
  installments: number
  start_date: string
  delivery_date: string
  status: ContractStatus
  pdf_url: string | null
  contract_number: string
  created_at: string
  clients: {
    name: string
    email: string
    phone: string | null
    company: string | null
    document: string | null
    address: string | null
  } | null
}
