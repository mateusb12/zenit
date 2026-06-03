import { authorityItems } from "@/data/landing";
import { containerClass } from "@/components/site/tailwind";

export function AuthoritySection() {
  return (
    <section className="bg-[#0e2a47] py-9 text-white" aria-label="Autoridade da ZÊNIT">
      <div className={`${containerClass} grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
        {authorityItems.map((item) => (
          <article
            key={item.value}
            className="rounded-[18px] border border-white/15 bg-white/[0.08] p-5"
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
