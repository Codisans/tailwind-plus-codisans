import { Badge } from '@/components/Badge'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { getTranslations } from 'next-intl/server'

export default async function CaseStudyWrapper({
  caseStudy,
  children,
  locale = 'en',
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
  locale?: string
}) {
  const t = await getTranslations('Global')
  let allCaseStudies = await loadCaseStudies(locale)
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata.title !== caseStudy.title)
    .slice(0, 2)

  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow={t('case-study')} title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
            {caseStudy.url && (
              <a
                href={caseStudy.url}
                className="relative z-10 mt-4 block"
                target="_blank"
              >
                <Badge color="teal">
                  {caseStudy.url.replace('https://', '')}
                </Badge>
              </a>
              // <a className="mx-auto mt-8 block w-max rounded-full bg-theme-100 px-4 py-1.5 text-base text-theme-600">
              //   {caseStudy.url}
              // </a>
            )}
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-theme-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-theme-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('client')}</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('year')}</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-theme-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">{t('service')}</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-theme-200 bg-theme-100">
              <div className="mx-auto -my-px max-w-304 bg-theme-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title={t('more-case-studies')}
          pages={moreCaseStudies}
          locale={locale}
        />
      )}

      <ContactSection />
    </RootLayout>
  )
}
