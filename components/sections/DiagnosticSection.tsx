import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import {
  diagnosticFacts,
  needOptions,
  segmentOptions,
  whatsappHref,
} from "@/data/landing";

export function DiagnosticSection() {
  return (
    <section id="diagnostico" className="zenit-section zenit-section--light">
      <div className="zenit-container zenit-diagnostic">
        <aside className="zenit-diagnostic__aside">
          <Badge>Diagnóstico inicial</Badge>
          <h2>Quer saber por onde começar?</h2>
          <p>
            Envie os dados essenciais para uma primeira leitura da necessidade.
            Se preferir, fale direto pelo WhatsApp e explique o contexto em
            poucas mensagens.
          </p>

          <div className="zenit-diagnostic__facts">
            {diagnosticFacts.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <ButtonLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            Tirar dúvida pelo WhatsApp
          </ButtonLink>
        </aside>

        <form
          action="mailto:contato@zenitconsult.com.br"
          method="post"
          encType="text/plain"
          className="zenit-form"
        >
          <h3>Solicitar diagnóstico inicial</h3>
          <p>
            Formulário enxuto para gerar o primeiro contato comercial e
            direcionar a solução mais adequada.
          </p>

          <div className="zenit-form__grid">
            <label>
              Nome
              <input required name="nome" placeholder="Seu nome" />
            </label>
            <label>
              Empresa
              <input required name="empresa" placeholder="Nome da empresa" />
            </label>
            <label>
              WhatsApp
              <input required name="whatsapp" placeholder="(00) 00000-0000" />
            </label>
            <label>
              E-mail opcional
              <input
                type="email"
                name="email"
                placeholder="seuemail@empresa.com.br"
              />
            </label>
            <label>
              Segmento
              <select required name="segmento" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {segmentOptions.map((segment) => (
                  <option key={segment}>{segment}</option>
                ))}
              </select>
            </label>
            <label>
              Principal necessidade
              <select required name="necessidade" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {needOptions.map((need) => (
                  <option key={need}>{need}</option>
                ))}
              </select>
            </label>
            <label className="zenit-form__full">
              Mensagem curta
              <textarea
                name="mensagem"
                placeholder="Conte brevemente o que sua empresa precisa resolver."
              />
            </label>
          </div>

          <div className="zenit-form__actions">
            <button type="submit" className="zenit-button zenit-button--dark">
              Enviar solicitação
            </button>
            <span>
              Formulário temporário via e-mail até conexão com CRM ou WhatsApp
              real.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
