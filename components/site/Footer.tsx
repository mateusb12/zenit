import { navItems, whatsappHref } from "@/data/landing";
import { containerClass } from "@/components/site/tailwind";
import { VersionStamp } from "@/components/site/VersionStamp";

export function Footer() {
  return (
    <footer className="bg-[#071a2e] py-12 text-white">
      <div className={`${containerClass} grid grid-cols-[1.3fr_0.8fr_0.9fr] gap-8 max-[980px]:grid-cols-1`}>
        <div>
          <strong className="block text-lg font-extrabold uppercase tracking-[0.08em]">
            ZÊNIT Consult
          </strong>
          <p className="mt-3 max-w-[430px] leading-[1.75] text-white/70">
            Consultoria digital em gestão auditável, qualidade, PBQP-H, ISO
            9001 e Programa de Integridade.
          </p>
          <p className="mt-3 max-w-[430px] leading-[1.75] text-white/70">
            Fortaleza / Ceará · Atendimento digital e remoto.
          </p>
        </div>

        <div>
          <h4 className="font-extrabold">Navegação</h4>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="leading-[1.75] text-white/70 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-extrabold">Contato</h4>
          <div className="mt-3 grid gap-2">
            <a
              href="mailto:contato@zenitconsult.com.br"
              className="leading-[1.75] text-white/70 hover:text-white"
            >
              contato@zenitconsult.com.br
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="leading-[1.75] text-white/70 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={`${containerClass} mt-10 border-t border-white/10 pt-5`}>
        <VersionStamp />
      </div>
    </footer>
  );
}
