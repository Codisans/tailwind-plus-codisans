'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

function Email({
  name,
  email,
  invert = false,
}: {
  name: string
  email: string
  invert: boolean
}) {
  return (
    <div key={email}>
      <dt
        className={`font-semibold ${invert ? 'text-white' : 'text-neutral-950'}`}
      >
        {name}
      </dt>
      <dd>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          className={`${invert ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}
        >
          {email}
        </Link>
      </dd>
    </div>
  )
}

export function Emails({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { invert?: boolean }) {
  const t = useTranslations('global')

  return (
    <div {...props}>
      <h2
        className={`font-display text-base font-semibold ${invert ? 'text-white' : 'text-neutral-950'}`}
      >
        {t('emails-heading')}
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[
          ['Nicolas Canala', 'nico@codisans.com'],
          ['Sebastian Strand', 'sebastian@codisans.com'],
        ].map(([label, email]) => (
          <Email key={email} name={label} email={email} invert={invert} />
        ))}
      </dl>
    </div>
  )
}
