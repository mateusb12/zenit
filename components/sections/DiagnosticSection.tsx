import { Badge } from "@/components/site/Badge";
import { ButtonLink } from "@/components/site/ButtonLink";
import { containerClass, sectionClass } from "@/components/site/tailwind";
import {
  diagnosticFacts,
  needOptions,
  segmentOptions,
  whatsappHref,
} from "@/data/landing";

export function DiagnosticSection() {
  const fieldClass =
    "min-h-12 w-full rounded-[14px] border border-[#d9dee5] bg-[#fbfcfe] px-4 py-3 font-normal text-[#111111] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#7a8491] focus:border-[#17456e] focus:shadow-[0_0_0_4px_#e9f1f8]";
  const labelClass = "grid gap-2 text-sm font-extrabold text-[#111111]";

  return (
    <section id="diagnostico" className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={`${containerClass} grid grid-cols-[0.9fr_1.1fr] items-start gap-7 max-[980px]:grid-cols-1`}>
        <aside className="rounded-3xl bg-[#0e2a47] p-8 text-white shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:p-[22px]">
          <Badge>Diagnóstico inicial</Badge>
          <h2 className="mt-4 text-[clamp(30px,4vw,42px)]">
            Quer saber por onde começar?
          </h2>
          <p className="mt-4 leading-[1.8] text-white/75">
            Envie os dados essenciais para uma primeira leitura da necessidade.
            Se preferir, fale direto pelo WhatsApp e explique o contexto em
            poucas mensagens.
          </p>

          <div className="my-6 grid gap-3">
            {diagnosticFacts.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.08] p-4"
              >
                <strong className="block">{title}</strong>
                <span className="text-sm leading-[1.55] text-white/75">
                  {text}
                </span>
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
          className="rounded-3xl border border-[#d9dee5] bg-white p-7 text-[#111111] shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:p-[22px]"
        >
          <h3 className="text-[26px] text-[#0e2a47]">
            Solicitar diagnóstico inicial
          </h3>
          <p className="mt-2 leading-[1.75] text-[#4b5563]">
            Formulário enxuto para gerar o primeiro contato comercial e
            direcionar a solução mais adequada.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 max-[680px]:grid-cols-1">
            <label className={labelClass}>
              Nome
              <input
                required
                name="nome"
                placeholder="Seu nome"
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              Empresa
              <input
                required
                name="empresa"
                placeholder="Nome da empresa"
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              WhatsApp
              <input
                required
                name="whatsapp"
                placeholder="(00) 00000-0000"
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              E-mail opcional
              <input
                type="email"
                name="email"
                placeholder="seuemail@empresa.com.br"
                className={fieldClass}
              />
            </label>
            <label className={labelClass}>
              Segmento
              <select
                required
                name="segmento"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {segmentOptions.map((segment) => (
                  <option key={segment}>{segment}</option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              Principal necessidade
              <select
                required
                name="necessidade"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Selecione
                </option>
                {needOptions.map((need) => (
                  <option key={need}>{need}</option>
                ))}
              </select>
            </label>
            <label className={`${labelClass} col-span-full`}>
              Mensagem curta
              <textarea
                name="mensagem"
                placeholder="Conte brevemente o que sua empresa precisa resolver."
                className={`${fieldClass} min-h-32 resize-y`}
              />
            </label>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 max-[680px]:flex-col max-[680px]:items-stretch">
            <button
              type="submit"
              className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-[#0e2a47] px-5 py-3 text-center text-sm font-extrabold leading-[1.2] text-white shadow-[0_14px_30px_rgba(14,42,71,0.18)] transition-[transform,box-shadow,background,color] duration-200 hover:-translate-y-0.5 hover:bg-[#17456e] max-[680px]:w-full"
            >
              Enviar solicitação
            </button>
            <span className="text-sm leading-[1.55] text-[#4b5563]">
              Formulário temporário via e-mail até conexão com CRM ou WhatsApp
              real.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
