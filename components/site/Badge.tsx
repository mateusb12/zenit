import type { ReactNode } from "react";

type BadgeProps = Readonly<{
  children: ReactNode;
  tone?: "light" | "dark";
}>;

export function Badge({ children, tone = "light" }: BadgeProps) {
  return (
    <span className={`zenit-badge zenit-badge--${tone}`}>{children}</span>
  );
}
