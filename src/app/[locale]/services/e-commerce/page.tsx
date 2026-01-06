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

  const t = await getTranslations({ locale, namespace: 'ContactPage' })

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
  const t = await getTranslations('ContactPage')
  const caseStudies = await loadCaseStudies(locale, [
    'dcv87',
    'la-torre-ambulante',
  ])

  return (
    <RootLayout className="e-commerce">
      <ServiceHeader
        service="e-commerce"
        title="Custom Shopify Storefronts Built for Performance, Scalability & Conversions"
        summary="At Codisans, we design and develop custom Shopify storefronts for businesses that need speed, flexibility, and a scalable foundation to support long-term growth."
      />

      <PromoListBlock
        eyebrow={'Beyond Templates'}
        title={'Why You Need a Custom Storefront'}
        description={
          'Standard Shopify themes are ideal for getting started, but they are not built for complex business needs or sustained growth.'
        }
        items={[
          {
            heading: 'Tailored Customer Experience',
            description:
              'Design unique user journeys, product flows, and interactions that match your brand and customer behavior — not the constraints of a template.',
          },
          {
            heading: 'Higher Performance & Faster Load Times',
            description:
              'Custom storefronts are built for speed, improving mobile performance, SEO rankings, and conversion rates.',
          },
          {
            heading: 'Scalability Without Replatforming',
            description:
              'Add new features, markets, and integrations as your business grows, without rebuilding your store from scratch.',
          },
          {
            heading: 'Reduced Dependency on Apps',
            description:
              'Replace costly third-party apps with custom logic, lowering long-term operational costs and improving reliability.',
          },
          {
            heading: 'Full Control Over Business Logic',
            description:
              'Implement complex product configurations, pricing rules, and workflows tailored to your business model.',
          },
        ]}
        invert={true}
      />

      <ListBlock
        eyebrow="Why use Shopify?"
        title="Enterprise-Grade E-commerce Without Enterprise Complexity"
        summary="Shopify provides a robust, secure, and scalable backend trusted by millions of businesses worldwide."
        items={[
          {
            heading: 'Best-in-Class Checkout & Payments',
            description:
              'Some more info about this reason. Some more info about this reason. Some more info about this reason.',
          },
          {
            heading: 'Scalable & Reliable Infrastructure',
            description:
              'Some more info about this reason. Some more info about this reason. Some more info about this reason.',
          },
          {
            heading: 'Powerful APIs & Ecosystem',
            description:
              'Some more info about this reason. Some more info about this reason. Some more info about this reason.',
          },
          {
            heading: 'Continuous Platform Innovation',
            description:
              'Shopify evolves constantly, giving your business access to new features without costly upgrades.',
          },
          {
            heading: 'Global Commerce Ready',
            description:
              'Multi-currency, multi-language, and international market support built into the platform.',
          },
        ]}
        image={heroImage}
      />

      <CaseStudyCardsBlock
        eyebrow="Our Work"
        title="Real Results."
        summary="We’ve helped growing brands transform their e-commerce platforms into high-performance sales channels using Shopify Hydrogen and composable architectures."
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
        heading="Your Shopify Partners"
        description="We understand the importance of a storefront that generates conversions. If you want a reliable business model, we're here to help."
        cta="Get in touch"
      />
    </RootLayout>
  )
}
