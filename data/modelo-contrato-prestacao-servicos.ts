/**
 * Modelo completo de CONTRATO DE PRESTAÇÃO DE SERVIÇOS
 * Desenvolvimento web / tecnologia — Brasil
 * Campos entre [colchetes] são preenchidos dinamicamente ou pelo usuário.
 */

export const DADOS_CONTRATADA_PADRAO = {
  razaoSocial: 'HB Studio Dev',
  nomeFantasia: 'HB Studio Dev',
  cnpj: '65.001.925/0001-00',
  endereco: 'Rua Seis, nº 1.170, Nova Colina',
  cidadeEstado: 'Colina - SP',
  email: '[E-mail da CONTRATADA]',
  telefone: '(17) 99265-1033',
  representanteLegal: 'Henrique Buzeto Vieira',
}

export const TEXTO_CONTRATO_COMPLETO = `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE DESENVOLVIMENTO WEB E TECNOLOGIA

Nº [NUMERO_DO_CONTRATO]
Data: [DATA]

Pelo presente instrumento particular de contrato de prestação de serviços, fazem as partes a seguir qualificadas:

CONTRATADA:
Razão Social: HB Studio Dev
Nome fantasia: HB Studio Dev
CNPJ: 65.001.925/0001-00
Endereço: Rua Seis, nº 1.170, Nova Colina, Colina - SP
E-mail: [EMAIL_CONTRATADA]
Telefone: (17) 99265-1033
Representante legal: Henrique Buzeto Vieira

CONTRATANTE:
Nome completo / Razão Social: [NOME_RAZAO_CONTRATANTE]
CPF ou CNPJ: [CPF_CNPJ_CONTRATANTE]
Endereço completo: [ENDERECO_CONTRATANTE]
Cidade / Estado: [CIDADE_ESTADO_CONTRATANTE]
E-mail: [EMAIL_CONTRATANTE]
Telefone: [TELEFONE_CONTRATANTE]
Representante legal: [REPRESENTANTE_LEGAL_CONTRATANTE]

As partes acima qualificadas têm entre si justos e contratados o que se segue:

CLÁUSULA 1ª – DO OBJETO

1.1. O presente contrato tem por objeto a prestação de serviços de desenvolvimento web, tecnologia da informação e atividades correlatas, conforme especificação do projeto descrito no Anexo I (Escopo do Projeto), que passa a fazer parte integrante do contrato.

1.2. Os serviços poderão compreender, conforme escopo acordado, uma ou mais das seguintes atividades: desenvolvimento de site institucional; landing page; e-commerce; sistema web; backend (incluindo Supabase/PostgreSQL ou equivalentes); integração com APIs; configuração de hospedagem; manutenção mensal; SEO básico; design UI/UX; e demais itens descritos no Anexo I.

1.3. Tecnologias e ferramentas: as tecnologias utilizadas (ex.: React, Next.js, Node.js, Supabase, PostgreSQL, etc.), funcionalidades inclusas, quantidade de páginas, número de revisões e itens expressamente não inclusos constarão do Anexo I.

1.4. Alterações de escopo: qualquer alteração no escopo, prazos ou valores deverá ser formalizada por aditivo contratual, sob pena de não obrigar a CONTRATADA.

CLÁUSULA 2ª – DO PRAZO DE ENTREGA

2.1. Data de início da execução: [DATA_INICIO].

2.2. Prazo estimado para conclusão: [PRAZO_ESTIMADO] (ex.: 30 dias úteis a contar da data de início), observada a dependência do envio tempestivo de materiais, conteúdos, acessos e aprovações pelo CONTRATANTE.

2.3. Prorrogação: o prazo poderá ser prorrogado por escrito (e-mail ou termo aditivo) em caso de: (a) atraso no envio de materiais pelo CONTRATANTE; (b) necessidade de alterações de escopo; (c) caso fortuito ou força maior. A CONTRATADA comunicará eventuais impactos no prazo com antecedência razoável.

2.4. Penalidades por atraso: (a) Em caso de atraso imputável à CONTRATADA, além da obrigação de concluir o serviço, poderá ser aplicada multa de até [X]% sobre o valor do projeto, conforme critérios previamente acordados por escrito. (b) Em caso de atraso do CONTRATANTE no fornecimento de materiais ou aprovações, os prazos serão automaticamente prorrogados na medida do atraso, sem obrigação de indenização da CONTRATADA.

CLÁUSULA 3ª – DO VALOR E FORMA DE PAGAMENTO

3.1. Valor total do projeto: [VALOR_TOTAL] ([VALOR_EXTENSO]).

3.2. Condições de pagamento:
(a) Entrada de [PERCENTUAL_ENTRADA]% no valor de [VALOR_ENTRADA], no ato da assinatura ou conforme combinado;
(b) Saldo parcelado em [NUMERO_PARCELAS]x de [VALOR_PARCELA], vencendo em [DIA_VENCIMENTO] de cada mês, ou conforme cronograma do Anexo I;
(c) Forma de pagamento: [PIX / transferência bancária / boleto / cartão de crédito], conforme instruções a serem fornecidas pela CONTRATADA.

3.3. Pagamento recorrente (quando aplicável – manutenção mensal): no caso de planos de manutenção, suporte ou hospedagem mensal, o valor de [VALOR_MENSALIDADE] será devido mensalmente, com vencimento no dia [DIA_VENCIMENTO]. O que está incluso (backup, suporte, atualizações, hospedagem etc.) constará do Anexo I ou de proposta em anexo.

3.4. Multa e juros por atraso no pagamento: em caso de inadimplência, aplicar-se-ão multa de 2% (dois por cento) sobre o valor em atraso e juros de 1% (um por cento) ao mês, calculados pro rata die.

3.5. Fidelidade mínima (quando aplicável): na hipótese de plano com fidelidade de [6/12] meses, o cancelamento antecipado sujeitará o CONTRATANTE ao pagamento das parcelas restantes ou à multa contratada, conforme Anexo I.

CLÁUSULA 4ª – DA INADIMPLÊNCIA

4.1. Considera-se inadimplente o CONTRATANTE que deixar de pagar qualquer valor no prazo acordado.

4.2. Consequências: (a) aplicação de multa e juros conforme cláusula anterior; (b) após [X] dias de atraso, a CONTRATADA poderá suspender o acesso, a hospedagem ou a disponibilização do projeto até a regularização; (c) após [X] dias de atraso, a CONTRATADA poderá excluir o projeto dos servidores e encerrar os serviços, sem prejuízo da cobrança dos valores devidos; (d) a CONTRATADA reserva-se o direito de promover cobrança judicial e de incluir o débito em órgãos de proteção ao crédito, quando aplicável.

CLÁUSULA 5ª – DOS DIREITOS AUTORAIS E PROPRIEDADE INTELECTUAL

5.1. O código-fonte e os demais entregáveis do projeto serão de propriedade do CONTRATANTE somente após a quitação integral dos valores contratados. Até lá, a CONTRATADA manterá a propriedade sobre o código e os arquivos desenvolvidos, podendo reter a entrega do código-fonte até o pagamento total.

5.2. A CONTRATADA poderá utilizar o projeto (screenshots, link, descrição) em seu portfólio, site e materiais de divulgação, salvo restrição expressa e por escrito do CONTRATANTE.

5.3. É vedada ao CONTRATANTE a revenda, redistribuição ou licenciamento do projeto a terceiros sem autorização prévia e por escrito da CONTRATADA, no que se refere a componentes, bibliotecas ou soluções proprietárias da CONTRATADA.

5.4. Imagens, ícones, fontes e plugins de terceiros: o CONTRATANTE é responsável por fornecer conteúdos com licenças adequadas ou por autorizar a CONTRATADA a utilizar recursos licenciados, cujo custo de licenças poderá ser repassado conforme combinado. A CONTRATADA não se responsabiliza por violação de direitos de terceiros decorrentes de materiais fornecidos pelo CONTRATANTE.

CLÁUSULA 6ª – DAS RESPONSABILIDADES DA CONTRATADA

6.1. Compete à CONTRATADA: (a) executar os serviços conforme escopo e especificações acordados; (b) entregar o projeto nos prazos ajustados, observadas as dependências do CONTRATANTE; (c) garantir o funcionamento técnico dos itens previstos no escopo; (d) corrigir bugs e defeitos de implementação por um período de [X] dias após a entrega final, desde que não decorrentes de alterações feitas por terceiros ou pelo CONTRATANTE fora do escopo.

6.2. A CONTRATADA não se obriga a: (a) implementar funcionalidades ou alterações não previstas no escopo sem aditivo; (b) garantir resultados de SEO (posicionamento em buscadores) além das boas práticas técnicas contratadas; (c) responder por falhas de terceiros (hospedagem, APIs externas, domínio) salvo quando a contratação e gestão forem de sua responsabilidade expressa.

CLÁUSULA 7ª – DAS RESPONSABILIDADES DO CONTRATANTE

7.1. Compete ao CONTRATANTE: (a) fornecer conteúdos (textos, imagens, acessos, credenciais) no prazo e formato combinados; (b) responder a solicitações e aprovar etapas em tempo razoável; (c) efetuar os pagamentos nas datas acordadas; (d) informar dados e documentos necessários à execução do contrato de forma verdadeira e atualizada.

7.2. O atraso no cumprimento das obrigações do CONTRATANTE (fornecimento de conteúdo, aprovações, pagamentos) poderá resultar em prorrogação de prazos e, quando aplicável, em suspensão dos serviços até a regularização.

CLÁUSULA 8ª – DO SUPORTE E MANUTENÇÃO

8.1. O suporte pós-entrega, quando incluído no escopo ou em plano à parte, será prestado nos termos do Anexo I ou de proposta em anexo, incluindo tempo de resposta, horário de atendimento e canais de contato.

8.2. Considera-se suporte: correção de bugs, dúvidas de uso e pequenos ajustes dentro do escopo original. Considera-se novo projeto ou escopo adicional (e, portanto, sujeito a nova proposta e cobrança): novas funcionalidades, refatoração significativa, migrações, redesign fora do combinado e demais serviços não previstos no contrato ou no Anexo I.

CLÁUSULA 9ª – DA RESCISÃO CONTRATUAL

9.1. Qualquer das partes poderá rescindir o contrato mediante aviso prévio por escrito (e-mail com confirmação de leitura ou notificação extrajudicial), com antecedência mínima de [X] dias.

9.2. Rescisão antecipada pelo CONTRATANTE: em caso de desistência ou rescisão antes da conclusão, o CONTRATANTE pagará os serviços já executados e comprovados, além de multa de [X]% sobre o saldo do projeto não executado, salvo acordo em contrário. Não haverá reembolso de valores já pagos relativos a serviços já prestados.

9.3. Rescisão pela CONTRATADA: em caso de inadimplência ou descumprimento grave pelo CONTRATANTE, a CONTRATADA poderá rescindir o contrato, mantendo o direito aos valores já vencidos e às multas e juros aplicáveis. Em caso de rescisão por conveniência da CONTRATADA, será observado aviso prévio e, se aplicável, condições acordadas em aditivo.

9.4. Após a rescisão, a CONTRATADA poderá, a seu critério e nos prazos que definir, retirar o projeto do ar (hospedagem/serviços sob sua gestão), sem obrigação de manter disponibilidade após o término do vínculo, salvo acordo em contrário.

CLÁUSULA 10ª – DA CONFIDENCIALIDADE E PROTEÇÃO DE DADOS

10.1. As partes comprometem-se a manter sigilo sobre informações confidenciais e dados comerciais a que tiverem acesso em razão do contrato.

10.2. O tratamento de dados pessoais realizar-se-á em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), sendo cada parte responsável pelo tratamento que realizar no âmbito de suas atribuições. Quando a CONTRATADA atuar como operadora de dados do CONTRATANTE, observará as instruções deste e as medidas de segurança adequadas.

CLÁUSULA 11ª – DISPOSIÇÕES GERAIS E OPCIONAIS

11.1. Fidelidade mínima (quando aplicável): na hipótese de plano com fidelidade de 6 (seis) ou 12 (doze) meses, o cancelamento antecipado sujeitará o CONTRATANTE às condições do Anexo I (pagamento das parcelas restantes ou multa pactuada).

11.2. Reajuste: nos contratos de prestação contínua (manutenção, hospedagem, suporte), o valor poderá ser reajustado anualmente pelo IPCA ou por outro índice acordado, mediante comunicação prévia de pelo menos 30 (trinta) dias.

11.3. Backup e hospedagem: quando a CONTRATADA for responsável por backup e/ou hospedagem, as condições (frequência de backup, retenção, tipo de servidor) constarão do Anexo I ou de proposta em anexo.

11.4. Limitação de responsabilidade: a CONTRATADA não se responsabiliza por danos indiretos, lucros cessantes ou danos emergentes que excedam o valor total pago pelo CONTRATANTE no último ano em relação ao projeto, salvo dolo ou culpa grave.

11.5. Caso fortuito e força maior: as partes não serão responsabilizadas pelo inadimplemento de obrigações quando este decorrer de caso fortuito ou força maior (incluindo desastres naturais, guerras, pandemias, atos de autoridade, falhas generalizadas de rede ou de provedores terceiros), devendo a parte afetada comunicar a outra no prazo razoável e, quando possível, propor alternativas.

11.6. Cláusula de não concorrência (opcional): [Se aplicável, inserir: o CONTRATANTE obriga-se a não contratar, diretamente ou através de terceiros, serviços de desenvolvimento ou manutenção que concorram com os serviços objeto deste contrato, com colaboradores ou com a própria CONTRATADA, pelo prazo de X meses após o término do contrato, na área geográfica de X, sob pena de multa de X.]

CLÁUSULA 12ª – DO FORO

12.1. Fica eleito o foro da comarca de Colina – SP para dirimir quaisquer dúvidas ou litígios oriundos do presente contrato, com renúncia a qualquer outro, por mais privilegiado que seja.

E por estarem assim justos e contratados, assinam o presente instrumento em 2 (duas) vias de igual teor e forma.

_______________________________________________________
Local e data: [CIDADE], [DATA]

CONTRATADA
HB Studio Dev
Henrique Buzeto Vieira
CNPJ 65.001.925/0001-00

_______________________________________________________
Local e data: [CIDADE_CONTRATANTE], [DATA]

CONTRATANTE
[NOME_RAZAO_CONTRATANTE]
[REPRESENTANTE_LEGAL_CONTRATANTE]
CPF/CNPJ: [CPF_CNPJ_CONTRATANTE]
`.trim()

