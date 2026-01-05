import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactBlock } from '@/blocks/ContactBlock'
import heroImage from '@/images/web-dev-landscape.webp'
import { RootLayout } from '@/components/RootLayout'
import { Card, CardsBlock } from '../../blocks/CardsBlock'
import { ListBlock } from '../../blocks/ListBlock'
import { PageHeader } from '../../blocks/PageHeader'
import { loadCaseStudies } from '@/lib/mdx'
import { Container } from '@/components/Container'
import { CardListBlock } from '@/blocks/CardListBlock'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'HomePage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations()
  const caseStudies = await loadCaseStudies(locale)

  const services = [
    {
      title: t('components.service-cards.web-development.title'),
      description: t('components.service-cards.web-development.description'),
      href: '/services/software-development',
    },
    {
      title: t('components.service-cards.e-commerce.title'),
      description: t('components.service-cards.e-commerce.description'),
      href: '/services/e-commerce',
    },
    {
      title: t('components.service-cards.ai-solutions.title'),
      description: t('components.service-cards.ai-solutions.description'),
      href: '/services/ai-automation',
    },
    {
      title: t('components.service-cards.custom-content-management.title'),
      description: t(
        'components.service-cards.custom-content-management.description',
      ),
      href: '/services/cms-websites',
    },
  ]

  return (
    <RootLayout>
      <PageHeader title={t('HomePage.title')} summary={t('HomePage.intro')} />

      <div className="mt-24 rounded-4xl bg-zinc-100 py-20 ring ring-zinc-100 sm:mt-32 sm:py-32 lg:mt-56">
        <Container className="!max-w-4xl text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {/* {t('HomePage.pain-point')} */}
          Software Development stuff / Shopify / Laravel (Do the ideal clients
          know what these are?)
        </Container>
      </div>

      <CardListBlock
        eyebrow={t('components.service-cards.eyebrow')}
        title={t('components.service-cards.title')}
        summary={t('components.service-cards.summary')}
        image={heroImage}
        // video="/hero-loop.mp4"
        items={services}
      />

      <CardsBlock
        title={t('HomePage.case-studies.title')}
        // summary={t('HomePage.case-studies.summary')}
        cards={caseStudies.map<Card>((caseStudy) => ({
          type: t('Global.case-study'),
          date: caseStudy.date,
          title: caseStudy.title,
          image:
            (caseStudy.thumbnail?.src as string) ??
            (caseStudy.image?.src as string),
          description: caseStudy.description,
          link: caseStudy.href,
        }))}
      />

      <ContactBlock />
    </RootLayout>
  )
}
