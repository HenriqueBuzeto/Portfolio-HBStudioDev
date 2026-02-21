import { NextRequest, NextResponse } from 'next/server'
import {
  fillPdfFormTemplate,
  type PdfFormFields,
} from '@/services/pdfService'

const TEMPLATE_PATH = process.env.CONTRACT_PDF_FORM_TEMPLATE_PATH || 'public/contrato_hb_studio_dev.pdf'

const FORM_KEYS: (keyof PdfFormFields)[] = [
  'num_orc',
  'nome_contratante',
  'cnpj_contratante',
  'telefone_contratante',
  'email_contratante',
  'endereco_contratante',
  'nome_cliente',
  'cpf_cnpj',
  'email_cliente',
  'endereco_cliente',
  'telefone_cliente',
  'descricao_site',
  'descricao_adicionais',
  'descricao_registrobr',
  'descricao_hospedagem',
  'valor_site',
  'valor_adicionais',
  'valor_registrobr',
  'valor_hospedagem',
  'valor_mensal',
  'valor_total',
  'data_contrato',
  'forma_pagamento',
  'nome_projeto',
  'data_assinatura',
]

function toStr(v: unknown): string {
  if (v === undefined || v === null) return ''
  return String(v).trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const fields: Partial<PdfFormFields> = {}

    for (const key of FORM_KEYS) {
      const value = body[key]
      if (value !== undefined && value !== null && value !== '') {
        fields[key] = toStr(value)
      }
    }

    if (!fields.data_contrato) {
      fields.data_contrato = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }

    const pdfBytes = await fillPdfFormTemplate(TEMPLATE_PATH, fields)

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=contrato-preenchido.pdf',
      },
    })
  } catch (error) {
    console.error('Erro ao gerar contrato:', error)
    return NextResponse.json(
      {
        error:
          'Erro ao gerar contrato. Verifique se o template public/contrato_hb_studio_dev.pdf existe e possui os campos de formulário (num_orc, nome_contratante, cnpj_contratante, etc.).',
      },
      { status: 500 }
    )
  }
}
