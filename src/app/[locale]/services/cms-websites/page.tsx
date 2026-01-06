import { RootLayout } from '@/components/RootLayout'
import { ListBlock } from '@/blocks/ListBlock'
import statamicLogo from '@/images/logos/statamic-logotype.svg'
import statamicScreenshot from '@/images/statamic-screenshot.png'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { getTranslations } from 'next-intl/server'
import { loadCaseStudies } from '@/lib/mdx'
import { ContactBlock } from '@/blocks/ContactBlock'
import Image from 'next/image'
import { ServiceHeader } from '@/blocks/ServiceHeader'
import {
  CaseStudyCard,
  CaseStudyCardsBlock,
} from '@/blocks/CaseStudyCardsBlock'

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
    <RootLayout className="custom-cms">
      <ServiceHeader
        service="custom-cms"
        title="Bespoke CMS Websites Tailored to your Brand."
        summary="We build our CMS websites with Statamic - a flexible content management system built on Laravel. It makes creating and managing custom websites simple, while giving developers full control under the hood. Perfect for content-heavy sites that still need the power of a custom build."
      />

      <div className="mt-16 sm:-mb-8 lg:mt-24">
        <Container>
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8 xl:gap-x-20">
            <FadeIn className="w-40 flex-none">
              <Image
                alt="Laravel Logo"
                src={statamicLogo}
                className="w-full object-cover"
              />
            </FadeIn>
            <FadeIn className="max-w-md max-sm:text-center">
              <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
                {'The answer to your frustrating CMS problems.'}
              </h2>
            </FadeIn>
          </div>
        </Container>
      </div>

      <ListBlock
        title={'Why choose Statamic?'}
        summary={
          'Statamic supports your entire team with an award-winning user experience, a kind-hearted community, and all the power of Laravel at your fingertips.'
        }
        image={statamicScreenshot}
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

      <CaseStudyCardsBlock
        title={'Some of our CMS Case Studies'}
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

      <ContactBlock cta="Let's build" />
    </RootLayout>
  )
}
