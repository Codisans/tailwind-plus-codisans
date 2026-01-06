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
  const t = await getTranslations('ContactPage')
  const caseStudies = await loadCaseStudies(locale, [
    'swid-studio',
    'felici-house',
    'sunday-chapter',
  ])

  return (
    <RootLayout>
      <PageIntro
        eyebrow={'Automation & AI'}
        title={'Intelligent Automation & AI Solutions'}
      >
        <p>
          We partner with you to identify high-value opportunities for
          automation. Our bespoke AI solutions remove bottlenecks and reduce
          costs, freeing your team to focus on innovation rather than
          administration.
        </p>
      </PageIntro>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <Container>
          <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 xl:gap-x-20">
            <FadeIn className="mx-auto w-40 flex-none lg:w-64">
              <Image
                alt="Laravel Logo"
                src={laravelLogo}
                className="w-full object-cover"
              />
            </FadeIn>

            <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none">
              <FadeIn className="max-w-md">
                <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                  {'Statamic CMS: Modern Content Management'}
                </h2>

                <div className="mt-6 space-y-6 text-base text-theme-600">
                  <p>
                    Statamic is a flexible content management system built on
                    Laravel. It makes creating and managing custom websites
                    simple, while giving developers full control under the hood.
                    Perfect for content-heavy sites that still need the power of
                    a custom build.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </div>

      <ListBlock
        title={'Why Statamic?'}
        // summary={t('reasons.summary')}
        image={chillDude}
        grayscale={false}
        // items={services}
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

      <CardsBlock
        title={'Some of our CMS Case Studies'}
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

      {/* <SectionIntro
        title={t('specialists.title')}
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>{t('specialists.description')}</p>
      </SectionIntro> */}

      <ContactBlock cta="Let's build" />
    </RootLayout>
  )
}
