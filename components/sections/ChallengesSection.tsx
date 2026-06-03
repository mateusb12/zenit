import { SectionHeading } from "@/components/site/SectionHeading";
import {
  cardClass,
  cardNumberClass,
  cn,
  containerClass,
  gridClass,
  sectionClass,
} from "@/components/site/tailwind";
import { challenges } from "@/data/landing";

export function ChallengesSection() {
  return (
    <section id="desafios" className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionHeading
          eyebrow="Desafios"
          title="O problema não é só ter documentos. É conseguir comprovar a gestão."
          description="Empresas pequenas e médias costumam operar com conhecimento espalhado, controles informais e evidências difíceis de encontrar quando surge uma auditoria, certificação ou licitação."
        />

        <div className={`${gridClass} grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
          {challenges.map((challenge, index) => (
            <article
              key={challenge.title}
              className={cn(cardClass, "min-h-[220px] p-6 max-[680px]:p-[22px]")}
            >
              <span className={cardNumberClass}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[21px] text-[#0e2a47]">
                {challenge.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-[#4b5563]">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
