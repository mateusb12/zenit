"use client";

import type { MouseEvent } from "react";

const HIDE_MS = 10_000;

export function DevNavbarHider() {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  function hideNavbar(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const header = button.closest("header");

    if (!header?.parentNode) {
      return;
    }

    const parent = header.parentNode;
    const placeholder = document.createComment("zenit-dev-navbar-placeholder");

    parent.insertBefore(placeholder, header);
    parent.removeChild(header);

    window.setTimeout(() => {
      if (!placeholder.parentNode) {
        return;
      }

      placeholder.parentNode.insertBefore(header, placeholder);
      placeholder.parentNode.removeChild(placeholder);
    }, HIDE_MS);
  }

  return (
    <button
      type="button"
      aria-label="Ocultar navbar por 10 segundos"
      title="DEV: ocultar navbar por 10s"
      onClick={hideNavbar}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 bg-white/[0.055] text-[11px] font-extrabold text-white/70 transition-[transform,background,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.12] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
    >
      DEV
    </button>
  );
}
