import {
  cardClass,
  cn,
  containerClass,
  gridClass,
} from "@/components/site/tailwind";
import { challenges } from "@/data/landing";

export function ChallengesSection() {
  return (
    <section id="desafios" className="scroll-mt-[92px] border-y border-white/10 bg-[linear-gradient(180deg,#071a2e_0%,#0e2a47_52%,#102f4d_100%)] py-14 text-white max-[680px]:py-12">
      <div className={containerClass}>
        <div className="mx-auto mb-8 max-w-[900px] text-center max-[680px]:mb-7">
          <h2 className="text-[clamp(30px,4vw,44px)] text-white max-[680px]:text-[30px]">
            O desafio não é apenas ter documentos. É comprovar que a gestão
            funciona.
          </h2>
          <p className="mx-auto mt-3 max-w-[840px] text-[16px] leading-[1.75] text-white/72">
            Empresas pequenas e médias muitas vezes operam com informações
            espalhadas, controles informais e evidências difíceis de localizar
            justamente quando surge uma auditoria, certificação, licitação ou
            exigência de cliente.
          </p>
        </div>

        <div className={`${gridClass} grid-cols-4 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1`}>
          {challenges.map((challenge, index) => (
            <article
              key={challenge.title}
              className={cn(cardClass, "min-h-[205px] border-white/12 bg-white/[0.07] p-5 text-white shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm max-[680px]:p-[20px]")}
            >
              <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] border border-white/10 bg-white/10 text-sm font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[21px] text-white">
                {challenge.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.75] text-white/72">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
