'use client'
import { Link } from '@/i18n/navigation'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { useTranslations } from 'next-intl'

function Navigation() {
  const t = useTranslations('Global')

  const navigation = [
    {
      title: t('work'),
      links: [
        { title: 'Keai', href: '/work/keai' },
        { title: "DCV'87", href: '/work/dcv87' },
        { title: 'La Torre Ambulante', href: '/work/la-torre-ambulante' },
        {
          title: (
            <>
              {t('see-all')} <span aria-hidden="true">&rarr;</span>
            </>
          ),
          href: '/work',
        },
      ],
    },
    {
      title: t('company'),
      links: [
        { title: t('about'), href: '/about' },
        { title: t('process'), href: '/process' },
        { title: t('blog'), href: '/blog' },
        { title: t('contact'), href: '/contact' },
      ],
    },
    {
      title: t('connect'),
      links: socialMediaProfiles,
    },
  ]

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-theme-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-theme-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-theme-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <Navigation />
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-theme-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-theme-700">
            © CODISANS SpA. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
