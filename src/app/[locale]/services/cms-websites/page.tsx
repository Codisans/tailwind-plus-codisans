import { RootLayout } from '@/components/RootLayout'
import { ListBlock } from '@/blocks/ListBlock'
import statamicLogo from '@/images/logos/statamic-logotype.svg'
import statamicScreenshot from '@/images/statamic-screenshot.png'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { getTranslations } from 'next-intl/server'
import { loadCaseStudies } from '@/lib/mdx'
import { ContactBlock } from '@/blocks/ContactBlock'
import Image from 'next/image'
import { ServiceHeader } from '@/blocks/ServiceHeader'
import {
  CaseStudyCard,
  CaseStudyCardsBlock,
} from '@/blocks/CaseStudyCardsBlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CmsWebsitesPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Statamic({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('CmsWebsitesPage')
  const caseStudies = await loadCaseStudies(locale, [
    'swid-studio',
    'felici-house',
    'sunday-chapter',
  ])

  return (
    <RootLayout className="cms-websites">
      <ServiceHeader
        service="cms-websites"
        title={t('header.title')}
        summary={t('header.summary')}
      />

      <div className="mt-16 sm:-mb-8 lg:mt-24">
        <Container>
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8 xl:gap-x-20">
            <FadeIn className="w-40 flex-none">
              <Image
                alt="Laravel Logo"
                src={statamicLogo}
                className="w-full object-cover"
              />
            </FadeIn>
            <FadeIn className="max-w-md max-sm:text-center">
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                {t('statamic.heading')}
              </h2>
            </FadeIn>
          </div>
        </Container>
      </div>

      <ListBlock
        title={t('reasons.title')}
        summary={t('reasons.summary')}
        image={statamicScreenshot}
        items={[
          {
            heading: t('reasons.editor-friendly.heading'),
            description: t('reasons.editor-friendly.description'),
          },
          {
            heading: t('reasons.flexible.heading'),
            description: t('reasons.flexible.description'),
          },
          {
            heading: t('reasons.powerful.heading'),
            description: t('reasons.powerful.description'),
          },
        ]}
      />

      <CaseStudyCardsBlock
        title={t('case-studies.title')}
        cards={caseStudies.map<CaseStudyCard>((caseStudy) => ({
          service: caseStudy.service?.[0],
          date: caseStudy.date,
          title: caseStudy.title,
          image:
            (caseStudy.thumbnail?.src as string) ??
            (caseStudy.image?.src as string),
          description: caseStudy.description,
          link: caseStudy.href,
        }))}
      />

      <ContactBlock cta={t('contact.cta')} />
    </RootLayout>
  )
}
