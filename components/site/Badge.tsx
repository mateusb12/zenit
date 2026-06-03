import type { ReactNode } from "react";
import { cn } from "@/components/site/tailwind";

type BadgeProps = Readonly<{
  children: ReactNode;
  tone?: "light" | "dark";
}>;

export function Badge({ children, tone = "light" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-3 py-[7px] text-xs font-extrabold uppercase leading-[1.2] tracking-[0.06em]",
        tone === "light"
          ? "border border-white/20 bg-white/10 text-white/90"
          : "border border-[#cfe0ef] bg-[#e9f1f8] text-[#0e2a47]",
      )}
    >
      {children}
    </span>
  );
}
