import { Badge } from "@/components/site/Badge";
import { methodSteps, segments } from "@/data/landing";

export function MethodologySection() {
  const segmentLoop = [...segments, ...segments];

  return (
    <section
      id="metodologia"
      className="scroll-mt-[92px] bg-[#071a2e] py-16 text-white md:py-20 max-[680px]:py-12"
      aria-label="Metodologia e segmentos atendidos"
    >
      <style>{`
        @keyframes zenit-segment-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .zenit-segment-track {
          animation: zenit-segment-marquee 28s linear infinite;
        }

        .zenit-segment-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .zenit-segment-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>

      <div className="mx-auto w-[min(1240px,calc(100%-40px))] max-[680px]:w-[min(calc(100%-28px),1240px)]">
        <div className="mb-32 grid grid-cols-4 gap-5 max-[980px]:mb-20 max-[980px]:grid-cols-1">
          <div
            className="col-span-2 col-start-2 overflow-hidden rounded-[24px] border border-white/14 bg-white/[0.08] px-7 py-6 text-center text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-sm max-[980px]:col-span-1 max-[980px]:col-start-auto max-[680px]:px-[22px]"
            aria-label="Segmentos atendidos"
          >
            <Badge>Segmentos atendidos</Badge>

            <h2 className="mx-auto mt-4 max-w-[560px] text-[24px] leading-[1.14] text-white max-[680px]:text-[22px]">
              Experiência em diferentes operações e níveis de maturidade.
            </h2>

            <div className="relative mx-auto mt-5 max-w-[620px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="zenit-segment-track flex w-max gap-2.5">
                {segmentLoop.map((segment, index) => (
                  <span
                    key={`${segment}-${index}`}
                    className="inline-flex min-h-[36px] items-center justify-center whitespace-nowrap rounded-full border border-white/18 bg-white/[0.94] px-4 py-2 text-center text-sm font-extrabold leading-[1.15] text-[#0e2a47] shadow-[0_10px_24px_rgba(0,0,0,0.10)]"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
          {methodSteps.map((item) => (
            <article
              key={item.step}
              className="min-h-[178px] rounded-[20px] border border-white/16 bg-white/[0.08] p-6 text-white shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-[transform,border-color,background] duration-200 hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.105] max-[680px]:min-h-[160px] max-[680px]:p-[22px]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/10 text-sm font-extrabold text-[#b8d8f3] ring-1 ring-white/14">
                {item.step}
              </span>
              <h3 className="mt-5 text-[20px] leading-[1.15] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-white/72">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
