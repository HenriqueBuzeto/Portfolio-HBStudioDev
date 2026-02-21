import fs from 'fs'
import path from 'path'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import type { PDFPage } from 'pdf-lib'
import type { ContractWithClient } from '@/types/contract'
import type { AdminSettingsRow } from '@/types/database'
import {
  DEFAULT_TEMPLATE_POSITIONS,
  type ContractPdfPositions,
} from './pdfTemplatePositions'
import { CLAUSULAS_PADRAO_RESUMIDAS } from '@/data/modelo-contrato-prestacao-servicos'

function replaceContractPlaceholders(
  text: string,
  contract: ContractWithClient,
  valueFormatted: string
): string {
  const client = contract.clients
  const start = new Date(contract.start_date).toLocaleDateString('pt-BR')
  const end = new Date(contract.delivery_date).toLocaleDateString('pt-BR')
  return text
    .replace(/\[VALOR_TOTAL\]/g, valueFormatted)
    .replace(/\[DATA_INICIO\]/g, start)
    .replace(/\[DATA_ENTREGA\]/g, end)
    .replace(/\[NOME_RAZAO_CONTRATANTE\]/g, client?.name ?? '')
    .replace(/\[EMAIL_CONTRATANTE\]/g, client?.email ?? '')
    .replace(/\[TELEFONE_CONTRATANTE\]/g, client?.phone ?? '')
    .replace(/\[ENDERECO_CONTRATANTE\]/g, client?.address ?? '')
}

const TEMPLATE_PATH = process.env.CONTRACT_PDF_TEMPLATE_PATH || 'public/contrato.pdf'
const TEMPLATE_FORM_PATH =
  process.env.CONTRACT_PDF_FORM_TEMPLATE_PATH || 'public/contrato_hb_studio_dev.pdf'

/**
 * Para ver por que o PDF não preenche: os campos do PDF precisam ter nomes compatíveis.
 * - Rode: npm run pdf-fields  (lista os nomes exatos do seu PDF)
 * - Ou acesse (logado no admin): GET /admin/api/contracts/pdf-form-fields
 * - Se os nomes forem diferentes, adicione em FIELD_ALIASES abaixo ou renomeie no editor do PDF.
 */

export type PdfFormFields = {
  num_orc?: string
  nome_contratante?: string
  cnpj_contratante?: string
  telefone_contratante?: string
  email_contratante?: string
  endereco_contratante?: string
  nome_cliente?: string
  cpf_cnpj?: string
  email_cliente?: string
  endereco_cliente?: string
  telefone_cliente?: string
  descricao_site?: string
  descricao_adicionais?: string
  descricao_registrobr?: string
  descricao_hospedagem?: string
  valor_site?: string
  valor_adicionais?: string
  valor_registrobr?: string
  valor_hospedagem?: string
  valor_mensal?: string
  valor_total?: string
  data_contrato?: string
  forma_pagamento?: string
  nome_projeto?: string
  data_assinatura?: string
}

const PDF_FORM_FIELD_NAMES: (keyof PdfFormFields)[] = [
  'num_orc',
  'nome_contratante',
  'cnpj_contratante',
  'telefone_contratante',
  'email_contratante',
  'endereco_contratante',
  'nome_cliente',
  'cpf_cnpj',
  'email_cliente',
  'endereco_cliente',
  'telefone_cliente',
  'descricao_site',
  'descricao_adicionais',
  'descricao_registrobr',
  'descricao_hospedagem',
  'valor_site',
  'valor_adicionais',
  'valor_registrobr',
  'valor_hospedagem',
  'valor_mensal',
  'valor_total',
  'data_contrato',
  'forma_pagamento',
  'nome_projeto',
  'data_assinatura',
]

/** Normaliza nome de campo para comparação (minúsculas, espaços → underscore) */
function normalizeFieldName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '_').trim()
}

/** Lista os nomes e tipos de todos os campos do formulário do PDF (para diagnóstico). */
export async function listPdfFormFields(templatePath: string): Promise<{ name: string; type: string }[]> {
  const fullPath = path.join(process.cwd(), templatePath)
  if (!fs.existsSync(fullPath)) throw new Error('Template não encontrado: ' + templatePath)
  const bytes = fs.readFileSync(fullPath)
  const pdfDoc = await PDFDocument.load(bytes)
  const form = pdfDoc.getForm()
  const fields = form.getFields()
  return fields.map((f) => ({
    name: f.getName(),
    type: f.constructor.name.replace(/^PDF/, '').replace('Field', '') || 'Unknown',
  }))
}

