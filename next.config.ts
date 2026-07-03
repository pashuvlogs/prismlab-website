import type { NextConfig } from "next";
import path from "node:path";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile in the parent dir
  // otherwise makes Next infer the wrong root).
  turbopack: {
    root: path.resolve(),
  },
  images: {
    // Marketing screenshots are local static assets in /public; no remote loader needed.
    unoptimized: true,
  },
  async headers() {
    // Static marketing site: no Supabase, no auth, no camera. Tighter CSP than
    // the app — fonts self-hosted via next/font, images are local. Kept
    // script/style 'unsafe-inline' (Next hydration + Motion inline styles);
    // nonce-based CSP would be the A+ upgrade.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

// Sentry error monitoring. tunnelRoute keeps events same-origin so they satisfy
// the site's `connect-src 'self'` CSP and dodge ad-blockers. Source-map upload
// only runs when SENTRY_AUTH_TOKEN + org/project are set.
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
});
