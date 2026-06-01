import { ButtonLink } from "@/components/site/ButtonLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { solutions } from "@/data/landing";

export function SolutionsSection() {
  return (
    <section id="solucoes" className="zenit-section">
      <div className="zenit-container">
        <SectionHeading
          eyebrow="Soluções"
          title="Três frentes principais para organizar, implantar e comprovar."
          description="A consultoria é digital, objetiva e ajustada à realidade da empresa. O foco é criar uma base auditável sem transformar a implantação em um projeto pesado."
        />

        <div className="zenit-grid zenit-grid--three">
          {solutions.map((solution) => (
            <article key={solution.title} className="zenit-card zenit-card--solution">
              <span className="zenit-card__number zenit-card__number--solid">
                {solution.number}
              </span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="zenit-tags">
                {solution.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="zenit-support">
          <div>
            <h3>Apoios sob demanda</h3>
            <p>
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
