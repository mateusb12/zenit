import { authorityItems } from "@/data/landing";

export function AuthoritySection() {
  return (
    <section
      aria-label="Trajetória técnica real"
      className="flex min-h-[40vh] items-center bg-[#0b2743] px-5 py-10 text-white md:py-12"
    >
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto mb-7 max-w-[720px] text-center">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white/85">
            Trajetória técnica real
          </span>

          <p className="mx-auto mt-3 max-w-[680px] text-base leading-7 text-white/76">
            Consultoria digital baseada em experiência prática com auditorias,
            implantação, identificação de gaps e organização de evidências.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[22px] border border-white/12 bg-white/12 sm:grid-cols-2 md:grid-cols-3">
          {authorityItems.map((item) => (
            <article
              key={item.value}
              className="flex min-h-[138px] flex-col items-center justify-center border-b border-white/12 bg-[#0e2a47]/88 px-5 py-6 text-center sm:min-h-[146px] sm:odd:border-r md:border-b-0 md:border-r md:last:border-r-0 md:odd:border-r"
            >
              <strong className="block text-[clamp(2.55rem,4vw,3.35rem)] font-extrabold leading-none tracking-[-0.035em] text-white">
                {item.value}
              </strong>

              <span className="mx-auto mt-3 block max-w-[170px] text-sm font-semibold leading-6 text-white/76 md:text-[15px]">
                {item.label}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
