import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { Emails } from '@/components/Emails'
import { CardsBlock } from '@/blocks/CardsBlock'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { ListBlock } from '@/blocks/ListBlock'
import heroImage from '@/images/web-dev-landscape.webp'

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
export default async function Automation() {
  const t = await getTranslations('ContactPage')

  return (
    <RootLayout>
      <PageIntro
        eyebrow={'Automation & AI'}
        title={'Automation & AI Integrations'}
      >
        <p>
          We partner with you to identify high-value opportunities for
          automation. Our bespoke AI solutions remove bottlenecks and reduce
          costs, freeing your team to focus on innovation rather than
          administration.
        </p>
      </PageIntro>
    </RootLayout>
  )
}
