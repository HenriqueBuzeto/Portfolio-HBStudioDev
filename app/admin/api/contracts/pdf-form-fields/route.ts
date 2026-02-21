import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import { listPdfFormFields } from '@/services/pdfService'

const TEMPLATE_FORM_PATH =
  process.env.CONTRACT_PDF_FORM_TEMPLATE_PATH || 'public/contrato_hb_studio_dev.pdf'

/**
 * GET: lista os nomes dos campos do formulário do PDF (diagnóstico).
 * Só disponível para admin. Use para conferir se os nomes no PDF batem com o código.
 */
export async function GET() {
  try {
    await requireAdmin()
    const fields = await listPdfFormFields(TEMPLATE_FORM_PATH)
    return NextResponse.json({ template: TEMPLATE_FORM_PATH, fields })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao ler campos do PDF'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
