import { authorityItems } from "@/data/landing";
import { containerClass } from "@/components/site/tailwind";

export function AuthoritySection() {
  return (
    <section className="relative z-20 -mt-28 bg-transparent pt-0 pb-20 text-white max-[900px]:-mt-20 max-[680px]:-mt-14 max-[680px]:pb-14" aria-label="Autoridade da ZÊNIT">
      <div className={`${containerClass} grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
        {authorityItems.map((item) => (
          <article
            key={item.value}
            className="rounded-[18px] border border-white/20 bg-white/[0.12] p-5 shadow-[0_18px_46px_rgba(7,26,46,0.18)] backdrop-blur"
          >
            <strong className="block text-[40px] leading-none">
              {item.value}
            </strong>
            <span className="mt-3 block text-sm leading-[1.55] text-white/75">
              {item.label}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
