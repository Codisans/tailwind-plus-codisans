import { ContactBlock } from '@/blocks/ContactBlock'
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
import { CardsBlock } from '@/blocks/CardsBlock'
import shopifyLogo from '@/images/logos/shopify-logotype.svg'
import laravelLogo from '@/images/logos/laravel-logotype.svg'
import statamicLogo from '@/images/logos/statamic-logotype.svg'
import geminiLogo from '@/images/logos/gemini-logotype.svg'
import aiLogo from '@/images/logos/ai-icon.svg'
import { StickyListBlock } from '@/blocks/StickyListBlock'

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

export default async function Services() {
  const t = await getTranslations('ProcessPage')
  return (
    <RootLayout>
      <PageIntro eyebrow={'Services'} title={'Experts in web solutions'}>
        <p>{t('intro')}</p>
      </PageIntro>

      <CardsBlock
        // title={t('HomePage.case-studies.title')}
        // summary={t('HomePage.case-studies.summary')}
        cards={[
          {
            type: 'E-Commerce',
            date: 'Shopify',
            title: 'Custom Storefronts',
            image: shopifyLogo,
            description: 'Need more than a standard e-commerce website?',
            link: '/services/e-commerce',
          },
          {
            type: 'Software Development',
            date: 'Laravel',
            title: 'Software Built to Grow',
            image: laravelLogo,
            description:
              'We build the digital foundation your business needs to grow. Our tailor-made applications are engineered for security and performance, delivering seamless experiences.',
            link: '/services/software-development',
          },
          {
            type: 'CMS Websites',
            date: 'Statamic',
            title: 'Bespoke Websites',
            image: statamicLogo,
            description:
              "Take control of your narrative. We build custom Content Management Systems around your specific workflow, giving your marketing team the speed and flexibility off-the-shelf solutions can't match.",
            link: '/services/cms-websites',
          },
          {
            type: 'Artificial Intelligence',
            date: '',
            title: 'Automation & AI Integrations',
            image: aiLogo,
            description:
              'We partner with you to identify high-value opportunities for automation. Our bespoke AI solutions remove bottlenecks and reduce costs, freeing your team to focus on innovation rather than administration.',
            link: '/services/ai-automation',
          },
        ]}
      />

      <StickyListBlock
        eyebrow={'Our Process'}
        title={'We continuously refine our processes to garantee results'}
        description={t('intro')}
        items={[
          {
            title: t('steps.discover.title'),
            description: t('steps.discover.description'),
            image: discoverImage,
          },
          {
            title: t('steps.define.title'),
            description: t('steps.define.description'),
            image: defineImage,
          },
          {
            title: t('steps.build.title'),
            description: t('steps.build.description'),
            image: buildImage,
          },
          {
            title: t('steps.deliver.title'),
            description: t('steps.deliver.description'),
            image: deliverImage,
          },
        ]}
      />

      <Values t={t} />

      <ContactBlock />
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
              grayscale={false}
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
