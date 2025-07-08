import '@/styles/tailwind.css'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { type Metadata } from 'next'
import moment from '@/lib/moment'

export const metadata: Metadata = {
  title: {
    template: '%s | Codisans',
    default: 'Codisans | Software development',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  moment.locale(locale)

  return (
    <html
      lang={locale}
      className="h-full bg-theme-950 text-base text-theme-950 antialiased"
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
