import type { ReactNode } from "react";

const whatsappHref =
  "https://wa.me/5585999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Z%C3%8ANIT%20e%20quero%20tirar%20uma%20d%C3%BAvida%20sobre%20consultoria%20digital%2C%20PBQP-H%2C%20ISO%209001%20ou%20Programa%20de%20Integridade.";

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#desafios", label: "Desafios" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

const authorityItems = [
  {
    value: "15+",
    label: "anos de experiência do consultor fundador",
  },
  {
    value: "10k+",
    label: "horas em consultorias, auditorias, diagnósticos e implantação",
  },
  {
    value: "100%",
    label: "atendimento digital, remoto e orientado por evidências",
  },
  {
    value: "4",
    label: "frentes de implantação: diagnóstico, estrutura, rotina e verificação",
  },
];

const challenges = [
  {
    title: "Documentos dispersos",
    description:
      "Procedimentos, planilhas e registros ficam espalhados em pastas, e-mails e conversas.",
  },
  {
    title: "Gestão informal",
    description:
      "As rotinas acontecem, mas sem padrão claro, responsável definido ou rastreabilidade.",
  },
  {
    title: "Falta de evidências",
    description:
      "A empresa até executa atividades, mas não consegue comprovar de forma organizada.",
  },
  {
    title: "Risco em auditoria",
    description:
      "Na hora de comprovar integridade, PBQP-H ou ISO 9001, as lacunas aparecem tarde demais.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Programa de Integridade para Licitações",
    description:
      "Políticas, matriz de riscos, canal de integridade, controles, registros e evidências para empresas que precisam demonstrar compliance.",
    tags: ["Integridade", "Compliance", "CGU", "Licitações"],
  },
  {
    number: "02",
    title: "PBQP-H Nível B para Construção Civil",
    description:
      "Implantação enxuta de processos, procedimentos, registros de obra, controle documental e plano de ação para construtoras.",
    tags: ["PBQP-H", "Obras", "Processos", "Evidências"],
  },
  {
    number: "03",
    title: "ISO 9001 para Empresas em Geral",
    description:
      "Organização da gestão da qualidade com responsabilidades, indicadores, auditoria interna, tratamento de não conformidades e melhoria contínua.",
    tags: ["ISO 9001", "SGQ", "Auditoria", "Qualidade"],
  },
];

const segments = [
  "Construção civil",
  "Indústria",
  "Logística",
  "Energia/eólica",
  "Guindastes",
  "Alimentos",
  "Serviços",
  "Outros segmentos",
];

const methodSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Leitura inicial da empresa, requisitos aplicáveis, urgências, riscos e nível de maturidade.",
  },
  {
    step: "02",
    title: "Estruturação",
    description:
      "Definição de processos, documentos, controles, responsáveis e plano de ação.",
  },
  {
    step: "03",
    title: "Implantação",
    description:
      "Acompanhamento digital, reuniões objetivas, materiais didáticos e treinamento da equipe quando necessário.",
  },
  {
    step: "04",
    title: "Evidências e verificação",
    description:
      "Organização de registros, revisão de lacunas e preparação para auditoria, certificação ou licitação.",
  },
];

