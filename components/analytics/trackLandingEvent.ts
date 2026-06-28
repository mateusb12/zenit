import posthog from "posthog-js";

type LandingEventProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export type LandingEventName =
  | "landing_page_view"
  | "cta_click"
  | "whatsapp_click"
  | "diagnostic_form_start"
  | "diagnostic_form_submit"
  | "section_view"
  | "scroll_depth"
  | "time_on_page";

export function trackLandingEvent(
  eventName: LandingEventName,
  properties: LandingEventProperties = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
    return;
  }

  posthog.capture(eventName, {
    app: "zenit_landing",
    page: "home",
    ...properties,
  });
}
