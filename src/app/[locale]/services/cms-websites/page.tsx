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

  const t = await getTranslations({ locale, namespace: 'ContactPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}
export default async function Shopify() {
  const t = await getTranslations('ContactPage')

  return (
    <RootLayout>
      <PageIntro eyebrow={'CMS Websites'} title={'Bespoke Websites'}>
        <p>
          Take control of your narrative. We build custom Content Management
          Systems around your specific workflow, giving your marketing team the
          speed and flexibility off-the-shelf solutions can't match.
        </p>
      </PageIntro>
    </RootLayout>
  )
}
