import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import discoverImage from '@/images/discovery.webp'
import defineImage from '@/images/define.webp'
import buildImage from '@/images/build.webp'
import deliverImage from '@/images/deliver.webp'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'ProcessPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function Process() {
  const t = await getTranslations('ProcessPage')
  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Section
          title={t('steps.discover.title')}
          image={{ src: discoverImage, shape: 1 }}
        >
          <div className="space-y-6 text-base text-theme-600">
            <p>{t('steps.discover.description')}</p>
          </div>
        </Section>
        <Section
          title={t('steps.define.title')}
          image={{ src: defineImage, shape: 1 }}
        >
          <div className="space-y-6 text-base text-theme-600">
            <p>{t('steps.define.description')}</p>
          </div>
        </Section>
        <Section
          title={t('steps.build.title')}
          image={{ src: buildImage, shape: 1 }}
        >
          <div className="space-y-6 text-base text-theme-600">
            <p>{t('steps.build.description')}</p>
          </div>
        </Section>
        <Section
          title={t('steps.deliver.title')}
          image={{ src: deliverImage, shape: 1 }}
        >
          <div className="space-y-6 text-base text-theme-600">
            <p>{t('steps.deliver.description')}</p>
          </div>
        </Section>
      </div>

      <Values t={t} />

      <ContactSection />
    </RootLayout>
  )
}

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-120 flex-none lg:w-130">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn className="max-w-md">
            <div
              className="font-display text-base font-semibold before:text-theme-300 before:content-['/_'] after:text-theme-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-theme-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Values({ t }: { t: any }) {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-theme-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-theme-100 stroke-theme-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow={t('values.eyebrow')} title={t('values.title')}>
        <p>{t('values.description')}</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title={t('values.value-1.title')}>
            {t('values.value-1.description')}
          </GridListItem>
          <GridListItem title={t('values.value-2.title')}>
            {t('values.value-2.description')}
          </GridListItem>
          <GridListItem title={t('values.value-3.title')}>
            {t('values.value-3.description')}
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
