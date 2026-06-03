import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/site/tailwind";

type ButtonLinkProps = Readonly<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: "primary" | "dark" | "whatsapp" | "ghost";
  }
>;

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const variantClasses = {
    primary:
      "bg-white text-[#0e2a47] shadow-[0_14px_30px_rgba(0,0,0,0.15)] hover:bg-[#e9f1f8]",
    dark:
      "bg-[#0e2a47] text-white shadow-[0_14px_30px_rgba(14,42,71,0.18)] hover:bg-[#17456e]",
    whatsapp:
      "bg-[#25d366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.2)] hover:bg-[#1fb85a]",
    ghost:
      "border-white/30 bg-white/[0.06] text-white hover:bg-white/10",
  } satisfies Record<NonNullable<ButtonLinkProps["variant"]>, string>;

  return (
    <a
      className={cn(
        "inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-center text-sm font-extrabold leading-[1.2] transition-[transform,box-shadow,background,color] duration-200 hover:-translate-y-0.5 max-[680px]:w-full",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
