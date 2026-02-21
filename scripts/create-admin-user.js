/**
 * Cria o usuário admin no Supabase (rode UMA VEZ).
 * Use a chave service_role só aqui, nunca no front.
 *
 * 1. Adicione no .env.local (temporariamente):
 *    SUPABASE_SERVICE_ROLE_KEY=eyJ...sua-chave-service-role
 * 2. Rode: node scripts/create-admin-user.js
 * 3. Remova a linha SUPABASE_SERVICE_ROLE_KEY do .env.local depois.
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8')
  content.split('\n').forEach((line) => {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim()
  })
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const email = 'hbstudiodev@admin.com'
const password = 'hbdevbjj'

if (!url || !serviceRoleKey) {
  console.error('Defina NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no ambiente.')
  process.exit(1)
}

const supabase = createClient(url, serviceRoleKey, { auth: { autoRefreshToken: false, persistSession: false } })

async function main() {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })
  if (error) {
    if (error.message.includes('already been registered')) {
      console.log('Usuário já existe. Pode fazer login em /admin com:', email)
      return
    }
    console.error('Erro:', error.message)
    process.exit(1)
  }
  console.log('Usuário criado com sucesso.')
  console.log('Login:', email)
  console.log('Senha:', password)
  console.log('Acesse /admin e faça login.')
}

main()
