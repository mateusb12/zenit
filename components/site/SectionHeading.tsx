import { Badge } from "@/components/site/Badge";

type SectionHeadingProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`zenit-section-heading ${
        inverted ? "zenit-section-heading--inverted" : ""
      }`}
    >
      <Badge tone={inverted ? "light" : "dark"}>{eyebrow}</Badge>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
