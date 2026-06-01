import { SectionHeading } from "@/components/site/SectionHeading";
import { challenges } from "@/data/landing";

export function ChallengesSection() {
  return (
    <section id="desafios" className="zenit-section zenit-section--light">
      <div className="zenit-container">
        <SectionHeading
          eyebrow="Desafios"
          title="O problema não é só ter documentos. É conseguir comprovar a gestão."
          description="Empresas pequenas e médias costumam operar com conhecimento espalhado, controles informais e evidências difíceis de encontrar quando surge uma auditoria, certificação ou licitação."
        />

        <div className="zenit-grid zenit-grid--four">
          {challenges.map((challenge, index) => (
            <article key={challenge.title} className="zenit-card zenit-card--challenge">
              <span className="zenit-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
