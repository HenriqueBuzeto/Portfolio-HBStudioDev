import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/auth'
import * as adminSettingsService from '@/services/adminSettingsService'

export async function PUT(request: NextRequest) {
  try {
    await requireAdmin()
    const body = await request.json()
    const row = await adminSettingsService.upsertAdminSettings(body)
    return NextResponse.json(row)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Erro ao salvar configurações'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