/** Aliases possíveis para nomes de campos (nome no nosso código → nomes que podem existir no PDF). */
const FIELD_ALIASES: Record<string, string[]> = {
  num_orc: ['num_orc', 'numero_orcamento', 'numero_orc', 'orcamento', 'n_orc'],
  nome_contratante: ['nome_contratante', 'contratante', 'nome_contratado'],
  cnpj_contratante: ['cnpj_contratante', 'cnpj_contratado', 'cpf_cnpj_contratante'],
  nome_cliente: ['nome_cliente', 'cliente', 'nome_contratante_cliente'],
  cpf_cnpj: ['cpf_cnpj', 'documento_cliente', 'cpf_cnpj_cliente', 'documento'],
  email_cliente: ['email_cliente', 'email'],
  telefone_cliente: ['telefone_cliente', 'telefone'],
  endereco_cliente: ['endereco_cliente', 'endereco'],
  valor_total: ['valor_total', 'valor', 'valor_contrato'],
  data_contrato: ['data_contrato', 'data'],
  forma_pagamento: ['forma_pagamento', 'pagamento'],
  nome_projeto: ['nome_projeto', 'projeto', 'descricao_site'],
  data_assinatura: ['data_assinatura', 'data_assinatura_contrato'],
}

function getCandidatesForKey(ourKey: string): string[] {
  const normalized = normalizeFieldName(ourKey)
  const aliases = FIELD_ALIASES[ourKey as keyof typeof FIELD_ALIASES]
  const candidates = [ourKey, normalized]
  if (aliases) candidates.push(...aliases)
  return [...new Set(candidates)]
}

export async function fillPdfFormTemplate(
  templatePath: string,
  fields: Partial<PdfFormFields>
): Promise<Uint8Array> {
  const fullPath = path.join(process.cwd(), templatePath)
  if (!fs.existsSync(fullPath)) throw new Error('Template não encontrado')
  const bytes = fs.readFileSync(fullPath)
  const pdfDoc = await PDFDocument.load(bytes)
  const form = pdfDoc.getForm()

  // Mapa: nome normalizado → nome real no PDF (para campos cujo nome no arquivo pode variar)
  const allFields = form.getFields()
  if (allFields.length === 0) {
    throw new Error('Template PDF não possui campos de formulário editáveis (AcroForm). Use um PDF com campos de texto ou o sistema usará o modelo gerado automaticamente.')
  }

  const normalizedToActualName = new Map<string, string>()
  for (const field of allFields) {
    const actualName = field.getName()
    const normalized = normalizeFieldName(actualName)
    if (!normalizedToActualName.has(normalized)) {
      normalizedToActualName.set(normalized, actualName)
    }
  }

  let filledCount = 0
  for (const ourKey of PDF_FORM_FIELD_NAMES) {
    const value = fields[ourKey]
    if (value === undefined || value === null) continue
    const str = String(value).trim()
    const candidates = [
      ourKey,
      normalizedToActualName.get(normalizeFieldName(ourKey)),
      ...getCandidatesForKey(ourKey).map((c) => normalizedToActualName.get(normalizeFieldName(c))),
    ].filter(Boolean) as string[]
    const tried = new Set<string>()
    let filled = false
    for (const name of [ourKey, ...candidates]) {
      if (!name || tried.has(name)) continue
      tried.add(name)
      try {
        form.getTextField(name).setText(str)
        filled = true
        filledCount += 1
        break
      } catch {
        // não é text field ou não existe; tenta próximo nome
      }
    }
    if (!filled && process.env.NODE_ENV === 'development') {
      console.warn(`[PDF] Campo não preenchido: "${ourKey}" (nomes tentados: ${[...tried].join(', ')})`)
    }
  }

  if (filledCount === 0) {
    const fieldNames = allFields.map((f) => f.getName()).join(', ')
    throw new Error(
      `Nenhum campo do PDF foi preenchido. Nomes dos campos no seu PDF: [${fieldNames}]. Rode "npm run pdf-fields" ou adicione aliases em services/pdfService.ts (FIELD_ALIASES).`
    )
  }

  // Atualiza aparências para o texto preenchido aparecer corretamente
  try {
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    form.updateFieldAppearances(font)
  } catch {
    form.updateFieldAppearances()
  }
  form.flatten()
  return pdfDoc.save()
}

