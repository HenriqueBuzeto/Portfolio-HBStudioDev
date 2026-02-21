-- Buckets usados pelo app: contratos (PDF) e assinaturas (imagens)
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('contracts', 'contracts', true),
  ('signatures', 'signatures', true)
ON CONFLICT (id) DO NOTHING;

-- Leitura pública para contratos (links do PDF funcionam sem login)
CREATE POLICY "Public read contracts"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'contracts');

-- Autenticados podem fazer upload em contracts (admin ao gerar PDF)
CREATE POLICY "Authenticated upload contracts"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'contracts');

CREATE POLICY "Authenticated update contracts"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'contracts');

-- Signatures: leitura e upload para autenticados
CREATE POLICY "Authenticated read signatures"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'signatures');

CREATE POLICY "Authenticated upload signatures"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'signatures');
