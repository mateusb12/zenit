import { Badge } from "@/components/site/Badge";
import { containerClass } from "@/components/site/tailwind";
import { segments } from "@/data/landing";

export function SegmentsSection() {
  return (
    <section
      className="bg-[#eef3f8] py-14 text-[#111111]"
      aria-label="Segmentos atendidos"
    >
      <div className={containerClass}>
        <div className="grid grid-cols-[0.44fr_1fr] items-center gap-8 rounded-[24px] border border-[#17456e]/22 bg-[#0e2a47] p-7 text-white shadow-[0_18px_46px_rgba(7,26,46,0.22)] max-[980px]:grid-cols-1 max-[680px]:p-[22px]">
          <div className="max-w-[360px] max-[980px]:max-w-none">
            <Badge>Segmentos atendidos</Badge>
            <h2 className="mt-4 text-2xl text-white">
              Experiência em diferentes operações e níveis de maturidade.
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-3 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
            {segments.map((segment) => (
              <span
                key={segment}
                className="flex min-h-[40px] items-center justify-center rounded-full border border-white/18 bg-white/[0.92] px-4 py-2 text-center text-sm font-extrabold text-[#0e2a47] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
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