export interface ContractPdfData {
  contract: ContractWithClient
  admin: AdminSettingsRow | null
  clauses?: string
}

function wrapLines(
  text: string,
  maxCharsPerLine: number
): string[] {
  const lines: string[] = []
  const paragraphs = text.split('\n')
  for (const para of paragraphs) {
    const words = para.split(' ')
    let current = ''
    for (const word of words) {
      const next = current ? current + ' ' + word : word
      if (next.length <= maxCharsPerLine) {
        current = next
      } else {
        if (current) lines.push(current)
        current = word.length <= maxCharsPerLine ? word : word.slice(0, maxCharsPerLine)
      }
    }
    if (current) lines.push(current)
  }
  return lines
}

function drawTextAt(
  page: PDFPage,
  text: string,
  x: number,
  y: number,
  font: ReturnType<Awaited<ReturnType<typeof PDFDocument.prototype.embedFont>>>,
  size: number,
  color = rgb(0.1, 0.1, 0.1)
) {
  if (!text.trim()) return
  page.drawText(text.trim(), { x, y, size, font, color })
}

function drawParagraph(
  page: PDFPage,
  text: string,
  x: number,
  startY: number,
  font: ReturnType<Awaited<ReturnType<typeof PDFDocument.prototype.embedFont>>>,
  size: number,
  maxWidth: number,
  lineHeight: number,
  color = rgb(0.2, 0.2, 0.2)
) {
  const maxChars = Math.floor(maxWidth / (size * 0.6))
  const lines = wrapLines(text, maxChars)
  let y = startY
  for (const line of lines) {
    page.drawText(line, { x, y, size, font, color })
    y -= lineHeight
  }
  return y
}

async function generateWithTemplate(
  data: ContractPdfData,
  positions: ContractPdfPositions
): Promise<Uint8Array> {
  const templateFullPath = path.join(process.cwd(), TEMPLATE_PATH)
  const templateBytes = fs.readFileSync(templateFullPath)
  const templateDoc = await PDFDocument.load(templateBytes)
  const doc = await PDFDocument.create()
  const [templatePage] = doc.copyPages(templateDoc, [0])
  doc.addPage(templatePage)
  const page = doc.getPage(0)
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold)

  const { contract, admin, clauses } = data
  const client = contract.clients
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(contract.value))
  const clausesText = replaceContractPlaceholders(
    clauses || CLAUSULAS_PADRAO_RESUMIDAS,
    contract,
    valueFormatted
  )

  drawTextAt(
    page,
    contract.contract_number,
    positions.contractNumber.x,
    positions.contractNumber.y,
    font,
    10
  )
  drawTextAt(
    page,
    new Date(contract.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    positions.date.x,
    positions.date.y,
    font,
    10
  )

  if (client) {
    drawTextAt(page, client.name, positions.clientName.x, positions.clientName.y, font, 10)
    drawTextAt(page, client.email, positions.clientEmail.x, positions.clientEmail.y, font, 10)
    if (client.phone)
      drawTextAt(page, client.phone, positions.clientPhone.x, positions.clientPhone.y, font, 10)
    if (client.company)
      drawTextAt(
        page,
        client.company,
        positions.clientCompany.x,
        positions.clientCompany.y,
        font,
        10
      )
    if (client.document)
      drawTextAt(
        page,
        client.document,
        positions.clientDocument.x,
        positions.clientDocument.y,
        font,
        10
      )
    if (client.address)
      drawTextAt(
        page,
        client.address,
        positions.clientAddress.x,
        positions.clientAddress.y,
        font,
        10
      )
  }

  const adminName = admin?.full_name ?? 'HB Studio Dev'
  drawTextAt(page, adminName, positions.adminName.x, positions.adminName.y, font, 10)
  if (admin?.cpf)
    drawTextAt(page, admin.cpf, positions.adminCpf.x, positions.adminCpf.y, font, 10)
  if (admin?.address)
    drawTextAt(
      page,
      admin.address,
      positions.adminAddress.x,
      positions.adminAddress.y,
      font,
      10
    )

  drawTextAt(
    page,
    contract.project_title,
    positions.projectTitle.x,
    positions.projectTitle.y,
    fontBold,
    10
  )
  drawParagraph(
    page,
    contract.project_description,
    positions.projectDescription.x,
    positions.projectDescription.y,
    font,
    10,
    positions.projectDescription.maxWidth,
    positions.projectDescription.lineHeight
  )

  drawTextAt(
    page,
    `Valor total: ${valueFormatted}`,
    positions.value.x,
    positions.value.y,
    font,
    10
  )
  drawTextAt(
    page,
    `Forma de pagamento: ${contract.payment_method}`,
    positions.paymentMethod.x,
    positions.paymentMethod.y,
    font,
    10
  )
  drawTextAt(
    page,
    `Parcelas: ${contract.installments}x`,
    positions.installments.x,
    positions.installments.y,
    font,
    10
  )
  drawTextAt(
    page,
    `Início: ${new Date(contract.start_date).toLocaleDateString('pt-BR')}`,
    positions.startDate.x,
    positions.startDate.y,
    font,
    10
  )
  drawTextAt(
    page,
    `Entrega prevista: ${new Date(contract.delivery_date).toLocaleDateString('pt-BR')}`,
    positions.deliveryDate.x,
    positions.deliveryDate.y,
    font,
    10
  )

  drawParagraph(
    page,
    clausesText,
    positions.clauses.x,
    positions.clauses.y,
    font,
    9,
    positions.clauses.maxWidth,
    positions.clauses.lineHeight
  )

  drawTextAt(
    page,
    client?.name ?? '',
    positions.clientSignature.x,
    positions.clientSignature.y,
    font,
    10
  )
  drawTextAt(
    page,
    adminName,
    positions.adminSignature.x,
    positions.adminSignature.y,
    font,
    10
  )

  return doc.save()
}

