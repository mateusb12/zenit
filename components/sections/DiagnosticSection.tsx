"use client";

import { useMemo, useState } from "react";

import { Badge } from "@/components/site/Badge";
import { containerClass, sectionClass } from "@/components/site/tailwind";
import { diagnosticFacts, needOptions, whatsappHref } from "@/data/landing";

const fieldClass =
  "min-h-12 w-full rounded-[14px] border border-[#bcc8d8] bg-white px-4 py-3 font-normal text-[#111111] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#7a8491] focus:border-[#17456e] focus:bg-white focus:shadow-[0_0_0_4px_rgba(23,69,110,0.10)]";
const labelClass = "grid gap-2 text-sm font-extrabold text-[#111111]";
const defaultNeed = needOptions[0] ?? "PBQP-H";

function buildDiagnosticMessage(name: string, company: string, need: string) {
  const cleanName = name.trim();
  const cleanCompany = company.trim();
  const cleanNeed = need.trim() || "um diagnóstico inicial";

  if (cleanName && cleanCompany) {
    return `Olá, sou ${cleanName}, da ${cleanCompany}. Vim pelo site da ZÊNIT e gostaria de entender como vocês podem ajudar com ${cleanNeed}.`;
  }

  if (cleanName) {
    return `Olá, sou ${cleanName}. Vim pelo site da ZÊNIT e gostaria de entender como vocês podem ajudar com ${cleanNeed}.`;
  }

  if (cleanCompany) {
    return `Olá, sou da ${cleanCompany}. Vim pelo site da ZÊNIT e gostaria de entender como vocês podem ajudar com ${cleanNeed}.`;
  }

  return `Olá! Vim pelo site da ZÊNIT e gostaria de entender como vocês podem ajudar com ${cleanNeed}.`;
}

function buildWhatsappHref(message: string) {
  const url = new URL(whatsappHref);
  url.searchParams.set("text", message);
  return url.toString();
}

export function DiagnosticSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState(defaultNeed);
  const [messageOverride, setMessageOverride] = useState<string | null>(null);

  const generatedMessage = useMemo(
    () => buildDiagnosticMessage(name, company, need),
    [name, company, need],
  );
  const message = messageOverride ?? generatedMessage;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const finalMessage = message.trim() || generatedMessage;

    window.open(
      buildWhatsappHref(finalMessage),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="diagnostico" className={`${sectionClass} bg-[#f5f7fa]`}>
      <div
        className={`${containerClass} grid grid-cols-[0.9fr_1.1fr] items-stretch gap-7 max-[980px]:grid-cols-1`}
      >
        <aside className="h-full rounded-3xl bg-[#0e2a47] p-8 text-white shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:p-[22px]">
          <Badge>Diagnóstico inicial</Badge>

          <h2 className="mt-4 text-[clamp(30px,4vw,42px)]">
            Quer saber por onde começar?
          </h2>

          <p className="mt-4 leading-[1.8] text-white/75">
            Preencha uma mensagem pronta para iniciar a conversa pelo WhatsApp.
            A ideia é reduzir atrito e já direcionar o primeiro contato.
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

          <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4">
            <span className="block text-sm font-extrabold text-white/78">
              Prefere contato direto?
            </span>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="whatsapp_click"
              data-analytics-location="diagnostic"
              data-analytics-label="Falar pelo WhatsApp"
              className="mt-3 inline-flex min-h-[42px] items-center justify-center rounded-[14px] border border-white/18 bg-white/[0.07] px-4 py-2.5 text-sm font-extrabold text-white/86 transition-[transform,background,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </aside>

        <form
          data-analytics-form="diagnostic"
          onSubmit={handleSubmit}
          className="h-full rounded-3xl border border-[#b9c8d8] bg-white p-7 text-[#111111] shadow-[0_26px_70px_rgba(7,26,46,0.18)] ring-1 ring-[#eef2f7] max-[680px]:p-[22px]"
        >
          <h3 className="text-[26px] text-[#0e2a47]">
            Solicitar diagnóstico inicial
          </h3>

          <p className="mt-2 leading-[1.75] text-[#4b5563]">
            Preencha 3 dados rápidos para abrir uma mensagem pronta no
            WhatsApp.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 max-[680px]:grid-cols-1">
            <label className={labelClass}>
              Nome
              <input
                name="nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Seu nome"
                className={fieldClass}
              />
            </label>

            <label className={labelClass}>
              Empresa
              <input
                name="empresa"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Nome da empresa"
                className={fieldClass}
              />
            </label>

            <label className={`${labelClass} col-span-full`}>
              Principal necessidade
              <select
                name="necessidade"
                value={need}
                onChange={(event) => setNeed(event.target.value)}
                className={fieldClass}
              >
                {needOptions.map((needOption) => (
                  <option key={needOption}>{needOption}</option>
                ))}
              </select>
            </label>

            <label className={`${labelClass} col-span-full`}>
              Mensagem pronta
              <textarea
                name="mensagem"
                value={message}
                onChange={(event) => setMessageOverride(event.target.value)}
                className={`${fieldClass} min-h-28 resize-y`}
              />
            </label>
          </div>

          <div className="mt-6 grid gap-2.5">
            <button
              type="submit"
              data-analytics-event="cta_click"
              data-analytics-cta-id="diagnostic_form_submit"
              data-analytics-location="diagnostic"
              data-analytics-label="Abrir conversa no WhatsApp"
              data-analytics-target="whatsapp"
              className="inline-flex min-h-[50px] w-fit min-w-[245px] cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[16px] border border-transparent bg-[#0e2a47] px-6 py-3 text-center text-sm font-extrabold leading-[1.2] text-white shadow-[0_14px_30px_rgba(14,42,71,0.18)] transition-[transform,box-shadow,background,color] duration-200 hover:-translate-y-0.5 hover:bg-[#17456e] max-[680px]:w-full"
            >
              Abrir conversa no WhatsApp
            </button>

            <span className="max-w-[460px] text-sm leading-[1.55] text-[#647184]">
              A mensagem será aberta no WhatsApp e você poderá revisar antes de
              enviar.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
