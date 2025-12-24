import { RootLayout } from '@/components/RootLayout'
import { ListBlock } from '../../../blocks/ListBlock'
import laravelLogo from '@/images/laravel-logo.webp'
import statamicLogoLime from '@/images/statamic-mark-lime.webp'
import chillDude from '@/images/chill-dude.webp'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { getTranslations } from 'next-intl/server'
import { Card, CardsBlock } from '../../../blocks/CardsBlock'
import { loadCaseStudies } from '@/lib/mdx'
import { SectionIntro } from '@/components/SectionIntro'
import { ContactSection } from '@/components/ContactSection'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'LaravelPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Laravel({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('LaravelPage')
  const tGlobal = await getTranslations('Global')
  const caseStudies = await loadCaseStudies(locale, [
    'keai',
    'nuestros-tiempos',
    'swid-studio',
  ])

  const services = [
    {
      title: t('reasons.future-proof.title'),
      description: t('reasons.future-proof.description'),
    },
    {
      title: t('reasons.open-source.title'),
      description: t('reasons.open-source.description'),
    },
    {
      title: t('reasons.efficient.title'),
      description: t('reasons.efficient.description'),
    },
    {
      title: t('reasons.safety.title'),
      description: t('reasons.safety.description'),
    },
  ]

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
            <FadeIn className="w-120 flex-none lg:w-130">
              <Image
                alt="Laravel Logo"
                src={laravelLogo}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="object-cover"
              />
            </FadeIn>

            <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none">
              <FadeIn className="max-w-md">
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                  {t('what.title')}
                </h2>

                <div className="mt-6 space-y-6 text-base text-theme-600">
                  <p>{t('what.description')}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </div>

      <ListBlock
        title={t('reasons.title')}
        // summary={t('reasons.summary')}
        image={chillDude}
        grayscale={false}
        items={services}
      />

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
            <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none">
              <FadeIn className="max-w-md">
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                  {t('statamic.title')}
                </h2>

                <div className="mt-6 space-y-6 text-base text-theme-600">
                  <p>{t('statamic.description')}</p>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="w-120 flex-none lg:w-130">
              <Image
                alt="Statamic Logo"
                src={statamicLogoLime}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="object-cover"
              />
            </FadeIn>
          </div>
        </Container>
      </div>

      <CardsBlock
        title={t('case-studies.title')}
        // summary={t('HomePage.case-studies.summary')}
        cards={caseStudies.map<Card>((caseStudy) => ({
          type: tGlobal('case-study'),
          date: caseStudy.date,
          title: caseStudy.title,
          image:
            (caseStudy.thumbnail?.src as string) ??
            (caseStudy.image?.src as string),
          description: caseStudy.description,
          link: caseStudy.href,
        }))}
      />

      <SectionIntro
        title={t('specialists.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('specialists.description')}</p>
      </SectionIntro>

      <ContactSection />
    </RootLayout>
  )
}
