import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { Emails } from '@/components/Emails'
import { Card, CardsBlock } from '@/blocks/CardsBlock'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { ListBlock } from '@/blocks/ListBlock'
import heroImage from '@/images/web-dev-landscape.webp'
import { loadCaseStudies } from '@/lib/mdx'
import Image from 'next/image'
import { ContactBlock } from '@/blocks/ContactBlock'
import chillDude from '@/images/web-dev-landscape.webp'
import laravelLogo from '@/images/logos/laravel-logotype.svg'
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
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('AutomationPage')
  const caseStudies = await loadCaseStudies(locale, [
    'nuestros-tiempos',
    'keai',
  ])

  return (
    <RootLayout className="ai-automation">
      <ServiceHeader
        service="ai-automation"
        title={t('header.title')}
        summary={t('header.summary')}
      />

      <PromoListBlock
        eyebrow={t('benefits.eyebrow')}
        title={t('benefits.title')}
        description={t('benefits.description')}
        items={[
          {
            heading: t('benefits.automate.heading'),
            description: t('benefits.automate.description'),
          },
          {
            heading: t('benefits.decisions.heading'),
            description: t('benefits.decisions.description'),
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
          image:
            (caseStudy.thumbnail?.src as string) ??
            (caseStudy.image?.src as string),
          description: caseStudy.description,
          link: caseStudy.href,
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
