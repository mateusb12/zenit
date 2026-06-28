import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const apiHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

if (typeof window !== "undefined" && projectToken) {
  posthog.init(projectToken, {
    api_host: apiHost,
    defaults: "2026-05-30",

    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,

    capture_dead_clicks: false,
    capture_exceptions: false,
    disable_session_recording: true,

    debug: false,
  });
}
