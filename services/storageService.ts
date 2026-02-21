import { createClient as createSupabase } from '@/lib/supabase/server'

const BUCKET_CONTRACTS = 'contracts'
const BUCKET_SIGNATURES = 'signatures'

export async function uploadContractPdf(
  contractId: string,
  contractNumber: string,
  pdfBuffer: Uint8Array
): Promise<string> {
  const supabase = await createSupabase()
  const fileName = `${contractNumber.replace(/\s/g, '-')}-${contractId.slice(0, 8)}.pdf`
  const { data, error } = await supabase.storage
    .from(BUCKET_CONTRACTS)
    .upload(fileName, pdfBuffer, {
      contentType: 'application/pdf',
      upsert: true,
    })
  if (error) throw new Error(error.message)
  const { data: urlData } = supabase.storage.from(BUCKET_CONTRACTS).getPublicUrl(data.path)
  return urlData.publicUrl
}

export async function getSignedContractUrl(pathOrUrl: string, expiresIn = 3600): Promise<string> {
  const supabase = await createSupabase()
  const path = pathOrUrl.includes(BUCKET_CONTRACTS)
    ? pathOrUrl.split(`${BUCKET_CONTRACTS}/`)[1] ?? pathOrUrl
    : pathOrUrl
  const { data, error } = await supabase.storage
    .from(BUCKET_CONTRACTS)
    .createSignedUrl(path, expiresIn)
  if (error) throw new Error(error.message)
  return data.signedUrl
}

export async function uploadSignature(file: File): Promise<string> {
  const supabase = await createSupabase()
  const ext = file.name.split('.').pop() || 'png'
  const fileName = `sig-${Date.now()}.${ext}`
  const { data, error } = await supabase.storage
    .from(BUCKET_SIGNATURES)
    .upload(fileName, file, { contentType: file.type, upsert: true })
  if (error) throw new Error(error.message)
  const { data: urlData } = supabase.storage.from(BUCKET_SIGNATURES).getPublicUrl(data.path)
  return urlData.publicUrl
}
