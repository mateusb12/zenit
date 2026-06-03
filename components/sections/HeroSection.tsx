import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { containerClass } from "@/components/site/tailwind";
import { heroProofItems, whatsappHref } from "@/data/landing";

export function HeroSection() {
  const backgroundImage =
    "linear-gradient(90deg, rgba(7, 26, 46, 0.96) 0%, rgba(7, 26, 46, 0.9) 42%, rgba(14, 42, 71, 0.58) 100%), url('hero-consultoria.svg')";

  return (
    <section
      id="inicio"
      className="min-h-screen scroll-mt-[92px] bg-[#071a2e] bg-cover bg-center pt-[150px] pb-20 text-white max-[680px]:min-h-0 max-[680px]:pt-[118px] max-[680px]:pb-16"
      style={{ backgroundImage }}
    >
      <div className={`${containerClass} flex min-h-[calc(100vh-230px)] items-center`}>
        <div className="max-w-[850px]">
          <Badge>Consultoria digital em gestão auditável</Badge>

          <h1 className="mt-7 max-w-[820px] text-[clamp(44px,6.6vw,78px)] max-[680px]:text-[clamp(36px,12vw,52px)]">
            Consultoria especializada em qualidade, PBQP-H e integridade.
          </h1>

          <p className="mt-6 max-w-[720px] text-[19px] leading-[1.75] text-white/80 max-[680px]:text-base">
            Organize processos, documentos e evidências para auditorias,
            certificações e licitações com uma implantação digital, objetiva e
            acompanhada por especialistas.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 max-[680px]:flex-col max-[680px]:items-stretch">
            <ButtonLink href="#diagnostico">Solicitar diagnóstico</ButtonLink>
            <ButtonLink
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-10 flex max-w-[760px] flex-wrap gap-3">
            {heroProofItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-white/90 backdrop-blur"
              >
                {item}
              </span>
            ))}
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-white/90 backdrop-blur">
              Atendimento digital e remoto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
