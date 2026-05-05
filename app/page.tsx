const services = [
  {
    title: "SGQ",
    subtitle: "Sistema de Gestão da Qualidade",
    description:
        "Estruturação, melhoria e acompanhamento de processos para empresas que precisam elevar o padrão de qualidade e se preparar para auditorias.",
  },
  {
    title: "SGI",
    subtitle: "Sistema de Gestão Integrado",
    description:
        "Integração de práticas de qualidade, meio ambiente, saúde, segurança e gestão para tornar a operação mais organizada e eficiente.",
  },
  {
    title: "Compliance",
    subtitle: "Conformidade e governança",
    description:
        "Apoio na criação de controles, rotinas e práticas para reduzir riscos, aumentar transparência e fortalecer a tomada de decisão.",
  },
  {
    title: "PBQP-H",
    subtitle: "Programa Brasileiro da Qualidade e Produtividade do Habitat",
    description:
        "Consultoria para empresas da construção civil que buscam adequação, organização documental e evolução no PBQP-H.",
  },
];

const steps = [
  "Diagnóstico do cenário atual",
  "Plano de ação com prioridades",
  "Organização dos processos",
  "Acompanhamento e melhoria contínua",
];

export default function Home() {
  return (
      <main className="min-h-screen bg-slate-950 text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              Zenit
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#servicos" className="transition hover:text-white">
                Serviços
              </a>
              <a href="#metodo" className="transition hover:text-white">
                Método
              </a>
              <a href="#podcast" className="transition hover:text-white">
                Podcast
              </a>
              <a href="#contato" className="transition hover:text-white">
                Contato
              </a>
            </nav>

            <a
                href="#contato"
                className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Fale conosco
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Gestão • Qualidade • Compliance
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Consultoria para empresas que precisam organizar processos,
                melhorar a gestão e crescer com conformidade.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A Zenit apoia empresas na estruturação de sistemas de gestão,
                compliance, SGQ, SGI e PBQP-H, transformando exigências técnicas
                em rotinas simples, claras e aplicáveis.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                    href="#contato"
                    className="rounded-full bg-emerald-400 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-emerald-300"
                >
                  Conversar sobre meu projeto
                </a>

                <a
                    href="#servicos"
                    className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Ver áreas de atuação
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
                Áreas principais
              </p>

              <div className="mt-6 grid gap-4">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                    >
                      <h2 className="text-2xl font-semibold text-emerald-300">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-400">
                        {service.subtitle}
                      </p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Serviços
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Soluções para estruturar, auditar e evoluir a gestão da empresa.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                  <article
                      key={service.title}
                      className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                    <p className="mt-2 font-medium text-emerald-700">
                      {service.subtitle}
                    </p>
                    <p className="mt-5 leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Método
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Um processo simples para sair da bagunça e chegar na gestão
              organizada.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {steps.map((step, index) => (
                  <div
                      key={step}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400 font-bold text-slate-950">
                  {index + 1}
                </span>
                    <p className="mt-6 text-lg font-semibold">{step}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section id="podcast" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Podcast
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Conteúdo em áudio sobre gestão, qualidade e compliance.
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Este espaço será usado para publicar episódios, conversas e
                conteúdos gerados com apoio do NotebookLM, tornando temas técnicos
                mais acessíveis para empresas e profissionais.
              </p>
            </div>

            <div className="rounded-3xl border border-dashed border-white/20 bg-slate-950 p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                Em breve
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Player do podcast
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Aqui entra o embed do Spotify, YouTube, NotebookLM ou outra
                plataforma escolhida.
              </p>

              <div className="mt-8 rounded-2xl bg-white/5 p-6 text-center text-slate-500">
                Espaço reservado para embed
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-white px-6 py-24 text-slate-950">
          <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-8 text-white md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Contato
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Vamos conversar sobre a gestão da sua empresa?
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-slate-300">
              Fale com a Zenit para entender como podemos apoiar sua empresa em
              SGQ, SGI, Compliance e PBQP-H.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                  href="https://wa.me/5585999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-400 px-7 py-4 text-center font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Chamar no WhatsApp
              </a>

              <a
                  href="mailto:contato@zenit.com.br"
                  className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold transition hover:bg-white/10"
              >
                Enviar e-mail
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Trocar depois pelo WhatsApp e e-mail reais.
            </p>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} Zenit. Todos os direitos reservados.</p>
            <p>SGQ • SGI • Compliance • PBQP-H</p>
          </div>
        </footer>
      </main>
  );
}