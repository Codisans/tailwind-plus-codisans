import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { getTranslations } from 'next-intl/server'
import { Emails } from '@/components/Emails'
import { ContactForm } from './ContactForm'

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
export default async function Contact() {
  const t = await getTranslations('ContactPage')

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <FadeIn className="lg:order-last">
            <ContactForm />
          </FadeIn>
          <FadeIn>
            <Emails />
            <Border className="mt-16 pt-16">
              <SocialMedia className="mt-6" />
            </Border>
          </FadeIn>
        </div>
      </Container>
    </RootLayout>
  )
}
