import { Badge } from "@/components/site/Badge";
import { containerClass } from "@/components/site/tailwind";
import { segments } from "@/data/landing";

export function SegmentsSection() {
  return (
    <section className="bg-[#f5f7fa] py-14 text-[#111111]" aria-label="Segmentos atendidos">
      <div className={containerClass}>
        <div className="grid grid-cols-[0.48fr_1fr] items-center gap-6 rounded-[20px] border border-[#d9dee5] bg-white p-6 shadow-[0_12px_30px_rgba(7,26,46,0.08)] max-[980px]:grid-cols-1 max-[680px]:p-[22px]">
          <div>
            <Badge tone="dark">Segmentos atendidos</Badge>
            <h2 className="mt-4 text-2xl">
              Experiência em diferentes operações e níveis de maturidade.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {segments.map((segment) => (
              <span
                key={segment}
                className="inline-flex min-h-[38px] items-center rounded-full border border-[#d9dee5] bg-[#f7f9fb] px-4 py-2 text-sm font-extrabold text-[#17456e]"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
