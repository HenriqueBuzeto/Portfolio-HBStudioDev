/**
 * Lista os nomes e tipos dos campos do formulário do PDF de contrato.
 * Use para conferir se os nomes no PDF batem com o que o código espera.
 *
 * Uso: node scripts/list-pdf-form-fields.js
 * Ou: CONTRACT_PDF_FORM_TEMPLATE_PATH=public/meu.pdf node scripts/list-pdf-form-fields.js
 */

const path = require('path')
const fs = require('fs')

async function main() {
  const templatePath =
    process.env.CONTRACT_PDF_FORM_TEMPLATE_PATH || 'public/contrato_hb_studio_dev.pdf'
  const fullPath = path.join(process.cwd(), templatePath)

  if (!fs.existsSync(fullPath)) {
    console.error('Template não encontrado:', fullPath)
    process.exit(1)
  }

  // pdf-lib é ESM; dynamic import
  const { PDFDocument } = await import('pdf-lib')
  const bytes = fs.readFileSync(fullPath)
  const pdfDoc = await PDFDocument.load(bytes)
  const form = pdfDoc.getForm()
  const fields = form.getFields()

  console.log('Campos do formulário no PDF:', templatePath)
  console.log('Total:', fields.length)
  console.log('')
  console.log('Nome (exatamente como no PDF)          | Tipo')
  console.log('-'.repeat(60))

  for (const f of fields) {
    const name = f.getName()
    const type = f.constructor.name.replace(/^PDF/, '').replace('Field', '') || 'Field'
    console.log(`${name.padEnd(40)} | ${type}`)
  }

  console.log('')
  console.log('O código espera nomes como: num_orc, nome_contratante, nome_cliente, valor_total, etc.')
  console.log('Se os nomes no seu PDF forem diferentes, edite FIELD_ALIASES em services/pdfService.ts')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
