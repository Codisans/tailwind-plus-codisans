import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { Card, CardsBlock } from '@/blocks/CardsBlock'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { loadProjects } from '@/lib/mdx'
import { ContactBlock } from '@/blocks/ContactBlock'
import { ServiceHeader } from '@/blocks/ServiceHeader'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'AutomationPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}
export default async function Automation({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations('AutomationPage')
  const caseStudies = await loadProjects(locale, ['nuestros-tiempos', 'keai'])

  return (
    <RootLayout className="ai-automation">
      <ServiceHeader
        service="ai-automation"
        title={t('header.title')}
        summary={t('header.summary')}
      />

      <PromoListBlock
        title={t('benefits.title')}
        items={[
          {
            heading: t('benefits.automate.heading'),
            description: t('benefits.automate.description'),
          },
          {
            heading: t('benefits.customer.heading'),
            description: t('benefits.customer.description'),
          },
          {
            heading: t('benefits.operations.heading'),
            description: t('benefits.operations.description'),
          },
        ]}
        invert={true}
      />

      <CardsBlock
        title={t('case-studies.title')}
        cards={caseStudies.map<Card>((caseStudy) => ({
          type: caseStudy.service?.[0],
          date: caseStudy.date,
          title: caseStudy.title,
          image: caseStudy.thumbnail?.src ?? caseStudy.image.src,
          description: caseStudy.description,
          link: caseStudy.href,
          external: caseStudy.isExternal,
        }))}
      />

      {/* <SectionIntro
        title={t('specialists.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('specialists.description')}</p>
      </SectionIntro> */}

      <ContactBlock cta={t('contact.cta')} />
    </RootLayout>
  )
}
