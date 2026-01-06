import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { loadCaseStudy, loadCaseStudies } from '@/lib/mdx'
import CaseStudyWrapper from '../wrapper'

export async function generateStaticParams() {
  const locales = ['en', 'es']
  const params = []

  for (const locale of locales) {
    const caseStudies = await loadCaseStudies(locale)
    for (const caseStudy of caseStudies) {
      params.push({
        locale,
        slug: caseStudy.href.split('/').pop(),
      })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params
  const caseStudy = await loadCaseStudy(slug, locale)

  if (!caseStudy) {
    return {
      title: 'Case study not found',
    }
  }

  const { metadata } = caseStudy
  const title = `${metadata.title} | Codisans`
  const description = metadata.description
  const url = `https://codisans.com/${locale}/work/${slug}`
  const imageUrl = metadata.image?.src
    ? `https://codisans.com${metadata.image.src}`
    : 'https://codisans.com/og-image.jpg'

  return {
    title,
    description,
    keywords: [metadata.client, ...metadata.service, 'Codisans'],
    authors: [{ name: 'Codisans' }],
    creator: 'Codisans',
    publisher: 'Codisans',
    category: 'Technology',
    classification: 'Case Study',
    alternates: {
      canonical: url,
      languages: {
        en: `https://codisans.com/en/work/${slug}`,
        es: `https://codisans.com/es/work/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Codisans',
      type: 'article',
      publishedTime: metadata.date,
      authors: ['Codisans'],
      section: 'Case Studies',
      tags: [metadata.client, ...metadata.service, 'case study'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${metadata.client} case study - ${metadata.title}`,
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@codisans',
      site: '@codisans',
      images: [
        {
          url: imageUrl,
          alt: `${metadata.client} case study - ${metadata.title}`,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
    },
    other: {
      'article:author': 'Codisans',
      'article:publisher': 'https://codisans.com',
      'article:section': 'Case Studies',
      'article:tag': [metadata.client, ...metadata.service].join(','),
      'business:contact_data:locality': 'Santiago',
      'business:contact_data:region': 'Chile',
      'business:contact_data:country_name': 'Chile',
    },
  }
}

export default async function CaseStudyPost({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  const caseStudy = await loadCaseStudy(slug, locale)

  if (!caseStudy) {
    notFound()
  }

  const { default: MDXContent } = caseStudy.component

  const caseStudyEntry = {
    ...caseStudy.metadata,
    href: `/work/${slug}`,
    metadata: caseStudy.metadata,
    isLocalized: true,
  }

  return (
    <CaseStudyWrapper caseStudy={caseStudyEntry} locale={locale}>
      <MDXContent />
    </CaseStudyWrapper>
  )
}
