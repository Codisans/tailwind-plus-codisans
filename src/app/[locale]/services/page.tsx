import { ContactBlock } from '@/blocks/ContactBlock'
import { PageIntro } from '@/components/PageIntro'
import discoverImage from '@/images/discovery.webp'
import defineImage from '@/images/define.webp'
import buildImage from '@/images/build.webp'
import deliverImage from '@/images/deliver.webp'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { CardsBlock } from '@/blocks/CardsBlock'
import shopifyLogo from '@/images/logos/shopify-logotype.svg'
import laravelLogo from '@/images/logos/laravel-logotype.svg'
import statamicLogo from '@/images/logos/statamic-logotype.svg'
import aiLogo from '@/images/logos/ai-icon.svg'
import { StickyListBlock } from '@/blocks/StickyListBlock'
import { ThreeColumnText } from '@/blocks/ThreeColumnText'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'services' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Services() {
  const t = await getTranslations('services')
  return (
    <RootLayout>
      <PageIntro
        eyebrow={t('blocks.page-intro.eyebrow')}
        title={t('blocks.page-intro.title')}
      >
        <p>{t('blocks.page-intro.description')}</p>
      </PageIntro>

      <CardsBlock
        // title={t('HomePage.case-studies.title')}
        // summary={t('HomePage.case-studies.summary')}
        cards={[
          {
            type: t('e-commerce.tag'),
            date: 'Shopify',
            title: t('e-commerce.title'),
            image: shopifyLogo,
            description: t('e-commerce.description'),
            link: '/services/e-commerce',
          },
          {
            type: t('software-development.tag'),
            date: 'Laravel',
            title: t('software-development.title'),
            image: laravelLogo,
            description: t('software-development.description'),
            link: '/services/software-development',
          },
          {
            type: t('custom-cms.tag'),
            date: 'Statamic',
            title: t('custom-cms.title'),
            image: statamicLogo,
            description: t('custom-cms.description'),
            link: '/services/cms-websites',
          },
          {
            type: t('ai-automation.tag'),
            date: '',
            title: t('ai-automation.title'),
            image: aiLogo,
            description: t('ai-automation.description'),
            link: '/services/ai-automation',
          },
        ]}
      />

      <StickyListBlock
        eyebrow={t('blocks.sticky-list-block.eyebrow')}
        heading={t('blocks.sticky-list-block.heading')}
        description={t('blocks.sticky-list-block.description')}
        items={[
          {
            heading: t('blocks.sticky-list-block.items.item-1.heading'),
            description: t('blocks.sticky-list-block.items.item-1.description'),
            image: discoverImage,
          },
          {
            heading: t('blocks.sticky-list-block.items.item-2.heading'),
            description: t('blocks.sticky-list-block.items.item-2.description'),
            image: defineImage,
          },
          {
            heading: t('blocks.sticky-list-block.items.item-3.heading'),
            description: t('blocks.sticky-list-block.items.item-3.description'),
            image: buildImage,
          },
          {
            heading: t('blocks.sticky-list-block.items.item-4.heading'),
            description: t('blocks.sticky-list-block.items.item-4.description'),
            image: deliverImage,
          },
        ]}
      />

      <ThreeColumnText
        eyebrow={t('blocks.three-column-text.eyebrow')}
        title={t('blocks.three-column-text.heading')}
        description={t('blocks.three-column-text.description')}
        items={[
          {
            heading: t('blocks.three-column-text.item-1.heading'),
            description: t('blocks.three-column-text.item-1.description'),
          },
          {
            heading: t('blocks.three-column-text.item-2.heading'),
            description: t('blocks.three-column-text.item-2.description'),
          },
          {
            heading: t('blocks.three-column-text.item-3.heading'),
            description: t('blocks.three-column-text.item-3.description'),
          },
        ]}
      />

      <ContactBlock />
    </RootLayout>
  )
}
