import type { ReactNode } from "react";

const whatsappHref =
  "https://wa.me/5585999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Z%C3%8ANIT%20e%20quero%20tirar%20uma%20d%C3%BAvida%20sobre%20consultoria%20digital%2C%20PBQP-H%2C%20ISO%209001%20ou%20Programa%20de%20Integridade.";

const authorityItems = [
  {
    value: "15+",
    label: "anos de experiência técnica em gestão, qualidade e auditorias",
  },
  {
    value: "10k+",
    label: "horas dedicadas a consultorias, diagnósticos e implantação",
  },
  {
    value: "100%",
    label: "atendimento digital, consultivo e orientado por evidências",
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
    title: "Plano de ação parado",
    description:
      "Pendências sem prazo, prioridade ou evidência de conclusão viram risco recorrente.",
  },
  {
    title: "Risco em auditoria",
    description:
      "Na hora de comprovar integridade, PBQP-H ou ISO 9001, a empresa descobre lacunas tarde demais.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Programa de Integridade para Licitações",
    description:
      "Estruturação de políticas, matriz de riscos, canal de integridade, treinamentos, controles e evidências para empresas que precisam demonstrar compliance.",
    tags: ["Integridade", "Compliance", "Licitações"],
  },
  {
    number: "02",
    title: "PBQP-H Nível B para Construtoras",
    description:
      "Implantação enxuta de processos, procedimentos, registros de obra, controle documental, plano de ação e evidências para construtoras pequenas e médias.",
    tags: ["PBQP-H", "Obras", "Evidências"],
  },
  {
    number: "03",
    title: "ISO 9001 para Empresas",
    description:
      "Organização da gestão da qualidade com processos, indicadores, responsabilidades, auditoria interna, tratamento de não conformidades e melhoria contínua.",
    tags: ["ISO 9001", "SGQ", "Auditoria"],
  },
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
      "Acompanhamento digital, reuniões objetivas, treinamentos e ajustes conforme a realidade da empresa.",
  },
  {
    step: "04",
    title: "Evidências e verificação",
    description:
      "Organização de registros, revisão de lacunas e preparação para auditoria, certificação ou licitação.",
  },
];

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#autoridade", label: "Autoridade" },
  { href: "#desafios", label: "Desafios" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodologia", label: "Metodologia" },
];

