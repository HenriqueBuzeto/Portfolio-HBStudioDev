import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade do site Henrique Buzeto. Como tratamos seus dados ao usar o formulário de contato e navegar no site.',
}

export default function PrivacyPage() {
  return (
    <article className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Quem somos</h2>
            <p>
              Este site é operado por <strong className="text-foreground">Henrique Buzeto</strong>, prestador de serviços de desenvolvimento web (sites, landing pages). Ao acessar o site e utilizar o formulário de contato, você concorda com o tratamento de dados conforme descrito nesta política, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Dados que coletamos</h2>
            <p>
              Coletamos apenas os dados que você nos envia voluntariamente pelo formulário de contato:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome</li>
              <li>E-mail</li>
              <li>Telefone (quando informado)</li>
              <li>Mensagem</li>
            </ul>
            <p>
              Também podemos registrar dados técnicos de acesso (endereço IP, tipo de navegador, páginas visitadas) para fins de segurança e melhoria do site, de forma anônima ou pseudonimizada quando possível.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidade do tratamento</h2>
            <p>
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder às suas solicitações de orçamento e dúvidas</li>
              <li>Prestar os serviços contratados, quando houver</li>
              <li>Garantir a segurança e o funcionamento do site</li>
              <li>Cumprir obrigações legais, quando aplicável</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Base legal (LGPD)</h2>
            <p>
              O tratamento é baseado no seu consentimento (ao enviar o formulário), na execução de contrato ou de medidas pré-contratuais (quando você solicita orçamento) e no legítimo interesse (segurança e melhoria do site).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Compartilhamento</h2>
            <p>
              Não vendemos nem alugamos seus dados. Podemos compartilhá-los apenas com prestadores de serviço essenciais (por exemplo, hospedagem ou e-mail) que processem os dados em nosso nome, com obrigação de confidencialidade e em conformidade com a lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Seus direitos</h2>
            <p>
              Você tem direito a: acesso aos seus dados, correção de dados incompletos ou desatualizados, exclusão (quando não houver dever legal de retenção), portabilidade, revogação do consentimento e informação sobre com quem compartilhamos os dados. Para exercer esses direitos, entre em contato pelo e-mail{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                {contactInfo.email}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Retenção</h2>
            <p>
              Mantemos os dados do formulário de contato pelo tempo necessário para atender sua solicitação e, quando aplicável, para cumprimento de obrigações legais ou contratuais. Dados de acesso (logs) podem ser mantidos por período limitado por razões de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
            <p>
              O site pode utilizar cookies essenciais para funcionamento (por exemplo, preferência de tema claro/escuro). Se forem utilizados cookies de análise ou marketing no futuro, esta política será atualizada e, quando exigido por lei, será solicitado consentimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Alterações</h2>
            <p>
              Esta política pode ser atualizada. A data da última atualização será indicada no topo da página. O uso continuado do site após alterações constitui aceitação da nova versão.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contato</h2>
            <p>
              Dúvidas sobre privacidade ou para exercer seus direitos:{' '}
              <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">
                {contactInfo.email}
              </a>.
            </p>
          </section>
        </div>

        <p className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline font-medium">
            ← Voltar ao início
          </Link>
        </p>
      </div>
    </article>
  )
}
