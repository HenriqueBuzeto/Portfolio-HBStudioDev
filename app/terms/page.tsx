import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site Henrique Buzeto. Regras de utilização do site e dos serviços de desenvolvimento web.',
}

export default function TermsPage() {
  return (
    <article className="pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          Termos de Uso
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceitação</h2>
            <p>
              Ao acessar e utilizar este site, você aceita estes Termos de Uso. Se não concordar, por favor não utilize o site. O responsável pelo site é <strong className="text-foreground">Henrique Buzeto</strong>, prestador de serviços de desenvolvimento web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Uso do site</h2>
            <p>
              O site destina-se a apresentar serviços, portfólio e permitir solicitações de orçamento por meio do formulário de contato. Você se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fornecer informações verdadeiras no formulário de contato</li>
              <li>Não utilizar o site para fins ilícitos ou que prejudiquem terceiros</li>
              <li>Não tentar acessar áreas restritas, interferir no funcionamento do site ou veicular vírus ou códigos maliciosos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo do site (textos, layout, logotipos, imagens, código) é de propriedade do responsável pelo site ou de licenciadores. A reprodução não autorizada, total ou parcial, sem prévia autorização por escrito, é vedada, salvo para uso pessoal e não comercial (por exemplo, visualização no navegador).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Serviços e orçamentos</h2>
            <p>
              O envio do formulário de contato constitui mera solicitação de informação ou orçamento. Nenhum vínculo contratual surge até a formalização de proposta aceita e condições acordadas por escrito. Orçamentos e prazos podem variar conforme o escopo do projeto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Links externos</h2>
            <p>
              O site pode conter links para sites de terceiros (redes sociais, parceiros). Não nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses sites. O acesso a eles é por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Isenção de responsabilidade</h2>
            <p>
              O site é fornecido &quot;como está&quot;. Nos esforçamos para mantê-lo disponível e seguro, mas não garantimos disponibilidade ininterrupta ou ausência de erros. Não nos responsabilizamos por danos indiretos ou consequenciais decorrentes do uso ou da impossibilidade de uso do site, dentro dos limites permitidos pela lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Privacidade</h2>
            <p>
              O tratamento de dados pessoais está descrito na nossa{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              . Ao usar o site e o formulário de contato, você declara ter lido e aceito essa política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Alterações</h2>
            <p>
              Estes termos podem ser alterados a qualquer momento. A data da última atualização será indicada no topo da página. O uso continuado do site após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Lei aplicável e foro</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para a solução de controvérsias, fica eleito o foro da comarca do domicílio do responsável pelo site, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contato</h2>
            <p>
              Dúvidas sobre estes termos:{' '}
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