function Badge({
  children,
  variant = "dark",
}: Readonly<{ children: ReactNode; variant?: "dark" | "light" }>) {
  return (
    <span
      className={
        variant === "light"
          ? "inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white/85"
          : "inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-950"
      }
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-5 px-5">
          <a href="#inicio" className="flex items-center gap-3 text-white">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-white/10 font-bold shadow-lg shadow-sky-900/30">
              Z
            </span>
            <span>
              <strong className="block font-mono text-lg uppercase tracking-[0.16em]">
                ZÊNIT
              </strong>
              <span className="block text-xs uppercase tracking-[0.24em] text-white/60">
                Consult
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 text-sm font-medium text-white/75 lg:flex">
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
            href="#diagnostico"
            className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-sky-950 shadow-lg shadow-black/10 transition hover:bg-sky-50"
          >
            Diagnóstico
          </a>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.25),transparent_35%),linear-gradient(135deg,#071a2e,#0e2a47)] px-5 pb-20 pt-36 text-white md:pb-28 md:pt-44"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            <Badge variant="light">Consultoria digital em gestão auditável</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Qualidade, PBQP-H e integridade com método, documentos e
              evidências.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              A ZÊNIT Consult ajuda empresas a organizar processos, controles e
              registros para ISO 9001, PBQP-H, Programa de Integridade,
              auditorias e exigências de mercado, com atendimento digital e
              implantação assistida.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#diagnostico"
                className="rounded-full bg-white px-7 py-4 text-center font-extrabold text-sky-950 shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Solicitar diagnóstico inicial
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-400 px-7 py-4 text-center font-extrabold text-slate-950 shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Tirar dúvida pelo WhatsApp
              </a>
              <a
                href="#metodologia"
                className="rounded-full border border-white/25 px-7 py-4 text-center font-extrabold text-white transition hover:bg-white/10"
              >
                Conhecer metodologia
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-slate-950/25 backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <strong className="block text-lg">Gestão auditável</strong>
                  <span className="text-sm text-slate-500">
                    Documentos, ações e evidências no centro da implantação
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700">
                  MVP digital
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {["Diagnóstico", "Estrutura", "Evidências"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-950 text-sm font-extrabold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <strong className="block">{item}</strong>
                        <small className="text-slate-500">
                          {index === 0
                            ? "Leitura inicial e prioridades"
                            : index === 1
                              ? "Processos, controles e responsáveis"
                              : "Registros para comprovação"}
                        </small>
                      </span>
                      <em className="text-xs font-extrabold not-italic text-sky-800">
                        {index === 0 ? "priorizar" : index === 1 ? "organizar" : "provar"}
                      </em>
                    </div>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="autoridade" className="bg-white px-5 py-16 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {authorityItems.map((item) => (
            <article
              key={item.value}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <strong className="block text-4xl font-extrabold text-sky-950">
                {item.value}
              </strong>
              <p className="mt-3 text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="desafios" className="bg-slate-50 px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Desafios</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              O problema não é só ter documentos. É conseguir comprovar a
              gestão.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Empresas pequenas e médias costumam operar com conhecimento
              espalhado, controles informais e evidências difíceis de encontrar
              quando surge uma auditoria, certificação ou licitação.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge, index) => (
              <article
                key={challenge.title}
                className="min-h-56 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-sm font-extrabold text-sky-950">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">
                  {challenge.title}
                </h3>
                <p className="mt-3 text-slate-600">{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Soluções</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Três frentes principais para organizar, implantar e comprovar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A consultoria é digital, objetiva e ajustada à realidade da
              empresa. O foco é criar uma base auditável sem transformar a
              implantação em um projeto pesado.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-950 to-sky-700" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-950 text-sm font-extrabold text-white">
                  {solution.number}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold">
                  {solution.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-extrabold text-sky-950"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-5 rounded-3xl bg-sky-950 p-7 text-white shadow-xl shadow-sky-950/20 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">Soluções digitais sob demanda</h3>
              <p className="mt-2 max-w-3xl text-white/72">
                Ferramentas simples para organizar planos de ação, evidências,
                formulários, documentos, dashboards e acompanhamento da
                implantação, sem vender uma plataforma grande antes da hora.
              </p>
            </div>
            <a
              href="#diagnostico"
              className="rounded-full bg-white px-6 py-3 text-center font-extrabold text-sky-950 transition hover:bg-sky-50"
            >
              Avaliar necessidade
            </a>
          </div>
        </div>
      </section>

      <section id="metodologia" className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="light">Metodologia</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Uma jornada simples para sair da informalidade e chegar à
              evidência.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              A metodologia mostra o caminho de implantação sem expor
              complexidade técnica desnecessária. O cliente entende etapas,
              responsabilidades e próximos passos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((item) => (
              <article
                key={item.step}
                className="min-h-60 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-extrabold text-sky-200">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="bg-slate-50 px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl bg-sky-950 p-8 text-white shadow-xl shadow-sky-950/20">
            <Badge variant="light">Diagnóstico inicial</Badge>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Quer saber por onde começar?
            </h2>
            <p className="mt-5 leading-8 text-white/72">
              Envie os dados essenciais para uma primeira leitura da necessidade.
              Se preferir, fale direto pelo WhatsApp e explique o contexto em
              poucas mensagens.
            </p>

            <div className="mt-7 grid gap-3">
              {[
                ["Base", "Fortaleza · Ceará"],
                ["Atendimento", "Digital, remoto e consultivo"],
                [
                  "Foco",
                  "Integridade, PBQP-H, ISO 9001, auditoria e gestão auditável",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4"
                >
                  <strong className="block">{title}</strong>
                  <span className="text-sm text-white/68">{text}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full justify-center rounded-full bg-emerald-400 px-7 py-4 text-center font-extrabold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              Tirar dúvida pelo WhatsApp
            </a>
          </aside>

          <form
            action="mailto:contato@zenitconsult.com.br"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-950/10"
          >
            <h3 className="text-2xl font-extrabold md:text-3xl">
              Solicitar diagnóstico inicial
            </h3>
            <p className="mt-3 text-slate-600">
              Formulário enxuto para gerar o primeiro contato comercial e
              direcionar a solução mais adequada.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-extrabold">
                Nome
                <input
                  required
                  name="nome"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold">
                Empresa
                <input
                  required
                  name="empresa"
                  placeholder="Nome da empresa"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold">
                WhatsApp
                <input
                  required
                  name="whatsapp"
                  placeholder="(00) 00000-0000"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold">
                E-mail opcional
                <input
                  type="email"
                  name="email"
                  placeholder="seuemail@empresa.com.br"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-extrabold">
                Segmento
                <select
                  required
                  name="segmento"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Construção civil</option>
                  <option>Empresa que participa de licitações</option>
                  <option>Serviços</option>
                  <option>Indústria</option>
                  <option>Pequena ou média empresa</option>
                  <option>Outro</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-extrabold">
                Principal necessidade
                <select
                  required
                  name="necessidade"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Programa de Integridade e Compliance</option>
                  <option>PBQP-H</option>
                  <option>ISO 9001</option>
                  <option>Auditoria interna</option>
                  <option>Treinamentos</option>
                  <option>Soluções digitais sob demanda</option>
                  <option>Ainda não sei</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-extrabold md:col-span-2">
                Mensagem curta
                <textarea
                  name="mensagem"
                  placeholder="Conte brevemente o que sua empresa precisa resolver."
                  className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-sky-700 focus:ring-4 focus:ring-sky-100"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="rounded-full bg-sky-950 px-7 py-4 font-extrabold text-white transition hover:bg-sky-800"
              >
                Enviar solicitação
              </button>
              <span className="text-sm text-slate-500">
                Conectar depois ao WhatsApp, CRM ou e-mail real.
              </span>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div>
            <strong className="block text-lg uppercase tracking-[0.16em]">
              ZÊNIT Consult
            </strong>
            <p className="mt-4 max-w-md text-white/68">
              Consultoria digital em gestão auditável, qualidade, PBQP-H, ISO
              9001 e Programa de Integridade.
            </p>
            <p className="mt-3 text-white/68">
              Fortaleza / Ceará · Atendimento digital e remoto.
            </p>
          </div>
          <div>
            <h4 className="font-extrabold">Navegação</h4>
            <div className="mt-3 grid gap-2 text-white/68">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#diagnostico" className="hover:text-white">
                Diagnóstico
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-extrabold">Contato</h4>
            <div className="mt-3 grid gap-2 text-white/68">
              <a href="mailto:contato@zenitconsult.com.br" className="hover:text-white">
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
