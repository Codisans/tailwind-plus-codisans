'client'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Container } from './Container'
import { Button } from './Button'
import clsx from 'clsx'
import { Logomark, Logotype } from './Logo'
import { RootLayoutContext } from './RootLayout'
import { useContext } from 'react'

export function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  const pathname = usePathname()
  const t = useTranslations('global')

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark className="h-9 sm:hidden" invert={invert} />
          <Logotype
            className="mb-2 h-8 max-sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-4 sm:gap-x-8">
          <Link
            className={`pt-1 es:hidden ${invert ? 'text-white' : 'text-theme-950'}`}
            href={pathname}
            locale="es"
          >
            ES
          </Link>
          <Link
            className={`pt-1 en:hidden ${invert ? 'text-white' : 'text-theme-950'}`}
            href={pathname}
            locale="en"
          >
            EN
          </Link>
          <Button href="/contact" invert={invert}>
            {t('contact')}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-theme-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-theme-200'
                  : 'fill-theme-950 group-hover:fill-theme-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

export function Navigation() {
  const t = useTranslations('global')
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/about">{t('about')}</NavigationItem>
        <NavigationItem href="/services">{t('services')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/work">{t('work')}</NavigationItem>
        <NavigationItem href="/blog">{t('blog')}</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function NavigationRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="even:mt-px sm:bg-theme-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-theme-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-theme-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-theme-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}
