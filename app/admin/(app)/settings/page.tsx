import { getAdminSettings } from '@/services/adminSettingsService'
import SettingsForm from './SettingsForm'
import { Settings, FileText } from 'lucide-react'

export default async function AdminSettingsPage() {
  const settings = await getAdminSettings()

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Configurações</h1>
        <p className="text-muted-foreground">
          Dados exibidos no contrato (contratado) e assinatura. Preencha para personalizar os PDFs.
        </p>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/80 p-6 shadow-sm backdrop-blur-sm">
        <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
          <Settings className="h-5 w-5 text-primary" />
          Dados do contratado
        </h2>
        <div className="mb-6 rounded-lg border border-border/30 bg-muted/20 p-4">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4 flex-shrink-0" />
            Seus dados (nome, CPF/CNPJ, telefone, e-mail, endereço) preenchem os campos do contratado no PDF. As URLs de assinatura e logo também são usadas na geração dos contratos.
          </p>
        </div>
        <SettingsForm initial={settings} />
      </div>
    </div>
  )
}
