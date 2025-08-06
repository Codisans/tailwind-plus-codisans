import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactSection } from '@/components/ContactSection'
import heroImage from '@/images/web-dev-landscape.webp'
import { RootLayout } from '@/components/RootLayout'
import { Card, CardsBlock } from '../../blocks/CardsBlock'
import { ListBlock } from '../../blocks/ListBlock'
import { PageHeader } from '../../blocks/PageHeader'
import { loadCaseStudies } from '@/lib/mdx'
import { Container } from '@/components/Container'

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
      title: t('HomePage.services.web-development.title'),
      description: t('HomePage.services.web-development.description'),
    },
    {
      title: t('HomePage.services.ai-solutions.title'),
      description: t('HomePage.services.ai-solutions.description'),
    },
    {
      title: t('HomePage.services.e-commerce.title'),
      description: t('HomePage.services.e-commerce.description'),
    },
    {
      title: t('HomePage.services.custom-content-management.title'),
      description: t('HomePage.services.custom-content-management.description'),
    },
  ]

  return (
    <RootLayout>
      <PageHeader title={t('HomePage.title')} summary={t('HomePage.intro')} />

      <div className="mt-24 rounded-4xl bg-theme-950 py-20 text-white sm:mt-32 sm:py-32 lg:mt-56">
        <Container className="!max-w-4xl text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {t('HomePage.pain-point')}
        </Container>
      </div>

      <ListBlock
        eyebrow={t('HomePage.services.eyebrow')}
        title={t('HomePage.services.title')}
        summary={t('HomePage.services.summary')}
        image={heroImage}
        // video="/hero-loop.mp4"
        grayscale={false}
        items={services}
      />

      <CardsBlock
        title={t('HomePage.case-studies.title')}
        summary={t('HomePage.case-studies.summary')}
        cards={caseStudies.map<Card>((caseStudy) => ({
          type: t('Global.case-study'),
          date: caseStudy.date,
          title: caseStudy.title,
          image: caseStudy.image?.src as string,
          description: caseStudy.description,
          link: caseStudy.href,
        }))}
      />

      <ContactSection />
    </RootLayout>
  )
}
