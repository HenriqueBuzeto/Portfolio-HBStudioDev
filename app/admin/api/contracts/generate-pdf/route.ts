import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as contractService from '@/services/contractService'
import * as pdfService from '@/services/pdfService'
import * as storageService from '@/services/storageService'
import * as adminSettingsService from '@/services/adminSettingsService'

export async function POST(request: NextRequest) {
  try {
    await requireAdmin()
    const body = await request.json()
    const contract = await contractService.createContract({
      ...body,
      status: 'draft',
    })
    const fullContract = await contractService.getContractById(contract.id)
    if (!fullContract) throw new Error('Contrato não encontrado')
    const admin = await adminSettingsService.getAdminSettings()
    const pdfBuffer = await pdfService.generateContractPdf({
      contract: fullContract,
      admin,
      clauses: body.clauses,
    })
    const pdfUrl = await storageService.uploadContractPdf(
      contract.id,
      contract.contract_number,
      pdfBuffer
    )
    await contractService.updateContract(contract.id, { pdf_url: pdfUrl })
    return NextResponse.json({
      id: contract.id,
      contract_number: contract.contract_number,
      url: pdfUrl,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao gerar PDF'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
