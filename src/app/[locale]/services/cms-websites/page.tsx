import { RootLayout } from '@/components/RootLayout'
import { ListBlock } from '@/blocks/ListBlock'
import laravelLogo from '@/images/logos/laravel-logotype.svg'
import statamicLogo from '@/images/logos/statamic-logotype.svg'
import chillDude from '@/images/web-dev-landscape.webp'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { getTranslations } from 'next-intl/server'
import { Card, CardsBlock } from '@/blocks/CardsBlock'
import { loadCaseStudies } from '@/lib/mdx'
import { SectionIntro } from '@/components/SectionIntro'
import { ContactBlock } from '@/blocks/ContactBlock'
import Image from 'next/image'
import { ServiceHeader } from '@/blocks/ServiceHeader'

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

export default async function Statamic({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('LaravelPage')
  const tGlobal = await getTranslations('Global')
  const caseStudies = await loadCaseStudies(locale, [
    'swid-studio',
    'felici-house',
    'sunday-chapter',
  ])

  return (
    <RootLayout>
      <ServiceHeader
        service="custom-cms"
        title="Statamic CMS: Modern Content Management"
        summary="Statamic is a flexible content management system built on Laravel. It makes creating and managing custom websites simple, while giving developers full control under the hood. Perfect for content-heavy sites that still need the power of a custom build."
      />

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
        items={[
          {
            heading: 'Editor Friendly UX',
            description:
              'Statamic is built on Laravel, giving you the power of a custom CMS without the complexity of a full-stack framework.',
          },
          {
            heading: 'Flexible & Scalable',
            description:
              'Statamic is built on Laravel, giving you the power of a custom CMS without the complexity of a full-stack framework.',
          },
          {
            heading: 'Powerful APIs & Ecosystem',
            description:
              'Statamic is built on Laravel, giving you the power of a custom CMS without the complexity of a full-stack framework.',
          },
        ]}
      />

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

      <ContactBlock cta="Let's build" />
    </RootLayout>
  )
}
