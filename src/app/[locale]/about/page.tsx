import { ContactBlock } from '@/blocks/ContactBlock'
import { PageIntro } from '@/components/PageIntro'
import imageNicolasCanala from '@/images/team/nico-profile.jpg'
import imageSebastianStrand from '@/images/team/sebastian-profile.png'
import { RootLayout } from '@/components/RootLayout'
import { PromoListBlock } from '@/blocks/PromoListBlock'
import { TeamBlock } from '@/blocks/TeamBlock'
import { getTranslations } from 'next-intl/server'
import { Technologies } from '@/blocks/Technologies'

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
  const tGlobal = await getTranslations('Global')

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

  const team = [
    {
      name: tGlobal('nicolas.name'),
      role: tGlobal('nicolas.role'),
      image: { src: imageNicolasCanala },
    },
    {
      name: tGlobal('sebastian.name'),
      role: tGlobal('sebastian.role'),
      image: { src: imageSebastianStrand },
    },
  ]

  const design = [
    {
      name: 'Alicia Swiderski',
      role: 'Founder',
      image: { src: imageNicolasCanala },
    },
    {
      name: 'Isabella Strand',
      role: 'Co-Founder',
      image: { src: imageSebastianStrand },
    },
  ]

  const marketing = [
    {
      name: tGlobal('nicolas.name'),
      role: tGlobal('nicolas.role'),
      image: { src: imageNicolasCanala },
    },
    {
      name: tGlobal('sebastian.name'),
      role: tGlobal('sebastian.role'),
      image: { src: imageSebastianStrand },
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

      <TeamBlock title={t('team.title')} team={team} />
      <TeamBlock title={'Digital Marketing Partners'} team={team} />
      <TeamBlock title={'Design Partners'} team={team} />

      <Technologies title={t('technologies-title')} />
      <ContactBlock />
    </RootLayout>
  )
}
