/**
 * Posições (x, y) para preencher o PDF template.
 * Origem do PDF: canto inferior esquerdo; unidade: pontos (72 por polegada).
 * A4 = 595 x 842 pontos.
 *
 * Ajuste os valores conforme o layout do seu contrato.pdf para que
 * cada texto caiba exatamente nos espaços em branco do modelo.
 */
export interface ContractPdfPositions {
  contractNumber: { x: number; y: number }
  date: { x: number; y: number }
  clientName: { x: number; y: number }
  clientEmail: { x: number; y: number }
  clientPhone: { x: number; y: number }
  clientCompany: { x: number; y: number }
  clientDocument: { x: number; y: number }
  clientAddress: { x: number; y: number }
  adminName: { x: number; y: number }
  adminCpf: { x: number; y: number }
  adminAddress: { x: number; y: number }
  projectTitle: { x: number; y: number }
  projectDescription: { x: number; y: number; maxWidth: number; lineHeight: number }
  value: { x: number; y: number }
  paymentMethod: { x: number; y: number }
  installments: { x: number; y: number }
  startDate: { x: number; y: number }
  deliveryDate: { x: number; y: number }
  clauses: { x: number; y: number; maxWidth: number; lineHeight: number }
  clientSignature: { x: number; y: number }
  adminSignature: { x: number; y: number }
}

export const DEFAULT_TEMPLATE_POSITIONS: ContractPdfPositions = {
  contractNumber: { x: 450, y: 800 },
  date: { x: 450, y: 782 },
  clientName: { x: 50, y: 720 },
  clientEmail: { x: 50, y: 702 },
  clientPhone: { x: 50, y: 684 },
  clientCompany: { x: 50, y: 666 },
  clientDocument: { x: 50, y: 648 },
  clientAddress: { x: 50, y: 630 },
  adminName: { x: 320, y: 720 },
  adminCpf: { x: 320, y: 702 },
  adminAddress: { x: 320, y: 684 },
  projectTitle: { x: 50, y: 620 },
  projectDescription: { x: 50, y: 560, maxWidth: 495, lineHeight: 12 },
  value: { x: 50, y: 480 },
  paymentMethod: { x: 50, y: 462 },
  installments: { x: 50, y: 444 },
  startDate: { x: 50, y: 426 },
  deliveryDate: { x: 50, y: 408 },
  clauses: { x: 50, y: 360, maxWidth: 495, lineHeight: 10 },
  clientSignature: { x: 50, y: 120 },
  adminSignature: { x: 320, y: 120 },
}
