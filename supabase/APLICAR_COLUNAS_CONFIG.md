# Aplicar colunas de configuração (CNPJ, Telefone, E-mail)

Se aparecer o erro **"Could not find the 'cnpj' column of 'admin_settings' in the schema cache"**, as colunas novas ainda não existem no banco. Execute o SQL abaixo no seu projeto Supabase.

## No Supabase (nuvem)

1. Acesse o [Dashboard do Supabase](https://supabase.com/dashboard) e abra seu projeto.
2. No menu lateral, clique em **SQL Editor**.
3. Cole e execute este SQL:

```sql
-- Adiciona colunas para dados do contratado (CNPJ, telefone, e-mail)
ALTER TABLE public.admin_settings
  ADD COLUMN IF NOT EXISTS cnpj TEXT,
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS email TEXT;
```

4. Clique em **Run** (ou Ctrl+Enter).
5. Volte às Configurações no admin e clique em **Salvar** de novo.

## Usando Supabase CLI (se o projeto estiver linkado)

No terminal, na pasta do projeto:

```bash
supabase db push
```

Isso aplica todas as migrations pendentes, incluindo a que adiciona `cnpj`, `phone` e `email`.
