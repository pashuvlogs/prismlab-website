'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0E1512', color: '#F4F6F3', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24, textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Something went wrong</h1>
          <p style={{ color: '#9AA6A0', maxWidth: 420, margin: 0 }}>
            An unexpected error occurred. It has been logged and we&apos;ll look into it.
          </p>
          <button
            onClick={() => reset()}
            style={{ marginTop: 8, background: '#15A35E', color: '#fff', border: 0, borderRadius: 12, padding: '12px 24px', fontWeight: 600, cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
