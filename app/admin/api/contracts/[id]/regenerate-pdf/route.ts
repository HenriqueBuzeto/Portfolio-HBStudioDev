import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as contractService from '@/services/contractService'
import * as pdfService from '@/services/pdfService'
import * as storageService from '@/services/storageService'
import * as adminSettingsService from '@/services/adminSettingsService'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()
    const { id } = await params
    const body = (await request.json().catch(() => ({}))) as { clauses?: string }
    const fullContract = await contractService.getContractById(id)
    if (!fullContract) {
      return NextResponse.json({ error: 'Contrato não encontrado' }, { status: 404 })
    }
    const admin = await adminSettingsService.getAdminSettings()
    const pdfBuffer = await pdfService.generateContractPdf({
      contract: fullContract,
      admin,
      clauses: body.clauses,
    })
    const pdfUrl = await storageService.uploadContractPdf(
      id,
      fullContract.contract_number,
      pdfBuffer
    )
    await contractService.updateContract(id, { pdf_url: pdfUrl })
    return NextResponse.json({ url: pdfUrl })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao gerar PDF'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
