import { navItems, whatsappHref } from "@/data/landing";

export function Footer() {
  return (
    <footer className="zenit-footer">
      <div className="zenit-container zenit-footer__grid">
        <div>
          <strong className="zenit-footer__brand">ZÊNIT Consult</strong>
          <p>
            Consultoria digital em gestão auditável, qualidade, PBQP-H, ISO
            9001 e Programa de Integridade.
          </p>
          <p>Fortaleza / Ceará · Atendimento digital e remoto.</p>
        </div>

        <div>
          <h4>Navegação</h4>
          <div className="zenit-footer__links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Contato</h4>
          <div className="zenit-footer__links">
            <a href="mailto:contato@zenitconsult.com.br">
              contato@zenitconsult.com.br
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
