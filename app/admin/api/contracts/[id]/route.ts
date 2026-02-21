import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as contractService from '@/services/contractService'

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()
    const { id } = await params
    const body = await request.json()
    const row = await contractService.updateContract(id, body)
    return NextResponse.json(row)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao atualizar contrato'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()
    const { id } = await params
    await contractService.deleteContract(id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao excluir contrato'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
