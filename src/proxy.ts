import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for API and framework routes, and files.
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
