import { SectionHeading } from "@/components/site/SectionHeading";
import { containerClass, gridClass, sectionClass } from "@/components/site/tailwind";
import { methodSteps } from "@/data/landing";

export function MethodologySection() {
  return (
    <section id="metodologia" className={`${sectionClass} bg-[#071a2e] text-white`}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Metodologia"
          title="Uma jornada simples para sair da informalidade e chegar à evidência."
          description="A metodologia mostra o caminho de implantação sem expor complexidade técnica desnecessária. O cliente entende etapas, responsabilidades e próximos passos."
          inverted
        />

        <div className={`${gridClass} grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
          {methodSteps.map((item) => (
            <article
              key={item.step}
              className="min-h-[230px] rounded-[20px] border border-white/15 bg-white/[0.08] p-6 text-white"
            >
              <span className="text-sm font-extrabold text-[#b8d8f3]">
                {item.step}
              </span>
              <h3 className="mt-5 text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-white/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
