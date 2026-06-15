import { Badge } from "@/components/site/Badge";
import { cardClass, cn } from "@/components/site/tailwind";
import { solutions } from "@/data/landing";

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-[92px] bg-white py-16 text-[#111111] md:py-[74px] max-[680px]:py-14"
    >
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] max-[680px]:w-[min(calc(100%-28px),1240px)]">
        <div className="mx-auto mb-8 max-w-[880px] text-center max-[680px]:mb-7 max-[680px]:text-left">
          <Badge tone="dark">Soluções</Badge>
          <h2 className="mt-4 text-[clamp(30px,4vw,46px)] max-[680px]:text-[30px]">
            PBQP-H, Integridade e ISO 9001 para organizar processos, evidências
            e gestão.
          </h2>
          <p className="mx-auto mt-3 max-w-[820px] text-[16.5px] leading-[1.7] text-[#4b5563] max-[680px]:mx-0">
            Implantação digital, objetiva e acompanhada para estruturar
            documentos, registros e controles sem tornar o projeto pesado para a
            empresa.
          </p>
        </div>

        <div className="grid grid-cols-3 items-stretch gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className={cn(
                cardClass,
                "relative flex h-full min-h-[340px] flex-col overflow-hidden p-7 transition-[transform,box-shadow] duration-200 before:absolute before:inset-x-0 before:top-0 before:h-[5px] before:bg-[linear-gradient(90deg,#0e2a47,#3a6ea5)] before:content-[''] hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(7,26,46,0.14)] max-[680px]:min-h-[300px] max-[680px]:p-[22px]",
              )}
            >
              <span className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#0e2a47] text-sm font-extrabold text-white">
                {solution.number}
              </span>
              <h3 className="mt-6 text-[23px] leading-[1.12] text-[#0e2a47]">
                {solution.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-[#4b5563]">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
