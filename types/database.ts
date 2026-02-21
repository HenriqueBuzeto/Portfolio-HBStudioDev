export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          document: string | null
          address: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          document?: string | null
          address?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          document?: string | null
          address?: string | null
          created_at?: string
        }
      }
      contracts: {
        Row: {
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
        }
        Insert: {
          id?: string
          client_id: string
          project_title: string
          project_description: string
          value: number
          payment_method: string
          installments: number
          start_date: string
          delivery_date: string
          status?: ContractStatus
          pdf_url?: string | null
          contract_number: string
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          project_title?: string
          project_description?: string
          value?: number
          payment_method?: string
          installments?: number
          start_date?: string
          delivery_date?: string
          status?: ContractStatus
          pdf_url?: string | null
          contract_number?: string
          created_at?: string
        }
      }
      proposals: {
        Row: {
          id: string
          client_id: string
          description: string
          value: number
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          description: string
          value: number
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          description?: string
          value?: number
          status?: string
          created_at?: string
        }
      }
      admin_settings: {
        Row: {
          id: string
          full_name: string
          cpf: string | null
          cnpj: string | null
          phone: string | null
          email: string | null
          address: string | null
          signature_image_url: string | null
          logo_url: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          full_name: string
          cpf?: string | null
          cnpj?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          signature_image_url?: string | null
          logo_url?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          cpf?: string | null
          cnpj?: string | null
          phone?: string | null
          email?: string | null
          address?: string | null
          signature_image_url?: string | null
          logo_url?: string | null
          updated_at?: string
        }
      }
    }
  }
}

export type ContractStatus = 'draft' | 'sent' | 'signed' | 'canceled'

export type ClientRow = Database['public']['Tables']['clients']['Row']
export type ContractRow = Database['public']['Tables']['contracts']['Row']
export type ProposalRow = Database['public']['Tables']['proposals']['Row']
export type AdminSettingsRow = Database['public']['Tables']['admin_settings']['Row']
