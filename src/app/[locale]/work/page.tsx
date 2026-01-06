import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactBlock } from '@/blocks/ContactBlock'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'

async function CaseStudies({
  title,
  caseStudies,
}: {
  title: string
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  const t = await getTranslations('Global')
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-theme-950">
          {title}
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 max-w-40 flex-none object-contain object-left"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-theme-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-theme-950 after:ml-4 after:font-semibold after:text-theme-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service?.join(', ')}
                    </p>
                    <p className="text-sm text-theme-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date, t('locale'))}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-theme-950">
                    <Link href={caseStudy.href}>{caseStudy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-theme-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      {t('read-case-study')}
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'WorkPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Work({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('WorkPage')
  let caseStudies = await loadCaseStudies(locale)

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <CaseStudies title={t('listing-title')} caseStudies={caseStudies} />

      <ContactBlock />
    </RootLayout>
  )
}
