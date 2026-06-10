import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { containerClass } from "@/components/site/tailwind";
import { heroProofItems, whatsappHref } from "@/data/landing";
import { publicAssetPath } from "@/data/siteAssets";

export function HeroSection() { return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden scroll-mt-[92px] bg-[#071a2e] pt-[138px] pb-10 text-white max-[680px]:pt-[112px]"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url('${publicAssetPath("deal.png")}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 32%",
          opacity: 0.58, }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{ backgroundImage:
            "linear-gradient(90deg, rgba(7, 26, 46, 0.84) 0%, rgba(7, 26, 46, 0.7) 42%, rgba(14, 42, 71, 0.38) 100%)", }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 mix-blend-screen"
        style={{ backgroundImage: `url('${publicAssetPath("hero-consultoria.svg")}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
          opacity: 0.04, }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{ backgroundImage:
            "radial-gradient(circle at 75% 22%, rgba(184, 216, 243, 0.1), transparent 24%), linear-gradient(180deg, rgba(7, 26, 46, 0.02), rgba(7, 26, 46, 0.16))", }}
        aria-hidden="true"
      />

      <div className={`relative ${containerClass}`}>
        <div className="flex min-h-[calc(100vh-250px)] items-center py-14 max-[680px]:py-10">
          <div className="max-w-[820px]">
            <Badge>Consultoria digital em gestão auditável</Badge>

            <h1 className="mt-7 max-w-[800px] text-[clamp(42px,5.6vw,68px)] max-[680px]:text-[clamp(34px,11vw,48px)]">
              Consultoria digital para{" "}
              <span className="text-[#b8d8f3]">
                PBQP-H, ISO 9001 e Programa de Integridade.
              </span>
            </h1>

            <p className="mt-6 max-w-[720px] text-[18px] leading-[1.75] text-white/82 max-[680px]:text-base">
              Organizamos processos, documentos e evidências para auditorias,
              certificações, licitações e exigências de clientes.
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

</div>
    </section>
  ); }