function Badge({
  children,
  tone = "light",
}: Readonly<{ children: ReactNode; tone?: "light" | "dark" }>) {
  const className =
    tone === "dark"
      ? "inline-flex w-fit rounded-full border border-[var(--cinza-borda)] bg-[var(--azul-claro)] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-[var(--azul)]"
      : "inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white";

  return <span className={className}>{children}</span>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}>) {
  return (
    <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
      <Badge tone={inverted ? "light" : "dark"}>{eyebrow}</Badge>
      <h2
        className={`mt-4 text-[clamp(1.875rem,4vw,2.875rem)] font-extrabold leading-[1.12] tracking-normal ${
          inverted ? "text-white" : "text-[var(--texto)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-[1.03rem] leading-8 ${
          inverted ? "text-white/75" : "text-[var(--texto-sec)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--branco)] text-[var(--texto)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(7,26,46,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-[min(1160px,calc(100%_-_40px))] items-center justify-between gap-5">
          <a
            href="#inicio"
            aria-label="ZÊNIT Consult"
            className="flex min-w-max items-center gap-3 text-white"
          >
            <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(58,110,165,0.58))] text-lg font-extrabold shadow-[0_14px_30px_rgba(58,110,165,0.24)]">
              Z
            </span>
            <span>
              <strong className="block text-lg font-extrabold uppercase leading-none tracking-[0.04em]">
                ZÊNIT
              </strong>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-white/70">
                Consult
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 text-sm font-semibold text-white/80 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--verde)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--verde-escuro)]"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative min-h-screen scroll-mt-[92px] bg-[radial-gradient(circle_at_78%_16%,rgba(73,131,188,0.30),transparent_34%),linear-gradient(135deg,rgba(7,26,46,0.98),rgba(14,42,71,0.92)),var(--azul-profundo)] px-5 pb-20 pt-36 text-white md:pb-24 md:pt-40"
      >
        <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
          <div>
            <Badge>Consultoria digital em gestão auditável</Badge>
            <h1 className="mt-6 max-w-[780px] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.08] tracking-normal">
              Qualidade, PBQP-H e integridade com método, documentos e
              evidências.
            </h1>
            <p className="mt-6 max-w-[670px] text-lg leading-8 text-white/80">
              A ZÊNIT Consult ajuda empresas a organizar processos, controles e
              registros para ISO 9001, PBQP-H, Programa de Integridade,
              auditorias e exigências de mercado, com atendimento digital e
              implantação assistida.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#diagnostico"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--branco)] px-6 py-3 text-center text-sm font-extrabold text-[var(--azul)] shadow-[0_14px_30px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5 hover:bg-[var(--azul-claro)]"
              >
                Solicitar diagnóstico
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--verde)] px-6 py-3 text-center text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(37,211,102,0.20)] transition hover:-translate-y-0.5 hover:bg-[var(--verde-escuro)]"
              >
                Tirar dúvida pelo WhatsApp
              </a>
              <a
                href="#metodologia"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-center text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Conhecer metodologia
              </a>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {["Programa de Integridade", "PBQP-H Nível B", "ISO 9001"].map(
                (item) => (
                  <div
                    key={item}
                    className="min-h-[108px] rounded-[18px] border border-white/15 bg-white/[0.08] p-5"
                  >
                    <strong className="block text-base">{item}</strong>
                    <span className="mt-2 block text-sm leading-6 text-white/70">
                      Implantação assistida com foco em rotina, documentos e
                      evidências.
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <aside
            aria-label="Resumo visual de gestão auditável"
            className="rounded-[26px] border border-white/15 bg-white/10 p-5 shadow-[0_18px_46px_rgba(7,26,46,0.22)]"
          >
            <div className="rounded-[20px] bg-[rgba(255,255,255,0.96)] p-6 text-[var(--texto)]">
              <div className="flex items-start justify-between gap-4 border-b border-[var(--cinza-borda)] pb-5">
                <div>
                  <strong className="block text-lg">Gestão auditável</strong>
                  <span className="mt-1 block text-sm leading-6 text-[var(--texto-sec)]">
                    Documentos, ações e evidências no centro da implantação
                  </span>
                </div>
                <span className="h-fit rounded-full bg-[#e6f7ed] px-3 py-1.5 text-xs font-extrabold text-[#13783a]">
                  MVP digital
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ["01", "Diagnóstico", "Leitura inicial da maturidade e dos riscos", "priorizar"],
                  ["02", "Estrutura", "Processos, documentos e responsáveis", "organizar"],
                  ["03", "Evidências", "Registros para auditoria, licitação e gestão", "provar"],
                ].map(([number, title, description, action]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[34px_1fr] gap-3 rounded-[14px] border border-[#e4eaf1] bg-[#f7f9fb] p-4 sm:grid-cols-[34px_1fr_auto] sm:items-center"
                  >
                    <b className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[var(--azul)] text-xs text-white">
                      {number}
                    </b>
                    <span>
                      <strong className="block text-sm">{title}</strong>
                      <small className="text-[var(--texto-sec)]">{description}</small>
                    </span>
                    <em className="col-start-2 text-xs font-extrabold not-italic text-[var(--azul-medio)] sm:col-start-auto">
                      {action}
                    </em>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[var(--azul)] px-5 py-9 text-white">
        <div className="mx-auto grid max-w-[1160px] gap-5 md:grid-cols-4">
          {authorityItems.map((item) => (
            <article
              key={item.value}
              className="rounded-[18px] border border-white/[0.14] bg-white/[0.08] p-5"
            >
              <strong className="block text-4xl font-extrabold leading-none">
                {item.value}
              </strong>
              <span className="mt-3 block text-sm leading-6 text-white/75">
                {item.label}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="desafios" className="scroll-mt-[92px] bg-[var(--cinza-claro)] px-5 py-[5.5rem] md:py-24">
        <div className="mx-auto max-w-[1160px]">
          <SectionHeading
            eyebrow="Desafios"
            title="O problema não é só ter documentos. É conseguir comprovar a gestão."
            description="Empresas pequenas e médias costumam operar com conhecimento espalhado, controles informais e evidências difíceis de encontrar quando surge uma auditoria, certificação ou licitação."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="min-h-[220px] rounded-[20px] border border-[var(--cinza-borda)] bg-[var(--branco)] p-6 shadow-[0_12px_30px_rgba(7,26,46,0.08)]"
              >
                <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] bg-[var(--azul-claro)] text-sm font-extrabold text-[var(--azul)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[19px] font-extrabold leading-tight">
                  {challenge.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--texto-sec)]">
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="scroll-mt-[92px] bg-[var(--branco)] px-5 py-[5.5rem] md:py-24">
        <div className="mx-auto max-w-[1160px]">
          <SectionHeading
            eyebrow="Soluções"
            title="Três frentes principais para organizar, implantar e comprovar."
            description="A consultoria é digital, objetiva e ajustada à realidade da empresa. O foco é criar uma base auditável sem transformar a implantação em um projeto pesado."
          />

          <div className="grid items-stretch gap-[18px] lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="relative flex min-h-[350px] flex-col overflow-hidden rounded-[20px] border border-[var(--cinza-borda)] bg-[var(--branco)] p-7 shadow-[0_12px_30px_rgba(7,26,46,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(7,26,46,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-[5px] bg-[var(--azul)]" />
                <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[var(--azul)] text-sm font-extrabold text-white">
                  {solution.number}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight">
                  {solution.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-[var(--texto-sec)]">
                  {solution.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--azul-claro)] px-3 py-1.5 text-xs font-extrabold text-[var(--azul)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 rounded-[20px] bg-[var(--azul)] p-6 text-white shadow-[0_18px_46px_rgba(7,26,46,0.14)] md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">
                Apoios sob demanda
              </h3>
              <p className="mt-2 max-w-3xl leading-7 text-white/75">
                Auditoria interna, materiais didáticos, treinamento da equipe e
                soluções digitais simples para acompanhar documentos, ações e
                evidências quando fizer sentido no diagnóstico.
              </p>
            </div>
            <a
              href="#diagnostico"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--branco)] px-6 py-3 text-center text-sm font-extrabold text-[var(--azul)] transition hover:bg-[var(--azul-claro)]"
            >
              Avaliar necessidade
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cinza-claro)] px-5 py-14">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-6 rounded-[20px] border border-[var(--cinza-borda)] bg-[var(--branco)] p-6 shadow-[0_12px_30px_rgba(7,26,46,0.08)] lg:grid-cols-[0.48fr_1fr] lg:items-center">
            <div>
              <Badge tone="dark">Segmentos atendidos</Badge>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[var(--texto)]">
                Experiência em diferentes operações e níveis de maturidade.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {segments.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-[var(--cinza-borda)] bg-[#f7f9fb] px-4 py-2 text-sm font-extrabold text-[var(--azul-medio)]"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="metodologia"
        className="scroll-mt-[92px] bg-[var(--azul-profundo)] px-5 py-[5.5rem] text-white md:py-24"
      >
        <div className="mx-auto max-w-[1160px]">
          <SectionHeading
            eyebrow="Metodologia"
            title="Uma jornada simples para sair da informalidade e chegar à evidência."
            description="A metodologia mostra o caminho de implantação sem expor complexidade técnica desnecessária. O cliente entende etapas, responsabilidades e próximos passos."
            inverted
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((item) => (
              <article
                key={item.step}
                className="min-h-[230px] rounded-[20px] border border-white/15 bg-white/[0.08] p-6"
              >
                <span className="text-sm font-extrabold text-[#b8d8f3]">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-extrabold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-white/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="scroll-mt-[92px] bg-[var(--cinza-claro)] px-5 py-[5.5rem] md:py-24">
        <div className="mx-auto grid max-w-[1160px] items-start gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[24px] bg-[var(--azul)] p-8 text-white shadow-[0_18px_46px_rgba(7,26,46,0.14)]">
            <Badge>Diagnóstico inicial</Badge>
            <h2 className="mt-4 text-[clamp(1.875rem,4vw,2.625rem)] font-extrabold leading-[1.12]">
              Quer saber por onde começar?
            </h2>
            <p className="mt-4 leading-8 text-white/75">
              Envie os dados essenciais para uma primeira leitura da
              necessidade. Se preferir, fale direto pelo WhatsApp e explique o
              contexto em poucas mensagens.
            </p>

            <div className="my-6 grid gap-3">
              {[
                ["Base", "Fortaleza · Ceará"],
                ["Atendimento", "Digital, remoto e consultivo"],
                ["Foco", "Integridade, PBQP-H, ISO 9001, auditoria e gestão auditável"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.12] bg-white/[0.08] p-4"
                >
                  <strong className="block">{title}</strong>
                  <span className="text-sm leading-6 text-white/75">{text}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] w-full items-center justify-center rounded-full bg-[var(--verde)] px-6 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[var(--verde-escuro)] sm:w-auto"
            >
              Tirar dúvida pelo WhatsApp
            </a>
          </aside>

          <form
            action="mailto:contato@zenitconsult.com.br"
            method="post"
            encType="text/plain"
            className="rounded-[24px] border border-[var(--cinza-borda)] bg-[var(--branco)] p-7 text-[var(--texto)] shadow-[0_18px_46px_rgba(7,26,46,0.14)]"
          >
            <h3 className="text-2xl font-extrabold leading-tight md:text-[1.625rem]">
              Solicitar diagnóstico inicial
            </h3>
            <p className="mt-2 leading-7 text-[var(--texto-sec)]">
              Formulário enxuto para gerar o primeiro contato comercial e
              direcionar a solução mais adequada.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                Nome
                <input
                  required
                  name="nome"
                  placeholder="Seu nome"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                Empresa
                <input
                  required
                  name="empresa"
                  placeholder="Nome da empresa"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                WhatsApp
                <input
                  required
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                E-mail opcional
                <input
                  type="email"
                  name="email"
                  placeholder="seuemail@empresa.com.br"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                Segmento
                <select
                  required
                  name="segmento"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Construção civil</option>
                  <option>Empresa que participa de licitações</option>
                  <option>Serviços</option>
                  <option>Indústria</option>
                  <option>Logística</option>
                  <option>Energia/eólica</option>
                  <option>Outro</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)]">
                Principal necessidade
                <select
                  required
                  name="necessidade"
                  className="min-h-[48px] rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Programa de Integridade e Compliance</option>
                  <option>PBQP-H</option>
                  <option>ISO 9001</option>
                  <option>Auditoria interna</option>
                  <option>Treinamento dentro da implantação</option>
                  <option>Soluções digitais sob demanda</option>
                  <option>Ainda não sei</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-extrabold text-[var(--texto)] md:col-span-2">
                Mensagem curta
                <textarea
                  name="mensagem"
                  placeholder="Conte brevemente o que sua empresa precisa resolver."
                  className="min-h-32 rounded-[14px] border border-[var(--cinza-borda)] bg-[#fbfcfe] px-4 py-3 font-normal text-[var(--texto)] outline-none transition focus:border-[var(--azul-medio)] focus:ring-4 focus:ring-[var(--azul-claro)]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[var(--azul)] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[var(--azul-medio)]"
              >
                Enviar solicitação
              </button>
              <span className="text-sm leading-6 text-[var(--texto-sec)]">
                Formulário temporário via e-mail até conexão com CRM ou
                WhatsApp real.
              </span>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[var(--azul-profundo)] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <strong className="block text-lg font-extrabold uppercase tracking-[0.08em]">
              ZÊNIT Consult
            </strong>
            <p className="mt-4 max-w-md leading-7 text-white/70">
              Consultoria digital em gestão auditável, qualidade, PBQP-H, ISO
              9001 e Programa de Integridade.
            </p>
            <p className="mt-3 text-white/70">
              Fortaleza / Ceará · Atendimento digital e remoto.
            </p>
          </div>
          <div>
            <h4 className="font-extrabold">Navegação</h4>
            <div className="mt-3 grid gap-2 text-white/70">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-extrabold">Contato</h4>
            <div className="mt-3 grid gap-2 text-white/70">
              <a
                href="mailto:contato@zenitconsult.com.br"
                className="hover:text-white"
              >
                contato@zenitconsult.com.br
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