/**
 * Cláusulas resumidas para uso no campo "cláusulas" do formulário (versão curta para PDF simples).
 * O contrato completo pode ser usado como anexo ou em geração de PDF com múltiplas páginas.
 */
export const CLAUSULAS_PADRAO_RESUMIDAS = `
1. OBJETO: Prestação de serviços de desenvolvimento web/tecnologia conforme escopo e Anexo I. Alterações somente por aditivo.
2. PRAZO: Início em [DATA_INICIO]; prazo estimado conforme Anexo I. Prorrogação em caso de atraso do CONTRATANTE no envio de materiais ou por caso fortuito.
3. VALOR E PAGAMENTO: Valor total [VALOR_TOTAL]. Entrada e parcelas conforme Anexo I. Multa de 2% e juros de 1% a.m. por atraso.
4. INADIMPLÊNCIA: Após 15 dias de atraso a CONTRATADA poderá suspender serviços; após 30 dias, excluir o projeto e promover cobrança judicial.
5. PROPRIEDADE INTELECTUAL: Código-fonte e entregáveis serão do CONTRATANTE após quitação integral. A CONTRATADA pode usar o projeto no portfólio. Proibida revenda sem autorização.
6. RESPONSABILIDADES: CONTRATADA – executar conforme escopo, corrigir bugs por 30 dias. CONTRATANTE – fornecer conteúdo, aprovar etapas, pagar em dia.
7. SUPORTE: Conforme Anexo I. Novo escopo ou funcionalidades serão cobrados à parte.
8. RESCISÃO: Rescisão com aviso prévio. Multa por quebra antecipada conforme Anexo I. Sem reembolso de serviços já prestados.
9. CONFIDENCIALIDADE E LGPD: Sigilo e tratamento de dados em conformidade com a LGPD.
10. FORO: Colina – SP.
`.trim()
