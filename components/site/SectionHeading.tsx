import { Badge } from "@/components/site/Badge";
import { cn } from "@/components/site/tailwind";

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
      className="mx-auto mb-11 max-w-[760px] text-center max-[680px]:mb-[34px] max-[680px]:text-left"
    >
      <Badge tone={inverted ? "light" : "dark"}>{eyebrow}</Badge>
      <h2 className="mt-4 text-[clamp(30px,4vw,46px)] max-[680px]:text-[30px]">
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-[16.5px] leading-[1.8]",
          inverted ? "text-white/70" : "text-[#4b5563]",
        )}
      >
        {description}
      </p>
    </div>
  );
}
