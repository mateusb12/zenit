import { ButtonLink } from "@/components/site/ButtonLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  cardClass,
  cn,
  containerClass,
  gridClass,
  sectionClass,
} from "@/components/site/tailwind";
import { solutions } from "@/data/landing";

export function SolutionsSection() {
  return (
    <section id="solucoes" className={`${sectionClass} bg-white text-[#111111]`}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Soluções"
          title="Três frentes principais para organizar, implantar e comprovar."
          description="A consultoria é digital, objetiva e ajustada à realidade da empresa. O foco é criar uma base auditável sem transformar a implantação em um projeto pesado."
        />

        <div className={`${gridClass} grid-cols-3 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className={cn(
                cardClass,
                "relative flex min-h-[350px] flex-col overflow-hidden p-7 transition-[transform,box-shadow] duration-200 before:absolute before:inset-x-0 before:top-0 before:h-[5px] before:bg-[linear-gradient(90deg,#0e2a47,#3a6ea5)] before:content-[''] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:p-[22px]",
              )}
            >
              <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#0e2a47] text-sm font-extrabold text-white">
                {solution.number}
              </span>
              <h3 className="mt-6 text-2xl text-[#0e2a47]">
                {solution.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-[1.75] text-[#4b5563]">
                {solution.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#e9f1f8] px-3 py-1.5 text-xs font-extrabold text-[#0e2a47]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-5 rounded-[20px] bg-[#0e2a47] p-6 text-white shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[980px]:grid-cols-1 max-[680px]:p-[22px]">
          <div>
            <h3 className="text-2xl">Apoios sob demanda</h3>
            <p className="mt-2 max-w-[760px] leading-[1.75] text-white/75">
              Auditoria interna, materiais didáticos, treinamento da equipe e
              soluções digitais simples para acompanhar documentos, ações e
              evidências quando fizer sentido no diagnóstico.
            </p>
          </div>
          <ButtonLink href="#diagnostico">Avaliar necessidade</ButtonLink>
        </div>
      </div>
    </section>
  );
}
