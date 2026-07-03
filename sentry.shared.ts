import type { ErrorEvent } from '@sentry/nextjs'

// DSN is public by design (it ships in the client bundle). Same Sentry project as
// the app; the `project` tag (set per config) separates app vs website events.
export const SENTRY_DSN =
  process.env.NEXT_PUBLIC_SENTRY_DSN ??
  'https://1999bbf6c5182698539ad9007633f166@o4511664938483712.ingest.de.sentry.io/4511671994286160'

/** Strip PII/tokens before an event leaves the process (belt-and-braces). */
export function scrubEvent(event: ErrorEvent): ErrorEvent {
  const req = event.request
  if (req) {
    delete req.data
    delete req.cookies
    if (req.url) req.url = req.url.split('?')[0]
    if (req.headers) {
      delete req.headers['authorization']
      delete req.headers['cookie']
    }
  }
  delete event.user
  return event
}

export const commonSentryInit = {
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV,
  // Only report from real deployments; local `next dev` is excluded (no noise).
  enabled: process.env.NODE_ENV === 'production',
  tracesSampleRate: 0.1,
  // Benign client/socket aborts are not actionable — drop them even in prod.
  ignoreErrors: ['aborted', 'ECONNRESET', 'ECONNABORTED', 'socket hang up', 'Request aborted'],
  sendDefaultPii: false,
  beforeSend: scrubEvent,
}
