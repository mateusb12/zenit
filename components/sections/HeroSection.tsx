import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { containerClass } from "@/components/site/tailwind";
import { heroPanelSteps, heroProofItems, whatsappHref } from "@/data/landing";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="min-h-screen scroll-mt-[92px] bg-[#071a2e] bg-[radial-gradient(circle_at_78%_16%,rgba(73,131,188,0.32),transparent_34%),linear-gradient(135deg,rgba(7,26,46,0.98),rgba(14,42,71,0.92))] py-[150px] pb-[72px] text-white max-[680px]:min-h-0 max-[680px]:pt-[118px] max-[680px]:pb-14"
    >
      <div className={`${containerClass} grid grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] items-center gap-[52px] max-[980px]:grid-cols-1`}>
        <div>
          <Badge>Consultoria digital em gestão auditável</Badge>
          <h1 className="mt-[22px] max-w-[780px] text-[clamp(40px,6vw,72px)] max-[680px]:text-[clamp(34px,11vw,48px)]">
            Qualidade, PBQP-H e integridade com método, documentos e
            evidências.
          </h1>
          <p className="mt-[22px] max-w-[670px] text-lg leading-[1.78] text-white/80">
            A ZÊNIT Consult ajuda empresas a organizar processos, controles e
            registros para ISO 9001, PBQP-H, Programa de Integridade,
            auditorias e exigências de mercado, com atendimento digital e
            implantação assistida.
          </p>

          <div className="mt-[30px] flex flex-wrap gap-3 max-[680px]:flex-col max-[680px]:items-stretch">
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

          <div className="mt-[38px] grid grid-cols-3 gap-3 max-[680px]:grid-cols-1">
            {heroProofItems.map((item) => (
              <div
                key={item}
                className="min-h-[126px] rounded-[18px] border border-white/15 bg-white/[0.08] p-[18px]"
              >
                <strong className="block text-base">{item}</strong>
                <span className="mt-2 block text-[13px] leading-[1.45] text-white/70">
                  Implantação assistida com foco em rotina, documentos e
                  evidências.
                </span>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-label="Resumo visual de gestão auditável"
          className="rounded-[26px] border border-white/15 bg-white/10 p-7 shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:p-[22px]"
        >
          <div className="rounded-[20px] bg-white/95 p-6 text-[#111111]">
            <div className="flex justify-between gap-4 border-b border-[#d9dee5] pb-[18px]">
              <div>
                <strong className="block text-lg">Gestão auditável</strong>
                <span className="mt-1 block text-[13px] leading-normal text-[#4b5563]">
                  Documentos, ações e evidências no centro da implantação
                </span>
              </div>
              <b className="h-fit whitespace-nowrap rounded-full bg-[#e6f7ed] px-3 py-1.5 text-xs text-[#13783a]">
                Implantação digital
              </b>
            </div>

            <div className="mt-5 grid gap-3">
              {heroPanelSteps.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[14px] border border-[#e4eaf1] bg-[#f7f9fb] p-4 max-[680px]:grid-cols-[34px_1fr]"
                >
                  <strong className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#0e2a47] text-xs text-white">
                    {item.number}
                  </strong>
                  <span>
                    <b className="block text-sm text-[#111111]">
                      {item.title}
                    </b>
                    <small className="text-[#4b5563]">{item.description}</small>
                  </span>
                  <em className="text-xs not-italic font-extrabold text-[#17456e] max-[680px]:col-start-2">
                    {item.action}
                  </em>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
