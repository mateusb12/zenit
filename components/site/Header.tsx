import { ButtonLink } from "@/components/site/ButtonLink";
import { HeaderNav } from "@/components/site/HeaderNav";
import { whatsappHref } from "@/data/landing";

export function Header() {
  return (
    <header className="zenit-header">
      <div className="zenit-container zenit-header__inner">
        <a href="#inicio" aria-label="ZÊNIT Consult" className="zenit-brand">
          <span className="zenit-brand__mark">Z</span>
          <span>
            <strong>ZÊNIT</strong>
            <small>Consult</small>
          </span>
        </a>

        <HeaderNav />

        <ButtonLink
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="whatsapp"
          className="zenit-header__cta"
        >
          WhatsApp
        </ButtonLink>
      </div>
    </header>
  );
}
