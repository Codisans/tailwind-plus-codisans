import { RootLayout } from '@/components/RootLayout'
import { ListBlock } from '@/blocks/ListBlock'
import laravelLogo from '@/images/logos/laravel-logotype.svg'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { getTranslations } from 'next-intl/server'
import { loadCaseStudies } from '@/lib/mdx'
import { SectionIntro } from '@/components/SectionIntro'
import { ContactBlock } from '@/blocks/ContactBlock'
import Image from 'next/image'
import { ServiceHeader } from '@/blocks/ServiceHeader'
import { CaseStudyCardsBlock } from '@/blocks/CaseStudyCardsBlock'
import { CaseStudyCard } from '@/blocks/HeroCardsBlock'

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
  const caseStudies = await loadCaseStudies(locale, [
    'keai',
    'nuestros-tiempos',
  ])

  const services = [
    {
      heading: t('reasons.future-proof.title'),
      description: t('reasons.future-proof.description'),
    },
    {
      heading: t('reasons.open-source.title'),
      description: t('reasons.open-source.description'),
    },
    {
      heading: t('reasons.efficient.title'),
      description: t('reasons.efficient.description'),
    },
    {
      heading: t('reasons.safety.title'),
      description: t('reasons.safety.description'),
    },
  ]

  return (
    <RootLayout className="software-development">
      <ServiceHeader
        service="software-development"
        title={t('title')}
        summary={t('intro')}
      />

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
            {/* <FadeIn className="mx-auto w-40 flex-none lg:w-64">
              <Image
                alt="Laravel Logo"
                src={laravelLogo}
                className="w-full object-cover"
              />
            </FadeIn> */}
            <FadeIn className="w-full overflow-hidden rounded-3xl ring-1 ring-neutral-950/5">
              <video
                src="/laravel-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full bg-theme-100 object-cover"
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
        video="/laravel-clip-v2.webm"
        invert
        items={services}
      />

      {/* <div className="mt-24 sm:mt-32 lg:mt-40">
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
                src={statamicLogo}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="object-cover"
              />
            </FadeIn>
          </div>
        </Container>
      </div> */}

      {/* <Container className="mt-20 text-2xl">
        <p>Add logos of platforms built on laravel for extra credibility</p>
      </Container> */}

      <CaseStudyCardsBlock
        title={t('case-studies.title')}
        // summary={t('HomePage.case-studies.summary')}
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

      <SectionIntro
        title={t('specialists.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('specialists.description')}</p>
      </SectionIntro>

      <ContactBlock cta="Let's build" />
    </RootLayout>
  )
}
