import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RootLayout } from '@/components/RootLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import clsx from 'clsx'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'PartnersPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    robots: {
      index: false,
      follow: false,
    },
  }
}

function FigmaIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.332 8.668a3.333 3.333 0 0 0-3.333-3.334H12v6.667h.333a3.333 3.333 0 0 0 3-3.333zM8.668 5.334A3.333 3.333 0 0 0 5.335 8.67a3.333 3.333 0 0 0 3.333 3.333H12V5.334H8.668zM8.668 12.002a3.333 3.333 0 1 0 3.333 3.333v-3.333H8.668zM8.668 18.668A3.333 3.333 0 1 0 12 15.335v3.333H8.668zM15.332 12.002a3.333 3.333 0 1 1-3.333 3.333 3.333 3.333 0 0 1 3.333-3.333z" />
    </svg>
  )
}

function MotionIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function FileTextIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function HandshakeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="m11 17 5 5" />
      <path d="m16 17-4.5-4.5" />
      <path d="m2 11 5 5" />
      <path d="m7 11 4.5-4.5" />
      <path d="m13 5 5 5" />
      <path d="m18 5-4.5 4.5" />
      <path d="m9 20 5-5" />
    </svg>
  )
}

function SparklesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

const promises = [
  {
    icon: FigmaIcon,
    title: 'Pixel integrity',
    description:
      "If you set the tracking to -2%, we code it at -2%. Your Figma file isn't a suggestion—it's the blueprint.",
  },
  {
    icon: MotionIcon,
    title: 'Interaction first',
    description:
      'We build with GSAP, Framer Motion, and Alpine.js to make designs feel alive. Animations are never "too hard."',
  },
  {
    icon: FileTextIcon,
    title: 'Design as spec',
    description:
      'We treat your Figma files as living documentation. Every spacing, every state, every breakpoint preserved.',
  },
]

const risks = [
  {
    icon: UsersIcon,
    title: 'We never pitch your clients',
    description:
      'No branding, no credit, no visibility unless you explicitly ask. We succeed only if you look good.',
  },
  {
    icon: ShieldIcon,
    title: 'No hiring gamble',
    description:
      "You don't carry salary risk, onboarding overhead, or bench time. We scale with your project flow.",
  },
  {
    icon: HandshakeIcon,
    title: 'Your client relationship stays yours',
    description:
      "We join your Slack. We use your email domain if needed. To the client, we're your dev team.",
  },
  {
    icon: ClockIcon,
    title: 'Long-term thinking',
    description:
      "We're not project-flipping freelancers. We build partnerships that span years, not weeks.",
  },
]

const toolkit = [
  {
    category: 'Content Sites',
    title: 'Statamic & Umbraco',
    description:
      "Forget WordPress bloat. We build component-based systems that let you design modularly while your clients get a backend that's actually a joy to use.",
    benefit: 'The CMS bends to your design, not the other way around.',
    timeline: '4-8 weeks',
  },
  {
    category: 'E-Commerce',
    title: 'Shopify Hydrogen',
    description:
      'Standard Shopify themes kill creativity. We build headless Shopify stores using Hydrogen—you design the ultimate brand experience, we handle checkout and inventory behind the scenes.',
    benefit: 'No Liquid limitations. No theme constraints.',
    timeline: '6-12 weeks',
  },
  {
    category: 'Custom Software',
    title: 'Laravel + AI Integration',
    description:
      "When your client asks for a custom portal, SaaS product, or internal tool, don't refer them away. We build robust software with Laravel and integrate AI capabilities that make your agency look like a tech powerhouse.",
    benefit: 'Client-facing chatbots. Smart search. Content generation.',
    timeline: '8-16 weeks',
  },
]

const aiExamples = [
  {
    context: 'For a law firm website:',
    feature:
      'Search bar that uses AI to answer legal questions based on their content library',
  },
  {
    context: 'For e-commerce:',
    feature:
      'Product descriptions that generate dynamically based on inventory and user behavior',
  },
  {
    context: 'For content sites:',
    feature:
      'Smart content recommendations that actually understand context, not just tags',
  },
]

