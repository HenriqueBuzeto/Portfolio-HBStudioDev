import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as clientService from '@/services/clientService'

export async function POST(request: NextRequest) {
  try {
    await requireAdmin()
    const body = await request.json()
    const row = await clientService.createClient(body)
    return NextResponse.json(row)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao criar cliente'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
