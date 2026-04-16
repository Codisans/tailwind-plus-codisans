import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactBlock } from '@/blocks/ContactBlock'
import plantImage from '@/images/plant.png'
import { RootLayout } from '@/components/RootLayout'
import { loadCaseStudies } from '@/lib/mdx'
import { ServiceListBlock } from '@/blocks/ServiceListBlock'
import { CaseStudyCard, HeroCardsBlock } from '@/blocks/HeroCardsBlock'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

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
  const caseStudies = await loadCaseStudies(locale, [
    'swid-studio',
    'keai',
    'la-torre-ambulante',
    'nuestros-tiempos',
  ])

  const services = [
    {
      service: 'software-development',
      title: t('HomePage.service-list.software-development.title'),
      description: t('HomePage.service-list.software-development.description'),
      href: '/services/software-development',
    },
    {
      service: 'e-commerce',
      title: t('HomePage.service-list.e-commerce.title'),
      description: t('HomePage.service-list.e-commerce.description'),
      href: '/services/e-commerce',
    },
    {
      service: 'ai-automation',
      title: t('HomePage.service-list.ai-automation.title'),
      description: t('HomePage.service-list.ai-automation.description'),
      href: '/services/ai-automation',
    },
    {
      service: 'cms-websites',
      title: t('HomePage.service-list.cms-websites.title'),
      description: t('HomePage.service-list.cms-websites.description'),
      href: '/services/cms-websites',
    },
  ]

  return (
    <RootLayout>
      <HeroCardsBlock
        title={t('HomePage.title')}
        summary={t('HomePage.case-studies.title')}
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

      <ServiceListBlock
        eyebrow={t('HomePage.service-list.eyebrow')}
        title={t('HomePage.service-list.title')}
        summary={t('HomePage.service-list.summary')}
        image={plantImage}
        items={services}
      />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <h2 className="font-display text-3xl font-medium text-balance text-theme-950">
          {t('HomePage.team-cta.title')}
        </h2>
        <p className="mt-6 max-w-3xl text-2xl text-theme-600">
          {t('HomePage.team-cta.subtitle')}
        </p>
        <div className="flex gap-x-4 gap-y-2">
          <Button className="mt-6" href="/about">
            {t('HomePage.team-cta.about')}
          </Button>
          <Button className="mt-6" href="/services">
            {t('HomePage.team-cta.services')}
          </Button>
          <Button className="mt-6" href="/work">
            {t('HomePage.team-cta.case-studies')}
          </Button>
          <Button className="mt-6" href="/blog">
            {t('HomePage.team-cta.blog')}
          </Button>
        </div>
      </Container>

      <ContactBlock />
    </RootLayout>
  )
}