const partnershipModels = [
  {
    type: 'White Label Partnership',
    pricing: 'Retainer or per-project',
    description:
      'We join your Slack. We use your processes. We attend standups if needed. To the client, we are your in-house engineering department.',
    bestFor:
      'Agencies with consistent project flow who want predictable capacity',
  },
  {
    type: 'Design-Build Handoff',
    pricing: 'Project-based collaboration',
    description:
      'You handle strategy and design. Once Figma is signed off, you introduce us. We handle build, QA, and launch directly with the client, keeping you in the loop for design approval.',
    bestFor: 'Agencies who want to stay design-focused without dev overhead',
  },
]

export default async function PartnersPage() {
  const t = await getTranslations('PartnersPage')

  return (
    <RootLayout>
      {/* SECTION 1: HERO */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl font-bold tracking-tight text-theme-950 sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-theme-600 sm:text-xl">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button href="/contact">{t('hero.cta')}</Button>
            </div>
          </div>
        </FadeIn>

        {/* Hero Visual - Split Screen Concept */}
        <FadeIn className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-theme-950 via-theme-900 to-theme-950 p-8 sm:p-12 lg:p-16">
            <GridPattern
              className="absolute inset-0 h-full w-full fill-theme-800/30 stroke-theme-800/30"
              yOffset={-96}
              interactive={false}
            />
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Videos */}
              <div className="rounded-2xl">
                <video
                  src="/videos/felici-clip.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg"
                />
              </div>
              <div className="rounded-2xl">
                <video
                  src="/videos/felici-project.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            <p className="relative mt-8 text-center text-sm text-white/50">
              {t('hero.caption')}
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* SECTION 2: WE SPEAK DESIGNER */}
      <Container className="mt-32 sm:mt-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
              {t('speak-designer.title')}
            </h2>
            <div className="mt-6 space-y-4 text-lg text-theme-600">
              <p>{t('speak-designer.body-1')}</p>
              <p>{t('speak-designer.body-2')}</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-orange-50/80 via-white to-rose-50/80 p-8 ring-1 ring-orange-100">
              <p className="mb-6 text-sm font-semibold tracking-wider text-orange-600 uppercase">
                {t('speak-designer.promise-label')}
              </p>
              <div className="space-y-6">
                {promises.map((promise, index) => {
                  const iconColors = [
                    'bg-violet-500 text-white',
                    'bg-teal-500 text-white',
                    'bg-rose-500 text-white',
                  ]
                  return (
                    <div key={promise.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconColors[index]}`}
                        >
                          <promise.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-theme-950">
                          {t(
                            `speak-designer.promises.${promise.title.toLowerCase().replace(/\s+/g, '-')}.title`,
                          ) || promise.title}
                        </h3>
                        <p className="mt-1 text-sm text-theme-600">
                          {t(
                            `speak-designer.promises.${promise.title.toLowerCase().replace(/\s+/g, '-')}.description`,
                          ) || promise.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* SECTION 3: WHAT YOU DON'T RISK */}
      <Container className="mt-32 sm:mt-40">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
            {t('risks.title')}
          </h2>
        </FadeIn>

        <div className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {risks.map((risk) => (
              <FadeIn key={risk.title}>
                <div className="group h-full rounded-3xl border border-theme-200 p-8 transition-all duration-300 hover:border-theme-400 hover:shadow-lg">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-theme-950 text-white transition-transform duration-300 group-hover:scale-110">
                    <risk.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-theme-950">
                    {t(
                      `risks.items.${risk.title.toLowerCase().replace(/[\s']/g, '-').replace(/-+/g, '-')}.title`,
                    ) || risk.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-theme-600">
                    {t(
                      `risks.items.${risk.title.toLowerCase().replace(/[\s']/g, '-').replace(/-+/g, '-')}.description`,
                    ) || risk.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-sm text-theme-400">{t('risks.note')}</p>
        </FadeIn>
      </Container>

      {/* SECTION 4: THE TOOLKIT */}
      <div className="relative mt-32 sm:mt-40">
        <GridPattern
          className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom,white,transparent)] fill-theme-400/5 stroke-theme-950/5"
          yOffset={-96}
        />
        <Container>
          <FadeIn className="text-center">
            <p className="text-sm font-semibold tracking-wider text-theme-400 uppercase">
              {t('toolkit.eyebrow')}
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
              {t('toolkit.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-theme-600">
              {t('toolkit.description')}
            </p>
          </FadeIn>

          <div className="mt-16">
            <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {toolkit.map((tool, index) => {
                const cardStyles = [
                  {
                    bg: 'from-violet-50/60 via-white to-purple-50/60',
                    ring: 'ring-violet-100',
                    category: 'text-violet-600',
                    benefitBg: 'bg-violet-50/80',
                  },
                  {
                    bg: 'from-emerald-50/60 via-white to-teal-50/60',
                    ring: 'ring-emerald-100',
                    category: 'text-emerald-600',
                    benefitBg: 'bg-emerald-50/80',
                  },
                  {
                    bg: 'from-amber-50/60 via-white to-orange-50/60',
                    ring: 'ring-amber-100',
                    category: 'text-amber-600',
                    benefitBg: 'bg-amber-50/80',
                  },
                ]
                const style = cardStyles[index]
                return (
                  <FadeIn key={tool.title}>
                    <div
                      className={`group flex h-full flex-col rounded-3xl bg-gradient-to-br ${style.bg} p-8 shadow-sm ring-1 ${style.ring} transition-all duration-300 hover:shadow-lg`}
                    >
                      <p
                        className={`text-xs font-semibold tracking-wider uppercase ${style.category}`}
                      >
                        {t(
                          `toolkit.cards.${tool.category.toLowerCase().replace(/\s+/g, '-')}.category`,
                        ) || tool.category}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-bold text-theme-950">
                        {t(
                          `toolkit.cards.${tool.category.toLowerCase().replace(/\s+/g, '-')}.title`,
                        ) || tool.title}
                      </h3>
                      <p className="mt-4 flex-grow text-theme-600">
                        {t(
                          `toolkit.cards.${tool.category.toLowerCase().replace(/\s+/g, '-')}.description`,
                        ) || tool.description}
                      </p>
                      <div
                        className={`mt-6 rounded-2xl ${style.benefitBg} p-4`}
                      >
                        <p className="text-sm font-medium text-theme-950">
                          {t(
                            `toolkit.cards.${tool.category.toLowerCase().replace(/\s+/g, '-')}.benefit`,
                          ) || tool.benefit}
                        </p>
                      </div>
                      <p className="mt-4 text-xs text-theme-400">
                        {t(
                          `toolkit.cards.${tool.category.toLowerCase().replace(/\s+/g, '-')}.timeline`,
                        ) || tool.timeline}
                      </p>
                    </div>
                  </FadeIn>
                )
              })}
            </FadeInStagger>
          </div>
        </Container>
      </div>

      {/* SECTION 5: PROOF OF COMPETENCE */}
      <Container className="mt-32 sm:mt-40">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
            {t('proof.title')}
          </h2>
        </FadeIn>

        <FadeIn className="mt-12">
          <div className="overflow-hidden rounded-3xl bg-theme-950">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <p className="text-xs font-semibold tracking-wider text-theme-400 uppercase">
                  {t('proof.left-label')}
                </p>
                <div className="mt-4 rounded-2xl bg-theme-900 p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 rounded bg-theme-800" />
                      <div className="h-4 w-1/2 rounded bg-theme-800" />
                      <div className="h-4 w-5/6 rounded bg-theme-800" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-20 w-1/3 rounded bg-theme-800" />
                      <div className="h-20 w-1/3 rounded bg-theme-800" />
                      <div className="h-20 w-1/3 rounded bg-theme-800" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-theme-300">
                  {t('proof.left-caption')}
                </p>
              </div>
              <div className="border-t border-theme-800 p-8 lg:border-t-0 lg:border-l lg:p-12">
                <p className="text-xs font-semibold tracking-wider text-theme-400 uppercase">
                  {t('proof.right-label')}
                </p>
                <div className="mt-4 rounded-2xl bg-white p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-theme-200" />
                      <div className="h-3 w-3 rounded-full bg-theme-200" />
                      <div className="h-3 w-3 rounded-full bg-theme-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 rounded bg-theme-100" />
                      <div className="h-4 w-1/2 rounded bg-theme-100" />
                      <div className="h-4 w-5/6 rounded bg-theme-100" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-20 w-1/3 rounded bg-theme-100" />
                      <div className="h-20 w-1/3 rounded bg-theme-100" />
                      <div className="h-20 w-1/3 rounded bg-theme-100" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-theme-300">
                  {t('proof.right-caption')}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-8 text-center">
          <p className="text-sm text-theme-600">{t('proof.stat-line')}</p>
        </FadeIn>
      </Container>

      {/* SECTION 6: MAKE YOUR WEBSITES SMARTER */}
      <Container className="mt-32 sm:mt-40">
        <div className="rounded-4xl bg-gradient-to-br from-indigo-50/60 via-violet-50/40 to-fuchsia-50/60 px-8 py-16 ring-1 ring-indigo-100 sm:px-12 sm:py-24">
          <FadeIn className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-indigo-200">
              <SparklesIcon className="h-4 w-4 text-indigo-600" />
              <span className="text-xs font-semibold text-indigo-700">
                AI Integration
              </span>
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
              {t('ai.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-theme-600">
              {t('ai.description')}
            </p>
          </FadeIn>

          <div className="mt-12">
            <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {aiExamples.map((example, index) => (
                <FadeIn key={index}>
                  <div className="rounded-2xl border border-indigo-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm">
                    <p className="text-xs font-semibold tracking-wider text-indigo-500 uppercase">
                      {t(`ai.examples.${index + 1}.context`) || example.context}
                    </p>
                    <p className="mt-3 text-theme-950">
                      {t(`ai.examples.${index + 1}.feature`) || example.feature}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </FadeInStagger>
          </div>

          <FadeIn className="mt-10 text-center">
            <p className="font-display text-lg font-medium text-theme-950">
              {t('ai.sell')}
            </p>
            <p className="mt-2 text-sm text-indigo-600/70">{t('ai.note')}</p>
          </FadeIn>
        </div>
      </Container>

      {/* SECTION 7: HOW WE PARTNER */}
      <Container className="mt-32 sm:mt-40">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-theme-950 sm:text-4xl">
            {t('partnership.title')}
          </h2>
        </FadeIn>

        <div className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {partnershipModels.map((model, index) => (
              <FadeIn key={index}>
                <div
                  className={clsx(
                    'h-full rounded-3xl p-8',
                    index === 0
                      ? 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white'
                      : 'bg-gradient-to-br from-teal-50/50 via-white to-cyan-50/50 ring-1 ring-teal-100',
                  )}
                >
                  <p
                    className={clsx(
                      'text-xs font-semibold tracking-wider uppercase',
                      index === 0 ? 'text-slate-300' : 'text-teal-600',
                    )}
                  >
                    {t(`partnership.models.${index + 1}.pricing`) ||
                      model.pricing}
                  </p>
                  <h3
                    className={clsx(
                      'mt-3 font-display text-2xl font-bold',
                      index === 0 ? 'text-white' : 'text-theme-950',
                    )}
                  >
                    {t(`partnership.models.${index + 1}.type`) || model.type}
                  </h3>
                  <p
                    className={clsx(
                      'mt-4',
                      index === 0 ? 'text-slate-200' : 'text-theme-600',
                    )}
                  >
                    {t(`partnership.models.${index + 1}.description`) ||
                      model.description}
                  </p>
                  <div
                    className={clsx(
                      'mt-6 rounded-2xl p-4',
                      index === 0 ? 'bg-white/10' : 'bg-teal-50/60',
                    )}
                  >
                    <p
                      className={clsx(
                        'text-sm',
                        index === 0 ? 'text-slate-100' : 'text-teal-800',
                      )}
                    >
                      <span className="font-semibold">
                        {t('partnership.best-for') || 'Best for:'}
                      </span>{' '}
                      {t(`partnership.models.${index + 1}.best-for`) ||
                        model.bestFor}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

        <FadeIn className="mt-12 rounded-2xl bg-gradient-to-r from-amber-100/50 via-orange-50/50 to-rose-100/50 p-6 text-center ring-1 ring-orange-100">
          <p className="justify-left flex items-center gap-4 text-sm text-orange-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            {t('partnership.how-start')}
          </p>
        </FadeIn>
      </Container>

      {/* SECTION 8: FINAL CTA */}
      <Container className="mt-32 sm:mt-40">
        <FadeIn>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-violet-900 via-theme-950 to-purple-950 px-8 py-20 text-center sm:px-12 sm:py-32">
            <GridPattern
              className="absolute inset-0 h-full w-full fill-white/5 stroke-white/5"
              yOffset={-96}
              interactive={false}
            />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('final-cta.title')}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-violet-200">
                {t('final-cta.body')}
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button href="/contact" invert className="group">
                  {t('final-cta.primary')}
                  <ArrowRightIcon className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="mt-8 text-sm text-violet-300/70">
                {t('final-cta.secondary')}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Footer note */}
      <Container className="mt-16 pb-24">
        <FadeIn className="text-center">
          <p className="text-xs text-theme-400">{t('footer.note')}</p>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
