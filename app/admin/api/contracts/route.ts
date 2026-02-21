import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as contractService from '@/services/contractService'

export async function POST(request: NextRequest) {
  try {
    await requireAdmin()
    const body = await request.json()
    const row = await contractService.createContract(body)
    return NextResponse.json(row)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao criar contrato'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
