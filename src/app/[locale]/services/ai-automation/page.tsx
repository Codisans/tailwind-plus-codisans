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
import { ServiceHeader } from '@/blocks/ServiceHeader'

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
    'nuestros-tiempos',
    'keai',
  ])

  return (
    <RootLayout className="ai-automation">
      <ServiceHeader
        service="ai-automation"
        title="Intelligent Automation & AI Solutions"
        summary="We partner with you to identify high-value opportunities for automation. Our bespoke AI solutions remove bottlenecks and reduce costs, freeing your team to focus on innovation rather than administration."
      />

      <PromoListBlock
        eyebrow={'Beyond Templates'}
        title={'How can AI help your business?'}
        description={
          'AI can automate repetitive tasks, improve decision-making, and enhance customer experiences. By leveraging AI, businesses can streamline operations, reduce costs, and gain a competitive edge.'
        }
        items={[
          {
            heading: 'Automate repetitive tasks & Reduce Costs',
            description:
              'AI can automate repetitive tasks, improve decision-making, and enhance customer experiences. By leveraging AI, businesses can streamline operations, reduce costs, and gain a competitive edge.',
          },
          {
            heading: 'Improve decision-making',
            description:
              'AI can automate repetitive tasks, improve decision-making, and enhance customer experiences. By leveraging AI, businesses can streamline operations, reduce costs, and gain a competitive edge.',
          },
          {
            heading: 'Enhance customer experiences',
            description:
              'AI can automate repetitive tasks, improve decision-making, and enhance customer experiences. By leveraging AI, businesses can streamline operations, reduce costs, and gain a competitive edge.',
          },
          {
            heading: 'Streamline operations',
            description:
              'AI can automate repetitive tasks, improve decision-making, and enhance customer experiences. By leveraging AI, businesses can streamline operations, reduce costs, and gain a competitive edge.',
          },
        ]}
        invert={true}
      />

      <CardsBlock
        title={'Some of our CMS Case Studies'}
        // summary={t('HomePage.case-studies.summary')}
        cards={caseStudies.map<Card>((caseStudy) => ({
          type: t('global.case-study'),
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
