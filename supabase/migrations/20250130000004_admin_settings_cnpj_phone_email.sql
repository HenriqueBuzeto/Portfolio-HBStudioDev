-- Campos para dados do contratado (sua empresa) usados no PDF
ALTER TABLE public.admin_settings
  ADD COLUMN IF NOT EXISTS cnpj TEXT,
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS email TEXT;
