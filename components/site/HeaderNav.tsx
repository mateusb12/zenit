"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/components/site/tailwind";
import { navItems } from "@/data/landing";

export function HeaderNav() {
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")).filter(Boolean),
    [],
  );

  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? "#inicio");

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveSection = () => {
      const activationLine = window.scrollY + window.innerHeight * 0.35;

      let nextActiveHref = navItems[0]?.href ?? "#inicio";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) {
          continue;
        }

        const sectionTop = section.offsetTop;

        if (sectionTop <= activationLine) {
          nextActiveHref = `#${id}`;
        }
      }

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isNearBottom && navItems.length > 0) {
        nextActiveHref = navItems[navItems.length - 1].href;
      }

      setActiveHref(nextActiveHref);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return (
    <nav
      className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-white/85 max-[980px]:hidden"
      aria-label="Navegação principal"
    >
      {navItems.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-[9px] py-2 transition-colors duration-200 hover:text-white",
              isActive &&
                "text-white after:absolute after:inset-x-[9px] after:bottom-0 after:h-px after:rounded-full after:bg-white/50",
            )}
            aria-current={isActive ? "location" : undefined}
            onClick={() => setActiveHref(item.href)}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
