import * as Sentry from '@sentry/nextjs'
import { commonSentryInit } from './sentry.shared'

Sentry.init({ ...commonSentryInit, initialScope: { tags: { project: 'prismlab-website' } } })
