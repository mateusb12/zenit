import { HeaderNav } from "@/components/site/HeaderNav";
import { VersionInfoButton } from "@/components/site/VersionInfoButton";
import { containerClass } from "@/components/site/tailwind";
import { whatsappHref } from "@/data/landing";
import { publicAssetPath } from "@/data/siteAssets";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071a2e]/90 backdrop-blur-2xl">
      <div className={`${containerClass} flex h-[78px] items-center justify-between gap-5 max-[680px]:h-[72px]`}>
        <a
          href="#inicio"
          aria-label="ZÊNIT Consult"
          className="inline-flex min-w-max items-center gap-3 text-white"
        >
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[14px] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(58,110,165,0.58))] text-lg font-extrabold shadow-[0_14px_30px_rgba(58,110,165,0.24)]">
            Z
          </span>
          <span>
            <strong className="block text-lg font-extrabold leading-none tracking-[0.04em]">
              ZÊNIT
            </strong>
            <small className="mt-[3px] block text-[11px] uppercase tracking-[0.12em] text-white/70 max-[680px]:hidden">
              Consult
            </small>
          </span>
        </a>

        <HeaderNav />

        <div className="flex min-w-max items-center gap-2">
          <VersionInfoButton />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a ZÊNIT pelo WhatsApp"
            title="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full transition-[transform,filter] duration-200 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#25d366]/45"
          >
            <img
              src={publicAssetPath("whatsapp.svg")}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 object-contain"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
