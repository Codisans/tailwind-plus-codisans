import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { ListBlock } from '@/blocks/ListBlock'
import heroImage from '@/images/shopify-screenshot.png'
import { ContactBlock } from '@/blocks/ContactBlock'
import { loadCaseStudies } from '@/lib/mdx'
import {
  CaseStudyCard,
  CaseStudyCardsBlock,
} from '@/blocks/CaseStudyCardsBlock'
import { ServiceHeader } from '@/blocks/ServiceHeader'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'EcommercePage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}
export default async function Shopify({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('EcommercePage')
  const caseStudies = await loadCaseStudies(locale, [
    'dcv87',
    'la-torre-ambulante',
  ])

  return (
    <RootLayout className="e-commerce">
      <ServiceHeader
        service="e-commerce"
        title={t('header.title')}
        summary={t('header.summary')}
      />

      <PromoListBlock
        eyebrow={t('benefits.eyebrow')}
        title={t('benefits.title')}
        description={t('benefits.description')}
        items={[
          {
            heading: t('benefits.performance.heading'),
            description: t('benefits.performance.description'),
          },
          {
            heading: t('benefits.brand.heading'),
            description: t('benefits.brand.description'),
          },
          {
            heading: t('benefits.scale.heading'),
            description: t('benefits.scale.description'),
          },
          {
            heading: t('benefits.tco.heading'),
            description: t('benefits.tco.description'),
          },
          {
            heading: t('benefits.commerce.heading'),
            description: t('benefits.commerce.description'),
          },
        ]}
        invert={true}
      />

      <ListBlock
        eyebrow={t('why-shopify.eyebrow')}
        title={t('why-shopify.title')}
        summary={t('why-shopify.summary')}
        items={[
          {
            heading: t('why-shopify.checkout.heading'),
            description: t('why-shopify.checkout.description'),
          },
          {
            heading: t('why-shopify.infrastructure.heading'),
            description: t('why-shopify.infrastructure.description'),
          },
          {
            heading: t('why-shopify.apis.heading'),
            description: t('why-shopify.apis.description'),
          },
          {
            heading: t('why-shopify.innovation.heading'),
            description: t('why-shopify.innovation.description'),
          },
          {
            heading: t('why-shopify.global.heading'),
            description: t('why-shopify.global.description'),
          },
        ]}
        image={heroImage}
      />

      <CaseStudyCardsBlock
        eyebrow={t('case-studies.eyebrow')}
        title={t('case-studies.title')}
        summary={t('case-studies.summary')}
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

      <ContactBlock
        heading={t('contact.heading')}
        description={t('contact.description')}
        cta={t('contact.cta')}
      />
    </RootLayout>
  )
}