async function generateFromScratch(data: ContractPdfData): Promise<Uint8Array> {
  const document = await PDFDocument.create()
  const font = await document.embedFont(StandardFonts.Helvetica)
  const fontBold = await document.embedFont(StandardFonts.HelveticaBold)
  const page = document.addPage([595, 842])
  const { contract, admin, clauses } = data
  const client = contract.clients
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(contract.value))
  const clausesText = replaceContractPlaceholders(
    clauses || CLAUSULAS_PADRAO_RESUMIDAS,
    contract,
    valueFormatted
  )
  let y = 800
  const lineHeight = 14
  const margin = 50

  function addText(text: string, size: number, bold = false) {
    const f = bold ? fontBold : font
    page.drawText(text, { x: margin, y, size, font: f, color: rgb(0.1, 0.1, 0.1) })
    y -= lineHeight
  }

  function addParagraph(text: string, size: number) {
    const lines = text.split('\n')
    for (const line of lines) {
      if (line.length > 90) {
        const words = line.split(' ')
        let current = ''
        for (const word of words) {
          if ((current + ' ' + word).length > 90) {
            page.drawText(current.trim(), {
              x: margin,
              y,
              size,
              font,
              color: rgb(0.2, 0.2, 0.2),
            })
            y -= lineHeight
            current = word
          } else {
            current = current ? current + ' ' + word : word
          }
        }
        if (current) {
          page.drawText(current, {
            x: margin,
            y,
            size,
            font,
            color: rgb(0.2, 0.2, 0.2),
          })
          y -= lineHeight
        }
      } else {
        page.drawText(line, {
          x: margin,
          y,
          size,
          font,
          color: rgb(0.2, 0.2, 0.2),
        })
        y -= lineHeight
      }
    }
  }

  addText('CONTRATO DE PRESTAÇÃO DE SERVIÇOS', 16, true)
  y -= 8
  addText(`Nº ${contract.contract_number}`, 11)
  addText(
    `Data: ${new Date(contract.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })}`,
    10
  )
  y -= 16

  addText('CONTRATANTE', 12, true)
  if (client) {
    addText(`Nome: ${client.name}`, 10)
    addText(`E-mail: ${client.email}`, 10)
    if (client.phone) addText(`Telefone: ${client.phone}`, 10)
    if (client.company) addText(`Empresa: ${client.company}`, 10)
    if (client.document) addText(`CPF/CNPJ: ${client.document}`, 10)
    if (client.address) addText(`Endereço: ${client.address}`, 10)
  }
  y -= 12

  addText('CONTRATADO', 12, true)
  addText(`Nome: ${admin?.full_name ?? 'HB Studio Dev'}`, 10)
  if (admin?.cpf) addText(`CPF: ${admin.cpf}`, 10)
  if (admin?.address) addText(`Endereço: ${admin.address}`, 10)
  y -= 16

  addText('OBJETO DO CONTRATO', 12, true)
  addText(contract.project_title, 10, true)
  addParagraph(contract.project_description, 10)
  y -= 12

  addText('VALOR E FORMA DE PAGAMENTO', 12, true)
  addText(`Valor total: ${valueFormatted}`, 10)
  addText(`Forma de pagamento: ${contract.payment_method}`, 10)
  addText(`Parcelas: ${contract.installments}x`, 10)
  addText(`Início: ${new Date(contract.start_date).toLocaleDateString('pt-BR')}`, 10)
  addText(`Entrega prevista: ${new Date(contract.delivery_date).toLocaleDateString('pt-BR')}`, 10)
  y -= 16

  addText('CLÁUSULAS', 12, true)
  addParagraph(clausesText, 9)
  y -= 24

  addText('CONTRATANTE', 10, true)
  addText('_________________________________________', 10)
  addText(client?.name ?? '', 10)
  y -= 24

  addText('CONTRATADO', 10, true)
  addText('_________________________________________', 10)
  addText(admin?.full_name ?? 'HB Studio Dev', 10)

  return document.save()
}

