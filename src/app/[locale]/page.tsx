import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactBlock } from '@/blocks/ContactBlock'
import heroImage from '@/images/web-dev-landscape.webp'
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
      title: t('components.service-cards.web-development.title'),
      description: t('components.service-cards.web-development.description'),
      href: '/services/software-development',
    },
    {
      service: 'e-commerce',
      title: t('components.service-cards.e-commerce.title'),
      description: t('components.service-cards.e-commerce.description'),
      href: '/services/e-commerce',
    },
    {
      service: 'ai-automation',
      title: t('components.service-cards.ai-solutions.title'),
      description: t('components.service-cards.ai-solutions.description'),
      href: '/services/ai-automation',
    },
    {
      service: 'custom-cms',
      title: t('components.service-cards.custom-content-management.title'),
      description: t(
        'components.service-cards.custom-content-management.description',
      ),
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
        eyebrow={t('components.service-cards.eyebrow')}
        title={t('components.service-cards.title')}
        summary={t('components.service-cards.summary')}
        image={plantImage}
        items={services}
      />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <h2 className="font-display text-3xl font-medium text-balance text-theme-950">
          We're a team of developers who are passionate about building software
          solutions that make an impact.
        </h2>
        <p className="mt-6 max-w-3xl text-2xl text-theme-600">
          Learn more about what we do and who we are:
        </p>
        <div className="flex gap-x-4 gap-y-2">
          <Button className="mt-6" href="/about">
            About
          </Button>
          <Button className="mt-6" href="/services">
            Services
          </Button>
          <Button className="mt-6" href="/work">
            Case studies
          </Button>
          <Button className="mt-6" href="/blog">
            Blog
          </Button>
        </div>
      </Container>

      <ContactBlock />
    </RootLayout>
  )
}
