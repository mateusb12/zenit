import { authorityItems } from "@/data/landing";

export function AuthoritySection() {
  return (
    <section className="zenit-authority" aria-label="Autoridade da ZÊNIT">
      <div className="zenit-container zenit-authority__grid">
        {authorityItems.map((item) => (
          <article key={item.value} className="zenit-authority__item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