export async function generateContractPdf(data: ContractPdfData): Promise<Uint8Array> {
  const formTemplatePath = path.join(process.cwd(), TEMPLATE_FORM_PATH)
  const formTemplateExists =
    fs.existsSync(formTemplatePath) && fs.statSync(formTemplatePath).isFile()

  if (formTemplateExists) {
    try {
      const valueFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(data.contract.value))
      const client = data.contract.clients
      const dataContrato = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      const dataAssinatura = new Date(data.contract.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
      const admin = data.admin
      const pdfBytes = await fillPdfFormTemplate(TEMPLATE_FORM_PATH, {
        num_orc: data.contract.contract_number,
        nome_contratante: admin?.full_name ?? '',
        cnpj_contratante: admin?.cnpj ?? admin?.cpf ?? '',
        telefone_contratante: admin?.phone ?? '',
        email_contratante: admin?.email ?? '',
        endereco_contratante: admin?.address ?? '',
        nome_cliente: client?.name ?? '',
        cpf_cnpj: client?.document ?? '',
        email_cliente: client?.email ?? '',
        endereco_cliente: client?.address ?? '',
        telefone_cliente: client?.phone ?? '',
        descricao_site: data.contract.project_description || data.contract.project_title,
        descricao_adicionais: '',
        descricao_registrobr: '',
        descricao_hospedagem: '',
        valor_site: valueFormatted,
        valor_adicionais: '',
        valor_registrobr: '',
        valor_hospedagem: '',
        valor_mensal: '',
        valor_total: valueFormatted,
        data_contrato: dataContrato,
        forma_pagamento: data.contract.payment_method,
        nome_projeto: data.contract.project_title,
        data_assinatura: dataAssinatura,
      })
      return pdfBytes
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn('[PDF] Formulário não preenchido, usando modelo alternativo:', msg)
      try {
        const fieldList = await listPdfFormFields(TEMPLATE_FORM_PATH)
        console.warn(
          '[PDF] Campos existentes no seu PDF:',
          fieldList.map((f) => `${f.name} (${f.type})`).join(', ')
        )
      } catch {
        // ignora se não conseguir listar
      }
    }
  }

  const templateFullPath = path.join(process.cwd(), TEMPLATE_PATH)
  const templateExists =
    fs.existsSync(templateFullPath) && fs.statSync(templateFullPath).isFile()

  if (templateExists) {
    try {
      return await generateWithTemplate(data, DEFAULT_TEMPLATE_POSITIONS)
    } catch (err) {
      console.warn('[PDF] Erro ao usar template por posição, gerando do zero:', err)
    }
  }

  return generateFromScratch(data)
}
