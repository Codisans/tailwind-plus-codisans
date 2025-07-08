import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import imageNicolasCanala from '@/images/team/nico-profile.jpg'
import imageSebastianStrand from '@/images/team/sebastian-profile.png'
import { RootLayout } from '@/components/RootLayout'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { TeamBlock } from '@/blocks/TeamBlock'
import { getTranslations } from 'next-intl/server'
import { Technologies } from '@/blocks/Technologies'

const team = [
  {
    name: 'Nicolas Canala',
    role: 'Co-Founder / Backend Lead',
    image: { src: imageNicolasCanala },
  },
  {
    name: 'Sebastian Strand',
    role: 'Co-Founder / Frontend Lead',
    image: { src: imageSebastianStrand },
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'AboutPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

export default async function About() {
  // let blogArticles = (await loadArticles()).slice(0, 2)
  const t = await getTranslations('AboutPage')

  const cultureValues = [
    {
      heading: t('culture.value-1.title'),
      description: t('culture.value-1.description'),
    },
    {
      heading: t('culture.value-2.title'),
      description: t('culture.value-2.description'),
    },
    {
      heading: t('culture.value-3.title'),
      description: t('culture.value-3.description'),
    },
  ]

  return (
    <RootLayout>
      <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
        <p>{t('intro')}</p>
      </PageIntro>

      <PromoListBlock
        eyebrow={t('culture.eyebrow')}
        title={t('culture.title')}
        description={t('culture.description')}
        items={cultureValues}
        invert={true}
      />

      <TeamBlock title="Team" team={team} />

      <Technologies title={t('technologies-title')} />
      <ContactSection />
    </RootLayout>
  )
}
