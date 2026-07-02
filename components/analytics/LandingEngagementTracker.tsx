"use client";

import { useEffect } from "react";
import { trackLandingEvent } from "@/components/analytics/trackLandingEvent";

const sectionTargets = [
  { id: "inicio", name: "Início" },
  { id: "desafios", name: "Desafios" },
  { id: "solucoes", name: "Soluções" },
  { id: "metodologia", name: "Metodologia" },
  { id: "diagnostico", name: "Diagnóstico" },
] as const;

const scrollDepths = [25, 50, 75, 100] as const;

export function LandingEngagementTracker() {
  useEffect(() => {
    const trackedSections = new Set<string>();
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.4) {
            continue;
          }

          const section = sectionTargets.find(
            (target) => target.id === entry.target.id,
          );

          if (!section || trackedSections.has(section.id)) {
            continue;
          }

          trackedSections.add(section.id);
          trackLandingEvent("section_view", {
            section_id: section.id,
            section_name: section.name,
          });

          sectionObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.4 },
    );

    for (const section of sectionTargets) {
      const element = document.getElementById(section.id);

      if (element) {
        sectionObserver.observe(element);
      }
    }

    const trackedDepths = new Set<number>();

    const trackScrollDepth = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const depthPercent =
        scrollableHeight <= 0
          ? 100
          : ((window.scrollY + window.innerHeight) /
              document.documentElement.scrollHeight) *
            100;

      for (const depth of scrollDepths) {
        if (depthPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackLandingEvent("scroll_depth", { depth });
        }
      }
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>("[data-analytics-event]");

      if (!element) {
        return;
      }

      const eventName = element.dataset.analyticsEvent;

      if (eventName === "whatsapp_click") {
        trackLandingEvent("whatsapp_click", {
          location: element.dataset.analyticsLocation ?? "unknown",
          label: element.dataset.analyticsLabel ?? element.textContent?.trim(),
          target: "whatsapp",
        });
        return;
      }

      if (eventName === "cta_click") {
        trackLandingEvent("cta_click", {
          cta_id: element.dataset.analyticsCtaId ?? "unknown",
          location: element.dataset.analyticsLocation ?? "unknown",
          label: element.dataset.analyticsLabel ?? element.textContent?.trim(),
          target: element.dataset.analyticsTarget ?? "",
        });
      }
    };

    let diagnosticFormStarted = false;

    const handleFormStart = (event: Event) => {
      if (diagnosticFormStarted) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest('[data-analytics-form="diagnostic"]')) {
        return;
      }

      diagnosticFormStarted = true;
      trackLandingEvent("diagnostic_form_start", {
        form_name: "diagnostic",
        location: "diagnostic",
      });
    };

    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target;

      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      if (form.dataset.analyticsForm !== "diagnostic") {
        return;
      }

      const formData = new FormData(form);
      const need = formData.get("necessidade");
      const company = formData.get("empresa");

      trackLandingEvent("diagnostic_form_submit", {
        form_name: "diagnostic",
        location: "diagnostic",
        need: typeof need === "string" ? need : undefined,
        has_company: typeof company === "string" && company.trim().length > 0,
      });
    };

    let visibleStartedAt =
      document.visibilityState === "visible" ? performance.now() : null;
    let visibleMilliseconds = 0;
    let lastTrackedSeconds = 0;

    const pauseVisibleTimer = () => {
      if (visibleStartedAt === null) {
        return;
      }

      visibleMilliseconds += performance.now() - visibleStartedAt;
      visibleStartedAt = null;
    };

    const resumeVisibleTimer = () => {
      if (visibleStartedAt === null) {
        visibleStartedAt = performance.now();
      }
    };

    const trackVisibleTime = () => {
      pauseVisibleTimer();

      const secondsVisible = Math.round(visibleMilliseconds / 1000);

      if (secondsVisible >= 3 && secondsVisible > lastTrackedSeconds) {
        lastTrackedSeconds = secondsVisible;
        trackLandingEvent("time_on_page", {
          seconds_visible: secondsVisible,
        });
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        trackVisibleTime();
      } else {
        resumeVisibleTimer();
      }
    };

    trackScrollDepth();

    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    window.addEventListener("resize", trackScrollDepth);
    document.addEventListener("click", handleClick);
    document.addEventListener("focusin", handleFormStart);
    document.addEventListener("change", handleFormStart);
    document.addEventListener("submit", handleFormSubmit);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", trackVisibleTime);

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", trackScrollDepth);
      window.removeEventListener("resize", trackScrollDepth);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focusin", handleFormStart);
      document.removeEventListener("change", handleFormStart);
      document.removeEventListener("submit", handleFormSubmit);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", trackVisibleTime);
    };
  }, []);

  return null;
}
