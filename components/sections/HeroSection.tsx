import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { containerClass } from "@/components/site/tailwind";
import { heroProofItems, whatsappHref } from "@/data/landing";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100vh-78px)] overflow-hidden scroll-mt-[92px] bg-[#071a2e] pt-[138px] pb-16 text-white max-[680px]:min-h-0 max-[680px]:pt-[112px] max-[680px]:pb-14"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/deal.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 32",
          opacity: 0.64,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(7, 26, 46, 0.88) 0%, rgba(7, 26, 46, 0.76) 42%, rgba(14, 42, 71, 0.48) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: "url('/hero-consultoria.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 54%",
          opacity: 0.11,
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 22%, rgba(184, 216, 243, 0.12), transparent 22%), linear-gradient(180deg, rgba(7, 26, 46, 0.06), rgba(7, 26, 46, 0.18))",
        }}
        aria-hidden="true"
      />

      <div className={`relative ${containerClass} flex min-h-[calc(100vh-250px)] items-center`}>
        <div className="max-w-[820px]">
          <Badge>Consultoria digital em gestão auditável</Badge>

          <h1 className="mt-7 max-w-[800px] text-[clamp(42px,5.6vw,68px)] max-[680px]:text-[clamp(34px,11vw,48px)]">
            Qualidade, PBQP-H e integridade com{" "}
            <span className="text-[#b8d8f3]">processos e evidências.</span>
          </h1>

          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.75] text-white/82 max-[680px]:text-base">
            Organize documentos, responsabilidades e registros para auditorias,
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

          <div className="mt-9 flex max-w-[780px] flex-wrap gap-3">
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
