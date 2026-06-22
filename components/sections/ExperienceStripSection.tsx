import { trustedCompanies } from "@/data/landing";

export function ExperienceStripSection() {
  return (
    <section
      aria-label="Empresas que confiam na ZÊNIT"
      className="bg-[#eef3f8] py-12 text-[#111111] max-[680px]:py-9"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-40px))] max-[680px]:w-[min(calc(100%-28px),1160px)]">
        <div className="overflow-hidden rounded-[24px] border border-[#b7c7d8] bg-white px-7 py-8 shadow-[0_24px_58px_rgba(7,26,46,0.14)] max-[680px]:px-4 max-[680px]:py-7">
          <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#6f8094]">
            Empresas que confiam na ZÊNIT
          </p>

          <div className="mx-auto mt-6 flex max-w-[1020px] flex-wrap justify-center gap-3.5">
            {trustedCompanies.map((company) => (
              <span
                key={company}
                className="inline-flex min-h-[40px] min-w-[96px] items-center justify-center rounded-[13px] border border-[#bdcad8] bg-[#f8fafc] px-5 py-2 text-center text-sm font-extrabold text-[#6d7e92] shadow-[0_8px_22px_rgba(7,26,46,0.075)]"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
