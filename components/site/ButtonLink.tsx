import type { AnchorHTMLAttributes, ReactNode } from "react";

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
  const classes = ["zenit-button", `zenit-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
