import { Badge } from "@/components/site/Badge";
import { segments } from "@/data/landing";

export function SegmentsSection() {
  return (
    <section className="zenit-segments" aria-label="Segmentos atendidos">
      <div className="zenit-container">
        <div className="zenit-segments__panel">
          <div>
            <Badge tone="dark">Segmentos atendidos</Badge>
            <h2>Experiência em diferentes operações e níveis de maturidade.</h2>
          </div>
          <div className="zenit-chip-list">
            {segments.map((segment) => (
              <span key={segment} className="zenit-chip">
                {segment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
