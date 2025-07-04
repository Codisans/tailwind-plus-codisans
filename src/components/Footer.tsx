import { Link } from '@/i18n/navigation'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Work',
    links: [
      { title: 'Keai', href: '/work/keai' },
      { title: "DCV'87", href: '/work/dcv87' },
      { title: 'La Torre Ambulante', href: '/work/la-torre-ambulante' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-theme-950 text-sm font-semibold tracking-wider">
              {section.title}
            </div>
            <ul role="list" className="text-theme-700 mt-4 text-sm">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="hover:text-theme-950 transition"
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

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-theme-950 text-sm font-semibold tracking-wider">
        Sign up for our newsletter
      </h2>
      <p className="text-theme-700 mt-4 text-sm">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="border-theme-300 text-theme-950 placeholder:text-theme-500 focus:border-theme-950 focus:ring-theme-950/5 focus:outline-hidden block w-full rounded-2xl border bg-transparent py-4 pl-6 pr-20 text-base/6 ring-4 ring-transparent transition"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="bg-theme-950 hover:bg-theme-800 flex aspect-square h-full items-center justify-center rounded-xl text-white transition"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <Navigation />
        <div className="border-theme-950/10 mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-theme-700 text-sm">
            © CODISANS SpA. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
