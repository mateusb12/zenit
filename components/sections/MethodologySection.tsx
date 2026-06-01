import { SectionHeading } from "@/components/site/SectionHeading";
import { methodSteps } from "@/data/landing";

export function MethodologySection() {
  return (
    <section id="metodologia" className="zenit-section zenit-section--dark">
      <div className="zenit-container">
        <SectionHeading
          eyebrow="Metodologia"
          title="Uma jornada simples para sair da informalidade e chegar à evidência."
          description="A metodologia mostra o caminho de implantação sem expor complexidade técnica desnecessária. O cliente entende etapas, responsabilidades e próximos passos."
          inverted
        />

        <div className="zenit-grid zenit-grid--four">
          {methodSteps.map((item) => (
            <article key={item.step} className="zenit-method-card">
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
