import {
  cardClass,
  cn,
  containerClass,
  gridClass,
} from "@/components/site/tailwind";
import Image from "next/image";
import { publicAssetPath } from "@/data/siteAssets";
import { challenges } from "@/data/landing";

export function ChallengesSection() {
  return (
    <section id="desafios" className="scroll-mt-[92px] bg-[#0b2743] py-10 text-white md:min-h-[70vh] md:py-12 max-[680px]:py-10">
      <div className={containerClass}>
        <div className="mx-auto mb-7 max-w-[900px] text-center max-[680px]:mb-6">
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
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className={cn(cardClass, "min-h-[220px] border-white/12 bg-white/[0.07] p-6 text-white shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-sm max-[680px]:min-h-[205px] max-[680px]:p-[20px]")}
            >
              <div className="relative flex h-[96px] items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(184,216,243,0.20)_0%,rgba(64,196,255,0.10)_36%,transparent_72%)] blur-sm"
                />
                <Image
                  src={publicAssetPath(challenge.icon)}
                  alt=""
                  aria-hidden="true"
                  width={104}
                  height={104}
                  className="relative h-[104px] w-[104px] object-contain drop-shadow-[0_0_14px_rgba(79,210,255,0.28)]"
                />
              </div>
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
