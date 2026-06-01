import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { heroPanelSteps, heroProofItems, whatsappHref } from "@/data/landing";

export function HeroSection() {
  return (
    <section id="inicio" className="zenit-hero">
      <div className="zenit-container zenit-hero__inner">
        <div className="zenit-hero__content">
          <Badge>Consultoria digital em gestão auditável</Badge>
          <h1 className="zenit-hero__title">
            Qualidade, PBQP-H e integridade com método, documentos e
            evidências.
          </h1>
          <p className="zenit-hero__subtitle">
            A ZÊNIT Consult ajuda empresas a organizar processos, controles e
            registros para ISO 9001, PBQP-H, Programa de Integridade,
            auditorias e exigências de mercado, com atendimento digital e
            implantação assistida.
          </p>

          <div className="zenit-hero__actions">
            <ButtonLink href="#diagnostico">Solicitar diagnóstico</ButtonLink>
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Tirar dúvida pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="#metodologia" variant="ghost">
              Conhecer metodologia
            </ButtonLink>
          </div>

          <div className="zenit-hero__proof">
            {heroProofItems.map((item) => (
              <div key={item} className="zenit-hero-proof-card">
                <strong>{item}</strong>
                <span>
                  Implantação assistida com foco em rotina, documentos e
                  evidências.
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-label="Resumo visual de gestão auditável"
          className="zenit-hero__card"
        >
          <div className="zenit-hero-panel">
            <div className="zenit-hero-panel__top">
              <div>
                <strong>Gestão auditável</strong>
                <span>Documentos, ações e evidências no centro da implantação</span>
              </div>
              <b>Implantação digital</b>
            </div>

            <div className="zenit-hero-panel__list">
              {heroPanelSteps.map((item) => (
                <div key={item.number} className="zenit-hero-panel__item">
                  <strong>{item.number}</strong>
                  <span>
                    <b>{item.title}</b>
                    <small>{item.description}</small>
                  </span>
                  <em>{item.action}</em>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
